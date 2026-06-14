---
topic_id: cp-registers
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Register（暫存器）(Register)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / Register（暫存器）
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 必背
- Program Counter（PC）：存放下一個要執行指令的位址。
- Instruction Register（IR）：存放目前正在解碼或執行的指令。
- Base Register：存放程式可用記憶體區段的起始位址，常用於記憶體保護與重定位。
- Limit Register：存放可用區段大小或界限，用於檢查是否越界。
- Flag Register / Status Register：記錄運算狀態，例如 Zero、Carry、Overflow、Sign、Interrupt Enable。


### [補充] 補充
- MAR（Memory Address Register）：存放要存取的記憶體位址。
- MDR / MBR（Memory Data/Buffer Register）：存放從記憶體讀出或要寫入記憶體的資料。

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
