---
topic_id: cp-von-neumann-architecture
formal_topic_id: cp-von-neumann-architecture
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 馮紐曼架構(Von Neumann Architecture)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 馮紐曼架構`
- source labels: [必背], [比較]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 馮紐曼架構`
- topic id: `cp-von-neumann-architecture`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### 先說明：來源大綱不是成品

本篇是依據使用者提供的「來源大綱」重寫成的新手教材。來源大綱只是 prompt input，用來指定必須涵蓋的考點；它不是可直接拿去背誦或作答的成品。以下內容會把大綱中的每個名詞補上中文與英文專有名詞、考場寫法、比較判斷與最小背誦句。

### 核心概念

馮紐曼架構（Von Neumann Architecture）是一種電腦組織模型，核心思想是：程式（Program）和資料（Data）都存放在同一個記憶體（Memory）中，中央處理器（Central Processing Unit, CPU）依照指令週期（Instruction Cycle）反覆進行取指令（Fetch）、解碼（Decode）、執行（Execute）。

換句話說，CPU 不需要把「程式」和「資料」視為存在於兩個完全分離的世界；它們都可以用二進位資料（Binary Data）的形式放在記憶體裡，再由 CPU 逐步讀取與處理。這種設計讓通用電腦（General-purpose Computer）變得可行：同一台硬體可以透過載入不同程式，完成文書、計算、繪圖、網路通訊等不同任務。

### [必背] 兩大特色

#### 1. 程式內儲概念（Stored-program Concept）

定義：程式內儲概念（Stored-program Concept）是指程式指令（Program Instructions）與資料（Data）都存放在記憶體（Memory）中，CPU 可以從記憶體取出指令，也可以從記憶體讀寫資料。

為什麼重要：這是馮紐曼架構最關鍵的特色。早期某些計算裝置要改變功能，可能需要重新接線或調整硬體；程式內儲概念讓電腦只要更換或載入不同程式，就能執行不同工作。因此，國考題常把它和「通用性」、「可程式化」、「程式與資料共用記憶體」放在一起考。

國考怎麼寫：作答時可寫：「馮紐曼架構採程式內儲概念，將程式與資料同存於記憶體中，CPU 由記憶體取出指令並執行。」如果題目問特色，務必寫出「程式與資料都在記憶體」這個關鍵句。

易錯點：不要只寫「程式存在硬碟」或「程式存在 CPU」。硬碟（Hard Disk / Storage）是輔助儲存裝置，程式執行時通常會載入主記憶體（Main Memory）供 CPU 取用；CPU 則是執行與控制的核心，不是大量存放程式與資料的地方。

#### 2. 指令循序執行（Sequential Instruction Execution）

定義：指令循序執行（Sequential Instruction Execution）是指 CPU 通常按照記憶體中指令的排列順序，依序進行取指令（Fetch）、解碼（Decode）、執行（Execute）。只有遇到跳躍指令（Jump Instruction）、分支指令（Branch Instruction）或中斷（Interrupt）等情況時，才會改變原本的執行順序。

為什麼重要：它說明 CPU 執行程式的基本流程，也連到後續常考的程式計數器（Program Counter, PC）。PC 會記錄下一個要取出的指令位址（Instruction Address），讓 CPU 知道下一步該讀哪一個指令。

國考怎麼寫：可寫：「CPU 依指令週期循序取指、解碼、執行，程式計數器記錄下一個指令位址；遇到跳躍、分支或中斷時，執行流程才會改變。」

易錯點：不要把「循序執行」誤解成所有程式都不能改變流程。實際程式有 if 判斷、迴圈、函式呼叫與中斷處理，這些都可能改變下一個指令位址；考場重點是「預設依序，特殊情況改變流程」。

### [必背] 五大單元

馮紐曼架構常以五大單元說明電腦基本組成：輸入單元（Input Unit）、輸出單元（Output Unit）、記憶單元（Memory Unit）、算術邏輯單元（Arithmetic Logic Unit, ALU）、控制單元（Control Unit, CU）。

#### 1. 輸入單元（Input Unit）

定義：輸入單元（Input Unit）負責把外部資料或指令送入電腦，例如鍵盤、滑鼠、掃描器、感測器等。

