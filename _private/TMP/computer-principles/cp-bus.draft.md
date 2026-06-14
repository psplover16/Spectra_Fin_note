---
topic_id: cp-bus
formal_topic_id: cp-bus
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 匯流排（Bus）(Bus)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 匯流排（Bus）`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 匯流排（Bus）`
- topic id: `cp-bus`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 三種匯流排
- 位址匯流排（Address Bus）：傳送記憶體或 I/O 位址。
- 資料匯流排（Data Bus）：傳送資料。
- 控制匯流排（Control Bus）：傳送讀寫、中斷、時脈、確認等控制訊號。

### [會算] 基本計算
- n bits 位址匯流排可產生 2^n 個位址。
- 若每個位址代表 1 byte，則可定址空間為 2^n bytes。
- n bits 資料匯流排一次可傳送 n bits 的資料。

### [比較] 傳輸方向
- 位址匯流排：通常 CPU 到記憶體或 I/O，單向為主。
- 資料匯流排：雙向。
- 控制匯流排：依訊號而定，常見為雙向或多方向。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「匯流排（Bus）」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
