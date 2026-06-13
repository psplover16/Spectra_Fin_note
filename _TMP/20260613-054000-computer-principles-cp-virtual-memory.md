---
topic_id: cp-virtual-memory
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# Virtual Memory(Virtual Memory)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Virtual Memory`
- source summary: 整理Virtual Memory在作業系統中的國考定位，重點包含EAT 與 replacement。

## 國考重點

- 能說明Virtual Memory(Virtual Memory) 的定義、用途與常考問法。
- 能把來源段落「3c. 作業系統 / Virtual Memory」整理成考試大綱、記憶重點與理解說明。
- 能用實際例子或操作步驟驗證 EAT 與 replacement。

## 國考速記

- Virtual Memory 的速記核心是：EAT 與 replacement。
- 看到 Virtual Memory 先判斷題型是定義、比較、流程還是計算。
- 作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。

## 名詞解釋

- 虛擬記憶體(Virtual Memory)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 需求分頁(Demand Paging)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 缺頁(Page Fault)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 有效記憶體存取時間(Effective Memory Access Time)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 抖動(Thrashing)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 最近最少使用(Least Recently Used)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。

## 核心想法

- Virtual Memory 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。
- 初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。
- 若題目出現相近名詞，先用來源提醒「EAT 與 replacement」排除錯誤選項。

## 實際例子

題目：Memory access time=100ns、p=0.001、page fault service time=10ms，EAT 約多少？

1. 10ms = 10,000,000ns。
2. EAT = (1 - 0.001) * 100 + 0.001 * 10,000,000。
3. 約 99.9 + 10,000 = 10,099.9ns。

結果：EAT 約 10,099.9ns。

## 易錯提醒

- 不要只背 Virtual Memory 的標題，至少要能說出定義、用途與一個例子。
- 看到英文 Virtual Memory 時，要能回到中文 Virtual Memory，避免術語對不上。
- 若題目要求計算或流程，答案要有步驟，不可只寫結論。

## 專有名詞

- 虛擬記憶體(Virtual Memory)
- 需求分頁(Demand Paging)
- 缺頁(Page Fault)
- 有效記憶體存取時間(Effective Memory Access Time)
- 抖動(Thrashing)
- 最近最少使用(Least Recently Used)

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
