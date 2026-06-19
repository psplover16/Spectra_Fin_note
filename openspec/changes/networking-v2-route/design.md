## Context

目前 app 已有 `/networking` route，透過 `NetworkingView` 讀取 `getSubjectTopics('networking')`，再交給 `SubjectTopicPage` 呈現 `lessonArticle` topic。Header 的計概類選單由 `ComputerFoundationSubjectSwitcher` 與 `computerFoundationSubjectOptions` 管理，已包含計概、計概(v2)、網概、數位邏輯與作業系統。

使用者提供 `_private/MD/網路概論v2/` 的 12 篇已編排 Markdown，希望建立獨立 `網路概論(v2)` route；資料應按檔名順序匯入，標題去除 `網路概論_1_`、`網路概論_2下_` 等序列前綴，且不要任意增刪改教材內容。

本次資料是 bundled static teaching content。localStorage 只保存 subject topic progress；IndexedDB 不參與；Pinia 不新增 store；沒有外部 API、同步、衝突處理或伺服器資料來源。

## Goals / Non-Goals

**Goals:**

- 新增 `/networking-v2` route，頁面標題 `網路概論(v2)`，subject key `networkingV2`。
- 將計概類 header 選單擴充為包含 `網路概論(v2)`，並保留既有選項。
- 匯入 `_private/MD/網路概論v2/` 目前全部 12 篇 Markdown，每篇對應一個 route-visible topic。
- route-visible order 依檔名章節序：1、2、2下、3上、3下、4上、5、6、7上、7下、8上、8下。
- 以既有 `lessonArticle` block 表示 MD 內容，盡量保留原 Markdown 的段落、清單、表格、標題層級、範例與整理重點。
- 保持 v1 `/networking` 與 v2 `/networking-v2` 的 topic ownership 與 progress namespace 分離。

**Non-Goals:**

- 不修改、替換或重新排序既有 `/networking` route 的內容。
- 不新增 raw Markdown renderer，不在 runtime 解析 Markdown。
- 不新增外部依賴、後端、IPC、IndexedDB、Pinia store、網路同步或資料合併流程。
- 不把來源 Markdown 改寫為生成摘要；必要轉換只限於適配既有 block schema。
- 不新增題庫、選擇題解析、近 8 年考古題範圍或測驗流程。

## Decisions

### Add networkingV2 as an independent route and subject key

新增 `networkingV2` 到 `SubjectKey`，並新增 `/networking-v2` 到 primary route registry、router 與 route preload。`NetworkingV2View` SHALL follow the existing route view pattern: read `getSubjectTopics('networkingV2')` and pass the topics into `SubjectTopicPage` with title `網路概論(v2)` and test id `subject-view-networking-v2`.

替代方案：沿用 `networking` subject key，在既有 `/networking` route 中追加新版 topic。淘汰原因：v1/v2 進度、topic ownership 與 learner-facing list 會混在一起，使用者無法清楚區分兩份教材。

### Use source filenames as the order manifest and sanitized topic titles

`_private/MD/網路概論v2/` 的檔名 SHALL define route-visible order. Topic title SHALL come from the filename subject phrase after removing the `網路概論_` prefix and chapter marker such as `1_`, `2_`, `2下_`, `3上_`, `8下_`; for example `網路概論_2下_資安_加密與TLS.md` becomes `資安_加密與TLS` unless the source Markdown itself provides a clearer H1 with the same subject. The implementation SHALL NOT expose the sequence marker as learner-facing title text.

替代方案：人工建立另一份 manifest 檔。淘汰原因：使用者已指定目前可從名稱辨別順序；另建 manifest 會增加同步成本，也可能和來源檔名漂移。

### Convert Markdown into existing lessonArticle content blocks

每篇 MD SHALL become one `ProfessionalSubjectTopic` with one `lessonArticle` block. Markdown conversion boundaries: H1 identifies the topic subject but does not need to become a visible lesson section; H2/H3 map to `LessonArticleSection` or `subsection`; paragraphs, lists, tables, indented explanations, examples, comparison tables, command-like tokens, and formula text map to existing paragraph/list/table/subsection blocks. If a source pattern cannot be represented exactly, use the closest existing block while preserving text order and meaning.

講義資料模型 SHALL use existing fields: `subjectKey: 'networkingV2'`, `sourceBatch: 'networking-v2-route'`, `sourceFiles`, `sourceSummary`, `examOutline`, `memoryPoints`, `understandingNotes`, `difficulty`, `topicType`, `terms`, and `blocks`. This is not a quiz change, so question stem, four options, correct answer, option analysis, answer uniqueness, and option distinguishability fields are not applicable.

替代方案：加入 runtime raw Markdown renderer。淘汰原因：會新增解析與 XSS/樣式風險，也會繞過既有 `SubjectTopicPage` 的 completion、bookmark、測試與一致樣式。

### Keep progress storage on the existing v1 localStorage shape

