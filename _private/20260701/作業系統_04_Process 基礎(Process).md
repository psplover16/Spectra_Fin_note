# Process 基礎(Process)

> 科目：計算機概論 · 作業系統｜Process（行程）是 OS 排程與資源分配的**基本單位**，也是後面「CPU 排程、死結、記憶體」的共同主角。先弄懂它的組成、狀態轉換、由誰管（PCB／排程器），排程題才有地基。
>
> 學習方式：Program vs Process、狀態轉換屬【理解】；PCB 內容、三種排程器對應、幾個效應名詞屬【硬背】。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「**Program** 和 **Process** 差在哪？同一支程式能不能同時是多個 process？」
> 2. 「一個 process 等 I/O 結束後，會直接回到 **Running** 嗎？」
> 3. 「決定『ready queue 裡哪個 process 上 CPU』的是**哪一種排程器**？執行最頻繁的又是哪一種？」

---

## 🤔 先想想

- Program 是**躺在硬碟的檔案（靜態）**；Process 是**被載入記憶體、正在跑（動態）**。差別像「食譜」與「正在下廚」。
- 狀態轉換有個常考陷阱：**等待結束不能直接開跑**，要先回到排隊區。
- 排程器有三種，各管一段路：**進門、上台、進出倉庫**。

---

## 📖 觀念拆解

### 一、Process 與記憶體組成

Process 是**正在執行中的程式**，是 OS 分配資源與排程的基本單位。它除了程式碼與資料，也會記錄 **Program Counter（下一條要執行的指令位址）** 與暫存器內容。一個 process 在記憶體中分成四塊：

| 部分 | 裝什麼 |
|---|---|
| Text（程式碼段） | 程式的指令 |
| Data（資料段） | 全域變數、靜態變數 |
| Heap（堆積） | 執行時動態配置的記憶體，例如 malloc / new |
| Stack（堆疊） | 函式呼叫的區域變數、參數、返回位址 |

📌 Java 對照：`int g;`（類別的靜態變數）近似 **Data**；`new int[10]`（物件）配在 **Heap**；方法裡的區域變數與呼叫框架在 **Stack**；`.class` 的位元組碼指令對應 **Text**。

📌 **Thread（執行緒）補充：** 一個 process 內可有多條 thread；同一 process 的 thread **共享 Text／Data／Heap**，但各自擁有獨立的 **Stack、暫存器與 PC**。因此同一 process 內的 thread 切換比 process 切換便宜（不必更換記憶體空間）。

### 二、Program vs Process

| | Program 程式 | Process 行程 |
|---|---|---|
| 狀態 | 靜態，躺在硬碟的檔案 | 動態，載入記憶體、執行中 |
| 主/被動 | 被動 passive | 主動 active |
| 有無資源/狀態 | 沒有 | 有自己的 PC、暫存器、記憶體、狀態 |

📌 **同一個 program 可以同時跑成多個 process**，例如開兩個記事本就是兩個 process（各自有獨立的 PC、記憶體與狀態）。

### 三、Process State（狀態轉換）

| 狀態 | 意思 |
|---|---|
| New 新建 | process 剛被建立 |
| Ready 就緒 | 萬事俱備，只欠 CPU，在 ready queue 排隊 |
| Running 執行 | 正在 CPU 上跑 |
| Waiting / Blocked 等待 | 在等 I/O 或事件，暫時不能跑 |
| Terminated 終止 | 執行完畢 |

轉換路線：

1. **New → Ready**：被 OS 接納。
2. **Ready → Running**：被排程器選中（dispatch）。
3. **Running → Ready**：時間片用完，或被更高優先權搶佔。
4. **Running → Waiting**：去等 I/O 或事件。
5. **Waiting → Ready**：I/O 完成、事件發生。
6. **Running → Terminated**：跑完。

📌 **兩個常考的行程終止狀態：Zombie（殭屍）**——子行程已結束，但父行程還沒呼叫 `wait()` 回收，PCB 仍賴在系統裡（占著 PID）；**Orphan（孤兒）**——父行程比子行程先結束，子行程被系統的 **init／systemd** 收養。

⚠️ **常考陷阱：沒有「Waiting → Running」直接轉換**，等待結束只能先回 **Ready** 排隊，再等排程器選它。

### 四、PCB、排程器與 Context Switch

**Process Control Block（PCB）** 是 OS 為每一個 process 維護的資料結構，記錄 **PID、狀態、PC、暫存器、排程資訊、記憶體資訊、開啟檔案與已用 CPU 時間**。可把 PCB 想成每個 process 的「**身分證＋進度存檔**」。

三種排程器各管一段轉換：

| 排程器 | 做什麼 | 控制的轉換 | 執行頻率 |
|---|---|---|---|
| 長程 Long-term | 決定哪些工作從硬碟載入記憶體成為 process | New → Ready | 最低 |
| 短程 Short-term | 決定 ready queue 裡哪個 process 上 CPU | Ready → Running | 最高 |
| 中程 Medium-term | 記憶體太擠時 swapping，把 process 換出/換回 | 記憶體 ↔ 硬碟 | 中間 |

