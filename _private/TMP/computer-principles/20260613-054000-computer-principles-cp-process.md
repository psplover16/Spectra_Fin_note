---
topic_id: cp-process
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Process(Process)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / Process
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 必背
- Process 定義：正在執行中的程式，是 OS 分配資源與排程的基本單位。
- Process 包含：程式碼、資料、堆疊、堆積、暫存器狀態、開啟檔案、PCB 等。
- Program vs Process：
  - Program 是靜態檔案。
  - Process 是動態執行中的實體。


### [會畫] Process State Transition Diagram
- New、Ready、Running、Waiting / Blocked、Terminated。
- 常見轉換：
  - Ready → Running：dispatch。
  - Running → Ready：preemption。
  - Running → Waiting：等待 I/O 或事件。
  - Waiting → Ready：I/O 或事件完成。


### [必背] PCB（Process Control Block）
- 儲存 PID、process state、PC、registers、CPU scheduling information、memory management information、accounting、I/O status。


### [比較] Scheduler
- Long-Term Scheduler：決定哪些 job 進入系統，控制 multiprogramming 程度。
- Short-Term Scheduler：從 ready queue 選下一個 process 執行。
- Medium-Term Scheduler：負責 swapping，暫時移出或移入 process。


### [必背] 必背
- Context Switch：CPU 從一個 process 切換到另一個 process，需保存與載入狀態，有額外成本。
- Preemptive：可搶先，OS 可中斷正在執行的 process。
- Non-Preemptive：不可搶先，process 自願釋放 CPU。
- Starvation：某些 process 長期得不到資源。
- Convoy Effect：短工作被長工作卡住，常見於 FCFS。


### [會算] CPU Scheduling
- 必練指標：Waiting Time、Turnaround Time、Response Time、Throughput、CPU Utilization。
- 常見演算法：
  - FCFS：先到先服務，簡單但可能 convoy effect。
  - SJF：最短工作優先，平均等待時間低，但可能 starvation。
  - SRTF：SJF 的搶先版。
  - Priority Scheduling：依優先權排程，可能 starvation，可用 aging 解決。
  - Round Robin：時間片輪轉，適合分時系統，time quantum 太大像 FCFS，太小 context switch 過多。
  - Multilevel Queue：依類型分多個佇列。
  - Multilevel Feedback Queue：process 可在佇列間移動，較彈性。
  - HRRN：Highest Response Ratio Next，兼顧等待時間與服務時間。

## 學習標記說明

- [必背]：定義、核心句與國考最常出現的敘述，讀者要能直接說明。
- [比較]：把容易混淆的概念放在同一視野中比較，作答時要寫出差異理由。
- [會算]：公式與代入步驟要能照題目數字重算，不能只背結論。
- [會畫]：圖或流程要能照順序畫出，並能解釋每個節點或箭頭代表什麼。

## Verifier 結果

- source mapping: verified
- old fixed template removed: verified
- lessonArticle shape: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
