---
topic_id: cp-cache
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# Cache(Cache Memory)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Cache`
- source summary: 整理Cache在基本計概中的國考定位，重點包含AMAT 算例。

## 國考重點

- 能說明Cache(Cache Memory) 的定義、用途與常考問法。
- 能把來源段落「3a. 基本計概 / Cache」整理成考試大綱、記憶重點與理解說明。
- 能用實際例子或操作步驟驗證 AMAT 算例。

## 國考速記

- Cache 的速記核心是：AMAT 算例。
- 看到 Cache Memory 先判斷題型是定義、比較、流程還是計算。
- 作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。

## 名詞解釋

- 快取(Cache)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 命中率(Hit Ratio)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 未命中率(Miss Rate)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 平均記憶體存取時間(Average Memory Access Time)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 寫穿(Write Through)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 寫回(Write Back)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。

## 核心想法

- Cache 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。
- 初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。
- 若題目出現相近名詞，先用來源提醒「AMAT 算例」排除錯誤選項。

## 實際例子

題目：Hit Time=1ns、Miss Rate=5%、Miss Penalty=80ns，AMAT 為何？

1. AMAT = 1 + 0.05 * 80。
2. 0.05 * 80 = 4。
3. AMAT = 5ns。

結果：平均記憶體存取時間為 5ns。

## 易錯提醒

- 不要只背 Cache 的標題，至少要能說出定義、用途與一個例子。
- 看到英文 Cache Memory 時，要能回到中文 Cache，避免術語對不上。
- 若題目要求計算或流程，答案要有步驟，不可只寫結論。

## 專有名詞

- 快取(Cache)
- 命中率(Hit Ratio)
- 未命中率(Miss Rate)
- 平均記憶體存取時間(Average Memory Access Time)
- 寫穿(Write Through)
- 寫回(Write Back)

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
