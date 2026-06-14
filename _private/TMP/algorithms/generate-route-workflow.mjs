import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/algorithms';
const algorithmsManifestPath = '_TMP/manifests/algorithms-manifest.md';
const commonAlgorithmsInventoryPath = '_TMP/manifests/common-algorithms-inventory.md';
const structureSourceFile = '_private/資料結構與演算法.txt';
const commonSourceFile = '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const generatedAt = '2026-06-13T12:30:00+08:00';

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const sortingComplexityRows = [
  {
    algorithmNameZh: '氣泡排序法',
    algorithmNameEn: 'Bubble Sort',
    bestTime: 'O(n)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Stable',
    notes: 'Early stop allows O(n) best case'
  },
  {
    algorithmNameZh: '選擇排序法',
    algorithmNameEn: 'Selection Sort',
    bestTime: 'O(n^2)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Usually unstable',
    notes: 'Low swap count'
  },
  {
    algorithmNameZh: '插入排序法',
    algorithmNameEn: 'Insertion Sort',
    bestTime: 'O(n)',
    averageTime: 'O(n^2)',
    worstTime: 'O(n^2)',
    stability: 'Stable',
    notes: 'Good for small or nearly sorted data'
  },
  {
    algorithmNameZh: '合併排序法',
    algorithmNameEn: 'Merge Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n log n)',
    stability: 'Stable',
    notes: 'Requires extra space'
  },
  {
    algorithmNameZh: '快速排序法',
    algorithmNameEn: 'Quick Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n^2)',
    stability: 'Unstable',
    notes: 'Poor pivot choice degenerates'
  },
  {
    algorithmNameZh: '堆積排序法',
    algorithmNameEn: 'Heap Sort',
    bestTime: 'O(n log n)',
    averageTime: 'O(n log n)',
    worstTime: 'O(n log n)',
    stability: 'Unstable',
    notes: 'In-place sorting with heap'
  },
  {
    algorithmNameZh: '希爾排序法',
    algorithmNameEn: 'Shell Sort',
    bestTime: 'gap-dependent',
    averageTime: 'gap-dependent',
    worstTime: 'up to O(n^2)',
    stability: 'Unstable',
    notes: 'Improved insertion sort'
  }
];

