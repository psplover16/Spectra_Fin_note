---
topic_id: cp-deadlock
formal_topic_id: cp-deadlock
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# Deadlock(Deadlock)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Deadlock`
- source labels: [必背], [會算], [易混淆]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Deadlock`
- topic id: `cp-deadlock`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 定義
- 一組 process 互相等待對方持有的資源，導致永遠無法繼續。

### [必背] 四個必要條件
1. Mutual Exclusion：資源不可同時共享。
2. Hold and Wait：持有資源時又等待其他資源。
3. No Preemption：資源不可強制搶奪。
4. Circular Wait：形成循環等待。

### [比較] 處理方式
- Deadlock Prevention：破壞四個必要條件之一。
- Deadlock Avoidance：事先判斷是否進入不安全狀態，典型為 Banker's Algorithm。
- Deadlock Detection & Recovery：允許發生，偵測後透過終止 process 或搶回資源恢復。
- Ignore：例如 Ostrich Algorithm，某些一般系統可能選擇忽略低機率 deadlock。

### [會算] 會算
- Resource Allocation Graph。
- Banker's Algorithm：Available、Max、Allocation、Need，判斷 safe sequence。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Deadlock」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [易混淆]: 列出相近概念、混淆原因、辨別關鍵與反例。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
