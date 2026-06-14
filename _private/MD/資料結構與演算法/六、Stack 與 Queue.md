# Stack 與 Queue

## 目錄

1. 堆疊（Stack）是什麼
2. 佇列（Queue）是什麼
3. 堆疊（Stack）的重要操作與範例
4. 佇列（Queue）的重要操作與範例
5. 陣列與鏈結串列實作
6. 循環佇列（Circular Queue）
7. 國考常見考法
8. 比較表與易混淆整理
9. 國考必背整理
10. 容易考的判斷題
11. 考前速記小抄

## 堆疊（Stack）是什麼

堆疊（Stack）是一種線性資料結構（Linear Data Structure）。線性資料結構是指資料元素之間像排成一條線一樣，有前後順序關係。

堆疊（Stack）的核心規則是後進先出（Last In First Out, LIFO）。後進先出（Last In First Out, LIFO）的意思是：最後放進去的資料，會最先被拿出來。

可以把堆疊（Stack）想成一疊盤子。你把新盤子放上去時，一定放在最上面；你要拿盤子時，也通常先拿最上面的那一個。所以「最後放上去」的盤子，會「最先被拿走」。

堆疊（Stack）通常只允許在同一端進行新增與刪除，這一端稱為頂端（Top）。頂端（Top）是堆疊中目前可以操作的位置，也是國考題目最常要求追蹤的重點。

## 佇列（Queue）是什麼

佇列（Queue）也是一種線性資料結構（Linear Data Structure），但它的規則和堆疊（Stack）相反。

佇列（Queue）的核心規則是先進先出（First In First Out, FIFO）。先進先出（First In First Out, FIFO）的意思是：最早放進去的資料，會最早被拿出來。

可以把佇列（Queue）想成排隊買票。先排隊的人先買到票，後排隊的人後買到票。資料進入佇列（Queue）時從尾端進入，離開時從前端離開。

佇列（Queue）有兩個重要位置：前端（Front）與後端（Rear）。前端（Front）是資料被刪除或取出的地方；後端（Rear）是新資料被加入的地方。

## 堆疊（Stack）的重要操作與範例

堆疊（Stack）的操作通常圍繞頂端（Top）進行。國考很常給一串操作，要求判斷最後堆疊中的內容、輸出順序，或是否發生錯誤。

### 基本操作

1. 推入（Push）
   推入（Push）是把資料放到堆疊（Stack）的頂端（Top）。

2. 彈出（Pop）
   彈出（Pop）是移除並取出堆疊（Stack）頂端（Top）的資料。

3. 窺視（Peek）
   窺視（Peek）是查看堆疊（Stack）頂端（Top）的資料，但不把它刪掉。有些教材也會稱為 top 操作。

### 具體範例

假設一開始堆疊（Stack）是空的，依序執行：

1. push A
2. push B
3. push C
4. pop
5. push D
6. pop

過程如下：

| 步驟 | 操作 | 堆疊內容，由底到頂 | 說明 |
|---|---|---|---|
| 1 | push A | A | A 被放入 |
| 2 | push B | A, B | B 在頂端 |
| 3 | push C | A, B, C | C 在頂端 |
| 4 | pop | A, B | C 最後進入，所以最先被取出 |
| 5 | push D | A, B, D | D 成為新的頂端 |
| 6 | pop | A, B | D 被取出 |

這個例子最重要的觀念是：堆疊（Stack）不是依照資料值大小取出，也不是依照字母順序取出，而是依照後進先出（Last In First Out, LIFO）規則。

### 常見應用

1. 函式呼叫（Function Call）
   程式呼叫函式時，系統會用呼叫堆疊（Call Stack）記錄函式返回位置與區域資料。最後被呼叫的函式通常要先執行完，才能回到上一層函式。

2. 遞迴（Recursion）
   遞迴（Recursion）是函式呼叫自己。每次呼叫都會形成新的函式狀態，這些狀態會放在呼叫堆疊（Call Stack）中。

3. 括號配對（Parentheses Matching）
   檢查 `()`, `[]`, `{}` 是否成對時，常用堆疊（Stack）。遇到左括號就推入（Push），遇到右括號就彈出（Pop）比對。

