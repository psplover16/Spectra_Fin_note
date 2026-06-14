# 圖（Graph）

## 目錄

1. 圖（Graph）是什麼
2. 圖的基本術語
3. 圖的分類與特色
4. 圖的表示法
5. 圖的走訪：DFS 與 BFS
6. 生成樹與最小生成樹
7. 最短路徑
8. AOV 與 AOE 網路
9. 國考常見考法
10. 國考必背整理
11. 容易考的判斷題
12. 考前速記小抄

## 圖（Graph）是什麼

圖（Graph）是一種用來表示「物件之間關係」的資料結構。圖由頂點（Vertex）和邊（Edge）組成：頂點（Vertex）代表一個物件，邊（Edge）代表兩個物件之間的關係。

舉例來說，城市可以當成頂點（Vertex），城市之間的道路可以當成邊（Edge）；社群網站中的使用者可以當成頂點（Vertex），好友關係可以當成邊（Edge）。只要題目描述的是「許多點之間彼此有連結」，通常就可以用圖（Graph）來思考。

國考很喜歡考圖（Graph）的原因，是因為圖可以延伸出很多重要問題，例如：怎麼走訪所有頂點、怎麼找最短路徑、怎麼判斷有沒有環、怎麼找最小成本的連接方式。

## 圖的基本術語

頂點（Vertex）是圖中的節點，也就是被連接的對象。例如地圖中的城市、網路中的電腦、課程先修關係中的課程，都可以是頂點（Vertex）。

邊（Edge）是連接兩個頂點的線，表示兩個頂點之間存在某種關係。例如兩個城市之間有道路，或兩門課之間有先修關係。

路徑（Path）是從某個頂點出發，沿著邊走到另一個頂點所經過的一連串頂點與邊。若題目問「能不能從 A 走到 B」，其實就是在問是否存在路徑（Path）。

環（Cycle）是從某個頂點出發，沿著邊走一圈後又回到原本頂點的路徑。環（Cycle）在很多演算法中都很重要，例如最小生成樹不能有環，拓樸排序也不能用在有環的有向圖。

連通圖（Connected Graph）是指在無向圖中，任兩個頂點之間都存在路徑。白話來說，就是整張圖沒有分裂成互不相通的區塊。

度數（Degree）是指一個頂點連接了幾條邊。在無向圖中，只要邊接到這個頂點，就會增加它的度數（Degree）。

入度（In-degree）是有向圖中，指向某個頂點的邊數。出度（Out-degree）是有向圖中，從某個頂點指出去的邊數。若題目要做拓樸排序，入度（In-degree）通常是非常重要的線索。

## 圖的分類與特色

無向圖（Undirected Graph）是邊沒有方向的圖。若 A 和 B 之間有邊，代表 A 可以到 B，B 也可以到 A。道路若是雙向通行，就可以視為無向圖（Undirected Graph）。

有向圖（Directed Graph）是邊具有方向的圖。若有一條邊從 A 指向 B，只代表 A 可以到 B，不一定代表 B 可以回到 A。課程先修關係、網頁連結、工作流程，常用有向圖（Directed Graph）表示。

加權圖（Weighted Graph）是邊帶有權重的圖。權重（Weight）可以代表距離、成本、時間或風險。只要題目出現「最短」「最小成本」「最省時間」，通常就要注意加權圖（Weighted Graph）。

## 圖的表示法

圖（Graph）在程式中常見的表示法有兩種：相鄰矩陣（Adjacency Matrix）與相鄰串列（Adjacency List）。國考常要求比較兩者的空間複雜度、查詢速度，以及適合哪一種圖。

### 相鄰矩陣（Adjacency Matrix）

相鄰矩陣（Adjacency Matrix）是用一個二維陣列表示頂點之間是否有邊。假設有 V 個頂點，就建立 V x V 的矩陣。若頂點 i 到頂點 j 有邊，就在矩陣對應位置記錄 1 或權重；若沒有邊，就記錄 0、無限大或空值。

相鄰矩陣（Adjacency Matrix）的核心優點是查邊很快。如果要問「A 和 B 之間有沒有邊」，只要查矩陣中的一格，因此時間複雜度是 O(1)。缺點是空間固定需要 O(V^2)，即使邊很少，也要保留整個矩陣。

所以，相鄰矩陣（Adjacency Matrix）適合稠密圖（Dense Graph）。稠密圖（Dense Graph）是邊很多的圖，因為本來就有很多連線，使用矩陣比較不浪費。

### 相鄰串列（Adjacency List）

相鄰串列（Adjacency List）是替每個頂點準備一份清單，清單中記錄它相鄰的頂點。若是加權圖（Weighted Graph），清單中通常也會一起記錄邊的權重。

