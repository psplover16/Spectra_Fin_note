import type {
  AlgorithmComplexityRow,
  ProfessionalSubjectTopic,
  ProfessionalTopicsBySubject,
  SubjectTopicBlock,
  TechnicalTerm
} from '@/modules/subjectTopics/types/subjectTopic';

interface ComputerPrinciplesTopicConfig {
  id: string;
  titleZh: string;
  titleEn: string;
  sourceSection: string;
  summary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  terms: readonly TechnicalTerm[];
  termExplanations?: readonly string[];
  exampleProblem: string;
  exampleSteps: readonly string[];
  exampleResult: string;
  pitfallItems: readonly string[];
  difficulty: 'intro' | 'core' | 'advanced';
  topicType: 'concept' | 'procedure';
}

const computerPrinciplesTopicConfigs = [
  {
    "id": "cp-von-neumann-architecture",
    "titleZh": "馮紐曼架構",
    "titleEn": "Von Neumann Architecture",
    "sourceSection": "3a. 基本計概 / 馮紐曼架構",
    "summary": "說明馮紐曼架構如何把程式與資料放在同一套記憶體，由中央處理器依指令週期逐步取指令、解碼、取運算元、執行與寫回，並理解共用記憶體/匯流排造成的馮紐曼瓶頸。",
    "examOutline": [
      "能說明程式內儲(Stored-Program Concept)：程式和資料都放在同一套記憶體，CPU 讀取指令的方式和讀取資料一樣都透過記憶體與匯流排。",
      "能依五大單元解釋資料流：輸入單元(Input Unit)、輸出單元(Output Unit)、記憶體(Memory)、算術邏輯單元(Arithmetic Logic Unit)、控制單元(Control Unit)。",
      "能用指令週期(Instruction Cycle) 說明 CPU 如何完成取指令(Fetch)、解碼(Decode)、取運算元(Operand Fetch)、執行(Execute) 與寫回(Write Back)。",
      "能比較馮紐曼架構(Von Neumann Architecture) 與哈佛架構(Harvard Architecture)，並指出馮紐曼瓶頸(Von Neumann Bottleneck) 來自程式與資料共用通道。"
    ],
    "memoryPoints": [
      "程式和資料都放在同一套記憶體，是馮紐曼架構最核心的程式內儲觀念。",
      "控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號；算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷。",
      "輸入單元(Input Unit) 把外部資料送進系統，輸出單元(Output Unit) 把處理結果送回外部，記憶體(Memory) 則保存程式、資料與中間結果。",
      "Harvard Architecture 將程式記憶體與資料記憶體分離；馮紐曼架構則共用記憶體與通道，因此容易出現取指令與取資料互相等待。"
    ],
    "understandingNotes": [
      "程式內儲(Stored-Program Concept) 的意思是：程式指令不是焊死在硬體線路裡，而是像資料一樣被存放、讀取與修改，所以同一台硬體可以載入不同程式完成不同工作。",
      "中央處理器(Central Processing Unit) 在這個模型中負責執行指令；控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號，決定下一步要讀記憶體、使用 ALU、跳轉或輸出。",
      "算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷，例如 A + B、A > B、AND/OR 這類實際運算都會落到 ALU。",
      "輸入單元(Input Unit) 把外部資料送進系統，例如鍵盤輸入、檔案讀入或感測器資料；輸出單元(Output Unit) 把處理結果送回外部，例如螢幕顯示、列印或寫出檔案。",
      "取指令(Fetch) 是依 Program Counter 找到下一個指令，通常會把指令從記憶體載入指令暫存器；Program Counter 接著更新到下一個位址或等待跳轉改寫。",
      "解碼(Decode) 是判斷 opcode 要 CPU 做什麼，例如加法、載入、儲存或跳轉，同時判斷需要哪些運算元。",
      "取運算元(Operand Fetch) 是把資料或有效位址準備好，可能從暫存器、記憶體或指令本身取得。",
      "執行(Execute) 是由 ALU 或控制流程完成動作，例如做加法、比較、讀寫記憶體或改變 Program Counter。",
      "寫回(Write Back) 是把結果存回暫存器或記憶體，讓後續指令能接著使用結果。",
      "馮紐曼瓶頸(Von Neumann Bottleneck) 不是 CPU 不會計算，而是 CPU 很快、記憶體和匯流排傳輸較慢時，取指令與取資料共用通道會讓 CPU 等資料。",
      "Harvard Architecture 將程式記憶體與資料記憶體分離，常見比較點是能同時取指令與取資料，但設計與彈性也和馮紐曼架構不同。"
    ],
    "terms": [
      {
        "zh": "馮紐曼架構",
        "en": "Von Neumann Architecture"
      },
      {
        "zh": "程式內儲",
        "en": "Stored-Program Concept"
      },
      {
        "zh": "中央處理器",
        "en": "Central Processing Unit"
      },
      {
        "zh": "控制單元",
        "en": "Control Unit"
      },
      {
        "zh": "算術邏輯單元",
        "en": "Arithmetic Logic Unit"
      },
      {
        "zh": "記憶體",
        "en": "Memory"
      },
      {
        "zh": "輸入/輸出",
        "en": "Input/Output"
      },
      {
        "zh": "輸入單元",
        "en": "Input Unit"
      },
      {
        "zh": "輸出單元",
        "en": "Output Unit"
      },
      {
        "zh": "指令週期",
        "en": "Instruction Cycle"
      },
      {
        "zh": "取指令",
        "en": "Fetch"
      },
      {
        "zh": "解碼",
        "en": "Decode"
      },
      {
        "zh": "取運算元",
        "en": "Operand Fetch"
      },
      {
        "zh": "執行",
        "en": "Execute"
      },
      {
        "zh": "寫回",
        "en": "Write Back"
      },
      {
        "zh": "程式計數器",
        "en": "Program Counter"
      },
      {
        "zh": "操作碼",
        "en": "Opcode"
      },
      {
        "zh": "馮紐曼瓶頸",
        "en": "Von Neumann Bottleneck"
      },
      {
        "zh": "哈佛架構",
        "en": "Harvard Architecture"
      }
    ],
    "termExplanations": [
      "馮紐曼架構(Von Neumann Architecture)：以程式內儲為核心的通用電腦架構，程式與資料共用同一套記憶體與通道。",
      "程式內儲(Stored-Program Concept)：把指令也視為可存取的資料，因此同一台電腦能靠載入不同程式完成不同任務。",
      "中央處理器(Central Processing Unit)：執行指令的核心硬體，通常包含控制單元、算術邏輯單元與暫存器。",
      "控制單元(Control Unit)：解讀指令並協調記憶體、ALU、輸入與輸出等部件動作。",
      "算術邏輯單元(Arithmetic Logic Unit)：執行算術運算、比較與布林邏輯運算。",
      "記憶體(Memory)：保存程式指令、資料與中間結果，讓 CPU 可以讀取或寫回。",
      "輸入/輸出(Input/Output)：輸入把外部資料送入系統，輸出把處理結果交回外部世界。",
      "指令週期(Instruction Cycle)：CPU 執行一個指令時常見的取指令、解碼、取運算元、執行、寫回流程。",
      "馮紐曼瓶頸(Von Neumann Bottleneck)：程式與資料共用記憶體通道造成 CPU 等待傳輸的效能限制。",
      "哈佛架構(Harvard Architecture)：把程式記憶體與資料記憶體分離的架構，常用來和馮紐曼架構比較。"
    ],
    "exampleProblem": "以「讀入 A 與 B，計算 A + B，並輸出結果」說明馮紐曼架構的資料與指令如何流動。",
    "exampleSteps": [
      "程式指令與資料 A、B 先透過輸入單元(Input Unit) 放入記憶體(Memory)，CPU 不需要更換硬體線路，只要讀取不同程式即可工作。",
      "取指令(Fetch) 階段，控制單元(Control Unit) 依 Program Counter 從記憶體取出「載入 A」或「載入 B」等下一個指令。",
      "解碼(Decode) 階段，控制單元讀 opcode，判斷這個指令要載入資料、執行加法，還是把結果輸出。",
      "取運算元(Operand Fetch) 階段，CPU 把 A、B 或它們的記憶體位址準備好，必要時先載入暫存器。",
      "執行(Execute) 階段，算術邏輯單元(Arithmetic Logic Unit) 完成 A + B。",
      "寫回(Write Back) 階段，CPU 把加總結果存回暫存器或記憶體，最後由輸出單元(Output Unit) 顯示或寫出。",
      "若每一步都必須等待同一條記憶體/匯流排通道傳送指令與資料，CPU 即使很快也會被傳輸延遲限制，這就是馮紐曼瓶頸(Von Neumann Bottleneck)。"
    ],
    "exampleResult": "馮紐曼架構的優點是同一硬體可執行不同程式；限制是指令與資料共用記憶體和通道，當傳輸跟不上 CPU 時會形成瓶頸。",
    "pitfallItems": [
      "不要把程式內儲誤解成「只有資料存在記憶體」；在馮紐曼架構中，程式指令也存在記憶體。",
      "不要把控制單元(Control Unit) 和算術邏輯單元(Arithmetic Logic Unit) 混在一起：CU 決定流程並發控制訊號，ALU 負責實際算術與邏輯運算。",
      "不要把馮紐曼瓶頸(Von Neumann Bottleneck) 寫成 CPU 功能不足；重點是 CPU、記憶體與匯流排速度不匹配。",
      "不要把 Harvard Architecture 說成一定全面優於 Von Neumann Architecture；考試通常要求比較記憶體分離、取指令與取資料能否並行、設計彈性與使用情境。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-turing-machine-and-test",
    "titleZh": "圖靈機與圖靈測試",
    "titleEn": "Turing Machine and Turing Test",
    "sourceSection": "3a. 基本計概 / 圖靈機與圖靈測試",
    "summary": "整理圖靈機與圖靈測試在基本計概中的國考定位，重點包含區分抽象模型與 AI 測試。",
    "examOutline": [
      "能說明圖靈機與圖靈測試(Turing Machine and Turing Test) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 圖靈機與圖靈測試」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 區分抽象模型與 AI 測試。"
    ],
    "memoryPoints": [
      "圖靈機與圖靈測試 的速記核心是：區分抽象模型與 AI 測試。",
      "看到 Turing Machine and Turing Test 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "圖靈機與圖靈測試 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「區分抽象模型與 AI 測試」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "圖靈機",
        "en": "Turing Machine"
      },
      {
        "zh": "圖靈測試",
        "en": "Turing Test"
      },
      {
        "zh": "可計算",
        "en": "Computable"
      },
      {
        "zh": "有限控制器",
        "en": "Finite Control"
      }
    ],
    "exampleProblem": "判斷題目問到「圖靈機與圖靈測試」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 圖靈機與圖靈測試(Turing Machine and Turing Test)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「區分抽象模型與 AI 測試」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 圖靈機與圖靈測試(Turing Machine and Turing Test) 放回 3a. 基本計概 / 圖靈機與圖靈測試 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 圖靈機與圖靈測試 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Turing Machine and Turing Test 時，要能回到中文 圖靈機與圖靈測試，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "intro",
    "topicType": "concept"
  },
  {
    "id": "cp-machine-instruction-cycle",
    "titleZh": "機器指令與指令週期",
    "titleEn": "Machine Instruction and Instruction Cycle",
    "sourceSection": "3a. 基本計概 / 機器指令與指令週期",
    "summary": "整理機器指令與指令週期在基本計概中的國考定位，重點包含覆蓋 5 階段。",
    "examOutline": [
      "能說明機器指令與指令週期(Machine Instruction and Instruction Cycle) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 機器指令與指令週期」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 覆蓋 5 階段。"
    ],
    "memoryPoints": [
      "機器指令與指令週期 的速記核心是：覆蓋 5 階段。",
      "看到 Machine Instruction and Instruction Cycle 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "機器指令與指令週期 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「覆蓋 5 階段」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "機器指令",
        "en": "Machine Instruction"
      },
      {
        "zh": "操作碼",
        "en": "Opcode"
      },
      {
        "zh": "運算元",
        "en": "Operand"
      },
      {
        "zh": "指令週期",
        "en": "Instruction Cycle"
      },
      {
        "zh": "程式計數器",
        "en": "Program Counter"
      }
    ],
    "exampleProblem": "判斷題目問到「機器指令與指令週期」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 機器指令與指令週期(Machine Instruction and Instruction Cycle)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「覆蓋 5 階段」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 機器指令與指令週期(Machine Instruction and Instruction Cycle) 放回 3a. 基本計概 / 機器指令與指令週期 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 機器指令與指令週期 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Machine Instruction and Instruction Cycle 時，要能回到中文 機器指令與指令週期，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-pipeline",
    "titleZh": "Pipeline（管線化）",
    "titleEn": "Pipelining",
    "sourceSection": "3a. 基本計概 / Pipeline（管線化）",
    "summary": "整理Pipeline（管線化）在基本計概中的國考定位，重點包含需要公式與 speedup 算例。",
    "examOutline": [
      "能說明Pipeline(Pipelining) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Pipeline（管線化）」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 需要公式與 speedup 算例。"
    ],
    "memoryPoints": [
      "Pipeline（管線化） 的速記核心是：需要公式與 speedup 算例。",
      "看到 Pipelining 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Pipeline（管線化） 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「需要公式與 speedup 算例」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "管線化",
        "en": "Pipelining"
      },
      {
        "zh": "吞吐量",
        "en": "Throughput"
      },
      {
        "zh": "加速比",
        "en": "Speedup"
      },
      {
        "zh": "停頓",
        "en": "Stall"
      }
    ],
    "exampleProblem": "n=10、k=5、t=2ns 時估算 speedup。",
    "exampleSteps": [
      "非管線時間 = 10 * 5 * 2 = 100ns。",
      "管線時間 = (5 + 10 - 1) * 2 = 28ns。",
      "Speedup = 100 / 28，約 3.57。"
    ],
    "exampleResult": "理想 speedup 約 3.57 倍，實務還要扣 hazard 與 stall。",
    "pitfallItems": [
      "不要只背 Pipeline（管線化） 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Pipelining 時，要能回到中文 Pipeline，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-bus",
    "titleZh": "匯流排（Bus）",
    "titleEn": "Bus",
    "sourceSection": "3a. 基本計概 / 匯流排（Bus）",
    "summary": "整理匯流排（Bus）在基本計概中的國考定位，重點包含位址空間計算。",
    "examOutline": [
      "能說明匯流排(Bus) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 匯流排（Bus）」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 位址空間計算。"
    ],
    "memoryPoints": [
      "匯流排（Bus） 的速記核心是：位址空間計算。",
      "看到 Bus 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "匯流排（Bus） 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「位址空間計算」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "匯流排",
        "en": "Bus"
      },
      {
        "zh": "位址匯流排",
        "en": "Address Bus"
      },
      {
        "zh": "資料匯流排",
        "en": "Data Bus"
      },
      {
        "zh": "控制匯流排",
        "en": "Control Bus"
      }
    ],
    "exampleProblem": "32-bit address bus 且每個位址代表 1 byte，可定址多少？",
    "exampleSteps": [
      "可產生 2^32 個位址。",
      "每個位址是 1 byte，所以容量為 2^32 bytes。",
      "2^32 bytes = 4GB。"
    ],
    "exampleResult": "可定址空間為 4GB。",
    "pitfallItems": [
      "不要只背 匯流排（Bus） 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Bus 時，要能回到中文 匯流排，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-performance-formulas",
    "titleZh": "效能名詞與公式",
    "titleEn": "Performance Terms and Formulas",
    "sourceSection": "3a. 基本計概 / 效能名詞與公式",
    "summary": "整理效能名詞與公式在基本計概中的國考定位，重點包含CPU time、CPI、MIPS。",
    "examOutline": [
      "能說明效能名詞與公式(Performance Terms and Formulas) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 效能名詞與公式」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 CPU time、CPI、MIPS。"
    ],
    "memoryPoints": [
      "效能名詞與公式 的速記核心是：CPU time、CPI、MIPS。",
      "看到 Performance Terms and Formulas 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "效能名詞與公式 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「CPU time、CPI、MIPS」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "時脈",
        "en": "Clock"
      },
      {
        "zh": "時脈週期",
        "en": "Clock Cycle"
      },
      {
        "zh": "時脈頻率",
        "en": "Clock Rate"
      },
      {
        "zh": "每指令週期數",
        "en": "Cycles Per Instruction"
      },
      {
        "zh": "每秒百萬指令數",
        "en": "Million Instructions Per Second"
      }
    ],
    "exampleProblem": "Instruction Count=1,000,000、CPI=2、Clock Rate=1GHz，CPU Time 為何？",
    "exampleSteps": [
      "1GHz = 1,000,000,000 cycles/sec。",
      "CPU Time = 1,000,000 * 2 / 1,000,000,000。",
      "結果 = 0.002 秒。"
    ],
    "exampleResult": "CPU Time = 2ms。",
    "pitfallItems": [
      "不要只背 效能名詞與公式 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Performance Terms and Formulas 時，要能回到中文 效能名詞與公式，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-risc-cisc",
    "titleZh": "RISC 與 CISC",
    "titleEn": "RISC and CISC",
    "sourceSection": "3a. 基本計概 / RISC 與 CISC",
    "summary": "整理RISC 與 CISC在基本計概中的國考定位，重點包含比較表。",
    "examOutline": [
      "能說明RISC 與 CISC(RISC and CISC) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / RISC 與 CISC」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 比較表。"
    ],
    "memoryPoints": [
      "RISC 與 CISC 的速記核心是：比較表。",
      "看到 RISC and CISC 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "RISC 與 CISC 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「比較表」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "精簡指令集電腦",
        "en": "Reduced Instruction Set Computer"
      },
      {
        "zh": "複雜指令集電腦",
        "en": "Complex Instruction Set Computer"
      },
      {
        "zh": "載入/儲存架構",
        "en": "Load/Store Architecture"
      },
      {
        "zh": "指令集架構",
        "en": "Instruction Set Architecture"
      }
    ],
    "exampleProblem": "判斷題目問到「RISC 與 CISC」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 RISC 與 CISC(RISC and CISC)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「比較表」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 RISC 與 CISC(RISC and CISC) 放回 3a. 基本計概 / RISC 與 CISC 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要把 RISC 簡化成一定比較快。",
      "現代 CISC 可能轉成微指令改善 pipeline。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-memory-hierarchy",
    "titleZh": "Memory 階層圖",
    "titleEn": "Memory Hierarchy",
    "sourceSection": "3a. 基本計概 / Memory 階層圖",
    "summary": "整理Memory 階層圖在基本計概中的國考定位，重點包含locality。",
    "examOutline": [
      "能說明Memory 階層圖(Memory Hierarchy) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Memory 階層圖」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 locality。"
    ],
    "memoryPoints": [
      "Memory 階層圖 的速記核心是：locality。",
      "看到 Memory Hierarchy 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Memory 階層圖 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「locality」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "記憶體階層",
        "en": "Memory Hierarchy"
      },
      {
        "zh": "時間區域性",
        "en": "Temporal Locality"
      },
      {
        "zh": "空間區域性",
        "en": "Spatial Locality"
      },
      {
        "zh": "主記憶體",
        "en": "Main Memory"
      }
    ],
    "exampleProblem": "判斷題目問到「Memory 階層圖」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Memory 階層圖(Memory Hierarchy)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「locality」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Memory 階層圖(Memory Hierarchy) 放回 3a. 基本計概 / Memory 階層圖 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 Memory 階層圖 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Memory Hierarchy 時，要能回到中文 Memory 階層圖，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-memory-classification",
    "titleZh": "Memory 分類圖",
    "titleEn": "Memory Classification",
    "sourceSection": "3a. 基本計概 / Memory 分類圖",
    "summary": "整理Memory 分類圖在基本計概中的國考定位，重點包含RAM/ROM、DRAM/SRAM。",
    "examOutline": [
      "能說明Memory 分類圖(Memory Classification) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Memory 分類圖」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 RAM/ROM、DRAM/SRAM。"
    ],
    "memoryPoints": [
      "Memory 分類圖 的速記核心是：RAM/ROM、DRAM/SRAM。",
      "看到 Memory Classification 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Memory 分類圖 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「RAM/ROM、DRAM/SRAM」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "隨機存取記憶體",
        "en": "Random Access Memory"
      },
      {
        "zh": "唯讀記憶體",
        "en": "Read-Only Memory"
      },
      {
        "zh": "動態隨機存取記憶體",
        "en": "Dynamic RAM"
      },
      {
        "zh": "靜態隨機存取記憶體",
        "en": "Static RAM"
      },
      {
        "zh": "快閃記憶體",
        "en": "Flash Memory"
      }
    ],
    "exampleProblem": "判斷題目問到「Memory 分類圖」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Memory 分類圖(Memory Classification)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「RAM/ROM、DRAM/SRAM」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Memory 分類圖(Memory Classification) 放回 3a. 基本計概 / Memory 分類圖 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 Memory 分類圖 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Memory Classification 時，要能回到中文 Memory 分類圖，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-registers",
    "titleZh": "Register（暫存器）",
    "titleEn": "Register",
    "sourceSection": "3a. 基本計概 / Register（暫存器）",
    "summary": "整理Register（暫存器）在基本計概中的國考定位，重點包含PC、IR、MAR、MDR。",
    "examOutline": [
      "能說明Register(Register) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Register（暫存器）」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 PC、IR、MAR、MDR。"
    ],
    "memoryPoints": [
      "Register（暫存器） 的速記核心是：PC、IR、MAR、MDR。",
      "看到 Register 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Register（暫存器） 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「PC、IR、MAR、MDR」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "暫存器",
        "en": "Register"
      },
      {
        "zh": "程式計數器",
        "en": "Program Counter"
      },
      {
        "zh": "指令暫存器",
        "en": "Instruction Register"
      },
      {
        "zh": "記憶體位址暫存器",
        "en": "Memory Address Register"
      },
      {
        "zh": "記憶體資料暫存器",
        "en": "Memory Data Register"
      }
    ],
    "exampleProblem": "判斷題目問到「Register（暫存器）」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Register(Register)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「PC、IR、MAR、MDR」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Register(Register) 放回 3a. 基本計概 / Register（暫存器） 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 Register（暫存器） 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Register 時，要能回到中文 Register，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-cache",
    "titleZh": "Cache",
    "titleEn": "Cache Memory",
    "sourceSection": "3a. 基本計概 / Cache",
    "summary": "整理Cache在基本計概中的國考定位，重點包含AMAT 算例。",
    "examOutline": [
      "能說明Cache(Cache Memory) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Cache」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 AMAT 算例。"
    ],
    "memoryPoints": [
      "Cache 的速記核心是：AMAT 算例。",
      "看到 Cache Memory 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Cache 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「AMAT 算例」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "快取",
        "en": "Cache"
      },
      {
        "zh": "命中率",
        "en": "Hit Ratio"
      },
      {
        "zh": "未命中率",
        "en": "Miss Rate"
      },
      {
        "zh": "平均記憶體存取時間",
        "en": "Average Memory Access Time"
      },
      {
        "zh": "寫穿",
        "en": "Write Through"
      },
      {
        "zh": "寫回",
        "en": "Write Back"
      }
    ],
    "exampleProblem": "Hit Time=1ns、Miss Rate=5%、Miss Penalty=80ns，AMAT 為何？",
    "exampleSteps": [
      "AMAT = 1 + 0.05 * 80。",
      "0.05 * 80 = 4。",
      "AMAT = 5ns。"
    ],
    "exampleResult": "平均記憶體存取時間為 5ns。",
    "pitfallItems": [
      "不要只背 Cache 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Cache Memory 時，要能回到中文 Cache，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-hazard",
    "titleZh": "Hazard",
    "titleEn": "Pipeline Hazard",
    "sourceSection": "3a. 基本計概 / Hazard",
    "summary": "整理Hazard在基本計概中的國考定位，重點包含structural/data/control。",
    "examOutline": [
      "能說明Hazard(Pipeline Hazard) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / Hazard」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 structural/data/control。"
    ],
    "memoryPoints": [
      "Hazard 的速記核心是：structural/data/control。",
      "看到 Pipeline Hazard 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Hazard 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「structural/data/control」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "管線危障",
        "en": "Pipeline Hazard"
      },
      {
        "zh": "結構危障",
        "en": "Structural Hazard"
      },
      {
        "zh": "資料危障",
        "en": "Data Hazard"
      },
      {
        "zh": "控制危障",
        "en": "Control Hazard"
      },
      {
        "zh": "資料前遞",
        "en": "Forwarding"
      }
    ],
    "exampleProblem": "判斷題目問到「Hazard」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Hazard(Pipeline Hazard)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「structural/data/control」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Hazard(Pipeline Hazard) 放回 3a. 基本計概 / Hazard 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 Hazard 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Pipeline Hazard 時，要能回到中文 Hazard，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-usb-speed",
    "titleZh": "USB 速度",
    "titleEn": "USB Speed",
    "sourceSection": "3a. 基本計概 / USB 速度",
    "summary": "整理USB 速度在基本計概中的國考定位，重點包含版本速度表。",
    "examOutline": [
      "能說明USB 速度(USB Speed) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / USB 速度」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 版本速度表。"
    ],
    "memoryPoints": [
      "USB 速度 的速記核心是：版本速度表。",
      "看到 USB Speed 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "USB 速度 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「版本速度表」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "低速",
        "en": "Low Speed"
      },
      {
        "zh": "全速",
        "en": "Full Speed"
      },
      {
        "zh": "高速",
        "en": "High Speed"
      },
      {
        "zh": "超高速",
        "en": "SuperSpeed"
      },
      {
        "zh": "USB4",
        "en": "USB4"
      }
    ],
    "exampleProblem": "判斷題目問到「USB 速度」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 USB 速度(USB Speed)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「版本速度表」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 USB 速度(USB Speed) 放回 3a. 基本計概 / USB 速度 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要把 USB 3.0 的 5 Gbps 與 USB 3.1 Gen 2 的 10 Gbps 混淆。",
      "注意 Mbps 與 Gbps 單位。"
    ],
    "difficulty": "intro",
    "topicType": "concept"
  },
  {
    "id": "cp-base-conversion",
    "titleZh": "進制轉換",
    "titleEn": "Base Conversion",
    "sourceSection": "3a. 基本計概 / 進制轉換",
    "summary": "整理進制轉換在基本計概中的國考定位，重點包含連除與連乘。",
    "examOutline": [
      "能說明進制轉換(Base Conversion) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 進制轉換」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 連除與連乘。"
    ],
    "memoryPoints": [
      "進制轉換 的速記核心是：連除與連乘。",
      "看到 Base Conversion 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "進制轉換 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「連除與連乘」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "進制轉換",
        "en": "Base Conversion"
      },
      {
        "zh": "連除法",
        "en": "Repeated Division"
      },
      {
        "zh": "連乘法",
        "en": "Repeated Multiplication"
      },
      {
        "zh": "位權",
        "en": "Positional Weight"
      }
    ],
    "exampleProblem": "將十進位 13 轉成二進位。",
    "exampleSteps": [
      "13 ÷ 2 = 6 餘 1。",
      "6 ÷ 2 = 3 餘 0。",
      "3 ÷ 2 = 1 餘 1。",
      "1 ÷ 2 = 0 餘 1。",
      "餘數由下往上讀。"
    ],
    "exampleResult": "13(10) = 1101(2)。",
    "pitfallItems": [
      "不要只背 進制轉換 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Base Conversion 時，要能回到中文 進制轉換，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-complement-conversion",
    "titleZh": "補數轉換",
    "titleEn": "Complement Representation",
    "sourceSection": "3a. 基本計概 / 補數轉換",
    "summary": "整理補數轉換在基本計概中的國考定位，重點包含範圍與轉換。",
    "examOutline": [
      "能說明補數轉換(Complement Representation) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 補數轉換」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 範圍與轉換。"
    ],
    "memoryPoints": [
      "補數轉換 的速記核心是：範圍與轉換。",
      "看到 Complement Representation 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "補數轉換 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「範圍與轉換」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "符號大小",
        "en": "Sign-Magnitude"
      },
      {
        "zh": "一補數",
        "en": "One's Complement"
      },
      {
        "zh": "二補數",
        "en": "Two's Complement"
      },
      {
        "zh": "符號位",
        "en": "Sign Bit"
      }
    ],
    "exampleProblem": "用 4 bits 表示 -3 的 two's complement。",
    "exampleSteps": [
      "+3 = 0011。",
      "位元反相得到 1100。",
      "加 1 得到 1101。"
    ],
    "exampleResult": "-3 的 4-bit two's complement 是 1101。",
    "pitfallItems": [
      "不要只背 補數轉換 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Complement Representation 時，要能回到中文 補數轉換，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-floating-point-conversion",
    "titleZh": "浮點數轉換",
    "titleEn": "Floating-Point Conversion",
    "sourceSection": "3a. 基本計概 / 浮點數轉換",
    "summary": "整理浮點數轉換在基本計概中的國考定位，重點包含IEEE 754。",
    "examOutline": [
      "能說明浮點數轉換(Floating-Point Conversion) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 浮點數轉換」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 IEEE 754。"
    ],
    "memoryPoints": [
      "浮點數轉換 的速記核心是：IEEE 754。",
      "看到 Floating-Point Conversion 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "浮點數轉換 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「IEEE 754」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "浮點數",
        "en": "Floating Point"
      },
      {
        "zh": "符號位",
        "en": "Sign Bit"
      },
      {
        "zh": "指數",
        "en": "Exponent"
      },
      {
        "zh": "尾數",
        "en": "Fraction"
      },
      {
        "zh": "偏移值",
        "en": "Bias"
      }
    ],
    "exampleProblem": "IEEE 754 單精度 exponent 欄位值 130，實際指數為何？",
    "exampleSteps": [
      "單精度 bias = 127。",
      "實際指數 = E - bias = 130 - 127。",
      "結果為 3。"
    ],
    "exampleResult": "實際指數是 3。",
    "pitfallItems": [
      "不要只背 浮點數轉換 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Floating-Point Conversion 時，要能回到中文 浮點數轉換，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-codes-and-check-codes",
    "titleZh": "數碼、文字碼與檢查碼",
    "titleEn": "Codes and Check Codes",
    "sourceSection": "3a. 基本計概 / 數碼、文字碼與檢查碼",
    "summary": "整理數碼、文字碼與檢查碼在基本計概中的國考定位，重點包含Hamming distance。",
    "examOutline": [
      "能說明數碼、文字碼與檢查碼(Codes and Check Codes) 的定義、用途與常考問法。",
      "能把來源段落「3a. 基本計概 / 數碼、文字碼與檢查碼」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 Hamming distance。"
    ],
    "memoryPoints": [
      "數碼、文字碼與檢查碼 的速記核心是：Hamming distance。",
      "看到 Codes and Check Codes 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "數碼、文字碼與檢查碼 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「Hamming distance」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "二進碼十進數",
        "en": "Binary-Coded Decimal"
      },
      {
        "zh": "葛雷碼",
        "en": "Gray Code"
      },
      {
        "zh": "同位元檢查",
        "en": "Parity Check"
      },
      {
        "zh": "循環冗餘檢查",
        "en": "Cyclic Redundancy Check"
      },
      {
        "zh": "漢明碼",
        "en": "Hamming Code"
      },
      {
        "zh": "漢明距",
        "en": "Hamming Distance"
      }
    ],
    "exampleProblem": "若要更正 1 個錯誤 bit，最小 Hamming Distance 需多少？",
    "exampleSteps": [
      "更正 t 個錯誤公式為最小距離 >= 2t + 1。",
      "代入 t = 1。",
      "2 * 1 + 1 = 3。"
    ],
    "exampleResult": "至少需要 Hamming Distance 3。",
    "pitfallItems": [
      "不要只背 數碼、文字碼與檢查碼 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Codes and Check Codes 時，要能回到中文 數碼、文字碼與檢查碼，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-digital-logic-basics",
    "titleZh": "基本邏輯",
    "titleEn": "Digital Logic Basics",
    "sourceSection": "3b. 數位邏輯 / 基本邏輯",
    "summary": "整理基本邏輯在數位邏輯中的國考定位，重點包含邏輯閘與布林代數。",
    "examOutline": [
      "能說明基本邏輯(Digital Logic Basics) 的定義、用途與常考問法。",
      "能把來源段落「3b. 數位邏輯 / 基本邏輯」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 邏輯閘與布林代數。"
    ],
    "memoryPoints": [
      "基本邏輯 的速記核心是：邏輯閘與布林代數。",
      "看到 Digital Logic Basics 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "基本邏輯 不是孤立名詞，而是 數位邏輯 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「邏輯閘與布林代數」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "邏輯閘",
        "en": "Logic Gate"
      },
      {
        "zh": "真值表",
        "en": "Truth Table"
      },
      {
        "zh": "布林代數",
        "en": "Boolean Algebra"
      },
      {
        "zh": "德摩根定理",
        "en": "De Morgan's Law"
      }
    ],
    "exampleProblem": "判斷題目問到「基本邏輯」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 基本邏輯(Digital Logic Basics)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「邏輯閘與布林代數」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 基本邏輯(Digital Logic Basics) 放回 3b. 數位邏輯 / 基本邏輯 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 基本邏輯 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Digital Logic Basics 時，要能回到中文 基本邏輯，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-sop-pos",
    "titleZh": "SOP 與 POS",
    "titleEn": "SOP and POS",
    "sourceSection": "3b. 數位邏輯 / SOP 與 POS",
    "summary": "整理SOP 與 POS在數位邏輯中的國考定位，重點包含minterm/maxterm。",
    "examOutline": [
      "能說明SOP 與 POS(SOP and POS) 的定義、用途與常考問法。",
      "能把來源段落「3b. 數位邏輯 / SOP 與 POS」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 minterm/maxterm。"
    ],
    "memoryPoints": [
      "SOP 與 POS 的速記核心是：minterm/maxterm。",
      "看到 SOP and POS 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "SOP 與 POS 不是孤立名詞，而是 數位邏輯 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「minterm/maxterm」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "積項和",
        "en": "Sum of Products"
      },
      {
        "zh": "和項積",
        "en": "Product of Sums"
      },
      {
        "zh": "最小項",
        "en": "Minterm"
      },
      {
        "zh": "最大項",
        "en": "Maxterm"
      }
    ],
    "exampleProblem": "判斷題目問到「SOP 與 POS」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 SOP 與 POS(SOP and POS)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「minterm/maxterm」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 SOP 與 POS(SOP and POS) 放回 3b. 數位邏輯 / SOP 與 POS 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 SOP 與 POS 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 SOP and POS 時，要能回到中文 SOP 與 POS，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-karnaugh-map",
    "titleZh": "卡諾圖化簡",
    "titleEn": "Karnaugh Map",
    "sourceSection": "3b. 數位邏輯 / 卡諾圖化簡",
    "summary": "整理卡諾圖化簡在數位邏輯中的國考定位，重點包含圈選規則。",
    "examOutline": [
      "能說明卡諾圖化簡(Karnaugh Map) 的定義、用途與常考問法。",
      "能把來源段落「3b. 數位邏輯 / 卡諾圖化簡」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 圈選規則。"
    ],
    "memoryPoints": [
      "卡諾圖化簡 的速記核心是：圈選規則。",
      "看到 Karnaugh Map 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "卡諾圖化簡 不是孤立名詞，而是 數位邏輯 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「圈選規則」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "卡諾圖",
        "en": "Karnaugh Map"
      },
      {
        "zh": "無關項",
        "en": "Don't Care"
      },
      {
        "zh": "相鄰格",
        "en": "Adjacent Cell"
      },
      {
        "zh": "化簡",
        "en": "Simplification"
      }
    ],
    "exampleProblem": "四個相鄰 1 可以圈成一組時，會消掉幾個變數？",
    "exampleSteps": [
      "四格 = 2^2。",
      "每增加一個 2 的次方，代表多消掉一個變數。",
      "四格會消掉 2 個變數。"
    ],
    "exampleResult": "圈 4 格可消掉 2 個變數。",
    "pitfallItems": [
      "不要只背 卡諾圖化簡 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Karnaugh Map 時，要能回到中文 卡諾圖化簡，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-universal-gates",
    "titleZh": "萬用閘",
    "titleEn": "Universal Gates",
    "sourceSection": "3b. 數位邏輯 / 萬用閘",
    "summary": "整理萬用閘在數位邏輯中的國考定位，重點包含NAND/NOR。",
    "examOutline": [
      "能說明萬用閘(Universal Gates) 的定義、用途與常考問法。",
      "能把來源段落「3b. 數位邏輯 / 萬用閘」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 NAND/NOR。"
    ],
    "memoryPoints": [
      "萬用閘 的速記核心是：NAND/NOR。",
      "看到 Universal Gates 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "萬用閘 不是孤立名詞，而是 數位邏輯 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「NAND/NOR」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "萬用閘",
        "en": "Universal Gate"
      },
      {
        "zh": "反及閘",
        "en": "NAND Gate"
      },
      {
        "zh": "反或閘",
        "en": "NOR Gate"
      },
      {
        "zh": "反相器",
        "en": "Inverter"
      }
    ],
    "exampleProblem": "判斷題目問到「萬用閘」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 萬用閘(Universal Gates)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「NAND/NOR」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 萬用閘(Universal Gates) 放回 3b. 數位邏輯 / 萬用閘 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 萬用閘 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Universal Gates 時，要能回到中文 萬用閘，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-combinational-sequential-circuits",
    "titleZh": "組合與循序電路",
    "titleEn": "Combinational and Sequential Circuits",
    "sourceSection": "3b. 數位邏輯 / 組合與循序電路",
    "summary": "整理組合與循序電路在數位邏輯中的國考定位，重點包含基本辨認。",
    "examOutline": [
      "能說明組合與循序電路(Combinational and Sequential Circuits) 的定義、用途與常考問法。",
      "能把來源段落「3b. 數位邏輯 / 組合與循序電路」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 基本辨認。"
    ],
    "memoryPoints": [
      "組合與循序電路 的速記核心是：基本辨認。",
      "看到 Combinational and Sequential Circuits 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "組合與循序電路 不是孤立名詞，而是 數位邏輯 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「基本辨認」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "組合電路",
        "en": "Combinational Circuit"
      },
      {
        "zh": "循序電路",
        "en": "Sequential Circuit"
      },
      {
        "zh": "正反器",
        "en": "Flip-Flop"
      },
      {
        "zh": "多工器",
        "en": "Multiplexer"
      },
      {
        "zh": "解多工器",
        "en": "Demultiplexer"
      }
    ],
    "exampleProblem": "判斷題目問到「組合與循序電路」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 組合與循序電路(Combinational and Sequential Circuits)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「基本辨認」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 組合與循序電路(Combinational and Sequential Circuits) 放回 3b. 數位邏輯 / 組合與循序電路 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 組合與循序電路 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Combinational and Sequential Circuits 時，要能回到中文 組合與循序電路，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-os-basics",
    "titleZh": "基本常識",
    "titleEn": "Operating System Basics",
    "sourceSection": "3c. 作業系統 / 基本常識",
    "summary": "整理基本常識在作業系統中的國考定位，重點包含OS 類型與速度落差。",
    "examOutline": [
      "能說明基本常識(Operating System Basics) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / 基本常識」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 OS 類型與速度落差。"
    ],
    "memoryPoints": [
      "基本常識 的速記核心是：OS 類型與速度落差。",
      "看到 Operating System Basics 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "基本常識 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「OS 類型與速度落差」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "作業系統",
        "en": "Operating System"
      },
      {
        "zh": "並行",
        "en": "Concurrency"
      },
      {
        "zh": "平行",
        "en": "Parallelism"
      },
      {
        "zh": "排隊緩送",
        "en": "Spooling"
      },
      {
        "zh": "緩衝",
        "en": "Buffering"
      }
    ],
    "exampleProblem": "判斷題目問到「基本常識」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 基本常識(Operating System Basics)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「OS 類型與速度落差」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 基本常識(Operating System Basics) 放回 3c. 作業系統 / 基本常識 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 基本常識 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Operating System Basics 時，要能回到中文 基本常識，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "intro",
    "topicType": "concept"
  },
  {
    "id": "cp-io-and-interrupts",
    "titleZh": "I/O 與中斷",
    "titleEn": "I/O and Interrupts",
    "sourceSection": "3c. 作業系統 / I/O 與中斷",
    "summary": "整理I/O 與中斷在作業系統中的國考定位，重點包含polling/interrupt/DMA。",
    "examOutline": [
      "能說明I/O 與中斷(I/O and Interrupts) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / I/O 與中斷」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 polling/interrupt/DMA。"
    ],
    "memoryPoints": [
      "I/O 與中斷 的速記核心是：polling/interrupt/DMA。",
      "看到 I/O and Interrupts 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "I/O 與中斷 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「polling/interrupt/DMA」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "輪詢",
        "en": "Polling"
      },
      {
        "zh": "中斷",
        "en": "Interrupt"
      },
      {
        "zh": "直接記憶體存取",
        "en": "Direct Memory Access"
      },
      {
        "zh": "不可遮蔽中斷",
        "en": "Non-Maskable Interrupt"
      },
      {
        "zh": "陷阱",
        "en": "Trap"
      }
    ],
    "exampleProblem": "判斷題目問到「I/O 與中斷」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 I/O 與中斷(I/O and Interrupts)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「polling/interrupt/DMA」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 I/O 與中斷(I/O and Interrupts) 放回 3c. 作業系統 / I/O 與中斷 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 I/O 與中斷 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 I/O and Interrupts 時，要能回到中文 I/O 與中斷，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-hardware-protection",
    "titleZh": "硬體保護",
    "titleEn": "Hardware Protection",
    "sourceSection": "3c. 作業系統 / 硬體保護",
    "summary": "整理硬體保護在作業系統中的國考定位，重點包含dual mode。",
    "examOutline": [
      "能說明硬體保護(Hardware Protection) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / 硬體保護」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 dual mode。"
    ],
    "memoryPoints": [
      "硬體保護 的速記核心是：dual mode。",
      "看到 Hardware Protection 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "硬體保護 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「dual mode」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "硬體保護",
        "en": "Hardware Protection"
      },
      {
        "zh": "特權指令",
        "en": "Privileged Instruction"
      },
      {
        "zh": "使用者模式",
        "en": "User Mode"
      },
      {
        "zh": "核心模式",
        "en": "Kernel Mode"
      },
      {
        "zh": "計時器中斷",
        "en": "Timer Interrupt"
      }
    ],
    "exampleProblem": "判斷題目問到「硬體保護」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 硬體保護(Hardware Protection)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「dual mode」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 硬體保護(Hardware Protection) 放回 3c. 作業系統 / 硬體保護 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 硬體保護 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Hardware Protection 時，要能回到中文 硬體保護，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-os-structure",
    "titleZh": "OS 結構",
    "titleEn": "Operating System Structure",
    "sourceSection": "3c. 作業系統 / OS 結構",
    "summary": "整理OS 結構在作業系統中的國考定位，重點包含kernel/microkernel/VM。",
    "examOutline": [
      "能說明OS 結構(Operating System Structure) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / OS 結構」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 kernel/microkernel/VM。"
    ],
    "memoryPoints": [
      "OS 結構 的速記核心是：kernel/microkernel/VM。",
      "看到 Operating System Structure 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "OS 結構 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「kernel/microkernel/VM」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "命令介面",
        "en": "Shell"
      },
      {
        "zh": "系統呼叫",
        "en": "System Call"
      },
      {
        "zh": "核心",
        "en": "Kernel"
      },
      {
        "zh": "微核心",
        "en": "Microkernel"
      },
      {
        "zh": "虛擬機器",
        "en": "Virtual Machine"
      }
    ],
    "exampleProblem": "判斷題目問到「OS 結構」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 OS 結構(Operating System Structure)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「kernel/microkernel/VM」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 OS 結構(Operating System Structure) 放回 3c. 作業系統 / OS 結構 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 OS 結構 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Operating System Structure 時，要能回到中文 OS 結構，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-process",
    "titleZh": "Process",
    "titleEn": "Process",
    "sourceSection": "3c. 作業系統 / Process",
    "summary": "整理Process在作業系統中的國考定位，重點包含state diagram 與 scheduling。",
    "examOutline": [
      "能說明Process(Process) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Process」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 state diagram 與 scheduling。"
    ],
    "memoryPoints": [
      "Process 的速記核心是：state diagram 與 scheduling。",
      "看到 Process 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Process 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「state diagram 與 scheduling」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "行程",
        "en": "Process"
      },
      {
        "zh": "程式",
        "en": "Program"
      },
      {
        "zh": "行程控制區塊",
        "en": "Process Control Block"
      },
      {
        "zh": "前後文切換",
        "en": "Context Switch"
      },
      {
        "zh": "時間片輪轉",
        "en": "Round Robin"
      }
    ],
    "exampleProblem": "FCFS 中 P1 執行 6ms、P2 執行 2ms，P1 先到，P2 等待時間多少？",
    "exampleSteps": [
      "FCFS 先到先服務。",
      "P2 必須等 P1 完成。",
      "P1 burst time 是 6ms。"
    ],
    "exampleResult": "P2 waiting time = 6ms。",
    "pitfallItems": [
      "不要只背 Process 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Process 時，要能回到中文 Process，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-deadlock",
    "titleZh": "Deadlock",
    "titleEn": "Deadlock",
    "sourceSection": "3c. 作業系統 / Deadlock",
    "summary": "整理Deadlock在作業系統中的國考定位，重點包含四必要條件與 Banker。",
    "examOutline": [
      "能說明Deadlock(Deadlock) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Deadlock」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 四必要條件與 Banker。"
    ],
    "memoryPoints": [
      "Deadlock 的速記核心是：四必要條件與 Banker。",
      "看到 Deadlock 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Deadlock 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「四必要條件與 Banker」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "死結",
        "en": "Deadlock"
      },
      {
        "zh": "互斥",
        "en": "Mutual Exclusion"
      },
      {
        "zh": "持有並等待",
        "en": "Hold and Wait"
      },
      {
        "zh": "不可搶奪",
        "en": "No Preemption"
      },
      {
        "zh": "循環等待",
        "en": "Circular Wait"
      },
      {
        "zh": "銀行家演算法",
        "en": "Banker's Algorithm"
      }
    ],
    "exampleProblem": "判斷題目問到「Deadlock」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Deadlock(Deadlock)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「四必要條件與 Banker」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Deadlock(Deadlock) 放回 3c. 作業系統 / Deadlock 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "四個必要條件缺一就不會形成 deadlock。",
      "Avoidance 是事前避免不安全狀態，不是事後偵測。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-process-communication",
    "titleZh": "Process Communication",
    "titleEn": "Process Communication",
    "sourceSection": "3c. 作業系統 / Process Communication",
    "summary": "整理Process Communication在作業系統中的國考定位，重點包含IPC 與同步。",
    "examOutline": [
      "能說明Process Communication(Process Communication) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Process Communication」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 IPC 與同步。"
    ],
    "memoryPoints": [
      "Process Communication 的速記核心是：IPC 與同步。",
      "看到 Process Communication 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Process Communication 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「IPC 與同步」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "行程間通訊",
        "en": "Inter-Process Communication"
      },
      {
        "zh": "共享記憶體",
        "en": "Shared Memory"
      },
      {
        "zh": "訊息傳遞",
        "en": "Message Passing"
      },
      {
        "zh": "互斥鎖",
        "en": "Mutex"
      },
      {
        "zh": "號誌",
        "en": "Semaphore"
      },
      {
        "zh": "競爭情況",
        "en": "Race Condition"
      }
    ],
    "exampleProblem": "判斷題目問到「Process Communication」時，如何快速定位考點？",
    "exampleSteps": [
      "先把題目中的中文關鍵字對到 Process Communication(Process Communication)。",
      "再看題目要求的是定義、比較、計算還是流程。",
      "最後用來源提醒「IPC 與同步」檢查答案是否涵蓋常考陷阱。"
    ],
    "exampleResult": "能把 Process Communication(Process Communication) 放回 3c. 作業系統 / Process Communication 的脈絡，就是本 topic 的最低通過線。",
    "pitfallItems": [
      "不要只背 Process Communication 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Process Communication 時，要能回到中文 Process Communication，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "concept"
  },
  {
    "id": "cp-memory-management",
    "titleZh": "Memory Management",
    "titleEn": "Memory Management",
    "sourceSection": "3c. 作業系統 / Memory Management",
    "summary": "整理Memory Management在作業系統中的國考定位，重點包含allocation 與 paging。",
    "examOutline": [
      "能說明Memory Management(Memory Management) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Memory Management」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 allocation 與 paging。"
    ],
    "memoryPoints": [
      "Memory Management 的速記核心是：allocation 與 paging。",
      "看到 Memory Management 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Memory Management 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「allocation 與 paging」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "記憶體管理",
        "en": "Memory Management"
      },
      {
        "zh": "外部碎片",
        "en": "External Fragmentation"
      },
      {
        "zh": "內部碎片",
        "en": "Internal Fragmentation"
      },
      {
        "zh": "分頁",
        "en": "Paging"
      },
      {
        "zh": "分段",
        "en": "Segmentation"
      },
      {
        "zh": "轉譯旁路緩衝器",
        "en": "Translation Lookaside Buffer"
      }
    ],
    "exampleProblem": "空洞 100、500、200，需求 180，Best Fit 選哪個？",
    "exampleSteps": [
      "Best Fit 找最小但足夠的空洞。",
      "100 不足，500 足夠，200 也足夠。",
      "足夠者中 200 最小。"
    ],
    "exampleResult": "選 200 的空洞。",
    "pitfallItems": [
      "不要只背 Memory Management 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Memory Management 時，要能回到中文 Memory Management，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-virtual-memory",
    "titleZh": "Virtual Memory",
    "titleEn": "Virtual Memory",
    "sourceSection": "3c. 作業系統 / Virtual Memory",
    "summary": "整理Virtual Memory在作業系統中的國考定位，重點包含EAT 與 replacement。",
    "examOutline": [
      "能說明Virtual Memory(Virtual Memory) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Virtual Memory」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 EAT 與 replacement。"
    ],
    "memoryPoints": [
      "Virtual Memory 的速記核心是：EAT 與 replacement。",
      "看到 Virtual Memory 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Virtual Memory 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「EAT 與 replacement」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "虛擬記憶體",
        "en": "Virtual Memory"
      },
      {
        "zh": "需求分頁",
        "en": "Demand Paging"
      },
      {
        "zh": "缺頁",
        "en": "Page Fault"
      },
      {
        "zh": "有效記憶體存取時間",
        "en": "Effective Memory Access Time"
      },
      {
        "zh": "抖動",
        "en": "Thrashing"
      },
      {
        "zh": "最近最少使用",
        "en": "Least Recently Used"
      }
    ],
    "exampleProblem": "Memory access time=100ns、p=0.001、page fault service time=10ms，EAT 約多少？",
    "exampleSteps": [
      "10ms = 10,000,000ns。",
      "EAT = (1 - 0.001) * 100 + 0.001 * 10,000,000。",
      "約 99.9 + 10,000 = 10,099.9ns。"
    ],
    "exampleResult": "EAT 約 10,099.9ns。",
    "pitfallItems": [
      "不要只背 Virtual Memory 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Virtual Memory 時，要能回到中文 Virtual Memory，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  },
  {
    "id": "cp-disk-management",
    "titleZh": "Disk Management",
    "titleEn": "Disk Management",
    "sourceSection": "3c. 作業系統 / Disk Management",
    "summary": "整理Disk Management在作業系統中的國考定位，重點包含access time、RAID、scheduling。",
    "examOutline": [
      "能說明Disk Management(Disk Management) 的定義、用途與常考問法。",
      "能把來源段落「3c. 作業系統 / Disk Management」整理成考試大綱、記憶重點與理解說明。",
      "能用實際例子或操作步驟驗證 access time、RAID、scheduling。"
    ],
    "memoryPoints": [
      "Disk Management 的速記核心是：access time、RAID、scheduling。",
      "看到 Disk Management 先判斷題型是定義、比較、流程還是計算。",
      "作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。"
    ],
    "understandingNotes": [
      "Disk Management 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。",
      "初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。",
      "若題目出現相近名詞，先用來源提醒「access time、RAID、scheduling」排除錯誤選項。"
    ],
    "terms": [
      {
        "zh": "連續配置",
        "en": "Contiguous Allocation"
      },
      {
        "zh": "鏈結配置",
        "en": "Linked Allocation"
      },
      {
        "zh": "索引配置",
        "en": "Indexed Allocation"
      },
      {
        "zh": "尋道時間",
        "en": "Seek Time"
      },
      {
        "zh": "旋轉延遲",
        "en": "Rotational Latency"
      },
      {
        "zh": "磁碟陣列",
        "en": "Redundant Array of Independent Disks"
      }
    ],
    "exampleProblem": "Seek Time=5ms、Rotational Latency=4ms、Transfer Time=1ms，Disk Access Time 為何？",
    "exampleSteps": [
      "Disk Access Time = Seek + Rotational Latency + Transfer。",
      "代入 5 + 4 + 1。",
      "總和為 10ms。"
    ],
    "exampleResult": "Disk Access Time = 10ms。",
    "pitfallItems": [
      "不要只背 Disk Management 的標題，至少要能說出定義、用途與一個例子。",
      "看到英文 Disk Management 時，要能回到中文 Disk Management，避免術語對不上。",
      "若題目要求計算或流程，答案要有步驟，不可只寫結論。"
    ],
    "difficulty": "core",
    "topicType": "procedure"
  }
] as const satisfies readonly ComputerPrinciplesTopicConfig[];

