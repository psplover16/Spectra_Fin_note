import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { placeholderTopicsBySubject } from '@/modules/subjectTopics/data/placeholderTopics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import { subjectKeys, type ProfessionalSubjectTopic, type SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';

const subjectKey = 'computerPrinciplesV2' as SubjectKey;
const sourceBatch = 'computer-principles-v2-route';
const catalogSourceFile = '_private/MD/計算機概論/00_目錄.md';

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
    source: '_private/MD/計算機概論/10_浮點數轉換.md',
    keyword: '0x41240000'
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
      expect(topic.sourceFiles).toEqual([topicCase.source]);
      expect(topic.sourceSummary).toContain(topicCase.title);
      expect(topic.summary).not.toBe('');
      expect(topic.terms.length, `${topicCase.id} should expose source terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength(1);

      const lessonArticle = topic.blocks[0];
      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render through lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual([topicCase.source]);
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
});
