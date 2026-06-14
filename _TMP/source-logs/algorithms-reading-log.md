# 資料結構與演算法來源閱讀紀錄

## 閱讀狀態

- 來源檔案: `_private/資料結構與演算法.txt`
- 讀取範圍: 完整閱讀
- 文件標題: `4. 資料結構與演算法`
- 主要 heading 數: 11
- 建議 topic 數: 11
- route owner: `/algorithms`
- subject key: `algorithms`
- 來源邊界: 本紀錄只依據指定來源與 Spectra proposal/design/spec，不讀取資料庫來源或任何受限私人筆記。

## Heading 盤點

| # | source heading | 建議 topic id | 建議 topic title | 類型 | route owner | 盤點狀態 |
|---|---|---|---|---|---|---|
| 1 | 一、準備方向 | `algorithms-study-strategy` | 資料結構與演算法準備方向 | study-guide | `/algorithms` | completed |
| 2 | 二、演算法 | `algorithm-definition-and-properties` | 演算法(Algorithm)定義與五大條件 | algorithm-foundation | `/algorithms` | completed |
| 3 | 三、時間複雜度 | `time-complexity-big-o` | 時間複雜度(Time Complexity)與 Big O | complexity | `/algorithms` | completed |
| 4 | 四、陣列（Array） | `array-addressing` | 陣列(Array)與位址計算 | data-structure | `/algorithms` | completed |
| 5 | 五、Linked List | `linked-list-basics` | 鏈結串列(Linked List)與基本操作 | data-structure | `/algorithms` | completed |
| 6 | 六、Stack 與 Queue | `stack-and-queue` | 堆疊(Stack)與佇列(Queue) | data-structure | `/algorithms` | completed |
| 7 | 七、Tree | `tree-and-binary-tree` | 樹(Tree)與二元樹(Binary Tree) | data-structure | `/algorithms` | completed |
| 8 | 八、圖（Graph） | `graph-traversal-and-paths` | 圖(Graph)、DFS/BFS、MST 與最短路徑 | data-structure-algorithm | `/algorithms` | completed |
| 9 | 九、排序 | `sorting-algorithms-baseline` | 排序(Sorting)七大比較基準 | sorting | `/algorithms` | completed |
| 10 | 十、高等樹 | `advanced-balanced-trees` | 高等樹: AVL、B Tree、Heap、Red-Black Tree | data-structure | `/algorithms` | completed |
| 11 | 十一、雜湊法（Hashing） | `hashing-and-collision-handling` | 雜湊法(Hashing)與碰撞處理 | data-structure | `/algorithms` | completed |

## 各 Heading 內容摘要

### 1. 一、準備方向

- 國考重點: 專有名詞需要記憶，Tree 相關名詞尤其常見；時間複雜度比較圖幾乎必考。
- 國考速記: 程式碼不要死背，排序、圖與高等樹要能畫流程、跑步驟、整理虛擬碼。
- 理解重點: 抽象資料結構要靠圖像化理解；排序初學時逐步畫出每個元素位置最穩。
- 待生成 block: examFocus、memoryPoints、understanding、pitfall、sourceNote。

### 2. 二、演算法

- 國考重點: 演算法是解決問題的明確步驟集合。
- 必背條件: Input、Output、Definiteness、Finiteness、Effectiveness。
- 理解重點: 每一步都要明確、可執行，且有限步驟後結束；這是判斷演算法合法性的基本框架。
- 待生成 block: termList、memoryPoints、understanding、examFocus。

### 3. 三、時間複雜度

- 國考重點: Big O 成長順序為 `O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)`。
- 會算項目: 單層迴圈多為 O(n)，雙層巢狀迴圈多為 O(n^2)，規模減半多為 O(log n)，分治常見 O(n log n)。
- 易錯提醒: Big O 看成長趨勢，不看常數與低次項；最好、平均、最差要分開。
- 待生成 block: memoryPoints、workedExample、complexityTable、pitfall。

### 4. 四、陣列（Array）

- 國考重點: 陣列(Array)是連續記憶體配置，支援 O(1) 隨機存取，插入刪除通常 O(n)。
- 會算項目: 一維陣列位址、二維 Row-major 位址、二維 Column-major 位址。
- 理解重點: 位址公式要看 lower bound、element size、row/column major 的走向。
- 待生成 block: termList、workedExample、examFocus、pitfall。

### 5. 五、Linked List

- 國考重點: 節點由資料欄位與指標欄位組成，不需連續記憶體；搜尋通常 O(n)。
- 比較項目: Array 隨機存取快但大小較固定；Linked List 插入刪除彈性高但需額外指標。
- 會寫虛擬碼: head 前插入、tail 後插入、中間插入、刪除 head、刪除 tail、刪除指定節點。
- 待生成 block: examFocus、workedExample、teachingCode 或 pseudocode、pitfall。

