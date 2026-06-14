---
topic_id: tree-and-binary-tree
formal_topic_id: algorithms-tree-and-binary-tree
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 樹與二元樹(Tree and Binary Tree)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `七、Tree`
- source labels: [必背], [比較], [會算], [會做]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `七、Tree`
- topic id: `tree-and-binary-tree`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [比較], [會算], [會做]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 樹(Tree) 是由節點(Node)與邊(Edge)形成的階層式資料結構，通常有一個根節點(Root)，且任兩節點之間只有一條路徑。
- 必會名詞包含父節點(Parent)、子節點(Child)、兄弟節點(Sibling)、葉節點(Leaf)、分支度(Degree)、層級(Level)、深度(Depth)、高度(Height)與子樹(Subtree)。
- 二元樹(Binary Tree) 的定義是每個節點最多只有兩個子節點，且左子節點(Left Child)與右子節點(Right Child)有順序差異。
- 一般樹(Tree)的子節點數量不限；二元樹(Binary Tree)每個節點最多兩個 child。
- 二元樹種類要能分辨滿二元樹(Full Binary Tree)、完全二元樹(Complete Binary Tree)、完美二元樹(Perfect Binary Tree)與平衡二元樹(Balanced Binary Tree)。
- 常見公式：n 個節點的樹有 n - 1 條邊；高度 h 的 Perfect Binary Tree 節點數為 2^(h+1)-1；第 i 層最多 2^i 個節點。
- Complete Binary Tree 若用 1-based index 陣列表示，節點 i 的 left=2i、right=2i+1、parent=floor(i/2)。
- 四種走訪必會：前序走訪(Preorder Traversal)、中序走訪(Inorder Traversal)、後序走訪(Postorder Traversal)、層序走訪(Level-order Traversal)。
- 由走訪結果還原二元樹時，前序+中序或後序+中序通常可唯一還原；只有前序+後序通常不夠。
- 延伸樹種要能辨認用途：二元搜尋樹(Binary Search Tree)、AVL 樹(AVL Tree)、紅黑樹(Red-Black Tree)、堆積(Heap)、線索二元樹(Threaded Binary Tree)、運算式樹(Expression Tree)、霍夫曼樹(Huffman Tree)。

### [必背] 最小背誦句與記憶支架
- Tree 是階層結構；n 個節點通常有 n - 1 條邊，因為 Root 以外每個節點都有一條連回 Parent 的邊。
- Binary Tree 每個節點最多兩個 child，而且 left child 與 right child 的位置有意義，不能任意交換。
- Full Binary Tree 看 child 數：每個節點要嘛 0 個 child，要嘛剛好 2 個 child。
- Complete Binary Tree 看填入順序：除了最後一層外都滿，最後一層由左到右填。
- Perfect Binary Tree 看是否每層全滿：所有內部節點都有 2 個 child，所有 Leaf 都在同一層。
- Balanced Binary Tree 看高度是否接近平衡，目的通常是讓搜尋、插入、刪除接近 O(log n)。
- Perfect Binary Tree 高度 h 的節點總數是 2^(h+1)-1；若 Root 高度從 0 算，第 i 層最多 2^i 個節點。
- Complete Binary Tree 的 1-based array 公式：left=2i、right=2i+1、parent=floor(i/2)。
- 走訪口訣：Preorder = Root-Left-Right；Inorder = Left-Root-Right；Postorder = Left-Right-Root；Level-order = 由上到下、由左到右。
- 還原二元樹時，中序走訪(Inorder Traversal)用來切左右子樹，前序或後序用來決定 Root。
- BST 左小右大；Heap 是 Complete Binary Tree 加上父子大小規則，不是 Binary Search Tree。

