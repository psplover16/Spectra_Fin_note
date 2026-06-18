## 1. 路由、科目鍵與導覽

- [x] 1.1 實作「新增 systemDesign 科目鍵與獨立路由」並滿足 Requirement: System Design subject route；完成後 `/system-design` direct route 顯示 `系統設計` 專業科目頁，topic progress 使用 `systemDesign`，並以 `npm run test:unit -- tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/component/SubjectRoutesSmoke.spec.ts` 與 `npm run typecheck` 驗證。
- [x] 1.2 實作「導覽只顯示專業科目與系統設計」並滿足 Requirement: App shell exposes primary subject routes；完成後 app shell header 顯示 `計概`、`網概`、`資管`、`程式`、`資料庫`、`演算法`、`系統設計`，不顯示 `英文`、`國文` 或 common-subject switcher，且 `/english`、`/chinese` direct routes 仍可開啟；以 `tests/component/AppShellSmoke.spec.ts`、`tests/e2e/app-shell.smoke.spec.ts`、`tests/e2e/app-shell-mobile.spec.ts` 或等效手動 mobile/offline 驗證確認。
- [x] 1.3 因新增 `src/modules/systemDesign`，同步更新架構文件使 `PROJECT_ARCHITECTURE.md` 反映新的 professional subject module 與 route；完成後以 `npm run test:unit -- tests/unit/projectArchitecture.spec.ts` 驗證架構文件與 src 結構一致。

## 2. Markdown 匯入與 lessonArticle 內容

- [x] 2.1 實作「以 Markdown 批次映射為新增 topics 的唯一來源」並滿足 Requirement: Imported Markdown topics carry exact source traceability；完成後 18 個新增 topics 的 top-level `sourceFiles` 與每個 `lessonArticle.sourceFiles` 僅指向對應 `_private/MD/資料庫/`、`_private/MD/程式設計/`、`_private/MD/系統分析與設計/` Markdown，不含 `_private/TMP/` 或 legacy `.txt` 來源；以 `npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts` 與內容審查驗證。
- [x] 2.2 實作「延續 lessonArticle 資料模型與離線純靜態內容」並滿足 Requirement: Imported Markdown topics use lessonArticle display shape；完成後 18 個新增 topics 都有可見 `lessonArticle` sections，保留來源中的提醒、理解筆記與學習方式文字，並把 Markdown 顯示意圖轉成 paragraph/list/table/subsection 等既有 block；以 `tests/unit/professionalTopics.spec.ts`、`tests/component/SubjectTopicProfessionalBlocks.spec.ts` 與內容審查驗證。
- [x] 2.3 滿足 Requirement: Imported Markdown topics keep professional topic metadata complete；完成後每個新增 topic 都具備非空 `title`、`summary`、`examOutline`、`memoryPoints`、`understandingNotes`、`difficulty`、`topicType`、`terms`、`sourceBatch`、`sourceSummary` 與 `blocks`，且不新增 quiz/backend sync 欄位；以 `tests/unit/professionalTopics.spec.ts` 與 `npm run typecheck` 驗證。

## 3. Topic 順序與所有權

- [x] 3.1 實作「新增 topics 前置且既有 skeleton 保留在後方」並滿足 Requirement: Imported Markdown topics appear first in source order；完成後 `/database` 前 6 個可見 topics、`/programming` 前 7 個可見 topics、`/system-design` 5 個可見 topics 依各 Markdown 資料夾自然檔名順序排列，既有 skeleton 保留在後方且空 skeleton 不 route-visible；以 `tests/unit/subjectTopics.spec.ts` 與 `tests/unit/professionalTopics.spec.ts` 驗證。
- [x] 3.2 滿足 Requirement: Programming route excludes system design imported topics；完成後 `/programming` 的可見 topics 不含 `_private/MD/系統分析與設計/` 來源，`/system-design` 擁有該資料夾 5 份 Markdown topics；以 `tests/unit/subjectTopics.spec.ts`、`tests/component/SubjectRoutesSmoke.spec.ts` 與手動路由檢查驗證。

## 4. Targeted 測試、驗證與交付檢查

- [x] 4.1 實作「以 targeted tests 驗證路由內容與反向隱藏」；完成後測試同時覆蓋正向行為（`系統設計` route/tab 與三批 imported topics 可見）與反向行為（English/Chinese visible navigation hidden 但 direct routes retained），以 `npm run test:unit -- tests/unit/routeConfig.spec.ts tests/unit/routePreload.spec.ts tests/unit/subjectTopics.spec.ts tests/unit/professionalTopics.spec.ts tests/component/SubjectRoutesSmoke.spec.ts tests/component/AppShellSmoke.spec.ts` 驗證。
- [x] 4.2 執行規格與型別收斂驗證；完成後 `spectra validate fill-database-programming-system-design-content --strict` 與 `npm run typecheck` 通過，若 full unit suite 仍有與本變更無關的既有 stale expectations，需在 apply 回報中明確列出。
- [x] 4.3 執行 UI 與離線可用驗證；完成後在 desktop 與 mobile viewport 確認 app shell header 無重疊、`系統設計` 可點擊、English/Chinese 按鈕隱藏、`/english` 與 `/chinese` direct route 可開啟，並以 Playwright e2e 或等效手動 offline 驗證紀錄結果。
