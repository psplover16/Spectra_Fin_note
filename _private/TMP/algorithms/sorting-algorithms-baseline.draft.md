---
topic_id: sorting-algorithms-baseline
formal_topic_id: algorithms-sorting-algorithms-baseline
subject: algorithms
source_files:
  - _private/資料結構與演算法.txt
status: draft
generated_at: "2026-06-13T12:30:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 排序(Sorting)七大比較基準(Sorting Complexity Baseline)

## 來源對應

- source files: `_private/資料結構與演算法.txt`
- source section: `九、排序`
- source labels: [必背], [會做], [補充]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/資料結構與演算法.txt`
- source section: `九、排序`
- topic id: `sorting-algorithms-baseline`
- route: `/algorithms`
- import target: `algorithms`
- source labels: [必背], [會做], [補充]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能比較 Bubble、Selection、Insertion、Merge、Quick、Heap、Shell 的時間複雜度。
- 能說明穩定排序是否保留相同 key 的相對順序。
- 能依資料特性選擇排序法。

### [必背] 最小背誦句與記憶支架
- Bubble/Insertion 有最佳 O(n) 條件。
- Merge Sort 穩定但需額外空間。
- Quick Sort 平均快但最差 O(n^2)。

### [必背] 名詞定義與雙語術語
- 排序(Sorting)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 穩定性(Stability)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 比較排序(Comparison Sort)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 排序比較不能只看平均時間，還要看最差、空間、穩定性與資料是否近乎排序。
- Selection Sort 比較次數固定，但交換次數少。
- Shell Sort 依 gap 而定，通常不穩定。

### [會做] 實際例子與操作步驟
題目：需要穩定且 O(n log n) 的排序，基準表中可選哪個？

1. 查穩定性欄。
2. 查平均與最差時間。
3. Merge Sort 符合穩定且 O(n log n)。

結果：選 Merge Sort，但要注意額外空間。

### [會算] 複雜度與穩定性
| algorithm | best | average | worst | stability | notes |
| --- | --- | --- | --- | --- | --- |
| 氣泡排序法(Bubble Sort) | O(n) | O(n^2) | O(n^2) | Stable | Early stop allows O(n) best case |
| 選擇排序法(Selection Sort) | O(n^2) | O(n^2) | O(n^2) | Usually unstable | Low swap count |
| 插入排序法(Insertion Sort) | O(n) | O(n^2) | O(n^2) | Stable | Good for small or nearly sorted data |
| 合併排序法(Merge Sort) | O(n log n) | O(n log n) | O(n log n) | Stable | Requires extra space |
| 快速排序法(Quick Sort) | O(n log n) | O(n log n) | O(n^2) | Unstable | Poor pivot choice degenerates |
| 堆積排序法(Heap Sort) | O(n log n) | O(n log n) | O(n log n) | Unstable | In-place sorting with heap |
| 希爾排序法(Shell Sort) | gap-dependent | gap-dependent | up to O(n^2) | Unstable | Improved insertion sort |

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文名詞，第一次出現必須寫中文(English Term)。
- 不要只背結論，計算或流程題要列步驟。
- 若題目要求比較，要寫差異理由與適用情境。

### [必背] 專有名詞整理
- 排序(Sorting)
- 穩定性(Stability)
- 比較排序(Comparison Sort)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「排序(Sorting)七大比較基準」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會做]: 要補可操作流程、示範步驟、完成後檢查點與常見錯誤。
- [補充]: 補足新手背景、名詞上下文與與主題相鄰的必要知識。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: pending
- final_status: draft
