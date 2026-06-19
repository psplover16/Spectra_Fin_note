import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import type { LessonArticleContentBlock } from '@/modules/subjectTopics/types/subjectTopic';

const readText = (path: string) => readFileSync(path, 'utf8');

const professionalSubjectKeys = [
  'computerPrinciples',
  'computerPrinciplesV2',
  'networking',
  'digitalLogic',
  'operatingSystems',
  'database',
  'informationManagement',
  'programming',
  'algorithms',
  'systemDesign'
] as const;

const expectedCounts = {
  computerPrinciples: 18,
  computerPrinciplesV2: 13,
  networking: 11,
  digitalLogic: 5,
  operatingSystems: 11,
  database: 17,
  informationManagement: 14,
  programming: 46,
  algorithms: 31,
  systemDesign: 5
} as const;

const staleDisplayedBlockKinds = [
  'sourceNote',
  'examOutline',
  'memoryPoints',
  'understanding',
  'termList',
  'workedExample',
  'pitfall',
  'complexityTable'
];

const generatedContentPhrases = [
  '來源大綱不是成品',
  '教材本文',
  '學習標記',
  'Stored-program Concept',
  '最小背誦句',
  'Java code:',
  'old fixed template removed'
];

const commonUnitsTopicId = 'cp-common-units';
const filledTopicId = 'cp-von-neumann-architecture';
const turingTopicId = 'cp-turing-machine-and-test';
const machineInstructionCycleTopicId = 'cp-machine-instruction-cycle';
const pipelineTopicId = 'cp-pipeline';
const hazardTopicId = 'cp-hazard';
const busTopicId = 'cp-bus';
const usbSpeedTopicId = 'cp-usb-speed';
const baseConversionTopicId = 'cp-base-conversion';
const complementConversionTopicId = 'cp-complement-conversion';
const floatingPointConversionTopicId = 'cp-floating-point-conversion';
const codesAndCheckCodesTopicId = 'cp-codes-and-check-codes';
const computerPrinciplesV2TopicIds = [
  'cpv2-architecture-computation-theory',
  'cpv2-machine-instruction-cycle',
  'cpv2-pipeline-hazard',
  'cpv2-performance-risc-cisc',
  'cpv2-bus-usb',
  'cpv2-memory-hierarchy-classification',
  'cpv2-registers-cache',
  'cpv2-base-conversion',
  'cpv2-complement-conversion',
  'cpv2-floating-point-conversion',
  'cpv2-codes-and-character-sets',
  'cpv2-parity-crc',
  'cpv2-hamming-code-distance'
] as const;
const markdownBackedComputerPrinciplesTopicIds = [
  'cp-performance-formulas',
  'cp-risc-cisc',
  'cp-memory-hierarchy',
  'cp-memory-classification',
  'cp-registers',
  'cp-cache'
] as const;
const commonUnitsSources = ['_private/計算機概論.txt', '_private/discuss.txt'];
const vonNeumannSources = ['_private/計算機概論.txt', '_private/MD/馮紐曼架構.md'];
const turingSources = ['_private/計算機概論.txt', '_private/MD/二、圖靈機與圖靈測試.md'];
const machineInstructionCycleSources = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md'
];
const pipelineSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/四、Pipeline（管線化）_新手國考教材.md'];
const hazardSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十二、Hazard_新手國考教材.md'];
const busSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/五、匯流排（Bus）_新手國考教材.md'];
const usbSpeedSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十三、USB 速度_新手國考教材.md'];
const baseConversionSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十四、進制轉換_新手國考教材.md'];
const complementConversionSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十五、補數轉換_新手國考教材.md'];
const floatingPointConversionSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十六、浮點數轉換_新手國考教材.md'];
const codesAndCheckCodesSources = ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md'];
const digitalLogicTopicIds = [
  'cp-digital-logic-basics',
  'cp-sop-pos',
  'cp-karnaugh-map',
  'cp-universal-gates',
  'cp-combinational-sequential-circuits'
] as const;
const digitalLogicSourcesByTopicId = {
  'cp-digital-logic-basics': ['_private/計算機概論.txt', '_private/MD/計概/3b數位邏輯/一、基本邏輯_新手國考教材.md'],
  'cp-sop-pos': ['_private/計算機概論.txt', '_private/MD/計概/3b數位邏輯/二、SOP 與 POS_新手國考教材.md'],
  'cp-karnaugh-map': ['_private/計算機概論.txt', '_private/MD/計概/3b數位邏輯/三、卡諾圖化簡_新手國考教材.md'],
  'cp-universal-gates': ['_private/計算機概論.txt', '_private/MD/計概/3b數位邏輯/四、萬用閘_新手國考教材.md'],
  'cp-combinational-sequential-circuits': [
    '_private/計算機概論.txt',
    '_private/MD/計概/3b數位邏輯/五、組合與循序電路_新手國考教材.md'
  ]
} as const satisfies Record<(typeof digitalLogicTopicIds)[number], readonly string[]>;
const digitalLogicExpectedTitlesByTopicId = {
  'cp-digital-logic-basics': '基本邏輯(Digital Logic Basics)',
  'cp-sop-pos': 'SOP 與 POS(SOP and POS)',
  'cp-karnaugh-map': '卡諾圖化簡(Karnaugh Map Simplification)',
  'cp-universal-gates': '萬用閘(Universal Gates)',
  'cp-combinational-sequential-circuits': '組合與循序電路(Combinational and Sequential Circuits)'
} as const satisfies Record<(typeof digitalLogicTopicIds)[number], string>;
const operatingSystemTopicIds = [
  'cp-os-basics',
  'cp-io-and-interrupts',
  'cp-os-structure',
  'cp-process',
  'cp-cpu-scheduling',
  'cp-deadlock',
  'cp-process-communication',
  'cp-memory-management',
  'cp-virtual-memory',
  'cp-disk-management'
] as const;
const operatingSystemSourcesByTopicId = {
  'cp-os-basics': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/3-1. OS 基礎概念.md'],
  'cp-io-and-interrupts': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/3-2. IO 中斷方式 與 硬體保護.md'],
  'cp-os-structure': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/3-4_OS結構.md'],
  'cp-process': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-5上_Process基礎.md'],
  'cp-cpu-scheduling': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-5下_CPU排程演算法.md'],
  'cp-deadlock': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-6_Deadlock.md'],
  'cp-process-communication': [
    '_private/計算機概論.txt',
    '_private/MD/計概/3c作業系統/作業系統_3-7_ProcessCommunication_跳過分析.md'
  ],
  'cp-memory-management': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-8_記憶體管理.md'],
  'cp-virtual-memory': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-9_虛擬記憶體.md'],
  'cp-disk-management': ['_private/計算機概論.txt', '_private/MD/計概/3c作業系統/作業系統_3-10_磁碟管理.md']
} as const satisfies Record<(typeof operatingSystemTopicIds)[number], readonly string[]>;
const operatingSystemExpectedTitlesByTopicId = {
  'cp-os-basics': 'OS 基礎概念(Operating System Basics)',
  'cp-io-and-interrupts': 'I/O 中斷方式 與 硬體保護(I/O and Interrupts)',
  'cp-os-structure': 'OS 的結構(Operating System Structure)',
  'cp-process': 'Process 基礎(Process)',
  'cp-cpu-scheduling': 'CPU 排程演算法(CPU Scheduling)',
  'cp-deadlock': 'Deadlock（死結）(Deadlock)',
  'cp-process-communication': 'Process Communication(Process Communication)',
  'cp-memory-management': 'Memory Management（記憶體管理）(Memory Management)',
  'cp-virtual-memory': 'Virtual Memory（虛擬記憶體）(Virtual Memory)',
  'cp-disk-management': 'Disk Management（磁碟管理）(Disk Management)'
} as const satisfies Record<(typeof operatingSystemTopicIds)[number], string>;
const operatingSystemRepresentativeKeywordsByTopicId = {
  'cp-os-basics': ['OS 分類比較表'],
  'cp-io-and-interrupts': ['Polling', 'DMA'],
  'cp-os-structure': ['Command', 'System Call'],
  'cp-process': ['Process State'],
  'cp-cpu-scheduling': ['甘特圖', '平均等待'],
  'cp-deadlock': ['銀行家演算法'],
  'cp-process-communication': ['這章我跳過'],
  'cp-memory-management': ['TLB', 'Fragmentation'],
  'cp-virtual-memory': ['EMAT', 'Page Replacement'],
  'cp-disk-management': ['Disk Scheduling', 'RAID']
} as const satisfies Record<(typeof operatingSystemTopicIds)[number], readonly string[]>;
const networkingSourceText = '_private/網概.txt';
const networkingTopicCases = [
  {
    id: 'networking-osi-tcpip',
    mdSource: '_private/MD/網概/網路概論_1_OSI七層與TCPIP.md',
    sourceSummaryPhrase: 'OSI',
    keyword: 'OSI 七層'
  },
  {
    id: 'networking-basics',
    mdSource: '_private/MD/網概/網路概論_2_基礎概念.md',
    sourceSummaryPhrase: '基礎概念',
    keyword: 'LAN vs MAN vs WAN'
  },
  {
    id: 'networking-devices-osi',
    mdSource: '_private/MD/網概/網路概論_3_網路設備對應層級.md',
    sourceSummaryPhrase: '網路設備',
    keyword: '碰撞域'
  },
  {
    id: 'networking-ip-subnetting',
    mdSource: '_private/MD/網概/網路概論_4上_IP與子網路計算.md',
    sourceSummaryPhrase: 'IP',
    keyword: 'VLSM'
  },
  {
    id: 'networking-routing-l3-protocols',
    mdSource: '_private/MD/網概/網路概論_4下_路由與L3協定.md',
    sourceSummaryPhrase: '路由',
    keyword: 'RIP'
  },
  {
    id: 'networking-transport-layer',
    mdSource: '_private/MD/網概/網路概論_5_傳輸層.md',
    sourceSummaryPhrase: '傳輸層',
    keyword: '三方交握'
  },
  {
    id: 'networking-application-ports',
    mdSource: '_private/MD/網概/網路概論_6_應用層與Port對照.md',
    sourceSummaryPhrase: '應用層',
    keyword: 'Port Number'
  },
  {
    id: 'networking-physical-layer',
    mdSource: '_private/MD/網概/網路概論_7上_實體層.md',
    sourceSummaryPhrase: '實體層',
    keyword: 'WiFi'
  },
  {
    id: 'networking-data-link-layer',
    mdSource: '_private/MD/網概/網路概論_7下_資料鏈結層.md',
    sourceSummaryPhrase: '資料鏈結層',
    keyword: 'CSMA/CD'
  },
  {
    id: 'networking-security-crypto',
    mdSource: '_private/MD/網概/網路概論_8上_資安觀念與加密.md',
    sourceSummaryPhrase: '資安',
    keyword: '數位簽章'
  },
  {
    id: 'networking-defense-attacks',
    mdSource: '_private/MD/網概/網路概論_8下_防禦設備與攻擊.md',
    sourceSummaryPhrase: '防禦',
    keyword: 'IDS vs IPS'
  }
] as const;
const networkingTopicIds = networkingTopicCases.map((topicCase) => topicCase.id);
const markdownBackedComputerPrinciplesTopicCases = [
  {
    id: 'cp-performance-formulas',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/六、效能名詞與公式_新手國考教材.md'],
    keywords: ['CPU Time', 'Instruction Count', 'CPI', 'Clock Rate', 'MIPS']
  },
  {
    id: 'cp-risc-cisc',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/七、RISC 與 CISC_新手國考教材.md'],
    keywords: ['RISC', 'CISC', 'ISA', 'Load/Store', '微指令']
  },
  {
    id: 'cp-memory-hierarchy',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/八、Memory 階層圖_新手國考教材.md'],
    keywords: ['Register', 'L1 Cache', 'L2 Cache', 'L3 Cache', 'Spatial Locality']
  },
  {
    id: 'cp-memory-classification',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/九、Memory 分類圖_新手國考教材.md'],
    keywords: ['RAM', 'ROM', 'SRAM', 'DRAM', 'EPROM']
  },
  {
    id: 'cp-registers',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十、Register（暫存器）_新手國考教材.md'],
    keywords: ['Program Counter', 'Instruction Register', 'Base Register', 'Limit Register', 'MDR']
  },
  {
    id: 'cp-cache',
    sources: ['_private/計算機概論.txt', '_private/MD/計概/3a基本計概/十一、Cache_新手國考教材.md'],
    keywords: ['Hit Ratio', 'AMAT', 'Miss Penalty', 'Write Allocate', 'Main Memory / RAM']
  }
] as const;
const algorithmSource = '_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md';
const bucketSortSource = '_private/MD/演算法/GeneralBucketSort.java';
const dataStructureAlgorithmTopicCases = [
  {
    id: 'algorithm-big-o-complexity',
    title: '演算法定義 + Big-O 複雜度 ★',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md',
    keywords: ['演算法 5 條件', 'O(log n)', '時間複雜度']
  },
  {
    id: 'algorithm-array-linked-list',
    title: '陣列 Array + 鏈結串列 Linked List',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md',
    keywords: ['Row-major', 'Column-major', 'Doubly Linked List']
  },
  {
    id: 'algorithm-stack-queue',
    title: '堆疊 Stack + 佇列 Queue',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md',
    keywords: ['LIFO', 'FIFO', 'Circular Queue']
  },
  {
    id: 'algorithm-tree-traversal-basics',
    title: '樹 Tree（基本）+ 前中後序走訪',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md',
    keywords: ['Preorder', 'Inorder', 'Postorder']
  },
  {
    id: 'algorithm-advanced-trees',
    title: '高等樹 ★（AVL／B-Tree／Heap／紅黑樹）',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md',
    keywords: ['AVL', 'B-Tree', 'Red-Black Tree']
  },
  {
    id: 'algorithm-graph-basics-traversal',
    title: '圖 Graph 基礎 + DFS／BFS ★',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md',
    keywords: ['Adjacency Matrix', 'DFS', 'BFS']
  },
  {
    id: 'algorithm-graph-algorithms',
    title: '圖演算法 ★（MST／最短路徑／AOV-AOE）',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md',
    keywords: ['Minimum Spanning Tree', 'Dijkstra', 'Topological Sort']
  },
  {
    id: 'algorithm-sorting-overview',
    title: '排序 Sorting ★',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_7_排序.md',
    keywords: ['Stable', 'Quick Sort', 'Heap Sort']
  },
  {
    id: 'algorithm-hashing',
    title: '雜湊 Hashing',
    source: '_private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md',
    keywords: ['Hash Table', 'Collision', 'Open Addressing']
  }
] as const;
const dataStructureAlgorithmTopicIds = dataStructureAlgorithmTopicCases.map((topicCase) => topicCase.id);
const firstBatchAlgorithmTopicIds = [
  'bubble-sort',
  'selection-sort',
  'quick-sort',
  'fibonacci-sequence',
  'greatest-common-divisor',
  'binary-search',
  'insertion-sort',
  'bucket-sort'
] as const;
const firstBatchAlgorithmTopicIdSet = new Set<string>(firstBatchAlgorithmTopicIds);
const unfilledAlgorithmTopicIds = ['merge-sort', 'heap-sort', 'shell-sort'] as const;
const expectedAlgorithmTopicIdsAfterImportedTopics = [
  'algorithms-study-strategy',
  'algorithm-definition-and-properties',
  'time-complexity-big-o',
  'array-addressing',
  'linked-list-basics',
  'stack-and-queue',
  'tree-and-binary-tree',
  'graph-traversal-and-paths',
  'sorting-algorithms-baseline',
  'advanced-balanced-trees',
  'hashing-and-collision-handling',
  'merge-sort',
  'heap-sort',
  'shell-sort'
] as const;
const expectedAlgorithmTopicIdsAfterDataStructureTopics = [
  ...firstBatchAlgorithmTopicIds,
  ...expectedAlgorithmTopicIdsAfterImportedTopics
] as const;
const importedDatabaseProgrammingSystemDesignBatch = 'fill-database-programming-system-design-content';
const databaseMarkdownTopicCases = [
  {
    id: 'database-md-foundations-architecture',
    title: '基礎概念 + ANSI/SPARC 架構',
    source: '_private/MD/資料庫/資料庫_1_基礎概念與架構.md',
    keyword: 'ANSI/SPARC 三層架構'
  },
  {
    id: 'database-md-keys-erd',
    title: 'Key（鍵）+ ERD（實體關係圖）',
    source: '_private/MD/資料庫/資料庫_2_鍵與ERD.md',
    keyword: '超鍵'
  },
  {
    id: 'database-md-normalization',
    title: '正規化 Normalization ★',
    source: '_private/MD/資料庫/資料庫_3_正規化.md',
    keyword: '1NF'
  },
  {
    id: 'database-md-sql-crud',
    title: 'SQL 分類 + CRUD 基礎語法 ★',
    source: '_private/MD/資料庫/資料庫_4_SQL分類與CRUD.md',
    keyword: 'UPDATE／DELETE 必加 WHERE'
  },
  {
    id: 'database-md-sql-advanced-query',
    title: 'SQL 查詢進階 ★',
    source: '_private/MD/資料庫/資料庫_5_SQL查詢進階.md',
    keyword: 'WHERE vs HAVING'
  },
  {
    id: 'database-md-transactions-nosql',
    title: '交易 ACID + NoSQL',
    source: '_private/MD/資料庫/資料庫_6_交易ACID與NoSQL.md',
    keyword: 'ACID'
  }
] as const;
const programmingMarkdownTopicCases = [
  {
    id: 'programming-md-language-execution-basics',
    title: '語言執行方式 + 程式基礎',
    source: '_private/MD/程式設計/程式設計_1_語言執行方式與程式基礎.md',
    keyword: 'Assembler'
  },
  {
    id: 'programming-md-functions-parameter-passing',
    title: '函式 + 參數傳遞 ★',
    source: '_private/MD/程式設計/程式設計_2_函式與參數傳遞.md',
    keyword: 'Java 全部都是「傳值」'
  },
  {
    id: 'programming-md-arrays-strings-exceptions',
    title: '陣列 + 字串函式 + 例外處理',
    source: '_private/MD/程式設計/程式設計_3_陣列字串與例外處理.md',
    keyword: '.equals()'
  },
  {
    id: 'programming-md-pointers',
    title: '指標 Pointer ★（C／C++）',
    source: '_private/MD/程式設計/程式設計_4_指標.md',
    keyword: '指標存的是「位址」'
  },
  {
    id: 'programming-md-oop',
    title: '物件導向 OOP 三大特性 ★',
    source: '_private/MD/程式設計/程式設計_5_物件導向OOP.md',
    keyword: '封裝'
  },
  {
    id: 'programming-md-recursion',
    title: '遞迴 Recursion ★',
    source: '_private/MD/程式設計/程式設計_6_遞迴.md',
    keyword: '終止條件'
  },
  {
    id: 'programming-md-language-features',
    title: '各語言特性（Java GC／Python 容器）',
    source: '_private/MD/程式設計/程式設計_7_各語言特性.md',
    keyword: 'Python 四種內建容器'
  }
] as const;
const systemDesignMarkdownTopicCases = [
  {
    id: 'system-design-sdlc-ssdlc',
    title: 'SDLC + SSDLC',
    source: '_private/MD/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md',
    keyword: 'Security by Design'
  },
  {
    id: 'system-design-cohesion-coupling',
    title: '內聚力 Cohesion + 耦合力 Coupling ★',
    source: '_private/MD/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md',
    keyword: '高內聚、低耦合'
  },
  {
    id: 'system-design-oo-uml',
    title: 'OO 四種關係 + UML 四種圖',
    source: '_private/MD/系統分析與設計/系統分析與設計_3_OO關係與UML.md',
    keyword: '聚合 vs 組合'
  },
  {
    id: 'system-design-testing',
    title: '測試 Testing',
    source: '_private/MD/系統分析與設計/系統分析與設計_4_測試.md',
    keyword: 'Alpha 在內部、Beta 給外部真實使用者'
  },
  {
    id: 'system-design-conversion-pdca',
    title: '系統導入 + PDCA',
    source: '_private/MD/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md',
    keyword: 'Plan（計畫）→ Do（執行）→ Check（檢核）→ Act（行動／改善）'
  }
] as const;
const importedDatabaseProgrammingSystemDesignSubjectCases = [
  { subjectKey: 'database', topicCases: databaseMarkdownTopicCases },
  { subjectKey: 'programming', topicCases: programmingMarkdownTopicCases },
  { subjectKey: 'systemDesign', topicCases: systemDesignMarkdownTopicCases }
] as const;
const importedDatabaseProgrammingSystemDesignTopicIdSet = new Set<string>(
  [
    ...importedDatabaseProgrammingSystemDesignSubjectCases.flatMap(({ topicCases }) => topicCases.map((topicCase) => topicCase.id)),
    ...professionalTopicsBySubject.informationManagement
      .filter((topic) => topic.sourceBatch === 'fill-information-management-md-content')
      .map((topic) => topic.id)
  ]
);
const algorithmCodeMethodNames = {
  'bubble-sort': ['bubbleSortRecursive', 'bubbleSortIterative'],
  'quick-sort': ['quickSortRecursive', 'quickSortIterative'],
  'fibonacci-sequence': ['fibonacciRecursive', 'fibonacciIterative'],
  'greatest-common-divisor': ['gcdRecursive', 'gcdIterative'],
  'binary-search': ['binarySearchRecursive', 'binarySearchIterative'],
  'selection-sort': ['selectionSortRecursive', 'selectionSortIterative'],
  'insertion-sort': ['insertionSortRecursive', 'insertionSortIterative'],
  'bucket-sort': ['bucketSortRecursive', 'bucketSortIterative']
} as const satisfies Record<(typeof firstBatchAlgorithmTopicIds)[number], readonly string[]>;
const algorithmWorstTimes = {
  'bubble-sort': 'O(n²)',
  'quick-sort': 'O(n²)',
  'fibonacci-sequence': 'O(2ⁿ)',
  'greatest-common-divisor': 'O(log min(a,b))',
  'binary-search': 'O(log n)',
  'selection-sort': 'O(n²)',
  'insertion-sort': 'O(n²)',
  'bucket-sort': 'O(n log n)'
} as const satisfies Record<(typeof firstBatchAlgorithmTopicIds)[number], string>;
const algorithmExpectedSources = {
  'bubble-sort': [algorithmSource],
  'selection-sort': [algorithmSource],
  'quick-sort': [algorithmSource],
  'fibonacci-sequence': [algorithmSource],
  'greatest-common-divisor': [algorithmSource],
  'binary-search': [algorithmSource],
  'insertion-sort': [algorithmSource],
  'bucket-sort': [bucketSortSource]
} as const satisfies Record<(typeof firstBatchAlgorithmTopicIds)[number], readonly string[]>;
const filledTopicIds = new Set([
  commonUnitsTopicId,
  filledTopicId,
  turingTopicId,
  machineInstructionCycleTopicId,
  pipelineTopicId,
  hazardTopicId,
  busTopicId,
  usbSpeedTopicId,
  baseConversionTopicId,
  complementConversionTopicId,
  floatingPointConversionTopicId,
  codesAndCheckCodesTopicId,
  ...digitalLogicTopicIds,
  ...operatingSystemTopicIds,
  ...computerPrinciplesV2TopicIds,
  ...markdownBackedComputerPrinciplesTopicIds,
  ...networkingTopicIds,
  ...professionalTopicsBySubject.informationManagement
    .filter((topic) => topic.sourceBatch === 'fill-information-management-md-content')
    .map((topic) => topic.id),
  ...dataStructureAlgorithmTopicIds,
  ...firstBatchAlgorithmTopicIds,
  ...databaseMarkdownTopicCases.map((topicCase) => topicCase.id),
  ...programmingMarkdownTopicCases.map((topicCase) => topicCase.id),
  ...systemDesignMarkdownTopicCases.map((topicCase) => topicCase.id)
]);

