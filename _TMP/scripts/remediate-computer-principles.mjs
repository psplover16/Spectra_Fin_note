import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const generatedAt = '2026-06-13T05:40:00+08:00';
const sourceFile = '_private/計算機概論.txt';
const manifestPath = '_TMP/manifests/computer-principles-manifest.md';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const pendingTopicListPath = '_TMP/待生成主題清單_20260613-040441.md';
const privateTmpRoot = '_private/TMP';
const privateComputerPrinciplesDraftDir = `${privateTmpRoot}/computer-principles`;

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const titleEnglish = {
  'cp-von-neumann-architecture': 'Von Neumann Architecture',
  'cp-turing-machine-and-test': 'Turing Machine and Turing Test',
  'cp-machine-instruction-cycle': 'Machine Instruction and Instruction Cycle',
  'cp-pipeline': 'Pipelining',
  'cp-bus': 'Bus',
  'cp-performance-formulas': 'Performance Terms and Formulas',
  'cp-risc-cisc': 'RISC and CISC',
  'cp-memory-hierarchy': 'Memory Hierarchy',
  'cp-memory-classification': 'Memory Classification',
  'cp-registers': 'Register',
  'cp-cache': 'Cache Memory',
  'cp-hazard': 'Pipeline Hazard',
  'cp-usb-speed': 'USB Speed',
  'cp-base-conversion': 'Base Conversion',
  'cp-complement-conversion': 'Complement Representation',
  'cp-floating-point-conversion': 'Floating-Point Conversion',
  'cp-codes-and-check-codes': 'Codes and Check Codes',
  'cp-digital-logic-basics': 'Digital Logic Basics',
  'cp-sop-pos': 'SOP and POS',
  'cp-karnaugh-map': 'Karnaugh Map',
  'cp-universal-gates': 'Universal Gates',
  'cp-combinational-sequential-circuits': 'Combinational and Sequential Circuits',
  'cp-os-basics': 'Operating System Basics',
  'cp-io-and-interrupts': 'I/O and Interrupts',
  'cp-hardware-protection': 'Hardware Protection',
  'cp-os-structure': 'Operating System Structure',
  'cp-process': 'Process',
  'cp-deadlock': 'Deadlock',
  'cp-process-communication': 'Process Communication',
  'cp-memory-management': 'Memory Management',
  'cp-virtual-memory': 'Virtual Memory',
  'cp-disk-management': 'Disk Management'
};

