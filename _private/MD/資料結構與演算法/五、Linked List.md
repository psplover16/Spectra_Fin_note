# 鏈結串列（Linked List）

## 目錄

1. 鏈結串列是什麼
2. 節點的組成
3. 鏈結串列的核心想法
4. 鏈結串列的常見分類
5. 基本操作步驟
6. 陣列與鏈結串列比較
7. 國考常見考法
8. 國考必背整理
9. 容易考的判斷題
10. 考前速記小抄

## 鏈結串列是什麼

鏈結串列（Linked List）是一種線性資料結構（Linear Data Structure）。所謂線性資料結構，是指資料彼此之間有前後順序，例如第一個、第二個、第三個，依序串起來。

不過，鏈結串列（Linked List）和陣列（Array）最大的差異在於：陣列（Array）的資料通常放在連續記憶體中，而鏈結串列（Linked List）的資料不需要放在連續記憶體中。鏈結串列（Linked List）是靠每個節點（Node）裡面的指標（Pointer）把下一個節點（Node）串起來。

可以把鏈結串列（Linked List）想成一串尋寶線索：每張紙條上除了寫著資料，也寫著下一張紙條在哪裡。只要知道第一張紙條的位置，就能一路找到後面的資料。

## 節點的組成

節點（Node）是鏈結串列（Linked List）中存放資料的基本單位。每一個節點（Node）通常至少包含兩個部分：

1. 資料欄位（Data Field）：用來存放真正的資料，例如數字、字元、物件。
2. 指標欄位（Pointer Field）：用來記錄其他節點（Node）的位置。

在單向鏈結串列（Singly Linked List）中，指標欄位（Pointer Field）通常叫做 next，代表「下一個節點在哪裡」。

例如有三筆資料 10、20、30，單向鏈結串列（Singly Linked List）可以表示成：

```text
head
 |
 v
[10 | next] -> [20 | next] -> [30 | null]
```

其中 head 是頭指標（Head Pointer），代表整條鏈結串列（Linked List）的起點。null 是空指標（Null Pointer），表示後面沒有節點（Node）了。

## 鏈結串列的核心想法

鏈結串列（Linked List）的核心想法不是「用編號直接找到第幾格」，而是「從起點開始，沿著指標一個一個走」。

這個特色會帶來兩個很重要的結果：

1. 插入（Insertion）與刪除（Deletion）在已知節點位置時可以很快。
2. 搜尋（Search）通常需要從頭走訪，時間複雜度（Time Complexity）是 O(n)。

時間複雜度（Time Complexity）是用來描述演算法執行時間隨資料量成長的方式。O(n) 表示資料有 n 筆時，最壞情況可能要檢查大約 n 個節點（Node）。

例如要在鏈結串列（Linked List）中找資料 30：

```text
[10] -> [20] -> [30] -> null
```

電腦不能像陣列（Array）那樣直接跳到第 3 個位置，而是要先看 10，再看 20，最後才看到 30。

## 鏈結串列的常見分類

### 單向鏈結串列（Singly Linked List）

單向鏈結串列（Singly Linked List）是最基本的鏈結串列（Linked List）。每個節點（Node）只有一個 next 指標（Pointer），只能往下一個節點（Node）走。

```text
[A] -> [B] -> [C] -> null
```

它的優點是結構簡單、節省指標空間；缺點是不能直接往前走。如果已經走到 C，要回到 B，通常只能重新從 head 開始。

### 環狀鏈結串列（Circular Linked List）

環狀鏈結串列（Circular Linked List）是指尾端節點（Tail Node）的指標（Pointer）不是指向 null，而是指回頭端節點（Head Node）。

```text
[A] -> [B] -> [C]
 ^           |
 |___________|
```

這種結構常用在需要循環處理的情境，例如輪流排程。國考常問它和一般單向鏈結串列（Singly Linked List）的差別：一般串列的尾端是 null，環狀串列的尾端會指回開頭。

