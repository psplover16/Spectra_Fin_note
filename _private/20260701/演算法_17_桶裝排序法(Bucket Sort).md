# 桶裝排序法(Bucket Sort)

> 科目：演算法｜桶裝排序是「非比較式（分配式）排序」的代表，考點在分桶公式、邊界修正與複雜度來源。
>
> 學習方式：先抓大流程「分桶 → 桶內排序 → 合併」，再理解標準化公式 `(num - min) / (max - min)` 怎麼把數字對應到桶子。
>
> 難度分配：大流程屬【理解】；標準化公式、邊界修正三條件、最壞複雜度屬【硬背】的細節考點。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「桶裝排序是靠**兩兩比較**來排序嗎？它的基本步驟有哪些？」
> 2. 「資料範圍 min = 10、max = 50，某數 num = 30，用 `(num - min) / (max - min)` 算出的**標準化比例**是多少？再乘上桶數會得到什麼？」
> 3. 「為什麼**最大值**算出來的桶子索引要特別修正？桶裝排序的最壞時間複雜度是多少？」

先別急著看答案，試著自己算算 num = 30 的標準化比例。

---

## 🤔 先想想

給你三個提示：

- 想像把一疊考卷**按分數段分堆**：0–9 一堆、10–19 一堆……分完再把每堆各自排好。
- 決定「該進哪一堆」不是靠跟別人比較，而是靠一條**公式算出來**——這就是桶裝排序和氣泡/插入最大的不同。
- 有個小陷阱：**最大值**用公式算，比例剛好是 1.0，乘上桶數會「多出一格」，掉到不存在的桶子，必須修回最後一桶。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、演算法概念

桶裝排序法(Bucket Sort)會先把資料依數值範圍分到多個桶子，再排序每個桶子，最後依桶子順序合併回原陣列。這裡採用 GeneralBucketSort.java 的通用模式：先找 min/max，用標準化比例計算桶子索引，並特別修正最大值落到 bucketCount 的邊界情況。

**白話**：桶裝排序的重點不是直接比較每一對元素，而是先把資料映射到不同區間。若桶子分布均勻，合併時會很順；若資料全部集中在同一桶，效能就會被桶內排序主導。換句話說，它把「排序」外包給「分堆＋各堆小排序」。

### 二、核心規則（逐條看）

1. 若陣列為 null、長度小於等於 1，直接返回。
2. 掃描所有資料，找出最小值 min 與最大值 max。
3. 若 min == max，代表所有資料相同，不需要分桶。
4. 建立 bucketCount 個桶子，常見做法是讓桶子數量等於資料數量。
5. 用 (num - min) / (max - min) 算出 0 到 1 之間的標準化比例。
6. 把比例乘上 bucketCount 得到桶子索引，並修正 index == bucketCount、index < 0、index >= bucketCount 的邊界。
7. 排序每個桶子，再從第一個桶子開始依序寫回原陣列。

**新手提醒**：第 5、6 步是整個演算法的心臟。標準化把任意數值壓到 0～1 之間，再乘上桶數就得到「該進第幾桶」；第 6 步的三個修正，是為了擋住浮點誤差與最大值越界。

### 三、最壞時間複雜度

| 版本 | 最壞時間複雜度 | 推導重點 |
|---|---|---|
| 遞迴版本 | O(n log n) | 最壞時所有資料集中在同一桶，本版本桶內使用 Collections.sort，因此由該比較排序主導；若桶內改用插入排序，常見最壞會記為 O(n²)。 |
| 非遞迴版本 | O(n log n) | 分桶與合併各為 O(n)，最壞瓶頸仍是單一大桶的 Collections.sort。 |

**白話**：理想情況（資料均勻分散、每桶少少幾個）桶裝排序可以接近線性 O(n)；但最壞情況是**所有資料擠進同一桶**，這時整個效能就由那一桶的排序法決定。本教材桶內用 `Collections.sort`（比較排序，O(k log k)），所以最壞記為 **O(n log n)**；若把桶內改成插入排序，最壞就會退化成 **O(n²)**——這是常見的比較考點。