### [必背] 名詞定義與雙語術語
- 樹(Tree)：一種階層式資料結構，由節點(Node)和邊(Edge)組成；常用來表示目錄、組織圖、語法結構。
- 節點(Node)：樹中的一個資料單位，例如 A、B、C 每個都是節點。
- 邊(Edge)：連接父節點與子節點的線；n 個節點的樹通常有 n - 1 條邊。
- 根節點(Root)：整棵樹最上層的起點，沒有 parent。
- 父節點(Parent)：某節點上一層、直接連到它的節點。
- 子節點(Child)：某節點下一層、由它直接連出去的節點。
- 兄弟節點(Sibling)：擁有同一個 parent 的節點。
- 葉節點(Leaf)：沒有任何 child 的節點。
- 分支度(Degree)：一個節點擁有的 child 數量；二元樹的 Degree 最多為 2。
- 深度(Depth)：從 Root 到某節點經過的邊數。
- 高度(Height)：從某節點到最深 Leaf 經過的最長邊數。
- 子樹(Subtree)：以某個節點為 Root 往下形成的小樹。
- 二元樹(Binary Tree)：每個節點最多兩個 child，且左右 child 有順序。
- 滿二元樹(Full Binary Tree)：每個節點的 child 數只能是 0 或 2。
- 完全二元樹(Complete Binary Tree)：除最後一層外都填滿，最後一層由左到右填。
- 完美二元樹(Perfect Binary Tree)：所有內部節點都有兩個 child，所有 Leaf 都在同一層。
- 平衡二元樹(Balanced Binary Tree)：左右子樹高度差被控制，避免退化成長鏈。
- 樹走訪(Tree Traversal)：依規則拜訪樹上每個節點。
- 二元搜尋樹(Binary Search Tree)：左子樹小於 Root，右子樹大於 Root 的二元樹。
- AVL 樹(AVL Tree)：每個節點左右子樹高度差最多 1 的自平衡 BST。
- 紅黑樹(Red-Black Tree)：用紅黑顏色規則維持近似平衡的 BST。
- 堆積(Heap)：Complete Binary Tree 加上父子優先順序規則，常用於 priority queue。
- 線索二元樹(Threaded Binary Tree)：利用空指標指向走訪前驅或後繼，降低走訪時對 stack 或 recursion 的依賴。
- 運算式樹(Expression Tree)：以運算子當內部節點、運算元當 Leaf 的樹。
- 霍夫曼樹(Huffman Tree)：用頻率建立最佳前綴碼的樹，常用於壓縮。

### [必背] 核心理解與應用脈絡
- Root 是整棵樹的入口；從 Root 往下看，每個節點可以有 child，child 的上一層節點就是 parent。
- Leaf 是沒有 child 的節點；Degree 是 child 數量。二元樹(Binary Tree)的每個節點 Degree 最多為 2。
- Depth 是從 Root 往下走到某節點的距離；Height 是從某節點往下到最深 Leaf 的距離。題目要先確認高度是否從 0 算起。
- Binary Tree 不只是「有兩個孩子」，而是「最多兩個孩子」；只有一個 child 或沒有 child 也仍可能是 Binary Tree。
- Full、Complete、Perfect 是三個不同判斷角度：Full 看 child 數，Complete 看填入順序，Perfect 看每層是否全滿。
- Complete Binary Tree 適合用陣列表示，因為按層由左到右填，父子位置可以用 index 算出來。
- Preorder 常用來先記錄 Root；Inorder 對 BST 會得到由小到大的序列；Postorder 常用於刪除或計算運算式樹；Level-order 常用 Queue。
- 還原二元樹時，先用前序第一個或後序最後一個找 Root，再用中序切左右子樹，接著遞迴處理。
- Binary Search Tree 是 Binary Tree 加上排序規則，不是所有 Binary Tree 都能套 BST 搜尋。
- AVL Tree 與 Red-Black Tree 都是為了避免 BST 退化；AVL 較嚴格，Red-Black Tree 較常在實務 map/set 實作中出現。
- Heap 只保證父子大小關係，不保證左子樹所有值都小於 Root，因此 Heap 搜尋任意值通常不是 O(log n)。
- Threaded Binary Tree、Expression Tree、Huffman Tree 常出現在延伸題，重點是用途與節點意義，不一定要求寫完整程式。

### [會做] 實際例子與操作步驟
題目：已知前序走訪 Preorder Traversal = A, B, D, E, C, F；中序走訪 Inorder Traversal = D, B, E, A, C, F，如何還原二元樹並寫出後序走訪？

