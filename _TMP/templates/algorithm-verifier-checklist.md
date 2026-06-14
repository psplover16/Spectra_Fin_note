# Algorithm Verifier Checklist

## 使用規則

- 適用範圍: `/algorithms` 的排序、搜尋、遞迴、資料結構與演算法 topic 草稿。
- 通過條件: 所有必檢項都為 pass，且無未解決的 Critical/Blocking issue。
- 可設定狀態: `verified` 或 `blocked`。
- 禁止行為: 有複雜度、穩定性、Java 語意、來源對應、專有名詞或新手可讀性問題時，不得標為 `verified`。

## 必檢項

| # | 檢查項 | pass 條件 | 結果 | 備註 |
|---|---|---|---|---|
| 1 | 來源對應 | 每段核心內容可追到指定 source file 與 source section | pending |  |
| 2 | route owner | topic 明確屬於 `/algorithms`，未被歸到 `/database` | pending |  |
| 3 | 國考重點 | 有清楚列出必背、會算或會手算內容 | pending |  |
| 4 | 國考速記 | 有短句整理，且不取代完整理解說明 | pending |  |
| 5 | 名詞解釋 | 首次出現使用 `中文(English Term)` 並有新手解釋 | pending |  |
| 6 | 核心想法 | 說明演算法目的與每一步存在的理由 | pending |  |
| 7 | 手算步驟 | 使用小型範例逐步推導，不跳步 | pending |  |
| 8 | Java 遞迴版 | 若適用，終止條件、縮小問題、回傳值正確 | pending |  |
| 9 | Java 非遞迴版 | 迴圈邊界、狀態變數、回傳值正確 | pending |  |
| 10 | Java 註解 | 繁體中文註解說明作答思路與考官可見概念 | pending |  |
| 11 | 時間複雜度 | Best/Average/Worst 或演算法情境複雜度正確 | pending |  |
| 12 | 空間複雜度 | 遞迴堆疊、額外陣列或 stack 成本說明正確 | pending |  |
| 13 | 穩定性 | 排序法穩定性符合 baseline；非排序標示 N/A | pending |  |
| 14 | 易錯提醒 | 至少列出一項來源或國考常見錯誤 | pending |  |
| 15 | 新手可讀性 | 先解釋前置名詞，再使用抽象推論 | pending |  |
| 16 | 來源註記 | 保留 sourceFiles、sourceSummary、verifierSummary 或待回填欄位 | pending |  |

## 演算法特別檢查

| topic | 必須通過的特殊檢查 |
|---|---|
| 氣泡排序法(Bubble Sort) | 若主張最佳 O(n)，必須有 `swapped` 或等效 early stop；穩定性為 Stable |
| 選擇排序法(Selection Sort) | 最佳/平均/最壞皆 O(n^2)；穩定性為 Usually unstable；需說明交換次數少 |
| 插入排序法(Insertion Sort) | 最佳 O(n)，平均/最壞 O(n^2)；穩定性為 Stable；需說明近乎排序資料 |
| 合併排序法(Merge Sort) | 三種情況皆 O(n log n)；穩定性為 Stable；需說明額外空間 |
| 快速排序法(Quick Sort) | 平均 O(n log n)、最壞 O(n^2)；不穩定；需說明 pivot 退化 |
| 堆積排序法(Heap Sort) | 三種情況皆 O(n log n)；不穩定；需說明原地排序與 heapify |
| 希爾排序法(Shell Sort) | gap-dependent，最差可到 O(n^2)；不穩定；第一批不得把遞迴版當主範例 |
| Fibonacci 序列(Fibonacci Sequence) | 基本條件為 `n <= 1`；naive recursion O(2^n) 並提醒重複計算；迭代版 O(n) |
| 最大公因數(Greatest Common Divisor) | 使用歐幾里得演算法；終止條件 `b == 0`；複雜度 O(log min(a,b)) |
| 二元搜尋法(Binary Search) | 必須標示輸入陣列已排序；mid 計算需避免溢位；最佳 O(1)，平均/最壞 O(log n) |

## Blocking Issue 定義

- 複雜度或穩定性與 `_TMP/templates/sorting-complexity-baseline.md` 不一致。
- Java 程式碼語意錯誤、邊界條件錯誤或註解誤導。
- Binary Search 未標示已排序前提。
- Fibonacci 基本條件錯誤。
- 將 Binary Search 誤寫成 Binary Search Tree。
- route owner 不是 `/algorithms`。
- 來源註記缺失，導致無法追到指定來源。
- 專有名詞首次出現未提供中英對照且影響理解。

## Verifier 結果格式

```yaml
verifier:
  identity: "<verifier-id>"
  checked_at: "<YYYY-MM-DDTHH:mm:ss+08:00>"
  final_status: "verified | blocked"
  issue_list:
    - severity: "blocking | warning | note"
      item: "<檢查項>"
      detail: "<問題或通過摘要>"
  fix_summary:
    - "<若 verifier 直接修正草稿，列出修正摘要>"
```
