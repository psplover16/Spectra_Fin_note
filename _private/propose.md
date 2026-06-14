# Computer Principles 十六/十七章內容匯入討論稿

## 來源

- 討論輸入：`_private/discuss.txt`
- 內容來源：
  - `_private/MD/計概/3a基本計概/十六、浮點數轉換_新手國考教材.md`
  - `_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md`
- 目標 route：`/computer-principles`

## 目標理解

目前理解是：

```text
本次不是再整理 Markdown 原檔。
本次要把十六章與十七章的既有教材內容，整理進本專案的 /computer-principles route。
```

對應 topic：

| Markdown | 對應 topic id | 建議 route 標題 |
| --- | --- | --- |
| 十六、浮點數轉換 | `cp-floating-point-conversion` | `浮點數轉換(Floating-Point Conversion)` |
| 十七、數碼、文字碼與檢查碼 | `cp-codes-and-check-codes` | `數碼、文字碼與檢查碼(Codes and Check Codes)` |

「不改變現有資料」先解讀為：

```text
不主動改寫教材核心觀念。
可以把 Markdown 裡的編排指示轉成 app 支援的 lessonArticle block。
可以清掉不應顯示給學習者的指令文字，例如「用table」。
發現明顯錯誤或可能誤導新手的地方，先列在本檔，等你確認後再進入 propose/apply。
```

## 討論模式

使用 `$spectra-discuss` 的 Assumptions mode。

原因：已找到 3 個以上相關 source，可根據現有架構提出假設。

相關檔案：

