import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { placeholderTopicsBySubject } from '@/modules/subjectTopics/data/placeholderTopics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import { computerPrinciplesV2RouteSections } from '@/modules/subjectTopics/data/computerPrinciplesV2Topics';
import { subjectKeys, type ProfessionalSubjectTopic, type SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';

const subjectKey = 'computerPrinciplesV2' as SubjectKey;
const sourceBatch = 'computer-principles-v2-route';
const catalogSourceFile = '_private/MD/計算機概論/00_目錄.md';
const floatingPointContentReviewPath = '_TMP/reviews/cpv2-floating-point-content-review.md';
const floatingPointSupplementalReviewPath = '_TMP/reviews/cpv2-floating-point-special-values-practice-review.md';
const refreshedFloatingPointSourceFile = '_private/MD/計算機概論v2/10_浮點數轉換.md';
const supplementalPracticeSourceFile = '_private/discuss.txt';
const specialValuesSourceFile = '_private/MD/0621/IEEE754_浮點數特殊值_速記.md';
const deprecatedFloatingPointSourceFile = '_private/MD/計算機概論/10_浮點數轉換.md';
const refreshedFloatingPointSourceFiles = [
  refreshedFloatingPointSourceFile,
  supplementalPracticeSourceFile,
  specialValuesSourceFile
] as const;

const topicCases = [
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
      expect(topic.blocks).toHaveLength(1);

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

  it('keeps the supplemental practice content as a route-level section above the topic list', () => {
    expect(computerPrinciplesV2RouteSections).toHaveLength(1);

    const practiceSection = computerPrinciplesV2RouteSections[0];
    const serializedPracticeSection = JSON.stringify(practiceSection);

    expect(practiceSection?.heading).toBe('加強練習');
    expect(serializedPracticeSection).toContain('指令組成:50% 需 1 週期、30% 需 2 週期、20% 需 4 週期,平均 CPI 為?');
    expect(serializedPracticeSection).toContain('Valid bit');
    expect(serializedPracticeSection).toContain('Dirty bit');
    expect(serializedPracticeSection).toContain('Tag 表示');
    expect(serializedPracticeSection).toContain('真正的資料');
    expect(serializedPracticeSection).toContain('Gen A × B');
    expect(serializedPracticeSection).toContain('資管題目:');
  });

  it('uses the refreshed v2 floating point source in the tenth catalog position', () => {
    const topics = getSubjectTopics(subjectKey);
    const floatingPointTopic = topics[9];

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
    expect(getSubjectTopics(subjectKey).map((topic) => topic.id)).toEqual(topicCases.map((topicCase) => topicCase.id));
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
