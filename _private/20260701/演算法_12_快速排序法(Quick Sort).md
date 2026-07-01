# 快速排序法(Quick Sort)

> 科目：演算法｜快速排序是**實務上最常用**的排序法之一，核心是「**分治（Divide and Conquer）**」：選一個基準值 pivot，把資料分成「比它小」和「比它大」兩堆，pivot 就地定位，再對兩堆各自遞迴。
>
> 學習方式：**pivot + partition 的分割流程**屬【理解】（考題最愛考「一次 partition 後的排列」）；**平均 O(n log n)、最壞 O(n²)、不穩定**屬【硬背】。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「快速排序的**平均**與**最壞**時間複雜度分別是多少？最壞在什麼情況發生？」
> 2. 「以**最右邊元素為 pivot**，對 [7, 2, 5, 1, 6, 3] 做**一次 partition** 後，陣列長什麼樣？pivot 落在哪個位置？」
> 3. 「快速排序是**穩定**還是不穩定？」

先別急著往下看答案，試著自己回答看看。

---

## 🤔 先想想

給你三個提示，幫你建立直覺：

- 快速排序**不是一開始就全排好**，而是先把「一個 pivot」放到它最終正確的位置。
- pivot 定位後，它**左邊都比它小、右邊都比它大**，於是問題被切成兩個更小的排序問題。
- 切得越平均（pivot 剛好在中間），越接近 O(n log n)；切得越偏（pivot 老是最大或最小），越接近 O(n²)。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、演算法概念

快速排序的重點不是一開始就全部排好，而是先把 pivot 放到正確位置，再把左右兩邊視為較小的排序問題。

> 白話：想像把一群人依身高排隊。你隨手選一個人當「基準（pivot）」，讓比他矮的都站他左邊、比他高的都站他右邊——這個基準的位置就確定了。接著對「左邊那群」和「右邊那群」重複同樣的動作，直到每群都只剩 1 人。

### 二、核心規則

1. 選一個 pivot，本教材使用最右邊元素當 pivot。
2. 執行 partition，讓 pivot 左邊都小於或等於 pivot，右邊都大於 pivot。
3. pivot 已在正確位置，不需要再移動。
4. 分別排序 pivot 左邊與右邊的子區間。

> 新手重點：partition 用一個指標 `i` 記錄「小於等於 pivot 區」的最後位置。掃描指標 `j` 每遇到一個 `<= pivot` 的元素，就把 `i` 往前推一格並交換過去；掃完最後把 pivot（最右）換到 `i + 1`，pivot 就定位了。

### 三、帶數字的逐步範例（一次 partition，陣列 [7, 2, 5, 1, 6, 3]）

用最右元素 **3** 當 pivot，`left = 0`、`right = 5`、`pivot = arr[5] = 3`、`i = left - 1 = -1`。
`i` 代表「小於等於 pivot 區域」的最後位置；`j` 從 left 掃到 right - 1。

| j | arr[j] | arr[j] ≤ 3 ? | 動作 | i | 陣列狀態 |
|---|---|---|---|---|---|
| 0 | 7 | 否 | 不動 | -1 | [7, 2, 5, 1, 6, 3] |
| 1 | 2 | 是 | i→0，swap arr[0],arr[1] | 0 | [**2**, 7, 5, 1, 6, 3] |
| 2 | 5 | 否 | 不動 | 0 | [2, 7, 5, 1, 6, 3] |
| 3 | 1 | 是 | i→1，swap arr[1],arr[3] | 1 | [2, **1**, 5, 7, 6, 3] |
| 4 | 6 | 否 | 不動 | 1 | [2, 1, 5, 7, 6, 3] |

掃描結束後，把 pivot 換到正確位置：`swap(arr, i + 1, right)` = `swap(arr, 2, 5)`：

`[2, 1, 3, 7, 6, 5]`，回傳 pivotIndex = **i + 1 = 2**。

