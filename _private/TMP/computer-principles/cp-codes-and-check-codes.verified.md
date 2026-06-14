---
topic_id: cp-codes-and-check-codes
formal_topic_id: cp-codes-and-check-codes
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 數碼、文字碼與檢查碼(Codes and Check Codes)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 數碼、文字碼與檢查碼`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 數碼、文字碼與檢查碼`
- topic id: `cp-codes-and-check-codes`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 數碼與文字碼
- BCD：以 4 bits 表示一個十進位數字，8421 BCD 最常見。
- Gray Code：相鄰碼只有 1 bit 不同，常用於減少轉換錯誤。
- 二進位轉 Gray：最高位不變，其餘位為相鄰二進位位元 XOR。
- Gray 轉二進位：最高位不變，其餘二進位位元為前一二進位位元 XOR 目前 Gray 位元。
- ASCII：常見 7 bits 字元碼，延伸 ASCII 為 8 bits。
- EBCDIC：IBM 系統常見編碼。
- Unicode：統一表示多語言字元；UTF-8 是常見可變長度編碼。

### [會算] 檢查碼
- 同位元檢查（Parity Check）：分奇同位與偶同位，可偵測奇數個 bit 錯誤，但不一定能更正。
- CRC：用多項式除法產生檢查碼，常用於網路與儲存錯誤偵測。
- 漢明碼（Hamming Code）：可偵測與更正部分錯誤，常考檢查位位置與 syndrome。
- 漢明距（Hamming Distance）：兩個碼字不同 bit 的數量。
  - 偵測 d 個錯誤需最小距離 >= d + 1。
  - 更正 t 個錯誤需最小距離 >= 2t + 1。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「數碼、文字碼與檢查碼」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
