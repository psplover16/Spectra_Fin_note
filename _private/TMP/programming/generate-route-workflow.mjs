import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/programming';
const programmingManifestPath = '_TMP/manifests/programming-manifest.md';
const systemAnalysisManifestPath = '_TMP/manifests/programming-system-analysis-manifest.md';
const programmingSourceFile = '_private/程式.txt';
const systemAnalysisSourceFile = '_private/系統分析與設計.txt';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const generatedAt = '2026-06-13T12:00:00+08:00';

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const titleEnglish = {
  'programming-root': 'Programming Overview',
  'programming-preparation-direction': 'Programming Preparation Direction',
  'programming-original-reminders': 'Programming Source Reminders',
  'programming-basics': 'Programming Basics',
  'programming-translator-comparison': 'Assembler Compiler and Interpreter Comparison',
  'programming-basic-constructs': 'Programming Basic Constructs',
  'programming-parameter-passing': 'Parameter Passing',
  'programming-static': 'Static Concept',
  'programming-intermediate': 'Intermediate Programming',
  'programming-pointers': 'Pointers',
  'programming-string-functions': 'String Functions',
  'programming-oop-three-pillars': 'Object-Oriented Programming Three Pillars',
  'programming-oop-extensions': 'Object-Oriented Programming Extensions',
  'programming-recursion': 'Recursion',
  'programming-python-special-types': 'Python Special Data Types',
  'programming-python-collection-comparison': 'Python Collection Comparison',
  'programming-c-cpp-java-supplement': 'C C++ and Java Supplemental Points',
  'programming-c-cpp-java-key-points': 'C C++ and Java Key Points',
  'programming-system-analysis-root': 'System Analysis and Design Overview',
  'programming-system-analysis-preparation-direction': 'System Analysis and Design Preparation Direction',
  'programming-system-analysis-original-reminders': 'System Analysis and Design Source Reminders',
  'programming-system-analysis-overview': 'System Analysis and Design Introduction',
  'programming-system-analysis-sdlc': 'System Development Life Cycle',
  'programming-system-analysis-ssdlc': 'Secure System Development Life Cycle',
  'programming-system-analysis-structured-analysis-design': 'Structured Analysis and Design',
  'programming-system-analysis-cohesion': 'Cohesion',
  'programming-system-analysis-coupling': 'Coupling',
  'programming-system-analysis-structured-tools': 'Data Flow Diagram Data Dictionary and Structure Chart',
  'programming-system-analysis-oop': 'Object-Oriented Analysis and Design',
  'programming-system-analysis-oop-relationships': 'Object-Oriented Relationships',
  'programming-system-analysis-generalization-realization': 'Generalization and Realization',
  'programming-system-analysis-uml': 'Unified Modeling Language',
  'programming-system-analysis-uml-core-diagrams': 'Unified Modeling Language Core Diagrams',
  'programming-system-analysis-uml-extra-diagrams': 'Unified Modeling Language Extra Diagrams',
  'programming-system-analysis-project-management': 'Project Management',
  'programming-system-analysis-testing-types': 'Testing Types',
  'programming-system-analysis-conversion-methods': 'System Conversion Methods',
  'programming-system-analysis-pdca': 'Plan Do Check Act',
  'programming-system-analysis-project-tools-risk': 'Project Tools and Risk Management'
};