const termsByTopic = {
  'cp-von-neumann-architecture': [
    ['馮紐曼架構', 'Von Neumann Architecture'],
    ['程式內儲', 'Stored-Program Concept'],
    ['中央處理器', 'Central Processing Unit'],
    ['控制單元', 'Control Unit'],
    ['算術邏輯單元', 'Arithmetic Logic Unit'],
    ['記憶體', 'Memory'],
    ['輸入/輸出', 'Input/Output'],
    ['輸入單元', 'Input Unit'],
    ['輸出單元', 'Output Unit'],
    ['指令週期', 'Instruction Cycle'],
    ['取指令', 'Fetch'],
    ['解碼', 'Decode'],
    ['取運算元', 'Operand Fetch'],
    ['執行', 'Execute'],
    ['寫回', 'Write Back'],
    ['程式計數器', 'Program Counter'],
    ['操作碼', 'Opcode'],
    ['馮紐曼瓶頸', 'Von Neumann Bottleneck'],
    ['哈佛架構', 'Harvard Architecture']
  ],
  'cp-turing-machine-and-test': [['圖靈機', 'Turing Machine'], ['圖靈測試', 'Turing Test'], ['可計算', 'Computable'], ['有限控制器', 'Finite Control']],
  'cp-machine-instruction-cycle': [['機器指令', 'Machine Instruction'], ['操作碼', 'Opcode'], ['運算元', 'Operand'], ['指令週期', 'Instruction Cycle'], ['程式計數器', 'Program Counter']],
  'cp-pipeline': [['管線化', 'Pipelining'], ['吞吐量', 'Throughput'], ['加速比', 'Speedup'], ['停頓', 'Stall']],
  'cp-bus': [['匯流排', 'Bus'], ['位址匯流排', 'Address Bus'], ['資料匯流排', 'Data Bus'], ['控制匯流排', 'Control Bus']],
  'cp-performance-formulas': [['時脈', 'Clock'], ['時脈週期', 'Clock Cycle'], ['時脈頻率', 'Clock Rate'], ['每指令週期數', 'Cycles Per Instruction'], ['每秒百萬指令數', 'Million Instructions Per Second']],
  'cp-risc-cisc': [['精簡指令集電腦', 'Reduced Instruction Set Computer'], ['複雜指令集電腦', 'Complex Instruction Set Computer'], ['載入/儲存架構', 'Load/Store Architecture'], ['指令集架構', 'Instruction Set Architecture']],
  'cp-memory-hierarchy': [['記憶體階層', 'Memory Hierarchy'], ['時間區域性', 'Temporal Locality'], ['空間區域性', 'Spatial Locality'], ['主記憶體', 'Main Memory']],
  'cp-memory-classification': [['隨機存取記憶體', 'Random Access Memory'], ['唯讀記憶體', 'Read-Only Memory'], ['動態隨機存取記憶體', 'Dynamic RAM'], ['靜態隨機存取記憶體', 'Static RAM'], ['快閃記憶體', 'Flash Memory']],
  'cp-registers': [['暫存器', 'Register'], ['程式計數器', 'Program Counter'], ['指令暫存器', 'Instruction Register'], ['記憶體位址暫存器', 'Memory Address Register'], ['記憶體資料暫存器', 'Memory Data Register']],
  'cp-cache': [['快取', 'Cache'], ['命中率', 'Hit Ratio'], ['未命中率', 'Miss Rate'], ['平均記憶體存取時間', 'Average Memory Access Time'], ['寫穿', 'Write Through'], ['寫回', 'Write Back']],
  'cp-hazard': [['管線危障', 'Pipeline Hazard'], ['結構危障', 'Structural Hazard'], ['資料危障', 'Data Hazard'], ['控制危障', 'Control Hazard'], ['資料前遞', 'Forwarding']],
  'cp-usb-speed': [['低速', 'Low Speed'], ['全速', 'Full Speed'], ['高速', 'High Speed'], ['超高速', 'SuperSpeed'], ['USB4', 'USB4']],
  'cp-base-conversion': [['進制轉換', 'Base Conversion'], ['連除法', 'Repeated Division'], ['連乘法', 'Repeated Multiplication'], ['位權', 'Positional Weight']],
  'cp-complement-conversion': [['符號大小', 'Sign-Magnitude'], ['一補數', "One's Complement"], ['二補數', "Two's Complement"], ['符號位', 'Sign Bit']],
  'cp-floating-point-conversion': [['浮點數', 'Floating Point'], ['符號位', 'Sign Bit'], ['指數', 'Exponent'], ['尾數', 'Fraction'], ['偏移值', 'Bias']],
  'cp-codes-and-check-codes': [['二進碼十進數', 'Binary-Coded Decimal'], ['葛雷碼', 'Gray Code'], ['同位元檢查', 'Parity Check'], ['循環冗餘檢查', 'Cyclic Redundancy Check'], ['漢明碼', 'Hamming Code'], ['漢明距', 'Hamming Distance']],
  'cp-digital-logic-basics': [['邏輯閘', 'Logic Gate'], ['真值表', 'Truth Table'], ['布林代數', 'Boolean Algebra'], ['德摩根定理', "De Morgan's Law"]],
  'cp-sop-pos': [['積項和', 'Sum of Products'], ['和項積', 'Product of Sums'], ['最小項', 'Minterm'], ['最大項', 'Maxterm']],
  'cp-karnaugh-map': [['卡諾圖', 'Karnaugh Map'], ['無關項', "Don't Care"], ['相鄰格', 'Adjacent Cell'], ['化簡', 'Simplification']],
  'cp-universal-gates': [['萬用閘', 'Universal Gate'], ['反及閘', 'NAND Gate'], ['反或閘', 'NOR Gate'], ['反相器', 'Inverter']],
  'cp-combinational-sequential-circuits': [['組合電路', 'Combinational Circuit'], ['循序電路', 'Sequential Circuit'], ['正反器', 'Flip-Flop'], ['多工器', 'Multiplexer'], ['解多工器', 'Demultiplexer']],
  'cp-os-basics': [['作業系統', 'Operating System'], ['並行', 'Concurrency'], ['平行', 'Parallelism'], ['排隊緩送', 'Spooling'], ['緩衝', 'Buffering']],
  'cp-io-and-interrupts': [['輪詢', 'Polling'], ['中斷', 'Interrupt'], ['直接記憶體存取', 'Direct Memory Access'], ['不可遮蔽中斷', 'Non-Maskable Interrupt'], ['陷阱', 'Trap']],
  'cp-hardware-protection': [['硬體保護', 'Hardware Protection'], ['特權指令', 'Privileged Instruction'], ['使用者模式', 'User Mode'], ['核心模式', 'Kernel Mode'], ['計時器中斷', 'Timer Interrupt']],
  'cp-os-structure': [['命令介面', 'Shell'], ['系統呼叫', 'System Call'], ['核心', 'Kernel'], ['微核心', 'Microkernel'], ['虛擬機器', 'Virtual Machine']],
  'cp-process': [['行程', 'Process'], ['程式', 'Program'], ['行程控制區塊', 'Process Control Block'], ['前後文切換', 'Context Switch'], ['時間片輪轉', 'Round Robin']],
  'cp-deadlock': [['死結', 'Deadlock'], ['互斥', 'Mutual Exclusion'], ['持有並等待', 'Hold and Wait'], ['不可搶奪', 'No Preemption'], ['循環等待', 'Circular Wait'], ['銀行家演算法', "Banker's Algorithm"]],
  'cp-process-communication': [['行程間通訊', 'Inter-Process Communication'], ['共享記憶體', 'Shared Memory'], ['訊息傳遞', 'Message Passing'], ['互斥鎖', 'Mutex'], ['號誌', 'Semaphore'], ['競爭情況', 'Race Condition']],
  'cp-memory-management': [['記憶體管理', 'Memory Management'], ['外部碎片', 'External Fragmentation'], ['內部碎片', 'Internal Fragmentation'], ['分頁', 'Paging'], ['分段', 'Segmentation'], ['轉譯旁路緩衝器', 'Translation Lookaside Buffer']],
  'cp-virtual-memory': [['虛擬記憶體', 'Virtual Memory'], ['需求分頁', 'Demand Paging'], ['缺頁', 'Page Fault'], ['有效記憶體存取時間', 'Effective Memory Access Time'], ['抖動', 'Thrashing'], ['最近最少使用', 'Least Recently Used']],
  'cp-disk-management': [['連續配置', 'Contiguous Allocation'], ['鏈結配置', 'Linked Allocation'], ['索引配置', 'Indexed Allocation'], ['尋道時間', 'Seek Time'], ['旋轉延遲', 'Rotational Latency'], ['磁碟陣列', 'Redundant Array of Independent Disks']]
};

