## 1. 測試先行

- [x] [P] 1.1 為 `Computer Principles includes 3b digital logic lessons`、`Digital logic lessons preserve approved source scope`、`Digital logic lessons follow confirmed content decisions` 增加 `tests/unit/professionalTopics.spec.ts` 斷言，驗證五個 3b topic 有標題、summary、terms、sourceFiles、lessonArticle sections、已確認修正與 raw instruction 清理；完成定義是變更實作前執行 `npm run test:unit -- tests/unit/professionalTopics.spec.ts` 會出現對應失敗。
- [x] [P] 1.2 為 `Computer Principles includes 3b digital logic lessons` 增加 `tests/unit/subjectTopics.spec.ts` route-visible 與順序斷言，驗證五個 3b topic 出現在 `cp-codes-and-check-codes` 後與 `cp-os-basics` 前；完成定義是變更實作前執行 `npm run test:unit -- tests/unit/subjectTopics.spec.ts` 會出現對應失敗。
- [x] [P] 1.3 為 `Lesson article tables reveal configured columns` 增加 `tests/unit/SubjectTopicPage.spec.ts` 互動斷言，覆蓋初始隱藏、點選 `AND` 只揭露單欄、再次點選隱藏、靜態 table 不變、invalid index 不崩潰；完成定義是變更實作前執行 `npm run test:unit -- tests/unit/SubjectTopicPage.spec.ts` 會出現對應失敗。

## 2. 表格揭露互動

- [x] 2.1 實作 `Extend lessonArticle table metadata for revealable columns`：在 lessonArticle table 型別新增 `revealableColumnIndexes?: readonly number[]`，未設定 metadata 的 table 保持既有資料契約；完成定義是 `npm run typecheck` 可辨識新 metadata，且既有 table fixtures 不需要新增 reveal 設定。
- [x] 2.2 實作 `Keep reveal state local to SubjectTopicPage`：在 `SubjectTopicPage.vue` 使用 component-local state 追蹤每個 table 的已揭露欄位，不寫入 subject progress storage；完成定義是 `tests/unit/SubjectTopicPage.spec.ts` 驗證欄位 toggle 可運作，且 subject progress storage 測試不需 schema 變更。
- [x] 2.3 完成 `Lesson article tables reveal configured columns` 的 renderer 行為：revealable 表頭以 accessible toggle control 呈現、body cell 預設隱藏、invalid reveal index 被忽略、靜態 table 無表頭按鈕；完成定義是 `npm run test:unit -- tests/unit/SubjectTopicPage.spec.ts` 通過。

## 3. 數位邏輯教材資料

- [x] 3.1 實作 `Fill digital logic topics through existing markdown-backed topic path`：五個既有 3b skeleton topic 產生非空 summary、terms、sourceFiles 與 lessonArticle sections，並使用中文(英文) topic title；完成定義是 `npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts` 通過 topic 存在與順序斷言。
- [x] 3.2 實作 `Use conservative content correction while preserving source scope`：匯入內容不得顯示 `用table做`、`內部值都是空的`、`點選標題，才會讓值跑出來`，並套用 `B'` 或 `NOT B`、`德摩根定律`、卡諾圖「欄」、SOP/POS 標準形式提醒、NOR XOR 5 個 NOR；完成定義是 `tests/unit/professionalTopics.spec.ts` 的 serialized content assertions 通過。
- [x] 3.3 為基本邏輯真值表配置 `revealableColumnIndexes`，讓 `A`、`B` 可見且 `AND`、`OR`、`NAND`、`NOR`、`XOR`、`XNOR` 可點選揭露；完成定義是 `tests/unit/professionalTopics.spec.ts` 驗證 metadata 存在，且 `tests/unit/SubjectTopicPage.spec.ts` 驗證畫面互動。
- [x] 3.4 對五個 3b topic 執行專業科目內容審查，確認定義正確、SOP/POS 解題邏輯完整、卡諾圖圈選規則一致、萬用閘數量可辨識、組合/循序分類符合原短文；完成定義是在實作回報中列出審查結果，且內容符合 `_private/propose.md` 的已確認事項。

## 4. 驗證與收尾

- [x] 4.1 執行 targeted unit tests，確認內容、route-visible topic、table reveal 行為皆符合 specs；完成定義是 `npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts tests/unit/SubjectTopicPage.spec.ts` 通過。
- [x] 4.2 執行型別與建置驗證，確認新增 table metadata 與教材資料不破壞 build；完成定義是 `npm run typecheck` 與 `npm run build` 通過。
- [x] 4.3 以手機尺寸或瀏覽器模擬器開啟 `/computer-principles` 並切到離線狀態，手動驗證五個 3b topic 可閱讀、基本邏輯真值表欄位可揭露、未揭露欄不遮擋文字；完成定義是在實作回報中記錄離線手動驗證結果。
