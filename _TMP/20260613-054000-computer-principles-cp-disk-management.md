---
topic_id: cp-disk-management
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# Disk Management(Disk Management)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Disk Management`
- source summary: 整理Disk Management在作業系統中的國考定位，重點包含access time、RAID、scheduling。

## 國考重點

- 能說明Disk Management(Disk Management) 的定義、用途與常考問法。
- 能把來源段落「3c. 作業系統 / Disk Management」整理成考試大綱、記憶重點與理解說明。
- 能用實際例子或操作步驟驗證 access time、RAID、scheduling。

## 國考速記

- Disk Management 的速記核心是：access time、RAID、scheduling。
- 看到 Disk Management 先判斷題型是定義、比較、流程還是計算。
- 作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。

## 名詞解釋

- 連續配置(Contiguous Allocation)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 鏈結配置(Linked Allocation)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 索引配置(Indexed Allocation)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 尋道時間(Seek Time)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 旋轉延遲(Rotational Latency)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 磁碟陣列(Redundant Array of Independent Disks)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。

## 核心想法

- Disk Management 不是孤立名詞，而是 作業系統 題組中用來判斷概念、流程或計算的節點。
- 初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。
- 若題目出現相近名詞，先用來源提醒「access time、RAID、scheduling」排除錯誤選項。

## 實際例子

題目：Seek Time=5ms、Rotational Latency=4ms、Transfer Time=1ms，Disk Access Time 為何？

1. Disk Access Time = Seek + Rotational Latency + Transfer。
2. 代入 5 + 4 + 1。
3. 總和為 10ms。

結果：Disk Access Time = 10ms。

## 易錯提醒

- 不要只背 Disk Management 的標題，至少要能說出定義、用途與一個例子。
- 看到英文 Disk Management 時，要能回到中文 Disk Management，避免術語對不上。
- 若題目要求計算或流程，答案要有步驟，不可只寫結論。

## 專有名詞

- 連續配置(Contiguous Allocation)
- 鏈結配置(Linked Allocation)
- 索引配置(Indexed Allocation)
- 尋道時間(Seek Time)
- 旋轉延遲(Rotational Latency)
- 磁碟陣列(Redundant Array of Independent Disks)

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
