# 討論稿：建立國營資訊考試 PWA 的路由、Header 與主題頁骨架

來源：`_private/discuss.txt`

本文件供後續作答使用。請直接在「待你確認的問題」區塊填入選項或補充說明；確認後可再用 `$spectra-propose` 轉成正式 Spectra change。

## Discuss Mode

**模式**：Interview mode

**原因**：本專案目前尚未建立 `src/` 前端源碼，只有 `README.md`、`AGENTS.md`、`CLAUDE.md`、`openspec/config.yaml` 等文件，因此無法依既有實作列出強假設。不過已依你的要求讀取「日語學習」專案中和本次議題直接相關的檔案，可先整理出建議預設與需要你確認的問題。

## 已讀取的脈絡

### 本專案

- `openspec/config.yaml`
  - 技術棧：Vue 3、TypeScript、Tailwind CSS、Vue Router、Pinia、PWA。
  - 架構慣例：`src/app/` 放 router/main/AppShell；`src/modules/<feature>/` 依功能分組。
  - 科目分類：專業科目為計算機原理、網路概論、資訊管理、程式設計；共同科目為國文、英文。
  - 使用情境：手機優先、PWA、可離線、375px 小螢幕需要照顧。

### 參考專案：「日語學習」

路徑：`C:\Users\Gary\Documents\Spectra-Learning-Japanese`

已讀取重點檔案：

- `src/app/router.ts`
  - 使用 Vue Router。
  - 主要路由透過 `routeComponentLoaders` lazy load。
- `src/app/AppShell.vue`
  - 外層背景、header、`RouteTabs`、`RouterView`、`KeepAlive`、PWA toast 都集中在 AppShell。
  - 啟動後會在 idle 時預載主要 route component。
- `src/app/routePreload.ts`
  - 定義主要 route path、loader registry、hover/focus/touch 預載、idle 預載。
- `src/shared/components/RouteTabs.vue`
  - header route tab 的主要排列方式。
  - tab 在 hover/focus/touchstart 時會預載對應 route。
- `src/modules/grammar/components/GrammarLevelSwitcher.vue`
  - 「N5 文法」類型的 header 下拉選單邏輯。
  - 若目前已在文法路由，點擊會開關下拉選單；不在文法路由時會導向目前選定的文法等級。
- `src/shared/components/RouteSubMenu.vue`
  - 下拉選單共用元件。
  - 支援 overlay 點擊關閉、Escape 關閉、`role="menu"` / `role="menuitem"`。
- `src/modules/n5Grammar/views/N5GrammarView.vue`
  - N5 文法頁分成未完成區與已完成區。
  - 每個 section 有完成 checkbox、閱讀位置書籤、展開內容。
  - 完成後會從未完成區移到已完成區；已完成區不顯示書籤。
- `src/modules/n5Grammar/components/N5GrammarSectionCard.vue`
  - 每個主題卡片的 header 包含左側書籤、右側 checkbox、置中標題。
  - 點標題展開/收合詳細內容。
  - 完成的 section 會自動收合。
- `src/styles/main.css`
  - header、route tab、submenu、N5 grammar section 都有專用樣式。
  - 有 `@media (max-width: 375px)` 專門調整 tab padding/font-size、N5 文法內容內距與字級。
- `tailwind.config.ts`
  - 色票：`ink #2f1f18`、`clay #b45a32`、`parchment #f6f0e8`、`sand #e7d6c6`、`moss #7c8567`、`pine #3f5a49`。
  - 陰影：`soft`。
- `package.json`
  - Vue 3、Vue Router、Tailwind、Vite、Vitest、Playwright、vite-plugin-pwa、workbox-window。
  - scripts 包含 `lint`、`typecheck`、`test:unit`、`test:e2e`、`build`、`test:ci`。
- `.github/workflows/ci.yml`
  - Node 22。
  - `npm ci`、lint、typecheck、unit test、build、Playwright e2e。
  - 失敗時上傳 Playwright diagnostics。
- `.github/workflows/cd.yml`
  - dev/main 推送觸發。
  - main 發 production，dev 發 staging。
  - 輸出到 `gh-pages`，以 `scripts/publishPages.mjs` 同步 `dist`。

