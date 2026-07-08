## 1. 卡片資料層重構（依 design：卡片 id 命名與插入順序）

- [x] 1.1 在 `computerPrinciplesV2HtmlPages.ts` 移除 `cpv2-supplemental-trees-hash-tables` 一筆，並新增 8 筆 `createComputerPrinciplesV2HtmlPage`（`cpv2-supplemental-basic-tree`、`cpv2-supplemental-expression-notation`、`cpv2-supplemental-avl-tree`、`cpv2-supplemental-avl-tree-deletion`、`cpv2-supplemental-red-black-tree`、`cpv2-supplemental-red-black-tree-deletion`、`cpv2-supplemental-hash-table`、`cpv2-supplemental-trees-hash-practice`）。行為：每個新 id 皆能查得 `htmlPage` 對應且 `sourceFilename` 指向對應 `public/computer-principles-v2/*.html`。驗證：`npm run test:unit -- professionalTopics` 中對應對照通過，且 `createHtmlSupplementalTopic()` 不因缺對應而丟錯。
- [x] 1.2 在 `computerPrinciplesV2Topics.ts` 移除原「樹與雜湊表」卡，改用 `createHtmlSupplementalTopic()` 於第 8～15 位依序插入 8 張新卡（基礎樹 → 運算式表示法 → AVL樹 → AVL樹_刪除 → 紅黑樹 → 紅黑樹_刪除 → 雜湊表 → 樹與雜湊表_考題練習）。行為：滿足 spec「Computer principles v2 route uses catalog-backed topics」——路由前段呈現 13 張 HTML 連結補充卡、不再含 `cpv2-supplemental-trees-hash-tables`。驗證：`getSubjectTopics('computerPrinciplesV2')` 第 8～16 位 id/title 與 design 表一致。

## 2. 切割 4 個 HTML（步驟 0；依 design：以原 HTML 為切割來源，依 h2 章節邊界切成 4 檔）

- [x] 2.1 [P] 由 `基礎資料結構(下)_樹與雜湊表.html` 六、樹（含收尾 ★樹常考重點）切出 `public/computer-principles-v2/基礎樹.html`，套用原檔 `<style>`／返回 `<script>`。行為：滿足 spec「Split trees and hash-table lessons exclude balanced-tree content」——含術語/二元樹/走訪/BST/Heap/Heap Sort 與樹章摘要，且不含 AVL/紅黑樹段。驗證：瀏覽器開頁檢視章節齊全、無平衡樹段，返回鈕可回 `/computer-principles-v2`。
- [x] 2.2 [P] 由原檔七、運算式切出 `public/computer-principles-v2/運算式表示法.html`（含 3 題實戰）。行為：符合 spec「Computer principles v2 publishes supplemental HTML lessons」的 standalone zh-Hant UTF-8 講義。驗證：瀏覽器開頁確認中前後序內容與版面保真。
- [x] 2.3 [P] 由原檔八、雜湊表切出 `public/computer-principles-v2/雜湊表.html`（含歷屆考題）。行為：standalone 講義且不含樹章內容。驗證：瀏覽器開頁確認雜湊函數/碰撞/開放定址對照表齊全。
- [x] 2.4 [P] 由原檔九～十一（複雜度總表＋高頻速記＋小試身手＋答案解析）切出 `public/computer-principles-v2/樹與雜湊表_考題練習.html`。行為：符合 spec「Split trees and hash-table lessons exclude balanced-tree content」——僅含該三章與解析。驗證：瀏覽器開頁確認僅有考題/速記/解析、無教學章節。

## 3. Markdown 轉 4 個 HTML（步驟 3；依 design：由 `_private/20260708/` Markdown 生成 4 個 AVL/紅黑樹講義）

- [x] 3.1 [P] 由 `_private/20260708/AVL樹_考前速記卡.md` 生成 `public/computer-principles-v2/AVL樹.html`，套用切割 HTML 相同模板。行為：滿足 spec「AVL and red-black tree lessons preserve ASCII diagrams」——ASCII 樹圖置於 `<pre>`、表格/blockquote 以語意 HTML 呈現。驗證：瀏覽器開頁確認 ASCII 對齊不崩、返回鈕正常。
- [x] 3.2 [P] 由 `_private/20260708/AVL樹_刪除專練.md` 生成 `public/computer-principles-v2/AVL樹_刪除.html`。行為：範例 A/B 與練習詳解結構保真、ASCII 圖於 `<pre>`。驗證：瀏覽器開頁比對章節與對齊。
- [x] 3.3 [P] 由 `_private/20260708/紅黑樹_考前速記卡.md` 生成 `public/computer-principles-v2/紅黑樹.html`。行為：五大性質/插入/刪除判斷表與 vs AVL 對照表保真。驗證：瀏覽器開頁比對表格與 ASCII。
- [x] 3.4 [P] 由 `_private/20260708/紅黑樹_刪除專練.md` 生成 `public/computer-principles-v2/紅黑樹_刪除.html`。行為：刪除 SOP、Case 1–4、Q1–Q16 詳解與覆蓋矩陣保真、ASCII 圖於 `<pre>`。驗證：瀏覽器開頁抽查數題詳解與對齊。

## 4. 溯源欄位（依 design：`htmlPage.source` 欄位定位為來源溯源）

- [x] 4.1 為 8 筆新 `createComputerPrinciplesV2HtmlPage` 填入 `source` 溯源：切割 4 檔標註 `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md`，md 生成 4 檔標註各自 `_private/20260708/*.md`。行為：`source` 僅作溯源、瀏覽器實際載入 `sourceFilename`。驗證：程式碼審視確認 8 筆 `source` 與 design 對應表一致。

## 5. 測試回歸與規格一致性（TDD）

- [x] 5.1 先更新既有單元測試 `tests/unit/professionalTopics.spec.ts`、`tests/unit/subjectTopics.spec.ts`、`tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 的斷言為 28 主題與新位置（第 16 位 `cpv2-architecture-computation-theory`、第 25 位 `cpv2-floating-point-conversion`），涵蓋 spec「Computer principles v2 titles follow the catalog manifest」、「Floating point conversion topic uses refreshed v2 source」、「Floating point topic exposes practice and IEEE 754 special-value sections」。行為：更新後斷言先失敗（紅），實作到位後轉綠。驗證：`npm run test:unit` 該三檔由紅轉綠。
- [x] 5.2 執行 `npm run test:unit` 全套並確保全綠，確認移除舊卡未破壞其他既有補充卡與 catalog 主題斷言。驗證：測試輸出 0 failed。
- [x] 5.3 手動驗證離線與導覽：`npm run build` 後於瀏覽器暖機 `/computer-principles-v2`、切離線，確認 8 張新卡與其 8 個 HTML 頁仍可開啟（涵蓋 spec「Computer principles v2 publishes supplemental HTML lessons」的離線打包契約）。驗證：離線下逐一點開 8 頁皆正常、返回鈕可回路由。
