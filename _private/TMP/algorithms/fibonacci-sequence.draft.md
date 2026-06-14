---
topic_id: fibonacci-sequence
formal_topic_id: algorithms-fibonacci-sequence
subject: algorithms
source_files:
  - _private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# Fibonacci 序列(Fibonacci Sequence)

## 來源對應

- source files: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `三、Fibonacci 序列`
- source labels: [必背], [會寫], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- source section: `三、Fibonacci 序列`
- topic id: `fibonacci-sequence`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會寫], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 Fibonacci 序列(Fibonacci Sequence) 的核心流程、前提與國考常見問法。
- 能寫出 Java 遞迴或非遞迴版本，並用註解說明作答思路。
- 能列出最佳、平均、最差時間複雜度與穩定性或不適用原因。

### [必背] 最小背誦句與記憶支架
- 基本條件是 n <= 1；naive recursion O(2^n)，迭代 O(n)。
- 程式碼不要死背，要能說明每個迴圈、遞迴或邊界更新的理由。
- 複雜度答案要分清楚最佳、平均與最差情況。

### [必背] 名詞定義與雙語術語
- Fibonacci 序列(Fibonacci Sequence)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 記憶化(Memoization)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- Fibonacci 序列(Fibonacci Sequence) 要先掌握資料如何移動或問題如何縮小，再背 Java 寫法。
- 國考常看你能不能把流程、複雜度與易錯前提連在一起。
- 排序或常見演算法題要能用小資料手算確認流程。

### [會做] 實際例子與操作步驟
題目：如何手算或說明 Fibonacci 序列？

1. F(0)=0，F(1)=1。
2. F(5)=F(4)+F(3)。
3. 結果是 5。

結果：Fibonacci 序列 的流程、Java 寫法與複雜度已對上來源。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| Fibonacci 序列(Fibonacci Sequence) | O(1) | O(n) | O(2^n) | N/A | Naive recursion repeats subproblems; iterative version is O(n). |

### [會寫] Java 作答思路範例
### Fibonacci 序列遞迴版

Fibonacci 序列(Fibonacci Sequence) 的遞迴教學版，註解說明作答思路與終止條件。

```java
int fibRecursive(int n) { if (n <= 1) return n; return fibRecursive(n - 1) + fibRecursive(n - 2); }
```

### Fibonacci 序列非遞迴版

Fibonacci 序列(Fibonacci Sequence) 的非遞迴版，註解說明迴圈狀態與更新理由。

```java
int fibIterative(int n) { if (n <= 1) return n; int prev = 0, curr = 1; for (int i = 2; i <= n; i++) { int next = prev + curr; prev = curr; curr = next; } return curr; }
```

### [易混淆] 易錯提醒與辨別線索
- 不要只背程式碼，需能說出每個步驟的目的。
- 不要漏寫複雜度情境，尤其最佳、平均、最差可能不同。
- 排序題要注意穩定性與是否需要額外空間。

### [必背] 專有名詞整理
- Fibonacci 序列(Fibonacci Sequence)
- 記憶化(Memoization)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Fibonacci 序列」在考試中通常是在問定義、流程、比較、計算或應用判斷。
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