1. 前序第一個一定是 Root，所以 Root = A。
2. 在中序 D, B, E, A, C, F 中找到 A；A 左邊 D, B, E 是左子樹，A 右邊 C, F 是右子樹。
3. 左子樹的前序是 B, D, E，所以左子樹 Root = B；中序 D, B, E 表示 D 是 B 的 left child，E 是 B 的 right child。
4. 右子樹的前序是 C, F，所以右子樹 Root = C；中序 C, F 表示 F 是 C 的 right child。
5. 後序走訪規則是 Left-Right-Root，因此左子樹後序為 D, E, B，右子樹後序為 F, C，最後接 Root A。

結果：還原後的後序走訪(Postorder Traversal)為 D, E, B, F, C, A。

### [會算] 複雜度與公式
| 項目 | 最佳 | 平均 | 最差 | 說明 |
| --- | --- | --- | --- | --- |
| 樹走訪(Tree Traversal) | O(n) | O(n) | O(n) | 每個節點都要拜訪一次。 |
| BST Search | O(1) | O(log n) | O(n) | 平衡時接近 O(log n)，退化成斜樹時 O(n)。 |
| Perfect Binary Tree 節點數 |  |  |  | 高度 h，節點數 2^(h+1)-1。 |
| Complete Binary Tree 陣列索引 |  |  |  | 1-based：left=2i、right=2i+1、parent=floor(i/2)。 |

### [會寫] Java 範例與註解
```java
class Node {
  String value;
  Node left;
  Node right;

  Node(String value) {
    this.value = value;
  }
}

void preorder(Node root) {
  // 空節點代表這條路走到底，直接返回。
  if (root == null) {
    return;
  }

  // Preorder 的順序是 Root -> Left -> Right。
  System.out.println(root.value); // 先處理 Root
  preorder(root.left);            // 再走 Left subtree
  preorder(root.right);           // 最後走 Right subtree
}
```

### [易混淆] 易錯提醒與辨別線索
- 不要把 Binary Tree 和 Binary Search Tree 混在一起；Binary Tree 只限制最多兩個 child，BST 另外有左小右大的排序規則。
- 不要把 Full、Complete、Perfect 當同義詞；Full 看 child 數，Complete 看填入順序，Perfect 看每層是否全滿。
- 陣列公式要先確認題目用 0-based 還是 1-based index；來源採 1-based，所以 left=2i、right=2i+1、parent=floor(i/2)。
- 只有 Preorder 和 Postorder 通常無法唯一還原一般二元樹；還原題通常需要 Inorder 來切左右子樹。
- Heap 只保證父子大小關係，不保證左子樹所有值都小於 Root；不要用 BST 的搜尋方式搜尋 Heap。

### [必背] 專有名詞整理
- 樹(Tree)
- 節點(Node)
- 邊(Edge)
- 根節點(Root)
- 父節點(Parent)
- 子節點(Child)
- 兄弟節點(Sibling)
- 葉節點(Leaf)
- 分支度(Degree)
- 深度(Depth)
- 高度(Height)
- 子樹(Subtree)
- 二元樹(Binary Tree)
- 滿二元樹(Full Binary Tree)
- 完全二元樹(Complete Binary Tree)
- 完美二元樹(Perfect Binary Tree)
- 平衡二元樹(Balanced Binary Tree)
- 前序走訪(Preorder Traversal)
- 中序走訪(Inorder Traversal)
- 後序走訪(Postorder Traversal)
- 層序走訪(Level-order Traversal)
- 二元搜尋樹(Binary Search Tree)
- AVL 樹(AVL Tree)
- 紅黑樹(Red-Black Tree)
- 堆積(Heap)
- 線索二元樹(Threaded Binary Tree)
- 運算式樹(Expression Tree)
- 霍夫曼樹(Huffman Tree)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「樹(Tree)與二元樹(Binary Tree)」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [會做]: 要補可操作流程、示範步驟、完成後檢查點與常見錯誤。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