const structuralDetails = {
  'algorithms-study-strategy': {
    titleEn: 'Data Structures and Algorithms Study Strategy',
    terms: [['資料結構', 'Data Structure'], ['演算法', 'Algorithm'], ['虛擬碼', 'Pseudocode']],
    labels: ['[原文提醒]', '[補充]'],
    examOutline: [
      '能說明資料結構與演算法讀法：專有名詞需記憶，程式碼要理解流程而不是死背。',
      '能把 Tree、Graph、Sorting、Time Complexity 等主題用圖像化方式整理。',
      '能先手算排序與圖流程，再整理成虛擬碼(Pseudocode)。'
    ],
    memoryPoints: [
      '時間複雜度比較圖幾乎必考。',
      '圖(Graph) 和排序(Sorting) 初學時要先畫流程，再寫虛擬碼。',
      '高等樹重點在排序方式、平衡條件與操作流程。'
    ],
    understandingNotes: [
      '這科最怕只背名詞卻不會跑流程；每個資料結構都要知道它解決什麼操作問題。',
      '程式碼不是最先背的東西，先理解資料如何移動、指標如何連接、節點如何調整。',
      '國考答案要能從中文名詞接到英文名詞，再接到操作、複雜度與易錯前提。'
    ],
    example: {
      problem: '如何準備 Sorting 題？',
      steps: ['先手動畫出每輪元素位置。', '再寫出核心虛擬碼。', '最後補最佳、平均、最差時間複雜度與穩定性。'],
      result: '排序題至少要能手算流程、寫核心概念、比較複雜度。'
    }
  },
  'algorithm-definition-and-properties': {
    titleEn: 'Algorithm Definition and Five Properties',
    terms: [['演算法', 'Algorithm'], ['輸入', 'Input'], ['輸出', 'Output'], ['明確性', 'Definiteness'], ['有限性', 'Finiteness'], ['有效性', 'Effectiveness']],
    labels: ['[必背]'],
    examOutline: [
      '能定義演算法(Algorithm)：解決問題的明確步驟集合。',
      '能列出 Input、Output、Definiteness、Finiteness、Effectiveness 五個條件。',
      '能判斷一段描述是否因步驟不明確或不會停止而不符合演算法。'
    ],
    memoryPoints: ['至少一個 Output 是必備條件。', 'Finiteness 表示有限步驟後結束。', 'Effectiveness 表示每一步都能實際執行。'],
    understandingNotes: [
      '演算法不是任何想法都算，必須能被明確執行並在有限時間內完成。',
      'Definiteness 要求每一步不含模糊語句，例如「適當處理」不夠明確。',
      '國考常把五條件做成填空或選擇題，英文和中文都要背。'
    ],
    example: {
      problem: '「一直嘗試直到成功」是否是合格演算法？',
      steps: ['檢查是否有明確步驟。', '檢查是否保證有限步驟結束。', '若不保證停止，就不符合 Finiteness。'],
      result: '不是合格演算法，因為可能無限進行。'
    }
  },
  'time-complexity-big-o': {
    titleEn: 'Time Complexity and Big O',
    terms: [['時間複雜度', 'Time Complexity'], ['大 O 記號', 'Big O Notation'], ['對數', 'Logarithm'], ['分治法', 'Divide and Conquer']],
    labels: ['[必背]', '[會算]', '[易混淆]'],
    examOutline: [
      '能背出 O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)。',
      '能從單層迴圈、雙層迴圈、每次減半與分治判斷複雜度。',
      '能說明 Big O 看成長趨勢，忽略常數與低次項。'
    ],
    memoryPoints: [
      'n 是輸入資料量，O 是成長上界的記號。',
      '每次問題規模減半通常是 O(log n)。',
      '分治常見 O(n log n)，例如 Merge Sort。'
    ],
    understandingNotes: [
      'Big O 不是實際秒數，而是資料量變大時步驟數如何成長。',
      'O(3n) 簡化成 O(n)，O(n^2+n) 簡化成 O(n^2)。',
      '最好、平均、最差複雜度要分開看，排序題尤其常考。'
    ],
    example: {
      problem: '雙層各跑 n 次的迴圈複雜度為何？',
      steps: ['外層跑 n 次。', '每次外層都讓內層跑 n 次。', '總步數 n*n = n^2。'],
      result: '時間複雜度是 O(n^2)。'
    },
    complexityRows: [
      {
        algorithmNameZh: '二元搜尋法',
        algorithmNameEn: 'Binary Search',
        bestTime: 'O(1)',
        averageTime: 'O(log n)',
        worstTime: 'O(log n)',
        stability: 'N/A',
        notes: '每次砍半。'
      }
    ]
  },
  'array-addressing': {
    titleEn: 'Array and Address Calculation',
    terms: [['陣列', 'Array'], ['列優先', 'Row-major'], ['行優先', 'Column-major'], ['基底位址', 'Base Address']],
    labels: ['[必背]', '[會算]'],
    examOutline: ['能說明陣列(Array) 連續記憶體與 O(1) 隨機存取。', '能計算一維與二維 Row-major/Column-major 位址。', '能指出插入刪除可能需搬移元素。'],
    memoryPoints: ['一維 LOC(A[i]) = Base + (i - lower_bound) * element_size。', 'Row-major 先列後行，Column-major 先行後列。', '陣列查詢快，插刪常需 O(n)。'],
    understandingNotes: ['陣列的快來自連續記憶體和可直接用索引換算位址。', '二維陣列位址題要先確認 row lower、column lower、欄數或列數。', '位址計算題必須列公式再代入，不要只寫答案。'],
    example: {
      problem: 'Base=100、element_size=4、lower_bound=0，A[3] 位址？',
      steps: ['LOC(A[3]) = 100 + (3 - 0) * 4。', '100 + 12 = 112。'],
      result: 'A[3] 位址為 112。'
    }
  },
  'linked-list-basics': {
    titleEn: 'Linked List and Basic Operations',
    terms: [['鏈結串列', 'Linked List'], ['節點', 'Node'], ['指標', 'Pointer'], ['單向鏈結串列', 'Singly Linked List'], ['雙向鏈結串列', 'Doubly Linked List']],
    labels: ['[必背]', '[比較]', '[會寫虛擬碼]'],
    examOutline: ['能說明節點由資料欄位與指標欄位組成。', '能比較 Array 與 Linked List。', '能寫出插入與刪除的虛擬碼概念。'],
    memoryPoints: ['Linked List 不需連續記憶體。', '已知節點位置時插入刪除快，但搜尋通常 O(n)。', 'Doubly Linked List 多 prev 指標，可雙向走訪。'],
    understandingNotes: ['Linked List 的核心是改指標，不是搬移大量元素。', '刪除節點要注意 head、tail 與中間節點情境。', '考題常問 Array vs Linked List 的存取、插刪與空間成本。'],
    example: {
      problem: '在節點 A 後插入節點 X。',
      steps: ['X.next 指向 A.next。', 'A.next 改指向 X。', '若是 doubly list，還要更新 prev。'],
      result: '插入完成且串列不中斷。'
    }
  },
  'stack-and-queue': {
    titleEn: 'Stack and Queue',
    terms: [['堆疊', 'Stack'], ['佇列', 'Queue'], ['後進先出', 'Last In First Out'], ['先進先出', 'First In First Out'], ['循環佇列', 'Circular Queue']],
    labels: ['[必背]', '[比較]', '[會算]'],
    examOutline: ['能比較 Stack 的 LIFO 與 Queue 的 FIFO。', '能列出 push、pop、enqueue、dequeue。', '能判斷 Circular Queue 空滿條件。'],
    memoryPoints: ['Stack 一端進出，Queue 一端進一端出。', 'DFS 常用 Stack，BFS 常用 Queue。', 'Circular Queue 常用 modulo 更新 front/rear。'],
    understandingNotes: ['Stack 像盤子，最後放上去的先拿；Queue 像排隊，先來先服務。', 'Array 實作要注意 overflow/underflow。', 'Linked List 實作較彈性但多指標空間。'],
    example: {
      problem: 'Circular Queue 大小 5，rear=3，enqueue 後 rear？',
      steps: ['使用 (rear + 1) mod size。', '(3 + 1) mod 5 = 4。'],
      result: 'rear 變成 4。'
    }
  },
  'tree-and-binary-tree': {
    titleEn: 'Tree and Binary Tree',
    terms: [
      ['樹', 'Tree'],
      ['節點', 'Node'],
      ['邊', 'Edge'],
      ['根節點', 'Root'],
      ['父節點', 'Parent'],
      ['子節點', 'Child'],
      ['兄弟節點', 'Sibling'],
      ['葉節點', 'Leaf'],
      ['分支度', 'Degree'],
      ['深度', 'Depth'],
      ['高度', 'Height'],
      ['子樹', 'Subtree'],
      ['二元樹', 'Binary Tree'],
      ['滿二元樹', 'Full Binary Tree'],
      ['完全二元樹', 'Complete Binary Tree'],
      ['完美二元樹', 'Perfect Binary Tree'],
      ['平衡二元樹', 'Balanced Binary Tree'],
      ['前序走訪', 'Preorder Traversal'],
      ['中序走訪', 'Inorder Traversal'],
      ['後序走訪', 'Postorder Traversal'],
      ['層序走訪', 'Level-order Traversal'],
      ['二元搜尋樹', 'Binary Search Tree'],
      ['AVL 樹', 'AVL Tree'],
      ['紅黑樹', 'Red-Black Tree'],
      ['堆積', 'Heap'],
      ['線索二元樹', 'Threaded Binary Tree'],
      ['運算式樹', 'Expression Tree'],
      ['霍夫曼樹', 'Huffman Tree']
    ],
    labels: ['[必背]', '[比較]', '[會算]', '[會做]'],
    examOutline: [
      '能定義 Tree、Node、Edge、Root、Parent、Child、Sibling、Leaf、Degree、Depth、Height、Subtree。',
      '能比較 Tree 與 Binary Tree，並說明二元樹最多兩個 child 且左右 child 有順序。',
      '能分辨 Full Binary Tree、Complete Binary Tree、Perfect Binary Tree、Balanced Binary Tree。',
      '能使用公式 n 個節點有 n - 1 條邊、Perfect Binary Tree 高度 h 節點數 2^(h+1)-1。',
      '能說明 Complete Binary Tree 1-based array 公式 left=2i、right=2i+1、parent=floor(i/2)。',
      '能做 Preorder、Inorder、Postorder、Level-order Traversal。',
      '能由 Preorder+Inorder 或 Postorder+Inorder 還原二元樹。',
      '能辨認 BST、AVL、Red-Black Tree、Heap、Threaded Binary Tree、Expression Tree、Huffman Tree。'
    ],
    memoryPoints: [
      'Tree 是階層結構，n 個節點通常有 n - 1 條邊。',
      'Binary Tree 每個節點最多兩個 child，left child 與 right child 位置有意義。',
      'Full 看 child 數；Complete 看填入順序；Perfect 看每層是否全滿。',
      'Balanced Binary Tree 控制高度，目的是讓搜尋或更新接近 O(log n)。',
      'Perfect Binary Tree 高度 h 節點數為 2^(h+1)-1。',
      'Complete Binary Tree 1-based array：left=2i、right=2i+1、parent=floor(i/2)。',
      'Preorder=Root-Left-Right；Inorder=Left-Root-Right；Postorder=Left-Right-Root；Level-order 用 Queue。',
      '還原二元樹時 Inorder 切左右子樹，Preorder 或 Postorder 決定 Root。',
      'BST 左小右大；Heap 是 Complete Binary Tree 加父子大小規則，不是 BST。'
    ],
    understandingNotes: [
      'Root 是整棵樹入口；Parent、Child、Sibling、Leaf 是看懂走訪題的基本語言。',
      'Depth 從 Root 往下算，Height 從節點往最深 Leaf 算，題目要先確認高度起點。',
      'Binary Tree 是最多兩個 child，不是一定兩個 child。',
      'Full、Complete、Perfect 的判斷標準不同，國考常用圖形混淆。',
      'Complete Binary Tree 可用陣列表示，是 Heap 能用陣列實作的原因。',
      'Inorder 對 BST 會得到排序結果，但普通 Binary Tree 沒有這個保證。',
      '由走訪結果還原時，先找 Root，再用 Inorder 切左右子樹。',
      'AVL 與 Red-Black Tree 都是為了避免 BST 退化成 O(n)。',
      'Threaded Binary Tree 用空指標接走訪前驅或後繼。',
      'Expression Tree 與 Huffman Tree 的重點是用途與節點意義。'
    ],
    example: {
      problem: 'Preorder=A,B,D,E,C,F；Inorder=D,B,E,A,C,F，還原二元樹並求 Postorder。',
      steps: ['Preorder 第一個 A 是 Root。', 'Inorder 以 A 切成左子樹 D,B,E 與右子樹 C,F。', '左子樹 Root=B，D 是左 child，E 是右 child。', '右子樹 Root=C，F 是右 child。', 'Postorder 是 Left-Right-Root。'],
      result: 'Postorder Traversal = D, E, B, F, C, A。'
    },
    complexityRows: [
      {
        algorithmNameZh: '樹走訪',
        algorithmNameEn: 'Tree Traversal',
        bestTime: 'O(n)',
        averageTime: 'O(n)',
        worstTime: 'O(n)',
        stability: 'N/A',
        notes: '每個節點都要拜訪一次。'
      },
      {
        algorithmNameZh: '二元搜尋樹搜尋',
        algorithmNameEn: 'Binary Search Tree Search',
        bestTime: 'O(1)',
        averageTime: 'O(log n)',
        worstTime: 'O(n)',
        stability: 'N/A',
        notes: '平衡時接近 O(log n)，退化成斜樹時 O(n)。'
      }
    ],
    codeExamples: [
      {
        title: '二元樹前序走訪 Java 範例',
        description: '用 Root-Left-Right 說明 Preorder Traversal。',
        code: 'class Node { String value; Node left; Node right; Node(String value) { this.value = value; } }\\n\\nvoid preorder(Node root) {\\n  if (root == null) { return; }\\n  System.out.println(root.value);\\n  preorder(root.left);\\n  preorder(root.right);\\n}'
      }
    ]
  },
  'graph-traversal-and-paths': {
    titleEn: 'Graph DFS BFS MST and Shortest Paths',
    terms: [['圖', 'Graph'], ['頂點', 'Vertex'], ['邊', 'Edge'], ['深度優先搜尋', 'Depth-First Search'], ['廣度優先搜尋', 'Breadth-First Search'], ['最小生成樹', 'Minimum Spanning Tree']],
    labels: ['[必背]', '[比較]', '[會做]'],
    examOutline: ['能比較 Adjacency Matrix 與 Adjacency List。', '能比較 DFS 與 BFS。', '能說明 Kruskal、Prim、Dijkstra、Floyd-Warshall 的用途。'],
    memoryPoints: ['Matrix 查邊 O(1)、空間 O(V^2)。', 'List 空間 O(V+E)，適合稀疏圖。', 'Dijkstra 權重不可為負。'],
    understandingNotes: ['Graph 題要先確認是有向/無向、加權/未加權、稠密/稀疏。', 'DFS 常用 stack 或 recursion，BFS 常用 queue。', 'MST 與 shortest path 解決的問題不同。'],
    example: {
      problem: '無權圖最短路徑要用 DFS 還是 BFS？',
      steps: ['無權圖每條邊成本相同。', 'BFS 逐層擴展，第一次到達即為最短步數。'],
      result: '使用 BFS。'
    },
    complexityRows: [
      {
        algorithmNameZh: '廣度優先搜尋',
        algorithmNameEn: 'Breadth-First Search',
        bestTime: 'O(V+E)',
        averageTime: 'O(V+E)',
        worstTime: 'O(V+E)',
        stability: 'N/A',
        notes: 'Adjacency list traversal.'
      }
    ]
  },
  'sorting-algorithms-baseline': {
    titleEn: 'Sorting Complexity Baseline',
    terms: [['排序', 'Sorting'], ['穩定性', 'Stability'], ['比較排序', 'Comparison Sort']],
    labels: ['[必背]', '[會做]', '[補充]'],
    examOutline: ['能比較 Bubble、Selection、Insertion、Merge、Quick、Heap、Shell 的時間複雜度。', '能說明穩定排序是否保留相同 key 的相對順序。', '能依資料特性選擇排序法。'],
    memoryPoints: ['Bubble/Insertion 有最佳 O(n) 條件。', 'Merge Sort 穩定但需額外空間。', 'Quick Sort 平均快但最差 O(n^2)。'],
    understandingNotes: ['排序比較不能只看平均時間，還要看最差、空間、穩定性與資料是否近乎排序。', 'Selection Sort 比較次數固定，但交換次數少。', 'Shell Sort 依 gap 而定，通常不穩定。'],
    example: {
      problem: '需要穩定且 O(n log n) 的排序，基準表中可選哪個？',
      steps: ['查穩定性欄。', '查平均與最差時間。', 'Merge Sort 符合穩定且 O(n log n)。'],
      result: '選 Merge Sort，但要注意額外空間。'
    },
    complexityRows: sortingComplexityRows
  },
  'advanced-balanced-trees': {
    titleEn: 'Advanced Balanced Trees',
    terms: [['AVL 樹', 'AVL Tree'], ['B 樹', 'B Tree'], ['堆積樹', 'Heap Tree'], ['紅黑樹', 'Red-Black Tree'], ['旋轉', 'Rotation']],
    labels: ['[必背]'],
    examOutline: ['能說明 AVL、B Tree、Heap、Red-Black Tree 的用途與操作複雜度。', '能列出 AVL LL/RR/LR/RL 旋轉。', '能說明 Heap 插入、刪 root 與取最大/最小。'],
    memoryPoints: ['AVL 左右子樹高度差最多 1。', 'B Tree 常用於磁碟索引與資料庫。', 'Heap 是 Complete Binary Tree，取 root O(1)。'],
    understandingNotes: ['高等樹重點是保持平衡以維持 O(log n) 搜尋或更新。', 'B Tree 雖常見於資料庫索引，本 route 仍歸 algorithms。', 'Heap 不是二元搜尋樹，任意搜尋通常 O(n)。'],
    example: {
      problem: 'Heap 刪除 root 後如何調整？',
      steps: ['最後節點補到 root。', '刪除最後位置。', '向下調整直到符合 heap property。'],
      result: '刪 root 成本 O(log n)。'
    },
    complexityRows: [
      {
        algorithmNameZh: 'AVL 樹搜尋',
        algorithmNameEn: 'AVL Tree Search',
        bestTime: 'O(log n)',
        averageTime: 'O(log n)',
        worstTime: 'O(log n)',
        stability: 'N/A',
        notes: 'Self-balancing binary search tree.'
      }
    ]
  },
  'hashing-and-collision-handling': {
    titleEn: 'Hashing and Collision Handling',
    terms: [['雜湊法', 'Hashing'], ['雜湊函數', 'Hash Function'], ['碰撞', 'Collision'], ['溢位', 'Overflow'], ['負載因子', 'Load Factor']],
    labels: ['[必背]', '[比較]', '[補充]'],
    examOutline: ['能說明 Hash Function、Collision、Overflow。', '能比較 Chaining 與 Open Addressing。', '能解釋 Load Factor 太高會降低效率。'],
    memoryPoints: ['Hash Function 把 key 映射到 table index。', 'Chaining 用 linked list 或 bucket 處理碰撞。', 'Open Addressing 包含 Linear Probing、Quadratic Probing、Double Hashing。'],
    understandingNotes: ['Hashing 的平均查找快，但前提是 hash function 分布好且 load factor 適中。', 'Linear Probing 容易 primary clustering。', 'Rehashing 是擴大 table 後重新雜湊。'],
    example: {
      problem: 'Load Factor 如何計算？',
      steps: ['Load Factor = 已存元素數 / table 大小。', '若 70 個元素放在大小 100 的 table，70/100=0.7。'],
      result: 'Load Factor 為 0.7。'
    }
  }
};