### 雙向鏈結串列（Doubly Linked List）

雙向鏈結串列（Doubly Linked List）是每個節點（Node）有兩個指標（Pointer）：

1. prev 指標（Previous Pointer）：指向前一個節點（Node）。
2. next 指標（Next Pointer）：指向後一個節點（Node）。

```text
null <- [A] <-> [B] <-> [C] -> null
```

雙向鏈結串列（Doubly Linked List）的優點是可以雙向走訪，刪除某些節點（Node）時也比較方便；缺點是每個節點（Node）需要額外儲存 prev 指標（Previous Pointer），所以記憶體用量較高。

## 基本操作步驟

### 在 head 前插入節點

插入（Insertion）是把新節點（New Node）放進鏈結串列（Linked List）中。

如果要在 head 前插入新節點（Node），核心想法是讓新節點（Node）先接住原本的第一個節點（Node），再把 head 改成新節點（Node）。

步驟如下：

1. 建立新節點 newNode。
2. 令 newNode.next 指向原本的 head。
3. 令 head 指向 newNode。

虛擬碼（Pseudocode）：

```text
newNode.next = head
head = newNode
```

範例：

```text
原本：head -> [20] -> [30] -> null
插入 10
結果：head -> [10] -> [20] -> [30] -> null
```

國考常考重點：一定要先讓 newNode.next 指到原本的 head，再更新 head。順序錯誤可能會讓原本串列遺失。

### 在 tail 後插入節點

尾節點（Tail Node）是鏈結串列（Linked List）的最後一個節點（Node）。

如果已知 tail 的位置，在 tail 後插入節點（Node）很簡單：

1. 建立新節點 newNode。
2. 令 tail.next 指向 newNode。
3. 令 newNode.next 指向 null。
4. 若有維護 tail 指標，令 tail 指向 newNode。

虛擬碼（Pseudocode）：

```text
tail.next = newNode
newNode.next = null
tail = newNode
```

範例：

```text
原本：[10] -> [20] -> null
插入 30
結果：[10] -> [20] -> [30] -> null
```

國考常考重點：如果題目沒有給 tail 指標，就必須從 head 開始走訪到最後一個節點（Node），這時搜尋尾端需要 O(n)。

### 在中間插入節點

若要把新節點（Node）插入在某個節點 current 後面，核心是「先接後面，再接前面」。

步驟如下：

1. 建立新節點 newNode。
2. 令 newNode.next 指向 current.next。
3. 令 current.next 指向 newNode。

虛擬碼（Pseudocode）：

```text
newNode.next = current.next
current.next = newNode
```

範例：

```text
原本：[10] -> [30] -> null
在 10 後插入 20
結果：[10] -> [20] -> [30] -> null
```

國考常考重點：順序很重要。如果先做 current.next = newNode，原本 current 後面的節點可能會失去連結。

### 刪除 head

刪除（Deletion）是把節點（Node）從鏈結串列（Linked List）中移除。

刪除 head 的核心想法是讓 head 往下一個節點（Node）移動。

步驟如下：

1. 若 head 是 null，代表串列為空，不需刪除。
2. 暫存原本的 head。
3. 令 head 指向 head.next。
4. 釋放或移除原本的 head。

虛擬碼（Pseudocode）：

```text
temp = head
head = head.next
delete temp
```

範例：

```text
原本：head -> [10] -> [20] -> [30] -> null
刪除 head
結果：head -> [20] -> [30] -> null
```

國考常考重點：空串列要先處理，否則可能發生存取 null 的錯誤。

### 刪除 tail

刪除 tail 比刪除 head 麻煩，因為單向鏈結串列（Singly Linked List）只能往後走，不能直接從 tail 找到前一個節點（Node）。

步驟如下：

1. 若 head 是 null，代表串列為空。
2. 若 head.next 是 null，代表只有一個節點（Node），刪除後 head 變成 null。
3. 從 head 開始走訪，找到 tail 的前一個節點（Node）。
4. 令前一個節點的 next 指向 null。
5. 刪除原本 tail。