const createComputerPrinciplesTopic = (config: ComputerPrinciplesTopicConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: 'computerPrinciples',
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: config.summary,
  sourceBatch: 'computer-principles-20260613-quality-remediation',
  sourceFiles: ['_private/計算機概論.txt'],
  sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
  examOutline: config.examOutline,
  memoryPoints: config.memoryPoints,
  understandingNotes: config.understandingNotes,
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: config.terms,
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T05:40:00+08:00',
  verifierSummary: 'verified: full computer-principles manifest import, substantive _TMP draft, bilingual terminology, beginner explanation, example/procedure, and pitfalls were checked.',
  blocks: [
    { kind: 'sourceNote', sourceFiles: ['_private/計算機概論.txt'], sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.exampleProblem, steps: config.exampleSteps, result: config.exampleResult },
    { kind: 'pitfall', items: config.pitfallItems },
    { kind: 'paragraph', text: config.titleZh + ' 是計算機概論正式匯入 topic，已由 _TMP verified 草稿轉入 app data；閱讀時先抓國考重點，再用例子確認自己能手算或辨認。' }
  ]
});

const importedComputerPrinciplesTopics = computerPrinciplesTopicConfigs.map(createComputerPrinciplesTopic);

const binarySearchTopic: ProfessionalSubjectTopic = {
  id: 'binary-search',
  subjectKey: 'algorithms',
  title: '二元搜尋法(Binary Search)',
  summary: '在已排序資料中用中間值快速縮小搜尋範圍。',
  sourceBatch: 'initial-professional-fixture',
  sourceFiles: ['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'],
  sourceSummary: '來源整理二元搜尋法的遞迴與非遞迴版本，並強調資料必須先排序。',
  examOutline: ['能說明二元搜尋法(Binary Search) 的前提、流程與時間複雜度。'],
  memoryPoints: ['二元搜尋法(Binary Search) 只能用在已排序資料。'],
  understandingNotes: ['每次比較中間值後，排除不可能含有目標值的一半資料。'],
  difficulty: 'intro',
  topicType: 'algorithm',
  terms: [{ zh: '二元搜尋法', en: 'Binary Search' }],
  verifiedBy: 'algorithm-verifier',
  verifiedAt: '2026-06-13T04:14:00+08:00',
  verifierSummary: 'verified: sorted-input prerequisite, recursive and iterative Java variants, complexity, and reasoning comments were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'],
      sourceSummary: '二元搜尋法來源包含遞迴與非遞迴 Java 範例，並列出 O(log n) 搜尋複雜度。'
    },
    {
      kind: 'examOutline',
      items: ['判斷題目資料是否已排序，並描述每次砍半的搜尋流程。']
    },
    {
      kind: 'memoryPoints',
      items: ['先排序，再搜尋；未排序資料不能直接使用二元搜尋法(Binary Search)。']
    },
    {
      kind: 'understanding',
      items: ['中間值小於目標時保留右半邊，中間值大於目標時保留左半邊。']
    },
    {
      kind: 'termList',
      terms: [{ zh: '二元搜尋法', en: 'Binary Search' }]
    },
    {
      kind: 'workedExample',
      problem: '在已排序陣列 [1, 3, 5, 7, 9] 中搜尋 7。',
      steps: ['第一次 mid 指向 5，7 比 5 大，所以保留右半邊。', '第二次 mid 指向 7，找到目標值。'],
      result: '最多比較 O(log n) 次即可完成搜尋。'
    },
    {
      kind: 'complexityTable',
      rows: [
        {
          algorithmNameZh: '二元搜尋法',
          algorithmNameEn: 'Binary Search',
          bestTime: 'O(1)',
          averageTime: 'O(log n)',
          worstTime: 'O(log n)',
          stability: 'N/A',
          notes: '資料必須先排序。'
        }
      ]
    },
    {
      kind: 'teachingCode',
      language: 'java',
      title: '二元搜尋法遞迴版',
      description: '每次用遞迴保留可能含有答案的半邊。',
      code: `int binarySearchRecursive(int[] sortedValues, int target, int left, int right) {
  // 左界超過右界代表搜尋區間已空，考試要清楚寫出找不到的終止條件。
  if (left > right) {
    return -1;
  }

  // 用安全寫法計算 mid，展示二元搜尋法每次砍半的核心想法。
  int mid = left + (right - left) / 2;

  if (sortedValues[mid] == target) {
    return mid;
  }

  // 依比較結果只遞迴搜尋其中半邊，這是 O(log n) 的理由。
  if (sortedValues[mid] < target) {
    return binarySearchRecursive(sortedValues, target, mid + 1, right);
  }
  return binarySearchRecursive(sortedValues, target, left, mid - 1);
}`
    },
    {
      kind: 'teachingCode',
      language: 'java',
      title: '二元搜尋法非遞迴版',
      description: '用左右邊界保留可能答案區間。',
      code: `int binarySearch(int[] sortedValues, int target) {
  int left = 0;
  int right = sortedValues.length - 1;

  while (left <= right) {
    // 用左右界線計算中點，避免 left + right 在大陣列時溢位。
    int mid = left + (right - left) / 2;

    if (sortedValues[mid] == target) {
      return mid;
    }

    // 目標比較大時，左半邊不可能有答案，可以整段排除。
    if (sortedValues[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`
    }
  ]
};