### 6. 六、Stack 與 Queue

- 國考重點: Stack 是 LIFO，Queue 是 FIFO。
- Stack 應用: 函式呼叫、遞迴、括號配對、DFS、運算式轉換。
- Queue 應用: 排程、BFS、緩衝區。
- Circular Queue 會算: front/rear 透過 modulo 循環；空與滿依教材定義，保留一格時滿為 `(rear + 1) mod size == front`。
- 待生成 block: termList、comparison、workedExample、pitfall。

### 7. 七、Tree

- 國考重點: Root、Node、Edge、Parent、Child、Sibling、Leaf、Degree、Level、Height、Depth、Subtree、Ancestor、Descendant。
- Binary Tree 重點: 每節點最多兩個 child；Full、Complete、Perfect、Balanced 定義要分清楚。
- 會算項目: perfect binary tree 節點數 `2^(h+1)-1`，n 節點樹邊數 `n-1`，complete binary tree 陣列索引關係。
- 會做項目: Preorder、Inorder、Postorder、Level-order；常考由前序/中序或後序/中序推回樹。
- 待生成 block: termList、workedExample、examFocus、pitfall。

### 8. 八、圖（Graph）

- 國考重點: Vertex、Edge、Directed/Undirected Graph、Weighted Graph、Path、Cycle、Connected Graph、Degree、In-degree、Out-degree。
- 表示法比較: Adjacency Matrix 查邊 O(1)、空間 O(V^2)；Adjacency List 空間 O(V+E)，適合稀疏圖。
- DFS/BFS 比較: DFS 常用 stack 或 recursion；BFS 常用 queue，可求 unweighted graph 最短路徑。
- 演算法項目: Spanning Tree、Kruskal、Prim、Dijkstra、Floyd-Warshall、AOV、AOE。
- 待生成 block: termList、comparison、workedExample、complexityTable、pitfall。

### 9. 九、排序

- 國考重點: Bubble、Selection、Insertion、Merge、Quick、Heap、Shell 七種排序的最佳、平均、最差、穩定性。
- 排序項目: Bubble Sort、Selection Sort、Insertion Sort、Merge Sort、Quick Sort、Heap Sort、Shell Sort。
- 基準摘要: Bubble/Insertion 最佳 O(n)，Selection 永遠 O(n^2)，Merge/Heap 穩定在 O(n log n)，Quick 最差 O(n^2)，Shell 視 gap 而定且最差可到 O(n^2)。
- 易錯提醒: 程式碼不要死背，但操作流程、虛擬碼與核心概念要會手算。
- 待生成 block: complexityTable、workedExample、teachingCode、pitfall、sourceNote。

### 10. 十、高等樹

- 國考重點: AVL Tree、B Tree、Heap Tree、Red-Black Tree 的定義、維持方式與複雜度。
- AVL: 自平衡 BST，左右子樹高度差最多 1，旋轉 LL、RR、LR、RL。
- B Tree: 多路平衡搜尋樹，常用於磁碟索引與資料庫；考階數、key 數、child 數、分裂、合併、借 key。
- Heap Tree: Complete Binary Tree，Max Heap/Min Heap，root 取最大或最小 O(1)，插入與刪除 root O(log n)。
- Red-Black Tree: root 黑、紅節點不能有紅 child、黑高一致，搜尋/插入/刪除 O(log n)。
- 待生成 block: termList、comparison、workedExample、complexityTable、pitfall。

### 11. 十一、雜湊法（Hashing）

- 國考重點: Hash Function、Collision、Overflow。
- Collision/Overflow 處理: Chaining、Open Addressing、Linear Probing、Quadratic Probing、Double Hashing、Rehashing。
- 理解重點: Load Factor = 已存元素數 / table 大小；load factor 太高會降低效率。
- 易錯提醒: Linear Probing 易 primary clustering，Double Hashing 需第二個 hash function 決定探測距離。
- 待生成 block: termList、comparison、workedExample、pitfall。

## Sorting 來源基準摘錄

| 排序法 | 最好 | 平均 | 最差 | 穩定性 | 備註 |
|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | 穩定 | 若有 early stop 最好 O(n) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | 通常不穩定 | 交換次數少 |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | 穩定 | 適合小資料或近乎排序 |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | 穩定 | 需要額外空間 |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | 不穩定 | pivot 選不好會退化 |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | 不穩定 | 原地排序，利用 heap |
| Shell Sort | 視 gap 而定 | 視 gap 而定 | 可到 O(n^2) | 不穩定 | 插入排序改良 |

## Route 歸屬檢查

- 所有 heading 與建議 topic 均歸入 `/algorithms`。
- 本來源不建立 `/database` topic。
- 高等樹中的 B Tree 可能與資料庫索引有關，但在本來源中屬資料結構與演算法學習內容，route owner 仍為 `/algorithms`。