- `src/modules/subjectTopics/data/professionalTopics.ts`
- `src/modules/subjectTopics/data/subjectTopics.ts`
- `src/modules/subjectTopics/types/subjectTopic.ts`
- `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- `tests/unit/professionalTopics.spec.ts`
- `tests/unit/subjectTopics.spec.ts`

這次主要是靜態教材內容匯入，不需要新增 IPC、storage、新 route 或新的資料轉接層。現有 `lessonArticle` 已支援 paragraph、orderedList、table 與表格樣式 metadata。

但 Q6 已新增一個小型 UI 需求：十七章的 `考前總複習` 要能在 topic 內部預設關閉，點選後展開。現有 app 只有整張 topic card 可以收闔，沒有單一 lesson section 的收闔能力，因此正式 change 需要新增 section-level collapsible metadata 與 renderer 支援。

## My assumptions

### 1. 兩個 topic 都填入既有 skeleton

**Approach**：在 `professionalTopics.ts` 補上 `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` 的 sourceFiles、terms、lesson sections，讓既有 skeleton 變成 route 可見內容。

**Evidence**：

- `professionalTopics.ts` 已有 `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` skeleton。
- `subjectTopics.ts` 的 `getSubjectTopics()` 會過濾空 lessonArticle；補 sections 後才會出現在 `/computer-principles`。

**If wrong**：若你其實想新增不同 topic id，既有 skeleton 會繼續是空內容，route 與測試都要重新定義。

### 2. 優先使用既有 block，但新增 section-level 收闔

**Approach**：內容本身仍使用 `paragraph`、`orderedList`、`table` 呈現。多步驟內容用 orderedList；單一說明用 paragraph；矩陣、欄位、比較、公式表用 table。若要滿足 Q6，則在 `LessonArticleSection` 層級新增可選 metadata，例如 `collapsible` 與 `defaultExpanded`，讓 `考前總複習` 預設關閉、點選後展開。

**Evidence**：

- `SubjectTopicPage.vue` 已渲染 lessonArticle 的 paragraph、orderedList、table。
- 先前 `cp-base-conversion`、`cp-complement-conversion` 已採用同樣方式放長講義內容。

**If wrong**：若最後不需要 section-level 收闔，則可省掉 UI 型別與 renderer 修改；若需要更複雜的巢狀互動，scope 會比目前預估更大。

### 3. sourceFiles 要補上對應 Markdown

**Approach**：兩個正式 topic 的 `sourceFiles` 應同時包含 `_private/計算機概論.txt` 與對應 Markdown 檔。

**Evidence**：

- 前面已匯入的 `cp-hazard`、`cp-usb-speed`、`cp-base-conversion`、`cp-complement-conversion` 都保留 `_private/計算機概論.txt` + Markdown source。
- 這次 discuss.txt 明確指定兩份 Markdown 是 route 內容來源。

**If wrong**：stale audit 或內容追蹤會看不出教材來自哪份 Markdown。

### 4. route topic 標題採「中文(英文)」，內部標題不強迫全部雙語

**Approach**：route 上看到的 topic card 標題採中文在前、英文在括號內，例如 `浮點數轉換(Floating-Point Conversion)`。內部 lesson section 不強迫全部雙語；若標題本身就是常考英文名詞，才採中文(英文)，例如 `正規化(Normalization)`、`漢明碼(Hamming Code)`。

**Evidence**：

- `_private/discuss.txt` 指定「section標題 是 中文(英文)的格式」。
- 現有正式 topic 多數使用 `中文(English)` route title。

**If wrong**：若你其實要求每個內部 section 也都雙語，apply 時需要把所有 section heading 補成中文(英文)。

### 5. 一份 Markdown 一條內容整理線

**Approach**：正式 apply 時可把兩份 Markdown 分成兩條獨立整理線：十六章負責 `cp-floating-point-conversion`，十七章負責 `cp-codes-and-check-codes`，主流程只負責整合、測試與 route 順序。

**Evidence**：

- `_private/discuss.txt` 指定「一個md檔用一個副代理處理。主代理負責流程的推進」。
- 兩個 topic 內容彼此獨立，沒有共同資料結構變更需求。

**If wrong**：若一定要同一人一次性整理，仍可完成，但比較不符合你希望避免汙染主流程的方式。

## 建議整理範圍

### cp-floating-point-conversion

來源：`十六、浮點數轉換_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| IEEE 754 欄位(IEEE 754 Fields) | 單精度/雙精度欄位、公式、S/E/F 欄位意思 | table + paragraph |
| IEEE 754 轉換流程(IEEE 754 Encoding Flow) | 判斷正負、轉二進位、正規化、計算 Exponent、填 Fraction、組合欄位 | orderedList |
| 正規化(Normalization) | `1.xxxxx * 2^n`、大於 1 與小於 1 的例子 | paragraph / orderedList |
| 十進位小數轉二進位(Decimal Fraction to Binary) | 整數除 2、小數乘 2 取整數、13.625 範例 | orderedList |
| 10.25 轉 IEEE 754 單精度(10.25 to IEEE 754 Single Precision) | 完整 5 步驟與 `0x41240000` | orderedList |
| IEEE 754 反推(IEEE 754 Decoding) | 拆 S/E/F、算 `E - bias`、補回隱含 1、得到 -6 | orderedList |
| 0.1 為什麼不精確(Why 0.1 Is Inexact) | 十進位 0.1 轉二進位循環、欄位有限只能近似 | paragraph |
| 常見陷阱(Common Pitfalls) | Exponent、Fraction、正規化、小數轉二進位、負數表示 | table |
| 考前速記(Exam Quick Review) | 單精度/雙精度欄位、轉換流程、反推流程 | orderedList 或 table |

建議 terms：

| 中文 | English |
| --- | --- |
| 浮點數 | Floating Point |
| IEEE 754 | IEEE 754 |
| 符號位 | Sign |
| 指數欄位 | Exponent |
| 尾數欄位 / 小數欄位 | Fraction |
| 偏移值 | Bias |
| 正規化 | Normalization |
| 隱含位元 | Implicit Bit |

發現問題：

