# 作業系統 3-5（上）：Process 基礎

> 科目：計算機原理 — 作業系統
> 本篇全屬 **【理解】**：都是有邏輯的概念，懂核心就記得。
> （3-5 的「CPU 排程演算法」有計算題，獨立成 **3-5（下）【練流程】** 另出一篇。）

---

## 一、Process 是什麼？包含哪些部分　【理解】

- **Process（行程）**：一個**正在執行中**的程式，是 OS 分配資源、排程的基本單位。
- 一個 process 在記憶體裡包含四塊：

| 部分 | 裝什麼 |
|---|---|
| **Text（程式碼段）** | 程式的指令 |
| **Data（資料段）** | 全域變數 |
| **Heap（堆積）** | 執行時動態配置的記憶體（malloc / new） |
| **Stack（堆疊）** | 函式呼叫的區域變數、參數、返回位址 |

> 另外還記錄當下的執行狀態：**Program Counter（下一條指令位置）+ 暫存器內容**。

---

## 二、Process vs Program　【理解】

| | Program 程式 | Process 行程 |
|---|---|---|
| 狀態 | **靜態**（躺在硬碟的檔案） | **動態**（載入記憶體、執行中） |
| 主／被動 | 被動（passive） | 主動（active） |
| 有無資源/狀態 | 沒有 | 有自己的 PC、暫存器、記憶體、狀態 |

> 記憶鉤子：**Program = 躺在硬碟的「食譜」；Process = 正在照食譜「煮菜的過程」。** 同一個 program 可同時跑成多個 process（開兩個記事本 = 兩個 process）。

---

## 三、Process 狀態轉換圖（State Transition）　【理解】

五個狀態：

| 狀態 | 意思 |
|---|---|
| **New 新建** | process 剛被建立 |
| **Ready 就緒** | 萬事俱備、只欠 CPU，在 ready queue 排隊 |
| **Running 執行** | 正在 CPU 上跑 |
| **Waiting／Blocked 等待** | 在等某事件（如 I/O 完成），暫時不能跑 |
| **Terminated 終止** | 執行完畢 |

主要轉換：
- New → Ready：被 OS 接納（admitted）
- Ready → Running：被排程器選中（**dispatch**）
- Running → Ready：時間片用完，或被更高優先權**搶佔**
- Running → Waiting：去等 I/O 或事件
- Waiting → Ready：I/O 完成、事件發生
- Running → Terminated：跑完

> **常考陷阱**：沒有「**Waiting → Running**」這種直接轉換！等待結束只能先回到 **Ready**，再被排程器選中才會 Running。

---

## 四、Process Control Block（PCB）　【理解】

- **定義**：OS 為**每一個 process** 維護的一筆資料結構，記錄它的所有資訊——等於 process 的「身分證 + 病歷表」。
- 內容：PID（行程編號）、process 狀態、Program Counter、暫存器內容、排程資訊（優先權）、記憶體資訊（base/limit、page table）、開啟的檔案、已用 CPU 時間等。
- **用途**：**Context switch** 時，把當前 process 狀態存進它的 PCB、載入下一個 process 的 PCB，才能無縫接續。

---

## 五、三種排程器（Long / Short / Medium Term）　【理解】

| 排程器 | 做什麼 | 控制的轉換 | 執行頻率 |
|---|---|---|---|
| **長程 Long-term**（Job Scheduler） | 決定哪些工作從硬碟**載入記憶體**成為 process；控制「同時有幾個 process 在記憶體」（degree of multiprogramming） | New → Ready | **最低**（慢） |
| **短程 Short-term**（CPU Scheduler） | 決定 ready queue 裡**哪個 process 上 CPU** | Ready → Running | **最高**（毫秒級，要快） |
| **中程 Medium-term** | 負責 **swapping**：記憶體太擠時把 process 暫時換出硬碟、需要時換回 | 記憶體 ↔ 硬碟 | 中間 |

> 記憶鉤子：**長程＝誰進記憶體（頻率低）、短程＝誰上 CPU（頻率高）、中程＝換進換出（swap）。**

---

## 六、Context Switch（上下文切換）　【理解】

- **定義**：CPU 從一個 process 換到另一個時，把目前 process 的狀態（PC、暫存器…）**存進它的 PCB**，再**載入**下一個 process 的 PCB，讓它接著跑。
- **重點**：context switch 本身是**純 overhead**——切換的這段時間 CPU 沒做任何有用工作。所以**切換越頻繁、浪費越多**。

---

## 七、Preemptive vs Non-Preemptive　【理解】

| | Non-Preemptive 不可搶佔 | Preemptive 可搶佔 |
|---|---|---|
| 規則 | process 拿到 CPU 後，跑到**自己主動放棄**（做完或主動等 I/O）才換手 | OS 可**強制**收回 CPU（時間片到、來了更高優先權） |
| 優點 | 簡單、context switch 少 | 回應快、公平 |
| 缺點 | 長工作會卡住後面所有人（易有 convoy effect） | context switch 多（overhead）、要處理共享資料同步 |

---

## 八、Starvation（飢餓）與 Convoy Effect（護航效應）　【理解】

- **Starvation 飢餓**：某 process 一直**輪不到** CPU/資源，被無限期拖延。常見於優先權排程——低優先權者一直被插隊。**解法：Aging（老化）**，等越久優先權越高，等夠久一定排得到。
- **Convoy Effect 護航效應**：在 **FCFS（先到先做）** 下，一個**很長的** process 排前面，後面一堆**很短的** process 全被卡住乾等，整體變慢。比喻：一台慢卡車堵前面，後面小車全跟著龜速。**解法：用考慮工作長短的排程（如 SJF）或 preemptive。**
