## Context

本專案目前只有 Spectra 設定與討論文件，尚未建立前端 `src/`。需求來源 `_private/propose.md` 已確認 Q1-Q9 全部採 A：英文 slug route、共同科目按鈕跟隨英文/國文切換、共用 `SubjectTopicCard`、書籤作為閱讀位置、checkbox 勾選後移到已完成區、英文與國文 route 第一版都建立、GitHub Pages base path 使用 `/Spectra_Fin_note/`、第一版建立 `TeachingCodeBlock`、第一版即完成 PWA 離線 shell。

參考專案「日語學習」已提供可複用方向：`AppShell` 擁有 header、route region、`KeepAlive` 與 PWA toast；route component 使用 loader registry 做 hover/focus/touch 預載與 idle 預載；header 使用 route tabs 與 dropdown submenu；N5 文法頁用主題卡呈現書籤、完成 checkbox、標題展開與未完成/已完成分區。

## Goals / Non-Goals

**Goals:**

- 建立 Vue 3 + TypeScript + Vite + Tailwind + Vue Router + PWA 的前端骨架。
- 建立 6 個科目 route：`/computer-principles`、`/networking`、`/information-management`、`/programming`、`/english`、`/chinese`。
- 建立手機優先 header：計概、網概、資管、程式、共同科目下拉；共同科目預設英文，選國文後按鈕文字改為國文。
- 建立共用 `SubjectTopicCard` 與主題進度儲存，讓每科都有閱讀位置書籤、完成 checkbox、標題展開、未完成/已完成分區。
- 建立 `TeachingCodeBlock`，讓 Java 範例在 375px 寬度下可讀且註解清楚。
- 建立 PWA install metadata、service worker、離線 shell 驗證，以及與日語學習同型的 CI/CD。
- 更新 `PROJECT_ARCHITECTURE.md`，把新增 `src/` 結構、測試與部署流程記為活文件。

**Non-Goals:**

- 不撰寫正式講義內容，不匯入近 8 年考古題，不建立題庫資料模型。
- 不新增測驗流程、題目四選項、正解、選項辨析或待校對題目狀態。
- 不新增伺服器、帳號、雲端同步、analytics 或外部 API。
- 不把共同科目做成專業科目同等深度；本次只建立可承載內容的 route 與 placeholder topics。
- 不抽成跨專案套件；本專案只參考日語學習的設計與互動模式。

## Decisions

### 使用日語學習同型 AppShell 與 route preload

採用 `src/app/AppShell.vue` 作為唯一 app frame，集中管理背景、header、main route region、`KeepAlive` 與 PWA toast。`src/app/router.ts` 使用 Vue Router；`src/app/routePreload.ts` 定義 `PrimaryRoutePath`、loader registry、hover/focus/touch 預載與 idle 預載。

理由：本專案路由數量固定且都是主要學習頁，與日語學習的 primary route model 相近。沿用 loader registry 可避免手機第一次切換 route 時有明顯卡頓，也能讓 `KeepAlive` 保留已訪問頁狀態。

替代方案：在各 tab click 時才動態 import route。淘汰原因是第一次切換較容易出現空白或卡頓，且無法利用 hover/focus/touch 提前準備 route component。

### 使用英文 slug route 與共同科目下拉

路由使用英文 slug，header label 使用中文短名。共同科目使用 `CommonSubjectSwitcher` 包裝 `RouteSubMenu`，選項固定為英文與國文，預設英文；若目前在 `/english` 或 `/chinese`，點擊按鈕開關下拉，選項變更後導向對應 route 並更新按鈕文字。

理由：英文 slug 避免 URL 中文編碼與 e2e selector 混亂；header 維持中文短名讓 375px 內仍能掃描。共同科目下拉鏡像日語學習 N5 文法下拉，但語意改為國文/英文。

替代方案：使用中文 path。淘汰原因是瀏覽器分享連結與測試輸出會出現 percent-encoding，除錯成本高。

### 使用 SubjectTopicCard 作為共用主題互動外殼

新增 `src/modules/subjectTopics/components/SubjectTopicCard.vue`，由它負責書籤按鈕、完成 checkbox、標題展開/收合、完成後自動收合、ARIA label、hit area 與 375px 樣式。topic header 僅顯示主題標題，不把 `summary` 顯示成每個 section 的 subtitle；詳細內容以 slot 或 subject-specific child component 呈現。

理由：書籤、checkbox、展開互動在六個科目相同，應共用；但各科講義內容排版會不同，不應把內文結構硬寫進共用卡片。

替代方案：每個科目各自複製 N5 文法卡片。淘汰原因是手機 hit area、完成區、書籤語意與可及性會分岔，後續維護成本高。

### 使用 localStorage 保存主題進度

新增 `subjectTopicProgressStorage`，使用單一 localStorage key：`spectra:subject-topic-progress:v1`。資料 shape：

