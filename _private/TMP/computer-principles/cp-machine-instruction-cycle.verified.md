---
topic_id: cp-machine-instruction-cycle
formal_topic_id: cp-machine-instruction-cycle
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 機器指令與指令週期(Machine Instruction and Instruction Cycle)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 機器指令與指令週期`
- source labels: [必背]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 機器指令與指令週期`
- topic id: `cp-machine-instruction-cycle`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 機器指令
- 定義：CPU 可直接解讀與執行的二進位指令。
- 常見組成：操作碼（Opcode）加上運算元（Operand）或位址欄位。

### [必背] 機器指令週期常見 5 階段
1. Fetch：取指令，通常由 PC 指向下一個指令位址。
2. Decode：解碼，判斷操作碼與定址模式。
3. Operand Fetch / Address Calculation：取得運算元或計算有效位址。
4. Execute：執行運算、跳躍、比較或 I/O。
5. Write Back / Store：寫回結果，並檢查是否有中斷。

### [補充] 不同教材階段名稱可能不同，但選擇題重點通常是「取指令、解碼、取運算元、執行、寫回」。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「機器指令與指令週期」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
