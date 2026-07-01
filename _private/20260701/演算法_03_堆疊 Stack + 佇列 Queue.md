# 堆疊 Stack + 佇列 Queue

> 科目：演算法｜Stack 與 Queue 是限制存取方式的**抽象資料型別（ADT）**，重點不是怎麼存，而是**資料怎麼進出**。環狀佇列的滿／空判斷是計算題常客。
>
> 學習方式：先記兩句口訣——Stack **後進先出（LIFO）**、Queue **先進先出（FIFO）**；再把環狀佇列的取餘數與滿／空公式練熟。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「**函式呼叫（call stack）** 與**遞迴**，是用 Stack 還是 Queue？」
> 2. 「環狀佇列（犧牲一格版）容量為 size，實際最多能放幾個元素？」
> 3. 「環狀佇列**滿**的判斷條件是什麼？**空**又是什麼？」

先別急著看答案，試著自己回答看看。

---

## 🤔 先想想

給你三個提示，幫你建立直覺：

- Stack 像**一疊盤子**：最後放上去的最先拿下來（LIFO）。
- Queue 像**排隊**：先來的人先被服務（FIFO）。
- Array／Linked List 是**底層怎麼存**；Stack／Queue 是**進出規則**——別把兩類混為一談。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、Stack：LIFO（後進先出）

1. Stack 採 **LIFO（Last In First Out）後進先出**。
2. 只能從**同一端 top** 進出；**push** 是壓入，**pop** 是彈出，**peek／top** 是只看頂端。
3. 常見應用包含函式呼叫的 **call stack、遞迴、括號配對、運算式轉換、Undo**。

📌 **白話：** 把 Stack 想成一疊盤子——最後放上去的盤子會最先拿下來。這就是為什麼「還原上一步（Undo）」和「遞迴回到上一層」都用它。

### 二、Queue：FIFO（先進先出）

1. Queue 採 **FIFO（First In First Out）先進先出**。
2. 通常 **rear 端 enqueue 加入**，**front 端 dequeue 取出**。
3. 常見應用包含 **CPU 排程、列印佇列、BFS、buffer 與訊息佇列**。

📌 **白話：** 把 Queue 想成排隊——先來的人先被服務，後來的人排在後面。BFS 之所以用 Queue，就是要「先探索到的先處理」。

📌 **兩個常考變形：** **Deque（雙端佇列）** 前後兩端都能進出；**Priority Queue（優先佇列）** 依優先權決定誰先出（非 FIFO），常用 Heap 實作。

### 三、四種結構比較

| 結構 | 進出方式 | 特性 |
|---|---|---|
| Array | 用索引隨機存取任一格 | 連續、存取 O(1)、大小固定。 |
| Linked List | 從頭循序走或改指標 | 不連續、動態、插刪改指標。 |
| Stack | 只在頂端進出 | LIFO 後進先出。 |
| Queue | 後端進、前端出 | FIFO 先進先出。 |

📌 **白話：** Array／Linked List 回答「資料放哪」，Stack／Queue 回答「資料怎麼進出」。考題最愛把這兩個維度混在一起問。

### 四、Circular Queue（環狀佇列）

**Circular Queue** 用環狀方式**重複利用陣列空間**，解決 front 已往後移、但尾端已到陣列末端的**假性溢位**（明明前面有空位卻被判滿）。

1. 索引往下一格時用 **`(index + 1) % size`** 回到開頭。
2. 犧牲一格版本中，**空**的判斷是 **`front == rear`**。
3. **滿**的判斷是 **`(rear + 1) % size == front`**。
4. 容量為 size 時，實際只能放 **size − 1** 個元素；若用 **count 計數器**才可放滿 size 個。

| 狀態 | 判斷 |
|---|---|
| 空 | front == rear |
| 滿 | (rear + 1) % size == front |

📌 **目前元素數：** `(rear - front + size) % size`；也因此「犧牲一格」版最多只能放到 size − 1 個。

