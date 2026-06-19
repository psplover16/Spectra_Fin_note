## Context

目前 app 已有 `/computer-principles`、`/networking`、`/digital-logic`、`/operating-systems` 等專業科目 route，並透過 `SubjectTopicPage` 顯示 `lessonArticle` topic。計概類 header 已用 `ComputerFoundationSubjectSwitcher` 與 `RouteSubMenu` 集中呈現計概、網概、數位邏輯、作業系統。使用者新增整理好的 `_private/MD/計算機概論/` Markdown，希望建立獨立 `計概(v2)` route 承接新版基本計概，不干擾既有 `/computer-principles`。

本次資料是 bundled static teaching content。離線行為沿用既有 PWA 與前端資料模式：localStorage 只保存 subject topic progress，IndexedDB 不參與，Pinia 不新增 store。沒有外部 API、同步、衝突處理或伺服器資料來源。

## Goals / Non-Goals

**Goals:**

- 新增 `/computer-principles-v2` route，頁面標題 `計概(v2)`，subject key `computerPrinciplesV2`。
- 將計概類 header 選單擴充為包含 `計概(v2)`，並保留既有計概、網概、數位邏輯、作業系統選項。
- 匯入 `_private/MD/計算機概論/01_架構與計算理論.md` 到 `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md` 共 13 篇。
- 使用 `_private/MD/計算機概論/00_目錄.md` 的篇名欄作為 13 個 topic title 與順序的 manifest；`00_目錄.md` 不成為 route-visible topic。
- 以既有 `lessonArticle` block 表示 MD 內容，盡量保留原 Markdown 的段落、清單、表格、標題層級與計算題編排。

**Non-Goals:**

- 不新增 raw Markdown renderer，不在 runtime 解析 Markdown。
- 不改寫或替換既有 `/computer-principles` 內容。
- 不把 `00_目錄.md` 顯示成 learner-facing section。
- 不新增外部依賴、後端、IPC、IndexedDB、Pinia store、網路同步或資料合併流程。
- 不新增題庫、測驗、選擇題解析或近 8 年考古題擴充。

## Decisions

### Add computerPrinciplesV2 as an independent route and subject key

新增 `computerPrinciplesV2` 到 `SubjectKey`，並新增 `/computer-principles-v2` 到 primary route registry、router 與 route preload。`ComputerPrinciplesV2View` SHALL follow the existing route view pattern: read `getSubjectTopics('computerPrinciplesV2')` and pass the topics into `SubjectTopicPage` with title `計概(v2)` and test id `subject-view-computer-principles-v2`.

替代方案：沿用 `computerPrinciples` subject key，在同一 route 或同一 progress namespace 中顯示 v2 內容。淘汰原因：v1/v2 進度、topic ownership 與 learner-facing topic list 會混在一起，使用者無法清楚區分新版教材。

### Use 00 catalog as a title manifest but not as learner content

`00_目錄.md` SHALL be treated as a source manifest for order and title mapping. The route-visible topic list SHALL include exactly 13 topics from files `01` through `13`; title values SHALL use the catalog 篇名欄:

1. 架構與計算理論
2. 機器指令與指令週期
3. Pipeline 與 Hazard
4. 效能與 RISC／CISC
5. 匯流排與 USB
6. 記憶體（一）階層與分類
7. 記憶體（二）暫存器與 Cache
8. 進制轉換
9. 補數轉換
10. 浮點數轉換
11. 數碼與文字碼
12. 檢查碼（一）Parity 與 CRC
13. 檢查碼（二）漢明碼與漢明距

替代方案：直接用每個 MD 的 H1，例如 `基本計概 01：架構與計算理論`。淘汰原因：使用者指定 title 取目錄篇名，且 route 已提供 `計概(v2)` context；保留章節序號會降低掃描性。

### Convert Markdown into existing lessonArticle content blocks

實作 SHALL 將每篇 MD 轉成一個 `ProfessionalSubjectTopic`，每個 topic 至少有一個 `lessonArticle` block。Markdown 轉換邊界如下：H1 對應 topic title 的來源但不直接顯示為 lesson section；H2/H3 對應 lessonArticle sections 或 subsections；段落、清單、表格對應既有 content block；計算題與練習題保留在同一 topic 的 lessonArticle 中。若 MD 有無法用現有 block 精準表示的格式，採最接近的 paragraph/list/table/subsection 表達，不新增 renderer 或 dependency。

替代方案：加入 raw Markdown renderer，在 runtime 直接渲染 MD。淘汰原因：會新增解析與 XSS/樣式風險，也會繞過既有 `SubjectTopicPage` 的 completion/bookmark、測試與一致樣式。

### Keep progress storage on the existing v1 localStorage shape