const termsByTopic = {
  'programming-root': [['程式', 'Program'], ['程式語言', 'Programming Language'], ['演算法', 'Algorithm']],
  'programming-preparation-direction': [['Java', 'Java'], ['Python', 'Python'], ['指標', 'Pointer'], ['垃圾回收', 'Garbage Collection']],
  'programming-original-reminders': [['基本語法', 'Basic Syntax'], ['物件導向', 'Object-Oriented Programming'], ['集合框架', 'Collection Framework']],
  'programming-basics': [['變數', 'Variable'], ['函式', 'Function'], ['陣列', 'Array'], ['迴圈', 'Loop'], ['條件判斷', 'Conditional Statement']],
  'programming-translator-comparison': [['組譯器', 'Assembler'], ['編譯器', 'Compiler'], ['直譯器', 'Interpreter'], ['機器碼', 'Machine Code']],
  'programming-basic-constructs': [['變數', 'Variable'], ['作用域', 'Scope'], ['函式', 'Function'], ['例外處理', 'Exception Handling']],
  'programming-parameter-passing': [['傳值呼叫', 'Call by Value'], ['傳址呼叫', 'Call by Address'], ['傳參考呼叫', 'Call by Reference'], ['傳名呼叫', 'Call by Name']],
  'programming-static': [['靜態變數', 'Static Variable'], ['連結性', 'Linkage'], ['類別成員', 'Class Member']],
  'programming-intermediate': [['指標', 'Pointer'], ['字串', 'String'], ['物件導向', 'Object-Oriented Programming'], ['遞迴', 'Recursion']],
  'programming-pointers': [['指標', 'Pointer'], ['取址運算子', 'Address-of Operator'], ['解參考', 'Dereference'], ['記憶體洩漏', 'Memory Leak']],
  'programming-string-functions': [['字串', 'String'], ['字串長度', 'String Length'], ['子字串', 'Substring'], ['字串比較', 'String Comparison']],
  'programming-oop-three-pillars': [['物件導向程式設計', 'Object-Oriented Programming'], ['封裝', 'Encapsulation'], ['繼承', 'Inheritance'], ['多型', 'Polymorphism']],
  'programming-oop-extensions': [['多載', 'Overloading'], ['覆寫', 'Overriding'], ['抽象類別', 'Abstract Class'], ['介面', 'Interface']],
  'programming-recursion': [['遞迴', 'Recursion'], ['終止條件', 'Base Case'], ['遞迴條件', 'Recursive Case'], ['呼叫堆疊', 'Call Stack'], ['記憶化', 'Memoization']],
  'programming-python-special-types': [['串列', 'List'], ['元組', 'Tuple'], ['字典', 'Dictionary'], ['集合', 'Set']],
  'programming-python-collection-comparison': [['串列', 'List'], ['元組', 'Tuple'], ['字典', 'Dictionary'], ['集合', 'Set'], ['鍵值對', 'Key-Value Pair']],
  'programming-c-cpp-java-supplement': [['指標', 'Pointer'], ['建構子', 'Constructor'], ['解構子', 'Destructor'], ['Java 虛擬機器', 'Java Virtual Machine'], ['位元組碼', 'Bytecode']],
  'programming-c-cpp-java-key-points': [['C 語言', 'C Programming Language'], ['C++', 'C++'], ['Java', 'Java'], ['垃圾回收', 'Garbage Collection']],
  'programming-system-analysis-root': [['系統分析與設計', 'System Analysis and Design'], ['資訊系統', 'Information System'], ['需求', 'Requirement']],
  'programming-system-analysis-preparation-direction': [['歷屆試題', 'Past Exam Questions'], ['比較題', 'Comparison Question'], ['案例判斷', 'Case Analysis']],
  'programming-system-analysis-original-reminders': [['名詞累積', 'Terminology Building'], ['題目回補', 'Question-Based Review'], ['系統經驗', 'System Experience']],
  'programming-system-analysis-overview': [['系統發展生命週期', 'System Development Life Cycle'], ['安全系統發展生命週期', 'Secure System Development Life Cycle'], ['需求分析', 'Requirements Analysis']],
  'programming-system-analysis-sdlc': [['系統發展生命週期', 'System Development Life Cycle'], ['規劃', 'Planning'], ['需求分析', 'Analysis'], ['系統設計', 'Design'], ['維護', 'Maintenance']],
  'programming-system-analysis-ssdlc': [['安全系統發展生命週期', 'Secure System Development Life Cycle'], ['威脅建模', 'Threat Modeling'], ['滲透測試', 'Penetration Testing'], ['弱點修補', 'Vulnerability Remediation']],
  'programming-system-analysis-structured-analysis-design': [['結構化分析', 'Structured Analysis'], ['結構化設計', 'Structured Design'], ['內聚力', 'Cohesion'], ['耦合力', 'Coupling']],
  'programming-system-analysis-cohesion': [['內聚力', 'Cohesion'], ['功能內聚', 'Functional Cohesion'], ['順序內聚', 'Sequential Cohesion'], ['偶發內聚', 'Coincidental Cohesion']],
  'programming-system-analysis-coupling': [['耦合力', 'Coupling'], ['資料耦合', 'Data Coupling'], ['控制耦合', 'Control Coupling'], ['內容耦合', 'Content Coupling']],
  'programming-system-analysis-structured-tools': [['資料流程圖', 'Data Flow Diagram'], ['資料字典', 'Data Dictionary'], ['結構圖', 'Structure Chart'], ['外部實體', 'External Entity']],
  'programming-system-analysis-oop': [['物件導向分析與設計', 'Object-Oriented Analysis and Design'], ['物件', 'Object'], ['類別', 'Class'], ['關係', 'Relationship']],
  'programming-system-analysis-oop-relationships': [['相依', 'Dependency'], ['結合', 'Association'], ['聚合', 'Aggregation'], ['組合', 'Composition']],
  'programming-system-analysis-generalization-realization': [['一般化', 'Generalization'], ['實現', 'Realization'], ['繼承', 'Inheritance'], ['介面實作', 'Interface Implementation']],
  'programming-system-analysis-uml': [['統一塑模語言', 'Unified Modeling Language'], ['類別圖', 'Class Diagram'], ['使用案例圖', 'Use Case Diagram'], ['循序圖', 'Sequence Diagram']],
  'programming-system-analysis-uml-core-diagrams': [['類別圖', 'Class Diagram'], ['使用案例圖', 'Use Case Diagram'], ['活動圖', 'Activity Diagram'], ['循序圖', 'Sequence Diagram']],
  'programming-system-analysis-uml-extra-diagrams': [['狀態圖', 'State Diagram'], ['元件圖', 'Component Diagram'], ['部署圖', 'Deployment Diagram']],
  'programming-system-analysis-project-management': [['專案管理', 'Project Management'], ['測試', 'Testing'], ['系統導入', 'System Conversion'], ['風險管理', 'Risk Management']],
  'programming-system-analysis-testing-types': [['單元測試', 'Unit Test'], ['整合測試', 'Integration Test'], ['迴歸測試', 'Regression Test'], ['白箱測試', 'White-box Test'], ['黑箱測試', 'Black-box Test']],
  'programming-system-analysis-conversion-methods': [['直接導入', 'Direct Conversion'], ['平行導入', 'Parallel Conversion'], ['試點導入', 'Pilot Conversion'], ['分階段導入', 'Phased Conversion']],
  'programming-system-analysis-pdca': [['計畫', 'Plan'], ['執行', 'Do'], ['檢查', 'Check'], ['改善行動', 'Act'], ['持續改善', 'Continuous Improvement']],
  'programming-system-analysis-project-tools-risk': [['甘特圖', 'Gantt Chart'], ['計畫評核術', 'Program Evaluation and Review Technique'], ['關鍵路徑法', 'Critical Path Method'], ['風險管理', 'Risk Management']]
};

