---
topic_id: time-complexity-big-o
formal_topic_id: algorithms-time-complexity-big-o
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: verified
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: algorithm-verifier
content_shape: lessonArticle
---

# 時間複雜度(Time Complexity)與 Big O(Time Complexity and Big O)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `三、時間複雜度`
- source labels: [必背], [會算], [易混淆]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `三、時間複雜度`
- topic id: `time-complexity-big-o`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會算], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能背出 O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)。
- 能從單層迴圈、雙層迴圈、每次減半與分治判斷複雜度。
- 能說明 Big O 看成長趨勢，忽略常數與低次項。

### [必背] 最小背誦句與記憶支架
- n 是輸入資料量，O 是成長上界的記號。
- 每次問題規模減半通常是 O(log n)。
- 分治常見 O(n log n)，例如 Merge Sort。

### [必背] 名詞定義與雙語術語
- 時間複雜度(Time Complexity)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 大 O 記號(Big O Notation)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 對數(Logarithm)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 分治法(Divide and Conquer)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- Big O 不是實際秒數，而是資料量變大時步驟數如何成長。
- O(3n) 簡化成 O(n)，O(n^2+n) 簡化成 O(n^2)。
- 最好、平均、最差複雜度要分開看，排序題尤其常考。

### [會做] 實際例子與操作步驟
題目：雙層各跑 n 次的迴圈複雜度為何？

1. 外層跑 n 次。
2. 每次外層都讓內層跑 n 次。
3. 總步數 n*n = n^2。

結果：時間複雜度是 O(n^2)。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| 二元搜尋法(Binary Search) | O(1) | O(log n) | O(log n) | N/A | 每次砍半。 |

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 時間複雜度(Time Complexity)
- 大 O 記號(Big O Notation)
- 對數(Logarithm)
- 分治法(Divide and Conquer)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「時間複雜度(Time Complexity)與 Big O」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [易混淆]: 列出相近概念、混淆原因、辨別關鍵與反例。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
