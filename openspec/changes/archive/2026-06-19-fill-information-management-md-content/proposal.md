## Why

information-management route 目前仍主要停在舊 skeleton 資料，無法呈現使用者已整理完成的資訊管理 Markdown 教材。現在已有 7 個來源 Markdown 與討論結論，應把內容正式納入 route，讓資訊管理科目可被學習與驗證。

## What Changes

- 將 _private/MD/資訊管理/ 內 7 個 Markdown 依檔名前綴自然順序匯入 information-management route。
- 每個 imported topic 的標題採 Markdown H1，sourceFiles 只記 exact Markdown 路徑，並提供非空 lessonArticle sections。
- 既有 informationManagement skeleton topics 保留在 formal data 後方，本次不補內容。
- 內容轉換保留原 Markdown 編排，只做 renderer 必要正規化與最小幅度事實/法規時效修正。
- 更新資訊管理 route workflow 測試，驗證 route-visible 新 topics、formal data suffix 與 source traceability。

## Non-Goals

- 不新增 route、UI component、資料模型欄位、storage 或 IPC flow。
- 不把 raw Markdown renderer 加進 app；本次仍轉成既有 lessonArticle typed blocks。
- 不拆分 資訊管理_1_數位轉型與ESG.md 為兩個 topics。
- 不補齊或重寫既有 _private/資訊管理.txt skeleton topics。
- 不擴充到近 8 年考古題題庫；本次只涵蓋使用者提供的資訊管理 Markdown 教材內容。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- professional-topic-content: Information Management formal topic data SHALL include the 7 provided Markdown-backed lessonArticle topics in source order, before existing skeleton topics.

## Impact

- Affected specs: professional-topic-content
- Affected code:
  - New: _private/TMP/information-management-md-content-review.md
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/informationManagementRouteWorkflow.spec.ts
  - Removed: (none)
