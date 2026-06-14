---
topic_id: graph-traversal-and-paths
formal_topic_id: algorithms-graph-traversal-and-paths
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 圖(Graph)、DFS/BFS、MST 與最短路徑(Graph DFS BFS MST and Shortest Paths)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `八、圖（Graph）`
- source labels: [必背], [比較], [會做]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `八、圖（Graph）`
- topic id: `graph-traversal-and-paths`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [比較], [會做]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能比較 Adjacency Matrix 與 Adjacency List。
- 能比較 DFS 與 BFS。
- 能說明 Kruskal、Prim、Dijkstra、Floyd-Warshall 的用途。

### [必背] 最小背誦句與記憶支架
- Matrix 查邊 O(1)、空間 O(V^2)。
- List 空間 O(V+E)，適合稀疏圖。
- Dijkstra 權重不可為負。

### [必背] 名詞定義與雙語術語
- 圖(Graph)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 頂點(Vertex)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 邊(Edge)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 深度優先搜尋(Depth-First Search)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 廣度優先搜尋(Breadth-First Search)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 最小生成樹(Minimum Spanning Tree)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- Graph 題要先確認是有向/無向、加權/未加權、稠密/稀疏。
- DFS 常用 stack 或 recursion，BFS 常用 queue。
- MST 與 shortest path 解決的問題不同。

### [會做] 實際例子與操作步驟
題目：無權圖最短路徑要用 DFS 還是 BFS？

1. 無權圖每條邊成本相同。
2. BFS 逐層擴展，第一次到達即為最短步數。

結果：使用 BFS。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| 廣度優先搜尋(Breadth-First Search) | O(V+E) | O(V+E) | O(V+E) | N/A | Adjacency list traversal. |

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 圖(Graph)
- 頂點(Vertex)
- 邊(Edge)
- 深度優先搜尋(Depth-First Search)
- 廣度優先搜尋(Breadth-First Search)
- 最小生成樹(Minimum Spanning Tree)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「圖(Graph)、DFS/BFS、MST 與最短路徑」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會做]: 要補可操作流程、示範步驟、完成後檢查點與常見錯誤。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