- `version: 1`
- `subjects: Record<SubjectKey, SubjectProgress>`
- `SubjectProgress.completedTopicIds: string[]`
- `SubjectProgress.bookmarkedTopicId: string | null`
- `SubjectProgress.updatedAt: string`

`SubjectKey` 固定為 `computerPrinciples`、`networking`、`informationManagement`、`programming`、`english`、`chinese`。

localStorage 負責小量進度旗標；IndexedDB 本 change 不使用，保留給未來大量講義、題庫或字卡資料；Pinia store 本 change 不新增，route view 使用 component state/composable state 讀取並寫回 localStorage。若後續新增 Pinia，state shape 必須只鏡射目前 route 的 `completedTopicIds`、`bookmarkedTopicId`、`isLoading`、`errorMessage`，不得另創第二套持久化真相。

同步策略：純本機，不做跨裝置同步。衝突處理：同一瀏覽器最後一次本機寫入勝出。讀取失敗或 JSON 損毀時回傳空進度並顯示可恢復的預設狀態，不讓 route 崩潰。

替代方案：一開始使用 IndexedDB。淘汰原因是本 change 僅保存每科完成 topic ids 與一個閱讀位置，資料量小；IndexedDB 會讓第一版複雜度超過收益。

### 使用 placeholder topic data 但不建立正式講義資料模型

每個科目 route 會有 placeholder topics，欄位只包含 `id`、`subjectKey`、`title`、`summary`、`blocks`。`blocks` 可表達簡短段落或範例入口，但不放正式考古題資料。

本 change 不建立題庫，因此不定義題幹、四個選項、正解、各選項辨析、來源年度或待校對狀態。未來正式講義或題庫 change 必須另行定義資料模型，並依專業科目嚴謹教學與共同科目輕量學習的差異建立規格。

替代方案：第一版就建立完整講義/題庫資料模型。淘汰原因是目前需求只要 app shell 與主題頁骨架，完整資料模型會把範圍推進到內容製作與題庫驗證。

### 使用 TeachingCodeBlock 管理小螢幕 Java 範例

新增 `TeachingCodeBlock`，輸入語言、程式碼、可選標題與說明。第一版聚焦 Java。樣式在 375px 下保留可讀字級、清楚行高、明確水平捲動區，並鼓勵短片段與註解在上一行。

理由：專業科目要求 Java 範例與大量註解；若直接散落在一般 code block，375px 下容易讓重點藏到右側或註解擠壓程式碼。

替代方案：先使用瀏覽器預設 `pre`/`code`。淘汰原因是無法保證手機寬度的可讀性，也不利於後續統一複製、標題、說明與驗證。

### 使用 PWA 離線 shell 與 GitHub Pages CI/CD

使用 vite-plugin-pwa 建立 install metadata、service worker 與 route shell cache。`VITE_APP_BASE_PATH` 與 `VITE_APP_START_URL` 支援 production `/Spectra_Fin_note/` 與 staging `/Spectra_Fin_note/staging/`。CI 使用 Node 22，執行 install、lint、typecheck、unit tests、build、Playwright e2e；CD 在 dev/main 發布 gh-pages staging/production。

理由：專案原則要求新功能先確保離線可用，且需求明確要求 CI/CD 與日語學習一致。把 PWA 和 CD 放在骨架 change 內，可避免後續每個 route 都補一次 base path 與離線問題。

替代方案：先做一般 SPA，PWA 與 CD 後補。淘汰原因是 PWA base path、service worker scope 與 route navigation 會影響 AppShell 與測試，延後會增加返工。

## Implementation Contract

#### Behavior

- 首次開啟 app 時，使用者看到日語學習同型風格的 AppShell：暖色背景、header route tabs、main route region。
- Header 在 375px viewport 內顯示計概、網概、資管、程式、英文；tab 可換行或壓縮，不得水平 overflow 或文字重疊。
- 點擊共同科目按鈕會開啟英文/國文下拉；預設英文；選國文後導向 `/chinese` 且按鈕文字顯示國文。
- 六個 route 都可直接載入、從 header 導航、透過 browser refresh 保持可用，並在已訪問後由 `KeepAlive` 保留頁面狀態。
- 每個科目 route 顯示未完成 topics；topic header 有左側閱讀位置書籤、右側已學完 checkbox、置中標題，不顯示每個 section 的 subtitle；點標題展開/收合詳細內容。
- 每個科目同時間只有一個閱讀位置書籤；設定新書籤會覆蓋同科舊書籤；勾選已學完會清除該 topic 的書籤、收合 topic，並移到已完成區。
- localStorage 損毀或不可用時，route 使用空進度繼續渲染，不出現 console error 或白屏。
- Java 範例使用 `TeachingCodeBlock` 呈現，在 375px 寬度下主要學習內容可讀；長行可在 code 區內水平捲動，不讓整頁水平 overflow。
- 安裝後或離線重開時，AppShell 和已打包 route shell 可載入；未快取的外部資料不存在於本 change。
- CI/CD workflow 以 Node 22 驗證與發布；production base path 是 `/Spectra_Fin_note/`，staging base path 是 `/Spectra_Fin_note/staging/`。