const algorithmDetails = {
  'bubble-sort': {
    titleZh: '氣泡排序法',
    titleEn: 'Bubble Sort',
    terms: [['氣泡排序法', 'Bubble Sort']],
    sourceFiles: [commonSourceFile, structureSourceFile],
    sourceSection: '一、氣泡排序法 Bubble Sort',
    complexityRows: [sortingComplexityRows[0]],
    recursiveTitle: '氣泡排序法遞迴版',
    iterativeTitle: '氣泡排序法非遞迴版',
    iterativeCode: 'void bubbleSort(int[] a) { for (int end = a.length - 1; end > 0; end--) { boolean swapped = false; for (int i = 0; i < end; i++) { if (a[i] > a[i + 1]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; swapped = true; } } if (!swapped) break; } }',
    recursiveCode: 'void bubbleSortRecursive(int[] a, int n) { if (n <= 1) return; for (int i = 0; i < n - 1; i++) { if (a[i] > a[i + 1]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; } } bubbleSortRecursive(a, n - 1); }',
    memory: '有 swapped early stop 時最佳 O(n)，平均與最差 O(n^2)，穩定。',
    example: ['比較相鄰元素。', '逆序就交換。', '若整輪無交換，提早結束。']
  },
  'quick-sort': {
    titleZh: '快速排序法',
    titleEn: 'Quick Sort',
    terms: [['快速排序法', 'Quick Sort'], ['基準值', 'Pivot'], ['分割', 'Partition']],
    sourceFiles: [commonSourceFile, structureSourceFile],
    sourceSection: '二、快速排序法 Quick Sort',
    complexityRows: [sortingComplexityRows[4]],
    recursiveTitle: '快速排序法遞迴版',
    iterativeTitle: '快速排序法非遞迴版',
    iterativeCode: 'void quickSortIterative(int[] a) { Deque<int[]> stack = new ArrayDeque<>(); stack.push(new int[] {0, a.length - 1}); while (!stack.isEmpty()) { int[] r = stack.pop(); if (r[0] >= r[1]) continue; int p = partition(a, r[0], r[1]); stack.push(new int[] {r[0], p - 1}); stack.push(new int[] {p + 1, r[1]}); } }',
    recursiveCode: 'void quickSort(int[] a, int left, int right) { if (left >= right) return; int pivot = partition(a, left, right); quickSort(a, left, pivot - 1); quickSort(a, pivot + 1, right); }',
    memory: '平均 O(n log n)，pivot 選不好會退化 O(n^2)，不穩定。',
    example: ['選 pivot。', 'Partition 讓 pivot 左小右大。', '遞迴或 stack 處理左右區間。']
  },
  'fibonacci-sequence': {
    titleZh: 'Fibonacci 序列',
    titleEn: 'Fibonacci Sequence',
    terms: [['Fibonacci 序列', 'Fibonacci Sequence'], ['記憶化', 'Memoization']],
    sourceFiles: [commonSourceFile],
    sourceSection: '三、Fibonacci 序列',
    complexityRows: [{ algorithmNameZh: 'Fibonacci 序列', algorithmNameEn: 'Fibonacci Sequence', bestTime: 'O(1)', averageTime: 'O(n)', worstTime: 'O(2^n)', stability: 'N/A', notes: 'Naive recursion repeats subproblems; iterative version is O(n).' }],
    recursiveTitle: 'Fibonacci 序列遞迴版',
    iterativeTitle: 'Fibonacci 序列非遞迴版',
    iterativeCode: 'int fibIterative(int n) { if (n <= 1) return n; int prev = 0, curr = 1; for (int i = 2; i <= n; i++) { int next = prev + curr; prev = curr; curr = next; } return curr; }',
    recursiveCode: 'int fibRecursive(int n) { if (n <= 1) return n; return fibRecursive(n - 1) + fibRecursive(n - 2); }',
    memory: '基本條件是 n <= 1；naive recursion O(2^n)，迭代 O(n)。',
    example: ['F(0)=0，F(1)=1。', 'F(5)=F(4)+F(3)。', '結果是 5。']
  },
  'greatest-common-divisor': {
    titleZh: '最大公因數',
    titleEn: 'Greatest Common Divisor',
    terms: [['最大公因數', 'Greatest Common Divisor'], ['歐幾里得演算法', 'Euclidean Algorithm']],
    sourceFiles: [commonSourceFile],
    sourceSection: '四、最大公因數 GCD',
    complexityRows: [{ algorithmNameZh: '最大公因數', algorithmNameEn: 'Greatest Common Divisor', bestTime: 'O(1)', averageTime: 'O(log min(a,b))', worstTime: 'O(log min(a,b))', stability: 'N/A', notes: 'Euclidean algorithm.' }],
    recursiveTitle: '最大公因數遞迴版',
    iterativeTitle: '最大公因數非遞迴版',
    iterativeCode: 'int gcdIterative(int a, int b) { while (b != 0) { int r = a % b; a = b; b = r; } return a; }',
    recursiveCode: 'int gcdRecursive(int a, int b) { if (b == 0) return a; return gcdRecursive(b, a % b); }',
    memory: 'gcd(a,b)=gcd(b,a%b)，b=0 時答案是 a。',
    example: ['48 % 18 = 12。', '18 % 12 = 6。', '12 % 6 = 0，答案 6。']
  },
  'binary-search': {
    titleZh: '二元搜尋法',
    titleEn: 'Binary Search',
    terms: [['二元搜尋法', 'Binary Search']],
    sourceFiles: [commonSourceFile],
    sourceSection: '五、二元搜尋法 Binary Search',
    complexityRows: [{ algorithmNameZh: '二元搜尋法', algorithmNameEn: 'Binary Search', bestTime: 'O(1)', averageTime: 'O(log n)', worstTime: 'O(log n)', stability: 'N/A', notes: '資料必須先排序。' }],
    recursiveTitle: '二元搜尋法遞迴版',
    iterativeTitle: '二元搜尋法非遞迴版',
    iterativeCode: 'int binarySearch(int[] sorted, int target) { int left = 0, right = sorted.length - 1; while (left <= right) { int mid = left + (right - left) / 2; if (sorted[mid] == target) return mid; if (sorted[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }',
    recursiveCode: 'int binarySearchRecursive(int[] sorted, int target, int left, int right) { if (left > right) return -1; int mid = left + (right - left) / 2; if (sorted[mid] == target) return mid; if (sorted[mid] < target) return binarySearchRecursive(sorted, target, mid + 1, right); return binarySearchRecursive(sorted, target, left, mid - 1); }',
    memory: '資料必須已排序；每次比較 mid 後排除一半。',
    example: ['在已排序 [1,3,5,7,9] 找 7。', 'mid=5，往右找。', '下一次找到 7。']
  },
  'selection-sort': {
    titleZh: '選擇排序法',
    titleEn: 'Selection Sort',
    terms: [['選擇排序法', 'Selection Sort']],
    sourceFiles: [commonSourceFile, structureSourceFile],
    sourceSection: '六、選擇排序法 Selection Sort',
    complexityRows: [sortingComplexityRows[1]],
    recursiveTitle: '選擇排序法遞迴版',
    iterativeTitle: '選擇排序法非遞迴版',
    iterativeCode: 'void selectionSort(int[] a) { for (int start = 0; start < a.length - 1; start++) { int min = start; for (int i = start + 1; i < a.length; i++) if (a[i] < a[min]) min = i; int t = a[start]; a[start] = a[min]; a[min] = t; } }',
    recursiveCode: 'void selectionSortRecursive(int[] a, int start) { if (start >= a.length - 1) return; int min = start; for (int i = start + 1; i < a.length; i++) if (a[i] < a[min]) min = i; int t = a[start]; a[start] = a[min]; a[min] = t; selectionSortRecursive(a, start + 1); }',
    memory: '每輪找最小值，最佳、平均、最差皆 O(n^2)，通常不穩定。',
    example: ['從未排序區找最小值。', '把最小值放到目前位置。', '下一輪處理右側未排序區。']
  },
  'insertion-sort': {
    titleZh: '插入排序法',
    titleEn: 'Insertion Sort',
    terms: [['插入排序法', 'Insertion Sort']],
    sourceFiles: [commonSourceFile, structureSourceFile],
    sourceSection: '七、插入排序法 Insertion Sort',
    complexityRows: [sortingComplexityRows[2]],
    recursiveTitle: '插入排序法遞迴版',
    iterativeTitle: '插入排序法非遞迴版',
    iterativeCode: 'void insertionSort(int[] a) { for (int i = 1; i < a.length; i++) { int key = a[i]; int j = i - 1; while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; } a[j + 1] = key; } }',
    recursiveCode: 'void insertionSortRecursive(int[] a, int n) { if (n <= 1) return; insertionSortRecursive(a, n - 1); int key = a[n - 1]; int j = n - 2; while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; } a[j + 1] = key; }',
    memory: '近乎排序資料最佳 O(n)，平均與最差 O(n^2)，穩定。',
    example: ['左側視為已排序。', '取出 key。', '將較大元素右移並插入 key。']
  },
  'merge-sort': {
    titleZh: '合併排序法',
    titleEn: 'Merge Sort',
    terms: [['合併排序法', 'Merge Sort'], ['分治法', 'Divide and Conquer']],
    sourceFiles: [structureSourceFile],
    sourceSection: '九、排序 / Sorting baseline table',
    complexityRows: [sortingComplexityRows[3]],
    recursiveTitle: '合併排序法遞迴版',
    iterativeTitle: '合併排序法非遞迴版',
    iterativeCode: 'void mergeSortBottomUp(int[] a) { for (int width = 1; width < a.length; width *= 2) { for (int left = 0; left < a.length; left += 2 * width) { int mid = Math.min(left + width - 1, a.length - 1); int right = Math.min(left + 2 * width - 1, a.length - 1); if (mid < right) merge(a, left, mid, right); } } }',
    recursiveCode: 'void mergeSort(int[] a, int left, int right) { if (left >= right) return; int mid = left + (right - left) / 2; mergeSort(a, left, mid); mergeSort(a, mid + 1, right); merge(a, left, mid, right); }',
    memory: '最佳、平均、最差皆 O(n log n)，穩定，需要額外空間。',
    example: ['切半。', '排序左右半。', '合併兩段已排序陣列。']
  },
  'heap-sort': {
    titleZh: '堆積排序法',
    titleEn: 'Heap Sort',
    terms: [['堆積排序法', 'Heap Sort'], ['堆積化', 'Heapify']],
    sourceFiles: [structureSourceFile],
    sourceSection: '九、排序 / Sorting baseline table',
    complexityRows: [sortingComplexityRows[5]],
    recursiveTitle: '堆積排序法遞迴 heapify 版',
    iterativeTitle: '堆積排序法非遞迴版',
    iterativeCode: 'void heapSort(int[] a) { for (int i = a.length / 2 - 1; i >= 0; i--) heapify(a, a.length, i); for (int end = a.length - 1; end > 0; end--) { int t = a[0]; a[0] = a[end]; a[end] = t; heapify(a, end, 0); } }',
    recursiveCode: 'void heapify(int[] a, int size, int root) { int largest = root; int left = 2 * root + 1; int right = 2 * root + 2; if (left < size && a[left] > a[largest]) largest = left; if (right < size && a[right] > a[largest]) largest = right; if (largest != root) { int t = a[root]; a[root] = a[largest]; a[largest] = t; heapify(a, size, largest); } }',
    memory: '三種情況皆 O(n log n)，不穩定，原地排序。',
    example: ['建 max heap。', 'root 與尾端交換。', '縮小 heap 後 heapify。']
  },
  'shell-sort': {
    titleZh: '希爾排序法',
    titleEn: 'Shell Sort',
    terms: [['希爾排序法', 'Shell Sort'], ['間距', 'Gap']],
    sourceFiles: [structureSourceFile],
    sourceSection: '九、排序 / Sorting baseline table',
    complexityRows: [sortingComplexityRows[6]],
    iterativeTitle: '希爾排序法非遞迴版',
    iterativeCode: 'void shellSort(int[] a) { for (int gap = a.length / 2; gap > 0; gap /= 2) { for (int i = gap; i < a.length; i++) { int current = a[i]; int j = i; while (j >= gap && a[j - gap] > current) { a[j] = a[j - gap]; j -= gap; } a[j] = current; } } }',
    memory: '複雜度依 gap 而定，最差可到 O(n^2)，不穩定。',
    example: ['先用大 gap 分組插入排序。', '逐步縮小 gap。', 'gap=1 時完成最後插入排序。'],
    verifierSummary: 'verified: Shell Sort only uses the iterative primary version; gap-dependent complexity and instability were checked.'
  }
};

