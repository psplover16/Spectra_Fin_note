## Why

目前 app 只有學習骨架與 placeholder，專業科目缺少可自學、可應考、可驗證的正式內容。現在需要把 _private/propose.md 收斂的科目、演算法、來源與工作流程轉成可實作的 Spectra change，讓後續內容匯入有規格、流程與驗收依據。

## What Changes

- 新增資料庫與演算法專業路由，並同步科目鍵值、導覽與預載。
- 建立專業科目內容模型，支援考試大綱、記憶重點、理解說明、考點、例題、來源註記與中英專有名詞。
- 匯入計概、網概、資料庫、資管、程式、演算法的指定來源內容，正式內容分批替換 placeholder。
- 演算法內容需涵蓋排序與常見演算法、Java 遞迴/非遞迴範例、複雜度、穩定性與 verifier 檢查。
- 建立 _TMP 草稿、副代理生成、verifier 校對與主代理整合的內容產製流程，tasks.md 任務數量不設上限。
- 在 _TMP 內建立 `待生成主題清單_yyyyMMdd-HHmmss.md`，作為全部 manifest topic 的待生成追蹤表，方便主代理、副代理與 verifier 對齊狀態。

## Non-Goals

- 第一批不納入 _private/程式語言_all.pdf。
- 不讀取個人筆記或受限資料夾。
- 不一次生成全部正式內容後直接入庫；未通過 verifier 的草稿不得匯入正式 app data。
- 本次來源以指定 txt/md 為準，不主動擴展到近 8 年考古題全文蒐集。

## Capabilities

### New Capabilities

- professional-subject-routing: covers database and algorithms route exposure, subject keys, navigation, and preload reachability.
- professional-topic-content: covers structured professional learning topics with source traceability, exam outline, memory points, understanding guidance, beginner-friendly Traditional Chinese content, and bilingual technical terms.
- algorithm-example-content: covers algorithm and sorting topics with Java recursive and iterative examples, complexity and stability data, prerequisites such as sorted input for binary search, and validation expectations.

### Modified Capabilities

(none)

## Impact

- Affected specs: professional-subject-routing, professional-topic-content, algorithm-example-content
- Affected code:
  - New: src/modules/database/views/DatabaseView.vue; src/modules/algorithms/views/AlgorithmsView.vue; src/modules/subjectTopics/data/professionalTopics.ts; _TMP/; _TMP/待生成主題清單_yyyyMMdd-HHmmss.md
  - Modified: src/app/router.ts; src/app/routePreload.ts; src/shared/components/RouteTabs.vue; src/modules/subjectTopics/types/subjectTopic.ts; src/modules/subjectTopics/data/placeholderTopics.ts; src/modules/subjectTopics/components/SubjectTopicPage.vue; src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts; src/shared/components/TeachingCodeBlock.vue; PROJECT_ARCHITECTURE.md
  - Removed: none
