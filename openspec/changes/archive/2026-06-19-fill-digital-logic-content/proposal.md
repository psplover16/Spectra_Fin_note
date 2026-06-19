## Why

使用者已整理 3b 數位邏輯 Markdown，但 /computer-principles 內對應五個 topic 仍是空 skeleton，無法用來複習考試。現在要把已確認的教材內容與互動真值表正式納入 app，讓新手能照原 Markdown 編排快速學習。

## What Changes

- 匯入基本邏輯、SOP/POS、卡諾圖、萬用閘、組合與循序電路五個 topic。
- 兩輸入真值表支援點選輸出欄標題後揭露該欄值。
- 清除 Markdown 製作指令，保留 source traceability，並修正已確認的明顯術語與符號。

## Non-Goals

- 不修改原始 Markdown 檔。
- 不額外擴寫第五章短文以外的公式或例題。
- 不新增新 route、後端、儲存或外部依賴。

## Capabilities

### New Capabilities

- digital-logic-content: /computer-principles SHALL display the five 3b digital logic lesson topics from the approved Markdown sources.

### Modified Capabilities

- subject-topic-page: lessonArticle tables SHALL support configured column-value reveal interaction for self-testing truth tables.

## Impact

- Affected specs: digital-logic-content, subject-topic-page
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/components/SubjectTopicPage.vue, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/SubjectTopicPage.spec.ts
  - Removed: none
