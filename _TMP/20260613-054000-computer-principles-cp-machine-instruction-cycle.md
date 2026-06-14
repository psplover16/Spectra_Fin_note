---
topic_id: cp-machine-instruction-cycle
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 機器指令與指令週期(Machine Instruction and Instruction Cycle)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 機器指令與指令週期
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 機器指令
- 定義：CPU 可直接解讀與執行的二進位指令。
- 常見組成：操作碼（Opcode）加上運算元（Operand）或位址欄位。


### [必背] 機器指令週期常見 5 階段
1. Fetch：取指令，通常由 PC 指向下一個指令位址。
2. Decode：解碼，判斷操作碼與定址模式。
3. Operand Fetch / Address Calculation：取得運算元或計算有效位址。
4. Execute：執行運算、跳躍、比較或 I/O。
5. Write Back / Store：寫回結果，並檢查是否有中斷。


### [補充] 不同教材階段名稱可能不同，但選擇題重點通常是「取指令、解碼、取運算元、執行、寫回」。

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