### 四、遞迴版 Java

> 保留 GeneralBucketSort.java 的 min/max、標準化比例與邊界修正，改用遞迴拆解掃描、分桶、桶內排序與合併。

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public static void bucketSortRecursive(double[] arr) {
    // 入口檢查：null 代表沒有資料，長度 0 或 1 代表本來就有序。
    // 這個判斷一定要放在讀 arr[0] 之前，避免 null 或空陣列造成錯誤。
    if (arr == null || arr.length <= 1) {
        return;
    }

    // 第 1 步：用遞迴找出 min 與 max。
    // index 從 1 開始，因為 arr[0] 已經先拿來當作目前的 min 與 max。
    // 回傳 double[] {min, max}，讓後面的分桶公式知道整體資料範圍。
    double[] minMax = findMinMaxRecursive(arr, 1, arr[0], arr[0]);
    double min = minMax[0];
    double max = minMax[1];

    // 若最小值等於最大值，代表所有資料都相同。
    // 此時每個元素放到哪個桶子都沒有意義，原陣列已經視為排序完成。
    if (min == max) {
        return;
    }

    // bucketCount 使用資料筆數，是 GeneralBucketSort.java 採用的通用做法。
    // 每個桶子會負責整體數值範圍中的一小段區間。
    int bucketCount = arr.length;
    List<List<Double>> buckets = new ArrayList<>();

    // 第 2 步：用遞迴建立桶子。
    // 第 3 步：用遞迴把每個數字放進對應桶子。
    // 第 4 步：用遞迴逐桶排序。
    // 第 5 步：用遞迴把桶子內容寫回原陣列。
    createBucketsRecursive(buckets, bucketCount);
    distributeRecursive(arr, 0, buckets, min, max);
    sortBucketsRecursive(buckets, 0);
    writeBackRecursive(arr, buckets, 0, 0);
}

private static double[] findMinMaxRecursive(double[] arr, int index, double min, double max) {
    // 遞迴終止條件：index 已經走到陣列尾端，代表全部資料都看過了。
    // 這時候 min 與 max 就是整個陣列的最小值與最大值。
    if (index == arr.length) {
        return new double[] {min, max};
    }

    // current 是這一層遞迴正在檢查的資料。
    // 每一層只負責一個位置，檢查完就交給下一層處理 index + 1。
    double current = arr[index];

    // 如果 current 比目前 min 更小，就更新 min。
    if (current < min) {
        min = current;
    }
    // 如果 current 比目前 max 更大，就更新 max。
    if (current > max) {
        max = current;
    }

    // 往下一格繼續找，直到 index == arr.length。
    return findMinMaxRecursive(arr, index + 1, min, max);
}

private static void createBucketsRecursive(List<List<Double>> buckets, int bucketCount) {
    // 遞迴終止條件：桶子的數量已經等於 bucketCount。
    // 例如 bucketCount 是 7，就要建立 bucket[0] 到 bucket[6]。
    if (buckets.size() == bucketCount) {
        return;
    }

    // 每次遞迴只新增一個空桶子。
    // 這個桶子之後會放入落在某個數值區間內的資料。
    buckets.add(new ArrayList<>());

    // 新增完一個桶子後，再呼叫自己補下一個桶子。
    createBucketsRecursive(buckets, bucketCount);
}

private static void distributeRecursive(
        double[] arr,
        int index,
        List<List<Double>> buckets,
        double min,
        double max
) {
    // 遞迴終止條件：index 已經走完 arr，代表所有數字都已放入桶子。
    if (index == arr.length) {
        return;
    }

    // 先依照 min/max 把 arr[index] 標準化，再換算成桶子索引。
    // bucketIndex 代表這個數字應該放進哪一個桶子。
    int bucketIndex = getBucketIndex(arr[index], min, max, buckets.size());

    // 把目前數字放進算出的桶子。
    // 同一個桶子內可能有多個數字，所以桶內稍後仍需要排序。
    buckets.get(bucketIndex).add(arr[index]);

    // 處理下一個陣列元素。
    distributeRecursive(arr, index + 1, buckets, min, max);
}