## 目前可先收斂的方向

**暫定結論**：本專案應先建立「與日語學習專案一致的 Vue PWA app shell」，再在此骨架上建立國營資訊考試的科目路由與主題頁互動。

**核心取捨**：要沿用日語學習的成熟 header、route preload、PWA、N5 文法主題卡互動，但不能把日語內容模型硬套到本專案。專業科目的詳細內容會更像教學講義，排版差異後續再補，因此本次應先抽出「外殼與互動」而不是固定所有內文模板。

**建議 capture to**：

- `proposal.md`：建立 app shell、科目路由、header、共同科目下拉、CI/CD 對齊。
- `design.md`：說明與日語學習專案的對齊範圍、路由設計、共享 topic card 邊界、PWA/375px 策略、CI/CD base path。
- `tasks.md`：拆出前端骨架、route tabs、共同科目下拉、主題卡、progress storage、PWA、CI/CD、測試。
- `specs/app-shell/spec.md`：AppShell、header、路由、PWA 基本行為。
- `specs/subject-topic-page/spec.md`：每個科目頁的主題卡、書籤、checkbox、展開/收合、手機寬度行為。
- `specs/mobile-code-example/spec.md`：小螢幕程式範例排版與註解可讀性。

建議 change name：

```text
establish-subject-learning-app-shell
```

## 建議預設

### 1. 路由與 header

header 顯示 5 個主要按鈕：

- `計概`
- `網概`
- `資管`
- `程式`
- `英文`（共同科目下拉按鈕，預設英文）

建議路由使用穩定英文 slug，header label 使用中文短名：

| Header | 對應科目 | 建議 route |
| --- | --- | --- |
| 計概 | 計算機原理 | `/computer-principles` |
| 網概 | 網路概論 | `/networking` |
| 資管 | 資訊管理 | `/information-management` |
| 程式 | 程式設計 | `/programming` |
| 英文 | 英文 | `/english` |
| 國文 | 國文 | `/chinese` |

共同科目下拉建議鏡像日語學習的 `GrammarLevelSwitcher + RouteSubMenu`：

- 預設選中英文。
- 點「英文」按鈕時開啟下拉。
- 下拉選單有 `英文`、`國文`。
- 選 `國文` 後 route 導向 `/chinese`。
- 是否讓 header 按鈕文字從 `英文` 變成 `國文`，需要你確認。

### 2. 主題頁互動

每個科目頁先採與日語學習 N5 文法頁相同的互動骨架：

```text
科目 route
└─ 多個主題 section
   ├─ 書籤按鈕
   ├─ checkbox
   ├─ 標題
   └─ 點標題展開詳細內容
```

建議先共享「主題卡外殼」，詳細內容用 slot 或 subject-specific renderer 保留彈性：

- 共用：書籤、checkbox、標題、展開/收合、完成狀態、375px hit area。
- 各科自訂：詳細內容排版、教學段落、表格、程式碼範例、公式、考古題連結。

### 3. 書籤與 checkbox 語意

建議先沿用日語學習 N5 文法目前語意：

- checkbox：表示「已學完」。
- 書籤：表示「上次讀到的位置」。
- 每個科目同時間只有一個書籤。
- 被標記為已學完的主題會自動清掉書籤。
- 已完成區不顯示書籤，減少視覺雜訊。

如果你想要「每個主題都能獨立收藏」，那書籤就不是閱讀位置，而是 favorite，資料結構與 UI 都要改。

### 4. PWA 與 375px

本次從一開始就應把 375px 當作驗收寬度：

- header route tabs 必須可換行，不可水平 overflow。
- 下拉選單不可被 header 或 viewport 裁切。
- 主題卡的書籤與 checkbox hit area 需維持可點擊。
- 展開內容不得擠壓到無法閱讀。
- 初始骨架需可離線載入。
- 已訪問 route 應被快取或保留，避免手機切換時明顯卡頓。

### 5. 程式範例與實作內容

專業科目的程式範例建議建立獨立呈現規則，避免在 375px 小螢幕變成難讀的長行：

