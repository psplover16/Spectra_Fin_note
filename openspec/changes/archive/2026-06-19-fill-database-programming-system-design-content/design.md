## Context

本變更承接使用者在 `_private/propose.md` 回覆後確認的需求：資料庫 6 份、程式設計 7 份、系統分析與設計 5 份 Markdown 需要一次匯入正式學習路由。現況中 `/database`、`/programming` 已存在，但正式資料仍以既有 skeleton 與部分匯入內容為主；系統分析與設計內容過去混在 programming 相關 skeleton 命名下，導覽沒有獨立入口。

App shell 目前以 `RouteTabs` 顯示專業科目，並在右側渲染 `CommonSubjectSwitcher` 讓使用者切換英文/國文。使用者本次明確要求：在英文按鈕旁的位置另開一個新按鈕 `系統設計`，並把英文、國文路由的可見按鈕隱藏；同時保留 `/english` 與 `/chinese` direct route，不刪除共同科目本身。

本專案是純前端 PWA，新增內容會被打包成靜態 TypeScript 資料；不新增 API、不新增遠端同步、不新增 store。既有 topic progress 仍依 `SubjectKey` 與既有 progress storage 流程運作。

## Goals / Non-Goals

**Goals:**

- 新增 `systemDesign` subject key、`/system-design` route、`系統設計` route tab 與對應 Vue view。
- 將 `_private/MD/資料庫/` 的 6 份 Markdown 依檔名自然順序轉成 `/database` 的前置正式 topics。
- 將 `_private/MD/程式設計/` 的 7 份 Markdown 依檔名自然順序轉成 `/programming` 的前置正式 topics。
- 將 `_private/MD/系統分析與設計/` 的 5 份 Markdown 依檔名自然順序轉成 `/system-design` 的正式 topics。
- 英文與國文 direct route、subject key、既有共同科目資料結構維持可用，但不再出現在 app shell 的可見主導覽按鈕內。
- 所有新增 topics 使用既有 `lessonArticle` block shape，保留來源編排與使用者語氣，只做 renderer 必要正規化與客觀錯誤修正。

**Non-Goals:**

- 不移除 `/english`、`/chinese` route 或 `english`、`chinese` subject key。
- 不新增題庫、測驗流程、題型、題幹、四個選項、正解或選項辨析解析。
- 不引入資料庫、IndexedDB 結構調整、Pinia store 或新外部依賴。
- 不擴寫或重寫 Markdown 教材為全新講義；apply 階段只做必要格式轉換、可讀性整理與明確錯誤修正。
- 不處理既有 unit suite 中與本變更無關的 stale expectations。

## Decisions

### 新增 systemDesign 科目鍵與獨立路由

`systemDesign` 會加入 `SubjectKey` union 與 `ProfessionalTopicsBySubject` 映射，路由 path 使用 `/system-design`，顯示 label 使用 `系統設計`。新增 view 採用現有專業科目 view 的最小模式：以 `SubjectTopicPage` 呈現 `subjectKey="systemDesign"` 與 `title="系統設計"`。

替代方案：把系統分析與設計繼續塞在 `/programming`。淘汰原因是使用者明確要求新增 `系統設計` 按鈕與路由；繼續混放會讓分類與考試閱讀方式不一致，也讓程式設計 topic 清單過長。

### 以 Markdown 批次映射為新增 topics 的唯一來源

apply 階段必須以這 18 份 Markdown 為來源，不從舊 TMP draft 或舊 txt 內容推導新正式 topics。新增 topics 的 `sourceFiles` 必須只列對應 Markdown 路徑；`sourceSummary` 描述該 Markdown 的主題範圍。

資料庫來源順序：

1. `_private/MD/資料庫/資料庫_1_基礎概念與架構.md`
2. `_private/MD/資料庫/資料庫_2_鍵與ERD.md`
3. `_private/MD/資料庫/資料庫_3_正規化.md`
4. `_private/MD/資料庫/資料庫_4_SQL分類與CRUD.md`
5. `_private/MD/資料庫/資料庫_5_SQL查詢進階.md`
6. `_private/MD/資料庫/資料庫_6_交易ACID與NoSQL.md`

程式設計來源順序：

1. `_private/MD/程式設計/程式設計_1_語言執行方式與程式基礎.md`
2. `_private/MD/程式設計/程式設計_2_函式與參數傳遞.md`
3. `_private/MD/程式設計/程式設計_3_陣列字串與例外處理.md`
4. `_private/MD/程式設計/程式設計_4_指標.md`
5. `_private/MD/程式設計/程式設計_5_物件導向OOP.md`
6. `_private/MD/程式設計/程式設計_6_遞迴.md`
7. `_private/MD/程式設計/程式設計_7_各語言特性.md`

