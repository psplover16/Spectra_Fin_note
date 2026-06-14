## Context

`/computer-principles` 已有 `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` skeleton，但空 lessonArticle 會被 `getSubjectTopics()` 過濾，使用者目前看不到十六章與十七章內容。需求來源是 `_private/propose.md` 已收斂的結論：把兩份 Markdown 內容放入 app data，不整理原 Markdown，並讓十七章的 `考前總複習(Exam Quick Review)` 在 topic 內預設關閉、點選後展開。

## Goals / Non-Goals

**Goals:**

- 讓 `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` 成為 `/computer-principles` 的正式可見 topic。
- 將兩份 Markdown 轉成既有 lessonArticle block，保留來源追蹤、terms、summary 與國考新手閱讀結構。
- 新增 lessonArticle section-level 收闔 metadata 與 renderer 行為，只用在需要預設收起的 section。
- 匯入時依使用者確認修正：Hamming Code `P3` 改 `P4`，十進位小數連乘補「去掉整數，只用小數繼續乘」。
- 十七章 `數碼、文字碼與檢查碼` 必須以原 Markdown 既有內容、排版與章節編排為主，只修正混亂縮排、raw 編排指令與已確認錯誤。
- 測試保護內容、route 順序、raw 編排指令清理、section-level 收闔行為與 sourceFiles。

**Non-Goals:**

- 不改寫或搬移原 Markdown 檔。
- 不新增 Markdown runtime parser、後端、storage、新 route、外部依賴。
- 不加入 subnormal、Infinity、NaN 等超出本次國考教材取向的 IEEE 754 內容。
- 不讓所有 lessonArticle section 預設可收闔；未設定 metadata 的 section 維持展開。
- 不把所有內部 section 標題強制改為雙語。

## Decisions

### Add section-level collapse metadata to LessonArticleSection

`LessonArticleSection` 新增可選欄位：`collapsible?: boolean` 與 `defaultExpanded?: boolean`。只有 `collapsible === true` 的 section 會由 renderer 顯示成可點選控制項；`defaultExpanded` 缺省時視為 `false`，讓十七章 `考前總複習(Exam Quick Review)` 能預設關閉。未設定 `collapsible` 的既有 section 完全沿用目前展開渲染。

替代方案：把 `考前總複習` 做成新的 topic card。淘汰原因是使用者明確要求它是十七章內部 section，且拆成 topic 會破壞內容歸屬。

替代方案：只用 CSS 隱藏該 section。淘汰原因是沒有資料契約，測試與未來教材無法穩定指定哪個 section 需要收闔。

### Keep imported content in professionalTopics static data

兩個 topic 比照 `cp-hazard`、`cp-usb-speed`、`cp-base-conversion`、`cp-complement-conversion`，在 `professionalTopics.ts` 內新增 sourceFiles、terms、lesson sections 與 `markdownBackedComputerPrinciplesContentById` 分支。這維持 PWA 靜態離線內容，不需要 runtime Markdown parser。

替代方案：在 runtime 讀 Markdown 後轉 block。淘汰原因是目前 app 是純前端靜態資料，加入 parser 會增加 bundle 與資料來源不確定性。

### Normalize source instructions while preserving learner content

Markdown 中的 `用table`、`用table做` 等編排指令是實作者指示，正式 app 內容不得顯示。Hamming Code 的 `P3` 與 `P4` 不一致依使用者確認統一為 `P4`；十進位小數轉二進位補白話步驟。浮點數章維持國考範圍，不額外補 subnormal、Infinity、NaN。

替代方案：完全逐字搬入 Markdown。淘汰原因是會把 raw 指令與已確認錯誤帶進正式教材。

### Keep codes and check-codes structure close to the source Markdown

