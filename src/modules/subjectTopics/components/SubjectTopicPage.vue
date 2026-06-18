<script setup lang="ts">
import { computed, ref } from 'vue';
import SubjectTopicCard from '@/modules/subjectTopics/components/SubjectTopicCard.vue';
import {
  readSubjectTopicProgress,
  saveBookmarkedTopicId,
  saveCompletedTopicIds
} from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';
import TeachingCodeBlock from '@/shared/components/TeachingCodeBlock.vue';
import type {
  LessonArticleContentBlock,
  LessonArticleOrderedListMarkerStyle,
  LessonArticleSection,
  LessonArticleTableBackgroundStyleToken,
  LessonArticleTableCellStyle,
  LessonArticleTableTextStyleToken,
  SubjectKey,
  SubjectTopic,
  SubjectTopicBlock,
  SubjectTopicListBlockKind
} from '@/modules/subjectTopics/types/subjectTopic';

const props = withDefaults(
  defineProps<{
    title: string;
    subjectKey: SubjectKey;
    testId: string;
    topics: readonly SubjectTopic[];
    openLastTopicByDefault?: boolean;
  }>(),
  {
    openLastTopicByDefault: import.meta.env.DEV && import.meta.env.MODE !== 'test'
  }
);

const initialProgress = readSubjectTopicProgress().subjects[props.subjectKey];
const completedTopicIds = ref<ReadonlySet<string>>(new Set(initialProgress.completedTopicIds));
const bookmarkedTopicId = ref<string | null>(initialProgress.bookmarkedTopicId);
const lessonSectionExpansionOverrides = ref<Record<string, boolean>>({});
const revealedLessonTableColumns = ref<Record<string, readonly number[]>>({});
const unfinishedTopics = computed(() => props.topics.filter((topic) => !completedTopicIds.value.has(topic.id)));
const finishedTopics = computed(() => props.topics.filter((topic) => completedTopicIds.value.has(topic.id)));
const lastRouteTopicId = computed(() => props.topics[props.topics.length - 1]?.id ?? null);

function updateTopicCompleted(topic: SubjectTopic, completed: boolean) {
  const nextCompletedTopicIds = new Set(completedTopicIds.value);

  if (completed) {
    nextCompletedTopicIds.add(topic.id);
  } else {
    nextCompletedTopicIds.delete(topic.id);
  }

  completedTopicIds.value = nextCompletedTopicIds;
  saveCompletedTopicIds(props.subjectKey, Array.from(nextCompletedTopicIds));

  if (completed && bookmarkedTopicId.value === topic.id) {
    bookmarkedTopicId.value = null;
    saveBookmarkedTopicId(props.subjectKey, null);
  }
}

function updateTopicBookmarked(topic: SubjectTopic, bookmarked: boolean) {
  bookmarkedTopicId.value = bookmarked ? topic.id : bookmarkedTopicId.value === topic.id ? null : bookmarkedTopicId.value;
  saveBookmarkedTopicId(props.subjectKey, bookmarkedTopicId.value);
}

function blockTestId(topic: SubjectTopic, block: SubjectTopicBlock, index: number): string {
  return `topic-block-${topic.id}-${block.kind}-${index}`;
}

function isTopicDefaultExpanded(topic: SubjectTopic): boolean {
  return props.openLastTopicByDefault && topic.id === lastRouteTopicId.value;
}

function lessonSectionKey(topic: SubjectTopic, section: LessonArticleSection): string {
  return `${topic.id}::${section.heading}`;
}

function isLessonSectionCollapsible(section: LessonArticleSection): boolean {
  return section.collapsible === true;
}

function lessonSectionClasses(section: LessonArticleSection): (string | Record<string, boolean>)[] {
  return [
    'subject-topic-lesson-section',
    {
      'subject-topic-lesson-section-collapsible': isLessonSectionCollapsible(section)
    }
  ];
}

function isLessonSectionExpanded(topic: SubjectTopic, section: LessonArticleSection): boolean {
  if (!isLessonSectionCollapsible(section)) {
    return true;
  }

  return lessonSectionExpansionOverrides.value[lessonSectionKey(topic, section)] ?? section.defaultExpanded === true;
}

function toggleLessonSection(topic: SubjectTopic, section: LessonArticleSection): void {
  if (!isLessonSectionCollapsible(section)) {
    return;
  }

  lessonSectionExpansionOverrides.value = {
    ...lessonSectionExpansionOverrides.value,
    [lessonSectionKey(topic, section)]: !isLessonSectionExpanded(topic, section)
  };
}

