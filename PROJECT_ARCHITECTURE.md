# Project Architecture

本文件是活文件；`src/` 結構變動時，必須在同一個 change 內同步更新。

## Runtime Structure

- `src/app/`
  - 應用骨幹，包含 Vue 入口、AppShell、router 與 route preload registry。
  - 只負責整體外殼、route region、PWA 啟動鉤子與主要 route 載入策略。
- `src/shared/`
  - 跨模組共用的純 UI 元件與工具。
  - 共用元件只放視覺與互動確實相同的行為，例如 `RouteSubMenu`、`RouteTabs` 與 `TeachingCodeBlock`。
  - `TeachingCodeBlock` 統一管理教學用程式碼區塊、語言標籤、空狀態與手機寬度下的 code region 捲動。
- `src/modules/`
  - 依功能或科目分組的模組。
  - 科目頁放在各自模組，跨科目主題卡與進度儲存放在 `src/modules/subjectTopics/`。
  - `src/modules/commonSubjects/` 管理共同科目選項與 `CommonSubjectSwitcher`；共同科目 route 仍由 `src/app/router.ts` 統一註冊。
  - `src/modules/subjectTopics/` 管理：
    - `types/subjectTopic.ts`：`SubjectKey`、`SubjectTopic`、`SubjectTopicBlock`。
    - `data/placeholderTopics.ts`：六科 placeholder topics；不得放正式題庫欄位。
    - `components/SubjectTopicCard.vue`：書籤、完成 checkbox、標題展開/收合與 detail slot。
    - `components/SubjectTopicPage.vue`：未完成/已完成分區、localStorage 進度讀寫與 topic block 渲染。
    - `storage/subjectTopicProgressStorage.ts`：`spectra:subject-topic-progress:v1` 的版本化 localStorage adapter。

## Test Structure

- `tests/unit/`
  - 純函式、資料 shape、設定、workflow 內容與儲存行為的單元測試。
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
