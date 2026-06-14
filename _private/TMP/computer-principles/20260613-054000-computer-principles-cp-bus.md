---
topic_id: cp-bus
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 匯流排（Bus）(Bus)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 匯流排（Bus）
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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