`cp-codes-and-check-codes` 的正式 app data 應以 `_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md` 作為主稿：保留定義、先背一句、常見碼表、BCD、Gray Code、文字碼、Parity Check、CRC、Hamming Code、Syndrome、漢明距、常見陷阱、國考答題句與考前速記的順序與細節。Binary 轉 Gray 與 Gray 轉 Binary 是 `Gray Code` 內部教學步驟，不應提升成與 `Gray Code` 同層的頂層 section。CRC 也應保留原 Markdown 的三段內部結構：`一、定義與用途`、`二、傳送與接收流程`、`三、算法`。`考前總複習(Exam Quick Review)` 應維持可收合，但展開後要依原 Markdown 分成 `常見陷阱`、`國考答題句`、`考前速記` 三個 subsection。Syndrome 是 Hamming Code 內的驗證/定位錯誤概念，不應提升成與 `Hamming Code（漢明碼）` 同層的頂層 section；Hamming Code 排版應跟隨原 Markdown 的學習筆記節奏，保留 1、2、3、3-1、3-2、3-3、3-4 與 Syndrome 流程，其中 1、2、3 主步驟必須對齊，3-1 到 3-4、Hamming(7,4)、表格與資料註記應在同一個淺層縮排群組內，且 3-3 底下的 P1/P2/P4 說明與「此步驟可以得出全部漢明碼」需再往右一層，不強制拆成多個 `subsection` 小標。為了呈現 Gray Code、CRC 與考前總複習三分類這類 section 內的小節，`LessonArticleContentBlock` 可使用 `subsection` block，內含小節標題與既有 paragraph / orderedList / table blocks；為了呈現 Hamming Code 的無標題內縮筆記，可使用 `indentedGroup` block 包住 paragraph / table 等既有內容。實作只整理成既有 `lessonArticle` 結構，並修正明顯錯誤。

替代方案：沿用濃縮後的概念版章節。淘汰原因是使用者明確指出該版本與預期有落差，十七章需要保留原 Markdown 的學習路徑，而不是只保留考點摘要。

### Preserve existing route order after complement conversion

兩個 topic 使用既有 skeleton 順序，`cp-floating-point-conversion` 接在 `cp-complement-conversion` 後，`cp-codes-and-check-codes` 再接其後。這避免重新定義整條 Computer Principles 順序，只讓已有空殼因內容填入而出現在 route。

替代方案：依主題相似度把十七章移到進制轉換旁。淘汰原因是使用者已確認照 skeleton 既有順序。

## Implementation Contract

**Behavior:**

- `/computer-principles` visible topic list SHALL include `浮點數轉換(Floating-Point Conversion)` and `數碼、文字碼與檢查碼(Codes and Check Codes)` after `補數轉換(Complement Representation)`.
- `cp-floating-point-conversion` SHALL include finalized lessonArticle content covering IEEE 754 fields, encoding flow, normalization, decimal fraction to binary, 10.25 single precision example, IEEE 754 decoding, 0.1 inexactness, common pitfalls, and exam quick review.
- `cp-codes-and-check-codes` SHALL include finalized lessonArticle content that follows the source Markdown learning order: definitions, quick memorization sentence, common code table, BCD with 259 example, Gray Code with Binary 1011 and Gray 1110 examples, character-code notes, Parity Check, CRC algorithm steps, Hamming Code encoding steps and Syndrome in source-style flow layout, Hamming Distance formulas, common pitfalls, exam answer sentences, and `考前總複習(Exam Quick Review)`.
- `考前總複習(Exam Quick Review)` SHALL be collapsed by default and SHALL reveal three internal subsections named `常見陷阱`, `國考答題句`, and `考前速記` when activated.
- Collapsible lessonArticle sections such as `考前總複習(Exam Quick Review)` SHALL have a dedicated visual top separation from the preceding lesson section so the review block does not appear directly attached to the previous content.
- Raw Markdown display instructions SHALL NOT appear in serialized formal topic data.

**Interface / data shape:**

- `LessonArticleSection` SHALL accept optional `collapsible?: boolean` and `defaultExpanded?: boolean` fields.
- `LessonArticleContentBlock` SHALL support a `subsection` block with a heading and nested lessonArticle content blocks for section-internal learning steps such as `Gray Code` -> `Binary 轉 Gray` / `Gray 轉 Binary`.
- `LessonArticleContentBlock` SHALL support an `indentedGroup` block with nested lessonArticle content blocks for no-heading inner notes such as Hamming Code `3-1` through `3-4` and its Hamming(7,4) table.
- A section with `collapsible: true` and `defaultExpanded: false` SHALL render closed at first render.
- A section without `collapsible: true` SHALL render as an always-expanded section regardless of `defaultExpanded`.
- A section with `collapsible: true` SHALL receive the `subject-topic-lesson-section-collapsible` class, and CSS SHALL use that class to add top spacing without changing normal non-collapsible section flow.
- Collapse state is local UI state in `SubjectTopicPage.vue`; it SHALL NOT be persisted to localStorage and SHALL NOT affect topic completion/bookmark progress.
- Topic sourceFiles SHALL include `_private/計算機概論.txt` and the corresponding Markdown source path for each new topic.

