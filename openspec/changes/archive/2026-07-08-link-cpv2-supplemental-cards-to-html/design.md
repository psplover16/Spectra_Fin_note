## Context

`/computer-principles-v2` 目前使用 `SubjectTopicPage` 與 `SubjectTopicCard` 顯示 20 張 route-visible topics，其中補充段包含 `基礎資料結構` inline `lessonArticle`。使用者已整理 `_private/計概補充` 的 6 份 Markdown，並確認要把它們轉為 `public/computer-principles-v2/` 下的 standalone HTML。這些 HTML 必須保留 Markdown 原始排版，並讓指定 CPv2 補充 card 像 `database-v2` 一樣點擊標題開啟靜態頁。

## Goals / Non-Goals

**Goals:**

- 產出 6 個 CPv2 standalone HTML 靜態講義，來源與輸出檔名一一對應。
- 讓 6 張 CPv2 補充 card 以標題連結開啟 HTML，並保留書籤與完成控制。
- 移除舊 `基礎資料結構` card，新增 `複雜度與線性結構`、`樹與雜湊表`，CPv2 route-visible topics 改為 21 張。
- 保持 `阿姆達爾定律` inline `lessonArticle`，保持 13 張 catalog-backed topics 相對順序。
- 更新正式 specs，讓 app 行為與規格一致。

**Non-Goals:**

- 不新增 runtime Markdown renderer，不在瀏覽器端載入或解析 `_private` Markdown。
- 不新增測驗、題庫或互動答題流程。
- 不改 `/database-v2`、route registry、subject switcher 或 CPv2 catalog-backed 13 張卡內容。
- 不做 progress storage migration，不清理舊 completed/bookmarked topic id。
- 不刪除 `_private/計概補充` Markdown。

## Decisions

### 使用 standalone HTML 靜態資產而非 runtime Markdown renderer

6 份 Markdown 會轉成 committed HTML，放在 `public/computer-principles-v2/`。HTML 使用 `database-v2` 講義的紙張視覺、表格樣式與左上返回按鈕，但移除右上默寫模式。返回按鈕優先使用 browser history；無 history 時以 `/computer-principles-v2/` URL marker 推回 route index，支援部署在非根 base path。

替代方案：新增 runtime Markdown parser。淘汰原因是會增加 sanitization 與 bundle 風險，也違反本次保留靜態 HTML、純前端離線資產的簡潔邊界。

### 在 SubjectTopic 加入 optional htmlPage 連結資料

新增資料形狀：`SubjectTopicHtmlPage` 包含 `sourceFilename: string` 與 `href: string`；`SubjectTopic` 增加 optional `htmlPage?: SubjectTopicHtmlPage`。`sourceFiles` 仍記錄核准 Markdown 來源，`htmlPage.sourceFilename` 記錄 public HTML 檔名，`htmlPage.href` 由 `createComputerPrinciplesV2PageHref(sourceFilename, baseUrl = import.meta.env.BASE_URL)` 產生。

`getSubjectTopics()` 必須把具有 `htmlPage.href` 的 topic 視為 route-visible content，即使它沒有 inline `lessonArticle`。沒有 `htmlPage` 的 topic 仍沿用既有 block content 判斷。

替代方案：複製 `DatabaseV2View` 做 CPv2 專屬列表。淘汰原因是 CPv2 仍需要未完成/已完成分區、書籤、完成控制與既有 topic data，複製 view 會讓進度行為分裂。

### SubjectTopicCard 依 htmlPage 切換 title control 行為

當 topic 有 `htmlPage` 時，中央 title control 渲染為 `<a>`，`href` 指向 HTML，並且不切換 inline detail。當 topic 沒有 `htmlPage` 時，中央 title control 維持 `<button>`，照舊展開/收合 detail。書籤與完成 checkbox 行為不變。

替代方案：讓 HTML-linked topic 仍可展開空 detail。淘汰原因是使用者明確要求 click 開啟 HTML，空 detail 會造成誤導。

### 保留 localStorage 進度命名空間且不 migration

本變更不新增 Pinia store，不使用 IndexedDB。既有 `subjectTopicProgressStorage` 仍使用 localStorage，state shape 維持 `subjects.computerPrinciplesV2.completedTopicIds: string[]`、`bookmarkedTopicId: string | null`、`updatedAt: string`。舊 `cpv2-supplemental-basic-data-structures` 若存在於 localStorage，因 route topic list 不再包含該 id，所以不顯示；本變更不主動刪除或改寫它。

替代方案：新增 migration 清理舊 id。淘汰原因是使用者未要求 migration，且清理個人進度會增加回復成本。

### HTML 轉換保留 Markdown 原始排版

轉換時保留 Markdown 的 heading、paragraph、table、code fence、blockquote、ordered list 與 unordered list 語意。原文是有序清單就輸出 `<ol>`，原文是無序清單就輸出 `<ul>`；不套用先前 app inline card 的「清單預設有序」偏好。

