# Computer Principles 4 個 topic 內容匯入討論稿

## 來源

- 討論輸入：`_private/discuss.txt`
- 內容來源：
  - `_private/MD/計概/3a基本計概/十二、Hazard_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十三、USB 速度_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十四、進制轉換_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十五、補數轉換_新手國考教材.md`

## 目標理解

目前理解是：

```text
本次不是再整理 Markdown 檔。
本次要把 4 份已整理過的 Markdown 內容，放入本專案 /computer-principles 路由的正式 topic data。
```

對應 topic：

| Markdown | 對應 topic id | 建議 route 標題 |
| --- | --- | --- |
| 十二、Hazard | `cp-hazard` | `管線危障(Hazard)` |
| 十三、USB 速度 | `cp-usb-speed` | `USB 速度(USB Speed)` |
| 十四、進制轉換 | `cp-base-conversion` | `進制轉換(Base Conversion)` |
| 十五、補數轉換 | `cp-complement-conversion` | `補數轉換(Complement Representation)` |

「不改變現有資料」先解讀為：

```text
不重寫核心教材內容。
可以把 Markdown 中的顯示指示轉成 app 支援的 lessonArticle block。
可以清掉不應出現在正式教材中的指示文字，例如「用table」、「此處用 ul/li」。
發現明顯格式問題時，在本檔列為問題，等你確認後再進入 propose/apply。
```

## 討論模式

使用 `$spectra-discuss` 的 Assumptions mode。

原因：已找到 3 個以上相關 source，可根據現有架構提出假設。

相關檔案：

