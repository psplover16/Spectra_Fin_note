## Context

目前 `/database` 使用既有專業科目主題頁，Header 中「資料庫」是直接路由連結。`_private/資料庫` 已有 13 個完整 HTML 講義檔，每個檔案都是獨立 `zh-Hant` 文件，含內嵌 style、toolbar、默寫模式切換與學習內容。這次需求要新增「資料庫2」入口，讓列表外觀接近既有資料庫主題列，但點擊標題時改為開啟 HTML 講義頁。

這是純前端 PWA 變更。HTML 是靜態唯讀學習資料，不需要後端、Pinia、IndexedDB、遠端同步或衝突處理；書籤與完成狀態沿用現有 subject topic progress 的 localStorage 機制。

## Goals / Non-Goals

**Goals:**

- 新增 `/database-v2` route，畫面標題為「資料庫2」。
- Header 的資料庫入口改為下拉選單，預設顯示並導向「資料庫」，同時保留「資料庫2」選項。
- 將 13 個 `_private/資料庫` HTML 檔搬到 app 可服務的靜態資產路徑，保留原版面與樣式，只把 toolbar 左側標題改為返回按鈕。
- 讓資料庫2列表依 HTML 檔名排序與命名，移除 `國考資料庫_01_`、`國考資料庫_05B_` 這類前綴後顯示標題。
- 讓資料庫2的書籤與完成狀態使用獨立 `databaseV2` 命名空間。

**Non-Goals:**

- 不把 HTML 內容轉成 `lessonArticle` blocks。
- 不調整既有 `/database` 主題資料、完成狀態或書籤。
- 不引入新依賴、伺服器、帳號、遙測或遠端同步。
- 不補寫新的資料庫教學內容或考古題整理。

## Decisions

### Use static copied HTML pages for lesson detail

決策：將 HTML 檔複製到 `public/database-v2/`，每個檔案維持完整 HTML 文件，只修改 toolbar 左側 `.where` 顯示為返回按鈕。資料庫2列表的標題連到對應靜態 HTML 檔。

理由：原始 HTML 已包含完整樣式與互動，靜態複製最符合「原封不動搬移」。把整份 HTML 匯入 Vue raw render 會讓全域 style、script 與 DOM 操作更容易互相干擾，也會讓返回按鈕與默寫模式切換更難驗證。

替代方案：建立 `DatabaseV2HtmlPageView.vue` 後用 iframe 或 raw HTML 顯示。淘汰原因是它增加一層展示 adapter，卻沒有提供新的行為；同時 iframe 內返回按鈕與 SPA route 的互動更難維持一致。

### Add a Database subject switcher instead of a new top-level tab

決策：新增 `DatabaseSubjectSwitcher` 與 `databaseSubjectOptions`，沿用 `RouteSubMenu` 的選單互動模式。`RouteTabs` 中不再直接渲染「資料庫」連結，而是渲染資料庫群組控制。

理由：使用者明確要求資料庫選單要像計概一樣，並要求選單預設維持在既有「資料庫」。共用 `RouteSubMenu` 可以保留現有 click、Escape、overlay、preload 與 mobile 行為，但資料庫群組仍有自己的選項與預設路由，不和計概設定混在一起。

替代方案：把「資料庫2」新增為另一個 top-level tab。淘汰原因是會增加 header 擁擠度，也違反「資料庫」成為下拉選單的需求。

### Store Database v2 progress under databaseV2

決策：在 `SubjectKey` 增加 `databaseV2`，並讓 `createEmptySubjectTopicProgressState`、normalize、bookmark、completion 流程自動包含 `databaseV2`。資料庫2列表的左右 icon 功能只讀寫 `databaseV2`。

理由：使用者要求資料庫2標題列左右 icon 與功能和資料庫相同。若共用既有 `database` key，會污染舊資料庫頁的書籤與完成狀態；獨立 key 可保留兩個路由的學習進度邊界。

替代方案：讓資料庫2不儲存書籤與完成狀態，只顯示 icon。淘汰原因是「相同功能」會變成假互動，且測試無法保證使用者學習狀態。

### Drive the list from a typed HTML page manifest

決策：新增 `databaseV2Pages` manifest，欄位包含 `id`、`sourceFilename`、`title`、`href`。列表順序以 manifest 固定，manifest 內容來自 `_private/資料庫` 檔名排序。

理由：檔名排序與前綴移除是需求的一部分，顯式 manifest 比在 runtime 掃描 public 目錄可靠；Vite 前端也不能在瀏覽器端列目錄。`id` 用於測試、書籤與完成狀態，`href` 用於靜態 HTML 導頁。

