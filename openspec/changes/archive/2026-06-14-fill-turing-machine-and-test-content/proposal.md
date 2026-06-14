## Why

目前 computer-principles 路由中的「圖靈機與圖靈測試」仍是空白 section，使用者已在 _private/MD/二、圖靈機與圖靈測試.md 完成編排、校稿與整理；現在需要把這份內容接回正式 topic 資料，讓計算機原理的基本計概內容可在頁面中閱讀。

本次不是新增近 8 年考古題整理；範圍限於計算機原理的基本計概概念題型，涵蓋圖靈機、可計算性、圖靈測試，以及兩者比較。

## What Changes

- 將「圖靈機與圖靈測試」topic 從空白 skeleton 改為有 lead 與 lessonArticle sections 的正式內容。
- section 內容優先使用 orderedList 與 bulletList 呈現階層關係，並使用 table 呈現圖靈機與圖靈測試比較。
- 本次新增的圖靈機與圖靈測試 sections 不顯示 `[必背]`、`[理解]`、`[比較]` 這類 sourceLabel 標籤；重點與階層關係由標題、orderedList、bulletList 與 table 承載。
- 「資料如何被儲存／讀取／根據規則改變／計算結束條件」這類核心模型問題需以帶有明確 ordered marker 的 orderedList 呈現，例如 `1. 2. 3. 4.`、`I. II. III.` 或 `A. B. C.`；這裡的 icon 指清單標號，不是實體圖示。
- sourceFiles 改用實際整理後的 Markdown 檔案路徑 _private/MD/二、圖靈機與圖靈測試.md。

## Non-Goals

- 不重寫 Markdown 原文，只把已整理內容轉成前端資料結構。
- 不新增路由、儲存機制、題庫測驗或外部 icon 依賴。
- 不使用 SVG / FontAwesome 等實體 icon 取代 ordered list marker。
- 不要求內容格式完全比照馮紐曼架構 topic factory。
- 不處理其他計算機原理主題或其他路由的內容補齊。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- professional-topic-content: computer-principles 的圖靈機與圖靈測試 topic SHALL expose curated lessonArticle content with readable list hierarchy, comparison table, and source traceability.

## Impact

- Affected specs: professional-topic-content
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/components/SubjectTopicPage.vue, src/styles/main.css
  - Removed: none
- Affected source content:
  - _private/MD/二、圖靈機與圖靈測試.md
