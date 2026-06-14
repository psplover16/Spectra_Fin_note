---
topic_id: stack-and-queue
formal_topic_id: algorithms-stack-and-queue
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 堆疊(Stack)與佇列(Queue)(Stack and Queue)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `六、Stack 與 Queue`
- source labels: [必背], [比較], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `六、Stack 與 Queue`
- topic id: `stack-and-queue`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [比較], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能比較 Stack 的 LIFO 與 Queue 的 FIFO。
- 能列出 push、pop、enqueue、dequeue。
- 能判斷 Circular Queue 空滿條件。

### [必背] 最小背誦句與記憶支架
- Stack 一端進出，Queue 一端進一端出。
- DFS 常用 Stack，BFS 常用 Queue。
- Circular Queue 常用 modulo 更新 front/rear。

### [必背] 名詞定義與雙語術語
- 堆疊(Stack)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 佇列(Queue)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 後進先出(Last In First Out)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 先進先出(First In First Out)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 循環佇列(Circular Queue)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- Stack 像盤子，最後放上去的先拿；Queue 像排隊，先來先服務。
- Array 實作要注意 overflow/underflow。
- Linked List 實作較彈性但多指標空間。

### [會做] 實際例子與操作步驟
題目：Circular Queue 大小 5，rear=3，enqueue 後 rear？

1. 使用 (rear + 1) mod size。
2. (3 + 1) mod 5 = 4。

結果：rear 變成 4。

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 堆疊(Stack)
- 佇列(Queue)
- 後進先出(Last In First Out)
- 先進先出(First In First Out)
- 循環佇列(Circular Queue)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「堆疊(Stack)與佇列(Queue)」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
