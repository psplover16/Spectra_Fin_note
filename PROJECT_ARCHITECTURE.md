# Project Architecture

本文件是活文件；`src/` 結構變動時，必須在同一個 change 內同步更新。

## Runtime Structure

- `src/app/`
  - 應用骨幹，包含 Vue 入口、AppShell、router 與 route preload registry。
  - 只負責整體外殼、route region、PWA 啟動鉤子與主要 route 載入策略。
  - `router.ts` 註冊主要科目路由；專業科目包含 `/computer-principles`、`/computer-principles-v2`、`/networking`、`/networking-v2`、`/digital-logic`、`/operating-systems`、`/information-management`、`/programming`、`/database`、`/algorithms`、`/system-design`。
  - `routePreload.ts` 的 route preload registry 必須包含所有 primary route paths，讓 hover、focus、touch 與 idle preload 可載入對應 route component。
- `src/shared/`
  - 跨模組共用的純 UI 元件與工具。
  - 共用元件只放視覺與互動確實相同的行為，例如 `RouteSubMenu`、`RouteTabs` 與 `TeachingCodeBlock`。
  - `TeachingCodeBlock` 統一管理教學用程式碼區塊、語言標籤、空狀態與手機寬度下的 code region 捲動。
- `src/modules/`
  - 依功能或科目分組的模組。
  - 科目頁放在各自模組，跨科目主題卡與進度儲存放在 `src/modules/subjectTopics/`。
  - `src/modules/computerFoundationSubjects/` 管理 AppShell header 的計概類群組選項與 switcher；目前包含 `計概`、`計概(v2)`、`網概`、`網路概論(v2)`、`數位邏輯`、`作業系統`。
  - `src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue` 擁有 `/computer-principles-v2` route view，使用 `SubjectTopicPage`、`computerPrinciplesV2` subject key 與標題 `計概(v2)`。
  - `src/modules/networkingV2/views/NetworkingV2View.vue` 擁有 `/networking-v2` route view，使用 `SubjectTopicPage`、`networkingV2` subject key 與標題 `網路概論(v2)`。
  - `src/modules/digitalLogic/views/DigitalLogicView.vue` 擁有數位邏輯 route view，使用 `SubjectTopicPage` 與 `digitalLogic` subject key。
  - `src/modules/operatingSystems/views/OperatingSystemsView.vue` 擁有作業系統 route view，使用 `SubjectTopicPage` 與 `operatingSystems` subject key。
  - `src/modules/database/views/DatabaseView.vue` 擁有資料庫 route view，使用 `SubjectTopicPage` 與 `database` subject key。
  - `src/modules/algorithms/views/AlgorithmsView.vue` 擁有演算法 route view，使用 `SubjectTopicPage` 與 `algorithms` subject key。
  - `src/modules/systemDesign/views/SystemDesignView.vue` 擁有系統設計 route view，使用 `SubjectTopicPage` 與 `systemDesign` subject key。
  - `src/modules/commonSubjects/` 管理共同科目選項與 `CommonSubjectSwitcher`；共同科目 route 仍由 `src/app/router.ts` 統一註冊。
  - `src/modules/subjectTopics/` 管理：
    - `types/subjectTopic.ts`：`SubjectKey`、`SubjectTopic`、`SubjectTopicBlock`；`SubjectKey` 包含 `computerPrinciples`、`computerPrinciplesV2`、`networking`、`networkingV2`、`digitalLogic`、`operatingSystems`、`informationManagement`、`programming`、`database`、`algorithms`、`systemDesign`、`english` 與 `chinese`。
    - `data/placeholderTopics.ts`：各科 placeholder topics；不得放正式題庫欄位。已經有正式 professional content 的 route 可以保留空 placeholder 陣列，`computerPrinciplesV2` 與 `networkingV2` 預設都是空 placeholder namespace。
    - `data/professionalTopics.ts`：正式專業 topic data 的靜態 bundle 入口；目前專業 topic 只保留 route、topic id、title、sourceFiles、sourceSummary 與 source section skeleton。
      - `data/computerPrinciplesV2Topics.ts` 匯出 `computerPrinciplesV2Topics`，承接 `_private/MD/計算機概論/01_架構與計算理論.md` 到 `13_檢查碼-漢明碼與漢明距.md` 的 13 篇靜態 `lessonArticle` topics；`sourceBatch` 固定為 `computer-principles-v2-route`，`00_目錄.md` 只作 title/order manifest，不作 route-visible topic 或 source file。
      - `data/networkingV2Topics.ts` 匯出 `networkingV2Topics`，承接 `_private/MD/網路概論v2/` 內依檔名排序的 12 篇靜態 `lessonArticle` topics；`sourceBatch` 固定為 `networking-v2-route`，topic title 會清除檔名章節前綴，只保留教材標題。
      - 專業科目 route（`computerPrinciples`、`computerPrinciplesV2`、`networking`、`networkingV2`、`digitalLogic`、`operatingSystems`、`database`、`informationManagement`、`programming`、`algorithms`、`systemDesign`）正式顯示內容必須是單一 `lessonArticle` block；舊的 `sourceNote`、`examOutline`、`memoryPoints`、`understanding`、`termList`、`workedExample`、`pitfall`、`complexityTable`、`teachingCode` 不得作為 professional topic 的 top-level displayed blocks。
      - 數位邏輯與作業系統 topic id 仍保留原 `cp-*` id，但 ownership 由 `subjectKey` 分別歸屬 `digitalLogic` 與 `operatingSystems`，不得在 `computerPrinciples` 重複顯示。
      - `summary`、`examOutline`、`memoryPoints`、`understandingNotes`、`terms`、`verifiedBy`、`verifiedAt` 與 `verifierSummary` 在 skeleton 狀態不可放入 AI 生成正文或驗證摘要。
      - skeleton 狀態的 `lessonArticle.lead` 與 `lessonArticle.sections` 必須是空陣列；未來由使用者提供 section 標題與內容後，再把整理後內容填入對應 topic 的 `lessonArticle.sections`。
      - 演算法 skeleton 保留排序基準、Bubble/Selection/Insertion/Merge/Quick/Heap/Shell，以及 Fibonacci、GCD、Binary Search 等 topic id 與來源定位，但不保留複雜度表、Java 範例或教學正文。
    - `data/subjectTopics.ts`：route view 的資料入口，只顯示正式 `professionalTopics.ts` 中具有 learner-facing content 的 topics。
    - `SubjectTopicBlock` 支援結構化內容 block union，包含 `lessonArticle` 與既有 legacy block；新匯入的專業科目內容只能用 `lessonArticle` 作為 displayed block。
    - 專業 topic 的 source traceability 由 `sourceFiles`、`sourceSummary`、`lessonArticle.sourceFiles` 與 `lessonArticle.sourceSection` 維護；教材正文只能在人工提供內容後放入 `lessonArticle.sections`。
    - `components/SubjectTopicCard.vue`：書籤、完成 checkbox、標題展開/收合與 detail slot。
    - `components/SubjectTopicPage.vue`：未完成/已完成分區、localStorage 進度讀寫與 topic block 渲染。
    - `storage/subjectTopicProgressStorage.ts`：`spectra:subject-topic-progress:v1` 的版本化 localStorage adapter。
    - 舊 localStorage progress 缺少 `computerPrinciplesV2`、`networkingV2`、`database`、`algorithms`、`digitalLogic` 或 `operatingSystems` 時，normalize 會補齊空進度，不會清除既有科目的完成與書籤資料。
    - legacy `computerPrinciples` progress 若包含已切出的數位邏輯或作業系統 topic id，normalize 會把完成項目與書籤分流到 `digitalLogic` 或 `operatingSystems`，storage key 與 version 仍維持 `spectra:subject-topic-progress:v1` / v1。