相鄰串列（Adjacency List）的核心優點是省空間。它只記錄實際存在的邊，所以空間複雜度是 O(V + E)，其中 V 是頂點數，E 是邊數。缺點是若要查某兩個頂點之間是否有邊，可能需要掃描某個頂點的相鄰清單。

所以，相鄰串列（Adjacency List）適合稀疏圖（Sparse Graph）。稀疏圖（Sparse Graph）是邊相對很少的圖，若用相鄰矩陣（Adjacency Matrix）會浪費大量空間。

| 比較項目 | 相鄰矩陣（Adjacency Matrix） | 相鄰串列（Adjacency List） |
|---|---|---|
| 空間複雜度 | O(V^2) | O(V + E) |
| 查詢兩點是否有邊 | O(1) | 通常需掃描相鄰清單 |
| 適合情境 | 稠密圖（Dense Graph） | 稀疏圖（Sparse Graph） |
| 國考關鍵字 | 查邊快、空間大 | 省空間、適合邊少 |

## 圖的走訪：DFS 與 BFS

圖的走訪（Graph Traversal）是指從某個頂點開始，依照某種規則拜訪圖中的頂點。最重要的兩種走訪方法是深度優先搜尋（Depth-First Search, DFS）與廣度優先搜尋（Breadth-First Search, BFS）。

### 深度優先搜尋（Depth-First Search, DFS）

深度優先搜尋（Depth-First Search, DFS）是「先一路往深處走，走不下去再回頭」的搜尋方式。它常用堆疊（Stack）或遞迴（Recursion）實作。

例如從 A 出發，若 A 可以到 B 和 C，DFS 可能會先走到 B，再從 B 繼續往更深的點走。等到某條路走到底，才回來改走其他尚未拜訪的分支。

深度優先搜尋（Depth-First Search, DFS）常用於：

1. 拓樸排序（Topological Sort）
2. 尋找連通分量（Connected Component）
3. 偵測環（Cycle Detection）
4. 判斷是否存在某條路徑（Path）

國考看到「遞迴」「堆疊」「一路走到底」「回溯」時，要優先想到深度優先搜尋（Depth-First Search, DFS）。

### 廣度優先搜尋（Breadth-First Search, BFS）

廣度優先搜尋（Breadth-First Search, BFS）是「先拜訪離起點最近的一層，再拜訪下一層」的搜尋方式。它常用佇列（Queue）實作。

例如從 A 出發，BFS 會先拜訪所有和 A 距離 1 條邊的頂點，再拜訪距離 2 條邊的頂點。因為它一層一層往外擴散，所以在無權重圖（Unweighted Graph）中，可以用來求最短路徑。

廣度優先搜尋（Breadth-First Search, BFS）常用於：

1. 無權重圖（Unweighted Graph）的最短路徑
2. 層級式搜尋
3. 判斷兩點之間最少要經過幾條邊

國考看到「佇列」「一層一層」「無權重最短路徑」時，要優先想到廣度優先搜尋（Breadth-First Search, BFS）。

| 比較項目 | 深度優先搜尋（DFS） | 廣度優先搜尋（BFS） |
|---|---|---|
| 核心想法 | 先往深處走 | 先走同一層 |
| 常用資料結構 | 堆疊（Stack）或遞迴（Recursion） | 佇列（Queue） |
| 常見用途 | 拓樸排序、連通分量、偵測環 | 無權重圖最短路徑 |
| 記憶關鍵 | 深、遞迴、回溯 | 廣、佇列、層次 |

## 生成樹與最小生成樹

生成樹（Spanning Tree）是從原本的圖中選出一些邊，讓所有頂點都被連起來，而且不能形成環（Cycle）的子圖。

如果原圖有 n 個頂點，那任何一棵生成樹（Spanning Tree）都一定有 n - 1 條邊。這是國考非常常考的必背結論。只要題目說「包含所有頂點」且「沒有環」，就要想到生成樹（Spanning Tree）。

最小生成樹（Minimum Spanning Tree, MST）是指在加權無向圖中，找出一棵生成樹，使所有被選邊的權重總和最小。也就是用最低成本把所有頂點連起來。

### Kruskal 演算法（Kruskal's Algorithm）

Kruskal 演算法（Kruskal's Algorithm）的想法是：把所有邊依照權重由小到大排序，然後從最小的邊開始選，只要加入後不會形成環（Cycle），就保留下來。

實作時，Kruskal 演算法（Kruskal's Algorithm）常搭配聯集查找（Union-Find）判斷兩個頂點是否已經在同一個集合中。如果已經在同一集合，加入這條邊就會形成環，因此不能選。

