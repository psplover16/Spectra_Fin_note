---
topic_id: cp-io-and-interrupts
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# I/O 與中斷(I/O and Interrupts)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / I/O 與中斷
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [會畫] Polling / Interrupt / DMA
- Polling：CPU 主動輪詢裝置狀態，簡單但浪費 CPU。
- Interrupt：裝置完成或需要服務時通知 CPU，提高效率。
- DMA：由 DMA controller 直接在 I/O 裝置與記憶體間傳輸大量資料，CPU 只負責設定與完成後處理。


### [必背] 三種中斷
- NMI（Non-Maskable Interrupt）：不可遮蔽中斷，常用於嚴重硬體錯誤。
- Interrupt：一般中斷，可分外部中斷與內部中斷。
- Trap：由程式執行造成的同步中斷，例如 system call、除以零、breakpoint。

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
