# 討論稿：計概 v2 補充 Markdown 轉 HTML 並改為卡片外連

## 來源

- 使用者需求來源：`_private/discuss.txt`
- Markdown 來源資料夾：`_private/計概補充`
- 目前偵測到的 Markdown：
  - `_private/計概補充/CPU排班演算法_國考完整講義.md`
  - `_private/計概補充/死結_考試精簡版.md`
  - `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md`
  - `_private/計概補充/物件導向特性_國考完整講義.md`
  - `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md`
  - `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md`
- 參考 HTML 樣式與返回行為：`public/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html`
- 參考 route 外連卡片：`src/modules/databaseV2/data/databaseV2Pages.ts`、`src/modules/databaseV2/views/DatabaseV2View.vue`
- 目前 CPv2 route/card 架構：`src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue`、`src/modules/subjectTopics/components/SubjectTopicPage.vue`、`src/modules/subjectTopics/components/SubjectTopicCard.vue`、`src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts`

## 建議結論

建議建立一個新的 Spectra change，例如：

`link-cpv2-supplemental-cards-to-html`

目標是把 `_private/計概補充` 內現有 Markdown 轉為靜態 HTML，輸出到 `public/computer-principles-v2/`，並讓 `/computer-principles-v2` 內指定補充卡片改成像 `/database-v2` 一樣點擊標題後開啟對應 HTML，而不是展開 inline `lessonArticle`。

這次不是單純內容替換，因為會改變 CPv2 route-visible topic 的行為、卡片數量、來源追溯與正式 spec。若過去 spec 與目前專案內容衝突，應依照使用者指示以目前專案內容與 `_private/discuss.txt` 為準，並在新 change 中修正正式規格。

## 我的假設

### 1. HTML 應該是 build-time 靜態資產，不新增 runtime Markdown renderer

做法：保留 `_private/計概補充/*.md`，為每個 Markdown 產出同名 `.html` 到 `public/computer-principles-v2/`。HTML 內嵌樣式應接近 `database-v2` 範例，保留 Markdown 的章節、表格、清單、程式碼區塊與文字順序。

依據：
- `public/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html` 是完整 standalone HTML，含內嵌 CSS 與返回按鈕。
- `openspec/specs/computer-principles-v2-route/spec.md` 目前仍要求 CPv2 使用 `lessonArticle`，不使用 runtime raw Markdown renderer。
- `package.json` 沒有既有 Markdown 轉 HTML dependency。

如果錯了：
- 若你希望 app 在 runtime 讀 Markdown，會需要新增 Markdown loader/parser 與 sanitizer，實作範圍和安全風險都會變大。
- 若你希望手工 HTML 而非轉換器，tasks 要改成逐檔產出與人工比對，不應寫成自動轉換。

### 2. CPv2 指定卡片應沿用 SubjectTopic 進度資料，但標題控制改成連結

做法：在 `SubjectTopic` 或 CPv2 topic data 補一個明確的 HTML 連結資料欄位，例如 `href` 或 `htmlPage`，讓 `SubjectTopicCard` 在該欄位存在時把中央標題渲染為 `<a>`，點擊後開啟靜態 HTML；書籤與完成 checkbox 仍沿用 `computerPrinciplesV2` namespace。

依據：
- `DatabaseV2View.vue` 的中央標題是 `<a :href="page.href">`，不展開 inline detail。
- `SubjectTopicCard.vue` 目前中央標題是 `<button>`，會切換 inline detail。
- `SubjectTopicPage.vue` 已處理 CPv2 的書籤與完成狀態，重用它可以避免另外做一套路由狀態。

如果錯了：
- 若改成 CPv2 專屬 view list，會比較接近 `database-v2`，但要重做 topic 分區、書籤、完成、已完成區域與測試，重複較多。
- 若仍保留 inline 展開，會和「click 會開啟對應 html」衝突。

### 3. 「基礎資料結構」應移除並拆成兩張新卡

做法：移除現有 `cpv2-supplemental-basic-data-structures` 卡片，新增：

| 建議位置 | 建議 id | 標題 | HTML 來源 |
| ----- | ----- | ----- | ----- |
| 原「基礎資料結構」位置 | `cpv2-supplemental-complexity-linear-structures` | `複雜度與線性結構` | `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` |
| 其後 | `cpv2-supplemental-trees-hash-tables` | `樹與雜湊表` | `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` |

