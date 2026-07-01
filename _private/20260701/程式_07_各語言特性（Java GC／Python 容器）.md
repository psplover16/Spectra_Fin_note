# 各語言特性（Java GC／Python 容器）

> 科目：程式（專業 B）｜這張是**各語言特性總整理**，重點在 **Java 的垃圾回收（GC）** 與 **Python 四種內建容器**。
>
> 學習方式：語言特性題多半是**硬背比較表**屬【硬背】。GC 概念要理解（自動回收、可能暫停）。容器部分以 **Python** 為主（因為是 Python 專屬語法），並補上 **Java** 對照。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. Java 的 GC 靠什麼判斷一個物件「可以回收了」？GC 有什麼優缺點？
> 2. Python 的 List 和 Tuple 差在哪？哪個建立後不能改？
> 3. 在 Python 裡，空的 `{}` 是 Dict 還是 Set？空集合要怎麼寫？

先想想再往下。

---

## 🤔 先想想

- C/C++ 要自己「借了記憶體記得還」（malloc/free），忘了還就漏水（memory leak）；Java 派了一個**清潔工（GC）** 自動把沒人用的物件收走。
- Python 四種容器就用三個問題分類：**能不能改（可變）？有沒有序？能不能重複？**
- Python 有個大坑：`{}` 空的是 **Dict 不是 Set**——這幾乎年年被拿來考。

---

## 📖 觀念拆解

### 一、Java 的垃圾回收 GC

- GC 自動找出**不再被使用的物件**並回收，程式設計師**不用手動釋放**。
- 判斷沒用的方式是**沒有任何參考指向它**，也就是 **unreachable**。
- C/C++ 要**手動** malloc/free 或 new/delete；忘記就可能 **memory leak**。
- GC 優點是**減少記憶體洩漏**；缺點是**可能短暫暫停（stop-the-world）且無法精準控制回收時機**。

📌 **兩種常見 GC 做法（常考）：** **引用計數（reference counting）**——記錄每個物件被參考次數，歸零就回收（**Python** 主要用），缺點是**難處理循環參考**；**標記清除（mark-and-sweep）**——從根（root）找出可達物件、其餘當垃圾回收（**Java** 用）。

```java
StringBuilder sb = new StringBuilder("hi");  // 建一個物件
sb = null;   // 沒有任何參考指向原物件 → unreachable → GC 之後會回收
// 你不用（也不能）手動 free，GC 會處理
```

對照 C：C 裡你要自己 `free(ptr);` 把記憶體還回去，忘了還就是 leak。Java 交給 GC，但 GC **何時跑、跑多久你控制不了**（回收時可能短暫 stop-the-world 暫停整個程式）。

### 二、Python 四種內建容器　【硬背】

| 型別 | 符號 | 有序 | 可變 | 可重複 | 一句話 |
|---|---|---|---|---|---|
| List | `[]` | 是 | 是 | 是 | 像可動態增減的陣列 |
| Tuple | `()` | 是 | 否 | 是 | 建立後不能改 |
| Dict | `{ k:v }` | 插入序 | 是 | 鍵不可重複 | 鍵值對，用鍵查值 |
| Set | `{ }` | 否 | 是 | 否 | 自動去重、集合運算 |

📌 **重點：** Dict 在 **Python 3.7+ 保留插入順序**，但仍是用**鍵存取**，不是用位置。**空的 `{}` 是 Dict，不是 Set；空集合要寫 `set()`。**

```python
lst = [1, 2, 2, 3]        # List：可變、可重複
tup = (1, 2, 3)           # Tuple：不可變
dic = {"a": 1, "b": 2}    # Dict：鍵值對，用鍵查值 dic["a"] → 1
st  = {1, 2, 2, 3}        # Set：自動去重 → {1, 2, 3}

empty_dict = {}           # ← 這是 Dict！
empty_set  = set()        # 空集合要用 set()
```

**Java 對照**（幫有 Java 底的人記）：
- List → `ArrayList`（可變、可重複、有序）
- Tuple → Java 沒有內建對應（概念上像一組不可變的固定資料）
- Dict → `HashMap`（鍵值對）／保留插入序用 `LinkedHashMap`
- Set → `HashSet`（去重、無序）／保留插入序用 `LinkedHashSet`

