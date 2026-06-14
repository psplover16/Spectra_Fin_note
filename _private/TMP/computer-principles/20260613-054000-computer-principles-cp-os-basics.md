---
topic_id: cp-os-basics
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 基本常識(Operating System Basics)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3c. 作業系統 / 基本常識
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

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
