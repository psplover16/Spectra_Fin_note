# Process 新手國考教材

## 目錄

1. 名詞解釋
2. 核心想法
3. 具體範例
4. 國考常見考法
5. 必要比較表或易混淆整理
6. 國考答題句
7. 容易考的判斷題
8. 考前速記小抄

## 名詞解釋

### Process

Process 通常翻成「行程」或「程序」。白話來說，Process 就是「正在執行中的程式」。

程式如果只是放在硬碟裡，例如一個 `.exe` 檔或某個應用程式檔案，它還沒有真正跑起來，這時它只是 Program。當使用者點開它，作業系統把它載入記憶體，讓 CPU 開始執行它的指令，這個動態執行中的實體才叫 Process。

國考常見定義要背熟：Process 是作業系統分配資源與 CPU 排程的基本單位。

這句話有兩個重點：

- 分配資源：作業系統會分配記憶體、開啟檔案、I/O 裝置等資源給 process。
- CPU 排程：作業系統會決定哪一個 process 先使用 CPU。

### Program

Program 是「程式」，白話來說是靜態放在儲存裝置中的指令集合。它像一本食譜，內容已經寫好，但還沒有真的開始煮菜。

Program 不一定正在執行，因此不一定需要 CPU，也不一定擁有執行時的暫存器狀態、堆疊、開啟檔案等資訊。

### Program vs Process

Program 是靜態的，Process 是動態的。這是國考最基本也最常考的比較。

同一個 Program 可以產生多個 Process。例如同一個瀏覽器程式，可以開出多個瀏覽器 process；同一個文字編輯器程式，也可以同時開啟多個文件視窗或背景工作。它們使用相同或相似的程式碼，但每個 process 有自己的執行狀態與資源紀錄。

### Process 包含哪些內容

一個 process 不是只有程式碼。作業系統要能「暫停它、記住它、恢復它、管理它」，因此 process 通常包含：

- 程式碼：CPU 要執行的指令。
- 資料：全域變數、靜態資料等。
- 堆疊：函式呼叫、區域變數、返回位址常放在這裡。
- 堆積：動態配置的記憶體，例如執行時才申請的物件或資料結構。
- 暫存器狀態：CPU 目前執行到哪裡、暫存器裡有哪些值。
- 開啟檔案：process 正在使用哪些檔案或 I/O 資源。
- PCB：作業系統用來管理這個 process 的控制資料結構。

新手要先記住：Process 是一個「正在跑的程式加上它執行時需要的所有狀態與資源」。

### PCB

PCB 是 Process Control Block，中文常翻成「行程控制區塊」。

白話來說，PCB 就是作業系統替每個 process 建立的「身分證加管理檔案」。作業系統不能只知道「有一個 process」，它還要知道這個 process 是誰、現在在哪個狀態、執行到哪一行、下次能不能接著跑、分配了哪些資源。

PCB 常見內容包含：

- PID：Process ID，process 的識別碼。
- Process state：目前狀態，例如 Ready、Running、Waiting。
- Program Counter：下一個要執行的指令位址。
- CPU registers：CPU 暫存器內容。
- CPU scheduling information：排程相關資訊，例如優先權、佇列指標、使用 CPU 的紀錄。
- Memory management information：記憶體管理資訊，例如 page table 或 segment table 相關資料。
- Accounting information：帳務或統計資訊，例如 CPU 使用時間、時間限制、帳號資料。
- I/O status information：I/O 狀態，例如開啟檔案清單、配置的 I/O 裝置。

國考很愛問 PCB 儲存什麼。只要題目問「context switch 要保存什麼」、「OS 如何恢復 process」、「process 狀態放在哪裡」，通常都和 PCB 有關。

### Process State

Process state 是 process 目前所處的狀態。作業系統用狀態來管理 process，因為一個 process 不可能永遠都在 CPU 上執行。它可能剛建立、等待 CPU、正在執行、等待 I/O，或已經結束。

常見五狀態模型如下：

- New：process 正在被建立。
- Ready：process 已準備好，只差 CPU。
- Running：process 正在 CPU 上執行。
- Waiting 或 Blocked：process 正在等待 I/O 或某個事件完成。
- Terminated：process 已執行結束。

### Ready

Ready 是「準備好執行，但還沒拿到 CPU」。

很多新手會把 Ready 和 Waiting 搞混。Ready 並不是在等 I/O，而是在等 CPU。它的條件都準備好了，只是 CPU 目前被其他 process 使用。

### Running

Running 是「正在 CPU 上執行」。

在單核心 CPU 中，同一時間通常只有一個 process 處於 Running 狀態；在多核心 CPU 中，可以有多個 process 同時在不同核心上 Running。

### Waiting / Blocked

Waiting 或 Blocked 是「暫時不能執行，正在等待 I/O 或事件」。

例如 process 要讀硬碟檔案、等待鍵盤輸入、等待網路資料、等待某個同步事件。這時就算 CPU 空出來，它也不能馬上跑，因為它需要的事件尚未完成。

### Dispatch

Dispatch 是「把 CPU 分派給某個 ready process」。

狀態轉換是 Ready → Running。也就是短期排程器選出下一個 process 後，由 dispatcher 進行切換，讓該 process 真的開始在 CPU 上執行。

### Preemption

