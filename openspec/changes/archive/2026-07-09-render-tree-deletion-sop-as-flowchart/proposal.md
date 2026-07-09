## Why

紅黑樹_刪除.html 與 AVL樹_刪除.html 的「刪除 SOP」原本是來源 Markdown 的多層文字表格，條件判斷與對應動作分散在數張表裡，學習者難以一眼掌握「看到什麼盤面 → 做什麼 → 收工或迴圈」。改以視覺化 SVG 流程圖呈現，可讓整條判斷路徑一目了然，貼合速記與應考需求。

## What Changes

- 紅黑樹_刪除.html：以內嵌 SVG 流程圖（取自 `_private/20260708/紅黑樹_刪除流程圖.html` 的 SVG＋三張圖例：名詞對照／顏色意義／四句口訣）取代「刪除 SOP」整段文字講解；保留其後「三個必記上界」「驗算」與「附錄＋16 題」。
- AVL樹_刪除.html：新繪同一視覺語言的 SVG 流程圖，取代文字版兩步驟 SOP；保留「旋轉怎麼畫」機制圖、「提早停手」表、範例 A/B、練習與覆蓋表。
- 兩頁流程圖固定淺色（不含深色模式），以配合頁面既有 paper 閱讀外框；SVG 與樣式皆內嵌、無外部資源。
- **BREAKING（規格層）**：此呈現刻意偏離既有兩條需求——「保留來源 Markdown 版面」與「保留每個 ASCII 圖於 `<pre>`」。刪除 SOP 段落改為流程圖，且紅黑樹頁移除來源的「雙黑左右鏡像」ASCII 示意圖。

## Non-Goals (optional)

- 不修改來源 Markdown（`_private/20260708/*_專練.md`）；出處與 HTML 自此於刪除 SOP 段分歧，屬預期。
- 不改動其他 CPv2 課程頁、不改路由或 CPv2 HTML 頁面註冊表、不手動修改 `dist/`（`npm run build` 自動重生）。
- 不新增深色模式，不引入任何外部字型／腳本／圖片。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `computer-principles-v2-html-pages`: 為「刪除 SOP」段落新增「以內嵌 SVG 流程圖呈現」的契約，並調整既有「保留 Markdown 版面」「保留 ASCII 圖」兩需求的適用範圍，使這兩頁的刪除 SOP 段成為明確例外。

## Impact

- Affected specs: `computer-principles-v2-html-pages`
- Affected code:
  - Modified: `public/computer-principles-v2/紅黑樹_刪除.html`、`public/computer-principles-v2/AVL樹_刪除.html`
  - New: (none)
  - Removed: (none)
- 來源素材（唯讀出處）：`_private/20260708/紅黑樹_刪除流程圖.html`
