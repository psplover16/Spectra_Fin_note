---
topic_id: cp-hardware-protection
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 硬體保護(Hardware Protection)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / 硬體保護
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 必背
- I/O Protection：I/O 指令設為 privileged instruction，只能在 kernel mode 執行。
- Memory Protection：使用 base/limit register、page table 或 segment table 防止越界。
- CPU Protection：使用 timer interrupt 防止單一程式霸占 CPU。


### [補充] Dual Mode
- User Mode：一般程式執行模式，權限較低。
- Kernel Mode：OS 核心執行模式，可執行特權指令。

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
