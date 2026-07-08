## Context

計概(v2) 路由（`/computer-principles-v2`）目前的非 catalog 前段有 8 張卡，其中第 8 張 `cpv2-supplemental-trees-hash-tables`（樹與雜湊表）連結單一 HTML `基礎資料結構(下)_樹與雜湊表.html`，內含樹、AVL、紅黑樹、運算式、雜湊表、考題共六大主題，其中 AVL/紅黑樹段落品質不佳。

卡片資料流：`computerPrinciplesV2Topics.ts` 以 `createHtmlSupplementalTopic()` 建卡，該工廠依 `id` 到 `computerPrinciplesV2HtmlPages.ts` 查 `htmlPage`（`sourceFilename` + `href`）；`SubjectTopicCard.vue` 對有 `htmlPage` 的卡以 `<a :href>` 導向 `public/computer-principles-v2/<檔名>.html`。所有講義 HTML 共用同一份自包含 `<style>`/`<script>`（紙感閱讀外框 + 返回鈕），無框架、無外部資源、離線可用。

現有兩份 spec 以精確數量與位置規範：`computer-principles-v2-html-pages` 要求「剛好 6 個 HTML」；`computer-principles-v2-route` 要求「剛好 21 個主題」並逐一列出前段位置（第 8=樹與雜湊表、第 9=架構與計算理論、第 18=浮點數轉換）。本變更會同時更動這兩份契約。

## Goals / Non-Goals

**Goals:**

- 將單一「樹與雜湊表」卡拆為 8 張細分 HTML 連結卡，剔除品質不佳的 AVL/紅黑樹舊段落。
- 由既有 HTML 切割產生 4 個新講義；由 `_private/20260708/` 的 4 個 Markdown 產生另 4 個新講義。
- 新講義沿用現有紙感閱讀外框與返回機制，維持離線可用與版面保真。
- 同步回寫兩份受影響 spec，使其數量、順序、位置與新實作一致。

**Non-Goals:**

- 不改寫、不修復被排除的 AVL/紅黑樹舊段落（維持在保留的原檔內）。
- 不刪除任何既有 HTML 或 Markdown 來源檔（原 `基礎資料結構(下)_樹與雜湊表.html` 保留）。
- 不新增執行期 Markdown 轉譯器；HTML 一律預先產生為靜態檔。
- 不調整其他既有補充卡與 catalog 主題內容（僅其位置索引因插入而後移）。

## Decisions

### 以原 HTML 為切割來源，依 h2 章節邊界切成 4 檔

以 `基礎資料結構(下)_樹與雜湊表.html` 為主切割，邊界依原檔 h2 章節（非重新由 Markdown 生成，確保與現況一致）：

| 新 HTML 檔 | 取自原檔章節 | 內容 |
| ----- | ----- | ----- |
| `基礎樹.html` | 六、樹（含收尾 ★樹常考重點） | 術語、二元樹、走訪、重建、陣列表示法、BST、Heap、Heap Sort |
| `運算式表示法.html` | 七、運算式表示法 | 中/前/後序，含 3 題實戰 |
| `雜湊表.html` | 八、雜湊表 | 核心觀念、雜湊函數、碰撞、開放定址 vs 鏈結、歷屆考題 |
| `樹與雜湊表_考題練習.html` | 九、複雜度總表＋十、高頻速記＋十一、小試身手＋答案解析 | 僅此三章與其解析 |

被排除段落：原檔「平衡樹（AVL / 紅黑樹）」整段不進入任何新檔。

**替代方案（淘汰）**：直接由 `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` 重新生成——淘汰，因為原 md 品質即含不佳的 AVL/紅黑樹段，且與現行已上線 HTML 版面可能產生差異；以現有 HTML 切割可完整保真。

### 由 `_private/20260708/` Markdown 生成 4 個 AVL/紅黑樹講義

對應關係（檔名與 discuss.txt 概念名略有出入，實體檔以速記卡／刪除專練呈現）：

| 新 HTML 檔 | 來源 Markdown | 卡片標題 |
| ----- | ----- | ----- |
| `AVL樹.html` | `_private/20260708/AVL樹_考前速記卡.md` | AVL樹 |
| `AVL樹_刪除.html` | `_private/20260708/AVL樹_刪除專練.md` | AVL樹_刪除 |
| `紅黑樹.html` | `_private/20260708/紅黑樹_考前速記卡.md` | 紅黑樹 |
| `紅黑樹_刪除.html` | `_private/20260708/紅黑樹_刪除專練.md` | 紅黑樹_刪除 |

生成方式：套用與切割 HTML 相同的模板（複用原檔 byte-identical 的 `<style>` 與兩個返回函式 `resolveComputerPrinciplesV2IndexPath()`、`backToComputerPrinciplesV2()`）。Markdown 內的表格、blockquote、圈號、粗體須以語意 HTML 呈現；ASCII-art 樹狀圖須完整保留在 `<pre>` code block 內（等寬、不換行破壞對齊）。無圖片需處理。

### 卡片 id 命名與插入順序

沿用 `cpv2-supplemental-*` 慣例；8 張新卡取代原第 8 張，其後 catalog 區段整體後移。非 catalog 前段由 8 張增為 15 張：