Preemption 是「搶先」或「剝奪」。白話來說，就是作業系統可以中斷正在 Running 的 process，把 CPU 拿回來，再交給其他 process。

狀態轉換常見為 Running → Ready。例如時間片用完，或有更高優先權的 process 進入 ready queue，作業系統就可能搶先目前的 process。

### Scheduler

Scheduler 是「排程器」。它的工作是決定 process 何時進入系統、何時使用 CPU、何時被換出或換回。

常見三種 scheduler：

- Long-Term Scheduler：長期排程器，決定哪些 job 可以進入系統成為 process，會影響 multiprogramming 的程度。
- Short-Term Scheduler：短期排程器，從 ready queue 中選出下一個要執行的 process。
- Medium-Term Scheduler：中期排程器，負責 swapping，把 process 暫時移出記憶體或再移回來。

### Multiprogramming

Multiprogramming 是「多程式處理」。白話來說，就是記憶體中同時放多個 process，當某個 process 等 I/O 時，CPU 可以改跑另一個 process，避免 CPU 閒著。

Multiprogramming 的目的不是讓單核心 CPU 真正同時跑很多 process，而是提高 CPU 使用率。

### Context Switch

Context Switch 是「上下文切換」或「情境切換」。

白話來說，就是 CPU 從一個 process 切換到另一個 process。切換時，作業系統必須先保存目前 process 的狀態，例如 program counter、registers、狀態資訊，再載入下一個 process 的狀態。

Context switch 有額外成本，因為切換期間 CPU 沒有在執行使用者程式的實質工作。國考常考：context switch 是必要的管理動作，但會造成 overhead。

### Preemptive Scheduling

Preemptive scheduling 是「搶先式排程」。作業系統可以主動中斷正在執行的 process。

常見例子：

- Round Robin 的時間片用完。
- SRTF 發現新來的 process 剩餘時間更短。
- Preemptive Priority 發現更高優先權 process 到達。

搶先式排程通常反應較快，適合分時系統或互動式系統，但 context switch 次數可能較多。

### Non-Preemptive Scheduling

Non-preemptive scheduling 是「非搶先式排程」。一旦 process 取得 CPU，就會一直執行到它自願釋放 CPU，例如完成、阻塞等待 I/O，或主動讓出。

非搶先式排程比較簡單，context switch 次數較少，但短工作或高優先權工作可能被長工作卡住，反應時間可能變差。

### Starvation

Starvation 是「飢餓」。白話來說，是某些 process 長期得不到需要的資源或 CPU。

例如 priority scheduling 中，如果系統一直有高優先權 process 進來，低優先權 process 可能永遠排不到 CPU。這就是 starvation。

常見解法是 aging，也就是等待越久，逐漸提高優先權，避免 process 永遠被排擠。

### Convoy Effect

Convoy effect 是「車隊效應」。白話來說，就是很多短工作被一個長工作卡在後面，像一排車被慢車擋住。

它常見於 FCFS。因為 FCFS 先來先服務，如果一個 CPU burst 很長的 process 先來，後面很多短 process 只能等它跑完，導致平均等待時間變大，互動體驗變差。

### CPU Burst 與 I/O Burst

CPU burst 是 process 連續使用 CPU 的一段時間。I/O burst 是 process 等待或執行 I/O 的一段時間。

Process 通常不是一路使用 CPU 到結束，而是在 CPU burst 和 I/O burst 之間交替。例如先計算一段，再讀檔，再計算，再輸出結果。

### CPU Scheduling

CPU scheduling 是「CPU 排程」。當 ready queue 中有多個 process 都想使用 CPU 時，作業系統需要決定下一個由誰執行。

排程好壞會影響等待時間、完成時間、反應速度、吞吐量和 CPU 使用率。

### Waiting Time

Waiting time 是「等待時間」。白話來說，是 process 在 ready queue 裡等待 CPU 的總時間。

注意：waiting time 不包含正在 Running 的時間，也不包含 Waiting / Blocked 等 I/O 的時間。它只算「已經準備好，但在排隊等 CPU」的時間。

常用公式：

```text
Waiting Time = Turnaround Time - CPU Burst Time
```

如果題目有多段 CPU burst，則 waiting time 要加總每次在 ready queue 等 CPU 的時間。

### Turnaround Time

Turnaround time 是「周轉時間」或「完成時間」。白話來說，是 process 從到達系統到完全結束所花的總時間。

常用公式：

```text
Turnaround Time = Completion Time - Arrival Time
```

它包含等待 CPU、執行 CPU、等待 I/O 等整段經歷。

### Response Time

Response time 是「回應時間」。白話來說，是 process 從到達 ready queue 到第一次得到 CPU 的時間。

常用公式：

```text
Response Time = First Start Time - Arrival Time
```

Response time 特別重要於互動式系統，因為使用者會在意「按下去多久有反應」，不一定只在意全部完成要多久。

### Throughput

Throughput 是「吞吐量」。白話來說，是單位時間內完成多少個 process。

常用概念：

```text
Throughput = 完成的 process 數量 / 總時間
```

Throughput 越高，代表系統在同樣時間內完成的工作越多。

### CPU Utilization

CPU utilization 是「CPU 使用率」。白話來說，是 CPU 有在做有效工作的時間比例。

常用概念：