- 優先使用短而清楚的 Java 範例。
- 變數名稱要清楚但不冗長，例如 `dataBits`、`parityBit`、`sum`。
- 每段範例控制在可閱讀的小片段，不一次放過長完整程式。
- 註解要多，但避免每行尾巴塞很長註解。
- 建議使用「註解在上一行」或「短行內註解」：

```java
// m 是資料位元數，r 是校驗位元數
int m = 4;
int r = 1;

// 檢查 2^r 是否足夠放下資料、校驗位與整體檢查
boolean enough = Math.pow(2, r) >= m + r + 1;
```

- 若一段程式必然很長，應拆成「概念版」與「完整版」，手機優先顯示概念版。
- 程式碼區塊需驗證 375px 下不會讓主要閱讀流程崩掉；必要時允許水平捲動，但不要把學習重點藏在很右邊。

### 6. CI/CD

建議沿用日語學習設定：

- GitHub Actions 使用 Node 22。
- CI：`npm ci` → lint → typecheck → unit test → build → Playwright e2e。
- CI 失敗時上傳 Playwright diagnostics。
- CD：`dev` 發 staging、`main` 發 production。
- 發佈到 `gh-pages`。

需要確認的是 GitHub Pages base path。若 repo slug 是 `Spectra_Fin_note`，則可能是：

```text
production: /Spectra_Fin_note/
staging:    /Spectra_Fin_note/staging/
```

若實際 GitHub repo 名稱不同，CD 需要用實際 repo slug。

## Interface Depth Check

本議題會建立新 module、新 route flow、PWA route preload，以及進度儲存，因此需要做 interface depth check。

| 問題 | 建議答案 |
| --- | --- |
| Seam location | `src/app/router.ts` 擁有 route；`src/app/AppShell.vue` 擁有外殼；`src/shared/components/RouteSubMenu.vue` 可作下拉選單共用；`src/modules/subjectTopics/components/SubjectTopicCard.vue` 擁有主題卡互動；`src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts` 擁有書籤與完成狀態儲存；各科 `src/modules/<subject>/views/<Subject>View.vue` 擁有詳細內容呈現。 |
| Adapter count | 儲存層只需要一個 adapter，不要在每科各包一層薄 wrapper。下拉選單可用一個 CommonSubjectSwitcher 包 RouteSubMenu，不要堆多層 pass-through。 |
| Depth | `SubjectTopicCard` 不只是轉發 props，而是負責展開/收合、完成後收合、書籤按鈕、checkbox hit area、ARIA label、手機寬度互動。`subjectTopicProgressStorage` 負責 key schema、讀寫、容錯、預設值。 |
| Deletion test | 刪掉 `SubjectTopicCard` 會讓所有科目失去一致的主題互動；刪掉 `subjectTopicProgressStorage` 會讓書籤與完成狀態無法持久化；刪掉 `CommonSubjectSwitcher` 會讓國文/英文下拉與預設英文行為消失。因此這些 seam 有實質行為，不是空轉發。 |

## 待你確認的問題

請直接在每題下方填答。

### Q1. Route path 要用哪一種？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 使用英文 slug：`/computer-principles`、`/networking`、`/information-management`、`/programming`、`/english`、`/chinese` | URL 穩定、避免中文編碼問題、測試好寫。 |
| B | 使用中文 path：`/計概`、`/網概`、`/資管`、`/程式`、`/英文`、`/國文` | 直覺，但 URL 會被瀏覽器編碼，CI/E2E 與分享連結比較麻煩。 |
| C | 使用短英文 slug：`/cs`、`/net`、`/im`、`/code`、`/en`、`/zh` | 短，但可讀性較低。 |

你的答案：A

```text

```

### Q2. 共同科目 header 按鈕文字是否跟著選項變？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 預設顯示 `英文`；選國文後按鈕改顯示 `國文` | 最像日語學習的 N5/N4/N3 下拉邏輯，使用者知道目前在哪個共同科目。 |
| B | 按鈕永遠顯示 `英文`，但可從下拉選 `國文` | 符合「最後一個英文按鈕」字面，但選到國文後會不直覺。 |
| C | 按鈕顯示 `共同`，下拉選 `國文/英文` | 語意最準，但和你指定的 header 按鈕文案不同。 |

