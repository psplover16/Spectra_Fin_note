---
topic_id: cp-performance-formulas
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 效能名詞與公式(Performance Terms and Formulas)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 效能名詞與公式
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 名詞
- Clock：時脈，用來同步 CPU 動作。
- Clock Cycle：一個時脈週期，時間為 1 / Clock Rate。
- Clock Rate：每秒時脈次數，例如 GHz。
- CPI（Cycles Per Instruction）：平均每個指令所需時脈週期數。
- MIPS（Million Instructions Per Second）：每秒百萬指令數。
- 內頻：CPU 核心運作頻率。
- 外頻：CPU 與外部元件或系統匯流排相關頻率，舊教材常稱 FSB 或 base clock。


### [會算] 公式
- CPU Time = Instruction Count * CPI * Clock Cycle Time
- CPU Time = Instruction Count * CPI / Clock Rate
- MIPS = Instruction Count / (Execution Time * 10^6)
- MIPS = Clock Rate / (CPI * 10^6)


### [易混淆] 易混淆
- Clock Rate 越高不一定越快，還要看 CPI、指令數、記憶體存取與架構。
- MIPS 不適合跨不同 ISA 直接比較，因為不同架構完成同一工作所需指令數不同。

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
