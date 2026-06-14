---
topic_id: cp-disk-management
formal_topic_id: cp-disk-management
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Disk Management(Disk Management)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Disk Management`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Disk Management`
- topic id: `cp-disk-management`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

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

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Disk Management」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
