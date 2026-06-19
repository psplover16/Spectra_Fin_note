## Why

使用者已整理 _private/MD/計算機概論/ 的 13 篇基本計概 Markdown，需要一個獨立的 計概(v2) route 承接新版教材，避免和現有 計算機原理 route 混在一起。現在先建立規格，讓後續匯入能保留 MD 編排、順序與來源追溯。

## What Changes

- 新增 /computer-principles-v2 route，頁面標題為 計概(v2)，使用 computerPrinciplesV2 subject key 與獨立進度 namespace。
- Header 計概類選單新增 計概(v2) 選項。
- 匯入 01 到 13 的計算機概論 MD；00_目錄.md 不成為 topic，只作為排序與 topic title 對照來源。
- 每個 MD 對應一個 lessonArticle topic，topic title 採 00_目錄.md 的篇名欄，內容盡量保留原 MD 編排。
- 教材為本機 bundled static data，無同步策略與衝突處理需求；本次不擴充近 8 年考古題範圍。

## Non-Goals

- 不新增 raw Markdown renderer。
- 不改寫既有 /computer-principles 教材內容或進度資料。
- 不匯入 00_目錄.md 為 learner-facing section。
- 不新增外部依賴、後端、IPC、IndexedDB 或網路同步。

## Capabilities

### New Capabilities

- `computer-principles-v2-route`: 定義 計概(v2) route、subject key、13 篇 MD 匯入與 title 對照規則。

### Modified Capabilities

- `app-shell`: Header 計概類選單新增 計概(v2) route 選項。
- `professional-subject-routing`: 專業科目路由新增 /computer-principles-v2。
- `professional-topic-content`: formal topic data 新增 computerPrinciplesV2 內容集合與來源追溯。

## Impact

- Affected specs: computer-principles-v2-route, app-shell, professional-subject-routing, professional-topic-content
- Affected code:
  - New: src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue, tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - Modified: PROJECT_ARCHITECTURE.md, src/app/router.ts, src/app/routePreload.ts, src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts, src/modules/subjectTopics/data/professionalTopics.ts, src/modules/subjectTopics/data/placeholderTopics.ts, tests/unit/routeConfig.spec.ts, tests/unit/routePreload.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopicProgressStorage.spec.ts, tests/component/ComputerFoundationSubjectSwitcher.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts, tests/e2e/app-shell.smoke.spec.ts
  - Removed: (none)