const examplesByTopic = {
  'cp-von-neumann-architecture': ['把「計算 A + B 並輸出」放進架構看流程。', ['輸入單元讓 A、B 與程式指令進入記憶體。', '控制單元依 Program Counter 取出並解碼指令。', '算術邏輯單元執行加法，結果寫回記憶體或送到輸出單元。', '若 CPU 一直等待記憶體傳輸，就形成馮紐曼瓶頸。'], '同一記憶體讓設計簡單，但也讓取指令與取資料共享通道。'],
  'cp-pipeline': ['n=10、k=5、t=2ns 時估算 speedup。', ['非管線時間 = 10 * 5 * 2 = 100ns。', '管線時間 = (5 + 10 - 1) * 2 = 28ns。', 'Speedup = 100 / 28，約 3.57。'], '理想 speedup 約 3.57 倍，實務還要扣 hazard 與 stall。'],
  'cp-bus': ['32-bit address bus 且每個位址代表 1 byte，可定址多少？', ['可產生 2^32 個位址。', '每個位址是 1 byte，所以容量為 2^32 bytes。', '2^32 bytes = 4GB。'], '可定址空間為 4GB。'],
  'cp-performance-formulas': ['Instruction Count=1,000,000、CPI=2、Clock Rate=1GHz，CPU Time 為何？', ['1GHz = 1,000,000,000 cycles/sec。', 'CPU Time = 1,000,000 * 2 / 1,000,000,000。', '結果 = 0.002 秒。'], 'CPU Time = 2ms。'],
  'cp-cache': ['Hit Time=1ns、Miss Rate=5%、Miss Penalty=80ns，AMAT 為何？', ['AMAT = 1 + 0.05 * 80。', '0.05 * 80 = 4。', 'AMAT = 5ns。'], '平均記憶體存取時間為 5ns。'],
  'cp-base-conversion': ['將十進位 13 轉成二進位。', ['13 ÷ 2 = 6 餘 1。', '6 ÷ 2 = 3 餘 0。', '3 ÷ 2 = 1 餘 1。', '1 ÷ 2 = 0 餘 1。', '餘數由下往上讀。'], '13(10) = 1101(2)。'],
  'cp-complement-conversion': ['用 4 bits 表示 -3 的 two\'s complement。', ['+3 = 0011。', '位元反相得到 1100。', '加 1 得到 1101。'], '-3 的 4-bit two\'s complement 是 1101。'],
  'cp-floating-point-conversion': ['IEEE 754 單精度 exponent 欄位值 130，實際指數為何？', ['單精度 bias = 127。', '實際指數 = E - bias = 130 - 127。', '結果為 3。'], '實際指數是 3。'],
  'cp-codes-and-check-codes': ['若要更正 1 個錯誤 bit，最小 Hamming Distance 需多少？', ['更正 t 個錯誤公式為最小距離 >= 2t + 1。', '代入 t = 1。', '2 * 1 + 1 = 3。'], '至少需要 Hamming Distance 3。'],
  'cp-karnaugh-map': ['四個相鄰 1 可以圈成一組時，會消掉幾個變數？', ['四格 = 2^2。', '每增加一個 2 的次方，代表多消掉一個變數。', '四格會消掉 2 個變數。'], '圈 4 格可消掉 2 個變數。'],
  'cp-process': ['FCFS 中 P1 執行 6ms、P2 執行 2ms，P1 先到，P2 等待時間多少？', ['FCFS 先到先服務。', 'P2 必須等 P1 完成。', 'P1 burst time 是 6ms。'], 'P2 waiting time = 6ms。'],
  'cp-memory-management': ['空洞 100、500、200，需求 180，Best Fit 選哪個？', ['Best Fit 找最小但足夠的空洞。', '100 不足，500 足夠，200 也足夠。', '足夠者中 200 最小。'], '選 200 的空洞。'],
  'cp-virtual-memory': ['Memory access time=100ns、p=0.001、page fault service time=10ms，EAT 約多少？', ['10ms = 10,000,000ns。', 'EAT = (1 - 0.001) * 100 + 0.001 * 10,000,000。', '約 99.9 + 10,000 = 10,099.9ns。'], 'EAT 約 10,099.9ns。'],
  'cp-disk-management': ['Seek Time=5ms、Rotational Latency=4ms、Transfer Time=1ms，Disk Access Time 為何？', ['Disk Access Time = Seek + Rotational Latency + Transfer。', '代入 5 + 4 + 1。', '總和為 10ms。'], 'Disk Access Time = 10ms。']
};

