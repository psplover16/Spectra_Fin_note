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
    titleEn: "Karnaugh Map Simplification",
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
    titleZh: "作業系統 1：OS 基礎概念",
    titleEn: "Operating System Basics",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / OS 基礎概念",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "cp-io-and-interrupts",
    subjectKey: "computerPrinciples",
    titleZh: "作業系統 2：I/O 中斷方式 與 硬體保護",
    titleEn: "I/O and Interrupts",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / I/O 中斷方式 與 硬體保護",
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
    titleZh: "作業系統 3-4：OS 的結構",
    titleEn: "Operating System Structure",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / OS 的結構",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "cp-process",
    subjectKey: "computerPrinciples",
    titleZh: "作業系統 3-5（上）：Process 基礎",
    titleEn: "Process",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Process 基礎",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-cpu-scheduling",
    subjectKey: "computerPrinciples",
    titleZh: "作業系統 3-5（下）：CPU 排程演算法",
    titleEn: "CPU Scheduling",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / CPU 排程演算法",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "cp-deadlock",
    subjectKey: "computerPrinciples",
    titleZh: "作業系統 3-6：Deadlock（死結）",
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
    titleZh: "作業系統 3-7：Process Communication",
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
    titleZh: "作業系統 3-8：Memory Management（記憶體管理）",
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
    titleZh: "作業系統 3-9：Virtual Memory（虛擬記憶體）",
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
    titleZh: "作業系統 3-10：Disk Management（磁碟管理）",
    titleEn: "Disk Management",
    sourceFiles: [
      "_private/計算機概論.txt"
    ],
    sourceSection: "3c. 作業系統 / Disk Management",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "networking-osi-tcpip",
    subjectKey: "networking",
    titleZh: "網路概論 1：OSI 七層 + TCP/IP ★",
    titleEn: "OSI and TCP/IP",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_1_OSI七層與TCPIP.md"
    ],
    sourceSection: "網路概論 1：OSI 七層 + TCP/IP ★",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-basics",
    subjectKey: "networking",
    titleZh: "網路概論 2：基礎概念",
    titleEn: "Networking Basics",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_2_基礎概念.md"
    ],
    sourceSection: "網路概論 2：基礎概念",
    difficulty: "intro",
    topicType: "concept"
  },
  {
    id: "networking-devices-osi",
    subjectKey: "networking",
    titleZh: "網路概論 3：網路設備對應層級",
    titleEn: "Network Devices and OSI Layers",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_3_網路設備對應層級.md"
    ],
    sourceSection: "網路概論 3：網路設備對應層級",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-ip-subnetting",
    subjectKey: "networking",
    titleZh: "網路概論 4（上）：IP 基礎 + 子網路計算 ★",
    titleEn: "IP and Subnetting",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_4上_IP與子網路計算.md"
    ],
    sourceSection: "網路概論 4（上）：IP 基礎 + 子網路計算 ★",
    difficulty: "core",
    topicType: "procedure"
  },
  {
    id: "networking-routing-l3-protocols",
    subjectKey: "networking",
    titleZh: "網路概論 4（下）：路由 + L3 協定與工具",
    titleEn: "Routing and L3 Protocols",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_4下_路由與L3協定.md"
    ],
    sourceSection: "網路概論 4（下）：路由 + L3 協定與工具",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-transport-layer",
    subjectKey: "networking",
    titleZh: "網路概論 5：傳輸層",
    titleEn: "Transport Layer",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_5_傳輸層.md"
    ],
    sourceSection: "網路概論 5：傳輸層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-application-ports",
    subjectKey: "networking",
    titleZh: "網路概論 6：應用層協定 + Port Number 對照表 ★",
    titleEn: "Application Layer and Port Numbers",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_6_應用層與Port對照.md"
    ],
    sourceSection: "網路概論 6：應用層協定 + Port Number 對照表 ★",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-physical-layer",
    subjectKey: "networking",
    titleZh: "網路概論 7（上）：實體層 + 標準速度表 ★",
    titleEn: "Physical Layer",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_7上_實體層.md"
    ],
    sourceSection: "網路概論 7（上）：實體層 + 標準速度表 ★",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-data-link-layer",
    subjectKey: "networking",
    titleZh: "網路概論 7（下）：資料鏈結層",
    titleEn: "Data Link Layer",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_7下_資料鏈結層.md"
    ],
    sourceSection: "網路概論 7（下）：資料鏈結層",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-security-crypto",
    subjectKey: "networking",
    titleZh: "網路概論 8（上）：資安觀念與加密 ★",
    titleEn: "Security Concepts and Cryptography",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_8上_資安觀念與加密.md"
    ],
    sourceSection: "網路概論 8（上）：資安觀念與加密 ★",
    difficulty: "core",
    topicType: "concept"
  },
  {
    id: "networking-defense-attacks",
    subjectKey: "networking",
    titleZh: "網路概論 8（下）：防禦設備與攻擊類型 ★",
    titleEn: "Defense Devices and Attacks",
    sourceFiles: [
      "_private/網概.txt",
      "_private/MD/網概/網路概論_8下_防禦設備與攻擊.md"
    ],
    sourceSection: "網路概論 8（下）：防禦設備與攻擊類型 ★",
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
const digitalLogicBasicsSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3b數位邏輯/一、基本邏輯_新手國考教材.md'
] as const;
const sopPosSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3b數位邏輯/二、SOP 與 POS_新手國考教材.md'
] as const;
const karnaughMapSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3b數位邏輯/三、卡諾圖化簡_新手國考教材.md'
] as const;
const universalGatesSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3b數位邏輯/四、萬用閘_新手國考教材.md'
] as const;
const combinationalSequentialCircuitsSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3b數位邏輯/五、組合與循序電路_新手國考教材.md'
] as const;
const operatingSystemBasicsSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/3-1. OS 基礎概念.md'
] as const;
const ioAndInterruptsSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/3-2. IO 中斷方式 與 硬體保護.md'
] as const;
const operatingSystemStructureSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/3-4_OS結構.md'
] as const;
const processSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-5上_Process基礎.md'
] as const;
const cpuSchedulingSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-5下_CPU排程演算法.md'
] as const;
const deadlockSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-6_Deadlock.md'
] as const;
const processCommunicationSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-7_ProcessCommunication_跳過分析.md'
] as const;
const memoryManagementSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-8_記憶體管理.md'
] as const;
const virtualMemorySourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-9_虛擬記憶體.md'
] as const;
const diskManagementSourceFiles = [
  '_private/計算機概論.txt',
  '_private/MD/計概/3c作業系統/作業系統_3-10_磁碟管理.md'
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

const digitalLogicBasicsTerms = [
  { zh: '邏輯閘', en: 'Logic Gate' },
  { zh: '真值表', en: 'Truth Table' },
  { zh: '反相', en: 'NOT' },
  { zh: '互斥或', en: 'XOR' },
  { zh: '布林代數', en: 'Boolean Algebra' },
  { zh: '德摩根定律', en: "De Morgan's Laws" }
] as const;

const sopPosTerms = [
  { zh: '乘積和', en: 'SOP' },
  { zh: '和積', en: 'POS' },
  { zh: '最小項', en: 'Minterm' },
  { zh: '最大項', en: 'Maxterm' },
  { zh: '標準形式', en: 'Canonical Form' }
] as const;

const karnaughMapTerms = [
  { zh: '卡諾圖', en: 'Karnaugh Map' },
  { zh: '格雷碼', en: 'Gray Code' },
  { zh: '相鄰格', en: 'Adjacent Cell' },
  { zh: '任意項', en: "Don't Care" },
  { zh: '最簡 SOP', en: 'Minimal SOP' }
] as const;

const universalGatesTerms = [
  { zh: '萬用閘', en: 'Universal Gate' },
  { zh: '反及閘', en: 'NAND' },
  { zh: '反或閘', en: 'NOR' },
  { zh: '德摩根定律', en: "De Morgan's Laws" },
  { zh: '閘數', en: 'Gate Count' }
] as const;

const combinationalSequentialCircuitsTerms = [
  { zh: '組合電路', en: 'Combinational Circuit' },
  { zh: '循序電路', en: 'Sequential Circuit' },
  { zh: '記憶', en: 'Memory' },
  { zh: '狀態', en: 'State' },
  { zh: '時脈', en: 'Clock' }
] as const;

const operatingSystemBasicsTerms = [
  { zh: '批次處理', en: 'Batch Processing' },
  { zh: '多元程式', en: 'Multiprogramming' },
  { zh: '分時系統', en: 'Time-sharing System' },
  { zh: '即時系統', en: 'Real-time System' },
  { zh: '分散式系統', en: 'Distributed System' },
  { zh: '並行', en: 'Concurrency' },
  { zh: '平行', en: 'Parallelism' },
  { zh: '多工排隊', en: 'Spooling' },
  { zh: '緩衝', en: 'Buffering' },
  { zh: '快取', en: 'Cache' }
] as const;

const ioAndInterruptsTerms = [
  { zh: '輪詢', en: 'Polling' },
  { zh: '中斷', en: 'Interrupt' },
  { zh: '直接記憶體存取', en: 'DMA' },
  { zh: '中斷服務程式', en: 'ISR' },
  { zh: '不可遮罩中斷', en: 'NMI' },
  { zh: '陷阱', en: 'Trap' },
  { zh: '錯誤', en: 'Fault' },
  { zh: '特權指令', en: 'Privileged Instruction' },
  { zh: '基底暫存器', en: 'Base Register' },
  { zh: '界限暫存器', en: 'Limit Register' },
  { zh: '計時器', en: 'Timer' }
] as const;

const operatingSystemStructureTerms = [
  { zh: '命令直譯器', en: 'Command Shell' },
  { zh: '系統呼叫', en: 'System Call' },
  { zh: '核心', en: 'Kernel' },
  { zh: '單核心', en: 'Monolithic Kernel' },
  { zh: '微核心', en: 'Microkernel' },
  { zh: '行程間通訊', en: 'IPC' },
  { zh: '虛擬機器', en: 'Virtual Machine' },
  { zh: '虛擬機器監視器', en: 'Hypervisor' }
] as const;

const processTerms = [
  { zh: '行程', en: 'Process' },
  { zh: '程式', en: 'Program' },
  { zh: '程式計數器', en: 'Program Counter' },
  { zh: '行程狀態', en: 'Process State' },
  { zh: '行程控制區塊', en: 'PCB' },
  { zh: '上下文切換', en: 'Context Switch' },
  { zh: '長程排程器', en: 'Long-term Scheduler' },
  { zh: '短程排程器', en: 'Short-term Scheduler' },
  { zh: '中程排程器', en: 'Medium-term Scheduler' },
  { zh: '搶佔式', en: 'Preemptive' },
  { zh: '飢餓', en: 'Starvation' },
  { zh: '老化', en: 'Aging' },
  { zh: '護航效應', en: 'Convoy Effect' }
] as const;

const cpuSchedulingTerms = [
  { zh: '週轉時間', en: 'Turnaround Time' },
  { zh: '等待時間', en: 'Waiting Time' },
  { zh: '甘特圖', en: 'Gantt Chart' },
  { zh: '先到先做', en: 'FCFS' },
  { zh: '最短工作優先', en: 'SJF' },
  { zh: '最短剩餘時間優先', en: 'SRTF' },
  { zh: '優先權排程', en: 'Priority Scheduling' },
  { zh: '輪流排程', en: 'Round Robin' },
  { zh: '時間量子', en: 'Quantum' }
] as const;

const deadlockTerms = [
  { zh: '死結', en: 'Deadlock' },
  { zh: '互斥', en: 'Mutual Exclusion' },
  { zh: '持有並等待', en: 'Hold and Wait' },
  { zh: '不可搶奪', en: 'No Preemption' },
  { zh: '循環等待', en: 'Circular Wait' },
  { zh: '預防', en: 'Prevention' },
  { zh: '避免', en: 'Avoidance' },
  { zh: '偵測與復原', en: 'Detection and Recovery' },
  { zh: '安全狀態', en: 'Safe State' },
  { zh: '銀行家演算法', en: "Banker's Algorithm" }
] as const;

const processCommunicationTerms = [
  { zh: '行程間通訊', en: 'Interprocess Communication' },
  { zh: '共享記憶體', en: 'Shared Memory' },
  { zh: '訊息傳遞', en: 'Message Passing' },
  { zh: '競爭情況', en: 'Race Condition' },
  { zh: '臨界區', en: 'Critical Section' },
  { zh: '號誌', en: 'Semaphore' },
  { zh: '互斥鎖', en: 'Mutex' },
  { zh: '生產者-消費者', en: 'Producer-Consumer' }
] as const;

const memoryManagementTerms = [
  { zh: '最先適配', en: 'First Fit' },
  { zh: '循環適配', en: 'Next Fit' },
  { zh: '最佳適配', en: 'Best Fit' },
  { zh: '最差適配', en: 'Worst Fit' },
  { zh: '外部碎裂', en: 'External Fragmentation' },
  { zh: '內部碎裂', en: 'Internal Fragmentation' },
  { zh: '緊縮', en: 'Compaction' },
  { zh: '分頁', en: 'Paging' },
  { zh: '分段', en: 'Segmentation' },
  { zh: '轉譯後備緩衝區', en: 'TLB' }
] as const;

const virtualMemoryTerms = [
  { zh: '虛擬記憶體', en: 'Virtual Memory' },
  { zh: '需求分頁', en: 'Demand Paging' },
  { zh: '分頁錯誤', en: 'Page Fault' },
  { zh: '有效記憶體存取時間', en: 'EMAT' },
  { zh: '頁面替換', en: 'Page Replacement' },
  { zh: '先進先出', en: 'FIFO' },
  { zh: '最佳置換', en: 'Optimal' },
  { zh: '最近最少使用', en: 'LRU' },
  { zh: '貝雷迪異常', en: "Belady's Anomaly" },
  { zh: '輾轉現象', en: 'Thrashing' },
  { zh: '工作集', en: 'Working Set' }
] as const;

const diskManagementTerms = [
  { zh: '磁軌', en: 'Track' },
  { zh: '磁區', en: 'Sector' },
  { zh: '磁柱', en: 'Cylinder' },
  { zh: '磁頭', en: 'Head' },
  { zh: '尋道時間', en: 'Seek Time' },
  { zh: '旋轉延遲', en: 'Rotational Latency' },
  { zh: '磁碟排程', en: 'Disk Scheduling' },
  { zh: '最短尋道優先', en: 'SSTF' },
  { zh: '電梯演算法', en: 'SCAN' },
  { zh: '檔案配置表', en: 'FAT' },
  { zh: '容錯式磁碟陣列', en: 'RAID' }
] as const;

const networkingOsiTcpipSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_1_OSI七層與TCPIP.md'] as const;
const networkingBasicsSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_2_基礎概念.md'] as const;
const networkingDevicesOsiSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_3_網路設備對應層級.md'] as const;
const networkingIpSubnettingSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_4上_IP與子網路計算.md'] as const;
const networkingRoutingL3ProtocolsSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_4下_路由與L3協定.md'] as const;
const networkingTransportLayerSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_5_傳輸層.md'] as const;
const networkingApplicationPortsSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_6_應用層與Port對照.md'] as const;
const networkingPhysicalLayerSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_7上_實體層.md'] as const;
const networkingDataLinkLayerSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_7下_資料鏈結層.md'] as const;
const networkingSecurityCryptoSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_8上_資安觀念與加密.md'] as const;
const networkingDefenseAttacksSourceFiles = ['_private/網概.txt', '_private/MD/網概/網路概論_8下_防禦設備與攻擊.md'] as const;

const networkingOsiTcpipTerms = [
  { zh: 'OSI 七層', en: 'OSI Seven-Layer Model' },
  { zh: 'TCP/IP 模型', en: 'TCP/IP Model' },
  { zh: '協定資料單元', en: 'PDU' },
  { zh: '資料鏈結層', en: 'Data Link Layer' },
  { zh: '網路層', en: 'Network Layer' },
  { zh: '傳輸層', en: 'Transport Layer' }
] as const;

const networkingBasicsTerms = [
  { zh: '區域網路', en: 'LAN' },
  { zh: '都會網路', en: 'MAN' },
  { zh: '廣域網路', en: 'WAN' },
  { zh: '主從式架構', en: 'Client-Server' },
  { zh: '點對點', en: 'P2P' },
  { zh: '無狀態', en: 'Stateless' },
  { zh: 'Cookie', en: 'Cookie' },
  { zh: 'Session', en: 'Session' }
] as const;

const networkingDevicesOsiTerms = [
  { zh: '中繼器', en: 'Repeater' },
  { zh: '集線器', en: 'Hub' },
  { zh: '橋接器', en: 'Bridge' },
  { zh: '交換器', en: 'Switch' },
  { zh: '路由器', en: 'Router' },
  { zh: '碰撞域', en: 'Collision Domain' },
  { zh: '廣播域', en: 'Broadcast Domain' },
  { zh: '虛擬區域網路', en: 'VLAN' }
] as const;

const networkingIpSubnettingTerms = [
  { zh: 'IPv4 位址', en: 'IPv4 Address' },
  { zh: '子網路遮罩', en: 'Subnet Mask' },
  { zh: 'CIDR', en: 'CIDR' },
  { zh: '網路位址', en: 'Network Address' },
  { zh: '廣播位址', en: 'Broadcast Address' },
  { zh: '可變長度子網路遮罩', en: 'VLSM' }
] as const;

const networkingRoutingL3ProtocolsTerms = [
  { zh: '靜態路由', en: 'Static Routing' },
  { zh: '動態路由', en: 'Dynamic Routing' },
  { zh: '距離向量', en: 'Distance Vector' },
  { zh: '鏈結狀態', en: 'Link State' },
  { zh: '路由資訊協定', en: 'RIP' },
  { zh: '開放最短路徑優先', en: 'OSPF' },
  { zh: '邊界閘道協定', en: 'BGP' },
  { zh: '網路位址轉換', en: 'NAT' }
] as const;

const networkingTransportLayerTerms = [
  { zh: '電路交換', en: 'Circuit Switching' },
  { zh: '封包交換', en: 'Packet Switching' },
  { zh: '傳輸控制協定', en: 'TCP' },
  { zh: '使用者資料包協定', en: 'UDP' },
  { zh: '三方交握', en: 'Three-Way Handshake' },
  { zh: '流量控制', en: 'Flow Control' },
  { zh: '壅塞控制', en: 'Congestion Control' }
] as const;

const networkingApplicationPortsTerms = [
  { zh: '周知埠', en: 'Well-Known Port' },
  { zh: '檔案傳輸協定', en: 'FTP' },
  { zh: '安全殼層', en: 'SSH' },
  { zh: '簡單郵件傳輸協定', en: 'SMTP' },
  { zh: '網域名稱系統', en: 'DNS' },
  { zh: '動態主機設定協定', en: 'DHCP' },
  { zh: '內容傳遞網路', en: 'CDN' },
  { zh: '軟體定義網路', en: 'SDN' }
] as const;

const networkingPhysicalLayerTerms = [
  { zh: '雙絞線', en: 'Twisted Pair' },
  { zh: '同軸電纜', en: 'Coaxial Cable' },
  { zh: '光纖', en: 'Fiber' },
  { zh: '無線網路', en: 'WiFi' },
  { zh: '藍牙', en: 'Bluetooth' },
  { zh: '通用序列匯流排', en: 'USB' },
  { zh: '物聯網', en: 'IoT' },
  { zh: '近場通訊', en: 'NFC' }
] as const;

const networkingDataLinkLayerTerms = [
  { zh: '訊框化', en: 'Framing' },
  { zh: '半雙工', en: 'Half-Duplex' },
  { zh: '全雙工', en: 'Full-Duplex' },
  { zh: '載波偵聽多重存取', en: 'CSMA' },
  { zh: '碰撞偵測', en: 'CSMA/CD' },
  { zh: '碰撞避免', en: 'CSMA/CA' },
  { zh: '自動重傳請求', en: 'ARQ' },
  { zh: '點對點協定', en: 'PPP' }
] as const;

const networkingSecurityCryptoTerms = [
  { zh: '機密性', en: 'Confidentiality' },
  { zh: '完整性', en: 'Integrity' },
  { zh: '可用性', en: 'Availability' },
  { zh: '對稱式加密', en: 'Symmetric Encryption' },
  { zh: '非對稱式加密', en: 'Asymmetric Encryption' },
  { zh: '雜湊', en: 'Hash' },
  { zh: '數位簽章', en: 'Digital Signature' },
  { zh: '公開金鑰基礎建設', en: 'PKI' }
] as const;

const networkingDefenseAttacksTerms = [
  { zh: '防火牆', en: 'Firewall' },
  { zh: '次世代防火牆', en: 'NGFW' },
  { zh: '網頁應用防火牆', en: 'WAF' },
  { zh: '入侵偵測系統', en: 'IDS' },
  { zh: '入侵防禦系統', en: 'IPS' },
  { zh: '非軍事區', en: 'DMZ' },
  { zh: '虛擬私人網路', en: 'VPN' },
  { zh: '端點偵測與回應', en: 'EDR' }
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

const digitalLogicBasicsLessonSections = [
  {
    heading: '常見邏輯閘(Common Logic Gates)',
    blocks: [
      {
        kind: 'table',
        headers: ['邏輯閘', '白話意思', '邏輯關係', '常見寫法'],
        rows: [
          ['AND', '全部都成立', '全為 1 才輸出 1', 'AB、A · B'],
          ['OR', '至少一個成立', '有一個 1 就輸出 1', 'A + B'],
          ['NOT', '反相', '0 與 1 對調', "A'、NOT A"],
          ['NAND', 'AND 後反相', '全為 1 才輸出 0', "(AB)'"],
          ['NOR', 'OR 後反相', '有一個 1 就輸出 0', "(A+B)'"],
          ['XOR', '互斥或', '輸入不同輸出 1', 'A ⊕ B'],
          ['XNOR', '相等判斷', '輸入相同輸出 1', "(A⊕B)'"]
        ]
      },
      {
        kind: 'paragraph',
        text:
          "XOR 可以理解成「A 有且 B 沒有」或「B 有且 A 沒有」：F = AB' + A'B，也就是 (A AND B') OR (A' AND B)。"
      },
      {
        kind: 'paragraph',
        text: "XNOR 可以理解成「兩個一樣」：F = AB + A'B'。輸入同為 0 或同為 1 時輸出 1。"
      }
    ]
  },
  {
    heading: '兩輸入真值表(Two-Input Truth Table)',
    blocks: [
      {
        kind: 'table',
        headers: ['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR'],
        revealableColumnIndexes: [2, 3, 4, 5, 6, 7],
        rows: [
          ['0', '0', '0', '0', '1', '1', '0', '1'],
          ['0', '1', '0', '1', '1', '0', '1', '0'],
          ['1', '0', '0', '1', '1', '0', '1', '0'],
          ['1', '1', '1', '1', '0', '0', '0', '1']
        ]
      },
      {
        kind: 'paragraph',
        text: '真值表就是把所有輸入組合列出來，再寫出每一列的輸出；若有 n 個輸入，真值表共有 2^n 列。'
      }
    ]
  },
  {
    heading: '布林代數常用定律(Boolean Algebra Laws)',
    blocks: [
      {
        kind: 'table',
        headers: ['定律', '公式', '新手記法'],
        rows: [
          ['恆等律', 'A + 0 = A；A · 1 = A', '加 0 不變，乘 1 不變'],
          ['零一律', 'A + 1 = 1；A · 0 = 0', 'OR 遇 1 全變 1，AND 遇 0 全變 0'],
          ['冪等律', 'A + A = A；A · A = A', '同一條件重複不會變兩倍'],
          ['互補律', "A + A' = 1；A · A' = 0", '一真一假，OR 必真，AND 必假'],
          ['交換律', 'A + B = B + A；AB = BA', '順序可交換'],
          ['結合律', '(A+B)+C = A+(B+C)', '同類運算可重新分組'],
          ['分配律', 'A(B+C) = AB + AC', 'AND 可分配到括號內'],
          ['吸收律', 'A + AB = A；A(A+B)=A', '大條件已包含小條件'],
          ['德摩根定律', "(AB)' = A' + B'；(A+B)' = A'B'", '反相穿過括號，AND/OR 對調']
        ],
        rowStyles: {
          8: { text: 'emphasisText' }
        }
      }
    ]
  }
] as const;

const sopPosLessonSections = [
  {
    heading: '用途',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '數位電路常先用真值表描述規格，再把真值表翻成 AND / OR / NOT 算式。SOP 和 POS 就是兩種常見標準寫法：真值表 -> SOP 或 POS -> 算式 -> 電路。'
      }
    ]
  },
  {
    heading: '真值表寫標準 SOP 與標準 POS',
    blocks: [
      {
        kind: 'table',
        headers: ['A', 'B', 'F'],
        rows: [
          ['0', '0', '1'],
          ['0', '1', '0'],
          ['1', '0', '1'],
          ['1', '1', '1']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          "標準 SOP 看 F = 1 的列，每一列寫成 AND 項；變數為 1 寫原樣，變數為 0 加反相，例如 (A=0,B=0) 寫 A'B'。",
          "把所有 AND 項用 OR 串起來：F = A'B' + AB' + AB。",
          "標準 POS 看 F = 0 的列，每一列寫成 OR 項；規則和 SOP 相反，變數為 1 加反相，變數為 0 寫原樣。",
          "本例只有 (A=0,B=1) 這一列為 0，所以標準 POS：F = (A + B')。"
        ]
      },
      {
        kind: 'paragraph',
        text:
          '注意：若題目明確要求「標準 SOP」或「標準 POS」，就要照指定標準形式作答；即使另一種形式比較短，也不能改答另一種。'
      }
    ]
  },
  {
    heading: '函式先建真值表',
    blocks: [
      {
        kind: 'paragraph',
        text: "遇到 F = (A + B)' + A·B 這類函式題，不要直接猜 SOP/POS；先把 A、B 的 4 種輸入代入，得到 F 欄。"
      },
      {
        kind: 'table',
        headers: ['A', 'B', 'A+B', "(A+B)'", 'A·B', 'F'],
        rows: [
          ['0', '0', '0', '1', '0', '1'],
          ['0', '1', '1', '0', '0', '0'],
          ['1', '0', '1', '0', '0', '0'],
          ['1', '1', '1', '0', '1', '1']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          "SOP 看 F = 1 的第 1、4 列：F = A'B' + AB。",
          "POS 看 F = 0 的第 2、3 列：F = (A + B')(A' + B)。",
          '函式題的關鍵是先老實建真值表，建完後流程和一般真值表題相同。'
        ]
      }
    ]
  },
  {
    heading: '三變數 SOP',
    blocks: [
      {
        kind: 'table',
        headers: ['A', 'B', 'C', 'F'],
        rows: [
          ['0', '0', '0', '0'],
          ['0', '0', '1', '1'],
          ['0', '1', '0', '0'],
          ['0', '1', '1', '1'],
          ['1', '0', '0', '1'],
          ['1', '0', '1', '0'],
          ['1', '1', '0', '0'],
          ['1', '1', '1', '0']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          "圈 F = 1 的列：(0,0,1)、(0,1,1)、(1,0,0)。",
          "每列寫 AND 項：A'B'C、A'BC、AB'C'。",
          "用 OR 串起來：F = A'B'C + A'BC + AB'C'。"
        ]
      }
    ]
  },
  {
    heading: '考前速記',
    blocks: [
      {
        kind: 'table',
        headers: ['形式', '抓哪些列', '每列寫成', '變數 = 1', '變數 = 0', '項與項之間'],
        rows: [
          ['SOP', '輸出 = 1', 'AND 項(minterm)', '原樣 A', "反相 A'", '用 OR (+)'],
          ['POS', '輸出 = 0', 'OR 項(maxterm)', "反相 A'", '原樣 A', '用 AND (·)']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'SOP 看 1，POS 看 0。',
          'SOP 與 POS 抓的列相反，變數是否反相也相反。',
          '1 多時 POS 常較短，0 多時 SOP 常較短；但題目要求標準 SOP/POS 時，仍以題目指定形式為準。'
        ]
      }
    ]
  }
] as const;

