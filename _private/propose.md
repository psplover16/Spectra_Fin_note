# Computer Principles 3b 數位邏輯內容匯入討論稿

## 來源

- 討論輸入：`_private/discuss.txt`
- 內容來源資料夾：`_private/MD/計概/3b數位邏輯/`
- 目標 route：`/computer-principles`
- 目前讀到的 Markdown 檔：

| Markdown | 建議 topic id | 建議 route/topic 標題 |
| --- | --- | --- |
| `一、基本邏輯_新手國考教材.md` | `cp-digital-logic-basics` | `基本邏輯(Digital Logic Basics)` |
| `二、SOP 與 POS_新手國考教材.md` | `cp-sop-pos` | `SOP 與 POS(SOP and POS)` |
| `三、卡諾圖化簡_新手國考教材.md` | `cp-karnaugh-map` | `卡諾圖化簡(Karnaugh Map Simplification)` |
| `四、萬用閘_新手國考教材.md` | `cp-universal-gates` | `萬用閘(Universal Gates)` |
| `五、組合與循序電路_新手國考教材.md` | `cp-combinational-sequential-circuits` | `組合與循序電路(Combinational and Sequential Circuits)` |

## 目標理解

目前理解是：

```text
本次不是重新改寫 Markdown 原檔。
本次要把 3b 數位邏輯資料夾內的 Markdown 內容，引入 /computer-principles route。
```

「別隨意新增、刪除、修改資料」先解讀為：

```text
1. 不改原始 Markdown 檔。
2. 匯入 app 時盡量照 Markdown 原本編排轉成 lessonArticle blocks。
3. Markdown 內的「用table做」「點選標題才顯示」等文字視為製作指令，不直接顯示給學習者。
4. 發現明顯錯字、術語不一致、可能造成選擇題誤判的地方，先列在本檔，等你確認後再進入 propose/apply。
```

## 討論模式

使用 `$spectra-discuss` 的 Assumptions mode。

原因：已找到 3 個以上相關 source，可根據現有架構提出假設。

相關檔案：

| 檔案 | 觀察 |
| --- | --- |
| `src/modules/subjectTopics/data/professionalTopics.ts` | 已有 3b 五個 skeleton topic，但目前沒有填 lesson sections。 |
| `src/modules/subjectTopics/data/subjectTopics.ts` | 空 `lessonArticle.sections` 會被視為沒有 route-visible content。 |
| `src/modules/subjectTopics/types/subjectTopic.ts` | `LessonArticleSection` 已支援 `collapsible` 與 `defaultExpanded`。 |
| `src/modules/subjectTopics/components/SubjectTopicPage.vue` | 已支援 lesson section 收闔；table 目前支援樣式 metadata，但未看到「點選表頭揭露欄位值」能力。 |
| `src/modules/computerPrinciples/views/ComputerPrinciplesView.vue` | `/computer-principles` 直接使用 `getSubjectTopics('computerPrinciples')`。 |

介面深度檢查：目前先跳過。這次不需要新增 IPC、storage、新 route 或新模組；若最後確認要做「真值表點選欄位才顯示答案」，那會是既有 `lessonArticle table` 的 UI 行為擴充，不是新的跨層架構。

## My assumptions

### 1. 五份 Markdown 對應五個既有 skeleton topic

**Approach**：沿用現有 `cp-digital-logic-basics`、`cp-sop-pos`、`cp-karnaugh-map`、`cp-universal-gates`、`cp-combinational-sequential-circuits`，在 `professionalTopics.ts` 補上 sourceFiles、terms、summary、lessonArticle sections。

**Evidence**：

- `professionalTopics.ts` 已有上述五個 topic skeleton。
- `subjectTopics.ts` 會過濾空內容；填入 sections 後才會出現在 `/computer-principles`。
- `_private/discuss.txt` 指定資料是 route `computer-principles` 所需內容。

**If wrong**：若你想把五份 Markdown 合成一個大 topic，而不是五個 topic，現有 skeleton 會繼續空著，route 順序與測試也要重設。

### 2. route/topic 標題採「中文(英文)」，內部 section 依 Markdown 編排

