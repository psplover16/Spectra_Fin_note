# Virtual Memory（虛擬記憶體）(Virtual Memory)

> 科目：計算機概論 · 作業系統｜虛擬記憶體讓 process「用得比實體 RAM 還大」。本章要懂 Demand Paging、Page Fault，會算 **EMAT**，會數三種置換演算法的 **page fault 次數**，並認得 **Belady 異常** 與 **Thrashing**。這些都是高頻計算/觀念題。
>
> 學習方式：EMAT 公式與置換次數屬【動手算】；Belady、Thrashing 的成因屬【理解】。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「**EMAT** 的公式是什麼？ma=200ns、page fault 時間 8ms、p=0.001 時 EMAT 是多少？」
> 2. 「參考字串 **A B C A B D A B E**、3 個 frame，**FIFO / OPT / LRU** 各發生幾次 page fault？」
> 3. 「frame 變多，page fault 反而變多——這叫什麼？發生在哪個演算法？」

---

## 🤔 先想想

- 虛擬記憶體的精神：**只把當下用到的頁放 RAM，其餘留在硬碟**，所以程式可以比實體記憶體大。
- Page fault 很貴（要跑硬碟），所以就算機率很低，也會把平均存取時間 EMAT 拉高——EMAT 題的重點就在這。
- 置換演算法比的是「**換掉誰**」：最早進來的？未來最久才用的？還是最久沒用的？

---

## 📖 觀念拆解

### 一、Virtual Memory / Demand Paging / Page Fault

1. **Virtual Memory（虛擬記憶體）**：讓 process 可以比實體記憶體還大；只把當下用到的部分放 RAM，其餘留在硬碟 **swap**。
2. **Demand Paging（需求分頁）**：真正用到某一頁時才載入，靠 page table 的 **valid/invalid bit** 標示頁在不在記憶體。
3. **Page Fault（分頁錯誤）**：要存取的頁不在記憶體時觸發；OS 從硬碟載入，必要時用 **page replacement** 換出一頁。
4. **影響 page fault 率的因素**：**frame 數量、page replacement 演算法、程式 locality**。

比喻：桌面（RAM）放不下所有書，只擺正在讀的幾本，其餘在書櫃（硬碟）。要用到不在桌上的書＝**page fault**，得起身去書櫃拿（很慢），桌面滿了還得先放回一本（置換）。

### 二、EMAT（Effective Memory Access Time）

**公式：EMAT = (1 − p) × ma + p × fault 時間。** p 是 page fault 機率，ma 是記憶體存取時間。

**範例：** ma = 200 ns，fault 時間 = 8 ms = **8,000,000 ns**，p = 0.001。

```
EMAT = 0.999 × 200 + 0.001 × 8,000,000
     = 199.8 + 8,000
     = 8,199.8 ns
```

只是千分之一的 fault 機率，EMAT 就從 200ns 暴增到約 **8,199.8 ns**（約 41 倍）——這就是「**page fault 很貴**」的具體感受。

**反推題：** 若要求 EMAT ≤ 220 ns，則

```
220 ≥ 200 + 7,999,800p
p ≤ 20 ÷ 7,999,800 ≈ 2.5 × 10⁻⁶
```

也就是 page fault 機率必須低到百萬分之 2.5 以下，才能把平均存取時間壓在 220ns 內。**page fault 很貴，低機率也會讓效能大幅下降。**

### 三、Page Replacement

當記憶體滿了、又要載入新頁，就得「換掉一頁」。比的是換掉誰：

| 演算法 | 換出誰 | 特點 |
|---|---|---|
| FIFO | 最早載入的頁 | 簡單；會有 Belady's Anomaly |
| Optimal（OPT） | 未來最久才會用到的頁 | fault 最少，但需預知未來，無法實作，只當標竿 |
| LRU | 最久沒被用到的頁 | 近似 Optimal、效果好；無 Belady 異常 |

**範例：** 參考字串 **A B C A B D A B E**，**3 個 frame**。結果：**FIFO = 7 次 fault；OPT = 5 次 fault；LRU = 5 次 fault**。

**Belady's Anomaly（貝雷迪異常）：** FIFO 可能 **frame 變多、fault 反而增加**。經典字串 **1 2 3 4 1 2 5 1 2 3 4 5**，用 FIFO 時：**3 個 frame 是 9 次 fault，4 個 frame 是 10 次 fault**（frame 多了 1 個，fault 反而多 1 次）。這違反直覺，是 FIFO 特有的毛病；**LRU 與 OPT 不會有 Belady 異常**。

📌 **Second Chance（第二次機會／Clock）：** FIFO 的改良——輪到要換的頁若 **reference bit＝1**，就清成 0 並「放它一馬」往後找，**ref＝0** 才真的換出；近似 LRU 但成本低，是實務常用法。

### 四、Thrashing（輾轉現象）

