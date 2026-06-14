---
topic_id: cp-deadlock
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Deadlock(Deadlock)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Deadlock
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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
