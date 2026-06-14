---
topic_id: array-addressing
formal_topic_id: algorithms-array-addressing
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 陣列(Array)與位址計算(Array and Address Calculation)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `四、陣列（Array）`
- source labels: [必背], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `四、陣列（Array）`
- topic id: `array-addressing`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明陣列(Array) 連續記憶體與 O(1) 隨機存取。
- 能計算一維與二維 Row-major/Column-major 位址。
- 能指出插入刪除可能需搬移元素。

### [必背] 最小背誦句與記憶支架
- 一維 LOC(A[i]) = Base + (i - lower_bound) * element_size。
- Row-major 先列後行，Column-major 先行後列。
- 陣列查詢快，插刪常需 O(n)。

### [必背] 名詞定義與雙語術語
- 陣列(Array)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 列優先(Row-major)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 行優先(Column-major)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 基底位址(Base Address)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 陣列的快來自連續記憶體和可直接用索引換算位址。
- 二維陣列位址題要先確認 row lower、column lower、欄數或列數。
- 位址計算題必須列公式再代入，不要只寫答案。

### [會做] 實際例子與操作步驟
題目：Base=100、element_size=4、lower_bound=0，A[3] 位址？

1. LOC(A[3]) = 100 + (3 - 0) * 4。
2. 100 + 12 = 112。

結果：A[3] 位址為 112。

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 陣列(Array)
- 列優先(Row-major)
- 行優先(Column-major)
- 基底位址(Base Address)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「陣列(Array)與位址計算」在考試中通常是在問定義、流程、比較、計算或應用判斷。
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
