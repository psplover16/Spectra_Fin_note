# Sorting Complexity Baseline

## 基準來源

- Spectra design: 「演算法內容使用固定模板與基準表」
- Spectra spec: `algorithm-example-content` 的 `Approved sorting baseline`
- Source check: `_private/資料結構與演算法.txt` 的七大排序比較表
- 使用範圍: `/algorithms` sorting topics、verifier checklist、後續正式 app data 匯入審查

## Approved Baseline

| 中文名稱 | Algorithm | Best | Average | Worst | Stability | Notes |
|---|---|---|---|---|---|---|
| 氣泡排序法 | Bubble Sort | O(n) | O(n^2) | O(n^2) | Stable | Early stop allows O(n) best case |
| 選擇排序法 | Selection Sort | O(n^2) | O(n^2) | O(n^2) | Usually unstable | Low swap count |
| 插入排序法 | Insertion Sort | O(n) | O(n^2) | O(n^2) | Stable | Good for small or nearly sorted data |
| 合併排序法 | Merge Sort | O(n log n) | O(n log n) | O(n log n) | Stable | Requires extra space |
| 快速排序法 | Quick Sort | O(n log n) | O(n log n) | O(n^2) | Unstable | Poor pivot choice degenerates |
| 堆積排序法 | Heap Sort | O(n log n) | O(n log n) | O(n log n) | Unstable | In-place sorting with heap |
| 希爾排序法 | Shell Sort | gap-dependent | gap-dependent | up to O(n^2) | Unstable | Improved insertion sort |

## 中文呈現基準

| 排序法 | 最好 | 平均 | 最差 | 穩定性 | 備註 |
|---|---|---|---|---|---|
| 氣泡排序法(Bubble Sort) | O(n) | O(n^2) | O(n^2) | 穩定 | 有 early stop 時最佳可達 O(n) |
| 選擇排序法(Selection Sort) | O(n^2) | O(n^2) | O(n^2) | 通常不穩定 | 交換次數少 |
| 插入排序法(Insertion Sort) | O(n) | O(n^2) | O(n^2) | 穩定 | 適合小資料或近乎排序資料 |
| 合併排序法(Merge Sort) | O(n log n) | O(n log n) | O(n log n) | 穩定 | 需要額外空間 |
| 快速排序法(Quick Sort) | O(n log n) | O(n log n) | O(n^2) | 不穩定 | pivot 選不好會退化 |
| 堆積排序法(Heap Sort) | O(n log n) | O(n log n) | O(n log n) | 不穩定 | 原地排序，利用 heap |
| 希爾排序法(Shell Sort) | 視 gap 而定 | 視 gap 而定 | 可到 O(n^2) | 不穩定 | 插入排序改良 |

## Verifier 使用規則

- 排序 topic 的 complexity table 必須逐欄符合本檔。
- Bubble Sort 若沒有 early stop，不得主張最佳 O(n)；若要維持本 baseline，Java 或說明必須包含 early stop。
- Shell Sort 第一批只放標準非遞迴主版本；不得把遞迴改寫當作國考主流。
- 若來源草稿、Java 註解或正式 app data 與本表衝突，verifier 必須標為 `blocked`，直到修正。
