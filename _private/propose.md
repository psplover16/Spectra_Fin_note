# Computer Principles 6 個 topic 內容匯入討論稿

## 來源

- 討論輸入：`_private/discuss.txt`
- 內容來源：
  - `_private/MD/計概/3a基本計概/六、效能名詞與公式_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/七、RISC 與 CISC_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/八、Memory 階層圖_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/九、Memory 分類圖_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十、Register（暫存器）_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十一、Cache_新手國考教材.md`

## 目標理解

目前理解是：

```text
嚴格來說，本次要做的是：
1. 讀取 6 份已整理過的 Markdown。
2. 保留各 md 既有教材內容。
3. 將各 md 內容編排成 app 支援的 lessonArticle block。
4. 放入 /computer-principles 路由中對應 topic 的 section。
```

「不改變現有資料」先解讀為：

```text
不新增主題、不重寫教材、不自行擴寫核心觀念。
可以把 Markdown 裡的表格註記、UL/LI 註記轉成 app 支援的 table / bulletList / orderedList。
除已確認的 Cache「下一層記憶體」短句外，不主動加入 md 之外的新解釋。
可以補 sourceFiles 與測試，讓正式 app data 有來源追蹤與回歸保護。
```

實作時應優先沿用各 md 的既有內容、順序與標題；下方 section 表格只用來輔助對應 app block 型態，不代表要重新撰寫或重切教材。

## 討論模式

使用 `$spectra-discuss` 的 Assumptions mode。

原因：已找到 3 個以上相關 source 檔，可根據現有架構提出假設。

相關檔案：

- `src/modules/subjectTopics/data/professionalTopics.ts`
- `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- `src/modules/subjectTopics/data/subjectTopics.ts`

本次議題是 md 內容編排、格式轉換與既有 topic data 填補，不涉及新 IPC、新 storage abstraction、新跨層流程或新 UI block 型別，因此不需要 interface depth check。

## 對應 topic

| Markdown | 對應 topic id | 現況 |
| --- | --- | --- |
| 六、效能名詞與公式 | `cp-performance-formulas` | 目前仍走空 skeleton |
| 七、RISC 與 CISC | `cp-risc-cisc` | 目前仍走空 skeleton |
| 八、Memory 階層圖 | `cp-memory-hierarchy` | 目前仍走空 skeleton |
| 九、Memory 分類圖 | `cp-memory-classification` | 目前仍走空 skeleton |
| 十、Register（暫存器） | `cp-registers` | 目前仍走空 skeleton |
| 十一、Cache | `cp-cache` | 目前仍走空 skeleton |

## My assumptions

### 1. 仍使用既有 `lessonArticle` 結構

**Approach**：6 個 topic 都整理成既有 `lessonArticle`，使用 `lead`、`sections`、`paragraph`、`bulletList`、`orderedList`、`table`。

**Evidence**：

- `SubjectTopicPage.vue` 已支援 `lessonArticle`、表格、清單與段落。
- 先前 `cp-machine-instruction-cycle`、`cp-pipeline`、`cp-bus` 已用同一套模式。

**If wrong**：若需要新的 block 型別，後續就不是純內容匯入，還要新增 UI 與型別測試。

### 2. 6 個 topic 應各自建立專用 factory

**Approach**：比照已填內容 topic，在 `professionalTopics.ts` 建立各 topic 的 sourceFiles、terms、lesson sections、factory，並在 `createProfessionalTopicSkeleton` 中接上。

**Evidence**：

- `createProfessionalTopicSkeleton` 目前只對已填內容 topic 有專用 branch。
- 這 6 個 topic 目前沒有 branch，因此會回到空 `lead: []`、`sections: []`。

**If wrong**：若不接 factory，路由 topic 仍存在，但正式內容不會顯示。

### 3. sourceFiles 應加入對應 Markdown 路徑

**Approach**：每個 topic 的 `sourceFiles` 保留 `_private/計算機概論.txt`，並加入對應 Markdown 路徑。

**Evidence**：

- 已填內容 topic 例如機器指令、Pipeline、Bus 皆有加入對應 Markdown source。
- 目前這 6 個 skeleton 的 `sourceFiles` 只有 `_private/計算機概論.txt`。

**If wrong**：若不加入 Markdown 路徑，正式 app data 的來源追蹤會不完整。

### 4. Markdown 中的編排註記不應原樣進 app

**Approach**：`table表示`、`用UL/LI表示`、`此處用 UL/LI表示` 這類文字只當作整理指示，匯入時要轉成正式 block 型態，不顯示在教材中。

**Evidence**：

- `七、RISC 與 CISC` 含 `(用table表示)`。
- `八、Memory 階層圖` 含 `table表示`、`此處用 UL/LI表示`。
- `九、Memory 分類圖` 含 `以table表示`、`table表示`。
- `十、Register（暫存器）` 的 heading 含 `用UL/LI表示`。

**If wrong**：使用者會在 app 看到編排註記，教材質感與可讀性會下降。

### 5. 測試應把 6 個 topic 視為正式填入內容

**Approach**：更新 `professionalTopics.spec.ts`、route workflow 或 stale audit 類測試，要求這 6 個 topic 有非空 lead、sections、sourceFiles，並檢查重點 section 或關鍵字。

**Evidence**：

- 先前 `cp-pipeline` / `cp-bus` 填內容時已用測試防止回退。
- 目前若不補測試，這 6 個 topic 未來回到空 skeleton 也不一定會被擋下。

**If wrong**：後續重構時可能靜悄悄遺失內容。

## 建議整理範圍

重要：本節只描述「各 md 內容進 app 時可對應的 section / block 型態」。實作時仍應以 md 原文的既有內容、順序與標題為主，避免因表格建議而重寫教材或重切大綱。

### cp-performance-formulas

來源：`六、效能名詞與公式_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 核心公式 | CPU Time、Clock Rate 版本 | paragraph + table |
| 名詞速查 | Clock、CPI、MIPS、Execution Time、ISA、內頻/外頻/倍頻 | table |
| 常見公式 | CPU Time、MIPS、內頻公式 | bulletList 或 table |
| 易混淆 | Clock Rate、MIPS、CPI、Instruction Count | bulletList |

