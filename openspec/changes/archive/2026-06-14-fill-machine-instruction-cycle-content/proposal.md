## Why

目前 computer-principles 的 cp-machine-instruction-cycle 仍是空的 skeleton；使用者已整理機器指令與指令週期 Markdown，需要匯入正式 section，讓國考學習頁能直接閱讀。範圍依國營資訊考試大綱與使用者整理稿，本次不新增考古題題庫。

## What Changes

- 將 _private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md 整理成 cp-machine-instruction-cycle 的 lessonArticle。
- 以 orderedList 呈現考前小抄、指令週期與國考判斷流程；以 table 呈現指令範例、名詞解釋與易混淆比較。
- 保留現有路由、資料模型與 renderer，只補正式內容、來源追蹤、terms 與驗證。

## Non-Goals

- 不新增 route、renderer、list marker type 或互動功能。
- 不改其他主題內容，不產生測驗題或近 8 年考古題解析。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- professional-topic-content: cp-machine-instruction-cycle 必須呈現來源可追蹤的機器指令與指令週期 lessonArticle，並使用有序清單與表格承載學習階層與比較內容。

## Impact

- Affected specs: professional-topic-content
- Affected code:
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts
  - Modified: tests/unit/professionalTopics.spec.ts
  - New: none
  - Removed: none