const karnaughMapLessonSections = [
  {
    heading: '用途',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '卡諾圖(K-map)是用格子與相鄰關係化簡 SOP 的工具。把 1 填進格子，圈相鄰的 1，圈越大能消掉越多變數，最後把每個圈的項用 OR 串起來。'
      },
      {
        kind: 'paragraph',
        text: '一個圈寫出來的項，只留下圈內值沒有變的變數；固定 1 寫原樣，固定 0 加反相，有變的變數丟掉。'
      }
    ]
  },
  {
    heading: '2 變數例題',
    blocks: [
      {
        kind: 'table',
        headers: ['A\\B', '0', '1'],
        rows: [
          ['0', '0', '1'],
          ['1', '0', '1']
        ]
      },
      {
        kind: 'paragraph',
        text: 'B = 1 這一欄上下兩格都是 1，可圈成 2 格；A 有變所以丟掉，B 固定為 1，所以 F = B。'
      }
    ]
  },
  {
    heading: '3 變數例題',
    blocks: [
      {
        kind: 'paragraph',
        text: '3 變數常把 A 放列，BC 放欄；BC 欄位用格雷碼 00、01、11、10 排列，讓相鄰欄只差一個 bit。'
      },
      {
        kind: 'table',
        headers: ['A\\BC', '00', '01', '11', '10'],
        rows: [
          ['0', '1', '1', '0', '0'],
          ['1', '1', '1', '1', '0']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          "圈 1：BC=00 與 BC=01 兩欄、兩個 A 列共 4 格；A 有變，C 有變，B 固定為 0，所以這圈 = B'。",
          '圈 2：A=1, BC=11 的 1 可和左邊 A=1, BC=01 重疊圈 2 格；A 固定 1，C 固定 1，B 有變，所以這圈 = AC。',
          "最後 F = B' + AC。"
        ]
      }
    ]
  },
  {
    heading: '4 變數跨邊例題',
    blocks: [
      {
        kind: 'paragraph',
        text: '4 變數常把 AB 放列、CD 放欄，而且列與欄都用格雷碼。卡諾圖的上下邊相鄰、左右邊也相鄰，所以角落可以跨邊圈。'
      },
      {
        kind: 'table',
        headers: ['AB\\CD', '00', '01', '11', '10'],
        rows: [
          ['00', '1', '0', '0', '1'],
          ['01', '0', '0', '0', '0'],
          ['11', '0', '0', '0', '0'],
          ['10', '1', '0', '0', '1']
        ]
      },
      {
        kind: 'paragraph',
        text: "四個角落跨邊圈成 4 格；A 有變、C 有變，B 固定 0、D 固定 0，所以 F = B'D'。"
      }
    ]
  },
  {
    heading: "Don't Care",
    blocks: [
      {
        kind: 'paragraph',
        text: "Don't care(X) 代表該輸入組合不會發生或結果無所謂；化簡時可當 1 也可當 0，選能讓圈更大的方式。"
      },
      {
        kind: 'table',
        headers: ['A\\BC', '00', '01', '11', '10'],
        rows: [
          ['0', '0', '1', '1', '0'],
          ['1', '0', '1', 'X', '0']
        ]
      },
      {
        kind: 'paragraph',
        text: '把 X 當成 1 後，中間 BC=01 與 BC=11 兩欄可圈成 4 格；A、B 有變，C 固定 1，所以 F = C。'
      }
    ]
  },
  {
    heading: '考前速記',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '只圈 1，X 可借來當 1；圈的格數必須是 1、2、4、8、16 等 2 的冪次。',
          '圈 2^n 格可消掉 n 個變數；圈越大，項越短。',
          '每個圈只留下值沒變的變數，固定 1 寫原樣，固定 0 加反相。',
          '可重疊、可跨邊環繞；所有的 1 都要被圈到。',
          '每個圈寫成一項，再用 OR 串起來，就是最簡 SOP。'
        ]
      }
    ]
  }
] as const;