1. IEEE 754 公式 `(-1)^S * 1.F * 2^(E - bias)`主要用於本章處理的正規化數；使用者已確認本教材是國考用，不需要在 app 額外補 subnormal、Infinity、NaN。
2. `Fraction / 尾數欄位` 對新手容易誤會成整個 significand。建議寫成「Fraction 欄位只存正規化後小數點右側；最前面的 1 是隱含位元」。
3. 十進位小數轉二進位目前寫「乘以 2，取整數，最後順著讀」，建議補清楚：取出的整數是答案下一位，下一輪要把整數部分拿掉，只用剩下的小數繼續乘。
4. Markdown 中 `完整流程` 前後有大量空白，匯入 app 時應壓縮，不要保留空白段落。
5. 10.25 範例與反推 -6 範例目前驗算正確，可直接保留。
6. 0.1 的二進位循環 `0.0001100110011...(2)` 觀念正確，可直接保留。

### cp-codes-and-check-codes

來源：`十七、數碼、文字碼與檢查碼_新手國考教材.md`

建議 sections：

| section heading | 內容範圍 | block 型態 |
| --- | --- | --- |
| 定義與總覽(Overview) | 數碼、文字碼、檢查碼定義與常見碼表 | paragraph + table |
| BCD(Binary-Coded Decimal) | 8421 BCD、有效範圍、259 範例 | orderedList |
| 格雷碼(Gray Code) | 相鄰只差 1 bit、用途、Binary/Gray 互轉 | orderedList |
| 文字碼(Character Codes) | ASCII、Extended ASCII、EBCDIC、Unicode、UTF-8 | table + orderedList |
| 同位元檢查(Parity Check) | 奇同位、偶同位、能偵測但通常不能更正 | table |
| CRC(Cyclic Redundancy Check) | 生成多項式、模 2 除法、餘數、接收端驗證 | orderedList |
| 漢明碼(Hamming Code) | 檢查位、`2^r >= m + r + 1`、P1/P2/P4、Syndrome | orderedList / table |
| 漢明距(Hamming Distance) | 漢明距定義、偵測/更正公式 | table |
| 考前總複習(Exam Quick Review) | 預設關閉，點開後呈現常見陷阱、國考答題句、考前速記三個小段 | collapsible section + table / orderedList |

建議 terms：

| 中文 | English |
| --- | --- |
| 數碼 | Numeric Code |
| 文字碼 | Character Code |
| 檢查碼 | Check Code |
| BCD | Binary-Coded Decimal |
| 格雷碼 | Gray Code |
| ASCII | ASCII |
| EBCDIC | EBCDIC |
| Unicode | Unicode |
| UTF-8 | UTF-8 |
| 同位元檢查 | Parity Check |
| 循環冗餘檢查 | CRC |
| 漢明碼 | Hamming Code |
| 漢明距 | Hamming Distance |
| 症候值 | Syndrome |

發現問題：

1. Hamming Code 範例中，位置 4 的檢查位前面說應放 `P1, P2, P4...`，但表格內容寫成 `P3`，後面又說重新檢查 `P1、P2、P4`。建議統一為 `P4`。
2. Hamming Code 的檢查位說明寫 `P3 檢查... 4/5/6/7`，這裡應改為 `P4`，而且不是「最右邊是 1」，而是位置編號二進位中代表 4 的那一位為 1。
3. `漢明距` 表格 header 殘留 `用table`，不應顯示在 app。
4. `常見陷阱` heading 殘留 `用table做`，不應顯示在 app。
5. `常見陷阱`、`國考答題句`、`考前速記` 內容高度重疊。若全部照搬，app 會偏冗；建議整合成一個 `考前總複習(Exam Quick Review)`。
6. BCD 的 `0000 到 1001` 應描述為「單一 8421 BCD digit 的有效範圍」，避免被誤解成整個 BCD 資料只能到 9。
7. CRC 的「接收端再除一次，餘數為 0 表示通過」在一般教法中可接受；建議補「國考基本題通常這樣判斷」以避免過度擴張到所有 CRC 實作細節。
8. Hamming Code 位置編號照本教材保留「左到右、從 1 開始」，不額外補其他教材方向，避免新手混淆。

## 建議測試

實作時至少補這些測試：

