## Why

使用者已整理 `_private/MD/網路概論v2/` 的 12 篇網路概論 Markdown，需要獨立的 `網路概論(v2)` route 承接新版教材，避免和既有 `/networking` 內容、進度與章節所有權混在一起。現在先建立規格，讓後續匯入能保留原 MD 編排、檔名順序與來源追溯。

## What Changes

- 新增 `/networking-v2` route，頁面標題為 `網路概論(v2)`，使用獨立 `networkingV2` subject key 與進度 namespace。
- Header 的計概類選單新增 `網路概論(v2)` 選項。
- 匯入 `_private/MD/網路概論v2/` 內全部 12 篇 Markdown；每篇對應一個 learner-facing topic，順序依檔名章節序。
- topic title 採各 MD 主題名稱，移除 `網路概論_1_`、`網路概論_2_`、`網路概論_2下_` 等序列前綴。
- 內容使用既有 `lessonArticle` block 與 `SubjectTopicPage` 樣式，盡量保留來源段落、清單、表格與小節編排。
- 教材為 bundled static data；無同步策略與衝突處理需求。本次不擴充近 8 年考古題與測驗題庫，只涵蓋網路概論教學文章匯入。

## Non-Goals

- 不修改既有 `/networking` route 內容或進度資料。
- 不新增 raw Markdown renderer、外部依賴、後端、IPC、IndexedDB 或網路同步。
- 不任意新增、刪除、改寫來源教材內容；必要轉換只為符合既有資料結構。
- 不新增題庫、選擇題解析或近 8 年考古題整理。

## Capabilities

### New Capabilities

- `networking-v2-route`: 定義 `網路概論(v2)` route、`networkingV2` subject key、12 篇 MD 匯入、topic title 清理與來源順序規則。

### Modified Capabilities

- `app-shell`: Header 計概類選單新增 `網路概論(v2)` route 選項。
- `professional-subject-routing`: 專業科目路由新增 `/networking-v2`。
- `professional-topic-content`: formal topic data 新增 `networkingV2` 內容集合與來源追溯。

## Impact

- Affected specs: networking-v2-route, app-shell, professional-subject-routing, professional-topic-content
- Affected code:
  - New: src/modules/networkingV2/views/NetworkingV2View.vue, src/modules/subjectTopics/data/networkingV2Topics.ts, tests/unit/networkingV2RouteWorkflow.spec.ts
  - Modified: PROJECT_ARCHITECTURE.md, src/app/router.ts, src/app/routePreload.ts, src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts, src/modules/subjectTopics/data/professionalTopics.ts, src/modules/subjectTopics/data/placeholderTopics.ts, tests/unit/routeConfig.spec.ts, tests/unit/routePreload.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopicProgressStorage.spec.ts, tests/component/ComputerFoundationSubjectSwitcher.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts, tests/e2e/app-shell.smoke.spec.ts
  - Removed: (none)
