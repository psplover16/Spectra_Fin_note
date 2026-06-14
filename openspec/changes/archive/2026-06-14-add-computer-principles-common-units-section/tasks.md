## 1. 測試契約先行

- [x] [P] 1.1 為 Requirement: Computer principles includes common units as the first professional topic 補上單元測試契約：computerPrinciples 第一個 formal topic 必須是 `cp-common-units`、標題為「電腦常用單位」、且 `cp-von-neumann-architecture` 仍存在於其後；以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證測試先失敗再於實作後通過。
- [x] [P] 1.2 為 Requirement: Common units content explains bit, byte, capacity, and speed notation 補上內容測試契約：`cp-common-units` 的 `lessonArticle` 表格必須含 bit、bits、byte、nibble、word、KB、MB、GB、TB，並含 `32 bits = 32 b = 4 B = 4 bytes` 與 `1 MB/s = 8 Mbps`；以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證。
- [x] [P] 1.3 為 Requirement: Computer principles workflow tracks the common units topic 補上 workflow 測試契約：computer-principles manifest、route workflow、source manifest 與 stale audit 的 topic 數量必須改為 33 並包含 `cp-common-units`；以 `npx vitest run tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/sourceManifests.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts` 驗證。
- [x] [P] 1.4 補上使用者可見 smoke 驗證：`/computer-principles` 頁面必須能看到「電腦常用單位」且既有「馮紐曼架構」仍可見；以 `npx vitest run tests/component/SubjectRoutesSmoke.spec.ts` 與 `npx playwright test tests/e2e/app-shell.smoke.spec.ts` 驗證。

## 2. 內容工作流工件

- [x] 2.1 建立 `cp-common-units` 的 route-scoped prompt、draft、verified 與正式暫存稿，讓內容審查可追蹤來源、表格、b/B 差異、bits 複數說明與 Mbps/MB/s 換算；以人工內容審查確認 `_private/TMP/computer-principles/cp-common-units.verified.md` 記錄通過定義正確性、換算正確性、來源追蹤與新手可讀性。
- [x] 2.2 更新 computer-principles manifest、subagent task breakdown、import-readiness 與相關 workflow 報告，使 `cp-common-units` 成為正式匯入 topic 且總數為 33；以 `npx vitest run tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/sourceManifests.spec.ts tests/unit/tmpDraftQuality.spec.ts` 驗證。

## 3. 正式資料匯入

- [x] 3.1 將 `cp-common-units` 加入 `professionalTopicsBySubject.computerPrinciples` 的 formal topic 順序，完成後載入 computerPrinciples topics 時第一筆必須是「電腦常用單位」；以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectRoutesSmoke.spec.ts` 驗證。
- [x] 3.2 匯入「電腦常用單位」lesson content，使用既有 `lessonArticle`、`table`、`paragraph` block 呈現單位表、b/B 差異、32 bits 換算與 1 MB/s 換算；以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 驗證。
- [x] 3.3 設定 `cp-common-units` 的來源追蹤，`sourceFiles` 必須同時包含 `_private/計算機概論.txt` 與 `_private/discuss.txt`，`sourceSummary` 必須描述 common-units 來源基礎；以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 驗證。

## 4. 整合驗收

- [x] 4.1 執行相關單元與元件測試，確認計概 topic 數量、置頂順序、正式內容、來源追蹤與 workflow 報告全部符合 specs；驗證命令為 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/sourceManifests.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts tests/component/SubjectRoutesSmoke.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts`。
- [x] 4.2 執行計概 route 的瀏覽器 smoke 驗收，確認首頁或 `/computer-principles` 顯示「電腦常用單位」並保留既有「馮紐曼架構」內容；驗證命令為 `npx playwright test tests/e2e/app-shell.smoke.spec.ts`。
- [x] 4.3 執行 Spectra 驗收，確認 proposal、spec 與 tasks 一致，且 change 可以交給 `$spectra-apply`；驗證命令為 `spectra analyze add-computer-principles-common-units-section --json` 與 `spectra validate add-computer-principles-common-units-section`。