**驗證**：pivot 值 3 現在在 index 2；左邊 `[2, 1]` 都 ≤ 3、右邊 `[7, 6, 5]` 都 > 3。3 已定位。

**接著遞迴**：對左區間 `[2, 1]`（index 0..1）與右區間 `[7, 6, 5]`（index 3..5）各自再做一次快速排序，最終得到 `[1, 2, 3, 5, 6, 7]`。

### 四、最壞時間複雜度

| 版本 | 最壞時間複雜度 | 推導重點 |
|---|---|---|
| 遞迴版本 | O(n²) | pivot 每次都切出 n - 1 與 0 的區間時，會退化成連續線性掃描。 |
| 非遞迴版本 | O(n²) | 即使用 stack 取代遞迴，partition 的最壞切分仍會累積成 n²。 |

> 白話：最壞情況是每次選到的 pivot 都是**最大或最小**（例如對已排序資料、又固定挑最右當 pivot），切出來一邊 n-1 個、另一邊 0 個，深度變 n，總比較累積成 **O(n²)**。**平均**情況切得夠平均，是 **O(n log n)**，也是它實務上快的原因。

### 五、遞迴版 Java 程式

用遞迴處理 pivot 左右兩側的子區間。

```java
private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static void quickSortRecursive(int[] arr) {
    quickSortRecursive(arr, 0, arr.length - 1);
}

private static void quickSortRecursive(int[] arr, int left, int right) {
    // left >= right 表示區間沒有元素或只有一個元素，不需要排序。
    if (left >= right) {
        return;
    }

    // partition 會把 pivot 放到正確位置，並回傳 pivot 的位置。
    int pivotIndex = partition(arr, left, right);

    // pivot 左邊都 <= pivot，右邊都 > pivot；再分別排序左右區間。
    quickSortRecursive(arr, left, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, right);
}

private static int partition(int[] arr, int left, int right) {
    int pivot = arr[right]; // 使用最右邊元素當 pivot。
    int i = left - 1; // i 代表「小於等於 pivot 區域」的最後位置。

    for (int j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}
```

> 新手解釋：`quickSortRecursive` 先 partition 取得 pivot 的位置 `pivotIndex`，然後**不含 pivot**地遞迴左半 `[left, pivotIndex-1]` 與右半 `[pivotIndex+1, right]`。`left >= right`（區間 ≤ 1 個元素）就停止。

### 六、非遞迴版 Java 程式

用 stack 保存尚未排序的區間，取代遞迴呼叫。

```java
private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

private static int partition(int[] arr, int left, int right) {
    int pivot = arr[right];
    int i = left - 1;

    for (int j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}

public static void quickSortIterative(int[] arr) {
    if (arr.length <= 1) {
        return;
    }

    // 用堆疊保存尚未排序的區間 [left, right]，取代遞迴呼叫。
    Deque<int[]> stack = new ArrayDeque<>();
    stack.push(new int[] {0, arr.length - 1});

    while (!stack.isEmpty()) {
        int[] range = stack.pop();
        int left = range[0];
        int right = range[1];

        if (left >= right) {
            continue;
        }

        int pivotIndex = partition(arr, left, right);

        if (left < pivotIndex - 1) {
            stack.push(new int[] {left, pivotIndex - 1});
        }
        if (pivotIndex + 1 < right) {
            stack.push(new int[] {pivotIndex + 1, right});
        }
    }
}
```

> 新手解釋：非遞迴版把「待排序的區間」用一個 `Deque` 當堆疊存起來，取代遞迴呼叫的系統堆疊。每次 pop 一個區間、partition、再把左右兩個子區間 push 回去，直到堆疊清空。`partition` 邏輯與遞迴版完全相同。

---

## ✅ 回到題目：解答

