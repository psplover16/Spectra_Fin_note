import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import type {
  LessonArticleContentBlock,
  ProfessionalSubjectTopic,
  SubjectTopicBlock
} from '@/modules/subjectTopics/types/subjectTopic';

const readText = (path: string) => readFileSync(path, 'utf8');

const readInformationManagementManifestRows = () =>
  readText('_TMP/manifests/information-management-manifest.md')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| im-'))
    .map((line) => {
      const [id, title, sourceSection] = line
        .split('|')
        .slice(1, 4)
        .map((cell) => cell.trim());

      return { id, title, sourceSection };
    });

const routeRoot = '_private/TMP/information-management';
const routeTrackingPath = `${routeRoot}/待生成主題清單_20260613-114500.md`;

const expectedMarkdownTopics = [
  {
    id: 'im-md-digital-transformation-esg',
    title: '數位轉型 + ESG',
    sourceSummary: '資訊管理 1：數位轉型 + ESG',
    sourceFile: '_private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md'
  },
  {
    id: 'im-md-traditional-development-models',
    title: '傳統開發模式（漸增／雛形／螺旋）',
    sourceSummary: '資訊管理 2a：傳統開發模式（漸增／雛形／螺旋）',
    sourceFile: '_private/MD/資訊管理/資訊管理_2a_傳統開發模式.md'
  },
  {
    id: 'im-md-agile-development',
    title: '敏捷開發 Agile',
    sourceSummary: '資訊管理 2b：敏捷開發 Agile',
    sourceFile: '_private/MD/資訊管理/資訊管理_2b_敏捷開發.md'
  },
  {
    id: 'im-md-information-ethics',
    title: '資訊倫理（PAPA 四大議題）',
    sourceSummary: '資訊管理 3a：資訊倫理（PAPA 四大議題）',
    sourceFile: '_private/MD/資訊管理/資訊管理_3a_資訊倫理.md'
  },
  {
    id: 'im-md-data-classification-privacy-paradox',
    title: '數據分類 + 隱私悖論',
    sourceSummary: '資訊管理 3b：數據分類 + 隱私悖論',
    sourceFile: '_private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md'
  },
  {
    id: 'im-md-personal-data-protection-act',
    title: '個人資料保護法（個資法）',
    sourceSummary: '資訊管理 4a：個人資料保護法（個資法）',
    sourceFile: '_private/MD/資訊管理/資訊管理_4a_個人資料保護法.md'
  },
  {
    id: 'im-md-gdpr',
    title: 'GDPR（歐盟一般資料保護規則）',
    sourceSummary: '資訊管理 4b：GDPR（歐盟一般資料保護規則）',
    sourceFile: '_private/MD/資訊管理/資訊管理_4b_GDPR.md'
  }
] as const;

type LessonArticleBlock = Extract<SubjectTopicBlock, { kind: 'lessonArticle' }>;

const getOnlyLessonArticle = (topic: ProfessionalSubjectTopic): LessonArticleBlock => {
  expect(topic.blocks).toHaveLength(1);
  const block = topic.blocks[0];

  if (!block) {
    throw new Error(`${topic.id} should have one lessonArticle block`);
  }

  expect(block.kind).toBe('lessonArticle');

  if (block.kind !== 'lessonArticle') {
    throw new Error(`${topic.id} should use lessonArticle content`);
  }

  return block;
};

const collectContentBlockText = (block: LessonArticleContentBlock): string[] => {
  if (block.kind === 'paragraph') {
    return [block.text];
  }

  if (block.kind === 'bulletList' || block.kind === 'orderedList') {
    return [...block.items];
  }

  if (block.kind === 'table') {
    return [...block.headers, ...block.rows.flat()];
  }

  if (block.kind === 'subsection') {
    return [block.heading, ...block.blocks.flatMap(collectContentBlockText)];
  }

  return block.blocks.flatMap(collectContentBlockText);
};

const serializeBlock = (block: SubjectTopicBlock): string => {
  if (block.kind === 'lessonArticle') {
    return [
      ...block.lead,
      ...block.sections.flatMap((section) => [
        section.heading,
        ...section.blocks.flatMap(collectContentBlockText)
      ])
    ].join('\n');
  }

  return JSON.stringify(block);
};

