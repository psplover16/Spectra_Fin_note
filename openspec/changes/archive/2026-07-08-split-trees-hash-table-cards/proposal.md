## Why

計概(v2) 路由目前把「樹（含 AVL/紅黑樹）、運算式、雜湊表、考題」六大獨立主題塞在單一「樹與雜湊表」卡片與單一 HTML 講義內，學習者無法針對單一主題快速定位；且其中 AVL/紅黑樹段落品質不佳。需拆成細分卡片、剔除低品質段落，並改用品質較好的速記卡／刪除專練來源。

## What Changes

- 依原 `public/computer-principles-v2/基礎資料結構(下)_樹與雜湊表.html` 內容，切割出 4 個新 standalone HTML：基礎樹、運算式表示法、雜湊表、樹與雜湊表_考題練習；排除品質不佳的 AVL/紅黑樹段落，不予收錄。
- 由 `_private/20260708/` 的 4 個 Markdown（AVL 與紅黑樹的考前速記卡／刪除專練）產生 4 個新 HTML：AVL樹、AVL樹_刪除、紅黑樹、紅黑樹_刪除，套用與現有講義相同的閱讀外框。
- 移除既有 `cpv2-supplemental-trees-hash-tables` 卡片，改為 8 張細分 HTML 連結卡，順序為：基礎樹 → 運算式表示法 → AVL樹 → AVL樹_刪除 → 紅黑樹 → 紅黑樹_刪除 → 雜湊表 → 樹與雜湊表_考題練習。
- 路由主題數由 21 增為 28；HTML 講義庫由 6 增為 14；catalog 區段起點由第 9 位後移至第 16 位。
- 原 `基礎資料結構(下)_樹與雜湊表.html` 檔案保留不刪，僅不再有卡片連結它。

## Non-Goals (optional)

- 不改寫、不修復被排除的 AVL/紅黑樹舊段落（維持在保留的原檔內）。
- 不刪除任何既有 HTML 或 Markdown 來源檔。
- 不新增執行期 Markdown 轉譯器；HTML 一律為預先產生的靜態檔。
- 不調整 CPU 排班、死結、分頁分段、物件導向、複雜度等其他既有補充卡。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `computer-principles-v2-html-pages`: HTML 講義庫由 6 個增為 14 個；新增檔案的來源不再限於 `_private/計概補充/`，改為由既有 HTML 切割（4 個）與 `_private/20260708/` Markdown（4 個）產生，且維持既有閱讀外框、版面保真與離線打包契約。
- `computer-principles-v2-route`: 以 8 張細分 HTML 連結卡取代單一「樹與雜湊表」卡；路由主題總數由 21 增為 28，非 catalog 前段由 8 張增為 15 張，catalog 區段起點與 `cpv2-floating-point-conversion` 等主題位置對應後移。

## Impact

- Affected specs: `computer-principles-v2-html-pages`, `computer-principles-v2-route`
- Affected code:
  - New:
    - public/computer-principles-v2/基礎樹.html
    - public/computer-principles-v2/運算式表示法.html
    - public/computer-principles-v2/雜湊表.html
    - public/computer-principles-v2/樹與雜湊表_考題練習.html
    - public/computer-principles-v2/AVL樹.html
    - public/computer-principles-v2/AVL樹_刪除.html
    - public/computer-principles-v2/紅黑樹.html
    - public/computer-principles-v2/紅黑樹_刪除.html
  - Modified:
    - src/modules/computerPrinciplesV2/data/computerPrinciplesV2HtmlPages.ts
    - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
    - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
    - tests/unit/professionalTopics.spec.ts
    - tests/unit/subjectTopics.spec.ts
  - Removed: (none)

