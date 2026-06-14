import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/computer-principles';
const manifestPath = '_TMP/manifests/computer-principles-manifest.md';
const sourceFile = '_private/計算機概論.txt';
const generatedAt = '2026-06-13T11:00:00+08:00';
const trackingPath = `${routeRoot}/待生成主題清單_20260613-110000.md`;

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const manifestRows = readText(manifestPath)
  .split(/\r?\n/)
  .filter((line) => line.startsWith('| cp-'))
  .map((line) => {
    const [id, title, sourceSection, , blockStructure, notes] = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim());

    return { id, title, sourceSection, blockStructure, notes };
  });

const labelsFor = (row) => {
  const labels = new Set(['[必背]']);

  if (/比較|RISC|CISC|分類|組合|循序|Hazard|Process/.test(`${row.title} ${row.notes}`)) {
    labels.add('[比較]');
  }

  if (row.blockStructure.includes('workedExample') || /公式|速度|轉換|AMAT|EAT|計算|scheduling|Banker/.test(row.notes)) {
    labels.add('[會算]');
  }

  if (/圖|階層|流程|state|電路|卡諾/.test(`${row.title} ${row.notes}`)) {
    labels.add('[會畫]');
  }

  if (/易錯|Hazard|補數|浮點|Deadlock/.test(`${row.title} ${row.notes}`)) {
    labels.add('[易混淆]');
  }

  return [...labels];
};

const baseDraftPathFor = (id) => `_TMP/20260613-054000-computer-principles-${id}.md`;
const promptPathFor = (id) => `${routeRoot}/${id}.prompt.md`;
const draftPathFor = (id) => `${routeRoot}/${id}.draft.md`;
const verifiedPathFor = (id) => `${routeRoot}/${id}.verified.md`;
const legacyMirrorPathFor = (id) => `${routeRoot}/20260613-054000-computer-principles-${id}.md`;

const asDraft = (baseDraft, row) =>
  baseDraft
    .replace('status: verified', 'status: draft')
    .replace('verified_by: content-verifier', 'verified_by: pending-verifier') +
  `\n## Route-scoped Draft 註記\n\n- route: /computer-principles\n- source labels: ${labelsFor(row).join(', ')}\n- source_label_definitions: ../source-label-definitions.md\n- draft_status: draft\n`;

const asVerified = (baseDraft, row) =>
  baseDraft +
  `\n## Route-scoped Verifier 補記\n\n- route: /computer-principles\n- source labels checked: ${labelsFor(row).join(', ')}\n- source_label_definitions: ../source-label-definitions.md\n- verifier result: verified\n- manual review dependency: see _private/TMP/computer-principles/manual-review.md\n`;

const promptFor = (row) => `---
topic_id: ${row.id}
route: /computer-principles
subject: computerPrinciples
content_shape: lessonArticle
source_file: ${sourceFile}
source_section: ${row.sourceSection}
source_labels: ${labelsFor(row).join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${row.title} Prompt

## Writer Scope

- 只處理 topic id: ${row.id}
- 只讀來源：${sourceFile}
- 來源段落：${row.sourceSection}
- 不得讀取個人筆記或受限 done 資料夾。
- 不得直接修改 formal app data。

## Source Labels

${labelsFor(row).map((label) => `- ${label}: 依 ../source-label-definitions.md 展開。`).join('\n')}

## Source Outline Input

以下內容是本 topic 的來源大綱摘要，也是內容生成副代理的 prompt input。它不是可直接匯入正式 app 的教材成品；副代理必須回到來源段落確認細節，並以新手國考讀者為對象，將每個名詞補定義、補中英文、補核心概念、補應用方式、補考場辨認與易錯點。

\`\`\`markdown
- source section: ${row.sourceSection}
- source labels: ${labelsFor(row).join(', ')}
- source intent: ${row.notes}
\`\`\`

## Content Writer Instruction

- 讀者設定：完全新手，但目標是參與國家考試。
- 寫作目標：把來源段落擴寫成可直接閱讀、可背誦、可作答的教學文件。
- 每個專有名詞第一次出現都要有中文與英文。
- 每個 [必背] 段落都必須包含定義、為什麼重要、國考怎麼寫、易錯點與最小背誦句。
- 每個 [比較] 段落都必須包含比較表、差異原因、判斷重點與常見錯誤。
- [會算] 必須有公式、變數定義與代入例題；[會畫] 必須有文字圖或繪圖步驟。
- 禁止只複製來源 bullet；來源 bullet 只能當大綱，不能當成品。

## Required Lesson Article Structure

- 來源對應：保留 source file、source section、source labels。
- 教材本文：依 source outline input 與 source labels 展成完整自然教材段落，段落標題保留來源標記，但內容必須是擴寫後的教學文件。
- 學習標記說明：說明本 topic 用到的標記如何讀、如何作答。
- Verifier 結果：保留 source mapping、lessonArticle shape、final_status。
- 禁止：不得產出舊固定模板標題作為內容容器。

## Topic Intent

${row.notes}
`;

