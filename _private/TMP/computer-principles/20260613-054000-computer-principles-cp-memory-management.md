---
topic_id: cp-memory-management
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Memory Management(Memory Management)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Memory Management
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [會算] 配置策略
- First Fit：找第一個足夠大的空洞。
- Next Fit：從上次搜尋位置繼續找。
- Best Fit：找最小但足夠的空洞，可能產生很多小碎片。
- Worst Fit：找最大空洞，讓剩餘空間仍較大。


### [必背] Fragmentation
- External Fragmentation：總空間足夠，但不連續。
- Internal Fragmentation：分配區塊內部用不到的空間。


### [比較] Paging vs Segmentation
- Paging：固定大小 page/frame，解決外部碎片，可能有內部碎片。
- Segmentation：依邏輯單位分段，符合程式結構，但可能有外部碎片。


### [必背] TLB
- Translation Lookaside Buffer：快取 page table entries，加速 virtual address 到 physical address 的轉換。
- TLB hit 可減少查 page table 的時間。

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
