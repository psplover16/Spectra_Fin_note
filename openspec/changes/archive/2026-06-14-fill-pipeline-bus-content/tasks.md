## 1. 測試契約先行

- [x] 1.1 為 Requirement: Computer principles pipeline topic carries filled lesson content 補上 `tests/unit/professionalTopics.spec.ts` 斷言，完成後 `cp-pipeline` 必須有非空 `lessonArticle.lead`、包含定義、常見公式、管線限制、常見 Hazard、最大加速比的 sections、包含 Pipeline Markdown sourceFiles，並以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證此測試會保護正式資料契約。
- [x] 1.2 為 Requirement: Computer principles bus topic carries filled lesson content 補上 `tests/unit/professionalTopics.spec.ts` 斷言，完成後 `cp-bus` 必須有非空 `lessonArticle.lead`、包含三種匯流排、基本計算、傳輸方向、最大陷阱、讀與寫、補充記憶體範圍的 sections、包含 Bus Markdown sourceFiles，並以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證此測試會保護正式資料契約。
- [x] [P] 1.3 更新 `tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 的 workflow 對齊檢查，完成後 `cp-pipeline` 與 `cp-bus` 和既有填補 topic 一樣必須有非空 lead 與 sections，並以 `npx vitest run tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 驗證 route workflow 不再接受兩者為空 skeleton。
- [x] [P] 1.4 更新 `tests/unit/staleProfessionalContentAudit.spec.ts` 的 stale audit 期待，完成後 `cp-pipeline` 與 `cp-bus` 不得回退為空 lessonArticle 或舊式 fallback block，並以 `npx vitest run tests/unit/staleProfessionalContentAudit.spec.ts` 驗證 audit 能攔截回退。

## 2. 正式內容填補

- [x] 2.1 實作 Requirement: Computer principles pipeline topic carries filled lesson content，在 `src/modules/subjectTopics/data/professionalTopics.ts` 為 `cp-pipeline` 建立 sourceFiles、terms、lesson sections 與 topic factory；完成後正式資料保留使用者精簡後的 Pipeline 內容範圍，只含定義、公式、限制、基本 Hazard/Stall、三類 Hazard 表格與最大加速比，並以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證。
- [x] 2.2 實作 Requirement: Computer principles bus topic carries filled lesson content，在 `src/modules/subjectTopics/data/professionalTopics.ts` 為 `cp-bus` 建立 sourceFiles、terms、lesson sections 與 topic factory；完成後正式資料保留 Bus Markdown 的三種匯流排、基本計算、方向、最大陷阱、讀與寫短版、register/cache/RAM 補充，且讀與寫順序以 Bus Markdown 為準，並以 `npx vitest run tests/unit/professionalTopics.spec.ts` 驗證。
- [x] 2.3 在 `createProfessionalTopicSkeleton` 串接 `cp-pipeline` 與 `cp-bus` 的專用 factory，完成後這兩個 topic 不再走空 skeleton 預設分支，其他 computer-principles topic 的 skeleton 行為保持不變，並以 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 驗證。

## 3. 內容審查與整體驗證

- [x] 3.1 執行人工內容審查，確認 `cp-pipeline` 不原樣顯示「此處用table」這類編排註記、Hazard 深度只保留基本範圍，`cp-bus` 的寫入流程順序為位址匯流排、資料匯流排、控制匯流排；完成後在實作回報中記錄審查結果。
- [x] 3.2 執行 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts`，完成後三個測試檔必須全部通過，證明正式 topic data、route workflow 與 stale audit 均接受新內容。
- [x] 3.3 執行 `npm run typecheck`，完成後 TypeScript strict 檢查通過，證明新增 lessonArticle data 與 factory 串接符合既有型別契約。
- [x] 3.4 執行 `spectra validate fill-pipeline-bus-content`，完成後 Spectra artifacts 與 delta spec 維持有效，且可交給 `$spectra-apply fill-pipeline-bus-content` 實作。
