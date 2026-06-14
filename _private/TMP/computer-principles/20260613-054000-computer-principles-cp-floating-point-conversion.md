---
topic_id: cp-floating-point-conversion
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 浮點數轉換(Floating-Point Conversion)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 浮點數轉換
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [會算] 傳統表示法
- 掌握正負號、小數點移動、科學記號與基底。


### [會算] IEEE 754
- 單精度 32 bits：Sign 1 bit、Exponent 8 bits、Fraction 23 bits，bias = 127。
- 雙精度 64 bits：Sign 1 bit、Exponent 11 bits、Fraction 52 bits，bias = 1023。
- 一般正規化數值：
  - (-1)^S * 1.F * 2^(E - bias)


### [建議] 建議
- 原文提醒很重要：不要只背轉換規則，要多算題目形成熟悉感。
- 題目常考十進位小數轉二進位小數、正規化、bias exponent、尾數欄位。

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
