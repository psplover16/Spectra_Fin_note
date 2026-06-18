# Discuss：Database / Programming Markdown 匯入規劃

## 已讀取內容

- 已讀取 `_private/discuss.txt`。
- 已讀取 `_private/MD/資料庫/` 內 6 個 Markdown：
  1. `資料庫_1_基礎概念與架構.md`
  2. `資料庫_2_鍵與ERD.md`
  3. `資料庫_3_正規化.md`
  4. `資料庫_4_SQL分類與CRUD.md`
  5. `資料庫_5_SQL查詢進階.md`
  6. `資料庫_6_交易ACID與NoSQL.md`
- 已讀取 `_private/MD/程式設計/` 內 7 個 Markdown：
  1. `程式設計_1_語言執行方式與程式基礎.md`
  2. `程式設計_2_函式與參數傳遞.md`
  3. `程式設計_3_陣列字串與例外處理.md`
  4. `程式設計_4_指標.md`
  5. `程式設計_5_物件導向OOP.md`
  6. `程式設計_6_遞迴.md`
  7. `程式設計_7_各語言特性.md`
- 已 scout 相關 source：
  - `src/modules/subjectTopics/data/professionalTopics.ts`
  - `src/modules/subjectTopics/data/subjectTopics.ts`
  - `src/modules/networking/views/NetworkingView.vue`
  - `src/modules/database/views/DatabaseView.vue`
  - `src/modules/programming/views/ProgrammingView.vue`
- 補充需求已讀取 `_private/MD/系統分析與設計/` 內 5 個 Markdown：
  1. `系統分析與設計_1_SDLC與SSDLC.md`
  2. `系統分析與設計_2_內聚力與耦合力.md`
  3. `系統分析與設計_3_OO關係與UML.md`
  4. `系統分析與設計_4_測試.md`
  5. `系統分析與設計_5_系統導入與PDCA.md`
- 補充 scout 相關 route/source：
  - `src/app/router.ts`
  - `src/app/routePreload.ts`
  - `src/shared/components/RouteTabs.vue`
  - `src/modules/commonSubjects/components/CommonSubjectSwitcher.vue`
  - `src/modules/commonSubjects/config/commonSubjectOptions.ts`
  - `src/modules/subjectTopics/types/subjectTopic.ts`

## 討論模式

Found `professionalTopics.ts`, `subjectTopics.ts`, and the three route views, so this is **Assumptions mode**.

## 建議結論

**Decision draft**：建議拆成兩個 Spectra changes，先做 `fill-database-content`，完成後再排 `fill-programming-content`。

**Rationale**：database 與 programming 都會新增 markdown-backed topics、排序規則、測試與內容轉換；拆開可以讓每次 apply 的來源檢查、TDD 紅綠燈、驗證失敗歸因更乾淨。若合併成一次做，變更量會很大，也比較難判斷失敗是 database 還是 programming 造成。

**Capture to**：
- `openspec/changes/fill-database-content/`
- 後續再建立 `openspec/changes/fill-programming-content/`
- 補充新增：後續需建立 `openspec/changes/add-system-design-route-content/`，或在你確認後與 programming 排程整合。

## My Assumptions

1. **Database 先匯入 6 個 MD topics，並排在既有 database topics 前面**
   - Approach：新增 6 個 markdown-backed database topics，標題使用各 MD 的 H1；`professionalTopicsBySubject.database` 前 6 筆為新 topics，既有 11 個 database skeleton/topics 保留在後方。
   - Evidence：`_private/discuss.txt` 明確要求 database route 先做；`professionalTopics.ts` 目前已有 11 個 `subjectKey: "database"` topics。
   - If wrong：若你其實要一次合併或替換既有 topics，proposal/tasks 的排序與測試會寫錯。

