import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { placeholderTopicsBySubject } from '@/modules/subjectTopics/data/placeholderTopics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import { subjectKeys, type ProfessionalSubjectTopic, type SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';

const subjectKey = 'computerPrinciplesV2' as SubjectKey;
const sourceBatch = 'computer-principles-v2-route';
const catalogSourceFile = '_private/MD/計算機概論/00_目錄.md';
const floatingPointContentReviewPath = '_TMP/reviews/cpv2-floating-point-content-review.md';
const floatingPointSupplementalReviewPath = '_TMP/reviews/cpv2-floating-point-special-values-practice-review.md';
const refreshedFloatingPointSourceFile = '_private/MD/計算機概論v2/10_浮點數轉換.md';
const supplementalPracticeSourceFile = '_private/discuss.txt';
const supplementalDataSourceFile = '_private/計概補充/計算機概論_重點講義_01.md';
const supplementalCpuSchedulingSourceFile = '_private/計概補充/CPU排班演算法_國考完整講義.md';
const supplementalDeadlockSourceFile = '_private/計概補充/死結_考試精簡版.md';
const supplementalPagingSegmentationSourceFile = '_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md';
const supplementalOopSourceFile = '_private/計概補充/物件導向特性_國考完整講義.md';
const supplementalComplexityLinearSourceFile = '_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md';
const supplementalTreesHashSourceFile = '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md';
const specialValuesSourceFile = '_private/MD/0621/IEEE754_浮點數特殊值_速記.md';
const deprecatedFloatingPointSourceFile = '_private/MD/計算機概論/10_浮點數轉換.md';
const refreshedFloatingPointSourceFiles = [
  refreshedFloatingPointSourceFile,
  specialValuesSourceFile
] as const;

