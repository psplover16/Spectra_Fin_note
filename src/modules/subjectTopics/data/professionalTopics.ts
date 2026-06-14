import type {
  ProfessionalSubjectTopic,
  ProfessionalTopicDifficulty,
  ProfessionalTopicType,
  ProfessionalTopicsBySubject,
  SubjectKey
} from '@/modules/subjectTopics/types/subjectTopic';

interface ProfessionalTopicSkeletonConfig {
  id: string;
  subjectKey: SubjectKey;
  titleZh: string;
  titleEn: string;
  sourceFiles: readonly string[];
  sourceSection: string;
  difficulty: ProfessionalTopicDifficulty;
  topicType: ProfessionalTopicType;
}

const professionalTopicSkeletonConfigs = [
  {
    id: "cp-common-units",
    subjectKey: "computerPrinciples",
    titleZh: "電腦常用單位",
    titleEn: "Common Computer Units",
    sourceFiles: [
      "_private/計算機概論.txt",
      "_private/discuss.txt"
    ],
    sourceSection: "3a. 基本計概 / 電腦常用單位",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "cp-von-neumann-architecture",
    subjectKey: "computerPrinciples",
    titleZh: "馮紐曼架構",
    titleEn: "Von Neumann Architecture",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 馮紐曼架構",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-turing-machine-and-test",
    subjectKey: "computerPrinciples",
    titleZh: "圖靈機與圖靈測試",
    titleEn: "Turing Machine and Turing Test",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 圖靈機與圖靈測試",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "cp-machine-instruction-cycle",
    subjectKey: "computerPrinciples",
    titleZh: "機器指令與指令週期",
    titleEn: "Machine Instruction and Instruction Cycle",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 機器指令與指令週期",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-pipeline",
    subjectKey: "computerPrinciples",
    titleZh: "Pipeline（管線化）",
    titleEn: "Pipelining",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Pipeline（管線化）",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-hazard",
    subjectKey: "computerPrinciples",
    titleZh: "管線危障",
    titleEn: "Hazard",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Hazard",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-bus",
    subjectKey: "computerPrinciples",
    titleZh: "匯流排（Bus）",
    titleEn: "Bus",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 匯流排（Bus）",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-performance-formulas",
    subjectKey: "computerPrinciples",
    titleZh: "效能名詞與公式",
    titleEn: "Performance Terms and Formulas",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 效能名詞與公式",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-risc-cisc",
    subjectKey: "computerPrinciples",
    titleZh: "RISC 與 CISC",
    titleEn: "RISC and CISC",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / RISC 與 CISC",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-memory-hierarchy",
    subjectKey: "computerPrinciples",
    titleZh: "Memory 階層圖",
    titleEn: "Memory Hierarchy",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Memory 階層圖",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-memory-classification",
    subjectKey: "computerPrinciples",
    titleZh: "Memory 分類圖",
    titleEn: "Memory Classification",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Memory 分類圖",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-registers",
    subjectKey: "computerPrinciples",
    titleZh: "Register（暫存器）",
    titleEn: "Register",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Register（暫存器）",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-cache",
    subjectKey: "computerPrinciples",
    titleZh: "Cache",
    titleEn: "Cache Memory",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / Cache",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-usb-speed",
    subjectKey: "computerPrinciples",
    titleZh: "USB 速度",
    titleEn: "USB Speed",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / USB 速度",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "cp-base-conversion",
    subjectKey: "computerPrinciples",
    titleZh: "進制轉換",
    titleEn: "Base Conversion",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 進制轉換",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-complement-conversion",
    subjectKey: "computerPrinciples",
    titleZh: "補數轉換",
    titleEn: "Complement Representation",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 補數轉換",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-floating-point-conversion",
    subjectKey: "computerPrinciples",
    titleZh: "浮點數轉換",
    titleEn: "Floating-Point Conversion",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 浮點數轉換",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-codes-and-check-codes",
    subjectKey: "computerPrinciples",
    titleZh: "數碼、文字碼與檢查碼",
    titleEn: "Codes and Check Codes",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3a. 基本計概 / 數碼、文字碼與檢查碼",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-digital-logic-basics",
    subjectKey: "computerPrinciples",
    titleZh: "基本邏輯",
    titleEn: "Digital Logic Basics",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3b. 數位邏輯 / 基本邏輯",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-sop-pos",
    subjectKey: "computerPrinciples",
    titleZh: "SOP 與 POS",
    titleEn: "SOP and POS",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3b. 數位邏輯 / SOP 與 POS",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-karnaugh-map",
    subjectKey: "computerPrinciples",
    titleZh: "卡諾圖化簡",
    titleEn: "Karnaugh Map",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3b. 數位邏輯 / 卡諾圖化簡",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-universal-gates",
    subjectKey: "computerPrinciples",
    titleZh: "萬用閘",
    titleEn: "Universal Gates",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3b. 數位邏輯 / 萬用閘",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-combinational-sequential-circuits",
    subjectKey: "computerPrinciples",
    titleZh: "組合與循序電路",
    titleEn: "Combinational and Sequential Circuits",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3b. 數位邏輯 / 組合與循序電路",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-os-basics",
    subjectKey: "computerPrinciples",
    titleZh: "基本常識",
    titleEn: "Operating System Basics",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / 基本常識",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "cp-io-and-interrupts",
    subjectKey: "computerPrinciples",
    titleZh: "I/O 與中斷",
    titleEn: "I/O and Interrupts",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / I/O 與中斷",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-hardware-protection",
    subjectKey: "computerPrinciples",
    titleZh: "硬體保護",
    titleEn: "Hardware Protection",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / 硬體保護",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-os-structure",
    subjectKey: "computerPrinciples",
    titleZh: "OS 結構",
    titleEn: "Operating System Structure",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / OS 結構",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-process",
    subjectKey: "computerPrinciples",
    titleZh: "Process",
    titleEn: "Process",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Process",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-deadlock",
    subjectKey: "computerPrinciples",
    titleZh: "Deadlock",
    titleEn: "Deadlock",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Deadlock",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-process-communication",
    subjectKey: "computerPrinciples",
    titleZh: "Process Communication",
    titleEn: "Process Communication",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Process Communication",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-memory-management",
    subjectKey: "computerPrinciples",
    titleZh: "Memory Management",
    titleEn: "Memory Management",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Memory Management",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-virtual-memory",
    subjectKey: "computerPrinciples",
    titleZh: "Virtual Memory",
    titleEn: "Virtual Memory",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Virtual Memory",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-disk-management",
    subjectKey: "computerPrinciples",
    titleZh: "Disk Management",
    titleEn: "Disk Management",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Disk Management",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "networking-prep-direction",
    subjectKey: "networking",
    titleZh: "準備方向",
    titleEn: "Exam Preparation Direction",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "一、準備方向",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "networking-overview",
    subjectKey: "networking",
    titleZh: "網路概論",
    titleEn: "Networking Overview",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "二、網路概論",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "networking-devices-osi",
    subjectKey: "networking",
    titleZh: "網路設備與 OSI 層",
    titleEn: "Network Devices and OSI Layers",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "三、網路設備與 OSI 層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-ports",
    subjectKey: "networking",
    titleZh: "常見 Port Number",
    titleEn: "Port Number",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "四、常見 Port Number",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "networking-osi-tcpip-models",
    subjectKey: "networking",
    titleZh: "OSI 7 層與 TCP/IP 5 層",
    titleEn: "OSI Model and TCP/IP Model",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "五、OSI 7 層與 TCP/IP 5 層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-physical-layer",
    subjectKey: "networking",
    titleZh: "實體層",
    titleEn: "Physical Layer",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "六、實體層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-data-link-layer",
    subjectKey: "networking",
    titleZh: "資料鏈結層",
    titleEn: "Data Link Layer",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "七、資料鏈結層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-network-layer",
    subjectKey: "networking",
    titleZh: "網路層",
    titleEn: "Network Layer",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "八、網路層",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "networking-transport-layer",
    subjectKey: "networking",
    titleZh: "傳輸層",
    titleEn: "Transport Layer",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "九、傳輸層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-application-layer",
    subjectKey: "networking",
    titleZh: "應用層",
    titleEn: "Application Layer",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "十、應用層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-security",
    subjectKey: "networking",
    titleZh: "資訊安全",
    titleEn: "Information Security",
    sourceFiles: [
      "_private/網概.txt"
    ],
    sourceSection: "十一、資訊安全",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "im-00-overview",
    subjectKey: "informationManagement",
    titleZh: "資訊管理總覽",
    titleEn: "Information Management Overview",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "文件標題與全文範圍",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "im-01-preparation-direction",
    subjectKey: "informationManagement",
    titleZh: "準備方向",
    titleEn: "Exam Preparation Direction",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "一、準備方向",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "im-02-digital-transformation",
    subjectKey: "informationManagement",
    titleZh: "數位轉型",
    titleEn: "Digital Transformation",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "二、數位轉型",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "im-03-system-development-models",
    subjectKey: "informationManagement",
    titleZh: "資訊系統開發流程與模式",
    titleEn: "Information System Development Models",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "三、資訊系統開發流程與模式",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "im-04-esg",
    subjectKey: "informationManagement",
    titleZh: "ESG",
    titleEn: "Environmental Social and Governance",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "四、ESG",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "im-05-info-ethics-regulations",
    subjectKey: "informationManagement",
    titleZh: "資訊系統倫理與新興法規",
    titleEn: "Information Ethics and Emerging Regulations",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "五、資訊系統倫理與新興法規",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "im-06-im-supplemental-points",
    subjectKey: "informationManagement",
    titleZh: "資訊管理補充考點",
    titleEn: "Information Management Supplemental Points",
    sourceFiles: [
      "_private/資訊管理.txt"
    ],
    sourceSection: "六、資訊管理補充考點",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-root",
    subjectKey: "programming",
    titleZh: "程式",
    titleEn: "Programming Overview",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L1-L2",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-preparation-direction",
    subjectKey: "programming",
    titleZh: "程式準備方向",
    titleEn: "Programming Preparation Direction",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L3-L12",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-original-reminders",
    subjectKey: "programming",
    titleZh: "程式原文提醒",
    titleEn: "Programming Source Reminders",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L5-L12",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-basics",
    subjectKey: "programming",
    titleZh: "程式基礎",
    titleEn: "Programming Basics",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L13-L38",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-translator-comparison",
    subjectKey: "programming",
    titleZh: "Assembler、Compiler、Interpreter 比較",
    titleEn: "Assembler Compiler and Interpreter Comparison",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L15-L18",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-basic-constructs",
    subjectKey: "programming",
    titleZh: "程式基本構件",
    titleEn: "Programming Basic Constructs",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L20-L26",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-parameter-passing",
    subjectKey: "programming",
    titleZh: "程式參數傳遞比較",
    titleEn: "Parameter Passing",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L28-L32",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-static",
    subjectKey: "programming",
    titleZh: "程式 static 觀念",
    titleEn: "Static Concept",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L34-L37",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-intermediate",
    subjectKey: "programming",
    titleZh: "程式中階",
    titleEn: "Intermediate Programming",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L39-L66",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-pointers",
    subjectKey: "programming",
    titleZh: "C / C++ 指標",
    titleEn: "Pointers",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L41-L45",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-string-functions",
    subjectKey: "programming",
    titleZh: "程式字串相關函式",
    titleEn: "String Functions",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L47-L51",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-oop-three-pillars",
    subjectKey: "programming",
    titleZh: "OOP 三大特性",
    titleEn: "Object-Oriented Programming Three Pillars",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L53-L56",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-oop-extensions",
    subjectKey: "programming",
    titleZh: "OOP 常見延伸",
    titleEn: "Object-Oriented Programming Extensions",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L58-L61",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-recursion",
    subjectKey: "programming",
    titleZh: "Recursion 遞迴",
    titleEn: "Recursion",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L63-L66",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-python-special-types",
    subjectKey: "programming",
    titleZh: "Python 特殊資料型別",
    titleEn: "Python Special Data Types",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L68-L74",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-python-collection-comparison",
    subjectKey: "programming",
    titleZh: "Python List、Tuple、Dictionary、Set 比較",
    titleEn: "Python Collection Comparison",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L70-L74",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-c-cpp-java-supplement",
    subjectKey: "programming",
    titleZh: "C / C++ / Java 補充重點",
    titleEn: "C C++ and Java Supplemental Points",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L76-L81",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-c-cpp-java-key-points",
    subjectKey: "programming",
    titleZh: "C、C++、Java 考點整理",
    titleEn: "C C++ and Java Key Points",
    sourceFiles: [
      "_private/程式.txt"
    ],
    sourceSection: "_private/程式.txt` L78-L81",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-root",
    subjectKey: "programming",
    titleZh: "系統分析與設計：領域總覽",
    titleEn: "System Analysis and Design Overview",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L1-L2",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-preparation-direction",
    subjectKey: "programming",
    titleZh: "系統分析與設計：準備方向",
    titleEn: "System Analysis and Design Preparation Direction",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L3-L8",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-original-reminders",
    subjectKey: "programming",
    titleZh: "系統分析與設計：原文提醒",
    titleEn: "System Analysis and Design Source Reminders",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L5-L8",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-overview",
    subjectKey: "programming",
    titleZh: "系統分析與設計：概論",
    titleEn: "System Analysis and Design Introduction",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L9-L22",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-sdlc",
    subjectKey: "programming",
    titleZh: "系統分析與設計：SDLC",
    titleEn: "System Development Life Cycle",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L11-L18",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-ssdlc",
    subjectKey: "programming",
    titleZh: "系統分析與設計：SSDLC",
    titleEn: "Secure System Development Life Cycle",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L20-L22",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-structured-analysis-design",
    subjectKey: "programming",
    titleZh: "系統分析與設計：結構化分析與設計",
    titleEn: "Structured Analysis and Design",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L24-L49",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-cohesion",
    subjectKey: "programming",
    titleZh: "系統分析與設計：Cohesion 內聚力",
    titleEn: "Cohesion",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L26-L35",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-coupling",
    subjectKey: "programming",
    titleZh: "系統分析與設計：Coupling 耦合力",
    titleEn: "Coupling",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L37-L44",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-structured-tools",
    subjectKey: "programming",
    titleZh: "系統分析與設計：DFD、Data Dictionary、Structure Chart",
    titleEn: "Data Flow Diagram Data Dictionary and Structure Chart",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L46-L49",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-oop",
    subjectKey: "programming",
    titleZh: "系統分析與設計：物件導向",
    titleEn: "Object-Oriented Analysis and Design",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L51-L61",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-oop-relationships",
    subjectKey: "programming",
    titleZh: "系統分析與設計：物件導向關係比較",
    titleEn: "Object-Oriented Relationships",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L53-L57",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-generalization-realization",
    subjectKey: "programming",
    titleZh: "系統分析與設計：Generalization 與 Realization",
    titleEn: "Generalization and Realization",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L59-L61",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-uml",
    subjectKey: "programming",
    titleZh: "系統分析與設計：UML",
    titleEn: "Unified Modeling Language",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L63-L74",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-uml-core-diagrams",
    subjectKey: "programming",
    titleZh: "系統分析與設計：UML 必背圖",
    titleEn: "Unified Modeling Language Core Diagrams",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L65-L69",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-uml-extra-diagrams",
    subjectKey: "programming",
    titleZh: "系統分析與設計：UML 補充圖",
    titleEn: "Unified Modeling Language Extra Diagrams",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L71-L74",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-project-management",
    subjectKey: "programming",
    titleZh: "系統分析與設計：專案管理",
    titleEn: "Project Management",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L76-L107",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-testing-types",
    subjectKey: "programming",
    titleZh: "系統分析與設計：測試種類",
    titleEn: "Testing Types",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L78-L90",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-system-analysis-conversion-methods",
    subjectKey: "programming",
    titleZh: "系統分析與設計：系統導入方式",
    titleEn: "System Conversion Methods",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L92-L96",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "programming-system-analysis-pdca",
    subjectKey: "programming",
    titleZh: "系統分析與設計：PDCA",
    titleEn: "Plan Do Check Act",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L98-L102",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "programming-system-analysis-project-tools-risk",
    subjectKey: "programming",
    titleZh: "系統分析與設計：專案工具與風險管理",
    titleEn: "Project Tools and Risk Management",
    sourceFiles: [
      "_private/系統分析與設計.txt"
    ],
    sourceSection: "_private/系統分析與設計.txt` L104-L107",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-overview",
    subjectKey: "database",
    titleZh: "資料庫總章",
    titleEn: "Database Overview",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 1-137",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "database-prep-direction",
    subjectKey: "database",
    titleZh: "準備方向",
    titleEn: "Database Preparation Direction",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 3-8",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "database-ansi-sparc",
    subjectKey: "database",
    titleZh: "ANSI/SPARC 架構",
    titleEn: "ANSI/SPARC Architecture",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 10-30",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-foundations",
    subjectKey: "database",
    titleZh: "資料庫基礎",
    titleEn: "Database Foundations",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 32-43",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-keys",
    subjectKey: "database",
    titleZh: "Key",
    titleEn: "Keys",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 45-53",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-erd",
    subjectKey: "database",
    titleZh: "ERD",
    titleEn: "Entity Relationship Diagram",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 55-66",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-normalization",
    subjectKey: "database",
    titleZh: "正規化",
    titleEn: "Normalization",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 68-79",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "database-sql-crud",
    subjectKey: "database",
    titleZh: "SQL 分類與 CRUD",
    titleEn: "SQL Categories and CRUD",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 81-101",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-acid-transactions",
    subjectKey: "database",
    titleZh: "ACID 與交易",
    titleEn: "ACID and Transactions",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 103-114",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-nosql",
    subjectKey: "database",
    titleZh: "NoSQL",
    titleEn: "NoSQL",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 116-128",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "database-supplemental-topics",
    subjectKey: "database",
    titleZh: "資料庫補充考點",
    titleEn: "Database Supplemental Topics",
    sourceFiles: [
      "_private/資料庫.txt"
    ],
    sourceSection: "_private/資料庫.txt` lines 130-137",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "algorithms-study-strategy",
    subjectKey: "algorithms",
    titleZh: "資料結構與演算法準備方向",
    titleEn: "Data Structures and Algorithms Study Strategy",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "一、準備方向",
    difficulty: "intro",
    topicType: "algorithm"
  },
  {
    id: "algorithm-definition-and-properties",
    subjectKey: "algorithms",
    titleZh: "演算法(Algorithm)定義與五大條件",
    titleEn: "Algorithm Definition and Five Properties",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "二、演算法",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "time-complexity-big-o",
    subjectKey: "algorithms",
    titleZh: "時間複雜度(Time Complexity)與 Big O",
    titleEn: "Time Complexity and Big O",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "三、時間複雜度",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "array-addressing",
    subjectKey: "algorithms",
    titleZh: "陣列(Array)與位址計算",
    titleEn: "Array and Address Calculation",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "四、陣列（Array）",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "linked-list-basics",
    subjectKey: "algorithms",
    titleZh: "鏈結串列(Linked List)與基本操作",
    titleEn: "Linked List and Basic Operations",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "五、Linked List",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "stack-and-queue",
    subjectKey: "algorithms",
    titleZh: "堆疊(Stack)與佇列(Queue)",
    titleEn: "Stack and Queue",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "六、Stack 與 Queue",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "tree-and-binary-tree",
    subjectKey: "algorithms",
    titleZh: "樹與二元樹",
    titleEn: "Tree and Binary Tree",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "七、Tree",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "graph-traversal-and-paths",
    subjectKey: "algorithms",
    titleZh: "圖(Graph)、DFS/BFS、MST 與最短路徑",
    titleEn: "Graph DFS BFS MST and Shortest Paths",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "八、圖（Graph）",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "sorting-algorithms-baseline",
    subjectKey: "algorithms",
    titleZh: "排序(Sorting)七大比較基準",
    titleEn: "Sorting Complexity Baseline",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "九、排序",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "advanced-balanced-trees",
    subjectKey: "algorithms",
    titleZh: "高等樹: AVL、B Tree、Heap、Red-Black Tree",
    titleEn: "Advanced Balanced Trees",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "十、高等樹",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "hashing-and-collision-handling",
    subjectKey: "algorithms",
    titleZh: "雜湊法(Hashing)與碰撞處理",
    titleEn: "Hashing and Collision Handling",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "十一、雜湊法（Hashing）",
    difficulty: "core",
    topicType: "dataStructure"
  },
  {
    id: "bubble-sort",
    subjectKey: "algorithms",
    titleZh: "氣泡排序法",
    titleEn: "Bubble Sort",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md",
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "一、氣泡排序法 Bubble Sort",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "quick-sort",
    subjectKey: "algorithms",
    titleZh: "快速排序法",
    titleEn: "Quick Sort",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md",
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "二、快速排序法 Quick Sort",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "fibonacci-sequence",
    subjectKey: "algorithms",
    titleZh: "Fibonacci 序列",
    titleEn: "Fibonacci Sequence",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md"
    ],
    sourceSection: "三、Fibonacci 序列",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "greatest-common-divisor",
    subjectKey: "algorithms",
    titleZh: "最大公因數",
    titleEn: "Greatest Common Divisor",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md"
    ],
    sourceSection: "四、最大公因數 GCD",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "binary-search",
    subjectKey: "algorithms",
    titleZh: "二元搜尋法",
    titleEn: "Binary Search",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md"
    ],
    sourceSection: "五、二元搜尋法 Binary Search",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "selection-sort",
    subjectKey: "algorithms",
    titleZh: "選擇排序法",
    titleEn: "Selection Sort",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md",
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "六、選擇排序法 Selection Sort",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "insertion-sort",
    subjectKey: "algorithms",
    titleZh: "插入排序法",
    titleEn: "Insertion Sort",
    sourceFiles: [
      "_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md",
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "七、插入排序法 Insertion Sort",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "merge-sort",
    subjectKey: "algorithms",
    titleZh: "合併排序法",
    titleEn: "Merge Sort",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "九、排序 / Sorting baseline table",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "heap-sort",
    subjectKey: "algorithms",
    titleZh: "堆積排序法",
    titleEn: "Heap Sort",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "九、排序 / Sorting baseline table",
    difficulty: "core",
    topicType: "algorithm"
  },
  {
    id: "shell-sort",
    subjectKey: "algorithms",
    titleZh: "希爾排序法",
    titleEn: "Shell Sort",
    sourceFiles: [
      "_private/資料結構與演算法.txt"
    ],
    sourceSection: "九、排序 / Sorting baseline table",
    difficulty: "core",
    topicType: "algorithm"
  }
] as const satisfies readonly ProfessionalTopicSkeletonConfig[];