- `src/modules/subjectTopics/data/professionalTopics.ts`
- `src/modules/subjectTopics/data/subjectTopics.ts`
- `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- `src/styles/main.css`
- `tests/unit/professionalTopics.spec.ts`

本次除了既有 route data 內容填補，也因 Q4 已確認需要支援表格內重點標示，因此 scope 需包含 `lessonArticle` table 的樣式資料結構與渲染能力。

這不是 IPC、storage 或跨層後端流程，但會改到前端資料型別與 UI rendering contract：

```text
professionalTopics.ts table data
-> LessonArticleContentBlock table type
-> SubjectTopicPage.vue table renderer
-> CSS 樣式
```

## Interface depth check

| 檢查項目 | 結論 |
| --- | --- |
| Seam location | 邊界應放在 `LessonArticleContentBlock` 的 table block 型別與 `SubjectTopicPage.vue` table renderer。 |
| Adapter count | 不新增額外 adapter；資料直接由正式 topic data 進入現有 renderer。 |
| Depth | 這個 seam 需要承載「某列、某欄、某格的文字顏色或背景色」語意，不只是 pass-through。 |
| Deletion test | 若移除此 table style contract，USB「最常考優先背」無法用紅字/背景強調，未來其他教材表格也無法標示重點。 |

## My assumptions

### 1. 4 個 topic 都使用既有 `lessonArticle` 結構

**Approach**：在 `professionalTopics.ts` 針對 `cp-hazard`、`cp-usb-speed`、`cp-base-conversion`、`cp-complement-conversion` 建立正式 lesson sections，沿用 `paragraph`、`orderedList`、`bulletList`、`table`。

**Evidence**：

- `SubjectTopicPage.vue` 已支援 `lessonArticle`、表格、清單與段落。
- `cp-pipeline`、`cp-bus`、`cp-performance-formulas` 等已用相同模式。

**If wrong**：若需要新的 block 型別，這次就不只是內容匯入，還會牽涉 UI 與型別測試。

### 2. 「section」在本次應解讀為 route 中既有 topic card

**Approach**：不新增新的路由層級，也不把 4 份 Markdown 合成單一 topic；而是填入既有 4 個 topic id。

**Evidence**：

- `professionalTopics.ts` 已存在 `cp-hazard`、`cp-usb-speed`、`cp-base-conversion`、`cp-complement-conversion` skeleton。
- `getSubjectTopics()` 會過濾空 skeleton；填入內容後 topic 才會顯示在 `/computer-principles`。

**If wrong**：若你要的是單一 topic 裡新增 4 個內部 section，現有 route 顯示數量與測試預期會完全不同。

### 3. route 標題採「中文(英文)」格式，但 Hazard 需要調整

**Approach**：標題採用中文在前、英文在括號內。`USB 速度`、`進制轉換`、`補數轉換` 可直接沿用既有 `titleZh/titleEn`；`Hazard` 建議改成 `管線危障(Hazard)`，比目前 skeleton 的 `Hazard(Pipeline Hazard)` 更符合你說的中文(英文)格式。

**Evidence**：

- `_private/discuss.txt` 指定「section標題 是 中文(英文)的格式」。
- Hazard Markdown H1 是 `十二、Hazard（管線危障）`，已有中文譯名。

**If wrong**：若仍保留 `Hazard(Pipeline Hazard)`，會違背「中文(英文)」格式；若改成 `管線危障(Hazard)` 但你想保留原英文主詞，route 標題會和 skeleton 現況不同。

### 4. Markdown 的顯示指示應轉成正式 block，不原樣顯示

**Approach**：`用table`、`ul/li做`、`紅色文字顏色`、`你幫我設計顯示方式` 這些視為給實作者的指示，不直接出現在 app 教材中。

**Evidence**：

- Hazard 來源有「三種 Hazard 用table做」、「名詞解釋，此處用 ul/li做」。
- USB 來源有「最常考優先背...標示成紅色文字顏色」。
- 進制轉換來源有「範例這部分我給題目，你幫我設計顯示方式」。

**If wrong**：使用者會在正式 app 看到編排備註，教材質感會下降。

### 5. 測試要把這 4 個 topic 視為正式有內容

**Approach**：補 `professionalTopics.spec.ts` 的內容檢查，並同步更新 route filtering / workflow / stale audit 測試中的 filled topic 清單與 sourceFiles。

**Evidence**：

- `subjectTopics.spec.ts` 目前明確排除 `USB 速度`、`補數轉換`、`浮點數轉換`，加入內容後要更新 route 預期。
- `computerPrinciplesRouteWorkflow.spec.ts` 與 `staleProfessionalContentAudit.spec.ts` 目前 filled set 只到 `cp-cache`。

**If wrong**：內容可能已放入 data，但 route 測試仍認定它們不應出現，或未來重構時悄悄退回空 skeleton。

## 建議整理範圍

重要：本節只描述 Markdown 進 app 時的對應方式。實作時仍以 Markdown 既有內容為主，不主動擴寫新教材。

### cp-hazard

來源：`十二、Hazard_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 定義 | Hazard、Stall、Bubble 與三者關係 | paragraph |
| 三種 Hazard | Structural / Data / Control Hazard | table |
| 名詞解釋 | Instruction Cache、Data Cache、Forwarding、Stall、compiler scheduling、register renaming、branch、jump、PC、branch prediction、Flush、Delayed branch、Speculative execution | bulletList 或 orderedList |
| RAW、WAR、WAW | Data Hazard 三種類型 | table |

發現問題：

1. `RAW、WAR、WAW` 表格的 header 是 3 欄，但 separator / rows 寫成 4 欄，匯入時需修成 3 欄。
2. 名詞解釋中部分項目是 tab 分隔，例如 `branch 分支指令 根據條件...`，需統一成 `英文(中文)：解釋`。
3. 表格 cell 中的 `\n` 可保留，因為 `subject-topic-text` 目前有 `white-space: pre-line`。

### cp-usb-speed