替代方案：在 build time 自動掃描 `_private/資料庫`。淘汰原因是會引入額外腳本與私有來源路徑耦合；本次只有 13 個檔案，手動 manifest 成本較低且較容易審查。

## Implementation Contract

**Behavior:**

- `/database-v2` 顯示「資料庫2」列表，共 13 筆，排序與 `_private/資料庫` HTML 檔名排序一致。
- Header 的資料庫群組預設顯示「資料庫」。選單中的「資料庫」導向 `/database`，「資料庫2」導向 `/database-v2`。
- 資料庫2列表每列有左側書籤、中央標題、右側完成控制。中央標題開啟對應 `public/database-v2/<sourceFilename>` 靜態頁，不展開內文。
- Copied HTML page 的 learner-facing 內容、內嵌樣式、表格、圖示與默寫模式切換保留；toolbar 左側改為返回按鈕。返回按鈕優先使用 browser history，無上一頁時導回 `/database-v2`。

**Interface / data shape:**

- `PrimaryRoutePath` 包含 `/database-v2`，`routeComponentLoaders` 對應 `DatabaseV2View.vue`。
- `databaseSubjectOptions` 包含 `{ label: '資料庫', path: '/database' }` 與 `{ label: '資料庫2', path: '/database-v2' }`，default option 是 `/database`。
- `DatabaseV2Page` 至少包含 `id: string`、`sourceFilename: string`、`title: string`、`href: string`。
- `SubjectKey` 包含 `databaseV2`。localStorage key 與 version 維持 `spectra:subject-topic-progress:v1` 與 `version: 1`，normalize 時為缺少 `databaseV2` 的舊 state 補上空進度，不遷移既有 `database` 內容。

**Failure modes:**

- 若 progress storage 不可用，資料庫2列表仍可開啟 HTML 頁；書籤與完成控制在記憶體中不保證持久化，與現有 subject topic progress 行為一致。
- 若使用者直接開啟 copied HTML 頁且沒有 browser history，返回按鈕導向 `/database-v2`。
- 若 manifest entry 找不到對應靜態 HTML，測試必須失敗；實作不得靜默產生空連結。

**Acceptance criteria:**

- Unit tests 覆蓋 route config、route preload、`databaseV2` progress normalize，以及 `databaseV2Pages` 的 13 筆排序與標題。
- Component tests 覆蓋 AppShell Header 的資料庫下拉選單、資料庫2列表列數、書籤與完成控制。
- E2E tests 覆蓋 mobile header 可開啟資料庫選單、選到資料庫2、點擊一筆 HTML 頁、返回 `/database-v2`。
- `npm run test:unit` 與既有 app-shell Playwright smoke tests 通過。

**Scope boundaries:**

- In scope: route registry、header 資料庫 switcher、資料庫2列表、13 個 HTML 靜態檔、返回按鈕、進度 namespace、相關測試與 `PROJECT_ARCHITECTURE.md`。
- Out of scope: 既有 `/database` 內容重寫、HTML 教學文字改寫、考古題擴充、遠端資料來源、新增套件、service worker 策略重寫。

## Risks / Trade-offs

- [Risk] Static HTML 直接離開 Vue SPA shell，Header 不會留在頁面上。→ Mitigation: HTML toolbar 提供返回按鈕，並保留原 HTML 的學習版面，符合原封不動搬移的優先要求。
- [Risk] 新增 13 個 HTML 靜態檔可能增加 PWA asset 體積。→ Mitigation: 不引入新依賴，實作後以 build output 檢查 chunk 警戒線；HTML 作為靜態資產不應推高 JS chunk。
- [Risk] 手動 manifest 與 public 檔案可能不同步。→ Mitigation: unit test 檢查 13 筆 manifest `sourceFilename` 都有對應 copied HTML 檔。
- [Risk] 舊 localStorage state 沒有 `databaseV2` key。→ Mitigation: normalize 流程補上空進度，storage version 不變，既有 `database` 進度不遷移。

## Migration Plan

新增 `databaseV2` 進度 key 時不提升 storage version；舊 state 讀取時由 normalize 補上空的 `completedTopicIds`、`bookmarkedTopicId: null` 與空 `updatedAt`。若需要 rollback，移除 `/database-v2` route、資料庫 switcher 與 copied HTML 檔即可；既有 `/database` state 不受影響。

## Open Questions

None.
