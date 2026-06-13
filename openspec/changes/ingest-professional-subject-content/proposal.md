## Why

目前 app 只有學習骨架與 placeholder，專業科目缺少可自學、可應考、可驗證的正式內容。現在需要把 _private/propose.md 收斂的科目、演算法、來源與工作流程轉成可實作的 Spectra change，讓後續內容匯入有規格、流程與驗收依據。

## What Changes

- 新增資料庫與演算法專業路由，並同步科目鍵值、導覽與預載。
- 建立專業科目內容模型，支援考試大綱、記憶重點、理解說明、考點、例題、來源註記與中英專有名詞。
- 匯入計概、網概、資料庫、資管、程式、演算法的指定來源內容，正式內容分批替換 placeholder。
- 演算法內容需涵蓋排序與常見演算法、Java 遞迴/非遞迴範例、複雜度、穩定性與 verifier 檢查。
- 建立 _TMP 草稿、副代理生成、verifier 校對與主代理整合的內容產製流程，tasks.md 任務數量不設上限。
- 在 _TMP 內建立 `待生成主題清單_yyyyMMdd-HHmmss.md`，作為全部 manifest topic 的待生成追蹤表，方便主代理、副代理與 verifier 對齊狀態。
- 品質補救：計概第一批正式內容不得只匯入抽樣 topic，需讓 `/computer-principles` 覆蓋計概 manifest 全部 topic，並以測試驗證 topic 數量與來源追蹤。
- 品質補救：_TMP 草稿不得以 manifest、任務表或簡短摘要充當 AI 生成講義；已匯入 topic 必須有實質教學草稿、verifier 結果與正式 app data 對應。
- 品質補救：馮紐曼架構需補足專業科目深度，包含程式內儲、五大單元、指令週期、瓶頸、Harvard 比較、例子、易錯點與中英專有名詞。
- 流程修正：所有專業路由都必須各自跑一套完整內容產製流程，從來源掃描、topic 標記、單一 topic prompt、副代理 draft、verifier verified、主流程匯入到測試與人工抽查，不得跨路由混批生成或直接由模板匯入正式 app data。
- 流程修正：全域來源標記定義不得使用封閉清單；主流程需先掃描所有允許來源 txt/md 與本輪輔助來源，分類實際出現的方括號標記，排除程式碼陣列、索引與任務標記等非教材標記語法，再把每個有效標記定義寫入 `_private/TMP/source-label-definitions.md`。
- 流程修正：為避免大量內容污染主流程，route source inventory、topic prompt、draft writing、draft verification、route integration audit 與 import readiness check 都優先由副代理處理；主流程只負責存取規則、route 邊界、派工、正式匯入、測試與最後回報。
- 內容重做：第 16 組全路由教材重做時，現有 professionalTopics 內的專業科目正式教材內容一律視為 obsolete，不得當成匯入基底或 fallback；每個專業 route 的最終正式 topic list 只能由本輪 route tracking、`.verified.md` 與 import readiness 通過結果重建。

## Non-Goals

- 第一批不納入 _private/程式語言_all.pdf。
- 不讀取個人筆記或受限資料夾。
- 不一次生成全部正式內容後直接入庫；未通過 verifier 的草稿不得匯入正式 app data。
- 本次來源以指定 txt/md 為準，不主動擴展到近 8 年考古題全文蒐集。
- 不刪除 app route、頁面殼、共用渲染元件、SubjectKey、localStorage progress schema 或共同科目內容；「刪除原本內容」只指專業科目舊教材 topic data、舊 blocks、舊 sourceSummary 與舊 verifier/import summary 不再保留為正式內容。

## Capabilities

### New Capabilities

- professional-subject-routing: covers database and algorithms route exposure, subject keys, navigation, and preload reachability.
- professional-topic-content: covers structured professional learning topics with source traceability, exam outline, memory points, understanding guidance, beginner-friendly Traditional Chinese content, and bilingual technical terms.
- algorithm-example-content: covers algorithm and sorting topics with Java recursive and iterative examples, complexity and stability data, prerequisites such as sorted input for binary search, and validation expectations.

### Modified Capabilities

- professional-topic-content: 補充 route-scoped content production workflow，要求每個專業路由獨立完成來源掃描、標記定義、教材 draft、verifier、正式匯入與抽查流程。
- professional-topic-content: 補充 source-label discovery and classification，要求 route 產製前完整掃描、分類並定義所有有效來源標記，不得只使用 artifact 內列出的範例標記。
- professional-topic-content: 補充 subagent-isolated route production，要求副代理只寫入 route-scoped temporary prompt、draft、verified、audit 與 readiness artifact，正式 app data 只能由主流程在 verified/readiness 通過後更新。
- professional-topic-content: 補充 stale professional content removal，要求全路由重做時舊專業教材內容作廢，最終 formal app data 不得殘留沒有本輪 verified/import readiness 依據的 topic。

## Impact

- Affected specs: professional-subject-routing, professional-topic-content, algorithm-example-content
- Affected code:
  - New:
    - src/modules/database/views/DatabaseView.vue
    - src/modules/algorithms/views/AlgorithmsView.vue
    - src/modules/subjectTopics/data/professionalTopics.ts
    - _TMP/
    - _TMP/待生成主題清單_yyyyMMdd-HHmmss.md
    - _private/TMP/<route>/
  - Modified:
    - src/app/router.ts
    - src/app/routePreload.ts
    - src/shared/components/RouteTabs.vue
    - src/modules/subjectTopics/types/subjectTopic.ts
    - src/modules/subjectTopics/data/placeholderTopics.ts
    - src/modules/subjectTopics/components/SubjectTopicPage.vue
    - src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts
    - src/shared/components/TeachingCodeBlock.vue
    - PROJECT_ARCHITECTURE.md
  - Removed: none