國考考 Kruskal 演算法（Kruskal's Algorithm）時，常會給一張加權圖，要求依序選邊，或問哪一條邊會因為形成環而被跳過。

### Prim 演算法（Prim's Algorithm）

Prim 演算法（Prim's Algorithm）的想法是：從某個起始頂點開始，逐步擴大目前已連通的頂點集合。每一步都選一條「從已選集合連到外部頂點」且權重最小的邊。

Kruskal 演算法（Kruskal's Algorithm）像是「從邊開始挑」，Prim 演算法（Prim's Algorithm）像是「從一棵樹慢慢長大」。兩者都可以求最小生成樹（Minimum Spanning Tree, MST），但選邊方式不同。

| 比較項目 | Kruskal 演算法 | Prim 演算法 |
|---|---|---|
| 出發點 | 從最小邊開始選 | 從某個頂點開始擴張 |
| 每一步選擇 | 全圖中目前可用的最小邊 | 連接已選集合與外部的最小邊 |
| 避免問題 | 不能形成環 | 不能選到已在樹內的無效邊 |
| 常見搭配 | 聯集查找（Union-Find） | 優先佇列（Priority Queue） |

## 最短路徑

最短路徑（Shortest Path）是指在圖中從某個頂點到另一個頂點，找出總成本最小的路徑。成本可能是距離、時間、費用或權重總和。

### Dijkstra 演算法（Dijkstra's Algorithm）

Dijkstra 演算法（Dijkstra's Algorithm）用來求單源最短路徑（Single-Source Shortest Path）。單源最短路徑（Single-Source Shortest Path）是指從一個固定起點出發，求它到其他所有頂點的最短距離。

Dijkstra 演算法（Dijkstra's Algorithm）的重要限制是邊權重不可為負。如果圖中有負權重邊，Dijkstra 演算法（Dijkstra's Algorithm）的貪婪選擇可能失效。

國考看到「單一來源」「權重不可為負」「最短路徑」時，要想到 Dijkstra 演算法（Dijkstra's Algorithm）。

### Floyd-Warshall 演算法（Floyd-Warshall Algorithm）

Floyd-Warshall 演算法（Floyd-Warshall Algorithm）用來求所有點對最短路徑（All-Pairs Shortest Path）。所有點對最短路徑（All-Pairs Shortest Path）是指任意兩個頂點之間的最短距離都要算出來。

Floyd-Warshall 演算法（Floyd-Warshall Algorithm）可以處理負權重邊，但不能有負環（Negative Cycle）。負環（Negative Cycle）是指一個環的權重總和為負，若可以一直繞這個環，路徑成本會無限下降，最短路徑就失去意義。

| 比較項目 | Dijkstra 演算法 | Floyd-Warshall 演算法 |
|---|---|---|
| 解決問題 | 單源最短路徑 | 所有點對最短路徑 |
| 是否可有負邊 | 不可有負權重邊 | 可有負權重邊 |
| 是否可有負環 | 不可 | 不可 |
| 國考關鍵字 | 單一起點、非負權重 | 任兩點、動態規劃、可處理負邊 |

## AOV 與 AOE 網路

AOV 網路（Activity on Vertex Network）是把活動放在頂點（Vertex）上的有向圖。它常用來表示活動之間的先後順序，因此常搭配拓樸排序（Topological Sort）。

拓樸排序（Topological Sort）是把有向無環圖（Directed Acyclic Graph, DAG）中的頂點排成一個順序，使得每條有向邊的起點都排在終點之前。若圖中有環（Cycle），就無法完成拓樸排序。

AOE 網路（Activity on Edge Network）是把活動放在邊（Edge）上的有向圖，常用於專案排程與關鍵路徑（Critical Path）。關鍵路徑（Critical Path）是專案中決定最短完工時間的一串活動；若關鍵路徑上的活動延遲，整個專案通常也會延遲。

| 比較項目 | AOV 網路 | AOE 網路 |
|---|---|---|
| 活動放在哪裡 | 頂點（Vertex） | 邊（Edge） |
| 常見用途 | 拓樸排序、先後關係 | 專案排程、關鍵路徑 |
| 國考關鍵字 | Activity on Vertex | Activity on Edge、Critical Path |

## 國考常見考法