```text
CPU Utilization = CPU 忙碌時間 / 總時間
```

CPU utilization 越高，代表 CPU 越少閒置。但考試要注意，追求使用率不是唯一目標，因為也要兼顧回應時間、公平性與等待時間。

## 核心想法

### Process 是 OS 管理執行工作的單位

作業系統不會只看「檔案形式的程式」。只要程式開始執行，就會形成 process，而作業系統會用 process 作為管理單位。

這個管理包含三件大事：

第一，管理資源。每個 process 可能需要記憶體、檔案、I/O 裝置、CPU 時間等。作業系統要記錄哪些資源屬於誰，避免混亂。

第二，管理狀態。Process 不可能一直執行，它會在 Ready、Running、Waiting 等狀態之間轉換。作業系統要知道每個 process 目前在哪裡，才能安排下一步。

第三，安排 CPU。Ready queue 中可能同時有很多 process 等待 CPU，作業系統必須透過 CPU scheduling 來決定執行順序。

### Process 狀態轉換要用「能不能跑」來理解

很多新手背狀態圖時只背箭頭，但國考題目常換句話問。比較穩的方式是用「能不能跑」理解：

New 是正在建立，還沒正式加入競爭 CPU 的行列。

Ready 是已經可以跑，但 CPU 還沒輪到它。

Running 是正在跑。

Waiting / Blocked 是目前不能跑，因為它在等 I/O 或事件。這時即使 CPU 空著，也不能直接執行它。

Terminated 是已經結束，不會再回到 ready queue。

常見狀態轉換如下：

```text
New -> Ready：建立完成，進入 ready queue
Ready -> Running：dispatch，CPU 分派給它
Running -> Ready：preemption，被搶先或時間片用完
Running -> Waiting：等待 I/O 或事件
Waiting -> Ready：I/O 或事件完成
Running -> Terminated：執行完成
```

判斷題目時要抓原因：

如果原因是「排到 CPU」，通常是 Ready → Running。

如果原因是「時間片用完」或「被更高優先權工作搶走 CPU」，通常是 Running → Ready。

如果原因是「發出 I/O 請求」或「等待事件」，通常是 Running → Waiting。

如果原因是「I/O 完成」，通常是 Waiting → Ready，而不是直接 Waiting → Running。因為 I/O 完成只代表它又準備好了，是否馬上執行仍要看排程。

### PCB 是 context switch 的關鍵

CPU 在切換 process 時，不能只說「換人」。因為被暫停的 process 以後還要接著跑，所以作業系統必須保存它目前的狀態。

例如某 process 已執行到第 1000 個指令，暫存器中有一些中間計算結果。如果沒有保存這些資訊，下次恢復時就不知道要從哪裡繼續，也不知道暫存器原本的值。這就是 PCB 重要的原因。

Context switch 的典型概念是：

1. 保存目前 running process 的 context 到它的 PCB。
2. 更新目前 process 的狀態，例如 Running 改成 Ready 或 Waiting。
3. 從 ready queue 選出下一個 process。
4. 從下一個 process 的 PCB 載入 context。
5. 讓下一個 process 進入 Running。

因此，PCB 是作業系統保存與恢復 process 狀態的核心資料結構。

### Scheduler 分三層，考點在「決定什麼」

長期、中期、短期排程器容易混淆。最簡單的記法是：

- Long-Term：決定「哪些工作進入系統」。
- Short-Term：決定「下一個誰用 CPU」。
- Medium-Term：決定「誰暫時換出或換回記憶體」。

Long-Term Scheduler 控制 multiprogramming 程度。也就是系統中同時存在多少 process。如果讓太多 process 進入系統，記憶體壓力會變大；如果太少，CPU 或 I/O 資源可能利用不足。

Short-Term Scheduler 執行最頻繁，因為 CPU 很常需要決定下一個 process。只要目前 process 結束、阻塞、被搶先，短期排程器就可能要工作。因此它必須很快。

Medium-Term Scheduler 和 swapping 有關。當記憶體不足或系統負載太高時，可以把某些 process 暫時換出到磁碟，之後再換回記憶體。

### Preemptive 與 Non-Preemptive 的核心差別

搶先式與非搶先式的差別，在於作業系統能不能強制拿回 CPU。

Preemptive：OS 可以中斷正在執行的 process。

Non-preemptive：OS 不能任意搶走 CPU，要等 process 自願釋放。

這會影響系統特性：

搶先式通常反應較好，適合互動式或分時系統。例如使用者在打字、切換視窗、播放音樂時，系統不希望某個長工作霸占 CPU 太久。

非搶先式通常實作較簡單，context switch 較少，但容易讓短工作被長工作卡住。

國考常把演算法和搶先性一起考：

- FCFS 通常是 non-preemptive。
- SJF 通常指 non-preemptive。
- SRTF 是 preemptive 版的 SJF。
- Round Robin 是 preemptive。
- Priority Scheduling 可分 preemptive 與 non-preemptive，要看題目描述。

### CPU Scheduling 指標要先分清楚時間線

排程計算題的關鍵不是背公式而已，而是先畫出 Gantt chart。

Gantt chart 是用時間軸標示 CPU 在每段時間執行哪個 process。畫出來之後，再算各指標會穩很多。

常用符號：