虛擬碼（Pseudocode）：

```text
current = head
while current.next.next != null:
    current = current.next

delete current.next
current.next = null
```

範例：

```text
原本：[10] -> [20] -> [30] -> null
刪除 tail
結果：[10] -> [20] -> null
```

國考常考重點：在單向鏈結串列（Singly Linked List）中，刪除 tail 通常需要 O(n)，因為要找到 tail 前一個節點（Node）。

### 刪除指定節點

刪除指定節點（Node）時，必須讓前一個節點（Previous Node）跳過要刪除的節點（Node），直接連到下一個節點（Next Node）。

步驟如下：

1. 從 head 開始搜尋目標節點。
2. 同時記錄目前節點 current 與前一個節點 previous。
3. 找到目標後，令 previous.next 指向 current.next。
4. 刪除 current。

虛擬碼（Pseudocode）：

```text
previous.next = current.next
delete current
```

範例：

```text
原本：[10] -> [20] -> [30] -> null
刪除 20
結果：[10] -> [30] -> null
```

國考常考重點：如果要刪除的是 head，不能套用 previous.next，因為 head 前面沒有 previous，需要另外處理。

## 陣列與鏈結串列比較

陣列（Array）是一種以連續記憶體儲存資料的線性資料結構（Linear Data Structure）。它適合快速用索引（Index）存取資料。索引（Index）是資料在陣列（Array）中的位置編號，例如 A[0]、A[1]。

鏈結串列（Linked List）則靠節點（Node）與指標（Pointer）串接資料，不需要連續記憶體，插入與刪除更有彈性。

| 比較項目 | 陣列（Array） | 鏈結串列（Linked List） |
|---|---|---|
| 記憶體配置 | 通常需要連續記憶體 | 不需要連續記憶體 |
| 大小彈性 | 大小較固定，擴充可能需要搬移資料 | 可動態新增或刪除節點 |
| 隨機存取 | 可用索引 O(1) 直接存取 | 無法 O(1) 直接索引，通常要走訪 |
| 搜尋資料 | 未排序時通常 O(n) | 通常 O(n) |
| 已知位置插入 | 可能需要搬移元素 | 改指標即可，通常較快 |
| 已知位置刪除 | 可能需要搬移元素 | 改指標即可，通常較快 |
| 額外空間 | 不需為每筆資料存指標 | 每個節點需額外指標空間 |

## 國考常見考法

### 考法一：問節點由什麼組成

看到「鏈結串列的節點包含哪些欄位」時，要答：

1. 資料欄位（Data Field）
2. 指標欄位（Pointer Field）

單向鏈結串列（Singly Linked List）通常有一個 next 指標（Pointer）；雙向鏈結串列（Doubly Linked List）通常有 prev 與 next 兩個指標（Pointer）。

### 考法二：問鏈結串列是否需要連續記憶體

答案是不需要。鏈結串列（Linked List）利用指標（Pointer）把不同位置的節點（Node）串起來，所以資料不必放在連續記憶體。

這點常拿來和陣列（Array）比較：陣列（Array）通常需要連續記憶體，鏈結串列（Linked List）不需要。

### 考法三：問插入與刪除的時間複雜度

要特別看題目是否已經給你節點位置。

| 情況 | 時間複雜度 |
|---|---|
| 已知要插入或刪除的位置 | O(1) 改指標即可 |
| 不知道位置，需要先搜尋 | O(n) |
| 單向鏈結串列刪除 tail，且沒有前一節點資訊 | O(n) |

### 考法四：問為什麼不能直接存取第 k 個元素

鏈結串列（Linked List）沒有像陣列（Array）那樣的連續索引位置。若要找第 k 個節點（Node），通常要從 head 開始沿著 next 指標（Pointer）走 k 次，因此不是 O(1)，而是 O(n) 或 O(k)。

