import { describe, expect, it } from 'vitest';
import { placeholderTopicsBySubject, getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';
import { subjectKeys, type SubjectTopic, type SubjectTopicBlock } from '@/modules/subjectTopics/types/subjectTopic';

const expectedSubjectKeys = [
  'computerPrinciples',
  'networking',
  'informationManagement',
  'programming',
  'database',
  'algorithms',
  'systemDesign',
  'english',
  'chinese'
] as const;
const expectedRenderablePlaceholderSubjectKeys = expectedSubjectKeys.filter((subjectKey) => subjectKey !== 'systemDesign');
const allowedTopicKeys = ['blocks', 'id', 'subjectKey', 'summary', 'title'];
const allowedParagraphBlockKeys = ['kind', 'text'];
const allowedTeachingCodeBlockKeys = ['code', 'description', 'kind', 'language', 'title'];
const forbiddenQuestionModelKeys = [
  'answer',
  'choiceAnalysis',
  'choices',
  'correctAnswer',
  'options',
  'prompt',
  'question',
  'reviewStatus',
  'sourceYear'
];

function collectObjectKeys(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => collectObjectKeys(item));
  }

  if (!value || typeof value !== 'object') {
    return [];
  }

  return Object.entries(value).flatMap(([key, nestedValue]) => [key, ...collectObjectKeys(nestedValue)]);
}

function expectTopicShape(topic: SubjectTopic) {
  expect(Object.keys(topic).sort()).toEqual(allowedTopicKeys);
  expect(topic.id).toEqual(expect.any(String));
  expect(topic.subjectKey).toEqual(expect.any(String));
  expect(topic.title).toEqual(expect.any(String));
  expect(topic.summary).toEqual(expect.any(String));
  expect(topic.blocks.length).toBeGreaterThan(0);
}

function expectBlockShape(block: SubjectTopicBlock) {
  if (block.kind === 'paragraph') {
    expect(Object.keys(block).sort()).toEqual(allowedParagraphBlockKeys);
    expect(block.text).toEqual(expect.any(String));
    return;
  }

  expect(block.kind).toBe('teachingCode');
  if (block.kind === 'teachingCode') {
    expect(Object.keys(block).sort()).toEqual(expect.arrayContaining(allowedTeachingCodeBlockKeys));
    expect(block.language).toBe('java');
    expect(block.code).toEqual(expect.any(String));
  }
}

describe('placeholder topic data', () => {
  it('tracks every subject key and provides renderable placeholder topics where placeholders are defined', () => {
    expect(subjectKeys).toEqual(expectedSubjectKeys);
    expect(Object.keys(placeholderTopicsBySubject).sort()).toEqual([...expectedSubjectKeys].sort());

    for (const subjectKey of expectedRenderablePlaceholderSubjectKeys) {
      const topics = getPlaceholderTopics(subjectKey);
      const topicIds = new Set(topics.map((topic) => topic.id));

      expect(topics.length).toBeGreaterThan(0);
      expect(topicIds.size).toBe(topics.length);

      for (const topic of topics) {
        expect(topic.subjectKey).toBe(subjectKey);
        expectTopicShape(topic);
        topic.blocks.forEach(expectBlockShape);
      }
    }
  });

  it('keeps first-version data inside the placeholder scope instead of question-bank fields', () => {
    const allKeys = collectObjectKeys(placeholderTopicsBySubject);

    for (const forbiddenKey of forbiddenQuestionModelKeys) {
      expect(allKeys).not.toContain(forbiddenKey);
    }
  });

  it('includes the topic ids used by later interaction scenarios', () => {
    expect(getPlaceholderTopics('computerPrinciples').map((topic) => topic.id)).toEqual(
      expect.arrayContaining(['number-systems', 'binary-tree-basics'])
    );
    expect(getPlaceholderTopics('networking').map((topic) => topic.id)).toEqual(
      expect.arrayContaining(['osi-model', 'tcp-ip-basics'])
    );
    expect(getPlaceholderTopics('database').map((topic) => topic.id)).toEqual(
      expect.arrayContaining(['database-foundations', 'relational-model-basics'])
    );
    expect(getPlaceholderTopics('algorithms').map((topic) => topic.id)).toEqual(
      expect.arrayContaining(['sorting-overview', 'binary-search-placeholder'])
    );
  });
});