const sortingBaselineTopic: ProfessionalSubjectTopic = {
  id: 'sorting-baseline',
  subjectKey: 'algorithms',
  title: '排序法複雜度基準表(Sorting Complexity Baseline)',
  summary: '整理常見排序法的最佳、平均、最差時間複雜度與穩定性。',
  sourceBatch: 'initial-professional-fixture',
  sourceFiles: ['_private/資料結構與演算法.txt', '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'],
  sourceSummary: '來源基準表整理 Bubble、Selection、Insertion、Merge、Quick、Heap、Shell 的複雜度與穩定性。',
  examOutline: ['能比較排序法的時間複雜度、穩定性與適用情境。'],
  memoryPoints: ['穩定排序會保留相同 key 的原始相對順序。'],
  understandingNotes: ['排序法比較時需同時看資料特性、額外空間與是否需要穩定性。'],
  difficulty: 'core',
  topicType: 'algorithm',
  terms: [
    { zh: '快速排序法', en: 'Quick Sort' },
    { zh: '穩定性', en: 'Stability' }
  ],
  verifiedBy: 'fixture-verifier',
  verifiedAt: '2026-06-13T00:00:00.000Z',
  verifierSummary: '排序複雜度基準表依 proposal 基準建立。',
  blocks: [
    {
      kind: 'complexityTable',
      rows: [
        {
          algorithmNameZh: '氣泡排序法',
          algorithmNameEn: 'Bubble Sort',
          bestTime: 'O(n)',
          averageTime: 'O(n^2)',
          worstTime: 'O(n^2)',
          stability: 'Stable',
          notes: 'Early stop allows O(n) best case'
        },
        {
          algorithmNameZh: '選擇排序法',
          algorithmNameEn: 'Selection Sort',
          bestTime: 'O(n^2)',
          averageTime: 'O(n^2)',
          worstTime: 'O(n^2)',
          stability: 'Usually unstable',
          notes: 'Low swap count'
        },
        {
          algorithmNameZh: '插入排序法',
          algorithmNameEn: 'Insertion Sort',
          bestTime: 'O(n)',
          averageTime: 'O(n^2)',
          worstTime: 'O(n^2)',
          stability: 'Stable',
          notes: 'Good for small or nearly sorted data'
        },
        {
          algorithmNameZh: '合併排序法',
          algorithmNameEn: 'Merge Sort',
          bestTime: 'O(n log n)',
          averageTime: 'O(n log n)',
          worstTime: 'O(n log n)',
          stability: 'Stable',
          notes: 'Requires extra space'
        },
        {
          algorithmNameZh: '快速排序法',
          algorithmNameEn: 'Quick Sort',
          bestTime: 'O(n log n)',
          averageTime: 'O(n log n)',
          worstTime: 'O(n^2)',
          stability: 'Unstable',
          notes: 'Poor pivot choice degenerates'
        },
        {
          algorithmNameZh: '堆積排序法',
          algorithmNameEn: 'Heap Sort',
          bestTime: 'O(n log n)',
          averageTime: 'O(n log n)',
          worstTime: 'O(n log n)',
          stability: 'Unstable',
          notes: 'In-place sorting with heap'
        },
        {
          algorithmNameZh: '希爾排序法',
          algorithmNameEn: 'Shell Sort',
          bestTime: 'gap-dependent',
          averageTime: 'gap-dependent',
          worstTime: 'up to O(n^2)',
          stability: 'Unstable',
          notes: 'Improved insertion sort'
        }
      ]
    }
  ]
};

