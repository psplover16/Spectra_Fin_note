import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

const countLines = (text: string, predicate: (line: string) => boolean) =>
  text.split('\n').filter(predicate).length;

const countMatches = (text: string, pattern: RegExp) => Array.from(text.matchAll(pattern)).length;

const getSection = (text: string, heading: string, nextHeading?: string) => {
  const start = text.indexOf(heading);
  expect(start).toBeGreaterThanOrEqual(0);

  const end = nextHeading === undefined ? text.length : text.indexOf(nextHeading, start + heading.length);
  return text.slice(start, end === -1 ? text.length : end);
};

const computerPrinciplesHeadings = [
  '電腦常用單位',
  '馮紐曼架構',
  '圖靈機與圖靈測試',
  '機器指令與指令週期',
  'Pipeline（管線化）',
  '匯流排（Bus）',
  '效能名詞與公式',
  'RISC 與 CISC',
  'Memory 階層圖',
  'Memory 分類圖',
  'Register（暫存器）',
  'Cache',
  'Hazard',
  'USB 速度',
  '進制轉換',
  '補數轉換',
  '浮點數轉換',
  '數碼、文字碼與檢查碼',
  '基本邏輯',
  'SOP 與 POS',
  '卡諾圖化簡',
  '萬用閘',
  '組合與循序電路',
  '基本常識',
  'I/O 與中斷',
  '硬體保護',
  'OS 結構',
  'Process',
  'Deadlock',
  'Process Communication',
  'Memory Management',
  'Virtual Memory',
  'Disk Management'
] as const;