2. **Programming 不是本次 database change 的實作內容，而是 database 完成後的下一個排程**
   - Approach：本次先 formalize database；在 database change 的 proposal/tasks 中記錄 follow-up：建立 `fill-programming-content`，匯入 7 個 programming MD。
   - Evidence：`discuss.txt` 寫「上述做完之後，再幫我改成針對以下做排程」。
   - If wrong：如果你希望同一個 change 同時做 database + programming，就不該拆成兩個 proposal。

3. **內容轉換沿用 networking 的 `lessonArticle` 風格，不新增 UI 架構**
   - Approach：在 `professionalTopics.ts` 中建立 database/programming markdown-backed content map、terms、sourceFiles、lessonArticle sections，並用 factory 產生正式 topic。
   - Evidence：networking 已有 `markdownBackedNetworkingContentById` 與 `createMarkdownBackedNetworkingTopic`；DatabaseView/ProgrammingView/NetworkingView 都共用 `SubjectTopicPage`。
   - If wrong：若需要新元件或新資料模型，proposal 要補 design；目前看起來不需要。

4. **MD 編排應盡量保留，只做 renderer 必要正規化與客觀錯誤修正**
   - Approach：保留原 Markdown 的 heading/table/list/code/paragraph 順序；轉成既有 `lessonArticle` blocks；不自行新增教材段落、不任意刪改資料。
   - Evidence：`discuss.txt` 多次要求「盡量以 md 檔內的編排」、「僅做錯誤辨別與最小幅度修正」、「別隨意新增、刪除、修改資料」。
   - If wrong：若你希望我大幅濃縮或重寫成考前版，spec 必須改成「重寫/摘要」而不是「來源保真匯入」。

5. **既有 topics 保留為 suffix；是否 route-visible 取決於是否已有內容**
   - Approach：排序上既有 database/programming topics 都放在新 MD topics 後方；但若既有 topic 目前仍是空 lessonArticle skeleton，`getSubjectTopics()` 仍會過濾掉它，不會顯示在 route。
   - Evidence：`subjectTopics.ts` 只回傳 `hasSubjectTopicContent(topic)` 為 true 的 topics。
   - If wrong：如果你要求既有 topics 也要顯示在 route，就需要同時補既有 topics 的內容，scope 會變大。

6. **系統分析與設計應從 programming 拆成新的 route：系統設計**
   - Approach：新增 subject key 與 route，例如 `systemDesign` / `/system-design`；新增 `SystemDesignView.vue`；把 `_private/MD/系統分析與設計/` 5 個 MD 匯入此 route，標題使用各 MD 的 H1；tab label 顯示 `系統設計`。
   - Evidence：你補充要求「另開一個新的按鈕，叫做系統設計」且「內容也要引入至新的系統設計路由內」；目前 `professionalTopics.ts` 把系統分析相關 skeleton 放在 `subjectKey: "programming"`。
   - If wrong：若系統分析仍要留在 programming，新增 route 會造成內容分類與使用者預期不一致。

7. **英文/國文應只隱藏導覽按鈕，不先刪除 route**
   - Approach：先從導覽 UI 隱藏 `CommonSubjectSwitcher` 或調整 common subject options，使英文/國文不再出現在主要按鈕；`/english`、`/chinese` route 是否保留 direct URL 需你確認。
   - Evidence：目前英文/國文不是 `RouteTabs.vue` 的 primary tabs，而是 `CommonSubjectSwitcher` 的下拉選項；`router.ts` 與 `routePreload.ts` 仍有 `/english`、`/chinese` route。
   - If wrong：如果你要完全移除英文/國文 route，還要改 `subjectKeys`、`professionalTopicsBySubject`、route config、preload、tests 與 localStorage normalization，scope 會比「隱藏按鈕」大。

## Interface Depth Check

Database / Programming 匯入本身沒有新增 module、IPC command、跨層 flow 或 storage abstraction；只是匯入靜態 route data 並沿用既有 `SubjectTopicPage` / `lessonArticle` contract。

補充的 `系統設計` 需求會新增 top-level route，因此需要 interface depth check：