const topicCases = [
  {
    id: 'cpv2-supplemental-practice',
    title: '加強練習',
    source: supplementalPracticeSourceFile,
    keyword: '指令組成:50% 需 1 週期'
  },
  {
    id: 'cpv2-supplemental-amdahl-law',
    title: '阿姆達爾定律',
    source: supplementalDataSourceFile,
    keyword: 'Amdahl'
  },
  {
    id: 'cpv2-supplemental-cpu-scheduling',
    title: 'CPU 排班演算法',
    source: supplementalCpuSchedulingSourceFile,
    keyword: 'CPU Scheduling',
    htmlFilename: 'CPU排班演算法_國考完整講義.html'
  },
  {
    id: 'cpv2-supplemental-deadlock',
    title: '死結',
    source: supplementalDeadlockSourceFile,
    keyword: 'Deadlock',
    htmlFilename: '死結_考試精簡版.html'
  },
  {
    id: 'cpv2-supplemental-paging-segmentation',
    title: '分頁與分段記憶體管理',
    source: supplementalPagingSegmentationSourceFile,
    keyword: 'Paging',
    htmlFilename: '分頁與分段記憶體管理_題目帶動教學完整版.html'
  },
  {
    id: 'cpv2-supplemental-oop-characteristics',
    title: '物件導向特性',
    source: supplementalOopSourceFile,
    keyword: 'OOP Characteristics',
    htmlFilename: '物件導向特性_國考完整講義.html'
  },
  {
    id: 'cpv2-supplemental-complexity-linear-structures',
    title: '複雜度與線性結構',
    source: supplementalComplexityLinearSourceFile,
    keyword: 'Linear Structures',
    htmlFilename: '基礎資料結構(上)_複雜度與線性結構.html'
  },
  {
    id: 'cpv2-supplemental-basic-tree',
    title: '基礎樹',
    source: supplementalTreesHashSourceFile,
    keyword: 'Binary Search Tree',
    htmlFilename: '基礎樹.html'
  },
  {
    id: 'cpv2-supplemental-expression-notation',
    title: '運算式表示法',
    source: supplementalTreesHashSourceFile,
    keyword: 'Postfix',
    htmlFilename: '運算式表示法.html'
  },
  {
    id: 'cpv2-supplemental-avl-tree',
    title: 'AVL樹',
    source: '_private/20260708/AVL樹_考前速記卡.md',
    keyword: 'AVL Tree',
    htmlFilename: 'AVL樹.html'
  },
  {
    id: 'cpv2-supplemental-avl-tree-deletion',
    title: 'AVL樹_刪除',
    source: '_private/20260708/AVL樹_刪除專練.md',
    keyword: 'AVL Deletion',
    htmlFilename: 'AVL樹_刪除.html'
  },
  {
    id: 'cpv2-supplemental-red-black-tree',
    title: '紅黑樹',
    source: '_private/20260708/紅黑樹_考前速記卡.md',
    keyword: 'Red-Black Tree',
    htmlFilename: '紅黑樹.html'
  },
  {
    id: 'cpv2-supplemental-red-black-tree-deletion',
    title: '紅黑樹_刪除',
    source: '_private/20260708/紅黑樹_刪除專練.md',
    keyword: 'Double Black',
    htmlFilename: '紅黑樹_刪除.html'
  },
  {
    id: 'cpv2-supplemental-hash-table',
    title: '雜湊表',
    source: supplementalTreesHashSourceFile,
    keyword: 'Hash Table',
    htmlFilename: '雜湊表.html'
  },
  {
    id: 'cpv2-supplemental-trees-hash-practice',
    title: '樹與雜湊表_考題練習',
    source: supplementalTreesHashSourceFile,
    keyword: 'Practice',
    htmlFilename: '樹與雜湊表_考題練習.html'
  },
  {
    id: 'cpv2-architecture-computation-theory',
    title: '架構與計算理論',
    source: '_private/MD/計算機概論/01_架構與計算理論.md',
    keyword: '圖靈機是一種抽象的計算模型'
  },
  {
    id: 'cpv2-machine-instruction-cycle',
    title: '機器指令與指令週期',
    source: '_private/MD/計算機概論/02_機器指令與指令週期.md',
    keyword: 'Effective Address'
  },
  {
    id: 'cpv2-pipeline-hazard',
    title: 'Pipeline 與 Hazard',
    source: '_private/MD/計算機概論/03_Pipeline與Hazard.md',
    keyword: 'RAW'
  },
  {
    id: 'cpv2-performance-risc-cisc',
    title: '效能與 RISC／CISC',
    source: '_private/MD/計算機概論/04_效能與RISC-CISC.md',
    keyword: 'CPU Time = Instruction Count × CPI / Clock Rate'
  },
  {
    id: 'cpv2-bus-usb',
    title: '匯流排與 USB',
    source: '_private/MD/計算機概論/05_匯流排與USB.md',
    keyword: 'Type-C 是接頭形狀'
  },
  {
    id: 'cpv2-memory-hierarchy-classification',
    title: '記憶體（一）階層與分類',
    source: '_private/MD/計算機概論/06_記憶體-階層與分類.md',
    keyword: 'Temporal Locality'
  },
  {
    id: 'cpv2-registers-cache',
    title: '記憶體（二）暫存器與 Cache',
    source: '_private/MD/計算機概論/07_記憶體-暫存器與Cache.md',
    keyword: 'AMAT = Hit Time + Miss Rate × Miss Penalty'
  },
  {
    id: 'cpv2-base-conversion',
    title: '進制轉換',
    source: '_private/MD/計算機概論/08_進制轉換.md',
    keyword: '由下往上：111000010'
  },
  {
    id: 'cpv2-complement-conversion',
    title: '補數轉換',
    source: '_private/MD/計算機概論/09_補數轉換.md',
    keyword: '符號大小'
  },
  {
    id: 'cpv2-floating-point-conversion',
    title: '浮點數轉換',
    source: refreshedFloatingPointSourceFile,
    keyword: '傳統（一般）浮點表示法'
  },
  {
    id: 'cpv2-codes-and-character-sets',
    title: '數碼與文字碼',
    source: '_private/MD/計算機概論/11_數碼與文字碼.md',
    keyword: 'Binary 1011 = Gray 1110'
  },
  {
    id: 'cpv2-parity-crc',
    title: '檢查碼（一）Parity 與 CRC',
    source: '_private/MD/計算機概論/12_檢查碼-Parity與CRC.md',
    keyword: '模 2 除法'
  },
  {
    id: 'cpv2-hamming-code-distance',
    title: '檢查碼（二）漢明碼與漢明距',
    source: '_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md',
    keyword: 'Syndrome = S4 S2 S1'
  }
] as const;

const v2Topics = () =>
  ((professionalTopicsBySubject as Partial<Record<string, readonly ProfessionalSubjectTopic[]>>)[
    'computerPrinciplesV2'
  ] ?? []);