private static void sortBucketsRecursive(List<List<Double>> buckets, int index) {
    // 遞迴終止條件：index 已經走完所有桶子。
    if (index == buckets.size()) {
        return;
    }

    // Bucket Sort 只保證不同桶子的區間順序。
    // 同一桶內的資料仍可能是亂序，所以要做桶內排序。
    // 這裡沿用 GeneralBucketSort.java 的 Collections.sort。
    Collections.sort(buckets.get(index));

    // 排完目前桶子後，繼續排序下一個桶子。
    sortBucketsRecursive(buckets, index + 1);
}

private static int writeBackRecursive(
        double[] arr,
        List<List<Double>> buckets,
        int bucketIndex,
        int arrIndex
) {
    // 遞迴終止條件：所有桶子都寫回原陣列。
    // arrIndex 會回傳給上一層，表示目前原陣列已寫到哪個位置。
    if (bucketIndex == buckets.size()) {
        return arrIndex;
    }

    // 先把目前桶子的內容全部寫回 arr。
    // nextIndex 是寫完目前桶子後，下一個桶子應該開始寫入的位置。
    int nextIndex = writeBucketRecursive(arr, buckets.get(bucketIndex), 0, arrIndex);

    // 接著處理下一個桶子。
    return writeBackRecursive(arr, buckets, bucketIndex + 1, nextIndex);
}

private static int writeBucketRecursive(double[] arr, List<Double> bucket, int itemIndex, int arrIndex) {
    // 遞迴終止條件：目前桶子內的元素都已經寫回 arr。
    // 回傳 arrIndex，讓外層知道下一個桶子要接在哪裡。
    if (itemIndex == bucket.size()) {
        return arrIndex;
    }

    // 把目前桶子的第 itemIndex 個元素寫回原陣列。
    // 因為外層會按照 bucket[0]、bucket[1]、bucket[2] 的順序寫回，
    // 加上每個桶子內部已排序，所以整體就會由小到大。
    arr[arrIndex] = bucket.get(itemIndex);

    // itemIndex 往下一個桶內元素前進，arrIndex 也往下一格前進。
    return writeBucketRecursive(arr, bucket, itemIndex + 1, arrIndex + 1);
}

private static int getBucketIndex(double num, double min, double max, int bucketCount) {
    // range 是整體資料範圍，也就是最大值與最小值的距離。
    double range = max - min;

    // normalized 會把 num 轉成 0 到 1 之間的位置比例。
    // 例如資料範圍是 10 到 50，num 是 30，normalized 就是 0.5。
    double normalized = (num - min) / range;

    // 把 0 到 1 的比例放大成 0 到 bucketCount 的桶子索引範圍。
    // 轉成 int 會取整數部分，例如 5.7 會變成 5。
    int index = (int)(normalized * bucketCount);

    // num == max 時，index 會等於 bucketCount，需要修正到最後一個桶子。
    if (index == bucketCount) {
        index = bucketCount - 1;
    }
    // double 小數運算可能有極小誤差；若算到負數，就保護成第一個桶子。
    if (index < 0) {
        index = 0;
    }
    // 若索引超過最後一個桶子，就保護成最後一個桶子。
    if (index >= bucketCount) {
        index = bucketCount - 1;
    }

    // 回傳安全範圍內的桶子索引。
    return index;
}
```

**逐段白話**：`bucketSortRecursive` 是主流程，把「找 min/max → 建桶 → 分桶 → 桶內排序 → 寫回」五件事各交給一個遞迴輔助方法。`findMinMaxRecursive` 一格一格更新 min/max；`createBucketsRecursive` 每層加一個空桶；`distributeRecursive` 呼叫 `getBucketIndex` 決定每個數進哪桶；`sortBucketsRecursive` 逐桶 `Collections.sort`；`writeBackRecursive` 搭配 `writeBucketRecursive` 依桶順序寫回，用回傳的 `arrIndex` 接續下一桶的起點。最關鍵的 `getBucketIndex` 就是標準化＋三重邊界修正。

### 五、非遞迴版 Java

> 依照 GeneralBucketSort.java 的流程，用迴圈完成找 min/max、分桶、桶內排序與合併。

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public static void bucketSortIterative(double[] arr) {
    // null、空陣列或只有一筆資料時，不需要排序。
    if (arr == null || arr.length <= 1) {
        return;
    }

    int bucketCount = arr.length;

    // 第 1 步：找出最小值 min 和最大值 max。
    double min = arr[0];
    double max = arr[0];

    for (double num : arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    // 特殊情況：所有數字都一樣，不需要分桶。
    if (min == max) {
        return;
    }

    // 第 2 步：建立 bucketCount 個空桶子。
    List<List<Double>> buckets = new ArrayList<>();

    for (int i = 0; i < bucketCount; i++) {
        buckets.add(new ArrayList<>());
    }

    // 第 3 步：把每個數字放進對應桶子。
    for (double num : arr) {
        double range = max - min;
        double normalized = (num - min) / range;
        int index = (int)(normalized * bucketCount);

        // num == max 時會算到 bucketCount，必須改成最後一個桶子。
        if (index == bucketCount) {
            index = bucketCount - 1;
        }
        if (index < 0) {
            index = 0;
        }
        if (index >= bucketCount) {
            index = bucketCount - 1;
        }

        buckets.get(index).add(num);
    }

    // 第 4 步：每個桶子內部排序。
    for (List<Double> bucket : buckets) {
        Collections.sort(bucket);
    }

    // 第 5 步：把桶子依序合併回原本陣列。
    int arrIndex = 0;

    for (List<Double> bucket : buckets) {
        for (double num : bucket) {
            arr[arrIndex] = num;
            arrIndex++;
        }
    }
}
```

