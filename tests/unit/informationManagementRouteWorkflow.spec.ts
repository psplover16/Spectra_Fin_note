import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

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

  it('imports formal information-management app data for every manifest topic', () => {
    const manifestRows = readInformationManagementManifestRows();
    const formalTopics = professionalTopicsBySubject.informationManagement;

    expect(formalTopics).toHaveLength(manifestRows.length);

    for (const row of manifestRows) {
      const topic = formalTopics.find((formalTopic) => formalTopic.id === row.id);

      expect(topic).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(['_private/資訊管理.txt']));
      expect(topic?.blocks).toHaveLength(1);
      expect(topic?.blocks[0]).toEqual(expect.objectContaining({ kind: 'lessonArticle', lead: [], sections: [] }));
      expect(topic?.blocks.some((block) => block.kind === 'sourceNote')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'examOutline')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'understanding')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'termList')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'workedExample')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'pitfall')).toBe(false);
    }
  });
});
