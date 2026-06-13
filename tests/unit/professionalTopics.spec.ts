import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

const readText = (path: string) => readFileSync(path, 'utf8');

const readComputerPrinciplesManifestRows = () =>
  readText('_TMP/manifests/computer-principles-manifest.md')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| cp-'))
    .map((line) => {
      const [id, title] = line
        .split('|')
        .slice(1, 3)
        .map((cell) => cell.trim());

      return { id, title };
    });

describe('professional topic data', () => {
  it('carries source traceability and learning layers in formal topic data', () => {
    const binarySearchTopic = professionalTopicsBySubject.algorithms.find((topic) => topic.id === 'binary-search');

    expect(binarySearchTopic).toBeDefined();
    expect(binarySearchTopic?.subjectKey).toBe('algorithms');
    expect(binarySearchTopic?.sourceFiles).toEqual(
      expect.arrayContaining(['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'])
    );
    expect(binarySearchTopic?.sourceSummary).toContain('二元搜尋法');
    expect(binarySearchTopic?.examOutline.length).toBeGreaterThan(0);
    expect(binarySearchTopic?.memoryPoints.length).toBeGreaterThan(0);
    expect(binarySearchTopic?.understandingNotes.length).toBeGreaterThan(0);
    expect(binarySearchTopic?.terms).toEqual(
      expect.arrayContaining([expect.objectContaining({ zh: '二元搜尋法', en: 'Binary Search' })])
    );
  });

  it('defines complexity table rows and avoids reintroducing section subtitle fields', () => {
    const sortingTopic = professionalTopicsBySubject.algorithms.find((topic) => topic.id === 'sorting-baseline');
    const complexityBlock = sortingTopic?.blocks.find((block) => block.kind === 'complexityTable');

    expect(complexityBlock).toBeDefined();
    expect(complexityBlock).toEqual(
      expect.objectContaining({
        rows: expect.arrayContaining([
          expect.objectContaining({
            algorithmNameZh: '快速排序法',
            algorithmNameEn: 'Quick Sort',
            bestTime: 'O(n log n)',
            averageTime: 'O(n log n)',
            worstTime: 'O(n^2)',
            stability: 'Unstable'
          })
        ])
      })
    );

    const serializedTopics = JSON.stringify(professionalTopicsBySubject);
    expect(serializedTopics).not.toContain('sectionTitle');
    expect(serializedTopics).not.toContain('subTitle');
    expect(serializedTopics).not.toContain('subtitle');
  });

  it('imports a verified computer-principles topic with source and verifier metadata', () => {
    const vonNeumannTopic = professionalTopicsBySubject.computerPrinciples.find(
      (topic) => topic.id === 'cp-von-neumann-architecture'
    );

    expect(vonNeumannTopic).toBeDefined();
    expect(vonNeumannTopic?.title).toBe('馮紐曼架構(Von Neumann Architecture)');
    expect(vonNeumannTopic?.sourceFiles).toEqual(expect.arrayContaining(['_private/計算機概論.txt']));
    expect(vonNeumannTopic?.verifiedBy).toBe('content-verifier');
    expect(vonNeumannTopic?.verifierSummary).toContain('verified');
    expect(vonNeumannTopic?.blocks.some((block) => block.kind === 'sourceNote')).toBe(true);
    expect(vonNeumannTopic?.blocks.some((block) => block.kind === 'examOutline')).toBe(true);
    expect(vonNeumannTopic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(true);
    expect(vonNeumannTopic?.blocks.some((block) => block.kind === 'understanding')).toBe(true);
  });

  it('matches the complete computer-principles manifest with formal imported topics', () => {
    const manifestRows = readComputerPrinciplesManifestRows();
    const formalTopics = professionalTopicsBySubject.computerPrinciples;
    const formalTopicIds = formalTopics.map((topic) => topic.id);

    expect(manifestRows.length).toBeGreaterThan(20);
    expect(formalTopics).toHaveLength(manifestRows.length);

    for (const row of manifestRows) {
      const topic = formalTopics.find((subjectTopic) => subjectTopic.id === row.id);

      expect(formalTopicIds).toContain(row.id);
      expect(topic?.subjectKey).toBe('computerPrinciples');
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining(['_private/計算機概論.txt']));
      expect(topic?.sourceSummary).toContain(row.title);
      expect(topic?.verifiedBy).toBe('content-verifier');
      expect(topic?.verifierSummary).toContain('verified');
      expect(topic?.examOutline.length).toBeGreaterThan(0);
      expect(topic?.memoryPoints.length).toBeGreaterThan(0);
      expect(topic?.understandingNotes.length).toBeGreaterThan(0);
      expect(topic?.terms.length).toBeGreaterThan(0);
      expect(topic?.blocks.some((block) => block.kind === 'sourceNote')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'examOutline')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'understanding')).toBe(true);
    }
  });

  it('gives Von Neumann Architecture a deep teaching treatment', () => {
    const vonNeumannTopic = professionalTopicsBySubject.computerPrinciples.find(
      (topic) => topic.id === 'cp-von-neumann-architecture'
    );
    const serializedTopic = JSON.stringify(vonNeumannTopic);
    const blockKinds = vonNeumannTopic?.blocks.map((block) => block.kind) ?? [];

    expect(vonNeumannTopic).toBeDefined();
    expect(vonNeumannTopic?.blocks.length).toBeGreaterThanOrEqual(8);
    expect(vonNeumannTopic?.terms.length).toBeGreaterThanOrEqual(9);
    expect(blockKinds).toEqual(
      expect.arrayContaining(['sourceNote', 'examOutline', 'memoryPoints', 'understanding', 'termList', 'workedExample', 'pitfall'])
    );

    for (const expectedText of [
      '程式內儲',
      'Stored-Program Concept',
      '中央處理器',
      'Central Processing Unit',
      '控制單元',
      'Control Unit',
      '算術邏輯單元',
      'Arithmetic Logic Unit',
      '記憶體',
      'Memory',
      '輸入/輸出',
      'Input/Output',
      '指令週期',
      'Instruction Cycle',
      '馮紐曼瓶頸',
      'Von Neumann Bottleneck',
      '哈佛架構',
      'Harvard Architecture'
    ]) {
      expect(serializedTopic).toContain(expectedText);
    }

    for (const genericText of ['先理解中文意思', '不是孤立名詞', '最低通過線', '常考問法']) {
      expect(serializedTopic).not.toContain(genericText);
    }

    for (const explanatoryText of [
      '程式和資料都放在同一套記憶體',
      '控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號',
      '算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷',
      '輸入單元(Input Unit) 把外部資料送進系統',
      '輸出單元(Output Unit) 把處理結果送回外部',
      '取指令(Fetch) 是依 Program Counter 找到下一個指令',
      '解碼(Decode) 是判斷 opcode 要 CPU 做什麼',
      '取運算元(Operand Fetch) 是把資料或有效位址準備好',
      '執行(Execute) 是由 ALU 或控制流程完成動作',
      '寫回(Write Back) 是把結果存回暫存器或記憶體',
      'Harvard Architecture 將程式記憶體與資料記憶體分離'
    ]) {
      expect(serializedTopic).toContain(explanatoryText);
    }
  });

  it('imports one verified professional topic for each content source route', () => {
    const expectedImportedTopics = [
      {
        subject: professionalTopicsBySubject.networking,
        id: 'networking-ports',
        source: '_private/網概.txt',
        term: { zh: '連接埠', en: 'Port' }
      },
      {
        subject: professionalTopicsBySubject.database,
        id: 'database-normalization',
        source: '_private/資料庫.txt',
        term: { zh: '正規化', en: 'Normalization' }
      },
      {
        subject: professionalTopicsBySubject.informationManagement,
        id: 'im-02-digital-transformation',
        source: '_private/資訊管理.txt',
        term: { zh: '數位轉型', en: 'Digital Transformation' }
      },
      {
        subject: professionalTopicsBySubject.programming,
        id: 'programming-recursion',
        source: '_private/程式.txt',
        term: { zh: '遞迴', en: 'Recursion' }
      },
      {
        subject: professionalTopicsBySubject.programming,
        id: 'programming-system-analysis-sdlc',
        source: '_private/系統分析與設計.txt',
        term: { zh: '系統發展生命週期', en: 'System Development Life Cycle' }
      }
    ];

    for (const expectedTopic of expectedImportedTopics) {
      const topic = expectedTopic.subject.find((subjectTopic) => subjectTopic.id === expectedTopic.id);

      expect(topic).toBeDefined();
      expect(topic?.sourceFiles).toEqual(expect.arrayContaining([expectedTopic.source]));
      expect(topic?.verifiedBy).toBe('content-verifier');
      expect(topic?.verifierSummary).toContain('verified');
      expect(topic?.terms).toEqual(expect.arrayContaining([expect.objectContaining(expectedTopic.term)]));
      expect(topic?.blocks.some((block) => block.kind === 'sourceNote')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'examOutline')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'memoryPoints')).toBe(true);
      expect(topic?.blocks.some((block) => block.kind === 'understanding')).toBe(true);
    }
  });

  it('records content review logs for imported professional routes', () => {
    const reviewChecks = [
      {
        path: '_TMP/reviews/networking-content-review.md',
        expectedText: ['networking-ports', 'Port', 'TCP', 'UDP', 'pass']
      },
      {
        path: '_TMP/reviews/database-content-review.md',
        expectedText: ['database-normalization', '考試大綱', '記憶重點', '理解說明', 'pass']
      },
      {
        path: '_TMP/reviews/information-management-content-review.md',
        expectedText: ['im-02-digital-transformation', '數位轉型', '國考重點', 'pass']
      },
      {
        path: '_TMP/reviews/programming-content-review.md',
        expectedText: ['programming-recursion', 'programming-system-analysis-sdlc', 'Java', '作答思路', 'pass']
      }
    ];

    for (const reviewCheck of reviewChecks) {
      const review = readText(reviewCheck.path);

      for (const expectedText of reviewCheck.expectedText) {
        expect(review).toContain(expectedText);
      }
    }
  });

  it('imports required first-batch algorithm topics with Java variants', () => {
    const requiredAlgorithms = [
      { id: 'bubble-sort', term: { zh: '氣泡排序法', en: 'Bubble Sort' }, recursive: true, iterative: true },
      { id: 'quick-sort', term: { zh: '快速排序法', en: 'Quick Sort' }, recursive: true, iterative: true },
      { id: 'fibonacci-sequence', term: { zh: 'Fibonacci 序列', en: 'Fibonacci Sequence' }, recursive: true, iterative: true },
      {
        id: 'greatest-common-divisor',
        term: { zh: '最大公因數', en: 'Greatest Common Divisor' },
        recursive: true,
        iterative: true
      },
      { id: 'binary-search', term: { zh: '二元搜尋法', en: 'Binary Search' }, recursive: true, iterative: true },
      { id: 'selection-sort', term: { zh: '選擇排序法', en: 'Selection Sort' }, recursive: true, iterative: true },
      { id: 'insertion-sort', term: { zh: '插入排序法', en: 'Insertion Sort' }, recursive: true, iterative: true },
      { id: 'merge-sort', term: { zh: '合併排序法', en: 'Merge Sort' }, recursive: true, iterative: true },
      { id: 'heap-sort', term: { zh: '堆積排序法', en: 'Heap Sort' }, recursive: true, iterative: true },
      { id: 'shell-sort', term: { zh: '希爾排序法', en: 'Shell Sort' }, recursive: false, iterative: true }
    ];

    for (const expectedAlgorithm of requiredAlgorithms) {
      const topic = professionalTopicsBySubject.algorithms.find((subjectTopic) => subjectTopic.id === expectedAlgorithm.id);
      const codeBlocks = topic?.blocks.filter((block) => block.kind === 'teachingCode') ?? [];
      const codeBlockTitles = codeBlocks.map((block) => block.title);

      expect(topic).toBeDefined();
      expect(topic?.terms).toEqual(expect.arrayContaining([expect.objectContaining(expectedAlgorithm.term)]));
      expect(topic?.sourceFiles.length).toBeGreaterThan(0);
      expect(topic?.verifiedBy).toBe('algorithm-verifier');
      expect(topic?.verifierSummary).toContain('verified');
      expect(topic?.blocks.some((block) => block.kind === 'complexityTable')).toBe(true);

      if (expectedAlgorithm.iterative) {
        expect(codeBlockTitles.some((title) => title.includes('非遞迴版'))).toBe(true);
      }

      if (expectedAlgorithm.recursive) {
        expect(codeBlockTitles.some((title) => title.includes('遞迴') && !title.includes('非遞迴版'))).toBe(true);
      } else {
        expect(codeBlockTitles.some((title) => title.includes('遞迴') && !title.includes('非遞迴版'))).toBe(false);
        expect(topic?.verifierSummary).toContain('Shell Sort only uses the iterative primary version');
      }
    }

    const binarySearchTopic = professionalTopicsBySubject.algorithms.find((topic) => topic.id === 'binary-search');
    expect(JSON.stringify(binarySearchTopic)).toContain('已排序');
  });

  it('records algorithm content review for variants, complexity, and reasoning comments', () => {
    const review = readText('_TMP/reviews/algorithms-content-review.md');

    for (const expectedText of [
      'bubble-sort',
      'selection-sort',
      'insertion-sort',
      'merge-sort',
      'quick-sort',
      'heap-sort',
      'shell-sort',
      'fibonacci-sequence',
      'greatest-common-divisor',
      'binary-search',
      'Shell Sort only uses iterative primary version',
      '作答思路',
      'pass'
    ]) {
      expect(review).toContain(expectedText);
    }
  });
});