**Approach**：topic 大標題用各 Markdown 主題轉成中文(英文)；內部 lesson section 盡量沿用 Markdown 的章節，例如 `常見邏輯閘`、`兩輸入真值表`、`題目 1：真值表 → 寫 SOP 和 POS`。

**Evidence**：

- `_private/discuss.txt` 寫「section標題 是 中文(英文)的格式，標題採用各md的 主題」。
- 現有 topic title 多用 `中文(English)`。

**If wrong**：若你要求「每個內部小段標題」也都必須中文(英文)，實作時要把所有 lesson section heading 改成雙語，不只是 route/topic title。

### 3. Markdown 內的製作指令要轉成 UI metadata，不直接顯示

**Approach**：`用table做` 轉成 table block；`德摩根那一行用紅色文字標註` 轉成 table cell/row style；真值表「點選標題才顯示值」若確認要做，則新增 table column reveal 行為或用現有收闔能力替代。

**Evidence**：

- `一、基本邏輯_新手國考教材.md` 有 `用table做`、`點選標題，才會讓值跑出來` 等指令。
- `SubjectTopicPage.vue` 已支援 lesson section 收闔，但目前沒有 per-column reveal table。
- `LessonArticleContentBlock` table 已支援 `rowStyles`、`columnStyles`、`cellStyles`。

**If wrong**：若這些文字其實要原樣顯示，app 內容會看起來像開發備註；若 reveal table 是硬需求，實作範圍會比單純內容匯入多一個 UI 行為。

### 4. 這次不應額外擴寫第五章

**Approach**：`五、組合與循序電路` 目前內容很短，建議只照原文整理成精簡 section，不主動補半加器、全加器、編碼器、解碼器等長內容，除非你確認要補。

**Evidence**：

- 該 Markdown 目前只有「組合電路 vs 循序電路」的判斷核心與例子。
- `_private/discuss.txt` 強調「別隨意新增、刪除、修改資料」。

**If wrong**：若考試範圍確實需要更完整的組合/循序元件，照原文匯入會偏薄，後續還要再補內容。

### 5. sourceFiles 要保留原始追蹤

**Approach**：每個 topic 的 `sourceFiles` 保留 `_private/計算機概論.txt`，並新增對應 Markdown 路徑。

**Evidence**：

- 3a 已填內容的 topic 多數使用 `_private/計算機概論.txt` + 對應 Markdown。
- 3b skeleton 目前只有 `_private/計算機概論.txt`。

**If wrong**：若只記 Markdown，不保留原始總筆記來源，stale audit 或來源追蹤可能與既有慣例不一致。

## 建議整理範圍

### cp-digital-logic-basics

來源：`一、基本邏輯_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 常見邏輯閘(Common Logic Gates) | AND、OR、NOT、NAND、NOR、XOR、XNOR 白話與寫法 | table + paragraph |
| 兩輸入真值表(Two-Input Truth Table) | A/B 對各邏輯閘輸出 | table，是否互動待確認 |
| 布林代數常用定律(Boolean Algebra Laws) | 恆等律、零一律、冪等律、互補律、交換律、結合律、分配律、吸收律、德摩根 | table，德摩根 row/cell 強調 |

建議 terms：

| 中文 | English |
| --- | --- |
| 邏輯閘 | Logic Gate |
| 真值表 | Truth Table |
| 布林代數 | Boolean Algebra |
| 反相 | NOT / Inversion |
| 德摩根定律 | De Morgan's Laws |
| 互斥或 | XOR |
| 反互斥或 | XNOR |

發現問題：

1. `用table做`、`此處預設...點選標題...` 是製作指令，不應直接顯示在 app。
2. `XOR = A有且B沒有 或 B有且A沒有，(A AND -B) OR (B AND -A)` 裡的 `-B` 對新手可能像「負 B」，建議顯示時改成 `B'` 或 `NOT B`。
3. `XNOR` 的邏輯關係目前寫「輸入不同為 0」，正確但不如「輸入相同為 1」直觀；是否調整待確認。
4. `德摩根` row 要紅字標註；現有 table style 是否已符合「紅色文字」需要實測。若現有 `emphasisText` 不是紅色，可能要新增樣式或改用現有強調樣式。
5. 真值表要求點選欄位標題才顯示值，目前 app 沒有 per-column reveal table；這是本次最大的 scope 決策點。