const universalGatesLessonSections = [
  {
    heading: '概念',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'NAND 和 NOR 叫萬用閘，因為只用其中一種，就能組出 NOT、AND、OR、XOR 等邏輯閘。',
          'NAND = NOT(AND)，NOR = NOT(OR)。',
          "背後原理是德摩根定律：NOT(A·B)=A' + B'，NOT(A+B)=A'·B'。",
          '做 NOT 的萬用招：把同一個輸入接到兩個腳，例如 A NAND A 或 A NOR A。'
        ]
      }
    ]
  },
  {
    heading: '用 NAND 組各種閘',
    blocks: [
      {
        kind: 'table',
        headers: ['要做的閘', '用 NAND 的組法', '需幾個 NAND'],
        rows: [
          ['NOT', 'A NAND A', '1'],
          ['AND', '(A NAND B) 再 NAND 自己，也就是再 NOT 一次', '2'],
          ['OR', '(A NAND A) NAND (B NAND B)，先各自 NOT，再 NAND', '3'],
          ['XOR', '標準 4 閘 NAND 電路；選擇題多半記閘數', '4']
        ]
      }
    ]
  },
  {
    heading: '用 NOR 組各種閘',
    blocks: [
      {
        kind: 'table',
        headers: ['要做的閘', '用 NOR 的組法', '需幾個 NOR'],
        rows: [
          ['NOT', 'A NOR A', '1'],
          ['OR', '(A NOR B) 再 NOR 自己，也就是再 NOT 一次', '2'],
          ['AND', '(A NOR A) NOR (B NOR B)', '3'],
          ['XOR', '常見 NOR-only 實作需 5 個 NOR；選擇題可先記 5 個 NOR', '5']
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
          'NAND、NOR 都是萬用閘，單一種即可組出所有基本閘。',
          'NOT：自己 NAND 自己，或自己 NOR 自己。',
          '用 NAND：NOT 1、AND 2、OR 3、XOR 4。',
          '用 NOR：NOT 1、OR 2、AND 3、XOR 常見 5 個 NOR。',
          'NAND 偏自然做出 AND；NOR 偏自然做出 OR。'
        ]
      }
    ]
  }
] as const;

const combinationalSequentialCircuitsLessonSections = [
  {
    heading: '兩大類',
    blocks: [
      {
        kind: 'table',
        headers: ['類型', '輸出看什麼', '有沒有記憶', '常見例子'],
        rows: [
          ['組合電路', '只看當下輸入', '沒有記憶', '半加器、全加器、編碼器、解碼器、多工器、解多工器'],
          ['循序電路', '看當下輸入，也看過去狀態', '有記憶，通常配合 clock', '正反器、暫存器、計數器']
        ]
      }
    ]
  },
  {
    heading: '一句話判斷',
    blocks: [
      {
        kind: 'paragraph',
        text:
          '判斷題目時先問：這個電路需不需要記得上一刻？不需要記憶、只由當下輸入決定，就是組合電路；需要記住狀態或配合時脈，就是循序電路。'
      }
    ]
  }
] as const;

const operatingSystemBasicsLessonSections = [
  {
    heading: 'OS 分類比較表',
    blocks: [
      {
        kind: 'table',
        headers: ['類型', '定義（一句話）', '優點', '缺點', '實例'],
        rows: [
          ['批次處理 Batch', '把工作集中成一批，依序自動處理，無使用者互動', '吞吐量高、自動化', '不能互動、回應慢、除錯難', '早期主機月結帳'],
          [
            '多元程式 Multiprogramming',
            '記憶體同時放多個工作，某個在等 I/O 時 CPU 改做另一個',
            'CPU 利用率高',
            '排程、記憶體管理複雜',
            '早期多工主機'
          ],
          ['分時 Time-sharing', '把 CPU 時間切成小片，輪流給多個使用者，可即時互動', '多人互動、回應快', '切換有 overhead、需保護機制', 'UNIX、Linux'],
          ['即時 Real-time', '必須在時限內完成回應', '即時、可預測', '彈性低、設計嚴格', '硬性：飛彈/醫療；軟性：串流影音'],
          [
            '分散式 Distributed',
            '多台電腦透過網路共享資源、協同運算',
            '資源共享、可靠、易擴充',
            '複雜、依賴網路、安全議題',
            '雲端、叢集運算'
          ]
        ]
      },
      {
        kind: 'paragraph',
        text: '即時系統再細分：硬性即時錯過時限就算失敗，例如醫療、飛彈；軟性即時盡量達成即可，偶爾遲到可接受，例如影音串流。'
      }
    ]
  },
  {
    heading: 'Concurrency vs Parallelism',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'Concurrency 並行', 'Parallelism 平行'],
        rows: [
          ['一句話', '交錯處理多件事，看起來同時', '真的同時做多件事'],
          ['硬體需求', '單核 CPU 就能做，靠快速切換', '需要多核或多 CPU'],
          ['重點', '如何結構化地處理多工', '同時執行']
        ]
      },
      {
        kind: 'paragraph',
        text: '記憶鉤子：並行是一個執行單位輪流切換多件事；平行是多個執行單位真的同時做。並行不一定平行，平行通常是並行的一種實現。'
      }
    ]
  },
  {
    heading: 'Offline / Spooling / Buffering / Cache',
    blocks: [
      {
        kind: 'table',
        headers: ['技術', '定義', '為何用'],
        rows: [
          ['Offline 離線', 'I/O 不直接接 CPU，先把資料存到中間媒介', '讓慢速 I/O 與 CPU 分離，但兩者不重疊'],
          ['Spooling', '用磁碟當緩衝池，慢速裝置與 CPU 重疊作業，多個工作可排隊', 'CPU 不必空等慢速裝置，例如列印佇列'],
          ['Buffering 緩衝', '在記憶體開一塊區暫存資料', '平衡生產與消費速度差，讓 I/O 與計算重疊'],
          ['Cache 快取', '把常用資料放在更快、離 CPU 更近的儲存', '利用 locality 加速重複存取']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'Offline：完全分開、不重疊，是較早期的解法。',
          'Spooling：重疊、用整個磁碟當池子、可排隊。',
          'Buffering：用記憶體小區，平衡資料流速度。',
          'Cache：為了重複存取而加速。'
        ]
      }
    ]
  }
] as const;

const ioAndInterruptsLessonSections = [
  {
    heading: 'I/O 中斷方式：Polling / Interrupt / DMA',
    blocks: [
      {
        kind: 'paragraph',
        text: '核心問題是慢速裝置準備資料很慢，CPU 要如何知道裝置好了，以及資料由誰搬。三種做法效率一個比一個好。'
      },
      {
        kind: 'table',
        headers: ['', 'Polling 輪詢', 'Interrupt 中斷', 'DMA'],
        rows: [
          ['CPU 怎麼知道裝置好了', '自己一直問', '裝置發中斷', 'DMA 搬完才中斷'],
          ['誰搬資料', 'CPU 親自', 'CPU 親自', 'DMA 控制器'],
          ['中斷次數', '無，但一直忙碌等待', '每筆一次', '整塊只一次'],
          ['CPU 浪費', '最多', '中等', '最少'],
          ['適合', '少量、簡單', '中量、互動', '大量資料，例如磁碟/網路']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'Polling：CPU 反覆問狀態，裝置就緒後 CPU 親自搬資料，缺點是忙碌等待。',
          'Interrupt：CPU 做別的事，裝置就緒時通知 CPU；CPU 執行 ISR 後再回原工作。',
          'DMA：CPU 只設定來源、目的與大小，DMA 控制器直接搬整塊，完成後只中斷一次。',
          '一句話記：效率 Polling < Interrupt < DMA；CPU 插手程度也是 Polling 最多、DMA 最少。'
        ]
      }
    ]
  },
  {
    heading: '中斷類型',
    blocks: [
      {
        kind: 'table',
        headers: ['類型', '來源', '同步?', '例子'],
        rows: [
          ['外部－可遮罩', '外部裝置', '非同步', '鍵盤、I/O 完成、計時器'],
          ['外部－NMI', '外部嚴重事件', '非同步', '電源失效、硬體故障、記憶體錯誤'],
          ['內部－Trap', '程式故意觸發', '同步', '系統呼叫、除錯中斷點'],
          ['內部－Fault', '指令出錯', '同步', '除以零、page fault、非法指令']
        ]
      },
      {
        kind: 'paragraph',
        text: '判斷主軸：外部中斷是別人打斷，跟程式執行非同步；內部中斷是自己造成，跟目前指令同步。NMI 是緊急到不准忽略，Trap 是故意的。'
      }
    ]
  },
  {
    heading: '硬體保護',
    blocks: [
      {
        kind: 'paragraph',
        text: '多工/多人系統要防止一個程式搞壞 OS 或別人的資料。共同精神是危險動作只准 OS 在核心模式執行，硬體負責把關，出事就 trap 給 OS。'
      },
      {
        kind: 'table',
        headers: ['保護', '防止什麼', '硬體機制'],
        rows: [
          ['I/O Protection', '程式亂下 I/O 指令，搞亂裝置或偷資料', 'I/O 指令設成特權指令；使用者程式透過 system call 請 OS 代勞'],
          ['Memory Protection', '程式讀寫到別人或 OS 的記憶體', 'Base + Limit 界定合法範圍，每次存取都檢查位址'],
          ['CPU Protection', '程式無窮迴圈、霸佔 CPU 不放', 'Timer 時間到就中斷，OS 收回 CPU 重新排程']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話記法：I/O 靠特權指令，Memory 靠 Base/Limit，CPU 靠 Timer。'
      }
    ]
  }
] as const;

const operatingSystemStructureLessonSections = [
  {
    heading: 'Command（Shell）vs System Call',
    blocks: [
      {
        kind: 'paragraph',
        text: '兩者都是進入 OS 服務的入口，差別在服務對象不同：Command 給人用，System Call 給程式用。'
      },
      {
        kind: 'table',
        headers: ['', 'Command（Shell）', 'System Call'],
        rows: [
          ['是誰的介面', '人與 OS', '程式與 OS 核心'],
          ['怎麼用', '使用者打指令', '程式碼呼叫'],
          ['角色', '解讀指令、轉交 OS 執行', '請求 OS 提供服務'],
          ['例子', 'cmd、bash、ls、cd、copy', 'open()、read()、fork()、exec()']
        ]
      }
    ]
  },
  {
    heading: 'Kernel vs Microkernel',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Kernel 是 OS 最底層的核心程式，管理 CPU、記憶體、裝置、檔案等資源。單核心與微核心的差別在於核心裡塞多少 OS 服務。'
      },
      {
        kind: 'table',
        headers: ['', '單核心 Monolithic', '微核心 Microkernel'],
        rows: [
          ['核心包含', '全部 OS 服務', '只留最必要，例如 IPC、基本排程、基本記憶體'],
          ['其他服務放哪', '都在核心內', '移到核心外，當使用者層服務'],
          ['優點', '執行快、呼叫直接、效率高', '小、模組化、穩定、易擴充與移植'],
          ['缺點', '龐大，一處出錯易拖垮全系統，難維護', '服務間靠訊息傳遞，overhead 高、較慢'],
          ['例子', '傳統 UNIX、Linux', 'Mach、QNX、MINIX']
        ]
      },
      {
        kind: 'paragraph',
        text: '記憶鉤子：單核心全包、快但脆；微核心精簡、穩但慢。'
      }
    ]
  },
  {
    heading: 'Virtual Machine',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Virtual Machine 是用軟體在一台實體機器上模擬出多台獨立的虛擬電腦，每台都以為自己獨佔硬體；Hypervisor 負責分配實體資源。'
      },
      {
        kind: 'table',
        headers: ['Virtual Machine', '內容'],
        rows: [
          ['優點', '隔離性高、資源彈性分配、一機可跑多種 OS、方便測試/開發/部署'],
          ['缺點', '多一層虛擬化造成效能損耗、資源開銷大、實作較複雜'],
          ['例子', 'VMware、VirtualBox、雲端虛擬主機']
        ]
      }
    ]
  }
] as const;

const processLessonSections = [
  {
    heading: 'Process 與記憶體組成',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Process 是正在執行中的程式，是 OS 分配資源與排程的基本單位。它除了程式碼與資料，也會記錄 Program Counter 與暫存器內容。'
      },
      {
        kind: 'table',
        headers: ['部分', '裝什麼'],
        rows: [
          ['Text（程式碼段）', '程式的指令'],
          ['Data（資料段）', '全域變數'],
          ['Heap（堆積）', '執行時動態配置的記憶體，例如 malloc / new'],
          ['Stack（堆疊）', '函式呼叫的區域變數、參數、返回位址']
        ]
      }
    ]
  },
  {
    heading: 'Program vs Process',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'Program 程式', 'Process 行程'],
        rows: [
          ['狀態', '靜態，躺在硬碟的檔案', '動態，載入記憶體、執行中'],
          ['主/被動', '被動 passive', '主動 active'],
          ['有無資源/狀態', '沒有', '有自己的 PC、暫存器、記憶體、狀態']
        ]
      },
      {
        kind: 'paragraph',
        text: '同一個 program 可以同時跑成多個 process，例如開兩個記事本就是兩個 process。'
      }
    ]
  },
  {
    heading: 'Process State（狀態轉換）',
    blocks: [
      {
        kind: 'table',
        headers: ['狀態', '意思'],
        rows: [
          ['New 新建', 'process 剛被建立'],
          ['Ready 就緒', '萬事俱備，只欠 CPU，在 ready queue 排隊'],
          ['Running 執行', '正在 CPU 上跑'],
          ['Waiting / Blocked 等待', '在等 I/O 或事件，暫時不能跑'],
          ['Terminated 終止', '執行完畢']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'New → Ready：被 OS 接納。',
          'Ready → Running：被排程器選中 dispatch。',
          'Running → Ready：時間片用完，或被更高優先權搶佔。',
          'Running → Waiting：去等 I/O 或事件。',
          'Waiting → Ready：I/O 完成、事件發生。',
          'Running → Terminated：跑完。',
          '常考陷阱：沒有 Waiting → Running 直接轉換，等待結束只能先回 Ready。'
        ]
      }
    ]
  },
  {
    heading: 'PCB、排程器與 Context Switch',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Process Control Block（PCB）是 OS 為每一個 process 維護的資料結構，記錄 PID、狀態、PC、暫存器、排程資訊、記憶體資訊、開啟檔案與已用 CPU 時間。'
      },
      {
        kind: 'table',
        headers: ['排程器', '做什麼', '控制的轉換', '執行頻率'],
        rows: [
          ['長程 Long-term', '決定哪些工作從硬碟載入記憶體成為 process', 'New → Ready', '最低'],
          ['短程 Short-term', '決定 ready queue 裡哪個 process 上 CPU', 'Ready → Running', '最高'],
          ['中程 Medium-term', '記憶體太擠時 swapping，把 process 換出/換回', '記憶體 ↔ 硬碟', '中間']
        ]
      },
      {
        kind: 'paragraph',
        text: 'Context Switch 是 CPU 從一個 process 換到另一個時，先把目前狀態存進 PCB，再載入下一個 process 的 PCB。它本身是純 overhead，切換越頻繁浪費越多。'
      }
    ]
  },
  {
    heading: 'Preemptive、Starvation 與 Convoy Effect',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'Non-Preemptive 不可搶佔', 'Preemptive 可搶佔'],
        rows: [
          ['規則', '拿到 CPU 後，跑到自己主動放棄才換手', 'OS 可強制收回 CPU'],
          ['優點', '簡單、context switch 少', '回應快、公平'],
          ['缺點', '長工作會卡住後面所有人', 'context switch 多，要處理同步']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          'Starvation：某 process 一直輪不到 CPU 或資源，常見於優先權排程；解法是 Aging，等越久優先權越高。',
          'Convoy Effect：FCFS 下長工作排前面，後面短工作全被卡住；可用 SJF 或 preemptive 改善。'
        ]
      }
    ]
  }
] as const;

