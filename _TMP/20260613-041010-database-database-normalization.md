---
topic_id: "database-normalization"
subject: "database"
source_files:
  - "_private/資料庫.txt"
status: "verified"
generated_at: "2026-06-13T04:10:10+08:00"
verified_by: "content-verifier"
---

# 正規化(Normalization)

## 來源摘要

來源「正規化」段落整理 1NF、2NF、3NF、BCNF、4NF，以及正規化優缺點。

## 教學內容

- 正規化(Normalization) 用來降低重複資料與更新異常。
- 1NF 要求欄位不可再分；2NF 處理部分相依；3NF 處理傳遞相依。
- BCNF 要求每個決定因子都必須是 candidate key；4NF 處理多值相依。

## Verifier 結果

| 檢查項 | 結果 | 備註 |
|---|---|---|
| 來源對應 | pass | 對應 `_private/資料庫.txt` lines 68-79 |
| 考試大綱 | pass | 正規形階梯與優缺點皆保留 |
| 記憶重點 | pass | 2NF、3NF、BCNF 差異清楚 |
| 理解重點 | pass | 說明一致性與 join 成本取捨 |

final_status: `verified`
