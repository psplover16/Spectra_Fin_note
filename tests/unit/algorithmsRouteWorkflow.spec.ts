import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

const readText = (path: string) => readFileSync(path, 'utf8');

const readAlgorithmsManifestRows = () =>
  readText('_TMP/manifests/algorithms-manifest.md')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| `alg-'))
    .map((line) => {
      const [, manifestId, id, title, sourceSection] = line
        .split('|')
        .slice(0, 5)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      const sourceFile = '_private/資料結構與演算法.txt';

      return { manifestId, id, title, sourceSection, sourceFile, formalSourceFile: sourceFile };
    });

const readCommonAlgorithmRows = () =>
  readText('_TMP/manifests/common-algorithms-inventory.md')
    .split(/\r?\n/)
    .filter((line) => /^\| \d+ \| `/.test(line))
    .map((line) => {
      const [, , id, title, sourceSection] = line
        .split('|')
        .slice(0, 5)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      return {
        manifestId: `common-${id}`,
        id,
        title,
        sourceSection,
        sourceFile: '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md',
        formalSourceFile: '_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'
      };
    });

const readSortingExpansionRows = () => [
  {
    manifestId: 'sorting-expansion-merge-sort',
    id: 'merge-sort',
    title: '合併排序法(Merge Sort)',
    sourceSection: '九、排序 / Sorting baseline table',
    sourceFile: '_private/資料結構與演算法.txt',
    formalSourceFile: '_private/資料結構與演算法.txt'
  },
  {
    manifestId: 'sorting-expansion-heap-sort',
    id: 'heap-sort',
    title: '堆積排序法(Heap Sort)',
    sourceSection: '九、排序 / Sorting baseline table',
    sourceFile: '_private/資料結構與演算法.txt',
    formalSourceFile: '_private/資料結構與演算法.txt'
  },
  {
    manifestId: 'sorting-expansion-shell-sort',
    id: 'shell-sort',
    title: '希爾排序法(Shell Sort)',
    sourceSection: '九、排序 / Sorting baseline table',
    sourceFile: '_private/資料結構與演算法.txt',
    formalSourceFile: '_private/資料結構與演算法.txt'
  }
];

const readRouteManifestRows = () => [
  ...readAlgorithmsManifestRows(),
  ...readCommonAlgorithmRows(),
  ...readSortingExpansionRows()
];

const routeRoot = '_private/TMP/algorithms';
const routeTrackingPath = `${routeRoot}/待生成主題清單_20260613-123000.md`;

describe('algorithms route-scoped content workflow', () => {
  it('creates prompt, draft, and verified files for every algorithms route topic', () => {
    const manifestRows = readRouteManifestRows();

    expect(manifestRows).toHaveLength(21);

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
      expect(prompt).toContain(row.sourceFile);
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

  it('tracks Java variants, complexity, stability, and import readiness', () => {
    const manifestRows = readRouteManifestRows();
    const tracking = readText(routeTrackingPath);
    const sourceInventory = readText(`${routeRoot}/source-inventory.md`);
    const manualReview = readText(`${routeRoot}/manual-review.md`);
    const importReadiness = readText(`${routeRoot}/import-readiness.md`);
    const algorithmReview = readText(`${routeRoot}/algorithm-java-complexity-review.md`);

    const trackingRows = tracking
      .split(/\r?\n/)
      .filter(
        (line) =>
          line.startsWith('| `_private/資料結構與演算法.txt` |') ||
          line.startsWith('| `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` |')
      );

    expect(trackingRows).toHaveLength(manifestRows.length);
    expect(sourceInventory).toContain('topic count: 21');
    expect(sourceInventory).toContain('_private/資料結構與演算法.txt');
    expect(sourceInventory).toContain('_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md');
    expect(sourceInventory).toContain('unknown labels: 0');

    for (const expectedReviewTopic of [
      'time-complexity-big-o',
      'tree-and-binary-tree',
      'sorting-algorithms-baseline',
      'binary-search'
    ]) {
      expect(manualReview).toContain(expectedReviewTopic);
      expect(manualReview).toContain('pass');
    }

    for (const expectedConcept of [
      'Bubble Sort',
      'Quick Sort',
      'Fibonacci Sequence',
      'Greatest Common Divisor',
      'Binary Search',
      'Merge Sort',
      'Heap Sort',
      'Shell Sort',
      'O(log n)',
      'Stable',
      'Unstable'
    ]) {
      expect(algorithmReview).toContain(expectedConcept);
    }

    expect(importReadiness).toContain('ready topics: 21');
    expect(importReadiness).toContain('missing verified file: 0');
    expect(importReadiness).toContain('source conflict: 0');
    expect(importReadiness).toContain('final readiness: ready');
  });

  it('imports formal algorithms app data for every route topic', () => {
    const manifestRows = readRouteManifestRows();
    const formalTopics = professionalTopicsBySubject.algorithms;

    expect(formalTopics).toHaveLength(manifestRows.length + 1);

    for (const row of manifestRows) {
      const topic = formalTopics.find((formalTopic) => formalTopic.id === row.id);
      const isCommonAlgorithmTopic = row.manifestId?.startsWith('common-') ?? false;

      expect(topic).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining([row.formalSourceFile]));
      expect(topic?.blocks[0]).toEqual(expect.objectContaining({ kind: 'lessonArticle' }));
      if (isCommonAlgorithmTopic && topic?.blocks[0]?.kind === 'lessonArticle') {
        expect(topic.blocks[0].lead.length).toBeGreaterThan(0);
        expect(topic.blocks[0].sections.length).toBeGreaterThan(0);
        expect(topic.blocks.some((block) => block.kind === 'teachingCode')).toBe(true);
      } else {
        expect(topic?.blocks).toHaveLength(1);
        expect(topic?.blocks[0]).toEqual(expect.objectContaining({ kind: 'lessonArticle', lead: [], sections: [] }));
        expect(topic?.blocks.some((block) => block.kind === 'teachingCode')).toBe(false);
      }
      expect(topic?.blocks.some((block) => block.kind === 'sourceNote')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'examOutline')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'understanding')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'termList')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'workedExample')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'pitfall')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'complexityTable')).toBe(false);
    }

    const bucketSortTopic = formalTopics.find((formalTopic) => formalTopic.id === 'bucket-sort');

    expect(bucketSortTopic).toBeDefined();
    expect(bucketSortTopic?.sourceFiles).toEqual(expect.arrayContaining(['_private/MD/演算法/GeneralBucketSort.java']));
    expect(bucketSortTopic?.blocks[0]).toEqual(expect.objectContaining({ kind: 'lessonArticle' }));
    expect(bucketSortTopic?.blocks.some((block) => block.kind === 'teachingCode')).toBe(true);
  });
});
