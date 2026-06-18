## Why

使用者已整理 `_private/MD/計概/3c作業系統/` 的作業系統 Markdown，但 `/computer-principles` 的 3c OS 內容仍多為空殼，無法作為考前複習內容。現在要把已整理好的來源內容照順序納入正式題庫，延續 3a/3b 既有匯入方式。

## What Changes

- 將 3c 作業系統資料夾內 10 個 Markdown 依章節順序引入 `computerPrinciples`。
- 讓 OS topics 產生非空 summary、terms、sourceFiles 與 lessonArticle sections；必要時新增 CPU scheduling topic 以保留 3-5 下篇主題。
- 各可見 topic 標題採用對應 MD 主題，並盡量保留 MD 既有編排、表格、流程與計算例題。
- 涵蓋計算機原理 / 作業系統，題型包含概念背誦、流程理解、CPU scheduling、deadlock、memory、virtual memory、disk management 等計算與流程題。

## Non-Goals

- 不新增新路由、新 UI 元件或新資料 schema。
- 不任意新增、刪除、濃縮或改寫使用者已整理的 MD 教材內容；只做必要的結構化轉換與明顯格式清理。
- 不補做近 8 年考古題整理；本次來源以使用者提供的 3c Markdown 為準。
- 不新增同步或衝突處理；教材是靜態 app data，離線能力沿用既有 PWA build 與 service worker。

## Capabilities

### New Capabilities

- `operating-system-content`: `/computer-principles` SHALL expose the imported 3c operating-system lesson topics from the approved Markdown sources.

### Modified Capabilities

(none)

## Impact

- Affected specs: operating-system-content
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts
  - Removed: none