### 三、語言特性總對照

| 語言 | 代表特性 |
|---|---|
| C/C++ | 指標與手動記憶體管理 |
| Java | GC 自動垃圾回收、bytecode + JVM 跨平台 |
| Python | 動態型別、List/Tuple/Dict/Set |

---

## ✅ 回到題目：解答

1. GC 靠「**有沒有參考指向它**」判斷——**沒有任何參考（unreachable）** 的物件就可回收。**優點**：自動回收、減少 memory leak、不用手動釋放；**缺點**：可能短暫暫停（stop-the-world）、**回收時機無法精準控制**。
2. **List 可變**（可增刪改）、用 `[]`；**Tuple 不可變**（建立後不能改）、用 `()`。所以「建立後不能改」的是 **Tuple**。
3. 空的 `{}` 是 **Dict**（不是 Set）；**空集合要寫 `set()`**。

---

## 📌 重點整理

- **Java GC**：自動回收 **unreachable（沒有參考指向）** 的物件；優點減少 leak、免手動釋放，缺點可能 stop-the-world、時機不可控。
- C/C++ 要手動 malloc/free、new/delete，忘了就 memory leak。
- **Python 四容器**：List（`[]`，可變可重複）、Tuple（`()`，不可變）、Dict（`{k:v}`，鍵值對、鍵不可重複）、Set（`{}`，無序去重）。
- Dict 在 3.7+ 保留插入順序，但仍以鍵存取；**空 `{}` 是 Dict，空集合要 `set()`**。
- 語言代表特性：C/C++＝指標＋手動記憶體；Java＝GC＋bytecode/JVM 跨平台；Python＝動態型別＋四容器。

---

## ⚠️ 常見陷阱

- **空 `{}` 是 Dict 不是 Set**：Python 最常考的坑，空集合必須用 `set()`。
- **Tuple 不可變**：建立後不能改；要可增刪改用 List。
- **GC 不代表沒有記憶體問題**：仍可能因「還被參考著卻其實不用」而佔記憶體（邏輯性洩漏）；且 GC 時機不可控、可能短暫暫停。
- **Dict 的「有序」是插入序、不是排序**：3.7+ 保留插入順序，但存取仍用鍵、不是用位置索引。
- **Set 無序**：不能用索引 `s[0]` 取值；它的強項是去重與集合運算。
- **Dict 的鍵、Set 的元素必須不可變（可雜湊）**：所以 **List 不能當 Dict 的鍵或放進 Set**（會 `TypeError`），但 **Tuple 可以**（因為不可變）。

---

## 📝 練習題（含解答）

**Q1.** Java GC 怎麼判斷一個物件可以被回收？
<details><summary>看解答</summary>

看它是否 **unreachable**——**沒有任何參考指向它**時，就代表沒人會用到，GC 可回收。程式設計師不用手動釋放。
</details>

**Q2.** Java GC 的優缺點各是什麼？
<details><summary>看解答</summary>

優點：**自動回收、減少 memory leak、不必手動釋放**；缺點：**可能短暫暫停（stop-the-world）**、**回收時機無法精準控制**。
</details>

**Q3.** Python 的 List、Tuple、Set 在「可變／有序／可重複」上各是如何？
<details><summary>看解答</summary>

List：可變、有序、可重複；Tuple：**不可變**、有序、可重複；Set：可變、**無序**、**不可重複（自動去重）**。
</details>

**Q4.** 在 Python 中 `x = {}`，x 是什麼型別？要建立空集合該怎麼寫？
<details><summary>看解答</summary>

`x = {}` 是 **Dict**（空字典），不是 Set。要建立**空集合**必須寫 `x = set()`。
</details>

**Q5.** C/C++、Java、Python 的代表特性各是什麼？
<details><summary>看解答</summary>

C/C++：**指標與手動記憶體管理**；Java：**GC 自動垃圾回收、bytecode + JVM 跨平台**；Python：**動態型別、List/Tuple/Dict/Set 四種容器**。
</details>