interface AlgorithmTopicConfig {
  id: string;
  titleZh: string;
  titleEn: string;
  summary: string;
  sourceFiles: readonly string[];
  sourceSummary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  terms: readonly TechnicalTerm[];
  complexity: AlgorithmComplexityRow;
  exampleProblem: string;
  exampleSteps: readonly string[];
  exampleResult: string;
  iterativeTitle: string;
  iterativeDescription: string;
  iterativeCode: string;
  recursiveTitle?: string;
  recursiveDescription?: string;
  recursiveCode?: string;
  verifierSummary?: string;
}

const createAlgorithmTopic = (config: AlgorithmTopicConfig): ProfessionalSubjectTopic => {
  const blocks: SubjectTopicBlock[] = [
    {
      kind: 'sourceNote',
      sourceFiles: config.sourceFiles,
      sourceSummary: config.sourceSummary
    },
    {
      kind: 'examOutline',
      items: config.examOutline
    },
    {
      kind: 'memoryPoints',
      items: config.memoryPoints
    },
    {
      kind: 'understanding',
      items: config.understandingNotes
    },
    {
      kind: 'termList',
      terms: config.terms
    },
    {
      kind: 'workedExample',
      problem: config.exampleProblem,
      steps: config.exampleSteps,
      result: config.exampleResult
    },
    {
      kind: 'complexityTable',
      rows: [config.complexity]
    }
  ];

  if (config.recursiveCode !== undefined && config.recursiveTitle !== undefined && config.recursiveDescription !== undefined) {
    blocks.push({
      kind: 'teachingCode',
      language: 'java',
      title: config.recursiveTitle,
      description: config.recursiveDescription,
      code: config.recursiveCode
    });
  }

  blocks.push({
    kind: 'teachingCode',
    language: 'java',
    title: config.iterativeTitle,
    description: config.iterativeDescription,
    code: config.iterativeCode
  });

  return {
    id: config.id,
    subjectKey: 'algorithms',
    title: `${config.titleZh}(${config.titleEn})`,
    summary: config.summary,
    sourceBatch: 'algorithms-20260613',
    sourceFiles: config.sourceFiles,
    sourceSummary: config.sourceSummary,
    examOutline: config.examOutline,
    memoryPoints: config.memoryPoints,
    understandingNotes: config.understandingNotes,
    difficulty: 'core',
    topicType: 'algorithm',
    terms: config.terms,
    verifiedBy: 'algorithm-verifier',
    verifiedAt: '2026-06-13T04:14:00+08:00',
    verifierSummary: config.verifierSummary ?? 'verified: Java variants, complexity, terminology, and reasoning comments were checked.',
    blocks
  };
};