**逐段白話**：這是遞迴版的「攤平」寫法，五步一目了然——用一個 for 找 min/max、一個 for 建空桶、一個 for 分桶（含三重邊界修正）、一個 for 逐桶 `Collections.sort`、最後兩層 for 依桶順序把值寫回。因為桶是照索引 0、1、2… 排列、每桶內部又已排序，合併出來自然由小到大。

### 六、逐步範例：資料 `[30, 10, 50, 20, 40]`

設 bucketCount = 資料數 = 5；掃描得 min = 10、max = 50，故 range = max − min = 40。逐一算 `normalized = (num - min) / range`，再 `index = (int)(normalized * 5)`：

| num | normalized 計算 | normalized | × 5 | 取整 index | 邊界修正 | 進入桶 |
|---|---|---|---|---|---|---|
| 30 | (30−10)/40 | **0.5** | 2.5 | 2 | — | bucket[2] |
| 10 | (10−10)/40 | 0.0 | 0.0 | 0 | — | bucket[0] |
| 50 | (50−10)/40 | 1.0 | 5.0 | **5** | 5 == bucketCount → 改 4 | bucket[4] |
| 20 | (20−10)/40 | 0.25 | 1.25 | 1 | — | bucket[1] |
| 40 | (40−10)/40 | 0.75 | 3.75 | 3 | — | bucket[3] |

- 分桶結果：bucket[0]=[10]、bucket[1]=[20]、bucket[2]=[30]、bucket[3]=[40]、bucket[4]=[50]。
- 桶內排序：每桶只有一個元素，本來就有序。
- 依序寫回：`[10, 20, 30, 40, 50]`。

> 注意 num = 30 的 normalized 剛好是 **0.5**（題目考點），而 num = 50（最大值）算出 index = 5 == bucketCount，**若不修正就會越界**，所以要改成最後一桶 4——這正是第 6 步邊界修正存在的原因。

---

## ✅ 回到題目：解答

