## 1. 測試契約先行

- [x] [P] 1.1 建立 `Computer principles v2 route uses catalog-backed topics`、`Computer principles v2 titles follow the catalog manifest`、`Floating point conversion topic uses refreshed v2 source`、`Floating point topic exposes practice and IEEE 754 special-value sections` 的失敗測試：`getSubjectTopics('computerPrinciplesV2')` SHALL 回傳 20 張 topics、前八張順序符合 spec、`cpv2-supplemental-data` 與 `補充資料` 不出現、`cpv2-floating-point-conversion` 位於第 17 張且仍在 `cpv2-complement-conversion` 與 `cpv2-codes-and-character-sets` 之間；以 `npx vitest run tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/subjectTopics.spec.ts` 確認實作前失敗。
- [x] [P] 1.2 建立 `Computer Principles v2 topics preserve source traceability`、`Computer Principles v2 split supplemental topics trace sources`、`Computer Principles v2 supplemental data topic traces source` 的失敗測試：formal data SHALL 有 20 筆、六張 split supplemental topics 的 `sourceFiles` 與 lessonArticle `sourceFiles` 符合 spec、舊 `cpv2-supplemental-data` 被移除且不做 migration、lecture-only topics 不含 quiz-only fields；以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 確認實作前失敗。
- [x] [P] 1.3 建立 UI smoke 失敗測試：`SubjectRoutesSmoke.spec.ts` SHALL 驗證 `/computer-principles-v2` 前八張 route-visible cards 使用既有 `SubjectTopicCard` 展開，能看到六張補充 card title、CPU 排班 20 題 marker、且看不到 `補充資料` card；以 `npx vitest run tests/component/SubjectRoutesSmoke.spec.ts` 確認實作前失敗。

## 2. 內容與資料實作

- [x] 2.1 交付 `Preserve source traceability by restoring the legacy supplemental source`：恢復 `_private/計概補充/計算機概論_重點講義_01.md` 作為阿姆達爾、死結、分頁分段、OOP、基礎資料結構的 approved source，並保留 `_private/計概補充/CPU排班演算法_考試速記版.md` 作為 CPU 排班 source；以 `Test-Path` 檢查兩個來源檔存在，並以 `git diff -- _private/計概補充` 確認未出現亂碼或 BOM 可見文字。
- [x] 2.2 交付 `Replace the single supplemental data topic with six formal topics`：在 `professionalTopicsBySubject.computerPrinciplesV2` 中以 `cpv2-supplemental-amdahl-law`、`cpv2-supplemental-cpu-scheduling`、`cpv2-supplemental-deadlock`、`cpv2-supplemental-paging-segmentation`、`cpv2-supplemental-oop-characteristics`、`cpv2-supplemental-basic-data-structures` 取代 `cpv2-supplemental-data`，並讓 route-visible order 成為 `加強練習`、六張補充 cards、13 張 catalog topics；以 `npx vitest run tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/subjectTopics.spec.ts` 驗證 topic 數量、順序與舊 id/title 移除。
- [x] 2.3 交付 `Keep rendering through existing lessonArticle blocks` 與 `Computer principles v2 uses lessonArticle content`：六張補充 cards SHALL 各有一個非空 `lessonArticle` block，CPU 排班 SHALL 以 table 呈現演算法比較、以 orderedList 呈現 20 題、以 table 呈現答案解析，且不新增 runtime Markdown renderer 或 quiz-only data shape；以 `npx vitest run tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/professionalTopics.spec.ts` 驗證內容 marker 與反向欄位。
- [x] 2.4 交付 `Leave old progress and bookmark state untouched`：不新增 localStorage migration、不修改 progress storage value shape，舊 `cpv2-supplemental-data` 殘留狀態不影響六張新 cards 顯示；以既有 `tests/unit/subjectTopicProgressStorage.spec.ts` 加上 targeted route workflow 測試驗證 progress namespace 與 topic list 行為不變。

## 3. 內容審查與 UI 驗證

- [x] 3.1 完成專業科目內容審查：確認六張補充 cards 的定義、解題邏輯、國考速記與例題沒有因拆卡遺失；特別檢查 CPU 排班中 FCFS、SJF、SRTF、Priority、RR、MLQ、MLFQ、等待/迴轉/回應時間與 20 題答案解析皆能區分觀念；以人工 review note 或測試 assertion 記錄 `lecture-only`、`4 個選項：不適用`、`1 個正解：不適用`、`選項辨析：不適用`。
- [x] 3.2 驗證 `SubjectTopicCard` UI 契約：`/computer-principles-v2` 的六張補充 cards SHALL 透過既有 topic card 展開/收合、完成勾選與 bookmark 控制，且沒有舊 `補充資料` card；以 `npx vitest run tests/component/SubjectRoutesSmoke.spec.ts` 驗證 component smoke。
- [x] 3.3 驗證離線 bundled static content：建置後 `/computer-principles-v2` 在離線 shell 中 SHALL 顯示六張補充 cards、`架構與計算理論` 與既有 catalog topics，不需要 runtime Markdown fetch；以 `npm run test:e2e -- tests/e2e/pwa-offline-shell.spec.ts` 或既有離線 smoke 的對應 targeted case 驗證。

## 4. 整體驗證與規格收斂

- [x] 4.1 執行整體 type 與 targeted tests：`npm run typecheck`、`npx vitest run tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/subjectTopics.spec.ts tests/unit/professionalTopics.spec.ts tests/unit/subjectTopicProgressStorage.spec.ts tests/component/SubjectRoutesSmoke.spec.ts` SHALL 全部通過；若有既有無關失敗，記錄失敗測試名稱、錯誤摘要與本變更是否相關。
- [x] 4.2 執行 Spectra artifact 驗證：`spectra analyze split-cpv2-supplemental-data-cards --json` SHALL 無 Critical/Warning，`spectra validate split-cpv2-supplemental-data-cards` SHALL 通過；若 analyzer 提示 spec/task drift，回修 artifact 後再驗證。
- [x] 4.3 完成最終自查：確認 `proposal.md`、`design.md`、兩份 delta spec、`tasks.md` 與實作一致，並確認本變更未新增 route、component、runtime Markdown renderer、題庫互動流程、外部依賴或 localStorage migration；以 `git diff --check` 與 `rg -n "cpv2-supplemental-data|補充資料" src tests openspec/changes/split-cpv2-supplemental-data-cards` 的人工檢查結果作為收斂依據。
