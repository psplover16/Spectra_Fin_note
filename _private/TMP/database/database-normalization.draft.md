---
topic_id: database-normalization
formal_topic_id: database-database-normalization
subject: database
source_files:
  - _private/資料庫.txt
status: draft
generated_at: "2026-06-13T11:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 正規化(Normalization)

## 來源對應

- source files: `_private/資料庫.txt`
- source section: `_private/資料庫.txt` lines 68-79`
- source labels: [必背], [比較], [易混淆]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料庫.txt`
- source section: `_private/資料庫.txt` lines 68-79`
- topic id: `database-normalization`
- route: `/database`
- import target: `database`
- source labels: [必背], [比較], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 正規化(Normalization) 的定義與國考常見問法。
- 能從來源範圍「_private/資料庫.txt` lines 68-79」整理出記憶重點、理解說明與操作步驟。
- 能把資料庫專有名詞以中文(English Term) 格式寫出。

### [必背] 最小背誦句與記憶支架
- 正規化 的第一步是分清楚資料、結構、限制與操作。
- 看到 Normalization 時，要能回到 key、relation、SQL、transaction 或 data model 的脈絡。
- 若題目要求比較，先列條件，再寫差異原因與適用場景。

### [必背] 名詞定義與雙語術語
- 正規化(Normalization)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 正規形(Normal Form)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 完全相依(Full Dependency)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 傳遞相依(Transitive Dependency)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 多值相依(Multivalued Dependency)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。

### [必背] 核心理解與應用脈絡
- 資料庫題常把設計、語法與交易保證混在同一題，不能只背名詞。
- 正規化 要先知道它解決的問題，再判斷是否需要畫圖、寫 SQL、拆表或比較。
- 答題時要避免把 DB、DBMS、Data Model、SQL 與 Transaction 混成同一層。

### [會做] 實際例子與操作步驟
題目：如何判斷一張表是否至少滿足 3NF？

1. 先確認 1NF：每個欄位都不可再分。
2. 再確認 2NF：非鍵屬性必須完全相依於整個候選鍵。
3. 最後確認 3NF：非鍵屬性不可傳遞相依於候選鍵。
4. 若決定因子不是 candidate key，要再檢查 BCNF。

結果：正規化題先找 key，再判斷完全相依、部分相依、傳遞相依與決定因子。

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文縮寫，第一次出現要寫中文與英文全名。
- 不要把資料模型、資料庫系統與 SQL 指令類別混在一起。
- 若題目涉及正規化或交易，要先寫判斷條件，再寫結論。

### [必背] 專有名詞整理
- 正規化(Normalization)
- 正規形(Normal Form)
- 完全相依(Full Dependency)
- 傳遞相依(Transitive Dependency)
- 多值相依(Multivalued Dependency)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「正規化」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [易混淆]: 列出相近概念、混淆原因、辨別關鍵與反例。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
