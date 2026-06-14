import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

const readText = (path: string) => readFileSync(path, 'utf8');

const readComputerPrinciplesManifestRows = () =>
  readText('_TMP/manifests/computer-principles-manifest.md')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| cp-'))
    .map((line) => {
      const [id, title, sourceSection] = line
        .split('|')
        .slice(1, 4)
        .map((cell) => cell.trim());

      return { id: id ?? '', title: title ?? '', sourceSection: sourceSection ?? '' };
    });

const routeRoot = '_private/TMP/computer-principles';
const routeTrackingPath = `${routeRoot}/待生成主題清單_20260613-110000.md`;
const expectedComputerPrinciplesTopicCount = 33;
const commonUnitsTopicId = 'cp-common-units';
const filledComputerPrinciplesTopicIds = new Set([
  commonUnitsTopicId,
  'cp-von-neumann-architecture',
  'cp-pipeline',
  'cp-hazard',
  'cp-bus',
  'cp-performance-formulas',
  'cp-risc-cisc',
  'cp-memory-hierarchy',
  'cp-memory-classification',
  'cp-registers',
  'cp-cache',
  'cp-usb-speed',
  'cp-base-conversion',
  'cp-complement-conversion',
  'cp-floating-point-conversion',
  'cp-codes-and-check-codes'
]);
const sourceFilesByFilledTopicId = {
  [commonUnitsTopicId]: ['_private/計算機概論.txt', '_private/discuss.txt'],
  'cp-von-neumann-architecture': ['_private/計算機概論.txt', '_private/MD/馮紐曼架構.md'],
  'cp-pipeline': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/四、Pipeline（管線化）_新手國考教材.md'],
  'cp-hazard': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十二、Hazard_新手國考教材.md'],
  'cp-bus': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/五、匯流排（Bus）_新手國考教材.md'],
  'cp-performance-formulas': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/六、效能名詞與公式_新手國考教材.md'],
  'cp-risc-cisc': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/七、RISC 與 CISC_新手國考教材.md'],
  'cp-memory-hierarchy': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/八、Memory 階層圖_新手國考教材.md'],
  'cp-memory-classification': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/九、Memory 分類圖_新手國考教材.md'],
  'cp-registers': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十、Register（暫存器）_新手國考教材.md'],
  'cp-cache': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十一、Cache_新手國考教材.md'],
  'cp-usb-speed': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十三、USB 速度_新手國考教材.md'],
  'cp-base-conversion': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十四、進制轉換_新手國考教材.md'],
  'cp-complement-conversion': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十五、補數轉換_新手國考教材.md'],
  'cp-floating-point-conversion': ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十六、浮點數轉換_新手國考教材.md'],
  'cp-codes-and-check-codes': [
    '_private/計算機概論.txt',
    '_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md'
  ]
} as const;

