八、圖（Graph）

[必背] 基本術語
- Vertex、Edge、Directed Graph、Undirected Graph、Weighted Graph、Path、Cycle、Connected Graph、Degree、In-degree、Out-degree。

[比較] 表示法
- Adjacency Matrix：查邊快 O(1)，空間 O(V^2)，適合稠密圖。
- Adjacency List：空間 O(V+E)，適合稀疏圖。

[比較] DFS vs BFS
- DFS：深度優先，常用 stack 或 recursion，可用於拓樸排序、連通分量、cycle detection。
- BFS：廣度優先，常用 queue，可求 unweighted graph 最短路徑。

[必背] Spanning Tree
- 包含所有 vertex 且無 cycle 的子圖。
- n 個 vertex 的 spanning tree 有 n - 1 條 edge。

[會做] MST
- Kruskal's Algorithm：依 edge 權重由小到大選，避免 cycle，常用 union-find。
- Prim's Algorithm：從某節點開始，每次選連到外部的最小 edge。

[會做] Shortest Path
- Dijkstra's Algorithm：單源最短路徑，權重不可為負。
- Floyd-Warshall Algorithm：所有點對最短路徑，可處理負邊但不能有負環。

[必背] AOV / AOE
- AOV Network：Activity on Vertex，常用於拓樸排序。
- AOE Network：Activity on Edge，常用於專案排程、critical path。
