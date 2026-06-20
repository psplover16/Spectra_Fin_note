## Why

使用者已明確指出 `/computer-principles-v2` 的 `浮點數轉換` section 內容需要更換，現有內容應視為廢棄。新的核准來源是 `_private/MD/計算機概論v2/10_浮點數轉換.md`，內容補足傳統浮點表示法、IEEE 754、反推流程與練習題，需要讓 route 顯示內容與來源檔一致。

## What Changes

- 更新 `computerPrinciplesV2` 的 `cpv2-floating-point-conversion` topic，使其 learner-facing `lessonArticle` 內容改由 `_private/MD/計算機概論v2/10_浮點數轉換.md` 轉入。
- 保留 `/computer-principles-v2` route、`computerPrinciplesV2` subject key、topic id、標題 `浮點數轉換` 與既有 13 篇 topic 順序。
- 更新 source traceability，讓 `sourceFiles`、`sourceSummary` 與 `lessonArticle.sourceSection` 指向新版計算機概論 v2 來源。
- 補上測試，確認舊內容不再作為該 topic 的顯示內容，並驗證新版內容中的傳統表示法、IEEE 754、0.1 不精確與練習題可被 route topic 讀取。

## Non-Goals

- 不新增 route、subject key、header menu 選項或 progress namespace。
- 不更動 `computerPrinciplesV2` 其他 12 個 topic 的內容、順序或來源。
- 不新增 raw Markdown renderer、後端同步、IndexedDB 或外部依賴；教材仍是 bundled static TypeScript data，無同步策略與衝突處理需求。
- 不新增近 8 年考古題、選擇題題庫或測驗解析；本次只涵蓋專業科目「計算機原理 v2」的浮點數轉換教學文章內容替換。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `computer-principles-v2-route`: 明確規定 `浮點數轉換` topic 使用新版 `計算機概論v2` 來源內容，且不改變 route topic 數量、topic id 或排序。
- `professional-topic-content`: 明確規定替換正式 topic 內容時必須同步更新來源追溯，並避免保留已廢棄來源的 learner-facing 內容。

## Impact

- Affected specs: computer-principles-v2-route, professional-topic-content
- Affected code:
  - Modified: src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - Modified: tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - Modified: tests/unit/professionalTopics.spec.ts
  - Modified: tests/unit/subjectTopics.spec.ts
  - Modified: PROJECT_ARCHITECTURE.md
  - New: _TMP/reviews/cpv2-floating-point-content-review.md
  - Removed: (none)