`subjectTopicProgressStorage` SHALL keep the same storage key and version. State shape remains `{ version: 1, subjects: Record<SubjectKey, SubjectProgress> }`。新增 `computerPrinciplesV2` 時，empty state 與 normalization SHALL include an empty progress entry with `completedTopicIds: []` and `bookmarkedTopicId: null`。不需要從既有 `computerPrinciples` 搬移 topic ids，因為 v2 是新 content namespace。

替代方案：升級 storage version 或把 v2 進度存在獨立 key。淘汰原因：資料格式沒有改變；新增 subject key 可由既有 normalization 安全補齊。

## Implementation Contract

Behavior:

- Opening `/computer-principles-v2` renders a `SubjectTopicPage` titled `計概(v2)` with subject key `computerPrinciplesV2` and test id `subject-view-computer-principles-v2`.
- The route topic list contains exactly 13 learner-facing topics in the order defined by `00_目錄.md` rows 01 through 13.
- The route does not render `00_目錄.md` as a topic, section, source note, or card.
- Header 計概類 menu displays `計概(v2)` with a stable option test id and navigates to `/computer-principles-v2`.
- Existing `/computer-principles` continues to render current v1 topics and does not include `computerPrinciplesV2` topic ids.

Interface / data shape:

- `SubjectKey` includes `computerPrinciplesV2`.
- `PrimaryRoutePath` includes `/computer-principles-v2`.
- `professionalTopicsBySubject.computerPrinciplesV2` contains 13 `ProfessionalSubjectTopic` items.
- `placeholderTopicsBySubject.computerPrinciplesV2` exists and defaults to an empty array.
- Each v2 topic uses `sourceBatch: 'computer-principles-v2-route'`, one Markdown content source file from `_private/MD/計算機概論/`, source traceability to the catalog title, `lessonArticle` content, and no raw Markdown-only display instructions as learner-facing text.

Failure modes:

- Unknown routes still redirect to `/computer-principles`.
- Invalid or old localStorage progress still normalizes to a v1 state with `computerPrinciplesV2` present.
- If a v2 topic has an empty lessonArticle, `getSubjectTopics('computerPrinciplesV2')` excludes it; implementation is incomplete until all 13 topics are route-visible.

Acceptance criteria:

- Unit tests verify route config, route preload, `SubjectKey`, placeholder shape, progress normalization, header option config, and route topic order/title/source mapping.
- Component tests verify `ComputerFoundationSubjectSwitcher` lists `計概(v2)` and `SubjectRoutesSmoke` renders the v2 route with the first and last expected titles.
- E2E smoke verifies direct navigation to `/computer-principles-v2` and header navigation through the 計概類 menu.
- Data tests verify all 13 topics have non-empty lessonArticle sections, sourceFiles matching the 13 MD files, sourceSummary/sourceSection traceability, and no `00_目錄.md` route-visible topic.
- `npm run typecheck`, targeted Vitest commands, Playwright smoke, `spectra analyze computer-principles-v2-route --json`, and `spectra validate computer-principles-v2-route` pass.

Scope boundaries:

- In scope: route registration, route preload, header option, subject key, progress normalization for the new key, formal topic data import, placeholder shape, tests, and `PROJECT_ARCHITECTURE.md`.
- Out of scope: raw Markdown rendering, v1 route content changes, quiz/test-bank generation, external dependencies, backend, IPC, IndexedDB, Pinia store, service worker changes, and source Markdown edits.

Technical content verification:

- The v2 content import SHALL compare topic titles and order against `00_目錄.md`.
- Each topic SHALL preserve source traceability to its MD file. Calculation-heavy topics SHALL keep worked examples and practice explanations from the source Markdown rather than replacing them with generated summaries.
- Answer uniqueness and option distinguishability are not applicable because this change imports teaching articles, not multiple-choice questions.

## Risks / Trade-offs

- [Risk] Manual conversion from Markdown to `lessonArticle` can accidentally drop tables or calculation steps. -> Mitigation: add route workflow tests for non-empty sections, representative phrases from each source file, and source traceability.
- [Risk] Adding a subject key can break exhaustive object records. -> Mitigation: typecheck plus unit tests for `professionalTopicsBySubject`, `placeholderTopicsBySubject`, and progress empty-state keys.
- [Risk] Header menu can become crowded on mobile. -> Mitigation: keep the existing grouped menu pattern instead of adding another top-level tab, and verify with Playwright smoke.
- [Risk] Bundled content size grows. -> Mitigation: no new dependency, keep content in static TypeScript data, and run the normal build/typecheck path; investigate only if Vite chunk warning exceeds the existing 500 KB threshold.

## Migration Plan

No data migration is required. Existing users get an empty `computerPrinciplesV2` progress entry on next progress normalization. Rollback is reverting the new route, subject key, header option, v2 topic data, tests, and architecture documentation.

## Open Questions

None. The user confirmed `/computer-principles-v2`, `computerPrinciplesV2`, `00_目錄.md` as title manifest only, and `lessonArticle` as the content shape.
