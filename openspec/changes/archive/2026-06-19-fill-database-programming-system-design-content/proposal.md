## Why

使用者已整理 database、programming、system design 共 18 份 Markdown，但目前正式路由尚未承接這些可讀教材；系統分析與設計也仍混在 programming 內，導覽上沒有獨立入口。現在需要一次把三個內容批次匯入正式學習路由，並調整導覽讓考科分類更貼近實際閱讀方式。

## What Changes

- 將 `_private/MD/資料庫/` 6 份 Markdown 依自然檔名順序匯入 `/database`，新增 topics 排在既有 database topics 前方。
- 將 `_private/MD/程式設計/` 7 份 Markdown 依自然檔名順序匯入 `/programming`，新增 topics 排在既有 programming topics 前方。
- 新增 `/system-design` 路由、`systemDesign` subject key 與 `系統設計` 導覽按鈕，匯入 `_private/MD/系統分析與設計/` 5 份 Markdown。
- 英文、國文 direct route 保留，但從可見導覽按鈕隱藏。
- 所有匯入 topics 使用既有 `lessonArticle` 呈現，保留來源編排，只做 renderer 必要正規化與客觀錯誤修正。

## Non-Goals

- 不重寫、擴寫或任意刪改 Markdown 內容。
- 不移除 `/english`、`/chinese` direct route 與 subject keys。
- 不新增題庫、測驗或後端同步功能。
- 不處理既有完整 unit suite 中與本次範圍無關的 stale expectations。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `app-shell`: 新增 system design primary route/tab，並隱藏 English/Chinese visible navigation while preserving direct routes.
- `professional-subject-routing`: Database、Programming、System Design routes expose imported Markdown-backed topics in source order.
- `professional-topic-content`: Imported Database、Programming、System Design topics preserve exact Markdown source traceability and lessonArticle content shape.

## Impact

- Affected specs: app-shell, professional-subject-routing, professional-topic-content
- Affected code:
  - New:
    - src/modules/systemDesign/views/SystemDesignView.vue
  - Modified:
    - src/app/router.ts
    - src/app/routePreload.ts
    - src/shared/components/RouteTabs.vue
    - src/modules/commonSubjects/components/CommonSubjectSwitcher.vue
    - src/modules/commonSubjects/config/commonSubjectOptions.ts
    - src/modules/subjectTopics/types/subjectTopic.ts
    - src/modules/subjectTopics/data/professionalTopics.ts
    - tests/unit/routeConfig.spec.ts
    - tests/unit/subjectTopics.spec.ts
    - tests/unit/professionalTopics.spec.ts
    - tests/component/SubjectRoutesSmoke.spec.ts
    - tests/component/CommonSubjectSwitcher.spec.ts
  - Removed: none
