## 1. 測試契約

- [x] 1.1 在 tests/unit/professionalTopics.spec.ts 補上 first-batch 演算法內容測試，覆蓋 `First-batch algorithm topics include learning articles`、`First-batch algorithm topics include Java teaching code`、`First-batch algorithm topics present worst-case complexity only`、`Algorithm import records approved Markdown source` 四個 requirement；完成時測試會檢查 7 個 topic id、lessonArticle、teachingCode、最壞時間複雜度、正確 sourceFiles，以及未匯入 topic 仍保留 skeleton，驗證方式為執行 `npx vitest run tests/unit/professionalTopics.spec.ts`。

## 2. 演算法教材匯入

- [x] 2.1 依 `_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` 匯入 7 個指定演算法 topic，使 `First-batch algorithm topics include learning articles` 成立；完成時 `bubble-sort`、`quick-sort`、`fibonacci-sequence`、`greatest-common-divisor`、`binary-search`、`selection-sort`、`insertion-sort` 均有非空 `lessonArticle`，且包含概念說明與有序核心規則，驗證方式為內容審查與 `npx vitest run tests/unit/professionalTopics.spec.ts`。
- [x] 2.2 匯入來源 Markdown 中存在的遞迴與非遞迴 Java 程式碼，使 `First-batch algorithm topics include Java teaching code` 成立；完成時每個已匯入 code block 使用 `teachingCode`、language 為 `java`、保留中文註解與縮排，且不新增來源沒有的程式碼版本，驗證方式為內容審查與 `npx vitest run tests/unit/professionalTopics.spec.ts`。
- [x] 2.3 將每個已匯入演算法的時間複雜度整理為最壞情況，使 `First-batch algorithm topics present worst-case complexity only` 成立；完成時正式 route content 只顯示最壞時間複雜度與推導重點，不顯示最佳或平均時間複雜度，也不使用 `complexityTable`，驗證方式為內容審查與 `npx vitest run tests/unit/professionalTopics.spec.ts`。
- [x] 2.4 更新 7 個已匯入 topic 的來源追蹤，使 `Algorithm import records approved Markdown source` 成立；完成時每個 topic 的 `sourceFiles` 包含 `_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`，`sourceSummary` 指出對應演算法章節，驗證方式為 `npx vitest run tests/unit/professionalTopics.spec.ts`。

## 3. 驗證與畫面檢查

- [x] 3.1 抽出本次匯入的 Java 程式碼做 UTF-8 編譯驗證；完成時臨時 Java 檔可用 `javac -encoding UTF-8` 編譯通過，且臨時檔不提交，驗證方式為記錄編譯指令與結果。
- [x] 3.2 執行專案自動驗證；完成時 `npx vitest run tests/unit/professionalTopics.spec.ts`、`npm run typecheck`、`spectra validate fill-algorithm-code-content` 均通過，驗證方式為命令輸出。
- [x] 3.3 手動檢查 Algorithms route 的使用者畫面與離線情境；完成時 7 個已匯入 topic 能展開、概念文字可讀、ordered list 顯示正確、Java code block 保留縮排、最壞時間複雜度可讀，且在已載入 app 後切換離線仍能瀏覽該靜態內容，驗證方式為手動檢查紀錄。

## 4. 路由排序調整

- [x] 4.1 將剛匯入的 7 個演算法 topic 調整到 Algorithms route 上方，使 `Imported first-batch algorithm topics appear first` 成立；完成時 `professionalTopicsBySubject.algorithms` 的前 7 個 topic id 依序為 `bubble-sort`、`quick-sort`、`fibonacci-sequence`、`greatest-common-divisor`、`binary-search`、`selection-sort`、`insertion-sort`，且其餘 Algorithms topic 保持原有相對順序，驗證方式為 `npx vitest run tests/unit/professionalTopics.spec.ts`、`npm run typecheck`、`spectra validate fill-algorithm-code-content`。
