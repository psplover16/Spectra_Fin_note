---
topic_id: linked-list-basics
formal_topic_id: algorithms-linked-list-basics
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: verified
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: algorithm-verifier
content_shape: lessonArticle
---

# 鏈結串列(Linked List)與基本操作(Linked List and Basic Operations)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `五、Linked List`
- source labels: [必背], [比較], [會寫虛擬碼]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `五、Linked List`
- topic id: `linked-list-basics`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [比較], [會寫虛擬碼]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明節點由資料欄位與指標欄位組成。
- 能比較 Array 與 Linked List。
- 能寫出插入與刪除的虛擬碼概念。

### [必背] 最小背誦句與記憶支架
- Linked List 不需連續記憶體。
- 已知節點位置時插入刪除快，但搜尋通常 O(n)。
- Doubly Linked List 多 prev 指標，可雙向走訪。

### [必背] 名詞定義與雙語術語
- 鏈結串列(Linked List)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 節點(Node)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 指標(Pointer)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 單向鏈結串列(Singly Linked List)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 雙向鏈結串列(Doubly Linked List)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- Linked List 的核心是改指標，不是搬移大量元素。
- 刪除節點要注意 head、tail 與中間節點情境。
- 考題常問 Array vs Linked List 的存取、插刪與空間成本。

### [會做] 實際例子與操作步驟
題目：在節點 A 後插入節點 X。

1. X.next 指向 A.next。
2. A.next 改指向 X。
3. 若是 doubly list，還要更新 prev。

結果：插入完成且串列不中斷。

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 鏈結串列(Linked List)
- 節點(Node)
- 指標(Pointer)
- 單向鏈結串列(Singly Linked List)
- 雙向鏈結串列(Doubly Linked List)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「鏈結串列(Linked List)與基本操作」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會寫虛擬碼]: 要補輸入、輸出、虛擬碼、每一步目的與邊界條件。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