你的答案：A

```text

```

### Q3. 主題卡互動要共用一套元件嗎？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 共用 `SubjectTopicCard`，詳細內容用 slot/子元件自訂 | 書籤、checkbox、標題展開一致；內文排版仍可各科不同。 |
| B | 每個科目各自寫卡片元件 | 最自由，但容易讓 checkbox、書籤、hit area、手機行為不一致。 |
| C | 先複製日語學習 N5 元件，後續再抽共用 | 初期快，但容易累積重複與後續搬移成本。 |

你的答案：A

```text

```

### Q4. 書籤語意是什麼？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 閱讀位置：每個科目同時只有一個書籤 | 與日語學習 N5 文法現況一致，適合「上次讀到哪」。 |
| B | 收藏：每個科目可有多個書籤 | 適合收藏重點，但不是閱讀位置；需要多筆 bookmark storage。 |
| C | 兩者都要：閱讀位置 + 收藏 | 功能完整但複雜，第一版不建議。 |

你的答案：A

```text

```

### Q5. checkbox 勾選後主題要移到已完成區嗎？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 勾選後移到已完成區，並自動收合 | 與日語學習 N5 文法一致，未完成區保持乾淨。 |
| B | 留在原位置，只顯示已完成樣式 | 章節順序穩定，但未完成與已完成混在一起。 |
| C | 不做已完成區，只保留 checkbox 狀態 | 最簡單，但學習進度掃描性較差。 |

你的答案：A

```text

```

### Q6. 國文與英文第一版要做到什麼程度？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | `英文`、`國文` route 都建立，但內容先用共同科目主題頁骨架與 placeholder topics | header/dropdown 完整，後續填內容容易。 |
| B | 只建立英文 route；國文選項先不顯示 | 第一版更小，但不符合你指定的下拉選單。 |
| C | 英文與國文都先放正式資料 | 範圍變大，需要立刻定義共同科目內容結構。 |

你的答案：A

```text

```

### Q7. CI/CD 的 GitHub Pages base path 是什麼？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（暫定） | 使用 `/Spectra_Fin_note/` 與 `/Spectra_Fin_note/staging/` | 若 GitHub repo slug 就是 `Spectra_Fin_note`，可直接沿用。 |
| B | 使用其他 repo slug | 需要你填入正確 slug，否則部署後資源路徑可能錯。 |
| C | 暫不做 CD，只做 CI | 先確保品質，之後再補部署。 |

你的答案：A

```text

```

若選 B，repo slug：

```text

```

### Q8. 第一版是否要建立專用的程式碼範例元件？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 建立 `TeachingCodeBlock` 或同等元件，專門處理 375px、註解、換行與複製 | 後續程式設計與計概範例品質會穩定。 |
| B | 先用一般 Markdown/code block 樣式 | 初期快，但小螢幕可讀性風險高。 |
| C | 暫不放程式範例元件，等內容頁正式設計再做 | 範圍小，但和你對程式範例可讀性的要求有落差。 |

你的答案：A

```text

```

### Q9. PWA 離線策略第一版要多完整？

| 選項 | 做法 | 影響 |
| --- | --- | --- |
| A（建議） | 第一版即設定 PWA install metadata、service worker、route shell 離線可載入 | 符合專案原則，骨架階段就避免之後補洞。 |
| B | 先做一般 SPA，PWA 下一個 change 再補 | 初期快，但違反目前 config 的「新功能先確保離線可用」。 |
| C | 只做 PWA metadata，不做離線快取驗證 | 看起來像 PWA，但可靠度不足。 |

你的答案：A

```text

```

## 建議的 Scope

### In Scope

- 建立 Vue 3 + TypeScript + Vite + Tailwind 前端骨架。
- 建立 AppShell、Router、RouteTabs、共同科目下拉。
- 建立 6 個科目 route。
- 建立與日語學習風格一致的色票、背景、header、tab、submenu。
- 建立主題卡共用互動：書籤、checkbox、標題展開/收合。
- 建立 375px 手機寬度的基本排版驗證。
- 建立 PWA 基礎設定與離線 shell 驗證。
- 建立與日語學習一致的 CI/CD。
- 建立小螢幕程式範例排版規則或元件。