- Arrival Time：到達時間，process 進入 ready queue 的時間。
- Burst Time：CPU burst 所需時間。
- Start Time：第一次開始使用 CPU 的時間。
- Completion Time：完成時間。
- Turnaround Time：完成時間減到達時間。
- Waiting Time：周轉時間減 CPU burst time。
- Response Time：第一次開始時間減到達時間。

如果題目全部 process 都在時間 0 到達，會比較單純；如果 arrival time 不同，就要小心某些 process 還沒到，不能提前排。

### 排程演算法沒有絕對最好

國考常問哪個演算法平均等待時間較小、哪個可能 starvation、哪個適合分時系統。要記住：排程演算法是在不同目標之間取捨。

FCFS 公平且簡單，但可能 convoy effect。

SJF 平均等待時間通常很好，但需要知道或估計 CPU burst，且長工作可能 starvation。

SRTF 反應更靈活，短剩餘時間工作可搶先長工作，但 context switch 可能較多，也需要知道或估計剩餘時間。

Priority Scheduling 能反映重要性，但低優先權工作可能 starvation，需要 aging 改善。

Round Robin 適合分時系統，反應時間通常較好，但時間片太小會造成太多 context switch，時間片太大又會退化得像 FCFS。

Multilevel Queue 將 process 分成不同佇列，例如系統工作、互動工作、批次工作。不同佇列可用不同排程規則，但若佇列間優先權固定，低優先權佇列可能 starvation。

Multilevel Feedback Queue 允許 process 在佇列之間移動。它用回饋機制調整 process 所在佇列，常用來兼顧互動性與公平性。

HRRN 會計算 response ratio，等待越久比率越高，因此可降低 starvation 的風險。

## 具體範例

### 範例一：Program 與 Process

假設硬碟中有一個文字編輯器程式 `Editor.exe`。它躺在硬碟裡時，只是 Program。

當使用者第一次打開它，作業系統建立一個 process，例如 PID = 101。此 process 有自己的記憶體、堆疊、暫存器狀態、開啟的文件資訊和 PCB。

如果使用者又打開第二個文字編輯器視窗，作業系統可能再建立另一個 process，例如 PID = 102。兩者可能來自同一個 Program，但它們是不同的 Process，因為它們有不同的執行狀態與資源紀錄。

考試判斷：

同一個 Program 可以對應多個 Process。這句是正確的。

Process 是靜態檔案。這句是錯的，靜態檔案是 Program。

### 範例二：Process 狀態轉換

假設 process P1 要先計算，再讀取硬碟檔案，最後輸出結果。

一開始 P1 被建立，狀態是 New。建立完成後，它進入 Ready，表示它可以執行，只是在等待 CPU。

當短期排程器選到 P1，dispatcher 把 CPU 交給它，P1 從 Ready 變成 Running。

P1 執行一段時間後，需要讀硬碟檔案。硬碟 I/O 比 CPU 慢，P1 不能繼續計算，於是從 Running 變成 Waiting。

當硬碟讀取完成，P1 從 Waiting 回到 Ready。注意，I/O 完成不代表 P1 一定立刻 Running，因為 CPU 可能正在執行其他 process。

如果之後 P1 再次被選到，就從 Ready 變成 Running。最後 P1 執行完畢，進入 Terminated。

### 範例三：Context Switch

假設 CPU 正在執行 P1，時間片到了，作業系統決定切換到 P2。

切換時會發生以下事情：

1. 作業系統把 P1 的 program counter、registers 等資訊存到 P1 的 PCB。
2. P1 狀態從 Running 變成 Ready。
3. 作業系統從 ready queue 選出 P2。
4. 作業系統從 P2 的 PCB 載入 P2 的 program counter、registers 等資訊。
5. P2 狀態變成 Running，CPU 開始執行 P2。

這段切換時間不會直接完成使用者程式的計算，所以稱為 overhead。但沒有 context switch，多工系統就很難在多個 process 間切換。

### 範例四：Convoy Effect

假設所有 process 在時間 0 到達，CPU burst 如下：

| Process | CPU Burst |
|---|---:|
| P1 | 20 |
| P2 | 2 |
| P3 | 2 |
| P4 | 2 |

若使用 FCFS，順序是 P1 → P2 → P3 → P4。

P2、P3、P4 都是短工作，但因為 P1 先到且很長，它們必須全部在後面等。這就是 convoy effect。

等待時間：

- P1 等 0。
- P2 等 20。
- P3 等 22。
- P4 等 24。

平均等待時間：

```text
(0 + 20 + 22 + 24) / 4 = 16.5
```

如果改用 SJF，順序可能是 P2 → P3 → P4 → P1。

等待時間：

- P2 等 0。
- P3 等 2。
- P4 等 4。
- P1 等 6。

平均等待時間：

```text
(0 + 2 + 4 + 6) / 4 = 3
```

這個例子說明：FCFS 簡單，但遇到長工作在前面時，短工作可能大量等待。

### 範例五：計算 Waiting、Turnaround、Response

假設有三個 process：

| Process | Arrival Time | CPU Burst |
|---|---:|---:|
| P1 | 0 | 5 |
| P2 | 1 | 3 |
| P3 | 2 | 1 |

若使用 FCFS，時間軸如下：

