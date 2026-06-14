---
topic_id: cp-os-basics
formal_topic_id: cp-os-basics
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 基本常識(Operating System Basics)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / 基本常識`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3c. 作業系統 / 基本常識`
- topic id: `cp-os-basics`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [比較] OS 分類
- 批次系統（Batch）：大量工作批次處理，互動性低。
- 分時系統（Time-Sharing）：多使用者共享 CPU，重視回應時間。
- 即時系統（Real-Time）：重視 deadline，可分 hard real-time 與 soft real-time。
- 分散式系統（Distributed）：多台電腦協同工作。
- 嵌入式系統（Embedded）：專用設備中的 OS。
- 行動作業系統：Android、iOS。
- 網路作業系統：提供網路資源共享與管理。

### [必背] Concurrency vs Parallelism
- Concurrency：多個工作在同一時間段內交錯進行，不一定同時執行。
- Parallelism：多個工作在同一時刻真的同時執行，通常需要多核心或多處理器。
- 廚師煮菜例子：
  - 一位廚師切菜、煮湯、炒菜交替進行：Concurrency。
  - 多位廚師同時各做一道菜：Parallelism。

### [比較] Offline / Spooling / Buffering / Cache
- Offline：讓 I/O 或資料準備與主機執行分離，減少等待。
- Spooling：以磁碟模擬排隊裝置，例如列印佇列。
- Buffering：用緩衝區吸收生產者與消費者速度差。
- Cache：保存近期常用資料以提高存取速度。
- 採用原因：解決速度落差、提高 CPU/I/O 利用率、降低等待時間。

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「基本常識」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