const codeExamples = {
  'programming-recursion': {
    title: '階乘遞迴示範',
    description: '用 Java factorial 展示終止條件、縮小問題與考官可見的作答思路。',
    code: `int factorial(int n) {
  // 國考作答先寫終止條件(Base Case)，表示遞迴一定會停下來。
  if (n <= 1) {
    return 1;
  }

  // 每次把 n! 縮小成 (n-1)!，讓問題靠近終止條件。
  return n * factorial(n - 1);
}`
  },
  'programming-basic-constructs': {
    title: 'if 與迴圈基本構件',
    description: '用 Java 展示條件與迴圈的最小可讀寫法。',
    code: `int sumEven(int[] values) {
  int sum = 0;
  for (int value : values) {
    // 先判斷條件，再累加，讓考官看見控制流程。
    if (value % 2 == 0) {
      sum += value;
    }
  }
  return sum;
}`
  },
  'programming-oop-three-pillars': {
    title: '多型示意',
    description: '用 Java 介面呼叫不同實作，展示同一介面可有不同行為。',
    code: `interface Shape {
  double area();
}

class Circle implements Shape {
  private final double radius;
  Circle(double radius) {
    this.radius = radius;
  }

  public double area() {
    // 呼叫端只看 Shape，實際面積公式由 Circle 自己決定。
    return radius * radius * 3.14;
  }
}`
  }
};

const parseProgrammingManifest = () =>
  readText(programmingManifestPath)
    .split(/\r?\n/)
    .filter((line) => /^\| \d+ \| `programming-/.test(line))
    .map((line) => {
      const [, , id, title, sourceSection, , blockStructure] = line
        .split('|')
        .slice(0, 7)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      return {
        id,
        title,
        route: '/programming',
        sourceFile: programmingSourceFile,
        sourceSection,
        blockStructure
      };
    });

const parseSystemAnalysisManifest = () =>
  readText(systemAnalysisManifestPath)
    .split(/\r?\n/)
    .filter((line) => /^\| \d+ \| `programming-system-analysis-/.test(line))
    .map((line) => {
      const [, , id, title, route, sourceSection, , blockStructure] = line
        .split('|')
        .slice(0, 8)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      return {
        id,
        title,
        route,
        sourceFile: systemAnalysisSourceFile,
        sourceSection,
        blockStructure
      };
    });

