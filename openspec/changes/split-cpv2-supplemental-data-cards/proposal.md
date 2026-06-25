## Why

`/computer-principles-v2` 目前把六個補充主題塞在單一 `補充資料` card，複習時不易直接定位到 CPU 排班、死結或資料結構等考點。使用者已提供新版 CPU 排班速記 Markdown，現在要把補充資料拆成可獨立展開、完成與書籤的正式 cards，並讓規格先取代舊的 `補充資料` 契約。

## What Changes

- **BREAKING** 移除 route-visible `cpv2-supplemental-data` / `補充資料` card，改為六張補充 cards。
- `/computer-principles-v2` topic 總數改為 20：`加強練習`、六張補充 cards、13 張 catalog topics。
- 六張補充 cards 標題為：`阿姆達爾定律`、`CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`基礎資料結構`。
- `CPU 排班演算法` 使用 `_private/計概補充/CPU排班演算法_考試速記版.md`，保留表格、20 題有序題目與答案解析表。
- 本次屬計算機原理補充教材整理，範圍對齊近 8 年常見國考計概/作業系統選擇題考點，不新增完整考古題統計。

## Non-Goals

- 不新增 route、UI component、runtime Markdown renderer、IPC 或儲存抽象。
- 不做舊 `cpv2-supplemental-data` 完成狀態與 bookmark migration。
- 不重排既有 13 張 catalog-backed topics，也不改 `/computer-principles-v2` subject key 或 progress namespace。
- 不加入網路同步；教材仍以 bundled static data 離線提供，無同步與衝突處理。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `computer-principles-v2-route`: route-visible topic 清單由 15 張改為 20 張，補充資料由單一卡片拆成六張卡片並移除舊卡。
- `professional-topic-content`: `computerPrinciplesV2` formal topic data 改為六張可追溯來源的補充 topic，CPU 排班改用新版速記 Markdown。

## Impact

- Affected specs: `computer-principles-v2-route`, `professional-topic-content`
- Affected code:
  - Modified: src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - Modified: tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - Modified: tests/unit/subjectTopics.spec.ts
  - Modified: tests/unit/professionalTopics.spec.ts
  - Modified: tests/component/SubjectRoutesSmoke.spec.ts
  - New or restored: _private/計概補充/計算機概論_重點講義_01.md
  - New: _private/計概補充/CPU排班演算法_考試速記版.md
  - Removed: none