**Failure modes:**

- Empty section blocks SHALL continue to be filtered only by existing route-level content checks; the collapsible metadata itself SHALL NOT make an empty topic visible.
- If a section is collapsible but has no visible body blocks, clicking the heading SHALL NOT throw and SHALL keep the route usable.
- Existing lessonArticle table style metadata SHALL keep its current behavior and SHALL NOT be coupled to collapse metadata.

**Acceptance criteria:**

- `tests/unit/SubjectTopicPage.spec.ts` verifies closed-by-default, click-to-open, click-to-close, and unchanged non-collapsible section rendering.
- `tests/unit/professionalTopics.spec.ts` verifies both topic ids, titles, sourceFiles, terms, section headings, key content strings, corrected `P4`, decimal fraction step wording, and absence of raw display instructions.
- `tests/unit/professionalTopics.spec.ts` verifies `cp-codes-and-check-codes` keeps the source Markdown order and details, including `數碼管數字，文字碼管文字，檢查碼管有沒有錯。`, 259 的 8421 BCD example, Binary 1011 to Gray 1110 and Gray 1110 to Binary 1011 inside the `Gray Code` section, CRC modulo-2 division steps, Hamming `2^r ≥ m + r + 1`, source-style Hamming(7,4) position layout, aligned Hamming 1/2/3 ordered steps with an `indentedGroup` containing 3-1 through 3-4, Hamming(7,4), the position table, the data-placement note, and a nested `indentedGroup` for P1/P2/P4 check-bit details under 3-3, Syndrome `S4 S2 S1` inside the Hamming Code block, and Hamming Distance formula rows.
- `tests/unit/subjectTopics.spec.ts` verifies visible route order: `cp-complement-conversion`, `cp-floating-point-conversion`, `cp-codes-and-check-codes`.
- `tests/unit/computerPrinciplesRouteWorkflow.spec.ts` and `tests/unit/staleProfessionalContentAudit.spec.ts` treat the two topic ids as filled Computer Principles content.
- `npm run typecheck`, targeted Vitest suites, and `npm run build` pass.

**Scope boundaries:**

- In scope: subject topic type definitions, subject topic page lessonArticle renderer, professional topic data, subject topic route tests, professional topic content tests, workflow/stale audit tests, and manual review notes.
- Out of scope: editing original Markdown files, new storage, new route, new dependency, service worker changes, backend work, broad renderer rewrites beyond the `subsection` / `indentedGroup` lessonArticle blocks needed here, and `PROJECT_ARCHITECTURE.md` structural updates unless implementation changes source folder layout.

## Risks / Trade-offs

- [Risk] Section-level collapse adds state inside `SubjectTopicPage.vue`. → Mitigation: keep state local, keyed by topic id and section heading, and avoid localStorage persistence.
- [Risk] Collapsible headings can reduce scanability if overused. → Mitigation: apply metadata only to `考前總複習(Exam Quick Review)` in this change.
- [Risk] Hamming Code position explanations can conflict with other教材標位方向. → Mitigation: follow the user-confirmed left-to-right, 1-based convention inside this教材 and avoid adding unrelated direction notes.
- [Risk] Long IEEE 754 examples can make a mobile topic dense. → Mitigation: keep topic card collapsible and use orderedList/table structure rather than adding new visual containers.

## Migration Plan

No persisted user data migration is required. Existing completed/bookmarked topic progress uses topic ids; this change fills existing ids rather than replacing them. Rollback is to remove the two content entries and the optional section collapse fields/rendering, after which empty skeleton filtering hides the topics again.

## Open Questions

None. Q1-Q7 in `_private/propose.md` are confirmed and shall be followed.