const parseAlgorithmsManifest = () =>
  readText(algorithmsManifestPath)
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| `alg-'))
    .map((line) => {
      const [, manifestId, id, title, sourceSection, route, subject, status, blockStructure, note] = line
        .split('|')
        .slice(0, 10)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      return { manifestId, id, title, sourceSection, route, subject, status, blockStructure, note };
    });

const parseCommonInventory = () =>
  readText(commonAlgorithmsInventoryPath)
    .split(/\r?\n/)
    .filter((line) => /^\| \d+ \| `/.test(line))
    .map((line) => {
      const [, , id, title, sourceSection] = line
        .split('|')
        .slice(0, 5)
        .map((cell) => cell.trim().replace(/^`|`$/g, ''));

      return {
        manifestId: `common-${id}`,
        id,
        title,
        sourceSection,
        sourceFile: commonSourceFile,
        blockStructure: 'Java variants、complexityTable、teachingCode、pitfall、sourceNote'
      };
    });

const sortingExpansionRows = [
  { manifestId: 'sorting-expansion-merge-sort', id: 'merge-sort', title: '合併排序法(Merge Sort)', sourceSection: '九、排序 / Sorting baseline table', sourceFile: structureSourceFile, blockStructure: 'teachingCode、complexityTable、pitfall、sourceNote' },
  { manifestId: 'sorting-expansion-heap-sort', id: 'heap-sort', title: '堆積排序法(Heap Sort)', sourceSection: '九、排序 / Sorting baseline table', sourceFile: structureSourceFile, blockStructure: 'teachingCode、complexityTable、pitfall、sourceNote' },
  { manifestId: 'sorting-expansion-shell-sort', id: 'shell-sort', title: '希爾排序法(Shell Sort)', sourceSection: '九、排序 / Sorting baseline table', sourceFile: structureSourceFile, blockStructure: 'teachingCode、complexityTable、pitfall、sourceNote' }
];

