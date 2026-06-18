# networking MD 匯入討論草案

> 請直接在每個 `> 回答：` 後方作答。  
> 本文件只整理討論與待確認事項，尚未進入實作。

## 來源需求摘要

來自 `_private/discuss.txt`：

- 匯入 `@/_private/MD/網概/` 內全部 Markdown。
- 依檔名可辨識的順序放入 networking 路由。
- 每個 MD 檔在 propose 階段與 apply 階段都要讀取一次。
- 內容已由使用者編排整理，應盡量保留 MD 內編排。
- 僅做錯誤辨別與最小幅度修正，不可任意新增、刪除、修改資料。
- networking 路由 section 樣式參考 computer-principles。
- 每個 section/topic 標題採用各 MD 的主題。

## 已讀來源

已讀 `_private/discuss.txt` 與以下 11 個 MD：

1. `_private/MD/網概/網路概論_1_OSI七層與TCPIP.md`
2. `_private/MD/網概/網路概論_2_基礎概念.md`
3. `_private/MD/網概/網路概論_3_網路設備對應層級.md`
4. `_private/MD/網概/網路概論_4上_IP與子網路計算.md`
5. `_private/MD/網概/網路概論_4下_路由與L3協定.md`
6. `_private/MD/網概/網路概論_5_傳輸層.md`
7. `_private/MD/網概/網路概論_6_應用層與Port對照.md`
8. `_private/MD/網概/網路概論_7上_實體層.md`
9. `_private/MD/網概/網路概論_7下_資料鏈結層.md`
10. `_private/MD/網概/網路概論_8上_資安觀念與加密.md`
11. `_private/MD/網概/網路概論_8下_防禦設備與攻擊.md`

相關程式路徑 scout：