describe('computer-principles route-scoped content workflow', () => {
  it('creates prompt, draft, and verified files for every manifest topic', () => {
    const manifestRows = readComputerPrinciplesManifestRows();

    expect(manifestRows).toHaveLength(expectedComputerPrinciplesTopicCount);
    expect(manifestRows).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: commonUnitsTopicId,
          title: '電腦常用單位'
        })
      ])
    );

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
      expect(prompt).toContain('_private/計算機概論.txt');
      expect(prompt).toContain(row.sourceSection);
      expect(prompt).toContain('content_shape: lessonArticle');
      expect(prompt).toContain('## Required Lesson Article Structure');
      expect(prompt).not.toContain('## Required Draft Structure');
      expect(prompt).not.toContain('國考重點');
      expect(prompt).not.toContain('國考速記');
      expect(prompt).not.toContain('名詞解釋');

      if (row.id === 'cp-von-neumann-architecture') {
        expect(prompt).toContain('## Source Outline Input');
        expect(prompt).toContain('## Content Writer Instruction');
        expect(prompt).toContain('來源大綱，也是內容生成副代理的 prompt input');
        expect(prompt).toContain('[必背] 兩大特色');
        expect(prompt).toContain('程式內儲概念：程式與資料都存於記憶體。');
        expect(prompt).toContain('[比較] 馮紐曼架構 vs 哈佛架構');
        expect(prompt).toContain('每個 [必背] 段落都必須包含定義、為什麼重要、國考怎麼寫、易錯點與最小背誦句');
        expect(prompt).toContain('禁止只複製來源 bullet');
      }

      expect(draft).toContain(`topic_id: ${row.id}`);
      expect(draft).toContain('status: draft');
      expect(draft).toContain('content_shape: lessonArticle');
      expect(draft).toContain('## 教材本文');
      expect(draft).toContain('old fixed template removed');
      expect(draft).not.toContain('## 國考重點');
      expect(draft).not.toContain('## 專有名詞');

      expect(verified).toContain(`topic_id: ${row.id}`);
      expect(verified).toContain('status: verified');
      expect(verified).toContain('final_status: verified');
      expect(verified).toContain('content_shape: lessonArticle');
      expect(verified).toContain('old fixed template removed');
      expect(verified.length).toBeGreaterThan(900);

      if (row.id === 'cp-von-neumann-architecture') {
        expect(verified).toContain('來源大綱不是成品');
        expect(verified).toContain('國考怎麼寫');
        expect(verified).toContain('比較項目');
        expect(verified).toContain('判斷重點');
        expect(verified).toContain('最小背誦句');
      }
    }
  });

  it('tracks every topic from source inventory through import readiness', () => {
    const manifestRows = readComputerPrinciplesManifestRows();
    const tracking = readText(routeTrackingPath);
    const sourceInventory = readText(`${routeRoot}/source-inventory.md`);
    const manualReview = readText(`${routeRoot}/manual-review.md`);
    const importReadiness = readText(`${routeRoot}/import-readiness.md`);

    const trackingRows = tracking
      .split(/\r?\n/)
      .filter((line) => line.startsWith('| `_private/計算機概論.txt` |'));

    expect(trackingRows).toHaveLength(manifestRows.length);
    expect(tracking).toContain(commonUnitsTopicId);
    expect(sourceInventory).toContain('topic count: 33');
    expect(sourceInventory).toContain(commonUnitsTopicId);
    expect(sourceInventory).toContain('unknown labels: 0');

    for (const expectedReviewTopic of [
      'cp-von-neumann-architecture',
      'cp-pipeline',
      'cp-hazard',
      'cp-cache',
      'cp-floating-point-conversion',
      'cp-codes-and-check-codes'
    ]) {
      expect(manualReview).toContain(expectedReviewTopic);
      expect(manualReview).toContain('pass');
    }

    expect(importReadiness).toContain('ready topics: 33');
    expect(importReadiness).toContain(commonUnitsTopicId);
    expect(importReadiness).toContain('missing verified file: 0');
    expect(importReadiness).toContain('source conflict: 0');
    expect(importReadiness).toContain('final readiness: ready');
  });

  it('keeps formal computer-principles app data aligned with the route workflow', () => {
    const manifestRows = readComputerPrinciplesManifestRows();
    const formalTopics = professionalTopicsBySubject.computerPrinciples;

    expect(formalTopics).toHaveLength(manifestRows.length);

    for (const row of manifestRows) {
      const topic = formalTopics.find((formalTopic) => formalTopic.id === row.id);
      const lessonArticle = topic?.blocks[0];
      const expectedSourceFiles = [
        ...(sourceFilesByFilledTopicId[row.id as keyof typeof sourceFilesByFilledTopicId] ?? ['_private/計算機概論.txt'])
      ];

      expect(topic).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(expectedSourceFiles));
      expect(topic?.blocks).toHaveLength(1);
      expect(lessonArticle).toEqual(expect.objectContaining({ kind: 'lessonArticle' }));
      if (lessonArticle?.kind === 'lessonArticle') {
        if (filledComputerPrinciplesTopicIds.has(row.id)) {
          expect(lessonArticle.lead).toEqual(expect.any(Array));
          expect(lessonArticle.sections.length).toBeGreaterThan(0);
          expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);
        }
      }
      expect(topic?.blocks.some((block) => block.kind === 'examOutline')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(false);
      expect(topic?.blocks.some((block) => block.kind === 'understanding')).toBe(false);
    }
  });
});
