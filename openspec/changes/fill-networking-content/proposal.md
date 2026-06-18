## Why

networking 路由目前仍沒有正式可讀的教材內容，但使用者已整理 _private/MD/網概/ 的 11 篇 Markdown，並要求依來源順序匯入。現在要把這批資料接到既有專業主題頁，讓網路概論能像 computer-principles 一樣供考前快速閱讀與理解。

## What Changes

- 將 11 篇網路概論 Markdown 依 1、2、3、4上、4下、5、6、7上、7下、8上、8下順序映射為 route-visible networking topics。
- 每篇 MD 對應一個 topic，標題採用 MD H1，保留表格、條列、公式、例題、重點整理與學習標記。
- 使用既有 lessonArticle 內容模型與 SubjectTopicPage，不新增 parser、store、route 或 UI 元件。
- apply 階段需重新讀取所有來源 MD，並對明顯內容錯誤做最小幅度修正；不補充缺漏知識。

## Non-Goals

- 不新增 Markdown runtime parser 或自動匯入流程。
- 不改 networking 路由元件、進度儲存 schema、SubjectTopicPage UI 行為。
- 不擴寫來源 MD 未提供的教材內容。
- 不處理 networking 以外科目的現有 MD 搬移狀態。

## Capabilities

### New Capabilities

- networking-content: Defines how curated networking Markdown sources become learner-facing, traceable networking route topics.

### Modified Capabilities

(none)

## Impact

- Affected specs: networking-content
- Affected code:
  - New: openspec/changes/fill-networking-content/specs/networking-content/spec.md
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts
  - Removed: none
