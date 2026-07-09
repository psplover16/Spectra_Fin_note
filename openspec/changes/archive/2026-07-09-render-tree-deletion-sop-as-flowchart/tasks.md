## 1. 兩頁刪除 SOP 改為內嵌 SVG 流程圖

- [x] 1.1 [P] 紅黑樹頁：於 `public/computer-principles-v2/紅黑樹_刪除.html` 的 `<head>` 樣式尾端加入 `.rbflow` 作用域 CSS，並把「刪除 SOP」文字講解段替換為內嵌 SVG 流程圖＋三張圖例（名詞對照／顏色意義／四句口訣），保留其後三個必記上界、驗算、附錄與 16 題。驗證目標：Grep 該頁出現 1 個 `<svg>` 與 3 個 `class="legend"`，且「前置作業:刪除與判斷」「考前速記口訣」文字不再出現，`<h3>三個必記上界</h3>` 與 `Q1…Q16` 仍在。對應規格需求：Tree deletion lessons present the deletion SOP as an embedded SVG flowchart；Computer principles v2 HTML lessons preserve Markdown layout。
- [x] 1.2 [P] AVL 頁：於 `public/computer-principles-v2/AVL樹_刪除.html` 的 `<head>` 樣式尾端加入 `.avlflow` 作用域 CSS，並新繪同視覺語言的 SVG 流程圖取代文字版兩步驟 SOP，保留旋轉怎麼畫、提早停手、範例 A/B、練習與覆蓋表。驗證目標：Grep 該頁出現含四型旋轉分支與珊瑚色迴圈虛線的 `<svg>`，且「第一步|找出「真正要刪的節點」」文字不再出現，`<h4>旋轉怎麼畫</h4>` 之後段落完好。對應規格需求：Tree deletion lessons present the deletion SOP as an embedded SVG flowchart；AVL and red-black tree lessons preserve ASCII diagrams。

## 2. 一致性與視覺品質

- [x] 2.1 兩頁流程圖固定淺色：確認未引入 `@media (prefers-color-scheme: dark)`，SVG 與樣式皆內嵌、無外部主機引用。驗證目標：Grep 兩檔皆查無 `prefers-color-scheme`，且流程圖區塊無 `http`／外部 `url()` 資源。
- [x] 2.2 修正 AVL 流程圖兩處連接線穿過旋轉方框的視覺瑕疵：「是·已平衡」分支線改走方框間隙（x=172），迴圈虛線改走最左側（x=6），方框位置不動。驗證目標：Read 對照兩條 `<path>` 座標，確認不再落在藍色（x9–167）與紫色（x177–335）方框範圍內。

## 3. 驗證與收尾

- [x] 3.1 編碼檢查：兩檔為 UTF-8、無 BOM、無亂碼／問號替代字元。驗證目標：以 `[IO.File]::ReadAllBytes` 檢查首三位元組非 `EF BB BF`，且全文無 U+FFFD replacement char。
- [x] 3.2 SVG 合法性：兩頁 `<svg>` 以 `System.Xml.XmlDocument.LoadXml` 載入通過（RB 16 個 `rect`、AVL 12 個 `rect`）。
- [x] 3.3 `dist/` 未被手動修改：`dist/computer-principles-v2` 內查無 `rbflow`／`avlflow`（維持舊版，待 `npm run build` 由 `public/` 重生）。驗證目標：Grep `dist` 目錄 0 命中。
- [x] 3.4 自動化測試現況說明：既有 `tests/unit/computerPrinciplesV2HtmlPages.spec.ts` 因 jsdom / html-encoding-sniffer 的 ESM `require` 問題整體無法收集（`ERR_REQUIRE_ESM`），為既有環境問題、非本變更所致；本變更以任務 3.1–3.3 的程式化驗證作為完成證據。建議後續由使用者以 `npm run dev` 開兩頁做一次人工視覺確認（SVG 縮放與文字不溢出）。
