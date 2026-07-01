# Process Communication(Process Communication)

> 科目：計算機概論 · 作業系統｜這章是**策略性取捨**的一章。來源筆記標註「這章我跳過」——因為在經濟部資訊類出題頻率低、難度高、CP 值偏低。但**概念層級的名詞仍可能出選擇題**，本篇只把「認得名字就能撿分」的部分整理清楚。
>
> 學習方式：本章以【硬背名詞】為主；深入解法（號誌實作、哲學家用餐）除非考古題出現，否則先擱著，把時間留給高頻計算題。

---

## 🎯 開場題目

> 考題常這樣問（多為概念題、選擇題）：
>
> 1. 「IPC 兩大模型 **Shared Memory** 與 **Message Passing**，哪個較快？哪個同步較安全？」
> 2. 「多個 process 同時改共享資料，結果依先後順序而不同，這叫什麼？」
> 3. 「一次只能一個 process 進入的那段程式碼叫什麼？用什麼工具控制進入？」

---

## 🤔 先想想

- 這章對經濟部資訊類來說**優先度不高**，先求「認得名詞、會選對」即可，不必鑽深解法。
- IPC 兩模型的差別抓一句話：**共享記憶體快但要自己顧同步；訊息傳遞慢一點但同步交給 OS**。
- 出錯的根源都是「**多人同時動同一份資料**」，於是需要「臨界區＋號誌／互斥鎖」來管秩序。

---

## 📖 觀念拆解

### 一、為什麼這章可以「策略性跳過」

來源筆記標註「這章我跳過」，原因是**頻率低、難度高、CP 值偏低**；經濟部資訊類 OS 的重點通常在**排程、記憶體、虛擬記憶體、死結與磁碟**。具體理由：

1. **頻率低**：IPC／同步在經濟部出得比研究所少，不是穩定高頻。
2. **難度高**：號誌、臨界區、哲學家用餐等同步題需要較多思考。
3. **部分重疊**：死結、並行/平行等基礎已在其他章碰過。
4. **時間取捨**：時間有限時，先把高頻計算題練熟較划算。

📌 換句話說：**不是不重要，而是投報率排後面。** 本章掌握到「名詞層級」即可，行有餘力再深入。

### 二、IPC 兩大模型（只抓概念）

Process 之間要溝通（Interprocess Communication, IPC），主要有兩種模型：

| IPC 模型 | 重點 |
|---|---|
| Shared Memory 共享記憶體 | 開一塊共用記憶體互相讀寫，快，但要自己處理同步 |
| Message Passing 訊息傳遞 | 透過 OS 送收訊息，慢一點，但同步由 OS 代管、較安全 |

比喻：**共享記憶體**像兩人共用一塊白板，寫得快，但同時寫會打架，要自己約好規矩；**訊息傳遞**像互寄郵件，慢一點，但由郵局（OS）負責投遞、比較不會亂。

### 三、必背名詞（撿分重點）

| 名詞 | 意思 |
|---|---|
| Race condition 競爭情況 | 多個 process 同時動共享資料，結果取決於誰先誰後，可能出錯 |
| Critical Section 臨界區 | 存取共享資料的那段程式碼，一次只能一個 process 進入 |
| Semaphore 號誌 | 一個整數加 wait/signal 操作，用來控制進臨界區；分 binary 與 counting |
| Mutex 互斥鎖 | 互斥鎖，近似 binary semaphore，把臨界區鎖起來 |
| Monitor 監視器 | 高階同步機制，把共享資料與其操作包成一個單位，一次只允許一個執行緒進入（Java 的 synchronized 即屬此類） |

Java 示範 **Race condition**：兩個執行緒同時對 `count++`（其實是「讀→加→寫」三步）就可能算錯——

```java
class Counter {
    int count = 0;
    void inc() { count++; }          // 非原子操作，可能發生 race condition
    synchronized void safeInc() { count++; }  // 用鎖把臨界區保護起來
}
```

