# 排序 Sorting ★

> 科目：演算法｜排序是演算法的必考大戶。這張卡不細講每一種排序的程式碼（那些在後面各自有專篇），而是幫你建立**一張總比較表**——時間複雜度、穩不穩定、要不要額外空間。這三欄幾乎就是選擇題所有選項的來源。
>
> 學習方式：先**理解每種排序在做什麼**，再記表；硬背一串 O 很容易張冠李戴，理解了反而記得牢。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 下列哪些排序法是**穩定（Stable）**的？（Bubble／Selection／Insertion／Merge／Quick／Heap）
> 2. 哪些排序法能**保證** O(n log n)（不管輸入多壞都不退化）？
> 3. **Quick Sort** 的平均與最差時間複雜度各是多少？

先別急著看答案，試著自己回答看看。

---

## 🤔 先想想

三個提示：

- **穩定性（Stability）** 講的是「值相等的元素，排完相對順序有沒有變」，跟快不快無關。
- 有些排序**最好情況**能到 O(n)（例如資料幾乎有序時的 Bubble、Insertion），有些不管怎樣都是 O(n²)（Selection）。
- **保證** O(n log n) 代表連最差情況都是 O(n log n)——這點常用來區分 Quick 與 Merge／Heap。

帶著這些，我們看拆解。

---

## 📖 觀念拆解

### 一、排序與穩定性

**排序（Sorting）** 是把資料按大小或某個鍵值排成順序。**Stable sorting（穩定排序）** 表示：**值相等的元素，排序後相對順序不變**。

穩定性在**多欄位排序**時很重要：先依部門排，再依薪水排時，穩定排序能保留前一次「部門排序」的相對順序。

**🔢 穩定性小範例**：有三筆資料（值, 標籤）＝ (3,a)、(1,b)、(3,c)。
- **穩定排序**結果：(1,b)、**(3,a)、(3,c)** ← 兩個 3 的相對順序（a 在 c 前）維持不變。
- **不穩定排序**可能得到：(1,b)、**(3,c)、(3,a)** ← 兩個 3 的順序被打亂了。

### 二、簡單排序（O(n²) 家族）

| 排序法 | 核心動作 | 時間與穩定性 |
|---|---|---|
| Bubble Sort | 相鄰比較，較大的往右冒。 | 最好可 O(n)，平均/最差 O(n²)，穩定。 |
| Selection Sort | 每輪從未排序區找最小值放到前面。 | 最好/平均/最差皆 O(n²)，不穩定。 |
| Insertion Sort | 把新元素插入左側已排序區。 | 最好 O(n)，平均/最差 O(n²)，穩定；小資料或近乎有序時好用。 |

📌 **白話：**
- **Bubble** 一輪輪把最大值往右「冒」上去；若某輪完全沒交換代表已排好，所以**近乎有序時可達 O(n)**。
- **Selection** 每輪都要掃完剩餘區找最小值，**不受原始順序影響**，所以最好情況也是 O(n²)。
- **Insertion** 像整理撲克牌，把新牌插進左邊已排好的手牌；資料**近乎有序時搬移很少，可達 O(n)**。

### 三、進階排序（O(n log n) 家族）

| 排序法 | 核心動作 | 考點 |
|---|---|---|
| Merge Sort | 先拆半，再合併有序序列。 | 最好/平均/最差皆 O(n log n)，Stable，但需要 O(n) 額外空間。 |
| Quick Sort | 選 pivot，partition 後分治左右區間。 | 平均 O(n log n)，最差 O(n²)，Unstable，實務常很快。 |
| Heap Sort | 建 Heap，反覆取根完成排序。 | 最好/平均/最差皆 O(n log n)，Unstable，額外空間 O(1)。 |

> **Radix Sort** 是**非比較排序**，適合整數或固定長度鍵，時間 **O(d x (n+k))**，常簡化理解為線性級距，且**穩定**。

📌 **白話：**
- **Merge** 用「分治」拆到不能再拆再合併，穩定又保證 O(n log n)，代價是要 **O(n) 額外空間**。
- **Quick** 平均非常快、實務常勝，但 **pivot 選得極差時最差退化成 O(n²)**，且不穩定。
- **Heap** 靠堆積反覆取根，保證 O(n log n) 且**額外空間 O(1)**，但不穩定。

### 四、七大排序比較表（核心，務必熟）