const listBlockLabels: Record<SubjectTopicListBlockKind, string> = {
  examOutline: '考試大綱',
  memoryPoints: '記憶重點',
  understanding: '理解說明',
  examFocus: '考點提醒',
  pitfall: '易錯提醒'
};

type OrderedListContentBlock = Extract<LessonArticleContentBlock, { kind: 'orderedList' }>;

const orderedListMarkerClasses: Record<LessonArticleOrderedListMarkerStyle, string> = {
  decimal: 'subject-topic-ordered-list-decimal',
  upperRoman: 'subject-topic-ordered-list-upper-roman',
  upperAlpha: 'subject-topic-ordered-list-upper-alpha'
};

function isListBlock(block: SubjectTopicBlock): block is Extract<SubjectTopicBlock, { kind: SubjectTopicListBlockKind }> {
  return block.kind in listBlockLabels;
}

function orderedListMarkerClass(block: OrderedListContentBlock): string {
  return orderedListMarkerClasses[block.markerStyle ?? 'decimal'];
}

type TableContentBlock = Extract<LessonArticleContentBlock, { kind: 'table' }>;

const tableTextStyleClasses: Record<LessonArticleTableTextStyleToken, string> = {
  defaultText: 'subject-topic-table-cell-default-text',
  emphasisText: 'subject-topic-table-cell-emphasis-text'
};

const tableBackgroundStyleClasses: Record<LessonArticleTableBackgroundStyleToken, string> = {
  emphasisBackground: 'subject-topic-table-cell-emphasis-background'
};

function isTableTextStyleToken(value: unknown): value is LessonArticleTableTextStyleToken {
  return typeof value === 'string' && value in tableTextStyleClasses;
}

function isTableBackgroundStyleToken(value: unknown): value is LessonArticleTableBackgroundStyleToken {
  return typeof value === 'string' && value in tableBackgroundStyleClasses;
}

function mergeTableCellStyle(...styles: readonly (LessonArticleTableCellStyle | undefined)[]): LessonArticleTableCellStyle {
  return styles.reduce<LessonArticleTableCellStyle>((mergedStyle, style) => ({ ...mergedStyle, ...style }), {});
}

function tableCellStyleClasses(block: TableContentBlock, rowIndex: number, cellIndex: number): string[] {
  const style = mergeTableCellStyle(
    block.rowStyles?.[rowIndex],
    block.columnStyles?.[cellIndex],
    block.cellStyles?.[`${rowIndex}:${cellIndex}`]
  );
  const classes: string[] = [];

  if (isTableTextStyleToken(style.text)) {
    classes.push(tableTextStyleClasses[style.text]);
  }

  if (isTableBackgroundStyleToken(style.background)) {
    classes.push(tableBackgroundStyleClasses[style.background]);
  }

  return classes;
}

function lessonTableKey(topic: SubjectTopic, section: LessonArticleSection, tablePath: string): string {
  return `${topic.id}::${section.heading}::${tablePath}`;
}

function revealableColumnIndexes(block: TableContentBlock): readonly number[] {
  return Array.from(
    new Set(
      (block.revealableColumnIndexes ?? []).filter(
        (columnIndex) => Number.isInteger(columnIndex) && columnIndex >= 0 && columnIndex < block.headers.length
      )
    )
  );
}

function isTableColumnRevealable(block: TableContentBlock, columnIndex: number): boolean {
  return revealableColumnIndexes(block).includes(columnIndex);
}

function isLessonTableColumnRevealed(tableKey: string, columnIndex: number): boolean {
  return revealedLessonTableColumns.value[tableKey]?.includes(columnIndex) ?? false;
}

function isLessonTableCellVisible(tableKey: string, block: TableContentBlock, columnIndex: number): boolean {
  return !isTableColumnRevealable(block, columnIndex) || isLessonTableColumnRevealed(tableKey, columnIndex);
}

function lessonTableCellText(tableKey: string, block: TableContentBlock, cell: string, columnIndex: number): string {
  return isLessonTableCellVisible(tableKey, block, columnIndex) ? cell : '';
}

function toggleLessonTableColumn(tableKey: string, block: TableContentBlock, columnIndex: number): void {
  if (!isTableColumnRevealable(block, columnIndex)) {
    return;
  }

  const nextRevealedColumns = new Set(revealedLessonTableColumns.value[tableKey] ?? []);

  if (nextRevealedColumns.has(columnIndex)) {
    nextRevealedColumns.delete(columnIndex);
  } else {
    nextRevealedColumns.add(columnIndex);
  }

  revealedLessonTableColumns.value = {
    ...revealedLessonTableColumns.value,
    [tableKey]: Array.from(nextRevealedColumns).sort((left, right) => left - right)
  };
}
</script>

