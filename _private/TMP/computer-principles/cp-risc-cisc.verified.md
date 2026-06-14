---
topic_id: cp-risc-cisc
formal_topic_id: cp-risc-cisc
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# RISC 與 CISC(RISC and CISC)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / RISC 與 CISC`
- source labels: [必背], [比較]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / RISC 與 CISC`
- topic id: `cp-risc-cisc`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

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

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「RISC 與 CISC」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
