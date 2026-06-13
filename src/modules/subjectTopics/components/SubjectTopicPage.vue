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
  SubjectKey,
  SubjectTopic,
  SubjectTopicBlock,
  SubjectTopicListBlockKind
} from '@/modules/subjectTopics/types/subjectTopic';

const props = defineProps<{
  title: string;
  subjectKey: SubjectKey;
  testId: string;
  topics: readonly SubjectTopic[];
}>();

const initialProgress = readSubjectTopicProgress().subjects[props.subjectKey];
const completedTopicIds = ref<ReadonlySet<string>>(new Set(initialProgress.completedTopicIds));
const bookmarkedTopicId = ref<string | null>(initialProgress.bookmarkedTopicId);
const unfinishedTopics = computed(() => props.topics.filter((topic) => !completedTopicIds.value.has(topic.id)));
const finishedTopics = computed(() => props.topics.filter((topic) => completedTopicIds.value.has(topic.id)));

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

const listBlockLabels: Record<SubjectTopicListBlockKind, string> = {
  examOutline: '考試大綱',
  memoryPoints: '記憶重點',
  understanding: '理解說明',
  examFocus: '考點提醒',
  pitfall: '易錯提醒'
};

function isListBlock(block: SubjectTopicBlock): block is Extract<SubjectTopicBlock, { kind: SubjectTopicListBlockKind }> {
  return block.kind in listBlockLabels;
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
          @update:completed="updateTopicCompleted(topic, $event)"
          @update:bookmarked="updateTopicBookmarked(topic, $event)"
        >
          <div class="subject-topic-blocks">
            <template v-for="(block, index) in topic.blocks" :key="blockTestId(topic, block, index)">
              <p v-if="block.kind === 'paragraph'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-paragraph">
                {{ block.text }}
              </p>
              <section v-else-if="isListBlock(block)" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>{{ listBlockLabels[block.kind] }}</h3>
                <ul>
                  <li v-for="item in block.items" :key="item">{{ item }}</li>
                </ul>
              </section>
              <section
                v-else-if="block.kind === 'sourceNote'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-source-note"
              >
                <h3>來源註記</h3>
                <p>{{ block.sourceSummary }}</p>
                <ul>
                  <li v-for="sourceFile in block.sourceFiles" :key="sourceFile">{{ sourceFile }}</li>
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
                <p>{{ block.problem }}</p>
                <ol>
                  <li v-for="step in block.steps" :key="step">{{ step }}</li>
                </ol>
                <p v-if="block.result">{{ block.result }}</p>
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
                        <td>{{ row.algorithmNameZh }}({{ row.algorithmNameEn }})</td>
                        <td>{{ row.bestTime }}</td>
                        <td>{{ row.averageTime }}</td>
                        <td>{{ row.worstTime }}</td>
                        <td>{{ row.stability }}</td>
                        <td>{{ row.notes }}</td>
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
          @update:completed="updateTopicCompleted(topic, $event)"
          @update:bookmarked="updateTopicBookmarked(topic, $event)"
        >
          <div class="subject-topic-blocks">
            <template v-for="(block, index) in topic.blocks" :key="blockTestId(topic, block, index)">
              <p v-if="block.kind === 'paragraph'" :data-testid="blockTestId(topic, block, index)" class="subject-topic-paragraph">
                {{ block.text }}
              </p>
              <section v-else-if="isListBlock(block)" :data-testid="blockTestId(topic, block, index)" class="subject-topic-block">
                <h3>{{ listBlockLabels[block.kind] }}</h3>
                <ul>
                  <li v-for="item in block.items" :key="item">{{ item }}</li>
                </ul>
              </section>
              <section
                v-else-if="block.kind === 'sourceNote'"
                :data-testid="blockTestId(topic, block, index)"
                class="subject-topic-block subject-topic-source-note"
              >
                <h3>來源註記</h3>
                <p>{{ block.sourceSummary }}</p>
                <ul>
                  <li v-for="sourceFile in block.sourceFiles" :key="sourceFile">{{ sourceFile }}</li>
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
                <p>{{ block.problem }}</p>
                <ol>
                  <li v-for="step in block.steps" :key="step">{{ step }}</li>
                </ol>
                <p v-if="block.result">{{ block.result }}</p>
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
                        <td>{{ row.algorithmNameZh }}({{ row.algorithmNameEn }})</td>
                        <td>{{ row.bestTime }}</td>
                        <td>{{ row.averageTime }}</td>
                        <td>{{ row.worstTime }}</td>
                        <td>{{ row.stability }}</td>
                        <td>{{ row.notes }}</td>
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
