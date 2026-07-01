# 雜湊 Hashing

> 科目：演算法｜雜湊（Hashing）的魔法是：**不用一個一個比對，而是用一條函數直接算出資料該放（或該找）的位置**，因此查找、插入、刪除都能接近 **O(1)**。這是資料庫索引、字典（HashMap）、快取背後的關鍵。
>
> 學習方式：真正會考的不是「怎麼算索引」，而是**碰撞（Collision）發生後怎麼處理**，以及**載入因子（Load Factor）變大時為什麼會變慢**。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 表大小 10、h(key) = key % 10，key = 25 會放到哪個索引？
> 2. 兩個不同的 key 算出**同一個位置**，這叫什麼？常見有哪兩大類處理方式？
> 3. **載入因子（Load Factor）** 越大，查找會變快還是變慢？為什麼？

先別急著看答案，試著自己回答看看。

---

## 🤔 先想想

三個提示：

- 雜湊的核心是一條 **hash function**，把 key「算」成表中的一個索引，而不是逐一比對。
- 位置有限、key 無限，所以**碰撞（Collision）遲早會發生**——重點是碰撞後怎麼辦。
- 表越滿（載入因子越大），要嘛探測越久、要嘛鏈越長，速度就會往 O(n) 靠近。

帶著這些，我們看拆解。

---

## 📖 觀念拆解

### 一、Hashing 核心想法

1. 雜湊法用 **hash function** 把 key 算成 **Hash Table** 的索引位置。
2. 例如表大小 10，**h(key) = key % 10**，key **25** 會放到索引 **5**（25 ÷ 10 餘 5）。
3. **理想無碰撞**時，查找、插入、刪除都是 **O(1)**。

📌 **白話：** 好的 hash function 要**算得快**且**分布均勻**，讓資料平均散開、**Collision 變少**。分布越均勻，越能維持接近 O(1) 的速度。

### 二、常見雜湊函數

| 方法 | 做法 |
|---|---|
| Division | h(k) = k % m，m 常取質數，分布較均勻。 |
| Mid-square | 把 key 平方後取中間幾位。 |
| Folding | 把 key 切段相加。 |

📌 **白話：**
- **Division（除法）** 最常見：取餘數當索引，**m 取質數**能讓分布更均勻（避免有規律的 key 全擠在少數格）。
- **Mid-square（平方取中）**：把 key 平方後取**中間幾位**，因為中間位受每一位數影響，較亂、較均勻。
- **Folding（摺疊）**：把長 key **切成幾段相加**，再取結果當索引。

### 三、Collision 與 Overflow

**Collision（碰撞）** 是不同 key 算出**相同位置**；**Overflow（溢位）** 是要存的位置**已經滿了**。碰撞處理主要分成 **Open Addressing（開放定址）** 與 **Chaining（鏈結）** 兩大類。

| 處理法 | 做法 | 考點 |
|---|---|---|
| Linear Probing | 從原位置往後一格一格找 h, h+1, h+2，並對 m 取餘數。 | 簡單但容易 clustering。 |
| Quadratic Probing | 用 h+1², h+2², h+3² 的距離找空位。 | 減少一次群聚。 |
| Double Hashing | 用第二個 hash function 決定探測間隔。 | 分布通常較好。 |
| Chaining | 每格接一條 linked list。 | 不會溢位、刪除簡單，但需額外指標。 |

📌 **白話：**
- 前三種（Linear／Quadratic／Double Hashing）都屬 **Open Addressing**：位置被佔就**另找表內的其他空格**。
- **Linear Probing** 一格一格往後找，簡單但容易讓資料擠成一團（**clustering 群聚**）。
- **Quadratic Probing** 用平方的間隔跳，能**減少一次群聚**。
- **Double Hashing** 用第二個函數決定間隔，分布通常最好。
- **Chaining** 則是每個格子掛一條 **linked list**，同位置的 key 全接上去，**不會溢位、刪除簡單**，代價是需要額外指標空間。

### 四、碰撞處理範例

若表大小 **m = 7** 且 **h(k) = k % 7**，則 **10、17、24、3** 都會算到**索引 3**，因為餘數都等於 3（10%7=3、17%7=3、24%7=3、3%7=3）。

1. **Linear Probing** 會把第一個放 3，下一個從 4、5、6、0 繼續找空格。
2. **Chaining** 會把所有算到 3 的 key 接在索引 3 的串列上。

**🔢 Linear Probing 逐步放置**（依序插入 10、17、24、3）：

| 插入順序 | h(k)=k%7 | 探測過程 | 最終索引 |
|---|---|---|---|
| 10 | 3 | 索引 3 空 → 放入 | 3 |
| 17 | 3 | 3 已滿 → 試 4，空 → 放入 | 4 |
| 24 | 3 | 3、4 滿 → 試 5，空 → 放入 | 5 |
| 3 | 3 | 3、4、5 滿 → 試 6，空 → 放入 | 6 |

最終：索引 3=10、4=17、5=24、6=3。可以看到原本都想擠在 3，卻被迫排成一長串——這就是 **clustering**。

若改用 **Chaining**：索引 3 的串列會掛上 **10 → 17 → 24 → 3**（四個 key 全接在同一格）。

