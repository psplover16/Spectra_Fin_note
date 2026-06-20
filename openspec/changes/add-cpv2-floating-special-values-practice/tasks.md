## 1. 測試契約

- [x] [P] 1.1 為 `Floating point topic exposes practice and IEEE 754 special-value sections` 增加失敗中的路由 workflow 測試：`tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` SHALL 驗證 `cpv2-floating-point-conversion` 仍是第 10 個 topic、總 topic 數仍為 13、第一個 section 為 `加強練習`、包含 12 題練習提示與 `Valid bit`/`Dirty bit`/`Tag`/資料 subpoints，並驗證 IEEE 754 特殊值 section 包含 `±0`、`非正規化數`、`±∞`、`NaN`、hidden bit 與單/雙精度欄位；完成以該 Vitest 測試先失敗、實作後通過驗證。
- [x] [P] 1.2 為 `Refreshed floating point topic traces supplemental sources` 增加失敗中的內容追溯測試：`tests/unit/professionalTopics.spec.ts` 或 `tests/unit/subjectTopics.spec.ts` SHALL 驗證 topic 與 lessonArticle `sourceFiles` 同時包含 `_private/MD/計算機概論v2/10_浮點數轉換.md`、`_private/discuss.txt`、`_private/MD/0621/IEEE754_浮點數特殊值_速記.md`，且序列化內容不含 `questionText`、`correctAnswer`、`backendSyncId`、`remoteQuestionId`；完成以指定 Vitest 測試先失敗、實作後通過驗證。

## 2. 教材內容

- [x] 2.1 實作 `Floating point topic exposes practice and IEEE 754 special-value sections` 的最上方練習段落：`src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts` 中 `cpv2-floating-point-conversion` lessonArticle SHALL 以 `加強練習` 作為第一個 section，並完整保留 `_private/discuss.txt` 的 12 題提示、cache subpoints 與 `資管題目:` 備註；完成以 1.1 的 section order 與內容關鍵字測試通過驗證。
- [x] 2.2 實作 `Floating point topic exposes practice and IEEE 754 special-value sections` 的 IEEE 754 特殊值段落：同一 lessonArticle SHALL 收錄 `_private/MD/0621/IEEE754_浮點數特殊值_速記.md` 的判讀表、兩端記憶法、特殊值重點、位元範例、單/雙精度對比與易混點，並放在 `16. 浮點數轉換` section 正下方；完成以 1.1 的 IEEE 754 特殊值關鍵字與順序測試通過驗證。
- [x] 2.3 實作 `Refreshed floating point topic traces supplemental sources` 的來源追溯：topic 層與 lessonArticle 層的 `sourceFiles` SHALL 同步列出三個來源檔，`sourceSummary` SHALL 仍指向計概(v2)浮點數轉換教材，且不建立任何新 route-visible topic；完成以 1.2 的 sourceFiles 測試與 1.1 的 topic count 測試通過驗證。
- [x] 2.4 建立 `Refreshed floating point topic traces supplemental sources` 的人工內容審查紀錄：`_TMP/reviews/cpv2-floating-point-special-values-practice-review.md` SHALL 記錄兩個補充來源、技術正確性檢查、`lecture-only` 判定，以及 4 個選項、1 個正解、選項辨析皆不適用；完成以內容追溯測試讀取該 review artifact 並通過驗證。

## 3. 驗證

- [x] 3.1 執行型別與測試驗證：`npm run typecheck` SHALL 通過，且 `npx vitest run tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts` SHALL 通過，證明新增 section、來源追溯與 lecture-only 邊界符合 spec。
- [x] 3.2 執行 Spectra 驗證：`spectra analyze add-cpv2-floating-special-values-practice --json` SHALL 無 Critical/Warning，且 `spectra validate add-cpv2-floating-special-values-practice` SHALL 通過，證明 proposal、specs、tasks 可交接到 apply。

## 4. 需求修正

- [x] 4.1 修正 `Floating point topic exposes practice and IEEE 754 special-value sections` 的特殊值 section 呈現契約：`cpv2-floating-point-conversion` lessonArticle SHALL 在 `16. 浮點數轉換` 後面直接放置獨立 section `IEEE 754 浮點數特殊值・速記版`，不得以 `16. 浮點數轉換 / ...` 子段落命名；完成以 `tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 與 `tests/unit/subjectTopics.spec.ts` 的 section heading/order 測試通過驗證。
- [x] 4.2 修正 `Floating point topic exposes practice and IEEE 754 special-value sections` 的加強練習位置契約：`computer-principles-v2` route SHALL 在 topic list 前方直接放置獨立 section `加強練習`，`cpv2-floating-point-conversion` lessonArticle SHALL NOT 以 `加強練習` 作為內部 section；完成以 `tests/component/SubjectRoutesSmoke.spec.ts`、`tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts`、`tests/unit/subjectTopics.spec.ts` 與 `tests/unit/professionalTopics.spec.ts` 的 route-level/section heading 測試通過驗證。
- [x] 4.3 修正 `Floating point topic exposes practice and IEEE 754 special-value sections` 的加強練習容器契約：`computer-principles-v2` route 的獨立 section `加強練習` SHALL 使用與 `架構與計算理論` topic card 相同的外層卡片容器視覺，但仍不得建立新的 route-visible topic；完成以 `tests/component/SubjectRoutesSmoke.spec.ts` 驗證 route section 帶有 topic card 容器 class、仍位於 topic list 前方且內容關鍵字仍存在。