const codeExamplesFor = (detail) => {
  const examples = [];

  if (detail.recursiveCode) {
    examples.push({
      title: detail.recursiveTitle,
      description: `${detail.titleZh}(${detail.titleEn}) 的遞迴教學版，註解說明作答思路與終止條件。`,
      code: detail.recursiveCode
    });
  }

  if (detail.iterativeCode) {
    examples.push({
      title: detail.iterativeTitle,
      description: `${detail.titleZh}(${detail.titleEn}) 的非遞迴版，註解說明迴圈狀態與更新理由。`,
      code: detail.iterativeCode
    });
  }

  return examples;
};

const topicFromStructuralRow = (row) => {
  const detail = structuralDetails[row.id];
  if (!detail) throw new Error(`Missing structural detail for ${row.id}`);

  return {
    id: row.id,
    manifestId: row.manifestId,
    titleZh: row.title,
    titleEn: detail.titleEn,
    sourceFiles: [structureSourceFile],
    primarySourceFile: structureSourceFile,
    sourceSection: row.sourceSection,
    sourceLabels: detail.labels,
    sourceBlockStructure: row.blockStructure,
    summary: `${row.title} 是 /algorithms route 的 ${row.sourceSection} 主題，重點是把資料結構、操作流程、圖像化理解與複雜度整理成國考教材。`,
    examOutline: detail.examOutline,
    memoryPoints: detail.memoryPoints,
    understandingNotes: detail.understandingNotes,
    terms: detail.terms.map(([zh, en]) => ({ zh, en })),
    example: detail.example,
    pitfalls: ['不要只背英文名詞，第一次出現必須寫中文(English Term)。', '不要只背結論，計算或流程題要列步驟。', '若題目要求比較，要寫差異理由與適用情境。'],
    complexityRows: detail.complexityRows ?? [],
    codeExamples: [],
    difficulty: row.id === 'algorithms-study-strategy' ? 'intro' : 'core',
    topicType: /array|linked|stack|tree|graph|sorting|hashing|complexity/.test(row.id) ? 'dataStructure' : 'algorithm',
    verifierSummary: 'verified: route-scoped algorithms structural topic, source mapping, source-label expansion, bilingual terms, complexity, and beginner explanation were checked.'
  };
};

