---
topic_id: cp-virtual-memory
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Virtual Memory(Virtual Memory)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Virtual Memory
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 必背
- Virtual Memory：讓程式可使用大於實體記憶體的位址空間，透過 disk 與 memory 交換頁面。
- Demand Paging：需要頁面時才載入。
- Page Fault：存取的頁面不在主記憶體中，需由 OS 載入。


### [必背] 影響 Page Fault Ratio 的因素
- 配置的 frame 數量。
- Page replacement algorithm。
- 程式的 locality。
- Working set 大小。
- Page size。


### [會算] Effective Memory Access Time
- EAT = (1 - p) * memory access time + p * page fault service time。
- 若有 TLB，題目通常另外給 TLB hit ratio 與 TLB access time，要分情況加權。


### [會算] Page Replacement Algorithm
- FIFO：先進先出，可能有 Belady's anomaly。
- OPT：理論最佳，替換最晚再使用的頁面，實務不可知，常作比較基準。
- LRU：替換最久未使用的頁面，符合 locality，但實作成本高。
- LFU：替換使用次數最少者。
- Clock / Second Chance：FIFO 改良，使用 reference bit。


### [必背] Thrashing
- 定義：系統大量時間花在 page fault 與換頁，真正執行時間很少。
- 造成過程：multiprogramming 過高 → 每個 process frame 不足 → page fault 增加 → CPU utilization 下降 → 系統以為 process 不夠又加入更多 process → 更嚴重 thrashing。
- 解法：降低 multiprogramming、增加實體記憶體、working set model、page fault frequency control。

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