const getLessonArticleNonTableBlocks = (lessonArticle: Extract<(typeof professionalTopicsBySubject.computerPrinciples)[number]['blocks'][number], { kind: 'lessonArticle' }>) =>
  lessonArticle.sections.flatMap((section) => section.blocks).filter((block) => block.kind !== 'table');

const describeMarkdownBackedBlockKindViolation = (block: LessonArticleContentBlock, sectionHeading: string, blockIndex: number) => {
  if (block.kind === 'orderedList' && block.items.length <= 1) {
    return `${sectionHeading}[${blockIndex}] uses orderedList for ${block.items.length} item`;
  }
  if (block.kind === 'bulletList') {
    return `${sectionHeading}[${blockIndex}] uses bulletList instead of the paragraph/orderedList convention`;
  }
  return undefined;
};

const collectMarkdownBackedBlockKindViolations = (
  lessonArticle: Extract<(typeof professionalTopicsBySubject.computerPrinciples)[number]['blocks'][number], { kind: 'lessonArticle' }>
) =>
  lessonArticle.sections.flatMap((section) =>
    section.blocks.flatMap((block, blockIndex) => {
      const violation = describeMarkdownBackedBlockKindViolation(block, section.heading, blockIndex);
      return violation === undefined ? [] : [violation];
    })
  );

