## Summary

補齊 /computer-principles 的 Pipeline 與 Bus 兩個既有 topic，讓它們由空 lessonArticle skeleton 變成可閱讀的新手國考教學內容。

## Motivation

使用者已將 Pipeline 與 Bus 的 Markdown 精簡整理完成，但 app 目前的 cp-pipeline 與 cp-bus 仍只有空的 lead 與 sections。現在需要把這兩份來源整理成正式 lessonArticle，保留使用者已精簡的學習內容，並讓來源追蹤與測試能防止內容回退成空 skeleton。

## Proposed Solution

- 將 Pipeline Markdown 轉成 cp-pipeline 的 lead 與 sections，涵蓋定義、公式、限制、常見 Hazard 與最大加速比。
- 將 Bus Markdown 轉成 cp-bus 的 lead 與 sections，涵蓋三種匯流排、基本計算、傳輸方向、最大陷阱、讀寫流程與記憶體範圍補充。
- sourceFiles 比照機器指令與指令週期作法，加入對應 Markdown 路徑。
- 更新測試，要求 cp-pipeline 與 cp-bus 不再是空 lessonArticle。

## Non-Goals

- 不改寫兩份 Markdown 的核心資料與精簡方向。
- 不新增 UI 元件、路由或新的 lessonArticle block 型別。
- 不展開 cp-pipeline 的 Hazard 深度教學；深入 Hazard 仍留給 cp-hazard topic。
- 不調整其他 computer-principles topic 的內容。
- 不以考古題新增題庫或測驗題。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- professional-topic-content: computer-principles 的 cp-pipeline 與 cp-bus topic SHALL carry non-empty lessonArticle lead and sections derived from their approved Markdown sources.

## Impact

- Affected specs: professional-topic-content
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/professionalTopics.spec.ts, tests/unit/computerPrinciplesRouteWorkflow.spec.ts, tests/unit/staleProfessionalContentAudit.spec.ts
  - Removed: none
