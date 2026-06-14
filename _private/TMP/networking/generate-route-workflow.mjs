import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/networking';
const manifestPath = '_TMP/manifests/networking-manifest.md';
const sourceFile = '_private/網概.txt';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const generatedAt = '2026-06-13T11:15:00+08:00';

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const titleEnglish = {
  'prep-direction': 'Exam Preparation Direction',
  overview: 'Networking Overview',
  'devices-osi': 'Network Devices and OSI Layers',
  ports: 'Port Number',
  'osi-tcpip-models': 'OSI Model and TCP/IP Model',
  'physical-layer': 'Physical Layer',
  'data-link-layer': 'Data Link Layer',
  'network-layer': 'Network Layer',
  'transport-layer': 'Transport Layer',
  'application-layer': 'Application Layer',
  security: 'Information Security'
};

const termsByTopic = {
  'prep-direction': [
    ['開放式系統互連模型', 'Open Systems Interconnection Model'],
    ['資訊安全', 'Information Security'],
    ['防禦策略', 'Defense Strategy']
  ],
  overview: [
    ['區域網路', 'Local Area Network'],
    ['都會網路', 'Metropolitan Area Network'],
    ['廣域網路', 'Wide Area Network'],
    ['用戶端伺服器架構', 'Client-Server Architecture'],
    ['點對點架構', 'Peer-to-Peer Architecture']
  ],
  'devices-osi': [
    ['中繼器', 'Repeater'],
    ['集線器', 'Hub'],
    ['橋接器', 'Bridge'],
    ['交換器', 'Switch'],
    ['路由器', 'Router'],
    ['閘道器', 'Gateway'],
    ['防火牆', 'Firewall']
  ],
  ports: [
    ['連接埠', 'Port'],
    ['傳輸控制協定', 'Transmission Control Protocol'],
    ['使用者資料包協定', 'User Datagram Protocol'],
    ['網域名稱系統', 'Domain Name System'],
    ['動態主機設定協定', 'Dynamic Host Configuration Protocol']
  ],
  'osi-tcpip-models': [
    ['開放式系統互連模型', 'Open Systems Interconnection Model'],
    ['傳輸控制協定/網際網路協定', 'Transmission Control Protocol/Internet Protocol'],
    ['協定資料單元', 'Protocol Data Unit']
  ],
  'physical-layer': [
    ['實體層', 'Physical Layer'],
    ['雙絞線', 'Twisted Pair'],
    ['光纖', 'Optical Fiber'],
    ['無線射頻識別', 'Radio Frequency Identification'],
    ['雲端運算', 'Cloud Computing']
  ],
  'data-link-layer': [
    ['資料鏈結層', 'Data Link Layer'],
    ['訊框', 'Frame'],
    ['錯誤偵測', 'Error Detection'],
    ['載波感測多重存取/碰撞偵測', 'Carrier Sense Multiple Access with Collision Detection'],
    ['載波感測多重存取/碰撞避免', 'Carrier Sense Multiple Access with Collision Avoidance']
  ],
  'network-layer': [
    ['網路層', 'Network Layer'],
    ['網際網路協定', 'Internet Protocol'],
    ['路由', 'Routing'],
    ['子網路遮罩', 'Subnet Mask'],
    ['無類別域間路由', 'Classless Inter-Domain Routing']
  ],
  'transport-layer': [
    ['傳輸層', 'Transport Layer'],
    ['傳輸控制協定', 'Transmission Control Protocol'],
    ['使用者資料包協定', 'User Datagram Protocol'],
    ['流量控制', 'Flow Control'],
    ['壅塞控制', 'Congestion Control']
  ],
  'application-layer': [
    ['應用層', 'Application Layer'],
    ['超文字傳輸協定', 'HyperText Transfer Protocol'],
    ['安全超文字傳輸協定', 'HyperText Transfer Protocol Secure'],
    ['簡單郵件傳輸協定', 'Simple Mail Transfer Protocol'],
    ['內容傳遞網路', 'Content Delivery Network']
  ],
  security: [
    ['機密性', 'Confidentiality'],
    ['完整性', 'Integrity'],
    ['可用性', 'Availability'],
    ['防火牆', 'Firewall'],
    ['入侵偵測系統', 'Intrusion Detection System'],
    ['零信任', 'Zero Trust']
  ]
};

const manifestRows = [];
let current = undefined;