1. `professionalTopics.spec.ts`
   - `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` 有非空 `lessonArticle`。
   - `lead` 預設為空陣列。
   - `sourceFiles` 包含 `_private/計算機概論.txt` 與對應 Markdown。
   - route topic 標題符合中文(英文)格式；內部 section heading 依教材主題命名，必要時才中英並列。
   - 內容包含關鍵字：`IEEE 754`、`bias`、`0x41240000`、`BCD`、`Gray Code`、`Hamming Distance`、`Syndrome`。
   - 內容不包含 `用table`、`用table做` 等 raw display instruction。
   - 十七章的 `考前總複習` section 有 collapsible metadata，且預設關閉。
2. `subjectTopics.spec.ts`
   - `/computer-principles` route 顯示這兩個 topic。
   - 順序應在 `cp-complement-conversion` 之後，依 skeleton 既有順序為 `cp-floating-point-conversion`、`cp-codes-and-check-codes`。
3. `SubjectTopicPage.spec.ts`
   - lessonArticle section 設定為 collapsible 時，畫面預設只顯示 section 標題，不顯示內文。
   - 點選後展開，能看到內部的 `常見陷阱`、`國考答題句`、`考前速記`。
   - 未設定 collapsible 的既有 section 行為不變。
4. workflow / stale audit 類測試
   - 將兩個 topic id 視為已填內容。
   - sourceFiles 與 Markdown 來源一致。
5. typecheck
   - 新增 section-level collapsible metadata 後，既有 `LessonArticleContentBlock` 型別仍可通過。

## 待你確認

Q1. section heading 是否要「每個內部 section 都中文(英文)」？

原本問題：我原本把「section 標題中文(英文)」理解成內部每個小段都要雙語，這裡需要改成更白話的規則。

你的回答：甚麼意思??

回覆：我原本問得太模糊。這裡的意思是：

```text
route/topic 大標題：浮點數轉換(Floating-Point Conversion)
內部小段標題：IEEE 754 欄位、正規化、Hamming Code 等
```

新的結論：route/topic 大標題採中文(英文)。內部 section 不強迫每個都中英並列；如果標題本身是常考英文術語，才保留英文，例如 `正規化(Normalization)`、`漢明碼(Hamming Code)`。


Q2. `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` 是否依 skeleton 既有順序，放在 `補數轉換` 後面？

我的建議：是。現有 skeleton 順序就是補數轉換 → 浮點數轉換 → 數碼、文字碼與檢查碼。

你的回答：甚麼意思??

回覆：這是在問 `/computer-principles` 頁面上的 topic 卡片順序。現在專案裡已經有空殼順序：

```text
補數轉換
浮點數轉換
數碼、文字碼與檢查碼
```

新的結論：照既有順序放，不另外插到別的位置。也就是浮點數轉換在補數轉換後面，數碼、文字碼與檢查碼在浮點數轉換後面。


Q3. 浮點數章是否補一句「本章先處理國考常見的正規化數，不展開 subnormal / Infinity / NaN」？

原本建議：我原本建議補一句限制範圍；依你的回答，正式內容不補這句。

你的回答：不用，因為本教材就是國考用的

結論：不用補。正式內容維持國考取向，不額外展開 subnormal、Infinity、NaN。


Q4. 十進位小數轉二進位是否補上「取整數後，下一輪去掉整數，只拿小數繼續乘」？

我的建議：要補。這和你前面對進制轉換提出的需求一致。

你的回答：目前我是寫什麼?

回覆：目前十六章 Markdown 寫的是：

```text
小數部分：
乘以 2，取整數，最後順著讀。
```

這句方向是對的，但對新手來說少了一句「下一輪怎麼繼續」。正式匯入 app 時建議補成：

```text
小數部分乘以 2，取整數部分作為答案下一位；
下一輪把整數部分拿掉，只用剩下的小數繼續乘。
例如乘出 1.xxx，就取 1，留下 0.xxx 繼續乘。
```

結論：要補這個白話步驟。


Q5. Hamming Code 的 `P3` 是否確認改成 `P4`？

我的建議：要改。這是明顯內容錯誤，不改會讓 `P1、P2、P4` 與 syndrome 說明互相衝突。

你的回答：正確到底是P3還是P4??