| 位置 | 卡片 id | 標題 | 模式 |
| ----- | ----- | ----- | ----- |
| 1–7 | （既有不動）加強練習…複雜度與線性結構 | — | inline×2 + HTML×5 |
| 8 | `cpv2-supplemental-basic-tree` | 基礎樹 | HTML |
| 9 | `cpv2-supplemental-expression-notation` | 運算式表示法 | HTML |
| 10 | `cpv2-supplemental-avl-tree` | AVL樹 | HTML |
| 11 | `cpv2-supplemental-avl-tree-deletion` | AVL樹_刪除 | HTML |
| 12 | `cpv2-supplemental-red-black-tree` | 紅黑樹 | HTML |
| 13 | `cpv2-supplemental-red-black-tree-deletion` | 紅黑樹_刪除 | HTML |
| 14 | `cpv2-supplemental-hash-table` | 雜湊表 | HTML |
| 15 | `cpv2-supplemental-trees-hash-practice` | 樹與雜湊表_考題練習 | HTML |
| 16 起 | `cpv2-architecture-computation-theory` … | 架構與計算理論…（catalog 01–13） | inline/既有 |

移除 `cpv2-supplemental-trees-hash-tables` 卡與其 `computerPrinciplesV2HtmlPages.ts` 對應。路由主題總數 21 → 28；catalog row 01 由第 9 位移至第 16 位；`cpv2-floating-point-conversion` 由第 18 位移至第 25 位（仍為第 10 個 catalog）。

**替代方案（淘汰）**：把 8 張新卡放到 catalog 之後——淘汰，因原「樹與雜湊表」本就位於前段補充區，維持在原位置語意最一致。

### `htmlPage.source` 欄位定位為來源溯源

`createComputerPrinciplesV2HtmlPage(id, title, source, sourceFilename)` 的 `source` 僅作溯源；切割 4 檔標註原 `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md`，md 生成 4 檔標註各自 `_private/20260708/*.md`。瀏覽器實際載入的是 `sourceFilename` 指向的 `public/` 靜態檔。

## Implementation Contract

**行為**：使用者開啟 `/computer-principles-v2`，前段補充區看到 15 張卡（原第 8 張「樹與雜湊表」已不存在，改為 8 張細分卡）。點擊任一新卡以 `<a href>` 全頁導向對應 `public/computer-principles-v2/<檔名>.html`，頁面呈現該主題內容、紙感外框與返回鈕，且離線暖機後仍可開啟。

**資料介面**：
- `computerPrinciplesV2HtmlPages.ts` 新增 8 筆 `createComputerPrinciplesV2HtmlPage`，移除 `cpv2-supplemental-trees-hash-tables` 一筆。
- `computerPrinciplesV2Topics.ts` 以 `createHtmlSupplementalTopic()` 新增 8 張卡（id/title/順序如上表），移除原「樹與雜湊表」卡。
- 8 個 HTML 檔置於 `public/computer-principles-v2/`，均為 standalone `zh-Hant` UTF-8、無外部資源、含返回鈕、無默寫切換。

**驗收條件**：
- `getSubjectTopics('computerPrinciplesV2')` 回傳恰 28 個主題，前段第 8–15 位為上表 8 個 id/title，第 16 位為 `cpv2-architecture-computation-theory`。
- 路由清單不再含 `cpv2-supplemental-trees-hash-tables`。
- `cpv2-floating-point-conversion` 位於第 25 位、仍為第 10 個 catalog 主題。
- 每個新 HTML 檔存在且可由對應卡的 `htmlPage.href` 開啟；AVL/紅黑樹 4 檔的 ASCII 圖保留於 `<pre>`。
- 既有單元測試（`computerPrinciplesV2RouteWorkflow`、`professionalTopics`、`subjectTopics`）更新其數量/位置斷言後通過。

**範圍邊界**：
- 範圍內：上述 2 個 data 檔、8 個新 HTML 檔、對應單元測試斷言更新、兩份 spec 回寫。
- 範圍外：其他補充卡與 catalog 主題內容、被排除的 AVL/紅黑樹舊段、原 HTML 檔的刪除或改寫、任何新依賴或執行期轉譯器。

## Risks / Trade-offs

- [切割時遺漏原檔收尾的「★樹常考重點」摘要區塊（實體位置在被排除段之後）] → 明確規定基礎樹檔需納入該摘要，切割後人工比對章節齊全。
- [多份既有單元測試硬編碼 21 主題數與各卡位置，改動後大量斷言失敗] → 視為預期；於同一變更同步更新斷言，並以 `npm run test:unit` 驗證；`professionalTopics`/`subjectTopics`/`routeWorkflow` 為必改。
- [Markdown 的 ASCII 樹狀圖若未包在 `<pre>` 會對齊崩壞] → 轉換規則明列 code fence → `<pre><code>`；完成後於瀏覽器實地檢視 4 檔對齊。
- [兩份 spec 位置字串眾多，易漏改造成 analyze 不一致] → delta spec 逐一覆蓋所有含位置/數量的 scenario（含浮點數第 25 位、catalog 起點第 16 位）。
- [新增 8 個 HTML 使離線快取資產與 build 體積上升] → 均為靜態文字檔、單檔數十 KB，遠低於 500 KB chunk 警戒線，無新依賴。