const cpuSchedulingLessonSections = [
  {
    heading: '公式與演算法',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '週轉時間 TAT（Turnaround Time）＝ 完成時間 − 抵達時間。',
          '等待時間 WT（Waiting Time）＝ TAT − 執行時間（Burst）。',
          '平均 ＝ 全部加總 ÷ 行程數。',
          '算題流程：照規則畫甘特圖 → 算每個行程完成時間 → 算 TAT、WT → 求平均等待與平均週轉。'
        ]
      },
      {
        kind: 'table',
        headers: ['演算法', '搶佔?', '選誰上 CPU', '重點 / 問題'],
        rows: [
          ['FCFS', '否', '先到先做', '簡單；長工作卡住短工作，可能有 convoy effect'],
          ['SJF', '否', 'Burst 最短', '非搶佔中平均等待最短；需預知 Burst、長工作可能 starvation'],
          ['SRTF', '是', '剩餘時間最短', '整體平均等待最短；切換多、可能 starvation'],
          ['Priority', '皆有', '優先權最高', '低優先權可能 starvation，可用 aging'],
          ['RR', '是', '排隊輪流，每人一個 quantum', '公平、回應快；q 太小 overhead 大，q 太大退化成 FCFS']
        ]
      }
    ]
  },
  {
    heading: 'FCFS / SJF / SRTF 共用題',
    blocks: [
      {
        kind: 'table',
        headers: ['行程', '抵達', 'Burst'],
        rows: [
          ['P1', '0', '7'],
          ['P2', '2', '4'],
          ['P3', '4', '1'],
          ['P4', '5', '4']
        ]
      },
      {
        kind: 'subsection',
        heading: 'FCFS',
        blocks: [
          {
            kind: 'paragraph',
            text: '甘特圖：P1(0-7) → P2(7-11) → P3(11-12) → P4(12-16)'
          },
          {
            kind: 'table',
            headers: ['行程', '完成', 'TAT', 'WT'],
            rows: [
              ['P1', '7', '7', '0'],
              ['P2', '11', '9', '5'],
              ['P3', '12', '8', '7'],
              ['P4', '16', '11', '7']
            ]
          },
          {
            kind: 'paragraph',
            text: '平均 WT = (0+5+7+7)/4 = 4.75；平均 TAT = (7+9+8+11)/4 = 8.75。'
          }
        ]
      },
      {
        kind: 'subsection',
        heading: 'SJF（非搶佔）',
        blocks: [
          {
            kind: 'paragraph',
            text: '甘特圖：P1(0-7) → P3(7-8) → P2(8-12) → P4(12-16)。t=7 時 P3 burst 最短；P2/P4 平手時取抵達早者。'
          },
          {
            kind: 'table',
            headers: ['行程', '完成', 'TAT', 'WT'],
            rows: [
              ['P1', '7', '7', '0'],
              ['P3', '8', '4', '3'],
              ['P2', '12', '10', '6'],
              ['P4', '16', '11', '7']
            ]
          },
          {
            kind: 'paragraph',
            text: '平均 WT = (0+3+6+7)/4 = 4.0；平均 TAT = (7+4+10+11)/4 = 8.0。'
          }
        ]
      },
      {
        kind: 'subsection',
        heading: 'SRTF（搶佔）',
        blocks: [
          {
            kind: 'paragraph',
            text: '甘特圖：P1(0-2) → P2(2-4) → P3(4-5) → P2(5-7) → P4(7-11) → P1(11-16)。每當有人抵達或做完，就重挑剩餘時間最短者。'
          },
          {
            kind: 'table',
            headers: ['行程', '完成', 'TAT', 'WT'],
            rows: [
              ['P1', '16', '16', '9'],
              ['P2', '7', '5', '1'],
              ['P3', '5', '1', '0'],
              ['P4', '11', '6', '2']
            ]
          },
          {
            kind: 'paragraph',
            text: '平均 WT = (9+1+0+2)/4 = 3.0；平均 TAT = (16+5+1+6)/4 = 7.0。'
          }
        ]
      }
    ]
  },
  {
    heading: 'Round Robin 範例',
    blocks: [
      {
        kind: 'paragraph',
        text: '時間量子 q = 2，所有行程都在 t=0 抵達，排隊順序 P1 → P2 → P3。'
      },
      {
        kind: 'table',
        headers: ['行程', 'Burst'],
        rows: [
          ['P1', '5'],
          ['P2', '3'],
          ['P3', '1']
        ]
      },
      {
        kind: 'paragraph',
        text: '甘特圖：P1(0-2) → P2(2-4) → P3(4-5) → P1(5-7) → P2(7-8) → P1(8-9)。'
      },
      {
        kind: 'table',
        headers: ['行程', '完成', 'TAT（抵達=0）', 'WT = TAT-Burst'],
        rows: [
          ['P1', '9', '9', '4'],
          ['P2', '8', '8', '5'],
          ['P3', '5', '5', '4']
        ]
      },
      {
        kind: 'paragraph',
        text: '平均 WT = (4+5+4)/3 ≈ 4.33；平均 TAT = (9+8+5)/3 ≈ 7.33。'
      }
    ]
  },
  {
    heading: '考前口訣',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'TAT = 完成 − 抵達；WT = TAT − Burst。',
          '搶佔型：SRTF、RR；Priority 也可有搶佔版。',
          '非搶佔：FCFS、SJF。',
          'RR 的 q 太小切太兇，q 太大像 FCFS。',
          'Priority 要先看題目定義，常見是數字小代表優先權高。'
        ]
      }
    ]
  }
] as const;

const deadlockLessonSections = [
  {
    heading: '死結與四個必要條件',
    blocks: [
      {
        kind: 'paragraph',
        text: '死結（Deadlock）是一組 process 互相等待對方手上的資源，結果全部卡住，誰也動不了。四個必要條件必須同時成立才可能死結；打破任一個就不會死結。'
      },
      {
        kind: 'table',
        headers: ['條件', '意思'],
        rows: [
          ['互斥 Mutual Exclusion', '資源一次只能給一個 process 用，不能共享'],
          ['持有並等待 Hold and Wait', '手上握著資源，同時又在等別的資源'],
          ['不可搶奪 No Preemption', '資源不能被強搶，只能持有者自己放掉'],
          ['循環等待 Circular Wait', '形成等待環：P1 等 P2，P2 等 P3，最後繞回 P1']
        ]
      }
    ]
  },
  {
    heading: '三種處理策略與安全狀態',
    blocks: [
      {
        kind: 'table',
        headers: ['策略', '時機', '做法', '代表 / 缺點'],
        rows: [
          ['預防 Prevention', '事前', '直接破壞四條件之一，讓死結不可能發生', '限制多、利用率低'],
          ['避免 Avoidance', '事中', '每次配置前判斷配下去是否安全', '代表是銀行家演算法；需事先知道最大需求'],
          ['偵測與復原 Detection & Recovery', '事後', '允許死結發生，定期找環，發現後再復原', '殺 process、搶資源、rollback']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          '破互斥：資源盡量設計成可共享。',
          '破持有並等待：一次拿齊全部，或拿新資源前先放掉舊的。',
          '破不可搶奪：拿不到就連手上的一起放掉。',
          '破循環等待：資源編號，規定只能依遞增順序申請。',
          '安全狀態：存在一個安全序列，能讓所有 process 依序拿到資源、跑完並釋放。安全一定不死結；不安全是可能死結。'
        ]
      }
    ]
  },
  {
    heading: "銀行家演算法（Banker's Algorithm）",
    blocks: [
      {
        kind: 'paragraph',
        text: '銀行家演算法屬於避免策略。每次有人要資源，先檢查借出去後是否仍能讓所有人順利完成；能才配，確保系統停在安全狀態。'
      },
      {
        kind: 'orderedList',
        items: [
          'Allocation：目前已配給每個 process 的資源。',
          'Max：每個 process 最多會用到的資源。',
          'Need = Max − Allocation：還差多少才能完成。',
          'Available：系統目前剩多少可配。',
          '安全演算法：Work = Available；反覆找 Need ≤ Work 的 process，假設它跑完並釋放 Allocation；全部 Finish 就安全。'
        ]
      },
      {
        kind: 'table',
        headers: ['行程', 'Allocation (A B C)', 'Max (A B C)', 'Need (A B C)'],
        rows: [
          ['P0', '0 1 0', '7 5 3', '7 4 3'],
          ['P1', '2 0 0', '3 2 2', '1 2 2'],
          ['P2', '3 0 2', '9 0 2', '6 0 0'],
          ['P3', '2 1 1', '2 2 2', '0 1 1'],
          ['P4', '0 0 2', '4 3 3', '4 3 1']
        ]
      },
      {
        kind: 'paragraph',
        text: '總資源 A=10、B=5、C=7，已配出 (7,2,5)，所以 Available = (3,3,2)。'
      },
      {
        kind: 'table',
        headers: ['順序', '挑誰', 'Need ≤ Work?', '跑完後 Work = Work + Allocation'],
        rows: [
          ['1', 'P1', '(1,2,2) ≤ (3,3,2)', '(5,3,2)'],
          ['2', 'P3', '(0,1,1) ≤ (5,3,2)', '(7,4,3)'],
          ['3', 'P0', '(7,4,3) ≤ (7,4,3)', '(7,5,3)'],
          ['4', 'P2', '(6,0,0) ≤ (7,5,3)', '(10,5,5)'],
          ['5', 'P4', '(4,3,1) ≤ (10,5,5)', '(10,5,7)']
        ]
      },
      {
        kind: 'paragraph',
        text: '結論：全部跑完，系統安全。安全序列 P1 → P3 → P0 → P2 → P4；安全序列可能不只一個，找到任一個合法序列即可。'
      }
    ]
  },
  {
    heading: '請求資源判斷',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Request ≤ Need[i]？否則是錯誤，因為要的比宣告最大需求還多。',
          'Request ≤ Available？否則資源不夠，必須等待。',
          '假裝配置：Available -= Request、Allocation[i] += Request、Need[i] -= Request。',
          '重跑安全演算法；安全才真的配，不安全就撤銷並等待。'
        ]
      }
    ]
  }
] as const;

const processCommunicationLessonSections = [
  {
    heading: '跳過分析',
    blocks: [
      {
        kind: 'paragraph',
        text: '來源筆記標註「這章我跳過」，原因是頻率低、難度高、CP 值偏低；經濟部資訊類 OS 的重點通常在排程、記憶體、虛擬記憶體、死結與磁碟。'
      },
      {
        kind: 'orderedList',
        items: [
          '頻率低：IPC/同步在經濟部出得比研究所少，不是穩定高頻。',
          '難度高：號誌、臨界區、哲學家用餐等同步題需要較多思考。',
          '部分重疊：死結、並行/平行等基礎已在其他章碰過。',
          '時間取捨：時間有限時，先把高頻計算題練熟較划算。'
        ]
      }
    ]
  },
  {
    heading: '只抓概念層級',
    blocks: [
      {
        kind: 'table',
        headers: ['IPC 模型', '重點'],
        rows: [
          ['Shared Memory 共享記憶體', '開一塊共用記憶體互相讀寫，快，但要自己處理同步'],
          ['Message Passing 訊息傳遞', '透過 OS 送收訊息，慢一點，但同步由 OS 代管、較安全']
        ]
      },
      {
        kind: 'table',
        headers: ['名詞', '意思'],
        rows: [
          ['Race condition', '多個 process 同時動共享資料，結果取決於誰先誰後，可能出錯'],
          ['Critical Section', '存取共享資料的那段程式碼，一次只能一個 process 進入'],
          ['Semaphore', '一個整數加 wait/signal 操作，用來控制進臨界區；分 binary 與 counting'],
          ['Mutex', '互斥鎖，近似 binary semaphore，把臨界區鎖起來']
        ]
      },
      {
        kind: 'paragraph',
        text: '經典同步問題只要認得名字：Producer-Consumer、Readers-Writers、Dining Philosophers；除非考古題有出，再回來補解法。'
      }
    ]
  }
] as const;

const memoryManagementLessonSections = [
  {
    heading: '四種配置法：First / Next / Best / Worst Fit',
    blocks: [
      {
        kind: 'table',
        headers: ['配置法', '挑哪個洞'],
        rows: [
          ['First Fit 最先適配', '從頭找，第一個夠大的洞'],
          ['Next Fit 循環適配', '同 First，但從上次停的位置接著找'],
          ['Best Fit 最佳適配', '夠大之中最小的洞，要找遍全部'],
          ['Worst Fit 最差適配', '最大的洞，想讓剩下的洞還夠大可用']
        ]
      },
      {
        kind: 'paragraph',
        text: '例：空洞依位址順序為 100K、500K、200K、300K、600K。需求 212K 時，夠大的是 500、300、600；First/Next 選 500K，Best 選 300K，Worst 選 600K。'
      },
      {
        kind: 'paragraph',
        text: '若需求改成 426K，夠大的洞是 500、600；First Fit 與 Best Fit 都選 500K，Worst Fit 選 600K。'
      }
    ]
  },
  {
    heading: 'Fragmentation（碎裂）',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'External 外部碎裂', 'Internal 內部碎裂'],
        rows: [
          ['問題', '空洞總量夠但散落、不連續，湊不出一塊連續空間', '配給的空間比實際需要大，多出來用不到'],
          ['發生在', '連續配置', '固定大小分配，例如分頁頁框'],
          ['例子', '三個 100K 散洞，來一個 250K 連續需求就配不了', '頁 4KB，process 需 9KB，配 3 頁後浪費 3KB'],
          ['解法', 'Compaction 合併空洞，或用 paging 免連續', '把頁/塊切小一點，但會增加管理成本']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話分辨：External 是空間夠但散；Internal 是給太多、內部用不滿。Best Fit 容易留下超小碎洞，Worst Fit 剩的洞較大。'
      }
    ]
  },
  {
    heading: 'Paging vs Segmentation',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'Paging 分頁', 'Segmentation 分段'],
        rows: [
          ['怎麼切', '固定大小的 page/frame', '大小不一，依程式邏輯切成 code、data、stack 等'],
          ['對應表', 'Page Table（頁號 → 頁框號）', 'Segment Table（base + limit）'],
          ['邏輯位址', '(頁號, 頁內偏移)', '(段號, 段內偏移)'],
          ['碎裂', '無外部碎裂，但有內部碎裂', '有外部碎裂，但無內部碎裂'],
          ['優點', '不需連續、好管理', '符合邏輯，方便以段為單位共享與保護']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話分辨：Paging 固定大小、不管意義；Segmentation 大小不一、依邏輯切。'
      }
    ]
  },
  {
    heading: 'TLB（Translation Lookaside Buffer）',
    blocks: [
      {
        kind: 'paragraph',
        text: 'TLB 是 Translation Lookaside Buffer（轉譯後備緩衝區），不是 Transaction。分頁下若每次都先查記憶體裡的 page table 再拿資料，等於兩次記憶體存取，會變慢。'
      },
      {
        kind: 'orderedList',
        items: [
          'TLB 是 CPU 內的超快小快取，存最近用過的「頁號 → 頁框號」。',
          'TLB hit：直接拿到頁框號，省掉查記憶體 page table。',
          'TLB miss：TLB 沒有，才去記憶體查 page table，並把對應放進 TLB。',
          '作用：利用 locality，減少查表的記憶體存取，加速位址轉換。'
        ]
      }
    ]
  }
] as const;