📌 **白話：** 為什麼要「犧牲一格」？因為若放滿到 front == rear，就會跟「空」的判斷撞在一起、分不出滿或空。犧牲一格當緩衝，滿和空才有不同條件。想放滿 size 個，就得另外用 count 計數器。

### 五、逐步範例：size = 5 的環狀佇列

採犧牲一格版（enqueue 放在 rear 後把 rear 前進；dequeue 讀 front 後把 front 前進）。容量 = size − 1 = **4**。

| 動作 | 放/取 位置 | front | rear | 狀態判斷 |
|---|---|---|---|---|
| 初始 | — | 0 | 0 | front==rear → **空** |
| enqueue A | index 0 | 0 | 1 | — |
| enqueue B | index 1 | 0 | 2 | — |
| enqueue C | index 2 | 0 | 3 | — |
| enqueue D | index 3 | 0 | 4 | (4+1)%5=0==front → **滿**（已放 4 個）|
| dequeue → A | index 0 | 1 | 4 | 不再滿 |
| enqueue E | index 4 | 1 | 0 | rear 繞回 0；(0+1)%5=1==front → **又滿** |

> 注意 enqueue E 時 **rear 從 4 繞回 0**——這就是「環狀重複利用空間」；若是普通佇列，rear 到底就會誤判溢位。

---

## ✅ 回到題目：解答

1. **call stack 與遞迴用哪個？** → **Stack**（後進先出，先回到最近呼叫的那一層）。
2. **犧牲一格版容量 size 實放幾個？** → **size − 1** 個。
3. **滿與空的判斷？** → 空：**`front == rear`**；滿：**`(rear + 1) % size == front`**。

---

## 📌 重點整理

- Stack＝**LIFO**，同端 top 進出，push／pop／peek；應用：call stack、遞迴、括號配對、運算式轉換、Undo。
- Queue＝**FIFO**，rear 進、front 出；應用：CPU 排程、列印、BFS、buffer、訊息佇列。
- Array／Linked List 是**儲存方式**，Stack／Queue 是**進出規則**，兩者維度不同。
- 環狀佇列用 **`(index + 1) % size`** 繞回開頭，解決假性溢位。
- 犧牲一格版：**空 `front==rear`**、**滿 `(rear+1)%size==front`**、容量 **size − 1**；用 count 才能放滿 size。

---

## ⚠️ 常見陷阱

- **LIFO／FIFO 記反**：Stack 後進先出、Queue 先進先出。
- **把 Stack／Queue 當儲存結構**：它們是操作規則（ADT），底層可用 Array 或 Linked List 實作。
- **滿的公式漏取餘數**：一定是 `(rear + 1) % size == front`，忘了 % size 會在繞回時判斷錯誤。
- **容量算成 size**：犧牲一格版實際只能放 size − 1 個；要放滿 size 得改用 count 計數器。
- **以為 BFS 用 Stack**：錯——BFS 用 Queue，用 Stack 會變成類 DFS 的行為。

---

## 📝 練習題（含解答）

**Q1.** 一疊書從上面拿、也從上面放，是 Stack 還是 Queue？屬於哪種進出規則？
<details><summary>看解答</summary>

**Stack**，屬 **LIFO（後進先出）**。
</details>

**Q2.** 環狀佇列 size = 8，犧牲一格版，最多可存幾個元素？
<details><summary>看解答</summary>

**size − 1 = 7** 個。若要存滿 8 個，需另外用 count 計數器判斷滿／空。
</details>

**Q3.** 環狀佇列 size = 6，目前 rear = 5，執行一次 enqueue 後 rear 會變成多少？
<details><summary>看解答</summary>

rear = (5 + 1) % 6 = **0**（繞回開頭），這正是環狀重複利用空間的效果。
</details>

**Q4.** 環狀佇列 front = 3、rear = 3，代表滿還是空？
<details><summary>看解答</summary>

**空**。犧牲一格版中 `front == rear` 判斷為空。
</details>

**Q5.** BFS（廣度優先搜尋）應該搭配 Stack 還是 Queue？
<details><summary>看解答</summary>

**Queue**（FIFO）——先探索到的節點先處理，才能一層層擴散。
</details>
