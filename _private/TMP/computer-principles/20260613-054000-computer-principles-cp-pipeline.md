---
topic_id: cp-pipeline
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Pipeline（管線化）(Pipelining)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / Pipeline（管線化）
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 定義
- 將指令執行拆成多個階段，使不同指令可在不同階段同時進行，提高吞吐量。


### [會算] 常見公式
- 假設有 n 個指令、k 個管線階段、每階段時間為 t：
  - 非管線時間：約 n * k * t
  - 管線時間：約 (k + n - 1) * t
  - Speedup：約 [n * k] / [k + n - 1]
- 若題目提供各階段時間不同，管線時脈通常由最慢階段決定。


### [必背] 管線限制
- Pipeline 提高吞吐量，不一定降低單一指令延遲。
- Hazard 會造成 stall，影響實際效能。

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
