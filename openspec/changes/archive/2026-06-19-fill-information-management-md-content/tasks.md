## 1. 來源審查與測試基線

- [x] [P] 1.1 完成 Requirement: Information Management import review is recorded 的來源審查基線：重新讀取 7 個 `_private/MD/資訊管理/` Markdown，查核個資法/GDPR 官方來源，並建立 `_private/TMP/information-management-md-content-review.md`，可由人工檢查確認檔案列出 7 個來源、查核日期、第二方數據修正與 meta 句排除決策。
- [x] [P] 1.2 先建立 Requirement: Information Management imports Markdown-backed lesson articles、Imported Information Management topics preserve source traceability and article shape、Imported Information Management content keeps source structure with minimal corrections 的失敗測試：更新 `tests/unit/informationManagementRouteWorkflow.spec.ts`，驗證 7 個 `im-md-*` topics 的順序、exact Markdown sourceFiles、非空 `lessonArticle` sections、舊 skeleton suffix 與 meta 句排除；以 `npx vitest run tests/unit/informationManagementRouteWorkflow.spec.ts` 確認測試因尚未匯入內容而失敗。

## 2. 正式資料匯入

- [x] 2.1 實作「使用 im-md topic id 前綴」與「只記錄 exact Markdown sourceFiles」的 formal data contract：在 `src/modules/subjectTopics/data/professionalTopics.ts` 讓 informationManagement imported topics 排在 `getProfessionalTopicSkeletons('informationManagement')` 前方，並建立 7 個唯一 `im-md-*` id、H1 title、exact Markdown sourceFiles；以 `npm run typecheck` 和 1.2 的排序/sourceFiles 測試驗證資料形狀。
- [x] 2.2 實作「沿用 lessonArticle typed blocks」的前三篇內容：將 `資訊管理_1_數位轉型與ESG.md`、`資訊管理_2a_傳統開發模式.md`、`資訊管理_2b_敏捷開發.md` 轉成非空 `lessonArticle` sections，保留 H2/H3、blockquote、list、table 的相對閱讀順序；以 `npx vitest run tests/unit/informationManagementRouteWorkflow.spec.ts` 驗證前三個 topic 的 title、source traceability、Agile section order 與 learner-facing block shape。
- [x] 2.3 實作「最小修正與 review note」的倫理與數據內容：將 `資訊管理_3a_資訊倫理.md` 與 `資訊管理_3b_數據分類與隱私悖論.md` 轉成非空 `lessonArticle` sections，並把第二方數據例子改為合作夥伴分享的會員/客戶行為資料；以 route workflow 測試和人工檢查 `_private/TMP/information-management-md-content-review.md` 驗證修正有紀錄且 learner-facing text 不含被淘汰的 FB/IG 例子。
- [x] 2.4 實作「最小修正與 review note」的法規內容：將 `資訊管理_4a_個人資料保護法.md` 與 `資訊管理_4b_GDPR.md` 轉成非空 `lessonArticle` sections，根據 apply 當天官方來源修正個資會狀態、施行日期描述、GDPR territorial scope 與罰則措辭；以 route workflow 測試和人工檢查 review note 驗證查核日期、來源 URL 與修正理由完整。

## 3. 驗證與交接

- [x] 3.1 完成 Requirement: Information Management imports Markdown-backed lesson articles 的 route-visible 驗證：執行 `npx vitest run tests/unit/informationManagementRouteWorkflow.spec.ts`，確認 `getSubjectTopics('informationManagement')` 前 7 個可見 topics 為 imported Markdown topics，且 `professionalTopicsBySubject.informationManagement` 保留舊 skeleton suffix。
- [x] 3.2 完成 Imported Information Management topics preserve source traceability and article shape 的型別與資料契約驗證：執行 `npm run typecheck`，並確認 targeted tests 覆蓋每個 imported topic 的 single lessonArticle block、exact sourceFiles、sourceSummary/sourceSection 一致性。
- [x] 3.3 完成 Imported Information Management content keeps source structure with minimal corrections 的內容驗證：人工檢查 7 個 formal topics 的 learner-facing text，確認 source-only verification meta text 不出現、具體 caveat 保留、Agile section order 與法規/數據修正符合 spec，並把結果補進 apply summary。
- [x] 3.4 完成 Spectra artifact 驗證與可交接狀態：執行 `spectra validate --strict fill-information-management-md-content` 與必要的 targeted Vitest/typecheck 指令；若完整測試套件出現無關既有失敗，只在 apply summary 記錄，不修改本 change 範圍外檔案。