| 排序法 | 最好 | 平均 | 最差 | 穩定性 | 額外空間 |
|---|---|---|---|---|---|
| Bubble | O(n) | O(n²) | O(n²) | Stable | O(1) |
| Selection | O(n²) | O(n²) | O(n²) | Unstable | O(1) |
| Insertion | O(n) | O(n²) | O(n²) | Stable | O(1) |
| Merge | O(n log n) | O(n log n) | O(n log n) | Stable | O(n) |
| Quick | O(n log n) | O(n log n) | O(n²) | Unstable | O(log n) |
| Heap | O(n log n) | O(n log n) | O(n log n) | Unstable | O(1) |
| Radix | O(n) | O(n) | O(n) | Stable | O(n+k) |

### 五、選擇題記憶鉤子

1. **穩定排序**：Bubble、Insertion、Merge、Radix。
2. **不穩定排序**：Selection、Quick、Heap、Shell。
3. **保證 O(n log n)**：Merge、Heap。
4. **Quick Sort 平均快**，但 pivot 極差時最差會掉到 O(n²)。
5. **Shell Sort** 是 Insertion Sort 改良，平均常記約 **O(n^1.5)**，不穩定，視 gap 序列而定。

---

## ✅ 回到題目：解答

1. **哪些穩定？** → **Bubble、Insertion、Merge**（加上非比較的 Radix）穩定；**Selection、Quick、Heap 不穩定**。
2. **哪些保證 O(n log n)？** → **Merge 與 Heap**（連最差都是 O(n log n)）。Quick 不算，因為最差是 O(n²)。
3. **Quick Sort 平均/最差？** → 平均 **O(n log n)**，最差 **O(n²)**（pivot 極差時）。

---

## 📌 重點整理

- **穩定性 = 值相等元素排完相對順序不變**，跟速度無關；多欄位排序時很重要。
- **簡單排序（O(n²)）**：Bubble、Selection、Insertion；其中 Bubble、Insertion 最好可 O(n)，Selection 永遠 O(n²)。
- **進階排序（O(n log n)）**：Merge（穩定、需 O(n) 空間）、Quick（平均快、最差 O(n²)、不穩定）、Heap（保證 O(n log n)、空間 O(1)、不穩定）。
- **穩定口訣**：Bubble、Insertion、Merge、Radix 穩定；Selection、Quick、Heap、Shell 不穩定。
- **保證 O(n log n)**：只有 Merge、Heap。
- Radix 是非比較排序，O(d x (n+k))，穩定。
- **比較式排序的時間下限是 Ω(n log n)**：只靠元素兩兩比較的排序，最壞情況無法比 O(n log n) 更快；要更快得用非比較排序（如 Radix、Counting）。

---

## ⚠️ 常見陷阱

- **穩定 ≠ 快**：穩定性只看「相等元素順序有沒有變」，與時間複雜度是兩回事。
- **Quick Sort 不是保證 O(n log n)**：它平均 O(n log n)，但**最差 O(n²)**；保證的是 Merge 和 Heap。
- **Selection 沒有 O(n) 最好情況**：不管輸入多有序，它每輪都要掃剩餘區，永遠 O(n²)。
- **額外空間別記反**：Merge 需 O(n)、Quick 需 O(log n)（遞迴堆疊）、Heap 只要 O(1)。
- **Heap Sort 不穩定**：雖然保證 O(n log n)，但它是不穩定排序。
- **Shell Sort 常被誤認為穩定**：其實**不穩定**，且複雜度視 gap 序列而定（常記約 O(n^1.5)）。

---

## 📝 練習題（含解答）

**Q1.** 「穩定排序」是什麼意思？請用一句話說明。
<details><summary>看解答</summary>

值相等的元素，排序後彼此的**相對順序不變**。例如兩筆值都是 3 的資料，排完後原本在前的仍在前。
</details>

**Q2.** 哪些排序法能保證（連最差情況都是）O(n log n)？
<details><summary>看解答</summary>

**Merge Sort 與 Heap Sort**。Quick Sort 平均是 O(n log n)，但最差會退化成 O(n²)，所以不算「保證」。
</details>

**Q3.** Selection Sort 的最好情況時間複雜度是多少？為什麼？
<details><summary>看解答</summary>

**O(n²)**。因為它每一輪都要掃描整個未排序區找最小值，比較次數不受原始資料順序影響，即使輸入已排序也一樣。
</details>

**Q4.** 三種排序 Merge、Quick、Heap 的額外空間各是多少？
<details><summary>看解答</summary>

Merge = **O(n)**、Quick = **O(log n)**（遞迴堆疊）、Heap = **O(1)**。
</details>

**Q5.** 下列排序中，哪些是不穩定的：Bubble、Selection、Insertion、Merge、Quick、Heap？
<details><summary>看解答</summary>

**Selection、Quick、Heap** 不穩定；Bubble、Insertion、Merge 穩定。
</details>