系統設計來源順序：

1. `_private/MD/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md`
2. `_private/MD/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md`
3. `_private/MD/系統分析與設計/系統分析與設計_3_OO關係與UML.md`
4. `_private/MD/系統分析與設計/系統分析與設計_4_測試.md`
5. `_private/MD/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md`

替代方案：沿用舊 `_private/TMP/` verified topics。淘汰原因是使用者指定目前 Markdown 資料夾內容才是來源；TMP 內容可能與最新手動整理版本不一致。

### 新增 topics 前置且既有 skeleton 保留在後方

database 與 programming 的新增 Markdown topics 會放在該 subject 的正式陣列前方；既有 skeleton topics 仍留在後方，避免刪除既有規劃資料。因 `getSubjectTopics` 只回傳有可見 block 的 topics，空 skeleton 不會出現在 route-visible 清單內。

系統分析與設計新增為 `systemDesign` 的 5 個可見 topics。既有 `programming-system-analysis-*` skeleton 不升級為 programming route-visible 內容，也不混入 `/programming` 的新增可見清單。

替代方案：刪除既有 skeleton 或把 skeleton 全數 re-key 到 `systemDesign`。淘汰原因是刪除會造成未來規劃資料流失；全數 re-key 可能把未整理的舊 skeleton 帶進新路由，與使用者指定「引入資料夾內 MD」的範圍不一致。

### 導覽只顯示專業科目與系統設計

`RouteTabs` 會停止渲染共同科目切換器，改為在既有專業科目 tabs 後加入 `/system-design` 的 `系統設計` tab。`/english` 與 `/chinese` 仍保留在 router 與 preload registry，因此 direct URL 可正常開啟；只是 app shell 主導覽不再出現 `英文`、`國文` 或共同科目切換按鈕。

替代方案：保留 `CommonSubjectSwitcher` 但用設定隱藏 English/Chinese 選項。淘汰原因是使用者要在英文按鈕旁的位置換成系統設計，而共同科目切換器本身的存在會讓「隱藏英文、國文路由按鈕」的 UX 語意不清。

### 延續 lessonArticle 資料模型與離線純靜態內容

新增講義資料沿用 `ProfessionalSubjectTopic`：`id`、`subjectKey`、`title`、`summary`、`sourceBatch`、`sourceFiles`、`sourceSummary`、`examOutline`、`memoryPoints`、`understandingNotes`、`difficulty`、`topicType`、`terms` 與 `blocks`。`blocks` 內使用單一或多個 `lessonArticle`，`lessonArticle` 包含 `sourceFiles`、`sourceSection`、`lead`、`sections`，sections 再由 paragraph、list、table、subsection、indentedGroup 組成。

本變更不新增題庫資料，因此題型、題幹、四個選項、正解、各選項辨析解析與講義關聯欄位皆不新增。若未來新增測驗，必須由另一個 change 定義題庫模型。

離線資料職責維持現況：

- TypeScript 靜態資料負責講義內容，隨 PWA bundle 離線可用。
- localStorage 僅由既有學習進度功能使用，新增 `systemDesign` key 後沿用同一套 subject progress key。
- IndexedDB 不參與本變更。
- Pinia store 不新增 state shape。

替代方案：把 Markdown 當 runtime asset 載入。淘汰原因是目前路由已用靜態 TypeScript topic data，runtime Markdown 解析會增加依賴與離線快取複雜度。

### 以 targeted tests 驗證路由內容與反向隱藏

驗證以本次可見行為為主：route config、preload registry、subject topic filtering、professional topic source traceability、route smoke tests、app shell/e2e 導覽可見狀態。測試必須同時涵蓋正向行為（`系統設計` 出現、三批 topics 依序可見）與反向行為（app shell 不顯示 English/Chinese navigation buttons，但 direct routes 仍存在）。

替代方案：只跑 typecheck 或只手動點頁面。淘汰原因是本變更跨路由、資料型別、正式內容與導覽，只有 typecheck 無法保證 topic 順序與反向隱藏行為。

## Implementation Contract

#### Observable behavior

