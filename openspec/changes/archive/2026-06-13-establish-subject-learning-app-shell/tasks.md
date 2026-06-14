## 1. 專案骨架

- [x] 1.1 建立 Vue 3 + TypeScript + Vite + Tailwind + Vue Router + PWA 工具鏈，讓 `npm ci`、`npm run lint`、`npm run typecheck`、`npm run test:unit`、`npm run build`、`npm run test:e2e` 都有可執行 script；以實際執行這些 CLI 或對應初始 smoke test 驗證。
- [x] 1.2 建立倉儲衛生與架構文件契約，讓 `.gitignore` 排除 `node_modules/`、`dist/`、`build/`、`coverage/`、`test-results/`、`playwright-report/`，且 `PROJECT_ARCHITECTURE.md` 記錄 `src/app/`、`src/shared/`、`src/modules/`、tests、PWA 與 CI/CD 角色；以 `git status --short` 檢查生成目錄不進入 source changes，並以內容審查確認架構文件涵蓋新增結構。

## 2. App shell 與路由

- [x] 2.1 落實「使用日語學習同型 AppShell 與 route preload」與「使用英文 slug route 與共同科目下拉」的路由基礎，使 **App shell exposes primary subject routes** 且 **Route components are prepared and retained during the app session**：`/` 導向 `/computer-principles`，6 個英文 slug route 可 lazy-load，hover/focus/touch 可預載，已訪問 route 由 `KeepAlive` 保留；以 route config unit test、routePreload unit test、AppShell e2e navigation 驗證。
- [x] 2.2 建立 AppShell 與 RouteTabs，讓 header 顯示 `計概`、`網概`、`資管`、`程式`、共同科目控制，並滿足 **App shell is usable at 375px width**：375px viewport 無水平 page overflow、文字不重疊、主 route region 不空白；以 `tests/component/AppShellSmoke.spec.ts` 與 `tests/e2e/app-shell-mobile.spec.ts` 驗證。
- [x] 2.3 建立 CommonSubjectSwitcher 與 RouteSubMenu，讓 **Common subject control switches between English and Chinese**：預設 `英文`，選 `國文` 後導向 `/chinese` 且按鈕文字改為 `國文`，Escape 與 overlay 可關閉選單；以 component test 與 e2e 點擊流程驗證。

## 3. 科目主題頁

- [x] [P] 3.1 落實「使用 placeholder topic data 但不建立正式講義資料模型」，建立 `SubjectKey`、`SubjectTopic`、`SubjectTopicBlock` 與六科 placeholder topics，讓每科 route 都有可渲染的 topic 輸入但不包含題幹、四選項、正解或選項辨析；以 typecheck、topic data unit test 與內容審查確認資料只屬骨架範圍。
- [x] 3.2 落實「使用 SubjectTopicCard 作為共用主題互動外殼」，使 **Subject pages display topic sections**：每個 topic header 有左側書籤、右側 checkbox、置中標題，點標題展開/收合 slot 內容，空 topic list 顯示繁中空狀態且無 console error；以 `tests/component/SubjectTopicCard.spec.ts` 和每科 route smoke test 驗證。
- [x] 3.3 建立六科 route view 的未完成/已完成分區，使 **Completion state moves topics to the finished zone**：勾選 topic 後自動收合、從未完成區移到已完成區，取消勾選後回到未完成區；以 component test 與 e2e 狀態轉移驗證。
- [x] 3.4 落實「使用 localStorage 保存主題進度」，使 **Topic progress persists locally** 且 **Progress storage failure does not break subject routes**：`spectra:subject-topic-progress:v1` 儲存 `version`、`subjects`、`completedTopicIds`、`bookmarkedTopicId`、`updatedAt`，malformed JSON 讀取時回傳空進度且不刪除原資料；以 storage unit test、reload e2e、malformed localStorage e2e 驗證。
- [x] 3.5 建立閱讀位置書籤行為，使 **Bookmark records one reading position per subject**：同科新書籤覆蓋舊書籤，完成已書籤 topic 時清掉該科書籤，已完成區不顯示書籤按鈕；以 component test 與 e2e 驗證單一書籤、清除與隱藏行為。
- [x] 3.6 移除每個 topic section header 的 subtitle 顯示，使 topic header 僅顯示主題標題，`summary` 不得作為 section subtitle 出現在卡片 header；以 `tests/component/SubjectTopicCard.spec.ts` 驗證。

## 4. 手機程式範例與 PWA

- [x] [P] 4.1 落實「使用 TeachingCodeBlock 管理小螢幕 Java 範例」，使 **Teaching code block presents Java examples consistently**、**Java examples use learning-oriented comments**、**Teaching code block has safe empty and unsupported-language states**：Java snippet 顯示標題、語言、monospace code region，空 code 顯示繁中空狀態，未知語言 fallback plain text；以 `tests/component/TeachingCodeBlock.spec.ts` 驗證。
- [x] 4.2 建立 375px 小螢幕排版驗證，使 **Code examples remain readable at 375px width** 且 header/topic/code block 都不造成 page-level horizontal overflow；以 Playwright 在 375px viewport 檢查 `document.documentElement.scrollWidth <= window.innerWidth`、header 無重疊、code 長行只在 code region 內水平捲動。
- [x] 4.3 落實「使用 PWA 離線 shell 與 GitHub Pages CI/CD」中的 PWA shell，使 **PWA offline shell loads without network**：install metadata、service worker、base path 與 cached route assets 可讓曾在線開啟的 build 離線重開仍顯示 header 與 route region；以 production build、Playwright offline e2e 與 service worker smoke test 驗證。

## 5. CI/CD 與最終驗證

- [x] [P] 5.1 建立 CI workflow，使 **CI validates application quality gates** 且 **CI and CD avoid ignored generated artifacts in source commits**：pull request/push 執行 `npm ci`、lint、typecheck、unit test、build、Chromium install、e2e，失敗時上傳 Playwright diagnostics；以 workflow 內容審查與本機 `npm run test:ci` 等價流程驗證。
- [x] [P] 5.2 建立 CD workflow，使 **CD publishes staging and production to GitHub Pages** 且 **Deployment is idempotent when build output is unchanged**：`dev` 使用 `/Spectra_Fin_note/staging/` 發 staging，`main` 使用 `/Spectra_Fin_note/` 發 production，無 publish diff 時不建立 commit；以 workflow 內容審查、publish script unit test 或 dry-run 驗證。
- [x] 5.3 執行整體驗證並回寫文件，確認 `PROJECT_ARCHITECTURE.md`、spec 行為與實作一致，且 `npm run lint`、`npm run typecheck`、`npm run test:unit`、`npm run build`、`npm run test:e2e`、`spectra analyze establish-subject-learning-app-shell --json`、`spectra validate establish-subject-learning-app-shell` 均通過；若 build chunk 超過 500 KB，需在同一任務處理或於 design 記錄理由。