4. 深度優先搜尋（Depth-First Search, DFS）
   深度優先搜尋（Depth-First Search, DFS）是一種圖形或樹狀結構的走訪方式，會先往深處走。它可以用堆疊（Stack）實作，也常透過遞迴（Recursion）間接使用堆疊。

5. 運算式轉換（Expression Conversion）
   例如中序表示法（Infix）、前序表示法（Prefix）、後序表示法（Postfix）之間的轉換，常用堆疊（Stack）處理運算子優先順序。

## 佇列（Queue）的重要操作與範例

佇列（Queue）的操作分成兩端：新增資料從後端（Rear）進入，刪除資料從前端（Front）離開。

### 基本操作

1. 入佇列（Enqueue）
   入佇列（Enqueue）是把資料加入佇列（Queue）的後端（Rear）。

2. 出佇列（Dequeue）
   出佇列（Dequeue）是從佇列（Queue）的前端（Front）移除並取出資料。

3. 前端（Front）
   前端（Front）是目前最早進入、下一個要被取出的資料位置。

4. 後端（Rear）
   後端（Rear）是目前最後加入資料的位置，或下一個可加入資料的位置。不同教材對後端（Rear）的定義可能略有不同，考題通常會先給設定。

### 具體範例

假設一開始佇列（Queue）是空的，依序執行：

1. enqueue A
2. enqueue B
3. enqueue C
4. dequeue
5. enqueue D
6. dequeue

過程如下：

| 步驟 | 操作 | 佇列內容，由前到後 | 說明 |
|---|---|---|---|
| 1 | enqueue A | A | A 最先進入 |
| 2 | enqueue B | A, B | B 排在 A 後面 |
| 3 | enqueue C | A, B, C | C 排在最後 |
| 4 | dequeue | B, C | A 最先進入，所以最先離開 |
| 5 | enqueue D | B, C, D | D 從後端加入 |
| 6 | dequeue | C, D | B 離開 |

這個例子最重要的觀念是：佇列（Queue）遵守先進先出（First In First Out, FIFO），所以它很適合模擬排隊、等待、排程這類情境。

### 常見應用

1. 排程（Scheduling）
   排程（Scheduling）是安排工作執行順序。許多排程問題會用佇列（Queue）記錄等待處理的工作。

2. 廣度優先搜尋（Breadth-First Search, BFS）
   廣度優先搜尋（Breadth-First Search, BFS）是一種圖形或樹狀結構的走訪方式，會先拜訪距離較近的節點，再逐層往外擴展。它通常用佇列（Queue）實作。

3. 緩衝區（Buffer）
   緩衝區（Buffer）是暫時存放資料的空間。當資料產生速度和處理速度不同時，佇列（Queue）可以協助資料依序等待處理。

## 陣列與鏈結串列實作

堆疊（Stack）與佇列（Queue）都可以用陣列（Array）或鏈結串列（Linked List）實作。

陣列（Array）是一段連續記憶體空間，適合用索引快速存取。鏈結串列（Linked List）是由節點（Node）串接而成，每個節點通常包含資料與指標。

### 用陣列（Array）實作

使用陣列（Array）實作堆疊（Stack）或佇列（Queue）時，通常要事先決定容量大小。因此國考常考兩種狀況：

1. 溢位（Overflow）
   溢位（Overflow）是指資料結構已滿，卻還要再加入資料。例如固定大小的陣列（Array）已經沒有空位，卻又執行推入（Push）或入佇列（Enqueue）。

2. 下溢（Underflow）
   下溢（Underflow）是指資料結構是空的，卻還要刪除或取出資料。例如空堆疊（Stack）執行彈出（Pop），或空佇列（Queue）執行出佇列（Dequeue）。

### 用鏈結串列（Linked List）實作

鏈結串列（Linked List）實作的優點是大小比較彈性，不必一開始就固定最大容量。只要記憶體足夠，就可以動態新增節點。

不過，鏈結串列（Linked List）需要額外指標來連接節點，所以每個資料元素會多花一些記憶體空間。國考常用這點考比較題：陣列（Array）空間固定但索引方便；鏈結串列（Linked List）大小彈性但需要指標。

## 循環佇列（Circular Queue）