const commonUnitsSourceFiles = ['_private/計算機概論.txt', '_private/discuss.txt'] as const;
const vonNeumannArchitectureSourceFiles = ['_private/計算機概論.txt', '_private/MD/馮紐曼架構.md'] as const;
const turingMachineAndTestSourceFiles = ['_private/計算機概論.txt', '_private/MD/二、圖靈機與圖靈測試.md'] as const;
const machineInstructionCycleSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md'
] as const;
const pipelineSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/四、Pipeline（管線化）_新手國考教材.md'
] as const;
const busSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/五、匯流排（Bus）_新手國考教材.md'
] as const;
const performanceFormulasSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/六、效能名詞與公式_新手國考教材.md'
] as const;
const riscCiscSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/七、RISC 與 CISC_新手國考教材.md'
] as const;
const memoryHierarchySourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/八、Memory 階層圖_新手國考教材.md'
] as const;
const memoryClassificationSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/九、Memory 分類圖_新手國考教材.md'
] as const;
const registersSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十、Register（暫存器）_新手國考教材.md'
] as const;
const cacheSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十一、Cache_新手國考教材.md'
] as const;
const hazardSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十二、Hazard_新手國考教材.md'
] as const;
const usbSpeedSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十三、USB 速度_新手國考教材.md'
] as const;
const baseConversionSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十四、進制轉換_新手國考教材.md'
] as const;
const complementConversionSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十五、補數轉換_新手國考教材.md'
] as const;
const floatingPointConversionSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十六、浮點數轉換_新手國考教材.md'
] as const;
const codesAndCheckCodesSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md'
] as const;

const commonUnitsTerms = [
  { zh: '位元', en: 'bit' },
  { zh: '位元組', en: 'byte' },
  { zh: '半位元組', en: 'nibble' },
  { zh: '字組', en: 'word' },
  { zh: '千位元組', en: 'KB' },
  { zh: '百萬位元組', en: 'MB' },
  { zh: '十億位元組', en: 'GB' },
  { zh: '兆位元組', en: 'TB' },
  { zh: '每秒百萬位元', en: 'Mbps' },
  { zh: '每秒百萬位元組', en: 'MB/s' },
  { zh: '秒', en: 'second' },
  { zh: '毫秒', en: 'millisecond' },
  { zh: '微秒', en: 'microsecond' },
  { zh: '奈秒', en: 'nanosecond' },
  { zh: '皮秒', en: 'picosecond' }
] as const;

const vonNeumannArchitectureTerms = [
  { zh: '馮紐曼架構', en: 'Von Neumann Architecture' },
  { zh: '程式內儲概念', en: 'Stored-Program Concept' },
  { zh: '指令循序執行', en: 'Sequential Instruction Execution' },
  { zh: '中央處理器', en: 'Central Processing Unit, CPU' },
  { zh: '記憶單元', en: 'Memory Unit' },
  { zh: '匯流排', en: 'Bus' },
  { zh: '輸入單元', en: 'Input Unit' },
  { zh: '輸出單元', en: 'Output Unit' },
  { zh: '算術邏輯單元', en: 'Arithmetic Logic Unit, ALU' },
  { zh: '控制單元', en: 'Control Unit, CU' },
  { zh: '哈佛架構', en: 'Harvard Architecture' },
  { zh: '馮紐曼瓶頸', en: 'Von Neumann Bottleneck' },
  { zh: '快取', en: 'Cache' },
  { zh: '預取', en: 'Prefetching' },
  { zh: '匯流排寬度', en: 'Bus Width' },
  { zh: '記憶體頻寬', en: 'Memory Bandwidth' },
  { zh: '管線化', en: 'Pipelining' },
  { zh: '平行處理', en: 'Parallel Processing' },
  { zh: '記憶體階層', en: 'Memory Hierarchy' }
] as const;

const turingMachineAndTestTerms = [
  { zh: '圖靈機', en: 'Turing Machine' },
  { zh: '圖靈測試', en: 'Turing Test' },
  { zh: '可計算性', en: 'Computability' },
  { zh: '讀寫頭', en: 'Read/Write Head' },
  { zh: '有限控制器', en: 'Finite Control' }
] as const;

const machineInstructionCycleTerms = [
  { zh: '機器指令', en: 'Machine Instruction' },
  { zh: '指令週期', en: 'Instruction Cycle' },
  { zh: '操作碼', en: 'Opcode' },
  { zh: '運算元', en: 'Operand' },
  { zh: '位址欄位', en: 'Address Field' },
  { zh: '有效位址', en: 'Effective Address' },
  { zh: '程式計數器', en: 'PC' },
  { zh: '指令暫存器', en: 'IR' },
  { zh: '取指令', en: 'Fetch' },
  { zh: '解碼', en: 'Decode' },
  { zh: '取運算元', en: 'Operand Fetch' },
  { zh: '執行', en: 'Execute' },
  { zh: '寫回', en: 'Write Back' },
  { zh: '算術邏輯單元', en: 'ALU' },
  { zh: '輸入輸出', en: 'I/O' },
  { zh: '分支', en: 'Branch' }
] as const;

const pipelineTerms = [
  { zh: '管線化', en: 'Pipelining' },
  { zh: '管線階段', en: 'Pipeline Stage' },
  { zh: '吞吐量', en: 'Throughput' },
  { zh: '延遲', en: 'Latency' },
  { zh: '時脈週期', en: 'Clock Cycle' },
  { zh: '危障', en: 'Hazard' },
  { zh: '停滯', en: 'Stall' },
  { zh: '結構危障', en: 'Structural Hazard' },
  { zh: '資料危障', en: 'Data Hazard' },
  { zh: '控制危障', en: 'Control Hazard' },
  { zh: '加速比', en: 'Speedup' }
] as const;

const busTerms = [
  { zh: '匯流排', en: 'Bus' },
  { zh: '位址匯流排', en: 'Address Bus' },
  { zh: '資料匯流排', en: 'Data Bus' },
  { zh: '控制匯流排', en: 'Control Bus' },
  { zh: '可定址空間', en: 'Addressable Space' },
  { zh: '位元', en: 'bit' },
  { zh: '位元組', en: 'byte' },
  { zh: '暫存器', en: 'Register' },
  { zh: '快取', en: 'Cache' },
  { zh: '主記憶體', en: 'RAM' }
] as const;

const performanceFormulasTerms = [
  { zh: '時脈', en: 'Clock' },
  { zh: '時脈週期時間', en: 'Clock Cycle Time' },
  { zh: '時脈頻率', en: 'Clock Rate' },
  { zh: '指令數', en: 'Instruction Count' },
  { zh: '每指令平均週期數', en: 'CPI' },
  { zh: 'CPU 執行時間', en: 'CPU Time' },
  { zh: '每秒百萬指令數', en: 'MIPS' },
  { zh: '執行時間', en: 'Execution Time' },
  { zh: '指令集架構', en: 'ISA' },
  { zh: '內頻', en: 'Internal Clock' },
  { zh: '外頻', en: 'External Clock' },
  { zh: '倍頻', en: 'Clock Multiplier' }
] as const;

const riscCiscTerms = [
  { zh: '精簡指令集電腦', en: 'RISC' },
  { zh: '複雜指令集電腦', en: 'CISC' },
  { zh: '指令集架構', en: 'ISA' },
  { zh: '定址模式', en: 'Addressing Mode' },
  { zh: '指令長度', en: 'Instruction Length' },
  { zh: 'Load/Store 架構', en: 'Load/Store Architecture' },
  { zh: '管線化', en: 'Pipeline' },
  { zh: '微指令', en: 'Microinstruction' }
] as const;

const memoryHierarchyTerms = [
  { zh: '暫存器', en: 'Register' },
  { zh: '快取記憶體', en: 'Cache' },
  { zh: '主記憶體', en: 'Main Memory / RAM' },
  { zh: '輔助儲存體', en: 'Secondary Storage' },
  { zh: '外部儲存', en: 'External Storage' },
  { zh: '時間區域性', en: 'Temporal Locality' },
  { zh: '空間區域性', en: 'Spatial Locality' }
] as const;

const memoryClassificationTerms = [
  { zh: '隨機存取記憶體', en: 'RAM' },
  { zh: '唯讀記憶體', en: 'ROM' },
  { zh: '靜態隨機存取記憶體', en: 'SRAM' },
  { zh: '動態隨機存取記憶體', en: 'DRAM' },
  { zh: '可程式化唯讀記憶體', en: 'PROM' },
  { zh: '可抹除可程式化唯讀記憶體', en: 'EPROM' },
  { zh: '電氣可抹除可程式化唯讀記憶體', en: 'EEPROM' },
  { zh: '快閃記憶體', en: 'Flash' },
  { zh: '正反器', en: 'Flip-flop' }
] as const;

const registersTerms = [
  { zh: '暫存器', en: 'Register' },
  { zh: '程式計數器', en: 'Program Counter, PC' },
  { zh: '指令暫存器', en: 'Instruction Register, IR' },
  { zh: '基底暫存器', en: 'Base Register' },
  { zh: '界限暫存器', en: 'Limit Register' },
  { zh: '旗標暫存器', en: 'Flag Register' },
  { zh: '狀態暫存器', en: 'Status Register' },
  { zh: '記憶體位址暫存器', en: 'MAR' },
  { zh: '記憶體資料暫存器', en: 'MDR / MBR' }
] as const;

const cacheTerms = [
  { zh: '快取記憶體', en: 'Cache' },
  { zh: '一級快取', en: 'L1 Cache' },
  { zh: '二級快取', en: 'L2 Cache' },
  { zh: '三級快取', en: 'L3 Cache' },
  { zh: '命中', en: 'Hit' },
  { zh: '未命中', en: 'Miss' },
  { zh: '命中率', en: 'Hit Ratio' },
  { zh: '平均記憶體存取時間', en: 'AMAT' },
  { zh: '寫透式', en: 'Write Through' },
  { zh: '寫回式', en: 'Write Back' },
  { zh: '寫入配置', en: 'Write Allocate' },
  { zh: '非寫入配置', en: 'No Write Allocate' }
] as const;

const hazardTerms = [
  { zh: '管線危障', en: 'Hazard' },
  { zh: '停滯', en: 'Stall' },
  { zh: '泡泡', en: 'Bubble' },
  { zh: '結構危障', en: 'Structural Hazard' },
  { zh: '資料危障', en: 'Data Hazard' },
  { zh: '控制危障', en: 'Control Hazard' },
  { zh: '指令快取', en: 'Instruction Cache' },
  { zh: '資料快取', en: 'Data Cache' },
  { zh: '資料前推', en: 'Forwarding' },
  { zh: '編譯器排程', en: 'Compiler scheduling' },
  { zh: '暫存器重新命名', en: 'Register renaming' }
] as const;

const usbSpeedTerms = [
  { zh: '通用序列匯流排', en: 'USB' },
  { zh: '位元每秒', en: 'Mbps' },
  { zh: '千兆位元每秒', en: 'Gbps' },
  { zh: '位元組每秒', en: 'MB/s' },
  { zh: 'USB4', en: 'USB4' },
  { zh: 'Type-C', en: 'USB Type-C' }
] as const;

const baseConversionTerms = [
  { zh: '二進制', en: 'Binary' },
  { zh: '八進制', en: 'Octal' },
  { zh: '十進制', en: 'Decimal' },
  { zh: '十六進制', en: 'Hexadecimal' },
  { zh: '位值展開', en: 'Positional Notation' },
  { zh: '基底', en: 'Base' }
] as const;

const complementConversionTerms = [
  { zh: '補數', en: 'Complement' },
  { zh: '符號大小', en: 'Sign-Magnitude' },
  { zh: '1 補數', en: "1's complement" },
  { zh: '2 補數', en: "2's complement" },
  { zh: '9 補數', en: "9's complement" },
  { zh: '10 補數', en: "10's complement" }
] as const;