回覆：以你這份教材的寫法，正確是 `P4`。

原因是 Hamming Code 的檢查位通常放在位置：

```text
1, 2, 4, 8, ...
```

所以 Hamming(7,4) 的檢查位是：

```text
P1、P2、P4
```

有些人可能口語上說「第 3 個檢查位」，但如果用位置命名，它不是 `P3`，而是放在第 4 位的 `P4`。而且你後面 Syndrome 也寫 `S4 S2 S1`，所以應該統一為 `P4`。

結論：`P3` 改成 `P4`。


Q6. 十七章最後三段 `常見陷阱`、`國考答題句`、`考前速記` 是否整合成一個 `考前總複習(Exam Quick Review)`？

我的建議：整合。上面各章節已收錄主要觀念，最後只需要保留去重後的陷阱與速記。

你的回答：整合成一個 考前總複習，內部包著 `常見陷阱`、`國考答題句`、`考前速記` 的模式，預設 考前總複習 是關閉的，點選之後會打開

結論：照你的回答做。

注意：目前 app 只有整張 topic card 可以收闔，lessonArticle 內部的單一 section 還不能預設關閉。要滿足這點，正式 change 需要新增 section-level 收闔能力，讓 `考前總複習` 預設關閉，點開後才顯示內部三段內容。


Q7. Hamming Code 的位置編號是否保留「本教材用左到右、從 1 開始」，並補一句「實際題目以題目標示為準」？

我的建議：保留並補註。這能避免不同教材標位方向造成混淆。

你的回答：Hamming Code 的位置編號 不是本來就是 左到右、從 1 開始 ???

回覆：在你這份教材中，位置編號就是「左到右、從 1 開始」，正式內容照這個方式處理。

我前面提「以題目標示為準」是怕有些題目或教材圖示會用不同排列方向，反而講太多了。國考用的新手版可以不用特別岔出去。

結論：保留「左到右、從 1 開始」，不用額外補其他教材方向。


## 已確認事項

1. 本次處理既有 topic：`cp-floating-point-conversion` 與 `cp-codes-and-check-codes`。
2. route/topic 大標題採中文(英文)，內部 section 依教材主題命名，不強迫每個都雙語。
3. 兩個 topic 依既有 skeleton 順序放在 `cp-complement-conversion` 後面：先 `cp-floating-point-conversion`，再 `cp-codes-and-check-codes`。
4. 浮點數章不用額外補 subnormal、Infinity、NaN，維持國考教材取向。
5. 十進位小數轉二進位要補白話步驟：取整數當答案下一位，下一輪去掉整數，只用剩下的小數繼續乘。
6. Hamming Code 的檢查位統一用 `P1、P2、P4`，`P3` 改成 `P4`。
7. 十七章最後整合成 `考前總複習(Exam Quick Review)`，內部保留 `常見陷阱`、`國考答題句`、`考前速記` 三段。
8. `考前總複習` 需要預設關閉，點選後展開；正式 change 需新增 lessonArticle section-level 收闔能力。
9. Hamming Code 位置編號照本教材採「左到右、從 1 開始」，不補其他方向說法。
10. 使用者已確認 Q1-Q7 全部按照本檔結論執行，沒有剩餘待確認問題。

## 結論

**Decision**：建議建立一個新的 Spectra change，將十六章與十七章整理進 `/computer-principles` 的既有 topic：`cp-floating-point-conversion` 與 `cp-codes-and-check-codes`，並新增 lessonArticle section-level 收闔能力供 `考前總複習` 使用。

**Rationale**：這次核心是教材內容匯入，大多可沿用既有 lessonArticle 結構；唯一新增 UI 行為是十七章的 `考前總複習` 要能在 topic 內預設關閉並點選展開。內容校正方面，已確認浮點數維持國考範圍、小數連乘補白話步驟、Hamming Code 統一使用 `P4`。

**Remaining**：無。Q1-Q7 全部已確認依本檔結論執行。

**Capture to**：本檔 `_private/propose.md`。下一步可執行 `$spectra-propose`。
