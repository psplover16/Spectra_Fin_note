## 1. 測試契約

- [x] 1.1 為 `Targeted manual section fill` 與 `Source provenance is preserved` 建立或調整 `tests/unit/professionalTopics.spec.ts`，使 `cp-von-neumann-architecture` 必須有非空 `summary`、`terms`、`lessonArticle.lead`、`lessonArticle.sections`，且 topic 與 lessonArticle 的 `sourceFiles` 同時包含 `_private/計算機概論.txt` 與 `_private/MD/馮紐曼架構.md`；完成定義是測試在內容填入前會指出骨架不足，內容填入後以 `npx vitest run tests/unit/professionalTopics.spec.ts` 通過。
- [x] 1.2 調整 `tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 與 `tests/unit/staleProfessionalContentAudit.spec.ts` 對馮紐曼架構的骨架期待，讓只有 `cp-von-neumann-architecture` 允許成為已填內容、其他 topic 仍維持骨架；完成定義是 `npx vitest run tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts` 通過。
- [x] 1.3 為 `Section markers use sourceLabel`、`User-provided content remains the content boundary`、`Beginner terminology is present` 補強資料層測試，驗證 section marker 位於 `sourceLabel`、heading 沒有前置方括號標記、沒有 `subTitle` 欄位、必要中英名詞出現在 `terms` 或 lessonArticle 內容中；完成定義是 `npx vitest run tests/unit/professionalTopics.spec.ts` 通過。

## 2. 內容整理與資料填入

- [x] 2.1 依 `_private/propose.md` 與 `_private/MD/馮紐曼架構.md` 整理馮紐曼架構 section 對照，確認每個預定 section 的內容都能由使用者提供材料支持；完成定義是實作紀錄列出採用的 section 標題與 `sourceLabel`，且任何缺少定義、例子或支撐材料的項目都被記錄為待補，不進入正式內容。
- [x] 2.2 在 `src/modules/subjectTopics/data/professionalTopics.ts` 對 `cp-von-neumann-architecture` 實作 `Targeted manual section fill` 與 `Source provenance is preserved`，讓此 topic 保留既有 id、subjectKey、difficulty、topicType，並新增整理後的 summary、來源、lead 與 lessonArticle sections；完成定義是其他 topic id 的資料不因本任務改變，且 `npx vitest run tests/unit/professionalTopics.spec.ts` 通過。
- [x] 2.3 在 `src/modules/subjectTopics/data/professionalTopics.ts` 實作 `Section markers use sourceLabel` 與 `Beginner terminology is present`，讓 `[必背]`、`[比較]`、`[理解]`、`[考點]` 位於 `sourceLabel`，heading 保持純標題，並補入馮紐曼架構相關中英專有名詞與新手定義；完成定義是資料層測試確認 marker、heading、terms 與 lessonArticle blocks 符合 spec。
- [x] 2.4 針對 `User-provided content remains the content boundary` 進行內容審查，移除任何無法由 `_private/MD/馮紐曼架構.md` 或 `_private/propose.md` 支撐的教學主張；完成定義是人工審查紀錄確認沒有自由生成內容，若有待補項目則記錄在任務完成說明中而非寫入正式 topic。

## 3. 驗證與交付

- [x] 3.1 執行目標單元測試，確認馮紐曼架構內容、來源、標記與中英名詞契約成立；完成定義是 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts` 通過。
- [x] 3.2 執行全域品質檢查，確認內容資料沒有破壞 TypeScript 或既有測試；完成定義是 `npm run typecheck` 與 `npx vitest run` 通過。
- [x] 3.3 驗證 `/computer-principles` 的馮紐曼架構 topic 在 UI 中可展開並顯示 `sourceLabel`、heading、lead、section 內容，且不顯示 `_private/計算機概論.txt`、`_private/MD/馮紐曼架構.md` 或 `3a. 基本計概 / 馮紐曼架構` 這類來源路徑與來源章節；完成定義是以手動瀏覽器檢查或 Playwright 檢查記錄上述斷言，並確認離線狀態下不出現 console error。
- [x] 3.4 驗證 Spectra artifacts 與實作範圍一致，確認沒有新增 route、資料模型、UI 欄位或其他 topic 內容；完成定義是 `spectra validate fill-von-neumann-architecture-content` 通過，並在完成說明中列出修改檔案與測試結果。

## 4. 呈現規則同步

- [x] 4.1 完成 `Lesson article source metadata is hidden from reader content`：`lessonArticle` 保留 `sourceFiles` 與 `sourceSection` 作為內部來源資料，但 UI 教材正文不渲染來源檔案或來源章節；完成定義是 `tests/component/SubjectTopicProfessionalBlocks.spec.ts` 驗證正文不包含 `_private/計算機概論.txt`、`_private/MD/馮紐曼架構.md`、`3a. 基本計概 / 馮紐曼架構`，並以 `npx vitest run tests/component/SubjectTopicProfessionalBlocks.spec.ts tests/unit/professionalTopics.spec.ts` 通過。
- [x] 4.2 完成 `Definition enumerations use ordered list blocks`：馮紐曼架構的「五大單元」與「改善方法」這兩種定義型條列使用 `orderedList`，讓頁面以 `ol/li` 呈現每個名詞解釋；完成定義是 `tests/unit/professionalTopics.spec.ts` 驗證兩個 section 的對應 block kind 為 `orderedList`，並以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 通過。
