## Why

/computer-principles 已有 Hazard、USB 速度、進制轉換、補數轉換 topic skeleton，但正式路由仍缺少可閱讀內容。使用者已整理 4 份 Markdown，現在需要把內容放進 app，並讓 USB 重點速度列可用紅字或背景強調。

## What Changes

- 將 4 份基本計概 Markdown 轉成對應 topic 的 lessonArticle sections，保留來源內容與長講義範例。
- 將 Hazard route 標題改為「管線危障(Hazard)」。
- 調整 /computer-principles 顯示順序：Hazard 插在 Pipeline 後、匯流排前；USB 速度、進制轉換、補數轉換維持 Cache 後的既有相對順序。
- 新增 lessonArticle table 樣式能力，支援列、欄、格的文字色與背景色 metadata。
- 更新 route filtering、內容來源與回歸測試，確保 4 個 topic 顯示且不回退為空 skeleton。

## Non-Goals

- 不重新整理或搬移 Markdown 原檔。
- 不新增新路由、後端、儲存層或外部依賴。
- 不處理浮點數與數碼文字碼 topic 匯入。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `professional-topic-content`: 補齊 4 個 Computer Principles topic 的正式 lessonArticle 內容、來源追蹤與測試保護。
- `subject-topic-page`: lessonArticle table SHALL support highlight metadata for row, column, and cell text/background styling.

## Impact

- Affected specs: professional-topic-content, subject-topic-page
- Affected code:
  - Modified: src/modules/subjectTopics/types/subjectTopic.ts
  - Modified: src/modules/subjectTopics/components/SubjectTopicPage.vue
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts
  - Modified: src/styles/main.css
  - Modified: tests/unit/professionalTopics.spec.ts
  - Modified: tests/unit/subjectTopics.spec.ts
  - Modified: tests/unit/computerPrinciplesRouteWorkflow.spec.ts
  - Modified: tests/unit/staleProfessionalContentAudit.spec.ts
  - New: none
  - Removed: none
