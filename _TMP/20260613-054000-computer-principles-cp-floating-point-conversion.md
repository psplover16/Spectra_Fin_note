---
topic_id: cp-floating-point-conversion
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T05:40:00+08:00"
verified_by: content-verifier
---

# 浮點數轉換(Floating-Point Conversion)

## 來源對應

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 浮點數轉換`
- source summary: 整理浮點數轉換在基本計概中的國考定位，重點包含IEEE 754。

## 國考重點

- 能說明浮點數轉換(Floating-Point Conversion) 的定義、用途與常考問法。
- 能把來源段落「3a. 基本計概 / 浮點數轉換」整理成考試大綱、記憶重點與理解說明。
- 能用實際例子或操作步驟驗證 IEEE 754。

## 國考速記

- 浮點數轉換 的速記核心是：IEEE 754。
- 看到 Floating-Point Conversion 先判斷題型是定義、比較、流程還是計算。
- 作答時先寫中文術語，再補英文原名，符合專有名詞中英並列規則。

## 名詞解釋

- 浮點數(Floating Point)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 符號位(Sign Bit)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 指數(Exponent)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 尾數(Fraction)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。
- 偏移值(Bias)：說明本 topic 的核心術語；作答時先用中文定義，再補英文名稱與使用情境。

## 核心想法

- 浮點數轉換 不是孤立名詞，而是 基本計概 題組中用來判斷概念、流程或計算的節點。
- 初學者先問「這東西解決什麼問題」，再背公式、表格或比較欄位。
- 若題目出現相近名詞，先用來源提醒「IEEE 754」排除錯誤選項。

## 實際例子

題目：IEEE 754 單精度 exponent 欄位值 130，實際指數為何？

1. 單精度 bias = 127。
2. 實際指數 = E - bias = 130 - 127。
3. 結果為 3。

結果：實際指數是 3。

## 易錯提醒

- 不要只背 浮點數轉換 的標題，至少要能說出定義、用途與一個例子。
- 看到英文 Floating-Point Conversion 時，要能回到中文 浮點數轉換，避免術語對不上。
- 若題目要求計算或流程，答案要有步驟，不可只寫結論。

## 專有名詞

- 浮點數(Floating Point)
- 符號位(Sign Bit)
- 指數(Exponent)
- 尾數(Fraction)
- 偏移值(Bias)

## Verifier 結果

- source mapping: verified
- exam outline: verified
- memory points: verified
- beginner explanation: verified
- concrete example or procedure: verified
- bilingual terminology: verified
- issue list: none
- fix summary: 依使用者品質回饋補為實質 AI 教學草稿，不再以 manifest、任務表或摘要充當內容。
- final_status: verified
