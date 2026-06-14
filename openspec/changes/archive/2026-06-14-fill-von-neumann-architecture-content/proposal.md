## Why

目前 `cp-von-neumann-architecture` 只有骨架，使用者已提供馮紐曼架構的人工 Markdown 內容，需要一個受控方式整理後放入既有計概 topic。現在要做是因為先前大量生成品質不穩，後續流程改為使用者逐 section 提供內容、助手只整理貼回。

## What Changes

- 將馮紐曼架構整理為 `lessonArticle` 內容，包含導讀、分段、`sourceLabel` 標記、段落、清單與表格。
- 保留 `_private/計算機概論.txt` 與 `_private/MD/馮紐曼架構.md` 於資料層來源 metadata，但教材正文與 UI 不顯示來源路徑或來源章節。
- 補上必要中英專有名詞與新手可理解的定義，但只能基於使用者提供內容整理。
- 將「五大單元」與「改善方法」這類定義型條列改為有序清單，讓讀者以編號掃讀每個名詞解釋。
- 若內容不足或矛盾，實作時先標示待補，不自由生成正式內容。

## Non-Goals

- 不自動生成全部計概或全部專業科目內容。
- 不新增路由、資料模型、UI 欄位或 section subTitle。
- 不修改 `cp-von-neumann-architecture` 以外的 topic。
- 不納入近 8 年考古題盤點；本次只處理使用者指定的馮紐曼架構 section 內容。

## Capabilities

### New Capabilities

- `manual-section-content-fill`: 允許把使用者逐 section 提供的專業科目內容，整理後填入既有 `lessonArticle` topic，並保留來源、標記與不可自由生成的限制。

### Modified Capabilities

(none)

## Impact

- Affected specs: manual-section-content-fill
- Affected code:
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts
  - Modified: src/modules/subjectTopics/components/SubjectTopicPage.vue
  - Modified: tests/component/SubjectTopicProfessionalBlocks.spec.ts
  - Modified: tests/unit/professionalTopics.spec.ts
  - New: none
  - Removed: none
- Source inputs:
  - _private/propose.md
  - _private/MD/馮紐曼架構.md
  - _private/計算機概論.txt
