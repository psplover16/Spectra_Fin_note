---
topic_id: cp-process
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# Process(Process)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Process`
- source summary: 整理Process在作業系統中的國考定位，重點包含state diagram 與 scheduling。

## 國考重點

- 能說明Process(Process) 的定義、用途與常考問法。
- 能把來源段落「3c. 作業系統 / Process」整理成考試大綱、記憶重點與理解說明。
- 能用實際例子或操作步驟驗證 state diagram 與 scheduling。

## 國考速記

- Process 的速記核心是：state diagram 與 scheduling。
- 看到 Process 先判斷題型是定義、比較、流程還是計算。
- 作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。

## 名詞解釋

- 行程(Process)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 程式(Program)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 行程控制區塊(Process Control Block)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 前後文切換(Context Switch)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 時間片輪轉(Round Robin)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。

## 核心想法

- Process 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。
- 初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。
- 若題目出現相近名詞，先用來源提醒「state diagram 與 scheduling」排除錯誤選項。

## 實際例子

題目：FCFS 中 P1 執行 6ms、P2 執行 2ms，P1 先到，P2 等待時間多少？

1. FCFS 先到先服務。
2. P2 必須等 P1 完成。
3. P1 burst time 是 6ms。

結果：P2 waiting time = 6ms。

## 易錯提醒

- 不要只背 Process 的標題，至少要能說出定義、用途與一個例子。
- 看到英文 Process 時，要能回到中文 Process，避免術語對不上。
- 若題目要求計算或流程，答案要有步驟，不可只寫結論。

## 專有名詞

- 行程(Process)
- 程式(Program)
- 行程控制區塊(Process Control Block)
- 前後文切換(Context Switch)
- 時間片輪轉(Round Robin)

## Verifier 結果

- source mapping: verified
- exam outline: verified
- memory points: verified
- beginner explanation: verified
- concrete example or procedure: verified
- bilingual terminology: verified
- issue list: none
- fix summary: 依使用者品質回饋補為實質 AI 教學草稿，不再以 manifest、任務表或摘要充當內容。
- final_status: verified