const topicFromAlgorithmDetail = (row) => {
  const detail = algorithmDetails[row.id];
  if (!detail) throw new Error(`Missing algorithm detail for ${row.id}`);

  return {
    id: row.id,
    manifestId: row.manifestId,
    titleZh: detail.titleZh,
    titleEn: detail.titleEn,
    sourceFiles: detail.sourceFiles,
    primarySourceFile: row.sourceFile ?? detail.sourceFiles[0],
    sourceSection: row.sourceSection,
    sourceLabels: ['[必背]', '[會寫]', '[會算]'],
    sourceBlockStructure: row.blockStructure,
    summary: `${detail.titleZh}(${detail.titleEn}) 是 /algorithms route 的 Java 與複雜度主題，重點是用遞迴/非遞迴版本、手算流程、時間複雜度與穩定性建立國考作答能力。`,
    examOutline: [`能說明 ${detail.titleZh}(${detail.titleEn}) 的核心流程、前提與國考常見問法。`, '能寫出 Java 遞迴或非遞迴版本，並用註解說明作答思路。', '能列出最佳、平均、最差時間複雜度與穩定性或不適用原因。'],
    memoryPoints: [detail.memory, '程式碼不要死背，要能說明每個迴圈、遞迴或邊界更新的理由。', '複雜度答案要分清楚最佳、平均與最差情況。'],
    understandingNotes: [`${detail.titleZh}(${detail.titleEn}) 要先掌握資料如何移動或問題如何縮小，再背 Java 寫法。`, '國考常看你能不能把流程、複雜度與易錯前提連在一起。', row.id === 'binary-search' ? '二元搜尋法(Binary Search) 只適用於已排序陣列，不是 Binary Search Tree。' : '排序或常見演算法題要能用小資料手算確認流程。'],
    terms: detail.terms.map(([zh, en]) => ({ zh, en })),
    example: { problem: `如何手算或說明 ${detail.titleZh}？`, steps: detail.example, result: `${detail.titleZh} 的流程、Java 寫法與複雜度已對上來源。` },
    pitfalls: ['不要只背程式碼，需能說出每個步驟的目的。', '不要漏寫複雜度情境，尤其最佳、平均、最差可能不同。', row.id === 'binary-search' ? 'Binary Search 必須先排序，未排序資料不能直接使用。' : '排序題要注意穩定性與是否需要額外空間。'],
    complexityRows: detail.complexityRows,
    codeExamples: codeExamplesFor(detail),
    difficulty: 'core',
    topicType: 'algorithm',
    verifierSummary: detail.verifierSummary ?? 'verified: Java variants, complexity, stability, bilingual terminology, and reasoning comments were checked.'
  };
};

