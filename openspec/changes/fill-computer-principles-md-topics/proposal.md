## Why

`/computer-principles` 目前已有 `cp-performance-formulas`、`cp-risc-cisc`、`cp-memory-hierarchy`、`cp-memory-classification`、`cp-registers`、`cp-cache` 六個 topic，但正式 app data 仍是空 `lessonArticle` skeleton。使用者已在六份 Markdown 完成新手向教材編排，現在需要把既有 md 內容結構化放入對應 topic section，讓計算機原理路由能直接閱讀。

## What Changes

- 將六份 `_private/MD/計概/3a基本計概/` Markdown 內容編排成既有 `lessonArticle` block。
- 保留 md 既有教材內容、順序與標題；只把 `table表示`、`用UL/LI表示` 等編排註記轉成 app 支援的 paragraph、table、orderedList；未來一般教學段落若只有一個項目，優先使用 `paragraph` + `text`，若 block 的 `items` 包含多個項目，除非來源明確是無順序語意，優先使用 `orderedList`。
- 六個 topic 加入對應 Markdown `sourceFiles`，並從空 skeleton 改為有 sections 的正式內容；`lessonArticle.lead` 與 section `sourceLabel` 依新的內容慣例預設可為空。
- 所有 learner-facing `text` 類文字內容需支援實際換行符號 `\n`，資料中保留換行，畫面顯示時也呈現換行。
- 測試更新為把這六個 topic 視為已填入內容，防止回退成空 skeleton。
- 範圍屬於計算機原理新手教材整理，依目前既有 md 與國考常見計概內容為準，不額外擴充到近 8 年考古題逐題整理。

## Non-Goals

- 不新增路由、新 UI block 型別、新 IPC、storage 或跨層流程。
- 不重寫教材、不自行擴寫核心觀念、不新增 md 之外的新主題。
- 除已確認的 Cache「下一層記憶體」短句外，不主動加入 md 之外的新解釋。
- 不修改六份來源 Markdown 的原文內容。
- 不要求 `lessonArticle.lead` 填入摘要或前言；教材正文以 sections 為主。
- 不要求 section `sourceLabel` 填入來源標籤；空值以省略欄位或 `undefined` 表示，不以空字串作為內容。
- 不改變全域 lessonArticle block schema，也不要求本次六個 topic 以外的既有內容一併改成 orderedList。
- 不新增 Markdown parser；換行處理以既有 topic data 字串與既有 subject topic renderer 為範圍。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `professional-topic-content`: Computer Principles topics SHALL include source-traced, non-empty lessonArticle content for the six Markdown-backed topics.

## Impact

- Affected specs: `professional-topic-content`
- Affected code:
  - New: `tests/unit/SubjectTopicPage.spec.ts`
  - Modified: `src/modules/subjectTopics/data/professionalTopics.ts`, `src/modules/subjectTopics/components/SubjectTopicPage.vue`, `src/styles/main.css`, `tests/unit/professionalTopics.spec.ts`, `tests/unit/computerPrinciplesRouteWorkflow.spec.ts`, `tests/unit/staleProfessionalContentAudit.spec.ts`
  - Removed: (none)
