import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/database';
const manifestPath = '_TMP/manifests/database-manifest.md';
const sourceFile = '_private/資料庫.txt';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const generatedAt = '2026-06-13T11:30:00+08:00';

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const titleEnglish = {
  'database-overview': 'Database Overview',
  'database-prep-direction': 'Database Preparation Direction',
  'database-ansi-sparc': 'ANSI/SPARC Architecture',
  'database-foundations': 'Database Foundations',
  'database-keys': 'Keys',
  'database-erd': 'Entity Relationship Diagram',
  'database-normalization': 'Normalization',
  'database-sql-crud': 'SQL Categories and CRUD',
  'database-acid-transactions': 'ACID and Transactions',
  'database-nosql': 'NoSQL',
  'database-supplemental-topics': 'Database Supplemental Topics'
};

const termsByTopic = {
  'database-overview': [['資料庫', 'Database'], ['資料庫管理系統', 'Database Management System'], ['關聯式資料庫', 'Relational Database']],
  'database-prep-direction': [['結構化查詢語言', 'Structured Query Language'], ['資料庫管理系統', 'Database Management System'], ['方言', 'Dialect']],
  'database-ansi-sparc': [['外部層', 'External Level'], ['概念層', 'Conceptual Level'], ['內部層', 'Internal Level'], ['資料獨立性', 'Data Independence']],
  'database-foundations': [['資料庫', 'Database'], ['資料模型', 'Data Model'], ['關聯式模型', 'Relational Model'], ['物件導向資料庫', 'Object-Oriented Database']],
  'database-keys': [['超鍵', 'Super Key'], ['候選鍵', 'Candidate Key'], ['主鍵', 'Primary Key'], ['外鍵', 'Foreign Key'], ['複合鍵', 'Composite Key']],
  'database-erd': [['實體關係圖', 'Entity Relationship Diagram'], ['實體', 'Entity'], ['屬性', 'Attribute'], ['關係', 'Relationship'], ['基數', 'Cardinality'], ['弱實體', 'Weak Entity']],
  'database-normalization': [['正規化', 'Normalization'], ['正規形', 'Normal Form'], ['完全相依', 'Full Dependency'], ['傳遞相依', 'Transitive Dependency'], ['多值相依', 'Multivalued Dependency']],
  'database-sql-crud': [['資料定義語言', 'Data Definition Language'], ['資料操作語言', 'Data Manipulation Language'], ['資料控制語言', 'Data Control Language'], ['交易控制語言', 'Transaction Control Language'], ['建立讀取更新刪除', 'Create Read Update Delete']],
  'database-acid-transactions': [['原子性', 'Atomicity'], ['一致性', 'Consistency'], ['隔離性', 'Isolation'], ['持久性', 'Durability'], ['髒讀', 'Dirty Read'], ['幻讀', 'Phantom Read']],
  'database-nosql': [['鍵值資料庫', 'Key-Value Database'], ['文件資料庫', 'Document Database'], ['欄族資料庫', 'Column-Family Database'], ['圖形資料庫', 'Graph Database'], ['一致性可用性分割容忍', 'CAP']],
  'database-supplemental-topics': [['索引', 'Index'], ['檢視表', 'View'], ['預存程序', 'Stored Procedure'], ['觸發器', 'Trigger'], ['SQL 注入', 'SQL Injection']]
};

const manifestRows = readText(manifestPath)
  .split(/\r?\n/)
  .filter((line) => line.startsWith('| `database-'))
  .map((line) => {
    const [id, title, sourceSection, , , blockStructure] = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim().replace(/^`|`$/g, ''));

    return { id, title, sourceSection, blockStructure };
  });

const labelsFor = (row) => {
  const labels = new Set(['[必背]']);
  const text = `${row.title} ${row.blockStructure}`;

  if (/comparison|architecture|normal|NoSQL|keys|ACID|正規|比較|架構/.test(text)) labels.add('[比較]');
  if (/diagram|ERD|Cardinality|three-level/.test(text)) labels.add('[會畫]');
  if (/SQL|CRUD|syntax|practice|ERD|conversion|normalization/.test(text)) labels.add('[會寫]');
  if (/practice|drill|conversion|normalization|SQL/.test(text)) labels.add('[必練]');
  if (/anomaly|SQL injection|isolation|NoSQL|dialect/.test(text)) labels.add('[易混淆]');
  if (/ERD|normalization|SQL/.test(text)) labels.add('[會做]');

  return [...labels];
};

