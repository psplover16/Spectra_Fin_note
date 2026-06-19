## Why

computer-principles route 目前承載基本計概、數位邏輯與作業系統，單一路由過長，使用者難以快速切換學習範圍。現在要把已成形的數位邏輯與作業系統內容拆成獨立路由，讓科目瀏覽與進度歸屬更清楚。

## What Changes

- 新增 /digital-logic 與 /operating-systems 兩個專業科目路由。
- 將基本邏輯到組合與循序電路歸屬到數位邏輯 subject key。
- 將作業系統正式 topic 歸屬到作業系統 subject key；空殼 `cp-hardware-protection` 保留 formal ownership，但不顯示在 `/operating-systems` route learner-facing 清單。
- 將專業 topic 顯示標題調整為 route-scoped title，移除科目名稱與章節序號前綴；`sourceFiles`、`sourceSummary` 與 lessonArticle `sourceSection` 保留來源追溯。
- Header 新增計概類下拉，包含計概、網概、數位邏輯、作業系統，做法沿用國文/英文下拉選單。

## Non-Goals

- 不重寫教材內容、不新增 raw Markdown renderer。
- 不修改 IPC、storage schema、後端或外部依賴。
- 不處理共同科目內容與題庫功能。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `professional-subject-routing`: 新增數位邏輯與作業系統專業科目路由。
- `professional-topic-content`: 調整計概、數位邏輯、作業系統 topic 的正式歸屬。
- `app-shell`: Header 改以計概類下拉呈現四個相關科目。

## Impact

- Affected specs: professional-subject-routing, professional-topic-content, app-shell
- Affected code:
  - New: src/modules/digitalLogic/views/DigitalLogicView.vue, src/modules/operatingSystems/views/OperatingSystemsView.vue, src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts, src/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue, tests/unit/splitComputerPrinciplesRoutes.spec.ts, tests/component/ComputerFoundationSubjectSwitcher.spec.ts
  - Modified: PROJECT_ARCHITECTURE.md, src/app/router.ts, src/app/routePreload.ts, src/shared/components/RouteTabs.vue, src/shared/components/RouteSubMenu.vue, src/modules/commonSubjects/components/CommonSubjectSwitcher.vue, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts, src/modules/subjectTopics/data/professionalTopics.ts, src/modules/subjectTopics/data/placeholderTopics.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/algorithmsRouteWorkflow.spec.ts, tests/unit/informationManagementRouteWorkflow.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts, tests/e2e/app-shell.smoke.spec.ts
  - Removed: (none)