注意：Execution Time 已明確標示單位是秒，正式內容可保留。

### cp-risc-cisc

來源：`七、RISC 與 CISC_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| ISA 是什麼 | CPU 對程式設計者或編譯器公開的指令規則 | paragraph |
| RISC vs CISC | 指令數、定址模式、指令長度、週期、暫存器、記憶體存取等 | table |
| 名詞解釋 | 定址模式、Load/Store、Pipeline、微指令 | orderedList |
| 考前速記 | RISC 口訣與 CISC 口訣 | bulletList |

注意：來源最後有「RISC 不等於一定比較快，CISC 不等於一定比較慢」，正式內容應保留。

### cp-memory-hierarchy

來源：`八、Memory 階層圖_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| Memory 階層順序 | 1 到 5 層，Register、Cache、RAM、SSD/HDD、外部儲存 | table |
| 細分 Cache | L1 → L2 → L3 | orderedList 或 bulletList |
| 方向重點 | 越近 CPU 越快、小、貴；越遠越慢、大、便宜 | paragraph |
| Locality | Temporal / Spatial Locality | table |

注意：來源中的 `table表示`、`此處用 UL/LI表示` 不應進正式內容。

### cp-memory-classification

來源：`九、Memory 分類圖_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| Memory 分類圖 | 依角色分類、依斷電分類 | paragraph 或 bulletList |
| RAM vs ROM | 用途、斷電、讀寫特性、例子 | table |
| SRAM vs DRAM | Static / Dynamic、儲存方式、refresh、用途 | table |
| ROM 類型 | PROM、EPROM、EEPROM、Flash | table |

注意：EPROM 通常是紫外線整片擦除；EEPROM 是電氣擦除、可局部改寫；Flash 常以 block 為單位。

### cp-registers

來源：`十、Register（暫存器）_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 暫存器是什麼 | CPU 內部小而快的儲存空間 | paragraph |
| 常見暫存器 | PC、IR、Base、Limit、Flag/Status、MAR、MDR/MBR | table 或 bulletList |
| 常見考法 | 名稱功能配對、取指令流程、記憶體保護、旗標意義 | orderedList |