📌 **5 狀態擴充成 7 狀態：** 被**中程排程器**swap 到硬碟的 process 會進入 **Suspended（掛起）** 狀態——原本在 Ready 的變 **Suspend-Ready**、原本在 Waiting 的變 **Suspend-Blocked**；swap 回記憶體才回到 Ready／Waiting。

**Context Switch（上下文切換）**：CPU 從一個 process 換到另一個時，先把目前狀態存進 PCB，再載入下一個 process 的 PCB。它本身是**純 overhead（額外成本）**，切換越頻繁浪費越多。就像你在兩份作業間切換，每次都要收桌子、再攤開另一份，切太勤反而沒時間真的寫。

### 五、Preemptive、Starvation 與 Convoy Effect

| | Non-Preemptive 不可搶佔 | Preemptive 可搶佔 |
|---|---|---|
| 規則 | 拿到 CPU 後，跑到自己主動放棄才換手 | OS 可強制收回 CPU |
| 優點 | 簡單、context switch 少 | 回應快、公平 |
| 缺點 | 長工作會卡住後面所有人 | context switch 多，要處理同步 |

兩個效應名詞：

1. **Starvation（飢餓）**：某 process 一直輪不到 CPU 或資源，常見於**優先權排程**（低優先權永遠被插隊）；解法是 **Aging（老化）**：等越久優先權越高。
2. **Convoy Effect（護航效應）**：**FCFS** 下長工作排前面，後面短工作全被卡住（像一台慢車擋住整條路）；可用 **SJF 或 preemptive** 改善。

---

## ✅ 回到題目：解答

1. **Program vs Process？** → Program 是**靜態、被動**的硬碟檔案；Process 是**動態、主動**、載入記憶體且有自己 PC/暫存器/記憶體/狀態的執行體。**同一支 program 可同時跑成多個 process**（如開兩個記事本）。
2. **等 I/O 結束會直接 Running 嗎？** → **不會**。只能 **Waiting → Ready**，回排隊區等排程器再選它；**沒有 Waiting → Running 的直接轉換**。
3. **誰決定 ready queue 誰上 CPU？** → **短程排程器（Short-term）**，控制 Ready → Running，且是**執行最頻繁**的排程器。

---

## 📌 重點整理

- Process 記憶體四段：**Text、Data、Heap、Stack**；Heap 放動態配置、Stack 放函式呼叫。
- Program＝靜態被動；Process＝動態主動、有自己的資源與狀態；一支程式可多個 process。
- 五狀態：New→Ready→Running→（Waiting）→Terminated；**Waiting 只能回 Ready，不能直接 Running**。
- PCB＝process 的身分證＋存檔；三排程器：**長程（New→Ready，最少）、短程（Ready→Running，最多）、中程（swap，中間）**。
- Context Switch 是純 overhead；**Starvation 用 Aging 解、Convoy Effect 是 FCFS 的毛病**。

---

## ⚠️ 常見陷阱

- **Waiting → Running 不存在**：I/O 完成後一律先回 **Ready**。這是最愛考的轉換陷阱。
- **排程器對應別記反**：**短程最頻繁**（決定誰上 CPU）；**長程最少**（決定誰載入成為 process）。
- **Context Switch 不是「做正事」**：它是額外成本，切太頻繁反而拖慢系統。
- **Starvation vs Deadlock 不同**：Starvation 是「一直輪不到」（別人一直插隊），Deadlock 是「互相卡死、誰都不動」。
- **Convoy Effect 綁 FCFS**：長工作排前面卡住短工作，是 FCFS 的典型缺點。

---

## 📝 練習題（含解答）

**Q1.** 一個 process 在記憶體中分成哪四段？動態配置（如 `new`）落在哪一段？
<details><summary>看解答</summary>

**Text、Data、Heap、Stack**。動態配置（malloc/new）落在 **Heap**；函式的區域變數、參數、返回位址在 **Stack**。
</details>

**Q2.** 下列轉換哪一個「不存在」？(a) Ready→Running (b) Running→Waiting (c) Waiting→Running (d) Waiting→Ready
<details><summary>看解答</summary>

**(c) Waiting→Running 不存在**。等待結束只能回 Ready 排隊，再由排程器選中才進 Running。
</details>

**Q3.** 三種排程器中，執行頻率最高與最低的分別是哪一種？各控制什麼轉換？
<details><summary>看解答</summary>

**最高：短程（Short-term）**，控制 **Ready → Running**。**最低：長程（Long-term）**，控制 **New → Ready**。中程負責 swap（記憶體 ↔ 硬碟）。
</details>

**Q4.** 什麼是 Starvation？常見於哪種排程？如何解決？
<details><summary>看解答</summary>

**Starvation（飢餓）** 是某 process 一直輪不到 CPU/資源，常見於**優先權排程**（低優先權被一直插隊）。解法是 **Aging（老化）**：等越久優先權越高。
</details>

**Q5.** 為什麼 FCFS 容易出現 Convoy Effect？如何改善？
<details><summary>看解答</summary>

因為 FCFS 照抵達順序服務，**長工作排前面就會卡住後面所有短工作**（護航效應）。可改用 **SJF 或搶佔式（preemptive）** 排程改善。
</details>