替代方案：把所有清單統一轉為有序。淘汰原因是本次需求明確指定 Markdown 排版已完成且要保留。

## Implementation Contract

**Observable behavior:**

- `/computer-principles-v2` route-visible topic list contains exactly 21 topics.
- Leading topic order is `加強練習`, `阿姆達爾定律`, `CPU 排班演算法`, `死結`, `分頁與分段記憶體管理`, `物件導向特性`, `複雜度與線性結構`, `樹與雜湊表`, `架構與計算理論`, followed by the existing catalog-backed topics in their current relative order.
- No route-visible topic has id `cpv2-supplemental-basic-data-structures` or title `基礎資料結構`.
- The six HTML-linked cards render title controls as anchors and navigating them opens the matching static HTML asset. `阿姆達爾定律` and catalog-backed topics keep inline expansion behavior.
- Each generated HTML page is a standalone `zh-Hant` UTF-8 document, has a left return button, does not include the right-side recite toggle, and preserves the source Markdown structure.

**Interface / data shape:**

- `SubjectTopicHtmlPage` has `sourceFilename: string` and `href: string`.
- `SubjectTopic` has optional `htmlPage?: SubjectTopicHtmlPage`.
- CPv2 HTML hrefs are produced by `createComputerPrinciplesV2PageHref(sourceFilename, baseUrl = import.meta.env.BASE_URL)` and resolve to `computer-principles-v2/<sourceFilename>` under the normalized app base URL.
- The 6 HTML-linked professional topics keep `sourceBatch: 'computer-principles-v2-route'`, `sourceFiles` pointing to the approved Markdown path, and `sourceSummary` matching the card topic.

**Required source-to-card mapping:**

| Card title | Source Markdown | HTML filename |
| ----- | ----- | ----- |
| `CPU 排班演算法` | `_private/計概補充/CPU排班演算法_國考完整講義.md` | `CPU排班演算法_國考完整講義.html` |
| `死結` | `_private/計概補充/死結_考試精簡版.md` | `死結_考試精簡版.html` |
| `分頁與分段記憶體管理` | `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` | `分頁與分段記憶體管理_題目帶動教學完整版.html` |
| `物件導向特性` | `_private/計概補充/物件導向特性_國考完整講義.md` | `物件導向特性_國考完整講義.html` |
| `複雜度與線性結構` | `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` | `基礎資料結構(上)_複雜度與線性結構.html` |
| `樹與雜湊表` | `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` | `基礎資料結構(下)_樹與雜湊表.html` |

**Failure modes:**

- Missing HTML asset is a test failure; the app must not silently point to a non-existent file.
- If `htmlPage.href` is empty, the card must not render as a linked topic.
- HTML return fallback must not hard-code root-only `/computer-principles-v2`; it must be base-path aware.

**Acceptance criteria:**

- Targeted unit tests verify the 21-topic order, removed old id, new card ids, source traceability, href generation, and HTML asset existence/content markers.
- Component smoke verifies linked title controls are anchors and do not expand inline detail, while `阿姆達爾定律` still expands.
- Production build passes and PWA offline smoke warms CPv2 HTML assets, opens one linked HTML page, returns to `/computer-principles-v2`, and still loads route shell offline.
- `npm run typecheck`, targeted Vitest, `npm run build`, `spectra analyze link-cpv2-supplemental-cards-to-html --json`, and `spectra validate link-cpv2-supplemental-cards-to-html` pass.

**Scope boundaries:**

- In scope: CPv2 supplemental card data, reusable title-control behavior in `SubjectTopicCard`, static CPv2 HTML assets, and tests/specs for this route.
- Out of scope: database-v2 code changes, route registry changes, topic content rewrites beyond Markdown-to-HTML conversion, quiz fields, and progress migration.

## Risks / Trade-offs

- [Risk] Static HTML can drift from source Markdown if the Markdown changes later. → Mitigation: tests assert the source-to-output filename inventory and key content markers; future content changes require regenerating the HTML.
- [Risk] Adding `htmlPage` to shared topic data could affect other routes. → Mitigation: default is absent; non-linked routes keep button expansion behavior and existing tests cover unchanged routes.
- [Risk] HTML filenames contain Chinese characters and parentheses. → Mitigation: href helper and tests use the exact filenames and base path variants.
- [Risk] PWA cache omits static HTML pages. → Mitigation: production preview offline smoke opens a linked CPv2 HTML page before offline reload verification.

## Migration Plan

No storage migration. Deploy by committing new public HTML assets, data/schema changes, tests, and spec deltas. Rollback removes `htmlPage` usage, restores `cpv2-supplemental-basic-data-structures`, removes the two split data-structure topics, and removes `public/computer-principles-v2/` assets; existing localStorage progress can remain untouched.

## Open Questions

None. The user confirmed CPU/deadlock source mapping, 21 cards, proposed card order, Markdown format preservation, and spec updates.
