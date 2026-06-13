# Project Architecture

本文件是活文件；`src/` 結構變動時，必須在同一個 change 內同步更新。

## Runtime Structure

- `src/app/`
  - 應用骨幹，包含 Vue 入口、AppShell、router 與 route preload registry。
  - 只負責整體外殼、route region、PWA 啟動鉤子與主要 route 載入策略。
  - `router.ts` 註冊主要科目路由；專業科目包含 `/computer-principles`、`/networking`、`/information-management`、`/programming`、`/database`、`/algorithms`。
  - `routePreload.ts` 的 route preload registry 必須包含 `/database` 與 `/algorithms`，讓 hover、focus、touch 與 idle preload 可載入對應 route component。
- `src/shared/`
  - 跨模組共用的純 UI 元件與工具。
  - 共用元件只放視覺與互動確實相同的行為，例如 `RouteSubMenu`、`RouteTabs` 與 `TeachingCodeBlock`。
  - `TeachingCodeBlock` 統一管理教學用程式碼區塊、語言標籤、空狀態與手機寬度下的 code region 捲動。
- `src/modules/`
  - 依功能或科目分組的模組。
  - 科目頁放在各自模組，跨科目主題卡與進度儲存放在 `src/modules/subjectTopics/`。
  - `src/modules/database/views/DatabaseView.vue` 擁有資料庫 route view，使用 `SubjectTopicPage` 與 `database` subject key。
  - `src/modules/algorithms/views/AlgorithmsView.vue` 擁有演算法 route view，使用 `SubjectTopicPage` 與 `algorithms` subject key。
  - `src/modules/commonSubjects/` 管理共同科目選項與 `CommonSubjectSwitcher`；共同科目 route 仍由 `src/app/router.ts` 統一註冊。
  - `src/modules/subjectTopics/` 管理：
    - `types/subjectTopic.ts`：`SubjectKey`、`SubjectTopic`、`SubjectTopicBlock`；`SubjectKey` 包含 `database` 與 `algorithms`。
    - `data/placeholderTopics.ts`：八科 placeholder topics；不得放正式題庫欄位。
    - `data/professionalTopics.ts`：正式專業 topic data 的靜態 bundle 入口；正式 topic 需保留 `sourceFiles`、`sourceSummary`、`examOutline`、`memoryPoints`、`understandingNotes` 與中英專有名詞。
      - 已匯入 topic 必須保留 `verifiedBy`、`verifiedAt` 或 `verifierSummary`，讓正式資料可追回 `_TMP` verified draft。
      - 演算法正式 topic 包含排序基準、Bubble/Selection/Insertion/Merge/Quick/Heap/Shell，以及 Fibonacci、GCD、Binary Search；Shell Sort 第一批只放非遞迴主版本。
    - `data/subjectTopics.ts`：route view 的資料入口，合併正式 `professionalTopics.ts` 與尚未替換的 placeholder topics。
    - `SubjectTopicBlock` 支援結構化內容 block union，包含 `termList`、`complexityTable`、`sourceNote`、`examOutline`、`memoryPoints`、`understanding`、`examFocus`、`workedExample`、`pitfall`、`paragraph` 與 `teachingCode`。
    - 專業 topic 的 source traceability 由 `sourceFiles`、`sourceSummary` 與 `sourceNote` block 維護；演算法複雜度資料由 `complexityTable` row 描述。
    - `components/SubjectTopicCard.vue`：書籤、完成 checkbox、標題展開/收合與 detail slot。
    - `components/SubjectTopicPage.vue`：未完成/已完成分區、localStorage 進度讀寫與 topic block 渲染。
    - `storage/subjectTopicProgressStorage.ts`：`spectra:subject-topic-progress:v1` 的版本化 localStorage adapter。
    - 舊 localStorage progress 缺少 `database` 或 `algorithms` 時，normalize 會補齊空進度，不會清除既有科目的完成與書籤資料。

## Content Production Workflow

- `_TMP/` 是內容產製邊界，不是 runtime data source；正式 app 只讀 `src/modules/subjectTopics/data/professionalTopics.ts`。
- `_TMP/source-logs/` 保存每個允許來源的完整盤點結果；不得讀取或混入個人筆記、受限 `done` 資料夾或第一批排除的 `_private/程式語言_all.pdf`。
- `_TMP/manifests/` 保存 source manifest 與演算法 inventory；manifest topic 狀態只使用 `pending-draft`、`drafted`、`verified`、`blocked`、`imported`。
- `_TMP/task-breakdowns/` 保存副代理任務拆分；生成副代理一次只處理單一 topic，verifier 副代理一次只驗證單一草稿。
- `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 是跨科目總控追蹤表；每列包含 route、subject、manifest id、topic id、source file、status、draft path、generator task、verifier task、import task 與 notes。
- `_TMP/reviews/` 保存內容 review 與 import summary；`_TMP/reports/` 保存 term audit、code-comment audit 與 production-chain review。
- 主代理只把 `status: verified` 且 verifier 結果通過的 `_TMP` 草稿匯入正式 app data；`draft` 與 `blocked` 不能替換 placeholder。

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
