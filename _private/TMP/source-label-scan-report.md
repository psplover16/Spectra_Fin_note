# Source Label Scan Report

generated_at: 2026-06-13 10:52:00 +08:00  
change: ingest-professional-subject-content  
task: 16.1 Source label discovery is exhaustive before route drafting

## Scan Scope

### Approved route source files

- `_private/計算機概論.txt`
- `_private/網概.txt`
- `_private/資料庫.txt`
- `_private/資訊管理.txt`
- `_private/程式.txt`
- `_private/系統分析與設計.txt`
- `_private/資料結構與演算法.txt`
- `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`

### Auxiliary files scanned for this round

- `_private/discuss.txt`
- `_private/propose.md`
- `_private/ques2.txt`

### Excluded by project and change boundary

- `_private/筆記.md`
- `_private/_private_notes/筆記.txt`
- `_private/_private_notes/**/done/**`
- `_private/_private_fileAssets/**/done/**`
- `_private/程式語言_all.pdf`

## Scan Method

PowerShell built an explicit allowlist of the files above and scanned each line with:

```text
\[[^\]\r\n]{1,40}\]
```

Each bracket candidate was classified as `valid source label`, `auxiliary label`, `non-label syntax/code token`, or `unknown label`.

## Summary

- Valid source labels: 15
- Auxiliary labels: 1
- Non-label syntax/code token candidates: 25
- Unknown source-like label count: 0

## Valid Source Labels

| Candidate | Count | Classification | Source files |
| --- | ---: | --- | --- |
| [必背] | 112 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/資訊管理.txt`, `_private/程式.txt`, `_private/系統分析與設計.txt`, `_private/資料結構與演算法.txt`, `_private/ques2.txt` |
| [比較] | 63 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/資訊管理.txt`, `_private/程式.txt`, `_private/系統分析與設計.txt`, `_private/資料結構與演算法.txt`, `_private/ques2.txt` |
| [會算] | 24 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料結構與演算法.txt`, `_private/ques2.txt` |
| [補充] | 18 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/資訊管理.txt`, `_private/程式.txt`, `_private/系統分析與設計.txt`, `_private/資料結構與演算法.txt`, `_private/ques2.txt` |
| [會畫] | 10 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/ques2.txt` |
| [原文提醒] | 8 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/資訊管理.txt`, `_private/程式.txt`, `_private/系統分析與設計.txt`, `_private/資料結構與演算法.txt` |
| [易混淆] | 6 | valid source label | `_private/計算機概論.txt`, `_private/網概.txt`, `_private/資料庫.txt`, `_private/資料結構與演算法.txt` |
| [會做] | 5 | valid source label | `_private/資料庫.txt`, `_private/資料結構與演算法.txt` |
| [原文考點] | 2 | valid source label | `_private/資訊管理.txt` |
| [補充建議] | 2 | valid source label | `_private/計算機概論.txt`, `_private/ques2.txt` |
| [必練] | 1 | valid source label | `_private/資料庫.txt` |
| [考點] | 1 | valid source label | `_private/計算機概論.txt` |
| [建議] | 1 | valid source label | `_private/計算機概論.txt` |
| [會寫] | 1 | valid source label | `_private/資料庫.txt` |
| [會寫虛擬碼] | 1 | valid source label | `_private/資料結構與演算法.txt` |

## Auxiliary Labels

| Candidate | Count | Classification | Source files | Rule |
| --- | ---: | --- | --- | --- |
| [原文保留] | 1 | auxiliary label | `_private/ques2.txt` | Keep source intent, but do not treat as formal route source label unless a route source or user decision promotes it. |

## Non-label Syntax/code Token Candidates

| Candidate | Count | Classification | Evidence |
| --- | ---: | --- | --- |
| [ ] | 12 | non-label syntax/code token | Markdown task checkbox in `_private/propose.md` |
| [0] | 1 | non-label syntax/code token | Array/index example in common algorithms source |
| [1] | 1 | non-label syntax/code token | Array/index example in common algorithms source |
| [5] | 2 | non-label syntax/code token | Array example in common algorithms source |
| [1, 2, 3, 4, 5] | 2 | non-label syntax/code token | Array example in common algorithms source |
| [1, 2, 4, 5] | 2 | non-label syntax/code token | Array example in common algorithms source |
| [1, 3, 5, 7, 9, 11, 13] | 1 | non-label syntax/code token | Array example in common algorithms source |
| [1, 3, 5, 7, 9] | 1 | non-label syntax/code token | Array example in `_private/propose.md` |
| [1, 4, 2, 5] | 1 | non-label syntax/code token | Array example in common algorithms source |
| [1, 4, 5, 2] | 2 | non-label syntax/code token | Array example in common algorithms source |
| [1, 5, 4, 2] | 3 | non-label syntax/code token | Array example in common algorithms source |
| [5, 1, 4, 2] | 3 | non-label syntax/code token | Array example in common algorithms source |
| [5, 4, 2] | 1 | non-label syntax/code token | Array example in common algorithms source |
| [5, 4, 3, 2, 1] | 2 | non-label syntax/code token | Array example in common algorithms source |
| [9, 11, 13] | 1 | non-label syntax/code token | Array example in common algorithms source |
| [i] | 7 | non-label syntax/code token | Code index in algorithm sources |
| [j] | 13 | non-label syntax/code token | Code index in algorithm sources |
| [j + 1] | 6 | non-label syntax/code token | Code index in common algorithms source |
| [k + n - 1] | 1 | non-label syntax/code token | Formula/index notation in computer-principles source |
| [left, right] | 1 | non-label syntax/code token | Range notation in common algorithms source |
| [mid] | 4 | non-label syntax/code token | Code index in common algorithms source |
| [minIndex] | 2 | non-label syntax/code token | Code variable index in common algorithms source |
| [n - 1] | 2 | non-label syntax/code token | Code/index bound in common algorithms source |
| [n * k] | 1 | non-label syntax/code token | Formula notation in computer-principles source |
| [right] | 1 | non-label syntax/code token | Code index in common algorithms source |

## Unknown Review

Unknown source-like label count: 0

No source-like bracket candidate remained undefined after classification. Future scans must keep this count at `0`; otherwise the affected route topic remains `draft` or `blocked` until `_private/TMP/source-label-definitions.md` is updated.

## Content Review Result

- All discovered valid source labels are defined in `_private/TMP/source-label-definitions.md`.
- `[原文保留]` is defined as an auxiliary label and cannot enter formal route prompts without source-role review.
- `[i]`, `[mid]`, `[1, 2, 3, 4, 5]`, `[ ]`, and related array/index/task tokens are classified as `non-label syntax/code token`.
- `[P]` is treated as a task marker by rule and must never be imported as a teaching label.
- Result: pass.