```text
0     5     8     9
| P1  | P2  | P3  |
```

Completion Time：

- P1 = 5
- P2 = 8
- P3 = 9

Turnaround Time = Completion Time - Arrival Time：

- P1 = 5 - 0 = 5
- P2 = 8 - 1 = 7
- P3 = 9 - 2 = 7

Waiting Time = Turnaround Time - CPU Burst：

- P1 = 5 - 5 = 0
- P2 = 7 - 3 = 4
- P3 = 7 - 1 = 6

Response Time = First Start Time - Arrival Time：

- P1 = 0 - 0 = 0
- P2 = 5 - 1 = 4
- P3 = 8 - 2 = 6

因為 FCFS 中每個 process 只執行一次，所以 response time 和 waiting time 在這個例子剛好相同。但在 Round Robin 中，process 可能被切成多段執行，waiting time 和 response time 通常不同。

### 範例六：SRTF 如何搶先

假設有三個 process：

| Process | Arrival Time | CPU Burst |
|---|---:|---:|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 2 |

SRTF 是 Shortest Remaining Time First，也就是剩餘時間最短者先執行。它是搶先式 SJF。

時間 0 時只有 P1，所以 P1 先執行。時間 1 時 P2 到達，P1 剩餘 7，P2 需要 4，P2 較短，所以 P2 搶先 P1。時間 2 時 P3 到達，P2 已執行 1，剩餘 3；P3 需要 2，P3 較短，所以 P3 搶先 P2。

可能時間軸如下：

```text
0   1   2     4       7              14
|P1 |P2 | P3  | P2    | P1           |
```

這個例子重點不是計算，而是看懂搶先發生的原因：新到達的 process 剩餘時間更短。

### 範例七：Round Robin 時間片

假設所有 process 在時間 0 到達：

| Process | CPU Burst |
|---|---:|
| P1 | 5 |
| P2 | 3 |
| P3 | 1 |

若 Round Robin 的 time quantum = 2，時間軸可能是：

```text
0    2    4    5    7    8    9
| P1 | P2 | P3 | P1 | P2 | P1 |
```

解釋：

- P1 先跑 2，剩 3。
- P2 跑 2，剩 1。
- P3 只需要 1，完成。
- P1 再跑 2，剩 1。
- P2 跑 1，完成。
- P1 跑 1，完成。

Round Robin 的核心是輪流給每個 ready process 一小段 CPU 時間。time quantum 太小會切換太頻繁，context switch overhead 變大；time quantum 太大則會越來越像 FCFS。

## 國考常見考法

### 考法一：定義題

題目可能問：「何謂 process？」或「Process 與 program 有何不同？」

答題要點：

Process 是正在執行中的程式，是作業系統分配資源與排程的基本單位。Program 是靜態的程式檔案，Process 是動態執行中的實體。

不要只寫「process 是程式」，這樣不夠精準。一定要補上「正在執行中」以及「資源分配與排程基本單位」。

### 考法二：狀態轉換圖

題目可能要求畫出 Process State Transition Diagram。

必畫狀態：

- New
- Ready
- Running
- Waiting / Blocked
- Terminated

必標箭頭：

- New → Ready
- Ready → Running：dispatch
- Running → Ready：preemption 或 time quantum expired
- Running → Waiting：I/O request 或等待事件
- Waiting → Ready：I/O completion 或事件完成
- Running → Terminated：exit

最容易錯的是 Waiting → Ready。I/O 完成後是回 Ready，不是直接 Running。

### 考法三：PCB 內容

題目可能問：「PCB 內含哪些資訊？」、「context switch 時需保存哪些資訊？」、「作業系統如何保存 process 狀態？」

答題要點：

PCB 儲存 PID、process state、program counter、CPU registers、CPU scheduling information、memory management information、accounting information、I/O status information 等。

若題目是申論，還可以補一句：PCB 使 OS 能夠暫停 process 並於之後恢復執行。

### 考法四：排程器比較

題目可能問：「Long-term、short-term、medium-term scheduler 差異為何？」

答題要點：

Long-term scheduler 決定哪些 job 進入系統，控制 multiprogramming 程度。Short-term scheduler 從 ready queue 中選出下一個使用 CPU 的 process。Medium-term scheduler 負責 swapping，將 process 暫時移出或移入記憶體。

如果問哪個最頻繁，通常是 short-term scheduler，因為 CPU 排程發生很頻繁。

### 考法五：搶先與非搶先

題目可能問：「preemptive 與 non-preemptive scheduling 差異為何？」

答題要點：

Preemptive scheduling 允許 OS 中斷正在執行的 process，將 CPU 分配給其他 process。Non-preemptive scheduling 則需等 process 自願釋放 CPU。

常見延伸：

- Round Robin 是 preemptive。
- SRTF 是 preemptive。
- FCFS 通常是 non-preemptive。
- SJF 通常是 non-preemptive，但其搶先版本是 SRTF。

### 考法六：Starvation 與 Aging

題目可能問：「何謂 starvation？如何解決？」

答題要點：

Starvation 是某些 process 長期得不到 CPU 或資源。Priority scheduling 中低優先權 process 若一直被高優先權 process 排擠，就可能 starvation。常見解法是 aging，也就是隨等待時間增加逐步提高優先權。

### 考法七：Convoy Effect