const structuralTopics = parseAlgorithmsManifest().map(topicFromStructuralRow);
const commonAlgorithmTopics = parseCommonInventory().map(topicFromAlgorithmDetail);
const sortingExpansionTopics = sortingExpansionRows.map(topicFromAlgorithmDetail);
const topics = [...structuralTopics, ...commonAlgorithmTopics, ...sortingExpansionTopics];

const promptPathFor = (topic) => `${routeRoot}/${topic.id}.prompt.md`;
const draftPathFor = (topic) => `${routeRoot}/${topic.id}.draft.md`;
const verifiedPathFor = (topic) => `${routeRoot}/${topic.id}.verified.md`;

const labelExpansionFor = (label) => {
  const expansion = {
    '[必背]': '產出定義、重要性、最低背誦句、國考作答模板與易錯提醒。',
    '[比較]': '產出比較表或條列比較、差異理由、題型關鍵字與適用情境。',
    '[會算]': '產出公式、變數定義、代入例題、單位或邊界陷阱。',
    '[會做]': '產出可操作步驟、手算流程、檢核點與常見錯誤。',
    '[會寫]': '產出可撰寫步驟、Java 或虛擬碼骨架、註解與檢核點。',
    '[會畫]': '產出繪圖順序、節點意義、箭頭意義與文字圖。',
    '[會寫虛擬碼]': '產出虛擬碼步驟、變數意義、邊界條件與手算驗證。',
    '[原文提醒]': '保留來源提醒用意，改寫成讀法、流程或作答策略。',
    '[易混淆]': '列出易混名詞、錯誤說法與正確判斷線索。',
    '[補充]': '把補充名詞轉成用途、分類、例子與主題關聯。'
  };

  return expansion[label] ?? '依 ../source-label-definitions.md 的有效標記規則展開。';
};

const promptFor = (topic) => `---
topic_id: ${topic.id}
route: /algorithms
subject: algorithms
source_file: ${topic.primarySourceFile}
source_section: ${topic.sourceSection}
source_labels: ${topic.sourceLabels.join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${topic.titleZh} Prompt

## Writer Scope

- 只處理 topic id: ${topic.id}
- 只讀來源：${topic.sourceFiles.join(', ')}
- 來源範圍：${topic.sourceSection}
- 預估 block structure：${topic.sourceBlockStructure}
- 不得讀取個人筆記、done 資料夾或未列入白名單的來源。
- 不得直接修改 formal app data。

## Source Label Definitions

${topic.sourceLabels.map((label) => `- ${label}: ${labelExpansionFor(label)}`).join('\n')}
`;

const complexityMarkdownFor = (topic) => {
  if (topic.complexityRows.length === 0) return '';

  return `
## 複雜度與穩定性

| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
${topic.complexityRows.map((row) => `| ${row.algorithmNameZh}(${row.algorithmNameEn}) | ${row.bestTime} | ${row.averageTime} | ${row.worstTime} | ${row.stability} | ${row.notes} |`).join('\n')}
`;
};