1. **Seam location**
   - Route boundary 應落在 `src/app/router.ts`、`src/app/routePreload.ts`、`src/shared/components/RouteTabs.vue`。
   - Subject content boundary 應落在 `src/modules/subjectTopics/types/subjectTopic.ts` 與 `src/modules/subjectTopics/data/professionalTopics.ts`。
   - View 應遵循既有 pattern，新增 `src/modules/systemDesign/views/SystemDesignView.vue`，只負責把 `subjectKey` 與 title 傳給 `SubjectTopicPage`。

2. **Adapter count**
   - 應只有一層 route view adapter：`SystemDesignView.vue -> SubjectTopicPage`。
   - 不需要再包一層 system-design-specific component，除非後續此 route 有不同 UI 行為。

3. **Depth**
   - `SystemDesignView.vue` 本身會很薄，但這是現有各科 route 的一致 pattern。
   - 真正行為在 shared `SubjectTopicPage` 與 `professionalTopicsBySubject.systemDesign`：顯示新 route、讀取學習進度、展開 lessonArticle sections。

4. **Deletion test**
   - 若刪除 `systemDesign` subject key / route preload / router entry / tab / view，`系統設計` 無法導航。
   - 若刪除 `professionalTopicsBySubject.systemDesign`，route 即使存在也沒有內容。
   - 因此這不是無意義 pass-through；它是既有 route architecture 的必要接點。

## 發現的問題與風險

1. **是否拆成兩個 changes 需要你確認**
   - 我建議拆成 `fill-database-content` 與 `fill-programming-content`。
   - 若你想一次做完 13 個 MD，也可以，但測試與 review 會更大包。

2. **`sourceFiles` 是否只放 MD 路徑需要確認**
   - networking 目前是「原始 txt + MD」一起列。
   - algorithms data-structure 則是新 MD topics 只列 exact MD 路徑。
   - 我建議 database/programming 新 topics 以 exact MD 路徑為主，既有 old txt topics 保留在後方 suffix。

3. **programming route 目前混有程式設計與系統分析 topics**
   - `professionalTopics.ts` 目前 `subjectKey: "programming"` 底下包含 `_private/程式.txt` 與 `_private/系統分析與設計.txt` 的既有 skeleton。
   - 你補充後，較合理的新假設是：系統分析與設計應移到新的 `系統設計` route，不再作為 programming 的 route-visible 內容。

4. **完整 unit suite 目前可能仍有既有無關失敗**
   - 上一輪完整 `npm run test:unit` 已知有 networking / computer-principles stale expectations 失敗。
   - 這次 change 應要求 targeted tests、typecheck、`spectra validate --strict` 通過；若完整 suite 仍因既有問題失敗，apply summary 要列出，不應偷修無關內容。

5. **工作區已有 unrelated `_private/MD` 變更**
   - 目前工作區已有資料庫/程式相關私有 MD rename/delete/new file 變更。
   - apply 時要避免 revert 使用者既有變更；只應改本 change 需要的 source/test/spec files。

6. **英文/國文按鈕的位置與移除程度需釐清**
   - 現況不是兩顆獨立按鈕，而是一個 `CommonSubjectSwitcher`，預設顯示英文，可展開國文。
   - 若只要「隱藏按鈕」，可從 `RouteTabs.vue` 移除/不渲染 `CommonSubjectSwitcher`。
   - 若要連 `/english`、`/chinese` 路由也移除，會牽涉更多測試與資料型別，且可能影響既有 localStorage progress schema。

## 建議需求草案

### Database

- Import all 6 Markdown files under `_private/MD/資料庫/` in natural filename order.
- Each imported topic title should match the Markdown H1.
- Each imported topic should:
  - have exact source traceability to its Markdown file,
  - have non-empty summary and terms,
  - use `lessonArticle` as the first and only learner-facing block unless a strong reason appears,
  - preserve source heading/table/list/code/paragraph order as much as the renderer allows,
  - avoid generated placeholder phrases such as `教材本文`, `來源大綱不是成品`, `old fixed template removed`.
