---
topic_id: cp-von-neumann-architecture
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# 馮紐曼架構(Von Neumann Architecture)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 馮紐曼架構`
- source summary: 說明馮紐曼架構如何把程式與資料放在同一套記憶體，由中央處理器依指令週期逐步取指令、解碼、取運算元、執行與寫回，並理解共用記憶體/匯流排造成的馮紐曼瓶頸。

## 國考重點

- 能說明程式內儲(Stored-Program Concept)：程式和資料都放在同一套記憶體，CPU 讀取指令的方式和讀取資料一樣都透過記憶體與匯流排。
- 能依五大單元解釋資料流：輸入單元(Input Unit)、輸出單元(Output Unit)、記憶體(Memory)、算術邏輯單元(Arithmetic Logic Unit)、控制單元(Control Unit)。
- 能用指令週期(Instruction Cycle) 說明 CPU 如何完成取指令(Fetch)、解碼(Decode)、取運算元(Operand Fetch)、執行(Execute) 與寫回(Write Back)。
- 能比較馮紐曼架構(Von Neumann Architecture) 與哈佛架構(Harvard Architecture)，並指出馮紐曼瓶頸(Von Neumann Bottleneck) 來自程式與資料共用通道。

## 國考速記

- 程式和資料都放在同一套記憶體，是馮紐曼架構最核心的程式內儲觀念。
- 控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號；算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷。
- 輸入單元(Input Unit) 把外部資料送進系統，輸出單元(Output Unit) 把處理結果送回外部，記憶體(Memory) 則保存程式、資料與中間結果。
- Harvard Architecture 將程式記憶體與資料記憶體分離；馮紐曼架構則共用記憶體與通道，因此容易出現取指令與取資料互相等待。

## 名詞解釋

- 馮紐曼架構(Von Neumann Architecture)：以程式內儲為核心的通用電腦架構，程式與資料共用同一套記憶體與通道。
- 程式內儲(Stored-Program Concept)：把指令也視為可存取的資料，因此同一台電腦能靠載入不同程式完成不同任務。
- 中央處理器(Central Processing Unit)：執行指令的核心硬體，通常包含控制單元、算術邏輯單元與暫存器。
- 控制單元(Control Unit)：解讀指令並協調記憶體、ALU、輸入與輸出等部件動作。
- 算術邏輯單元(Arithmetic Logic Unit)：執行算術運算、比較與布林邏輯運算。
- 記憶體(Memory)：保存程式指令、資料與中間結果，讓 CPU 可以讀取或寫回。
- 輸入/輸出(Input/Output)：輸入把外部資料送入系統，輸出把處理結果交回外部世界。
- 指令週期(Instruction Cycle)：CPU 執行一個指令時常見的取指令、解碼、取運算元、執行、寫回流程。
- 馮紐曼瓶頸(Von Neumann Bottleneck)：程式與資料共用記憶體通道造成 CPU 等待傳輸的效能限制。
- 哈佛架構(Harvard Architecture)：把程式記憶體與資料記憶體分離的架構，常用來和馮紐曼架構比較。

## 核心想法