### cp-sop-pos

來源：`二、SOP 與 POS_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 用途(30 秒看懂)(Purpose) | 真值表如何翻成算式與電路 | paragraph |
| 題目 1：真值表 → SOP/POS(Truth Table to SOP/POS) | 兩變數基本款完整流程 | table + orderedList |
| 題目 2：布林函式 → 真值表(Boolean Function to Truth Table) | 先建真值表再轉 SOP/POS | table + orderedList |
| 題目 3：三變數 SOP(Three-Variable SOP) | 三變數輸出為 1 的列轉 minterm | table + orderedList |
| 公式整理(Formula Summary) | SOP/POS 對照表與三個必記 | table + orderedList |

建議 terms：

| 中文 | English |
| --- | --- |
| SOP | Sum of Products |
| POS | Product of Sums |
| 最小項 | Minterm |
| 最大項 | Maxterm |
| 真值表 | Truth Table |
| 布林函式 | Boolean Function |

發現問題：

1. 內容使用「第 1 列、第 3 列」描述資料列，若搭配 minterm 列號，可能和 `m0, m1...` 混淆。建議 app 顯示時明確寫「第 1 筆資料」或補列號欄。
2. 「1 多就用 POS、0 多就用 SOP」只適合題目允許自由選較短形式時；若題目明確問「標準 SOP」或「標準 POS」，不能自行改用另一種。建議補一句限制，避免選擇題誤判。
3. Markdown 使用 `A′` 與 app/其他教材常見的 `A'` 可能不一致。建議統一顯示風格，或至少同 topic 內一致。

### cp-karnaugh-map

來源：`三、卡諾圖化簡_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 用途(30 秒看懂)(Purpose) | 為何要化簡、流程總覽 | paragraph + orderedList |
| 題目 1：2 變數(Two-Variable K-map) | 2 格合併成 `B` | table + orderedList |
| 題目 2：3 變數(Three-Variable K-map) | 圈大、重疊、`B′ + AC` | table + orderedList |
| 題目 3：4 變數(Four-Variable K-map) | 四角跨邊環繞、`B′D′` | table + orderedList |
| Don't care(X) | X 可當 1 或 0，為了圈更大 | table + orderedList |
| 公式整理(Exam Summary) | 圈選規則與固定/變動變數 | orderedList |

建議 terms：

| 中文 | English |
| --- | --- |
| 卡諾圖 | Karnaugh Map / K-map |
| 格雷碼 | Gray Code |
| Don't care | Don't care |
| 跨邊 | Wrap-around |
| 重疊圈選 | Overlapping Group |
| 最簡 SOP | Simplified SOP |

發現問題：

1. Markdown 標題是 `卡諾圖化簡 與 萬用閘`，但本檔內容實際只到卡諾圖，且 `四、萬用閘` 已是獨立檔。建議 route/topic 標題仍採 `卡諾圖化簡(Karnaugh Map Simplification)`，避免重複。
2. 文中多處把 `BC=00`、`BC=01` 說成「兩行」，但在表格裡它們是欄位。建議顯示時改成「兩欄」或「兩個欄位」。
3. 卡諾圖表格以 Markdown 表格表示可以匯入，但若要清楚呈現圈選，現有 table 只能顯示值與文字說明，不能畫圈。可接受做法是保留表格 + 下方步驟文字。
4. 使用 `B′`、`D′` 等符號需和 SOP/POS 章一致。

### cp-universal-gates

來源：`四、萬用閘_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 概念(Concept) | NAND/NOR 為何是萬用閘、NOT 快速做法 | paragraph + orderedList |
| NAND 組閘(NAND Implementations) | NOT、AND、OR、XOR 需要幾個 NAND | table |
| NOR 組閘(NOR Implementations) | NOT、OR、AND 需要幾個 NOR | table |
| 必記重點(Exam Essentials) | 常考題型與數字速記 | orderedList |

建議 terms：

| 中文 | English |
| --- | --- |
| 萬用閘 | Universal Gate |
| NAND | NAND |
| NOR | NOR |
| 德摩根定律 | De Morgan's Laws |
| 對偶 | Duality |

發現問題：

