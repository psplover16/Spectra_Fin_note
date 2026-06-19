## 1. 測試先行

- [x] [P] 1.1 為 `Operating-system Markdown sources are imported as lesson topics`、`OS topic data is learner-facing and traceable`、`Existing Markdown arrangement is preserved conservatively` 增加 `tests/unit/professionalTopics.spec.ts` 斷言，驗證 10 個 OS topic 的 sourceFiles、title、summary、terms、lessonArticle sections、代表性來源內容與空 section 防護；完成定義是實作前執行 `npm run test:unit -- tests/unit/professionalTopics.spec.ts` 會出現對應失敗。
- [x] [P] 1.2 為 `OS topics are route-visible in chapter order` 與 `Adjacent OS skeletons remain controlled` 增加 `tests/unit/subjectTopics.spec.ts` 斷言，驗證 OS topics 依 3-1、3-2、3-4、3-5上、3-5下、3-6、3-7、3-8、3-9、3-10 順序出現在 3b 後，且 `cp-hardware-protection` 不 route-visible；完成定義是實作前執行 `npm run test:unit -- tests/unit/subjectTopics.spec.ts` 會出現對應失敗。

## 2. OS 教材資料實作

- [x] 2.1 實作 `Reuse existing markdown-backed Computer Principles content path`：以現有 `markdownBackedComputerPrinciplesContentById` factory 產生 10 個 OS topic，不新增 parser、store 或 UI；完成定義是 `tests/unit/professionalTopics.spec.ts` 驗證每個 OS topic 都有正式 lessonArticle 並且 sourceFiles 包含 `_private/計算機概論.txt` 與對應 Markdown。
- [x] 2.2 實作 `Preserve one visible topic per Markdown chapter`：新增 `cp-cpu-scheduling` skeleton 並將 10 個 Markdown 主題映射為 10 個可見 topic，同時讓 `cp-hardware-protection` 保持空殼不顯示；完成定義是 `tests/unit/subjectTopics.spec.ts` 驗證 route-visible id 順序與 hidden skeleton 行為。
- [x] 2.3 實作 `Preserve source formatting while using existing lessonArticle blocks`：將每篇 OS Markdown 的主標題、章節標題、表格、條列、流程與計算步驟轉成既有 `LessonArticleContentBlock`，並保留「跳過分析」章節的原取捨語意；完成定義是 `tests/unit/professionalTopics.spec.ts` 驗證代表性 phrase、表格/計算 artifact、非空 blocks 與來源標題存在。
- [x] 2.4 完成 OS 內容範圍審查，確認沒有任意新增、刪除、濃縮或改寫使用者已整理的教材資料，並確認沒有新增 `SubjectTopicPage.vue` 行為或 storage schema；完成定義是在實作回報中列出逐章審查結果，且 `git diff -- src/modules/subjectTopics/components/SubjectTopicPage.vue` 不包含本變更造成的 UI 行為修改。

## 3. 內容正確性與測試驗證

- [x] 3.1 執行 `Verify technical content through source-specific assertions` 內容審查，逐章比對 OS 分類、Polling/Interrupt/DMA、Command/System Call、Process State、CPU scheduling、Deadlock 四條件與銀行家演算法、Process Communication 跳過分析、Fit/Paging/TLB、EMAT/Page Replacement、Disk Scheduling/RAID；完成定義是 `tests/unit/professionalTopics.spec.ts` 的代表性內容 assertions 通過，且實作回報列出審查結論。
- [x] 3.2 執行 targeted unit tests，確認 OS 來源匯入、route-visible 順序、內容 traceability 與 hidden skeleton 行為皆符合 specs；完成定義是 `npm run test:unit -- tests/unit/professionalTopics.spec.ts tests/unit/subjectTopics.spec.ts` 通過。
- [x] 3.3 執行型別與建置驗證，確認新增 OS topic data、`cp-cpu-scheduling` skeleton 與既有 renderer 型別相容；完成定義是 `npm run typecheck` 與 `npm run build` 通過。
- [x] 3.4 以手機尺寸或瀏覽器模擬器開啟 `/computer-principles` 並切到離線狀態，手動驗證至少一個 OS 表格密集 topic 與一個計算密集 topic 可讀、可展開且無 layout breakage；完成定義是在實作回報中記錄 viewport、檢查 topic 與離線 reload 結果。