### 考法五：考指標更新順序

插入中間節點時，要先讓新節點（Node）接住後方節點（Node），再讓前方節點（Node）接到新節點（Node）。

正確：

```text
newNode.next = current.next
current.next = newNode
```

錯誤風險：

```text
current.next = newNode
newNode.next = current.next
```

第二種寫法會讓 newNode.next 指到自己或造成原本後方串列遺失，這是國考很愛出的陷阱。

## 易混淆整理

| 名詞 | 定義 | 容易混淆點 |
|---|---|---|
| 頭指標（Head Pointer） | 指向第一個節點的指標 | head 不是資料本身，而是入口位置 |
| 尾節點（Tail Node） | 最後一個節點 | 一般單向串列的 tail.next 是 null |
| 空指標（Null Pointer） | 不指向任何節點的指標 | 常用來表示串列結尾 |
| 單向鏈結串列（Singly Linked List） | 每節點只指向下一個節點 | 不能直接往前走 |
| 環狀鏈結串列（Circular Linked List） | 尾端指回頭端 | 結尾不是 null |
| 雙向鏈結串列（Doubly Linked List） | 每節點有 prev 與 next | 較方便雙向走訪，但較耗空間 |

## 國考必背整理

1. 鏈結串列（Linked List）由節點（Node）串接而成。
2. 節點（Node）通常包含資料欄位（Data Field）與指標欄位（Pointer Field）。
3. 鏈結串列（Linked List）不需要連續記憶體。
4. 鏈結串列（Linked List）無法像陣列（Array）一樣 O(1) 直接用索引存取。
5. 鏈結串列（Linked List）搜尋通常是 O(n)。
6. 若已知節點位置，插入（Insertion）與刪除（Deletion）通常只需改指標，可視為 O(1)。
7. 單向鏈結串列（Singly Linked List）只能往 next 方向走。
8. 環狀鏈結串列（Circular Linked List）的尾端會指回頭端。
9. 雙向鏈結串列（Doubly Linked List）有 prev 與 next，可雙向走訪。
10. 鏈結串列（Linked List）比陣列（Array）多花指標空間。

## 容易考的判斷題

1. 鏈結串列（Linked List）的節點（Node）一定要放在連續記憶體中。  
   答：錯。鏈結串列（Linked List）不需要連續記憶體。

2. 單向鏈結串列（Singly Linked List）每個節點（Node）通常有資料欄位（Data Field）與 next 指標（Pointer）。  
   答：對。

3. 鏈結串列（Linked List）可以像陣列（Array）一樣用索引 O(1) 直接找到第 k 個元素。  
   答：錯。鏈結串列（Linked List）通常要從 head 開始走訪。

4. 若已知某節點位置，在該節點後插入新節點通常可以 O(1) 完成。  
   答：對。只需要改變指標（Pointer）。

5. 雙向鏈結串列（Doubly Linked List）比單向鏈結串列（Singly Linked List）更省記憶體。  
   答：錯。雙向鏈結串列（Doubly Linked List）每個節點多一個 prev 指標（Previous Pointer），通常較耗記憶體。

6. 環狀鏈結串列（Circular Linked List）的最後一個節點（Node）一定指向 null。  
   答：錯。環狀鏈結串列（Circular Linked List）的尾端會指回頭端。

7. 在單向鏈結串列（Singly Linked List）中，刪除 head 通常比刪除 tail 簡單。  
   答：對。刪除 head 只要移動 head；刪除 tail 通常要找前一個節點（Node）。

## 考前速記小抄

```text
Linked List = Node + Pointer
Node = Data Field + Pointer Field
不需連續記憶體
搜尋通常 O(n)
已知位置插入/刪除通常 O(1)
不能像 Array 一樣 O(1) 直接索引

Singly：只往 next
Circular：tail 指回 head
Doubly：prev + next，可雙向

插入中間：
newNode.next = current.next
current.next = newNode

刪除中間：
previous.next = current.next
```
