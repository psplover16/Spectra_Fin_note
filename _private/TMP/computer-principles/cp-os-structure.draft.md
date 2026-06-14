---
topic_id: cp-os-structure
formal_topic_id: cp-os-structure
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# OS 結構(Operating System Structure)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / OS 結構`
- source labels: [必背]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / OS 結構`
- topic id: `cp-os-structure`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 必背
- Command / Shell：使用者與 OS 互動的命令介面。
- System Call：使用者程式向 OS 請求服務的介面，例如檔案、行程、記憶體、I/O。
- Kernel：OS 核心，負責行程、記憶體、檔案系統、I/O、保護與排程。
- Microkernel：將核心功能最小化，把檔案系統、驅動等移到 user space，提高模組化與可靠性，但溝通成本可能較高。
- Virtual Machine：在實體硬體上模擬多個虛擬硬體環境。

### [比較] Kernel vs Microkernel
- Monolithic kernel：功能集中，效能好，但核心龐大。
- Microkernel：核心小，可靠與可維護性較好，但 IPC 成本較高。

### [比較] Virtual Machine 優缺點
- 優點：隔離性、可移植、易於測試、伺服器整併。
- 缺點：額外效能負擔、資源需求高、管理較複雜。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「OS 結構」在考試中通常是在問定義、流程、比較、計算或應用判斷。
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