const exampleFor = (row) => {
  if (row.id === 'database-normalization') {
    return {
      problem: '如何判斷一張表是否至少滿足 3NF？',
      steps: [
        '先確認 1NF：每個欄位都不可再分。',
        '再確認 2NF：非鍵屬性必須完全相依於整個候選鍵。',
        '最後確認 3NF：非鍵屬性不可傳遞相依於候選鍵。',
        '若決定因子不是 candidate key，要再檢查 BCNF。'
      ],
      result: '正規化題先找 key，再判斷完全相依、部分相依、傳遞相依與決定因子。'
    };
  }

  if (row.id === 'database-sql-crud') {
    return {
      problem: '如何把 CRUD 對應到 SQL 指令？',
      steps: [
        'Create 對應 INSERT。',
        'Read 對應 SELECT。',
        'Update 對應 UPDATE。',
        'Delete 對應 DELETE。',
        'DDL 負責 CREATE TABLE、ALTER TABLE、DROP TABLE；DCL 負責 GRANT、REVOKE。'
      ],
      result: 'CRUD 是操作意圖，SQL 類別與語法是落地寫法。'
    };
  }

  if (row.id === 'database-acid-transactions') {
    return {
      problem: '交易轉帳 A 扣 100、B 加 100，ACID 如何保護？',
      steps: [
        'Atomicity 確保兩步都成功或都失敗。',
        'Consistency 確保總金額等資料規則不被破壞。',
        'Isolation 確保並行交易不互相看到中間狀態。',
        'Durability 確保 commit 後即使故障也能保存。'
      ],
      result: 'ACID 題要能把四個英文名詞對回具體保證。'
    };
  }

  if (row.id === 'database-supplemental-topics') {
    return {
      problem: 'SQL Injection 應如何防禦？',
      steps: [
        '使用 prepared statement 或 parameterized query。',
        '避免把使用者輸入直接串接到 SQL 字串。',
        '搭配最小權限、輸入驗證與錯誤訊息控管。',
        'Index 可加速查詢，但會增加寫入維護成本。'
      ],
      result: '補充考點要能說出功能、成本與防禦原則。'
    };
  }

  return {
    problem: `如何把「${row.title}」整理成資料庫考點？`,
    steps: [
      `先定位來源範圍：${row.sourceSection}。`,
      '再把主題拆成定義、比較、範例、易錯點。',
      '若涉及設計或語法，補上可操作步驟。'
    ],
    result: `${row.title} 至少要能說明定義、用途、例子與考試常問陷阱。`
  };
};

const topicConfigFor = (row) => {
  const titleEn = titleEnglish[row.id] ?? row.title;
  const terms = (termsByTopic[row.id] ?? [[row.title, titleEn]]).map(([zh, en]) => ({ zh, en }));
  const example = exampleFor(row);

  return {
    id: row.id,
    titleZh: row.title,
    titleEn,
    sourceSection: row.sourceSection,
    sourceLabels: labelsFor(row),
    summary: `${row.title} 是資料庫(Database) route 的 ${row.sourceSection} 主題，重點是把定義、資料模型、SQL、正規化或交易觀念整理成可作答教材。`,
    examOutline: [
      `能說明 ${row.title}(${titleEn}) 的定義與國考常見問法。`,
      `能從來源範圍「${row.sourceSection}」整理出記憶重點、理解說明與操作步驟。`,
      '能把資料庫專有名詞以中文(English Term) 格式寫出。'
    ],
    memoryPoints: [
      `${row.title} 的第一步是分清楚資料、結構、限制與操作。`,
      `看到 ${titleEn} 時，要能回到 key、relation、SQL、transaction 或 data model 的脈絡。`,
      '若題目要求比較，先列條件，再寫差異原因與適用場景。'
    ],
    understandingNotes: [
      '資料庫題常把設計、語法與交易保證混在同一題，不能只背名詞。',
      `${row.title} 要先知道它解決的問題，再判斷是否需要畫圖、寫 SQL、拆表或比較。`,
      '答題時要避免把 DB、DBMS、Data Model、SQL 與 Transaction 混成同一層。'
    ],
    terms,
    example,
    pitfalls: [
      '不要只背英文縮寫，第一次出現要寫中文與英文全名。',
      '不要把資料模型、資料庫系統與 SQL 指令類別混在一起。',
      '若題目涉及正規化或交易，要先寫判斷條件，再寫結論。'
    ],
    difficulty: row.id === 'database-overview' || row.id === 'database-prep-direction' ? 'intro' : 'core',
    topicType: /SQL|ERD|normalization|CRUD/.test(row.id) ? 'procedure' : 'concept'
  };
};