describe('computer principles v2 route workflow', () => {
  it('registers the subject key and placeholder namespace without renderable placeholders', () => {
    expect(subjectKeys).toContain('computerPrinciplesV2');
    expect(Object.keys(placeholderTopicsBySubject)).toContain('computerPrinciplesV2');
    expect((placeholderTopicsBySubject as Partial<Record<string, readonly unknown[]>>).computerPrinciplesV2).toEqual([]);
  });

  it('keeps v2 topics owned by the independent subject key', () => {
    const v2TopicIds = v2Topics().map((topic) => topic.id);
    const otherSubjectTopicIds = [
      ...professionalTopicsBySubject.computerPrinciples,
      ...professionalTopicsBySubject.networking,
      ...professionalTopicsBySubject.digitalLogic,
      ...professionalTopicsBySubject.operatingSystems
    ].map((topic) => topic.id);

    expect(v2TopicIds).toEqual(topicCases.map((topicCase) => topicCase.id));
    for (const topicId of v2TopicIds) {
      expect(otherSubjectTopicIds).not.toContain(topicId);
    }
  });

  it('uses the 00 catalog as title manifest without making it learner-facing', () => {
    const topics = getSubjectTopics(subjectKey);

    expect(topics.map((topic) => topic.id)).toEqual(topicCases.map((topicCase) => topicCase.id));
    expect(topics.map((topic) => topic.title)).toEqual(topicCases.map((topicCase) => topicCase.title));
    expect(JSON.stringify(topics)).not.toContain(catalogSourceFile);
    expect(topics.some((topic) => topic.id.includes('00') || topic.title.includes('00_目錄'))).toBe(false);
    expect(topics.every((topic) => !topic.title.startsWith('基本計概') && !/^\d{2}_/.test(topic.title))).toBe(true);
  });

  it('preserves source traceability and source-authored lessonArticle content', () => {
    expect(v2Topics()).toHaveLength(topicCases.length);

    for (const topicCase of topicCases) {
      const topic = v2Topics().find((candidate) => candidate.id === topicCase.id);

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      if (!topic) {
        continue;
      }

      expect(topic.subjectKey).toBe('computerPrinciplesV2');
      expect(topic.title).toBe(topicCase.title);
      expect(topic.sourceBatch).toBe(sourceBatch);
      const expectedSourceFiles =
        topicCase.id === 'cpv2-floating-point-conversion' ? [...refreshedFloatingPointSourceFiles] : [topicCase.source];
      expect(topic.sourceFiles).toEqual(expectedSourceFiles);
      expect(topic.sourceSummary).toContain(topicCase.title);
      expect(topic.summary).not.toBe('');
      expect(topic.terms.length, `${topicCase.id} should expose source terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength('htmlFilename' in topicCase ? 0 : 1);

      if ('htmlFilename' in topicCase) {
        expect((topic as { htmlPage?: { sourceFilename: string; href: string } }).htmlPage).toEqual({
          sourceFilename: topicCase.htmlFilename,
          href: `/computer-principles-v2/${topicCase.htmlFilename}`
        });
        expect(JSON.stringify(topic)).toContain(topicCase.keyword);
        expect(JSON.stringify(topic)).not.toContain(catalogSourceFile);
        continue;
      }

      const lessonArticle = topic.blocks[0];
      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render through lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expectedSourceFiles);
      expect(lessonArticle.sourceSection).toBe(topic.sourceSummary);
      expect(lessonArticle.sections.length, `${topicCase.id} should have sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topicCase.id} should not have empty sections`).toBe(
        true
      );
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined), `${topicCase.id} should omit sourceLabel`).toBe(
        true
      );

      const serializedTopic = JSON.stringify(topic);
      expect(serializedTopic).toContain(topicCase.keyword);
      expect(serializedTopic).not.toContain(catalogSourceFile);
      for (const forbiddenKey of ['questionText', 'correctAnswer', 'backendSyncId', 'remoteQuestionId']) {
        expect(serializedTopic).not.toContain(forbiddenKey);
      }
    }
  });

  it('introduces the AC accumulator below MDR/MBR in the v2 registers lesson', () => {
    const registersTopic = getSubjectTopics(subjectKey).find((topic) => topic.id === 'cpv2-registers-cache');
    const lessonArticle = registersTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');
    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-registers-cache should render through lessonArticle');
    }

    const registerSection = lessonArticle.sections.find((section) => section.heading === '11. Register（暫存器） / 名詞解釋');
    const registerListBlock = registerSection?.blocks.find((block) => block.kind === 'bulletList');

    expect(registerListBlock?.kind).toBe('bulletList');
    if (registerListBlock?.kind !== 'bulletList') {
      throw new Error('Register term section should expose a bullet list');
    }

    const mdrIndex = registerListBlock.items.findIndex((item) => item.startsWith('MDR / MBR'));
    const acIndex = registerListBlock.items.findIndex((item) => item.startsWith('AC（Accumulator，累加器）'));

    expect(acIndex).toBeGreaterThan(mdrIndex);
    expect(registerListBlock.items[acIndex]).toContain('ALU 運算的中間結果或最後結果');
    expect(JSON.stringify(registersTopic)).toContain('AC → ALU 運算的中間或累積結果');
  });

  it('keeps the supplemental practice content as the first route-visible topic card', () => {
    const topics = getSubjectTopics(subjectKey);
    const practiceTopic = topics[0];
    const supplementalTopics = topics.slice(1, 15);
    const architectureTopic = topics[15];
    const lessonArticle = practiceTopic?.blocks[0];

    expect(practiceTopic?.id).toBe('cpv2-supplemental-practice');
    expect(practiceTopic?.title).toBe('加強練習');
    expect(supplementalTopics.map((topic) => topic.id)).toEqual([
      'cpv2-supplemental-amdahl-law',
      'cpv2-supplemental-cpu-scheduling',
      'cpv2-supplemental-deadlock',
      'cpv2-supplemental-paging-segmentation',
      'cpv2-supplemental-oop-characteristics',
      'cpv2-supplemental-complexity-linear-structures',
      'cpv2-supplemental-basic-tree',
      'cpv2-supplemental-expression-notation',
      'cpv2-supplemental-avl-tree',
      'cpv2-supplemental-avl-tree-deletion',
      'cpv2-supplemental-red-black-tree',
      'cpv2-supplemental-red-black-tree-deletion',
      'cpv2-supplemental-hash-table',
      'cpv2-supplemental-trees-hash-practice'
    ]);
    expect(
      topics.some(
        (topic) =>
          topic.id === 'cpv2-supplemental-data' ||
          topic.id === 'cpv2-supplemental-basic-data-structures' ||
          topic.title === '補充資料' ||
          topic.title === '基礎資料結構'
      )
    ).toBe(false);
    expect(architectureTopic?.id).toBe('cpv2-architecture-computation-theory');
    expect(lessonArticle?.kind).toBe('lessonArticle');
    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-supplemental-practice should render through lessonArticle');
    }

    const serializedPracticeTopic = JSON.stringify(practiceTopic);
    expect(lessonArticle.sourceFiles).toEqual([supplementalPracticeSourceFile]);
    expect(lessonArticle.sections[0]?.heading).toBe('加強練習');
    expect(serializedPracticeTopic).toContain('指令組成:50% 需 1 週期、30% 需 2 週期、20% 需 4 週期,平均 CPI 為?');
    expect(serializedPracticeTopic).toContain('Valid bit');
    expect(serializedPracticeTopic).toContain('Dirty bit');
    expect(serializedPracticeTopic).toContain('Tag 表示');
    expect(serializedPracticeTopic).toContain('真正的資料');
    expect(serializedPracticeTopic).toContain('Gen A × B');
    expect(serializedPracticeTopic).toContain('資管題目:');
  });

  it('keeps Amdahl inline and links the thirteen HTML-backed supplemental cards', () => {
    const topics = getSubjectTopics(subjectKey);
    const inlineAmdahlTopic = topics[1];
    const htmlSupplementalTopics = topics.slice(2, 15);
    const htmlProfessionalSupplementalTopics = v2Topics().slice(2, 15);
    const professionalById = (id: string) => htmlProfessionalSupplementalTopics.find((topic) => topic.id === id);
    const amdahlLessonArticle = inlineAmdahlTopic?.blocks[0];

    expect(inlineAmdahlTopic?.title).toBe('阿姆達爾定律');
    expect(amdahlLessonArticle?.kind).toBe('lessonArticle');
    expect((inlineAmdahlTopic as { htmlPage?: unknown } | undefined)?.htmlPage).toBeUndefined();
    expect(htmlSupplementalTopics.map((topic) => topic.title)).toEqual([
      'CPU 排班演算法',
      '死結',
      '分頁與分段記憶體管理',
      '物件導向特性',
      '複雜度與線性結構',
      '基礎樹',
      '運算式表示法',
      'AVL樹',
      'AVL樹_刪除',
      '紅黑樹',
      '紅黑樹_刪除',
      '雜湊表',
      '樹與雜湊表_考題練習'
    ]);
    expect(htmlSupplementalTopics.map((topic) => topic?.id)).toEqual(
      htmlProfessionalSupplementalTopics.map((topic) => topic.id)
    );
    expect(professionalById('cpv2-supplemental-cpu-scheduling')?.sourceFiles).toEqual([supplementalCpuSchedulingSourceFile]);
    expect(professionalById('cpv2-supplemental-deadlock')?.sourceFiles).toEqual([supplementalDeadlockSourceFile]);
    expect(professionalById('cpv2-supplemental-paging-segmentation')?.sourceFiles).toEqual([supplementalPagingSegmentationSourceFile]);
    expect(professionalById('cpv2-supplemental-oop-characteristics')?.sourceFiles).toEqual([supplementalOopSourceFile]);
    expect(professionalById('cpv2-supplemental-complexity-linear-structures')?.sourceFiles).toEqual([supplementalComplexityLinearSourceFile]);
    expect(professionalById('cpv2-supplemental-basic-tree')?.sourceFiles).toEqual([supplementalTreesHashSourceFile]);
    expect(professionalById('cpv2-supplemental-avl-tree')?.sourceFiles).toEqual(['_private/20260708/AVL樹_考前速記卡.md']);
    expect(professionalById('cpv2-supplemental-red-black-tree-deletion')?.sourceFiles).toEqual(['_private/20260708/紅黑樹_刪除專練.md']);
    expect(professionalById('cpv2-supplemental-trees-hash-practice')?.sourceFiles).toEqual([supplementalTreesHashSourceFile]);

    for (const topic of htmlSupplementalTopics) {
      const professionalTopic = htmlProfessionalSupplementalTopics.find((candidate) => candidate.id === topic?.id);
      const htmlPage = (topic as { htmlPage?: { sourceFilename: string; href: string } } | undefined)?.htmlPage;

      expect(topic?.blocks, `${topic?.id} should not expose inline lessonArticle blocks`).toEqual([]);
      expect(htmlPage?.sourceFilename, `${topic?.id} should record a source HTML filename`).toBe(
        (professionalTopic as { htmlPage?: { sourceFilename: string } } | undefined)?.htmlPage?.sourceFilename
      );
      expect(htmlPage?.href, `${topic?.id} should link to the static HTML page`).toBe(`/computer-principles-v2/${htmlPage?.sourceFilename}`);
    }

    const serializedSplitSupplementalTopics = JSON.stringify([inlineAmdahlTopic, ...htmlSupplementalTopics]);
    expect(serializedSplitSupplementalTopics).not.toContain('Machine Instruction Cycle');
    expect(serializedSplitSupplementalTopics).not.toContain('Five Functional Units');
    expect(serializedSplitSupplementalTopics).not.toContain('CPU Components');
    expect(serializedSplitSupplementalTopics).not.toContain('Memory Hierarchy');
    expect(serializedSplitSupplementalTopics).not.toContain('PC（程式計數器）');
    expect(serializedSplitSupplementalTopics).not.toContain('questionText');
    expect(serializedSplitSupplementalTopics).not.toContain('correctAnswer');
    expect(serializedSplitSupplementalTopics).not.toContain('backendSyncId');
    expect(serializedSplitSupplementalTopics).not.toContain('remoteQuestionId');
    expect(serializedSplitSupplementalTopics).toContain('整體加速比');
    expect(serializedSplitSupplementalTopics).toContain('CPU Scheduling');
    expect(serializedSplitSupplementalTopics).toContain('四個必要條件');
    expect(serializedSplitSupplementalTopics).toContain('Linear Structures');
    expect(serializedSplitSupplementalTopics).toContain('Hash Table');
  });

  it('uses the refreshed v2 floating point source after the supplemental topics', () => {
    const topics = getSubjectTopics(subjectKey);
    const floatingPointTopic = topics[24];

    expect(floatingPointTopic?.id).toBe('cpv2-floating-point-conversion');
    expect(floatingPointTopic?.title).toBe('浮點數轉換');
    expect(floatingPointTopic?.subjectKey).toBe('computerPrinciplesV2');

    const lessonArticle = floatingPointTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');
    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-floating-point-conversion should render through lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual([...refreshedFloatingPointSourceFiles]);
    expect(lessonArticle.sourceFiles).not.toContain(deprecatedFloatingPointSourceFile);
    expect(lessonArticle.sourceFiles).not.toContain(supplementalPracticeSourceFile);
    expect(lessonArticle.sourceFiles).not.toContain(supplementalDataSourceFile);
    expect(lessonArticle.sourceFiles).not.toContain(supplementalCpuSchedulingSourceFile);
    expect(getSubjectTopics(subjectKey).map((topic) => topic.id)).toEqual(topicCases.map((topicCase) => topicCase.id));
    expect(topics.map((topic) => topic.id).slice(23, 26)).toEqual([
      'cpv2-complement-conversion',
      'cpv2-floating-point-conversion',
      'cpv2-codes-and-character-sets'
    ]);
    expect(
      getSubjectTopics(subjectKey).some((topic) =>
        topic.blocks.some(
          (block) => block.kind === 'lessonArticle' && block.sourceFiles.includes(specialValuesSourceFile)
        ) && topic.id !== 'cpv2-floating-point-conversion'
      )
    ).toBe(false);
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual(
      expect.arrayContaining([
        '16. 浮點數轉換 / 傳統（一般）浮點表示法　【理解】',
        '16. 浮點數轉換 / IEEE 754 欄位',
        '16. 浮點數轉換 / 完整流程（發送端：算出要傳什麼）',
        '16. 浮點數轉換 / 範例：IEEE 754 反推',
        '16. 浮點數轉換 / 為什麼 0.1 可能不精確？',
        'IEEE 754 浮點數特殊值・速記版',
        '加強練習　【練流程】'
      ])
    );
    expect(lessonArticle.sections.map((section) => section.heading)).not.toContain('加強練習');
    expect(lessonArticle.sections[0]?.heading).toBe('16. 浮點數轉換');

    const headingOrder = lessonArticle.sections.map((section) => section.heading);
    expect(headingOrder[headingOrder.indexOf('16. 浮點數轉換') + 1]).toBe('IEEE 754 浮點數特殊值・速記版');

    const specialValuesSection = lessonArticle.sections.find((section) => section.heading === 'IEEE 754 浮點數特殊值・速記版');

    const serializedTopic = JSON.stringify(floatingPointTopic);

    for (const refreshedPhrase of [
      '傳統（一般）浮點表示法',
      'IEEE 754 欄位',
      '0.1(10) = 0.0001100110011…(2)',
      '練習 6（兩種表示法對照）',
      '±0',
      '非正規化數',
      '±∞',
      'NaN',
      '隱藏位元變 0',
      '正規化 = 1',
      '單精度 (32-bit)',
      '雙精度 (64-bit)'
    ]) {
      expect(serializedTopic).toContain(refreshedPhrase);
    }
    expect(JSON.stringify(specialValuesSection)).toContain('指數全 0');
    expect(JSON.stringify(specialValuesSection)).toContain('指數全 1');
  });

  it('records a manual content review for the refreshed floating point lesson', () => {
    const review = readFileSync(floatingPointContentReviewPath, 'utf8');

    for (const requiredReviewText of [
      'source: _private/MD/計算機概論v2/10_浮點數轉換.md',
      'target: cpv2-floating-point-conversion',
      '傳統表示法: pass',
      'IEEE 754 公式: pass',
      '正規化流程: pass',
      '反推流程: pass',
      '0.1 精度說明: pass',
      '易錯陷阱: pass',
      '6 題練習: pass',
      'lecture-only',
      '4 個選項：不適用',
      '1 個正解：不適用',
      '選項辨析：不適用'
    ]) {
      expect(review).toContain(requiredReviewText);
    }
  });

  it('records a manual content review for the supplemental floating point refresh', () => {
    const review = readFileSync(floatingPointSupplementalReviewPath, 'utf8');

    for (const requiredReviewText of [
      'practice source: _private/discuss.txt',
      'special-values source: _private/MD/0621/IEEE754_浮點數特殊值_速記.md',
      'target: cpv2-floating-point-conversion',
      '12 題加強練習: pass',
      'IEEE 754 特殊值判讀: pass',
      'hidden bit 對照: pass',
      'single/double precision table: pass',
      'lecture-only',
      '4 個選項：不適用',
      '1 個正解：不適用',
      '選項辨析：不適用'
    ]) {
      expect(review).toContain(requiredReviewText);
    }
  });
});