循環佇列（Circular Queue）是一種用陣列（Array）實作佇列（Queue）的技巧。它把陣列的尾端和開頭想像成相接，讓後端（Rear）走到陣列最後一格後，可以再回到第 0 格。

循環佇列（Circular Queue）的核心是模數運算（Modulo）。模數運算（Modulo）是取餘數的運算，例如 `(rear + 1) mod size` 可以讓索引在 `0` 到 `size - 1` 之間循環。

### 為什麼需要循環佇列（Circular Queue）

如果用一般陣列（Array）實作佇列（Queue），資料不斷出佇列（Dequeue）後，前面可能空出位置，但後端（Rear）已經走到陣列尾端。這時如果不循環使用前面的空位，就會浪費空間。

循環佇列（Circular Queue）可以讓陣列空位重複利用，因此比單純線性移動的佇列更有效率。

### 常見判斷方式

不同教材可能對前端（Front）與後端（Rear）的設定不同，所以考試時要先看題目定義。最常見的一種設定是保留一格空間來區分空與滿。

在保留一格的循環佇列（Circular Queue）中，常見判斷如下：

| 狀態 | 判斷式 | 意義 |
|---|---|---|
| 空（Empty） | `front == rear` | 前端與後端相同，表示沒有資料 |
| 滿（Full） | `(rear + 1) mod size == front` | 後端再往下一格就會碰到前端 |

例如陣列大小 `size = 5`，若 `front = 2`、`rear = 1`，則：

`(rear + 1) mod size = (1 + 1) mod 5 = 2`

因為結果等於 `front`，所以循環佇列（Circular Queue）是滿的。

要注意：保留一格的循環佇列（Circular Queue）若陣列大小是 `5`，最多只能放 `4` 筆資料。這是國考很愛考的陷阱。

## 國考常見考法

### 考法一：問規則

題目可能問：「堆疊（Stack）的資料取出順序為何？」答案是後進先出（Last In First Out, LIFO）。

題目也可能問：「佇列（Queue）的資料取出順序為何？」答案是先進先出（First In First Out, FIFO）。

### 考法二：追蹤操作結果

常見題型會給一串 `push`、`pop`、`enqueue`、`dequeue`，要求寫出最後內容或輸出順序。

解題時不要憑感覺，要一個操作一個操作畫出來。堆疊（Stack）就只看頂端（Top）；佇列（Queue）就看前端（Front）與後端（Rear）。

### 考法三：判斷應用場景

如果題目出現函式呼叫、遞迴、括號配對、深度優先搜尋（Depth-First Search, DFS）、運算式轉換，通常想到堆疊（Stack）。

如果題目出現排隊、排程、緩衝區、廣度優先搜尋（Breadth-First Search, BFS），通常想到佇列（Queue）。

### 考法四：判斷空與滿

陣列（Array）實作時，常考溢位（Overflow）與下溢（Underflow）。

循環佇列（Circular Queue）則常考：

1. `front == rear` 是否代表空。
2. `(rear + 1) mod size == front` 是否代表滿。
3. 若保留一格，實際可存放資料數是否少一格。

## 比較表與易混淆整理

| 項目 | 堆疊（Stack） | 佇列（Queue） |
|---|---|---|
| 核心規則 | 後進先出（Last In First Out, LIFO） | 先進先出（First In First Out, FIFO） |
| 新增位置 | 頂端（Top） | 後端（Rear） |
| 刪除位置 | 頂端（Top） | 前端（Front） |
| 進出端 | 同一端進、同一端出 | 一端進、另一端出 |
| 常見新增操作 | 推入（Push） | 入佇列（Enqueue） |
| 常見刪除操作 | 彈出（Pop） | 出佇列（Dequeue） |
| 常見查看操作 | 窺視（Peek） | 查看前端（Front） |
| 常見應用 | 函式呼叫、遞迴、括號配對、深度優先搜尋（Depth-First Search, DFS） | 排程、廣度優先搜尋（Breadth-First Search, BFS）、緩衝區 |

### 易混淆一：堆疊（Stack）不是照先後順序排隊

堆疊（Stack）雖然也有資料進入的順序，但取出時不是先進先出，而是後進先出（Last In First Out, LIFO）。看到「最後放入者先取出」就要想到堆疊（Stack）。