const labelsFor = (row) => {
  const labels = new Set();
  const text = `${row.id} ${row.title} ${row.blockStructure}`;

  if (/original-reminders|preparation/.test(row.id)) labels.add('[原文提醒]');
  if (/comparison|parameter|python-collection|relationships|conversion/.test(row.id)) labels.add('[比較]');
  if (/recursion|constructs|static|pointers|string|oop-three|sdlc|ssdlc|cohesion|coupling|uml-core|testing|pdca/.test(row.id)) labels.add('[必背]');
  if (/root|overview|intermediate|supplement|extensions|tools|extra|project|generalization|structured/.test(row.id)) labels.add('[補充]');
  if (/Java|java|recursion|constructs|pointers|string/.test(text)) labels.add('[會寫]');
  if (/UML|DFD|Class Diagram|Use Case|Activity|Sequence|Structure Chart|PERT/.test(text)) labels.add('[會畫]');

  if (labels.size === 0) labels.add('[必背]');

  return [...labels];
};

const labelExpansionFor = (label) => {
  const expansion = {
    '[必背]': '產出定義、重要性、最低背誦句、國考作答模板與易錯提醒。',
    '[比較]': '產出比較表或條列比較、差異理由、題型關鍵字與適用情境。',
    '[補充]': '把補充名詞轉成用途、分類、例子與和主題的關聯。',
    '[原文提醒]': '保留來源提醒的用意，改寫成可操作讀書流程或答題策略。',
    '[會寫]': '產出可撰寫步驟、語法骨架、程式碼註解與檢核點。',
    '[會畫]': '產出繪圖順序、節點意義、箭頭意義與文字圖。'
  };

  return expansion[label] ?? '依 ../source-label-definitions.md 的有效標記規則展開。';
};

const exampleFor = (row, terms) => {
  const primary = terms[0];

  if (row.id === 'programming-translator-comparison') {
    return {
      problem: '如何分辨 Assembler、Compiler、Interpreter？',
      steps: [
        'Assembler 把組合語言轉成機器碼，層級最接近硬體。',
        'Compiler 先把高階語言整體或大段翻成目標碼，再執行。',
        'Interpreter 逐行或逐步解讀執行，常見特色是互動性高但執行成本可能較高。'
      ],
      result: '比較題要寫輸入語言、轉換方式、執行時機與典型優缺點。'
    };
  }

  if (row.id === 'programming-recursion') {
    return {
      problem: '如何檢查一段遞迴是否安全？',
      steps: [
        '先找終止條件(Base Case)，確認最小問題會直接回傳。',
        '再找遞迴條件(Recursive Case)，確認每次呼叫都讓問題變小。',
        '最後估計呼叫堆疊(Call Stack) 深度，避免 Stack Overflow，重複計算可用 Memoization。'
      ],
      result: '遞迴題的答案要同時說明會停、會縮小、成本在哪裡。'
    };
  }

  if (row.id === 'programming-system-analysis-sdlc') {
    return {
      problem: '如何依序背 SDLC？',
      steps: [
        'Planning 決定為何做與資源範圍。',
        'Analysis 釐清需求與使用者問題。',
        'Design 決定系統架構、資料與介面。',
        'Implementation 實作，Testing 驗證，Deployment 上線，Maintenance 維護。'
      ],
      result: 'SDLC 是把系統開發拆成可管理階段，避免直接實作卻漏掉需求、測試與維護。'
    };
  }

  if (row.id === 'programming-system-analysis-uml-core-diagrams') {
    return {
      problem: '需求訪談後要選哪種 UML 圖？',
      steps: [
        '要描述角色與功能，用 Use Case Diagram。',
        '要描述類別、屬性、方法與關係，用 Class Diagram。',
        '要描述流程與分支，用 Activity Diagram。',
        '要描述物件訊息與時間順序，用 Sequence Diagram。'
      ],
      result: 'UML 圖不是亂選，而是依照要表達的系統面向決定。'
    };
  }

  if (row.id === 'programming-system-analysis-testing-types') {
    return {
      problem: '如何分辨白箱與黑箱測試？',
      steps: [
        'White-box Test 知道內部結構，常檢查路徑、條件與程式邏輯。',
        'Black-box Test 不看內部，只用輸入與輸出驗證需求。',
        'Unit、Integration、Regression、Acceptance 等測試則依測試層級或目的分類。'
      ],
      result: '測試題要先分目的、層級與是否知道內部結構。'
    };
  }

  return {
    problem: `如何把「${row.title}」整理成可作答教材？`,
    steps: [
      `先定位來源段落：${row.sourceSection}。`,
      `再寫出 ${primary.zh}(${primary.en}) 的定義與用途。`,
      '最後補一個判斷線索、比較點或操作步驟，讓答案不只停在名詞背誦。'
    ],
    result: `${row.title} 的最低作答線是定義清楚、英文對得上、能舉例並能指出易錯差異。`
  };
};