依據：
- `_private/discuss.txt` 明確要求「基礎資料結構的卡片移除」並新增兩張同功能卡。
- 目前 `computerPrinciplesV2Topics.ts` 有 `cpv2-supplemental-basic-data-structures`。
- 新增的兩個 Markdown 檔案正好是資料結構上、下集。

如果錯了：
- 若你想保留原「基礎資料結構」再追加兩張，route-visible topic 數會更多，且與「移除」相衝突。
- 若你想讓兩張新卡放在別的位置，正式 spec 的 leading order 和測試都需要不同寫法。

### 4. HTML header 應只保留左上返回，不保留右上默寫模式

做法：新 HTML 使用 database-v2 的紙張風格、toolbar、返回邏輯，但 toolbar 只放左上「返回」按鈕。返回按鈕優先 `history.back()`，沒有上一頁時導回 `/computer-principles-v2`，並要支援部署在非根目錄的 base path。

依據：
- `_private/discuss.txt` 指定「左上的 返回 功能與按鈕一致」。
- `_private/discuss.txt` 指定「新生成的 html 不需要右上角的功能」。
- database-v2 HTML 的 fallback 是以 URL marker 推回 `/database-v2`。

如果錯了：
- 若仍保留右上默寫模式，會違背需求。
- 若 fallback 寫死 `/computer-principles-v2` 且部署在子路徑，可能在 GitHub Pages 之類的 base path 失效。

## 已確認的來源對應

使用者補充確認：

| CPv2 card | Markdown 來源 | HTML 輸出 |
| ----- | ----- | ----- |
| `CPU 排班演算法` | `_private/計概補充/CPU排班演算法_國考完整講義.md` | `public/computer-principles-v2/CPU排班演算法_國考完整講義.html` |
| `死結` | `_private/計概補充/死結_考試精簡版.md` | `public/computer-principles-v2/死結_考試精簡版.html` |
| `分頁與分段記憶體管理` | `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` | `public/computer-principles-v2/分頁與分段記憶體管理_題目帶動教學完整版.html` |
| `物件導向特性` | `_private/計概補充/物件導向特性_國考完整講義.md` | `public/computer-principles-v2/物件導向特性_國考完整講義.html` |
| `複雜度與線性結構` | `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` | `public/computer-principles-v2/基礎資料結構(上)_複雜度與線性結構.html` |
| `樹與雜湊表` | `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` | `public/computer-principles-v2/基礎資料結構(下)_樹與雜湊表.html` |

## 已確認決策

### 決策 1：阿姆達爾定律保持 inline

`阿姆達爾定律` 保持目前 inline `lessonArticle`，不新增 HTML。本次只把有 `_private/計概補充/*.md` 對應來源的補充卡改成 HTML 外連。

### 決策 2：CPv2 route-visible topic 總數改為 21 張

移除「基礎資料結構」並新增兩張資料結構卡後，CPv2 route-visible topic 總數接受變成 21 張。這是把原本一張資料結構卡拆成上、下兩個完整主題後的自然結果：

1. 加強練習
2. 阿姆達爾定律
3. CPU 排班演算法
4. 死結
5. 分頁與分段記憶體管理
6. 物件導向特性
7. 複雜度與線性結構
8. 樹與雜湊表
9. 架構與計算理論
10. 後續 catalog topics 依原順序

### 決策 3：兩張資料結構新卡照建議位置插入

兩張資料結構新卡取代原「基礎資料結構」位置，放在 `物件導向特性` 後、`架構與計算理論` 前：

1. `複雜度與線性結構`
2. `樹與雜湊表`

這樣最符合 `_private/discuss.txt` 的「移除基礎資料結構，然後新生成兩個與上方一樣功能的 card」。

### 決策 4：HTML 保留 Markdown 原始排版與清單型態

HTML 轉換時保留 Markdown 原始清單語意與排版：原本是有序清單就輸出 `<ol>`，原本是無序清單就輸出 `<ul>`。

這和先前「app 內卡片內容偏好有序排列」不同；本次是 standalone HTML，且需求特別強調保留 Markdown 排版，因此不應強制把所有清單改成有序。

### 決策 5：正式 spec 需要隨本次需求更新

現有 `openspec/specs/computer-principles-v2-route/spec.md` 仍描述：

- 六張 split supplemental cards。
- 第七張是 `基礎資料結構`。
- CPv2 content 透過 `lessonArticle` 呈現。

本次需求會改成：

- 「基礎資料結構」移除。
- 新增兩張資料結構卡。
- 部分 CPv2 卡片不再展開 inline 內容，而是點擊開啟 HTML。
- HTML 來源改成 `_private/計概補充` 目前的 Markdown 檔。