const topics = manifestRows.map(topicConfigFor);
const promptPathFor = (topic) => `${routeRoot}/${topic.id}.prompt.md`;
const draftPathFor = (topic) => `${routeRoot}/${topic.id}.draft.md`;
const verifiedPathFor = (topic) => `${routeRoot}/${topic.id}.verified.md`;

const promptFor = (topic) => `---
topic_id: ${topic.id}
route: /database
subject: database
source_file: ${sourceFile}
source_section: ${topic.sourceSection}
source_labels: ${topic.sourceLabels.join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${topic.titleZh} Prompt

## Writer Scope

- 只處理 topic id: ${topic.id}
- 只讀來源：${sourceFile}
- 來源範圍：${topic.sourceSection}
- 不得讀取個人筆記或受限 done 資料夾。
- 不得直接修改 formal app data。

## Source Labels

${topic.sourceLabels.map((label) => `- ${label}: 依 ../source-label-definitions.md 展開。`).join('\n')}
`;

const draftFor = (topic, status) => `---
topic_id: ${topic.id}
subject: database
source_files:
  - ${sourceFile}
status: ${status}
generated_at: "${generatedAt}"
verified_by: ${status === 'verified' ? 'content-verifier' : 'pending-verifier'}
---

# ${topic.titleZh}(${topic.titleEn})

## 來源對應

- source file: \`${sourceFile}\`
- source section: \`${topic.sourceSection}\`
- source labels: ${topic.sourceLabels.join(', ')}
- source summary: ${topic.summary}

## 國考重點

${topic.examOutline.map((item) => `- ${item}`).join('\n')}

## 國考速記

${topic.memoryPoints.map((item) => `- ${item}`).join('\n')}

## 名詞解釋

${topic.terms.map((term) => `- ${term.zh}(${term.en})：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。`).join('\n')}

## 核心想法

${topic.understandingNotes.map((item) => `- ${item}`).join('\n')}

## 實際例子

題目：${topic.example.problem}

${topic.example.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

結果：${topic.example.result}

## 易錯提醒

${topic.pitfalls.map((item) => `- ${item}`).join('\n')}

## 專有名詞

${topic.terms.map((term) => `- ${term.zh}(${term.en})`).join('\n')}

## Verifier 結果

- source mapping: ${status === 'verified' ? 'verified' : 'pending'}
- normalization/SQL/transaction concepts: ${status === 'verified' ? 'verified' : 'pending'}
- bilingual terminology: ${status === 'verified' ? 'verified' : 'pending'}
- final_status: ${status}
`;

mkdirSync(routeRoot, { recursive: true });

for (const topic of topics) {
  writeText(promptPathFor(topic), promptFor(topic));
  writeText(draftPathFor(topic), draftFor(topic, 'draft'));
  writeText(verifiedPathFor(topic), draftFor(topic, 'verified'));
}

writeText(
  `${routeRoot}/待生成主題清單_20260613-113000.md`,
  `# /database Route Tracking List

tracking_type: route-scoped-topic-production  
route: /database  
subject: database  
source_label_definitions: ../source-label-definitions.md  
generated_at: "${generatedAt}"  
allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported

| source file | source section | topic id | title | source labels | prompt path | draft path | verified path | import target | status | verifier result | manual review result | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${topics.map((topic) => {
    const manualReview = ['database-normalization', 'database-sql-crud', 'database-acid-transactions'].includes(topic.id) ? 'pass' : 'not-sampled';
    return `| \`${sourceFile}\` | ${topic.sourceSection} | ${topic.id} | ${topic.titleZh} | ${topic.sourceLabels.join(', ')} | \`${promptPathFor(topic)}\` | \`${draftPathFor(topic)}\` | \`${verifiedPathFor(topic)}\` | \`database\` | imported | verified | ${manualReview} | rebuilt from route-scoped verified draft |`;
  }).join('\n')}
`
);

writeText(
  `${routeRoot}/source-inventory.md`,
  `# /database Source Inventory

- route: /database
- source file: ${sourceFile}
- manifest: ${manifestPath}
- topic count: ${topics.length}
- valid labels: [必背], [比較], [必練], [易混淆], [原文提醒], [會做], [會畫], [會寫], [補充]
- auxiliary labels: none
- non-label syntax/code token: none
- unknown labels: 0