1. 本檔使用 `迪摩根定律`，基本邏輯章使用 `德摩根`。建議統一為 `德摩根定律(De Morgan's Laws)`，但是否要視為「可修正術語」需要你確認。
2. `實務上工廠只量產單一種閘最便宜` 這句較口語且可能過度簡化，建議改成「實作時常因製程與設計便利而偏好 NAND/NOR 組合」，或原樣保留待確認。
3. NOR 表格沒有 XOR 列；若要和 NAND 表一致，可補 `XOR：可由 NOR 組成，常見需 5 個 NOR`，但這屬於新增內容，需你確認。

### cp-combinational-sequential-circuits

來源：`五、組合與循序電路_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 兩大類(Two Circuit Types) | 組合電路與循序電路定義、例子、判斷口訣 | table + paragraph |

建議 terms：

| 中文 | English |
| --- | --- |
| 組合電路 | Combinational Circuit |
| 循序電路 | Sequential Circuit |
| 記憶 | Memory |
| 狀態 | State |
| 時脈 | Clock |
| 正反器 | Flip-Flop |
| 暫存器 | Register |
| 計數器 | Counter |

發現問題：

1. 此 Markdown 沒有 `#` 標題，topic title 需由檔名推得。
2. 內容非常短，只足夠做「分類判斷」卡片；若考試也要半加器、全加器、編碼器、解碼器、多工器、解多工器的公式或選擇線，原文目前沒有提供。
3. 若嚴格遵守「不要新增資料」，此 topic 會比其他四個短很多；若要讓 route 學習體驗一致，需要你確認可以補基本定義或例題。

## 建議測試

實作時至少補這些測試：

1. `tests/unit/professionalTopics.spec.ts`
   - 五個 3b topic 都有非空 `summary`、`terms`、`lessonArticle.sections`。
   - 五個 topic 的 `sourceFiles` 包含 `_private/計算機概論.txt` 與各自 Markdown。
   - 五個 topic 的 route/topic title 符合中文(英文)格式。
   - 內容不包含 raw 指令：`用table做`、`點選標題`、`內部值都是空的`。
   - 內容包含關鍵字：`Truth Table`、`SOP`、`POS`、`K-map`、`Don't care`、`NAND`、`NOR`、`Flip-Flop`。
   - 德摩根 row/cell 有強調 metadata，或至少內容包含 `德摩根定律`。
2. `tests/unit/subjectTopics.spec.ts`
   - `/computer-principles` 會顯示這五個 topic，因為 sections 不再為空。
   - 順序應位於 `cp-codes-and-check-codes` 後、`cp-os-basics` 前，依 skeleton 既有順序為：基本邏輯 → SOP/POS → 卡諾圖 → 萬用閘 → 組合與循序電路。
3. `tests/unit/SubjectTopicPage.spec.ts`
   - 若 Q1 確認要做真值表欄位 reveal：預設輸出欄位值隱藏，點選 `AND/OR/NAND...` 表頭後顯示對應欄位。
   - 若 Q1 不做互動：不需要新增這類 component test。
4. stale/source audit 類測試
   - 3b 五個 topic id 視為已填內容。
   - sourceFiles 與 Markdown 來源一致。
5. typecheck
   - 若新增 table reveal metadata，既有 table block 與未互動表格仍可通過。

## 待你確認

Q1. `一、基本邏輯` 的兩輸入真值表，是否一定要做成「點選欄位標題才顯示該欄輸出值」？

我的建議：如果這是你想拿來自測的互動效果，就做；如果只是筆記時的想法，先用一般表格顯示，避免這次 scope 變大。

請回答：要互動

```text
要互動 / 不要互動，普通表格即可
```

結論：要互動。基本邏輯的兩輸入真值表要預設隱藏 `AND`、`OR`、`NAND`、`NOR`、`XOR`、`XNOR` 欄位值；點選欄位標題後，再顯示該欄的輸出值。這會讓正式 change 需要擴充 lessonArticle table 的互動 metadata 與 `SubjectTopicPage.vue` 渲染行為。

Q2. 「section標題 是 中文(英文)」是指 route/topic 大標題，還是每個內部 lesson section 也都要雙語？

