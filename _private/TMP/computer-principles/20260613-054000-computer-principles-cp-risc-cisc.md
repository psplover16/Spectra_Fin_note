---
topic_id: cp-risc-cisc
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# RISC 與 CISC(RISC and CISC)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / RISC 與 CISC
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [比較] RISC vs CISC

項目 | RISC | CISC
--- | --- | ---
全名 | Reduced Instruction Set Computer | Complex Instruction Set Computer
指令數 | 少而精簡 | 多而複雜
定址模式 | 較少 | 較多
指令長度 | 多為固定長度 | 常為可變長度
執行週期 | 多數指令接近固定、較短 | 指令可能需多個週期
暫存器數量 | 通常較多 | 通常較少
記憶體存取 | Load/Store 架構較常見 | 指令可直接操作記憶體較常見
編譯器需求 | 較需要強力 compiler 做最佳化 | 硬體指令較複雜，compiler 壓力相對不同
翻譯出的指令數 | 同一高階語言動作可能較多 | 同一動作可能較少
Pipeline | 較適合 | 較不易，但現代 CISC 會轉成微指令改善
代表架構 | ARM、MIPS、RISC-V、SPARC | x86、VAX |


### [考點] 不要把 RISC 簡化成「一定比較快」。效能取決於 ISA、微架構、編譯器、快取與工作負載。

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