1. **平均與最壞複雜度？** → 平均 **O(n log n)**；最壞 **O(n²)**，發生在 pivot 每次都切出極不平均的區間（例如對已排序資料固定挑最右當 pivot）。
2. **對 [7, 2, 5, 1, 6, 3] 做一次 partition（pivot=3）？** → 結果 `[2, 1, 3, 7, 6, 5]`，pivot 落在 **index 2**（左邊都 ≤ 3、右邊都 > 3）。
3. **穩定嗎？** → **不穩定（unstable）**，partition 的長距離交換會打亂相等元素的相對順序。

---

## 📌 重點整理

- 核心：**分治**——選 pivot → partition 定位 → 遞迴左右子區間。
- 本教材 pivot 取**最右元素**；`i` 標記「≤ pivot 區」末端，最後把 pivot 換到 `i + 1`。
- 複雜度：**平均 O(n log n)、最壞 O(n²)、最佳 O(n log n)**。
- **不穩定排序**；額外空間主要來自遞迴（平均 O(log n)）。
- 非遞迴版用**顯式堆疊**保存待處理區間，效果等同遞迴。

---

## ⚠️ 常見陷阱

- **最壞 O(n²) 的觸發點**：對**已排序（或反序）資料**又固定挑最右／最左當 pivot，會退化成 O(n²)。實務常用「隨機 pivot」或「三數取中」避開。
- **partition 回傳的是位置不是值**：`partition` 回傳的是 pivot 定位後的**索引**，遞迴時要用 `pivotIndex - 1` 與 `pivotIndex + 1`，**不可把 pivot 再納入**子區間，否則可能無限遞迴。
- **不是穩定排序**：別和合併排序（stable）搞混。
- **快速 vs 合併別混**：Quick Sort 最壞 O(n²)、原地、不穩定；Merge Sort 最壞仍 O(n log n)、需 O(n) 額外空間、穩定。
- **空間別只記平均 O(log n)**：那是遞迴堆疊的平均深度；**最壞切分時遞迴深度達 O(n)**，額外空間也跟著到 O(n)。

---

## 📝 練習題（含解答）

**Q1.** 以最右元素為 pivot，對 `[4, 1, 3, 2]` 做一次 partition，結果與 pivotIndex 為何？
<details><summary>看解答</summary>

pivot = arr[3] = 2，i = -1。j=0：4≤2？否；j=1：1≤2？是，i=0，swap arr[0],arr[1] → [1, 4, 3, 2]；j=2：3≤2？否。掃完 swap arr[1],arr[3] → **[1, 2, 3, 4]**，回傳 pivotIndex = **1**（值 2 定位，左邊 [1] ≤2、右邊 [3,4] >2）。
</details>

**Q2.** 快速排序的最壞時間複雜度是多少？什麼輸入會觸發？
<details><summary>看解答</summary>

**O(n²)**。當每次 partition 都切出「一邊 n-1 個、另一邊 0 個」的極不平均區間時發生，典型是對**已排序／反序**資料固定取最右（或最左）當 pivot。
</details>

**Q3.** 遞迴呼叫為什麼是 `[left, pivotIndex-1]` 和 `[pivotIndex+1, right]`，而不含 pivotIndex？
<details><summary>看解答</summary>

因為 partition 後 pivot 已經在它**最終正確的位置**，不需要也不應該再參與後續排序；若把它含進去可能造成區間無法縮小、甚至無限遞迴。
</details>

**Q4.** 非遞迴版用什麼資料結構取代遞迴？它保存的是什麼？
<details><summary>看解答</summary>

用**堆疊（Deque/ArrayDeque 當 stack）**取代遞迴的系統呼叫堆疊。它保存「**尚未排序的區間 [left, right]**」，每次 pop 一段來 partition，再把產生的左右子區間 push 回去。
</details>

**Q5.** 快速排序和合併排序都常說是 O(n log n)，兩者在「最壞複雜度」與「穩定性」上有何不同？
<details><summary>看解答</summary>

快速排序**最壞 O(n²)**、**不穩定**、原地（額外空間約 O(log n)）；合併排序**最壞仍 O(n log n)**、**穩定**，但需要 **O(n)** 額外空間。
</details>