- 程式內儲(Stored-Program Concept) 的意思是：程式指令不是焊死在硬體線路裡，而是像資料一樣被存放、讀取與修改，所以同一台硬體可以載入不同程式完成不同工作。
- 中央處理器(Central Processing Unit) 在這個模型中負責執行指令；控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號，決定下一步要讀記憶體、使用 ALU、跳轉或輸出。
- 算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷，例如 A + B、A > B、AND/OR 這類實際運算都會落到 ALU。
- 輸入單元(Input Unit) 把外部資料送進系統，例如鍵盤輸入、檔案讀入或感測器資料；輸出單元(Output Unit) 把處理結果送回外部，例如螢幕顯示、列印或寫出檔案。
- 取指令(Fetch) 是依 Program Counter 找到下一個指令，通常會把指令從記憶體載入指令暫存器；Program Counter 接著更新到下一個位址或等待跳轉改寫。
- 解碼(Decode) 是判斷 opcode 要 CPU 做什麼，例如加法、載入、儲存或跳轉，同時判斷需要哪些運算元。
- 取運算元(Operand Fetch) 是把資料或有效位址準備好，可能從暫存器、記憶體或指令本身取得。
- 執行(Execute) 是由 ALU 或控制流程完成動作，例如做加法、比較、讀寫記憶體或改變 Program Counter。
- 寫回(Write Back) 是把結果存回暫存器或記憶體，讓後續指令能接著使用結果。
- 馮紐曼瓶頸(Von Neumann Bottleneck) 不是 CPU 不會計算，而是 CPU 很快、記憶體和匯流排傳輸較慢時，取指令與取資料共用通道會讓 CPU 等資料。
- Harvard Architecture 將程式記憶體與資料記憶體分離，常見比較點是能同時取指令與取資料，但設計與彈性也和馮紐曼架構不同。

## 實際例子

題目：以「讀入 A 與 B，計算 A + B，並輸出結果」說明馮紐曼架構的資料與指令如何流動。

1. 程式指令與資料 A、B 先透過輸入單元(Input Unit) 放入記憶體(Memory)，CPU 不需要更換硬體線路，只要讀取不同程式即可工作。
2. 取指令(Fetch) 階段，控制單元(Control Unit) 依 Program Counter 從記憶體取出「載入 A」或「載入 B」等下一個指令。
3. 解碼(Decode) 階段，控制單元讀 opcode，判斷這個指令要載入資料、執行加法，還是把結果輸出。
4. 取運算元(Operand Fetch) 階段，CPU 把 A、B 或它們的記憶體位址準備好，必要時先載入暫存器。
5. 執行(Execute) 階段，算術邏輯單元(Arithmetic Logic Unit) 完成 A + B。
6. 寫回(Write Back) 階段，CPU 把加總結果存回暫存器或記憶體，最後由輸出單元(Output Unit) 顯示或寫出。
7. 若每一步都必須等待同一條記憶體/匯流排通道傳送指令與資料，CPU 即使很快也會被傳輸延遲限制，這就是馮紐曼瓶頸(Von Neumann Bottleneck)。

結果：馮紐曼架構的優點是同一硬體可執行不同程式；限制是指令與資料共用記憶體和通道，當傳輸跟不上 CPU 時會形成瓶頸。

## 易錯提醒

- 不要把程式內儲誤解成「只有資料存在記憶體」；在馮紐曼架構中，程式指令也存在記憶體。
- 不要把控制單元(Control Unit) 和算術邏輯單元(Arithmetic Logic Unit) 混在一起：CU 決定流程並發控制訊號，ALU 負責實際算術與邏輯運算。
- 不要把馮紐曼瓶頸(Von Neumann Bottleneck) 寫成 CPU 功能不足；重點是 CPU、記憶體與匯流排速度不匹配。
- 不要把 Harvard Architecture 說成一定全面優於 Von Neumann Architecture；考試通常要求比較記憶體分離、取指令與取資料能否並行、設計彈性與使用情境。

## 專有名詞

- 馮紐曼架構(Von Neumann Architecture)
- 程式內儲(Stored-Program Concept)
- 中央處理器(Central Processing Unit)
- 控制單元(Control Unit)
- 算術邏輯單元(Arithmetic Logic Unit)
- 記憶體(Memory)
- 輸入/輸出(Input/Output)
- 輸入單元(Input Unit)
- 輸出單元(Output Unit)
- 指令週期(Instruction Cycle)
- 取指令(Fetch)
- 解碼(Decode)
- 取運算元(Operand Fetch)
- 執行(Execute)
- 寫回(Write Back)
- 程式計數器(Program Counter)
- 操作碼(Opcode)
- 馮紐曼瓶頸(Von Neumann Bottleneck)
- 哈佛架構(Harvard Architecture)

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