因此 `$spectra-propose` 需要修改 spec，而不是只寫 tasks。

## 已收斂，不再列為問題

- `CPU 排班演算法` 來源已確認為 `_private/計概補充/CPU排班演算法_國考完整講義.md`。
- `死結` 來源已確認為 `_private/計概補充/死結_考試精簡版.md`。
- `_private/計概補充` 目前有 6 個 Markdown，因此本次 HTML 輸出預期是 6 個檔案。
- `CPU 排班演算法` 和 `死結` 都應改成 click title 開啟對應 HTML。

## 建議的 proposal 範圍

### 類型

Feature / Enhancement。

### Why

CPv2 的補充教材來源已整理成完整 Markdown，使用者希望保留 Markdown 的內容與排版品質，轉成 standalone HTML，並讓指定卡片用與 `database-v2` 相同的點擊開頁體驗。

### What Changes

- 將 `_private/計概補充` 內所有 Markdown 轉為同名 HTML，輸出到 `public/computer-principles-v2/`。
- 新 HTML 使用 database-v2 HTML 的紙張風格、章節樣式、表格樣式與左上返回按鈕。
- 新 HTML 不提供右上默寫模式或其他右上功能。
- `/computer-principles-v2` 的 `CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`複雜度與線性結構`、`樹與雜湊表` 卡片改為 click title 開啟對應 HTML。
- 移除 `基礎資料結構` 卡。
- 新增 `複雜度與線性結構` 與 `樹與雜湊表` 兩張卡，連到對應 HTML。
- 不做 progress storage migration；舊的 removed topic id 若留在 localStorage，應自然不渲染、不改寫。

### Non-Goals

- 不新增 runtime Markdown renderer。
- 不改 `/database-v2` 的既有頁面與行為。
- 不改 CPv2 catalog-backed 13 張卡的相對順序。
- 不重建 app routing 或 subject switcher。
- 不刪除原始 Markdown。

### 可能受影響 spec

- 新增或修改：`computer-principles-v2-html-pages`
- 修改：`computer-principles-v2-route`
- 修改：`professional-topic-content`

### 可能受影響程式碼

- `src/modules/subjectTopics/types/subjectTopic.ts`
- `src/modules/subjectTopics/components/SubjectTopicCard.vue`
- `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- `src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts`
- 可能新增 `src/modules/computerPrinciplesV2/data/computerPrinciplesV2Pages.ts`
- `public/computer-principles-v2/`
- 測試：
  - `tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts`
  - `tests/unit/subjectTopics.spec.ts`
  - `tests/unit/professionalTopics.spec.ts`
  - `tests/component/SubjectRoutesSmoke.spec.ts`
  - 可能新增 CPv2 HTML page href / PWA offline smoke 測試

## 建議測試

- Unit：確認 CPv2 route-visible topic 順序與總數。
- Unit：確認 removed topic id `cpv2-supplemental-basic-data-structures` 不存在。
- Unit：確認新增兩張資料結構卡存在且 href 指向 `public/computer-principles-v2/<同名 html>`。
- Unit：確認指定 HTML-linked cards 不要求 `lessonArticle` 作為唯一內容。
- Component：點擊 linked card title 會有 `<a href>`，不展開 `topic-detail-*`。
- Component：未改成外連的 CPv2 卡仍可正常展開。
- Static asset：確認 `public/computer-principles-v2` 產生六個 HTML。
- Static asset：確認每個 HTML 有 `zh-Hant`、UTF-8、左上返回按鈕、無右上功能。
- E2E / PWA smoke：production preview 下開啟 `/computer-principles-v2`，點擊一張 linked card，進入 HTML 後返回 route。
- Typecheck：`npm run typecheck`。
- Spectra：`spectra analyze <change> --json`、`spectra validate <change>`。

## 結論

這個需求已收斂，可以正式進入 `$spectra-propose`。CPU 排班與死結來源已確認；阿姆達爾保持 inline；CPv2 總卡片數改為 21；兩張資料結構新卡照建議位置插入；HTML 保留 Markdown 原始格式；正式 spec 需要更新。下一步提案應寫成：

`將 _private/計概補充 轉為 CPv2 靜態 HTML 講義，並讓指定 CPv2 補充卡片改為 HTML 外連；移除舊基礎資料結構卡，拆成複雜度與線性結構、樹與雜湊表兩張卡。`
