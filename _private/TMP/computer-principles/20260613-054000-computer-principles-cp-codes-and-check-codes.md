---
topic_id: cp-codes-and-check-codes
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 數碼、文字碼與檢查碼(Codes and Check Codes)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 數碼、文字碼與檢查碼
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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
