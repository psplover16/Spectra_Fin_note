## Context

networking route 已存在，`NetworkingView.vue` 透過 `getSubjectTopics('networking')` 讀取正式主題資料。可見性由 `subjectTopics.ts` 判斷：topic 內的 `lessonArticle` 若有非空 sections 才會 route-visible。使用者已整理 `_private/MD/網概/` 的 11 篇 Markdown，且要求 propose 與 apply 階段各讀取一次來源，保留既有編排，只做錯誤辨別與最小幅度修正。

## Goals / Non-Goals

**Goals:**

- 將 `_private/MD/網概/` 11 篇 Markdown 匯入 networking route，且每篇 Markdown 對應一個可展開 topic。
- 依自然章節順序顯示：1、2、3、4上、4下、5、6、7上、7下、8上、8下。
- 保留來源編排中的表格、條列、公式、例題、重點整理、`★`、`【理解】`、`【硬背】`、`【練流程】` 學習標記。
- 保留 traceability：每個 topic 的 sourceFiles 包含 `_private/網概.txt` 與對應 Markdown，sourceSummary 指向章節主題。
- apply 階段需針對內容讀取與錯誤辨別；發現明顯錯誤時做最小幅度修正，不補充來源未提供的缺漏知識。

**Non-Goals:**

- 不新增 Markdown runtime parser、自動檔案匯入流程或新資料儲存層。
- 不修改 `SubjectTopicPage.vue`、`NetworkingView.vue`、進度 storage schema 或 route path。
- 不處理 networking 以外科目的 MD 搬移或刪除狀態。
- 不重寫教材語氣，不擴寫來源 MD 未提供的內容。

## Decisions

### Decision: Reuse lessonArticle professional topic data

採用 `professionalTopics.ts` 的既有資料建模與 `lessonArticle` renderer。這讓 networking 路由與 computer-principles 的教材呈現一致，且不用新增 parser 或 UI seam。

替代方案：新增 Markdown parser 或自動載入 `_private/MD/網概/`。淘汰原因是目前教材量固定，parser 會引入額外格式邊界、測試成本與離線打包不確定性，違反最簡可行解。

### Decision: Map one Markdown file to one visible networking topic

11 篇來源分別對應 11 個 visible topics。建議 topic id 為：`networking-osi-tcpip`、`networking-basics`、`networking-devices-osi`、`networking-ip-subnetting`、`networking-routing-l3-protocols`、`networking-transport-layer`、`networking-application-ports`、`networking-physical-layer`、`networking-data-link-layer`、`networking-security-crypto`、`networking-defense-attacks`。

替代方案：沿用現有 11 個 networking skeleton 原 id。淘汰原因是現有 skeleton 與新 MD 章節不完全對齊，特別是 network layer 需要拆成 4上/4下，security 需要拆成 8上/8下，ports 應併入應用層與 Port 對照。

### Decision: Preserve source layout with minimum correction

轉換時優先使用 `table`、`orderedList`、`paragraph`、`subsection`、`indentedGroup` 表達來源結構。H1 作為 route topic title，H2 作為 lesson section heading，Markdown 表格轉為 lessonArticle table。apply 階段只修明顯錯字、內部矛盾、renderer 不支援的格式與確認為錯誤的內容。

替代方案：重寫為固定「國考重點 / 名詞解釋 / 核心想法」模板。淘汰原因是使用者已完成編排，且本次目標是匯入既有 MD，不是重新製作講義。

### Decision: Verify volatile networking facts during apply without expanding scope

Port number、WiFi/USB/Bluetooth/行動網路速度、NIST CSF 2.0 等易變或標準資料，apply 階段需以來源 MD 為主並做最小查證。若查證結果與 MD 不一致，只修正錯誤本身並在測試或實作回報中列出修正點；不得補充額外版本史或新知識。

替代方案：完全信任 MD，不再查證。淘汰原因是使用者明確要求內容錯誤需修正，而 networking 內含標準與速度數字，錯誤會直接影響選擇題準備。

## Implementation Contract

**Behavior:** `/networking` SHALL render 11 unfinished route-visible topics in this exact order: `networking-osi-tcpip`, `networking-basics`, `networking-devices-osi`, `networking-ip-subnetting`, `networking-routing-l3-protocols`, `networking-transport-layer`, `networking-application-ports`, `networking-physical-layer`, `networking-data-link-layer`, `networking-security-crypto`, `networking-defense-attacks`. Each topic title SHALL use the corresponding Markdown H1 without inventing a new display title.

**Interface / data shape:** each imported topic SHALL remain a `ProfessionalSubjectTopic` with non-empty `summary`, non-empty `terms`, `sourceFiles` containing `_private/網概.txt` and the corresponding `_private/MD/網概/*.md` path, and a first block of kind `lessonArticle` whose `sections` are non-empty. The implementation SHALL use existing `LessonArticleContentBlock` kinds only.

**Failure modes:** existing empty networking skeletons that are not mapped to a source Markdown SHALL remain non-route-visible because their `lessonArticle.sections` stay empty. Unsupported Markdown constructs SHALL be converted into the nearest existing block type instead of adding UI support.

**Acceptance criteria:** targeted unit tests SHALL fail before implementation and pass after implementation. Tests SHALL verify topic count/order, representative source phrases from all 11 MDs, sourceFiles traceability, non-empty lesson sections, absence of empty route-visible topics, and unchanged `SubjectTopicPage.vue` behavior. Typecheck and build SHALL pass. A mobile/offline smoke SHALL expand at least one table-heavy networking topic and one calculation-heavy networking topic.

**Scope boundaries:** in scope files are `src/modules/subjectTopics/data/professionalTopics.ts`, `tests/unit/professionalTopics.spec.ts`, and `tests/unit/subjectTopics.spec.ts`. Source Markdown files under `_private/MD/網概/` are read-only input unless apply discovers a confirmed content error that requires the smallest correction in source. Out of scope are new UI components, route changes, storage changes, parser changes, and non-networking content migration.

## Risks / Trade-offs

- [Risk] 11 table-heavy lessons increase `subjectTopics` bundle size → Mitigation: run `npm run build` and check Vite output remains below the 500 KB warning threshold.
- [Risk] Existing networking topic ids would lose future progress if changed → Mitigation: networking currently has no route-visible content, so the user-facing progress impact is low; tests SHALL lock the new id order before release.
- [Risk] Source MD contains a factual error in a stable standard or volatile speed table → Mitigation: apply stage reads all 11 MD again and verifies representative facts before marking content tasks done.
- [Risk] Renderer limitations flatten nested Markdown nuance → Mitigation: preserve tables and subsections with existing block kinds, and record any unavoidable formatting simplification in the implementation report.
