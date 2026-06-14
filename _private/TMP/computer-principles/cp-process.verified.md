---
topic_id: cp-process
formal_topic_id: cp-process
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Process(Process)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Process`
- source labels: [必背], [比較], [會算], [會畫]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / Process`
- topic id: `cp-process`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較], [會算], [會畫]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

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
- 必練指標：Waiting Time、Turnaround Time、Response Time、Throughput、CPU Utili

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Process」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [會畫]: 要補畫圖順序、節點或箭頭意義、文字版圖形與常見漏畫處。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