1. 考基本名詞：要求判斷頂點（Vertex）、邊（Edge）、度數（Degree）、入度（In-degree）、出度（Out-degree）、路徑（Path）、環（Cycle）的意義。
2. 考圖的表示法：比較相鄰矩陣（Adjacency Matrix）與相鄰串列（Adjacency List）的空間複雜度與適用情境。
3. 考 DFS 與 BFS：問哪個使用堆疊或遞迴，哪個使用佇列，哪個可求無權重圖最短路徑。
4. 考生成樹（Spanning Tree）：給 n 個頂點，問生成樹有幾條邊，答案是 n - 1。
5. 考最小生成樹（Minimum Spanning Tree, MST）：要求依照 Kruskal 演算法（Kruskal's Algorithm）或 Prim 演算法（Prim's Algorithm）選邊。
6. 考最短路徑（Shortest Path）：分辨 Dijkstra 演算法（Dijkstra's Algorithm）與 Floyd-Warshall 演算法（Floyd-Warshall Algorithm）的使用時機。
7. 考 AOV 網路與 AOE 網路：分辨活動是在頂點還是在邊，以及對應拓樸排序或關鍵路徑。

## 國考必背整理

- 圖（Graph）由頂點（Vertex）與邊（Edge）組成。
- 有向圖（Directed Graph）的邊有方向；無向圖（Undirected Graph）的邊沒有方向。
- 加權圖（Weighted Graph）的邊有權重。
- 相鄰矩陣（Adjacency Matrix）查邊是 O(1)，空間是 O(V^2)，適合稠密圖。
- 相鄰串列（Adjacency List）空間是 O(V + E)，適合稀疏圖。
- 深度優先搜尋（Depth-First Search, DFS）常用堆疊（Stack）或遞迴（Recursion）。
- 廣度優先搜尋（Breadth-First Search, BFS）常用佇列（Queue），可求無權重圖最短路徑。
- 生成樹（Spanning Tree）包含所有頂點、沒有環，若有 n 個頂點，必有 n - 1 條邊。
- Kruskal 演算法（Kruskal's Algorithm）依邊權重由小到大選，並避免形成環。
- Prim 演算法（Prim's Algorithm）從某頂點開始，每次選連到外部的最小邊。
- Dijkstra 演算法（Dijkstra's Algorithm）求單源最短路徑，但不能有負權重邊。
- Floyd-Warshall 演算法（Floyd-Warshall Algorithm）求所有點對最短路徑，可處理負邊，但不能有負環。
- AOV 網路（Activity on Vertex Network）常用於拓樸排序。
- AOE 網路（Activity on Edge Network）常用於專案排程與關鍵路徑。

## 容易考的判斷題

1. 「相鄰矩陣（Adjacency Matrix）適合稀疏圖。」錯。它空間是 O(V^2)，比較適合稠密圖。
2. 「相鄰串列（Adjacency List）的空間複雜度是 O(V + E)。」對。
3. 「深度優先搜尋（Depth-First Search, DFS）通常使用佇列（Queue）。」錯。DFS 通常使用堆疊（Stack）或遞迴（Recursion）。
4. 「廣度優先搜尋（Breadth-First Search, BFS）可求無權重圖的最短路徑。」對。
5. 「生成樹（Spanning Tree）可以包含環（Cycle）。」錯。生成樹必須沒有環。
6. 「n 個頂點的生成樹（Spanning Tree）有 n - 1 條邊。」對。
7. 「Dijkstra 演算法（Dijkstra's Algorithm）可以正確處理負權重邊。」錯。它要求權重不可為負。
8. 「Floyd-Warshall 演算法（Floyd-Warshall Algorithm）可求所有點對最短路徑。」對。
9. 「AOV 網路（Activity on Vertex Network）常用於拓樸排序。」對。
10. 「AOE 網路（Activity on Edge Network）常用於關鍵路徑分析。」對。

## 考前速記小抄

| 關鍵字 | 立刻想到 |
|---|---|
| 查兩點是否有邊要很快 | 相鄰矩陣（Adjacency Matrix） |
| 邊很少、省空間 | 相鄰串列（Adjacency List） |
| 遞迴、堆疊、一路走到底 | 深度優先搜尋（DFS） |
| 佇列、一層一層、無權重最短路徑 | 廣度優先搜尋（BFS） |
| 包含全部頂點且無環 | 生成樹（Spanning Tree） |
| n 個頂點的生成樹邊數 | n - 1 |
| 邊由小到大選、避免環 | Kruskal 演算法 |
| 從某點開始擴張 | Prim 演算法 |
| 單一起點最短路徑、非負權重 | Dijkstra 演算法 |
| 任兩點最短路徑、可有負邊但不可有負環 | Floyd-Warshall 演算法 |
| 活動在頂點、先後順序 | AOV 網路 |
| 活動在邊、專案排程、關鍵路徑 | AOE 網路 |