題目可能問：「何謂 convoy effect？常出現在哪種排程？」

答題要點：

Convoy effect 是短工作被長工作卡住，導致許多 process 長時間等待的現象，常見於 FCFS。

題目若出現「一個長 CPU-bound process 在前，許多短 I/O-bound process 在後」，通常就是 convoy effect。

### 考法八：CPU Scheduling 計算

題目可能給 arrival time、burst time、priority、time quantum，要求計算：

- Waiting time
- Turnaround time
- Response time
- Average waiting time
- Average turnaround time
- Throughput
- CPU utilization

解題步驟：

1. 先確認演算法和是否搶先。
2. 依 arrival time 畫 Gantt chart。
3. 標出每個 process 的 first start time 與 completion time。
4. 用公式計算 turnaround、waiting、response。
5. 最後再算平均值或吞吐量。

最常見錯誤是沒有考慮 arrival time，以為所有 process 都在時間 0 到達。

## 必要比較表或易混淆整理

### Program 與 Process 比較

| 比較項目 | Program | Process |
|---|---|---|
| 性質 | 靜態 | 動態 |
| 意義 | 儲存在磁碟中的程式或指令集合 | 正在執行中的程式 |
| 是否有執行狀態 | 沒有 | 有 |
| 是否由 OS 排程 | 否 | 是 |
| 是否擁有 PCB | 否 | 是 |
| 例子 | 硬碟中的瀏覽器程式檔 | 已開啟且正在執行的瀏覽器 |

### Process 五狀態整理

| 狀態 | 白話意義 | 常見原因 |
|---|---|---|
| New | 正在建立 | 使用者啟動程式，OS 建立 process |
| Ready | 可以跑，但在等 CPU | 已具備執行條件，等待排程 |
| Running | 正在 CPU 上執行 | 被 dispatch |
| Waiting / Blocked | 暫時不能跑，正在等事件 | 等 I/O、等輸入、等同步事件 |
| Terminated | 已結束 | 正常完成或被終止 |

### 狀態轉換整理

| 轉換 | 名稱或原因 | 考試提醒 |
|---|---|---|
| New → Ready | admitted | 建立完成後進入 ready queue |
| Ready → Running | dispatch | CPU 分派給 process |
| Running → Ready | preemption | 時間片用完或被高優先權搶先 |
| Running → Waiting | I/O request / event wait | process 主動等待 I/O 或事件 |
| Waiting → Ready | I/O completion / event completion | 不是直接回 Running |
| Running → Terminated | exit | process 執行完成 |

### PCB 內容整理

| PCB 欄位 | 白話用途 |
|---|---|
| PID | 辨識 process 是誰 |
| Process state | 紀錄目前是 Ready、Running、Waiting 等 |
| Program Counter | 紀錄下一個要執行的指令位置 |
| CPU registers | 保存 CPU 暫存器內容 |
| CPU scheduling information | 優先權、排程佇列指標等 |
| Memory management information | 記憶體配置、頁表或段表資訊 |
| Accounting information | CPU 使用時間、帳務、統計資訊 |
| I/O status information | 開啟檔案、I/O 裝置狀態 |

### Scheduler 比較

| Scheduler | 中文概念 | 決定什麼 | 頻率 | 關鍵字 |
|---|---|---|---|---|
| Long-Term Scheduler | 長期排程器 | 哪些 job 進入系統 | 較低 | admit、控制 multiprogramming |
| Short-Term Scheduler | 短期排程器 | ready queue 中誰用 CPU | 最高 | CPU scheduling、dispatcher |
| Medium-Term Scheduler | 中期排程器 | 誰被換出或換入記憶體 | 中等 | swapping、suspend/resume |

### Preemptive 與 Non-Preemptive 比較

| 比較項目 | Preemptive | Non-Preemptive |
|---|---|---|
| CPU 是否可被 OS 強制拿回 | 可以 | 不可以，需等 process 自願釋放 |
| 反應時間 | 通常較好 | 可能較差 |
| Context switch | 通常較多 | 通常較少 |
| 實作複雜度 | 較高 | 較低 |
| 常見演算法 | Round Robin、SRTF、preemptive priority | FCFS、SJF、non-preemptive priority |
| 常見風險 | overhead 較高、同步問題較複雜 | 長工作可能卡住短工作 |

### CPU Scheduling 指標整理

| 指標 | 白話定義 | 常用公式或重點 |
|---|---|---|
| Waiting Time | 在 ready queue 等 CPU 的總時間 | Turnaround Time - CPU Burst Time |
| Turnaround Time | 從到達到完成的總時間 | Completion Time - Arrival Time |
| Response Time | 從到達到第一次拿到 CPU 的時間 | First Start Time - Arrival Time |
| Throughput | 單位時間完成多少 process | 完成數量 / 總時間 |
| CPU Utilization | CPU 忙碌比例 | CPU 忙碌時間 / 總時間 |

### 常見排程演算法比較