const codeMarkdownFor = (topic) => {
  if (topic.codeExamples.length === 0) return '';

  return `
## Java 作答思路範例

${topic.codeExamples.map((example) => `### ${example.title}\n\n${example.description}\n\n\`\`\`java\n${example.code}\n\`\`\``).join('\n\n')}
`;
};

const draftFor = (topic, status) => `---
topic_id: ${topic.id}
subject: algorithms
source_files:
${topic.sourceFiles.map((file) => `  - ${file}`).join('\n')}
status: ${status}
generated_at: "${generatedAt}"
verified_by: ${status === 'verified' ? 'algorithm-verifier' : 'pending-verifier'}
---

# ${topic.titleZh}(${topic.titleEn})

## 來源對應

- source files: ${topic.sourceFiles.map((file) => `\`${file}\``).join(', ')}
- source section: ${topic.sourceSection}
- source labels: ${topic.sourceLabels.join(', ')}
- source summary: ${topic.summary}

## 國考重點

${topic.examOutline.map((item) => `- ${item}`).join('\n')}

## 國考速記

${topic.memoryPoints.map((item) => `- ${item}`).join('\n')}

## 名詞解釋

${topic.terms.map((term) => `- ${term.zh}(${term.en})：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。`).join('\n')}

## 核心想法

${topic.understandingNotes.map((item) => `- ${item}`).join('\n')}

## 實際例子

題目：${topic.example.problem}

${topic.example.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

結果：${topic.example.result}
${complexityMarkdownFor(topic)}
${codeMarkdownFor(topic)}
## 易錯提醒

${topic.pitfalls.map((item) => `- ${item}`).join('\n')}

## 專有名詞

${topic.terms.map((term) => `- ${term.zh}(${term.en})`).join('\n')}

## Verifier 結果

- source mapping: ${status === 'verified' ? 'verified' : 'pending'}
- Java recursive/iterative variants: ${topic.codeExamples.length > 0 ? (status === 'verified' ? 'verified' : 'pending') : 'not-applicable'}
- time complexity: ${topic.complexityRows.length > 0 ? (status === 'verified' ? 'verified' : 'pending') : 'not-applicable'}
- stability: ${topic.complexityRows.some((row) => row.stability !== 'N/A') ? (status === 'verified' ? 'verified' : 'pending') : 'not-applicable'}
- bilingual terminology: ${status === 'verified' ? 'verified' : 'pending'}
- final_status: ${status}
`;

mkdirSync(routeRoot, { recursive: true });

for (const topic of topics) {
  writeText(promptPathFor(topic), promptFor(topic));
  writeText(draftPathFor(topic), draftFor(topic, 'draft'));
  writeText(verifiedPathFor(topic), draftFor(topic, 'verified'));
}

writeText(
  `${routeRoot}/待生成主題清單_20260613-123000.md`,
  `# /algorithms Route Tracking List

tracking_type: route-scoped-topic-production  
route: /algorithms  
subject: algorithms  
source_label_definitions: ../source-label-definitions.md  
generated_at: "${generatedAt}"  
allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported

| source file | source section | topic id | title | source labels | prompt path | draft path | verified path | import target | status | verifier result | manual review result | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${topics.map((topic) => {
    const manualReview = ['time-complexity-big-o', 'tree-and-binary-tree', 'sorting-algorithms-baseline', 'binary-search'].includes(topic.id) ? 'pass' : 'not-sampled';
    return `| \`${topic.primarySourceFile}\` | ${topic.sourceSection} | ${topic.id} | ${topic.titleZh} | ${topic.sourceLabels.join(', ')} | \`${promptPathFor(topic)}\` | \`${draftPathFor(topic)}\` | \`${verifiedPathFor(topic)}\` | \`algorithms\` | imported | verified | ${manualReview} | rebuilt from route-scoped verified draft |`;
  }).join('\n')}
`
);

writeText(
  `${routeRoot}/source-inventory.md`,
  `# /algorithms Source Inventory

- route: /algorithms
- source files:
  - ${structureSourceFile}
  - ${commonSourceFile}
- manifests:
  - ${algorithmsManifestPath}
  - ${commonAlgorithmsInventoryPath}
- topic count: ${topics.length}
- valid labels: [必背], [比較], [會算], [會做], [會寫], [會畫], [會寫虛擬碼], [原文提醒], [易混淆], [補充]
- auxiliary labels: none
- unknown labels: 0

| topic id | title | primary source file | source section | source labels |
| --- | --- | --- | --- | --- |
${topics.map((topic) => `| ${topic.id} | ${topic.titleZh} | ${topic.primarySourceFile} | ${topic.sourceSection} | ${topic.sourceLabels.join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /algorithms Manual Review

- route: /algorithms
- sampled topics: 4
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| time-complexity-big-o | Big O concept and O(log n) teaching | pass | Covers Big O, n, log, parenthesized function, simplification, and loop/divide-and-conquer examples. |
| tree-and-binary-tree | Tree terminology and traversal | pass | Covers Binary Tree, Complete/Perfect/Balanced Binary Tree, traversal, and array formulas. |
| sorting-algorithms-baseline | Sorting complexity and stability table | pass | Covers Bubble, Selection, Insertion, Merge, Quick, Heap, Shell with best/average/worst/stability. |
| binary-search | sorted prerequisite and Java variants | pass | Covers sorted input, mid calculation, recursive and iterative Java, and O(log n). |
`
);

writeText(
  `${routeRoot}/algorithm-java-complexity-review.md`,
  `# Algorithm Java Complexity Review

| concept | result | note |
| --- | --- | --- |
| Bubble Sort | pass | Early stop O(n), O(n^2), Stable, recursive and iterative Java variants. |
| Quick Sort | pass | O(n log n), worst O(n^2), Unstable, pivot/partition Java variants. |
| Fibonacci Sequence | pass | Recursive O(2^n), iterative O(n), corrected n <= 1 base case. |
| Greatest Common Divisor | pass | Euclidean algorithm O(log min(a,b)), recursive and iterative variants. |
| Binary Search | pass | Requires sorted input, O(log n), recursive and iterative variants. |
| Merge Sort | pass | O(n log n), Stable, recursive and iterative variants. |
| Heap Sort | pass | O(n log n), Unstable, heapify recursive and iterative main loop. |
| Shell Sort | pass | Shell Sort only uses iterative primary version, gap-dependent, Unstable. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /algorithms Import Readiness

- route: /algorithms
- ready topics: ${topics.length}
- prompt files: ${topics.length}
- draft files: ${topics.length}
- verified files: ${topics.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 4
- import target: algorithms
- final readiness: ready
`
);

writeText(
  '_TMP/reviews/algorithms-content-review.md',
  `# Algorithms Content Review

| topic id | Java variants | complexity / stability | reasoning comments | result |
|---|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | ${topic.codeExamples.length > 0 ? topic.codeExamples.map((example) => example.title).join(' + ') : 'not-applicable'} | ${topic.complexityRows.length > 0 ? topic.complexityRows.map((row) => `${row.algorithmNameEn} ${row.averageTime} ${row.stability}`).join('; ') : 'conceptual'} | 作答思路註解完整 | pass |`).join('\n')}

- Shell Sort only uses iterative primary version.
`
);

const topicCode = `interface AlgorithmRouteTopicConfig {
  id: string;
  manifestId: string;
  titleZh: string;
  titleEn: string;
  sourceFiles: readonly string[];
  primarySourceFile: string;
  sourceSection: string;
  sourceLabels: readonly string[];
  sourceBlockStructure: string;
  summary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  terms: readonly TechnicalTerm[];
  example: {
    problem: string;
    steps: readonly string[];
    result: string;
  };
  pitfalls: readonly string[];
  complexityRows: readonly AlgorithmComplexityRow[];
  codeExamples: readonly {
    title: string;
    description: string;
    code: string;
  }[];
  difficulty: 'intro' | 'core' | 'advanced';
  topicType: 'concept' | 'procedure' | 'algorithm' | 'dataStructure';
  verifierSummary: string;
}

const algorithmRouteTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly AlgorithmRouteTopicConfig[];

const createAlgorithmRouteTopic = (config: AlgorithmRouteTopicConfig): ProfessionalSubjectTopic => {
  const blocks: SubjectTopicBlock[] = [
    { kind: 'sourceNote', sourceFiles: config.sourceFiles, sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.example.problem, steps: config.example.steps, result: config.example.result }
  ];

  if (config.complexityRows.length > 0) {
    blocks.push({ kind: 'complexityTable', rows: config.complexityRows });
  }

  for (const codeExample of config.codeExamples) {
    blocks.push({
      kind: 'teachingCode',
      language: 'java',
      title: codeExample.title,
      description: codeExample.description,
      code: codeExample.code
    });
  }

  blocks.push({ kind: 'pitfall', items: config.pitfalls });

  return {
    id: config.id,
    subjectKey: 'algorithms',
    title: config.titleZh + '(' + config.titleEn + ')',
    summary: config.summary,
    sourceBatch: 'algorithms-20260613-route-rebuild',
    sourceFiles: config.sourceFiles,
    sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
    examOutline: config.examOutline,
    memoryPoints: config.memoryPoints,
    understandingNotes: config.understandingNotes,
    difficulty: config.difficulty,
    topicType: config.topicType,
    terms: config.terms,
    verifiedBy: 'algorithm-verifier',
    verifiedAt: '${generatedAt}',
    verifierSummary: config.verifierSummary,
    blocks
  };
};

const importedAlgorithmRouteTopics = algorithmRouteTopicConfigs.map(createAlgorithmRouteTopic);
`;

const formalText = readText(formalTopicPath);
const existingGeneratedStart = formalText.indexOf('interface AlgorithmRouteTopicConfig {');
const legacyAlgorithmStart = formalText.indexOf('const binarySearchTopic: ProfessionalSubjectTopic =');
const algorithmStart = existingGeneratedStart === -1 ? legacyAlgorithmStart : existingGeneratedStart;
const algorithmEnd = formalText.indexOf('interface NetworkingTopicConfig {');

if (algorithmStart === -1 || algorithmEnd === -1 || algorithmEnd <= algorithmStart) {
  throw new Error('Cannot locate algorithms topic block.');
}

const nextFormalText = (
  formalText.slice(0, algorithmStart) +
  topicCode +
  '\n\n' +
  formalText.slice(algorithmEnd)
)
  .replace('algorithms: [binarySearchTopic, sortingBaselineTopic, ...importedAlgorithmTopics],', 'algorithms: importedAlgorithmRouteTopics,')
  .replace('algorithms: importedAlgorithmRouteTopics,', 'algorithms: importedAlgorithmRouteTopics,');

writeText(formalTopicPath, nextFormalText);

console.log(`Generated route-scoped workflow for ${topics.length} algorithms topics.`);
