## Why

使用者需要在 `computer-principles-v2` 路由補上一份計算機概論補充講義，讓既有 v2 內容能在「加強練習」後銜接補充資料，再進入「架構與計算理論」。現在先規格化，是為了在實作前固定卡片標題、插入順序、來源檔與離線可用邊界。

## What Changes

- 在 `/computer-principles-v2` 的主題清單新增 `補充資料` 卡片。
- `補充資料` SHALL 位於 `加強練習` 之後、`架構與計算理論` 之前。
- 卡片內容 SHALL 取自 `_private/計概補充/計算機概論_重點講義_01.md`，並保留來源追溯資料。
- 內容 SHALL 併入前端靜態資料，跟既有 PWA 資源一起建置與快取；不做遠端同步，因此沒有跨裝置衝突處理。

## Non-Goals

- 不新增 Vue 路由或新的頁面框架。
- 不把原始 markdown 作為執行期外部連結載入。
- 不重排其他 `computer-principles-v2` 主題。
- 不新增題庫、測驗流程，或擴張到共同科目。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `computer-principles-v2-route`: v2 計概路由的主題清單需顯示來源為補充講義的 `補充資料` 卡片，且順序固定在指定兩張卡片之間。
- `professional-topic-content`: 正式 `computerPrinciplesV2` topic 資料需新增 `cpv2-supplemental-data`，保留來源追溯與 lecture-only 內容邊界。

## Impact

- Affected specs: `computer-principles-v2-route`, `professional-topic-content`
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts, tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts
  - Removed: none