const virtualMemoryLessonSections = [
  {
    heading: 'Virtual Memory / Demand Paging / Page Fault',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Virtual Memory：讓 process 可以比實體記憶體還大；只把當下用到的部分放 RAM，其餘留在硬碟 swap。',
          'Demand Paging：真正用到某一頁時才載入，靠 page table 的 valid/invalid bit 標示頁在不在記憶體。',
          'Page Fault：要存取的頁不在記憶體時觸發；OS 從硬碟載入，必要時用 page replacement 換出一頁。',
          '影響 page fault 率的因素：frame 數量、page replacement 演算法、程式 locality。'
        ]
      }
    ]
  },
  {
    heading: 'EMAT（Effective Memory Access Time）',
    blocks: [
      {
        kind: 'paragraph',
        text: '公式：EMAT = (1 − p) × ma + p × fault 時間。p 是 page fault 機率，ma 是記憶體存取時間。'
      },
      {
        kind: 'paragraph',
        text: '範例：ma = 200 ns，fault 時間 = 8 ms = 8,000,000 ns，p = 0.001。EMAT = 0.999×200 + 0.001×8,000,000 = 199.8 + 8,000 = 8,199.8 ns。'
      },
      {
        kind: 'paragraph',
        text: '反推題：若 EMAT ≤ 220 ns，則 220 ≥ 200 + 7,999,800p，所以 p ≤ 20 ÷ 7,999,800 ≈ 2.5×10^-6。page fault 很貴，低機率也會讓效能大幅下降。'
      }
    ]
  },
  {
    heading: 'Page Replacement',
    blocks: [
      {
        kind: 'table',
        headers: ['演算法', '換出誰', '特點'],
        rows: [
          ['FIFO', '最早載入的頁', "簡單；會有 Belady's Anomaly"],
          ['Optimal（OPT）', '未來最久才會用到的頁', 'fault 最少，但需預知未來，無法實作，只當標竿'],
          ['LRU', '最久沒被用到的頁', '近似 Optimal、效果好；無 Belady 異常']
        ]
      },
      {
        kind: 'paragraph',
        text: '例：參考字串 A B C A B D A B E，3 個 frame。FIFO = 7 次 fault；OPT = 5 次 fault；LRU = 5 次 fault。'
      },
      {
        kind: 'paragraph',
        text: "Belady's Anomaly：FIFO 可能 frame 變多但 fault 反而增加。經典字串 1 2 3 4 1 2 5 1 2 3 4 5，用 FIFO 時 3 個 frame 是 9 次 fault，4 個 frame 是 10 次 fault。"
      }
    ]
  },
  {
    heading: 'Thrashing（輾轉現象）',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Thrashing 是系統花在換頁 swap in/out 的時間比真正執行還多，CPU 一直處理 page fault，實際工作做很少，效能崩潰。'
      },
      {
        kind: 'orderedList',
        items: [
          '發生原因：multiprogramming 太高，每個 process 分到的 frame 太少，page fault 暴增。',
          '惡性循環：CPU 利用率下降，OS 誤以為要再多塞 process，導致每人 frame 更少、fault 更多。',
          'Working Set Model：追蹤每個 process 最近用到的頁集合，確保有足夠 frame。',
          'Page Fault Frequency（PFF）：監控 fault 率，太高就多給 frame 或降低 multiprogramming，太低可收回 frame。'
        ]
      }
    ]
  }
] as const;

const diskManagementLessonSections = [
  {
    heading: '磁碟結構與存取時間',
    blocks: [
      {
        kind: 'paragraph',
        text: '結構名詞：Track 是磁軌，Sector 是磁區，Cylinder 是同半徑磁軌集合，Head 是磁頭。'
      },
      {
        kind: 'table',
        headers: ['項目', '意思'],
        rows: [
          ['Seek Time 尋道時間', '磁頭移到目標磁軌的時間，通常最大、最關鍵'],
          ['Rotational Latency 旋轉延遲', '碟片轉到目標磁區到磁頭下的時間'],
          ['Transfer Time 傳輸時間', '實際讀寫資料的時間']
        ]
      },
      {
        kind: 'paragraph',
        text: '存取時間 = Seek Time + Rotational Latency + Transfer Time。平均旋轉延遲 = 1/2 × (60 ÷ RPM)。例如 7200 RPM：一圈 60/7200 = 8.33 ms，平均半圈約 4.17 ms。'
      }
    ]
  },
  {
    heading: 'Disk Scheduling',
    blocks: [
      {
        kind: 'paragraph',
        text: '目標是減少磁頭移動總距離（seek time）。共用設定：磁碟 0-199；請求佇列 98, 183, 37, 122, 14, 124, 65, 67；磁頭從 53 出發；方向往大的朝 199。'
      },
      {
        kind: 'table',
        headers: ['演算法', '服務路徑', '總移動距離'],
        rows: [
          ['FCFS', '53→98→183→37→122→14→124→65→67', '640'],
          ['SSTF', '53→65→67→37→14→98→122→124→183', '236'],
          ['SCAN', '53→199→14', '331'],
          ['C-SCAN', '53→199→0→37', '382'],
          ['LOOK', '53→183→14', '299'],
          ['C-LOOK', '53→183→14→37', '322']
        ]
      },
      {
        kind: 'table',
        headers: ['演算法', '規則', '問題'],
        rows: [
          ['FCFS', '照順序', '移動通常最多'],
          ['SSTF', '最近的先', '遠的可能 starvation'],
          ['SCAN', '走到底再回頭，像電梯', '答案看起始方向'],
          ['C-SCAN', '走到底跳回起點，單向服務', '等待時間更均勻'],
          ['LOOK / C-LOOK', '同 SCAN/C-SCAN，但只走到最後一個請求，不到底', '比 SCAN 家族更省移動']
        ]
      }
    ]
  },
  {
    heading: '檔案配置法',
    blocks: [
      {
        kind: 'table',
        headers: ['配置法', '怎麼存', '隨機存取', '外部碎裂', '易成長?', '備註'],
        rows: [
          ['Continuous', '佔用連續區塊', '快', '有', '難', '存取快、簡單'],
          ['Linked', '每塊用指標指向下一塊', '慢', '無', '易', '指標佔空間；一塊壞後面可能失聯'],
          ['Indexed', '每檔一個索引區塊記所有區塊位址', '快', '無', '易', '索引區塊佔空間，小檔可能浪費'],
          ['FAT', '把指標集中到一張表', '改善', '無', '易', 'linked 的改良，FAT16/32 基礎']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話：連續快但難成長且有外部碎裂；鏈結易成長但隨機存取慢；索引與 FAT 較能兼顧隨機存取又無外部碎裂。'
      }
    ]
  },
  {
    heading: 'RAID 比較',
    blocks: [
      {
        kind: 'paragraph',
        text: 'RAID（容錯式磁碟陣列）把多顆硬碟組成陣列，提升效能（平行）和/或可靠性（冗餘）。'
      },
      {
        kind: 'table',
        headers: ['RAID', '技術', '容錯', '容量利用', '特點'],
        rows: [
          ['0', 'Striping 分條', '無，一顆壞全毀', '100%', '最快、最不安全'],
          ['1', 'Mirroring 鏡像', '可靠，有完整複本', '50%', '可靠但成本高'],
          ['5', '分條 + 分散式 parity', '容忍 1 顆壞', '(n-1)/n', '效能、容量、可靠平衡；至少 3 顆'],
          ['6', '分條 + 雙 parity', '容忍 2 顆壞', '(n-2)/n', '更可靠；至少 4 顆'],
          ['10（1+0）', '鏡像 + 分條', '可靠', '50%', '又快又可靠、最貴']
        ]
      },
      {
        kind: 'paragraph',
        text: '最常考 0/1/5：RAID 0 拚速度沒保護，RAID 1 鏡像最可靠，RAID 5 是分散 parity、容忍一顆壞的平衡方案。'
      }
    ]
  }
] as const;

const networkingOsiTcpipLessonSections = [
  {
    heading: '一、為什麼先學 OSI（用途）　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: 'OSI 七層是網路概念的地圖：協定、設備與名詞都能用「在哪一層、做什麼」歸位。OSI 由第 7 層應用層往下到第 1 層實體層，越上層越靠近使用者，越下層越靠近硬體。'
      }
    ]
  },
  {
    heading: '二、七層總表（核心，務必熟）',
    blocks: [
      {
        kind: 'table',
        headers: ['層', '名稱', '職責（做什麼）【理解】', '傳輸單位 PDU', '常見協定', '常見設備'],
        rows: [
          ['7', '應用層 Application', '提供網路服務，如網頁、郵件、檔案、名稱解析', 'Data', 'HTTP、HTTPS、FTP、SMTP、POP3、IMAP、DNS、DHCP、SNMP、Telnet', 'Gateway'],
          ['6', '表現層 Presentation', '資料格式轉換、加解密、壓縮', 'Data', 'SSL/TLS、JPEG、MPEG、ASCII', '無特定設備'],
          ['5', '會議層 Session', '建立、管理、結束兩端會議', 'Data', 'NetBIOS、RPC', '無特定設備'],
          ['4', '傳輸層 Transport', '端到端傳輸、可靠性、流量控制、分段重組，用 port 區分應用', 'Segment / Datagram', 'TCP、UDP', 'Gateway、L4 Switch'],
          ['3', '網路層 Network', 'IP 邏輯定址、路由選路、封包轉送', 'Packet', 'IP、ICMP、IGMP、IPSec、RIP/OSPF/BGP', 'Router、L3 Switch'],
          ['2', '資料鏈結層 Data Link', 'MAC 實體定址、同網段訊框傳遞、錯誤偵測', 'Frame', 'Ethernet、PPP、HDLC', 'Switch(L2)、Bridge、NIC'],
          ['1', '實體層 Physical', '傳輸原始 bit，定義電氣、機械、接頭、纜線與訊號', 'Bit', 'RS-232、纜線標準', 'Hub、Repeater、Cable']
        ]
      }
    ]
  },
  {
    heading: '三、PDU（傳輸單位）速記　【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: '由下到上：Bit 位元 → Frame 訊框 → Packet 封包 → Segment（TCP）/ Datagram（UDP）→ Data 資料。'
      },
      {
        kind: 'table',
        headers: ['層', 'L1', 'L2', 'L3', 'L4', 'L5-7'],
        rows: [['單位', 'Bit 位元', 'Frame 訊框', 'Packet 封包', 'Segment / Datagram', 'Data 資料']]
      }
    ]
  },
  {
    heading: '四、七層記憶口訣',
    blocks: [
      {
        kind: 'paragraph',
        text: '由第 1 層往上：Please Do Not Throw Sausage Pizza Away = Physical, Data Link, Network, Transport, Session, Presentation, Application。'
      }
    ]
  },
  {
    heading: '五、TCP/IP 模型 vs OSI　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['TCP/IP（5 層）', '對應 OSI'],
        rows: [
          ['應用層 Application', 'OSI 第 5、6、7 層合併'],
          ['傳輸層 Transport', 'OSI 第 4 層'],
          ['網路層 Network / Internet', 'OSI 第 3 層'],
          ['資料鏈結層 Data Link', 'OSI 第 2 層'],
          ['實體層 Physical', 'OSI 第 1 層']
        ]
      },
      {
        kind: 'paragraph',
        text: '4 層版本會再把實體層與資料鏈結層合併為網路存取層（Network Access）。'
      }
    ]
  },
  {
    heading: '六、重點與易混淆　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Hub / Repeater = L1；Switch(L2) / Bridge = L2；Router / L3 Switch = L3；Gateway 可到 L7。',
          '交換 switching 看 MAC 在 L2；路由 routing 看 IP 在 L3；可靠傳輸 TCP 在 L4。',
          'ARP / RARP 層級有教材差異，常見放 L2 或 L3；ICMP、IGMP 明確屬 L3。',
          'bit → frame → packet → segment 是常考送分題。'
        ]
      }
    ]
  }
] as const;

const networkingBasicsLessonSections = [
  {
    heading: '一、LAN vs MAN vs WAN（依範圍大小分）　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'LAN 區域網路', 'MAN 都會網路', 'WAN 廣域網路'],
        rows: [
          ['範圍', '小：一棟樓、校園、辦公室', '中：一個城市', '大：跨城市、跨國'],
          ['速度', '最快、延遲低', '中', '相對慢、延遲高'],
          ['擁有 / 管理', '自己擁有', '城市 / 機構', '多租用電信業者線路'],
          ['例子', '家裡 / 公司網路', '城市有線電視網', '網際網路、企業跨國連線']
        ]
      },
      {
        kind: 'paragraph',
        text: '記憶：範圍 LAN < MAN < WAN；範圍越大，速度通常越慢，也越常需要租線。'
      }
    ]
  },
  {
    heading: '二、Client-Server vs P2P　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '主從式 Client-Server', '點對點 P2P'],
        rows: [
          ['架構', '有專門伺服器提供服務，用戶端請求', '每個節點既是 client 又是 server'],
          ['優點', '集中管理、安全、易維護', '無單點故障、成本低、人越多資源越多'],
          ['缺點', '伺服器單點故障、成本高、負載大', '難管理、安全性差、資源品質不一'],
          ['例子', '網站、郵件伺服器', 'BitTorrent、區塊鏈']
        ]
      }
    ]
  },
  {
    heading: '三、網路拓樸 Topology（Bus / Ring / Star / Mesh）　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['拓樸', '運作方式', '優點', '缺點'],
        rows: [
          ['Bus 匯流排', '全部接在一條主幹線上', '簡單、省纜線、便宜', '主幹斷則全網癱；會碰撞；難除錯'],
          ['Ring 環狀', '串成環，資料沿環傳，常用 token', '無碰撞、效能穩定', '一處斷可能整環中斷'],
          ['Star 星狀', '全部連到中央節點 hub / switch', '好管理、單機故障不影響別人', '中央節點單點故障；耗纜線'],
          ['Mesh 網狀', '裝置間多重互連', '可靠性最高、多路徑容錯', '纜線與成本最高、複雜']
        ]
      }
    ]
  },
  {
    heading: '四、HTTP vs HTTPS　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'HTTP', 'HTTPS'],
        rows: [
          ['全名', 'HyperText Transfer Protocol', 'HTTP Secure'],
          ['加密', '明文', 'HTTP + SSL/TLS 加密'],
          ['安全性', '低', '高：加密與身分驗證'],
          ['Port', '80', '443']
        ]
      }
    ]
  },
  {
    heading: '五、Stateless（無狀態）　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '定義：伺服器不記得前一次請求，每個請求都獨立。HTTP 本身就是 stateless。',
          '優點：簡單、伺服器不用存狀態、容易擴展，任何伺服器都能處理任何請求。',
          '缺點：記不住使用者，所以要靠 Cookie / Session 記住登入、購物車等狀態。'
        ]
      }
    ]
  },
  {
    heading: '六、Session vs Cookie　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'Cookie', 'Session'],
        rows: [
          ['資料存在', '客戶端（瀏覽器）', '伺服器端'],
          ['怎麼運作', '伺服器發給瀏覽器，之後請求自動帶上', '伺服器給 session ID，真正資料存在伺服器'],
          ['安全性', '較低，可被竄改或竊取', '較高，資料不在客戶端'],
          ['成本', '不佔伺服器資源', '佔伺服器資源']
        ]
      }
    ]
  }
] as const;

const networkingDevicesOsiLessonSections = [
  {
    heading: '一、七個網路設備總表（核心）　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['設備', 'OSI 層', '功能（做什麼）', '重點 / 場景'],
        rows: [
          ['Repeater', 'L1 實體', '訊號放大 / 再生，延長傳輸距離', '只處理 bit，不看位址'],
          ['Hub', 'L1 實體', '多埠中繼器，收到訊號廣播給所有埠', '共享頻寬、會碰撞'],
          ['Bridge', 'L2 資料鏈結', '依 MAC 連接 / 過濾兩網段', '分割碰撞域；switch 是多埠 bridge'],
          ['L2 Switch', 'L2 資料鏈結', '依 MAC 只送給目標埠', '每埠獨立碰撞域、現代 LAN 核心'],
          ['L3 Switch', 'L3 網路', '依 IP 跨 VLAN / 子網路轉送', '企業內跨 VLAN 路由'],
          ['Router', 'L3 網路', '連接不同網路，依 IP 選路、轉送封包', '連 LAN 到 Internet，可做 NAT'],
          ['Gateway', '可到 L7 應用', '連接不同協定網路，做協定轉換', '異質網路 / 協定轉換']
        ]
      },
      {
        kind: 'paragraph',
        text: '推理法：看 bit → L1；看 MAC → L2；看 IP → L3；轉協定 → Gateway。'
      }
    ]
  },
  {
    heading: '二、碰撞域 vs 廣播域（超常考）　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: '碰撞域 Collision Domain 是會互相撞在一起的範圍；廣播域 Broadcast Domain 是一個廣播封包能傳到的範圍。'
      },
      {
        kind: 'table',
        headers: ['設備', '碰撞域', '廣播域'],
        rows: [
          ['Hub / Repeater', '全部同一個，會互撞', '同一個'],
          ['Switch / Bridge', '每埠切開，各自獨立', '同一個'],
          ['Router', '切開', '每介面切開']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話：Switch 切碰撞域，Router 切廣播域。VLAN 也能在 switch 上切廣播域。'
      }
    ]
  },
  {
    heading: '三、LAN vs VLAN　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'LAN', 'VLAN（虛擬 LAN）'],
        rows: [
          ['怎麼分', '實體連在一起就是一個廣播域', '用軟體把交換器埠邏輯切成多個獨立廣播域'],
          ['佈線', '換網段要實體重新佈線', '不用重新佈線，軟體設定即可'],
          ['隔離 / 安全', '同網段廣播互通', '不同 VLAN 預設不能互通，要靠 L3 路由'],
          ['分組依據', '依實體位置', '依邏輯，例如部門']
        ]
      }
    ]
  }
] as const;