const sourceManifestChecks = [
  {
    name: 'networking',
    sourceFile: '_private/網概.txt',
    readingLogPath: '_TMP/source-logs/networking-reading-log.md',
    manifestPath: '_TMP/manifests/networking-manifest.md',
    expectedTopicCount: 11,
    countReadingLogTopics: (text: string) => countLines(text, (line) => /^## H\d+ /.test(line)),
    countManifestTopics: (text: string) => countLines(text, (line) => /^## [a-z0-9][a-z0-9-]*\r?$/.test(line))
  },
  {
    name: 'database',
    sourceFile: '_private/資料庫.txt',
    readingLogPath: '_TMP/source-logs/database-reading-log.md',
    manifestPath: '_TMP/manifests/database-manifest.md',
    expectedTopicCount: 11,
    countReadingLogTopics: (text: string) => countLines(text, (line) => /^## Heading \d+: /.test(line)),
    countManifestTopics: (text: string) =>
      countLines(text, (line) => line.startsWith('| `database-') && line.includes('`pending-draft`'))
  },
  {
    name: 'information-management',
    sourceFile: '_private/資訊管理.txt',
    readingLogPath: '_TMP/source-logs/information-management-reading-log.md',
    manifestPath: '_TMP/manifests/information-management-manifest.md',
    expectedTopicCount: 7,
    countReadingLogTopics: (text: string) => countLines(text, (line) => /^## im-\d+-/.test(line)),
    countManifestTopics: (text: string) =>
      countLines(text, (line) => line.startsWith('| im-') && line.includes('`pending-draft`'))
  },
  {
    name: 'programming',
    sourceFile: '_private/程式.txt',
    readingLogPath: '_TMP/source-logs/programming-reading-log.md',
    manifestPath: '_TMP/manifests/programming-manifest.md',
    expectedTopicCount: 18,
    countReadingLogTopics: (text: string) =>
      countLines(text, (line) => /^\| \d+ \| \d+ \|/.test(line)),
    countManifestTopics: (text: string) =>
      countLines(text, (line) => /^\| \d+ \| `programming-(?!system-analysis)/.test(line))
  },
  {
    name: 'programming-system-analysis',
    sourceFile: '_private/系統分析與設計.txt',
    readingLogPath: '_TMP/source-logs/programming-system-analysis-reading-log.md',
    manifestPath: '_TMP/manifests/programming-system-analysis-manifest.md',
    expectedTopicCount: 21,
    countReadingLogTopics: (text: string) =>
      countLines(text, (line) => /^\| \d+ \| \d+ \|/.test(line)),
    countManifestTopics: (text: string) =>
      countLines(text, (line) => /^\| \d+ \| `programming-system-analysis-/.test(line))
  },
  {
    name: 'algorithms',
    sourceFile: '_private/資料結構與演算法.txt',
    readingLogPath: '_TMP/source-logs/algorithms-reading-log.md',
    manifestPath: '_TMP/manifests/algorithms-manifest.md',
    expectedTopicCount: 11,
    countReadingLogTopics: (text: string) =>
      countLines(text, (line) => /^\| \d+ \| .*`[^`]+`.*\/algorithms.*completed/.test(line)),
    countManifestTopics: (text: string) =>
      countLines(text, (line) => /^\| `alg-\d+` \| `[^`]+` \| .*\/algorithms.*pending-draft/.test(line))
  }
] as const;

const approvedSortingBaseline = [
  {
    zh: '氣泡排序法',
    en: 'Bubble Sort',
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    stability: 'Stable',
    notes: 'Early stop allows O(n) best case'
  },
  {
    zh: '選擇排序法',
    en: 'Selection Sort',
    best: 'O(n^2)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    stability: 'Usually unstable',
    notes: 'Low swap count'
  },
  {
    zh: '插入排序法',
    en: 'Insertion Sort',
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    stability: 'Stable',
    notes: 'Good for small or nearly sorted data'
  },
  {
    zh: '合併排序法',
    en: 'Merge Sort',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    stability: 'Stable',
    notes: 'Requires extra space'
  },
  {
    zh: '快速排序法',
    en: 'Quick Sort',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n^2)',
    stability: 'Unstable',
    notes: 'Poor pivot choice degenerates'
  },
  {
    zh: '堆積排序法',
    en: 'Heap Sort',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    stability: 'Unstable',
    notes: 'In-place sorting with heap'
  },
  {
    zh: '希爾排序法',
    en: 'Shell Sort',
    best: 'gap-dependent',
    average: 'gap-dependent',
    worst: 'up to O(n^2)',
    stability: 'Unstable',
    notes: 'Improved insertion sort'
  }
] as const;

describe('source reading logs and manifests', () => {
  it('records every computer-principles source heading in the reading log', () => {
    const readingLog = readText('_TMP/source-logs/computer-principles-reading-log.md');

    expect(readingLog).toContain('_private/計算機概論.txt');

    for (const heading of computerPrinciplesHeadings) {
      expect(readingLog).toContain(heading);
    }
  });

  it('maps every computer-principles heading to a pending manifest topic', () => {
    const manifest = readText('_TMP/manifests/computer-principles-manifest.md');

    expect(manifest).toContain('route: /computer-principles');
    expect(manifest).toContain('subject: computerPrinciples');

    for (const expectedText of ['topic id', 'title', 'source section', 'status', 'block structure']) {
      expect(manifest).toContain(expectedText);
    }
    expect(manifest).toContain('cp-common-units');

    const manifestTopicRows = manifest
      .split('\n')
      .filter((line) => line.startsWith('| cp-') && line.includes('| pending-draft |'));

    expect(manifestTopicRows).toHaveLength(computerPrinciplesHeadings.length);

    for (const row of manifestTopicRows) {
      expect(row).toContain('| lessonArticle |');
      expect(row).not.toContain('examOutline');
      expect(row).not.toContain('memoryPoints');
      expect(row).not.toContain('understanding');
    }

    for (const heading of computerPrinciplesHeadings) {
      expect(manifest).toContain(heading);
    }
  });

  it('expands every computer-principles manifest topic into generator, verifier, and import tasks', () => {
    const taskBreakdown = readText('_TMP/task-breakdowns/computer-principles-subagent-tasks.md');

    const generatorTasks = taskBreakdown.split('\n').filter((line) => line.startsWith('- [ ] generator cp-'));
    const verifierTasks = taskBreakdown.split('\n').filter((line) => line.startsWith('- [ ] verifier cp-'));
    const importTasks = taskBreakdown.split('\n').filter((line) => line.startsWith('- [ ] import cp-'));

    expect(generatorTasks).toHaveLength(computerPrinciplesHeadings.length);
    expect(verifierTasks).toHaveLength(computerPrinciplesHeadings.length);
    expect(importTasks).toHaveLength(computerPrinciplesHeadings.length);
    expect(taskBreakdown).toContain('cp-common-units');
    expect(taskBreakdown).toContain('_TMP/<timestamp>-computer-principles-<topic>.md');
    expect(taskBreakdown).toContain('sourceFiles');
    expect(taskBreakdown).toContain('lessonArticle');
    expect(taskBreakdown).toContain('verified Markdown teaching file');
    expect(taskBreakdown).not.toContain('examOutline');
    expect(taskBreakdown).not.toContain('memoryPoints');
    expect(taskBreakdown).not.toContain('understandingNotes');
  });

  it('keeps a verified _TMP draft for the first computer-principles imported topic', () => {
    const draftFileName = readdirSync('_TMP').find((fileName) =>
      fileName.endsWith('-computer-principles-cp-common-units.md')
    );

    expect(draftFileName).toBeDefined();

    const draft = readText(`_TMP/${draftFileName}`);
    expect(draft).toContain('topic_id: cp-common-units');
    expect(draft).toContain('subject: computerPrinciples');
    expect(draft).toContain('status: verified');
    expect(draft).toContain('_private/計算機概論.txt');
    expect(draft).toContain('_private/discuss.txt');
    expect(draft).toContain('content_shape: lessonArticle');
    expect(draft).toContain('## Verifier 結果');
    expect(draft).toContain('old fixed template removed');
  });

  it('records the computer-principles content review criteria', () => {
    const review = readText('_TMP/reviews/computer-principles-content-review.md');

    for (const expectedText of [
      'cp-von-neumann-architecture',
      '新手自學',
      '手把手',
      '通俗說明',
      '程式或公式例子',
      '驗算步驟',
      'pass'
    ]) {
      expect(review).toContain(expectedText);
    }
  });

  it.each(sourceManifestChecks)(
    'records every $name source heading in a reading log and pending manifest',
    ({ sourceFile, readingLogPath, manifestPath, expectedTopicCount, countReadingLogTopics, countManifestTopics }) => {
      const readingLog = readText(readingLogPath);
      const manifest = readText(manifestPath);

      expect(readingLog).toContain(sourceFile);
      expect(manifest).toContain(sourceFile);
      expect(manifest).toContain('pending-draft');
      expect(countReadingLogTopics(readingLog)).toBe(expectedTopicCount);
      expect(countManifestTopics(manifest)).toBe(expectedTopicCount);
    }
  );

  it('expands every networking manifest topic into generator, verifier, and import tasks', () => {
    const taskBreakdown = readText('_TMP/task-breakdowns/networking-subagent-tasks.md');

    expect(taskBreakdown).toContain('_TMP/<timestamp>-networking-<topic>.md');
    expect(countMatches(taskBreakdown, /taskId: `generator:networking:/g)).toBe(11);
    expect(countMatches(taskBreakdown, /taskId: `verifier:networking:/g)).toBe(11);
    expect(countMatches(taskBreakdown, /taskId: `import:networking:/g)).toBe(11);
  });

  it('expands every database manifest topic into generator, verifier, and import tasks', () => {
    const taskBreakdown = readText('_TMP/task-breakdowns/database-subagent-tasks.md');

    expect(taskBreakdown).toContain('_TMP/<timestamp>-database-<topic>.md');
    expect(countLines(taskBreakdown, (line) => line.trim() === '### Generator task')).toBe(11);
    expect(countLines(taskBreakdown, (line) => line.trim() === '### Verifier task')).toBe(11);
    expect(countLines(taskBreakdown, (line) => line.trim() === '### Import task')).toBe(11);
    expect(taskBreakdown).toContain('不得使用 `_private/資料結構與演算法.txt`');
  });

  it('expands every information-management manifest topic into generator, verifier, and import tasks', () => {
    const taskBreakdown = readText('_TMP/task-breakdowns/information-management-subagent-tasks.md');

    expect(taskBreakdown).toContain('_TMP/<timestamp>-information-management-<topic>.md');
    expect(countLines(taskBreakdown, (line) => line.trim() === '- generator task:')).toBe(7);
    expect(countLines(taskBreakdown, (line) => line.trim() === '- verifier task:')).toBe(7);
    expect(countLines(taskBreakdown, (line) => line.trim() === '- import task:')).toBe(7);
  });

  it('expands programming and system-analysis topics into generator, verifier, and import task rows', () => {
    const taskBreakdown = readText('_TMP/task-breakdowns/programming-subagent-tasks.md');
    const programmingSection = getSection(taskBreakdown, '## Programming Topics', '## System Analysis Topics');
    const systemAnalysisSection = getSection(taskBreakdown, '## System Analysis Topics');
    const programmingRows = programmingSection.split('\n').filter((line) => /^\| \d+ \|/.test(line));
    const systemAnalysisRows = systemAnalysisSection.split('\n').filter((line) => /^\| \d+ \|/.test(line));

    expect(programmingRows).toHaveLength(18);
    expect(systemAnalysisRows).toHaveLength(21);

    for (const row of programmingRows) {
      expect(row).toContain('_TMP/<timestamp>-programming-');
      expect(row).toContain('產生');
      expect(row).toContain('核對');
      expect(row).toContain('核准後');
    }

    for (const row of systemAnalysisRows) {
      expect(row).toContain('_TMP/<timestamp>-programming-system-analysis-');
      expect(row).toContain('產生');
      expect(row).toContain('核對');
      expect(row).toContain('核准後');
    }
  });

  it('labels every system-analysis manifest topic as system analysis and design', () => {
    const manifest = readText('_TMP/manifests/programming-system-analysis-manifest.md');
    const topicRows = manifest.split('\n').filter((line) => /^\| \d+ \| `programming-system-analysis-/.test(line));

    expect(topicRows).toHaveLength(21);

    for (const row of topicRows) {
      expect(row).toContain('系統分析與設計：');
      expect(row).toContain('/programming');
    }
  });

  it('inventories every first-batch common algorithm as included', () => {
    const readingLog = readText('_TMP/source-logs/common-algorithms-reading-log.md');
    const inventory = readText('_TMP/manifests/common-algorithms-inventory.md');
    const requiredAlgorithms = [
      '氣泡排序法(Bubble Sort)',
      '快速排序法(Quick Sort)',
      'Fibonacci 序列(Fibonacci Sequence)',
      '最大公因數(Greatest Common Divisor)',
      '二元搜尋法(Binary Search)',
      '選擇排序法(Selection Sort)',
      '插入排序法(Insertion Sort)'
    ];

    expect(readingLog).toContain('_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md');
    expect(readingLog).toContain('Markdown heading 數: 51');
    expect(inventory).toContain('7 included、0 deferred、0 blocked');
    expect(countLines(inventory, (line) => line.startsWith('| ') && line.includes(' | included | '))).toBe(7);

    for (const algorithm of requiredAlgorithms) {
      expect(readingLog).toContain(algorithm);
      expect(inventory).toContain(algorithm);
    }

    expect(readingLog).toContain('Binary Search 內容必須明確標示資料已排序');
    expect(inventory).toContain('Binary Search: 草稿必須明確寫出輸入資料必須已排序');
  });

  it('keeps the approved sorting complexity baseline unchanged', () => {
    const baseline = readText('_TMP/templates/sorting-complexity-baseline.md');

    for (const row of approvedSortingBaseline) {
      expect(baseline).toContain(
        `| ${row.zh} | ${row.en} | ${row.best} | ${row.average} | ${row.worst} | ${row.stability} | ${row.notes} |`
      );
      expect(baseline).toContain(`${row.zh}(${row.en})`);
    }

    expect(baseline).toContain('Shell Sort 第一批只放標準非遞迴主版本');
    expect(baseline).toContain('verifier 必須標為 `blocked`');
  });

  it('defines the fixed algorithm topic template sections and required frontmatter', () => {
    const template = readText('_TMP/templates/algorithm-topic-template.md');

    for (const expectedText of [
      'topic_id',
      'subject: "algorithms"',
      'route_owner: "/algorithms"',
      'source_files:',
      'status: "draft"',
      'generated_at:',
      'verified_by:',
      '## 國考重點',
      '## 國考速記',
      '## 名詞解釋',
      '## 核心想法',
      '## 手算步驟',
      '## Java 遞迴版',
      '## Java 非遞迴版',
      '## 複雜度與穩定性',
      '## 易錯提醒',
      '## 中英專有名詞',
      '## 來源註記',
      '## Verifier 結果'
    ]) {
      expect(template).toContain(expectedText);
    }

    expect(template).toContain('Binary Search 必須已排序');
    expect(template).toContain('Shell Sort 第一批不得把遞迴版當主範例');
  });

  it('blocks unsafe algorithm drafts through the verifier checklist', () => {
    const checklist = readText('_TMP/templates/algorithm-verifier-checklist.md');

    for (const expectedText of [
      '來源對應',
      'route owner',
      '國考重點',
      '國考速記',
      '名詞解釋',
      '核心想法',
      '手算步驟',
      'Java 遞迴版',
      'Java 非遞迴版',
      'Java 註解',
      '時間複雜度',
      '空間複雜度',
      '穩定性',
      '易錯提醒',
      '新手可讀性',
      '來源註記',
      '二元搜尋法(Binary Search)',
      '必須標示輸入陣列已排序',
      'route owner 不是 `/algorithms`',
      'final_status: "verified | blocked"'
    ]) {
      expect(checklist).toContain(expectedText);
    }
  });
});
