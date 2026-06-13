# 演算法總 Manifest

## Manifest 規則

- 來源檔案: `_private/資料結構與演算法.txt`
- route owner: 全部為 `/algorithms`
- subject key: 全部為 `algorithms`
- status 字典: `pending-draft`、`drafted`、`verified`、`blocked`、`imported`
- topic 數: 11
- 資料庫排除: 本 manifest 不建立 `/database` topic；即使 B Tree 可用於資料庫索引，本來源仍以資料結構與演算法 route 管理。

## Topic Manifest

| manifest id | topic id | title | source section | route owner | subject | status | 預估 block 結構 | 備註 |
|---|---|---|---|---|---|---|---|---|
| `alg-001` | `algorithms-study-strategy` | 資料結構與演算法準備方向 | 一、準備方向 | `/algorithms` | algorithms | pending-draft | examFocus、memoryPoints、understanding、pitfall、sourceNote | 聚焦讀法、圖像化、排序手算與高等樹準備 |
| `alg-002` | `algorithm-definition-and-properties` | 演算法(Algorithm)定義與五大條件 | 二、演算法 | `/algorithms` | algorithms | pending-draft | termList、memoryPoints、understanding、examFocus、sourceNote | Input/Output/Definiteness/Finiteness/Effectiveness |
| `alg-003` | `time-complexity-big-o` | 時間複雜度(Time Complexity)與 Big O | 三、時間複雜度 | `/algorithms` | algorithms | pending-draft | memoryPoints、workedExample、complexityTable、pitfall、sourceNote | Big O 排序、迴圈與分治判斷 |
| `alg-004` | `array-addressing` | 陣列(Array)與位址計算 | 四、陣列（Array） | `/algorithms` | algorithms | pending-draft | termList、examFocus、workedExample、pitfall、sourceNote | 一維、Row-major、Column-major |
| `alg-005` | `linked-list-basics` | 鏈結串列(Linked List)與基本操作 | 五、Linked List | `/algorithms` | algorithms | pending-draft | termList、comparison、workedExample、teachingCode、pitfall、sourceNote | Array vs Linked List、插入刪除虛擬碼 |
| `alg-006` | `stack-and-queue` | 堆疊(Stack)與佇列(Queue) | 六、Stack 與 Queue | `/algorithms` | algorithms | pending-draft | termList、comparison、workedExample、pitfall、sourceNote | LIFO/FIFO、DFS/BFS、Circular Queue |
| `alg-007` | `tree-and-binary-tree` | 樹(Tree)與二元樹(Binary Tree) | 七、Tree | `/algorithms` | algorithms | pending-draft | termList、memoryPoints、workedExample、pitfall、sourceNote | 基本術語、Binary Tree 類型、Traversal |
| `alg-008` | `graph-traversal-and-paths` | 圖(Graph)、DFS/BFS、MST 與最短路徑 | 八、圖（Graph） | `/algorithms` | algorithms | pending-draft | termList、comparison、workedExample、complexityTable、pitfall、sourceNote | Matrix/List、Kruskal、Prim、Dijkstra、Floyd-Warshall |
| `alg-009` | `sorting-algorithms-baseline` | 排序(Sorting)七大比較基準 | 九、排序 | `/algorithms` | algorithms | pending-draft | examFocus、workedExample、teachingCode、complexityTable、pitfall、sourceNote | Bubble/Selection/Insertion/Merge/Quick/Heap/Shell |
| `alg-010` | `advanced-balanced-trees` | 高等樹: AVL、B Tree、Heap、Red-Black Tree | 十、高等樹 | `/algorithms` | algorithms | pending-draft | termList、comparison、workedExample、complexityTable、pitfall、sourceNote | 自平衡樹與 heap 調整 |
| `alg-011` | `hashing-and-collision-handling` | 雜湊法(Hashing)與碰撞處理 | 十一、雜湊法（Hashing） | `/algorithms` | algorithms | pending-draft | termList、comparison、workedExample、pitfall、sourceNote | Collision、Overflow、Chaining、Open Addressing、Load Factor |

## Route Owner Review

| 檢查項 | 結果 |
|---|---|
| 是否有 topic route owner 不是 `/algorithms` | 無 |
| 是否有 topic subject 不是 `algorithms` | 無 |
| 是否將資料結構與演算法來源歸入 `/database` | 無 |
| 是否使用 status 字典外的狀態 | 無 |
| 是否每個來源 heading 都已分配 topic | 是，11/11 |

## 後續生成規則

- 每個 topic 草稿檔名使用 `<timestamp>-algorithms-<topic>.md`。
- 每個草稿 frontmatter 必須包含 `topic_id`、`subject`、`source_files`、`status`、`generated_at`、`verified_by`。
- `draft` 或 `blocked` 草稿不得匯入正式 app data。
- 只有 verifier 結果為 `verified` 且保留 source mapping、複雜度、術語與新手說明者，才可進入正式 `/algorithms` data。