describe('information-management route-scoped content workflow', () => {
  it('creates prompt, draft, and verified files for every information-management manifest topic', () => {
    const manifestRows = readInformationManagementManifestRows();

    expect(manifestRows).toHaveLength(7);

    for (const row of manifestRows) {
      const promptPath = `${routeRoot}/${row.id}.prompt.md`;
      const draftPath = `${routeRoot}/${row.id}.draft.md`;
      const verifiedPath = `${routeRoot}/${row.id}.verified.md`;

      expect(existsSync(promptPath), `${row.id} prompt should exist`).toBe(true);
      expect(existsSync(draftPath), `${row.id} draft should exist`).toBe(true);
      expect(existsSync(verifiedPath), `${row.id} verified should exist`).toBe(true);

      const prompt = readText(promptPath);
      const draft = readText(draftPath);
      const verified = readText(verifiedPath);

      expect(prompt).toContain(`topic_id: ${row.id}`);
      expect(prompt).toContain('source_label_definitions: ../source-label-definitions.md');
      expect(prompt).toContain('_private/資訊管理.txt');
      expect(prompt).toContain(row.sourceSection);

      expect(draft).toContain(`topic_id: ${row.id}`);
      expect(draft).toContain('status: draft');
      expect(draft).toContain('content_shape: lessonArticle');
      expect(draft).toContain('## 來源大綱輸入');
      expect(draft).toContain('## 教材本文');
      expect(draft).toContain('## 學習標記說明');
      expect(draft).toContain('old fixed template removed');
      expect(draft).not.toContain('## 國考重點');
      expect(draft).not.toContain('## 專有名詞');

      expect(verified).toContain(`topic_id: ${row.id}`);
      expect(verified).toContain('status: verified');
      expect(verified).toContain('content_shape: lessonArticle');
      expect(verified).toContain('## 來源大綱輸入');
      expect(verified).toContain('## 教材本文');
      expect(verified).toContain('final_status: verified');
      expect(verified.length).toBeGreaterThan(900);
    }
  });

  it('tracks management terms, IS flow review, and import readiness', () => {
    const manifestRows = readInformationManagementManifestRows();
    const tracking = readText(routeTrackingPath);
    const sourceInventory = readText(`${routeRoot}/source-inventory.md`);
    const manualReview = readText(`${routeRoot}/manual-review.md`);
    const importReadiness = readText(`${routeRoot}/import-readiness.md`);
    const managementReview = readText(`${routeRoot}/management-term-flow-review.md`);

    const trackingRows = tracking
      .split(/\r?\n/)
      .filter((line) => line.startsWith('| `_private/資訊管理.txt` |'));

    expect(trackingRows).toHaveLength(manifestRows.length);
    expect(sourceInventory).toContain('topic count: 7');
    expect(sourceInventory).toContain('unknown labels: 0');

    for (const expectedReviewTopic of [
      'im-02-digital-transformation',
      'im-03-system-development-models',
      'im-05-info-ethics-regulations'
    ]) {
      expect(manualReview).toContain(expectedReviewTopic);
      expect(manualReview).toContain('pass');
    }

    for (const expectedConcept of ['Digital Transformation', 'Agile', 'Scrum', 'PAPA', 'GDPR', 'ESG']) {
      expect(managementReview).toContain(expectedConcept);
    }

    expect(importReadiness).toContain('ready topics: 7');
    expect(importReadiness).toContain('missing verified file: 0');
    expect(importReadiness).toContain('source conflict: 0');
    expect(importReadiness).toContain('final readiness: ready');
  });

  it('imports markdown-backed information-management topics before existing skeleton topics', () => {
    const manifestRows = readInformationManagementManifestRows();
    const formalTopics = professionalTopicsBySubject.informationManagement;

    expect(formalTopics).toHaveLength(expectedMarkdownTopics.length + manifestRows.length);
    expect(formalTopics.slice(0, expectedMarkdownTopics.length).map((topic) => topic.id)).toEqual(
      expectedMarkdownTopics.map((topic) => topic.id)
    );
    expect(formalTopics.slice(expectedMarkdownTopics.length).map((topic) => topic.id)).toEqual(
      manifestRows.map((row) => row.id)
    );

    for (const [index, expectedTopic] of expectedMarkdownTopics.entries()) {
      const topic = formalTopics[index];

      if (!topic) {
        throw new Error(`${expectedTopic.id} should exist at index ${index}`);
      }

      expect(topic).toEqual(
        expect.objectContaining({
          id: expectedTopic.id,
          title: expectedTopic.title,
          sourceFiles: [expectedTopic.sourceFile],
          sourceSummary: expectedTopic.sourceSummary
        })
      );

      const lessonArticle = getOnlyLessonArticle(topic);

      expect(lessonArticle).toEqual(
        expect.objectContaining({
          sourceFiles: [expectedTopic.sourceFile],
          sourceSection: expectedTopic.sourceSummary
        })
      );
      expect(lessonArticle.sections.length).toBeGreaterThan(0);
      expect(lessonArticle.sections.some((section) => section.blocks.length > 0)).toBe(true);
      expect(topic.blocks.some((block) => block.kind !== 'lessonArticle')).toBe(false);
    }
  });

  it('shows markdown-backed information-management topics as route-visible learner content', () => {
    const routeTopics = getSubjectTopics('informationManagement');

    expect(routeTopics.slice(0, expectedMarkdownTopics.length).map((topic) => topic.id)).toEqual(
      expectedMarkdownTopics.map((topic) => topic.id)
    );

    for (const expectedTopic of expectedMarkdownTopics) {
      const topic = routeTopics.find((candidate) => candidate.id === expectedTopic.id);

      expect(topic, `${expectedTopic.id} should be route-visible`).toBeDefined();
      if (!topic) {
        throw new Error(`${expectedTopic.id} should be route-visible`);
      }
      expect(topic.blocks).toHaveLength(1);
      expect(topic.blocks[0]?.kind).toBe('lessonArticle');
    }
  });

  it('preserves source order and excludes source-only verification meta text', () => {
    const formalTopics = professionalTopicsBySubject.informationManagement;
    const agileTopic = formalTopics.find((topic) => topic.id === 'im-md-agile-development');
    const dataTopic = formalTopics.find((topic) => topic.id === 'im-md-data-classification-privacy-paradox');
    const personalDataTopic = formalTopics.find((topic) => topic.id === 'im-md-personal-data-protection-act');
    const gdprTopic = formalTopics.find((topic) => topic.id === 'im-md-gdpr');

    if (!agileTopic) {
      throw new Error('im-md-agile-development should exist');
    }

    const agileArticle = getOnlyLessonArticle(agileTopic);

    expect(agileArticle.sections.map((section) => section.heading)).toEqual([
      '定義',
      '核心價值（敏捷宣言四大價值）',
      '優缺點',
      '三個常見框架',
      '重點整理（背這張）'
    ]);

    const learnerText = formalTopics
      .filter((topic) => topic.id.startsWith('im-md-'))
      .flatMap((topic) => topic.blocks.map(serializeBlock))
      .join('\n');

    expect(learnerText).not.toContain('內容經網路查證');
    expect(learnerText).not.toContain('內容經查證');
    expect(learnerText).toContain('不同來源');
    expect(learnerText).toContain('合作夥伴分享的會員/客戶行為資料');
    expect(learnerText).not.toContain('FB／IG 行為數據');

    const personalDataText = personalDataTopic?.blocks.map(serializeBlock).join('\n') ?? '';
    const gdprText = gdprTopic?.blocks.map(serializeBlock).join('\n') ?? '';

    expect(dataTopic).toBeDefined();
    expect(personalDataText).toContain('施行日期');
    expect(personalDataText).toContain('籌備處');
    expect(gdprText).toContain('歐盟境內');
    expect(gdprText).toContain('2,000 萬歐元');
    expect(gdprText).toContain('4%');
  });
});
