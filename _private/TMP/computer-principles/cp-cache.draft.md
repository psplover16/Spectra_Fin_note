---
topic_id: cp-cache
formal_topic_id: cp-cache
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# Cache(Cache Memory)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Cache`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Cache`
- topic id: `cp-cache`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] L1 / L2 / L3
- L1：最靠近 CPU，最快、容量最小。
- L2：速度與容量居中。
- L3：通常多核心共享，容量較大但較慢。

### [必背] Hit Ratio
- Hit：資料在 cache 中找到。
- Miss：資料不在 cache 中，需到下一層記憶體取。
- Hit Ratio = Hit 次數 / 總存取次數。
- Miss Rate = 1 - Hit Ratio。

### [會算] AMAT
- Average Memory Access Time = Hit Time + Miss Rate * Miss Penalty。

### [比較] Write Through vs Write Back
- Write Through：寫 cache 時同步寫回主記憶體，資料一致性好，但寫入較慢。
- Write Back：先寫 cache，等區塊被替換時才寫回主記憶體，效能較好，但控制較複雜。

### [補充] 常見搭配
- Write Allocate：write miss 時把區塊載入 cache 再寫。
- No Write Allocate：write miss 時直接寫到下一層，不載入 cache。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Cache」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