- `src/modules/networking/views/NetworkingView.vue`
- `src/modules/subjectTopics/data/professionalTopics.ts`
- `src/modules/subjectTopics/data/subjectTopics.ts`
- `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- `src/modules/subjectTopics/types/subjectTopic.ts`

## 討論模式

Found `NetworkingView.vue`, `professionalTopics.ts`, `subjectTopics.ts`, `SubjectTopicPage.vue` — 有足夠現有架構可列 assumptions。

本議題是靜態教材資料匯入，不需要新增 module、IPC、跨層流程或 storage abstraction，所以 interface depth check 可略過。

## My assumptions

1. **沿用既有 `lessonArticle` / `professionalTopics.ts` 路徑**
   Approach: 將 networking MD 轉成既有 `LessonArticleContentBlock`，和 computer-principles 作法一致，不新增 parser、store、route 或 UI。
   Evidence: `NetworkingView.vue` 只呼叫 `getSubjectTopics('networking')`；`subjectTopics.ts` 會過濾有內容的 topic；`SubjectTopicPage.vue` 已支援 paragraph、orderedList、table、subsection、indentedGroup。
   If wrong: 若要新增 Markdown parser 或 UI，範圍會從資料填充變成架構變更，測試與風險都會變大。

   > 回答：依你意見即可

2. **一個 MD 對應一個 route-visible networking topic**
   Approach: 11 個 MD 產生 11 個可見 topic，順序為 1、2、3、4上、4下、5、6、7上、7下、8上、8下。
   Evidence: `discuss.txt` 說「內部全部MD檔 都要引入」且「每個MD標題採用各md的主題」。
   If wrong: 若要合併 4上/4下、7上/7下、8上/8下，路由數量、測試與 topic ID 都會不同。

   > 回答：依你意見即可

3. **以 MD 的 H1 作為 route topic 標題**
   Approach: route 顯示標題優先採用每篇 H1，例如 `網路概論 1：OSI 七層 + TCP/IP ★`。
   Evidence: `discuss.txt` 指定「標題採用各md的 主題」；各 MD H1 已是整理過的主題名稱。
   If wrong: 若星號 `★` 只表示重要度、不應顯示在 route，需另外放到 summary 或 terms，否則畫面標題會與期待不同。

   > 回答：依你意見即可

4. **保留 MD 編排，但不保留純作者備註到可見教材**
   Approach: 表格、條列、公式、例題、重點整理都轉成 lessonArticle；像「皆已上網查證」、「非憑記憶」這類 meta 註記，預設可保留在內容中，除非你希望它不要出現在正式頁面。
   Evidence: MD 多篇在 blockquote 中標註學習方式與查證狀態；使用者要求盡量照 MD 編排。
   If wrong: 若正式頁面不該顯示查證/學習方式註記，就需要在轉換時最小幅度移除或改放 summary。

   > 回答：依你意見即可

5. **只做最小錯誤修正，不主動重寫教材**
   Approach: apply 時只修明顯錯字、格式不適合 renderer 的地方、或測試可明確抓到的矛盾；不擴寫新內容。
   Evidence: `discuss.txt` 明確要求「別隨意新增、刪除、修改資料」。
   If wrong: 若你期待我順手補充缺漏知識，實作會違反目前「最小幅度」邊界。

   > 回答：這部分，也要針對內容去讀取，內容如果有錯誤，需要修正。但補充缺漏知識則不需要

## 發現問題與待確認

### 1. 現有 networking skeleton 與新 MD 結構不完全對齊

目前 `professionalTopics.ts` 內 networking skeleton 是：

- `networking-prep-direction`
- `networking-overview`
- `networking-devices-osi`
- `networking-ports`
- `networking-osi-tcpip-models`
- `networking-physical-layer`
- `networking-data-link-layer`
- `networking-network-layer`
- `networking-transport-layer`
- `networking-application-layer`
- `networking-security`

但新 MD 是：

- 1 OSI/TCPIP
- 2 基礎概念
- 3 網路設備
- 4上 IP/子網路
- 4下 路由/L3
- 5 傳輸層
- 6 應用層與 Port
- 7上 實體層
- 7下 資料鏈結層
- 8上 資安觀念與加密
- 8下 防禦設備與攻擊

建議：以新 MD 結構為準，改成 11 個 topic；`networking-ports` 併入 `網路概論 6`，`networking-network-layer` 拆成 4上/4下，`networking-security` 拆成 8上/8下，`networking-prep-direction` 不 route-visible。

> 回答：

### 2. 是否允許調整 topic id

若完全對齊新 MD，建議使用較清楚的新 id：

- `networking-osi-tcpip`
- `networking-basics`
- `networking-devices-osi`
- `networking-ip-subnetting`
- `networking-routing-l3-protocols`
- `networking-transport-layer`
- `networking-application-ports`
- `networking-physical-layer`
- `networking-data-link-layer`
- `networking-security-crypto`
- `networking-defense-attacks`

風險：若未來已有 networking 閱讀進度，改 id 會讓舊完成/書籤狀態失效。不過目前 networking route 尚無可見內容，這個風險應該很低。

> 回答：

### 3. 是否保留 `_private/網概.txt` 作為 sourceFiles

既有 skeleton 來源是 `_private/網概.txt`；新需求指定 `_private/MD/網概/`。  
computer-principles 之前的做法通常會同時保留大綱來源與 MD 來源。

建議：若 `_private/網概.txt` 是總大綱，sourceFiles 可保留 `_private/網概.txt` + 對應 MD；若它已過時，就只列對應 MD。

> 回答：

### 4. 易變資料是否需要再次上網查證

MD 中有多處標註已查證或涉及較可能變動的資料：

- Port number / IANA
- WiFi 7、USB4、Bluetooth、行動網路速度
- NIST CSF 2.0 於 2024 新增 Govern

目前需求說 apply 階段要讀 MD 並做最小錯誤修正。  
建議：預設信任 MD，只修顯而易見的內部矛盾；若要我重新查證易變資料，應在 `$spectra-propose` 或 `$spectra-apply` 明確列為驗證任務。

> 回答：

### 5. `★` 與「學習方式」標註要不要顯示

每篇 MD 的 H1 或 blockquote 有 `★`、`【理解】`、`【硬背】`、`【練流程】` 等學習標記。  
這些對考試準備有幫助，但如果全部顯示在 route title 或第一段，畫面會比較像筆記而非正式教材。

建議：H1 的 `★` 可以保留在標題，blockquote 的學習方式保留為 lessonArticle 開頭段落；若你希望畫面更乾淨，請指定要移除或改放 summary。

> 回答：

### 6. 工作樹已有大量 MD 搬移狀態

目前 git status 顯示 `_private/MD/網概/` 舊檔刪除與新檔新增，另有其他 MD 資料夾搬移狀態。這看起來像你正在整理來源資料。  
這不是本討論的 blocker，但後續 commit 若要求「全部非 ignored 變更」會一起進去。

> 回答：

## 建議結論

**Decision**: 建議建立 `fill-networking-content` change，把 `_private/MD/網概/` 11 個 MD 依自然章節順序匯入 networking route，每篇 MD 對應一個 visible topic。

**Rationale**: 這最符合「全部 MD 都要引入」與「盡量照 MD 編排」；同時沿用既有 lessonArticle 架構，避免新增 parser/UI/storage 的額外複雜度。

**Capture to**:

- `openspec/changes/fill-networking-content/proposal.md`
- `openspec/changes/fill-networking-content/design.md`
- `openspec/changes/fill-networking-content/specs/networking-content/spec.md`
- `openspec/changes/fill-networking-content/tasks.md`

## 下一步建議

你回答上方問題後，下一步使用：

`$spectra-propose fill-networking-content`

接著再用：

`$spectra-apply fill-networking-content`