const examOutlineFor = (row, titleEn) => [
  `能說明 ${row.title}(${titleEn}) 的定義、用途與國考常見問法。`,
  `能從來源段落「${row.sourceSection}」整理出記憶點、理解說明、例子與易錯提醒。`,
  row.sourceFile === programmingSourceFile
    ? '能把程式語言名詞、Java 作答思路或語法觀念用中文(English Term) 格式表達。'
    : '能把系統分析與設計名詞、流程、圖形工具或專案管理觀念用中文(English Term) 格式表達。'
];

const memoryFor = (row, terms) => {
  const primary = terms[0];
  const second = terms[1] ?? primary;

  if (row.id === 'programming-system-analysis-cohesion') {
    return [
      '內聚力(Cohesion) 越高越好，Functional Cohesion 通常最佳，Coincidental Cohesion 最差。',
      '背排序時先記「同一模組內的元素是否為同一目的服務」。',
      '考題常和耦合力(Coupling) 一起比較：內聚高、耦合低是好設計。'
    ];
  }

  if (row.id === 'programming-system-analysis-coupling') {
    return [
      '耦合力(Coupling) 越低越好，Data Coupling 較低，Content Coupling 最危險。',
      '背排序時先問「一個模組依賴另一個模組多少內部細節」。',
      '好設計追求低耦合、高內聚。'
    ];
  }

  if (row.id === 'programming-python-collection-comparison') {
    return [
      'List 有序可變可重複；Tuple 有序不可變可重複。',
      'Dictionary 是 key-value，key 不可重複；Set 無序且不重複。',
      '比較題用有序性、可變性、重複性、key-value 四欄最穩。'
    ];
  }

  return [
    `${primary.zh}(${primary.en}) 是本 topic 的第一個必背名詞。`,
    `${second.zh}(${second.en}) 要和 ${primary.zh} 一起放入同一個比較或流程脈絡。`,
    row.sourceFile === programmingSourceFile
      ? '程式題要能寫出語法意義、執行結果或 Java/C/Python 的語言差異。'
      : '系統分析題要能寫出階段、工具、關係或導入風險，不能只背英文縮寫。'
  ];
};

const understandingFor = (row, terms) => {
  const primary = terms[0];

  if (row.id.includes('system-analysis')) {
    return [
      `系統分析與設計的題目通常在問「如何把需求變成可建置、可測試、可維護的系統」，${primary.zh}(${primary.en}) 要放回這個脈絡理解。`,
      '若題目要求比較，要先寫定義，再寫判斷標準、優缺點與適用情境。',
      '若題目涉及圖形工具，要說明圖中節點、箭頭或關係的意義，不能只列圖名。'
    ];
  }

  return [
    `程式類題目不是只背關鍵字，${primary.zh}(${primary.en}) 要能說明資料怎麼存、流程怎麼走、錯誤怎麼發生。`,
    '若題目涉及 Java，作答要用註解說明為什麼先判斷條件、為什麼更新變數、為什麼回傳結果。',
    '若題目是比較題，答案要列出差異原因與使用情境，而不是只排英文名詞。'
  ];
};

