## 1. 規格導向測試

- [x] 1.1 為 Computer principles Turing lesson content 新增或更新單元測試，確認 `cp-turing-machine-and-test` 在 `computerPrinciples` topics 中提供一個 `lessonArticle` block、非空 lead、實際 sourceFiles `_private/MD/二、圖靈機與圖靈測試.md`，並以 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證測試會覆蓋此資料契約。
- [x] 1.2 補強內容結構測試，確認圖靈機組成與運作使用 `orderedList` 或 `bulletList` 表達階層，可計算性包含「問題、明確程序、有限步驟」，比較區塊使用 `table` 且欄位能比較圖靈機與圖靈測試；以同一個 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證。

## 2. Topic 內容接入

- [x] 2.1 在 `src/modules/subjectTopics/data/professionalTopics.ts` 讓 `cp-turing-machine-and-test` 從空白 skeleton 變成有 lead 與 sections 的正式 topic，完成後可觀察到 `getSubjectTopics('computerPrinciples')` 回傳的圖靈機與圖靈測試 topic 含有定義、主要組成、運作流程、可計算性、圖靈測試與比較表；以 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證。
- [x] 2.2 保持內容只使用既有 `SubjectTopicBlock` 支援的 `paragraph`、`bulletList`、`orderedList`、`table` block kind，不新增 UI renderer、路由、儲存或依賴；以 TypeScript 型別檢查與 `pnpm vitest run tests/component/SubjectTopicProfessionalBlocks.spec.ts` 驗證現有渲染相容。

## 3. 內容審查與整體驗證

- [x] 3.1 對照 `_private/MD/二、圖靈機與圖靈測試.md` 進行專業科目內容審查，確認定義正確、階層關係清楚、圖靈機與圖靈測試差異可辨認，並以人工內容審查記錄或 final 回報列出通過項目。
- [x] 3.2 執行 `pnpm vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts`，確認新增內容不破壞 professional topic 資料與 lessonArticle 渲染；若測試指令不可執行，需在 final 回報阻塞原因與尚未驗證的範圍。

## 4. 標籤清理與 list 呈現

- [x] 4.1 補強 Computer principles Turing lesson content 測試，確認 `cp-turing-machine-and-test` 的 lessonArticle sections 不含 `sourceLabel`，序列化內容不包含 `[必背]`、`[理解]`、`[比較]`，且「資料如何被儲存／讀取／根據規則改變／計算結束條件」維持 `orderedList`；先以 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證紅燈，再於實作後驗證綠燈。
- [x] 4.2 移除 `src/modules/subjectTopics/data/professionalTopics.ts` 中 `cp-turing-machine-and-test` 新增內容的 `sourceLabel` 標籤，並確認圖靈機核心問題、主要組成、運作流程與可計算性仍用 list block 表達階層；以 `pnpm vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 與 `pnpm run typecheck` 驗證。

## 5. Icon orderedList 呈現

- [x] 5.1 補強 Computer principles Turing lesson content 資料測試，確認 `cp-turing-machine-and-test` 的「圖靈機是什麼」核心 orderedList 具有四個 icon identifiers，分別對應資料儲存、資料讀取、規則改變與計算結束；先以 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證紅燈，再於實作後驗證綠燈。
- [x] 5.2 讓 lessonArticle 的 `orderedList` 支援可選 icons，並在 SubjectTopicPage 中渲染可見 icon 元素而不影響無 icons 的一般 orderedList；以 `pnpm vitest run tests/component/SubjectTopicProfessionalBlocks.spec.ts`、`pnpm vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 與 `pnpm run typecheck` 驗證。

## 6. Ordered marker 修正

- [x] 6.1 修正 Computer principles Turing lesson content 測試，確認 `cp-turing-machine-and-test` 的「圖靈機是什麼」核心 orderedList 不使用實體 icon identifiers，改以 `markerStyle: 'decimal'` 表示 `1. 2. 3. 4.` 清單標號；先以 `pnpm vitest run tests/unit/professionalTopics.spec.ts` 驗證紅燈，再於實作後驗證綠燈。
- [x] 6.2 移除 SubjectTopicPage 的實體 icon renderer 與相關 FontAwesome imports，讓 lessonArticle 的 `orderedList` 支援 `decimal`、`upperRoman`、`upperAlpha` marker 樣式並以 native `ol`/`li` 呈現；以 `pnpm vitest run tests/component/SubjectTopicProfessionalBlocks.spec.ts`、`pnpm vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 與 `pnpm run typecheck` 驗證。