<template>
  <section :data-testid="props.testId" class="subject-page">
    <header class="subject-page-header">
      <h1>{{ props.title }}</h1>
    </header>

    <p v-if="props.topics.length === 0" data-testid="subject-topic-empty-state" class="subject-topic-empty-state">
      {{ props.title }}尚未建立主題內容。
    </p>

    <div v-else :data-testid="`subject-topic-list-${props.subjectKey}`" class="subject-topic-list">
      <section :data-testid="`subject-topic-unfinished-${props.subjectKey}`" class="subject-topic-zone">
        <h2>未完成</h2>
        <p v-if="unfinishedTopics.length === 0" class="subject-topic-zone-empty">未完成主題已清空。</p>
        <SubjectTopicCard
          v-for="topic in unfinishedTopics"
          :key="topic.id"
          :topic="topic"
          :completed="false"
          :bookmarked="bookmarkedTopicId === topic.id"
          :show-bookmark="true"
          :default-expanded="isTopicDefaultExpanded(topic)"
          @update:completed="updateTopicCompleted(topic, $event)"
          @update:bookmarked="updateTopicBookmarked(topic, $event)"
        >
          <div class="subject-topic-blocks">
            <template v-for="(block, index) in topic.blocks" :key="blockTestId(topic, block, index)">
              <p v-if="block.kind === 'paragraph'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-paragraph subject-topic-text">
                {{ block.text }}
              </p>
              <section v-else-if="isListBlock(block)" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>{{ listBlockLabels[block.kind] }}</h3>
                <ul>
                  <li v-for="item in block.items" :key="item" class="subject-topic-text">{{ item }}</li>
                </ul>
              </section>
              <article
                v-else-if="block.kind === 'lessonArticle'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-lesson"
              >
                <p v-for="leadLine in block.lead" :key="leadLine" class="subject-topic-paragraph subject-topic-text">{{ leadLine }}</p>
                <section v-for="section in block.sections" :key="section.heading" :class="lessonSectionClasses(section)">
                  <h3 v-if="!isLessonSectionCollapsible(section)">
                    <span v-if="section.sourceLabel" class="subject-topic-source-label">{{ section.sourceLabel }}</span>
                    {{ section.heading }}
                  </h3>
                  <h3 v-else>
                    <button
                      type="button"
                      class="subject-topic-lesson-section-toggle"
                      :aria-expanded="isLessonSectionExpanded(topic, section)"
                      @click="toggleLessonSection(topic, section)"
                    >
                      <span>
                        <span v-if="section.sourceLabel" class="subject-topic-source-label">{{ section.sourceLabel }}</span>
                        {{ section.heading }}
                      </span>
                    </button>
                  </h3>
                  <template v-if="isLessonSectionExpanded(topic, section)">
                    <template
                      v-for="(contentBlock, contentBlockIndex) in section.blocks"
                      :key="`${section.heading}-${contentBlock.kind}-${JSON.stringify(contentBlock)}`"
                    >
                      <p v-if="contentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">{{ contentBlock.text }}</p>
                      <ul v-else-if="contentBlock.kind === 'bulletList'">
                        <li v-for="item in contentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                      </ul>
                      <ol
                        v-else-if="contentBlock.kind === 'orderedList'"
                        :class="orderedListMarkerClass(contentBlock)"
                      >
                        <li v-for="item in contentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                      </ol>
                      <div v-else-if="contentBlock.kind === 'table'" class="subject-topic-table-wrap">
                        <table class="subject-topic-table">
                          <thead>
                            <tr>
                              <th v-for="(header, headerIndex) in contentBlock.headers" :key="header" class="subject-topic-text">
                                <button
                                  v-if="isTableColumnRevealable(contentBlock, headerIndex)"
                                  type="button"
                                  class="subject-topic-table-column-toggle"
                                  :aria-expanded="isLessonTableColumnRevealed(lessonTableKey(topic, section, 'block-' + contentBlockIndex), headerIndex)"
                                  @click="toggleLessonTableColumn(lessonTableKey(topic, section, 'block-' + contentBlockIndex), contentBlock, headerIndex)"
                                >
                                  {{ header }}
                                </button>
                                <template v-else>{{ header }}</template>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(row, rowIndex) in contentBlock.rows" :key="rowIndex">
                              <td
                                v-for="(cell, cellIndex) in row"
                                :key="`${rowIndex}-${cellIndex}`"
                                :class="['subject-topic-text', tableCellStyleClasses(contentBlock, rowIndex, cellIndex)]"
                              >
                                {{ lessonTableCellText(lessonTableKey(topic, section, 'block-' + contentBlockIndex), contentBlock, cell, cellIndex) }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-else-if="contentBlock.kind === 'indentedGroup'" class="subject-topic-lesson-indent-group">
                        <template
                          v-for="(nestedContentBlock, nestedContentBlockIndex) in contentBlock.blocks"
                          :key="`${section.heading}-indent-${nestedContentBlock.kind}-${JSON.stringify(nestedContentBlock)}`"
                        >
                          <p v-if="nestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                            {{ nestedContentBlock.text }}
                          </p>
                          <ul v-else-if="nestedContentBlock.kind === 'bulletList'">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ul>
                          <ol v-else-if="nestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(nestedContentBlock)">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ol>
                          <div v-else-if="nestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                            <table class="subject-topic-table">
                              <thead>
                                <tr>
                                  <th v-for="(header, headerIndex) in nestedContentBlock.headers" :key="header" class="subject-topic-text">
                                    <button
                                      v-if="isTableColumnRevealable(nestedContentBlock, headerIndex)"
                                      type="button"
                                      class="subject-topic-table-column-toggle"
                                      :aria-expanded="
                                        isLessonTableColumnRevealed(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                          headerIndex
                                        )
                                      "
                                      @click="
                                        toggleLessonTableColumn(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                          nestedContentBlock,
                                          headerIndex
                                        )
                                      "
                                    >
                                      {{ header }}
                                    </button>
                                    <template v-else>{{ header }}</template>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(row, rowIndex) in nestedContentBlock.rows" :key="rowIndex">
                                  <td
                                    v-for="(cell, cellIndex) in row"
                                    :key="`${rowIndex}-${cellIndex}`"
                                    :class="['subject-topic-text', tableCellStyleClasses(nestedContentBlock, rowIndex, cellIndex)]"
                                  >
                                    {{
                                      lessonTableCellText(
                                        lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                        nestedContentBlock,
                                        cell,
                                        cellIndex
                                      )
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div v-else-if="nestedContentBlock.kind === 'indentedGroup'" class="subject-topic-lesson-indent-group">
                            <template
                              v-for="(deepNestedContentBlock, deepNestedContentBlockIndex) in nestedContentBlock.blocks"
                              :key="`${section.heading}-indent-deep-${deepNestedContentBlock.kind}-${JSON.stringify(deepNestedContentBlock)}`"
                            >
                              <p v-if="deepNestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                                {{ deepNestedContentBlock.text }}
                              </p>
                              <ul v-else-if="deepNestedContentBlock.kind === 'bulletList'">
                                <li v-for="item in deepNestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                              </ul>
                              <ol v-else-if="deepNestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(deepNestedContentBlock)">
                                <li v-for="item in deepNestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                              </ol>
                              <div v-else-if="deepNestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                                <table class="subject-topic-table">
                                  <thead>
                                    <tr>
                                      <th v-for="(header, headerIndex) in deepNestedContentBlock.headers" :key="header" class="subject-topic-text">
                                        <button
                                          v-if="isTableColumnRevealable(deepNestedContentBlock, headerIndex)"
                                          type="button"
                                          class="subject-topic-table-column-toggle"
                                          :aria-expanded="
                                            isLessonTableColumnRevealed(
                                              lessonTableKey(
                                                topic,
                                                section,
                                                'block-' +
                                                  contentBlockIndex +
                                                  '-indent-' +
                                                  nestedContentBlockIndex +
                                                  '-deep-' +
                                                  deepNestedContentBlockIndex
                                              ),
                                              headerIndex
                                            )
                                          "
                                          @click="
                                            toggleLessonTableColumn(
                                              lessonTableKey(
                                                topic,
                                                section,
                                                'block-' +
                                                  contentBlockIndex +
                                                  '-indent-' +
                                                  nestedContentBlockIndex +
                                                  '-deep-' +
                                                  deepNestedContentBlockIndex
                                              ),
                                              deepNestedContentBlock,
                                              headerIndex
                                            )
                                          "
                                        >
                                          {{ header }}
                                        </button>
                                        <template v-else>{{ header }}</template>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(row, rowIndex) in deepNestedContentBlock.rows" :key="rowIndex">
                                      <td
                                        v-for="(cell, cellIndex) in row"
                                        :key="`${rowIndex}-${cellIndex}`"
                                        :class="['subject-topic-text', tableCellStyleClasses(deepNestedContentBlock, rowIndex, cellIndex)]"
                                      >
                                        {{
                                          lessonTableCellText(
                                            lessonTableKey(
                                              topic,
                                              section,
                                              'block-' +
                                                contentBlockIndex +
                                                '-indent-' +
                                                nestedContentBlockIndex +
                                                '-deep-' +
                                                deepNestedContentBlockIndex
                                            ),
                                            deepNestedContentBlock,
                                            cell,
                                            cellIndex
                                          )
                                        }}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </template>
                          </div>
                        </template>
                      </div>
                      <section v-else-if="contentBlock.kind === 'subsection'" class="subject-topic-lesson-subsection">
                        <h4>{{ contentBlock.heading }}</h4>
                        <template
                          v-for="(nestedContentBlock, nestedContentBlockIndex) in contentBlock.blocks"
                          :key="`${section.heading}-${contentBlock.heading}-${nestedContentBlock.kind}-${JSON.stringify(nestedContentBlock)}`"
                        >
                          <p v-if="nestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                            {{ nestedContentBlock.text }}
                          </p>
                          <ul v-else-if="nestedContentBlock.kind === 'bulletList'">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ul>
                          <ol v-else-if="nestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(nestedContentBlock)">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ol>
                          <div v-else-if="nestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                            <table class="subject-topic-table">
                              <thead>
                                <tr>
                                  <th v-for="(header, headerIndex) in nestedContentBlock.headers" :key="header" class="subject-topic-text">
                                    <button
                                      v-if="isTableColumnRevealable(nestedContentBlock, headerIndex)"
                                      type="button"
                                      class="subject-topic-table-column-toggle"
                                      :aria-expanded="
                                        isLessonTableColumnRevealed(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                          headerIndex
                                        )
                                      "
                                      @click="
                                        toggleLessonTableColumn(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                          nestedContentBlock,
                                          headerIndex
                                        )
                                      "
                                    >
                                      {{ header }}
                                    </button>
                                    <template v-else>{{ header }}</template>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(row, rowIndex) in nestedContentBlock.rows" :key="rowIndex">
                                  <td
                                    v-for="(cell, cellIndex) in row"
                                    :key="`${rowIndex}-${cellIndex}`"
                                    :class="['subject-topic-text', tableCellStyleClasses(nestedContentBlock, rowIndex, cellIndex)]"
                                  >
                                    {{
                                      lessonTableCellText(
                                        lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                        nestedContentBlock,
                                        cell,
                                        cellIndex
                                      )
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </template>
                      </section>
                    </template>
                  </template>
                </section>
              </article>
              <section
                v-else-if="block.kind === 'sourceNote'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-source-note"
              >
                <h3>來源註記</h3>
                <p class="subject-topic-text">{{ block.sourceSummary }}</p>
                <ul>
                  <li v-for="sourceFile in block.sourceFiles" :key="sourceFile" class="subject-topic-text">{{ sourceFile }}</li>
                </ul>
              </section>
              <section v-else-if="block.kind === 'termList'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>專有名詞</h3>
                <dl class="subject-topic-term-list">
                  <template v-for="term in block.terms" :key="`${term.zh}-${term.en}`">
                    <dt>{{ term.zh }}({{ term.en }})</dt>
                    <dd>{{ term.en }}</dd>
                  </template>
                </dl>
              </section>
              <section v-else-if="block.kind === 'workedExample'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>具體例子</h3>
                <p class="subject-topic-text">{{ block.problem }}</p>
                <ol>
                  <li v-for="step in block.steps" :key="step" class="subject-topic-text">{{ step }}</li>
                </ol>
                <p v-if="block.result" class="subject-topic-text">{{ block.result }}</p>
              </section>
              <section
                v-else-if="block.kind === 'complexityTable'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block"
              >
                <h3>複雜度與穩定性</h3>
                <div class="subject-topic-table-wrap">
                  <table class="subject-topic-table">
                    <thead>
                      <tr>
                        <th>演算法</th>
                        <th>Best</th>
                        <th>Average</th>
                        <th>Worst</th>
                        <th>Stability</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in block.rows" :key="`${row.algorithmNameZh}-${row.algorithmNameEn}`">
                        <td class="subject-topic-text">{{ row.algorithmNameZh }}({{ row.algorithmNameEn }})</td>
                        <td class="subject-topic-text">{{ row.bestTime }}</td>
                        <td class="subject-topic-text">{{ row.averageTime }}</td>
                        <td class="subject-topic-text">{{ row.worstTime }}</td>
                        <td class="subject-topic-text">{{ row.stability }}</td>
                        <td class="subject-topic-text">{{ row.notes }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <TeachingCodeBlock
                v-else-if="block.kind === 'teachingCode'"
                :language="block.language"
                :code="block.code"
                :title="block.title"
                :description="block.description"
              />
            </template>
          </div>
        </SubjectTopicCard>
      </section>

      <section :data-testid="`subject-topic-finished-${props.subjectKey}`" class="subject-topic-zone">
        <h2>已完成</h2>
        <p v-if="finishedTopics.length === 0" class="subject-topic-zone-empty">尚未完成任何主題。</p>
        <SubjectTopicCard
          v-for="topic in finishedTopics"
          :key="topic.id"
          :topic="topic"
          :completed="true"
          :bookmarked="false"
          :show-bookmark="false"
          :default-expanded="isTopicDefaultExpanded(topic)"
          @update:completed="updateTopicCompleted(topic, $event)"
          @update:bookmarked="updateTopicBookmarked(topic, $event)"
        >
          <div class="subject-topic-blocks">
            <template v-for="(block, index) in topic.blocks" :key="blockTestId(topic, block, index)">
              <p v-if="block.kind === 'paragraph'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-paragraph subject-topic-text">
                {{ block.text }}
              </p>
              <section v-else-if="isListBlock(block)" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>{{ listBlockLabels[block.kind] }}</h3>
                <ul>
                  <li v-for="item in block.items" :key="item" class="subject-topic-text">{{ item }}</li>
                </ul>
              </section>
              <article
                v-else-if="block.kind === 'lessonArticle'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-lesson"
              >
                <p v-for="leadLine in block.lead" :key="leadLine" class="subject-topic-paragraph subject-topic-text">{{ leadLine }}</p>
                <section v-for="section in block.sections" :key="section.heading" :class="lessonSectionClasses(section)">
                  <h3 v-if="!isLessonSectionCollapsible(section)">
                    <span v-if="section.sourceLabel" class="subject-topic-source-label">{{ section.sourceLabel }}</span>
                    {{ section.heading }}
                  </h3>
                  <h3 v-else>
                    <button
                      type="button"
                      class="subject-topic-lesson-section-toggle"
                      :aria-expanded="isLessonSectionExpanded(topic, section)"
                      @click="toggleLessonSection(topic, section)"
                    >
                      <span>
                        <span v-if="section.sourceLabel" class="subject-topic-source-label">{{ section.sourceLabel }}</span>
                        {{ section.heading }}
                      </span>
                    </button>
                  </h3>
                  <template v-if="isLessonSectionExpanded(topic, section)">
                    <template
                      v-for="(contentBlock, contentBlockIndex) in section.blocks"
                      :key="`${section.heading}-${contentBlock.kind}-${JSON.stringify(contentBlock)}`"
                    >
                      <p v-if="contentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">{{ contentBlock.text }}</p>
                      <ul v-else-if="contentBlock.kind === 'bulletList'">
                        <li v-for="item in contentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                      </ul>
                      <ol
                        v-else-if="contentBlock.kind === 'orderedList'"
                        :class="orderedListMarkerClass(contentBlock)"
                      >
                        <li v-for="item in contentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                      </ol>
                      <div v-else-if="contentBlock.kind === 'table'" class="subject-topic-table-wrap">
                        <table class="subject-topic-table">
                          <thead>
                            <tr>
                              <th v-for="(header, headerIndex) in contentBlock.headers" :key="header" class="subject-topic-text">
                                <button
                                  v-if="isTableColumnRevealable(contentBlock, headerIndex)"
                                  type="button"
                                  class="subject-topic-table-column-toggle"
                                  :aria-expanded="isLessonTableColumnRevealed(lessonTableKey(topic, section, 'block-' + contentBlockIndex), headerIndex)"
                                  @click="toggleLessonTableColumn(lessonTableKey(topic, section, 'block-' + contentBlockIndex), contentBlock, headerIndex)"
                                >
                                  {{ header }}
                                </button>
                                <template v-else>{{ header }}</template>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(row, rowIndex) in contentBlock.rows" :key="rowIndex">
                              <td
                                v-for="(cell, cellIndex) in row"
                                :key="`${rowIndex}-${cellIndex}`"
                                :class="['subject-topic-text', tableCellStyleClasses(contentBlock, rowIndex, cellIndex)]"
                              >
                                {{ lessonTableCellText(lessonTableKey(topic, section, 'block-' + contentBlockIndex), contentBlock, cell, cellIndex) }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-else-if="contentBlock.kind === 'indentedGroup'" class="subject-topic-lesson-indent-group">
                        <template
                          v-for="(nestedContentBlock, nestedContentBlockIndex) in contentBlock.blocks"
                          :key="`${section.heading}-indent-${nestedContentBlock.kind}-${JSON.stringify(nestedContentBlock)}`"
                        >
                          <p v-if="nestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                            {{ nestedContentBlock.text }}
                          </p>
                          <ul v-else-if="nestedContentBlock.kind === 'bulletList'">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ul>
                          <ol v-else-if="nestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(nestedContentBlock)">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ol>
                          <div v-else-if="nestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                            <table class="subject-topic-table">
                              <thead>
                                <tr>
                                  <th v-for="(header, headerIndex) in nestedContentBlock.headers" :key="header" class="subject-topic-text">
                                    <button
                                      v-if="isTableColumnRevealable(nestedContentBlock, headerIndex)"
                                      type="button"
                                      class="subject-topic-table-column-toggle"
                                      :aria-expanded="
                                        isLessonTableColumnRevealed(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                          headerIndex
                                        )
                                      "
                                      @click="
                                        toggleLessonTableColumn(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                          nestedContentBlock,
                                          headerIndex
                                        )
                                      "
                                    >
                                      {{ header }}
                                    </button>
                                    <template v-else>{{ header }}</template>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(row, rowIndex) in nestedContentBlock.rows" :key="rowIndex">
                                  <td
                                    v-for="(cell, cellIndex) in row"
                                    :key="`${rowIndex}-${cellIndex}`"
                                    :class="['subject-topic-text', tableCellStyleClasses(nestedContentBlock, rowIndex, cellIndex)]"
                                  >
                                    {{
                                      lessonTableCellText(
                                        lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-indent-' + nestedContentBlockIndex),
                                        nestedContentBlock,
                                        cell,
                                        cellIndex
                                      )
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div v-else-if="nestedContentBlock.kind === 'indentedGroup'" class="subject-topic-lesson-indent-group">
                            <template
                              v-for="(deepNestedContentBlock, deepNestedContentBlockIndex) in nestedContentBlock.blocks"
                              :key="`${section.heading}-indent-deep-${deepNestedContentBlock.kind}-${JSON.stringify(deepNestedContentBlock)}`"
                            >
                              <p v-if="deepNestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                                {{ deepNestedContentBlock.text }}
                              </p>
                              <ul v-else-if="deepNestedContentBlock.kind === 'bulletList'">
                                <li v-for="item in deepNestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                              </ul>
                              <ol v-else-if="deepNestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(deepNestedContentBlock)">
                                <li v-for="item in deepNestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                              </ol>
                              <div v-else-if="deepNestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                                <table class="subject-topic-table">
                                  <thead>
                                    <tr>
                                      <th v-for="(header, headerIndex) in deepNestedContentBlock.headers" :key="header" class="subject-topic-text">
                                        <button
                                          v-if="isTableColumnRevealable(deepNestedContentBlock, headerIndex)"
                                          type="button"
                                          class="subject-topic-table-column-toggle"
                                          :aria-expanded="
                                            isLessonTableColumnRevealed(
                                              lessonTableKey(
                                                topic,
                                                section,
                                                'block-' +
                                                  contentBlockIndex +
                                                  '-indent-' +
                                                  nestedContentBlockIndex +
                                                  '-deep-' +
                                                  deepNestedContentBlockIndex
                                              ),
                                              headerIndex
                                            )
                                          "
                                          @click="
                                            toggleLessonTableColumn(
                                              lessonTableKey(
                                                topic,
                                                section,
                                                'block-' +
                                                  contentBlockIndex +
                                                  '-indent-' +
                                                  nestedContentBlockIndex +
                                                  '-deep-' +
                                                  deepNestedContentBlockIndex
                                              ),
                                              deepNestedContentBlock,
                                              headerIndex
                                            )
                                          "
                                        >
                                          {{ header }}
                                        </button>
                                        <template v-else>{{ header }}</template>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(row, rowIndex) in deepNestedContentBlock.rows" :key="rowIndex">
                                      <td
                                        v-for="(cell, cellIndex) in row"
                                        :key="`${rowIndex}-${cellIndex}`"
                                        :class="['subject-topic-text', tableCellStyleClasses(deepNestedContentBlock, rowIndex, cellIndex)]"
                                      >
                                        {{
                                          lessonTableCellText(
                                            lessonTableKey(
                                              topic,
                                              section,
                                              'block-' +
                                                contentBlockIndex +
                                                '-indent-' +
                                                nestedContentBlockIndex +
                                                '-deep-' +
                                                deepNestedContentBlockIndex
                                            ),
                                            deepNestedContentBlock,
                                            cell,
                                            cellIndex
                                          )
                                        }}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </template>
                          </div>
                        </template>
                      </div>
                      <section v-else-if="contentBlock.kind === 'subsection'" class="subject-topic-lesson-subsection">
                        <h4>{{ contentBlock.heading }}</h4>
                        <template
                          v-for="(nestedContentBlock, nestedContentBlockIndex) in contentBlock.blocks"
                          :key="`${section.heading}-${contentBlock.heading}-${nestedContentBlock.kind}-${JSON.stringify(nestedContentBlock)}`"
                        >
                          <p v-if="nestedContentBlock.kind === 'paragraph'" class="subject-topic-paragraph subject-topic-text">
                            {{ nestedContentBlock.text }}
                          </p>
                          <ul v-else-if="nestedContentBlock.kind === 'bulletList'">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ul>
                          <ol v-else-if="nestedContentBlock.kind === 'orderedList'" :class="orderedListMarkerClass(nestedContentBlock)">
                            <li v-for="item in nestedContentBlock.items" :key="item" class="subject-topic-text">{{ item }}</li>
                          </ol>
                          <div v-else-if="nestedContentBlock.kind === 'table'" class="subject-topic-table-wrap">
                            <table class="subject-topic-table">
                              <thead>
                                <tr>
                                  <th v-for="(header, headerIndex) in nestedContentBlock.headers" :key="header" class="subject-topic-text">
                                    <button
                                      v-if="isTableColumnRevealable(nestedContentBlock, headerIndex)"
                                      type="button"
                                      class="subject-topic-table-column-toggle"
                                      :aria-expanded="
                                        isLessonTableColumnRevealed(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                          headerIndex
                                        )
                                      "
                                      @click="
                                        toggleLessonTableColumn(
                                          lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                          nestedContentBlock,
                                          headerIndex
                                        )
                                      "
                                    >
                                      {{ header }}
                                    </button>
                                    <template v-else>{{ header }}</template>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(row, rowIndex) in nestedContentBlock.rows" :key="rowIndex">
                                  <td
                                    v-for="(cell, cellIndex) in row"
                                    :key="`${rowIndex}-${cellIndex}`"
                                    :class="['subject-topic-text', tableCellStyleClasses(nestedContentBlock, rowIndex, cellIndex)]"
                                  >
                                    {{
                                      lessonTableCellText(
                                        lessonTableKey(topic, section, 'block-' + contentBlockIndex + '-subsection-' + nestedContentBlockIndex),
                                        nestedContentBlock,
                                        cell,
                                        cellIndex
                                      )
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </template>
                      </section>
                    </template>
                  </template>
                </section>
              </article>
              <section
                v-else-if="block.kind === 'sourceNote'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-source-note"
              >
                <h3>來源註記</h3>
                <p class="subject-topic-text">{{ block.sourceSummary }}</p>
                <ul>
                  <li v-for="sourceFile in block.sourceFiles" :key="sourceFile" class="subject-topic-text">{{ sourceFile }}</li>
                </ul>
              </section>
              <section v-else-if="block.kind === 'termList'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>專有名詞</h3>
                <dl class="subject-topic-term-list">
                  <template v-for="term in block.terms" :key="`${term.zh}-${term.en}`">
                    <dt>{{ term.zh }}({{ term.en }})</dt>
                    <dd>{{ term.en }}</dd>
                  </template>
                </dl>
              </section>
              <section v-else-if="block.kind === 'workedExample'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>具體例子</h3>
                <p class="subject-topic-text">{{ block.problem }}</p>
                <ol>
                  <li v-for="step in block.steps" :key="step" class="subject-topic-text">{{ step }}</li>
                </ol>
                <p v-if="block.result" class="subject-topic-text">{{ block.result }}</p>
              </section>
              <section
                v-else-if="block.kind === 'complexityTable'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block"
              >
                <h3>複雜度與穩定性</h3>
                <div class="subject-topic-table-wrap">
                  <table class="subject-topic-table">
                    <thead>
                      <tr>
                        <th>演算法</th>
                        <th>Best</th>
                        <th>Average</th>
                        <th>Worst</th>
                        <th>Stability</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in block.rows" :key="`${row.algorithmNameZh}-${row.algorithmNameEn}`">
                        <td class="subject-topic-text">{{ row.algorithmNameZh }}({{ row.algorithmNameEn }})</td>
                        <td class="subject-topic-text">{{ row.bestTime }}</td>
                        <td class="subject-topic-text">{{ row.averageTime }}</td>
                        <td class="subject-topic-text">{{ row.worstTime }}</td>
                        <td class="subject-topic-text">{{ row.stability }}</td>
                        <td class="subject-topic-text">{{ row.notes }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <TeachingCodeBlock
                v-else-if="block.kind === 'teachingCode'"
                :language="block.language"
                :code="block.code"
                :title="block.title"
                :description="block.description"
              />
            </template>
          </div>
        </SubjectTopicCard>
      </section>
    </div>
  </section>
</template>