**Thrashing** 是系統花在**換頁（swap in/out）的時間比真正執行還多**，CPU 一直處理 page fault，實際工作做很少，效能崩潰。

1. **發生原因**：multiprogramming 太高，每個 process 分到的 frame 太少，page fault 暴增。
2. **惡性循環**：CPU 利用率下降，OS 誤以為要再多塞 process，導致每人 frame 更少、fault 更多（越救越糟）。
3. **Working Set Model（工作集）**：追蹤每個 process 最近用到的頁集合，確保有足夠 frame。
4. **Page Fault Frequency（PFF）**：監控 fault 率，太高就多給 frame 或降低 multiprogramming，太低可收回 frame。

比喻：桌子太小、書太多，你大半時間都在搬書進出書櫃，真正讀書的時間反而沒了。

---

## ✅ 回到題目：解答

1. **EMAT？** → **EMAT = (1 − p) × ma + p × fault 時間**。代入：0.999×200 + 0.001×8,000,000 = 199.8 + 8,000 = **8,199.8 ns**。
2. **A B C A B D A B E、3 frame？** → **FIFO = 7 次、OPT = 5 次、LRU = 5 次** page fault。
3. **frame 多、fault 反增？** → **Belady's Anomaly（貝雷迪異常）**，發生在 **FIFO**（LRU/OPT 不會）。

---

## 📌 重點整理

- 虛擬記憶體＝只放當下用到的頁在 RAM，其餘在硬碟 swap；**Demand Paging** 用到才載入（valid/invalid bit）。
- **EMAT = (1−p)×ma + p×fault 時間**；page fault 極貴，低機率也大幅拉高平均存取時間。
- 置換：**FIFO（換最早，會 Belady）、OPT（換未來最久才用，最佳但不可實作）、LRU（換最久沒用，近似最佳、無 Belady）**。
- 範例：A B C A B D A B E／3 frame → FIFO 7、OPT 5、LRU 5。
- **Belady**：FIFO 才有，frame 多 fault 反增（1 2 3 4 1 2 5 1 2 3 4 5：3 frame 9 次、4 frame 10 次）。
- **Thrashing**：換頁多過執行；用 **Working Set** 與 **PFF** 控制。

---

## ⚠️ 常見陷阱

- **EMAT 單位要統一**：fault 時間 8ms 要換成 **8,000,000 ns** 再代入，別直接用 8。
- **OPT 不可實作**：它要「預知未來」，只當**理論標竿**，不是真的能跑的演算法。
- **Belady 只在 FIFO**：LRU、OPT **不會**出現「frame 多反而 fault 多」。
- **Thrashing 的惡性循環**：CPU 使用率低時再多塞 process **會更糟**，該做的是降 multiprogramming／多給 frame。
- **page fault 不等於 error**：它是正常機制（頁不在記憶體就去載入），只是很花時間。
- **換出「髒頁」要多寫一次硬碟**：被改過的頁（dirty／modify bit＝1）換出時要先**寫回硬碟**、較慢；沒改過的乾淨頁可直接覆蓋，故置換時**優先挑乾淨頁**較省。

---

## 📝 練習題（含解答）

**Q1.** 寫出 EMAT 公式，並說明各符號意義。
<details><summary>看解答</summary>

**EMAT = (1 − p) × ma + p × fault 時間**。p＝page fault 機率、ma＝記憶體存取時間、fault 時間＝處理一次 page fault（含硬碟存取）所需時間。
</details>

**Q2.** ma=200ns、fault 時間=8ms、p=0.001，EMAT 是多少？
<details><summary>看解答</summary>

8ms = 8,000,000 ns。EMAT = 0.999×200 + 0.001×8,000,000 = 199.8 + 8,000 = **8,199.8 ns**。
</details>

**Q3.** 參考字串 A B C A B D A B E、3 個 frame，FIFO、OPT、LRU 各幾次 page fault？
<details><summary>看解答</summary>

**FIFO = 7 次、OPT = 5 次、LRU = 5 次**。OPT 與 LRU 在此字串表現相同且優於 FIFO。
</details>

**Q4.** 什麼是 Belady's Anomaly？用經典字串 1 2 3 4 1 2 5 1 2 3 4 5 說明。
<details><summary>看解答</summary>

**Belady's Anomaly** 是 FIFO 下「frame 變多、page fault 反而變多」。該字串用 FIFO：**3 個 frame 9 次 fault、4 個 frame 10 次 fault**。LRU/OPT 不會有此異常。
</details>

**Q5.** Thrashing 是什麼？為何「CPU 使用率低就多塞 process」反而更慘？
<details><summary>看解答</summary>

Thrashing 是**換頁時間多過真正執行**、效能崩潰。CPU 使用率低是因為大家忙著 page fault；此時再多塞 process 會讓**每人 frame 更少、fault 更多**，惡性循環。應改用 **Working Set／PFF** 控制、降低 multiprogramming。
</details>
