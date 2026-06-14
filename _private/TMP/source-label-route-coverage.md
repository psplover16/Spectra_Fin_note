# Source Label Route Coverage

generated_at: 2026-06-13 10:52:00 +08:00  
source_definition: `_private/TMP/source-label-definitions.md`  
source_scan_report: `_private/TMP/source-label-scan-report.md`

本文件是 16.1 的 route-level coverage 表，供 16.2 之後建立各 route 追蹤表時引用。它只記錄來源標記覆蓋，不取代後續 `_private/TMP/<route>/待生成主題清單_<timestamp>.md`。

| Route | Approved source files | Valid source labels found | Auxiliary labels found | Excluded non-label candidates | Unknown label status |
| --- | --- | --- | --- | --- | --- |
| /computer-principles | `_private/計算機概論.txt` | [必背], [比較], [會算], [會畫], [補充], [易混淆], [考點], [建議], [原文提醒], [補充建議] | none | non-label syntax/code token: [k + n - 1], [n * k] | none |
| /networking | `_private/網概.txt` | [必背], [比較], [會算], [會畫], [補充], [易混淆], [原文提醒] | none | none | none |
| /database | `_private/資料庫.txt` | [必背], [比較], [會做], [會畫], [會寫], [必練], [補充], [易混淆], [原文提醒] | none | none | none |
| /information-management | `_private/資訊管理.txt` | [必背], [比較], [補充], [原文提醒], [原文考點] | none | none | none |
| /programming | `_private/程式.txt`, `_private/系統分析與設計.txt` | [必背], [比較], [補充], [原文提醒] | none | none | none |
| /algorithms | `_private/資料結構與演算法.txt`, `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` | [必背], [比較], [會算], [會做], [會寫虛擬碼], [補充], [易混淆], [原文提醒] | none | non-label syntax/code token: [0], [1], [5], [1, 2, 3, 4, 5], [1, 2, 4, 5], [1, 3, 5, 7, 9, 11, 13], [1, 4, 2, 5], [1, 4, 5, 2], [1, 5, 4, 2], [5, 1, 4, 2], [5, 4, 2], [5, 4, 3, 2, 1], [9, 11, 13], [i], [j], [j + 1], [left, right], [mid], [minIndex], [n - 1], [right] | none |

## Auxiliary Coverage

| Auxiliary source | Valid labels found | Auxiliary labels found | Excluded non-label candidates |
| --- | --- | --- | --- |
| `_private/discuss.txt`, `_private/propose.md`, `_private/ques2.txt` | [必背], [比較], [會算], [會畫], [補充], [補充建議] | [原文保留] | non-label syntax/code token: [ ], [1, 3, 5, 7, 9] |

## Route Prompt Rule

每個 route 的 topic prompt 只能引用該 route source 實際出現的 valid source labels，以及經主流程確認可用的 auxiliary labels。若後續 route scan 新增任何 unknown label，必須先更新：

1. `_private/TMP/source-label-scan-report.md`
2. `_private/TMP/source-label-definitions.md`
3. 本 coverage 表或該 route 的追蹤表

更新完成並重新驗證後，topic 才能進入 `.verified.md`。
