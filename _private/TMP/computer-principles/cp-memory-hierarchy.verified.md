---
topic_id: cp-memory-hierarchy
formal_topic_id: cp-memory-hierarchy
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Memory 階層圖(Memory Hierarchy)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Memory 階層圖`
- source labels: [必背], [會畫]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Memory 階層圖`
- topic id: `cp-memory-hierarchy`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會畫]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [會畫] 記憶體階層由快到慢、由貴到便宜、由小到大：

暫存器
→ L1 Cache
→ L2 Cache
→ L3 Cache
→ 主記憶體（Main Memory）
→ SSD / HDD
→ 光碟、磁帶、雲端備份等外部儲存

### [必背] 比較方向
- 越靠近 CPU：速度快、成本高、容量小。
- 越遠離 CPU：速度慢、成本低、容量大。

### [必背] SRAM / DRAM
- Cache 通常使用 SRAM。
- Main Memory 通常使用 DRAM。

### [必背] Locality
- Temporal Locality（時間區域性）：最近使用過的資料或指令很可能很快再被使用。
- Spatial Locality（空間區域性）：使用某位址後，附近位址也可能很快被使用。
- 例子：迴圈反覆使用同一變數屬於時間區域性；陣列連續掃描屬於空間區域性。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Memory 階層圖」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會畫]: 要補畫圖順序、節點或箭頭意義、文字版圖形與常見漏畫處。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