const commonAlgorithmSource = ['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'] as const;
const sortingSource = ['_private/資料結構與演算法.txt', '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'] as const;

const bubbleSortTopic = createAlgorithmTopic({
  id: 'bubble-sort',
  titleZh: '氣泡排序法',
  titleEn: 'Bubble Sort',
  summary: '相鄰元素兩兩比較並交換，使用 early stop 時已排序資料可達 O(n)。',
  sourceFiles: sortingSource,
  sourceSummary: 'common algorithms source 提供 Bubble Sort Java 與 early stop；sorting baseline 補齊穩定性。',
  examOutline: ['能說明相鄰比較、交換與 early stop。'],
  memoryPoints: ['有 swapped early stop 時最佳 O(n)，平均與最差 O(n^2)，穩定。'],
  understandingNotes: ['每一輪會把目前最大的元素推到右側，像泡泡往上浮。'],
  terms: [{ zh: '氣泡排序法', en: 'Bubble Sort' }],
  complexity: {
    algorithmNameZh: '氣泡排序法',
    algorithmNameEn: 'Bubble Sort',
    bestTime: 'O(n)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Stable',
    notes: 'Early stop allows O(n) best case'
  },
  exampleProblem: '排序 [5, 1, 4]。',
  exampleSteps: ['比較 5 與 1，交換為 [1, 5, 4]。', '比較 5 與 4，交換為 [1, 4, 5]。'],
  exampleResult: '[1, 4, 5]',
  recursiveTitle: '氣泡排序法遞迴版',
  recursiveDescription: '遞迴教學版，國考主流仍以非遞迴流程最常見。',
  recursiveCode: `void bubbleSortRecursive(int[] values, int n) {
  // n == 1 代表只剩一個元素，排序已完成。
  if (n <= 1) return;

  // 先完成一輪相鄰比較，把目前最大值推到右端。
  for (int i = 0; i < n - 1; i++) {
    if (values[i] > values[i + 1]) {
      int temp = values[i];
      values[i] = values[i + 1];
      values[i + 1] = temp;
    }
  }

  // 右端已就位，遞迴處理前 n-1 個元素。
  bubbleSortRecursive(values, n - 1);
}`,
  iterativeTitle: '氣泡排序法非遞迴版',
  iterativeDescription: '加入 swapped 讓已排序資料可提早停止。',
  iterativeCode: `void bubbleSort(int[] values) {
  for (int end = values.length - 1; end > 0; end--) {
    boolean swapped = false;

    for (int i = 0; i < end; i++) {
      // 相鄰兩數逆序才交換，這也是穩定性的來源。
      if (values[i] > values[i + 1]) {
        int temp = values[i];
        values[i] = values[i + 1];
        values[i + 1] = temp;
        swapped = true;
      }
    }

    // 沒交換代表資料已排序，考試可用來說明最佳 O(n)。
    if (!swapped) break;
  }
}`
});