為什麼重要：沒有輸入，電腦無法取得使用者命令或外界資料。它是資料進入電腦系統的入口。

國考怎麼寫：可寫：「輸入單元負責接收外部資料與指令，並轉換成電腦可處理的形式。」

易錯點：不要把輸入單元寫成「處理資料」的地方。資料處理主要由 CPU 中的 ALU 與 CU 協同完成。

#### 2. 輸出單元（Output Unit）

定義：輸出單元（Output Unit）負責把電腦處理後的結果送到外部，例如螢幕、印表機、喇叭、致動器等。

為什麼重要：它讓使用者或外部設備能看見、聽見或接收處理結果，是資料離開電腦系統的出口。

國考怎麼寫：可寫：「輸出單元負責將處理結果轉換為人或外部設備可接收的形式。」

易錯點：螢幕是輸出裝置，不是記憶單元；觸控螢幕同時具有輸入與輸出功能，題目若問單一功能要看題幹描述。

#### 3. 記憶單元（Memory Unit）

定義：記憶單元（Memory Unit）負責存放程式、指令、資料與中間結果。常見考法會聚焦於主記憶體（Main Memory / Primary Memory），例如 RAM（Random Access Memory）。

為什麼重要：馮紐曼架構的「程式與資料同存於記憶體」就是發生在記憶單元中。CPU 必須透過匯流排（Bus）與記憶體交換指令和資料。

國考怎麼寫：可寫：「記憶單元儲存程式、資料與運算中間結果，是 CPU 取指令與讀寫資料的來源。」

易錯點：不要把記憶體（Memory）和儲存裝置（Storage）完全混為一談。主記憶體速度較快、供執行中程式使用；輔助儲存裝置如 SSD、硬碟通常容量較大，用於長期保存資料。

#### 4. 算術邏輯單元（Arithmetic Logic Unit, ALU）

定義：算術邏輯單元（ALU）負責進行算術運算（Arithmetic Operations）與邏輯運算（Logic Operations）。算術運算例如加、減、乘、除；邏輯運算例如 AND、OR、NOT、比較大小。

為什麼重要：ALU 是 CPU 真正執行資料運算與判斷的核心部件。題目若問 CPU 中負責計算與邏輯判斷的單元，答案通常是 ALU。

國考怎麼寫：可寫：「ALU 負責執行算術運算與邏輯判斷，是 CPU 的運算核心。」

易錯點：不要把 ALU 寫成負責指揮所有單元。指揮、協調與控制流程的是控制單元（CU）。

#### 5. 控制單元（Control Unit, CU）

定義：控制單元（CU）負責控制與協調各單元運作，包含取出指令、解碼指令、發出控制訊號（Control Signals），讓 ALU、記憶體與輸入輸出裝置依照指令工作。

為什麼重要：CU 像 CPU 的指揮中心，決定何時取指令、何時讀寫記憶體、何時要求 ALU 運算。沒有 CU，電腦各部件無法依照程式順序協同運作。

國考怎麼寫：可寫：「CU 負責指令解碼與控制訊號產生，協調 CPU、記憶體與 I/O 單元的運作。」

易錯點：CU 不負責主要的加減乘除運算；ALU 才是運算單元。考題常用「控制」與「運算」來區分 CU 與 ALU。

### [比較] 馮紐曼架構 vs 哈佛架構

哈佛架構（Harvard Architecture）是另一種常拿來與馮紐曼架構比較的電腦架構。兩者最大的差異在於：程式指令與資料是否共用同一套記憶體與匯流排。

| 比較項目 | 馮紐曼架構（Von Neumann Architecture） | 哈佛架構（Harvard Architecture） |
| --- | --- | --- |
| 程式與資料存放 | 程式與資料共用同一個記憶體空間 | 程式記憶體與資料記憶體分離 |
| 匯流排（Bus） | 指令與資料通常共用匯流排 | 指令與資料可使用分離匯流排 |
| 取指令與取資料 | 容易互相競爭記憶體傳輸通道 | 可同時取指令與取資料 |
| 設計特色 | 結構較簡單、通用性高、成本較低 | 結構較複雜，但效率可較高 |
| 常見場景 | 一般通用電腦的基本概念模型 | 嵌入式系統（Embedded System）、微控制器（Microcontroller）、快取（Cache）設計概念 |
| 常見問題 | 容易出現馮紐曼瓶頸 | 設計與程式/資料管理較複雜 |