### 易混淆二：佇列（Queue）不是從同一端刪除

佇列（Queue）新增資料在後端（Rear），刪除資料在前端（Front）。看到「排隊」或「先來先服務」就要想到佇列（Queue）。

### 易混淆三：循環佇列（Circular Queue）滿不一定是 rear 到陣列最後

循環佇列（Circular Queue）會循環使用陣列（Array）空間，所以後端（Rear）到最後一格不代表滿。是否滿要依題目給的判斷式，常見是 `(rear + 1) mod size == front`。

## 國考必背整理

1. 堆疊（Stack）遵守後進先出（Last In First Out, LIFO）。
2. 佇列（Queue）遵守先進先出（First In First Out, FIFO）。
3. 堆疊（Stack）的常見操作是推入（Push）、彈出（Pop）、窺視（Peek）。
4. 佇列（Queue）的常見操作是入佇列（Enqueue）、出佇列（Dequeue）、前端（Front）、後端（Rear）。
5. 空資料結構還要刪除會發生下溢（Underflow）。
6. 滿資料結構還要新增會發生溢位（Overflow）。
7. 深度優先搜尋（Depth-First Search, DFS）常搭配堆疊（Stack）。
8. 廣度優先搜尋（Breadth-First Search, BFS）常搭配佇列（Queue）。
9. 循環佇列（Circular Queue）使用模數運算（Modulo）讓索引循環。
10. 保留一格的循環佇列（Circular Queue）滿的判斷常為 `(rear + 1) mod size == front`。

## 容易考的判斷題

1. 堆疊（Stack）是先進先出（First In First Out, FIFO）的資料結構。
   錯。堆疊（Stack）是後進先出（Last In First Out, LIFO）。

2. 佇列（Queue）適合描述排隊買票的情境。
   對。排隊買票通常先來的人先服務，符合先進先出（First In First Out, FIFO）。

3. 對空堆疊（Stack）執行彈出（Pop）會發生下溢（Underflow）。
   對。空的資料結構沒有資料可刪除。

4. 對已滿的陣列佇列（Array Queue）執行入佇列（Enqueue）會發生溢位（Overflow）。
   對。固定容量已滿時不能再加入資料。

5. 深度優先搜尋（Depth-First Search, DFS）通常使用佇列（Queue）。
   錯。深度優先搜尋（Depth-First Search, DFS）通常使用堆疊（Stack）或遞迴（Recursion）。

6. 廣度優先搜尋（Breadth-First Search, BFS）通常使用佇列（Queue）。
   對。廣度優先搜尋（Breadth-First Search, BFS）需要依照先進先出（First In First Out, FIFO）順序逐層處理。

7. 在保留一格的循環佇列（Circular Queue）中，若陣列大小是 `n`，最多可存放 `n` 筆資料。
   錯。保留一格時最多只能存放 `n - 1` 筆資料。

8. 循環佇列（Circular Queue）使用模數運算（Modulo）讓前端（Front）與後端（Rear）可以回到陣列開頭。
   對。這是循環佇列（Circular Queue）的核心技巧。

## 考前速記小抄

| 關鍵字 | 立刻想到 |
|---|---|
| 最後進來先出去 | 堆疊（Stack）、後進先出（Last In First Out, LIFO） |
| 先來先服務 | 佇列（Queue）、先進先出（First In First Out, FIFO） |
| push、pop、peek | 堆疊（Stack） |
| enqueue、dequeue、front、rear | 佇列（Queue） |
| 函式呼叫、遞迴、括號配對 | 堆疊（Stack） |
| 深度優先搜尋 DFS | 堆疊（Stack） |
| 廣度優先搜尋 BFS | 佇列（Queue） |
| overflow | 滿了還要新增 |
| underflow | 空了還要刪除 |
| `(rear + 1) mod size == front` | 循環佇列（Circular Queue）滿，常見於保留一格設定 |

最後記法很簡單：堆疊（Stack）像疊盤子，最後放的先拿；佇列（Queue）像排隊，先排的先走。遇到循環佇列（Circular Queue）時，不要只看位置大小，要用模數運算（Modulo）判斷前端（Front）與後端（Rear）的關係。
