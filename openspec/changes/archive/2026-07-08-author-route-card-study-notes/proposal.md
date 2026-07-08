## Why

app 內 7 個專業路由的 card 已有結構化教學內容，但形式偏「條列講義」，對新手不夠「以題帶學」。使用者需要一份可離線閱讀、以題目帶動、逐張 card 對應的學習講義，方便通勤／睡前 5–15 分鐘短時段複習與快速抓重點。趁內容已穩定，一次性把這些 card 轉為題目導向講義。

## What Changes

- 為 networking-v2、operating-systems、database-v2、information-management、programming、algorithms、system-design 等 7 個路由的**全部 card** 各產出 1 份學習 md，共約 71 份，存於 _private/20260701/。
- 內容以各 card 現有 lessonArticle 內容改寫；database-v2 為例外，改讀 public/database-v2/ 下的 13 個 HTML 檔為底。
- 統一採「題目先行完整版」骨架：開場題目 → 先想想 → 觀念拆解（含比喻／表格）→ 回到題目解答 → 重點整理 → 常見陷阱 → 練習題（含收合式解答）。
- 檔名格式：路由 meta.title＋兩位序號＋card 標題（例：網路概論(v2)_01_OSI 七層…）；ASCII 斜線一律換成全形斜線。
- 涵蓋科目與題型：7 個路由全屬**專業科目**，採嚴謹教學深度（新手向、每段配實例）；產出為「講義＋練習題」形式，非測驗題庫；本次**不以近 8 年考古題為題庫範圍**，而以 app 既有 card 教學內容為改寫底稿。

## Non-Goals

- 不修改任何 app 程式碼、Vue 元件、路由設定或 card 資料來源，不改動 app 執行期行為。
- 不修改 openspec/specs/ 下描述 app 既有行為的任何規格；本次僅新增一份描述「學習講義交付物」的 capability 規格作為驗收契約。
- 不新增或修改測試，不改動建構與部署設定。
- 不含國文、英文等共同科目（共同科目輕量教學不在本次範圍）。
- 不涉及離線資料儲存（localStorage／IndexedDB）：產出僅為靜態 md 檔，無執行期資料。
- 不讀寫受限檔案與資料夾：_private/_private_notes/筆記.txt，以及 _private/_private_notes 與 _private/_private_fileAssets 下名為 done 的目錄及其內容。

## Capabilities

### New Capabilities

- `route-card-study-notes`: 定義「各路由每張 card 對應一份題目帶動、新手向學習講義 md」之交付物規格與驗收契約，涵蓋覆蓋範圍（7 路由全部 card）、存放位置（_private/20260701/）、檔名慣例、統一結構骨架、取材來源（既有 card 內容；database-v2 取 HTML）與編碼要求（繁中、UTF-8 無 BOM）。

### Modified Capabilities

無既有規格之需求變更。

## Impact

- Affected specs: 新增 route-card-study-notes（僅本變更內之交付物規格；不修改既有規格）。
- Affected code:
  - New: _private/20260701/ 下約 71 份學習 md（依 7 個路由分批產出）。
  - Modified: 無。
  - Removed: 無。
- 唯讀取材（僅讀取、不修改）：
  - src/modules/subjectTopics/data/networkingV2Topics.ts
  - src/modules/subjectTopics/data/professionalTopics.ts
  - src/modules/subjectTopics/data/subjectTopics.ts
  - src/modules/databaseV2/data/databaseV2Pages.ts
  - public/database-v2/ 下的 13 個 HTML 檔
  - tests/unit/subjectTopics.spec.ts（作為各路由 card 清單與順序的權威依據）
