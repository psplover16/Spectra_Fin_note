import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

const readText = (path: string) => readFileSync(path, 'utf8');

const readNetworkingManifestRows = () => {
  const manifest = readText('_TMP/manifests/networking-manifest.md');
  const rows: Array<{ id: string; title: string; sourceSection: string }> = [];
  let currentId = '';
  let currentTitle = '';
  let currentSourceSection = '';

  for (const line of manifest.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      if (currentId !== '') {
        rows.push({ id: currentId, title: currentTitle, sourceSection: currentSourceSection });
      }

      currentId = line.replace(/^##\s+/, '').trim();
      currentTitle = '';
      currentSourceSection = '';
    }

    if (line.startsWith('- title:')) {
      currentTitle = line.replace('- title:', '').trim();
    }

    if (line.startsWith('- source section:')) {
      currentSourceSection = line.replace('- source section:', '').trim();
    }
  }

  if (currentId !== '') {
    rows.push({ id: currentId, title: currentTitle, sourceSection: currentSourceSection });
  }

  return rows;
};

const routeRoot = '_private/TMP/networking';
const routeTrackingPath = `${routeRoot}/待生成主題清單_20260613-111500.md`;

describe('networking route-scoped content workflow', () => {
  it('creates prompt, draft, and verified files for every networking manifest topic', () => {
    const manifestRows = readNetworkingManifestRows();

    expect(manifestRows).toHaveLength(11);

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
      expect(prompt).toContain('_private/網概.txt');
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

  it('tracks networking source inventory, port/protocol review, and import readiness', () => {
    const manifestRows = readNetworkingManifestRows();
    const tracking = readText(routeTrackingPath);
    const sourceInventory = readText(`${routeRoot}/source-inventory.md`);
    const manualReview = readText(`${routeRoot}/manual-review.md`);
    const importReadiness = readText(`${routeRoot}/import-readiness.md`);
    const portProtocolReview = readText(`${routeRoot}/port-protocol-fact-review.md`);

    const trackingRows = tracking
      .split(/\r?\n/)
      .filter((line) => line.startsWith('| `_private/網概.txt` |'));

    expect(trackingRows).toHaveLength(manifestRows.length);
    expect(sourceInventory).toContain('topic count: 11');
    expect(sourceInventory).toContain('unknown labels: 0');

    for (const expectedReviewTopic of ['ports', 'osi-tcpip-models', 'security']) {
      expect(manualReview).toContain(expectedReviewTopic);
      expect(manualReview).toContain('pass');
    }

    for (const expectedFact of ['HTTP 80/TCP', 'HTTPS 443/TCP', 'DNS 53/UDP 與 53/TCP', 'DHCP 67/68 UDP']) {
      expect(portProtocolReview).toContain(expectedFact);
    }

    expect(importReadiness).toContain('ready topics: 11');
    expect(importReadiness).toContain('missing verified file: 0');
    expect(importReadiness).toContain('source conflict: 0');
    expect(importReadiness).toContain('final readiness: ready');
  });

  it('imports formal networking app data for every manifest topic', () => {
    const manifestRows = readNetworkingManifestRows();
    const formalTopics = professionalTopicsBySubject.networking;

    expect(formalTopics).toHaveLength(manifestRows.length);

    for (const row of manifestRows) {
      const topicId = `networking-${row.id}`;
      const topic = formalTopics.find((formalTopic) => formalTopic.id === topicId);

      expect(topic).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(['_private/網概.txt']));
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
