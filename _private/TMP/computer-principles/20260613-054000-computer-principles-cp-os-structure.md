---
topic_id: cp-os-structure
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# OS 結構(Operating System Structure)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / OS 結構
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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