const networkingIpSubnettingLessonSections = [
  {
    heading: '一、IP 基礎　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: 'IPv4 位址是 32 bits，分成 4 段 octet，每段 8 bits、0-255。位址由網路部分與主機部分組成。'
      },
      {
        kind: 'table',
        headers: ['類別', '第一段範圍', '預設遮罩', '網路:主機 位元', '用途'],
        rows: [
          ['A', '1-126', '/8（255.0.0.0）', '8 : 24', '大型網路'],
          ['B', '128-191', '/16（255.255.0.0）', '16 : 16', '中型'],
          ['C', '192-223', '/24（255.255.255.0）', '24 : 8', '小型'],
          ['D', '224-239', '-', '-', 'Multicast 多播'],
          ['E', '240-255', '-', '-', '保留 / 實驗']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          '127.x.x.x 是 loopback，本機常見 127.0.0.1。',
          '私有 IP：10/8、172.16/12、192.168/16，不能在公網路由。',
          '網路位址 = 主機位元全 0；廣播位址 = 主機位元全 1。',
          'MAC 位址是 L2 實體位址 48 bits；IP 位址是 L3 邏輯位址 32 bits。'
        ]
      }
    ]
  },
  {
    heading: '二、子網路計算　★【練流程】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '主機位元數 h = 32 - n，n 是 CIDR 的 /n。',
          '一個子網路總位址數 block size = 2^h。',
          '可用主機數 = 2^h - 2，扣掉網路位址與廣播位址。',
          '子網路數 = 2^(借的位元數)。',
          '快速法：在遮罩有變化的 octet，block = 256 - 該 octet 遮罩值；網路位址是 block 的倍數；廣播位址 = 下一個網路位址 - 1。'
        ]
      },
      {
        kind: 'table',
        headers: ['CIDR', '遮罩', 'block', '可用主機'],
        rows: [
          ['/24', '255.255.255.0', '256', '254'],
          ['/25', '255.255.255.128', '128', '126'],
          ['/26', '255.255.255.192', '64', '62'],
          ['/27', '255.255.255.224', '32', '30'],
          ['/28', '255.255.255.240', '16', '14'],
          ['/29', '255.255.255.248', '8', '6'],
          ['/30', '255.255.255.252', '4', '2']
        ]
      },
      {
        kind: 'subsection',
        heading: '題目一：每個子網路要容納 >= 50 台主機',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              '192.168.10.0/24 要每個子網路至少 50 台：找 h 使 2^h - 2 >= 50，所以 h = 6。',
              'n = 32 - 6 = /26，遮罩 255.255.255.192。',
              '從 /24 借 2 位，所以子網路數 = 2^2 = 4；block = 64。'
            ]
          },
          {
            kind: 'table',
            headers: ['子網路', '網路位址', '廣播位址', '可用主機'],
            rows: [
              ['1', '192.168.10.0', '192.168.10.63', '.1 - .62'],
              ['2', '192.168.10.64', '192.168.10.127', '.65 - .126'],
              ['3', '192.168.10.128', '192.168.10.191', '.129 - .190'],
              ['4', '192.168.10.192', '192.168.10.255', '.193 - .254']
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '題目二：給 IP/CIDR 求網路位址與廣播位址',
        blocks: [
          {
            kind: 'paragraph',
            text: '172.16.20.10/20：遮罩 255.255.240.0，第 3 段 block = 256 - 240 = 16。20 落在 16 那塊，所以網路位址 172.16.16.0、廣播位址 172.16.31.255、主機範圍 172.16.16.1 - 172.16.31.254。'
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '題目三：VLSM（變動長度子網路遮罩）',
        blocks: [
          {
            kind: 'paragraph',
            text: 'VLSM 是用不同大小的遮罩切子網路。做法是需求大的先切，用大區塊；需求小的後切，用小區塊。'
          },
          {
            kind: 'table',
            headers: ['子網路', '需求', '遮罩', '範圍', '可用'],
            rows: [
              ['A', '100', '/25', '.0 - .127', '126'],
              ['B', '50', '/26', '.128 - .191', '62'],
              ['C', '25', '/27', '.192 - .223', '30']
            ]
          }
        ]
      }
    ]
  },
  {
    heading: '三、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'h = 32 - n；block = 2^h；可用主機 = 2^h - 2；子網路數 = 2^借的位元。',
          '快速法：變化 octet 的 block = 256 - 遮罩值；網路位址是 block 倍數；廣播 = 下個網路 - 1。',
          '私有 IP：10/8、172.16/12、192.168/16；127.0.0.1 = loopback。',
          'VLSM 大的先切，依需求給剛好大小，最省 IP。'
        ]
      }
    ]
  }
] as const;

const networkingRoutingL3ProtocolsLessonSections = [
  {
    heading: '一、靜態路由 vs 動態路由　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '靜態路由 Static', '動態路由 Dynamic'],
        rows: [
          ['怎麼來', '管理員手動設路由表', '路由器間用協定自動交換、更新'],
          ['優點', '簡單、安全、無額外開銷、可控', '自動適應變化，適合大網路'],
          ['缺點', '不會自動繞路，大網路難維護', '較複雜，耗 CPU / 頻寬'],
          ['適合', '小型 / 穩定網路', '大型 / 常變動網路']
        ]
      }
    ]
  },
  {
    heading: '二、路由協定 + Distance Vector vs Link State　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['協定', '演算法類型', '度量 metric', '範圍', '重點'],
        rows: [
          ['RIP', 'Distance Vector', '跳數 hop，最多 15，16 = 不可達', '內部 IGP', '簡單、收斂慢、不適合大網'],
          ['OSPF', 'Link State', '成本 cost，看頻寬', '內部 IGP', 'Dijkstra 算最短路、收斂快'],
          ['BGP', 'Path Vector', '路徑屬性', '自治系統間 EGP', '網際網路骨幹']
        ]
      },
      {
        kind: 'table',
        headers: ['', 'Distance Vector（如 RIP）', 'Link State（如 OSPF）'],
        rows: [
          ['知道什麼', '到各目的地的距離 + 下一跳', '整個網路拓樸地圖'],
          ['怎麼運作', '把路由表定期告訴鄰居', '各自用 Dijkstra 算最短路'],
          ['比喻', '只看路標跳數問路', '每個人手上都有完整地圖'],
          ['缺點', '收斂慢、可能 routing loop', '較耗資源']
        ]
      }
    ]
  },
  {
    heading: '三、NAT（網路位址轉換）　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'NAT 把私有 IP 與公有 IP 互轉，讓內部多台私有 IP 裝置共用少數公有 IP 上網。',
          '好處是節省公有 IP、隱藏內部結構。',
          '類型：靜態 NAT 一對一、動態 NAT 從池中取、PAT / NAPT 多對一並用 port 區分，家用分享器最常見。'
        ]
      }
    ]
  },
  {
    heading: '四、L3 常見協定（ARP 家族 / ICMP / IGMP / IPSec）　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['協定', '做什麼', '記憶'],
        rows: [
          ['ARP', '由 IP 查 MAC，知道對方 IP 後找 MAC 才能在區網傳', 'IP → MAC'],
          ['RARP', '由 MAC 查 IP，早期無磁碟工作站用，後被 DHCP 取代', 'MAC → IP'],
          ['ICMP', '錯誤訊息與診斷；ping 用它；traceroute 靠 TTL 逾時回應找每一跳', '診斷用'],
          ['IGMP', '管理 multicast 群組成員', '多播群組'],
          ['IPSec', '在 IP 層提供加密與驗證，VPN 常用', 'IP 層安全']
        ]
      },
      {
        kind: 'paragraph',
        text: 'ARP Spoofing / ARP 毒化是偽造 ARP 回應，把自己的 MAC 對應到別人的 IP，讓流量被導到攻擊者，形成 MITM。'
      }
    ]
  },
  {
    heading: '五、網路指令　【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['指令', '功能'],
        rows: [
          ['ping', '測與目標是否連通、測延遲，用 ICMP'],
          ['traceroute / tracert', '顯示封包到目標經過的每一跳路由器路徑'],
          ['netstat', '顯示本機連線、埠、路由表狀態'],
          ['ipconfig / ifconfig', '顯示或設定本機 IP 設定'],
          ['nslookup', '查 DNS，域名查 IP 或反查']
        ]
      }
    ]
  },
  {
    heading: '六、IPv4 vs IPv6　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'IPv4', 'IPv6'],
        rows: [
          ['長度', '32 bits', '128 bits'],
          ['表示', '點分十進位，例如 192.168.1.1', '冒號十六進位，例如 2001:db8::1'],
          ['位址數', '約 43 億', '海量'],
          ['安全', '需外加', '標準支援 IPSec，考題常寫內建 IPSec'],
          ['NAT', '常需要', '位址夠多，通常不需 NAT'],
          ['Header', '有 checksum、可變長度、分段欄位', '固定長度並簡化，拿掉 checksum，分段改由端點處理']
        ]
      }
    ]
  },
  {
    heading: '七、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'RIP = 距離向量 / 跳數 <= 15；OSPF = 鏈結狀態 / Dijkstra；BGP = AS 間 / 網際網路骨幹。',
          'NAT = 私有 ↔ 公有，PAT 多對一最常見。',
          'ARP：IP→MAC；RARP：MAC→IP；ICMP：ping / 診斷；IGMP：多播；IPSec：IP 層加密。',
          'IPv6 = 128 位元、海量位址、header 精簡、支援 IPSec。'
        ]
      }
    ]
  }
] as const;

const networkingTransportLayerLessonSections = [
  {
    heading: '一、Circuit Switching vs Packet Switching　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '電路交換 Circuit Switching', '封包交換 Packet Switching'],
        rows: [
          ['方式', '先建立專屬實體路徑，全程獨佔', '資料切成封包各自獨立傳，目的地重組'],
          ['優點', '連線穩定、保證頻寬、延遲固定', '線路共享、效率高、可繞路容錯'],
          ['缺點', '獨佔線路，沒傳也佔著，建立慢', '延遲不固定，可能塞車或亂序，需重組'],
          ['例子', '傳統電話網路 PSTN', '網際網路 IP']
        ]
      },
      {
        kind: 'paragraph',
        text: '一句話：電路交換 = 獨佔專線，穩但浪費；封包交換 = 共享分封，省但延遲不定。'
      }
    ]
  },
  {
    heading: '二、TCP + 三方交握 + 四方交握　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: 'TCP 是連線導向、可靠、有序，具備 ACK、遺失重傳、流量控制與壅塞控制，適合網頁、email、檔案等要求正確的應用。'
      },
      {
        kind: 'subsection',
        heading: '三方交握（建立連線）',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              'Client → Server：SYN，我想連線。',
              'Server → Client：SYN + ACK，好，我也要連，並確認你。',
              'Client → Server：ACK，確認後連線建立。'
            ]
          }
        ]
      },
      {
        kind: 'subsection',
        heading: '四方交握（結束連線）',
        blocks: [
          {
            kind: 'orderedList',
            items: [
              'Client → Server：FIN，我要關了。',
              'Server → Client：ACK，收到。',
              'Server → Client：FIN，我這邊也關了。',
              'Client → Server：ACK，收到後連線結束。'
            ]
          },
          {
            kind: 'paragraph',
            text: '結束要四次，因為 TCP 是全雙工，兩個方向要各自關閉。'
          }
        ]
      }
    ]
  },
  {
    heading: '三、SYN Flood Attack　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: '攻擊者大量送 SYN，常偽造來源 IP，卻不回最後 ACK，讓伺服器留下大量 half-open 半開連線並佔滿資源，造成 DoS。防範包含 SYN cookies、限制半開連線數與防火牆過濾。'
      }
    ]
  },
  {
    heading: '四、流量控制 vs 壅塞控制（超常考辨別）　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '流量控制 Flow Control', '壅塞控制 Congestion Control'],
        rows: [
          ['保護誰', '接收方，避免淹沒對方緩衝區', '整個網路，避免塞爆路由器'],
          ['看誰的狀況', '接收方接收能力', '網路壅塞程度'],
          ['機制', '滑動視窗，接收方告知 rwnd', '慢啟動、壅塞避免、快速重傳 / 恢復，cwnd']
        ]
      }
    ]
  },
  {
    heading: '五、UDP + TCP vs UDP　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: 'UDP 是非連線、不可靠、快、開銷小，適合即時且可容忍少量遺失的串流、遊戲、DNS、VoIP。'
      },
      {
        kind: 'table',
        headers: ['', 'TCP', 'UDP'],
        rows: [
          ['連線', '連線導向，先三方交握', '非連線'],
          ['可靠性', '可靠，確認、重傳、有序', '不可靠'],
          ['速度', '較慢，開銷大', '快，開銷小'],
          ['Header', '最小 20 bytes', '8 bytes'],
          ['流量 / 壅塞控制', '有', '無'],
          ['適用', '網頁、email、檔案', '串流、遊戲、DNS、VoIP']
        ]
      }
    ]
  },
  {
    heading: '六、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'TCP：連線導向、可靠、有序；建立 = SYN / SYN-ACK / ACK；結束 = FIN / ACK / FIN / ACK。',
          'SYN Flood = 灌半開連線的 DoS。',
          '流量控制保護接收方；壅塞控制保護網路。',
          'TCP 可靠慢，header 20B；UDP 快不保證，header 8B。'
        ]
      }
    ]
  }
] as const;

const networkingApplicationPortsLessonSections = [
  {
    heading: '一、Port Number 對照表（★ 必背）　【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Port 範圍：0-1023 是 well-known 周知埠；1024-49151 是註冊埠；49152-65535 是動態 / 臨時埠。'
      },
      {
        kind: 'table',
        headers: ['協定', 'Port', 'TCP/UDP', '功能'],
        rows: [
          ['FTP', '20（資料）、21（控制）', 'TCP', '檔案傳輸'],
          ['SSH', '22', 'TCP', '安全遠端登入'],
          ['Telnet', '23', 'TCP', '遠端登入，明文不安全'],
          ['SMTP', '25', 'TCP', '寄信，送出與伺服器間轉送'],
          ['DNS', '53', 'TCP + UDP', '域名解析，查詢多用 UDP，區域傳送用 TCP'],
          ['DHCP', '67（server）、68（client）', 'UDP', '自動分配 IP'],
          ['TFTP', '69', 'UDP', '簡易檔案傳輸'],
          ['HTTP', '80', 'TCP', '網頁'],
          ['POP3', '110', 'TCP', '收信，下載到本機'],
          ['IMAP', '143', 'TCP', '收信，保留在伺服器、多裝置同步'],
          ['SNMP', '161（查詢）、162（trap）', 'UDP', '網路管理'],
          ['HTTPS', '443', 'TCP', '加密網頁，HTTP + TLS'],
          ['RTSP', '554', 'TCP/UDP', '串流控制']
        ]
      },
      {
        kind: 'paragraph',
        text: 'RTP / RTCP 沒有固定周知埠：RTP 常走動態 UDP 偶數埠，RTCP 走相鄰奇數埠（RTP 埠 + 1）。'
      }
    ]
  },
  {
    heading: '二、常見應用層協定（做什麼）　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'DNS（53）：域名轉 IP。',
          'DHCP（67/68）：自動分配 IP、遮罩、預設閘道、DNS；流程 DORA = Discover → Offer → Request → ACK。',
          'FTP（20/21）：檔案傳輸，21 控制、20 資料。',
          'Email 三劍客：SMTP 寄，POP3 / IMAP 收；POP3 下載刪，IMAP 留伺服器。',
          'SNMP（161/162）：監控、管理路由器與交換器等網路設備。'
        ]
      }
    ]
  },
  {
    heading: '三、GET vs POST（HTTP 方法，常考）　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'GET', 'POST'],
        rows: [
          ['用途', '取得資料', '提交資料'],
          ['參數放哪', 'URL，看得到', 'body，不顯示在網址'],
          ['長度限制', '有 URL 長度限制', '通常無同樣限制'],
          ['快取 / 書籤', '可', '不適合'],
          ['安全性', '較低，參數露在網址', '較高，但仍需 HTTPS 才真的加密']
        ]
      }
    ]
  },
  {
    heading: '四、URL（統一資源定位符）　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: '格式：協定://主機名稱:埠/路徑?查詢，例如 https://www.example.com:443/page?id=1，其中 https 是協定、www.example.com 是主機、443 是埠、/page 是路徑、id=1 是查詢。'
      }
    ]
  },
  {
    heading: '五、SDN / CDN / 即時串流　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'SDN：控制平面與資料平面分離，用集中控制器讓網路可程式化、好調整。',
          'CDN：把內容快取到全球邊緣伺服器，讓使用者就近取得，提升速度並減輕原站負載。',
          'RTSP（554）是控制播放 / 暫停 / 停止；RTP 傳即時影音資料；RTCP 回報品質。'
        ]
      }
    ]
  },
  {
    heading: '六、重點整理（背這張）',
    blocks: [
      {
        kind: 'paragraph',
        text: '必背 port：FTP 20/21、SSH 22、Telnet 23、SMTP 25、DNS 53、DHCP 67/68、TFTP 69、HTTP 80、POP3 110、IMAP 143、SNMP 161/162、HTTPS 443、RTSP 554。'
      }
    ]
  }
] as const;

