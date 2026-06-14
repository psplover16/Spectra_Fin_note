---
topic_id: cp-complement-conversion
formal_topic_id: cp-complement-conversion
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 補數轉換(Complement Representation)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 補數轉換`
- source labels: [必背], [會算], [易混淆]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 補數轉換`
- topic id: `cp-complement-conversion`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [會算] 表示法
- 符號大小（Sign-Magnitude）：最高位為符號位，0 正、1 負，其餘為大小。
- 1's complement：負數為正數位元全部反相。
- 2's complement：負數為正數位元反相後加 1。

### [必背] n bits 表示範圍
- Sign-Magnitude：-(2^(n-1)-1) 到 +(2^(n-1)-1)，有 +0 與 -0。
- 1's complement：-(2^(n-1)-1) 到 +(2^(n-1)-1)，有 +0 與 -0。
- 2's complement：-2^(n-1) 到 +(2^(n-1)-1)，只有一個 0。

### [易混淆] 易混淆
- 現代電腦整數多使用 2's complement。
- 2's complement 加減法可直接用二進位加法處理，較方便。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「補數轉換」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [易混淆]: 列出相近概念、混淆原因、辨別關鍵與反例。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
