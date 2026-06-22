## Why

使用者需要把既有資料庫 HTML 講義接進 PWA，並讓新內容從 header 的資料庫群組快速進入。現在做是因為 `_private/資料庫` 已有 13 個 HTML 檔，適合先以原樣搬移方式保留版面與樣式，避免重新轉換內容造成失真。

## What Changes

- 新增資料庫2學習入口，穩定路由為 /database-v2，顯示名稱為「資料庫2」。
- Header 的「資料庫」改為下拉選單，預設顯示與導向「資料庫」，選單包含「資料庫」與「資料庫2」。
- 搬移 `_private/資料庫` 的 13 個 HTML 檔為 app 可開啟頁面，原內容與樣式維持不變；左上標題改為返回按鈕，返回上一個路由。
- 資料庫2列表沿用資料庫頁的標題列外觀、左右 icon 與功能；點擊標題中間改為開啟對應 HTML 頁。
- 資料庫2的書籤與完成狀態使用獨立 `databaseV2` 進度命名空間，不混用既有 `database` 進度。
- HTML 為靜態唯讀學習資料，隨 app 打包；不做同步與衝突處理。

## Non-Goals

- 不重寫、摘要、轉換 HTML 教學內容為 lessonArticle blocks。
- 不移除或改變既有 /database 的內容與進度資料。
- 不新增後端、帳號、遙測或遠端同步。
- 不補做近 8 年考古題整理；本次範圍僅涵蓋既有資料庫 HTML 講義。

## Capabilities

### New Capabilities

- `database-v2-html-pages`: 資料庫2路由、HTML 講義列表、HTML 詳細頁與返回行為。

### Modified Capabilities

- `app-shell`: Header 資料庫入口改為含「資料庫」與「資料庫2」的下拉選單，預設為資料庫。
- `professional-subject-routing`: 專業科目路由新增 /database-v2 並參與 route registry/preload。

## Impact

- Affected specs: database-v2-html-pages, app-shell, professional-subject-routing
- Affected code:
  - New: src/modules/databaseV2/views/DatabaseV2View.vue, src/modules/databaseV2/data/databaseV2Pages.ts, src/modules/databaseSubjects/components/DatabaseSubjectSwitcher.vue, src/modules/databaseSubjects/config/databaseSubjectOptions.ts, public/database-v2/
  - Modified: src/shared/components/RouteTabs.vue, src/app/router.ts, src/app/routePreload.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts, src/styles/main.css, PROJECT_ARCHITECTURE.md, tests/unit/routeConfig.spec.ts, tests/unit/routePreload.spec.ts, tests/unit/subjectTopicProgressStorage.spec.ts, tests/component/AppShellSmoke.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts, tests/e2e/app-shell.smoke.spec.ts, tests/e2e/app-shell-mobile.spec.ts
  - Removed: none
