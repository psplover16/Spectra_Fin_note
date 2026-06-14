# Algorithms Subagent Task Breakdown

## 任務邊界

- route owner: `/algorithms`
- 副代理不得直接修改正式 app data、測試或主流程檔案。
- 生成副代理一次只處理一個 topic，輸出一份 `_TMP/<timestamp>-algorithms-<topic>.md` 草稿後結束。
- verifier 副代理一次只驗證一份草稿，可修正同一份 `_TMP` 草稿，並留下 verifier 結果。
- 整合檢查副代理只比對多 topic 的術語、複雜度、程式碼風格與重複內容，不直接匯入正式資料。

## 來源與模板

| 類型 | 路徑 | 用途 |
|---|---|---|
| reading log | `_TMP/source-logs/algorithms-reading-log.md` | 資料結構與演算法 heading 與 topic route owner |
| reading log | `_TMP/source-logs/common-algorithms-reading-log.md` | 常見演算法 Java 版本、複雜度與特殊提醒 |
| manifest | `_TMP/manifests/algorithms-manifest.md` | 11 個來源 heading topic |
| inventory | `_TMP/manifests/common-algorithms-inventory.md` | 7 個常見演算法 included/deferred/blocked 狀態 |
| template | `_TMP/templates/algorithm-topic-template.md` | 演算法 topic 草稿固定模板 |
| baseline | `_TMP/templates/sorting-complexity-baseline.md` | 七大排序複雜度與穩定性基準 |
| checklist | `_TMP/templates/algorithm-verifier-checklist.md` | verifier 必檢項與 blocking issue 定義 |

## Sorting Topic 生成與驗證任務

| task id | topic | source basis | generator output | verifier focus | status |
|---|---|---|---|---|---|
| `ALG-GEN-SORT-001` | 氣泡排序法(Bubble Sort) | common inventory + sorting baseline | `_TMP/<timestamp>-algorithms-bubble-sort.md` | early stop、O(n)/O(n^2)/O(n^2)、Stable、遞迴教學定位 | imported |
| `ALG-GEN-SORT-002` | 選擇排序法(Selection Sort) | common inventory + sorting baseline | `_TMP/<timestamp>-algorithms-selection-sort.md` | 三種情況 O(n^2)、Usually unstable、交換次數少 | imported |
| `ALG-GEN-SORT-003` | 插入排序法(Insertion Sort) | common inventory + sorting baseline | `_TMP/<timestamp>-algorithms-insertion-sort.md` | 最佳 O(n)、Stable、近乎排序資料 | imported |
| `ALG-GEN-SORT-004` | 合併排序法(Merge Sort) | algorithms manifest + sorting baseline | `_TMP/<timestamp>-algorithms-merge-sort.md` | O(n log n) 三種情況、Stable、額外空間 | imported |
| `ALG-GEN-SORT-005` | 快速排序法(Quick Sort) | common inventory + sorting baseline | `_TMP/<timestamp>-algorithms-quick-sort.md` | pivot、partition、O(n^2) 退化、Unstable | imported |
| `ALG-GEN-SORT-006` | 堆積排序法(Heap Sort) | algorithms manifest + sorting baseline | `_TMP/<timestamp>-algorithms-heap-sort.md` | heapify、原地排序、Unstable、O(n log n) | imported |
| `ALG-GEN-SORT-007` | 希爾排序法(Shell Sort) | algorithms manifest + sorting baseline | `_TMP/<timestamp>-algorithms-shell-sort.md` | gap-dependent、不穩定、遞迴非國考主流 | imported |

## Common Algorithm 生成與驗證任務

| task id | topic | source basis | generator output | verifier focus | status |
|---|---|---|---|---|---|
| `ALG-GEN-COMMON-001` | Fibonacci 序列(Fibonacci Sequence) | common inventory | `_TMP/<timestamp>-algorithms-fibonacci-sequence.md` | `n <= 1` 基本條件、遞迴重複計算、迭代 O(n) | imported |
| `ALG-GEN-COMMON-002` | 最大公因數(Greatest Common Divisor) | common inventory | `_TMP/<timestamp>-algorithms-greatest-common-divisor.md` | 歐幾里得演算法、`b == 0` 終止條件、O(log min(a,b)) | imported |
| `ALG-GEN-COMMON-003` | 二元搜尋法(Binary Search) | common inventory | `_TMP/<timestamp>-algorithms-binary-search.md` | 已排序前提、mid 計算、遞迴與迭代邊界 | imported |

## Source-Heading Topic 後續任務

| task group | topic count | 來源 | 產出要求 |
|---|---:|---|---|
| `ALG-GEN-MANIFEST-*` | 11 | `_TMP/manifests/algorithms-manifest.md` | 每個 source heading 建立一份草稿，至少包含國考重點、國考速記、名詞解釋、核心想法、手算或例子、來源註記 |
| `ALG-VERIFY-MANIFEST-*` | 11 | 對應草稿 | 每份草稿用 `_TMP/templates/algorithm-verifier-checklist.md` 驗證，結果只能是 `verified` 或 `blocked` |
| `ALG-IMPORT-MANIFEST-*` | 11 | verified 草稿 | 由主代理收口後才可匯入正式 `/algorithms` data，draft/blocked 不得匯入 |

## Integration Review Subagent Task

### `ALG-INTEGRATION-001` 演算法整合檢查

**允許讀取**

- `_TMP/source-logs/algorithms-reading-log.md`
- `_TMP/source-logs/common-algorithms-reading-log.md`
- `_TMP/manifests/algorithms-manifest.md`
- `_TMP/manifests/common-algorithms-inventory.md`
- `_TMP/templates/algorithm-topic-template.md`
- `_TMP/templates/sorting-complexity-baseline.md`
- `_TMP/templates/algorithm-verifier-checklist.md`
- 已產出的 algorithms verified drafts

**不得修改**

- `src/**`
- `tests/**`
- `openspec/**`
- `_private/**`

**檢查項**

- 術語是否維持 `中文(English Term)` 首次出現格式。
- 排序複雜度與穩定性是否逐欄符合 baseline。
- Java code 風格是否一致，且註解說明作答思路。
- Bubble/Quick/Fibonacci/GCD/Binary Search 的特殊 verifier 風險是否都已處理。
- 不同 topic 是否重複、矛盾或互相覆蓋。
- 所有 topic route owner 是否仍為 `/algorithms`。

**輸出**

- `_TMP/reports/algorithms-integration-review-<timestamp>.md`
- 報告需列出 checked topics、issue list、fix recommendation、final integration status。

**驗收**

- 若有任何 blocking issue，final integration status 為 `blocked`。
- 全部通過才可標為 `verified-for-import-review`，但仍不得直接匯入正式 app data。