我的建議：route/topic 大標題雙語即可；內部 section 依 Markdown 原小標題，必要時才雙語，畫面比較不擠。

請回答：route/topic 大標題雙語即可

```text
只要 topic 大標題雙語 / 內部 section 也都要雙語
```

結論：只要 route/topic 大標題雙語即可。內部 lesson section 不強制每段都中文(英文)，依 Markdown 原小標題與可讀性處理。

Q3. `五、組合與循序電路` 是否只照目前短文匯入？

我的建議：先只照目前短文匯入，因為你已明確說不要隨意新增資料；若之後覺得太薄，再開另一輪補內容。

請回答：只照目前短文匯入

```text
只照短文 / 可以補基本例題與公式
```

結論：只照目前短文匯入。`五、組合與循序電路` 不額外補半加器、全加器、編碼器、解碼器、多工器、解多工器等公式或例題。

Q4. 明顯術語與符號是否可在 app 內容中修正，但不改 Markdown 原檔？

包含：

- `-B` 改為 `B'` 或 `NOT B`
- `迪摩根` 統一為 `德摩根`
- 卡諾圖的「兩行」改為「兩欄」
- SOP/POS 補一句「題目明確指定標準 SOP/POS 時不可自行換形式」

我的建議：可以修正，因為這些是避免學習誤解，不是擴寫內容。

請回答：可以修正

```text
可以修正 / 盡量原樣保留
```

結論：可以修正，但只修正會造成誤解的明顯術語與符號，不改 Markdown 原檔。正式匯入 app 時可將 `-B` 改為 `B'` 或 `NOT B`、`迪摩根` 統一為 `德摩根`、卡諾圖「兩行」改為「兩欄」，並在 SOP/POS 補上題目指定標準形式時不可自行改用另一種形式的提醒。

Q5. NOR 表格是否要補 XOR？

我的建議：不補。因為原 Markdown 沒寫，且本章已說萬用閘可組出 XOR；考試若未特別問 NOR 做 XOR 的閘數，先不增加記憶負擔。

請回答：要補，純粹忘記了

```text
不補 / 補 NOR XOR 常見 5 個
```

結論：要補。NOR 組閘表格要補上 XOR，寫成可由 NOR 組成，常見做法需要 5 個 NOR。

## 已確認事項

1. 本次處理既有 3b 五個 topic：`cp-digital-logic-basics`、`cp-sop-pos`、`cp-karnaugh-map`、`cp-universal-gates`、`cp-combinational-sequential-circuits`。
2. 每份 Markdown 對應一個既有 skeleton topic，不合併成單一大 topic。
3. route/topic 大標題採中文(英文)，內部 lesson section 不強制全部雙語。
4. Markdown 裡的製作指令不直接顯示給學習者，會轉成 table、style 或互動 metadata。
5. `一、基本邏輯` 的兩輸入真值表要做互動：預設隱藏輸出欄位值，點選欄位標題後顯示該欄。
6. `五、組合與循序電路` 只照目前短文匯入，不額外補公式或例題。
7. app 匯入內容可修正明顯術語與符號，但不修改 Markdown 原檔。
8. `四、萬用閘` 的 NOR 表格要補 XOR，常見做法記 5 個 NOR。
9. 每個 topic 的 `sourceFiles` 保留 `_private/計算機概論.txt`，並新增對應 Markdown 路徑。
10. 需要新增或更新測試，特別是 basic logic 真值表欄位 reveal 互動與五個 3b topic 的 source traceability。

## 結論

**Decision**：建立新的 Spectra change，將 3b 數位邏輯五份 Markdown 匯入 `/computer-principles` 的五個既有 skeleton topic，並擴充 lessonArticle table 以支援真值表欄位點選揭露。

**Rationale**：現有架構已經有五個對應 topic 與 lessonArticle 渲染能力，內容匯入可沿用既有 blocks；Q1 已確認真值表需要互動，因此正式 change 需多包含 table reveal metadata、renderer 行為與 component test。其餘內容以 Markdown 原編排為主，只修正明顯術語與符號問題。

**Remaining**：無。Q1-Q5 已確認，可進入 `$spectra-propose`。

**Capture to**：本檔 `_private/propose.md`。下一步可執行 `$spectra-propose`，建立正式 change artifacts。