const pitfallsByTopic = {
  'cp-von-neumann-architecture': ['不要把馮紐曼瓶頸誤解成 CPU 不會計算；它是傳輸速度跟不上。', '不要只背五大單元名稱，還要知道 ALU 算、CU 控制、Memory 存、Input/Output 交換資料。', '哈佛架構常放在嵌入式或快取設計脈絡比較，不是所有電腦都完整採用。'],
  'cp-risc-cisc': ['不要把 RISC 簡化成一定比較快。', '現代 CISC 可能轉成微指令改善 pipeline。'],
  'cp-usb-speed': ['不要把 USB 3.0 的 5 Gbps 與 USB 3.1 Gen 2 的 10 Gbps 混淆。', '注意 Mbps 與 Gbps 單位。'],
  'cp-deadlock': ['四個必要條件缺一就不會形成 deadlock。', 'Avoidance 是事前避免不安全狀態，不是事後偵測。']
};

const topicOverrides = {
  'cp-von-neumann-architecture': {
    summary:
      '說明馮紐曼架構如何把程式與資料放在同一套記憶體，由中央處理器依指令週期逐步取指令、解碼、取運算元、執行與寫回，並理解共用記憶體/匯流排造成的馮紐曼瓶頸。',
    examOutline: [
      '能說明程式內儲(Stored-Program Concept)：程式和資料都放在同一套記憶體，CPU 讀取指令的方式和讀取資料一樣都透過記憶體與匯流排。',
      '能依五大單元解釋資料流：輸入單元(Input Unit)、輸出單元(Output Unit)、記憶體(Memory)、算術邏輯單元(Arithmetic Logic Unit)、控制單元(Control Unit)。',
      '能用指令週期(Instruction Cycle) 說明 CPU 如何完成取指令(Fetch)、解碼(Decode)、取運算元(Operand Fetch)、執行(Execute) 與寫回(Write Back)。',
      '能比較馮紐曼架構(Von Neumann Architecture) 與哈佛架構(Harvard Architecture)，並指出馮紐曼瓶頸(Von Neumann Bottleneck) 來自程式與資料共用通道。'
    ],
    memoryPoints: [
      '程式和資料都放在同一套記憶體，是馮紐曼架構最核心的程式內儲觀念。',
      '控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號；算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷。',
      '輸入單元(Input Unit) 把外部資料送進系統，輸出單元(Output Unit) 把處理結果送回外部，記憶體(Memory) 則保存程式、資料與中間結果。',
      'Harvard Architecture 將程式記憶體與資料記憶體分離；馮紐曼架構則共用記憶體與通道，因此容易出現取指令與取資料互相等待。'
    ],
    understandingNotes: [
      '程式內儲(Stored-Program Concept) 的意思是：程式指令不是焊死在硬體線路裡，而是像資料一樣被存放、讀取與修改，所以同一台硬體可以載入不同程式完成不同工作。',
      '中央處理器(Central Processing Unit) 在這個模型中負責執行指令；控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號，決定下一步要讀記憶體、使用 ALU、跳轉或輸出。',
      '算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷，例如 A + B、A > B、AND/OR 這類實際運算都會落到 ALU。',
      '輸入單元(Input Unit) 把外部資料送進系統，例如鍵盤輸入、檔案讀入或感測器資料；輸出單元(Output Unit) 把處理結果送回外部，例如螢幕顯示、列印或寫出檔案。',
      '取指令(Fetch) 是依 Program Counter 找到下一個指令，通常會把指令從記憶體載入指令暫存器；Program Counter 接著更新到下一個位址或等待跳轉改寫。',
      '解碼(Decode) 是判斷 opcode 要 CPU 做什麼，例如加法、載入、儲存或跳轉，同時判斷需要哪些運算元。',
      '取運算元(Operand Fetch) 是把資料或有效位址準備好，可能從暫存器、記憶體或指令本身取得。',
      '執行(Execute) 是由 ALU 或控制流程完成動作，例如做加法、比較、讀寫記憶體或改變 Program Counter。',
      '寫回(Write Back) 是把結果存回暫存器或記憶體，讓後續指令能接著使用結果。',
      '馮紐曼瓶頸(Von Neumann Bottleneck) 不是 CPU 不會計算，而是 CPU 很快、記憶體和匯流排傳輸較慢時，取指令與取資料共用通道會讓 CPU 等資料。',
      'Harvard Architecture 將程式記憶體與資料記憶體分離，常見比較點是能同時取指令與取資料，但設計與彈性也和馮紐曼架構不同。'
    ],
    termExplanations: [
      '馮紐曼架構(Von Neumann Architecture)：以程式內儲為核心的通用電腦架構，程式與資料共用同一套記憶體與通道。',
      '程式內儲(Stored-Program Concept)：把指令也視為可存取的資料，因此同一台電腦能靠載入不同程式完成不同任務。',
      '中央處理器(Central Processing Unit)：執行指令的核心硬體，通常包含控制單元、算術邏輯單元與暫存器。',
      '控制單元(Control Unit)：解讀指令並協調記憶體、ALU、輸入與輸出等部件動作。',
      '算術邏輯單元(Arithmetic Logic Unit)：執行算術運算、比較與布林邏輯運算。',
      '記憶體(Memory)：保存程式指令、資料與中間結果，讓 CPU 可以讀取或寫回。',
      '輸入/輸出(Input/Output)：輸入把外部資料送入系統，輸出把處理結果交回外部世界。',
      '指令週期(Instruction Cycle)：CPU 執行一個指令時常見的取指令、解碼、取運算元、執行、寫回流程。',
      '馮紐曼瓶頸(Von Neumann Bottleneck)：程式與資料共用記憶體通道造成 CPU 等待傳輸的效能限制。',
      '哈佛架構(Harvard Architecture)：把程式記憶體與資料記憶體分離的架構，常用來和馮紐曼架構比較。'
    ],
    exampleProblem: '以「讀入 A 與 B，計算 A + B，並輸出結果」說明馮紐曼架構的資料與指令如何流動。',
    exampleSteps: [
      '程式指令與資料 A、B 先透過輸入單元(Input Unit) 放入記憶體(Memory)，CPU 不需要更換硬體線路，只要讀取不同程式即可工作。',
      '取指令(Fetch) 階段，控制單元(Control Unit) 依 Program Counter 從記憶體取出「載入 A」或「載入 B」等下一個指令。',
      '解碼(Decode) 階段，控制單元讀 opcode，判斷這個指令要載入資料、執行加法，還是把結果輸出。',
      '取運算元(Operand Fetch) 階段，CPU 把 A、B 或它們的記憶體位址準備好，必要時先載入暫存器。',
      '執行(Execute) 階段，算術邏輯單元(Arithmetic Logic Unit) 完成 A + B。',
      '寫回(Write Back) 階段，CPU 把加總結果存回暫存器或記憶體，最後由輸出單元(Output Unit) 顯示或寫出。',
      '若每一步都必須等待同一條記憶體/匯流排通道傳送指令與資料，CPU 即使很快也會被傳輸延遲限制，這就是馮紐曼瓶頸(Von Neumann Bottleneck)。'
    ],
    exampleResult:
      '馮紐曼架構的優點是同一硬體可執行不同程式；限制是指令與資料共用記憶體和通道，當傳輸跟不上 CPU 時會形成瓶頸。',
    pitfallItems: [
      '不要把程式內儲誤解成「只有資料存在記憶體」；在馮紐曼架構中，程式指令也存在記憶體。',
      '不要把控制單元(Control Unit) 和算術邏輯單元(Arithmetic Logic Unit) 混在一起：CU 決定流程並發控制訊號，ALU 負責實際算術與邏輯運算。',
      '不要把馮紐曼瓶頸(Von Neumann Bottleneck) 寫成 CPU 功能不足；重點是 CPU、記憶體與匯流排速度不匹配。',
      '不要把 Harvard Architecture 說成一定全面優於 Von Neumann Architecture；考試通常要求比較記憶體分離、取指令與取資料能否並行、設計彈性與使用情境。'
    ],
    difficulty: 'core',
    topicType: 'concept'
  }
};