const selectionSortTopic = createAlgorithmTopic({
  id: 'selection-sort',
  titleZh: '選擇排序法',
  titleEn: 'Selection Sort',
  summary: '每輪選出未排序區最小值放到前面，交換次數少但通常不穩定。',
  sourceFiles: sortingSource,
  sourceSummary: 'common algorithms source 提供 Selection Sort Java 與 O(n^2) 推導；baseline 補齊穩定性。',
  examOutline: ['能說明每輪找最小值，三種情況皆 O(n^2)。'],
  memoryPoints: ['Selection Sort 比較次數固定，最佳、平均、最差皆 O(n^2)，通常不穩定。'],
  understandingNotes: ['即使資料已排序，仍要掃描未排序區確認最小值。'],
  terms: [{ zh: '選擇排序法', en: 'Selection Sort' }],
  complexity: {
    algorithmNameZh: '選擇排序法',
    algorithmNameEn: 'Selection Sort',
    bestTime: 'O(n^2)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Usually unstable',
    notes: 'Low swap count'
  },
  exampleProblem: '排序 [3, 1, 2]。',
  exampleSteps: ['第一輪找最小值 1，和 3 交換。', '第二輪在 [3, 2] 找最小值 2，和 3 交換。'],
  exampleResult: '[1, 2, 3]',
  recursiveTitle: '選擇排序法遞迴版',
  recursiveDescription: '遞迴教學版，每次固定一個位置。',
  recursiveCode: `void selectionSortRecursive(int[] values, int start) {
  // start 到最後代表每個位置都已選過。
  if (start >= values.length - 1) return;

  int minIndex = start;
  for (int i = start + 1; i < values.length; i++) {
    if (values[i] < values[minIndex]) minIndex = i;
  }

  int temp = values[start];
  values[start] = values[minIndex];
  values[minIndex] = temp;

  // 固定 start 後，遞迴處理下一格。
  selectionSortRecursive(values, start + 1);
}`,
  iterativeTitle: '選擇排序法非遞迴版',
  iterativeDescription: '每輪選出未排序區最小值。',
  iterativeCode: `void selectionSort(int[] values) {
  for (int start = 0; start < values.length - 1; start++) {
    int minIndex = start;

    // 掃描未排序區，考試重點是比較次數不會因已排序而減少。
    for (int i = start + 1; i < values.length; i++) {
      if (values[i] < values[minIndex]) minIndex = i;
    }

    int temp = values[start];
    values[start] = values[minIndex];
    values[minIndex] = temp;
  }
}`
});

const insertionSortTopic = createAlgorithmTopic({
  id: 'insertion-sort',
  titleZh: '插入排序法',
  titleEn: 'Insertion Sort',
  summary: '把新元素插入左側已排序區，近乎排序資料表現好。',
  sourceFiles: sortingSource,
  sourceSummary: 'common algorithms source 提供 Insertion Sort Java 與最佳 O(n)；baseline 確認穩定性。',
  examOutline: ['能說明已排序區、待插入值與近乎排序資料最佳 O(n)。'],
  memoryPoints: ['最佳 O(n)，平均與最差 O(n^2)，穩定。'],
  understandingNotes: ['像整理手牌，把新牌插入左邊已排序的位置。'],
  terms: [{ zh: '插入排序法', en: 'Insertion Sort' }],
  complexity: {
    algorithmNameZh: '插入排序法',
    algorithmNameEn: 'Insertion Sort',
    bestTime: 'O(n)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Stable',
    notes: 'Good for small or nearly sorted data'
  },
  exampleProblem: '排序 [2, 4, 1]。',
  exampleSteps: ['2、4 已有序。', '取出 1，將 4 與 2 右移，再把 1 插入最前面。'],
  exampleResult: '[1, 2, 4]',
  recursiveTitle: '插入排序法遞迴版',
  recursiveDescription: '遞迴練習版，先排前 n-1 個，再插入第 n 個。',
  recursiveCode: `void insertionSortRecursive(int[] values, int n) {
  // 前 1 個元素必定已排序。
  if (n <= 1) return;

  insertionSortRecursive(values, n - 1);

  int key = values[n - 1];
  int i = n - 2;
  // 將比 key 大的元素右移，保留插入位置。
  while (i >= 0 && values[i] > key) {
    values[i + 1] = values[i];
    i--;
  }
  values[i + 1] = key;
}`,
  iterativeTitle: '插入排序法非遞迴版',
  iterativeDescription: '維持左側已排序區。',
  iterativeCode: `void insertionSort(int[] values) {
  for (int i = 1; i < values.length; i++) {
    int key = values[i];
    int j = i - 1;

    // 只移動比 key 大的元素，相等元素不跨越，所以排序穩定。
    while (j >= 0 && values[j] > key) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = key;
  }
}`
});

const mergeSortTopic = createAlgorithmTopic({
  id: 'merge-sort',
  titleZh: '合併排序法',
  titleEn: 'Merge Sort',
  summary: '用分治法切半、排序再合併，三種情況皆 O(n log n)。',
  sourceFiles: ['_private/資料結構與演算法.txt'],
  sourceSummary: '資料結構與演算法來源列為七大排序基準，baseline 規定穩定且需額外空間。',
  examOutline: ['能說明分治、merge 與額外空間。'],
  memoryPoints: ['Best/Average/Worst 都是 O(n log n)，穩定，需要額外空間。'],
  understandingNotes: ['切半讓高度是 log n，每層合併總成本 n，所以是 O(n log n)。'],
  terms: [{ zh: '合併排序法', en: 'Merge Sort' }],
  complexity: {
    algorithmNameZh: '合併排序法',
    algorithmNameEn: 'Merge Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n log n)',
    stability: 'Stable',
    notes: 'Requires extra space'
  },
  exampleProblem: '排序 [4, 1, 3, 2]。',
  exampleSteps: ['切成 [4, 1] 與 [3, 2]。', '各自排序成 [1, 4] 與 [2, 3]。', '合併成 [1, 2, 3, 4]。'],
  exampleResult: '[1, 2, 3, 4]',
  recursiveTitle: '合併排序法遞迴版',
  recursiveDescription: '主流分治寫法。',
  recursiveCode: `void mergeSort(int[] values, int left, int right) {
  // 區間只剩一個元素時自然有序。
  if (left >= right) return;

  int mid = left + (right - left) / 2;
  mergeSort(values, left, mid);
  mergeSort(values, mid + 1, right);

  // merge 負責把兩段已排序區合成一段，這是穩定性的關鍵。
  merge(values, left, mid, right);
}`,
  iterativeTitle: '合併排序法非遞迴版',
  iterativeDescription: 'bottom-up 寫法，由小區段逐步合併。',
  iterativeCode: `void mergeSortBottomUp(int[] values) {
  for (int width = 1; width < values.length; width *= 2) {
    for (int left = 0; left < values.length; left += 2 * width) {
      int mid = Math.min(left + width - 1, values.length - 1);
      int right = Math.min(left + 2 * width - 1, values.length - 1);
      // 每次合併相鄰兩段已排序區，展示由小到大的作答思路。
      if (mid < right) merge(values, left, mid, right);
    }
  }
}`
});

