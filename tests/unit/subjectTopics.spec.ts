import { describe, expect, it } from 'vitest';
import { getSubjectTopics, hasSubjectTopicContent } from '@/modules/subjectTopics/data/subjectTopics';
import type { SubjectKey, SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const expectedNetworkingRouteTopicIds: readonly string[] = [
  'networking-osi-tcpip',
  'networking-basics',
  'networking-devices-osi',
  'networking-ip-subnetting',
  'networking-routing-l3-protocols',
  'networking-transport-layer',
  'networking-application-ports',
  'networking-physical-layer',
  'networking-data-link-layer',
  'networking-security-crypto',
  'networking-defense-attacks'
];
const networkingV2SubjectKey = 'networkingV2' as SubjectKey;
const expectedNetworkingV2RouteTopicIds: readonly string[] = [
  'networking-v2-osi-tcpip',
  'networking-v2-basics',
  'networking-v2-security-crypto-tls',
  'networking-v2-devices-osi',
  'networking-v2-wireless-access-devices',
  'networking-v2-ip-subnetting',
  'networking-v2-transport-layer',
  'networking-v2-application-ports',
  'networking-v2-physical-layer',
  'networking-v2-data-link-layer',
  'networking-v2-security-crypto',
  'networking-v2-defense-attacks'
];
const expectedNetworkingV2RouteTitles: readonly string[] = [
  'OSI 七層 + TCP/IP ★',
  '基礎概念',
  '資安：加密、雜湊、數位簽章、憑證與 TLS',
  '網路設備對應層級（看得懂版）',
  '無線與上網接取設備',
  'IP 基礎 + 子網路計算 ★',
  '傳輸層',
  '應用層協定 + Port Number 對照表 ★',
  '實體層 + 標準速度表 ★',
  '資料鏈結層',
  '資安觀念與加密 ★',
  '防禦設備與攻擊類型 ★'
];

const oldNetworkingSkeletonTopicIds: readonly string[] = [
  'networking-prep-direction',
  'networking-overview',
  'networking-ports',
  'networking-osi-tcpip-models',
  'networking-network-layer',
  'networking-application-layer',
  'networking-security'
];
const expectedDatabaseImportedRouteTopicIds: readonly string[] = [
  'database-md-foundations-architecture',
  'database-md-keys-erd',
  'database-md-normalization',
  'database-md-sql-crud',
  'database-md-sql-advanced-query',
  'database-md-transactions-nosql'
];
const expectedProgrammingImportedRouteTopicIds: readonly string[] = [
  'programming-md-language-execution-basics',
  'programming-md-functions-parameter-passing',
  'programming-md-arrays-strings-exceptions',
  'programming-md-pointers',
  'programming-md-oop',
  'programming-md-recursion',
  'programming-md-language-features'
];
const expectedSystemDesignImportedRouteTopicIds: readonly string[] = [
  'system-design-sdlc-ssdlc',
  'system-design-cohesion-coupling',
  'system-design-oo-uml',
  'system-design-testing',
  'system-design-conversion-pdca'
];
const expectedDigitalLogicRouteTopicIds: readonly string[] = [
  'cp-digital-logic-basics',
  'cp-sop-pos',
  'cp-karnaugh-map',
  'cp-universal-gates',
  'cp-combinational-sequential-circuits'
];
const expectedOperatingSystemsRouteTopicIds: readonly string[] = [
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
];
const computerPrinciplesV2SubjectKey = 'computerPrinciplesV2' as SubjectKey;
const refreshedCpv2FloatingPointSourceFile = '_private/MD/計算機概論v2/10_浮點數轉換.md';
const supplementalCpv2FloatingPointPracticeSourceFile = '_private/discuss.txt';
const supplementalCpv2DataSourceFile = '_private/計概補充/計算機概論_重點講義_01.md';
const supplementalCpv2FloatingPointSpecialValuesSourceFile = '_private/MD/0621/IEEE754_浮點數特殊值_速記.md';
const deprecatedCpv2FloatingPointSourceFile = '_private/MD/計算機概論/10_浮點數轉換.md';
const refreshedCpv2FloatingPointSourceFiles = [
  refreshedCpv2FloatingPointSourceFile,
  supplementalCpv2FloatingPointSpecialValuesSourceFile
] as const;
const expectedComputerPrinciplesV2RouteTopicIds: readonly string[] = [
  'cpv2-supplemental-practice',
  'cpv2-supplemental-data',
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
];
const expectedComputerPrinciplesV2RouteTitles: readonly string[] = [
  '加強練習',
  '補充資料',
  '架構與計算理論',
  '機器指令與指令週期',
  'Pipeline 與 Hazard',
  '效能與 RISC／CISC',
  '匯流排與 USB',
  '記憶體（一）階層與分類',
  '記憶體（二）暫存器與 Cache',
  '進制轉換',
  '補數轉換',
  '浮點數轉換',
  '數碼與文字碼',
  '檢查碼（一）Parity 與 CRC',
  '檢查碼（二）漢明碼與漢明距'
];

describe('subject topic route data helpers', () => {
  it('treats an empty lessonArticle skeleton as no route-visible content', () => {
    const topic: SubjectTopic = {
      id: 'empty-topic-fixture',
      subjectKey: 'computerPrinciples',
      title: '空殼 section',
      summary: '',
      blocks: [
        {
          kind: 'lessonArticle',
          sourceFiles: ['_private/計算機概論.txt'],
          sourceSection: '測試來源',
          lead: [],
          sections: []
        }
      ]
    };

    expect(hasSubjectTopicContent(topic)).toBe(false);
  });

  it('keeps only route topics with actual learner-facing content', () => {
    const computerPrinciplesTopics = getSubjectTopics('computerPrinciples');
    const computerPrinciplesTitles = computerPrinciplesTopics.map((topic) => topic.title);
    const computerPrinciplesIds = computerPrinciplesTopics.map((topic) => topic.id);
    const algorithmTitles = getSubjectTopics('algorithms').map((topic) => topic.title);

    expect(computerPrinciplesTitles).toEqual([
      '電腦常用單位',
      '馮紐曼架構(Von Neumann Architecture)',
      '圖靈機與圖靈測試(Turing Machine and Turing Test)',
      '機器指令與指令週期(Machine Instruction and Instruction Cycle)',
      'Pipeline（管線化）(Pipelining)',
      '管線危障(Hazard)',
      '匯流排（Bus）',
      '效能名詞與公式(Performance Terms and Formulas)',
      'RISC 與 CISC(RISC and CISC)',
      'Memory 階層圖(Memory Hierarchy)',
      'Memory 分類圖(Memory Classification)',
      'Register（暫存器）(Register)',
      'Cache(Cache Memory)',
      'USB 速度(USB Speed)',
      '進制轉換(Base Conversion)',
      '補數轉換(Complement Representation)',
      '浮點數轉換(Floating-Point Conversion)',
      '數碼、文字碼與檢查碼(Codes and Check Codes)'
    ]);
    expect(computerPrinciplesIds.slice(computerPrinciplesIds.indexOf('cp-pipeline'), computerPrinciplesIds.indexOf('cp-bus') + 1)).toEqual([
      'cp-pipeline',
      'cp-hazard',
      'cp-bus'
    ]);
    expect(computerPrinciplesIds.slice(computerPrinciplesIds.indexOf('cp-cache'), computerPrinciplesIds.indexOf('cp-complement-conversion') + 1)).toEqual([
      'cp-cache',
      'cp-usb-speed',
      'cp-base-conversion',
      'cp-complement-conversion'
    ]);
    expect(
      computerPrinciplesIds.slice(
        computerPrinciplesIds.indexOf('cp-complement-conversion'),
        computerPrinciplesIds.indexOf('cp-codes-and-check-codes') + 1
      )
    ).toEqual(['cp-complement-conversion', 'cp-floating-point-conversion', 'cp-codes-and-check-codes']);
    expect(computerPrinciplesIds).not.toEqual(expect.arrayContaining([...expectedDigitalLogicRouteTopicIds]));
    expect(computerPrinciplesIds).not.toEqual(expect.arrayContaining([...expectedOperatingSystemsRouteTopicIds]));
    expect(computerPrinciplesIds).not.toContain('cp-hardware-protection');

    expect(algorithmTitles).toEqual([
      '演算法定義 + Big-O 複雜度 ★',
      '陣列 Array + 鏈結串列 Linked List',
      '堆疊 Stack + 佇列 Queue',
      '樹 Tree（基本）+ 前中後序走訪',
      '高等樹 ★（AVL／B-Tree／Heap／紅黑樹）',
      '圖 Graph 基礎 + DFS／BFS ★',
      '圖演算法 ★（MST／最短路徑／AOV-AOE）',
      '排序 Sorting ★',
      '雜湊 Hashing',
      '氣泡排序法(Bubble Sort)',
      '選擇排序法(Selection Sort)',
      '快速排序法(Quick Sort)',
      'Fibonacci 序列(Fibonacci Sequence)',
      '最大公因數(Greatest Common Divisor)',
      '二元搜尋法(Binary Search)',
      '插入排序法(Insertion Sort)',
      '桶裝排序法(Bucket Sort)'
    ]);
  });

  it('exposes imported networking topics in source chapter order', () => {
    const networkingTopicIds = getSubjectTopics('networking').map((topic) => topic.id);

    expect(networkingTopicIds).toEqual(expectedNetworkingRouteTopicIds);
    expect(networkingTopicIds.filter((topicId) => oldNetworkingSkeletonTopicIds.includes(topicId))).toEqual([]);
  });

  it('exposes networking v2 topics from the filename manifest only', () => {
    const topics = getSubjectTopics(networkingV2SubjectKey);
    const topicIds = topics.map((topic) => topic.id);
    const topicTitles = topics.map((topic) => topic.title);

    expect(topicIds).toEqual(expectedNetworkingV2RouteTopicIds);
    expect(topicTitles).toEqual(expectedNetworkingV2RouteTitles);
    expect(topicTitles.some((title) => title.includes('網路概論_') || /^\\d/.test(title))).toBe(false);
    expect(getSubjectTopics('networking').map((topic) => topic.id)).not.toEqual(
      expect.arrayContaining([...expectedNetworkingV2RouteTopicIds])
    );
  });

  it('exposes split digital logic and operating systems topics in source chapter order', () => {
    expect(getSubjectTopics('digitalLogic').map((topic) => topic.id)).toEqual(expectedDigitalLogicRouteTopicIds);
    expect(getSubjectTopics('operatingSystems').map((topic) => topic.id)).toEqual(expectedOperatingSystemsRouteTopicIds);
  });

  it('exposes computer principles v2 topics from the catalog manifest only', () => {
    const topics = getSubjectTopics(computerPrinciplesV2SubjectKey);
    const topicIds = topics.map((topic) => topic.id);
    const topicTitles = topics.map((topic) => topic.title);
    const floatingPointTopic = topics.find((topic) => topic.id === 'cpv2-floating-point-conversion');
    const practiceTopic = topics.find((topic) => topic.id === 'cpv2-supplemental-practice');
    const supplementalDataTopic = topics.find((topic) => topic.id === 'cpv2-supplemental-data');
    const floatingPointLessonArticle = floatingPointTopic?.blocks[0];
    const practiceLessonArticle = practiceTopic?.blocks[0];
    const supplementalDataLessonArticle = supplementalDataTopic?.blocks[0];

    expect(topicIds).toEqual(expectedComputerPrinciplesV2RouteTopicIds);
    expect(topicTitles).toEqual(expectedComputerPrinciplesV2RouteTitles);
    expect(topicTitles.some((title) => title.includes('00_目錄') || title.startsWith('基本計概'))).toBe(false);
    expect(getSubjectTopics('computerPrinciples').map((topic) => topic.id)).not.toEqual(
      expect.arrayContaining([...expectedComputerPrinciplesV2RouteTopicIds])
    );
    expect(floatingPointLessonArticle?.kind).toBe('lessonArticle');
    if (floatingPointLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-floating-point-conversion should expose refreshed lessonArticle content');
    }
    expect(floatingPointLessonArticle.sourceFiles).toEqual([...refreshedCpv2FloatingPointSourceFiles]);
    expect(floatingPointLessonArticle.sourceFiles).not.toContain(supplementalCpv2FloatingPointPracticeSourceFile);
    expect(floatingPointLessonArticle.sourceFiles).not.toContain(deprecatedCpv2FloatingPointSourceFile);
    expect(floatingPointLessonArticle.sections[0]?.heading).toBe('16. 浮點數轉換');
    expect(floatingPointLessonArticle.sections.map((section) => section.heading)).not.toContain('加強練習');
    expect(JSON.stringify(floatingPointTopic)).toContain('IEEE 754 浮點數特殊值・速記版');
    expect(JSON.stringify(floatingPointTopic)).toContain('練習 6（兩種表示法對照）');
    expect(JSON.stringify(floatingPointTopic)).not.toContain(deprecatedCpv2FloatingPointSourceFile);
    expect(practiceLessonArticle?.kind).toBe('lessonArticle');
    if (practiceLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-supplemental-practice should expose practice lessonArticle content');
    }
    expect(practiceLessonArticle.sourceFiles).toEqual([supplementalCpv2FloatingPointPracticeSourceFile]);
    expect(practiceLessonArticle.sections[0]?.heading).toBe('加強練習');
    expect(JSON.stringify(practiceTopic)).toContain('Valid bit');
    expect(supplementalDataLessonArticle?.kind).toBe('lessonArticle');
    if (supplementalDataLessonArticle?.kind !== 'lessonArticle') {
      throw new Error('cpv2-supplemental-data should expose supplemental lessonArticle content');
    }
    expect(supplementalDataLessonArticle.sourceFiles).toEqual([supplementalCpv2DataSourceFile]);
    expect(supplementalDataLessonArticle.sections[0]?.heading).toBe('一、機器指令週期（Machine Instruction Cycle）');
    expect(JSON.stringify(supplementalDataTopic)).toContain("Amdahl's Law");
  });

  it('exposes imported database, programming, and system design topics before skeleton topics', () => {
    const databaseTopicIds = getSubjectTopics('database').map((topic) => topic.id);
    const programmingTopicIds = getSubjectTopics('programming').map((topic) => topic.id);
    const systemDesignTopicIds = getSubjectTopics('systemDesign').map((topic) => topic.id);

    expect(databaseTopicIds.slice(0, expectedDatabaseImportedRouteTopicIds.length)).toEqual(expectedDatabaseImportedRouteTopicIds);
    expect(programmingTopicIds.slice(0, expectedProgrammingImportedRouteTopicIds.length)).toEqual(expectedProgrammingImportedRouteTopicIds);
    expect(systemDesignTopicIds).toEqual(expectedSystemDesignImportedRouteTopicIds);
  });

  it('keeps system design Markdown topics owned by the systemDesign route', () => {
    const programmingTopics = getSubjectTopics('programming');
    const systemDesignTopics = getSubjectTopics('systemDesign');

    expect(
      programmingTopics.some((topic) =>
        topic.blocks.some(
          (block) => block.kind === 'lessonArticle' && block.sourceFiles.some((sourceFile) => sourceFile.includes('_private/MD/系統分析與設計/'))
        )
      )
    ).toBe(false);
    expect(
      systemDesignTopics.every((topic) =>
        topic.blocks.some(
          (block) => block.kind === 'lessonArticle' && block.sourceFiles.some((sourceFile) => sourceFile.includes('_private/MD/系統分析與設計/'))
        )
      )
    ).toBe(true);
  });

  it('keeps networking route topics on the existing lessonArticle contract', () => {
    const networkingTopics = getSubjectTopics('networking');

    for (const topic of networkingTopics) {
      const lessonArticle = topic.blocks[0];

      expect(lessonArticle?.kind, `${topic.id} should render through lessonArticle`).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topic.id} should keep lessonArticle as the first content block`);
      }

      expect(lessonArticle.sections.length, `${topic.id} should have lesson sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topic.id} should not have empty sections`).toBe(
        true
      );
    }
  });

  it('does not fall back to placeholder topics when a route has no filled content', () => {
    expect(getSubjectTopics('english')).toEqual([]);
    expect(getSubjectTopics('chinese')).toEqual([]);
  });
});
