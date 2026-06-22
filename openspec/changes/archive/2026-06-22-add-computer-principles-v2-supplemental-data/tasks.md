## 1. 內容資料與順序契約

- [x] 1.1 交付 `Computer principles v2 route uses catalog-backed topics`、`Computer Principles v2 topics preserve source traceability` 與 `Computer Principles v2 supplemental data topic traces source`：在 `src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts` 新增 `cpv2-supplemental-data`，使用標題 `補充資料`、`subjectKey` 為 `computerPrinciplesV2`、來源檔為 `_private/計概補充/計算機概論_重點講義_01.md`，並讓 route-visible topic 清單總數成為 15；以 `npm run test:unit -- tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 驗證 id、標題、數量與來源追溯。
- [x] 1.2 交付 `Computer principles v2 titles follow the catalog manifest`：把 `補充資料` 插入在 `加強練習` 後、`架構與計算理論` 前，且第 3 到第 15 個 catalog-backed topic 維持原本 `01` 到 `13` 的相對順序與標題；以 `npm run test:unit -- tests/unit/subjectTopics.spec.ts tests/unit/professionalTopics.spec.ts` 驗證順序、標題不含序號前綴、catalog segment 未被重排。
- [x] 1.3 交付 `Floating point topic exposes practice and IEEE 754 special-value sections` 的既有行為不回退：新增 `補充資料` 後，`cpv2-floating-point-conversion` 仍位於 `cpv2-complement-conversion` 與 `cpv2-codes-and-character-sets` 之間，IEEE 754 special-value section 仍在浮點數主題內而不是變成 route-visible topic；以 `npm run test:unit -- tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 驗證浮點數 topic ownership 與 route-visible topic 清單。

## 2. 補充講義轉換與內容審查

- [x] 2.1 將 `_private/計概補充/計算機概論_重點講義_01.md` 轉成既有 `lessonArticle` blocks，讓 `補充資料` 展開後可讀到 instruction cycle、Amdahl's Law、five functional units、CPU components、memory hierarchy、CPU scheduling、deadlock、paging and segmentation、OOP characteristics、basic data structures；以 `npm run test:unit -- tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/professionalTopics.spec.ts` 驗證 section heading 與代表性內容標記。
- [x] 2.2 完成專業科目內容審查：確認 `補充資料` 的定義、解題邏輯、速記或例子沒有因 markdown 轉換遺失，表格與條列能在 `SubjectTopicPage` 既有 renderer 中呈現；以人工比對 `_private/計概補充/計算機概論_重點講義_01.md` 十個二級標題與轉換後 `lessonArticle.sections` 的對應結果驗證。

## 3. UI、離線與整體驗證

- [x] 3.1 在主題頁 UI 驗證 `補充資料` 使用既有 `SubjectTopicCard` 架構，展開/收合、完成勾選與 bookmark 控制不因新增卡片改變；以 `npm run test:unit -- tests/component/SubjectRoutesSmoke.spec.ts` 驗證卡片可見、順序正確且仍在 unfinished list 內。
- [x] 3.2 驗證 PWA 離線情境：建置後的 `/computer-principles-v2` 在離線載入時仍顯示 `補充資料`、`架構與計算理論` 與原本檢查碼主題，且不需要 runtime markdown fetch；以 `npm run test:e2e -- tests/e2e/pwa-offline-shell.spec.ts` 驗證離線 shell 與靜態內容可見。
- [x] 3.3 完成整體品質檢查：型別、lint、相關 unit/component/e2e 測試全部通過，且本 change 不新增依賴、不改路由架構；以 `npm run lint`、`npm run typecheck`、`npm run test:unit -- tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts tests/component/SubjectRoutesSmoke.spec.ts`、`npm run test:e2e -- tests/e2e/pwa-offline-shell.spec.ts` 驗證。
