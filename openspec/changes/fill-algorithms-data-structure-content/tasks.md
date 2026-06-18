## 1. 來源確認與排序基準

- [x] 1.1 在 apply 階段重新讀取 `_private/MD/資料結構與演算法/` 內 9 個 Markdown 檔，確認 `Algorithms route imports data-structure Markdown topics` 的來源清單與自然排序為 1、2、3、4、5、6上、6下、7、8；以 `Get-ChildItem -LiteralPath "_private\MD\資料結構與演算法" -Filter *.md | Sort-Object Name` 的輸出與 spec 表格逐項比對作為驗證。
- [x] 1.2 匯入前記錄目前非本次匯入的 Algorithms topic id 相對順序，確保 `Existing Algorithms topics remain after imported Markdown topics` 可驗證；以新增或更新的 unit test 比對「前 9 個為新增 topics，後方 suffix 為匯入前相對順序」作為完成定義。

## 2. Algorithms 正式內容匯入

- [x] 2.1 在 `src/modules/subjectTopics/data/professionalTopics.ts` 新增 9 個 Markdown-backed Algorithms topics，使 `Algorithms route imports data-structure Markdown topics` 交付後 `/algorithms` 的前 9 個可見主題依序為 Big-O 複雜度、陣列與鏈結串列、堆疊與佇列、樹基本與走訪、高等樹、圖基礎與走訪、圖演算法、排序、雜湊；以 `professionalTopicsBySubject.algorithms` 或 `getSubjectTopics('algorithms')` 的前 9 筆順序測試驗證。
- [x] 2.2 將每個 Markdown 內容轉為既有 `lessonArticle` blocks，使 `Imported topics preserve source structure and traceability` 交付後每個新增 topic 都有 exact `sourceFiles` Markdown 路徑、非空 summary、非空 terms、非空 lead 或 sections，且第一個 block 為 `lessonArticle`；以 `tests/unit/professionalTopics.spec.ts` 逐一檢查來源路徑與 section 非空作為驗證。
- [x] 2.3 依原 Markdown heading、表格、清單、程式碼區塊與段落順序建立 lessonArticle sections，僅做客觀錯誤修正與 renderer 必要格式正規化，禁止加入來源不存在的 placeholder prose；以人工內容審查確認 9 個 topic 的定義正確、解題邏輯完整、表格資料可辨識，並以 JSON 字串檢查不含 `old fixed template removed`、`來源大綱不是成品`、`教材本文` 作為驗證。
- [x] 2.4 調整 Algorithms topic 排序，使 `Existing Algorithms topics remain after imported Markdown topics` 交付後既有 Bubble Sort、Selection Sort、Quick Sort、Fibonacci、GCD、Binary Search、Insertion Sort、Bucket Sort 與其餘既有 topics 全部位於新增 9 個 topics 後方，且既有 topics 彼此相對順序不變；以 route order unit test 驗證 suffix 完全符合匯入前基準。

## 3. 測試與驗證

- [x] [P] 3.1 更新 `tests/unit/professionalTopics.spec.ts`，驗證 `Algorithms route imports data-structure Markdown topics`、`Imported topics preserve source structure and traceability`、`Existing Algorithms topics remain after imported Markdown topics` 三個 requirement 的資料契約；以 `npm run test:unit -- tests/unit/professionalTopics.spec.ts` 通過作為驗證。
- [x] [P] 3.2 更新 `tests/unit/subjectTopics.spec.ts`，驗證 `getSubjectTopics('algorithms')` 的前 9 個可見標題為本次匯入 topics，且既有 Algorithms 標題仍存在於後方；以 `npm run test:unit -- tests/unit/subjectTopics.spec.ts` 通過作為驗證。
- [x] [P] 3.3 更新 `tests/unit/algorithmsRouteWorkflow.spec.ts`，驗證新增 9 個 topics 不破壞既有 Algorithms route workflow，且每個 imported topic 都使用 `lessonArticle` 而不是 stale block kinds；以 `npm run test:unit -- tests/unit/algorithmsRouteWorkflow.spec.ts` 通過作為驗證。
- [x] 3.4 執行整合驗證，確認 typecheck 與本 change 的 targeted unit tests 通過；以 `npm run typecheck`、`npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts tests/unit/algorithmsRouteWorkflow.spec.ts`、`spectra validate fill-algorithms-data-structure-content --strict` 的輸出作為完成證據，若完整 `npm run test:unit` 有既有無關失敗，需在實作總結列出失敗測試名稱與原因。