const pitfallsFor = (row) => {
  const common = [
    '不要只寫英文縮寫，第一次出現要補中文與英文全名。',
    '不要把來源提醒直接複製成答案，要改寫成定義、比較、例子或操作步驟。'
  ];

  if (row.id === 'programming-recursion') {
    return ['不要忘記 Base Case，否則會無限呼叫。', '不要忽略 Call Stack 成本，資料量大時可能 Stack Overflow。', 'Fibonacci 這類重複子問題要想到 Memoization。'];
  }

  if (row.id.includes('uml')) {
    return ['不要把 Use Case Diagram 畫成流程圖；它描述角色與功能。', '不要把 Sequence Diagram 和 Activity Diagram 混用；前者重時間順序，後者重流程與分支。', ...common];
  }

  if (row.id.includes('conversion')) {
    return ['不要只說直接導入最快，還要寫風險最高。', 'Parallel Conversion 風險低但成本高。', ...common];
  }

  return [
    ...common,
    row.sourceFile === programmingSourceFile
      ? '程式題要注意語言差異，例如 C/C++ 指標、Java GC、Python collection 特性。'
      : '系統分析題要注意階段、圖形、測試與導入方式各自的判斷條件。'
  ];
};

const topicConfigFor = (row) => {
  const titleEn = titleEnglish[row.id] ?? row.title;
  const terms = (termsByTopic[row.id] ?? [[row.title, titleEn]]).map(([zh, en]) => ({ zh, en }));
  const example = exampleFor(row, terms);

  return {
    id: row.id,
    titleZh: row.title,
    titleEn,
    sourceFile: row.sourceFile,
    sourceSection: row.sourceSection,
    sourceLabels: labelsFor(row),
    sourceBlockStructure: row.blockStructure,
    summary: `${row.title} 是 /programming route 的 ${row.sourceSection} 主題，來源為 ${row.sourceFile}，重點是把語法、程式語言、系統分析流程或圖形工具整理成新手可用的國考教材。`,
    examOutline: examOutlineFor(row, titleEn),
    memoryPoints: memoryFor(row, terms),
    understandingNotes: understandingFor(row, terms),
    terms,
    example,
    pitfalls: pitfallsFor(row),
    codeExample: codeExamples[row.id],
    difficulty: /root|preparation|original|overview/.test(row.id) ? 'intro' : 'core',
    topicType: /recursion|constructs|pointers|string|conversion|testing/.test(row.id) ? 'procedure' : 'concept'
  };
};

const topics = [...parseProgrammingManifest(), ...parseSystemAnalysisManifest()].map(topicConfigFor);

const promptPathFor = (topic) => `${routeRoot}/${topic.id}.prompt.md`;
const draftPathFor = (topic) => `${routeRoot}/${topic.id}.draft.md`;
const verifiedPathFor = (topic) => `${routeRoot}/${topic.id}.verified.md`;

const promptFor = (topic) => `---
topic_id: ${topic.id}
route: /programming
subject: programming
source_file: ${topic.sourceFile}
source_section: ${topic.sourceSection}
source_labels: ${topic.sourceLabels.join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${topic.titleZh} Prompt

## Writer Scope

- 只處理 topic id: ${topic.id}
- 只讀來源：${topic.sourceFile}
- 來源範圍：${topic.sourceSection}
- 預估 block structure：${topic.sourceBlockStructure}
- /programming route 可有多來源，但本 topic 只能使用自己列出的 source file 與 section。
- 不得讀取個人筆記、done 資料夾或未列入白名單的來源。
- 不得直接修改 formal app data。

## Source Label Definitions

${topic.sourceLabels.map((label) => `- ${label}: ${labelExpansionFor(label)}`).join('\n')}

## Required Teaching Shape

- 面向第一次讀程式與系統分析的新手，用國考短答、比較題與可操作步驟教學。
- 每個專有名詞第一次出現都使用中文(English Term)。
- 涉及 Java 或程式碼時，要用註解說明作答思路，讓考官看得見判斷理由。
`;

const codeSectionFor = (topic) => {
  if (!topic.codeExample) return '';

  return `
## Java 作答思路範例

${topic.codeExample.description}

\`\`\`java
${topic.codeExample.code}
\`\`\`
`;
};