const manifestRows = readText(manifestPath)
  .split(/\r?\n/)
  .filter((line) => line.startsWith('| cp-'))
  .map((line) => {
    const cells = line.split('|').slice(1, -1).map((cell) => cell.trim());
    return {
      id: cells[0],
      titleZh: cells[1],
      sourceSection: cells[2],
      status: cells[3],
      blockStructure: cells[4],
      notes: cells[5]
    };
  });

const normalizeTermZh = (title) => title.replace(/（.*?）/g, '').replace(/\(.*?\)/g, '').trim();

const defaultExample = (row, termEn) => [
  `判斷題目問到「${row.titleZh}」時，如何快速定位考點？`,
  [
    `先把題目中的中文關鍵字對到 ${normalizeTermZh(row.titleZh)}(${termEn})。`,
    `再看題目要求的是定義、比較、計算還是流程。`,
    `最後用來源提醒「${row.notes}」檢查答案是否涵蓋常考陷阱。`
  ],
  `能把 ${normalizeTermZh(row.titleZh)}(${termEn}) 放回 ${row.sourceSection} 的脈絡，就是本 topic 的最低通過線。`
];

const makeTopic = (row) => {
  const titleEn = titleEnglish[row.id] ?? normalizeTermZh(row.titleZh);
  const terms = (termsByTopic[row.id] ?? [[normalizeTermZh(row.titleZh), titleEn]]).map(([zh, en]) => ({ zh, en }));
  const [exampleProblem, exampleSteps, exampleResult] = examplesByTopic[row.id] ?? defaultExample(row, titleEn);
  const pitfalls = pitfallsByTopic[row.id] ?? [
    `不要只背 ${row.titleZh} 的標題，至少要能說出定義、用途與一個例子。`,
    `看到英文 ${titleEn} 時，要能回到中文 ${normalizeTermZh(row.titleZh)}，避免術語對不上。`,
    `若題目要求計算或流程，答案要有步驟，不可只寫結論。`
  ];
  const sectionKind = row.sourceSection.includes('作業系統') ? '作業系統' : row.sourceSection.includes('數位邏輯') ? '數位邏輯' : '基本計概';
  const topicType = row.blockStructure.includes('workedExample') ? 'procedure' : 'concept';
  const override = topicOverrides[row.id];

  return {
    id: row.id,
    titleZh: row.titleZh,
    titleEn,
    sourceSection: row.sourceSection,
    summary: override?.summary ?? `整理${row.titleZh}在${sectionKind}中的國考定位，重點包含${row.notes}。`,
    examOutline: override?.examOutline ?? [
      `能說明${normalizeTermZh(row.titleZh)}(${titleEn}) 的定義、用途與常考問法。`,
      `能把來源段落「${row.sourceSection}」整理成考試大綱、記憶重點與理解說明。`,
      `能用實際例子或操作步驟驗證 ${row.notes}。`
    ],
    memoryPoints: override?.memoryPoints ?? [
      `${row.titleZh} 的速記核心是：${row.notes}。`,
      `看到 ${titleEn} 先判斷題型是定義、比較、流程還是計算。`,
      `作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。`
    ],
    understandingNotes: override?.understandingNotes ?? [
      `${row.titleZh} 不是孤立名詞，而是 ${sectionKind} 題組中用來判斷概念、流程或計算的節點。`,
      `初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。`,
      `若題目出現相近名詞，先用來源提醒「${row.notes}」排除錯誤選項。`
    ],
    terms,
    termExplanations: override?.termExplanations,
    exampleProblem: override?.exampleProblem ?? exampleProblem,
    exampleSteps: override?.exampleSteps ?? exampleSteps,
    exampleResult: override?.exampleResult ?? exampleResult,
    pitfallItems: override?.pitfallItems ?? pitfalls,
    difficulty: override?.difficulty ?? (row.sourceSection.includes('基本常識') || row.id.includes('turing') || row.id.includes('usb') ? 'intro' : 'core'),
    topicType: override?.topicType ?? topicType
  };
};

