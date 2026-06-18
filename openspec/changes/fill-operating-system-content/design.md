## Context

`/computer-principles` 已透過 `professionalTopics.ts` 的 skeleton 與 markdown-backed content path 顯示 3a、3b 教材。3c 作業系統目前已有多個 skeleton，但使用者已把 `_private/MD/計概/3c作業系統/` 重新整理為 10 個 Markdown 主題，且要求照檔名章節順序引入、標題採 MD 主題、盡量保留原編排，不任意增刪改資料。

本次資料是靜態講義內容，不引入外部 API、Pinia store、localStorage 或 IndexedDB。離線可用性沿用 Vite build 與 PWA service worker 對 app assets 的快取；沒有同步與衝突處理需求。

## Goals / Non-Goals

**Goals:**

- 讓 `/computer-principles` 顯示 10 個 3c 作業系統可閱讀 topic，順序與 Markdown 章節一致。
- 每個可見 topic 保留來源追蹤：`sourceFiles` 包含 `_private/計算機概論.txt` 與對應 Markdown，`sourceSummary` 指向 3c 作業系統主題。
- 每個 topic 提供非空 `summary`、`terms`、`lessonArticle.sections`，並以現有 `SubjectTopicPage` renderer 呈現表格、清單、段落、縮排流程與計算例題。
- 以測試保護 topic 存在、route-visible 順序、來源範圍、標題與原始編排重點。

**Non-Goals:**

- 不新增 `/computer-principles` 以外的 route。
- 不新增 UI 元件、資料 schema、Pinia store、localStorage key 或 IndexedDB store。
- 不重寫使用者已整理的教材內容，不主動補近 8 年考古題，不把「跳過分析」章節擴寫成完整 IPC 教材。
- 不修正或提交與本變更無關的 `_private` 檔案重新命名狀態；apply 只讀取目前存在的 3c Markdown source set。

## Decisions

### Reuse existing markdown-backed Computer Principles content path

將 3c OS 內容加入現有 `markdownBackedComputerPrinciplesContentById` 路徑，而不是建立 Markdown parser 或新 adapter。原因是 3a/3b 已用同一路徑把整理過的 Markdown 轉成正式 `lessonArticle` 資料，且目前資料量固定、來源已人工編排。

Alternative rejected: 建立泛用 Markdown-to-lessonArticle parser。淘汰原因是目前 Markdown 含教學語氣、表格、流程與計算題，仍需人工判斷結構；泛用 parser 會增加抽象與錯誤風險。

### Preserve one visible topic per Markdown chapter

可見 topic 順序 SHALL follow：

1. `cp-os-basics` from `_private/MD/計概/3c作業系統/3-1. OS 基礎概念.md`
2. `cp-io-and-interrupts` from `_private/MD/計概/3c作業系統/3-2. IO 中斷方式 與 硬體保護.md`
3. `cp-os-structure` from `_private/MD/計概/3c作業系統/3-4_OS結構.md`
4. `cp-process` from `_private/MD/計概/3c作業系統/作業系統_3-5上_Process基礎.md`
5. `cp-cpu-scheduling` from `_private/MD/計概/3c作業系統/作業系統_3-5下_CPU排程演算法.md`
6. `cp-deadlock` from `_private/MD/計概/3c作業系統/作業系統_3-6_Deadlock.md`
7. `cp-process-communication` from `_private/MD/計概/3c作業系統/作業系統_3-7_ProcessCommunication_跳過分析.md`
8. `cp-memory-management` from `_private/MD/計概/3c作業系統/作業系統_3-8_記憶體管理.md`
9. `cp-virtual-memory` from `_private/MD/計概/3c作業系統/作業系統_3-9_虛擬記憶體.md`
10. `cp-disk-management` from `_private/MD/計概/3c作業系統/作業系統_3-10_磁碟管理.md`

`3-2` 已同時涵蓋 I/O 中斷方式與硬體保護，因此 `cp-hardware-protection` SHALL remain an empty skeleton unless a separate source appears later. `3-5下` 是獨立 Markdown 主題，因此新增 `cp-cpu-scheduling` skeleton rather than merging it into `cp-process`.