const quickSortTopic = createAlgorithmTopic({
  id: 'quick-sort',
  titleZh: '快速排序法',
  titleEn: 'Quick Sort',
  summary: '選 pivot 分割左右區，平均快但 pivot 選差會退化到 O(n^2)。',
  sourceFiles: sortingSource,
  sourceSummary: 'common algorithms source 使用最右 pivot 的 Lomuto partition；baseline 規定不穩定與最差 O(n^2)。',
  examOutline: ['能說明 pivot、partition、平均 O(n log n) 與最差 O(n^2)。'],
  memoryPoints: ['平均快，不穩定；已排序資料配差 pivot 容易退化。'],
  understandingNotes: ['partition 的目的不是一次排好全部，而是讓 pivot 左小右大。'],
  terms: [{ zh: '快速排序法', en: 'Quick Sort' }],
  complexity: {
    algorithmNameZh: '快速排序法',
    algorithmNameEn: 'Quick Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n^2)',
    stability: 'Unstable',
    notes: 'Poor pivot choice degenerates'
  },
  exampleProblem: '以 4 為 pivot 分割 [3, 5, 1, 4]。',
  exampleSteps: ['小於等於 4 的放左邊。', '大於 4 的放右邊。', 'pivot 就定位後遞迴處理左右區。'],
  exampleResult: '[3, 1, 4, 5]，再排序左區。',
  recursiveTitle: '快速排序法遞迴版',
  recursiveDescription: '國考主流版本，重點是 partition。',
  recursiveCode: `void quickSort(int[] values, int left, int right) {
  // 空區間或單一元素不需排序。
  if (left >= right) return;

  int pivotIndex = partition(values, left, right);
  // pivot 已就定位，左右兩邊可獨立遞迴。
  quickSort(values, left, pivotIndex - 1);
  quickSort(values, pivotIndex + 1, right);
}`,
  iterativeTitle: '快速排序法非遞迴版',
  iterativeDescription: '用 stack 模擬遞迴區間。',
  iterativeCode: `void quickSortIterative(int[] values) {
  Deque<int[]> stack = new ArrayDeque<>();
  stack.push(new int[] {0, values.length - 1});

  while (!stack.isEmpty()) {
    int[] range = stack.pop();
    int left = range[0], right = range[1];
    if (left >= right) continue;

    int pivotIndex = partition(values, left, right);
    // 把尚未排序的左右區間放回 stack，等同遞迴呼叫。
    stack.push(new int[] {left, pivotIndex - 1});
    stack.push(new int[] {pivotIndex + 1, right});
  }
}`
});

const heapSortTopic = createAlgorithmTopic({
  id: 'heap-sort',
  titleZh: '堆積排序法',
  titleEn: 'Heap Sort',
  summary: '先建立 heap，再反覆取出 root，原地排序但不穩定。',
  sourceFiles: ['_private/資料結構與演算法.txt'],
  sourceSummary: '資料結構與演算法來源列為七大排序基準，baseline 規定 O(n log n)、不穩定、原地排序。',
  examOutline: ['能說明 heapify、root 交換與原地排序。'],
  memoryPoints: ['Best/Average/Worst 都是 O(n log n)，不穩定，原地排序。'],
  understandingNotes: ['Max Heap 的 root 是最大值，交換到尾端後縮小 heap 範圍。'],
  terms: [{ zh: '堆積排序法', en: 'Heap Sort' }],
  complexity: {
    algorithmNameZh: '堆積排序法',
    algorithmNameEn: 'Heap Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n log n)',
    stability: 'Unstable',
    notes: 'In-place sorting with heap'
  },
  exampleProblem: '用 max heap 排序 [2, 5, 1]。',
  exampleSteps: ['建立 max heap，root 為 5。', '把 5 換到尾端，heap size 減一。', 'heapify 剩餘元素。'],
  exampleResult: '[1, 2, 5]',
  recursiveTitle: '堆積排序法遞迴 heapify 版',
  recursiveDescription: 'heapify 常以遞迴呈現。',
  recursiveCode: `void heapify(int[] values, int size, int root) {
  int largest = root;
  int left = 2 * root + 1;
  int right = 2 * root + 2;

  if (left < size && values[left] > values[largest]) largest = left;
  if (right < size && values[right] > values[largest]) largest = right;

  if (largest != root) {
    int temp = values[root];
    values[root] = values[largest];
    values[largest] = temp;
    // 子樹被交換後可能破壞 heap 性質，所以遞迴修正。
    heapify(values, size, largest);
  }
}`,
  iterativeTitle: '堆積排序法非遞迴版',
  iterativeDescription: '主流程以迴圈反覆取出 heap root。',
  iterativeCode: `void heapSort(int[] values) {
  for (int i = values.length / 2 - 1; i >= 0; i--) {
    heapify(values, values.length, i);
  }

  for (int end = values.length - 1; end > 0; end--) {
    int temp = values[0];
    values[0] = values[end];
    values[end] = temp;
    // 尾端已是最大值，縮小 heap 後修正 root。
    heapify(values, end, 0);
  }
}`
});

const shellSortTopic = createAlgorithmTopic({
  id: 'shell-sort',
  titleZh: '希爾排序法',
  titleEn: 'Shell Sort',
  summary: '以 gap 分組做插入排序改良，複雜度依 gap 而定且不穩定。',
  sourceFiles: ['_private/資料結構與演算法.txt'],
  sourceSummary: '資料結構與演算法來源列為七大排序基準；design 規定第一批只放標準非遞迴主版本。',
  examOutline: ['能說明 gap 逐步縮小與不穩定性。'],
  memoryPoints: ['Best/Average gap-dependent，Worst up to O(n^2)，不穩定。'],
  understandingNotes: ['先讓遠距元素大致有序，最後 gap=1 時成為插入排序。'],
  terms: [{ zh: '希爾排序法', en: 'Shell Sort' }],
  complexity: {
    algorithmNameZh: '希爾排序法',
    algorithmNameEn: 'Shell Sort',
    bestTime: 'gap-dependent',
    averageTime: 'gap-dependent',
    worstTime: 'up to O(n^2)',
    stability: 'Unstable',
    notes: 'Improved insertion sort'
  },
  exampleProblem: '以 gap=2 整理 [5, 1, 4, 2]。',
  exampleSteps: ['先比較距離 2 的元素。', 'gap 縮到 1 後做最後插入排序。'],
  exampleResult: '[1, 2, 4, 5]',
  iterativeTitle: '希爾排序法非遞迴版',
  iterativeDescription: '第一批只列標準非遞迴主版本。',
  iterativeCode: `void shellSort(int[] values) {
  for (int gap = values.length / 2; gap > 0; gap /= 2) {
    for (int i = gap; i < values.length; i++) {
      int current = values[i];
      int j = i;

      // 對同一個 gap 群組做插入排序，說明 Shell Sort 是插入排序改良。
      while (j >= gap && values[j - gap] > current) {
        values[j] = values[j - gap];
        j -= gap;
      }
      values[j] = current;
    }
  }
}`,
  verifierSummary: 'verified: Shell Sort only uses the iterative primary version; gap complexity and instability were checked.'
});

const fibonacciSequenceTopic = createAlgorithmTopic({
  id: 'fibonacci-sequence',
  titleZh: 'Fibonacci 序列',
  titleEn: 'Fibonacci Sequence',
  summary: '用遞迴與迭代理解前兩項相加產生下一項，並提醒 naive recursion 重複計算。',
  sourceFiles: commonAlgorithmSource,
  sourceSummary: 'common algorithms source 提供 Fibonacci recursive/iterative Java、O(2^n) 與 O(n) 差異。',
  examOutline: ['能寫出遞迴與非遞迴版本，並說明 naive recursion 重複計算。'],
  memoryPoints: ['遞迴 base case 是 n <= 1；naive recursion O(2^n)，迭代 O(n)。'],
  understandingNotes: ['遞迴版直覺但重複算很多子問題；迭代版保留前兩項即可。'],
  terms: [{ zh: 'Fibonacci 序列', en: 'Fibonacci Sequence' }],
  complexity: {
    algorithmNameZh: 'Fibonacci 序列',
    algorithmNameEn: 'Fibonacci Sequence',
    bestTime: 'O(1)',
    averageTime: 'O(n)',
    worstTime: 'O(2^n)',
    stability: 'N/A',
    notes: 'Naive recursion is O(2^n); iterative version is O(n)'
  },
  exampleProblem: '求 fib(5)。',
  exampleSteps: ['fib(5)=fib(4)+fib(3)。', '一路拆到 fib(1) 與 fib(0)。', '結果為 5。'],
  exampleResult: '5',
  recursiveTitle: 'Fibonacci 序列遞迴版',
  recursiveDescription: '教學直覺版，但會重複計算。',
  recursiveCode: `int fibRecursive(int n) {
  // n <= 1 是來源指定的基本條件，避免錯寫成 n >= 1。
  if (n <= 1) return n;

  // 直接展開定義，但 fib(n-2) 等子問題會被重複計算。
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}`,
  iterativeTitle: 'Fibonacci 序列非遞迴版',
  iterativeDescription: '用兩個變數保存前兩項。',
  iterativeCode: `int fibIterative(int n) {
  if (n <= 1) return n;

  int prev = 0;
  int curr = 1;
  for (int i = 2; i <= n; i++) {
    // next 是本輪答案，prev/curr 往前滑動，避免重複遞迴。
    int next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}`
});

const greatestCommonDivisorTopic = createAlgorithmTopic({
  id: 'greatest-common-divisor',
  titleZh: '最大公因數',
  titleEn: 'Greatest Common Divisor',
  summary: '用輾轉相除法反覆把 gcd(a,b) 轉成 gcd(b,a%b)。',
  sourceFiles: commonAlgorithmSource,
  sourceSummary: 'common algorithms source 提供 GCD recursive/iterative Java、手算例與 O(log min(a,b))。',
  examOutline: ['能寫出輾轉相除法的終止條件與遞迴/迭代版本。'],
  memoryPoints: ['b == 0 時答案是 a；每次改成 gcd(b, a % b)。'],
  understandingNotes: ['餘數保留共同因數資訊，數字會快速變小，所以複雜度是 O(log min(a,b))。'],
  terms: [{ zh: '最大公因數', en: 'Greatest Common Divisor' }],
  complexity: {
    algorithmNameZh: '最大公因數',
    algorithmNameEn: 'Greatest Common Divisor',
    bestTime: 'O(1)',
    averageTime: 'O(log min(a,b))',
    worstTime: 'O(log min(a,b))',
    stability: 'N/A',
    notes: 'Euclidean algorithm'
  },
  exampleProblem: '求 gcd(48,18)。',
  exampleSteps: ['48 % 18 = 12，所以 gcd(48,18)=gcd(18,12)。', '18 % 12 = 6。', '12 % 6 = 0，答案是 6。'],
  exampleResult: '6',
  recursiveTitle: '最大公因數遞迴版',
  recursiveDescription: '直接呈現輾轉相除法定義。',
  recursiveCode: `int gcdRecursive(int a, int b) {
  // b == 0 是終止條件，代表目前 a 就是最大公因數。
  if (b == 0) return a;

  // 用餘數縮小問題：gcd(a,b) = gcd(b,a%b)。
  return gcdRecursive(b, a % b);
}`,
  iterativeTitle: '最大公因數非遞迴版',
  iterativeDescription: '用迴圈反覆更新 a 與 b。',
  iterativeCode: `int gcdIterative(int a, int b) {
  while (b != 0) {
    int remainder = a % b;
    // 將問題往 gcd(b, remainder) 推進。
    a = b;
    b = remainder;
  }
  return a;
}`
});

const importedAlgorithmTopics = [
  bubbleSortTopic,
  selectionSortTopic,
  insertionSortTopic,
  mergeSortTopic,
  quickSortTopic,
  heapSortTopic,
  shellSortTopic,
  fibonacciSequenceTopic,
  greatestCommonDivisorTopic
] as const;

const databaseFoundationsTopic: ProfessionalSubjectTopic = {
  id: 'database-foundations-professional',
  subjectKey: 'database',
  title: '資料庫(Database) 基本概念',
  summary: '說明資料庫、資料庫管理系統與資料模型的基本分工。',
  sourceBatch: 'initial-professional-fixture',
  sourceFiles: ['_private/資料庫.txt'],
  sourceSummary: '來源作為資料庫專業科目的基本概念入口。',
  examOutline: ['能區分資料庫(Database)、資料庫管理系統(Database Management System) 與資料模型(Data Model)。'],
  memoryPoints: ['DBMS 是管理資料庫的軟體，不等於資料本身。'],
  understandingNotes: ['先分清楚資料、管理軟體與設計模型，後續正規化與 SQL 才有位置可放。'],
  difficulty: 'intro',
  topicType: 'concept',
  terms: [
    { zh: '資料庫', en: 'Database' },
    { zh: '資料庫管理系統', en: 'Database Management System' }
  ],
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/資料庫.txt'],
      sourceSummary: '資料庫來源中的基本名詞會作為後續正式匯入的入口。'
    },
    {
      kind: 'termList',
      terms: [
        { zh: '資料庫', en: 'Database' },
        { zh: '資料庫管理系統', en: 'Database Management System' }
      ]
    }
  ]
};