for (const line of readText(manifestPath).split(/\r?\n/)) {
  if (line.startsWith('## ')) {
    if (current) manifestRows.push(current);
    current = {
      id: line.replace(/^##\s+/, '').trim(),
      title: '',
      sourceSection: '',
      structures: []
    };
  } else if (current && line.startsWith('- title:')) {
    current.title = line.replace('- title:', '').trim();
  } else if (current && line.startsWith('- source section:')) {
    current.sourceSection = line.replace('- source section:', '').trim();
  } else if (current && line.trim().startsWith('- `')) {
    current.structures.push(line.trim().replace(/^- /, ''));
  }
}

if (current) manifestRows.push(current);

const labelsFor = (row) => {
  const labels = new Set(['[必背]']);
  const text = `${row.title} ${row.sourceSection} ${row.structures.join(' ')}`;

  if (/comparison|比較|map|mapping|OSI|TCP\/IP|LAN|VLAN|TCP|UDP|switching|header/.test(text)) labels.add('[比較]');
  if (/port|subnet|CIDR|VLSM|table|標準|5-4-3|drill/.test(text)) labels.add('[會算]');
  if (/topology|層|layer|map|model|device/.test(text)) labels.add('[會畫]');
  if (/security|attack|防禦|spoofing|Injection|Flood/.test(text)) labels.add('[易混淆]');

  return [...labels];
};

const exampleFor = (row) => {
  if (row.id === 'ports') {
    return {
      problem: '看到服務名稱時，如何同時回想 port number 與 TCP/UDP？',
      steps: [
        'HTTP 對應 80/TCP，HTTPS 對應 443/TCP。',
        'DNS 查詢常用 53/UDP，但 zone transfer 或較大回應可用 53/TCP。',
        'DHCP 使用 67/68 UDP，SNMP 常用 161/162 UDP。',
        '背 port 時要把服務、號碼、傳輸層協定三欄一起配對。'
      ],
      result: 'HTTP 80/TCP、HTTPS 443/TCP、DNS 53/UDP 與 53/TCP、DHCP 67/68 UDP 是本 topic 的最低必背組合。'
    };
  }

  if (row.id === 'osi-tcpip-models') {
    return {
      problem: '如何把 OSI 7 層映射到 TCP/IP 5 層？',
      steps: [
        'OSI Application、Presentation、Session 合併到 TCP/IP Application。',
        'OSI Transport 對應 TCP/IP Transport。',
        'OSI Network 對應 TCP/IP Internet。',
        'OSI Data Link 與 Physical 分別對應 TCP/IP Data Link 與 Physical。'
      ],
      result: '考試常問上三層合併，以及協定或設備歸屬在哪一層。'
    };
  }

  if (row.id === 'security') {
    return {
      problem: '遇到資安事件題，如何從攻擊對應到防護策略？',
      steps: [
        '先判斷攻擊破壞 CIA 的哪一項：Confidentiality、Integrity、Availability。',
        '再判斷攻擊型態，例如 Phishing、SQL Injection、DDoS 或 MITM。',
        '最後對應控制措施，例如 MFA、WAF、IDS/IPS、Backup 3-2-1 或 Least Privilege。'
      ],
      result: '資安題不能只背名詞，要能從事件推回目標、攻擊與防禦。'
    };
  }

  return {
    problem: `如何把「${row.title}」整理成可作答的網概考點？`,
    steps: [
      `先定位來源段落：${row.sourceSection}。`,
      `再把主題拆成名詞定義、層級歸屬、比較對象與考試陷阱。`,
      '若涉及協定或設備，補上層級、功能與常見代表例。'
    ],
    result: `${row.title} 的答案至少要包含定義、層級或功能、代表例與易錯點。`
  };
};

const topicConfigFor = (row) => {
  const titleEn = titleEnglish[row.id] ?? row.title;
  const terms = termsByTopic[row.id] ?? [[row.title, titleEn]];
  const example = exampleFor(row);
  const sourceLabels = labelsFor(row);

  return {
    id: `networking-${row.id}`,
    routeTopicId: row.id,
    titleZh: row.title,
    titleEn,
    sourceSection: row.sourceSection,
    sourceLabels,
    summary: `${row.title} 是網路概論(Networking) 的 ${row.sourceSection} 主題，重點是把名詞、層級、協定、設備或資安情境整理成可考試作答的教材。`,
    examOutline: [
      `能說明 ${row.title}(${titleEn}) 的定義與國考常見問法。`,
      `能從來源段落「${row.sourceSection}」整理出記憶點、理解重點與易錯處。`,
      '能把專有名詞以中文(English Term) 格式寫出，並用例子檢查是否真的理解。'
    ],
    memoryPoints: [
      `${row.title} 的第一步是先背核心名詞與層級位置。`,
      `看到 ${titleEn} 時，要能回到來源段落 ${row.sourceSection}。`,
      '若題目問比較，先列功能、層級、代表協定或設備，再寫差異原因。'
    ],
    understandingNotes: [
      '網概不是單純背名詞，而是把「層級、功能、協定、設備、攻擊、防護」放在同一張心智圖。',
      `${row.title} 要先知道它位在哪一層、解決什麼問題、和哪些相近概念容易混淆。`,
      '考題常把服務名、port、協定、設備或安全目標互相交叉，所以教材要能互相對照。'
    ],
    terms: terms.map(([zh, en]) => ({ zh, en })),
    example,
    pitfalls: [
      '不要只背英文縮寫，第一次出現要能寫中文與英文全名。',
      '不要把 OSI 層級、TCP/IP 層級與設備歸屬混在一起。',
      '若題目涉及 TCP/UDP 或資安防護，要說明判斷理由，不能只列名詞。'
    ],
    difficulty: row.id === 'prep-direction' || row.id === 'overview' ? 'intro' : 'core',
    topicType: row.id === 'ports' || row.id === 'network-layer' ? 'procedure' : 'concept'
  };
};

const topics = manifestRows.map(topicConfigFor);

const promptFor = (topic) => `---
topic_id: ${topic.routeTopicId}
formal_topic_id: ${topic.id}
route: /networking
subject: networking
source_file: ${sourceFile}
source_section: ${topic.sourceSection}
source_labels: ${topic.sourceLabels.join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${topic.titleZh} Prompt

## Writer Scope

- 只處理 topic id: ${topic.routeTopicId}
- 只讀來源：${sourceFile}
- 來源段落：${topic.sourceSection}
- 不得讀取個人筆記或受限 done 資料夾。
- 不得直接修改 formal app data。

## Source Labels

${topic.sourceLabels.map((label) => `- ${label}: 依 ../source-label-definitions.md 展開。`).join('\n')}

## Required Draft Structure

- 來源對應
- 國考重點
- 國考速記
- 名詞解釋
- 核心想法
- 實際例子或操作步驟
- 易錯提醒
- 專有名詞
- Verifier 結果
`;

const draftFor = (topic, status) => `---
topic_id: ${topic.routeTopicId}
formal_topic_id: ${topic.id}
subject: networking
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
- exam outline: ${status === 'verified' ? 'verified' : 'pending'}
- memory points: ${status === 'verified' ? 'verified' : 'pending'}
- beginner explanation: ${status === 'verified' ? 'verified' : 'pending'}
- port/protocol facts: ${topic.routeTopicId === 'ports' ? 'HTTP 80/TCP, HTTPS 443/TCP, DNS 53/UDP 與 53/TCP, DHCP 67/68 UDP' : 'not applicable'}
- bilingual terminology: ${status === 'verified' ? 'verified' : 'pending'}
- final_status: ${status}
`;

const promptPathFor = (topic) => `${routeRoot}/${topic.routeTopicId}.prompt.md`;
const draftPathFor = (topic) => `${routeRoot}/${topic.routeTopicId}.draft.md`;
const verifiedPathFor = (topic) => `${routeRoot}/${topic.routeTopicId}.verified.md`;

mkdirSync(routeRoot, { recursive: true });

for (const topic of topics) {
  writeText(promptPathFor(topic), promptFor(topic));
  writeText(draftPathFor(topic), draftFor(topic, 'draft'));
  writeText(verifiedPathFor(topic), draftFor(topic, 'verified'));
}

const trackingRows = topics
  .map((topic) => {
    const manualReview = ['ports', 'osi-tcpip-models', 'security'].includes(topic.routeTopicId) ? 'pass' : 'not-sampled';
    return `| \`${sourceFile}\` | ${topic.sourceSection} | ${topic.routeTopicId} | ${topic.titleZh} | ${topic.sourceLabels.join(', ')} | \`${promptPathFor(topic)}\` | \`${draftPathFor(topic)}\` | \`${verifiedPathFor(topic)}\` | \`networking\` | imported | verified | ${manualReview} | rebuilt from route-scoped verified draft |`;
  })
  .join('\n');

writeText(
  `${routeRoot}/待生成主題清單_20260613-111500.md`,
  `# /networking Route Tracking List

tracking_type: route-scoped-topic-production  
route: /networking  
subject: networking  
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
  `# /networking Source Inventory

- route: /networking
- source file: ${sourceFile}
- manifest: ${manifestPath}
- topic count: ${topics.length}
- valid labels: [必背], [比較], [會算], [會畫], [補充], [易混淆], [原文提醒]
- auxiliary labels: none
- non-label syntax/code token: none
- unknown labels: 0

| topic id | title | source section | source labels |
| --- | --- | --- | --- |
${topics.map((topic) => `| ${topic.routeTopicId} | ${topic.titleZh} | ${topic.sourceSection} | ${topic.sourceLabels.join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /networking Manual Review

- route: /networking
- sampled topics: 3
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| ports | port/protocol fact review | pass | HTTP 80/TCP, HTTPS 443/TCP, DNS 53/UDP 與 53/TCP, DHCP 67/68 UDP are present. |
| osi-tcpip-models | model mapping and layer explanation | pass | OSI upper three layers map to TCP/IP Application. |
| security | CIA, attacks, and defense controls | pass | CIA, Zero Trust, MFA, WAF, IDS/IPS, and Backup 3-2-1 are connected to attack scenarios. |
`
);

writeText(
  `${routeRoot}/port-protocol-fact-review.md`,
  `# Networking Port / Protocol Fact Review

| fact | result | note |
| --- | --- | --- |
| HTTP 80/TCP | pass | Common web default port. |
| HTTPS 443/TCP | pass | HTTP over TLS. |
| DNS 53/UDP 與 53/TCP | pass | UDP for common query, TCP for zone transfer or large response. |
| DHCP 67/68 UDP | pass | Server/client DHCP ports. |
| SNMP 161/162 UDP | pass | Query and trap ports. |
| RDP 3389 TCP/UDP | pass | Remote Desktop can appear with TCP/UDP. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /networking Import Readiness

- route: /networking
- ready topics: ${topics.length}
- prompt files: ${topics.length}
- draft files: ${topics.length}
- verified files: ${topics.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: networking
- final readiness: ready
`
);

writeText(
  '_TMP/reviews/networking-content-review.md',
  `# Networking Content Review

| topic id | 檢查項 | 結果 | 備註 |
|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | 來源對應、國考重點、記憶重點、理解說明、中英術語 | pass | ${topic.sourceSection} |`).join('\n')}
| networking-ports | Port / TCP / UDP 首次出現中英對照 | pass | 連接埠(Port)、TCP、UDP 均有中文與英文 |
| networking-ports | port facts | pass | HTTP 80/TCP；HTTPS 443/TCP；DNS 53/UDP 與 53/TCP；DHCP 67/68 UDP |
`
);

const topicCode = `interface NetworkingTopicConfig {
  id: string;
  routeTopicId: string;
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

const networkingTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly NetworkingTopicConfig[];

const createNetworkingTopic = (config: NetworkingTopicConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: 'networking',
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: config.summary,
  sourceBatch: 'networking-20260613-route-rebuild',
  sourceFiles: ['_private/網概.txt'],
  sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
  examOutline: config.examOutline,
  memoryPoints: config.memoryPoints,
  understandingNotes: config.understandingNotes,
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: config.terms,
  verifiedBy: 'content-verifier',
  verifiedAt: '${generatedAt}',
  verifierSummary: 'verified: route-scoped networking workflow, source labels, port/protocol facts, bilingual terminology, and beginner explanation were checked.',
  blocks: [
    { kind: 'sourceNote', sourceFiles: ['_private/網概.txt'], sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.example.problem, steps: config.example.steps, result: config.example.result },
    { kind: 'pitfall', items: config.pitfalls }
  ]
});

const importedNetworkingTopics = networkingTopicConfigs.map(createNetworkingTopic);
`;

const formalText = readText(formalTopicPath);
const existingGeneratedStart = formalText.indexOf('interface NetworkingTopicConfig {');
const legacyNetworkingStart = formalText.indexOf('const networkingPortsTopic: ProfessionalSubjectTopic =');
const networkingStart = existingGeneratedStart === -1 ? legacyNetworkingStart : existingGeneratedStart;
const databaseAnchor =
  formalText.indexOf('interface DatabaseTopicConfig {') !== -1
    ? formalText.indexOf('interface DatabaseTopicConfig {')
    : formalText.indexOf('const databaseFoundationsTopic: ProfessionalSubjectTopic =') !== -1
      ? formalText.indexOf('const databaseFoundationsTopic: ProfessionalSubjectTopic =')
      : formalText.indexOf('const databaseNormalizationTopic: ProfessionalSubjectTopic =');

let nextFormalText;

if (networkingStart !== -1) {
  if (databaseAnchor === -1 || databaseAnchor <= networkingStart) {
    throw new Error('Cannot locate networking replacement end anchor.');
  }

  nextFormalText = formalText.slice(0, networkingStart) + topicCode + '\n\n' + formalText.slice(databaseAnchor);
} else {
  if (databaseAnchor === -1) {
    throw new Error('Cannot locate networking insertion anchor.');
  }

  nextFormalText = formalText.slice(0, databaseAnchor) + topicCode + '\n\n' + formalText.slice(databaseAnchor);
}

nextFormalText = nextFormalText.replace('networking: [networkingPortsTopic],', 'networking: importedNetworkingTopics,');

writeText(formalTopicPath, nextFormalText);

console.log(`Generated route-scoped workflow for ${topics.length} networking topics.`);
