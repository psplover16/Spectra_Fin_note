---
topic_id: cp-io-and-interrupts
formal_topic_id: cp-io-and-interrupts
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# I/O 與中斷(I/O and Interrupts)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / I/O 與中斷`
- source labels: [必背]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / I/O 與中斷`
- topic id: `cp-io-and-interrupts`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [會畫] Polling / Interrupt / DMA
- Polling：CPU 主動輪詢裝置狀態，簡單但浪費 CPU。
- Interrupt：裝置完成或需要服務時通知 CPU，提高效率。
- DMA：由 DMA controller 直接在 I/O 裝置與記憶體間傳輸大量資料，CPU 只負責設定與完成後處理。

### [必背] 三種中斷
- NMI（Non-Maskable Interrupt）：不可遮蔽中斷，常用於嚴重硬體錯誤。
- Interrupt：一般中斷，可分外部中斷與內部中斷。
- Trap：由程式執行造成的同步中斷，例如 system call、除以零、breakpoint。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「I/O 與中斷」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