| 演算法 | 全名 | 核心規則 | 是否搶先 | 優點 | 缺點或考點 |
|---|---|---|---|---|---|
| FCFS | First-Come, First-Served | 先到先服務 | 通常否 | 簡單、公平直覺 | convoy effect、平均等待可能很差 |
| SJF | Shortest Job First | CPU burst 最短者先 | 通常否 | 平均等待時間常較小 | 需知道或估計 burst，長工作可能 starvation |
| SRTF | Shortest Remaining Time First | 剩餘時間最短者先 | 是 | 比 SJF 更即時 | context switch 較多，長工作可能 starvation |
| Priority | Priority Scheduling | 優先權高者先 | 可搶先或非搶先 | 可反映工作重要性 | 低優先權可能 starvation，可用 aging |
| RR | Round Robin | 每個 process 輪流跑一個 time quantum | 是 | 適合分時系統，反應較佳 | quantum 太小 overhead 大，太大像 FCFS |
| Multilevel Queue | 多層佇列 | 不同類型 process 放不同佇列 | 視設計而定 | 可區分系統、互動、批次工作 | 固定佇列優先權可能造成 starvation |
| MLFQ | Multilevel Feedback Queue | process 可依行為在佇列間移動 | 通常是 | 彈性高，兼顧互動與公平 | 規則較複雜 |
| HRRN | Highest Response Ratio Next | response ratio 最高者先 | 通常否 | 等越久越有利，降低 starvation | 需計算 response ratio |

### HRRN 公式

HRRN 的 response ratio 常見公式：

```text
Response Ratio = (Waiting Time + Service Time) / Service Time
```

也可寫成：

```text
Response Ratio = 1 + Waiting Time / Service Time
```

Service Time 通常可視為 CPU burst time。等待越久，response ratio 越高，因此 HRRN 不會只偏好短工作，也能讓等很久的長工作逐漸獲得機會。

### 易混淆整理

| 易混淆點 | 正確理解 |
|---|---|
| Ready 和 Waiting | Ready 是等 CPU；Waiting 是等 I/O 或事件 |
| Waiting → Running | 通常不直接發生，I/O 完成後先回 Ready |
| Program 和 Process | Program 是靜態檔案；Process 是動態執行實體 |
| Response Time 和 Turnaround Time | Response 是第一次有反應；Turnaround 是整個完成 |
| Waiting Time 和 I/O Waiting | Scheduling 題的 waiting time 通常指 ready queue 等 CPU，不是等 I/O |
| SJF 和 SRTF | SJF 通常非搶先；SRTF 是搶先版 |
| Priority starvation | 低優先權可能長期等不到 CPU，可用 aging |
| Round Robin quantum | 太小 overhead 大；太大近似 FCFS |
| Context switch | 必須保存和載入狀態，但會有額外成本 |
| Long-term 和 Short-term | Long-term 控制誰進系統；Short-term 決定誰用 CPU |

## 國考答題句

### Process 定義

Process 是正在執行中的程式，是作業系統進行資源分配與 CPU 排程的基本單位。

### Program vs Process

Program 是靜態儲存於磁碟中的程式檔案；Process 是程式被載入記憶體並執行後形成的動態實體。

### PCB

PCB 是作業系統用來記錄與管理 process 的資料結構，包含 PID、process state、program counter、registers、排程資訊、記憶體管理資訊、accounting 資訊與 I/O 狀態等。

### Context Switch

Context switch 是 CPU 從一個 process 切換到另一個 process 的動作，作業系統需保存目前 process 的狀態並載入下一個 process 的狀態，因此會產生額外 overhead。

### Ready 與 Waiting

Ready 表示 process 已具備執行條件但正在等待 CPU；Waiting 或 Blocked 表示 process 正在等待 I/O 或事件完成，暫時不能執行。

### Scheduler

Long-term scheduler 決定哪些 job 進入系統並控制 multiprogramming 程度；short-term scheduler 從 ready queue 選出下一個執行的 process；medium-term scheduler 負責 swapping，將 process 暫時移出或移入記憶體。

### Preemptive vs Non-Preemptive

Preemptive scheduling 允許作業系統中斷正在執行的 process 並重新分配 CPU；non-preemptive scheduling 則需等 process 自願釋放 CPU。

### Starvation

Starvation 是 process 長期得不到 CPU 或資源的現象，常見於 priority scheduling 中低優先權 process 被持續延後，可透過 aging 改善。

### Convoy Effect

Convoy effect 是短工作被長工作阻塞而長時間等待的現象，常見於 FCFS 排程。

### CPU Scheduling 指標

Turnaround time 是 completion time 減 arrival time；waiting time 是 turnaround time 減 CPU burst time；response time 是 first start time 減 arrival time。

### Round Robin

Round Robin 以固定 time quantum 輪流分配 CPU 給 ready queue 中的 process，適合分時系統；time quantum 太小會增加 context switch overhead，太大則近似 FCFS。

## 容易考的判斷題

1. Process 是正在執行中的程式。

   答：對。Process 是動態執行中的實體。

2. Program 和 Process 是完全相同的概念。

   答：錯。Program 是靜態程式檔案，Process 是正在執行中的程式。

3. 同一個 Program 可以產生多個 Process。

   答：對。同一個程式可以被多次執行，每次執行都可能形成不同 process。

4. Ready 狀態表示 process 正在等待 I/O 完成。

   答：錯。Ready 是等待 CPU；Waiting / Blocked 才是等待 I/O 或事件。

5. Waiting 狀態的 process 在 I/O 完成後通常會直接進入 Running。

   答：錯。通常先回到 Ready，再由排程器決定何時 Running。

