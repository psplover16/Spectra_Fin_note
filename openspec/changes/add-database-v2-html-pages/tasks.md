## 1. 測試契約先行

- [x] [P] 1.1 為 `Database v2 lists imported HTML lessons` 與 `Drive the list from a typed HTML page manifest` 建立單元測試，驗證 `databaseV2Pages` 有 13 筆、順序符合來源檔名、顯示標題已移除 `國考資料庫_<sequence>_` 前綴、每筆 `href` 指向 `database-v2/<original filename>`；以 `npm run test:unit -- tests/unit/databaseV2Pages.spec.ts` 驗證測試會保護 manifest 契約。
- [x] [P] 1.2 為 `Database v2 subject route` 與 `Store Database v2 progress under databaseV2` 補單元測試，驗證 `/database-v2` 存在於 route config 與 preload registry、舊 progress state normalize 後含空的 `databaseV2`，且既有 `database` 進度不被遷移；以 `npm run test:unit -- tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/unit/subjectTopicProgressStorage.spec.ts` 驗證。
- [x] [P] 1.3 為 `App shell exposes primary subject routes` 與 `Add a Database subject switcher instead of a new top-level tab` 補 component 與 e2e 覆蓋，驗證 Header 預設顯示「資料庫2」、資料庫選單含「資料庫」與「資料庫2」、選項分別導向 `/database` 與 `/database-v2`；以 `npm run test:unit -- tests/component/AppShellSmoke.spec.ts` 與 `npm run test:e2e -- tests/e2e/app-shell.smoke.spec.ts tests/e2e/app-shell-mobile.spec.ts` 驗證。

## 2. 靜態 HTML 與列表資料

- [x] 2.1 依 `Use static copied HTML pages for lesson detail` 複製 `_private/資料庫` 的 13 個 HTML 檔到 `public/database-v2/`，每頁保留原 learner-facing 內容、style、表格、圖示與默寫模式，僅將 toolbar 左側 title label 改成返回按鈕；以內容審查確認 13 頁除返回控制外無教學內容改寫，並以 `rg \"history.back|/database-v2\" public/database-v2` 驗證返回邏輯存在。
- [x] 2.2 實作 `Drive the list from a typed HTML page manifest` 的 `databaseV2Pages` 資料契約，提供 `id`、`sourceFilename`、`title`、`href`，讓 `/database-v2` 可依 manifest 呈現 13 筆資料；以 `npm run test:unit -- tests/unit/databaseV2Pages.spec.ts` 驗證排序、標題與靜態頁對應。
- [x] 2.3 完成 `Copied HTML pages preserve layout with a return control` 的瀏覽器驗證：從 `/database-v2` 開啟 `國考資料庫_01_ANSI-SPARC三層架構.html`，確認原 typography、colors、tables、diagrams、recitation toggle 可用，按返回後回到 `/database-v2`；以 Playwright e2e 或手動驗證紀錄確認。

## 3. 路由、Header 與資料庫2列表

- [x] 3.1 實作 `Store Database v2 progress under databaseV2`，讓 `SubjectKey`、empty progress state、normalize、bookmark、completion 流程都支援 `databaseV2`，且不污染既有 `database`；以 `npm run test:unit -- tests/unit/subjectTopicProgressStorage.spec.ts` 驗證。
- [x] 3.2 實作 `Add a Database subject switcher instead of a new top-level tab`，讓 Header 使用資料庫群組控制，預設 option 是 `/database-v2`，選單互動沿用 `RouteSubMenu` 的 overlay、Escape、preload 與 mobile 行為；以 `npm run test:unit -- tests/component/AppShellSmoke.spec.ts` 驗證。
- [x] 3.3 實作 `Database v2 subject route`，將 `/database-v2` 加入 Vue Router、`PrimaryRoutePath` 與 route preload registry，並保證 `/database` 仍顯示既有資料庫頁；以 `npm run test:unit -- tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/component/SubjectRoutesSmoke.spec.ts` 驗證。
- [x] 3.4 實作 `Database v2 list rows preserve topic controls` 的 `DatabaseV2View.vue`，每列具左側 bookmark、中央 title、右側 completion，bookmark/completion 寫入 `databaseV2`，中央 title 開啟對應 static HTML 且不展開 inline detail；以 `npm run test:unit -- tests/component/SubjectRoutesSmoke.spec.ts` 與 `npm run test:e2e -- tests/e2e/professional-routes-interaction.spec.ts` 或新增 database v2 e2e 測試驗證。

## 4. 文件、建置與最終驗證

- [x] 4.1 更新 `PROJECT_ARCHITECTURE.md`，使架構文件描述 `/database-v2`、`DatabaseSubjectSwitcher`、`databaseV2Pages`、`databaseV2` progress namespace 與 static HTML asset ownership；以 `rg \"database-v2|DatabaseSubjectSwitcher|databaseV2\" PROJECT_ARCHITECTURE.md` 驗證文件包含新邊界。
- [x] 4.2 執行整體品質驗證，確認 app-shell、database v2、copied HTML 與 progress 行為都滿足 specs；以 `npm run lint`、`npm run typecheck`、`npm run test:unit`、`npm run build`、`npm run test:e2e -- tests/e2e/app-shell.smoke.spec.ts tests/e2e/app-shell-mobile.spec.ts` 驗證，並在手機寬度或模擬器離線狀態手動確認 `/database-v2` 列表與已開啟過的 static HTML 頁可用。