Alternative rejected: 把 `3-5上` 與 `3-5下` 合併成同一 `cp-process` topic。淘汰原因是使用者要求各 section 標題採 MD 主題，CPU 排程是高權重計算題，合併會降低 route 掃描性。

### Preserve source formatting while using existing lessonArticle blocks

每篇 Markdown 轉換為 `lessonArticle.sections`，section heading 盡量沿用 Markdown heading。表格轉 `table` block，條列轉 `orderedList` 或 `bulletList`，解題流程和計算步驟使用 paragraph / orderedList / indentedGroup 保留閱讀順序。明顯的 Markdown 分隔線、重複空白、純編排符號可清理；教材語意、數字、例題、跳過分析的取捨說明 SHALL NOT be任意改寫。

Alternative rejected: 為了一致性重寫成全站統一摘要格式。淘汰原因是使用者已完成編排，重寫會破壞來源意圖，也提高專業內容錯誤風險。

### Verify technical content through source-specific assertions

測試 SHALL cover OS topic ordering, sourceFiles, non-empty fields, and representative source facts. Representative facts include at least：OS 分類、Polling/Interrupt/DMA、Shell vs System Call、Process state、CPU scheduling、Deadlock 四條件、Process Communication 跳過分析、Fit / Paging / TLB、EMAT / Page Replacement、Disk Scheduling / RAID。計算題須保留來源中的驗算或逐步表，不以新答案取代來源答案。

Alternative rejected: 只測 topic count 與 route visibility。淘汰原因是這無法防止來源檔漏接、內容空洞或計算題被過度濃縮。

## Implementation Contract

**Behavior:** `/computer-principles` SHALL display 10 route-visible 3c 作業系統 topics after the existing 3b 數位邏輯 topics and before later 3c/other empty skeletons. Each visible topic title SHALL match its Markdown main topic title in Chinese/English form where available.

**Data shape:** Each filled OS topic SHALL be a `ProfessionalSubjectTopic` with `subjectKey: 'computerPrinciples'`, non-empty `summary`, `sourceBatch`, `sourceFiles`, `sourceSummary`, `difficulty`, `topicType`, non-empty `terms`, and exactly one primary `lessonArticle` block. The `lessonArticle` SHALL carry `sourceFiles`, `sourceSection`, `lead`, and non-empty `sections`; section blocks SHALL use existing `LessonArticleContentBlock` kinds only.

**Scope boundaries:** In scope is `professionalTopics.ts` data and unit tests for professional content and route-visible ordering. Out of scope is changing `SubjectTopicPage.vue`, adding a Markdown parser, changing storage, or editing unrelated subjects.

**Failure modes:** Missing or deleted source Markdown SHALL surface as failing unit tests that expect exact source path traceability. Empty converted content SHALL fail route-visible/content tests. No runtime fallback or placeholder topic SHALL be introduced for missing OS content.

**Acceptance criteria:**

- `tests/unit/professionalTopics.spec.ts` fails before implementation and passes after it verifies 10 OS topics, source traceability, representative keywords, and no empty sections.
- `tests/unit/subjectTopics.spec.ts` fails before implementation and passes after it verifies the 10 OS topics appear in the agreed order on `computerPrinciples`.
- `npm run typecheck` and `npm run build` pass.
- Manual mobile/offline smoke check confirms `/computer-principles` can open an OS topic and read at least one table-heavy or calculation-heavy section without layout breakage.

## Risks / Trade-offs

- [Risk] Source Markdown names changed during user editing → Mitigation: tests assert the exact approved source path set used by implementation.
- [Risk] Large manual content block increases `professionalTopics.ts` size → Mitigation: no new dependency or parser; build output remains under the existing chunk warning threshold, and `npm run build` verifies bundle health.
- [Risk] Manual transcription can alter formulas or scheduling tables → Mitigation: tests include representative keywords and calculation artifacts; content review compares high-risk algorithm sections against the Markdown source.
- [Risk] `cp-hardware-protection` remaining hidden may look like a missing topic to future maintainers → Mitigation: document that 3-2 combines I/O and hardware protection under `cp-io-and-interrupts`; future separate source can fill that skeleton later.