6. Ready → Running 的轉換稱為 dispatch。

   答：對。Dispatcher 會把 CPU 分派給被選中的 ready process。

7. Running → Ready 可能是因為 time quantum expired。

   答：對。時間片用完時，搶先式系統可將 process 放回 ready queue。

8. Running → Waiting 可能是因為 process 發出 I/O request。

   答：對。等待 I/O 時 process 暫時不能繼續使用 CPU。

9. PCB 儲存 process 的 program counter 與 CPU registers。

   答：對。這些資訊可用於暫停與恢復 process。

10. PCB 只儲存程式碼，不儲存排程或 I/O 資訊。

    答：錯。PCB 儲存 process state、PC、registers、排程資訊、記憶體資訊、I/O 狀態等。

11. Short-term scheduler 負責從 ready queue 選出下一個執行的 process。

    答：對。它就是 CPU scheduling 的主要角色。

12. Long-term scheduler 會控制 multiprogramming 程度。

    答：對。它決定多少 job 能進入系統。

13. Medium-term scheduler 常與 swapping 有關。

    答：對。它可將 process 暫時換出或換回記憶體。

14. Context switch 不需要時間，因此不會造成 overhead。

    答：錯。Context switch 需要保存與載入狀態，會產生 overhead。

15. Preemptive scheduling 中，OS 可以中斷正在執行的 process。

    答：對。這正是搶先式排程的核心。

16. Non-preemptive scheduling 中，process 取得 CPU 後通常要自願釋放 CPU。

    答：對。例如完成、等待 I/O 或主動讓出。

17. FCFS 容易產生 convoy effect。

    答：對。長工作在前時，短工作容易被卡住。

18. Starvation 指所有 process 都平均得到 CPU。

    答：錯。Starvation 是某些 process 長期得不到 CPU 或資源。

19. Aging 可用來改善 starvation。

    答：對。等待越久逐漸提高優先權，可避免長期被忽略。

20. SRTF 是 SJF 的搶先式版本。

    答：對。SRTF 依剩餘時間最短者優先，且可搶先。

21. Round Robin 的 time quantum 越小一定越好。

    答：錯。太小會造成太多 context switch overhead。

22. Round Robin 的 time quantum 很大時，行為可能接近 FCFS。

    答：對。若時間片大到 process 幾乎都能一次跑完，就會像 FCFS。

23. Response time 是 process 從到達到完成的總時間。

    答：錯。那是 turnaround time；response time 是到第一次拿到 CPU 的時間。

24. Waiting time 通常指 process 在 ready queue 等 CPU 的時間。

    答：對。計算排程題時尤其要注意這點。

25. Throughput 是單位時間完成的 process 數量。

    答：對。它衡量系統完成工作的速度。

## 考前速記小抄

### 一句話總背

Process 是正在執行中的程式，是 OS 分配資源與排程的基本單位。

### Program vs Process

```text
Program = 靜態檔案
Process = 動態執行實體
```

### Process 內容

```text
程式碼 + 資料 + 堆疊 + 堆積 + registers + 開啟檔案 + PCB
```

### 五狀態

```text
New -> Ready -> Running -> Terminated
          ^       |
          |       v
       Waiting <- 
```

更完整記法：

```text
Ready -> Running：dispatch
Running -> Ready：preemption / time quantum expired
Running -> Waiting：I/O request / wait event
Waiting -> Ready：I/O completion / event completion
Running -> Terminated：exit
```

### PCB 必背欄位

```text
PID
Process state
Program counter
CPU registers
CPU scheduling information
Memory management information
Accounting information
I/O status information
```

### Scheduler 三兄弟

```text
Long-Term：誰進系統，控制 multiprogramming
Short-Term：ready queue 中誰用 CPU
Medium-Term：swapping，誰換出或換入記憶體
```

### Context Switch

```text
保存舊 process 狀態 + 載入新 process 狀態 = 有 overhead
```

### 搶先與非搶先

```text
Preemptive：OS 可強制中斷 process
Non-Preemptive：process 自願釋放 CPU
```

### Starvation 與 Convoy Effect

```text
Starvation：長期得不到 CPU 或資源
解法常見 aging

Convoy Effect：短工作被長工作卡住
常見於 FCFS
```

### 排程計算公式

```text
Turnaround Time = Completion Time - Arrival Time
Waiting Time = Turnaround Time - CPU Burst Time
Response Time = First Start Time - Arrival Time
Throughput = 完成 process 數 / 總時間
CPU Utilization = CPU 忙碌時間 / 總時間
```

### 常見演算法一句話

```text
FCFS：先到先服務，簡單但可能 convoy effect
SJF：短工作先，平均等待佳但可能 starvation
SRTF：剩餘時間最短先，SJF 的搶先版
Priority：優先權高先，低優先權可能 starvation
RR：輪流跑 time quantum，適合分時系統
Multilevel Queue：不同類型 process 分不同佇列
MLFQ：可依行為在佇列間移動
HRRN：response ratio 最高先，等待越久越有利
```

### 解計算題流程

```text
看演算法 -> 看 arrival time -> 畫 Gantt chart -> 找 completion / first start -> 套公式
```

最重要提醒：I/O 完成是 Waiting → Ready，不是 Waiting → Running。
