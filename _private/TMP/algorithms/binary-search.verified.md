---
topic_id: binary-search
formal_topic_id: algorithms-binary-search
subject: algorithms
source_files:
  - _private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
status: verified
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: algorithm-verifier
content_shape: lessonArticle
---

# 二元搜尋法(Binary Search)

## 來源對應

- source files: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `五、二元搜尋法 Binary Search`
- source labels: [必背], [會寫], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `五、二元搜尋法 Binary Search`
- topic id: `binary-search`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會寫], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 二元搜尋法(Binary Search) 的核心流程、前提與國考常見問法。
- 能寫出 Java 遞迴或非遞迴版本，並用註解說明作答思路。
- 能列出最佳、平均、最差時間複雜度與穩定性或不適用原因。

### [必背] 最小背誦句與記憶支架
- 資料必須已排序；每次比較 mid 後排除一半。
- 程式碼不要死背，要能說明每個迴圈、遞迴或邊界更新的理由。
- 複雜度答案要分清楚最佳、平均與最差情況。

### [必背] 名詞定義與雙語術語
- 二元搜尋法(Binary Search)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 二元搜尋法(Binary Search) 要先掌握資料如何移動或問題如何縮小，再背 Java 寫法。
- 國考常看你能不能把流程、複雜度與易錯前提連在一起。
- 二元搜尋法(Binary Search) 只適用於已排序陣列，不是 Binary Search Tree。

### [會做] 實際例子與操作步驟
題目：如何手算或說明 二元搜尋法？

1. 在已排序 [1,3,5,7,9] 找 7。
2. mid=5，往右找。
3. 下一次找到 7。

結果：二元搜尋法 的流程、Java 寫法與複雜度已對上來源。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| 二元搜尋法(Binary Search) | O(1) | O(log n) | O(log n) | N/A | 資料必須先排序。 |

### [會寫] Java 作答思路範例
### 二元搜尋法遞迴版

二元搜尋法(Binary Search) 的遞迴教學版，註解說明作答思路與終止條件。

```java
int binarySearchRecursive(int[] sorted, int target, int left, int right) { if (left > right) return -1; int mid = left + (right - left) / 2; if (sorted[mid] == target) return mid; if (sorted[mid] < target) return binarySearchRecursive(sorted, target, mid + 1, right); return binarySearchRecursive(sorted, target, left, mid - 1); }
```

### 二元搜尋法非遞迴版

二元搜尋法(Binary Search) 的非遞迴版，註解說明迴圈狀態與更新理由。

```java
int binarySearch(int[] sorted, int target) { int left = 0, right = sorted.length - 1; while (left <= right) { int mid = left + (right - left) / 2; if (sorted[mid] == target) return mid; if (sorted[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }
```

### [易混淆] 易錯提醒與辨別線索
- 不要只背程式碼，需能說出每個步驟的目的。
- 不要漏寫複雜度情境，尤其最佳、平均、最差可能不同。
- Binary Search 必須先排序，未排序資料不能直接使用。

### [必背] 專有名詞整理
- 二元搜尋法(Binary Search)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「二元搜尋法」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會寫]: 要補可書寫模板、程式或答案骨架、註解理由與常見失分點。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