#### Interface / data shape

- `PrimaryRoutePath` 包含 `/computer-principles`、`/networking`、`/information-management`、`/programming`、`/english`、`/chinese`。
- `SubjectKey` 包含 `computerPrinciples`、`networking`、`informationManagement`、`programming`、`english`、`chinese`。
- `SubjectTopic` 包含 `id: string`、`subjectKey: SubjectKey`、`title: string`、`summary: string`、`blocks: SubjectTopicBlock[]`。
- `SubjectTopicProgressState` 包含 `version: 1` 與 `subjects: Record<SubjectKey, SubjectProgress>`。
- `SubjectProgress` 包含 `completedTopicIds: string[]`、`bookmarkedTopicId: string | null`、`updatedAt: string`。
- `SubjectTopicCard` props 包含 `topic`、`completed`、`bookmarked`、`showBookmark`、`defaultExpanded`；emits 包含 `update:completed` 與 `update:bookmarked`。
- `TeachingCodeBlock` props 包含 `language`、`code`、`title?`、`description?`，第一版 `language` 驗證至少支援 `java`。

#### Failure modes

- Unknown route 顯示可辨識的 route fallback 或導回預設 `/computer-principles`，不得白屏。
- 空 topic list 顯示該科目尚未建立內容的空狀態，不造成 console error。
- localStorage parse 失敗時，清楚隔離為空進度；不自動刪除使用者資料，除非下一次使用者互動寫入新狀態。
- Service worker 更新或離線狀態不得阻塞 route 渲染；若有更新提示，使用 toast 顯示，不彈出阻塞式對話框。

#### Acceptance criteria

- `npm run lint` 通過。
- `npm run typecheck` 通過。
- `npm run test:unit` 通過，涵蓋 route config、progress storage、SubjectTopicCard、TeachingCodeBlock。
- `npm run build` 通過，Vite chunk warning 不超過 500 KB 警戒線；若超過，必須在同一 change 處理或記錄設計理由。
- `npm run test:e2e` 通過，涵蓋 375px header、共同科目下拉、topic 完成/書籤、離線 shell。
- Playwright 驗證 375px viewport 無水平 page overflow，且 header、topic card、code block 文字不互相覆蓋。
- `spectra analyze establish-subject-learning-app-shell --json` 無 Critical/Warning。
- `spectra validate establish-subject-learning-app-shell` 通過。

#### Scope boundaries

- In scope：骨架、路由、header、主題卡互動、placeholder topics、localStorage 進度、TeachingCodeBlock、PWA shell、CI/CD、測試、架構文件。
- Out of scope：正式講義內容、近 8 年考古題、題庫/測驗、外部同步、帳號、伺服器、analytics、完整內容資料模型。

## Risks / Trade-offs

- [Risk] Header 五個按鈕加下拉在 375px 仍可能擁擠 → Mitigation: 使用短中文 label、flex-wrap、固定最小 hit area 與 Playwright 375px screenshot/overflow 斷言。
- [Risk] 共用 `SubjectTopicCard` 可能限制各科詳細內容排版 → Mitigation: 僅共用 header/狀態互動，內文以 slot 或 subject-specific renderer 呈現。
- [Risk] localStorage JSON 損毀會讓進度讀取失敗 → Mitigation: storage guard 回傳空進度並保留 route 可用，下一次互動才寫入新狀態。
- [Risk] PWA base path 若與 GitHub repo slug 不一致會造成資源 404 → Mitigation: CI/CD 使用 `VITE_APP_BASE_PATH` 和 `VITE_APP_START_URL`，並以 production/staging e2e 或 build output 檢查路徑。
- [Risk] 第一版建立 PWA、CI/CD 與 UI 骨架範圍較寬 → Mitigation: 不做正式內容與題庫，把 tasks 拆成可獨立驗證的小步驟。

## Migration Plan

本專案尚未有前端 runtime，無使用者資料遷移。導入後若 localStorage key 在後續 change 變更，需新增 versioned migration；本 change 只建立 `version: 1` 初始格式。

Rollback 策略：若 PWA 或 CD 導致部署失敗，可先停用 CD workflow 的發布 job，但保留 CI；若 service worker 造成離線快取問題，可調整 vite-plugin-pwa 設定並重新發布，使用新 service worker 覆蓋舊版本。

## Open Questions

目前無阻塞問題。需求文件已確認 Q1-Q9 均採 A；GitHub Pages base path 以 `/Spectra_Fin_note/` 與 `/Spectra_Fin_note/staging/` 作為本 change 的固定輸入。