`subjectTopicProgressStorage` SHALL keep the same localStorage key and version. State shape remains `{ version: 1, subjects: Record<SubjectKey, SubjectProgress> }`. 新增 `networkingV2` 時，empty state 與 normalization SHALL include an empty progress entry with `completedTopicIds: []` and `bookmarkedTopicId: null`. Existing `networking` progress SHALL NOT be migrated into `networkingV2`.

替代方案：升級 storage version 或把 v2 進度存在獨立 key。淘汰原因：資料格式沒有改變；新增 subject key 可由既有 normalization 補齊，避免不必要 migration。

### Keep the entry inside the computer foundation menu

Header SHALL add `網路概論(v2)` inside the existing computer foundation grouped menu instead of adding another top-level tab. This keeps mobile navigation compact and matches the existing `計概(v2)` pattern.

替代方案：在 header 增加獨立 top-level `網路概論(v2)` tab。淘汰原因：手機寬度下 header 已經有多個專業科目入口；新 top-level tab 會增加換行與掃描負擔。

## Implementation Contract

Behavior:

- Opening `/networking-v2` renders a `SubjectTopicPage` titled `網路概論(v2)` with subject key `networkingV2` and test id `subject-view-networking-v2`.
- The route-visible topic list contains exactly 12 topics, one per Markdown file in `_private/MD/網路概論v2/`, in filename chapter order.
- Topic titles do not include `網路概論_` or leading chapter markers such as `1_`, `2_`, `2下_`, `3上_`, `8下_`.
- Header 計概類 menu displays `網路概論(v2)` with a stable option test id and navigates to `/networking-v2`.
- Existing `/networking` continues to render current v1 topics and does not include `networkingV2` topic ids.

Interface / data shape:

- `SubjectKey` includes `networkingV2`.
- `PrimaryRoutePath` includes `/networking-v2`.
- `professionalTopicsBySubject.networkingV2` contains 12 `ProfessionalSubjectTopic` items.
- `placeholderTopicsBySubject.networkingV2` exists and defaults to an empty array.
- Each v2 topic uses `sourceBatch: 'networking-v2-route'`, one source file from `_private/MD/網路概論v2/`, `sourceSummary` / `sourceSection` traceability, `lessonArticle` content, and no raw Markdown-only display instructions.

Failure modes:

- Unknown routes still redirect to `/computer-principles`.
- Invalid or old localStorage progress still normalizes to a v1 state with `networkingV2` present.
- If a v2 topic has an empty lessonArticle, `getSubjectTopics('networkingV2')` excludes it; implementation is incomplete until all 12 topics are route-visible.

Acceptance criteria:

- Unit tests verify route config, route preload, `SubjectKey`, placeholder shape, progress normalization, header option config, topic order, topic title sanitization, sourceFiles, and source traceability.
- Component tests verify `ComputerFoundationSubjectSwitcher` lists `網路概論(v2)` and `SubjectRoutesSmoke` renders the v2 route with the first and last expected titles.
- E2E smoke verifies direct navigation to `/networking-v2` and header navigation through the 計概類 menu.
- Data tests verify all 12 topics have non-empty lessonArticle sections, sourceFiles matching the 12 MD files, sourceSummary/sourceSection traceability, and no `networkingV2` topic appears under `networking`.
- `npm run typecheck`, targeted Vitest commands, Playwright smoke, `spectra analyze networking-v2-route --json`, and `spectra validate networking-v2-route` pass.

Scope boundaries:

- In scope: route registration, route preload, header option, subject key, progress normalization for the new key, formal topic data import, placeholder shape, tests, and `PROJECT_ARCHITECTURE.md`.
- Out of scope: raw Markdown rendering, v1 route content changes, quiz/test-bank generation, external dependencies, backend, IPC, IndexedDB, Pinia store, service worker changes, and source Markdown edits.

Technical content verification:

- The v2 content import SHALL compare topic order against the 12 source filenames.
- Each topic SHALL preserve source traceability to its MD file and include representative source-authored phrases from the original article.
- Since this change imports teaching articles rather than multiple-choice questions, answer uniqueness and option distinguishability are not applicable.

## Risks / Trade-offs

- [Risk] Manual conversion from Markdown to `lessonArticle` can accidentally drop tables, examples, or source-authored structure. → Mitigation: add route workflow tests for non-empty sections, title order, representative phrases, and source traceability.
- [Risk] Adding a subject key can break exhaustive records. → Mitigation: typecheck plus unit tests for `professionalTopicsBySubject`, `placeholderTopicsBySubject`, and progress empty-state keys.
- [Risk] Header menu can become crowded on mobile. → Mitigation: keep the grouped menu pattern and verify with Playwright smoke.
- [Risk] Bundled static content size grows. → Mitigation: do not add dependencies; run the normal build/typecheck path and investigate only if Vite chunk warning exceeds the existing 500 KB threshold.

## Migration Plan

No data migration is required. Existing users get an empty `networkingV2` progress entry on next progress normalization. Rollback is reverting the new route, subject key, header option, v2 topic data, tests, and architecture documentation.

## Open Questions

None. The requirement source specifies an independent `網路概論(v2)` route, header menu entry, all MD files under `_private/MD/網路概論v2/`, filename-based order, sanitized topic titles, and existing networking-style section presentation.
