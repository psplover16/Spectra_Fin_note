## Context

`/computer-principles` 目前同時承載基本計概、數位邏輯與作業系統，導致 route 過長，也讓 topic progress 全部集中在 `computerPrinciples` subject key。既有 app 已有 Vue Router、route preload registry、`SubjectTopicPage`、`RouteSubMenu`、以及以 `SubjectKey` 為索引的 localStorage v1 進度資料。本次要新增兩個可直接導覽的專業科目 route，並把 header 改成更適合手機寬度的分組下拉。

## Goals / Non-Goals

**Goals:**

- 新增 `/digital-logic` 與 `/operating-systems` route，分別使用 `digitalLogic` 與 `operatingSystems` subject key。
- 將數位邏輯 topic id `cp-digital-logic-basics`、`cp-sop-pos`、`cp-karnaugh-map`、`cp-universal-gates`、`cp-combinational-sequential-circuits` 從計概歸屬移到數位邏輯。
- 將作業系統 topic id `cp-os-basics`、`cp-io-and-interrupts`、`cp-hardware-protection`、`cp-os-structure`、`cp-process`、`cp-cpu-scheduling`、`cp-deadlock`、`cp-process-communication`、`cp-memory-management`、`cp-virtual-memory`、`cp-disk-management` 從計概歸屬移到作業系統。
- 讓 `/operating-systems` 只顯示有 learner-facing 內容的作業系統 topics；`cp-hardware-protection` 在有正式內容前維持 formal empty skeleton，不顯示為獨立 section。
- 將專業 route topic 顯示標題正規化為 route-scoped title，移除 `作業系統 1：`、`資料庫 1：`、`程式設計 1：` 等科目與章節序號前綴。
- Header 新增計概類下拉，選單包含計概、網概、數位邏輯、作業系統，並沿用 `RouteSubMenu` 的點選選單互動。
- 保留 moved topic 的完成與書籤進度，不改 storage key 或版本。
- 同步更新 `PROJECT_ARCHITECTURE.md`，讓 src 結構文件反映新 route 與模組。

**Non-Goals:**

- 不重寫教材正文、不改 `lessonArticle` block 格式、不新增 raw Markdown renderer。
- 不新增外部依賴、IPC、後端、IndexedDB 或新的 storage schema version。
- 不把國文/英文共同科目重新打開到 header；共同科目下拉只在必要時配合共用元件參數化，顯示策略不在本次範圍。
- 不改題庫、測驗流程、PWA service worker 或內容產製 `_TMP` 檔案。

## Decisions

### Add dedicated subject keys and route views for split content

新增 `digitalLogic` 與 `operatingSystems` 到 `subjectKeys`，並建立對應 route view。`router.ts`、`routePreload.ts`、route tests 與 smoke tests SHALL 將 `/digital-logic` 和 `/operating-systems` 視為 primary route。這讓 route、資料、進度、測試都有同一個穩定 key。

替代方案：只新增 route alias 但沿用 `computerPrinciples` subject key。淘汰原因：資料與進度仍混在計概，使用者看到的是拆 route，但內部所有權沒有真的拆開。

### Move topic ownership by subjectKey instead of duplicating topics

直接調整正式 topic config 的 `subjectKey`，讓 moved topics 只出現在新 subject。`computerPrinciples` SHALL 保留基本計概 topics，並不再顯示基本邏輯、SOP 與 POS、卡諾圖、萬用閘、組合與循序電路、作業系統內容。

替代方案：在 `getSubjectTopics()` 依 `sourceSection` 動態過濾。淘汰原因：會把資料所有權藏在查詢層，source traceability 與 progress namespace 容易不一致。

### Normalize professional topic titles for route context

專業 route 的畫面已經提供科目標題，因此 topic `title` SHALL 使用 route-scoped title，例如 `OS 基礎概念`、`基礎概念 + ANSI/SPARC 架構`、`語言執行方式 + 程式基礎`，不重複顯示科目名稱與章節序號。來源追溯仍由 `sourceFiles`、`sourceSummary` 與 lessonArticle `sourceSection` 保存，避免 UI 標題與來源章節耦合。

替代方案：保留 `作業系統 1：`、`資料庫 1：` 等前綴。淘汰原因：拆 route 後科目資訊已在 route 標題中，topic 標題再重複會降低掃描性，且不同 route 的標題風格不一致。

### Use a computer-foundation route group switcher backed by RouteSubMenu

新增計概類 route group 設定與 switcher，選項固定為 `/computer-principles`、`/networking`、`/digital-logic`、`/operating-systems`。Trigger 在目前 route 屬於此 group 時顯示目前選項 label，否則顯示 `計概類`；active style 僅在目前 route 屬於此 group 時套用。`RouteSubMenu` SHALL 支援 menu id、test id 與 aria label props，讓計概類與既有共同科目下拉可共用選單外觀但不共享寫死的 DOM id。

替代方案：把四個 route 全部平鋪為 header tabs。淘汰原因：手機寬度會更擁擠，且使用者明確要求參照國文/英文下拉。

### Preserve moved topic progress without changing storage schema