const floatingPointConversionTerms = [
  { zh: '浮點數', en: 'Floating Point' },
  { zh: 'IEEE 754', en: 'IEEE 754' },
  { zh: '符號位', en: 'Sign' },
  { zh: '指數欄位', en: 'Exponent' },
  { zh: '尾數欄位', en: 'Fraction' },
  { zh: '偏移值', en: 'Bias' },
  { zh: '正規化', en: 'Normalization' }
] as const;

const codesAndCheckCodesTerms = [
  { zh: '數碼', en: 'Numeric Code' },
  { zh: '文字碼', en: 'Character Code' },
  { zh: '檢查碼', en: 'Check Code' },
  { zh: '二進碼十進數', en: 'BCD' },
  { zh: '格雷碼', en: 'Gray Code' },
  { zh: '同位元檢查', en: 'Parity Check' },
  { zh: '循環冗餘檢查', en: 'CRC' },
  { zh: '漢明碼', en: 'Hamming Code' },
  { zh: '漢明距', en: 'Hamming Distance' },
  { zh: '症候值', en: 'Syndrome' }
] as const;

const algorithmExampleSourceFiles = ['_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'] as const;

const algorithmExampleContentById = {
  'bubble-sort': {
    summary: '整理氣泡排序的相鄰比較規則、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(n²)。',
    terms: [
      { zh: '氣泡排序法', en: 'Bubble Sort' },
      { zh: '相鄰比較', en: 'Adjacent Comparison' },
      { zh: '交換', en: 'Swap' }
    ],
    lead: [
      '氣泡排序法(Bubble Sort)是一種簡單排序法，核心是重複比較相鄰兩個元素。',
      '如果左邊比右邊大，就交換；每一輪結束後，目前範圍中的最大值會被推到最右邊。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text:
              '氣泡排序會讓較大的值像氣泡一樣慢慢往右邊移動。它容易理解，但最壞情況下需要做大量相鄰比較與交換。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '從左到右比較相鄰兩個元素。',
              '若左邊比右邊大，就交換兩者位置。',
              '每一輪會把目前未排序範圍中的最大值推到最右側。',
              '若某一輪完全沒有交換，代表資料已排序完成，可以提前結束。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(n²)', '(n - 1) + (n - 2) + ... + 1，所以保留最高次項 n²。'],
              ['非遞迴版本', 'O(n²)', '反向排序時，每一輪都需要相鄰比較並可能交換。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '氣泡排序法遞迴版本',
        description: '每次遞迴先完成一輪相鄰比較，把目前最大值推到右邊，再排序前 n - 1 個元素。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void bubbleSortRecursive(int[] arr) {
    bubbleSortRecursive(arr, arr.length);
}

private static void bubbleSortRecursive(int[] arr, int n) {
    // n <= 1 表示剩 0 或 1 個元素，不需要排序。
    if (n <= 1) {
        return;
    }

    boolean swapped = false;

    // 做一輪相鄰比較，把目前前 n 個元素中的最大值推到第 n - 1 個位置。
    for (int j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
            swapped = true;
        }
    }

    // 若沒有交換，代表已排序完成，可以提前結束。
    if (!swapped) {
        return;
    }

    // 最大值已經在最右邊，接著只需要排序前 n - 1 個元素。
    bubbleSortRecursive(arr, n - 1);
}`
      },
      {
        title: '氣泡排序法非遞迴版本',
        description: '用雙層迴圈做相鄰比較，外層控制輪數，內層把目前最大值往右推。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void bubbleSortIterative(int[] arr) {
    int n = arr.length;

    // 外層控制「第幾輪」。每一輪會把目前範圍內最大的值推到右邊。
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false; // 用來判斷本輪有沒有交換；若沒有，代表已排序完成。

        // 內層負責相鄰比較。n - i - 1 是因為右邊 i 個元素已經排好。
        for (int j = 0; j < n - i - 1; j++) {
            // 若左邊比右邊大，就交換，讓大的值慢慢往右邊「浮上去」。
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }

        // 若整輪都沒有交換，代表陣列已經由小到大排序完成。
        if (!swapped) {
            break;
        }
    }
}`
      }
    ]
  },
  'quick-sort': {
    summary: '整理快速排序的 pivot 與 partition 規則、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(n²)。',
    terms: [
      { zh: '快速排序法', en: 'Quick Sort' },
      { zh: '基準值', en: 'Pivot' },
      { zh: '分割', en: 'Partition' },
      { zh: '分治法', en: 'Divide and Conquer' }
    ],
    lead: [
      '快速排序法(Quick Sort)是一種分治法排序，會先選一個基準值 pivot。',
      'partition 會把小於等於 pivot 的資料放左邊，大於 pivot 的資料放右邊，再分別排序左右區間。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text:
              '快速排序的重點不是一開始就全部排好，而是先把 pivot 放到正確位置，再把左右兩邊視為較小的排序問題。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '選一個 pivot，本教材使用最右邊元素當 pivot。',
              '執行 partition，讓 pivot 左邊都小於或等於 pivot，右邊都大於 pivot。',
              'pivot 已在正確位置，不需要再移動。',
              '分別排序 pivot 左邊與右邊的子區間。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(n²)', 'pivot 每次都切出 n - 1 與 0 的區間時，會退化成連續線性掃描。'],
              ['非遞迴版本', 'O(n²)', '即使用 stack 取代遞迴，partition 的最壞切分仍會累積成 n²。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '快速排序法遞迴版本',
        description: '用遞迴處理 pivot 左右兩側的子區間。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void quickSortRecursive(int[] arr) {
    quickSortRecursive(arr, 0, arr.length - 1);
}

private static void quickSortRecursive(int[] arr, int left, int right) {
    // left >= right 表示區間沒有元素或只有一個元素，不需要排序。
    if (left >= right) {
        return;
    }

    // partition 會把 pivot 放到正確位置，並回傳 pivot 的位置。
    int pivotIndex = partition(arr, left, right);

    // pivot 左邊都 <= pivot，右邊都 > pivot；再分別排序左右區間。
    quickSortRecursive(arr, left, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, right);
}

private static int partition(int[] arr, int left, int right) {
    int pivot = arr[right]; // 使用最右邊元素當 pivot。
    int i = left - 1; // i 代表「小於等於 pivot 區域」的最後位置。

    for (int j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}`
      },
      {
        title: '快速排序法非遞迴版本',
        description: '用 stack 保存尚未排序的區間，取代遞迴呼叫。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

private static int partition(int[] arr, int left, int right) {
    int pivot = arr[right];
    int i = left - 1;

    for (int j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}

public static void quickSortIterative(int[] arr) {
    if (arr.length <= 1) {
        return;
    }

    // 用堆疊保存尚未排序的區間 [left, right]，取代遞迴呼叫。
    Deque<int[]> stack = new ArrayDeque<>();
    stack.push(new int[] {0, arr.length - 1});

    while (!stack.isEmpty()) {
        int[] range = stack.pop();
        int left = range[0];
        int right = range[1];

        if (left >= right) {
            continue;
        }

        int pivotIndex = partition(arr, left, right);

        if (left < pivotIndex - 1) {
            stack.push(new int[] {left, pivotIndex - 1});
        }
        if (pivotIndex + 1 < right) {
            stack.push(new int[] {pivotIndex + 1, right});
        }
    }
}`
      }
    ]
  },
  'fibonacci-sequence': {
    summary: '整理 Fibonacci 定義、遞迴與非遞迴 Java 寫法，以及遞迴版本最壞時間複雜度 O(2ⁿ)。',
    terms: [
      { zh: 'Fibonacci 序列', en: 'Fibonacci Sequence' },
      { zh: '遞迴', en: 'Recursion' },
      { zh: '重複計算', en: 'Repeated Computation' }
    ],
    lead: [
      'Fibonacci 序列定義為 F(0)=0、F(1)=1、F(n)=F(n - 1)+F(n - 2)。',
      '遞迴版本直覺但會重複計算；非遞迴版本用變數保存前兩項，逐步往後算。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Fibonacci 的重點是每一項都由前兩項相加而來，因此很適合用來理解遞迴拆解與迴圈累加的差異。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              'F(0) 回傳 0，F(1) 回傳 1。',
              '當 n 大於 1 時，使用 F(n - 1) + F(n - 2)。',
              '遞迴版本會把問題拆成兩個更小問題。',
              '非遞迴版本從 F(2) 開始一路算到 F(n)。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(2ⁿ)', '每次呼叫會再呼叫 n - 1 與 n - 2，產生大量重複計算。'],
              ['非遞迴版本', 'O(n)', '從 2 算到 n，每次只更新前兩項。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: 'Fibonacci 遞迴版本',
        description: '依照 F(n)=F(n-1)+F(n-2) 直接拆成兩個子問題。',
        code: `public static long fibonacciRecursive(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n must be >= 0");
    }

    // n = 0 回傳 0；n = 1 回傳 1。
    if (n <= 1) {
        return n;
    }

    // 把問題拆成前兩項相加。
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}`
      },
      {
        title: 'Fibonacci 非遞迴版本',
        description: '用 prev 與 curr 保存前兩項，從 F(2) 一路算到 F(n)。',
        code: `public static long fibonacciIterative(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n must be >= 0");
    }
    if (n <= 1) {
        return n;
    }

    long prev = 0; // F(0)
    long curr = 1; // F(1)

    // 從 F(2) 算到 F(n)。
    for (int i = 2; i <= n; i++) {
        long next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}`
      }
    ]
  },
  'greatest-common-divisor': {
    summary: '整理最大公因數 GCD 的歐幾里得演算法、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(log min(a,b))。',
    terms: [
      { zh: '最大公因數', en: 'Greatest Common Divisor' },
      { zh: '歐幾里得演算法', en: 'Euclidean Algorithm' },
      { zh: '取餘數', en: 'Modulo' }
    ],
    lead: [
      '最大公因數(GCD)是兩個整數共同因數中最大的那個數。',
      '歐幾里得演算法使用 gcd(a, b) = gcd(b, a % b)，直到 b 變成 0。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text: 'GCD 的核心是用餘數把問題變小。當餘數變成 0 時，剩下的數就是最大公因數。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '先把 a 與 b 轉成非負數，避免負號影響餘數判斷。',
              '若 b 等於 0，a 就是最大公因數。',
              '若 b 不等於 0，把問題改成 gcd(b, a % b)。',
              '重複直到 b 變成 0。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(log min(a,b))', '每次取餘數都會讓問題規模快速變小，最壞常出現在相鄰 Fibonacci 數。'],
              ['非遞迴版本', 'O(log min(a,b))', '迴圈次數與較小數字的位數成正比。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '最大公因數遞迴版本',
        description: '用 gcd(a, b) = gcd(b, a % b) 持續縮小問題。',
        code: `public static int gcdRecursive(int a, int b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return gcdRecursivePositive(a, b);
}

private static int gcdRecursivePositive(int a, int b) {
    // b = 0 時，a 就是最大公因數。
    if (b == 0) {
        return a;
    }

    // 把問題改成 gcd(b, a % b)，數字會越來越小。
    return gcdRecursivePositive(b, a % b);
}`
      },
      {
        title: '最大公因數非遞迴版本',
        description: '用 while 迴圈重複取餘數，直到 b 變成 0。',
        code: `public static int gcdIterative(int a, int b) {
    a = Math.abs(a);
    b = Math.abs(b);

    // 不斷用餘數取代，直到 b 變成 0。
    while (b != 0) {
        int remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}`
      }
    ]
  },
  'binary-search': {
    summary: '整理二元搜尋的已排序前提、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(log n)。',
    terms: [
      { zh: '二元搜尋法', en: 'Binary Search' },
      { zh: '已排序陣列', en: 'Sorted Array' },
      { zh: '中間值', en: 'Middle Value' }
    ],
    lead: [
      '二元搜尋法(Binary Search)是在已排序陣列中找目標值的搜尋演算法。',
      '它每次檢查中間值，然後捨棄不可能包含答案的一半資料。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text: '二元搜尋的必要前提是資料已排序；若陣列未排序，往左或往右捨棄一半資料的判斷就可能錯。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '設定 left 與 right 表示目前搜尋範圍。',
              '計算 mid，檢查中間位置的值。',
              '若 arr[mid] 等於 target，就回傳 mid。',
              '若 target 較大，只搜尋右半邊；若 target 較小，只搜尋左半邊。',
              '當 left 大於 right，表示找不到，回傳 -1。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(log n)', '每次搜尋範圍砍半，n -> n/2 -> n/4，直到剩 1 個位置。'],
              ['非遞迴版本', 'O(log n)', 'while 每跑一次都捨棄一半資料。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '二元搜尋法遞迴版本',
        description: '用遞迴縮小 left 到 right 的搜尋範圍。',
        code: `public static int binarySearchRecursive(int[] arr, int target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

private static int binarySearchRecursive(int[] arr, int target, int left, int right) {
    // left > right 表示搜尋區間不存在，也就是找不到。
    if (left > right) {
        return -1;
    }

    // 避免 (left + right) 在極大資料時整數溢位。
    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (target > arr[mid]) {
        // target 比中間值大，只需要找右半邊。
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // target 比中間值小，只需要找左半邊。
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}`
      },
      {
        title: '二元搜尋法非遞迴版本',
        description: '用 while 迴圈不斷調整 left 與 right。',
        code: `public static int binarySearchIterative(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1; // 往右半邊找。
        } else {
            right = mid - 1; // 往左半邊找。
        }
    }

    return -1; // 找不到。
}`
      }
    ]
  },
  'selection-sort': {
    summary: '整理選擇排序的每輪找最小值規則、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(n²)。',
    terms: [
      { zh: '選擇排序法', en: 'Selection Sort' },
      { zh: '最小值位置', en: 'Minimum Index' },
      { zh: '未排序區', en: 'Unsorted Region' }
    ],
    lead: [
      '選擇排序法(Selection Sort)每一輪會從未排序區找出最小值，放到目前位置。',
      '它的比較次數不太受原始資料順序影響，即使資料已經接近排序，仍會逐輪尋找最小值。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text: '選擇排序像是每次從剩下的資料中挑出最小的，依序放到左邊已排序區。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '把 i 視為目前要放正確值的位置。',
              '從 i 到最後找出最小值的位置 minIndex。',
              '若 minIndex 不等於 i，就交換兩者。',
              'i 往右移，重複處理剩下的未排序區。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(n²)', '每層遞迴都要掃描剩餘區間找最小值。'],
              ['非遞迴版本', 'O(n²)', '比較次數約為 (n - 1) + (n - 2) + ... + 1。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '選擇排序法遞迴版本',
        description: '每次遞迴固定一個 start 位置，再處理 start + 1 之後的部分。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void selectionSortRecursive(int[] arr) {
    selectionSortRecursive(arr, 0);
}

private static void selectionSortRecursive(int[] arr, int start) {
    // start 到最後只剩 0 或 1 個元素時，不需要排序。
    if (start >= arr.length - 1) {
        return;
    }

    int minIndex = start;

    // 找出 start 到最後的最小值位置。
    for (int j = start + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // 把最小值放到 start。
    if (minIndex != start) {
        swap(arr, start, minIndex);
    }

    // start 位置已經排好，接著排序 start + 1 之後的部分。
    selectionSortRecursive(arr, start + 1);
}`
      },
      {
        title: '選擇排序法非遞迴版本',
        description: '用雙層迴圈逐輪找出未排序區的最小值。',
        code: `private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void selectionSortIterative(int[] arr) {
    int n = arr.length;

    // i 代表目前要放正確值的位置。
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        // 從 i + 1 到最後，找出最小值的位置。
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 把最小值交換到 i 的位置。
        if (minIndex != i) {
            swap(arr, i, minIndex);
        }
    }
}`
      }
    ]
  },
  'insertion-sort': {
    summary: '整理插入排序的已排序區概念、遞迴與非遞迴 Java 寫法，以及最壞時間複雜度 O(n²)。',
    terms: [
      { zh: '插入排序法', en: 'Insertion Sort' },
      { zh: '已排序區', en: 'Sorted Region' },
      { zh: '插入位置', en: 'Insertion Position' }
    ],
    lead: [
      '插入排序法(Insertion Sort)會把左邊視為已排序區，每次拿一個新元素插入到正確位置。',
      '它很像整理撲克牌：手上的牌已排好，拿到新牌後就插入適合的位置。'
    ],
    sections: [
      {
        heading: '演算法概念',
        blocks: [
          {
            kind: 'paragraph',
            text: '插入排序每次只處理一個新元素，把比它大的元素往右移，再把新元素放到空出來的位置。'
          }
        ]
      },
      {
        heading: '核心規則',
        blocks: [
          {
            kind: 'orderedList',
            markerStyle: 'decimal',
            items: [
              '把左側視為已排序區。',
              '取出目前要插入的 key。',
              '從 key 左邊開始，把比 key 大的元素往右移。',
              '找到正確位置後，把 key 放進去。',
              '重複直到所有元素都插入已排序區。'
            ]
          }
        ]
      },
      {
        heading: '最壞時間複雜度',
        blocks: [
          {
            kind: 'table',
            headers: ['版本', '最壞時間複雜度', '推導重點'],
            rows: [
              ['遞迴版本', 'O(n²)', '反向排序時，每一層都要把新元素一路往前插入。'],
              ['非遞迴版本', 'O(n²)', '搬移次數約為 1 + 2 + ... + (n - 1)。']
            ]
          }
        ]
      }
    ],
    codeBlocks: [
      {
        title: '插入排序法遞迴版本',
        description: '先排序前 n - 1 個元素，再把第 n 個元素插入正確位置。',
        code: `public static void insertionSortRecursive(int[] arr) {
    insertionSortRecursive(arr, arr.length);
}

private static void insertionSortRecursive(int[] arr, int n) {
    // 前 n 個元素中，若 n <= 1，代表不需要排序。
    if (n <= 1) {
        return;
    }

    // 先排序前 n - 1 個元素。
    insertionSortRecursive(arr, n - 1);

    // 再把第 n 個元素，也就是 arr[n - 1]，插入前面已排序區。
    int key = arr[n - 1];
    int j = n - 2;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;
}`
      },
      {
        title: '插入排序法非遞迴版本',
        description: '用迴圈逐一取出 key，插入左側已排序區。',
        code: `public static void insertionSortIterative(int[] arr) {
    // i 左邊視為已排序區，arr[i] 是準備插入的值。
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;

        // 把比 key 大的元素往右移，空出 key 應該放的位置。
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // j + 1 就是 key 的正確插入位置。
        arr[j + 1] = key;
    }
}`
      }
    ]
  }
} as const;

type AlgorithmExampleTopicId = keyof typeof algorithmExampleContentById;

const isAlgorithmExampleTopicId = (id: string): id is AlgorithmExampleTopicId => id in algorithmExampleContentById;
const algorithmExampleTopicOrder = Object.keys(algorithmExampleContentById) as readonly AlgorithmExampleTopicId[];

const getAlgorithmExampleTopicRank = (id: string): number => {
  if (!isAlgorithmExampleTopicId(id)) {
    return Number.POSITIVE_INFINITY;
  }

  return algorithmExampleTopicOrder.indexOf(id);
};

const commonUnitsLessonSections = [
  {
    heading: '單位速查表',
    blocks: [
      {
        kind: 'table',
        headers: ['單位', '符號', '中文', '等於', '白話理解'],
        rows: [
          ['bit', 'b', '位元', '只能是 0 或 1', '電腦最小資料單位'],
          ['bits', 'b', '多個位元', 'n bits = n 個 bit', 'bits 是 bit 的英文複數，題目說 32 bits，就是 32 個位元'],
          ['byte', 'B', '位元組', '1 byte = 8 bits', '常用來表示容量'],
          ['nibble', '-', '半位元組', '4 bits', '比較少考，知道是半個 byte 即可'],
          ['word', '-', '字組', '依 CPU 架構而定', '可能是 16、32、64 bits，不固定'],
          ['KB', 'KB', '千位元組', '國考常用 1 KB = 2^10 bytes = 1024 bytes', '小容量'],
          ['MB', 'MB', '百萬位元組', '國考常用 1 MB = 2^20 bytes', '約 1024 KB'],
          ['GB', 'GB', '十億位元組', '國考常用 1 GB = 2^30 bytes', '約 1024 MB'],
          ['TB', 'TB', '兆位元組', '國考常用 1 TB = 2^40 bytes', '約 1024 GB']
        ]
      }
    ]
  },
  {
    heading: 'b 與 B 的差異',
    blocks: [
      {
        kind: 'paragraph',
        text: '最容易混的是小寫 b 和大寫 B：b = bit，B = byte，1 B = 8 b。'
      },
      {
        kind: 'paragraph',
        text: '32 bits = 32 b = 4 B = 4 bytes。看到題目寫 bits 時，先把它當成多個 bit，再除以 8 換成 byte。'
      },
      {
        kind: 'paragraph',
        text: '本教材依國考常見二進位換算：1 KB = 1024 bytes，1 MB = 1024 KB，1 GB = 1024 MB。'
      }
    ]
  },
  {
    heading: 'Mbps 與 MB/s',
    blocks: [
      {
        kind: 'paragraph',
        text: '延伸到網路速度時，常看到 Mbps。Mbps 的 b 是 bit，通常表示 megabits per second，也就是每秒多少百萬位元。'
      },
      {
        kind: 'paragraph',
        text: 'MB/s 的 B 是 byte，表示每秒多少百萬位元組；因為 1 byte = 8 bits，所以 1 MB/s = 8 Mbps。'
      }
    ]
  },
  {
    heading: '時間單位速查表',
    blocks: [
      {
        kind: 'paragraph',
        text: '效能與時脈題常會出現秒、毫秒、微秒、奈秒。先把時間單位當成「一秒被切成幾份」來看，換算會比較穩。'
      },
      {
        kind: 'table',
        headers: ['單位', '符號', '中文', '等於', '常見用途'],
        rows: [
          ['second', 's', '秒', '1 s', '一般執行時間'],
          ['millisecond', 'ms', '毫秒', '1 ms = 10^-3 s = 0.001 s', '程式回應時間、I/O 等待'],
          ['microsecond', 'us / μs', '微秒', '1 us = 10^-6 s', '較短的硬體或系統時間'],
          ['nanosecond', 'ns', '奈秒', '1 ns = 10^-9 s', 'Clock Cycle Time、記憶體延遲'],
          ['picosecond', 'ps', '皮秒', '1 ps = 10^-12 s', '更細的硬體時間，較少考']
        ]
      },
      {
        kind: 'paragraph',
        text: '常見換算方向：1 s = 1000 ms，1 ms = 1000 us，1 us = 1000 ns。從大單位換小單位用乘的；從小單位換大單位用除的。'
      }
    ]
  }
] as const;

const vonNeumannArchitectureLessonSections = [
  {
    heading: '定義與核心概念',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '馮紐曼架構(Von Neumann Architecture)是一種電腦設計方式。\n核心定義是程式和資料都放在同一個記憶體中，通常也共用同一組匯流排，CPU 依照順序一個一個讀取指令並執行。'
      },
      {
        kind: 'paragraph',
        text:
          '匯流排(Bus)是電腦內部傳輸資料的通道。可以把匯流排想成馬路，CPU、記憶體與輸入輸出設備之間，要靠這條通道傳送資料。'
      }
    ]
  },
  {
    heading: '兩大特色',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '程式內儲概念(Stored-Program Concept)：程式與資料皆存放於記憶體中，CPU 可從記憶體依序讀取指令並執行。',
          '指令循序執行(Sequential Instruction Execution)：CPU 依照取指令、解碼、執行的步驟循序處理記憶體中的指令，除非遇到跳躍指令或中斷事件，才會改變原本的執行順序。'
        ]
      }
    ]
  },
  {
    heading: '五大單元',
    blocks: [
      {
        kind: 'paragraph',
        text: '計算機系統的基本組成項目，可以整理成輸入單元、輸出單元、記憶單元、算術邏輯單元與控制單元。'
      },
      {
        kind: 'orderedList',
        items: [
          '輸入單元(Input Unit)：把外部資料或指令送進電腦系統。',
          '輸出單元(Output Unit)：把電腦處理後的結果送到外部。',
          '記憶單元(Memory Unit)：存放程式與資料，也是程式內儲概念的核心位置。',
          '算術邏輯單元(Arithmetic Logic Unit, ALU)：對資料做算術運算與邏輯判斷，對應來源中的運算器。',
          '控制單元(Control Unit, CU)：控制指令的取出、解碼與執行流程，對應來源中的控制器。'
        ]
      }
    ]
  },
  {
    heading: '馮紐曼架構 vs 哈佛架構',
    blocks: [
      {
        kind: 'table',
        headers: ['比較項目', '馮紐曼架構', '哈佛架構(Harvard Architecture)'],
        rows: [
          ['記憶體', '程式與資料共用同一個記憶體', '程式記憶體與資料記憶體分開'],
          ['匯流排', '通常共用同一組匯流排', '程式和資料可以分別存取'],
          ['優點', '設計較簡單', '可同時取指令與取資料，效能較佳'],
          ['限制', 'CPU 取指令與存取資料可能互相競爭傳輸通道', '設計較複雜']
        ]
      }
    ]
  },
  {
    heading: '馮紐曼瓶頸',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '馮紐曼瓶頸(Von Neumann Bottleneck)是指在馮紐曼架構中，CPU 與記憶體之間的資料傳輸速度有限；當 CPU 需要頻繁讀取指令與資料時，會因等待記憶體傳輸而降低整體效能。'
      }
    ]
  },
  {
    heading: '改善方法',
    blocks: [
      {
        kind: 'paragraph',
        text: '改善馮紐曼瓶頸的共同目標，是減少 CPU 等待記憶體的時間，提高資料供應速度，讓 CPU 更有效率地執行。'
      },
      {
        kind: 'orderedList',
        items: [
          '快取(Cache)：速度很快、容量較小的記憶體，通常放在 CPU 附近或 CPU 內部，用來存放 CPU 最近常用或可能會再用到的資料。',
          '預取(Prefetching)：電腦預先猜測 CPU 接下來可能需要哪些指令或資料，先把它們拿到較快的位置。',
          '增加匯流排寬度(Bus Width)：提高一次可以傳送多少位元資料。',
          '提高記憶體頻寬(Memory Bandwidth)：提高單位時間內記憶體可以傳輸多少資料。',
          '管線化(Pipelining)：把一個工作切成多個階段，讓不同指令可以重疊執行。',
          '平行處理(Parallel Processing)：同時處理多個工作。',
          '改良記憶體階層(Memory Hierarchy)：把不同速度、容量、成本的記憶體安排成層級，例如暫存器、快取、主記憶體 RAM、SSD 或硬碟。'
        ]
      }
    ]
  },
  {
    heading: '國考作答方向',
    blocks: [
      {
        kind: 'bulletList',
        items: [
          '看到「程式與資料都放在記憶體」時，要聯想到馮紐曼架構。',
          '看到「程式記憶體與資料記憶體分離」時，要聯想到哈佛架構。',
          '看到「CPU 等待記憶體傳輸資料」時，要聯想到馮紐曼瓶頸。'
        ]
      }
    ]
  }
] as const;

const turingMachineAndTestLessonSections = [
  {
    heading: '圖靈機是什麼',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '圖靈機(Turing Machine)是一種抽象的計算模型，不是一般的實體電腦。它用來描述計算最核心的過程，並研究哪些問題可以被明確的計算程序解決。'
      },
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          '資料如何被儲存。',
          '資料如何被讀取。',
          '每一步如何根據規則改變資料。',
          '什麼情況下計算會結束。'
        ]
      },
      {
        kind: 'paragraph',
        text: '圖靈機可以視為理論上的簡化模型，用來回答一個根本問題：電腦到底能不能解決某個問題？'
      }
    ]
  },
  {
    heading: '圖靈機的主要組成',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '無限長紙帶(Tape)：用來儲存輸入、輸出與計算過程中的中間結果。',
          '讀寫頭(Read/Write Head)：讀取目前格子的符號，也可以寫入符號，並向左或向右移動。',
          '有限控制器(Finite Control)：根據目前狀態與讀到的符號，決定下一步要做什麼。'
        ]
      }
    ]
  },
  {
    heading: '圖靈機如何運作',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '讀取目前格子的符號。',
          '根據目前狀態與讀到的符號查詢規則。',
          '在目前格子寫入新的符號，或保留原本的符號。',
          '讀寫頭向左或向右移動。',
          '進入下一個狀態。'
        ]
      },
      {
        kind: 'paragraph',
        text: '簡單來說，圖靈機就是不斷重複「讀取、判斷、寫入、移動、換狀態」的過程，直到符合停止條件為止。'
      }
    ]
  },
  {
    heading: '可計算是什麼',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '可計算(Computability)是指某個問題可以被一套明確的計算程序解決。用圖靈機的角度來說，如果存在一套規則，能讓圖靈機在有限步驟內完成計算並得到答案，這個問題通常就可以稱為可計算。'
      },
      {
        kind: 'orderedList',
        items: [
          '問題：具有明確輸入與輸出的任務。',
          '明確程序：可以一步一步執行的規則。',
          '有限步驟：計算過程會在某個時間點結束，不會永遠執行下去。'
        ]
      },
      {
        kind: 'paragraph',
        text: '可計算關心的不是算得快不快，而是理論上是否存在一個明確方法，可以在有限步驟內算出答案。'
      }
    ]
  },
  {
    heading: '圖靈測試',
    blocks: [
      {
        kind: 'paragraph',
        text: '圖靈測試(Turing Test)是一種用來判斷機器是否展現出類似人類智慧的測試。'
      },
      {
        kind: 'paragraph',
        text:
          '它的基本想法是：如果一位審問者只透過文字對話與兩個對象互動，其中一個是人類、另一個是機器，而審問者無法可靠分辨哪一個是機器，就可以認為該機器通過圖靈測試。'
      },
      {
        kind: 'paragraph',
        text:
          '圖靈測試重視的是機器在對話中的外在表現，而不是機器內部是否真的像人類一樣思考。因此，它比較像是在檢驗機器能不能表現得像人類，而不是直接證明機器是否真正具有意識。'
      }
    ]
  },
  {
    heading: '圖靈機與圖靈測試的差異',
    blocks: [
      {
        kind: 'table',
        headers: ['項目', '圖靈機', '圖靈測試'],
        rows: [
          ['核心問題', '什麼問題可以被計算？', '機器能否表現得像人類？'],
          ['關注重點', '計算程序與可計算性', '對話表現與智慧判斷'],
          ['性質', '理論計算模型', '人工智慧測試方法'],
          ['常見用途', '研究演算法、計算能力與計算極限', '討論機器智慧與人機互動']
        ]
      }
    ]
  }
] as const;

const machineInstructionCycleLessonSections = [
  {
    heading: '考前小抄',
    blocks: [
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          '機器指令(Machine Instruction)：CPU 可直接解讀與執行的二進位命令。',
          'Opcode：操作碼，回答「要做什麼」。',
          'Operand：運算元，回答「對誰做」，可以是資料、暫存器或位置資訊。',
          '位址欄位(Address Field)：指令中用來指出資料位置的欄位。',
          'Effective Address：有效位址，是真正要存取資料的記憶體位址。',
          'PC：下一個要取出的指令位址。',
          'IR：目前已取出的指令。',
          'Fetch：取指令。',
          'Operand Fetch：取指令要用的資料。',
          'Execute：真的做運算、跳躍、比較或 I/O。'
        ]
      }
    ]
  },
  {
    heading: '機器指令範例',
    blocks: [
      {
        kind: 'paragraph',
        text: '機器指令可以想成 CPU 看得懂的工作單。Opcode 說明動作，Operand 或位址欄位說明動作要作用在哪裡。'
      },
      {
        kind: 'table',
        headers: ['指令', '部分', '意義'],
        rows: [
          ['ADD R1, R2', 'ADD', 'Opcode，表示加法'],
          ['ADD R1, R2', 'R1、R2', 'Operand，表示要被操作的暫存器'],
          ['LOAD R1, 1000', 'LOAD', 'Opcode，表示載入'],
          ['LOAD R1, 1000', 'R1', 'Operand，表示目的暫存器'],
          ['LOAD R1, 1000', '1000', '位址欄位或位址資訊，表示資料位置可能和 1000 有關']
        ]
      },
      {
        kind: 'paragraph',
        text: '如果 Operand 指向記憶體位置，位址欄位就是用來提供或協助算出該位置的欄位；真正最後拿去存取記憶體的位置，才叫 Effective Address。'
      }
    ]
  },
  {
    heading: '指令週期怎麼理解',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '機器指令是工作單，指令週期(Instruction Cycle)是 CPU 處理工作單的固定流程。每一條指令通常會經過取指令、解碼、取資料或算位址、執行、寫回。'
      },
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          'Fetch 取指令：先把接下來要執行的指令拿進來。',
          'Decode 解碼：判斷 Opcode、指令格式與定址模式。',
          'Operand Fetch / Address Calculation 取運算元或算位址：準備要用的資料，或算出資料真正在哪裡。',
          'Execute 執行：實際做加法、比較、跳躍或 I/O 等動作。',
          'Write Back / Store 寫回：把結果放回暫存器或記憶體，並檢查是否有中斷。'
        ]
      },
      {
        kind: 'table',
        headers: ['階段', '英文', '核心問題', '常考關鍵字'],
        rows: [
          ['1. 取指令', 'Fetch', '取得接下來要執行的那一條機器指令所在位置。', 'PC、Memory、IR'],
          ['2. 解碼', 'Decode', '這條指令要做什麼？', 'Opcode、Control Unit、Addressing Mode'],
          ['3. 取運算元或算位址', 'Operand Fetch / Address Calculation', '資料在哪裡？要拿什麼資料？', 'Operand、Effective Address'],
          ['4. 執行', 'Execute', '實際做什麼動作？', 'ALU、Branch、I/O'],
          ['5. 寫回', 'Write Back / Store', '結果放去哪裡？', 'Register、Memory、Interrupt']
        ]
      }
    ]
  },
  {
    heading: '指令週期關鍵字',
    blocks: [
      {
        kind: 'table',
        headers: ['名詞', '中文', '白話意思', '例子'],
        rows: [
          ['I/O', '輸入與輸出', 'Input / Output，表示資料進出電腦系統。', '讀檔、寫檔、鍵盤輸入、螢幕輸出'],
          ['ALU', '算術邏輯單元', 'CPU 裡面負責計算與邏輯判斷的部件。', '加減乘除、AND、OR、比較大小'],
          ['Branch', '分支', '改變程式接下來要執行哪一條指令。', 'if 判斷、跳到另一個位址']
        ]
      }
    ]
  },
  {
    heading: '易混淆比較',
    blocks: [
      {
        kind: 'table',
        headers: ['比較', '左側', '右側', '差異重點'],
        rows: [
          ['Fetch vs Operand Fetch', 'Fetch：取指令本身', 'Operand Fetch：取指令要用的資料', '不要把取指令和取資料混在一起。'],
          ['PC vs IR', 'PC：下一個要取出的指令位址', 'IR：目前已取出的指令', 'PC 指向下一步，IR 暫存現在這一步。'],
          ['Decode vs Execute', 'Decode：看懂指令', 'Execute：做出動作', '解碼判斷 Opcode 與定址模式，執行才做運算、跳躍或 I/O。']
        ]
      }
    ]
  },
  {
    heading: '國考怎麼判斷',
    blocks: [
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          '題目問「CPU 可直接執行、二進位形式」：選機器指令。',
          '題目問「指出要執行的操作」：選 Opcode。',
          '題目問「被操作的資料、暫存器或位置」：選 Operand。',
          '題目問「真正要存取的記憶體位置」：選 Effective Address。',
          '題目問「下一個指令位址」：選 PC。',
          '題目問「目前取出的指令」：選 IR。',
          '題目問「取指令」：選 Fetch。',
          '題目問「實際運算或跳躍」：選 Execute。'
        ]
      }
    ]
  }
] as const;

const pipelineLessonSections = [
  {
    heading: '定義',
    blocks: [
      {
        kind: 'paragraph',
        text:
          'Pipeline（管線化）是把一條指令的執行流程拆成多個階段，讓不同指令可以在不同階段同時進行；它主要提升吞吐量，也就是單位時間完成多少指令。'
      },
      {
        kind: 'paragraph',
        text: '白話來看，管線就像把工作拆成幾站。同一個時間點，每一個管線階段只能處理一個指令。'
      },
      {
        kind: 'table',
        headers: ['縮寫', '英文', '中文', '白話作用'],
        rows: [
          ['IF', 'Instruction Fetch', '抓指令', '把下一個要執行的指令抓進來。'],
          ['ID', 'Instruction Decode', '解碼 / 讀暫存器', '看懂指令要做什麼，並讀出需要的暫存器資料。'],
          ['EX', 'Execute', '執行運算', '做運算、比較，或計算記憶體位址。'],
          ['MEM', 'Memory Access', '存取記憶體', '讀取或寫入資料記憶體。'],
          ['WB', 'Write Back', '寫回結果', '把運算結果寫回暫存器。']
        ]
      },
      {
        kind: 'paragraph',
        text: '可以理解成：5 階段 Pipeline 是把單一指令的指令週期拆成 5 格，讓不同指令同時卡在不同格子裡執行。'
      }
    ]
  },
  {
    heading: '常見公式',
    blocks: [
      {
        kind: 'paragraph',
        text: '假設有 n 個指令、k 個管線階段、每階段時間為 t，國考常用下列理想公式。'
      },
      {
        kind: 'table',
        headers: ['項目', '公式或判斷', '白話意思'],
        rows: [
          ['非管線時間', '約 n * k * t', '每一條指令都要完整走完 k 個階段，n 條就重複 n 次。'],
          ['管線時間', '約 (k + n - 1) * t', '前 k 拍先把管線填滿，之後每多一條指令大約多 1 拍。'],
          ['Speedup', '約 [n * k] / [k + n - 1]', '用非管線時間除以管線時間，表示理想上快幾倍。'],
          ['階段時間不同', '時脈通常由最慢階段決定', '管線每一拍要一起往下一格移動，最慢階段沒做完，整條管線就不能前進。']
        ]
      }
    ]
  },
  {
    heading: '管線限制',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Pipeline 提高吞吐量，不一定降低單一指令延遲。',
          '單一指令仍然要依序走完所有階段，所以「一條指令從開始到完成多久」不一定變短。',
          'Hazard 會造成 stall，實際效能通常會比理想公式差。',
          '階段時間不平均時，整體節奏會被最慢階段拖住。'
        ]
      }
    ]
  },
  {
    heading: '常見 Hazard',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Hazard（危障、冒險）是管線遇到阻礙，不能照原本節奏前進。Stall（停滯、暫停）是因為 Hazard 而插入的等待時間。'
      },
      {
        kind: 'table',
        headers: ['類型', '白話意思', '例子'],
        rows: [
          ['Structural Hazard（結構危障 / 結構冒險）', '搶硬體資源', '兩個階段同時要用同一個記憶體。'],
          ['Data Hazard（資料危障 / 資料冒險）', '等前一個結果', 'I2 要用 I1 還沒算完的結果。'],
          ['Control Hazard（控制危障 / 控制冒險）', '等分支方向', 'branch 還不知道要不要跳。']
        ]
      }
    ]
  },
  {
    heading: '最大加速比',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '理想情況下，Speedup = [n * k] / [k + n - 1]。通常討論最大加速比時，是假設指令數 n 很大，而管線階段數 k 固定、相對較小。',
          '如果是 k 個階段 Pipeline，理想最大加速比約接近 k；例如 5 階段 Pipeline，最大加速比約接近 5。',
          '實際上因為 Hazard、Stall、階段時間不平均等因素，通常會小於理想值。',
        ]
      }
    ]
  }
] as const;

const busLessonSections = [
  {
    heading: '三種匯流排',
    blocks: [
      {
        kind: 'table',
        headers: ['匯流排', '作用', '白話理解'],
        rows: [
          ['位址匯流排（Address Bus）', '傳送記憶體或 I/O 位址', '找位置。'],
          ['資料匯流排（Data Bus）', '傳送資料內容', '送內容。'],
          ['控制匯流排（Control Bus）', '傳送讀寫、中斷、時脈、確認等控制訊號', '管動作。']
        ]
      }
    ]
  },
  {
    heading: '基本計算',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'n bits 位址匯流排可產生 2^n 個位址。',
          '若每個位址代表 1 byte，則可定址空間為 2^n bytes。',
          'n bits 資料匯流排一次可傳送 n bits 的資料。'
        ]
      },
      {
        kind: 'paragraph',
        text:
          '位址匯流排決定有幾格可以被編號；每一格實際代表多少容量，要看題目說每個位址代表多少資料。資料匯流排則決定一次搬資料時，路有多寬。'
      }
    ]
  },
  {
    heading: '傳輸方向',
    blocks: [
      {
        kind: 'table',
        headers: ['匯流排', '常見方向', '原因'],
        rows: [
          ['位址匯流排', '通常 CPU 到記憶體或 I/O，單向為主', 'CPU 指定要存取哪個位置。'],
          ['資料匯流排', '雙向', '讀取時資料從記憶體回 CPU；寫入時資料從 CPU 到記憶體。'],
          ['控制匯流排', '依訊號而定，常見為雙向或多方向', 'CPU 會送出讀寫控制，裝置也可能回覆確認或中斷訊號。']
        ]
      }
    ]
  },
  {
    heading: '讀與寫',
    blocks: [
      {
        kind: 'paragraph',
        text: '讀取：CPU 給位址 + CPU 說要讀 -> 記憶體回資料。'
      },
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          '位址匯流排：CPU 透過位址匯流排送出位址。',
          '控制匯流排：CPU 透過控制匯流排送出「讀取」訊號。',
          '資料匯流排：記憶體把資料放到資料匯流排上，CPU 再接收資料。'
        ]
      },
      {
        kind: 'paragraph',
        text: '寫入：CPU 給位址 + CPU 給資料 + CPU 說要寫 -> 記憶體覆蓋成新資料。'
      },
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: [
          '位址匯流排：表示要寫到這個位置。',
          '資料匯流排：表示要寫入的內容。',
          '控制匯流排：送出寫入訊號，表示這次是寫資料。'
        ]
      }
    ]
  },
  {
    heading: '補充：記憶體範圍',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '暫存器 register：在 CPU 內部，通常不會當作外部匯流排連接的記憶體來考。',
          '快取 cache：常在 CPU 和主記憶體之間，實作上可能有內部匯流排或專用通道，但基本計概題通常不把它當作 Bus 題目的「記憶體」主角。',
          'RAM：國考講 CPU 透過位址匯流排讀寫記憶體時，通常就是指 RAM。'
        ]
      }
    ]
  }
] as const;

const performanceFormulasLessonSections = [
  {
    heading: 'CPU Time 核心公式',
    blocks: [
      {
        kind: 'paragraph',
        text: '先記一句話：CPU 執行時間 = 指令數 * 每個指令平均幾拍 * 每一拍多久。'
      },
      {
        kind: 'table',
        headers: ['題目給法', '公式'],
        rows: [
          ['給 Clock Cycle Time', 'CPU Time = Instruction Count * CPI * Clock Cycle Time'],
          ['給 Clock Rate', 'CPU Time = Instruction Count * CPI / Clock Rate']
        ]
      }
    ]
  },
  {
    heading: '名詞',
    blocks: [
      {
        kind: 'table',
        headers: ['名詞', '中文', '白話意思'],
        rows: [
          ['Clock', '時脈', 'CPU 的節拍訊號'],
          ['Clock Cycle Time', '時脈週期時間', '一拍要花多久'],
          ['Clock Rate', '時脈頻率', '一秒有幾拍'],
          ['Instruction Count', '指令數', '程式實際執行幾個機器指令'],
          ['CPI（Cycles Per Instruction）', '每指令平均週期數', '平均一個指令要幾拍'],
          ['CPU Time', 'CPU 執行時間', 'CPU 真正花多久執行程式'],
          ['MIPS（Million Instructions Per Second）', '每秒百萬指令數', '每秒執行幾百萬個指令'],
          ['Execution Time (單位是秒)', '執行時間', '執行時間'],
          ['ISA (Instruction Set Architecture)', '指令集架構', 'CPU 看得懂的機器指令規格。'],
          ['內頻', 'CPU 核心頻率', 'CPU 核心本身跑多快'],
          ['外頻', '對外或基準頻率', 'CPU 對外溝通或基準頻率'],
          ['倍頻', '把外頻放大的倍數', '把外頻放大的倍數']
        ]
      }
    ]
  },
  {
    heading: '公式',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'CPU Time = Instruction Count * CPI * Clock Cycle Time',
          'CPU Time = Instruction Count * CPI / Clock Rate',
          'MIPS = Instruction Count / (Execution Time * 10^6)',
          'MIPS = Clock Rate / (CPI * 10^6)',
          '內頻 = 外頻 * 倍頻'
        ]
      }
    ]
  },
  {
    heading: '易混淆',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Clock Rate 越高不一定越快，還要看 CPI、指令數、記憶體存取與架構。CPU Time 越小，越快。',
          'MIPS 不適合跨不同 ISA 直接比較，因為不同架構完成同一工作所需指令數不同。',
          'CPI 越高通常不是越好，CPI 越高代表平均每個指令要更多週期。',
          'Instruction Count 不是程式碼行數，而是實際執行的機器指令數。'
        ]
      }
    ]
  }
] as const;

const riscCiscLessonSections = [
  {
    heading: '指令集架構',
    blocks: [
      {
        kind: 'paragraph',
        text: '指令集架構(ISA)，是 CPU 對程式設計者或編譯器公開的「指令規則」。'
      }
    ]
  },
  {
    heading: 'RISC vs CISC',
    blocks: [
      {
        kind: 'table',
        headers: ['項目', 'RISC', 'CISC'],
        rows: [
          ['全名', 'Reduced Instruction Set Computer', 'Complex Instruction Set Computer'],
          ['指令數', '少而精簡', '多而複雜'],
          ['定址模式', '較少', '較多'],
          ['指令長度', '多為固定長度', '常為可變長度'],
          ['執行週期', '多數指令接近固定、較短', '指令可能需多個週期'],
          ['暫存器數量', '通常較多', '通常較少'],
          ['記憶體存取', 'Load/Store 架構較常見', '指令可直接操作記憶體較常見'],
          ['編譯器需求', '較需要強力 compiler 做最佳化', '硬體指令較複雜，compiler 壓力相對不同'],
          ['翻譯出的指令數', '同一高階語言動作可能較多', '同一動作可能較少'],
          ['Pipeline', '較適合', '較不易，但現代 CISC 會轉成微指令改善'],
          ['代表架構', 'ARM、MIPS、RISC-V、SPARC', 'x86、VAX']
        ]
      }
    ]
  },
  {
    heading: '名詞解釋',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'RISC，精簡指令集電腦。',
          'CISC，複雜指令集電腦。單一指令可能完成較多工作。',
          '定址模式是指 CPU 指令「找到資料位置」的方法。',
          '指令長度是指一個機器指令在記憶體中占用的位元數或位元組數，會影響解碼難易度。',
          '執行週期是指 CPU 執行一個指令大約需要多少個時脈週期。',
          '暫存器是 CPU 內部速度非常快的小型儲存空間。暫存器，可以想成 CPU 手邊的工作桌，記憶體則像比較遠的書櫃。',
          'Load/Store 架構是 RISC 常見的設計方式，常要求「先把資料搬到暫存器，再做運算，最後再存回記憶體」。CISC 則較常允許某些指令直接操作記憶體中的資料。',
          'Pipeline 中文常譯為「管線化」或「指令管線」。它的概念像工廠生產線：一個指令正在解碼時，另一個指令可以在取指令，第三個指令可能正在執行。',
          '微指令是 CPU 內部更細小的操作步驟。在現代 CISC 處理器中，外部看起來是複雜指令，但 CPU 內部可能會先把它拆成多個較簡單的微指令，再交給內部執行單元處理。'
        ]
      }
    ]
  },
  {
    heading: '考前速記小抄',
    blocks: [
      {
        kind: 'paragraph',
        text: 'RISC 記成「少、短、固、多暫存、Load/Store、好 pipeline」。'
      },
      {
        kind: 'orderedList',
        items: [
          '少：指令數較少。',
          '短：多數指令執行較短、較接近固定週期。',
          '固：指令長度多為固定。',
          '多暫存：通常有較多暫存器。',
          'Load/Store：記憶體存取主要靠 Load 與 Store，運算多在暫存器中做。',
          '好 pipeline：指令規則，較適合 pipeline。'
        ]
      },
      {
        kind: 'paragraph',
        text: 'CISC 記成「多、雜、變、可碰記憶體、硬體較複雜」。'
      },
      {
        kind: 'orderedList',
        items: [
          '多：指令數較多。',
          '雜：定址模式較多，指令功能較複雜。',
          '變：指令長度常為可變。',
          '可碰記憶體：某些指令可直接操作記憶體。',
          '硬體較複雜：解碼與控制較複雜，但現代 CISC 可用微指令改善。'
        ]
      },
      {
        kind: 'paragraph',
        text: '一定要記得：RISC 不等於一定比較快，CISC 不等於一定比較慢。效能取決於 ISA、微架構、編譯器、快取與工作負載。'
      }
    ]
  }
] as const;

const memoryHierarchyLessonSections = [
  {
    heading: 'Memory 階層方向',
    blocks: [
      {
        kind: 'paragraph',
        text: '越靠近 CPU，速度越快、容量越小、成本越高；越遠離 CPU，速度越慢、容量越大、成本越低。'
      }
    ]
  },
  {
    heading: 'Memory 階層順序',
    blocks: [
      {
        kind: 'table',
        headers: ['層級', '名稱', '速度', '容量', '內容例'],
        rows: [
          ['1', 'Register 暫存器', '最快', '最小', 'CPU 正在計算的數字'],
          ['2', 'Cache 快取記憶體', '很快', '很小', '最近常用的資料或指令'],
          ['3', 'Main Memory 主記憶體 / RAM', '中等', '較大', '正在執行的程式和資料'],
          ['4', 'SSD / HDD 輔助儲存體', '慢', '很大', '作業系統、遊戲、影片、文件'],
          ['5', '外部儲存 / 雲端 / 磁帶', '最慢', '最大', '備份資料、歷史資料、雲端檔案']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          '暫存器 Register',
          'L1 Cache -> L2 Cache -> L3 Cache',
          '主記憶體 Main Memory / RAM',
          'SSD / HDD',
          '外部儲存 External Storage'
        ]
      }
    ]
  },
  {
    heading: 'Locality（區域性）',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Cache：把近期可能會再用到的資料放近一點，讓 CPU 下次拿得更快。Cache 之所以有效，是因為程式常有「區域性」。'
      },
      {
        kind: 'paragraph',
        text: '區域性意思是：程式常常會用剛用過的資料，或用附近的資料。'
      },
      {
        kind: 'table',
        headers: ['類型', '中文', '白話判斷', '例子'],
        rows: [
          ['Temporal Locality', '時間區域性', '同一個資料很快又用一次', '迴圈一直用 `sum`'],
          ['Spatial Locality', '空間區域性', '用到某位置後，附近位置也會用', '依序讀 `a[0]`, `a[1]`, `a[2]`']
        ]
      }
    ]
  }
] as const;

const memoryClassificationLessonSections = [
  {
    heading: 'Memory 分類圖',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '依角色分類：Register 暫存器、Cache 快取、Main Memory 主記憶體、Secondary Storage 輔助記憶體。',
          '依斷電後資料是否保留分類：Volatile 揮發性、Non-volatile 非揮發性。',
          'Register 暫存器在 CPU 內部，最快、最小。',
          'Cache 快取位於 CPU 和 RAM 之間，作為高速暫存。',
          'Main Memory 主記憶體是程式執行時的工作區，通常是 RAM。',
          'Secondary Storage 輔助記憶體長期保存資料，例如 SSD / HDD / USB。'
        ]
      }
    ]
  },
  {
    heading: 'RAM vs ROM',
    blocks: [
      {
        kind: 'table',
        headers: ['項目', 'RAM', 'ROM'],
        rows: [
          ['全名', 'Random Access Memory', 'Read Only Memory'],
          ['中文', '隨機存取記憶體', '唯讀記憶體'],
          ['主要用途', '存放執行中的程式與資料', '存放韌體、開機程式'],
          ['斷電後', '通常消失', '通常保留'],
          ['讀寫特性', '可快速讀寫', '以讀取為主，部分類型可改寫'],
          ['常見例子', 'DRAM、SRAM', 'PROM、EPROM、EEPROM、Flash ROM']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'RAM：執行中、可快讀寫、斷電多消失。',
          'ROM：放韌體、放開機程式、斷電多保留。',
          'ROM 不代表永遠完全不能改；現代很多 ROM 類型可以用特定方式改寫，例如 EEPROM、Flash。'
        ]
      }
    ]
  },
  {
    heading: 'SRAM vs DRAM',
    blocks: [
      {
        kind: 'table',
        headers: ['項目', 'SRAM', 'DRAM'],
        rows: [
          ['全名', 'Static RAM', 'Dynamic RAM'],
          ['中文', '靜態隨機存取記憶體', '動態隨機存取記憶體'],
          ['儲存方式', 'flip-flop', '電容'],
          ['是否需要 refresh', '不需要', '需要'],
          ['速度', '較快', '較慢'],
          ['成本', '較高', '較低'],
          ['容量', '較小', '較大'],
          ['常見用途', 'Cache', 'Main Memory / RAM']
        ]
      },
      {
        kind: 'paragraph',
        text: 'flip-flop = 正反器 = 可以記住 1 個 bit 的小電路。'
      }
    ]
  },
  {
    heading: 'ROM 類型',
    blocks: [
      {
        kind: 'table',
        headers: ['類型', '重點', '擦除或改寫方式', '國考關鍵字'],
        rows: [
          ['PROM', '通常只能燒錄一次', '一次性燒錄', 'Program once'],
          ['EPROM', '可擦除後再燒錄', '紫外線擦除，通常整片擦除', '紫外線'],
          ['EEPROM', '可擦除與改寫', '電氣擦除，可局部改寫', '電氣、局部改寫'],
          ['Flash', 'EEPROM 的延伸', '電氣擦除，常以 block 為單位', 'SSD、USB、記憶卡']
        ]
      }
    ]
  }
] as const;

const registersLessonSections = [
  {
    heading: '名詞解釋',
    blocks: [
      {
        kind: 'paragraph',
        text: '暫存器（Register）是 CPU 內部非常小、非常快的儲存空間。它不像主記憶體那樣用來放大量資料，而是用來暫時保存 CPU 正在處理、即將使用，或需要立即判斷的資訊。'
      },
      {
        kind: 'orderedList',
        items: [
          'Program Counter（PC，程式計數器）是存放「下一個要執行指令的記憶體位址」的暫存器。當 CPU 取出一個指令後，PC 通常會更新到下一個指令的位置；若遇到跳躍指令或中斷，PC 可能會被改成新的目標位址。',
          'Instruction Register（IR，指令暫存器）是存放「目前正在解碼或執行的指令」的暫存器。CPU 從記憶體取出指令後，會把該指令放入 IR，接著控制單元才能分析這個指令要做什麼功能。',
          'Base Register（基底暫存器）是存放「程式可用記憶體區段起始位址」的暫存器。作業系統可以利用它來決定某個程式的記憶體區段從哪裡開始，並且支援記憶體保護與重定位。',
          'Limit Register（界限暫存器）是存放「程式可用區段大小或界限」的暫存器。它通常與 Base Register 搭配使用，用來檢查程式存取的記憶體位置是否超出允許範圍。',
          'Flag Register 或 Status Register（旗標暫存器或狀態暫存器）是記錄 CPU 運算結果狀態的暫存器，例如結果是否為零、是否產生進位、是否溢位、結果正負號，以及是否允許中斷。',
          'MAR（Memory Address Register，記憶體位址暫存器）是存放「要存取的記憶體位址」的暫存器。當 CPU 要從記憶體讀取資料或把資料寫入記憶體時，必須先知道目標地址，這個地址就會放在 MAR。',
          'MDR 或 MBR（Memory Data Register / Memory Buffer Register，記憶體資料暫存器或記憶體緩衝暫存器）是存放「從記憶體讀出，或準備寫入記憶體的資料」的暫存器。MAR 管地址，MDR/MBR 管資料。'
        ]
      }
    ]
  },
  {
    heading: '常見考法',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '「暫存器名稱與功能配對」。看到 Program Counter，要立刻想到下一個要執行指令的位址；看到 Instruction Register，要想到目前正在解碼或執行的指令；看到 MAR，要想到記憶體位址；看到 MDR 或 MBR，要想到記憶體資料。',
          '「取指令流程」。題目可能問 CPU 取指令時，哪個暫存器提供指令位址，哪個暫存器保存取回的指令，或哪個暫存器保存目前指令。此時可用「PC 給下一個指令位址、MAR 放要存取的位址、MDR/MBR 放讀回資料、IR 放目前指令」來解。',
          '「記憶體保護」。只要題目出現 base、limit、relocation、protection、越界檢查，就要想到 Base Register 與 Limit Register。Base Register 管起始位址，Limit Register 管大小或界限，兩者合起來限制程式能存取的記憶體範圍。',
          '「旗標意義」。Zero、Carry、Overflow、Sign、Interrupt Enable 都屬於狀態或控制相關資訊。題目若問哪個暫存器會記錄運算結果是否為零、是否進位、是否溢位，就選 Flag Register 或 Status Register。'
        ]
      }
    ]
  }
] as const;

const cacheLessonSections = [
  {
    heading: 'Cache 類別',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'L1：最靠近 CPU，最快、容量最小。',
          'L2：速度與容量居中。',
          'L3：通常多核心共享，容量較大但較慢。'
        ]
      }
    ]
  },
  {
    heading: 'Hit Ratio',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Hit（命中）：CPU 要找的資料剛好在 Cache 裡。命中時可以直接從 Cache 讀取，速度快。',
          'Miss（未命中）：資料不在 cache 中，需到下一層記憶體取。',
          'Hit Ratio（命中率） = Hit 次數 / 總存取次數。',
          'Miss Rate（未命中率）= 1 - Hit Ratio。',
          'Hit Time（命中時間） 是資料在 Cache 中命中時，從 Cache 取得資料所需的時間。它通常很短，但不是零。',
          'Miss Penalty（未命中懲罰） 是發生 Miss 後，必須到下一層記憶體取資料所多花的時間。這個時間會讓平均存取時間變長。'
        ]
      },
      {
        kind: 'paragraph',
        text: '下一層記憶體是目前 Cache 後面、離 CPU 更遠的一層；若題目簡化成一層 Cache，下一層通常就是 Main Memory / RAM。'
      }
    ]
  },
  {
    heading: 'AMAT',
    blocks: [
      {
        kind: 'paragraph',
        text: 'AMAT（Average Memory Access Time，平均記憶體存取時間） 是用來估算一次記憶體存取平均要花多久的指標。'
      },
      {
        kind: 'paragraph',
        text: 'AMAT = Hit Time + Miss Rate * Miss Penalty'
      },
      {
        kind: 'paragraph',
        text: '計算 AMAT：某系統的 Hit Time 是 2 ns，Miss Rate 是 8%，Miss Penalty 是 50 ns。求 AMAT。'
      },
      {
        kind: 'orderedList',
        items: ['先把 8% 換成 0.08。', 'AMAT = 2 + 0.08 * 50', 'AMAT = 2 + 4', 'AMAT = 6 ns']
      }
    ]
  },
  {
    heading: '寫入策略',
    blocks: [
      {
        kind: 'table',
        headers: ['策略', '意思', '好處', '缺點'],
        rows: [
          ['Write Through（寫透式）', '寫入 Cache 時，同步把資料寫回主記憶體。', 'Cache 與主記憶體資料一致性較好。', '每次寫入都要同步更新主記憶體，所以寫入速度較慢。'],
          ['Write Back（寫回式）', '先把資料寫在 Cache 中，等該 Cache 區塊將來被替換出去時，才寫回主記憶體。', '減少對主記憶體的寫入次數，效能較好。', '控制較複雜，且需要額外機制記錄資料是否已被修改。']
        ]
      }
    ]
  },
  {
    heading: '常見搭配',
    blocks: [
      {
        kind: 'table',
        headers: ['策略', '意思', '適合情況'],
        rows: [
          ['Write Allocate（寫入配置）', '發生 write miss 時，先把目標區塊載入 Cache，再對 Cache 進行寫入。', '適合後續可能還會繼續使用同一區塊的情況。'],
          ['No Write Allocate（非寫入配置）', '發生 write miss 時，不把區塊載入 Cache，而是直接寫到下一層記憶體。', '適合不希望一次寫入就占用 Cache 空間的情況。']
        ]
      }
    ]
  }
] as const;

const hazardLessonSections = [
  {
    heading: '定義',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Hazard（危障 / 冒險）是 Pipeline 中，讓指令不能照預定時脈繼續前進的情況。Hazard 本身不一定代表算錯，而是如果不處理，可能會錯或必須等待。',
          'Stall（停滯 / 停等）是 CPU 讓某些管線階段先等一下，不讓指令繼續前進。',
          'Bubble（泡泡 / 空泡）是 stall 插入的空白週期，不做有用工作，只是用來把指令錯開。',
          '白話記法：Hazard 是原因，Stall 是處理方式之一，Bubble 是 stall 造成的空白時間。'
        ]
      }
    ]
  },
  {
    heading: '三種 Hazard',
    blocks: [
      {
        kind: 'table',
        headers: ['類型', '白話意思', '看到什麼關鍵字', '常見處理'],
        rows: [
          ['Structural Hazard', '搶硬體', '同一記憶體、\n同一功能單元、\n資源不足', '增加硬體、\n分離 Instruction Cache / Data Cache、\n排程調整'],
          ['Data Hazard', '等資料', '前一指令結果、\n暫存器讀寫、\n資料相依', 'Forwarding、Stall、\nCompiler scheduling、\nRegister renaming'],
          ['Control Hazard', '不知道下一步去哪', 'branch、\njump、PC、\n分支預測', 'Branch prediction、\nFlush、\nDelayed branch、\nSpeculative execution']
        ]
      }
    ]
  },
  {
    heading: '名詞解釋',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Instruction Cache(指令快取)：放程式指令的快取。',
          'Data Cache(資料快取)：放資料的快取。',
          'Forwarding(資料前推 / 旁路傳送)：結果剛算出來，不等 WB 寫回，就先直接給下一個指令用；不一定能解決所有情況。',
          'Stall(停滯 / 停等)：如果 Forwarding 還來不及，就讓後面的指令先等，會浪費週期並降低效能。',
          'Compiler scheduling(編譯器排程)：編譯器調整指令順序，讓相依指令錯開。',
          'Register renaming(暫存器重新命名)：用不同實體暫存器避免假相依。',
          'branch(分支指令)：根據條件決定要不要跳到別的地方。',
          'jump(跳躍指令)：直接跳到指定位置繼續執行。',
          'PC(Program Counter，程式計數器)：記錄下一條要抓的指令位址。',
          'branch prediction(分支預測)：CPU 先猜 branch 會不會跳。',
          'Flush(清除管線 / 沖刷 / 清空)：把錯誤路徑的指令清掉。',
          'Delayed branch(延遲分支)：把分支後面的空檔拿來安排可執行的指令。',
          'Speculative execution(推測執行)：CPU 先推測執行，猜對就保留，猜錯就丟掉。'
        ]
      }
    ]
  },
  {
    heading: 'RAW、WAR、WAW',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Data Hazard 常見有三種。國考看到暫存器讀寫順序，就先判斷是哪一種相依。'
      },
      {
        kind: 'table',
        headers: ['類型', '全名', '白話意思'],
        rows: [
          ['RAW', 'Read After Write', '後面要讀，前面還沒寫好。'],
          ['WAR', 'Write After Read', '後面太早寫，害前面讀不到舊值。'],
          ['WAW', 'Write After Write', '兩個都要寫，寫入順序錯會出事。']
        ]
      }
    ]
  }
] as const;

const usbSpeedLessonSections = [
  {
    heading: 'USB 常見速度表',
    blocks: [
      {
        kind: 'table',
        headers: ['版本或名稱', '常見名稱', '理論速度'],
        rows: [
          ['USB 1.0 / 1.1', 'Low Speed', '1.5 Mbps'],
          ['USB 1.0 / 1.1', 'Full Speed', '12 Mbps'],
          ['USB 2.0', 'High Speed', '480 Mbps'],
          ['USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1x1', 'SuperSpeed', '5 Gbps'],
          ['USB 3.1 Gen 2 / USB 3.2 Gen 2x1', 'SuperSpeed+', '10 Gbps'],
          ['USB 3.2 Gen 2x2', 'SuperSpeed USB 20Gbps', '20 Gbps'],
          ['USB4 Gen 2x2', 'USB4 20Gbps', '20 Gbps'],
          ['USB4 Gen 3x2', 'USB4 40Gbps', '40 Gbps'],
          ['USB4 Version 2.0 / USB 80Gbps', 'USB4 80Gbps', '80 Gbps']
        ],
        rowStyles: {
          2: { text: 'emphasisText' },
          3: { text: 'emphasisText' },
          4: { text: 'emphasisText' },
          5: { text: 'emphasisText' },
          7: { text: 'emphasisText' },
          8: { text: 'emphasisText' }
        }
      }
    ]
  },
  {
    heading: 'Mbps 與 MB/s 不一樣',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'USB 規格常寫 Mbps / Gbps，這裡的小寫 b 是 bit（位元）。',
          '1 Byte = 8 bits，所以看到 byte 要記得乘除 8。',
          'MB/s 約等於 Mbps ÷ 8；GB/s 約等於 Gbps ÷ 8。'
        ]
      }
    ]
  },
  {
    heading: '看懂 Gen 1x1、2x1、2x2',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'USB 3.2 / USB4 常看到 Gen 1x1、Gen 2x1、Gen 2x2、Gen 3x2。這裡不是單純在做乘法，而是在說「每條通道速度」和「通道數」。',
          '前面的 Gen 1、Gen 2、Gen 3 可先當成每條通道的速度等級：Gen 1 約 5 Gbps，Gen 2 約 10 Gbps，Gen 3 約 20 Gbps。',
          '後面的 x1、x2 表示通道數：x1 代表 1 條通道，x2 代表 2 條通道。',
          '所以 Gen 2x2 可以讀成「每條 10 Gbps，走 2 條」，合計 20 Gbps；Gen 3x2 可以讀成「每條 20 Gbps，走 2 條」，合計 40 Gbps。'
        ]
      }
    ]
  },
  {
    heading: '備註',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '表格速度是理論速度，實際速度會受線材、控制器、協定開銷與裝置限制影響。',
          'Type-C 是接頭形狀，不保證一定是高速 USB。題目若問速度，要看 USB 版本，不只看接頭。'
        ]
      }
    ]
  }
] as const;

const baseConversionLessonSections = [
  {
    heading: '核心概念',
    blocks: [
      {
        kind: 'paragraph',
        text: '十進制是逢 10 進 1，二進制是逢 2 進 1，八進制是逢 8 進 1，十六進制是逢 16 進 1。題目寫 (1011)2，右下角的 2 表示這是二進制。'
      }
    ]
  },
  {
    heading: '十六進制字母',
    blocks: [
      {
        kind: 'table',
        headers: ['十六進制', '十進制'],
        rows: [
          ['A', '10'],
          ['B', '11'],
          ['C', '12'],
          ['D', '13'],
          ['E', '14'],
          ['F', '15']
        ]
      }
    ]
  },
  {
    heading: '轉換方法總表',
    blocks: [
      {
        kind: 'table',
        headers: ['題型', '方法', '讀取方向'],
        rows: [
          ['十進制整數轉 n 進制', '連除 n，直到商為 0，記餘數。', '餘數由下往上讀。'],
          [
            '十進制小數轉 n 進制',
            '連乘 n，每次取整數部分當答案；\n下一輪把整數部分拿掉，\n只用剩下的小數繼續乘\n（例如出現 1.xxx，就取 1、去掉 1，留下 0.xxx）。\n直到小數變成 0；若除不盡，就依題目要求取位數。',
            '每次取出的整數部分由上往下讀。'
          ],
          ['n 進制轉十進制', '位值展開。', '每位乘上基底次方後加總。'],
          ['二進制轉八進制', '每 3 bits 一組。\n整數部分：從小數點往左分組。\n小數部分：從小數點往右分組。', '不足補 0。'],
          ['二進制轉十六進制', '每 4 bits 一組。\n整數部分：從小數點往左分組。\n小數部分：從小數點往右分組。', '不足補 0。']
        ]
      }
    ]
  },
  {
    heading: '範例',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '將 (450.153)10 轉成二進制：整數 450 連除 2，餘數反讀為 111000010；小數 0.153 連乘 2，取 8 位為 00100111，所以指定精度下約為 (111000010.00100111)2。',
          '將 (450.153)10 轉成十六進制：整數 450 連除 16，得到 1C2；小數 0.153 連乘 16，取 8 位為 272B020C，所以指定精度下約為 (1C2.272B020C)16。',
          '將 (11010101.1011)2 轉八進制：整數從小數點往左每 3 bits 分組，011 010 101 = 325；小數往右分組，101 100 = 54，所以是 (325.54)8。',
          '將 (1011110010.101)2 轉十六進制：整數從小數點往左每 4 bits 分組，0010 1111 0010 = 2F2；小數往右補成 1010 = A，所以是 (2F2.A)16。',
          '將 (653.5)8 轉成二進制：每個八進制位數轉 3 bits，6=110、5=101、3=011，小數 5=101，所以是 (110101011.101)2。',
          '將 (653.5)8 轉成十六進制：先轉二進制為 110101011.101，再每 4 bits 分組，0001 1010 1011 = 1AB，小數 1010 = A，所以是 (1AB.A)16。',
          '將 (2F2.C)16 轉成二進制：每個十六進制位數轉 4 bits，2=0010、F=1111、2=0010，小數 C=1100，所以是 (1011110010.1100)2。',
          '將 (2F2.C)16 轉成八進制：先轉二進制為 0010 1111 0010.1100，再每 3 bits 分組，001 011 110 010 = 1362，小數 110 = 6，所以是 (1362.6)8。'
        ]
      }
    ]
  }
] as const;

const complementConversionLessonSections = [
  {
    heading: '核心概念',
    blocks: [
      {
        kind: 'paragraph',
        text: '補數是電腦用固定 bits 表示正負整數的方法。重點不是先做符號大小再做補數，而是同一個數字可以用不同表示法編碼。現代電腦整數通常使用 2 補數。'
      }
    ]
  },
  {
    heading: '三種表示法',
    blocks: [
      {
        kind: 'table',
        headers: ['表示法', '正數', '負數怎麼做', '是否有 +0 / -0', 'n bits 範圍'],
        rows: [
          ['符號大小（Sign-Magnitude）', '最高位 0，其餘放大小。', '最高位 1，其餘放大小。', '有', '-(2^(n-1)-1) 到 +(2^(n-1)-1)'],
          ["1 補數(1's complement)", '和一般二進位相同。', '正數全部反相。', '有', '-(2^(n-1)-1) 到 +(2^(n-1)-1)'],
          ["2 補數(2's complement)", '和一般二進位相同。', '正數反相後加 1。', '無', '-2^(n-1) 到 +(2^(n-1)-1)']
        ]
      },
      {
        kind: 'paragraph',
        text: '例：8 bits 表示 -13。+13 是 00001101；符號大小是 10001101；1 補數是 11110010；2 補數是 11110011。一般電腦整數多用 2 補數。'
      }
    ]
  },
  {
    heading: '補數備註',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '2 補數的優點是加減法可以直接用二進位加法處理；如果超出指定 bits，最左邊超出的進位丟掉。',
          'r 的補數（基數補數，如 10 補數）：N 的 r 補數為 r^n - N，其中 n 為位數。例如三位數 345 的 10 補數為 1000 - 345 = 655。',
          'r-1 的補數（減一補數，如 9 補數）：N 的 r-1 補數為 (r^n - 1) - N。例如三位數 345 的 9 補數為 999 - 345 = 654。',
          '國考若問十進位補數，通常是在問 9 補數或 10 補數；若問電腦整數表示，通常優先想到 2 補數。'
        ]
      }
    ]
  }
] as const;

const floatingPointConversionLessonSections = [
  {
    heading: 'IEEE 754 欄位',
    blocks: [
      {
        kind: 'table',
        headers: ['格式', '總長度', 'Sign', 'Exponent', 'Fraction', 'bias'],
        rows: [
          ['單精度 float', '32 bits', '1 bit', '8 bits', '23 bits', '127'],
          ['雙精度 double', '64 bits', '1 bit', '11 bits', '52 bits', '1023']
        ]
      },
      {
        kind: 'paragraph',
        text: '一般正規化 IEEE 754 數值可用 (-1)^S * 1.F * 2^(E - bias) 來看：S 決定正負，E 是指數欄位，F 是小數尾數欄位。'
      }
    ]
  },
  {
    heading: 'IEEE 754 轉換流程',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '先判斷符號位 Sign：正數為 0，負數為 1。',
          '把十進位數字轉成二進位，整數用連除，小數用連乘。',
          '把二進位寫成 1.xxxx * 2^e 的正規化形式。',
          '指數欄位 Exponent 存的是 e + bias，不是直接存 e。',
          'Fraction 欄位只放小數點後面的 bits，正規化前面的隱含 1 不寫進欄位。',
          '最後把 Sign、Exponent、Fraction 依序接起來，需要十六進位時再每 4 bits 分組。'
        ]
      }
    ]
  },
  {
    heading: '正規化(Normalization)',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '正規化就是把二進位數字改寫成 1.xxxx * 2^e。',
          '例：1010.01 可以把小數點往左移 3 位，變成 1.01001 * 2^3。',
          '如果數值小於 1，通常要把小數點往右移到第一個 1 後面，指數 e 會是負數。',
          '國考最常錯的是把 e 直接塞進 Exponent；IEEE 754 要先加 bias。'
        ]
      }
    ]
  },
  {
    heading: '十進位小數轉二進位',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '十進位小數轉二進位時，用小數部分連乘 2，每次取乘積的整數部分當下一個二進位位元。',
          '若乘積出現 1.xxx，就取出 1；下一輪把整數部分拿掉，只用剩下的小數繼續乘。',
          '例：0.625 * 2 = 1.25，取 1，剩下 0.25；0.25 * 2 = 0.5，取 0；0.5 * 2 = 1.0，取 1，所以 0.625 = 0.101。',
          '有些十進位小數轉成二進位會無限循環，例如 0.1 約為 0.0001100110011...，題目若要求取固定位數，就依題目位數截斷或四捨五入。'
        ]
      }
    ]
  },
  {
    heading: '10.25 轉 IEEE 754 單精度',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '10.25 是正數，所以 Sign = 0。',
          '10 的二進位是 1010，0.25 的二進位是 .01，所以 10.25 = 1010.01。',
          '正規化：1010.01 = 1.01001 * 2^3。',
          '單精度 bias = 127，所以 Exponent = 3 + 127 = 130 = 10000010。',
          'Fraction 只放 01001 後面補 0 到 23 bits，得到 01001000000000000000000。',
          '合併後為 0 10000010 01001000000000000000000，也就是 01000001001001000000000000000000 = 0x41240000。'
        ]
      }
    ]
  },
  {
    heading: 'IEEE 754 反推',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '先把 32 bits 切成 Sign、Exponent、Fraction 三段。',
          'Sign = 0 代表正數，Sign = 1 代表負數。',
          'Exponent 欄位轉十進位後要減 bias，得到真正的指數 e。',
          'Fraction 前面補上隱含的 1，形成 1.F。',
          '例：0x41240000 可切成 0 | 10000010 | 01001000000000000000000；Exponent 130 - 127 = 3，所以值為 +1.01001 * 2^3 = 10.25。'
        ]
      }
    ]
  },
  {
    heading: '0.1 為什麼不精確',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '十進位的 0.1 在二進位中不是有限小數，會變成 0.0001100110011... 這類循環結果。',
          'IEEE 754 的 Fraction 欄位長度有限，放不下無限循環，只能保存近似值。',
          '所以程式中的浮點數加減有時會出現很接近但不完全相等的結果，國考看到小數精度題要想到「有限 bits 只能近似」。'
        ]
      }
    ]
  },
  {
    heading: '常見陷阱',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'bias 是偏移值，不是把指數取平均；單精度用 127，雙精度用 1023。',
          'Fraction 欄位不放正規化開頭的 1，因為那個 1 是隱含位元。',
          '小數連乘若除不盡，要依題目要求的位數處理，不要硬算到變成 0。',
          '單精度與雙精度欄位長度不同，看到 32 bits 才用單精度欄位配置。'
        ]
      }
    ]
  },
  {
    heading: '考前速記',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'IEEE 754 單精度：1 / 8 / 23，bias = 127。',
          'IEEE 754 雙精度：1 / 11 / 52，bias = 1023。',
          '轉換公式：(-1)^S * 1.F * 2^(E - bias)。',
          '十進位小數轉二進位：連乘 2，取整數，去掉整數後再乘剩下的小數。'
        ]
      }
    ]
  }
] as const;

const codesAndCheckCodesLessonSections = [
  {
    heading: '定義',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '數碼：用 bits 表示數字，例如 BCD、Gray Code。',
          '文字碼：用編號表示文字，例如 ASCII、EBCDIC、Unicode、UTF-8。',
          '檢查碼：額外加檢查資訊，用來偵測或更正錯誤，例如 Parity、CRC、Hamming Code。',
          '先背一句：數碼管數字，文字碼管文字，檢查碼管有沒有錯。'
        ]
      }
    ]
  },
  {
    heading: '[總覽] 常見碼表',
    blocks: [
      {
        kind: 'table',
        headers: ['類別', '名稱', '國考關鍵字'],
        rows: [
          ['數碼', 'BCD', '一個十進位數字用 4 bits'],
          ['數碼', 'Gray Code', '相鄰碼只差 1 bit'],
          ['文字碼', 'ASCII', '標準 7 bits，128 種'],
          ['文字碼', 'EBCDIC', 'IBM、大型主機'],
          ['文字碼', 'Unicode', '統一多語言文字的碼位'],
          ['文字碼', 'UTF-8', 'Unicode 的可變長度編碼，1 到 4 bytes'],
          ['檢查碼', 'Parity Check', '奇同位、偶同位，偵測奇數個 bit 錯'],
          ['檢查碼', 'CRC', '產生多項式、模 2 除法、餘數'],
          ['檢查碼', 'Hamming Code', '檢查位、Syndrome、更正 1 bit 錯']
        ]
      }
    ]
  },
  {
    heading: 'BCD',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'BCD（Binary-Coded Decimal）是用二進位編每一個十進位數字。',
          '最常見的是 8421 BCD：第 1 個 bit 權重是 8，第 2 個 bit 權重是 4，第 3 個 bit 權重是 2，第 4 個 bit 權重是 1。',
          '單一 8421 BCD digit 的有效範圍是 0000 到 1001，也就是十進位 0 到 9。',
          '8421 BCD 要針對每一個十進位數字分開轉，再把結果組合起來。',
          '例：(259)10 轉成 8421 BCD：\n2 = 0010，5 = 0101，9 = 1001，\n所以 259 的 8421 BCD = 0010 0101 1001。'
        ]
      }
    ]
  },
  {
    heading: 'Gray Code',
    blocks: [
      {
        kind: 'subsection',
        heading: 'Gray Code 解釋與用途',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              'Gray Code 的特色是相鄰兩個碼只差 1 個 bit。',
              '常見用途是位置偵測、旋轉編碼器，以及減少狀態切換時讀錯的機率。',
              '考題看到「相鄰碼只差 1 bit」通常要想到 Gray Code。'
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: 'Binary 轉 Gray',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              '規則：\n1. 最高位不變。\n2. 其餘 Gray 位元 = 左邊 binary XOR 目前 binary。\nXOR 表示相異才為 1。',
              '例子：Binary 1011\nBinary：1 0 1 1\nGray：  1 (1 XOR 0) (0 XOR 1) (1 XOR 1)\n       = 1 1 1 0',
              '所以 Binary 1011 = Gray 1110。'
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: 'Gray 轉 Binary',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              '規則：\n1. 最高位不變。\n2. 其餘 Binary 位元 = 前一個已求出的 Binary XOR 目前 Gray。',
              '例子：Gray 1110\nGray：  1 1 1 0\nBinary：1\n下一位：1 XOR 1 = 0\n下一位：0 XOR 1 = 1\n下一位：1 XOR 0 = 1',
              '所以 Gray 1110 = Binary 1011。'
            ]
          }
        ]
      }
    ]
  },
  {
    heading: '文字碼',
    blocks: [
      {
        kind: 'table',
        headers: ['名稱', '重點', '新手提醒'],
        rows: [
          ['ASCII', '標準 7 bits，可表示 128 種編號。', '英文、數字、控制字元常見。'],
          ['Extended ASCII', '常見 8 bits，可有 256 種編號。', '128 到 255 不一定全球一致。'],
          ['EBCDIC', '8 bits，IBM 系統常見字元碼。', '看到 IBM / 大型主機想到它。'],
          ['Unicode', '統一多語言字元的碼位系統。', '是字元集 / 碼位，不是單一儲存格式。'],
          ['UTF-8', 'Unicode 的常見可變長度編碼。', '英文常 1 byte，其他文字可能 2 到 4 bytes。']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'Unicode 是「字元編號」。',
          'UTF-8 是「把 Unicode 編號存成 bytes 的方式」。',
          'UTF-8 相容 ASCII；ASCII 裡的 0 到 127，在 UTF-8 裡仍然用 1 byte 表示，而且編碼值相同。'
        ]
      }
    ]
  },
  {
    heading: 'Parity Check（同位元檢查）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Parity Check 是加一個檢查位元，讓 1 的總數符合規則。',
          '檢查位元位置由發送方與接收方事先協調好即可。',
          '奇同位、偶同位，也可以翻譯成奇校驗、偶校驗。'
        ]
      },
      {
        kind: 'table',
        headers: ['類型', '規則'],
        rows: [
          ['偶同位(Even Parity)', '加上檢查位後，1 的總數為偶數。'],
          ['奇同位(Odd Parity)', '加上檢查位後，1 的總數為奇數。']
        ]
      }
    ]
  },
  {
    heading: 'CRC',
    blocks: [
      {
        kind: 'subsection',
        heading: '一、定義與用途',
        blocks: [
          {
            kind: 'paragraph',
            text:
              'CRC（Cyclic Redundancy Check，循環冗餘檢查）常用在網路傳輸與儲存裝置。主要用來偵測錯誤，不是一般拿來更正錯誤。'
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '二、傳送與接收流程',
        blocks: [
          {
            kind: 'paragraph',
            text:
              'CRC 傳送資料前，先根據資料算出一串「檢查位元」，附加在資料後面一起傳送。接收端收到後，再重新計算一次，看結果是否正確。'
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '三、算法',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              '看生成多項式長度。ex. 1011',
              'CRC 位數 = 生成多項式長度 - 1。',
              '原資料後面補相同數量的 0。',
              '用生成多項式做模 2 除法；不用進位、不用借位，減法等於 XOR。',
              '最後餘數就是 CRC。',
              '原資料 + CRC = 實際傳送資料。',
              '接收端再除一次，餘數為 0 表示通過。'
            ]
          }
        ]
      }
    ]
  },
  {
    heading: 'Hamming Code（漢明碼）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Hamming Code 用多個「校驗位(檢查位)」來定位錯誤。',
          '校驗位 = 額外加的檢查位元；要先決定是奇校驗還是偶校驗（同位元檢查）。',
          '編碼步驟（發送端：算出要傳什麼）'
        ]
      },
      {
        kind: 'indentedGroup',
        blocks: [
          {
            kind: 'paragraph',
            text:
              '3-1. 算需要幾個校驗位 r\n公式：2^r ≥ m + r + 1（m = 資料位數）\n例：m = 4 時，r = 1 得到 2 < 6，不夠；r = 2 得到 4 < 7，不夠；r = 3 得到 8 ≥ 8，所以需要 3 個校驗位。'
          },
          {
            kind: 'paragraph',
            text:
              '3-2. 排位置（編號從左到右、從 1 開始）\n第 1、2、4、8...（2 的次方）位放校驗位 P1、P2、P4...\n其餘位置依序填原始資料。'
          },
          {
            kind: 'paragraph',
            text: 'Hamming(7,4)：7 個總位元、4 個資料位元、3 個檢查位元\n例：原始 1011'
          },
          {
            kind: 'table',
            headers: ['位置', '1', '2', '3', '4', '5', '6', '7'],
            rows: [
              ['位置 2 進制', '001', '010', '011', '100', '101', '110', '111'],
              ['內容', 'P1', 'P2', '1', 'P4', '0', '1', '1']
            ]
          },
          {
            kind: 'paragraph',
            text: '（資料 1-0-1-1 填進位置 3、5、6、7）'
          },
          {
            kind: 'paragraph',
            text: '3-3. 算每個校驗位'
          },
          {
            kind: 'indentedGroup',
            blocks: [
              {
                kind: 'paragraph',
                text:
                  'P1 檢查「位置編號轉成二進位後，最右邊是 1」的位置。ex. 1/3/5/7 位置，檢查它們全部的值，P1 要符合校驗。\nP2 檢查「位置編號轉成二進位後，最中間是 1」的位置。ex. 2/3/6/7 位置，檢查它們全部的值，P2 要符合校驗。\nP4 檢查「位置編號轉成二進位後，最左邊是 1」的位置。ex. 4/5/6/7 位置，檢查它們全部的值，P4 要符合校驗。\n此步驟可以得出全部漢明碼。'
              }
            ]
          },
          {
            kind: 'paragraph',
            text:
              '3-4. 驗證，把漢明碼的值重新檢查 P1、P2、P4 負責的範圍是否符合校驗。\n當真正資料位元出錯時，Hamming Code 可以透過校驗位 / 檢查位元找出錯誤位置，然後把那一個 bit 反轉回來，因此可以恢復原本資料。'
          }
        ]
      },
      {
        kind: 'paragraph',
        text:
          'Syndrome（症候值/症狀碼/校驗子）：\n收到資料漢明碼\n→ 重新檢查 P1、P2、P4 的範圍\n→ 檢查通過記 0，檢查失敗記 1\n→ 得到 S1、S2、S4\n→ 組成 S4 S2 S1，得到 Syndrome\n→ 轉成十進位，就是錯誤位置'
      }
    ]
  },
  {
    heading: '[必背] 漢明距',
    blocks: [
      {
        kind: 'paragraph',
        text: '漢明距（Hamming Distance）是兩個碼字不同 bit 的數量。也就是說，兩組資料中不一樣的位置有幾個，漢明距離就是幾。'
      },
      {
        kind: 'table',
        headers: ['需求', '最小漢明距'],
        rows: [
          ['偵測 d 個錯誤', 'Dmin >= d + 1'],
          ['更正 t 個錯誤', 'Dmin >= 2t + 1'],
          ['已知 Dmin，最多偵測', 'Dmin - 1'],
          ['已知 Dmin，最多更正', 'floor((Dmin - 1) / 2)']
        ]
      }
    ]
  },
  {
    heading: '考前總複習(Exam Quick Review)',
    collapsible: true,
    defaultExpanded: false,
    blocks: [
      {
        kind: 'subsection',
        heading: '常見陷阱',
        blocks: [
          {
            kind: 'table',
            headers: ['容易錯的地方', '正確觀念'],
            rows: [
              ['BCD 是把整個十進位數轉二進位', '錯，BCD 是每個十進位數字分開編。'],
              ['1010 是有效 BCD', '錯，單一 BCD 只允許 0000 到 1001。'],
              ['Binary 轉 Gray 和 Gray 轉 Binary 用同一規則', '錯，兩個方向規則不同。'],
              ['Unicode 和 UTF-8 是同一件事', '錯，Unicode 是碼位，UTF-8 是編碼方式。'],
              ['Parity 可以更正錯誤', '通常錯，Parity 多半只能偵測。'],
              ['CRC 是錯誤更正碼', '國考通常視為錯誤偵測碼。'],
              ['偵測 d 個錯誤需要 2d + 1', '錯，那是更正常見公式的型態。']
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '國考答題句',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              'BCD 是用 4 bits 表示一個十進位數字；8421 BCD 的權重為 8、4、2、1。',
              'Gray Code 的特色是相鄰碼只差 1 bit，可減少狀態轉換時的讀取錯誤。',
              '二進位轉 Gray 時最高位不變，其餘位元為相鄰二進位位元 XOR。',
              'Gray 轉二進位時最高位不變，其餘位元為前一個二進位位元 XOR 目前 Gray 位元。',
              '標準 ASCII 為 7 bits，可表示 128 種編號；延伸 ASCII 常為 8 bits。',
              'EBCDIC 是 IBM 系統常見的字元編碼。',
              'Unicode 用於統一表示多語言字元；UTF-8 是 Unicode 的常見可變長度編碼方式。',
              '同位元檢查可偵測奇數個 bit 錯誤，但通常不能定位或更正錯誤。',
              'CRC 透過產生多項式做模 2 除法取得餘數，常用於錯誤偵測。',
              '漢明碼的檢查位通常放在 1、2、4、8 等 2 的冪次位置。',
              '偵測 d 個錯誤需要最小漢明距至少 d + 1；更正 t 個錯誤需要最小漢明距至少 2t + 1。'
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '考前速記',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              'BCD：一個十進位數字用 4 bits。',
              'Gray：相鄰只差 1 bit。',
              'ASCII：標準 7 bits。',
              'EBCDIC：IBM、大型主機。',
              'Unicode：統一多語言碼位。',
              'UTF-8：Unicode 的可變長度編碼。',
              'Parity：奇偶檢查，能偵測奇數個 bit 錯。',
              'CRC：模 2 除法，餘數當檢查碼。',
              'Hamming：檢查位在 1、2、4、8。',
              '漢明距：偵測 d 要 d+1，更正 t 要 2t+1。'
            ]
          }
        ]
      }
    ]
  }
] as const;

const markdownBackedComputerPrinciplesContentById = {
  'cp-performance-formulas': {
    summary: '整理 CPU Time、Clock Rate、CPI、MIPS、Execution Time、ISA 與內頻外頻倍頻等效能名詞與常見公式。',
    sourceFiles: performanceFormulasSourceFiles,
    terms: performanceFormulasTerms,
    lead: [],
    sections: performanceFormulasLessonSections
  },
  'cp-risc-cisc': {
    summary: '整理 ISA 的白話定義，並比較 RISC 與 CISC 在指令數、定址模式、指令長度、記憶體存取與 Pipeline 上的差異。',
    sourceFiles: riscCiscSourceFiles,
    terms: riscCiscTerms,
    lead: [],
    sections: riscCiscLessonSections
  },
  'cp-memory-hierarchy': {
    summary: '整理記憶體階層的速度、容量、成本方向，五層順序，Cache L1/L2/L3 細分，以及 Temporal / Spatial Locality。',
    sourceFiles: memoryHierarchySourceFiles,
    terms: memoryHierarchyTerms,
    lead: [],
    sections: memoryHierarchyLessonSections
  },
  'cp-memory-classification': {
    summary: '整理 Memory 依角色與斷電特性的分類，RAM vs ROM、SRAM vs DRAM，以及 PROM、EPROM、EEPROM、Flash 的差異。',
    sourceFiles: memoryClassificationSourceFiles,
    terms: memoryClassificationTerms,
    lead: [],
    sections: memoryClassificationLessonSections
  },
  'cp-registers': {
    summary: '整理 CPU 內部常見暫存器，包括 PC、IR、Base、Limit、Flag/Status、MAR、MDR/MBR 與常見考法。',
    sourceFiles: registersSourceFiles,
    terms: registersTerms,
    lead: [],
    sections: registersLessonSections
  },
  'cp-cache': {
    summary: '整理 Cache L1/L2/L3、Hit/Miss/Hit Ratio、AMAT、Write Through/Write Back 與 Write Allocate/No Write Allocate。',
    sourceFiles: cacheSourceFiles,
    terms: cacheTerms,
    lead: [],
    sections: cacheLessonSections
  },
  'cp-hazard': {
    summary: '整理 Pipeline Hazard 的定義、Stall/Bubble、三種危障、Forwarding 等解法，以及 RAW/WAR/WAW 資料相依。',
    sourceFiles: hazardSourceFiles,
    terms: hazardTerms,
    lead: [],
    sections: hazardLessonSections
  },
  'cp-usb-speed': {
    summary: '整理 USB 常見版本理論速度、最常考速度列、Mbps 與 MB/s 差異，以及 Type-C 不等於高速 USB 的常見陷阱。',
    sourceFiles: usbSpeedSourceFiles,
    terms: usbSpeedTerms,
    lead: [],
    sections: usbSpeedLessonSections
  },
  'cp-base-conversion': {
    summary: '整理二進制、八進制、十進制、十六進制互轉方法，並保留八題常見進制轉換的完整計算過程。',
    sourceFiles: baseConversionSourceFiles,
    terms: baseConversionTerms,
    lead: [],
    sections: baseConversionLessonSections
  },
  'cp-complement-conversion': {
    summary: '整理符號大小、1 補數、2 補數的差異、範圍與 -13 範例，並補充 9 補數與 10 補數的十進位概念。',
    sourceFiles: complementConversionSourceFiles,
    terms: complementConversionTerms,
    lead: [],
    sections: complementConversionLessonSections
  },
  'cp-floating-point-conversion': {
    summary: '整理 IEEE 754 欄位、bias、正規化、小數連乘、10.25 單精度編碼、反推解碼與 0.1 不精確原因。',
    sourceFiles: floatingPointConversionSourceFiles,
    terms: floatingPointConversionTerms,
    lead: [],
    sections: floatingPointConversionLessonSections
  },
  'cp-codes-and-check-codes': {
    summary: '整理 BCD、Gray Code、ASCII/EBCDIC/Unicode/UTF-8、Parity Check、CRC、Hamming Code、Hamming Distance 與 Syndrome。',
    sourceFiles: codesAndCheckCodesSourceFiles,
    terms: codesAndCheckCodesTerms,
    lead: [],
    sections: codesAndCheckCodesLessonSections
  }
} as const;

type MarkdownBackedComputerPrinciplesTopicId = keyof typeof markdownBackedComputerPrinciplesContentById;

const isMarkdownBackedComputerPrinciplesTopicId = (id: string): id is MarkdownBackedComputerPrinciplesTopicId =>
  id in markdownBackedComputerPrinciplesContentById;

const createCommonUnitsTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh,
  summary: '整理 bit、byte、容量單位、b/B 差異，以及 Mbps 與 MB/s 的國考常見換算。',
  sourceBatch: 'manual-section-fill-20260613',
  sourceFiles: commonUnitsSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: commonUnitsTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: commonUnitsSourceFiles,
      sourceSection: config.sourceSection,
      lead: [],
      sections: commonUnitsLessonSections
    }
  ]
});

const createVonNeumannArchitectureTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: '整理程式與資料共用記憶體、五大單元、哈佛架構比較，以及馮紐曼瓶頸的國考重點。',
  sourceBatch: 'manual-section-fill-20260613',
  sourceFiles: vonNeumannArchitectureSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: vonNeumannArchitectureTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: vonNeumannArchitectureSourceFiles,
      sourceSection: config.sourceSection,
      lead: [],
      sections: vonNeumannArchitectureLessonSections
    }
  ]
});

const createTuringMachineAndTestTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: '整理圖靈機的抽象計算模型、主要組成、運作流程、可計算性，以及圖靈測試與兩者差異。',
  sourceBatch: 'manual-section-fill-20260613',
  sourceFiles: turingMachineAndTestSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: turingMachineAndTestTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: turingMachineAndTestSourceFiles,
      sourceSection: config.sourceSection,
      lead: [
        '圖靈機(Turing Machine)用來討論什麼問題能被"計算程序"解決；',
        '圖靈測試(Turing Test)則用來討論機器能否在對話中展現類似人類的智慧。'
      ],
      sections: turingMachineAndTestLessonSections
    }
  ]
});

const createMachineInstructionCycleTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: '整理機器指令的組成、指令週期五階段、常考關鍵字，以及 Fetch、PC、IR、Decode、Execute 等易混淆觀念。',
  sourceBatch: 'manual-section-fill-20260613',
  sourceFiles: machineInstructionCycleSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: machineInstructionCycleTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: machineInstructionCycleSourceFiles,
      sourceSection: config.sourceSection,
      lead: [
        '機器指令(Machine Instruction)是 CPU 可以直接解讀與執行的命令',
        '指令週期(Instruction Cycle)則是 CPU 執行一條指令時通常會經過的流程。'
      ],
      sections: machineInstructionCycleLessonSections
    }
  ]
});

const createPipelineTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: '整理 Pipeline 的定義、理想公式、最慢階段限制、Hazard/Stall 基本概念，以及 k 階段最大加速比。',
  sourceBatch: 'manual-section-fill-20260614',
  sourceFiles: pipelineSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: pipelineTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: pipelineSourceFiles,
      sourceSection: config.sourceSection,
      lead: [],
      sections: pipelineLessonSections
    }
  ]
});

const createBusTopic = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: config.subjectKey,
  title: config.titleZh,
  summary: '整理位址、資料、控制匯流排的用途、可定址空間計算、傳輸方向，以及 CPU 讀寫 RAM 的基本流程。',
  sourceBatch: 'manual-section-fill-20260614',
  sourceFiles: busSourceFiles,
  sourceSummary: config.sourceSection,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: busTerms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: busSourceFiles,
      sourceSection: config.sourceSection,
      lead: [
        '匯流排（Bus）是 CPU、記憶體與 I/O 之間溝通的通道。',
      ],
      sections: busLessonSections
    }
  ]
});

const createMarkdownBackedComputerPrinciplesTopic = (
  config: ProfessionalTopicSkeletonConfig & { id: MarkdownBackedComputerPrinciplesTopicId }
): ProfessionalSubjectTopic => {
  const content = markdownBackedComputerPrinciplesContentById[config.id];

  return {
    id: config.id,
    subjectKey: config.subjectKey,
    title: config.titleZh + '(' + config.titleEn + ')',
    summary: content.summary,
    sourceBatch: 'manual-section-fill-20260614',
    sourceFiles: content.sourceFiles,
    sourceSummary: config.sourceSection,
    examOutline: [],
    memoryPoints: [],
    understandingNotes: [],
    difficulty: config.difficulty,
    topicType: config.topicType,
    terms: content.terms,
    blocks: [
      {
        kind: 'lessonArticle',
        sourceFiles: content.sourceFiles,
        sourceSection: config.sourceSection,
        lead: content.lead,
        sections: content.sections
      }
    ]
  };
};

const createAlgorithmExampleTopic = (
  config: ProfessionalTopicSkeletonConfig & { id: AlgorithmExampleTopicId }
): ProfessionalSubjectTopic => {
  const content = algorithmExampleContentById[config.id];

  return {
    id: config.id,
    subjectKey: config.subjectKey,
    title: config.titleZh + '(' + config.titleEn + ')',
    summary: content.summary,
    sourceBatch: 'manual-section-fill-20260613',
    sourceFiles: algorithmExampleSourceFiles,
    sourceSummary: config.sourceSection,
    examOutline: [],
    memoryPoints: [],
    understandingNotes: [],
    difficulty: config.difficulty,
    topicType: config.topicType,
    terms: content.terms,
    blocks: [
      {
        kind: 'lessonArticle',
        sourceFiles: algorithmExampleSourceFiles,
        sourceSection: config.sourceSection,
        lead: content.lead,
        sections: content.sections
      },
      ...content.codeBlocks.map((codeBlock) => ({
        kind: 'teachingCode' as const,
        language: 'java' as const,
        title: codeBlock.title,
        description: codeBlock.description,
        code: codeBlock.code
      }))
    ]
  };
};

const createProfessionalTopicSkeleton = (config: ProfessionalTopicSkeletonConfig): ProfessionalSubjectTopic => {
  if (config.id === 'cp-common-units') {
    return createCommonUnitsTopic(config);
  }
  if (config.id === 'cp-von-neumann-architecture') {
    return createVonNeumannArchitectureTopic(config);
  }
  if (config.id === 'cp-turing-machine-and-test') {
    return createTuringMachineAndTestTopic(config);
  }
  if (config.id === 'cp-machine-instruction-cycle') {
    return createMachineInstructionCycleTopic(config);
  }
  if (config.id === 'cp-pipeline') {
    return createPipelineTopic(config);
  }
  if (config.id === 'cp-bus') {
    return createBusTopic(config);
  }
  if (isMarkdownBackedComputerPrinciplesTopicId(config.id)) {
    return createMarkdownBackedComputerPrinciplesTopic({ ...config, id: config.id });
  }
  if (isAlgorithmExampleTopicId(config.id)) {
    return createAlgorithmExampleTopic({ ...config, id: config.id });
  }

  return {
    id: config.id,
    subjectKey: config.subjectKey,
    title: config.titleZh + '(' + config.titleEn + ')',
    summary: '',
    sourceBatch: 'manual-section-skeleton-20260613',
    sourceFiles: config.sourceFiles,
    sourceSummary: config.sourceSection,
    examOutline: [],
    memoryPoints: [],
    understandingNotes: [],
    difficulty: config.difficulty,
    topicType: config.topicType,
    terms: [],
    blocks: [
      {
        kind: 'lessonArticle',
        sourceFiles: config.sourceFiles,
        sourceSection: config.sourceSection,
        lead: [],
        sections: []
      }
    ]
  };
};

const getProfessionalTopicSkeletons = (subjectKey: SubjectKey): readonly ProfessionalSubjectTopic[] => {
  const configs = professionalTopicSkeletonConfigs.filter((config) => config.subjectKey === subjectKey);
  const orderedConfigs =
    subjectKey === 'algorithms'
      ? [...configs].sort((left, right) => getAlgorithmExampleTopicRank(left.id) - getAlgorithmExampleTopicRank(right.id))
      : configs;

  return orderedConfigs.map(createProfessionalTopicSkeleton);
};

export const professionalTopicsBySubject = {
  computerPrinciples: getProfessionalTopicSkeletons('computerPrinciples'),
  networking: getProfessionalTopicSkeletons('networking'),
  informationManagement: getProfessionalTopicSkeletons('informationManagement'),
  programming: getProfessionalTopicSkeletons('programming'),
  database: getProfessionalTopicSkeletons('database'),
  algorithms: getProfessionalTopicSkeletons('algorithms'),
  english: [],
  chinese: []
} as const satisfies ProfessionalTopicsBySubject;
