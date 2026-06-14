## Why

計概路由目前第一個 topic 直接進入馮紐曼架構，缺少 bit、byte、容量單位與網速單位的基礎速查。使用者已指定要在計概最上方新增「電腦常用單位」，先補足新手讀後續計概與網路速度題目前最容易混淆的單位基礎。

## What Changes

- 在 /computer-principles 的正式 topic 清單最上方新增 cp-common-units，標題固定為「電腦常用單位」。
- topic 內容使用既有 lessonArticle、table、paragraph block，整理 bit、bits、byte、nibble、word、KB、MB、GB、TB。
- 正式說明 bits 是 bit 的英文複數，符號仍使用 b；補上 b/B 差異、32 bits = 4 bytes、1 MB/s = 8 Mbps。
- 將 sourceFiles 暫定列為 _private/計算機概論.txt 與 _private/discuss.txt，保留教材科目來源與本次新增需求來源。
- 同步更新 computer-principles manifest、workflow 與測試期待，topic 數量由 32 變成 33。
- 本次涵蓋計概的單位換算基礎與網速單位延伸；不是近 8 年考古題的全面盤點。

## Non-Goals

- 不新增 Vue 元件、路由、subjectKey 或新的內容 block 型別。
- 不改動既有 cp-von-neumann-architecture 內容與互動行為。
- 不匯入網概完整內容，也不重新整理全部計概 topic。
- 不新增線上同步；內容是靜態 app data，離線由既有 PWA 快取承載，沒有資料衝突處理。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- professional-topic-content: 計概正式 topic 清單必須包含置頂的「電腦常用單位」topic，並保留來源追蹤與單位換算內容。

## Impact

- Affected specs: professional-topic-content
- Affected code:
  - New: _private/TMP/computer-principles/cp-common-units.prompt.md, _private/TMP/computer-principles/cp-common-units.draft.md, _private/TMP/computer-principles/cp-common-units.verified.md, _private/TMP/computer-principles/20260613-computer-principles-cp-common-units.md, _TMP/20260613-computer-principles-cp-common-units.md
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, _TMP/manifests/computer-principles-manifest.md, _TMP/task-breakdowns/computer-principles-subagent-tasks.md, _private/TMP/computer-principles/import-readiness.md, tests/unit/professionalTopics.spec.ts, tests/unit/computerPrinciplesRouteWorkflow.spec.ts, tests/unit/sourceManifests.spec.ts, tests/unit/staleProfessionalContentAudit.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts, tests/e2e/app-shell.smoke.spec.ts
  - Removed: none
