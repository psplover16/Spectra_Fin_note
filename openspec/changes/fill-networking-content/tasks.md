## 1. RED Tests

- [ ] [P] 1.1 為 `Networking topic data is source-traceable`、`Networking lesson articles preserve source structure`、`Networking source corrections remain minimal` 增加 `tests/unit/professionalTopics.spec.ts` 斷言；完成定義是實作前執行 `npm run test:unit -- tests/unit/professionalTopics.spec.ts` 會因 11 個 networking topics 尚未具備 sourceFiles、summary、terms、lessonArticle sections 與代表性來源 phrase 而失敗。
- [ ] [P] 1.2 為 `Networking Markdown sources are imported as route topics` 與 `Existing networking page behavior remains unchanged` 增加 `tests/unit/subjectTopics.spec.ts` 斷言；完成定義是實作前執行 `npm run test:unit -- tests/unit/subjectTopics.spec.ts` 會因 `/networking` 尚未依 11 個新 topic id 順序 route-visible、且空 skeleton 控制尚未符合規格而失敗。

## 2. Content Import Implementation

- [ ] 2.1 執行 apply 階段來源重讀，確認 `_private/MD/網概/` 11 篇 Markdown 的自然章節順序與 H1 標題；完成定義是在實作回報列出 11 個來源檔、對應 topic id、H1 標題，並確認沒有讀取受限 `_private/_private_notes/` 或 `_private/_private_fileAssets/` 路徑。
- [ ] 2.2 實作 `Decision: Reuse lessonArticle professional topic data` 與 `Decision: Map one Markdown file to one visible networking topic`：使用既有 `ProfessionalSubjectTopic` / `lessonArticle` 資料模型建立 11 個 route-visible networking topics，不新增 parser、store、route 或 UI；完成定義是 `tests/unit/subjectTopics.spec.ts` 驗證 topic id 順序、空 skeleton 不顯示、既有 topic page contract 未變。
- [ ] 2.3 實作 `Decision: Preserve source layout with minimum correction`：將 11 篇 Markdown 的 H1、H2、表格、條列、公式、例題、重點整理與學習標記轉成既有 `LessonArticleContentBlock`；完成定義是 `tests/unit/professionalTopics.spec.ts` 驗證每個 topic 有 non-empty summary、terms、sourceFiles、lessonArticle sections，且包含 `OSI 七層`、`LAN vs MAN vs WAN`、`碰撞域`、`VLSM`、`RIP`、`三方交握`、`Port Number`、`WiFi`、`CSMA/CD`、`數位簽章`、`IDS vs IPS`。
- [ ] 2.4 維持 scope boundaries：確認 `SubjectTopicPage.vue`、`NetworkingView.vue`、subject progress storage 與 route path 沒有因本變更產生行為修改；完成定義是 `git diff -- src/modules/subjectTopics/components/SubjectTopicPage.vue src/modules/networking/views/NetworkingView.vue src/modules/subjectTopics/storage` 無本變更造成的 diff，且實作回報列出 scope 檢查結果。

## 3. Content Review and Verification

- [ ] 3.1 執行 `Decision: Verify volatile networking facts during apply without expanding scope` 內容審查，逐章檢查 OSI/TCPIP、LAN/MAN/WAN、設備層級、IP/subnetting、routing/L3、TCP/UDP、ports、physical standards、data-link protocols、security crypto、defense attacks；完成定義是實作回報列出查核結論，並記錄任何已修正的 confirmed source error 或明確說明未發現需修正錯誤。
- [ ] 3.2 執行 targeted unit tests，確認 `Networking Markdown sources are imported as route topics`、`Networking topic data is source-traceable`、`Networking lesson articles preserve source structure`、`Networking source corrections remain minimal`、`Existing networking page behavior remains unchanged` 全部符合 spec；完成定義是 `npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts` 通過。
- [ ] 3.3 執行型別與建置驗證，確認新增 networking content 與既有 renderer 型別相容、bundle 未超過 Vite 500 KB 警戒；完成定義是 `npm run typecheck` 與 `npm run build` 通過，並在實作回報記錄 Vite build 的最大 chunk 大小。
- [ ] 3.4 執行手機/離線 smoke，確認 `/networking` 在手機 viewport 可展開至少一個 table-heavy topic 與一個 calculation-heavy topic，離線 reload 後仍可讀；完成定義是在實作回報記錄 viewport、檢查 topic、離線 reload 結果，且 preview server 在驗證後停止。