`inc()` 在多執行緒下結果不確定；`safeInc()` 用 `synchronized`（相當於 Mutex）確保**一次只有一個執行緒**進入臨界區，結果才正確。

📌 **臨界區問題的三要求（常考選擇題）：** ①**互斥（Mutual Exclusion）**一次一人；②**進展（Progress）**沒人在裡面時，想進的人不該被無限期擋住；③**有限等待（Bounded Waiting）**等待進入的次數有上限、不會餓死。

### 四、經典同步問題（認得名字即可）

只要**認得名字**即可，除非考古題有出，再回來補解法：

- **Producer-Consumer 生產者-消費者**：一邊生產、一邊消費，共用有限緩衝區。
- **Readers-Writers 讀者-寫者**：多人可同時讀，但寫的時候要獨佔。
- **Dining Philosophers 哲學家用餐**：搶筷子的死結/飢餓經典題。

---

## ✅ 回到題目：解答

1. **Shared Memory vs Message Passing？** → **Shared Memory 較快**（直接讀寫共用記憶體），但**要自己處理同步**；**Message Passing 較慢**，但同步由 **OS 代管、較安全**。
2. **結果依先後順序而不同？** → **Race condition（競爭情況）**。
3. **一次只能一個 process 進入的程式碼段？** → **Critical Section（臨界區）**；可用 **Semaphore（號誌）** 或 **Mutex（互斥鎖）** 控制進入。

---

## 📌 重點整理

- 本章對經濟部資訊類 **CP 值偏低**，以「名詞層級撿分」為目標即可。
- IPC 兩模型：**共享記憶體（快、自理同步）** vs **訊息傳遞（慢、OS 代管同步）**。
- 四名詞：**Race condition（順序決定結果、可能出錯）、Critical Section（一次一人）、Semaphore（整數＋wait/signal，分 binary/counting）、Mutex（互斥鎖 ≈ binary semaphore）**。
- 三經典題認名字：**Producer-Consumer、Readers-Writers、Dining Philosophers**。

---

## ⚠️ 常見陷阱

- **共享記憶體不是「自動安全」**：它快，但**同步要自己處理**，最容易出 race condition。
- **Semaphore vs Mutex**：Mutex 近似 **binary semaphore（值 0/1）**；Semaphore 還有 **counting** 版可放行多個。
- **Race condition 的根源是「非原子操作」**：像 `count++` 其實是讀→加→寫三步，中途被插隊就出錯。
- **策略性跳過 ≠ 完全不看**：概念題仍可能考，名詞要認得。

---

## 📝 練習題（含解答）

**Q1.** IPC 兩大模型中，哪一個較快但需自行處理同步？哪一個較慢但同步由 OS 代管？
<details><summary>看解答</summary>

**Shared Memory（共享記憶體）** 較快、需自理同步；**Message Passing（訊息傳遞）** 較慢、同步由 OS 代管、較安全。
</details>

**Q2.** 「多個 process 同時修改共享資料，最後結果取決於執行先後」這現象叫什麼？
<details><summary>看解答</summary>

**Race condition（競爭情況）**。解法是把存取共享資料的**臨界區**保護起來（用 Semaphore/Mutex）。
</details>

**Q3.** Semaphore 與 Mutex 有什麼關係與差別？
<details><summary>看解答</summary>

Mutex（互斥鎖）**近似 binary semaphore**（值 0/1，鎖住臨界區）。Semaphore 是「整數＋wait/signal」，還有 **counting** 版本可同時放行多個。
</details>

**Q4.** 「一次只能一個 process 進入、用來存取共享資料的那段程式碼」叫什麼？
<details><summary>看解答</summary>

**Critical Section（臨界區）**。進入權可用 **Semaphore** 或 **Mutex** 控制。
</details>

**Q5.** 說出三個經典同步問題的名稱。
<details><summary>看解答</summary>

**Producer-Consumer（生產者-消費者）、Readers-Writers（讀者-寫者）、Dining Philosophers（哲學家用餐）**。
</details>
