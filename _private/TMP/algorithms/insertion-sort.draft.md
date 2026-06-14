---
topic_id: insertion-sort
formal_topic_id: algorithms-insertion-sort
subject: algorithms
source_files:
  - _private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 插入排序法(Insertion Sort)

## 來源對應

- source files: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `七、插入排序法 Insertion Sort`
- source labels: [必背], [會寫], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `七、插入排序法 Insertion Sort`
- topic id: `insertion-sort`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會寫], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 插入排序法(Insertion Sort) 的核心流程、前提與國考常見問法。
- 能寫出 Java 遞迴或非遞迴版本，並用註解說明作答思路。
- 能列出最佳、平均、最差時間複雜度與穩定性或不適用原因。

### [必背] 最小背誦句與記憶支架
- 近乎排序資料最佳 O(n)，平均與最差 O(n^2)，穩定。
- 程式碼不要死背，要能說明每個迴圈、遞迴或邊界更新的理由。
- 複雜度答案要分清楚最佳、平均與最差情況。

### [必背] 名詞定義與雙語術語
- 插入排序法(Insertion Sort)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 插入排序法(Insertion Sort) 要先掌握資料如何移動或問題如何縮小，再背 Java 寫法。
- 國考常看你能不能把流程、複雜度與易錯前提連在一起。
- 排序或常見演算法題要能用小資料手算確認流程。

### [會做] 實際例子與操作步驟
題目：如何手算或說明 插入排序法？

1. 左側視為已排序。
2. 取出 key。
3. 將較大元素右移並插入 key。

結果：插入排序法 的流程、Java 寫法與複雜度已對上來源。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| 插入排序法(Insertion Sort) | O(n) | O(n^2) | O(n^2) | Stable | Good for small or nearly sorted data |

### [會寫] Java 作答思路範例
### 插入排序法遞迴版

插入排序法(Insertion Sort) 的遞迴教學版，註解說明作答思路與終止條件。

```java
void insertionSortRecursive(int[] a, int n) { if (n <= 1) return; insertionSortRecursive(a, n - 1); int key = a[n - 1]; int j = n - 2; while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; } a[j + 1] = key; }
```

### 插入排序法非遞迴版

插入排序法(Insertion Sort) 的非遞迴版，註解說明迴圈狀態與更新理由。

```java
void insertionSort(int[] a) { for (int i = 1; i < a.length; i++) { int key = a[i]; int j = i - 1; while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; } a[j + 1] = key; } }
```

### [易混淆] 易錯提醒與辨別線索
- 不要只背程式碼，需能說出每個步驟的目的。
- 不要漏寫複雜度情境，尤其最佳、平均、最差可能不同。
- 排序題要注意穩定性與是否需要額外空間。

### [必背] 專有名詞整理
- 插入排序法(Insertion Sort)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「插入排序法」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會寫]: 要補可書寫模板、程式或答案骨架、註解理由與常見失分點。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