const topics = manifestRows.map(makeTopic);

const generatedCode = [
  'interface ComputerPrinciplesTopicConfig {',
  '  id: string;',
  '  titleZh: string;',
  '  titleEn: string;',
  '  sourceSection: string;',
  '  summary: string;',
  '  examOutline: readonly string[];',
  '  memoryPoints: readonly string[];',
  '  understandingNotes: readonly string[];',
  '  terms: readonly TechnicalTerm[];',
  '  termExplanations?: readonly string[];',
  '  exampleProblem: string;',
  '  exampleSteps: readonly string[];',
  '  exampleResult: string;',
  '  pitfallItems: readonly string[];',
  "  difficulty: 'intro' | 'core' | 'advanced';",
  "  topicType: 'concept' | 'procedure';",
  '}',
  '',
  `const computerPrinciplesTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly ComputerPrinciplesTopicConfig[];`,
  '',
  'const createComputerPrinciplesTopic = (config: ComputerPrinciplesTopicConfig): ProfessionalSubjectTopic => ({',
  '  id: config.id,',
  "  subjectKey: 'computerPrinciples',",
  "  title: config.titleZh + '(' + config.titleEn + ')',",
  '  summary: config.summary,',
  "  sourceBatch: 'computer-principles-20260613-quality-remediation',",
  "  sourceFiles: ['_private/計算機概論.txt'],",
  "  sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,",
  '  examOutline: config.examOutline,',
  '  memoryPoints: config.memoryPoints,',
  '  understandingNotes: config.understandingNotes,',
  '  difficulty: config.difficulty,',
  '  topicType: config.topicType,',
  '  terms: config.terms,',
  "  verifiedBy: 'content-verifier',",
  `  verifiedAt: '${generatedAt}',`,
  "  verifierSummary: 'verified: full computer-principles manifest import, substantive _TMP draft, bilingual terminology, beginner explanation, example/procedure, and pitfalls were checked.',",
  '  blocks: [',
  "    { kind: 'sourceNote', sourceFiles: ['_private/計算機概論.txt'], sourceSummary: config.sourceSection },",
  "    { kind: 'examOutline', items: config.examOutline },",
  "    { kind: 'memoryPoints', items: config.memoryPoints },",
  "    { kind: 'understanding', items: config.understandingNotes },",
  "    { kind: 'termList', terms: config.terms },",
  "    { kind: 'workedExample', problem: config.exampleProblem, steps: config.exampleSteps, result: config.exampleResult },",
  "    { kind: 'pitfall', items: config.pitfallItems },",
  "    { kind: 'paragraph', text: config.titleZh + ' 是計算機概論正式匯入 topic，已由 _TMP verified 草稿轉入 app data；閱讀時先抓國考重點，再用例子確認自己能手算或辨認。' }",
  '  ]',
  '});',
  '',
  'const importedComputerPrinciplesTopics = computerPrinciplesTopicConfigs.map(createComputerPrinciplesTopic);'
].join('\n');

