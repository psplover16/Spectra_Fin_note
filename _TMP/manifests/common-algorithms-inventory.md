# 常見演算法 Inventory

## Inventory 規則

- 來源檔案: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- 演算法數: 7
- route owner: `/algorithms`
- allowed inventory status: `included`、`deferred`、`blocked`
- 本次狀態結論: 7 included、0 deferred、0 blocked
- 狀態不得留空；每列必須填原因。

## 演算法盤點

| # | algorithm id | 演算法 | source heading | Java 版本 | 複雜度來源摘要 | inventory status | 原因 |
|---|---|---|---|---|---|---|---|
| 1 | `bubble-sort` | 氣泡排序法(Bubble Sort) | 一、氣泡排序法 Bubble Sort | 非遞迴、遞迴教學版 | 最佳 O(n)，平均/最壞 O(n^2)；來源版本有 `swapped` early stop | included | 符合第一批排序 topic，來源含完整 Java、手算流程與複雜度推導；穩定性以 approved baseline 補齊為 Stable |
| 2 | `quick-sort` | 快速排序法(Quick Sort) | 二、快速排序法 Quick Sort | 遞迴、stack 非遞迴版 | 最佳/平均 O(n log n)，最壞 O(n^2)；Lomuto partition 選最右 pivot | included | 符合第一批必收 topic，來源含 pivot/partition 說明、Java 版本與退化提醒；穩定性以 baseline 補齊為 Unstable |
| 3 | `fibonacci-sequence` | Fibonacci 序列(Fibonacci Sequence) | 三、Fibonacci 序列 | 遞迴、非遞迴版 | 遞迴 O(2^n)，非遞迴 O(n) | included | 符合第一批常見演算法，來源明確修正基本條件並提醒遞迴重複計算 |
| 4 | `greatest-common-divisor` | 最大公因數(Greatest Common Divisor) | 四、最大公因數 GCD | 遞迴、非遞迴版 | O(log min(a,b)) | included | 符合第一批常見演算法，來源含歐幾里得演算法、手算例與 Java 版本 |
| 5 | `binary-search` | 二元搜尋法(Binary Search) | 五、二元搜尋法 Binary Search | 遞迴、非遞迴版 | 最佳 O(1)，平均/最壞 O(log n) | included | 符合第一批常見演算法，來源強調已排序前提並排除 Binary Search Tree 混淆 |
| 6 | `selection-sort` | 選擇排序法(Selection Sort) | 六、選擇排序法 Selection Sort | 非遞迴、遞迴教學版 | 最佳/平均/最壞 O(n^2) | included | 符合第一批排序 topic，來源含 Java 版本、核心流程與比較次數推導；穩定性以 baseline 補齊為 Usually unstable |
| 7 | `insertion-sort` | 插入排序法(Insertion Sort) | 七、插入排序法 Insertion Sort | 非遞迴、遞迴練習版 | 最佳 O(n)，平均/最壞 O(n^2) | included | 符合第一批排序 topic，來源含 Java 版本、近乎排序資料說明與複雜度推導；穩定性以 baseline 補齊為 Stable |

## Deferred / Blocked Review

| status | 數量 | 說明 |
|---|---:|---|
| deferred | 0 | 來源列出的七個演算法皆在 Spectra 第一批範圍內 |
| blocked | 0 | 未發現來源缺少必要前提到無法產生草稿；穩定性缺口由 approved sorting baseline 補齊 |

## 重要 verifier 追蹤點

- Bubble Sort: 草稿必須保留 early stop 才能主張最佳 O(n)。
- Quick Sort: 草稿必須說明 pivot 選不好會退化到 O(n^2)，且本來源 Java 採最右 pivot。
- Fibonacci: 草稿必須提醒 naive recursion 會重複計算，基本條件為 `n <= 1`。
- GCD: 草稿必須展示 `gcd(a,b)=gcd(b,a%b)` 與 `b=0` 終止條件。
- Binary Search: 草稿必須明確寫出輸入資料必須已排序，並使用已排序陣列示範。
- Selection Sort: 草稿必須說明每輪都要找最小值，因此最佳仍 O(n^2)。
- Insertion Sort: 草稿必須說明近乎排序資料表現較好，最佳 O(n)。
