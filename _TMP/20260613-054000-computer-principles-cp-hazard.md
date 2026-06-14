---
topic_id: cp-hazard
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Hazard(Pipeline Hazard)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / Hazard
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 定義
- Pipeline 中造成下一個指令無法在預定時脈進行的情況。


### [比較] 三種 Hazard
- Structural Hazard：硬體資源衝突，例如同一時間需要同一記憶體或功能單元。
  - 解法：增加硬體資源、分離 instruction/data cache、排程調整。
- Data Hazard：指令間資料相依，例如後一指令需要前一指令結果。
  - 常見：RAW、WAR、WAW。基礎考試最常問 RAW。
  - 解法：Forwarding、stall、compiler scheduling、register renaming。
- Control Hazard：分支或跳躍造成下一個 PC 不確定。
  - 解法：branch prediction、delayed branch、flush、speculative execution。

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