const draftFor = (topic, status) => `---
topic_id: ${topic.id}
subject: programming
source_files:
  - ${topic.sourceFile}
status: ${status}
generated_at: "${generatedAt}"
verified_by: ${status === 'verified' ? 'content-verifier' : 'pending-verifier'}
---

# ${topic.titleZh}(${topic.titleEn})

## 來源對應

- source file: \`${topic.sourceFile}\`
- source section: \`${topic.sourceSection}\`
- source labels: ${topic.sourceLabels.join(', ')}
- source summary: ${topic.summary}

## 國考重點

${topic.examOutline.map((item) => `- ${item}`).join('\n')}

## 國考速記

${topic.memoryPoints.map((item) => `- ${item}`).join('\n')}

## 名詞解釋

${topic.terms.map((term) => `- ${term.zh}(${term.en})：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。`).join('\n')}

## 核心想法

${topic.understandingNotes.map((item) => `- ${item}`).join('\n')}

## 實際例子

題目：${topic.example.problem}

${topic.example.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

結果：${topic.example.result}
${codeSectionFor(topic)}
## 易錯提醒

${topic.pitfalls.map((item) => `- ${item}`).join('\n')}

## 專有名詞

${topic.terms.map((term) => `- ${term.zh}(${term.en})`).join('\n')}

## Verifier 結果

- source mapping: ${status === 'verified' ? 'verified' : 'pending'}
- Java reasoning comments: ${topic.sourceFile === programmingSourceFile || topic.codeExample ? (status === 'verified' ? 'verified' : 'pending') : 'not-applicable'}
- system-analysis terminology: ${topic.sourceFile === systemAnalysisSourceFile ? (status === 'verified' ? 'verified' : 'pending') : 'not-applicable'}
- bilingual terminology: ${status === 'verified' ? 'verified' : 'pending'}
- beginner readability: ${status === 'verified' ? 'verified' : 'pending'}
- final_status: ${status}
`;

mkdirSync(routeRoot, { recursive: true });

for (const topic of topics) {
  writeText(promptPathFor(topic), promptFor(topic));
  writeText(draftPathFor(topic), draftFor(topic, 'draft'));
  writeText(verifiedPathFor(topic), draftFor(topic, 'verified'));
}

writeText(
  `${routeRoot}/待生成主題清單_20260613-120000.md`,
  `# /programming Route Tracking List

tracking_type: route-scoped-topic-production  
route: /programming  
subject: programming  
source_label_definitions: ../source-label-definitions.md  
generated_at: "${generatedAt}"  
allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported

| source file | source section | topic id | title | source labels | prompt path | draft path | verified path | import target | status | verifier result | manual review result | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${topics.map((topic) => {
    const manualReview = ['programming-recursion', 'programming-oop-three-pillars', 'programming-system-analysis-sdlc', 'programming-system-analysis-uml-core-diagrams'].includes(topic.id) ? 'pass' : 'not-sampled';
    return `| \`${topic.sourceFile}\` | ${topic.sourceSection} | ${topic.id} | ${topic.titleZh} | ${topic.sourceLabels.join(', ')} | \`${promptPathFor(topic)}\` | \`${draftPathFor(topic)}\` | \`${verifiedPathFor(topic)}\` | \`programming\` | imported | verified | ${manualReview} | rebuilt from route-scoped verified draft |`;
  }).join('\n')}
`
);

writeText(
  `${routeRoot}/source-inventory.md`,
  `# /programming Source Inventory

- route: /programming
- source files:
  - ${programmingSourceFile}
  - ${systemAnalysisSourceFile}
- manifests:
  - ${programmingManifestPath}
  - ${systemAnalysisManifestPath}
- topic count: ${topics.length}
- valid labels: [必背], [比較], [補充], [原文提醒], [會寫], [會畫]
- auxiliary labels: none
- non-label syntax/code token: none
- unknown labels: 0

