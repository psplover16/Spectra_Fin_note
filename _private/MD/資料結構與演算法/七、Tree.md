# 樹（Tree）

## 目錄

1. [樹是什麼](#樹是什麼)
2. [樹的重要組成與基本術語](#樹的重要組成與基本術語)
3. [二元樹基礎](#二元樹基礎)
4. [常見二元樹分類](#常見二元樹分類)
5. [二元樹的計算特性](#二元樹的計算特性)
6. [二元樹的走訪](#二元樹的走訪)
7. [國考常見考法](#國考常見考法)
8. [比較表與易混淆整理](#比較表與易混淆整理)
9. [國考必背整理](#國考必背整理)
10. [容易考的判斷題](#容易考的判斷題)
11. [考前速記小抄](#考前速記小抄)

## 樹是什麼

樹（Tree）是一種用來表示「階層關係」的資料結構。它的樣子很像倒過來的樹：最上面有一個起點，往下分出許多節點。

在資料結構中，樹（Tree）常用來表示有上下層關係的資料，例如：

1. 電腦檔案系統：資料夾底下有子資料夾與檔案。
2. 公司組織圖：總經理底下有部門主管，主管底下有員工。
3. 家族關係：祖先往下延伸出子孫。
4. 程式語言語法樹：用樹狀結構表示運算式或語法結構。

樹（Tree）的核心想法是：資料不是排成一直線，而是從上到下分層展開。考試看到「階層」、「父子關係」、「由一個起點往下分支」，通常就要想到樹（Tree）。

## 樹的重要組成與基本術語

### 節點與邊

節點（Node）是樹（Tree）中存放資料的基本單位。每一個圓圈、每一筆資料，都可以看成一個節點（Node）。

邊（Edge）是連接兩個節點（Node）的線。若兩個節點之間有上下層關係，就會用一條邊（Edge）連起來。

例如下面這棵樹：

```text
        A
      / | \
     B  C  D
       / \
      E   F
```

A、B、C、D、E、F 都是節點（Node）。A 到 B、A 到 C、A 到 D、C 到 E、C 到 F 的連線都是邊（Edge）。

### 根節點

根節點（Root Node）是樹（Tree）最上層、沒有父節點的節點。每一棵非空的樹（Tree）只有一個根節點（Root Node）。

在上面的例子中，A 是根節點（Root Node），因為它位在最上面，而且沒有任何節點在它上方。

### 父節點、子節點與兄弟節點

父節點（Parent Node）是某節點上一層、直接連到它的節點。

子節點（Child Node）是某節點下一層、由它直接連出去的節點。

兄弟節點（Sibling Node）是擁有同一個父節點（Parent Node）的節點。

以上面的樹為例：

1. A 是 B、C、D 的父節點（Parent Node）。
2. B、C、D 是 A 的子節點（Child Node）。
3. B、C、D 彼此是兄弟節點（Sibling Node）。
4. C 是 E、F 的父節點（Parent Node）。
5. E、F 是兄弟節點（Sibling Node）。

### 葉節點

葉節點（Leaf Node）是沒有任何子節點（Child Node）的節點。也就是說，它已經是分支的最末端。

在例子中，B、D、E、F 都是葉節點（Leaf Node），因為它們底下沒有再接其他節點。

### 分支度

分支度（Degree）是某個節點（Node）擁有的子節點（Child Node）數量。

例如 A 有 B、C、D 三個子節點，所以 A 的分支度（Degree）是 3。C 有 E、F 兩個子節點，所以 C 的分支度（Degree）是 2。葉節點（Leaf Node）沒有子節點，所以分支度（Degree）是 0。

樹的分支度（Degree of Tree）通常指整棵樹中最大的節點分支度。以上例來說，最大分支度是 3，所以這棵樹的分支度是 3。

### 層級、高度與深度

層級（Level）用來表示節點（Node）位於第幾層。不同教材可能從 0 開始算，也可能從 1 開始算，考試題目若有給定定義，要以題目為準。

深度（Depth）是從根節點（Root Node）到某節點的邊（Edge）數。若根節點深度為 0，則根節點往下一層深度為 1，再下一層深度為 2。

高度（Height）是從某節點往下到最遠葉節點（Leaf Node）的邊（Edge）數。整棵樹的高度（Height）通常就是根節點（Root Node）的高度。

用下面的樹來看：

```text
        A
       / \
      B   C
         / \
        D   E
```

如果 A 的深度（Depth）為 0，則 B、C 的深度是 1，D、E 的深度是 2。整棵樹的高度（Height）是 2，因為從 A 到 D 或 E 最長需要經過 2 條邊。

### 子樹、祖先與後代

子樹（Subtree）是從某個節點開始，連同它底下所有後代節點形成的小樹。

祖先（Ancestor）是從某節點往上追，可以追到的所有節點。

後代（Descendant）是從某節點往下延伸，可以到達的所有節點。

例如 C 底下有 D、E，則以 C 為根的部分就是一棵子樹（Subtree）。對 D 來說，A 與 C 是它的祖先（Ancestor）。對 A 來說，B、C、D、E 都是它的後代（Descendant）。

## 二元樹基礎

二元樹（Binary Tree）是一種特殊的樹（Tree）。它的規則非常重要：每個節點（Node）最多只能有兩個子節點（Child Node）。

這兩個子節點有明確的位置：

1. 左子節點（Left Child）：位在左邊的子節點。
2. 右子節點（Right Child）：位在右邊的子節點。

由左子節點（Left Child）往下形成的樹，稱為左子樹（Left Subtree）。由右子節點（Right Child）往下形成的樹，稱為右子樹（Right Subtree）。

二元樹（Binary Tree）的重點不是「一定要有兩個子節點」，而是「最多只能有兩個子節點」。所以一個二元樹節點可以有 0 個、1 個或 2 個子節點。

例如：

```text
        A
       / \
      B   C
     /     \
    D       E
```

這是一棵二元樹（Binary Tree）。A 有兩個子節點 B、C；B 只有左子節點 D；C 只有右子節點 E；D、E 沒有子節點。

要特別注意：在二元樹（Binary Tree）中，左右位置有意義。只有左子節點和只有右子節點是不同的結構，不能隨便交換。

## 常見二元樹分類

### 滿二元樹

滿二元樹（Full Binary Tree）是指每個節點（Node）要嘛沒有子節點（Child Node），要嘛剛好有兩個子節點。換句話說，不可以出現「只有一個子節點」的節點。

例如：

```text
        A
       / \
      B   C
         / \
        D   E
```

這是滿二元樹（Full Binary Tree），因為 A 有兩個子節點，C 也有兩個子節點，B、D、E 都沒有子節點。

如果某個節點只有左子節點或只有右子節點，那就不是滿二元樹（Full Binary Tree）。

### 完全二元樹

完全二元樹（Complete Binary Tree）是指除了最後一層之外，其他層都要填滿；最後一層的節點要由左到右依序填入，不能中間空洞。

例如：

```text
        A
       / \
      B   C
     / \  /
    D  E F
```

這是完全二元樹（Complete Binary Tree），因為最後一層 D、E、F 是從左到右連續填入。

但下面這個不是完全二元樹（Complete Binary Tree）：

```text
        A
       / \
      B   C
       \   \
        E   F
```

因為最後一層沒有從左到右填滿，中間有空洞。

### 完美二元樹

完美二元樹（Perfect Binary Tree）是指所有內部節點（Internal Node）都有兩個子節點（Child Node），而且所有葉節點（Leaf Node）都在同一層。

內部節點（Internal Node）是指不是葉節點（Leaf Node）的節點，也就是至少有一個子節點的節點。

例如：

```text
        A
       / \
      B   C
     / \ / \
    D  E F  G
```

這是完美二元樹（Perfect Binary Tree）。A、B、C 都有兩個子節點，D、E、F、G 都是葉節點，且全部在同一層。

完美二元樹（Perfect Binary Tree）一定也是滿二元樹（Full Binary Tree），也一定是完全二元樹（Complete Binary Tree）。但是反過來不一定成立。

### 平衡二元樹

平衡二元樹（Balanced Binary Tree）是指樹的高度（Height）不要過度偏向某一邊。白話來說，就是不要左邊很深、右邊很淺，或右邊很深、左邊很淺。

平衡二元樹（Balanced Binary Tree）的目的，是讓搜尋、插入、刪除等操作維持較好的效率。若樹嚴重傾斜，就可能退化得像串列一樣，效率變差。

## 二元樹的計算特性

### 邊數公式

在一棵有 n 個節點（Node）的非空樹（Tree）中，邊（Edge）的數量一定是：

```text
邊數 = n - 1
```

這個公式不只適用於二元樹（Binary Tree），一般樹（Tree）也適用。

原因很直覺：除了根節點（Root Node）以外，每個節點都剛好有一條邊連到自己的父節點（Parent Node）。所以 n 個節點中，有 n - 1 個節點需要被連接，邊數就是 n - 1。

### 完美二元樹節點數

若完美二元樹（Perfect Binary Tree）的根節點（Root Node）高度為 0，且整棵樹高度為 h，則節點總數是：

```text
節點數 = 2^(h+1) - 1
```

例如高度 h = 2：

```text
第 0 層：1 個節點
第 1 層：2 個節點
第 2 層：4 個節點
總數：1 + 2 + 4 = 7 = 2^(2+1) - 1
```

所以高度為 2 的完美二元樹（Perfect Binary Tree）共有 7 個節點。

### 完全二元樹的陣列表示法

完全二元樹（Complete Binary Tree）很適合用陣列（Array）表示，因為它的節點排列規則很整齊。

若陣列索引從 1 開始，節點編號為 i，則：

| 關係 | 位置公式 |
|---|---|
| 左子節點（Left Child） | 2i |
| 右子節點（Right Child） | 2i + 1 |
| 父節點（Parent Node） | floor(i / 2) |

例如節點 i = 3，則：

1. 左子節點位置是 2 × 3 = 6。
2. 右子節點位置是 2 × 3 + 1 = 7。
3. 父節點位置是 floor(3 / 2) = 1。

這種公式常出現在堆積（Heap）的題目中，因為堆積（Heap）通常就是用完全二元樹（Complete Binary Tree）搭配陣列（Array）實作。

## 二元樹的走訪

走訪（Traversal）是指按照某種固定順序，把樹（Tree）中的每個節點（Node）拜訪一次。國考很常要求判斷走訪結果，或根據走訪結果還原二元樹（Binary Tree）。

先看這棵二元樹：

```text
        A
       / \
      B   C
     / \   \
    D   E   F
```

這棵樹的結構是：

1. A 是根節點（Root Node）。
2. B 是 A 的左子節點（Left Child），C 是 A 的右子節點（Right Child）。
3. D、E 是 B 的子節點。
4. F 是 C 的右子節點。

### 前序走訪

前序走訪（Preorder Traversal）的順序是：

```text
Root -> Left -> Right
```

也就是先拜訪根節點（Root Node），再拜訪左子樹（Left Subtree），最後拜訪右子樹（Right Subtree）。

以上面的樹為例：

```text
A -> B -> D -> E -> C -> F
```

前序走訪（Preorder Traversal）的重點是：第一個出現的節點一定是目前子樹的根節點（Root Node）。

### 中序走訪

中序走訪（Inorder Traversal）的順序是：

```text
Left -> Root -> Right
```

也就是先拜訪左子樹（Left Subtree），再拜訪根節點（Root Node），最後拜訪右子樹（Right Subtree）。

以上面的樹為例：

```text
D -> B -> E -> A -> C -> F
```

中序走訪（Inorder Traversal）在二元搜尋樹（Binary Search Tree）中非常重要，因為對二元搜尋樹做中序走訪，通常會得到由小到大的排序結果。

### 後序走訪

後序走訪（Postorder Traversal）的順序是：

```text
Left -> Right -> Root
```

也就是先拜訪左子樹（Left Subtree），再拜訪右子樹（Right Subtree），最後才拜訪根節點（Root Node）。

以上面的樹為例：

```text
D -> E -> B -> F -> C -> A
```

後序走訪（Postorder Traversal）的重點是：最後一個出現的節點一定是目前子樹的根節點（Root Node）。

### 層序走訪

層序走訪（Level-order Traversal）是按照層級（Level）由上到下、同一層由左到右拜訪節點。它通常會搭配佇列（Queue）實作。

以上面的樹為例：

```text
A -> B -> C -> D -> E -> F
```

層序走訪（Level-order Traversal）的重點是：先處理離根節點（Root Node）近的節點，再處理下一層。

## 國考常見考法

### 考法一：基本術語判斷

題目可能給一棵樹，要求你判斷根節點（Root Node）、葉節點（Leaf Node）、父節點（Parent Node）、子節點（Child Node）、兄弟節點（Sibling Node）、高度（Height）或深度（Depth）。

解題時可以照這個順序：

1. 先找最上方、沒有父節點的根節點。
2. 再找沒有子節點的葉節點。
3. 每條邊都代表一組父子關係。
4. 算高度與深度時，先確認題目是從 0 開始還是從 1 開始。

### 考法二：判斷二元樹種類

題目常問某棵樹是不是滿二元樹（Full Binary Tree）、完全二元樹（Complete Binary Tree）或完美二元樹（Perfect Binary Tree）。

解題口訣：

1. 滿二元樹：每個節點的子節點數只能是 0 或 2。
2. 完全二元樹：最後一層必須由左到右填，不能有空洞。
3. 完美二元樹：所有內部節點都有 2 個子節點，所有葉節點同層。

### 考法三：公式計算

常見題型包括：

1. 給節點數 n，問邊數。
2. 給完美二元樹高度 h，問節點總數。
3. 給完全二元樹的陣列位置 i，問左子節點、右子節點或父節點位置。

範例：

若一棵樹有 10 個節點，邊數是多少？

```text
邊數 = n - 1 = 10 - 1 = 9
```

若完美二元樹高度 h = 3，節點數是多少？

```text
節點數 = 2^(h+1) - 1 = 2^4 - 1 = 15
```

### 考法四：走訪結果

題目可能給一棵二元樹（Binary Tree），請你寫出前序走訪（Preorder Traversal）、中序走訪（Inorder Traversal）、後序走訪（Postorder Traversal）或層序走訪（Level-order Traversal）結果。

這類題目一定要先背熟四種順序：

| 走訪方式 | 順序 |
|---|---|
| 前序走訪（Preorder Traversal） | Root -> Left -> Right |
| 中序走訪（Inorder Traversal） | Left -> Root -> Right |
| 後序走訪（Postorder Traversal） | Left -> Right -> Root |
| 層序走訪（Level-order Traversal） | 由上到下、由左到右 |

### 考法五：由走訪序列還原樹

國考常考「由前序走訪與中序走訪還原二元樹」，或「由後序走訪與中序走訪還原二元樹」。

關鍵觀念是：

1. 前序走訪（Preorder Traversal）的第一個節點是根節點（Root Node）。
2. 後序走訪（Postorder Traversal）的最後一個節點是根節點（Root Node）。
3. 中序走訪（Inorder Traversal）可以用根節點切開左子樹（Left Subtree）與右子樹（Right Subtree）。

例如：

```text
前序：A B D E C F
中序：D B E A C F
```

前序第一個是 A，所以 A 是根節點（Root Node）。在中序中，A 左邊是 D B E，代表左子樹；A 右邊是 C F，代表右子樹。接著再用同樣方法處理左右子樹，就能逐步還原整棵樹。

## 比較表與易混淆整理

### 樹與二元樹比較

| 項目 | 樹（Tree） | 二元樹（Binary Tree） |
|---|---|---|
| 子節點數量 | 每個節點的子節點數不限 | 每個節點最多 2 個子節點 |
| 左右順序 | 一般不特別強調左右 | 左子節點與右子節點有順序 |
| 常見用途 | 表示一般階層關係 | 搜尋、排序、表示運算式、堆積基礎 |
| 國考重點 | 術語、階層、節點與邊 | 分類、走訪、公式、還原樹 |

### 滿、完全、完美二元樹比較

| 類型 | 定義重點 | 最容易混淆的地方 |
|---|---|---|
| 滿二元樹（Full Binary Tree） | 每個節點有 0 或 2 個子節點 | 不要求所有葉節點同層 |
| 完全二元樹（Complete Binary Tree） | 除最後一層外都滿，最後一層由左到右填 | 最後一層不能跳格或右邊先填 |
| 完美二元樹（Perfect Binary Tree） | 內部節點都有 2 個子節點，葉節點都同層 | 條件最嚴格 |
| 平衡二元樹（Balanced Binary Tree） | 高度不要過度偏斜 | 重點是高度平衡，不是每層都填滿 |

### 高度與深度比較

| 名詞 | 方向 | 白話記法 |
|---|---|---|
| 深度（Depth） | 從根節點往下算到某節點 | 從上往下數 |
| 高度（Height） | 從某節點往下算到最遠葉節點 | 從該點往下看還有多深 |
| 層級（Level） | 表示在第幾層 | 需注意題目從 0 還是 1 開始 |

## 國考必背整理

1. 樹（Tree）是階層式資料結構。
2. 根節點（Root Node）沒有父節點（Parent Node）。
3. 葉節點（Leaf Node）沒有子節點（Child Node）。
4. n 個節點的樹（Tree）有 n - 1 條邊（Edge）。
5. 二元樹（Binary Tree）每個節點最多有兩個子節點。
6. 二元樹（Binary Tree）的左子樹（Left Subtree）與右子樹（Right Subtree）位置有意義。
7. 滿二元樹（Full Binary Tree）不允許節點只有一個子節點。
8. 完全二元樹（Complete Binary Tree）最後一層要由左到右填。
9. 完美二元樹（Perfect Binary Tree）的所有葉節點都在同一層。
10. 高度 h 的完美二元樹（Perfect Binary Tree）節點數為 2^(h+1) - 1，其中根節點高度為 0。
11. 完全二元樹（Complete Binary Tree）用 1 開始的陣列索引表示時，左子節點為 2i，右子節點為 2i + 1，父節點為 floor(i / 2)。
12. 前序走訪（Preorder Traversal）是 Root -> Left -> Right。
13. 中序走訪（Inorder Traversal）是 Left -> Root -> Right。
14. 後序走訪（Postorder Traversal）是 Left -> Right -> Root。
15. 層序走訪（Level-order Traversal）是由上到下、由左到右。

## 容易考的判斷題

1. 二元樹（Binary Tree）的每個節點一定要有兩個子節點。
   錯。二元樹是每個節點最多兩個子節點，可以是 0 個、1 個或 2 個。

2. 一棵有 n 個節點的樹（Tree）一定有 n - 1 條邊。
   對。除了根節點以外，每個節點都有一條邊連到父節點。

3. 滿二元樹（Full Binary Tree）的所有葉節點（Leaf Node）一定在同一層。
   錯。滿二元樹只要求每個節點有 0 或 2 個子節點，不要求葉節點同層。

4. 完美二元樹（Perfect Binary Tree）一定是滿二元樹（Full Binary Tree）。
   對。完美二元樹的每個內部節點都有兩個子節點。

5. 完全二元樹（Complete Binary Tree）的最後一層可以從右邊開始填。
   錯。最後一層必須由左到右填。

6. 前序走訪（Preorder Traversal）的第一個節點一定是根節點（Root Node）。
   對。前序走訪順序是 Root -> Left -> Right。

7. 後序走訪（Postorder Traversal）的最後一個節點一定是根節點（Root Node）。
   對。後序走訪順序是 Left -> Right -> Root。

8. 中序走訪（Inorder Traversal）只適用於二元樹（Binary Tree）。
   通常對。因為中序走訪需要明確區分左子樹、根節點、右子樹，這是二元樹的典型走訪方式。

## 考前速記小抄

```text
Tree：
- Root：最上層，沒有 parent
- Leaf：最末端，沒有 child
- Edge：連接節點的線
- n 個 node 有 n - 1 條 edge

Binary Tree：
- 每個 node 最多 2 個 child
- 左右 child 有順序
- Left Subtree 與 Right Subtree 不能隨便交換

Full Binary Tree：
- 每個 node 的 child 數只能是 0 或 2

Complete Binary Tree：
- 除最後一層外都滿
- 最後一層由左到右填

Perfect Binary Tree：
- 內部節點都有 2 個 child
- 所有 leaf 同層
- 高度 h 節點數 = 2^(h+1) - 1

Array 表示 Complete Binary Tree，索引從 1 開始：
- left child = 2i
- right child = 2i + 1
- parent = floor(i / 2)

Traversal：
- Preorder：Root -> Left -> Right
- Inorder：Left -> Root -> Right
- Postorder：Left -> Right -> Root
- Level-order：逐層由左到右

還原二元樹：
- 前序第一個是 root
- 後序最後一個是 root
- 中序用 root 切左子樹與右子樹
```