const networkingPhysicalLayerLessonSections = [
  {
    heading: '一、傳輸媒介　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['媒介', '原理', '優點', '缺點'],
        rows: [
          ['雙絞線 Twisted Pair', '兩銅線絞繞減干擾，UTP / STP', '便宜、易裝', '距離短、易受干擾'],
          ['同軸電纜 Coaxial', '中心銅線 + 遮蔽層', '抗干擾較好、頻寬較大', '粗硬'],
          ['光纖 Fiber', '用光傳輸', '最快、最遠、頻寬最大、不受電磁干擾、安全', '貴、施工難、易折']
        ]
      },
      {
        kind: 'table',
        headers: ['無線媒介', '特性'],
        rows: [
          ['紅外線 Infrared', '短距離、需視線、不能穿牆'],
          ['雷射 Laser', '高頻寬、需視線、受天氣影響'],
          ['無線電波 Radio', '可穿透、全向、距離遠，例如 WiFi、廣播'],
          ['微波 Microwave', '高頻、需視線、受天氣影響']
        ]
      }
    ]
  },
  {
    heading: '二、WiFi（802.11）標準速度表　【硬背】★',
    blocks: [
      {
        kind: 'table',
        headers: ['標準', '別名', '頻段', '最高速度'],
        rows: [
          ['802.11b', '-', '2.4 GHz', '11 Mbps'],
          ['802.11a', '-', '5 GHz', '54 Mbps'],
          ['802.11g', '-', '2.4 GHz', '54 Mbps'],
          ['802.11n', 'Wi-Fi 4', '2.4 / 5 GHz', '600 Mbps'],
          ['802.11ac', 'Wi-Fi 5', '5 GHz', '約 6.9 Gbps'],
          ['802.11ax', 'Wi-Fi 6 / 6E', '2.4 / 5 / 6 GHz', '約 9.6 Gbps'],
          ['802.11be', 'Wi-Fi 7', '2.4 / 5 / 6 GHz', '約 46 Gbps']
        ]
      },
      {
        kind: 'paragraph',
        text: 'MIMO 是用多根天線同時收發多個資料流，提升速度與可靠度，802.11n 起採用。'
      }
    ]
  },
  {
    heading: '三、藍牙 Bluetooth 世代速度　【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['版本', '最高速度', '重點'],
        rows: [
          ['1.x', '約 1 Mbps', '範圍約 10m'],
          ['2.0 + EDR', '約 3 Mbps', 'EDR 增速'],
          ['3.0 + HS', '約 24 Mbps', '借 WiFi（802.11）來傳'],
          ['4.0', '約 1 Mbps', '引入 BLE 低功耗'],
          ['5.0', '約 2 Mbps（BLE）', '範圍約 4 倍、廣播強化']
        ]
      }
    ]
  },
  {
    heading: '四、USB 速度　【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['版本', '最高速度'],
        rows: [
          ['USB 1.0 / 1.1', '12 Mbps'],
          ['USB 2.0', '480 Mbps'],
          ['USB 3.0（= 3.1 Gen1）', '5 Gbps'],
          ['USB 3.1（Gen2）', '10 Gbps'],
          ['USB 3.2（Gen2x2）', '20 Gbps'],
          ['USB4', '40 Gbps；USB4 Version 2.0 可到 80 Gbps']
        ]
      }
    ]
  },
  {
    heading: '五、行動網路 1G～5G　【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['世代', '技術', '速度', '特色'],
        rows: [
          ['1G', '類比 AMPS', '約 2.4 Kbps', '類比語音'],
          ['2G', '數位 GSM', '約 64 Kbps', '數位語音 + SMS'],
          ['3G', 'UMTS / CDMA2000', '144 Kbps - 2 Mbps', '行動上網'],
          ['4G', 'LTE', '100 Mbps - 1 Gbps', '高速、全 IP、影音串流'],
          ['5G', 'NR', '1 - 20 Gbps', '超高速、低延遲、海量 IoT']
        ]
      },
      {
        kind: 'paragraph',
        text: 'Ethernet：10BASE-T 10 Mbps → Fast Ethernet 100 Mbps → Gigabit 1 Gbps → 10 Gigabit 10 Gbps。'
      }
    ]
  },
  {
    heading: '六、IoT / 雲端 / Big Data　【理解】（概念）＋【硬背】（分類名）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'IoT 三層：感知層 Perception、網路層 Network、應用層 Application。',
          '雲端服務模式：IaaS 租硬體 / VM，PaaS 租開發平台，SaaS 租現成軟體；從 IaaS 到 SaaS，使用者要管的越來越少。',
          '雲端部署模式：公有雲、私有雲、社群雲、混合雲。',
          'Big Data 5V：Volume、Velocity、Variety、Veracity、Value。'
        ]
      }
    ]
  },
  {
    heading: '七、RFID / NFC　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'RFID 用無線電波，讀取器讀 tag 資料，免接觸 / 免視線；組成為標籤、讀取器、天線。',
          'RFID 分被動式（無電池、靠讀取器供電）與主動式（有電池）。',
          'NFC 是 RFID 的一種，超短距離約 4cm、13.56 MHz、可雙向，多用於手機感應支付。',
          'NFC vs RFID：NFC 距離更短且可雙向；RFID 距離較長，多為單向。'
        ]
      }
    ]
  },
  {
    heading: '八、重點整理（背這張）',
    blocks: [
      {
        kind: 'paragraph',
        text: '光纖最快最遠最安全；WiFi 記 b 11M、a/g 54M、n 600M、ac 約 6.9G、ax 約 9.6G；USB 記 1.1 12M、2.0 480M、3.0 5G、3.1 10G、3.2 20G、USB4 40G，並注意 USB4 Version 2.0 可到 80G。'
      }
    ]
  }
] as const;

const networkingDataLinkLayerLessonSections = [
  {
    heading: '一、訊框化 Framing　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: '資料鏈結層把上層位元流包成 frame：前面加 header（來源 / 目的 MAC），後面加 trailer（FCS / CRC）。目的在於定界，讓接收端知道訊框從哪開始、哪結束，並能偵測錯誤。'
      }
    ]
  },
  {
    heading: '二、單工 / 半雙工 / 全雙工　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['模式', '方向', '例子'],
        rows: [
          ['單工 Simplex', '只能單向', '廣播、鍵盤 → 電腦'],
          ['半雙工 Half-duplex', '雙向但不能同時，輪流', '對講機'],
          ['全雙工 Full-duplex', '雙向可同時', '電話、現代乙太網路 switch']
        ]
      }
    ]
  },
  {
    heading: '三、多重存取：競爭 vs 無競爭 + CSMA　【理解】★',
    blocks: [
      {
        kind: 'table',
        headers: ['', '競爭式 Contention', '無競爭式 Contention-free'],
        rows: [
          ['怎麼傳', '大家搶著傳，可能碰撞', '有秩序輪流，不碰撞'],
          ['例子', 'CSMA/CD、CSMA/CA、ALOHA', 'Token Passing、Polling、TDMA'],
          ['優缺', '低負載效率高；高負載碰撞多', '無碰撞、高負載穩；低負載有等待開銷']
        ]
      },
      {
        kind: 'table',
        headers: ['', '全名', '用在', '做法'],
        rows: [
          ['CSMA', '載波偵聽多重存取', '-', '先聽，沒人用才傳，但仍可能同時傳而碰撞'],
          ['CSMA/CD', 'Collision Detection 碰撞偵測', '有線乙太網路', '邊傳邊測，撞到就停，等隨機時間重傳'],
          ['CSMA/CA', 'Collision Avoidance 碰撞避免', '無線 WiFi（802.11）', '傳前等待，RTS / CTS 預約，事先避免碰撞']
        ]
      },
      {
        kind: 'paragraph',
        text: '超常考：CD 用於有線，因為偵測得到碰撞；CA 用於無線，因為難偵測，所以改成避免。'
      }
    ]
  },
  {
    heading: '四、543 Rule（5-4-3 規則）　【硬背】',
    blocks: [
      {
        kind: 'paragraph',
        text: '早期 10 Mbps 乙太網路的一個碰撞域最多 5 個網段、4 個中繼器（hub），其中只有 3 個網段可接裝置；目的在限制延遲，確保 CSMA/CD 碰撞偵測能正常運作。'
      }
    ]
  },
  {
    heading: '五、ARQ（自動重傳請求）　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['方式', '做法'],
        rows: [
          ['Stop-and-Wait 停止等待', '傳一個、等一個 ACK 再傳下一個，簡單但慢'],
          ['Go-Back-N 回溯 N', '錯了就從出錯那個之後全部重傳'],
          ['Selective Repeat 選擇性重傳', '只重傳錯的那個，效率高但較複雜']
        ]
      }
    ]
  },
  {
    heading: '六、HDLC vs PPP　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'HDLC', 'PPP'],
        rows: [
          ['全名', 'High-level Data Link Control', 'Point-to-Point Protocol'],
          ['特性', '位元導向、同步', '點對點直連，撥接、DSL'],
          ['功能', '較簡單', '支援多協定、PAP / CHAP 身分驗證、錯誤偵測'],
          ['標準', '偏 Cisco 私有', '標準開放，跨廠商']
        ]
      }
    ]
  },
  {
    heading: '七、L2 vs L3 Switch　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'L2 交換器', 'L3 交換器'],
        rows: [
          ['依據', 'MAC 位址', 'IP 位址'],
          ['能做', '同網段 / VLAN 內轉送訊框', 'switch + router，跨 VLAN / 子網路路由'],
          ['層', 'L2', 'L3']
        ]
      }
    ]
  },
  {
    heading: '八、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '訊框化 = MAC header + 錯誤碼 trailer，負責定界與偵錯。',
          '單工單向、半雙工輪流、全雙工同時雙向。',
          'CSMA/CD 有線偵測；CSMA/CA 無線避免。',
          '543 Rule：5 段、4 中繼器、3 段有裝置。',
          'HDLC 簡單偏私有；PPP 功能多、標準開放。'
        ]
      }
    ]
  }
] as const;

const networkingSecurityCryptoLessonSections = [
  {
    heading: '一、資安五大要素　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['要素', '意思', '靠什麼達成'],
        rows: [
          ['機密性 Confidentiality', '資料只有授權者能看', '加密、存取控制'],
          ['完整性 Integrity', '資料沒被竄改、保持正確', '雜湊、數位簽章'],
          ['可用性 Availability', '授權者需要時能正常使用', '備援、備份；威脅是 DoS / DDoS'],
          ['不可否認性 Non-repudiation', '做過的事不能事後抵賴', '數位簽章'],
          ['認證性 Authentication', '確認身分是真的', '密碼、憑證、生物辨識']
        ]
      },
      {
        kind: 'paragraph',
        text: 'CIA 是三大核心：機密、完整、可用；再加不可否認與認證。'
      }
    ]
  },
  {
    heading: '二、對稱 vs 非對稱加密　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '對稱式 Symmetric', '非對稱式 Asymmetric'],
        rows: [
          ['金鑰', '同一把金鑰加解密', '一對公鑰與私鑰'],
          ['速度', '快，適合大量資料', '慢'],
          ['痛點 / 優勢', '金鑰分配難、金鑰數量多', '解決金鑰分配，能做數位簽章'],
          ['例子', 'DES、3DES、AES', 'RSA、ECC、Diffie-Hellman']
        ]
      },
      {
        kind: 'orderedList',
        items: [
          '要保密：用接收者公鑰加密，只有接收者私鑰能解。',
          '要簽章：用發送者私鑰簽，大家用發送者公鑰驗。',
          '實務常混合：用非對稱傳對稱金鑰，再用對稱加密資料。'
        ]
      }
    ]
  },
  {
    heading: '三、雜湊 Hash　【理解】',
    blocks: [
      {
        kind: 'paragraph',
        text: '雜湊函數把任意長度資料轉成固定長度 digest。特性是單向不可逆、固定長度、改一點點就完全不同（雪崩效應）、抗碰撞。用途是驗證完整性與密碼儲存。MD5、SHA-1 已不安全，常見安全選項是 SHA-256 / SHA-2、SHA-3。'
      }
    ]
  },
  {
    heading: '四、數位簽章 Digital Signature　【理解】★',
    blocks: [
      {
        kind: 'paragraph',
        text: '數位簽章一次達成完整性、認證、不可否認，但不負責保密。'
      },
      {
        kind: 'orderedList',
        items: [
          '發送者把訊息做雜湊得到摘要。',
          '用發送者私鑰加密摘要，形成數位簽章。',
          '連同原訊息一起送出。',
          '接收者用發送者公鑰解簽章得到摘要 A，自己也對訊息做雜湊得到摘要 B。',
          'A = B 代表沒被竄改，且確實是發送者發出。'
        ]
      }
    ]
  },
  {
    heading: '五、PKI / CA / 數位憑證　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'PKI 是管理數位憑證與公私鑰的架構，用來確認某把公鑰真的屬於某人。',
          'CA 是受信任第三方，簽發數位憑證，把身分與公鑰綁定並由 CA 簽章背書。',
          '數位憑證像網路身分證，內含持有者資訊、公鑰、CA 簽章；HTTPS 的 SSL/TLS 憑證靠 PKI。'
        ]
      }
    ]
  },
  {
    heading: '六、電子商務安全　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['需求', '在交易裡的意思'],
        rows: [
          ['機密性', '交易 / 信用卡資料不被竊'],
          ['完整性', '交易內容不被竄改'],
          ['不可否認性', '買賣雙方不能否認交易'],
          ['可驗證性（認證）', '確認交易雙方身分'],
          ['存取控制', '只有授權者能存取資源']
        ]
      }
    ]
  },
  {
    heading: '七、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '五要素：機密、完整、可用（CIA）+ 不可否認、認證。',
          '對稱同把金鑰、快、分配難；非對稱公私鑰、慢、能簽章。',
          '加密保密用收件者公鑰；數位簽章用發送者私鑰。',
          '數位簽章 = 完整性 + 認證 + 不可否認，不保密。',
          'PKI 由 CA 簽發憑證，綁定身分與公鑰。'
        ]
      }
    ]
  }
] as const;