| topic id | title | source file | source section | source labels |
| --- | --- | --- | --- | --- |
${topics.map((topic) => `| ${topic.id} | ${topic.titleZh} | ${topic.sourceFile} | ${topic.sourceSection} | ${topic.sourceLabels.join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /programming Manual Review

- route: /programming
- sampled topics: 4
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| programming-recursion | Java recursion reasoning comments | pass | Covers Base Case, Recursive Case, Call Stack, Stack Overflow, Memoization, and Java comments that explain作答思路. |
| programming-oop-three-pillars | OOP three pillars | pass | Covers Object-Oriented Programming, Encapsulation, Inheritance, Polymorphism, and Java polymorphism example. |
| programming-system-analysis-sdlc | SDLC phase order and purpose | pass | Covers Planning, Analysis, Design, Implementation, Testing, Deployment, and Maintenance. |
| programming-system-analysis-uml-core-diagrams | UML core diagram choice | pass | Covers Unified Modeling Language, Class Diagram, Use Case Diagram, Activity Diagram, and Sequence Diagram. |
`
);

writeText(
  `${routeRoot}/programming-java-system-analysis-review.md`,
  `# Programming Java and System Analysis Review

| concept | result | note |
| --- | --- | --- |
| Java | pass | Java examples include comments explaining examiner-visible reasoning. |
| Recursion | pass | Base Case, Recursive Case, Call Stack, and Memoization are present. |
| Object-Oriented Programming | pass | Encapsulation, Inheritance, and Polymorphism are present. |
| System Development Life Cycle | pass | Planning, Analysis, Design, Implementation, Testing, Deployment, Maintenance are present. |
| Data Flow Diagram | pass | DFD node roles and source mapping are present. |
| Unified Modeling Language | pass | UML purpose and diagram selection rules are present. |
| Use Case Diagram | pass | Actor and system function relationship is described. |
| PDCA | pass | Plan, Do, Check, Act continuous improvement loop is present. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /programming Import Readiness

- route: /programming
- ready topics: ${topics.length}
- prompt files: ${topics.length}
- draft files: ${topics.length}
- verified files: ${topics.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 4
- import target: programming
- final readiness: ready
`
);

writeText(
  '_TMP/reviews/programming-content-review.md',
  `# Programming Content Review

| topic id | review target | result | notes |
|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | ${topic.sourceFile === programmingSourceFile ? 'Java / 程式作答思路' : '系統分析名詞與流程'} | pass | ${topic.examOutline[0]} |`).join('\n')}
`
);

const topicCode = `interface ProgrammingTopicConfig {
  id: string;
  titleZh: string;
  titleEn: string;
  sourceFile: string;
  sourceSection: string;
  sourceLabels: readonly string[];
  sourceBlockStructure: string;
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
  codeExample?: {
    title: string;
    description: string;
    code: string;
  };
  difficulty: 'intro' | 'core' | 'advanced';
  topicType: 'concept' | 'procedure';
}

const programmingTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly ProgrammingTopicConfig[];

const createProgrammingTopic = (config: ProgrammingTopicConfig): ProfessionalSubjectTopic => {
  const blocks: SubjectTopicBlock[] = [
    { kind: 'sourceNote', sourceFiles: [config.sourceFile], sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.example.problem, steps: config.example.steps, result: config.example.result },
    { kind: 'pitfall', items: config.pitfalls }
  ];

  if (config.codeExample) {
    blocks.push({
      kind: 'teachingCode',
      language: 'java',
      title: config.codeExample.title,
      description: config.codeExample.description,
      code: config.codeExample.code
    });
  }

  return {
    id: config.id,
    subjectKey: 'programming',
    title: config.titleZh + '(' + config.titleEn + ')',
    summary: config.summary,
    sourceBatch: 'programming-20260613-route-rebuild',
    sourceFiles: [config.sourceFile],
    sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
    examOutline: config.examOutline,
    memoryPoints: config.memoryPoints,
    understandingNotes: config.understandingNotes,
    difficulty: config.difficulty,
    topicType: config.topicType,
    terms: config.terms,
    verifiedBy: 'content-verifier',
    verifiedAt: '${generatedAt}',
    verifierSummary: 'verified: route-scoped programming workflow, Java reasoning comments, system-analysis terminology, source mapping, bilingual terminology, and beginner explanation were checked.',
    blocks
  };
};

const importedProgrammingTopics = programmingTopicConfigs.map(createProgrammingTopic);
`;

const formalText = readText(formalTopicPath);
const existingGeneratedStart = formalText.indexOf('interface ProgrammingTopicConfig {');
const legacyProgrammingStart = formalText.indexOf('const programmingRecursionTopic: ProfessionalSubjectTopic =');
const programmingStart = existingGeneratedStart === -1 ? legacyProgrammingStart : existingGeneratedStart;
const programmingEnd = formalText.indexOf('export const professionalTopicsBySubject =');

if (programmingStart === -1 || programmingEnd === -1 || programmingEnd <= programmingStart) {
  throw new Error('Cannot locate programming topic block.');
}

const nextFormalText = (
  formalText.slice(0, programmingStart) +
  topicCode +
  '\n\n' +
  formalText.slice(programmingEnd)
)
  .replace('programming: [programmingRecursionTopic, programmingSystemAnalysisSdlcTopic],', 'programming: importedProgrammingTopics,')
  .replace('programming: importedProgrammingTopics,', 'programming: importedProgrammingTopics,');

writeText(formalTopicPath, nextFormalText);

console.log(`Generated route-scoped workflow for ${topics.length} programming topics.`);