- Existing database topics should remain after the 6 imported topics, preserving their relative order.

### Programming Follow-up

- After database is completed, create/schedule a separate change for `_private/MD/程式設計/`.
- Import all 7 Markdown files in natural filename order into route `programming`.
- Follow the same source-preserving, networking-style `lessonArticle` contract.
- Existing programming topics should remain after the 7 imported topics unless you answer otherwise.

### System Design Route

- Add a new route and tab labeled `系統設計`.
- Suggested route path: `/system-design`.
- Suggested subject key: `systemDesign`.
- Import all 5 Markdown files under `_private/MD/系統分析與設計/` in natural filename order.
- Each imported topic title should match the Markdown H1:
  1. `系統分析與設計 1：SDLC + SSDLC`
  2. `系統分析與設計 2：內聚力 Cohesion + 耦合力 Coupling ★`
  3. `系統分析與設計 3：OO 四種關係 + UML 四種圖`
  4. `系統分析與設計 4：測試 Testing`
  5. `系統分析與設計 5：系統導入 + PDCA`
- Use the same source-preserving `lessonArticle` contract as networking/database/programming.
- Hide English and Chinese route buttons from visible navigation.
- Update tests for:
  - route config/preload includes `/system-design`,
  - `RouteTabs` shows `系統設計`,
  - English/Chinese buttons are hidden from navigation,
  - `getSubjectTopics('systemDesign')` returns the 5 imported topics in source order,
  - system design topics use `lessonArticle` and exact source traceability.

## 待你回答

請直接在下面填：

1. 是否拆成兩個 changes？
   - 建議：`fill-database-content` 先做，`fill-programming-content` 後做。
   - 你的回答：不用拆，但你任務可以做多一點，方便後續追蹤。不過你這次任務要做完喔，任務數量不上限

2. 新 imported topics 的 `sourceFiles` 要怎麼記？
   - 建議：只放 exact MD 路徑；既有 old txt topics 保留在後方。
   - 你的回答：依你建議

3. 既有 database/programming skeleton topics 是否只需保留在 formal data 後方，不需要補內容？
   - 建議：是，只保留 suffix；route-visible 內容以本次 MD topics 為主。
   - 你的回答：依你建議

4. `程式設計_*.md` 是否要排在所有既有 programming topics 前面，包含系統分析 topics 前面？
   - 原建議：是。
   - 補充後的新建議：`程式設計_*.md` 排在 programming 前面；系統分析與設計移到新的 `系統設計` route，不再排在 programming 內。
   - 你的回答：依你建議

5. MD 內像「你朋友提醒」、「學習方式」這類前導說明是否保留在 `lead`？
   - 建議：保留，因為 networking 也是這種風格；只移除明顯不是教材內容的 placeholder 或錯誤。
   - 你的回答：依你建議

6. `系統設計` route path 與 subject key 是否採用建議名稱？
   - 建議：route path 用 `/system-design`，subject key 用 `systemDesign`，tab label 用 `系統設計`。
   - 你的回答：依你建議

7. 英文/國文是只隱藏導覽按鈕，還是完全移除 route？
   - 建議：先只隱藏導覽按鈕，保留 `/english`、`/chinese` direct URL 與 subject keys，避免擴大 localStorage/type/test 影響。
   - 你的回答：依你建議

8. `系統設計` 按鈕位置怎麼放？
   - 建議：放在主要 tabs 最右側，也就是目前 `CommonSubjectSwitcher` 的位置；英文/國文下拉隱藏後，此位置由 `系統設計` 取代。
   - 你的回答：依你建議

9. 既有 `programming-system-analysis-*` skeleton topics 要如何處理？
   - 建議：不要讓它們在 programming route-visible；新的 5 個 MD topics 進 `systemDesign`。既有 skeleton 可暫時保留在 formal data 後方或在 change 中改 subjectKey/移除，需你確認。
   - 你的回答：依你建議