判斷重點：題目只要出現「程式與資料共用記憶體、共用匯流排、設計簡單、可能有瓶頸」，通常指馮紐曼架構。題目若出現「程式記憶體與資料記憶體分離、可同時取指令與取資料、常見於嵌入式系統」，通常指哈佛架構。

國考作答時不要只寫「馮紐曼比較慢、哈佛比較快」。比較題要寫出原因：馮紐曼架構因為指令與資料共用記憶體通道，所以可能互相競爭；哈佛架構因為指令與資料通道分離，所以可以提升同時存取的機會。

### [必背] 馮紐曼瓶頸

定義：馮紐曼瓶頸（Von Neumann Bottleneck）是指 CPU 與記憶體之間的資料傳輸速度或頻寬（Bandwidth）不足，導致 CPU 即使運算能力很強，也必須等待指令或資料從記憶體送達。

為什麼重要：現代 CPU 的運算速度通常遠快於主記憶體存取速度。如果 CPU 一直等記憶體，整體效能就會被記憶體傳輸限制，而不是被 CPU 算術能力限制。這也是為什麼快取、預取、管線化與記憶體階層會成為重要設計。

國考怎麼寫：可寫：「馮紐曼瓶頸是 CPU 與記憶體間傳輸頻寬不足，使 CPU 等待指令或資料，限制整體系統效能。」若題目問改善方法，可接著寫：「可用快取、預取、增加匯流排寬度、提升記憶體頻寬、管線化、平行處理與改良記憶體階層改善。」

易錯點：不要把瓶頸寫成「CPU 壞掉」或「記憶體容量不足」。重點通常不是容量不夠，而是 CPU 和記憶體之間傳輸速度或頻寬跟不上。

常見改善方法：

| 方法 | 英文 | 重點作用 |
| --- | --- | --- |
| 快取 | Cache | 把常用指令或資料放在更接近 CPU、速度更快的記憶體中 |
| 預取 | Prefetching | 預先載入可能即將使用的指令或資料，降低等待時間 |
| 增加匯流排寬度 | Wider Bus Width | 每次傳輸更多位元，提高單次資料傳輸量 |
| 提高記憶體頻寬 | Higher Memory Bandwidth | 提升單位時間可傳輸的資料量 |
| 管線化 | Pipelining | 讓取指、解碼、執行等階段重疊，提高吞吐量 |
| 平行處理 | Parallel Processing | 使用多核心或多處理單元同時處理工作 |
| 改良記憶體階層 | Improved Memory Hierarchy | 透過暫存器、快取、主記憶體、輔助儲存形成速度與容量的平衡 |

### 如何應用

看到一台電腦執行程式時，可以用馮紐曼架構理解它的基本流程：程式先載入記憶體，CPU 的控制單元（CU）根據程式計數器（PC）取出下一個指令，解碼後交由算術邏輯單元（ALU）或其他單元執行，需要資料時再從記憶體讀取，最後可能把結果寫回記憶體或送到輸出單元。

例如執行「A + B」這類簡單運算時，輸入單元可能先取得 A 與 B，記憶單元保存資料與程式指令，CU 控制取指與解碼，ALU 執行加法，輸出單元顯示結果。國考不一定要求畫很細的硬體圖，但要能說出各單元在流程中的角色。

### 考場辨認法

看到「程式與資料都存在記憶體」：選馮紐曼架構或程式內儲概念。

看到「取指令、解碼、執行」：想到 CPU 指令週期，以及循序執行。

看到「ALU」：寫算術與邏輯運算。

看到「CU」：寫控制、協調、解碼、發出控制訊號。

看到「CPU 等記憶體、傳輸頻寬不足」：寫馮紐曼瓶頸。

看到「程式記憶體和資料記憶體分離」：寫哈佛架構。

### 最小背誦句

馮紐曼架構（Von Neumann Architecture）採程式內儲概念，程式與資料同存於記憶體，CPU 依取指、解碼、執行的指令週期循序執行；其五大單元為輸入、輸出、記憶、ALU 與 CU，但因 CPU 與記憶體共用傳輸通道，可能產生馮紐曼瓶頸。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「馮紐曼架構」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