注意：來源的 heading 含 `用UL/LI表示`，正式內容應清掉。

### cp-cache

來源：`十一、Cache_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| Cache 類別 | L1、L2、L3 | bulletList |
| Hit / Miss / Hit Ratio | Hit、Miss、Hit Ratio、Miss Rate、Hit Time、Miss Penalty | bulletList 或 table |
| AMAT | AMAT 公式與例題 | paragraph + worked calculation as orderedList |
| 寫入策略 | Write Through、Write Back | table |
| Write Allocate | Write Allocate、No Write Allocate | table |

注意：來源提到「下一層記憶體」，但對新手可能不清楚。正式內容建議補一句：

```text
下一層記憶體是目前 Cache 後面、離 CPU 更遠的一層；若題目簡化成一層 Cache，下一層通常就是 Main Memory / RAM。
```

## 發現問題彙整

1. 這 6 個 topic 在 `professionalTopics.ts` 已有 skeleton，但仍是空 `lessonArticle`。
2. 6 份 Markdown 是實際整理來源，但 app data 的 `sourceFiles` 尚未包含它們。
3. Markdown 內有多處編排註記，例如 `table表示`、`用UL/LI表示`，正式 app 內容應轉為結構化 block。
4. `cp-cache` 的「下一層記憶體」對新手可能不夠清楚，建議正式內容補短句說明。
5. `cp-registers` 來源沒有 H1，直接從 `## 名詞解釋` 開始；正式 app 可用 topic title 補足，不一定需要改 Markdown。
6. 若正式填入這 6 個 topic，測試需同步更新，尤其是 `professionalTopics.spec.ts` 的 `filledTopicIds`，以及 `computerPrinciplesRouteWorkflow.spec.ts`、`staleProfessionalContentAudit.spec.ts` 的 `filledComputerPrinciplesTopicIds` / `sourceFilesByFilledTopicId`，避免之後回退成空 skeleton。

## 需要你確認

請直接在每題的「回答」後面填寫。

### Q1. 是否 6 個 topic 一起做成同一個 Spectra change？

**建議**：一起做。  
理由：6 個 topic 都屬於 `computer-principles`、同一批已整理 Markdown、同一個填內容模式。

**回答**：依你建議

### Q2. 「不改變現有資料」是否可理解為不改核心教材內容，但可清掉編排註記？

**建議**：可以。  
例如 `table表示`、`用UL/LI表示` 不屬於教材內容，應轉成 app 的 `table` / `bulletList`。

**回答**：可以

### Q3. sourceFiles 是否都加入對應 Markdown 路徑？

**建議**：加入。  
比照 `cp-machine-instruction-cycle`、`cp-pipeline`、`cp-bus` 的作法。

**回答**：加入

### Q4. Cache 內容是否補「下一層記憶體」短版解釋？

**建議**：補。  
理由：你前面已明確卡在這個詞，新手版 app 內容應避免同樣卡點。

**回答**：補

### Q5. Register 的 PC / IR 是否要保留白話說明？

**建議**：保留。  
這裡指的是 `cp-registers`，來源是 `十、Register（暫存器）_新手國考教材.md`。目前 md 檔本來就已有 PC / IR 說明，匯入正式 app 內容時沿用 md 既有說明，不另外改寫核心內容。

**回答**：目前 md 檔本來就有說明，沿用既有說明即可。

### Q6. Memory 階層是否同時呈現「粗分 5 層」與「Cache 細分 L1/L2/L3」？

**建議**：同時呈現。  
理由：你前面提到看過 1～5 層，正式內容可先用 5 層表格，再補 Cache 可細分。

**回答**：同時呈現

## 結論

**Decision**：建立正式 Spectra change，將 6 份 Markdown 的既有內容經編排後，填入對應 `computer-principles` topic section。

**Rationale**：需求核心是把 md 內容結構化搬移到 app，不是重新撰寫教材；現有 app 已支援 `lessonArticle`，不需要新增 UI 或資料型別。主要風險是來源追蹤、測試保護與 raw 編排註記清理。

**Capture to**：本檔 `_private/propose.md`。Q1-Q6 已確認，下一步可執行 `$spectra-propose`。