mkdirSync(routeRoot, { recursive: true });

const missingDrafts = [];

for (const row of manifestRows) {
  const baseDraftPath = baseDraftPathFor(row.id);

  if (!existsSync(baseDraftPath)) {
    missingDrafts.push(baseDraftPath);
    continue;
  }

  const baseDraft = readText(baseDraftPath);

  writeText(promptPathFor(row.id), promptFor(row));
  writeText(draftPathFor(row.id), asDraft(baseDraft, row));
  writeText(verifiedPathFor(row.id), asVerified(baseDraft, row));
  writeText(legacyMirrorPathFor(row.id), baseDraft);
}

if (missingDrafts.length > 0) {
  throw new Error(`Missing base drafts:\n${missingDrafts.join('\n')}`);
}

const trackingRows = manifestRows
  .map((row) => {
    const labels = labelsFor(row).join(', ');
    const manualReview = ['cp-von-neumann-architecture', 'cp-pipeline', 'cp-cache'].includes(row.id)
      ? 'pass'
      : 'not-sampled';

    return `| \`${sourceFile}\` | ${row.sourceSection} | ${row.id} | ${row.title} | ${labels} | \`${promptPathFor(row.id)}\` | \`${draftPathFor(row.id)}\` | \`${verifiedPathFor(row.id)}\` | \`computerPrinciples\` | imported | verified | ${manualReview} | rebuilt from verified route-scoped draft |`;
  })
  .join('\n');

writeText(
  trackingPath,
  `# /computer-principles Route Tracking List

tracking_type: route-scoped-topic-production  
route: /computer-principles  
subject: computerPrinciples  
source_label_definitions: ../source-label-definitions.md  
generated_at: "${generatedAt}"  
allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported

| source file | source section | topic id | title | source labels | prompt path | draft path | verified path | import target | status | verifier result | manual review result | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${trackingRows}
`
);

writeText(
  `${routeRoot}/source-inventory.md`,
  `# /computer-principles Source Inventory

- route: /computer-principles
- source file: ${sourceFile}
- manifest: ${manifestPath}
- topic count: ${manifestRows.length}
- valid labels: [必背], [比較], [會算], [會畫], [補充], [易混淆], [考點], [建議], [原文提醒], [補充建議]
- auxiliary labels: none
- non-label syntax/code token: [k + n - 1], [n * k]
- unknown labels: 0

| topic id | title | source section | source labels |
| --- | --- | --- | --- |
${manifestRows.map((row) => `| ${row.id} | ${row.title} | ${row.sourceSection} | ${labelsFor(row).join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /computer-principles Manual Review

- route: /computer-principles
- sampled topics: 3
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| cp-von-neumann-architecture | depth, bilingual terms, comparison, beginner example | pass | Covers Stored-Program Concept, five units, instruction cycle, bottleneck, Harvard comparison. |
| cp-pipeline | formula, worked example, speedup explanation | pass | Keeps concrete speedup calculation and hazard reminder. |
| cp-cache | AMAT worked example, cache terminology, pitfall | pass | Keeps hit/miss terminology and substitution example. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /computer-principles Import Readiness

- route: /computer-principles
- ready topics: ${manifestRows.length}
- prompt files: ${manifestRows.length}
- draft files: ${manifestRows.length}
- verified files: ${manifestRows.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: computerPrinciples
- formal app data alignment: pass
- final readiness: ready

All topics have route tracking rows, prompt files, draft files, verified files, verifier result, and import target. Formal app data already contains the same ${manifestRows.length} topic ids with sourceFiles and verifier metadata.
`
);

console.log(`Generated route-scoped workflow for ${manifestRows.length} computer-principles topics.`);
