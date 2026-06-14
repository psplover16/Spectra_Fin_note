---
topic_id: cp-process-communication
formal_topic_id: cp-process-communication
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# Process Communication(Process Communication)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Process Communication`
- source labels: [必背], [比較]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Process Communication`
- topic id: `cp-process-communication`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [原文提醒] 原文提醒
- 原文提到這章跳過。

### [補充建議] 補充建議
- 至少掌握基本 IPC：
  - Shared Memory：速度快，但需同步控制。
  - Message Passing：透過 send/receive 溝通，較容易保護。
  - Pipe：單機 process 間資料流。
  - Socket：跨機器或本機 process 通訊。
  - RPC：讓遠端程序呼叫看起來像本地呼叫。
- 同步工具：
  - Mutex：互斥鎖。
  - Semaphore：計數型同步工具。
  - Monitor：封裝共享資料與同步操作。
- 經典問題：Producer-Consumer、Readers-Writers、Dining Philosophers。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Process Communication」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
