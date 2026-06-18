## Why

Algorithms route 目前尚未完整承接使用者已整理的資料結構與演算法 Markdown，導致 `/algorithms` 的前段學習順序與可讀內容不符合最新教材來源。現在要把 `_private/MD/資料結構與演算法/` 的 9 個 MD 依檔名順序匯入，讓考前複習能先讀完整主線內容，再讀既有演算法範例。

## What Changes

- 新增 Algorithms route 頂部的 9 個 Markdown-backed topics，順序依檔名自然排序，包含 Big-O、陣列與鏈結串列、堆疊與佇列、樹、高等樹、圖基礎與走訪、圖演算法、排序、雜湊。
- 每個 MD 轉為 `lessonArticle` 結構，section 樣式參考 Networking route。
- 既有 Algorithms topics 全部保留並排在新增 9 個 topics 後方。
- 每個 MD 在 propose 階段與 apply 階段都必須讀取；內容僅做錯誤辨別與最小幅度修正。

## Non-Goals

- 不新增或修改 Networking route 內容。
- 不大幅重寫、濃縮、刪除或重新編排 MD 既有教材。
- 不新增測驗、題庫、近 8 年考古題盤點或互動功能；本次範圍以使用者已整理 MD 為準。
- 不新增 UI 元件、儲存格式、外部依賴或同步機制；資料仍是靜態 app data，離線隨 bundle 使用，沒有衝突處理需求。

## Capabilities

### New Capabilities

- `algorithms-data-structure-content`: 定義 Algorithms route 匯入資料結構與演算法 Markdown topics、排序、來源追蹤與最小修正原則。

### Modified Capabilities

(none)

## Impact

- Affected specs: algorithms-data-structure-content
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/algorithmsRouteWorkflow.spec.ts
  - Removed: none