## Content Production Workflow

- `_TMP/` 是內容產製邊界，不是 runtime data source；正式 app 只讀 `src/modules/subjectTopics/data/professionalTopics.ts`。
- `_TMP/source-logs/` 保存每個允許來源的完整盤點結果；不得讀取或混入個人筆記、受限 `done` 資料夾或第一批排除的 `_private/程式語言_all.pdf`。
- `_TMP/manifests/` 保存 source manifest 與演算法 inventory；manifest topic 狀態只使用 `pending-draft`、`drafted`、`verified`、`blocked`、`imported`。
- `_TMP/task-breakdowns/` 保存副代理任務拆分；生成副代理一次只處理單一 topic，verifier 副代理一次只驗證單一草稿。
- `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 是跨科目總控追蹤表；每列包含 route、subject、manifest id、topic id、source file、status、draft path、generator task、verifier task、import task 與 notes。
- `_TMP/reviews/` 保存內容 review 與 import summary；`_TMP/reports/` 保存 term audit、code-comment audit 與 production-chain review。
- `_private/TMP/<route>/` 保存 route-scoped source inventory、topic prompt、content writer draft、verifier output、manual review 與 import readiness；這些檔案是歷史產製證據，不是 runtime data source。
- 每個 route 需有 `待生成主題清單_時間序列.md` 追蹤 source file、source section、topic id、prompt path、draft path、verified path、import target、status 與 verifier result。
- 目前正式 app data 不再從 `_private/TMP/<route>/*.verified.md` 匯入正文；主代理只依使用者提供的 section 標題與內容，整理後填入對應 skeleton topic。

## Test Structure

- `tests/unit/`
  - 純函式、資料 shape、設定、workflow 內容、產製報告與儲存行為的單元測試。
- `tests/component/`
  - Vue 元件互動與渲染 smoke tests。
- `tests/e2e/`
  - Playwright 使用者流程、375px 版面、離線 shell 與部署關鍵路徑。
  - PWA 離線測試只在 production preview 模式執行；一般 dev server 模式會 skip。

## PWA

- PWA 設定由 `vite.config.ts` 管理。
- App shell 必須可在曾經快取後離線開啟。
- Service worker 不得依賴外部 API 才能完成首屏渲染。
- `tests/e2e/pwa-offline-shell.spec.ts` 驗證 manifest metadata、service worker ready 與離線 reload。

## CI/CD

- CI workflow 會執行 install、lint、typecheck、unit test、build 與 Playwright e2e。
- CD workflow 會將 `dev` 發布到 staging，將 `main` 發布到 production。
- GitHub Pages base path 使用 `/Spectra_Fin_note/` 與 `/Spectra_Fin_note/staging/`。
- `.github/workflows/ci.yml` 不提交 build output，只從 source 重新安裝與驗證。
- `.github/workflows/cd.yml` 使用 `scripts/publishPages.mjs` 發布 `dist/` 到 `gh-pages`；publish script 在無 diff 時跳過 commit。

## Generated Artifacts

以下目錄不得進入 source commits：

- `node_modules/`
- `dist/`
- `build/`
- `coverage/`
- `test-results/`
- `playwright-report/`
