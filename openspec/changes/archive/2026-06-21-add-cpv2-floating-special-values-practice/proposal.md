## Why

使用者已整理浮點數轉換的新補充材料，但 `computer-principles-v2` 的「浮點數轉換」主題尚未呈現 IEEE 754 特殊值速記，也尚未把跨章重點練習放在最前方，複習時無法先抓考前題感再回到細節。現在要把 `_private/discuss.txt` 與 `_private/MD/0621/IEEE754_浮點數特殊值_速記.md` 轉成正式教材內容。本次屬於計算機原理題型補強；範圍對齊近 8 年常見國考計概複習方向，但不做完整考古題統計。

## What Changes

- 在 `computer-principles-v2` route 的 `未完成` 清單最上方新增一張正式 topic card「加強練習」，使用與「架構與計算理論」相同的 topic/card 架構，直接收錄使用者提供的 12 題提示與資管題目備註。
- 在同一主題 `16. 浮點數轉換` section 正下方新增獨立 section `IEEE 754 浮點數特殊值・速記版`，涵蓋 ±0、非正規化數、正規化數、±∞、NaN、隱藏位元與單/雙精度對比。
- 更新來源追溯與內容審查，讓新增段落可回溯至 `_private/discuss.txt` 與 `_private/MD/0621/IEEE754_浮點數特殊值_速記.md`。
- 補強測試，確認「加強練習」位於 `未完成` 清單、使用 topic card 架構、關鍵短語、sourceFiles 與題庫欄位隔離不被破壞。

## Non-Goals

- 不新增 `/computer-principles-v2` 路由、不改 subject key；既有 13 個 catalog topic 的相對順序維持不變。
- 不導入題庫互動、測驗評分、後端同步或外部資料來源。
- 不全面重寫浮點數轉換教材，只增修指定兩組 section。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- computer-principles-v2-route: The route SHALL expose a top practice topic card in the unfinished list and the floating-point conversion topic SHALL expose an independent IEEE 754 special-value section without changing route ownership or existing catalog topic order.
- professional-topic-content: Professional topic source traceability SHALL include the separate practice topic source and the refreshed floating-point lesson source files.

## Impact

- Affected specs: computer-principles-v2-route, professional-topic-content
- Affected code:
  - Modified: src/modules/subjectTopics/components/SubjectTopicPage.vue, src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue, src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts, src/styles/main.css, tests/component/SubjectRoutesSmoke.spec.ts, tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts
  - New: _TMP/reviews/cpv2-floating-point-special-values-practice-review.md
  - Removed: none
- Affected source material: _private/discuss.txt, _private/MD/0621/IEEE754_浮點數特殊值_速記.md, _private/MD/計算機概論v2/10_浮點數轉換.md