### 五、Load Factor 與複雜度

**Load Factor（載入因子）** **α = n / m**，n 是已存資料數，m 是表大小。**α 越大，碰撞越多，查找越慢**；**Open Addressing 的 α 必須 ≤ 1**（格子有限，塞不下比格子還多的資料）。

| 情況 | 時間複雜度 | 原因 |
|---|---|---|
| 理想無碰撞 | O(1) | 直接算出位置。 |
| 平均分布良好 | 接近 O(1) | 探測或串列長度短。 |
| 最差全碰撞 | O(n) | 全部擠在同一段或同一條鏈。 |

📌 **白話：** α = n/m 就是「**平均每格塞了幾筆**」。α 小、分布勻，幾乎一算就中（接近 O(1)）；α 大到接近滿，探測要跑很遠、或鏈拉很長，最壞會退化到 **O(n)**。所以實務上表快滿時會**擴容並重新雜湊（rehash）**。

---

## ✅ 回到題目：解答

1. **key = 25，h(key) = key % 10 →** 25 % 10 = **5**，放到**索引 5**。
2. **不同 key 算到同位置叫什麼？** → **Collision（碰撞）**；兩大處理方式是 **Open Addressing（開放定址，如 Linear／Quadratic／Double Hashing）** 與 **Chaining（鏈結）**。
3. **Load Factor 越大查找越慢**，因為碰撞變多，探測步數或鏈長增加，從接近 O(1) 往 O(n) 靠近。

---

## 📌 重點整理

- Hashing 用 **hash function** 直接算出位置，理想無碰撞時查找／插入／刪除都是 **O(1)**。
- 常見雜湊函數：**Division（k % m，m 取質數）**、**Mid-square（平方取中）**、**Folding（切段相加）**。
- **Collision**＝不同 key 同位置；**Overflow**＝位置已滿。
- 碰撞處理兩大類：**Open Addressing**（Linear／Quadratic／Double Hashing，在表內另找空位）與 **Chaining**（每格接 linked list）。
- **Linear Probing 易 clustering**；Quadratic 減少群聚；Double Hashing 分布最好；Chaining 不溢位、刪除簡單但需指標。
- **Load Factor α = n/m**；α 越大越慢；Open Addressing 需 **α ≤ 1**；最差全碰撞 O(n)。

---

## ⚠️ 常見陷阱

- **Collision 和 Overflow 別混**：Collision 是「算到同位置」，Overflow 是「位置滿了存不下」。
- **Open Addressing 的 α 不能超過 1**：格子有限，資料數不可能多於格子數；Chaining 則可以 α > 1（鏈會變長）。
- **Linear Probing 的群聚問題**：連續佔用會形成一長串，讓後續探測越來越久。
- **一次群聚 vs 二次群聚**：Linear Probing 會造成**一次群聚（primary clustering）**；Quadratic Probing 避開一次群聚、但仍有**二次群聚（secondary clustering）**；**Double Hashing 兩者都能避免**，分布最好。
- **m 為什麼取質數**：Division 法取質數 m 可減少規律 key 造成的集中，分布較均勻。
- **接近 O(1) 不是保證 O(1)**：碰撞嚴重（最差全碰撞）時會退化成 O(n)。
- **取餘數要對表大小取**：探測時 h+1、h+2… 也要再對 m 取餘數，才會繞回表頭（如索引 6 的下一格回到 0）。
- **Open Addressing 刪除要小心**：直接把格子清空會截斷探測路徑，讓後面靠繼續探測才找到的 key 查不到，須改放「已刪除」標記（tombstone）；Chaining 則可直接移除節點。

---

## 📝 練習題（含解答）

**Q1.** 表大小 m = 13，用 Division 法 h(k) = k % 13，key = 30 會落在哪個索引？
<details><summary>看解答</summary>

30 % 13 = **4**（13 × 2 = 26，30 − 26 = 4），落在**索引 4**。
</details>

**Q2.** Collision 與 Overflow 有什麼差別？
<details><summary>看解答</summary>

**Collision（碰撞）** 是不同 key 經過 hash function 算出**相同位置**；**Overflow（溢位）** 是要存入的**位置已經滿了**、放不下。
</details>

**Q3.** m = 7、h(k) = k % 7，依序插入 10、17、24、3，用 Linear Probing 求各自最終索引。
<details><summary>看解答</summary>

四個 key 都算到 3。10 放索引 3；17 往後到 4；24 往後到 5；3 往後到 6。最終：**3=10、4=17、5=24、6=3**。
</details>

**Q4.** 為什麼 Load Factor 越大，雜湊查找會變慢？
<details><summary>看解答</summary>

Load Factor α = n/m 代表平均每格的資料量。α 越大代表表越滿、碰撞越多，Open Addressing 要探測更多格、Chaining 的串列更長，時間從接近 O(1) 往 **O(n)** 靠近。
</details>

**Q5.** Chaining 與 Open Addressing 相比，有什麼優點與代價？
<details><summary>看解答</summary>

**優點**：每格接一條 linked list，**不會溢位**、**刪除簡單**，且 α 可以大於 1。**代價**：每個節點需要**額外指標空間**。
</details>
