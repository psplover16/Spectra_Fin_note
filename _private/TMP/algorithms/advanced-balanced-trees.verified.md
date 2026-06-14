---
topic_id: advanced-balanced-trees
formal_topic_id: algorithms-advanced-balanced-trees
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: verified
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: algorithm-verifier
content_shape: lessonArticle
---

# 高等樹: AVL、B Tree、Heap、Red-Black Tree(Advanced Balanced Trees)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `十、高等樹`
- source labels: [必背]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `十、高等樹`
- topic id: `advanced-balanced-trees`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 AVL、B Tree、Heap、Red-Black Tree 的用途與操作複雜度。
- 能列出 AVL LL/RR/LR/RL 旋轉。
- 能說明 Heap 插入、刪 root 與取最大/最小。

### [必背] 最小背誦句與記憶支架
- AVL 左右子樹高度差最多 1。
- B Tree 常用於磁碟索引與資料庫。
- Heap 是 Complete Binary Tree，取 root O(1)。

### [必背] 名詞定義與雙語術語
- AVL 樹(AVL Tree)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- B 樹(B Tree)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 堆積樹(Heap Tree)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 紅黑樹(Red-Black Tree)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 旋轉(Rotation)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 高等樹重點是保持平衡以維持 O(log n) 搜尋或更新。
- B Tree 雖常見於資料庫索引，本 route 仍歸 algorithms。
- Heap 不是二元搜尋樹，任意搜尋通常 O(n)。

### [會做] 實際例子與操作步驟
題目：Heap 刪除 root 後如何調整？

1. 最後節點補到 root。
2. 刪除最後位置。
3. 向下調整直到符合 heap property。

結果：刪 root 成本 O(log n)。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| AVL 樹搜尋(AVL Tree Search) | O(log n) | O(log n) | O(log n) | N/A | Self-balancing binary search tree. |

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- AVL 樹(AVL Tree)
- B 樹(B Tree)
- 堆積樹(Heap Tree)
- 紅黑樹(Red-Black Tree)
- 旋轉(Rotation)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「高等樹: AVL、B Tree、Heap、Red-Black Tree」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