來源：`十三、USB 速度_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| USB 常見速度表 | Low / Full / High / SuperSpeed / USB4 速度對應 | table |
| 最常考優先背 | USB 2.0、3.0、3.1 Gen 2、3.2 Gen 2x2、USB4、USB4 Version 2.0 | orderedList 或 table |
| Mbps 與 MB/s | b 與 B、除以 8 換算 | orderedList |
| 備註 | 實際速度限制、Type-C 是接頭形狀 | orderedList |

發現問題：

1. Q4 已確認要支援紅色文字，且未來 table 需要能支援「某一行、某一列、某一格」的文字顏色或 td 背景色。
2. 現有 `lessonArticle` table 只有 `headers` 與 `rows`，沒有 cell style metadata；正式 change 需要新增資料型別、renderer 與測試。
3. `USB4 = 常見 40 Gbps` 可保留，但若題目精確問 USB4 Gen 2x2，仍可能是 20 Gbps；正式內容要避免讓「USB4 一律 40 Gbps」造成誤解。

### cp-base-conversion

來源：`十四、進制轉換_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 定義 | 十進制、二進制、八進制、十六進制 | paragraph |
| 十六進制字母 | A 到 F 對應 10 到 15 | table |
| 轉換方法總表 | 十進制整數/小數轉 n 進制、n 進制轉十進制、二轉八、二轉十六 | table |
| 範例 | 依 Markdown 題目設計計算過程 | orderedList + table / paragraph |

發現問題：

1. `(450.153)10` 轉二進制與十六進制時，小數 `0.153` 可能無法有限表示，需指定取幾位或是否四捨五入。
2. 第 4 題 `將(1011110010.151)2 轉十六進制` 中，二進制小數出現 `5`，這不是合法二進制數字，疑似 typo。`typo` 指的是「筆誤 / 打字錯誤」。
3. 若要顯示完整「計算過程」，目前 lessonArticle 沒有 code block 型別；可用 table、paragraph、orderedList 表示。
4. 題目文字 `題目寫 (1011)2，右下角的 2 表示這是二進制。` 建議放在定義或範例前說明，不放在範例 heading 裡。

### cp-complement-conversion

來源：`十五、補數轉換_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 定義 | 補數是電腦用固定 bits 表示正負整數的方法 | paragraph |
| 三種表示法 | 符號大小、1 補數、2 補數 | table |
| 備註 | 現代電腦多用 2 補數、超出 bits 的進位丟掉、9/10 補數 | orderedList |

發現問題：

1. 來源有 LaTeX 樣式 `\(r^n - N\)`，目前 app 不是 Markdown/math renderer，建議匯入成純文字 `r^n - N`。
2. `r 的補數`、`r-1 的補數` 是十進位補數延伸概念，建議保留在備註，不要混入三種二進位表示法主表，避免新手混淆。

## 已確認事項

1. 本次建立一個 Spectra change，一次處理 4 個 topic。
2. 「section 標題中文(英文)」解讀為 route topic card 的標題。
3. Hazard route 標題改成 `管線危障(Hazard)`。
4. USB「最常考優先背」需要紅色文字；同時將 table style 能力納入本次 change，讓未來可支援列、欄、格的文字色或背景色。
5. `(450.153)10` 的二進制與十六進制小數轉換依建議取小數後 8 位，並在內容中標明「取到指定位數」。
6. 進制範例都放入 app，且要做長講義；範例放在下方，可由 app 收闔。
7. 補數的 9 補數 / 10 補數保留在「備註」section。
8. 進制範例第 4 題確認改為：將 `(1011110010.101)2` 轉十六進制。

## 原 Q6 確認結果

原題 `(1011110010.151)2` 中的 `5` 是筆誤。二進制只能出現 `0` 和 `1`。

第 4 題正式使用：

```text
將 `(1011110010.101)2` 轉十六進制。
```

## 結論

**Decision**：建立正式 Spectra change，將 4 份 Markdown 的既有內容轉成 `/computer-principles` 對應 topic 的正式 lessonArticle content，並新增 lessonArticle table 的重點樣式能力，支援列、欄、格的文字色或背景色。

**Rationale**：需求核心是將已整理的 md 內容放入 app route，不是再整理 md。現有 app 已支援大部分段落、表格與清單；但 USB 重點列需要紅字，且你希望未來 table 可支援列、欄、格的文字色或背景色，因此本次需同步擴充 table rendering contract。進制範例要完整放入並做長講義，因 app 可收闔，不需過度壓縮。

**Remaining**：無。Q1-Q8 皆已確認。

**Capture to**：本檔 `_private/propose.md`。下一步可接 `$spectra-propose`。