### Out of Scope

- 不在本 change 完成所有科目的正式講義內容。
- 不在本 change 定義所有詳細內容排版差異。
- 不導入伺服器、帳號、analytics 或外部 API。
- 不把共同科目做成和專業科目同樣深度。
- 不先做題庫或測驗流程，除非你另行指定。

## Draft Spec Delta

### Requirement: App shell shall expose exam subject routes

The app shell SHALL show primary route controls for 計概、網概、資管、程式 and a common-subject dropdown defaulting to 英文.

#### Scenario: Default common subject route

- **GIVEN** the user opens the app for the first time
- **WHEN** the header is rendered
- **THEN** the common-subject control shows 英文 by default
- **AND** the user can open a menu containing 英文 and 國文

#### Scenario: Subject route navigation

- **WHEN** the user taps 計概、網概、資管 or 程式
- **THEN** the app navigates to the corresponding subject route
- **AND** the header keeps the same visual style as the reference project

### Requirement: Subject pages shall use topic sections

Each subject page SHALL display multiple topic sections. Each section SHALL have a bookmark control, a completion checkbox, a title, and expandable detail content.

#### Scenario: Expanding a topic

- **WHEN** the user taps a topic title
- **THEN** the topic detail content expands
- **AND** tapping the title again collapses it

#### Scenario: Completing a topic

- **WHEN** the user checks a topic checkbox
- **THEN** the topic is marked completed
- **AND** the completion state persists after reload

### Requirement: Mobile width shall be a first-class target

The app SHALL be usable at 375px viewport width without horizontal page overflow.

#### Scenario: Header on 375px

- **GIVEN** the viewport width is 375px
- **WHEN** the header renders all subject controls
- **THEN** route tabs wrap or compress cleanly
- **AND** no text overlaps another control
- **AND** the common-subject dropdown remains usable

### Requirement: Teaching code examples shall remain readable on small phones

Code examples SHALL use clear variable names, short focused snippets, and enough Traditional Chinese comments for learning.

#### Scenario: Java example on 375px

- **GIVEN** a professional subject page contains a Java example
- **WHEN** the viewport width is 375px
- **THEN** the code block remains readable
- **AND** comments explain the learning point without forcing the important code far off-screen

### Requirement: CI/CD shall match the reference deployment pattern

The project SHALL use CI and CD workflows equivalent to the reference project, with project-specific base paths.

#### Scenario: CI validates a push

- **WHEN** code is pushed or a pull request is opened
- **THEN** CI runs install, lint, typecheck, unit tests, build, and e2e tests

#### Scenario: CD publishes staging and production

- **WHEN** `dev` is pushed
- **THEN** CD publishes a staging build
- **WHEN** `main` is pushed
- **THEN** CD publishes a production build

## 建議的 Tasks 草稿

- [ ] 建立 Vue 3 + TypeScript + Vite + Tailwind 專案骨架。
- [ ] 建立 `src/app/router.ts`、`src/app/routePreload.ts`、`src/app/AppShell.vue`。
- [ ] 建立 route tabs：計概、網概、資管、程式、共同科目下拉。
- [ ] 建立 common subject switcher：英文/國文，預設英文。
- [ ] 建立 6 個 route view。
- [ ] 建立 subject topic card 共用元件。
- [ ] 建立 topic completion/bookmark progress storage。
- [ ] 建立每個科目的 placeholder topic data。
- [ ] 建立 375px header 與 topic card layout 測試。
- [ ] 建立 PWA metadata、service worker 與離線 shell smoke test。
- [ ] 建立 teaching code block 元件或樣式規則。
- [ ] 建立 CI workflow。
- [ ] 建立 CD workflow 與 project-specific base path。
- [ ] 更新 `PROJECT_ARCHITECTURE.md`。
- [ ] 補 AppShell、route ownership、topic card、PWA 離線與 CI/CD 相關測試。

## 建議下一步

請先在本文件的 Q1-Q9 作答。作答後可用：

```text
$spectra-propose 請讀取指定 Markdown 檔案 `@/_private/propose.md` 的內容，並以它作為唯一輸入建立 change proposal。
```