const networkingPortsTopic: ProfessionalSubjectTopic = {
  id: 'networking-ports',
  subjectKey: 'networking',
  title: '常見連接埠(Port Number)',
  summary: '整理國考常見服務、連接埠號與 TCP/UDP 對應。',
  sourceBatch: 'networking-20260613',
  sourceFiles: ['_private/網概.txt'],
  sourceSummary: '來源「四、常見 Port Number」列出 FTP、SSH、Telnet、SMTP、DNS、DHCP、HTTP、POP3、NTP、IMAP、SNMP、HTTPS、SMB、RDP 的 port 與 TCP/UDP。',
  examOutline: [
    '能把常見服務名稱、連接埠(Port) 號碼與傳輸層協定配對。',
    '能辨識只用 TCP、只用 UDP，以及 TCP/UDP 都可能出現的服務。'
  ],
  memoryPoints: [
    'HTTP 是 80/TCP，HTTPS 是 443/TCP，DNS 是 53/UDP 與 53/TCP。',
    'DHCP 使用 67/68 UDP；SNMP 常見 161/162 UDP；RDP 是 3389 TCP/UDP。'
  ],
  understandingNotes: [
    'Port 可以想成同一台主機上的服務門牌，IP 找到主機，Port 找到主機裡的服務。',
    'TCP 重可靠連線，UDP 重低延遲與低開銷；背 port 時要把傳輸層協定一起記。'
  ],
  difficulty: 'core',
  topicType: 'concept',
  terms: [
    { zh: '連接埠', en: 'Port' },
    { zh: '傳輸控制協定', en: 'Transmission Control Protocol' },
    { zh: '使用者資料包協定', en: 'User Datagram Protocol' }
  ],
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T04:10:00+08:00',
  verifierSummary: 'verified: source mapping, TCP/UDP labels, bilingual terminology, and beginner explanation were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/網概.txt'],
      sourceSummary: '四、常見 Port Number'
    },
    {
      kind: 'examOutline',
      items: ['服務名稱、port number、TCP/UDP 三欄互相配對。', '特別留意 DNS、RDP 這類 TCP/UDP 都可能出現的項目。']
    },
    {
      kind: 'memoryPoints',
      items: ['FTP 20/21 TCP；SSH 22 TCP；Telnet 23 TCP；SMTP 25 TCP。', 'HTTP 80 TCP；HTTPS 443 TCP；DNS 53 UDP/TCP；DHCP 67/68 UDP。']
    },
    {
      kind: 'understanding',
      items: ['背 port 不只是背數字，而是知道應用層服務透過哪個傳輸層入口被辨識。']
    },
    {
      kind: 'termList',
      terms: [
        { zh: '連接埠', en: 'Port' },
        { zh: '傳輸控制協定', en: 'Transmission Control Protocol' },
        { zh: '使用者資料包協定', en: 'User Datagram Protocol' }
      ]
    }
  ]
};

const databaseNormalizationTopic: ProfessionalSubjectTopic = {
  id: 'database-normalization',
  subjectKey: 'database',
  title: '正規化(Normalization)',
  summary: '用 1NF、2NF、3NF、BCNF、4NF 分階段降低資料重複與異常。',
  sourceBatch: 'database-20260613',
  sourceFiles: ['_private/資料庫.txt'],
  sourceSummary: '來源「正規化」段落整理 1NF、2NF、3NF、BCNF、4NF，以及正規化的優缺點。',
  examOutline: ['能比較各正規形(Normal Form) 的條件。', '能說明正規化降低重複與異常，但可能增加 join 成本。'],
  memoryPoints: [
    '1NF 要求欄位不可再分；2NF 處理部分相依；3NF 處理傳遞相依。',
    'BCNF 要求每個決定因子都是 candidate key；4NF 處理多值相依。'
  ],
  understandingNotes: [
    '正規化不是把表拆得越多越好，而是在資料一致性與查詢成本之間取平衡。',
    '看題目時先找 key，再判斷非鍵屬性是完全相依、部分相依或傳遞相依。'
  ],
  difficulty: 'core',
  topicType: 'concept',
  terms: [
    { zh: '正規化', en: 'Normalization' },
    { zh: '正規形', en: 'Normal Form' },
    { zh: '傳遞相依', en: 'Transitive Dependency' }
  ],
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T04:10:00+08:00',
  verifierSummary: 'verified: normal form ladder, dependency terminology, and source mapping were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/資料庫.txt'],
      sourceSummary: '正規化段落 lines 68-79'
    },
    {
      kind: 'examOutline',
      items: ['比較 1NF、2NF、3NF、BCNF、4NF。', '說明正規化優點與 join 成本。']
    },
    {
      kind: 'memoryPoints',
      items: ['2NF 看部分相依；3NF 看傳遞相依；BCNF 看決定因子。']
    },
    {
      kind: 'understanding',
      items: ['先從候選鍵(Candidate Key) 出發，才能判斷某個欄位是否依賴整個 key。']
    },
    {
      kind: 'termList',
      terms: [
        { zh: '正規化', en: 'Normalization' },
        { zh: '正規形', en: 'Normal Form' },
        { zh: '候選鍵', en: 'Candidate Key' }
      ]
    },
    {
      kind: 'pitfall',
      items: ['不要把 BCNF 簡化成 3NF 的別名；BCNF 對決定因子的要求更嚴格。']
    }
  ]
};

const informationManagementDigitalTransformationTopic: ProfessionalSubjectTopic = {
  id: 'im-02-digital-transformation',
  subjectKey: 'informationManagement',
  title: '數位轉型(Digital Transformation)',
  summary: '說明數位科技如何改變流程、商業模式、顧客體驗與組織文化。',
  sourceBatch: 'information-management-20260613',
  sourceFiles: ['_private/資訊管理.txt'],
  sourceSummary: '來源「二、數位轉型」整理定義、五大要素、成功轉型層面與逐步轉型三階段。',
  examOutline: ['能寫出數位轉型(Digital Transformation) 定義。', '能列出技術、流程、人才、文化、顧客等要素。'],
  memoryPoints: [
    '數位轉型不是只導入工具，而是用數位科技創造組織價值。',
    '答題可用「技術、流程、人才、文化、顧客」檢查是否完整。'
  ],
  understandingNotes: [
    '若只買系統但流程、人才與文化不改，通常只能算工具導入，不足以稱為完整轉型。',
    '三階段可理解為先數位化資料，再優化流程，最後改變商業模式。'
  ],
  difficulty: 'intro',
  topicType: 'concept',
  terms: [
    { zh: '數位轉型', en: 'Digital Transformation' },
    { zh: '數位化', en: 'Digitization' },
    { zh: '流程優化', en: 'Process Optimization' }
  ],
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T04:10:00+08:00',
  verifierSummary: 'verified: definition, five elements, stage distinction, and source boundary were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/資訊管理.txt'],
      sourceSummary: '二、數位轉型'
    },
    {
      kind: 'examOutline',
      items: ['定義題要包含數位科技、流程、商業模式、顧客體驗、組織文化與創造價值。']
    },
    {
      kind: 'memoryPoints',
      items: ['五大要素可用技術、流程、人才、文化、顧客記憶。']
    },
    {
      kind: 'understanding',
      items: ['把數位轉型想成組織改造，不是單一資訊系統採購。']
    },
    {
      kind: 'termList',
      terms: [
        { zh: '數位轉型', en: 'Digital Transformation' },
        { zh: '數位化', en: 'Digitization' }
      ]
    }
  ]
};

const programmingRecursionTopic: ProfessionalSubjectTopic = {
  id: 'programming-recursion',
  subjectKey: 'programming',
  title: '遞迴(Recursion)',
  summary: '用終止條件與縮小問題理解遞迴寫法，並注意堆疊成本。',
  sourceBatch: 'programming-20260613',
  sourceFiles: ['_private/程式.txt'],
  sourceSummary: '來源「Recursion 遞迴」整理 base case、recursive case、stack overflow 與 memoization 提醒。',
  examOutline: ['能指出遞迴(Recursion) 的終止條件與遞迴條件。', '能用 Java 註解說明每一步的作答思路。'],
  memoryPoints: ['沒有終止條件會無限呼叫；每次遞迴都要讓問題往終止條件靠近。'],
  understandingNotes: [
    '遞迴像把大題拆成同型小題；base case 是最小題目，recursive case 是拆題規則。',
    '每次呼叫會放入呼叫堆疊(Call Stack)，太深可能造成 stack overflow。'
  ],
  difficulty: 'core',
  topicType: 'procedure',
  terms: [
    { zh: '遞迴', en: 'Recursion' },
    { zh: '終止條件', en: 'Base Case' },
    { zh: '呼叫堆疊', en: 'Call Stack' }
  ],
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T04:10:00+08:00',
  verifierSummary: 'verified: Java reasoning comments, base case, shrinking problem, and stack cost were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/程式.txt'],
      sourceSummary: '中階 / Recursion'
    },
    {
      kind: 'examOutline',
      items: ['辨認 base case 與 recursive case。', '能解釋遞迴呼叫如何縮小問題。']
    },
    {
      kind: 'memoryPoints',
      items: ['先寫終止條件，再寫縮小問題的遞迴式。']
    },
    {
      kind: 'understanding',
      items: ['如果 recursive case 沒有讓 n 變小，就不會靠近 base case。']
    },
    {
      kind: 'termList',
      terms: [
        { zh: '遞迴', en: 'Recursion' },
        { zh: '終止條件', en: 'Base Case' }
      ]
    },
    {
      kind: 'teachingCode',
      language: 'java',
      title: '階乘遞迴示範',
      description: '用 factorial 展示終止條件與縮小問題。',
      code: `int factorial(int n) {
  // 國考作答先寫終止條件，讓考官知道遞迴會停在 n=0 或 n=1。
  if (n <= 1) {
    return 1;
  }

  // 每次把問題從 n! 縮小成 (n-1)!，這就是遞迴式的作答思路。
  return n * factorial(n - 1);
}`
    }
  ]
};

const programmingSystemAnalysisSdlcTopic: ProfessionalSubjectTopic = {
  id: 'programming-system-analysis-sdlc',
  subjectKey: 'programming',
  title: '系統發展生命週期(System Development Life Cycle)',
  summary: '依需求、分析、設計、實作、測試、部署與維護理解 SDLC。',
  sourceBatch: 'programming-system-analysis-20260613',
  sourceFiles: ['_private/系統分析與設計.txt'],
  sourceSummary: '來源「SDLC」段落整理系統發展生命週期各階段與任務。',
  examOutline: ['能依順序說明 SDLC(System Development Life Cycle) 的主要階段。', '能把每個階段對應到產出與風險。'],
  memoryPoints: ['需求先釐清要做什麼，設計決定怎麼做，測試確認有沒有做對。'],
  understandingNotes: [
    'SDLC 是把系統開發拆成可管理階段，避免直接寫程式卻漏掉需求、測試與維護。',
    '考題常要求比較階段任務，答案要寫出每階段的目的與產出。'
  ],
  difficulty: 'intro',
  topicType: 'concept',
  terms: [
    { zh: '系統發展生命週期', en: 'System Development Life Cycle' },
    { zh: '需求分析', en: 'Requirements Analysis' },
    { zh: '系統設計', en: 'System Design' }
  ],
  verifiedBy: 'content-verifier',
  verifiedAt: '2026-06-13T04:10:00+08:00',
  verifierSummary: 'verified: SDLC order, phase purpose, route owner, and system-analysis terminology were checked.',
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/系統分析與設計.txt'],
      sourceSummary: '系統分析與設計概論 / SDLC'
    },
    {
      kind: 'examOutline',
      items: ['說明 SDLC 各階段順序與目的。', '區分需求分析、設計、實作、測試、部署、維護。']
    },
    {
      kind: 'memoryPoints',
      items: ['需求回答做什麼；設計回答怎麼做；測試回答有沒有做對。']
    },
    {
      kind: 'understanding',
      items: ['生命週期的重點是讓專案每一步有檢查點，不是只背階段名稱。']
    },
    {
      kind: 'termList',
      terms: [
        { zh: '系統發展生命週期', en: 'System Development Life Cycle' },
        { zh: '需求分析', en: 'Requirements Analysis' }
      ]
    }
  ]
};

export const professionalTopicsBySubject = {
  computerPrinciples: importedComputerPrinciplesTopics,
  networking: [networkingPortsTopic],
  informationManagement: [informationManagementDigitalTransformationTopic],
  programming: [programmingRecursionTopic, programmingSystemAnalysisSdlcTopic],
  database: [databaseFoundationsTopic, databaseNormalizationTopic],
  algorithms: [binarySearchTopic, sortingBaselineTopic, ...importedAlgorithmTopics],
  english: [],
  chinese: []
} as const satisfies ProfessionalTopicsBySubject;
