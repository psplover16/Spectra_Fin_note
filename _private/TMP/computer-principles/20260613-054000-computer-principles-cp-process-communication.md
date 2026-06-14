---
topic_id: cp-process-communication
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Process Communication(Process Communication)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Process Communication
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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

## 學習標記說明

- [必背]：定義、核心句與國考最常出現的敘述，讀者要能直接說明。
- [比較]：把容易混淆的概念放在同一視野中比較，作答時要寫出差異理由。
- [會算]：公式與代入步驟要能照題目數字重算，不能只背結論。
- [會畫]：圖或流程要能照順序畫出，並能解釋每個節點或箭頭代表什麼。

## Verifier 結果

- source mapping: verified
- old fixed template removed: verified
- lessonArticle shape: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