const networkingDefenseAttacksLessonSections = [
  {
    heading: '一、防火牆 / 次世代防火牆 / WAF　【理解】',
    blocks: [
      {
        kind: 'table',
        headers: ['', '看哪層 / 看什麼', '特點'],
        rows: [
          ['傳統防火牆 Firewall', 'L3 / L4，IP、port、協定', '依規則過濾進出流量，如封包過濾、狀態檢測'],
          ['次世代防火牆 NGFW', '可到 L7', '傳統防火牆 + 應用辨識 + 內建 IPS + DPI'],
          ['WAF', 'L7，專護 web app', '過濾 HTTP/HTTPS，擋 SQL injection、XSS 等網頁攻擊']
        ]
      }
    ]
  },
  {
    heading: '二、IDS vs IPS　【理解】★',
    blocks: [
      {
        kind: 'table',
        headers: ['', 'IDS 入侵偵測系統', 'IPS 入侵防禦系統'],
        rows: [
          ['做什麼', '偵測可疑活動並告警', '偵測 + 主動阻擋'],
          ['主 / 被動', '被動，旁路監看', '主動，串接在線上'],
          ['比喻', '監視器 / 警報器', '警衛，會把人擋下來']
        ]
      },
      {
        kind: 'paragraph',
        text: '記憶鉤子：IDS 只偵測 + 告警，IPS 還會阻擋。'
      }
    ]
  },
  {
    heading: '三、Proxy Server / DMZ　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'Proxy Server 是介於使用者與目標伺服器之間的代理，代為轉發請求；用途包含隱藏內部 IP、快取加速、存取控制 / 過濾、記錄。',
          'DMZ 是內部網路與外部網際網路之間的隔離緩衝區，放 web、mail、DNS 等對外服務；即使對外伺服器被攻破，也不會直接危及內部網路。'
        ]
      }
    ]
  },
  {
    heading: '四、VPN / PPTP　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'VPN 在公開網路上建立加密 tunnel，讓遠端使用者安全連回內部網路，像在本地一樣。',
          'PPTP 是早期微軟 VPN 通道協定，設定簡單、快，但加密弱、已不安全，現多改用 L2TP/IPSec、OpenVPN、IPSec。'
        ]
      }
    ]
  },
  {
    heading: '五、常見網路攻擊　【理解】★（今年重點）',
    blocks: [
      {
        kind: 'table',
        headers: ['惡意程式', '特性'],
        rows: [
          ['病毒 Virus', '附在正常程式 / 檔案上，需執行宿主才散播'],
          ['蠕蟲 Worm', '能自我複製、不需宿主，透過網路自動散播'],
          ['木馬 Trojan', '偽裝成正常軟體誘騙安裝，暗中開後門 / 竊資料，不自我複製'],
          ['勒索軟體 Ransomware', '加密受害者檔案、勒索贖金'],
          ['間諜軟體 Spyware', '偷偷蒐集使用者資訊']
        ]
      },
      {
        kind: 'table',
        headers: ['攻擊手法', '做什麼'],
        rows: [
          ['XSS', '把惡意 script 注入網頁，在其他使用者瀏覽器執行，竊 cookie / session'],
          ['SQL Injection', '在輸入欄塞惡意 SQL，操控資料庫'],
          ['Phishing', '偽裝可信來源，騙取帳密與個資'],
          ['DoS / DDoS', '大量流量灌爆目標使其無法服務，DDoS 用大量 botnet 一起灌'],
          ['MITM', '攔在通訊雙方中間竊聽 / 竄改，例如 ARP spoofing'],
          ['社交工程', '利用人性弱點騙取資訊，釣魚是其中一種'],
          ['Zero-day', '利用尚未修補的未知漏洞']
        ]
      }
    ]
  },
  {
    heading: '六、EDR / MDR　【理解】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'EDR 是端點偵測與回應，監控電腦、伺服器、手機等端點活動，偵測威脅並隔離或調查，是工具 / 技術。',
          'MDR 是託管式偵測與回應，把偵測與回應外包給專業資安服務商 24/7 監控處理，是服務。',
          '一句話：EDR 是工具，MDR 是服務。'
        ]
      }
    ]
  },
  {
    heading: '七、資安標準：NIST / ISO 27001　【理解】＋【硬背】',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          'NIST CSF 原本 5 大核心功能：Identify、Protect、Detect、Respond、Recover（IPDRR）；2.0 版新增 Govern，成為 6 個。',
          'ISO 27001 是資訊安全管理系統 ISMS 國際標準，提供建立與維運資安制度的框架，可申請驗證認證。',
          'NIST CSF 是功能導向框架；ISO 27001 是可認證的 ISMS 國際標準。'
        ]
      }
    ]
  },
  {
    heading: '八、重點整理（背這張）',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '防火牆看 IP / port；NGFW 加應用 + IPS；WAF 護網站並擋 SQLi / XSS。',
          'IDS 偵測告警，被動；IPS 偵測 + 阻擋，主動。',
          'DMZ 放對外伺服器；Proxy 是代理中間人；VPN 是加密通道。',
          '病毒要宿主、蠕蟲自我複製、木馬偽裝、勒索加密勒贖。',
          'EDR 工具，MDR 服務；NIST CSF 2.0 = Govern + IPDRR。'
        ]
      }
    ]
  }
] as const;

const markdownBackedNetworkingContentById = {
  'networking-osi-tcpip': {
    summary: '整理 OSI 七層、各層職責、PDU、TCP/IP 5 層對應，以及設備與協定歸層的常考辨別。',
    sourceFiles: networkingOsiTcpipSourceFiles,
    terms: networkingOsiTcpipTerms,
    lead: [
      '科目：網路概論｜幾乎每年必考、是全科的地圖。',
      '每層職責屬【理解】；協定、設備與 PDU 歸層屬【硬背】。'
    ],
    sections: networkingOsiTcpipLessonSections
  },
  'networking-basics': {
    summary: '整理 LAN vs MAN vs WAN、Client-Server vs P2P、拓樸、HTTP/HTTPS、stateless、Cookie 與 Session。',
    sourceFiles: networkingBasicsSourceFiles,
    terms: networkingBasicsTerms,
    lead: ['大多屬【理解】：都是有邏輯的對比，懂差異就記得。HTTP/HTTPS port 80/443 屬【硬背】。'],
    sections: networkingBasicsLessonSections
  },
  'networking-devices-osi': {
    summary: '整理 Hub、Repeater、Bridge、Switch、Router、Gateway 對應 OSI 層級，並比較碰撞域、廣播域與 VLAN。',
    sourceFiles: networkingDevicesOsiSourceFiles,
    terms: networkingDevicesOsiTerms,
    lead: ['設備屬哪一層雖要記，但可從功能推：看 bit 是 L1、看 MAC 是 L2、看 IP 是 L3、轉協定可到 L7。'],
    sections: networkingDevicesOsiLessonSections
  },
  'networking-ip-subnetting': {
    summary: '整理 IPv4 classful、私有 IP、MAC vs IP、CIDR、可用主機數、magic number、三題子網路與 VLSM 計算流程。',
    sourceFiles: networkingIpSubnettingSourceFiles,
    terms: networkingIpSubnettingTerms,
    lead: ['子網路切割是網路科最常見的大計算題，公式要懂，流程要動手算。'],
    sections: networkingIpSubnettingLessonSections
  },
  'networking-routing-l3-protocols': {
    summary: '整理靜態/動態路由、RIP/OSPF/BGP、Distance Vector vs Link State、NAT、L3 協定工具與 IPv4/IPv6 差異。',
    sourceFiles: networkingRoutingL3ProtocolsSourceFiles,
    terms: networkingRoutingL3ProtocolsTerms,
    lead: ['路由概念屬【理解】；協定 facts、指令、IPv6 細節屬【硬背】。'],
    sections: networkingRoutingL3ProtocolsLessonSections
  },
  'networking-transport-layer': {
    summary: '整理電路交換與封包交換、TCP 三方交握/四方交握、SYN Flood、流量控制/壅塞控制，以及 TCP vs UDP。',
    sourceFiles: networkingTransportLayerSourceFiles,
    terms: networkingTransportLayerTerms,
    lead: ['傳輸層大多能靠邏輯理解；握手順序與 header 大小要硬背。'],
    sections: networkingTransportLayerLessonSections
  },
  'networking-application-ports': {
    summary: '整理常見應用層協定與 Port Number、DNS/DHCP/FTP/Email、GET vs POST、URL、SDN、CDN 與即時串流。',
    sourceFiles: networkingApplicationPortsSourceFiles,
    terms: networkingApplicationPortsTerms,
    lead: ['Port 號與 TCP/UDP 屬【硬背】；協定做什麼屬【理解】。'],
    sections: networkingApplicationPortsLessonSections
  },
  'networking-physical-layer': {
    summary: '整理有線/無線傳輸媒介、WiFi/藍牙/USB/行動網路速度、IoT、雲端、Big Data、RFID 與 NFC。',
    sourceFiles: networkingPhysicalLayerSourceFiles,
    terms: networkingPhysicalLayerTerms,
    lead: ['媒介特性、IoT、雲端、Big Data 屬【理解】；各種速度與 IEEE 標準屬【硬背】。'],
    sections: networkingPhysicalLayerLessonSections
  },
  'networking-data-link-layer': {
    summary: '整理 Framing、單工/半雙工/全雙工、多重存取、CSMA/CD、CSMA/CA、543 Rule、ARQ、HDLC、PPP 與 L2/L3 switch。',
    sourceFiles: networkingDataLinkLayerSourceFiles,
    terms: networkingDataLinkLayerTerms,
    lead: ['資料鏈結層多能理解；543 Rule 的數字與 CSMA/CD、CSMA/CA 用在哪裡要硬背。'],
    sections: networkingDataLinkLayerLessonSections
  },
  'networking-security-crypto': {
    summary: '整理資安五大要素、對稱/非對稱加密、雜湊、數位簽章、PKI/CA/憑證與電子商務安全需求。',
    sourceFiles: networkingSecurityCryptoSourceFiles,
    terms: networkingSecurityCryptoTerms,
    lead: ['資安觀念多能靠原理解；加密演算法名稱與簽章流程要熟。'],
    sections: networkingSecurityCryptoLessonSections
  },
  'networking-defense-attacks': {
    summary: '整理防火牆/NGFW/WAF、IDS vs IPS、Proxy、DMZ、VPN/PPTP、惡意程式、常見攻擊、EDR/MDR、NIST CSF 與 ISO 27001。',
    sourceFiles: networkingDefenseAttacksSourceFiles,
    terms: networkingDefenseAttacksTerms,
    lead: ['資安攻防屬今年重點：防禦設備功能與攻擊類型多靠理解，NIST / ISO 名稱需硬背。'],
    sections: networkingDefenseAttacksLessonSections
  }
} as const;

type MarkdownBackedNetworkingTopicId = keyof typeof markdownBackedNetworkingContentById;

const isMarkdownBackedNetworkingTopicId = (id: string): id is MarkdownBackedNetworkingTopicId =>
  id in markdownBackedNetworkingContentById;

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
  },
  'cp-digital-logic-basics': {
    summary: '整理常見邏輯閘、XOR/XNOR 白話判斷、兩輸入真值表，以及布林代數常用定律。',
    sourceFiles: digitalLogicBasicsSourceFiles,
    terms: digitalLogicBasicsTerms,
    lead: [],
    sections: digitalLogicBasicsLessonSections
  },
  'cp-sop-pos': {
    summary: '整理 SOP 與 POS 的用途、真值表轉標準 SOP/POS 的規則、函式先建真值表，以及三變數例題。',
    sourceFiles: sopPosSourceFiles,
    terms: sopPosTerms,
    lead: [],
    sections: sopPosLessonSections
  },
  'cp-karnaugh-map': {
    summary: "整理卡諾圖化簡的圈選規則、2/3/4 變數例題、跨邊環繞與 Don't care 用法。",
    sourceFiles: karnaughMapSourceFiles,
    terms: karnaughMapTerms,
    lead: [],
    sections: karnaughMapLessonSections
  },
  'cp-universal-gates': {
    summary: '整理 NAND 與 NOR 萬用閘概念、德摩根定律、NOT 快速做法，以及 NAND/NOR 實作常見閘數。',
    sourceFiles: universalGatesSourceFiles,
    terms: universalGatesTerms,
    lead: [],
    sections: universalGatesLessonSections
  },
  'cp-combinational-sequential-circuits': {
    summary: '整理組合電路與循序電路的核心差異：輸出是否依賴過去狀態、是否具有記憶與時脈。',
    sourceFiles: combinationalSequentialCircuitsSourceFiles,
    terms: combinationalSequentialCircuitsTerms,
    lead: [],
    sections: combinationalSequentialCircuitsLessonSections
  },
  'cp-os-basics': {
    summary: '整理 OS 分類、Concurrency vs Parallelism，以及 Offline、Spooling、Buffering、Cache 的差異。',
    sourceFiles: operatingSystemBasicsSourceFiles,
    terms: operatingSystemBasicsTerms,
    lead: [],
    sections: operatingSystemBasicsLessonSections
  },
  'cp-io-and-interrupts': {
    summary: '整理 Polling、Interrupt、DMA 的 I/O 處理差異，中斷類型，以及 I/O、Memory、CPU 三種硬體保護。',
    sourceFiles: ioAndInterruptsSourceFiles,
    terms: ioAndInterruptsTerms,
    lead: [],
    sections: ioAndInterruptsLessonSections
  },
  'cp-os-structure': {
    summary: '整理 Command 與 System Call、Monolithic Kernel 與 Microkernel，以及 Virtual Machine 與 Hypervisor 的核心差異。',
    sourceFiles: operatingSystemStructureSourceFiles,
    terms: operatingSystemStructureTerms,
    lead: [],
    sections: operatingSystemStructureLessonSections
  },
  'cp-process': {
    summary: '整理 Process 與 Program、Process State、PCB、三種排程器、Context Switch、搶佔與飢餓/護航效應。',
    sourceFiles: processSourceFiles,
    terms: processTerms,
    lead: [],
    sections: processLessonSections
  },
  'cp-cpu-scheduling': {
    summary: '整理 CPU 排程公式、FCFS/SJF/SRTF/Priority/RR 規則，以及甘特圖、平均等待與平均週轉時間計算。',
    sourceFiles: cpuSchedulingSourceFiles,
    terms: cpuSchedulingTerms,
    lead: [],
    sections: cpuSchedulingLessonSections
  },
  'cp-deadlock': {
    summary: '整理 Deadlock 四個必要條件、預防/避免/偵測復原三策略、安全狀態與銀行家演算法流程。',
    sourceFiles: deadlockSourceFiles,
    terms: deadlockTerms,
    lead: [],
    sections: deadlockLessonSections
  },
  'cp-process-communication': {
    summary: '保留來源的 Process Communication 跳過分析，並整理 IPC 概念層級可撿分的 Shared Memory、Message Passing、Race Condition、Semaphore 等名詞。',
    sourceFiles: processCommunicationSourceFiles,
    terms: processCommunicationTerms,
    lead: [],
    sections: processCommunicationLessonSections
  },
  'cp-memory-management': {
    summary: '整理 First/Next/Best/Worst Fit、Fragmentation、Paging vs Segmentation，以及 TLB 的位址轉換用途。',
    sourceFiles: memoryManagementSourceFiles,
    terms: memoryManagementTerms,
    lead: [],
    sections: memoryManagementLessonSections
  },
  'cp-virtual-memory': {
    summary: '整理 Virtual Memory、Demand Paging、Page Fault、EMAT、Page Replacement、Belady 異常與 Thrashing。',
    sourceFiles: virtualMemorySourceFiles,
    terms: virtualMemoryTerms,
    lead: [],
    sections: virtualMemoryLessonSections
  },
  'cp-disk-management': {
    summary: '整理磁碟結構與存取時間、Disk Scheduling 移動距離、檔案配置法，以及 RAID 0/1/5/6/10 比較。',
    sourceFiles: diskManagementSourceFiles,
    terms: diskManagementTerms,
    lead: [],
    sections: diskManagementLessonSections
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

const createMarkdownBackedNetworkingTopic = (
  config: ProfessionalTopicSkeletonConfig & { id: MarkdownBackedNetworkingTopicId }
): ProfessionalSubjectTopic => {
  const content = markdownBackedNetworkingContentById[config.id];

  return {
    id: config.id,
    subjectKey: config.subjectKey,
    title: config.titleZh,
    summary: content.summary,
    sourceBatch: 'manual-section-fill-networking-20260618',
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
  if (isMarkdownBackedNetworkingTopicId(config.id)) {
    return createMarkdownBackedNetworkingTopic({ ...config, id: config.id });
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