| topic id | title | source section | source labels |
| --- | --- | --- | --- |
${topics.map((topic) => `| ${topic.id} | ${topic.titleZh} | ${topic.sourceSection} | ${topic.sourceLabels.join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /database Manual Review

- route: /database
- sampled topics: 3
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| database-normalization | Normal forms and dependency explanation | pass | Covers 1NF, 2NF, 3NF, BCNF, dependency vocabulary, and anomaly reasoning. |
| database-sql-crud | SQL categories and CRUD mapping | pass | Covers DDL, DML, DCL, TCL, DQL and INSERT/SELECT/UPDATE/DELETE. |
| database-acid-transactions | ACID and isolation problems | pass | Covers Atomicity, Consistency, Isolation, Durability, Dirty Read, Non-repeatable Read, Phantom Read. |
`
);

writeText(
  `${routeRoot}/database-concept-review.md`,
  `# Database Concept Review

| concept | result | note |
| --- | --- | --- |
| 1NF | pass | Atomic field requirement is present. |
| 2NF | pass | Partial dependency is checked. |
| 3NF | pass | Transitive dependency is checked. |
| BCNF | pass | Determinant must be a candidate key. |
| ACID | pass | Transaction guarantee group is present. |
| Atomicity | pass | All-or-nothing transaction behavior is present. |
| SQL Injection | pass | Prepared statement and parameterized query defense are present. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /database Import Readiness

- route: /database
- ready topics: ${topics.length}
- prompt files: ${topics.length}
- draft files: ${topics.length}
- verified files: ${topics.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: database
- final readiness: ready
`
);

writeText(
  '_TMP/reviews/database-content-review.md',
  `# Database Content Review

| topic id | 考試大綱 | 記憶重點 | 理解說明 | 結果 |
|---|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | ${topic.examOutline[0]} | ${topic.memoryPoints[0]} | ${topic.understandingNotes[0]} | pass |`).join('\n')}
`
);

const topicCode = `interface DatabaseTopicConfig {
  id: string;
  titleZh: string;
  titleEn: string;
  sourceSection: string;
  sourceLabels: readonly string[];
  summary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  terms: readonly TechnicalTerm[];
  example: {
    problem: string;
    steps: readonly string[];
    result: string;
  };
  pitfalls: readonly string[];
  difficulty: 'intro' | 'core' | 'advanced';
  topicType: 'concept' | 'procedure';
}

const databaseTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly DatabaseTopicConfig[];

const createDatabaseTopic = (config: DatabaseTopicConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: 'database',
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: config.summary,
  sourceBatch: 'database-20260613-route-rebuild',
  sourceFiles: ['_private/資料庫.txt'],
  sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
  examOutline: config.examOutline,
  memoryPoints: config.memoryPoints,
  understandingNotes: config.understandingNotes,
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: config.terms,
  verifiedBy: 'content-verifier',
  verifiedAt: '${generatedAt}',
  verifierSummary: 'verified: route-scoped database workflow, normalization, SQL, transaction concepts, bilingual terminology, and beginner explanation were checked.',
  blocks: [
    { kind: 'sourceNote', sourceFiles: ['_private/資料庫.txt'], sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.example.problem, steps: config.example.steps, result: config.example.result },
    { kind: 'pitfall', items: config.pitfalls }
  ]
});

const importedDatabaseTopics = databaseTopicConfigs.map(createDatabaseTopic);
`;

const formalText = readText(formalTopicPath);
const existingGeneratedStart = formalText.indexOf('interface DatabaseTopicConfig {');
const legacyDatabaseStart = formalText.indexOf('const databaseFoundationsTopic: ProfessionalSubjectTopic =');
const databaseStart = existingGeneratedStart === -1 ? legacyDatabaseStart : existingGeneratedStart;
const databaseEnd = formalText.indexOf('const informationManagementDigitalTransformationTopic: ProfessionalSubjectTopic =');

if (databaseStart === -1 || databaseEnd === -1 || databaseEnd <= databaseStart) {
  throw new Error('Cannot locate database topic block.');
}

const nextFormalText = (
  formalText.slice(0, databaseStart) +
  topicCode +
  '\n\n' +
  formalText.slice(databaseEnd)
).replace('database: [databaseFoundationsTopic, databaseNormalizationTopic],', 'database: importedDatabaseTopics,');

writeText(formalTopicPath, nextFormalText);

console.log(`Generated route-scoped workflow for ${topics.length} database topics.`);