`subjectTopicProgressStorage` SHALL 保持 `spectra:subject-topic-progress:v1` 與 version 1。讀取舊 state 時，若 `computerPrinciples.completedTopicIds` 或 `bookmarkedTopicId` 包含 moved topic id，normalize 結果 SHALL 將數位邏輯 ids 放入 `digitalLogic`，作業系統 ids 放入 `operatingSystems`，並讓 `computerPrinciples` 只保留仍屬於計概的 topic ids。這是 v1 normalization，不是新 schema。

替代方案：不遷移舊進度。淘汰原因：已完成數位邏輯或作業系統的使用者會覺得進度消失。另一個替代方案是升級 storage version；淘汰原因：本次只需要 topic id re-home，不需要格式變更。

## Implementation Contract

Behavior:

- `/digital-logic` renders a `SubjectTopicPage` titled `數位邏輯` with `digitalLogic` subject key and only the five digital-logic topics listed in Goals.
- `/operating-systems` renders a `SubjectTopicPage` titled `作業系統` with `operatingSystems` subject key and only the ten learner-facing operating-system topics with filled content. `cp-hardware-protection` remains owned by `operatingSystems` as an empty skeleton and SHALL be excluded from `getSubjectTopics('operatingSystems')` until it has visible content.
- `/computer-principles` remains the default root redirect target and no longer renders moved digital-logic or operating-system topics.
- Professional route topic titles omit redundant subject/chapter prefixes while preserving source traceability fields.
- Header route controls show one計概類 group trigger plus the existing non-group professional tabs. Opening the group menu exposes exactly `計概`、`網概`、`數位邏輯`、`作業系統`; selecting an option navigates to its route and preloads on pointer/focus/touch like existing route controls.
- Existing common subject switcher behavior remains hidden from AppShell unless it was already explicitly mounted elsewhere.

Interface / data shape:

- `SubjectKey` includes `digitalLogic` and `operatingSystems`.
- `PrimaryRoutePath` includes `/digital-logic` and `/operating-systems`.
- `professionalTopicsBySubject` and `placeholderTopicsBySubject` contain entries for every `SubjectKey`.
- Progress state remains `{ version: 1, subjects: Record<SubjectKey, SubjectProgress> }` and normalizes missing/new subjects safely.
- New view modules follow the existing route view pattern: import `SubjectTopicPage`, read `getSubjectTopics(subjectKey)`, and pass route-specific title/test id.

Failure modes:

- Unknown routes continue to redirect to `/computer-principles`.
- Missing localStorage, invalid JSON, or invalid progress shape continues to fall back to an empty v1 state that includes all subject keys.
- Existing route preload calls for unknown paths remain silent no-ops.
- If a moved topic id appears in old `computerPrinciples` progress, the normalized state moves it to the matching new subject rather than duplicating learner-visible progress.

Acceptance criteria:

- Unit tests verify `primaryRoutePaths`, `routeComponentLoaders`, Vue Router config, `subjectKeys`, `professionalTopicsBySubject`, and progress normalization for moved topic ids.
- Component or E2E tests verify the計概類 group menu opens, lists exactly four options, navigates to `/digital-logic` and `/operating-systems`, and applies active styling when the current route is in the group.
- Route workflow tests verify moved topic ids are absent from `getSubjectTopics('computerPrinciples')` and present only in `getSubjectTopics('digitalLogic')` or `getSubjectTopics('operatingSystems')`.
- Topic data tests verify route-scoped display titles omit redundant subject/chapter prefixes and that source traceability remains intact.
- Route workflow tests verify `cp-hardware-protection` is absent from `getSubjectTopics('operatingSystems')` while it remains a formal empty skeleton under `professionalTopicsBySubject.operatingSystems`.
- `npm run typecheck`, targeted Vitest commands for route config/progress/data/header, and `spectra validate --strict split-computer-principles-routes` pass.

Scope boundaries:

- In scope: route config, route preload registry, subject key types, static professional topic ownership, route-scoped topic display titles, placeholder shape, localStorage normalization, header route grouping, related tests, and `PROJECT_ARCHITECTURE.md`.
- Out of scope: new teaching content, source Markdown movement, `_TMP` regeneration, service worker behavior, analytics, IPC, backend, and common subject visibility strategy.

## Risks / Trade-offs

- [Risk] Moving topic ownership can break tests that assume all `cp-*` topics live under `computerPrinciples`. -> Mitigation: update route workflow tests to assert positive ownership in new subjects and negative ownership in old subject.
- [Risk] Normalizing topic titles can leave stale test expectations that still include科目/章節前綴. -> Mitigation: update data, route, component, and E2E assertions around display titles.
- [Risk] Header grouping can regress mobile route access. -> Mitigation: cover the group trigger, menu options, active state, and navigation in component/E2E tests.
- [Risk] Progress migration by normalization may be overlooked because storage version stays v1. -> Mitigation: add explicit tests with legacy `computerPrinciples` completed/bookmarked moved topic ids.
- [Risk] Adding subject keys can create missing object entries. -> Mitigation: typecheck plus unit tests for `professionalTopicsBySubject`, `placeholderTopicsBySubject`, and empty progress state keys.

## Migration Plan

No runtime deployment migration is required. Existing localStorage v1 data is normalized on read: moved topic ids are re-homed into `digitalLogic` or `operatingSystems`; the same storage key and version remain in use. Rollback is reverting route additions, subject key additions, topic subjectKey moves, header group changes, and progress normalization logic.

## Open Questions

None. The user confirmed all discussion recommendations.
