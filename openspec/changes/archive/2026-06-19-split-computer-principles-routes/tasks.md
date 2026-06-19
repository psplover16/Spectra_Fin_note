## 1. 測試基線

- [x] [P] 1.1 先建立 Requirement: App shell exposes primary subject routes 與設計決策 Add dedicated subject keys and route views for split content、Use a computer-foundation route group switcher backed by RouteSubMenu 的失敗測試：更新 route config/preload 與 header component smoke 測試，驗證 `/digital-logic`、`/operating-systems` 被列為 primary routes、可 lazy-load，且 header 計概類選單列出 `計概`、`網概`、`數位邏輯`、`作業系統`；以 `npx vitest run tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/component/AppShellSmoke.spec.ts` 確認在尚未實作前失敗。
- [x] [P] 1.2 先建立 Requirement: Computer principles topics are split into dedicated formal subjects 與 Requirement: Split subject keys preserve progress ownership 的失敗測試：新增或更新 `tests/unit/splitComputerPrinciplesRoutes.spec.ts`、`tests/unit/computerPrinciplesRouteWorkflow.spec.ts`、`tests/unit/subjectTopicProgressStorage.spec.ts`，驗證 moved topic ids 只出現在 `digitalLogic`/`operatingSystems`、不再出現在 `computerPrinciples`，且 legacy `computerPrinciples` progress 會正規化到新 subject；以 `npx vitest run tests/unit/splitComputerPrinciplesRoutes.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/subjectTopicProgressStorage.spec.ts` 確認在尚未實作前失敗。

## 2. Route 與 Subject 資料拆分

- [x] 2.1 實作設計決策 Add dedicated subject keys and route views for split content：新增 `digitalLogic`、`operatingSystems` subject keys 與 `/digital-logic`、`/operating-systems` route views，使兩個 route 分別顯示 `數位邏輯`、`作業系統` 的 `SubjectTopicPage`，並讓 `router.ts`、`routePreload.ts`、`placeholderTopicsBySubject`、`professionalTopicsBySubject` 都具備完整 key/path entry；以 `npx vitest run tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts` 與 `npm run typecheck` 驗證 route/type contract。
- [x] 2.2 實作設計決策 Move topic ownership by subjectKey instead of duplicating topics 與 Requirement: Computer principles topics are split into dedicated formal subjects：將五個數位邏輯 topic ids 與十一個作業系統 topic ids 的 formal ownership 從 `computerPrinciples` 移到對應 subject，保留原 topic id、title、sourceFiles、sourceSummary 與 learner-facing blocks；以 `npx vitest run tests/unit/splitComputerPrinciplesRoutes.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 驗證正向歸屬與反向排除。
- [x] 2.3 實作設計決策 Preserve moved topic progress without changing storage schema 與 Requirement: Split subject keys preserve progress ownership：在 v1 progress normalization 中把 legacy `computerPrinciples.completedTopicIds`/`bookmarkedTopicId` 內的 moved topic ids 分流到 `digitalLogic` 或 `operatingSystems`，並讓 `computerPrinciples` 只保留仍屬於計概的 ids；以 `npx vitest run tests/unit/subjectTopicProgressStorage.spec.ts` 驗證舊資料、缺少新 subject、invalid JSON 與空 storage 都安全。

## 3. Header 分組互動

- [x] 3.1 實作設計決策 Use a computer-foundation route group switcher backed by RouteSubMenu 與 Requirement: App shell exposes primary subject routes：讓 `RouteSubMenu` 支援可配置 menu id、test id 與 aria label，新增計概類 route group switcher，並讓 `RouteTabs` 顯示計概類 trigger 加既有非 group 專業科目 tabs；以 `npx vitest run tests/component/AppShellSmoke.spec.ts tests/component/CommonSubjectSwitcher.spec.ts` 驗證計概類選單、active style、共同科目 switcher 行為未被破壞。
- [x] 3.2 完成 header 導航的瀏覽器驗證：在 Playwright 中確認手機與桌機寬度下，計概類 trigger 可開啟選單、點選 `數位邏輯` 導向 `/digital-logic`、點選 `作業系統` 導向 `/operating-systems`，且國文/英文仍不顯示在 AppShell header；以 `npx playwright test tests/e2e/app-shell.smoke.spec.ts tests/e2e/app-shell-mobile.spec.ts` 驗證。

## 4. 文件與總驗證

- [x] 4.1 同步 `PROJECT_ARCHITECTURE.md` 的 route/module 記錄，讓文件列出 `/digital-logic`、`/operating-systems`、新 view modules、`digitalLogic`/`operatingSystems` subject keys 與計概類 header group；以人工檢查 `PROJECT_ARCHITECTURE.md` 及 `rg -n "digitalLogic|operatingSystems|digital-logic|operating-systems|計概類" PROJECT_ARCHITECTURE.md` 驗證文件已覆蓋本次架構變更。
- [x] 4.2 完成整體型別與 targeted 單元測試驗證：執行 `npm run typecheck`、`npx vitest run tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/unit/splitComputerPrinciplesRoutes.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/subjectTopicProgressStorage.spec.ts tests/component/AppShellSmoke.spec.ts tests/component/CommonSubjectSwitcher.spec.ts`，確認 Requirement: Digital logic and operating systems subject routes、Requirement: Computer principles topics are split into dedicated formal subjects、Requirement: Split subject keys preserve progress ownership、Requirement: App shell exposes primary subject routes 全部被測試覆蓋且通過。
- [x] 4.3 完成 Spectra artifact 與手動內容交接驗證：執行 `spectra validate --strict split-computer-principles-routes`，並人工確認 `getSubjectTopics('computerPrinciples')` 不含 moved topics、`getSubjectTopics('digitalLogic')` 有五個數位邏輯 topics、`getSubjectTopics('operatingSystems')` 有十個有內容的作業系統 topics，且 `cp-hardware-protection` 只保留 formal empty skeleton；若完整測試套件出現無關既有失敗，只在 apply summary 記錄，不擴大本 change 範圍。

## 5. 使用者資料回寫與標題契約同步

- [x] 5.1 回寫設計決策 Normalize professional topic titles for route context 與 Requirement: Professional route topic titles are route-scoped 到 proposal、design 與 specs，明確記錄 topic title 移除科目/章節前綴，但保留來源追溯欄位。
- [x] 5.2 回寫 `/operating-systems` 的 route-visible 規則：`cp-hardware-protection` 保留 formal empty skeleton，但在有 learner-facing content 前不顯示為獨立 section。
- [x] 5.3 同步 unit/component/E2E 測試期待值，讓標題驗證符合目前 `professionalTopics.ts` 資料，並覆蓋 OS route 排除空殼 section 的行為。