describe('professional topic skeleton data', () => {
  it('keeps every professional route topic as a manual-fill lesson article and only fills the approved topic', () => {
    for (const subjectKey of professionalSubjectKeys) {
      expect(professionalTopicsBySubject[subjectKey]).toHaveLength(expectedCounts[subjectKey]);

      for (const topic of professionalTopicsBySubject[subjectKey]) {
        const isFilledTopic = filledTopicIds.has(topic.id);
        const isImportedDatabaseProgrammingSystemDesignTopic = importedDatabaseProgrammingSystemDesignTopicIdSet.has(topic.id);

        expect(topic.id).not.toBe('');
        expect(topic.title).not.toBe('');
        if (isFilledTopic) {
          expect(topic.summary).not.toBe('');
        } else {
          expect(topic.summary).toBe('');
        }
        expect(topic.sourceFiles.length).toBeGreaterThan(0);
        expect(topic.sourceSummary).not.toBe('');
        if (isImportedDatabaseProgrammingSystemDesignTopic) {
          expect(topic.examOutline.length).toBeGreaterThan(0);
          expect(topic.memoryPoints.length).toBeGreaterThan(0);
          expect(topic.understandingNotes.length).toBeGreaterThan(0);
        } else {
          expect(topic.examOutline).toEqual([]);
          expect(topic.memoryPoints).toEqual([]);
          expect(topic.understandingNotes).toEqual([]);
        }
        if (isFilledTopic) {
          expect(topic.terms.length).toBeGreaterThan(0);
        } else {
          expect(topic.terms).toEqual([]);
        }
        expect(topic.verifiedBy).toBeUndefined();
        expect(topic.verifiedAt).toBeUndefined();
        expect(topic.verifierSummary).toBeUndefined();

        if (firstBatchAlgorithmTopicIdSet.has(topic.id)) {
          expect(topic.blocks.length).toBeGreaterThan(1);
        } else {
          expect(topic.blocks).toHaveLength(1);
        }
        const block = topic.blocks[0];

        expect(block).toEqual(
          expect.objectContaining({
            kind: 'lessonArticle',
            sourceFiles: topic.sourceFiles,
            sourceSection: topic.sourceSummary
          })
        );
        if (block?.kind !== 'lessonArticle') {
          throw new Error(`${topic.id} should render as lessonArticle`);
        }
        if (isFilledTopic) {
          expect(block.lead).toEqual(expect.any(Array));
          expect(block.sections.length).toBeGreaterThan(0);
        } else {
          expect(block.lead).toEqual([]);
          expect(block.sections).toEqual([]);
        }

        for (const staleBlockKind of staleDisplayedBlockKinds) {
          expect(topic.blocks.some((topicBlock) => topicBlock.kind === staleBlockKind), `${topic.id} keeps ${staleBlockKind}`).toBe(
            false
          );
        }

        expect(
          topic.blocks.some((topicBlock) => topicBlock.kind === 'teachingCode'),
          `${topic.id} should only use teachingCode for imported first-batch algorithm topics`
        ).toBe(firstBatchAlgorithmTopicIdSet.has(topic.id));
      }
    }
  });

  it('preserves route, topic id, title, and source-section skeletons for later manual paste-in', () => {
    const vonNeumannTopic = professionalTopicsBySubject.computerPrinciples.find(
      (topic) => topic.id === 'cp-von-neumann-architecture'
    );
    const binarySearchTopic = professionalTopicsBySubject.algorithms.find((topic) => topic.id === 'binary-search');
    const normalizationTopic = professionalTopicsBySubject.database.find((topic) => topic.id === 'database-normalization');

    expect(vonNeumannTopic).toEqual(
      expect.objectContaining({
        subjectKey: 'computerPrinciples',
        title: '馮紐曼架構(Von Neumann Architecture)',
        sourceFiles: expect.arrayContaining(vonNeumannSources),
        sourceSummary: '3a. 基本計概 / 馮紐曼架構'
      })
    );
    expect(professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === turingTopicId)).toEqual(
      expect.objectContaining({
        subjectKey: 'computerPrinciples',
        title: '圖靈機與圖靈測試(Turing Machine and Turing Test)',
        sourceFiles: expect.arrayContaining(turingSources),
        sourceSummary: '3a. 基本計概 / 圖靈機與圖靈測試'
      })
    );
    expect(professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === machineInstructionCycleTopicId)).toEqual(
      expect.objectContaining({
        subjectKey: 'computerPrinciples',
        title: '機器指令與指令週期(Machine Instruction and Instruction Cycle)',
        sourceFiles: expect.arrayContaining(machineInstructionCycleSources),
        sourceSummary: '3a. 基本計概 / 機器指令與指令週期'
      })
    );
    expect(binarySearchTopic).toEqual(
      expect.objectContaining({
        subjectKey: 'algorithms',
        title: '二元搜尋法(Binary Search)',
        sourceFiles: expect.arrayContaining([algorithmSource]),
        sourceSummary: '五、二元搜尋法 Binary Search'
      })
    );
    expect(normalizationTopic).toEqual(
      expect.objectContaining({
        subjectKey: 'database',
        title: '正規化(Normalization)',
        sourceFiles: ['_private/資料庫.txt'],
        sourceSummary: '_private/資料庫.txt` lines 68-79'
      })
    );
  });

  it('places the computer principles common units topic before Von Neumann architecture with source traceability', () => {
    const computerPrinciplesTopicIds = professionalTopicsBySubject.computerPrinciples.map((topic) => topic.id);
    const commonUnitsTopic = professionalTopicsBySubject.computerPrinciples[0];

    if (!commonUnitsTopic) {
      throw new Error('cp-common-units should be the first computer principles topic');
    }

    expect(commonUnitsTopic.id).toBe(commonUnitsTopicId);
    expect(commonUnitsTopic.title).toBe('電腦常用單位');
    expect(commonUnitsTopic.subjectKey).toBe('computerPrinciples');
    expect(commonUnitsTopic.sourceFiles).toEqual(expect.arrayContaining(commonUnitsSources));
    expect(commonUnitsTopic.sourceSummary).toContain('電腦常用單位');
    expect(computerPrinciplesTopicIds.indexOf(commonUnitsTopicId)).toBeLessThan(
      computerPrinciplesTopicIds.indexOf(filledTopicId)
    );
    expect(computerPrinciplesTopicIds).toContain(filledTopicId);
  });

  it('fills the common units lesson article with unit rows, bit-byte conversions, and speed notation', () => {
    const commonUnitsTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === commonUnitsTopicId);

    expect(commonUnitsTopic).toBeDefined();
    expect(commonUnitsTopic?.sourceFiles).toEqual(expect.arrayContaining(commonUnitsSources));
    expect(commonUnitsTopic?.summary).not.toBe('');
    expect(commonUnitsTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '位元', en: 'bit' },
        { zh: '位元組', en: 'byte' },
        { zh: '半位元組', en: 'nibble' },
        { zh: '字組', en: 'word' },
        { zh: '毫秒', en: 'millisecond' },
        { zh: '微秒', en: 'microsecond' },
        { zh: '奈秒', en: 'nanosecond' }
      ])
    );

    const lessonArticle = commonUnitsTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');
    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-common-units should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(commonUnitsSources));
    expect(lessonArticle.sourceSection).toContain('電腦常用單位');
    expect(lessonArticle.lead).toEqual([]);
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '單位速查表',
      'b 與 B 的差異',
      'Mbps 與 MB/s',
      '時間單位速查表'
    ]);

    const unitTableBlock = lessonArticle.sections
      .flatMap((section) => section.blocks)
      .find((block) => block.kind === 'table');

    expect(unitTableBlock?.kind).toBe('table');
    if (unitTableBlock?.kind !== 'table') {
      throw new Error('cp-common-units should include a unit table');
    }

    expect(unitTableBlock.headers).toEqual(['單位', '符號', '中文', '等於', '白話理解']);
    expect(unitTableBlock.rows.map((row) => row[0])).toEqual(['bit', 'bits', 'byte', 'nibble', 'word', 'KB', 'MB', 'GB', 'TB']);
    expect(unitTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['bits', 'b', '多個位元', 'n bits = n 個 bit', 'bits 是 bit 的英文複數，題目說 32 bits，就是 32 個位元'],
        ['byte', 'B', '位元組', '1 byte = 8 bits', '常用來表示容量'],
        ['KB', 'KB', '千位元組', '國考常用 1 KB = 2^10 bytes = 1024 bytes', '小容量']
      ])
    );

    const timeTableBlock = lessonArticle.sections
      .find((section) => section.heading === '時間單位速查表')
      ?.blocks.find((block) => block.kind === 'table');

    expect(timeTableBlock?.kind).toBe('table');
    if (timeTableBlock?.kind !== 'table') {
      throw new Error('cp-common-units should include a time unit table');
    }

    expect(timeTableBlock.headers).toEqual(['單位', '符號', '中文', '等於', '常見用途']);
    expect(timeTableBlock.rows.map((row) => row[1])).toEqual(['s', 'ms', 'us / μs', 'ns', 'ps']);
    expect(timeTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['millisecond', 'ms', '毫秒', '1 ms = 10^-3 s = 0.001 s', '程式回應時間、I/O 等待'],
        ['microsecond', 'us / μs', '微秒', '1 us = 10^-6 s', '較短的硬體或系統時間'],
        ['nanosecond', 'ns', '奈秒', '1 ns = 10^-9 s', 'Clock Cycle Time、記憶體延遲']
      ])
    );

    const serializedTopic = JSON.stringify(commonUnitsTopic);

    expect(serializedTopic).toContain('bits 是 bit 的英文複數');
    expect(serializedTopic).toContain('32 bits = 32 b = 4 B = 4 bytes');
    expect(serializedTopic).toContain('Mbps 的 b 是 bit');
    expect(serializedTopic).toContain('MB/s 的 B 是 byte');
    expect(serializedTopic).toContain('1 MB/s = 8 Mbps');
    expect(serializedTopic).toContain('1 s = 1000 ms');
    expect(serializedTopic).toContain('1 us = 1000 ns');
  });

  it('fills first-batch algorithm topics with learning articles, Java teaching code, worst-case complexity, and approved source traceability', () => {
    for (const topicId of firstBatchAlgorithmTopicIds) {
      const topic = professionalTopicsBySubject.algorithms.find((algorithmTopic) => algorithmTopic.id === topicId);

      expect(topic).toBeDefined();
      expect(topic?.summary).not.toBe('');
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(Array.from(algorithmExpectedSources[topicId])));
      expect(topic?.sourceSummary).not.toBe('');
      expect(topic?.terms.length).toBeGreaterThan(0);
      expect(topic?.blocks.some((block) => block.kind === 'complexityTable')).toBe(false);

      const lessonArticle = topic?.blocks.find((block) => block.kind === 'lessonArticle');
      const teachingCodeBlocks = topic?.blocks.filter((block) => block.kind === 'teachingCode') ?? [];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      expect(teachingCodeBlocks).toHaveLength(2);

      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicId} should render algorithm explanation as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(Array.from(algorithmExpectedSources[topicId])));
      expect(lessonArticle.lead.length).toBeGreaterThanOrEqual(1);
      expect(lessonArticle.sections.map((section) => section.heading)).toEqual(['演算法概念', '核心規則', '最壞時間複雜度']);

      const coreRulesBlock = lessonArticle.sections.find((section) => section.heading === '核心規則')?.blocks[0];
      const complexityBlock = lessonArticle.sections.find((section) => section.heading === '最壞時間複雜度')?.blocks[0];

      expect(coreRulesBlock?.kind).toBe('orderedList');
      expect(coreRulesBlock?.kind === 'orderedList' ? coreRulesBlock.items.length : 0).toBeGreaterThanOrEqual(3);
      expect(coreRulesBlock?.kind === 'orderedList' ? coreRulesBlock.markerStyle : undefined).toBe('decimal');

      expect(complexityBlock?.kind).toBe('table');
      if (complexityBlock?.kind !== 'table') {
        throw new Error(`${topicId} should show worst-case complexity as a table`);
      }
      expect(complexityBlock.headers).toEqual(['版本', '最壞時間複雜度', '推導重點']);
      expect(complexityBlock.rows.some((row) => row[1] === algorithmWorstTimes[topicId])).toBe(true);

      const serializedTopic = JSON.stringify(topic);

      expect(serializedTopic).toContain('最壞');
      expect(serializedTopic).not.toContain('最佳時間');
      expect(serializedTopic).not.toContain('平均時間');

      for (const methodName of algorithmCodeMethodNames[topicId]) {
        expect(teachingCodeBlocks.some((block) => block.kind === 'teachingCode' && block.code.includes(methodName))).toBe(true);
      }
      for (const block of teachingCodeBlocks) {
        expect(block.kind).toBe('teachingCode');
        if (block.kind !== 'teachingCode') {
          throw new Error(`${topicId} should only collect teachingCode blocks here`);
        }
        expect(block.language).toBe('java');
        expect(block.title).toMatch(/遞迴版本|非遞迴版本/);
        expect(block.code).toContain('//');
        expect(block.code.split('\n').length).toBeGreaterThan(5);
      }
    }

    for (const topicId of unfilledAlgorithmTopicIds) {
      const topic = professionalTopicsBySubject.algorithms.find((algorithmTopic) => algorithmTopic.id === topicId);
      const lessonArticle = topic?.blocks[0];

      expect(topic?.summary).toBe('');
      expect(topic?.blocks).toHaveLength(1);
      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicId} should remain a skeleton lessonArticle`);
      }
      expect(lessonArticle.lead).toEqual([]);
      expect(lessonArticle.sections).toEqual([]);
      expect(topic?.blocks.some((block) => block.kind === 'teachingCode')).toBe(false);
    }
  });

  it('explains the Bucket Sort recursive Java version with detailed teaching comments', () => {
    const topic = professionalTopicsBySubject.algorithms.find((algorithmTopic) => algorithmTopic.id === 'bucket-sort');
    const recursiveCodeBlock = topic?.blocks.find(
      (block) => block.kind === 'teachingCode' && block.title === '桶裝排序法遞迴版本'
    );

    expect(recursiveCodeBlock?.kind).toBe('teachingCode');
    if (recursiveCodeBlock?.kind !== 'teachingCode') {
      throw new Error('bucket-sort should include a recursive teachingCode block');
    }

    const explanatoryCommentSnippets = [
      '第 1 步：用遞迴找出 min 與 max',
      'index 從 1 開始',
      '第 2 步：用遞迴建立桶子',
      '第 3 步：用遞迴把每個數字放進對應桶子',
      '第 4 步：用遞迴逐桶排序',
      '第 5 步：用遞迴把桶子內容寫回原陣列',
      '遞迴終止條件'
    ];

    for (const commentSnippet of explanatoryCommentSnippets) {
      expect(recursiveCodeBlock.code).toContain(commentSnippet);
    }
    expect(recursiveCodeBlock.code.split('\n').filter((line) => line.trim().startsWith('//')).length).toBeGreaterThanOrEqual(24);
  });

  it('imports data-structure Markdown topics as source-traceable Algorithms lesson articles', () => {
    const algorithmTopics = professionalTopicsBySubject.algorithms;

    expect(algorithmTopics.slice(0, dataStructureAlgorithmTopicIds.length).map((topic) => topic.id)).toEqual(
      dataStructureAlgorithmTopicIds
    );

    for (const topicCase of dataStructureAlgorithmTopicCases) {
      const topic = algorithmTopics.find((algorithmTopic) => algorithmTopic.id === topicCase.id);

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      expect(topic?.title).toBe(topicCase.title);
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining([topicCase.source]));
      expect(topic?.summary, `${topicCase.id} should have a summary`).not.toBe('');
      expect(topic?.terms.length, `${topicCase.id} should have terms`).toBeGreaterThan(0);
      expect(topic?.blocks).toHaveLength(1);

      const lessonArticle = topic?.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining([topicCase.source]));
      expect(lessonArticle.sourceSection).toBe(topic?.sourceSummary);
      expect(lessonArticle.lead.length, `${topicCase.id} should keep source lead content`).toBeGreaterThan(0);
      expect(lessonArticle.sections.length, `${topicCase.id} should have lesson sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topicCase.id} should not have empty sections`).toBe(
        true
      );
      expect(
        lessonArticle.sections.every((section) => !/TODO|待補|來源大綱|教材本文/.test(section.heading)),
        `${topicCase.id} should not expose placeholder headings`
      ).toBe(true);

      const serializedTopic = JSON.stringify(topic);

      for (const keyword of topicCase.keywords) {
        expect(serializedTopic, `${topicCase.id} should contain ${keyword}`).toContain(keyword);
      }
      for (const phrase of generatedContentPhrases) {
        expect(serializedTopic, `${topicCase.id} should not expose generated phrase ${phrase}`).not.toContain(phrase);
      }
    }
  });

  it('moves data-structure Markdown topics to the top of the Algorithms route and preserves the remaining order', () => {
    const algorithmTopicIds = professionalTopicsBySubject.algorithms.map((topic) => topic.id);

    expect(algorithmTopicIds.slice(0, dataStructureAlgorithmTopicIds.length)).toEqual(dataStructureAlgorithmTopicIds);
    expect(algorithmTopicIds.slice(dataStructureAlgorithmTopicIds.length)).toEqual(expectedAlgorithmTopicIdsAfterDataStructureTopics);
  });

  it('fills the Turing machine and test lesson article with source traceability and teaching sections', () => {
    const turingTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === turingTopicId);

    expect(turingTopic).toBeDefined();
    expect(turingTopic?.sourceFiles).toEqual(expect.arrayContaining(turingSources));

    const lessonArticle = turingTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');

    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-turing-machine-and-test should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(turingSources));
    expect(lessonArticle.lead.length).toBeGreaterThanOrEqual(1);
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '圖靈機是什麼',
      '圖靈機的主要組成',
      '圖靈機如何運作',
      '可計算是什麼',
      '圖靈測試',
      '圖靈機與圖靈測試的差異'
    ]);

    const sectionByHeading = Object.fromEntries(lessonArticle.sections.map((section) => [section.heading, section]));
    const coreModelBlock = sectionByHeading['圖靈機是什麼']?.blocks[1];
    const componentsBlock = sectionByHeading['圖靈機的主要組成']?.blocks[0];
    const operationBlock = sectionByHeading['圖靈機如何運作']?.blocks[0];
    const computabilityBlock = sectionByHeading['可計算是什麼']?.blocks[1];
    const comparisonBlock = sectionByHeading['圖靈機與圖靈測試的差異']?.blocks[0];
    const serializedTuringTopic = JSON.stringify(turingTopic);

    expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);
    expect(serializedTuringTopic).not.toContain('[必背]');
    expect(serializedTuringTopic).not.toContain('[理解]');
    expect(serializedTuringTopic).not.toContain('[比較]');
    expect(coreModelBlock?.kind).toBe('orderedList');
    expect(coreModelBlock?.kind === 'orderedList' ? coreModelBlock.items : []).toEqual([
      '資料如何被儲存。',
      '資料如何被讀取。',
      '每一步如何根據規則改變資料。',
      '什麼情況下計算會結束。'
    ]);
    expect(coreModelBlock?.kind === 'orderedList' ? coreModelBlock.markerStyle : undefined).toBe('decimal');
    expect(coreModelBlock?.kind === 'orderedList' ? 'icons' in coreModelBlock : false).toBe(false);
    expect(componentsBlock?.kind).toBe('orderedList');
    expect(componentsBlock?.kind === 'orderedList' ? componentsBlock.items : []).toEqual(
      expect.arrayContaining([
        expect.stringContaining('無限長紙帶'),
        expect.stringContaining('讀寫頭'),
        expect.stringContaining('有限控制器')
      ])
    );
    expect(operationBlock?.kind).toBe('orderedList');
    expect(operationBlock?.kind === 'orderedList' ? operationBlock.items : []).toEqual(
      expect.arrayContaining([
        expect.stringContaining('讀取'),
        expect.stringContaining('查詢規則'),
        expect.stringContaining('寫入'),
        expect.stringContaining('移動'),
        expect.stringContaining('狀態')
      ])
    );
    expect(computabilityBlock?.kind).toBe('orderedList');
    expect(computabilityBlock?.kind === 'orderedList' ? computabilityBlock.items : []).toEqual([
      expect.stringContaining('問題'),
      expect.stringContaining('明確程序'),
      expect.stringContaining('有限步驟')
    ]);
    expect(comparisonBlock?.kind).toBe('table');
    if (comparisonBlock?.kind !== 'table') {
      throw new Error('Turing machine and test comparison should render as a table');
    }
    expect(comparisonBlock.headers).toEqual(['項目', '圖靈機', '圖靈測試']);
    expect(comparisonBlock.rows).toEqual(
      expect.arrayContaining([
        ['核心問題', '什麼問題可以被計算？', '機器能否表現得像人類？'],
        ['性質', '理論計算模型', '人工智慧測試方法']
      ])
    );

    expect(serializedTuringTopic).toContain('圖靈機(Turing Machine)');
    expect(serializedTuringTopic).toContain('圖靈測試(Turing Test)');
    expect(serializedTuringTopic).toContain('_private/MD/二、圖靈機與圖靈測試.md');
    expect(turingTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '圖靈機', en: 'Turing Machine' },
        { zh: '圖靈測試', en: 'Turing Test' },
        { zh: '可計算性', en: 'Computability' }
      ])
    );
  });

  it('fills the machine instruction cycle lesson article with source traceability and structured teaching blocks', () => {
    const machineInstructionCycleTopic = professionalTopicsBySubject.computerPrinciples.find(
      (topic) => topic.id === machineInstructionCycleTopicId
    );

    expect(machineInstructionCycleTopic).toBeDefined();
    expect(machineInstructionCycleTopic?.title).toBe('機器指令與指令週期(Machine Instruction and Instruction Cycle)');
    expect(machineInstructionCycleTopic?.sourceFiles).toEqual(expect.arrayContaining(machineInstructionCycleSources));
    expect(machineInstructionCycleTopic?.sourceSummary).toBe('3a. 基本計概 / 機器指令與指令週期');

    const lessonArticle = machineInstructionCycleTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');

    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-machine-instruction-cycle should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(machineInstructionCycleSources));
    expect(lessonArticle.sourceSection).toBe('3a. 基本計概 / 機器指令與指令週期');
    expect(lessonArticle.lead.length).toBeGreaterThanOrEqual(1);
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '考前小抄',
      '機器指令範例',
      '指令週期怎麼理解',
      '指令週期關鍵字',
      '易混淆比較',
      '國考怎麼判斷'
    ]);
    expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);

    const sectionByHeading = Object.fromEntries(lessonArticle.sections.map((section) => [section.heading, section]));
    const quickReviewBlock = sectionByHeading['考前小抄']?.blocks[0];
    const exampleTableBlock = sectionByHeading['機器指令範例']?.blocks[1];
    const cycleStepBlock = sectionByHeading['指令週期怎麼理解']?.blocks[1];
    const cycleTableBlock = sectionByHeading['指令週期怎麼理解']?.blocks[2];
    const glossaryTableBlock = sectionByHeading['指令週期關鍵字']?.blocks[0];
    const comparisonTableBlock = sectionByHeading['易混淆比較']?.blocks[0];
    const examCueBlock = sectionByHeading['國考怎麼判斷']?.blocks[0];
    const serializedTopic = JSON.stringify(machineInstructionCycleTopic);

    expect(serializedTopic).not.toContain('[必背]');
    expect(serializedTopic).not.toContain('[補充]');
    expect(serializedTopic).not.toContain('[理解]');
    expect(serializedTopic).not.toContain('[比較]');
    expect(serializedTopic).not.toContain('sourceLabel');

    expect(quickReviewBlock?.kind).toBe('orderedList');
    expect(quickReviewBlock?.kind === 'orderedList' ? quickReviewBlock.items : []).toEqual([
      expect.stringContaining('機器指令'),
      expect.stringContaining('Opcode'),
      expect.stringContaining('Operand'),
      expect.stringContaining('位址欄位'),
      expect.stringContaining('Effective Address'),
      expect.stringContaining('PC'),
      expect.stringContaining('IR'),
      expect.stringContaining('Fetch'),
      expect.stringContaining('Operand Fetch'),
      expect.stringContaining('Execute')
    ]);
    expect(quickReviewBlock?.kind === 'orderedList' ? quickReviewBlock.markerStyle : undefined).toBe('decimal');
    expect(quickReviewBlock?.kind === 'orderedList' ? 'icons' in quickReviewBlock : false).toBe(false);

    expect(exampleTableBlock?.kind).toBe('table');
    if (exampleTableBlock?.kind !== 'table') {
      throw new Error('Machine instruction examples should render as a table');
    }
    expect(exampleTableBlock.headers).toEqual(['指令', '部分', '意義']);
    expect(exampleTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['ADD R1, R2', 'ADD', 'Opcode，表示加法'],
        ['LOAD R1, 1000', '1000', '位址欄位或位址資訊，表示資料位置可能和 1000 有關']
      ])
    );

    expect(cycleStepBlock?.kind).toBe('orderedList');
    expect(cycleStepBlock?.kind === 'orderedList' ? cycleStepBlock.items : []).toEqual([
      expect.stringContaining('Fetch'),
      expect.stringContaining('Decode'),
      expect.stringContaining('Operand Fetch'),
      expect.stringContaining('Execute'),
      expect.stringContaining('Write Back')
    ]);
    expect(cycleStepBlock?.kind === 'orderedList' ? 'icons' in cycleStepBlock : false).toBe(false);

    expect(cycleTableBlock?.kind).toBe('table');
    if (cycleTableBlock?.kind !== 'table') {
      throw new Error('Instruction cycle stages should render as a table');
    }
    expect(cycleTableBlock.headers).toEqual(['階段', '英文', '核心問題', '常考關鍵字']);
    expect(cycleTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['1. 取指令', 'Fetch', '取得接下來要執行的那一條機器指令所在位置。', 'PC、Memory、IR'],
        ['5. 寫回', 'Write Back / Store', '結果放去哪裡？', 'Register、Memory、Interrupt']
      ])
    );

    expect(glossaryTableBlock?.kind).toBe('table');
    if (glossaryTableBlock?.kind !== 'table') {
      throw new Error('Instruction cycle keywords should render as a table');
    }
    expect(glossaryTableBlock.headers).toEqual(['名詞', '中文', '白話意思', '例子']);
    expect(glossaryTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['I/O', '輸入與輸出', 'Input / Output，表示資料進出電腦系統。', '讀檔、寫檔、鍵盤輸入、螢幕輸出'],
        ['ALU', '算術邏輯單元', 'CPU 裡面負責計算與邏輯判斷的部件。', '加減乘除、AND、OR、比較大小'],
        ['Branch', '分支', '改變程式接下來要執行哪一條指令。', 'if 判斷、跳到另一個位址']
      ])
    );

    expect(comparisonTableBlock?.kind).toBe('table');
    if (comparisonTableBlock?.kind !== 'table') {
      throw new Error('Machine instruction cycle comparisons should render as a table');
    }
    expect(comparisonTableBlock.headers).toEqual(['比較', '左側', '右側', '差異重點']);
    expect(comparisonTableBlock.rows).toEqual(
      expect.arrayContaining([
        ['Fetch vs Operand Fetch', 'Fetch：取指令本身', 'Operand Fetch：取指令要用的資料', '不要把取指令和取資料混在一起。'],
        ['PC vs IR', 'PC：下一個要取出的指令位址', 'IR：目前已取出的指令', 'PC 指向下一步，IR 暫存現在這一步。'],
        ['Decode vs Execute', 'Decode：看懂指令', 'Execute：做出動作', '解碼判斷 Opcode 與定址模式，執行才做運算、跳躍或 I/O。']
      ])
    );

    expect(examCueBlock?.kind).toBe('orderedList');
    expect(examCueBlock?.kind === 'orderedList' ? examCueBlock.items : []).toEqual(
      expect.arrayContaining([
        expect.stringContaining('CPU 可直接執行'),
        expect.stringContaining('Opcode'),
        expect.stringContaining('Operand'),
        expect.stringContaining('Effective Address'),
        expect.stringContaining('PC'),
        expect.stringContaining('IR'),
        expect.stringContaining('Fetch'),
        expect.stringContaining('Execute')
      ])
    );
    expect(examCueBlock?.kind === 'orderedList' ? 'icons' in examCueBlock : false).toBe(false);

    expect(serializedTopic).toContain('Opcode');
    expect(serializedTopic).toContain('Operand');
    expect(serializedTopic).toContain('位址欄位');
    expect(serializedTopic).toContain('Effective Address');
    expect(serializedTopic).toContain('PC');
    expect(serializedTopic).toContain('IR');
    expect(serializedTopic).toContain('Fetch');
    expect(serializedTopic).toContain('Decode');
    expect(serializedTopic).toContain('Operand Fetch');
    expect(serializedTopic).toContain('Execute');
    expect(serializedTopic).toContain('Write Back');
    expect(serializedTopic).toContain('I/O');
    expect(serializedTopic).toContain('ALU');
    expect(serializedTopic).toContain('Branch');
    expect(machineInstructionCycleTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '機器指令', en: 'Machine Instruction' },
        { zh: '操作碼', en: 'Opcode' },
        { zh: '運算元', en: 'Operand' },
        { zh: '有效位址', en: 'Effective Address' },
        { zh: '程式計數器', en: 'PC' },
        { zh: '指令暫存器', en: 'IR' },
        { zh: '算術邏輯單元', en: 'ALU' },
        { zh: '輸入輸出', en: 'I/O' }
      ])
    );
  });

  it('fills the Pipeline lesson article with source traceability, formulas, limits, Hazard basics, and max speedup', () => {
    const pipelineTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === pipelineTopicId);

    expect(pipelineTopic).toBeDefined();
    expect(pipelineTopic?.sourceFiles).toEqual(expect.arrayContaining(pipelineSources));

    const lessonArticle = pipelineTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');

    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-pipeline should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(pipelineSources));
    expect(lessonArticle.lead).toEqual(expect.any(Array));
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '定義',
      '常見公式',
      '管線限制',
      '常見 Hazard',
      '最大加速比'
    ]);
    expect(lessonArticle.sections.every((section) => section.blocks.length > 0)).toBe(true);

    const serializedTopic = JSON.stringify(pipelineTopic);

    expect(serializedTopic).toContain('Hazard');
    expect(serializedTopic).toContain('Stall');
    expect(serializedTopic).toContain('Structural Hazard');
    expect(serializedTopic).toContain('Data Hazard');
    expect(serializedTopic).toContain('Control Hazard');
    expect(serializedTopic).toContain('Instruction Fetch');
    expect(serializedTopic).toContain('Instruction Decode');
    expect(serializedTopic).toContain('Execute');
    expect(serializedTopic).toContain('Memory Access');
    expect(serializedTopic).toContain('Write Back');
    expect(serializedTopic).toContain('Speedup');
    expect(serializedTopic).toContain('(k + n - 1) * t');
    expect(serializedTopic).not.toContain('此處用table');
    expect(pipelineTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '管線化', en: 'Pipelining' },
        { zh: '危障', en: 'Hazard' },
        { zh: '停滯', en: 'Stall' },
        { zh: '加速比', en: 'Speedup' }
      ])
    );
  });

  it('fills the Bus lesson article with source traceability, bus calculations, transfer directions, read/write flow, and memory scope', () => {
    const busTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === busTopicId);

    expect(busTopic).toBeDefined();
    expect(busTopic?.sourceFiles).toEqual(expect.arrayContaining(busSources));

    const lessonArticle = busTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');

    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-bus should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(busSources));
    expect(lessonArticle.lead).toEqual(expect.any(Array));
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '三種匯流排',
      '基本計算',
      '傳輸方向',
      '讀與寫',
      '補充：記憶體範圍'
    ]);
    expect(lessonArticle.sections.every((section) => section.blocks.length > 0)).toBe(true);

    const sectionByHeading = Object.fromEntries(lessonArticle.sections.map((section) => [section.heading, section]));
    const readWriteText = JSON.stringify(sectionByHeading['讀與寫']);
    const writeFlowText = readWriteText.slice(readWriteText.indexOf('寫入'));
    const writeAddressIndex = writeFlowText.indexOf('位址匯流排');
    const writeDataIndex = writeFlowText.indexOf('資料匯流排');
    const writeControlIndex = writeFlowText.indexOf('控制匯流排');
    const serializedTopic = JSON.stringify(busTopic);

    expect(serializedTopic).toContain('2^n 個位址');
    expect(serializedTopic).toContain('2^n bytes');
    expect(serializedTopic).toContain('n bits 資料匯流排一次可傳送 n bits');
    expect(serializedTopic).toContain('位址匯流排決定有幾格可以被編號');
    expect(readWriteText).toContain('CPU 透過位址匯流排送出位址');
    expect(readWriteText).toContain('CPU 透過控制匯流排送出「讀取」訊號');
    expect(readWriteText).toContain('記憶體把資料放到資料匯流排上');
    expect(writeAddressIndex).toBeGreaterThanOrEqual(0);
    expect(writeDataIndex).toBeGreaterThan(writeAddressIndex);
    expect(writeControlIndex).toBeGreaterThan(writeDataIndex);
    expect(serializedTopic).toContain('暫存器');
    expect(serializedTopic).toContain('快取');
    expect(serializedTopic).toContain('RAM');
    expect(busTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '匯流排', en: 'Bus' },
        { zh: '位址匯流排', en: 'Address Bus' },
        { zh: '資料匯流排', en: 'Data Bus' },
        { zh: '控制匯流排', en: 'Control Bus' },
        { zh: '可定址空間', en: 'Addressable Space' }
      ])
    );
  });

  it('fills Hazard, USB speed, base conversion, and complement conversion as formal lesson articles', () => {
    const cases = [
      {
        id: hazardTopicId,
        title: '管線危障(Hazard)',
        sources: hazardSources,
        headings: ['定義', '三種 Hazard', '名詞解釋', 'RAW、WAR、WAW'],
        terms: [
          { zh: '管線危障', en: 'Hazard' },
          { zh: '停滯', en: 'Stall' },
          { zh: '泡泡', en: 'Bubble' },
          { zh: '資料前推', en: 'Forwarding' }
        ],
        keywords: ['Structural Hazard', 'Data Hazard', 'Control Hazard', 'Instruction Cache', 'Data Cache', 'Read After Write']
      },
      {
        id: usbSpeedTopicId,
        title: 'USB 速度(USB Speed)',
        sources: usbSpeedSources,
        headings: ['USB 常見速度表', 'Mbps 與 MB/s 不一樣', '看懂 Gen 1x1、2x1、2x2', '備註'],
        terms: [
          { zh: '位元每秒', en: 'Mbps' },
          { zh: '千兆位元每秒', en: 'Gbps' },
          { zh: '位元組每秒', en: 'MB/s' },
          { zh: 'Type-C', en: 'USB Type-C' }
        ],
        keywords: ['USB 2.0', '480 Mbps', 'USB4 Gen 3x2', '40 Gbps', 'USB4 Version 2.0', '80 Gbps']
      },
      {
        id: baseConversionTopicId,
        title: '進制轉換(Base Conversion)',
        sources: baseConversionSources,
        headings: ['核心概念', '十六進制字母', '轉換方法總表', '範例'],
        terms: [
          { zh: '二進制', en: 'Binary' },
          { zh: '八進制', en: 'Octal' },
          { zh: '十進制', en: 'Decimal' },
          { zh: '十六進制', en: 'Hexadecimal' }
        ],
        keywords: [
          '(450.153)10',
          '111000010.00100111',
          '1C2.272B020C',
          '(1011110010.101)2',
          '(2F2.A)16',
          '出現 1.xxx，就取 1、去掉 1，留下 0.xxx'
        ]
      },
      {
        id: complementConversionTopicId,
        title: '補數轉換(Complement Representation)',
        sources: complementConversionSources,
        headings: ['核心概念', '三種表示法', '補數備註'],
        terms: [
          { zh: '符號大小', en: 'Sign-Magnitude' },
          { zh: '1 補數', en: "1's complement" },
          { zh: '2 補數', en: "2's complement" },
          { zh: '10 補數', en: "10's complement" }
        ],
        keywords: ['Sign-Magnitude', "1's complement", "2's complement", 'r^n - N', '(r^n - 1) - N']
      }
    ] as const;

    for (const topicCase of cases) {
      const topic = professionalTopicsBySubject.computerPrinciples.find((computerPrinciplesTopic) => computerPrinciplesTopic.id === topicCase.id);

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      expect(topic?.title).toBe(topicCase.title);
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(topicCase.sources));
      expect(topic?.summary, `${topicCase.id} should have a summary`).not.toBe('');
      expect(topic?.terms).toEqual(expect.arrayContaining([...topicCase.terms]));
      expect(topic?.blocks).toHaveLength(1);

      const lessonArticle = topic?.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(topicCase.sources));
      expect(lessonArticle.lead).toEqual([]);
      expect(lessonArticle.sections.map((section) => section.heading)).toEqual([...topicCase.headings]);
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0)).toBe(true);

      const serializedTopic = JSON.stringify(topic);

      for (const keyword of topicCase.keywords) {
        expect(serializedTopic, `${topicCase.id} should contain ${keyword}`).toContain(keyword);
      }
    }
  });

  it('keeps Hazard dependency tables and USB priority highlights structurally testable', () => {
    const hazardTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === hazardTopicId);
    const usbSpeedTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === usbSpeedTopicId);
    const hazardLessonArticle = hazardTopic?.blocks[0];
    const usbLessonArticle = usbSpeedTopic?.blocks[0];

    expect(hazardLessonArticle?.kind).toBe('lessonArticle');
    expect(usbLessonArticle?.kind).toBe('lessonArticle');

    if (hazardLessonArticle?.kind !== 'lessonArticle' || usbLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('Hazard and USB speed topics should render as lessonArticle blocks');
    }

    const rawWarWawTable = hazardLessonArticle.sections
      .find((section) => section.heading === 'RAW、WAR、WAW')
      ?.blocks.find((block) => block.kind === 'table');
    const usbTables = usbLessonArticle.sections.flatMap((section) => section.blocks).filter((block) => block.kind === 'table');
    const usbPriorityTable = usbLessonArticle.sections
      .find((section) => section.heading === 'USB 常見速度表')
      ?.blocks.find((block) => block.kind === 'table');

    expect(rawWarWawTable?.kind).toBe('table');
    if (rawWarWawTable?.kind !== 'table') {
      throw new Error('RAW/WAR/WAW content should render as a table');
    }
    expect(rawWarWawTable.headers).toEqual(['類型', '全名', '白話意思']);
    expect(rawWarWawTable.rows.every((row) => row.length === 3)).toBe(true);

    expect(usbPriorityTable?.kind).toBe('table');
    if (usbPriorityTable?.kind !== 'table') {
      throw new Error('USB speed content should render as a table');
    }
    expect(usbTables).toHaveLength(1);
    expect(usbPriorityTable.rows.map((row) => row[2])).toEqual([
      '1.5 Mbps',
      '12 Mbps',
      '480 Mbps',
      '5 Gbps',
      '10 Gbps',
      '20 Gbps',
      '20 Gbps',
      '40 Gbps',
      '80 Gbps'
    ]);
    expect(usbPriorityTable.rowStyles).toEqual({
      2: { text: 'emphasisText' },
      3: { text: 'emphasisText' },
      4: { text: 'emphasisText' },
      5: { text: 'emphasisText' },
      7: { text: 'emphasisText' },
      8: { text: 'emphasisText' }
    });
    expect(
      usbLessonArticle.sections.findIndex((section) => section.heading === '看懂 Gen 1x1、2x1、2x2')
    ).toBeLessThan(usbLessonArticle.sections.findIndex((section) => section.heading === '備註'));
    expect(JSON.stringify(usbLessonArticle.sections)).toContain(
      'Gen 2x2 可以讀成「每條 10 Gbps，走 2 條」，合計 20 Gbps'
    );
  });

  it('fills floating-point conversion and codes/check-codes as formal lesson articles', () => {
    const cases = [
      {
        id: floatingPointConversionTopicId,
        title: '浮點數轉換(Floating-Point Conversion)',
        sources: floatingPointConversionSources,
        headings: [
          'IEEE 754 欄位',
          'IEEE 754 轉換流程',
          '正規化(Normalization)',
          '十進位小數轉二進位',
          '10.25 轉 IEEE 754 單精度',
          'IEEE 754 反推',
          '0.1 為什麼不精確',
          '常見陷阱',
          '考前速記'
        ],
        terms: [
          { zh: '浮點數', en: 'Floating Point' },
          { zh: '指數欄位', en: 'Exponent' },
          { zh: '偏移值', en: 'Bias' },
          { zh: '正規化', en: 'Normalization' }
        ],
        keywords: [
          'IEEE 754',
          'bias',
          '0x41240000',
          '0.0001100110011',
          '下一輪把整數部分拿掉，只用剩下的小數繼續乘'
        ]
      },
      {
        id: codesAndCheckCodesTopicId,
        title: '數碼、文字碼與檢查碼(Codes and Check Codes)',
        sources: codesAndCheckCodesSources,
        headings: [
          '定義',
          '[總覽] 常見碼表',
          'BCD',
          'Gray Code',
          '文字碼',
          'Parity Check（同位元檢查）',
          'CRC',
          'Hamming Code（漢明碼）',
          '[必背] 漢明距',
          '考前總複習(Exam Quick Review)'
        ],
        terms: [
          { zh: '數碼', en: 'Numeric Code' },
          { zh: '文字碼', en: 'Character Code' },
          { zh: '檢查碼', en: 'Check Code' },
          { zh: '症候值', en: 'Syndrome' }
        ],
        keywords: [
          '數碼管數字，文字碼管文字，檢查碼管有沒有錯。',
          'BCD',
          'Gray Code',
          'Unicode',
          'UTF-8',
          'CRC',
          'Hamming Code',
          'Hamming Distance',
          'Syndrome',
          '259 的 8421 BCD = 0010 0101 1001',
          'Binary 1011 = Gray 1110',
          'Gray 1110 = Binary 1011',
          'CRC 位數 = 生成多項式長度 - 1',
          '2^r ≥ m + r + 1',
          'S4 S2 S1',
          'floor((Dmin - 1) / 2)'
        ]
      }
    ] as const;

    for (const topicCase of cases) {
      const topic = professionalTopicsBySubject.computerPrinciples.find((computerPrinciplesTopic) => computerPrinciplesTopic.id === topicCase.id);

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      expect(topic?.title).toBe(topicCase.title);
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(topicCase.sources));
      expect(topic?.summary, `${topicCase.id} should have a summary`).not.toBe('');
      expect(topic?.terms).toEqual(expect.arrayContaining([...topicCase.terms]));
      expect(topic?.blocks).toHaveLength(1);

      const lessonArticle = topic?.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(topicCase.sources));
      expect(lessonArticle.lead).toEqual([]);
      expect(lessonArticle.sections.map((section) => section.heading)).toEqual([...topicCase.headings]);
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0)).toBe(true);

      const serializedTopic = JSON.stringify(topic);

      for (const keyword of topicCase.keywords) {
        expect(serializedTopic, `${topicCase.id} should contain ${keyword}`).toContain(keyword);
      }
    }

    const codesTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === codesAndCheckCodesTopicId);
    const codesLessonArticle = codesTopic?.blocks[0];

    expect(codesLessonArticle?.kind).toBe('lessonArticle');
    if (codesLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-codes-and-check-codes should render as lessonArticle');
    }

    const quickReviewSection = codesLessonArticle.sections.find((section) => section.heading === '考前總複習(Exam Quick Review)') as
      | ({ collapsible?: boolean; defaultExpanded?: boolean } & (typeof codesLessonArticle.sections)[number])
      | undefined;

    expect(quickReviewSection?.collapsible).toBe(true);
    expect(quickReviewSection?.defaultExpanded).toBe(false);
    const quickReviewSubsections = quickReviewSection?.blocks as
      | readonly {
          kind: string;
          heading?: string;
          blocks?: readonly { kind: string; headers?: readonly string[]; items?: readonly string[] }[];
        }[]
      | undefined;

    expect(quickReviewSubsections?.map((block) => block.kind)).toEqual(['subsection', 'subsection', 'subsection']);
    expect(quickReviewSubsections?.map((block) => block.heading)).toEqual(['常見陷阱', '國考答題句', '考前速記']);
    expect(quickReviewSubsections?.[0]?.blocks?.[0]).toMatchObject({
      kind: 'table',
      headers: ['容易錯的地方', '正確觀念']
    });
    expect(quickReviewSubsections?.[1]?.blocks?.[0]).toMatchObject({
      kind: 'orderedList',
      items: expect.arrayContaining(['BCD 是用 4 bits 表示一個十進位數字；8421 BCD 的權重為 8、4、2、1。'])
    });
    expect(quickReviewSubsections?.[2]?.blocks?.[0]).toMatchObject({
      kind: 'orderedList',
      items: expect.arrayContaining(['BCD：一個十進位數字用 4 bits。'])
    });

    const grayCodeSection = codesLessonArticle.sections.find((section) => section.heading === 'Gray Code');
    const grayCodeSubsections = grayCodeSection?.blocks as
      | readonly {
          kind: string;
          heading?: string;
          blocks?: readonly { kind: string; text?: string; items?: readonly string[] }[];
        }[]
      | undefined;

    expect(grayCodeSubsections?.map((block) => block.kind)).toEqual(['subsection', 'subsection', 'subsection']);
    expect(grayCodeSubsections?.map((block) => block.heading)).toEqual(['Gray Code 解釋與用途', 'Binary 轉 Gray', 'Gray 轉 Binary']);
    expect(JSON.stringify(grayCodeSubsections?.[1])).toContain('規則：');
    expect(JSON.stringify(grayCodeSubsections?.[1])).toContain('Binary：1 0 1 1');
    expect(JSON.stringify(grayCodeSubsections?.[1])).toContain('Gray：  1 (1 XOR 0) (0 XOR 1) (1 XOR 1)');
    expect(JSON.stringify(grayCodeSubsections?.[2])).toContain('規則：');
    expect(JSON.stringify(grayCodeSubsections?.[2])).toContain('Gray：  1 1 1 0');
    expect(JSON.stringify(grayCodeSubsections?.[2])).toContain('Binary：1');

    const crcSection = codesLessonArticle.sections.find((section) => section.heading === 'CRC');
    const crcSubsections = crcSection?.blocks as
      | readonly {
          kind: string;
          heading?: string;
          blocks?: readonly { kind: string; text?: string; items?: readonly string[] }[];
        }[]
      | undefined;

    expect(crcSubsections?.map((block) => block.kind)).toEqual(['subsection', 'subsection', 'subsection']);
    expect(crcSubsections?.map((block) => block.heading)).toEqual(['一、定義與用途', '二、傳送與接收流程', '三、算法']);
    expect(JSON.stringify(crcSubsections?.[0])).toContain('CRC（Cyclic Redundancy Check，循環冗餘檢查）常用在網路傳輸與儲存裝置。');
    expect(JSON.stringify(crcSubsections?.[0])).toContain('主要用來偵測錯誤，不是一般拿來更正錯誤。');
    expect(JSON.stringify(crcSubsections?.[1])).toContain('CRC 傳送資料前，先根據資料算出一串「檢查位元」');
    expect(JSON.stringify(crcSubsections?.[1])).toContain('接收端收到後，再重新計算一次，看結果是否正確。');
    expect(JSON.stringify(crcSubsections?.[2])).toContain('看生成多項式長度。ex. 1011');
    expect(JSON.stringify(crcSubsections?.[2])).toContain('用生成多項式做模 2 除法');
    expect(JSON.stringify(crcSubsections?.[2])).toContain('接收端再除一次，餘數為 0 表示通過。');

    const hammingSection = codesLessonArticle.sections.find((section) => section.heading === 'Hamming Code（漢明碼）');
    const hammingBlocks = hammingSection?.blocks as
      | readonly {
          kind: string;
          text?: string;
          items?: readonly string[];
          headers?: readonly string[];
          rows?: readonly (readonly string[])[];
          blocks?: readonly {
            kind: string;
            text?: string;
            headers?: readonly string[];
            rows?: readonly (readonly string[])[];
            blocks?: readonly {
              kind: string;
              text?: string;
            }[];
          }[];
        }[]
      | undefined;

    expect(hammingBlocks?.some((block) => block.kind === 'subsection')).toBe(false);
    const hammingIntroList = hammingBlocks?.[0] as { kind: string; items?: readonly string[] } | undefined;

    expect(hammingIntroList?.kind).toBe('orderedList');
    expect(hammingIntroList?.items).toEqual([
      'Hamming Code 用多個「校驗位(檢查位)」來定位錯誤。',
      '校驗位 = 額外加的檢查位元；要先決定是奇校驗還是偶校驗（同位元檢查）。',
      '編碼步驟（發送端：算出要傳什麼）'
    ]);
    expect(hammingBlocks?.[1]?.kind).toBe('indentedGroup');
    const hammingStepGroup = hammingBlocks?.[1]?.blocks;

    expect(JSON.stringify(hammingStepGroup)).toContain('3-1. 算需要幾個校驗位 r');
    expect(JSON.stringify(hammingStepGroup)).toContain('2^r ≥ m + r + 1');
    expect(JSON.stringify(hammingStepGroup)).toContain('3-2. 排位置（編號從左到右、從 1 開始）');
    expect(JSON.stringify(hammingStepGroup)).toContain('Hamming(7,4)：7 個總位元、4 個資料位元、3 個檢查位元');
    expect(hammingStepGroup?.[3]).toMatchObject({
      kind: 'table',
      headers: ['位置', '1', '2', '3', '4', '5', '6', '7'],
      rows: [
        ['位置 2 進制', '001', '010', '011', '100', '101', '110', '111'],
        ['內容', 'P1', 'P2', '1', 'P4', '0', '1', '1']
      ]
    });
    expect(JSON.stringify(hammingStepGroup)).toContain('（資料 1-0-1-1 填進位置 3、5、6、7）');
    expect(JSON.stringify(hammingStepGroup)).toContain('3-3. 算每個校驗位');
    expect(hammingStepGroup?.[6]?.kind).toBe('indentedGroup');
    const hammingCheckBitDetails = hammingStepGroup?.[6]?.blocks;

    expect(JSON.stringify(hammingCheckBitDetails)).toContain('P1 檢查「位置編號轉成二進位後，最右邊是 1」的位置');
    expect(JSON.stringify(hammingCheckBitDetails)).toContain('P4 檢查「位置編號轉成二進位後，最左邊是 1」的位置');
    expect(JSON.stringify(hammingCheckBitDetails)).toContain('此步驟可以得出全部漢明碼。');
    expect(JSON.stringify(hammingStepGroup)).toContain('3-4. 驗證，把漢明碼的值重新檢查 P1、P2、P4 負責的範圍是否符合校驗');
    expect(JSON.stringify(hammingBlocks)).toContain('Syndrome（症候值/症狀碼/校驗子）：');
    expect(JSON.stringify(hammingBlocks)).toContain('組成 S4 S2 S1，得到 Syndrome');
    expect(JSON.stringify(hammingBlocks)).toContain('轉成十進位，就是錯誤位置');
  });

  it('fills 3b digital logic topics with source traceability, confirmed corrections, and reveal metadata', () => {
    const digitalLogicTopics = digitalLogicTopicIds.map((topicId) =>
      professionalTopicsBySubject.digitalLogic.find((topic) => topic.id === topicId)
    );
    const rawInstructionPhrases = ['用table做', '內部值都是空的', '點選標題，才會讓值跑出來'];

    for (const topic of digitalLogicTopics) {
      if (!topic) {
        throw new Error('3b digital logic topic should exist');
      }

      const topicId = topic.id as (typeof digitalLogicTopicIds)[number];

      expect(topic.title).toBe(digitalLogicExpectedTitlesByTopicId[topicId]);
      expect(topic.sourceFiles).toEqual(expect.arrayContaining([...digitalLogicSourcesByTopicId[topicId]]));
      expect(topic.summary, `${topic.id} should have a summary`).not.toBe('');
      expect(topic.terms.length, `${topic.id} should have terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength(1);

      const lessonArticle = topic.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topic.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining([...digitalLogicSourcesByTopicId[topicId]]));
      expect(lessonArticle.lead).toEqual([]);
      expect(lessonArticle.sections.length, `${topic.id} should have lesson sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topic.id} should not have empty sections`).toBe(
        true
      );
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined), `${topic.id} should omit sourceLabel`).toBe(
        true
      );
    }

    const serializedDigitalLogicTopics = JSON.stringify(digitalLogicTopics);

    for (const rawInstructionPhrase of rawInstructionPhrases) {
      expect(serializedDigitalLogicTopics).not.toContain(rawInstructionPhrase);
    }
    expect(serializedDigitalLogicTopics).toContain("B'");
    expect(serializedDigitalLogicTopics).toContain('德摩根定律');
    expect(JSON.stringify(digitalLogicTopics[1])).toContain('標準 SOP');
    expect(JSON.stringify(digitalLogicTopics[1])).toContain('標準 POS');
    expect(JSON.stringify(digitalLogicTopics[2])).toContain('欄');
    expect(JSON.stringify(digitalLogicTopics[3])).toContain('5 個 NOR');

    const circuitsTopicText = JSON.stringify(digitalLogicTopics[4]);

    expect(circuitsTopicText).toContain('組合電路');
    expect(circuitsTopicText).toContain('循序電路');
    expect(circuitsTopicText).not.toContain('Sum = A XOR B');
    expect(circuitsTopicText).not.toContain('Cout =');
    expect(circuitsTopicText).not.toContain('Y0 =');
    expect(circuitsTopicText).not.toContain('D0 =');
    expect(circuitsTopicText).not.toContain('S1 S0');

    const basicsLessonArticle = digitalLogicTopics[0]?.blocks[0];

    expect(basicsLessonArticle?.kind).toBe('lessonArticle');
    if (basicsLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-digital-logic-basics should render as lessonArticle');
    }

    const truthTableBlock = basicsLessonArticle.sections
      .find((section) => section.heading === '兩輸入真值表(Two-Input Truth Table)')
      ?.blocks.find((block) => block.kind === 'table');

    expect(truthTableBlock).toMatchObject({
      kind: 'table',
      headers: ['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR']
    });
    expect((truthTableBlock as { revealableColumnIndexes?: readonly number[] } | undefined)?.revealableColumnIndexes).toEqual([
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });

  it('fills 3c operating-system topics with source traceability and source-preserving lesson articles', () => {
    const operatingSystemTopics = operatingSystemTopicIds.map((topicId) =>
      professionalTopicsBySubject.operatingSystems.find((topic) => topic.id === topicId)
    );

    for (const topic of operatingSystemTopics) {
      if (!topic) {
        throw new Error('3c operating-system topic should exist');
      }

      const topicId = topic.id as (typeof operatingSystemTopicIds)[number];

      expect(topic.title).toBe(operatingSystemExpectedTitlesByTopicId[topicId]);
      expect(topic.sourceFiles).toEqual(expect.arrayContaining([...operatingSystemSourcesByTopicId[topicId]]));
      expect(topic.summary, `${topic.id} should have a summary`).not.toBe('');
      expect(topic.terms.length, `${topic.id} should have terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength(1);

      const lessonArticle = topic.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topic.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining([...operatingSystemSourcesByTopicId[topicId]]));
      expect(lessonArticle.lead).toEqual([]);
      expect(lessonArticle.sections.length, `${topic.id} should have lesson sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topic.id} should not have empty sections`).toBe(
        true
      );
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined), `${topic.id} should omit sourceLabel`).toBe(
        true
      );

      const serializedTopic = JSON.stringify(topic);

      for (const keyword of operatingSystemRepresentativeKeywordsByTopicId[topicId]) {
        expect(serializedTopic, `${topic.id} should contain ${keyword}`).toContain(keyword);
      }
    }

    const hardwareProtectionTopic = professionalTopicsBySubject.operatingSystems.find((topic) => topic.id === 'cp-hardware-protection');
    const hardwareProtectionLessonArticle = hardwareProtectionTopic?.blocks[0];

    expect(hardwareProtectionTopic?.summary).toBe('');
    expect(hardwareProtectionTopic?.terms).toEqual([]);
    expect(hardwareProtectionLessonArticle?.kind).toBe('lessonArticle');
    if (hardwareProtectionLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-hardware-protection should stay as an empty lessonArticle skeleton');
    }
    expect(hardwareProtectionLessonArticle.lead).toEqual([]);
    expect(hardwareProtectionLessonArticle.sections).toEqual([]);
  });

  it('fills networking Markdown topics with source traceability and source-preserving lesson articles', () => {
    expect(professionalTopicsBySubject.networking.map((topic) => topic.id)).toEqual([...networkingTopicIds]);

    for (const topicCase of networkingTopicCases) {
      const topic = professionalTopicsBySubject.networking.find((networkingTopic) => networkingTopic.id === topicCase.id);
      const expectedSources = [networkingSourceText, topicCase.mdSource];

      if (!topic) {
        throw new Error(`${topicCase.id} should exist`);
      }

      expect(topic.sourceFiles).toEqual(expect.arrayContaining(expectedSources));
      expect(topic.sourceSummary, `${topic.id} should point to the chapter topic`).toContain(topicCase.sourceSummaryPhrase);
      expect(topic.summary, `${topic.id} should have a summary`).not.toBe('');
      expect(topic.terms.length, `${topic.id} should have terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength(1);

      const lessonArticle = topic.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topic.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(expectedSources));
      expect(lessonArticle.sourceSection).toBe(topic.sourceSummary);
      expect(lessonArticle.sections.length, `${topic.id} should have lesson sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topic.id} should not have empty sections`).toBe(
        true
      );
      expect(JSON.stringify(topic), `${topic.id} should contain ${topicCase.keyword}`).toContain(topicCase.keyword);
    }
  });

  it('imports Database, Programming, and System Design Markdown topics with exact source traceability and lessonArticle content', () => {
    const rawInstructionPhrases = ['用table', 'ul/li做', '紅色文字顏色', '你幫我設計顯示方式'];

    for (const { subjectKey, topicCases } of importedDatabaseProgrammingSystemDesignSubjectCases) {
      const importedTopics = professionalTopicsBySubject[subjectKey].slice(0, topicCases.length);

      expect(importedTopics.map((topic) => topic.id)).toEqual(topicCases.map((topicCase) => topicCase.id));

      for (const topicCase of topicCases) {
        const topic = professionalTopicsBySubject[subjectKey].find((subjectTopic) => subjectTopic.id === topicCase.id);

        if (!topic) {
          throw new Error(`${topicCase.id} should exist`);
        }

        expect(topic.subjectKey).toBe(subjectKey);
        expect(topic.title).toBe(topicCase.title);
        expect(topic.sourceBatch).toBe(importedDatabaseProgrammingSystemDesignBatch);
        expect(topic.sourceFiles).toEqual([topicCase.source]);
        expect(topic.sourceFiles.some((sourceFile) => sourceFile.includes('/TMP/'))).toBe(false);
        expect(topic.sourceFiles.some((sourceFile) => sourceFile.endsWith('.txt'))).toBe(false);
        expect(topic.sourceSummary).toContain(topicCase.title);
        expect(topic.summary, `${topic.id} should have summary`).not.toBe('');
        expect(topic.examOutline.length, `${topic.id} should have exam outline`).toBeGreaterThan(0);
        expect(topic.memoryPoints.length, `${topic.id} should have memory points`).toBeGreaterThan(0);
        expect(topic.understandingNotes.length, `${topic.id} should have understanding notes`).toBeGreaterThan(0);
        expect(topic.terms.length, `${topic.id} should have terms`).toBeGreaterThan(0);
        expect(topic.blocks).toHaveLength(1);

        const lessonArticle = topic.blocks[0];

        expect(lessonArticle?.kind).toBe('lessonArticle');
        if (lessonArticle?.kind !== 'lessonArticle') {
          throw new Error(`${topic.id} should render as lessonArticle`);
        }

        expect(lessonArticle.sourceFiles).toEqual([topicCase.source]);
        expect(lessonArticle.sourceSection).toBe(topic.sourceSummary);
        expect(lessonArticle.lead.length, `${topic.id} should preserve source guidance in lead`).toBeGreaterThan(0);
        expect(lessonArticle.sections.length, `${topic.id} should have sections`).toBeGreaterThan(0);
        expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topic.id} should not have empty sections`).toBe(
          true
        );

        const serializedTopic = JSON.stringify(topic);

        expect(serializedTopic, `${topic.id} should contain ${topicCase.keyword}`).toContain(topicCase.keyword);
        expect(serializedTopic).not.toContain('questionText');
        expect(serializedTopic).not.toContain('correctAnswer');
        expect(serializedTopic).not.toContain('backendSyncId');
        expect(serializedTopic).not.toContain('remoteQuestionId');
      }
    }

    const serializedImportedTopics = JSON.stringify(
      importedDatabaseProgrammingSystemDesignSubjectCases.flatMap(({ subjectKey, topicCases }) =>
        professionalTopicsBySubject[subjectKey].slice(0, topicCases.length)
      )
    );

    for (const rawInstructionPhrase of rawInstructionPhrases) {
      expect(serializedImportedTopics).not.toContain(rawInstructionPhrase);
    }
  });

  it('normalizes imported Computer Principles Markdown instructions and obvious input errors', () => {
    const computerPrinciplesImportedTopics = [
      hazardTopicId,
      usbSpeedTopicId,
      baseConversionTopicId,
      complementConversionTopicId,
      floatingPointConversionTopicId,
      codesAndCheckCodesTopicId
    ].map((topicId) => professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === topicId));
    const digitalLogicImportedTopics = digitalLogicTopicIds.map((topicId) =>
      professionalTopicsBySubject.digitalLogic.find((topic) => topic.id === topicId)
    );
    const operatingSystemImportedTopics = operatingSystemTopicIds.map((topicId) =>
      professionalTopicsBySubject.operatingSystems.find((topic) => topic.id === topicId)
    );
    const importedTopics = [...computerPrinciplesImportedTopics, ...digitalLogicImportedTopics, ...operatingSystemImportedTopics];
    const serializedTopics = JSON.stringify(importedTopics);

    expect(serializedTopics).not.toContain('用table');
    expect(serializedTopics).not.toContain('用table做');
    expect(serializedTopics).not.toContain('內部值都是空的');
    expect(serializedTopics).not.toContain('點選標題，才會讓值跑出來');
    expect(serializedTopics).not.toContain('ul/li做');
    expect(serializedTopics).not.toContain('用UL/LI表示');
    expect(serializedTopics).not.toContain('此處用 UL/LI表示');
    expect(serializedTopics).not.toContain('紅色文字顏色');
    expect(serializedTopics).not.toContain('你幫我設計顯示方式');
    expect(serializedTopics).not.toContain('(1011110010.151)2');
    expect(serializedTopics).toContain('(1011110010.101)2');
    expect(serializedTopics).toContain('USB4 Gen 3x2');
    expect(serializedTopics).toContain('USB4 Version 2.0');
    expect(serializedTopics).toContain('P1、P2、P4');
    expect(serializedTopics).toContain('單一 8421 BCD digit 的有效範圍');
  });

  it('fills the six Markdown-backed Computer Principles topics with source traceability and cleaned lesson articles', () => {
    const rawFormattingNotes = ['table表示', '用UL/LI表示', '以table表示', '此處用 UL/LI表示'];

    for (const topicCase of markdownBackedComputerPrinciplesTopicCases) {
      const topic = professionalTopicsBySubject.computerPrinciples.find((computerPrinciplesTopic) => computerPrinciplesTopic.id === topicCase.id);
      const expectedSources = [...topicCase.sources];

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(expectedSources));
      expect(topic?.summary, `${topicCase.id} should have a summary`).not.toBe('');
      expect(topic?.terms.length, `${topicCase.id} should have terms`).toBeGreaterThan(0);
      expect(topic?.blocks).toHaveLength(1);

      const lessonArticle = topic?.blocks[0];

      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render as lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(expectedSources));
      expect(lessonArticle.lead, `${topicCase.id} should keep lead empty by default`).toEqual([]);
      expect(lessonArticle.sections.length, `${topicCase.id} should have sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topicCase.id} should not have empty sections`).toBe(
        true
      );
      expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined), `${topicCase.id} should omit sourceLabel`).toBe(
        true
      );
      expect(
        getLessonArticleNonTableBlocks(lessonArticle).every(
          (contentBlock) => contentBlock.kind === 'paragraph' || contentBlock.kind === 'orderedList'
        ),
        `${topicCase.id} should use paragraph for single-item teaching blocks and orderedList for multi-item teaching blocks`
      ).toBe(true);
      expect(collectMarkdownBackedBlockKindViolations(lessonArticle), `${topicCase.id} should follow block kind priority`).toEqual([]);

      const serializedTopic = JSON.stringify(topic);

      for (const keyword of topicCase.keywords) {
        expect(serializedTopic, `${topicCase.id} should contain ${keyword}`).toContain(keyword);
      }
      for (const rawFormattingNote of rawFormattingNotes) {
        expect(serializedTopic, `${topicCase.id} should not expose ${rawFormattingNote}`).not.toContain(rawFormattingNote);
      }
    }
  });

  it('fills the Von Neumann lesson article with clean headings, bilingual terms, newline text, and no subtitle fields', () => {
    const vonNeumannTopic = professionalTopicsBySubject.computerPrinciples.find((topic) => topic.id === filledTopicId);

    expect(vonNeumannTopic).toBeDefined();
    expect(vonNeumannTopic?.sourceFiles).toEqual(expect.arrayContaining(vonNeumannSources));

    const lessonArticle = vonNeumannTopic?.blocks[0];

    expect(lessonArticle?.kind).toBe('lessonArticle');

    if (lessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cp-von-neumann-architecture should render as lessonArticle');
    }

    expect(lessonArticle.sourceFiles).toEqual(expect.arrayContaining(vonNeumannSources));
    expect(lessonArticle.lead).toEqual([]);
    expect(lessonArticle.sections.map((section) => section.heading)).toEqual([
      '定義與核心概念',
      '兩大特色',
      '五大單元',
      '馮紐曼架構 vs 哈佛架構',
      '馮紐曼瓶頸',
      '改善方法',
      '國考作答方向'
    ]);
    expect(lessonArticle.sections.every((section) => section.sourceLabel === undefined)).toBe(true);
    expect(lessonArticle.sections.every((section) => !section.heading.startsWith('['))).toBe(true);

    expect(lessonArticle.sections.find((section) => section.heading === '五大單元')?.blocks[1]?.kind).toBe('orderedList');
    expect(lessonArticle.sections.find((section) => section.heading === '改善方法')?.blocks[1]?.kind).toBe('orderedList');

    const serializedTopic = JSON.stringify(vonNeumannTopic);

    expect(serializedTopic).not.toContain('subTitle');
    expect(serializedTopic).not.toContain('subtitle');
    expect(serializedTopic).not.toContain('sourceLabel');
    expect(serializedTopic).toContain('馮紐曼架構(Von Neumann Architecture)');
    expect(serializedTopic).toContain('電腦設計方式。\\n核心定義');
    expect(serializedTopic).not.toContain('電腦設計方式。\\\\n核心定義');
    expect(serializedTopic).toContain('程式內儲概念(Stored-Program Concept)');
    expect(serializedTopic).toContain('匯流排(Bus)');
    expect(serializedTopic).toContain('中央處理器');
    expect(serializedTopic).toContain('Central Processing Unit, CPU');
    expect(serializedTopic).toContain('哈佛架構(Harvard Architecture)');
    expect(serializedTopic).toContain('馮紐曼瓶頸(Von Neumann Bottleneck)');

    expect(vonNeumannTopic?.terms).toEqual(
      expect.arrayContaining([
        { zh: '馮紐曼架構', en: 'Von Neumann Architecture' },
        { zh: '程式內儲概念', en: 'Stored-Program Concept' },
        { zh: '匯流排', en: 'Bus' },
        { zh: '中央處理器', en: 'Central Processing Unit, CPU' },
        { zh: '哈佛架構', en: 'Harvard Architecture' },
        { zh: '馮紐曼瓶頸', en: 'Von Neumann Bottleneck' }
      ])
    );
  });

  it('removes generated teaching prose from formal professional app data', () => {
    const serializedTopics = JSON.stringify(professionalTopicsBySubject);
    const moduleSource = readText('src/modules/subjectTopics/data/professionalTopics.ts');

    for (const phrase of generatedContentPhrases) {
      expect(serializedTopics).not.toContain(phrase);
      expect(moduleSource).not.toContain(phrase);
    }

    expect(moduleSource).not.toContain('computerPrinciplesLessonSectionsById');
    expect(moduleSource).not.toContain('createSourceOutlineLessonArticleBlock');
    expect(moduleSource).not.toContain('complexityRows');
    expect(moduleSource).not.toContain('codeExamples');
  });

  it('does not reintroduce section subtitle fields', () => {
    const serializedTopics = JSON.stringify(professionalTopicsBySubject);

    expect(serializedTopics).not.toContain('sectionTitle');
    expect(serializedTopics).not.toContain('subTitle');
    expect(serializedTopics).not.toContain('subtitle');
  });
});
