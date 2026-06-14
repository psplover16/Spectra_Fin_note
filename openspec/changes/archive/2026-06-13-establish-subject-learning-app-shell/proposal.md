## Why

使用者需要先有一個可離線使用、手機優先、風格對齊「日語學習」的國營資訊考試 PWA 外殼，後續講義內容才能穩定放入各科路由。現在本專案尚未建立前端骨架，應先確立 route、header、主題卡互動、PWA 與 CI/CD 的共同基礎。

## What Changes

- 建立 Vue 3 + TypeScript + Vite + Tailwind 前端骨架與 AppShell。
- 新增 6 個科目 route：計概、網概、資管、程式、英文、國文；URL 使用英文 slug。
- Header 顯示計概、網概、資管、程式與共同科目下拉；共同科目預設英文，切換國文後按鈕文字同步更新。
- 建立共用主題卡：每科多主題、左側閱讀位置書籤、右側已學完 checkbox、標題展開詳細內容；勾選後移至已完成區並收合。
- 建立 375px 手機寬度驗收、TeachingCodeBlock、PWA 離線 shell 與日語學習同型 CI/CD。
- 主題進度使用 localStorage 儲存；純本機無同步，衝突以最後一次本機寫入為準。

## Non-Goals

- 不撰寫正式講義內容，不以近 8 年考古題建完整內容資料。
- 不新增題庫、測驗流程、帳號、伺服器、analytics 或外部 API。
- 不把共同科目做成專業科目同等深度；本次只建立骨架與 placeholder topics。

## Capabilities

### New Capabilities

- `app-shell`: AppShell、科目路由、header、共同科目下拉、route preload 與 PWA 離線 shell。
- `subject-topic-page`: 科目主題頁的主題卡、閱讀位置書籤、完成 checkbox、完成區與進度持久化。
- `mobile-code-example`: 375px 小螢幕可讀的 Java 教學程式碼範例呈現。
- `ci-cd-pipeline`: 與日語學習一致的 CI 驗證與 GitHub Pages staging/production 發布。

### Modified Capabilities

(none)

## Impact

- Affected specs: app-shell, subject-topic-page, mobile-code-example, ci-cd-pipeline
- Affected code:
  - New: package.json, package-lock.json, index.html, vite.config.ts, tsconfig.json, tsconfig.app.json, tsconfig.node.json, tailwind.config.ts, postcss.config.js, eslint.config.js, playwright.config.ts, vitest.config.ts, PROJECT_ARCHITECTURE.md, .github/workflows/ci.yml, .github/workflows/cd.yml, scripts/publishPages.mjs, src/env.d.ts, src/app/main.ts, src/app/router.ts, src/app/routePreload.ts, src/app/AppShell.vue, src/styles/main.css, src/shared/components/RouteTabs.vue, src/shared/components/RouteSubMenu.vue, src/shared/components/TeachingCodeBlock.vue, src/modules/commonSubjects/components/CommonSubjectSwitcher.vue, src/modules/subjectTopics/components/SubjectTopicCard.vue, src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/data/placeholderTopics.ts, src/modules/computerPrinciples/views/ComputerPrinciplesView.vue, src/modules/networking/views/NetworkingView.vue, src/modules/informationManagement/views/InformationManagementView.vue, src/modules/programming/views/ProgrammingView.vue, src/modules/english/views/EnglishView.vue, src/modules/chinese/views/ChineseView.vue, tests/component/AppShellSmoke.spec.ts, tests/component/RouteOwnership.spec.ts, tests/component/SubjectTopicCard.spec.ts, tests/component/TeachingCodeBlock.spec.ts, tests/e2e/app-shell-mobile.spec.ts, tests/e2e/pwa-offline-shell.spec.ts
  - Modified: README.md, .gitignore
  - Removed: none
