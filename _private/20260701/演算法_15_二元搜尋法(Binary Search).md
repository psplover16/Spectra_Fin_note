# 二元搜尋法(Binary Search)

> 科目：演算法｜二元搜尋是「已排序資料」搜尋的代表，考點在前提條件、mid 計算與 O(log n)。
>
> 學習方式：抓住一句話——「每次看中間，砍掉一半」。把 left / mid / right 的變化在紙上追一次，觀念就通了。
>
> 難度分配：流程屬【理解】；「必須先排序」「找不到回傳 -1」屬【硬背】的固定考點。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「二元搜尋法能直接用在**未排序**的陣列上嗎？為什麼？」
> 2. 「在已排序陣列 `[1, 3, 5, 7, 9, 11]` 中找 **9**，會檢查哪些位置？」
> 3. 「二元搜尋的時間複雜度是多少？為什麼？」

先別急著看答案，試著自己在紙上追一次 left / mid / right。

---

## 🤔 先想想

給你三個提示，建立直覺：

- 想像查紙本字典：你不會一頁一頁翻，而是**先翻中間**，再決定往前或往後。
- 每比對一次中間值，就能**丟掉一半**不可能的資料——資料量再大也撐不了幾步。
- 但這招有個**大前提**：資料必須是**排好序**的，否則「往左或往右丟一半」的判斷會出錯。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、演算法概念

二元搜尋法(Binary Search)是在**已排序陣列**中找目標值的搜尋演算法。它每次檢查中間值，然後捨棄不可能包含答案的一半資料。

**白話**：二元搜尋的必要前提是資料已排序；若陣列未排序，往左或往右捨棄一半資料的判斷就可能錯。這也是它和「線性搜尋（一個一個找）」最大的差別——線性搜尋不挑資料順序，但要 O(n)；二元搜尋快到 O(log n)，代價是資料得先排好。

### 二、核心規則（逐條看）

1. 設定 left 與 right 表示目前搜尋範圍。
2. 計算 mid，檢查中間位置的值。
3. 若 arr[mid] 等於 target，就回傳 mid。
4. 若 target 較大，只搜尋右半邊；若 target 較小，只搜尋左半邊。
5. 當 left 大於 right，表示找不到，回傳 -1。

**新手提醒**：`left` 和 `right` 是「目前還在懷疑範圍」的左右邊界。每一步不是把範圍縮小一格，而是**直接砍掉一半**，所以極快。

### 三、最壞時間複雜度

| 版本 | 最壞時間複雜度 | 推導重點 |
|---|---|---|
| 遞迴版本 | O(log n) | 每次搜尋範圍砍半，n -> n/2 -> n/4，直到剩 1 個位置。 |
| 非遞迴版本 | O(log n) | while 每跑一次都捨棄一半資料。 |

**白話**：`log n` 是「n 要除以 2 幾次才會變成 1」。例如 n = 1024，最多約 10 次就找完（1024→512→256→…→1）；n 變成 100 萬，也不過約 20 步。這就是「砍半」的威力。

### 四、遞迴版 Java

> 用遞迴縮小 left 到 right 的搜尋範圍。

```java
public static int binarySearchRecursive(int[] arr, int target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

private static int binarySearchRecursive(int[] arr, int target, int left, int right) {
    // left > right 表示搜尋區間不存在，也就是找不到。
    if (left > right) {
        return -1;
    }

    // 避免 (left + right) 在極大資料時整數溢位。
    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    } else if (target > arr[mid]) {
        // target 比中間值大，只需要找右半邊。
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // target 比中間值小，只需要找左半邊。
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}
```

**逐行白話**：`mid = left + (right - left) / 2` 是為了**避免整數溢位**——若寫成 `(left + right) / 2`，當 left、right 都很大時相加可能超過 int 上限。命中就回傳 mid；target 較大往右半（`mid + 1`）、較小往左半（`mid - 1`）；區間空了（`left > right`）就回傳 -1。

### 五、非遞迴版 Java

> 用 while 迴圈不斷調整 left 與 right。

```java
public static int binarySearchIterative(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1; // 往右半邊找。
        } else {
            right = mid - 1; // 往左半邊找。
        }
    }

    return -1; // 找不到。
}
```

**逐行白話**：只要 `left <= right`（範圍還存在）就持續。命中回傳；否則用 `left = mid + 1` 或 `right = mid - 1` 把範圍砍半。迴圈自然結束（`left > right`）代表沒找到，回傳 -1。