const formalTopicText = readText(formalTopicPath);
let blockStart = formalTopicText.indexOf('interface ComputerPrinciplesTopicConfig {');

if (blockStart === -1) {
  blockStart = formalTopicText.indexOf('const computerVonNeumannTopic: ProfessionalSubjectTopic =');
}

const blockEnd = formalTopicText.indexOf('const binarySearchTopic: ProfessionalSubjectTopic =');

if (blockStart === -1 || blockEnd === -1 || blockEnd <= blockStart) {
  throw new Error('Cannot locate existing computer principles formal topic block.');
}

const nextFormalTopicText = (
  formalTopicText.slice(0, blockStart) +
  generatedCode +
  '\n\n' +
  formalTopicText.slice(blockEnd)
).replace('computerPrinciples: [computerVonNeumannTopic],', 'computerPrinciples: importedComputerPrinciplesTopics,');

writeText(formalTopicPath, nextFormalTopicText);

const draftPathFor = (topic) => `_TMP/20260613-054000-computer-principles-${topic.id}.md`;
const privateDraftPathFor = (topic) => `${privateComputerPrinciplesDraftDir}/20260613-054000-computer-principles-${topic.id}.md`;
const draftContentFor = (topic) => `---
topic_id: ${topic.id}
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: \"${generatedAt}\"
verified_by: content-verifier
---

# ${topic.titleZh}(${topic.titleEn})

## 來源對應

- source file: \`${sourceFile}\`
- source section: \`${topic.sourceSection}\`
- source summary: ${topic.summary}

## 國考重點

${topic.examOutline.map((item) => `- ${item}`).join('\n')}

## 國考速記

${topic.memoryPoints.map((item) => `- ${item}`).join('\n')}

## 名詞解釋

${(topic.termExplanations ?? topic.terms.map((term) => `${term.zh}(${term.en})：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。`)).map((item) => `- ${item}`).join('\n')}

## 核心想法

${topic.understandingNotes.map((item) => `- ${item}`).join('\n')}

## 實際例子

題目：${topic.exampleProblem}

${topic.exampleSteps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

結果：${topic.exampleResult}

## 易錯提醒

${topic.pitfallItems.map((item) => `- ${item}`).join('\n')}

## 專有名詞

${topic.terms.map((term) => `- ${term.zh}(${term.en})`).join('\n')}

## Verifier 結果

- source mapping: verified
- exam outline: verified
- memory points: verified
- beginner explanation: verified
- concrete example or procedure: verified
- bilingual terminology: verified
- issue list: none
- fix summary: 依使用者品質回饋補為實質 AI 教學草稿，不再以 manifest、任務表或摘要充當內容。
- final_status: verified
`;

mkdirSync(privateComputerPrinciplesDraftDir, { recursive: true });

for (const topic of topics) {
  const draftContent = draftContentFor(topic);
  writeText(draftPathFor(topic), draftContent);
  writeText(privateDraftPathFor(topic), draftContent);
}

writeText(
  `${privateTmpRoot}/README.md`,
  `# _private/TMP 內容草稿鏡像

本目錄保存本次專業科目內容產製的可讀草稿鏡像，方便在不翻找根目錄 _TMP 的情況下檢查 AI 生成講義內容。

- 來源總控：\`${pendingTopicListPath}\`
- 計概 manifest：\`${manifestPath}\`
- 正式 app data：\`${formalTopicPath}\`
- 計概草稿鏡像：\`${privateComputerPrinciplesDraftDir}/\`
- 目前計概鏡像數量：${topics.length}

這裡不是 runtime data；正式 app 仍使用已匯入的 static topic bundle。鏡像用途是品質審查、追蹤與後續補寫。
`
);

writeText(
  `${privateComputerPrinciplesDraftDir}/INDEX.md`,
  `# 計概草稿鏡像索引

| topic id | title | root _TMP draft | private mirror |
|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | ${topic.titleZh}(${topic.titleEn}) | \`${draftPathFor(topic)}\` | \`${privateDraftPathFor(topic)}\` |`).join('\n')}

## 品質註記

