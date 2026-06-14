# 國考常見演算法來源閱讀紀錄

## 閱讀狀態

- 來源檔案: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- 讀取範圍: 完整閱讀
- Markdown heading 數: 51
- 演算法數: 7
- route owner: `/algorithms`
- subject key: `algorithms`
- 來源邊界: 本紀錄只使用指定來源與 Spectra proposal/design/spec，不讀取受限私人筆記或第一批排除 PDF。

## Top-Level 內容結構

| source section | 內容摘要 | 盤點狀態 |
|---|---|---|
| 文件標題 | 國考常見演算法 Java 版本與時間複雜度驗證筆記 | completed |
| 重要修正與使用原則 | 修正 Binary Search/BST 混淆、二元搜尋排序前提、Fibonacci 基本條件與 Big O 記法 | completed |
| 完整 Java 程式碼 | `AlgorithmExamJava` class，含七個演算法的遞迴與非遞迴版本、測試 main | completed |
| 一、氣泡排序法 Bubble Sort | 名詞解釋、核心想法、最壞/平均/最佳複雜度推導 | completed |
| 二、快速排序法 Quick Sort | 名詞解釋、Lomuto partition、平均/最佳與最壞複雜度推導 | completed |
| 三、Fibonacci 序列 | 定義、遞迴拆解、迭代保存前兩項、複雜度推導 | completed |
| 四、最大公因數 GCD | Greatest Common Divisor、歐幾里得演算法、手算例、O(log min(a,b)) | completed |
| 五、二元搜尋法 Binary Search | 已排序陣列前提、每次砍半、最佳/平均/最壞複雜度 | completed |
| 六、選擇排序法 Selection Sort | 每輪選最小，三種情況皆 O(n^2) | completed |
| 七、插入排序法 Insertion Sort | 插入已排序區，最佳 O(n)，平均/最壞 O(n^2) | completed |
| 八、總整理表 | 七個演算法的遞迴/非遞迴時間與重要備註 | completed |
| 九、空間複雜度補充 | 遞迴堆疊與非遞迴變數/stack 空間 | completed |
| 十、考試速記 | 國考可背誦的一行式摘要 | completed |
| 十一、產出前檢查紀錄 | Java 語法、結果、時間複雜度檢查均通過的來源紀錄 | completed |
| 十二、重要提醒 | Quick pivot 退化、Fibonacci 遞迴效率、Binary Search 排序前提、遞迴堆疊成本 | completed |

## 演算法逐項閱讀紀錄

| # | 演算法 | source heading | Java 版本 | 時間複雜度 | 空間複雜度補充 | 重要來源狀態 |
|---|---|---|---|---|---|---|
| 1 | 氣泡排序法(Bubble Sort) | 一、氣泡排序法 Bubble Sort | 非遞迴、遞迴 | 最佳 O(n)，平均/最壞 O(n^2) | 遞迴 O(n)，非遞迴 O(1) | included source candidate |
| 2 | 快速排序法(Quick Sort) | 二、快速排序法 Quick Sort | 遞迴、stack 非遞迴 | 最佳/平均 O(n log n)，最壞 O(n^2) | 平均 O(log n)，最壞 O(n) | included source candidate |
| 3 | Fibonacci 序列(Fibonacci Sequence) | 三、Fibonacci 序列 | 遞迴、非遞迴 | 遞迴 O(2^n)，非遞迴 O(n) | 遞迴 O(n)，非遞迴 O(1) | included source candidate |
| 4 | 最大公因數(Greatest Common Divisor) | 四、最大公因數 GCD | 遞迴、非遞迴 | O(log min(a,b)) | 遞迴 O(log min(a,b))，非遞迴 O(1) | included source candidate |
| 5 | 二元搜尋法(Binary Search) | 五、二元搜尋法 Binary Search | 遞迴、非遞迴 | 最佳 O(1)，平均/最壞 O(log n) | 遞迴 O(log n)，非遞迴 O(1) | included source candidate |
| 6 | 選擇排序法(Selection Sort) | 六、選擇排序法 Selection Sort | 非遞迴、遞迴 | O(n^2) | 遞迴 O(n)，非遞迴 O(1) | included source candidate |
| 7 | 插入排序法(Insertion Sort) | 七、插入排序法 Insertion Sort | 非遞迴、遞迴 | 最佳 O(n)，平均/最壞 O(n^2) | 遞迴 O(n)，非遞迴 O(1) | included source candidate |

## 關鍵驗證點

- Binary Search 是在已排序陣列中砍半搜尋，不是 Binary Search Tree、AVL 或 Red-Black Tree。
- Binary Search 內容必須明確標示資料已排序，範例也必須使用已排序陣列。
- Fibonacci 基本條件應為 `if (n <= 1) return n;`，不得誤寫成 `n >= 1`。
- Bubble Sort 來源版本含 `swapped` early stop，因此最佳情況為 O(n)；若題目版本沒有 early stop，需提醒最佳可能仍是 O(n^2)。
- Quick Sort 來源版本使用最右邊元素當 pivot 的 Lomuto partition，已排序資料容易退化到 O(n^2)。
- GCD 使用歐幾里得演算法 `gcd(a,b)=gcd(b,a%b)`，直到 `b=0`。
- 遞迴版本通常較直覺，但需標示呼叫堆疊空間成本。

## 與設計基準的差異提醒

- 本來源完整列出 Bubble、Quick、Fibonacci、GCD、Binary Search、Selection、Insertion 七個演算法。
- Merge Sort、Heap Sort、Shell Sort 未在本來源提供 Java code，但已在 `_private/資料結構與演算法.txt` 與 Spectra approved sorting baseline 中列為排序基準，後續排序 topic 仍需建立。
- 本來源的總整理表偏重時間與空間複雜度，穩定性需以 approved sorting baseline 補齊。
