---
topic_id: cp-disk-management
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Disk Management(Disk Management)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Disk Management
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [比較] Allocation
- Contiguous Allocation：連續配置，讀取快、支援直接存取，但外部碎片與擴充困難。
- Linked Allocation：每個區塊指向下一區塊，無外部碎片，但隨機存取差。
- Indexed Allocation：用 index block 記錄區塊位置，支援直接存取，但 index block 有額外成本。
- FAT：File Allocation Table，集中管理 linked allocation 的鏈結資訊。


### [會算] Disk 存取時間
- Disk Access Time = Seek Time + Rotational Latency + Transfer Time。
- 平均旋轉延遲約為半圈時間。


### [比較] RAID
- RAID 0：striping，效能高，無容錯。
- RAID 1：mirroring，容錯高，容量利用率低。
- RAID 5：striping + distributed parity，可容忍一顆磁碟壞。
- RAID 6：雙 parity，可容忍兩顆磁碟壞。
- RAID 10：先 mirror 再 stripe，效能與容錯佳，成本高。


### [會算] Disk Scheduling
- FCFS：照請求順序，公平但效率可能差。
- SSTF：最短尋道時間優先，可能 starvation。
- SCAN：電梯演算法，磁頭往一方向服務到端點再反向。
- C-SCAN：單向掃描，到端點後回到另一端再服務。
- LOOK / C-LOOK：類似 SCAN / C-SCAN，但只移動到最遠請求位置。

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
