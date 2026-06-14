# 計概 source reading log

- source file: `_private/計算機概論.txt`
- route: `/computer-principles`
- subject: `computerPrinciples`
- status: source-read

| source section | exam outline | memory points | understanding notes |
| ----- | ----- | ----- | ----- |
| 電腦常用單位 | bit、byte、容量單位與網路速度單位 | bits 是 bit 的英文複數；b 是 bit、B 是 byte；1 B = 8 b | 用 32 bits = 4 bytes 與 1 MB/s = 8 Mbps 建立換算直覺 |
| 馮紐曼架構 | 程式內儲、五大單元、馮紐曼瓶頸 | 程式與資料同存記憶體；五大單元含 ALU/CU | 用 CPU 等記憶體解釋瓶頸，再連到 cache、預取與平行處理 |
| 圖靈機與圖靈測試 | 可計算模型與 AI 判斷方式差異 | 圖靈機是抽象模型；圖靈測試是智慧判斷 | 分清楚計算理論與人工智慧測試 |
| 機器指令與指令週期 | 指令組成與 5 階段流程 | Opcode、Operand；Fetch、Decode、Operand Fetch、Execute、Write Back | 用 PC 指向下一指令說明每階段的必要性 |
| Pipeline（管線化） | 管線時間公式、speedup、hazard | Pipeline 提高吞吐量，不必然降低單一指令延遲 | 先算理想時間，再說明 hazard/stall 造成落差 |
| 匯流排（Bus） | address/data/control bus 與位址空間計算 | n bits 位址匯流排可定址 2^n 個位址 | 用方向與承載內容區分三種匯流排 |
| 效能名詞與公式 | CPU time、CPI、clock rate、MIPS | CPU Time = IC * CPI / Clock Rate | 解釋 clock rate 高不一定快，需搭配 CPI 與指令數 |
| RISC 與 CISC | 指令集特徵、pipeline、代表架構比較 | RISC 精簡固定，CISC 複雜可變 | 避免背成 RISC 一定比較快，效能取決於整體微架構 |
| Memory 階層圖 | 記憶體階層、SRAM/DRAM、locality | 靠近 CPU 越快越貴越小 | 用時間/空間區域性解釋 cache 為何有效 |
| Memory 分類圖 | RAM/ROM、DRAM/SRAM、PROM/EPROM/EEPROM/Flash | RAM 多揮發，ROM/Flash 多非揮發 | 以斷電保留、refresh、成本速度做比較 |
| Register（暫存器） | PC、IR、base/limit、flag、MAR/MDR | PC 下一指令；IR 目前指令 | 把暫存器和指令週期、記憶體保護連起來 |
| Cache | L1/L2/L3、hit ratio、AMAT、write policy | AMAT = Hit Time + Miss Rate * Miss Penalty | 用 hit/miss 與 write through/back 說明效能與一致性取捨 |
| Hazard | structural/data/control hazard | RAW 最常見；control hazard 來自分支 | 每種 hazard 都對應 stall 或預測/forwarding 等解法 |
| USB 速度 | USB 版本與理論速度 | USB 3.0 常抓 5Gbps；Gen2 抓 10Gbps | 命名混亂，需用版本/Gen 對應速度 |
| 進制轉換 | 10 進制與 n 進制互轉、2/8/16 快速轉換 | 整數連除、小數連乘 | 用位權展開與 2 的冪次分組建立直覺 |
| 補數轉換 | sign-magnitude、1's、2's complement | 2's complement 範圍 -2^(n-1) 到 2^(n-1)-1 | 用 +0/-0 與直接加減法說明 2's complement 優勢 |
| 浮點數轉換 | IEEE 754 sign/exponent/fraction/bias | single bias 127；double bias 1023 | 用正規化公式 (-1)^S * 1.F * 2^(E-bias) 拆解 |
| 數碼、文字碼與檢查碼 | BCD、Gray、ASCII、Unicode、Parity、CRC、Hamming | Hamming distance 偵測 d 需 d+1，更正 t 需 2t+1 | 把錯誤偵測與更正能力和距離公式連起來 |
| 基本邏輯 | 邏輯閘、真值表、布林代數 | AND/OR/NOT/NAND/NOR/XOR/XNOR | 用真值表推導輸出，再套布林代數化簡 |
| SOP 與 POS | 由真值表寫 SOP/POS | SOP 看輸出 1；POS 看輸出 0 | minterm/maxterm 是從真值表轉函式的橋 |
| 卡諾圖化簡 | 2-4 變數 K-map 圈選 | 圈選數量為 2 的冪，可跨邊可重疊 | 圈越大越能消去變數，don't care 以最簡為準 |
| 萬用閘 | NAND/NOR 實作任意邏輯 | A NAND A 可做 NOT；A NOR A 可做 NOT | 由 NOT、AND、OR 的等價建構理解萬用性 |
| 組合與循序電路 | 半加器、全加器、FF、encoder/decoder、MUX/DEMUX | 組合電路無記憶；循序電路有狀態 | 即使少考也要辨認功能與輸入輸出關係 |
| 基本常識 | OS 分類、concurrency/parallelism、offline/spooling/buffering/cache | concurrency 交錯；parallelism 同時 | 用廚師例子與速度落差理解 OS 管理目的 |
| I/O 與中斷 | polling、interrupt、DMA、NMI/trap | DMA 大量傳輸時 CPU 只設定與收尾 | 以 CPU 是否等待與誰搬資料比較三種 I/O |
| 硬體保護 | I/O、memory、CPU protection、dual mode | 特權指令只能 kernel mode | base/limit、timer interrupt 分別保護記憶體與 CPU |
| OS 結構 | shell、system call、kernel、microkernel、VM | system call 是 user program 向 OS 要服務 | 用核心大小與 IPC 成本比較 monolithic/microkernel |
| Process | process 定義、state transition、PCB、scheduler、context switch | process 是執行中程式；PCB 存狀態 | 把排程、狀態轉移與 context switch 串成生命週期 |
| Deadlock | 四必要條件、prevention/avoidance/detection | Mutual Exclusion、Hold and Wait、No Preemption、Circular Wait | 先判斷四條件，再選擇預防、避免、偵測或忽略 |
| Process Communication | IPC 與同步工具 | shared memory 快但要同步；message passing 易保護 | 用生產者消費者等經典問題說明同步需求 |
| Memory Management | 配置策略、fragmentation、paging/segmentation、TLB | paging 解外部碎片，可能內部碎片 | 以位址轉換與碎片來源理解策略差異 |
| Virtual Memory | demand paging、page fault、EAT、replacement、thrashing | EAT 依 page fault ratio 加權 | thrashing 是 page fault 過多造成 CPU 利用率下降 |
| Disk Management | allocation、disk access time、RAID、disk scheduling | access time = seek + rotational latency + transfer | 用磁頭移動與容錯方式比較 scheduling 與 RAID |
