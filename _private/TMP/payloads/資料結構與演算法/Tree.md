七、Tree

[必背] 基本術語
- Root、Node、Edge、Parent、Child、Sibling、Leaf、Degree、Level、Height、Depth、Subtree、Ancestor、Descendant。

[必背] Binary Tree
- 每個節點最多兩個 child。
- Full Binary Tree：每個節點有 0 或 2 個 child。
- Complete Binary Tree：除最後一層外皆滿，最後一層由左到右填。
- Perfect Binary Tree：所有內部節點都有兩個 child，所有 leaf 同層。
- Balanced Binary Tree：高度接近平衡。

[比較] Tree vs Binary Tree
- Tree：每節點 child 數不限。
- Binary Tree：每節點最多兩個 child，且左右 child 有順序。

[會算] Binary Tree 特性
- 高度 h 的 perfect binary tree 節點數為 2^(h+1) - 1（若 root 高度為 0）。
- n 個節點的 binary tree 邊數為 n - 1。
- Complete binary tree 可用陣列表示：
  - 若從 1 開始編號，節點 i 的 left child = 2i，right child = 2i + 1，parent = floor(i/2)。

[會做] Traversal
- Preorder：Root → Left → Right。
- Inorder：Left → Root → Right。
- Postorder：Left → Right → Root。
- Level-order：逐層走訪。
- 常考：由前序、中序推回樹；或由後序、中序推回樹。