1. **不是**純比較排序。基本步驟：找 min/max → 依標準化公式分桶 → 每桶各自排序（本教材用 `Collections.sort`）→ 依桶順序合併回原陣列。
2. `normalized = (30 − 10) / (50 − 10) = 20 / 40 = 0.5`；再乘上桶數（如 bucketCount = 5）得 2.5，取整後是**桶子索引 2**。
3. 因為 **num == max 時 normalized = 1.0**，乘上 bucketCount 剛好等於 bucketCount（比最後一桶的索引多 1，會越界），所以要修正成 `bucketCount - 1`；最壞時間複雜度為 **O(n log n)**（所有資料擠同桶時，由桶內 `Collections.sort` 主導）。

---

## 📌 重點整理

- 桶裝排序是**分配式（非比較式）**排序：先分桶，再桶內排序，最後合併。
- 標準化公式：`(num - min) / (max - min)`，把值壓到 0～1；乘 bucketCount 得桶索引。
- 三重邊界修正：`index == bucketCount`、`index < 0`、`index >= bucketCount`，統一夾回合法範圍。
- 桶內排序本教材用 **`Collections.sort`**；`min == max` 或長度 ≤ 1 直接返回。
- 複雜度：最壞 **O(n log n)**（資料全擠同桶、由 Collections.sort 主導）；桶內若改插入排序常記 O(n²)。
- 空間：需額外的桶子空間，**非原地排序**，空間複雜度約 **O(n + k)**（k 為桶數）。

---

## ⚠️ 常見陷阱

- **忘記邊界修正**：最大值算出的 index 會等於 bucketCount 而越界，必須改成 `bucketCount - 1`；漏掉會 `IndexOutOfBounds`。
- **min == max 沒處理**：所有值相同時 range = 0，`(num - min) / range` 會除以 0；程式先擋掉這種情況直接返回。
- **誤以為一定是 O(n)**：均勻分布才接近線性；**全擠同桶**時退化，效能由桶內排序決定（此版本 O(n log n)）。
- **入口檢查順序**：`arr == null || arr.length <= 1` 必須放在讀 `arr[0]` 之前，否則 null/空陣列會出錯。
- **穩定性別亂記**：桶裝排序是否穩定，取決於桶內用的排序法；本教材桶內用 `Collections.sort`。

---

## 📝 練習題（含解答）

**Q1.** 資料範圍 min = 0、max = 100，num = 25，bucketCount = 4，算出的桶子索引是多少？
<details><summary>看解答</summary>

`normalized = (25 - 0) / (100 - 0) = 0.25`；`index = (int)(0.25 * 4) = (int)1.0 = 1`。放進 **bucket[1]**。
</details>

**Q2.** 為什麼最大值（num == max）需要特別修正桶子索引？
<details><summary>看解答</summary>

因為 num == max 時 `normalized = (max - min) / (max - min) = 1.0`，`index = (int)(1.0 * bucketCount) = bucketCount`，剛好比最後一桶的合法索引（bucketCount − 1）多 1，會越界。所以要把 `index == bucketCount` 修正成 `bucketCount - 1`。
</details>

**Q3.** 桶裝排序的最壞時間複雜度是多少？瓶頸出在哪裡？
<details><summary>看解答</summary>

本教材版本最壞為 **O(n log n)**。瓶頸出在「所有資料集中在同一桶」時，整體效能由該桶的排序主導；此版本桶內用 `Collections.sort`。若桶內改用插入排序，最壞常記為 **O(n²)**。
</details>

**Q4.** 若輸入陣列所有元素都相同（例如 `[7, 7, 7]`），程式會怎麼處理？
<details><summary>看解答</summary>

掃描後 min == max（都是 7），命中 `if (min == max) return;`，**直接返回**、不做分桶。因為所有值相同，原陣列已可視為排序完成，也避免了後面 `range = 0` 造成除以 0。
</details>

**Q5.** 承接內文範例 `[30, 10, 50, 20, 40]`，若不做任何邊界修正，num = 50 會發生什麼事？
<details><summary>看解答</summary>

num = 50 時 `normalized = 1.0`、`index = (int)(1.0 * 5) = 5`，但合法桶索引只有 0～4，存取 `buckets.get(5)` 會發生 `IndexOutOfBoundsException`。有了 `if (index == bucketCount) index = bucketCount - 1;` 才會安全落在 bucket[4]。
</details>
