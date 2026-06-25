## Context

`/computer-principles-v2` 已透過 `ComputerPrinciplesV2View` 讀取 `getSubjectTopics('computerPrinciplesV2')`，再由 `SubjectTopicPage` 與 `SubjectTopicCard` 顯示 route-visible topics。現況把阿姆達爾、CPU 排班、死結、分頁分段、OOP、基礎資料結構包在單一 `cpv2-supplemental-data` / `補充資料` topic；使用者已確認要改成六張正式 card，且舊補充資料 card 要移除。

## Goals / Non-Goals

**Goals:**

- 讓 `computerPrinciplesV2` route 顯示 20 張 topics：`加強練習`、六張補充 cards、13 張 catalog topics。
- 將六張補充 cards 建成正式 `ProfessionalSubjectTopic`，都可展開、完成、bookmark，且使用既有 `lessonArticle` blocks。
- 讓 `CPU 排班演算法` 使用 `_private/計概補充/CPU排班演算法_考試速記版.md`，保留比較表、20 題與答案解析表。
- 恢復 `_private/計概補充/計算機概論_重點講義_01.md` 作為另外五張補充 cards 的來源追溯，並以目前已核准的六 section 內容為拆分基礎。

**Non-Goals:**

- 不新增 route、component、Pinia store、IndexedDB schema、localStorage migration、IPC 或 runtime Markdown renderer。
- 不改 `computerPrinciplesV2` subject key、progress namespace、catalog-backed 13 張 topics 的相對順序。
- 不新增線上同步；所有教材仍在 bundle 中離線提供。
- 不新增測驗題庫資料模型；CPU 20 題以講義內容呈現，不建立題庫欄位、正解狀態或作答流程。

## Decisions

### Replace the single supplemental data topic with six formal topics

採用六張 `cpv2-supplemental-*` topics 取代 `cpv2-supplemental-data`，而不是在舊 topic 內做 collapsible subsections。原因是使用者要的是新增與刪除 card；六張正式 topics 才能自然取得既有完成勾選、bookmark 與展開狀態。

替代方案：保留 `補充資料` card 並只新增內部 section。此方案違反「最後刪除補充資料 card」，也讓 CPU 排班無法成為可獨立追蹤的複習項目，因此淘汰。

### Keep rendering through existing lessonArticle blocks

CPU Markdown 與另外五張補充內容都轉成既有 `lessonArticle` blocks。表格保留為 `table`，主要流程與 20 題保留為 `orderedList`，一般考點可用 paragraph 或 list，但每張 card 必須有明確有序學習流程。這維持目前 PWA 的 static data 與離線能力，不引入 runtime parser。

替代方案：新增 raw Markdown renderer。此方案會擴大 UI、離線快取與安全檢查範圍，且與既有 `Computer principles v2 uses lessonArticle content` 契約相反，因此淘汰。

### Preserve source traceability by restoring the legacy supplemental source

`_private/計概補充/計算機概論_重點講義_01.md` 目前在工作區缺失，但可從 Git HEAD 取回。apply 時要恢復它，讓阿姆達爾、死結、分頁分段、OOP、基礎資料結構仍有 approved source path；CPU 排班 topic 則改追溯新版 CPU 速記 MD。

替代方案：只從 `computerPrinciplesV2Topics.ts` 既有 data 回推五張內容。此方案能做出畫面，但 source traceability 較弱，不符合 professional topic source contract，因此只作為備援，不作為主方案。

### Leave old progress and bookmark state untouched

刪除 `cpv2-supplemental-data` 後，舊 id 的 localStorage 完成狀態或 bookmark 不轉移。既有 `SubjectTopicPage` 和 progress storage 只會對目前 route-visible topics 生效；被移除 id 的殘留值不顯示，也不阻擋新 topics。

替代方案：把舊 `cpv2-supplemental-data` 狀態 fan-out 到六張新 topics。這會產生語意不準確的完成狀態，且需要額外 migration 邏輯；本次 scope 明確不做。

## Implementation Contract

Behavior: 開啟 `/computer-principles-v2` 時，unfinished topic list 的前八張依序為 `加強練習`、`阿姆達爾定律`、`CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`基礎資料結構`、`架構與計算理論`。畫面與 component 行為沿用既有 `SubjectTopicCard`，沒有額外補充資料區塊。

Data shape: `professionalTopicsBySubject.computerPrinciplesV2` 包含 20 個 `ProfessionalSubjectTopic`。六張補充 cards 使用 `subjectKey: 'computerPrinciplesV2'`、`sourceBatch: 'computer-principles-v2-route'`、單一 `lessonArticle` block、非空 `terms`，且不含 `questionText`、`correctAnswer`、`backendSyncId` 或 `remoteQuestionId`。`cpv2-supplemental-data` 不再存在於 formal data 或 route-visible data。

Source ownership: `cpv2-supplemental-cpu-scheduling` 的 `sourceFiles` 與 lessonArticle `sourceFiles` 只指向 `_private/計概補充/CPU排班演算法_考試速記版.md`。另外五張補充 cards 指向 `_private/計概補充/計算機概論_重點講義_01.md`，並只保留該講義內對應 section 的 learner-facing content。

Storage boundary: localStorage 繼續只保存既有 subject topic progress/bookmark 狀態；本變更不新增 key、不改 value shape、不清理舊 `cpv2-supplemental-data` 殘留。Pinia 與 IndexedDB 不參與本 route topic data。

Acceptance criteria: targeted unit tests 驗證 topic 數量、順序、id 移除、sourceFiles、CPU table/20 題/答案表內容與 catalog 相對順序；component smoke 驗證六張補充 cards 透過既有 topic card 展開；typecheck 通過；`spectra validate split-cpv2-supplemental-data-cards` 通過。

Scope boundaries: apply 只能修改正式 topic data、補充來源檔、相關 unit/component tests 與必要規格歸檔；不得新增 route、renderer、migration、題庫系統、外部依賴或網路流程。

## Risks / Trade-offs

- [Risk] 舊 `cpv2-supplemental-data` 的使用者進度不會轉移 → Mitigation：明確列為 non-goal，測試只驗證新 topics 的 route-visible 狀態。
- [Risk] CPU Markdown 的表格與題目格式被過度壓扁 → Mitigation：spec 與 tests 同時檢查比較表、20 題 orderedList、答案解析 table 的 marker content。
- [Risk] 恢復舊補充講義後又把已排除的機器指令週期、五大單元、CPU 組成、記憶體階層帶回畫面 → Mitigation：五張非 CPU cards 只拆出既有 approved sections，測試反向檢查舊排除內容不出現在 split supplemental topics。
- [Risk] route-visible position 改變使浮點數位置測試失準 → Mitigation：測試以相對順序驗證 `補數轉換`、`浮點數轉換`、`數碼與文字碼`，同時驗證 catalog segment 從第八張開始。

## Migration Plan

1. Restore or add the two source Markdown files needed by the split cards.
2. Replace the old supplemental topic data with six formal topics and update tests in the same change.
3. Run targeted tests and typecheck locally before archive.
4. Rollback path is to restore `cpv2-supplemental-data`, remove the six split topics, and revert the spec delta before archive.

## Open Questions

None. The user confirmed the proposed names, ids, 20-topic count, CPU formatting approach, no migration, and existing route architecture.
