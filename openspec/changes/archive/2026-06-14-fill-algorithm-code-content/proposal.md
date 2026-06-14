## Why

演算法路由目前已有 first-batch topic，但內容仍不足以讓讀者直接學會演算法規則、Java 寫法與最壞時間複雜度。現在已有使用者整理完成的 Markdown，可將確認過的 7 個演算法匯入正式教材，降低後續自行生成內容的不穩定性。

本次教學內容不重新整理近 8 年考古題；範圍限於專業科目中的演算法教材講解、Java 範例與時間複雜度理解，不新增題庫或測驗。

## What Changes

- 演算法 route 的 7 個 topic 由 skeleton 轉為正式教材內容：Bubble Sort、Quick Sort、Fibonacci、GCD、Binary Search、Selection Sort、Insertion Sort。
- 每個已填入 topic 呈現演算法概念、核心規則、可用的遞迴與非遞迴 Java code，以及最壞時間複雜度推導。
- Java code 使用既有 teachingCode block 顯示；概念、規則與複雜度使用 lessonArticle。
- sourceFiles 指向實際來源 Markdown。
- 測試更新為能區分已填入演算法 topic 與尚未填入的 skeleton topic。

## Non-Goals

- 不補寫 Markdown 未涵蓋的 Merge Sort、Heap Sort、Shell Sort 或其他資料結構 topic。
- 不新增 lessonArticle code block 型別，不新增互動題庫，不新增離線儲存、同步或衝突處理。
- 不呈現最佳或平均時間複雜度，本次只保留最壞情況。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `algorithm-example-content`: first-batch algorithm topics SHALL include readable lesson content, complete Java examples when available, and worst-case time complexity.
- `professional-topic-content`: algorithm topic source traceability SHALL point to the approved Markdown source used for this import.

## Impact

- Affected specs: algorithm-example-content, professional-topic-content
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/professionalTopics.spec.ts
  - Removed: none