- `/database` 顯示 6 個新增 Markdown-backed topics，順序與 `_private/MD/資料庫/` 檔名自然順序一致，且排在既有 database skeleton topics 的可見內容之前。
- `/programming` 顯示 7 個新增 Markdown-backed topics，順序與 `_private/MD/程式設計/` 檔名自然順序一致，且排在既有 programming skeleton topics 的可見內容之前。
- `/system-design` 顯示 `系統設計` subject page，包含 5 個 Markdown-backed topics，順序與 `_private/MD/系統分析與設計/` 檔名自然順序一致。
- App shell 主導覽顯示 `計概`、`網概`、`資管`、`程式`、`資料庫`、`演算法`、`系統設計`。主導覽不顯示 `英文`、`國文` 或共同科目切換按鈕。
- Direct URL `/english` 與 `/chinese` 仍可開啟既有英文、國文頁面；未知路由仍導回 `/computer-principles`。

#### Interface and data shape

- `SubjectKey` 必須新增 `systemDesign`，且 `subjectKeys`、`ProfessionalTopicsBySubject`、`SubjectTopicsBySubject` 對應映射完整。
- `PrimaryRoutePath` 與 `primaryRoutePaths` 必須新增 `/system-design`，且 `routeComponentLoaders['/system-design']` 指向 system design view。
- `professionalTopicsBySubject.systemDesign` 必須包含 5 個 `ProfessionalSubjectTopic`，每個 topic 至少包含一個有可見內容的 `lessonArticle` block。
- 新增 database/programming/systemDesign topics 的 `sourceFiles` 與內層 `lessonArticle.sourceFiles` 必須包含且只包含對應 Markdown source path。
- 新增 topics 的 `sourceBatch` 使用同一個本變更可辨識批次名稱，例如 `fill-database-programming-system-design-content`。

#### Failure modes and fallback behavior

- 若 subject 沒有可見 topic content，既有 `SubjectTopicPage` empty state 負責呈現，不新增錯誤狀態。
- 若 route preload 收到未知 path，既有 registry 繼續 resolve，不丟錯。
- 若 `/english` 或 `/chinese` direct route 被開啟，仍載入對應 view；隱藏按鈕不等於路由失效。

#### Acceptance criteria

- `spectra validate fill-database-programming-system-design-content --strict` 通過。
- `npm run typecheck` 通過。
- 針對 route 與 topic data 的 Vitest 測試通過，至少包含 `routeConfig`、`routePreload`、`subjectTopics`、`professionalTopics` 與 route smoke/component 測試。
- E2E 或 component 測試能證明 app shell 主導覽顯示 `系統設計`，且不顯示 English/Chinese visible navigation controls。
- 對新增 topics 的測試確認三批 Markdown source path、topic count、route-visible 順序與 `lessonArticle` 可見內容。

#### Scope boundaries

- apply 階段可修改 app route、route preload、route tabs、subject topic types/data、systemDesign view、相關測試與必要架構文件。
- apply 階段不可讀取或修改受限 private notes；不可處理 `_private/_private_notes/筆記.txt`、`_private/_private_notes/**/done/**`、`_private/_private_fileAssets/**/done/**`。
- apply 階段不可把英文/國文 direct route 移除，也不可新增後端、題庫或外部依賴。

## Risks / Trade-offs

- [Risk] `ProfessionalTopicsBySubject` 新增 subject key 後所有 mapping 必須補齊，漏一處會造成 TypeScript 或 runtime route 錯誤。→ Mitigation：以 typecheck 與 route/topic unit tests 驗證。
- [Risk] 匯入 18 份 Markdown 會讓 `professionalTopics.ts` 更大。→ Mitigation：不新增 runtime parser 或依賴，並以現有靜態資料模式維持離線穩定；若 bundle 警戒線超標，apply 階段需回報 build 結果。
- [Risk] 隱藏共同科目切換器可能讓既有 e2e expectation 失效。→ Mitigation：更新測試，使 direct routes 保留、visible nav 隱藏成為明確規格。
- [Risk] 舊 programming system-analysis skeleton 與新 systemDesign topics 名稱相近，容易誤匯入。→ Mitigation：以 sourceFiles 嚴格檢查新增可見 topics 只來自指定三個 Markdown 資料夾。

## Migration Plan

- 無資料庫 migration；新增內容隨前端 bundle 發布。
- 既有 localStorage progress 保留。`systemDesign` 是新 subject key，首次使用時自然沒有完成狀態。
- Rollback 時移除 `/system-design` route/tab 與 `systemDesign` topic mapping，即回到原本可見導覽；不需清理使用者資料。

## Open Questions

None. 使用者已確認需求與拆分策略，本 change 可直接進入 apply。