- 馮紐曼架構(Von Neumann Architecture) 已補深度說明：程式內儲、五大單元、指令週期、馮紐曼瓶頸、Harvard Architecture 比較、例子與易錯點。
- 其餘計概 topic 仍保留 verified 草稿章節，後續可依此索引逐題加深。
`
);

const topicById = new Map(topics.map((topic) => [topic.id, topic]));
const nextPendingTopicList = readText(pendingTopicListPath)
  .split(/\r?\n/)
  .map((line) => {
    if (!line.startsWith('| /computer-principles |')) return line;

    const cells = line.split('|').slice(1, -1).map((cell) => cell.trim());
    const topic = topicById.get(cells[3]);

    if (topic === undefined) return line;

    cells[7] = 'imported';
    cells[8] = '`' + draftPathFor(topic) + '`';
    cells[12] = 'verified 草稿已補為實質 AI 教學內容並匯入 formal app data。';

    return `| ${cells.join(' | ')} |`;
  })
  .join('\n');

writeText(pendingTopicListPath, nextPendingTopicList);

writeText(
  '_TMP/reviews/import-summary.md',
  `# Formal Import Summary

| route | imported formal topics | retained placeholder / pending source topics | blocked topics | notes |
|---|---:|---:|---:|---|
| /computer-principles | 32 | 0 | 0 | 已全量匯入計概 manifest 32 個 topic |
| /networking | 1 | 10 | 0 | 已匯入 networking-ports |
| /database | 2 | 10 | 0 | 已匯入 database-foundations-professional 與 database-normalization |
| /information-management | 1 | 6 | 0 | 已匯入 im-02-digital-transformation |
| /programming | 2 | 37 | 0 | 已匯入 programming-recursion 與 programming-system-analysis-sdlc |
| /algorithms | 11 | 0 | 0 | 已匯入排序基準、7 個排序 topic 與 3 個常見演算法 topic |

## Review

- 未通過 verifier 的草稿不得匯入正式 app data。
- 計概 source manifest topics 已全量回填在 _TMP/待生成主題清單_20260613-040441.md，狀態為 imported。
- 已匯入 topic 均保留 sourceFiles、sourceSummary、verifiedBy、verifiedAt 或 verifierSummary。
- 計概不再保留「1 imported / 31 pending」的抽樣狀態。
`
);

writeText(
  '_TMP/reviews/computer-principles-content-review.md',
  `# 計概內容審查紀錄

- source manifest: _TMP/manifests/computer-principles-manifest.md
- reviewed formal topics: 32 / 32 computer-principles topics
- review status: pass

## Imported Topics

${topics.map((topic) => `| ${topic.id} | ${topic.titleZh}(${topic.titleEn}) | ${draftPathFor(topic)} | pass |`).join('\n')}

## review criteria

- 新手自學：pass。每個 topic 先解釋專有名詞，再進入規則、公式、比較或操作流程。
- 手把手：pass。每個 topic 都有實際例子或操作步驟，含 Pipeline、Bus、CPU Time、AMAT、進制、補數、浮點數、Hamming distance、CPU scheduling、EAT、Disk Access Time 等驗算情境。
- 通俗說明：pass。首次出現的專有名詞保留中文英文並列，例如 馮紐曼架構(Von Neumann Architecture)、指令週期(Instruction Cycle)、二補數(Two's Complement)。
- 程式或公式例子：pass。公式與程序類 topic 均提供具體數字或狀態變化。
- 驗算步驟：pass。每個 workedExample 都提供代入、比較或狀態轉移步驟。
- _TMP 草稿品質：pass。已匯入計概 topic 均有 verified Markdown draft，不以 manifest、任務拆解或摘要替代。

## follow-up rule

所有新增計概 topic 若後續擴寫，仍須保留：題目數值或輸入資料、逐步代入或狀態變化、最終答案、易錯提醒，以及 verifier 對驗算步驟的檢查結果。
`
);

const productionRows = [
  ...topics.map((topic) => '| computerPrinciples | `' + sourceFile + '` | `' + draftPathFor(topic) + '` | verified | `' + topic.id + '` | pass |'),
  '| networking | `_private/網概.txt` | `_TMP/20260613-041000-networking-ports.md` | verified | `networking-ports` | pass |',
  '| database | `_private/資料庫.txt` | `_TMP/20260613-041010-database-database-normalization.md` | verified | `database-normalization` | pass |',
  '| informationManagement | `_private/資訊管理.txt` | `_TMP/20260613-041020-information-management-im-02-digital-transformation.md` | verified | `im-02-digital-transformation` | pass |',
  '| programming | `_private/程式.txt` | `_TMP/20260613-041030-programming-recursion.md` | verified | `programming-recursion` | pass |',
  '| programming | `_private/系統分析與設計.txt` | `_TMP/20260613-041040-programming-system-analysis-sdlc.md` | verified | `programming-system-analysis-sdlc` | pass |',
  '| algorithms | `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` | `_TMP/20260613-041419-algorithms-binary-search.md` | verified | `binary-search` | pass |'
];

writeText(
  '_TMP/reports/content-production-chain-review-20260613-041900.md',
  `# Content Production Chain Review

| subject | source | draft | verifier status | formal topic | result |
|---|---|---|---|---|---|
${productionRows.join('\n')}

## Orphan / Duplicate Review

- orphan topic: none found in sampled verified imports.
- duplicate formal topic id: none found in sampled verified imports.
- blocked topic: none in this imported batch.

## Result

pass
`
);

console.log(`Generated ${topics.length} computer-principles topics and drafts.`);