### 六、逐步範例：在 `[1, 3, 5, 7, 9, 11]` 中找 9

先標好索引：索引 0→1、1→3、2→5、3→7、4→9、5→11。

| 步驟 | left | right | mid | arr[mid] | 判斷 | 動作 |
|---|---|---|---|---|---|---|
| 1 | 0 | 5 | 0+(5-0)/2 = **2** | 5 | 9 > 5 | left = mid+1 = 3 |
| 2 | 3 | 5 | 3+(5-3)/2 = **4** | 9 | 9 == 9 | **回傳 4** |

**結果：在索引 4 找到 9**，只檢查了 2 個位置（索引 2 與 4）。相比線性搜尋要一路比到第 5 個，二元搜尋明顯更省。

> 反例（找不到）：若改找 8，會走 mid=2(5)→left=3、mid=4(9)→right=3、mid=3(7)→left=4，此時 left(4) > right(3)，回傳 **-1**。

---

## ✅ 回到題目：解答

1. **不能**直接用在未排序陣列。因為「target 較大就往右、較小就往左」的判斷，只有在資料已排序時才成立。
2. 找 9 會檢查**索引 2（值 5）與索引 4（值 9）** 兩個位置，第 2 步命中。
3. **O(log n)**，因為每比對一次中間值就捨棄一半資料，範圍以 n→n/2→n/4… 的速度縮小。

---

## 📌 重點整理

- 前提：**資料必須已排序**，否則二元搜尋不成立。
- 資料結構：需能**隨機存取（O(1) 取中間值）**，故適用**陣列**；用在**連結串列**會退化，因為取 mid 得逐一走訪。
- 流程：算 mid → 比中間值 → 往左半或右半 → 範圍空了回傳 -1。
- `mid = left + (right - left) / 2`：避免 `(left + right)` 整數溢位。
- 命中回傳索引；**找不到回傳 -1**。
- 複雜度：遞迴、非遞迴皆 **O(log n)**（每次砍半）；**最佳情況 O(1)**（第一次算的 mid 剛好就是 target）。

---

## ⚠️ 常見陷阱

- **忘了前提**：未排序就用二元搜尋，結果不可靠——這是最常被考的觀念題。
- **mid 溢位寫法**：大資料時 `(left + right) / 2` 可能溢位，正解是 `left + (right - left) / 2`。
- **邊界更新寫錯**：往右要 `left = mid + 1`、往左要 `right = mid - 1`；若寫成 `left = mid` 或 `right = mid` 可能造成無限迴圈。
- **回傳值**：找不到的慣例回傳 **-1**，別回傳 0（索引 0 是合法位置，會誤判）。

---

## 📝 練習題（含解答）

**Q1.** 在 `[2, 4, 6, 8, 10, 12, 14]` 中找 12，會依序檢查哪些索引？結果為何？
<details><summary>看解答</summary>

索引：0→2,1→4,2→6,3→8,4→10,5→12,6→14。
- left=0,right=6,mid=3,arr[3]=8，12>8→left=4
- left=4,right=6,mid=5,arr[5]=12，命中→回傳 **5**

依序檢查索引 **3、5**，在索引 5 找到 12。
</details>

**Q2.** 為什麼二元搜尋一定要先排序？
<details><summary>看解答</summary>

因為它靠「target 比中間值大就往右、小就往左」來捨棄一半資料；只有在資料已排序時，這個「另一半一定不含答案」的判斷才成立。未排序時可能把答案所在的半邊丟掉。
</details>

**Q3.** `mid = left + (right - left) / 2` 相較於 `(left + right) / 2` 的好處是什麼？
<details><summary>看解答</summary>

避免 `left + right` 在資料量極大時發生**整數溢位**（超過 int 上限），兩者算出的中點相同，但前者更安全。
</details>

**Q4.** 二元搜尋的時間複雜度是多少？大致直覺是什麼？
<details><summary>看解答</summary>

**O(log n)**。因為每一步都把搜尋範圍砍半（n→n/2→n/4…），要幾步只跟「n 除以 2 幾次變 1」有關，所以是對數級。
</details>

**Q5.** 在 `[1, 3, 5, 7, 9, 11]` 中找 4，最後會回傳什麼？
<details><summary>看解答</summary>

回傳 **-1**（找不到）。過程：mid=2(5)→4<5→right=1；mid=0(1)→4>1→left=1；mid=1(3)→4>3→left=2，此時 left(2) > right(1)，結束回傳 -1。
</details>
