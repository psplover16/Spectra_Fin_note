## Context

目前 /computer-principles 已有 `cp-hazard`、`cp-usb-speed`、`cp-base-conversion`、`cp-complement-conversion` 的正式 topic skeleton，但因 lessonArticle 內容為空，route helper 會將它們過濾掉。使用者已在四份 Markdown 中完成新手國考版整理，並確認要放入 app route，而不是再整理 Markdown。

這次同時需要支援 USB 速度表的重點標示。現有 lessonArticle table 只有 headers 與 rows，無法描述某一列、某一欄或某一格的文字色與背景色，因此需要擴充 table block 的資料契約與 renderer。

## Goals / Non-Goals

**Goals:**

- 讓 /computer-principles 顯示四個新增正式 topic：管線危障(Hazard)、USB 速度(USB Speed)、進制轉換(Base Conversion)、補數轉換(Complement Representation)，其中 Hazard 排在 Pipeline 與匯流排之間，其餘三個維持 Cache 後的既有相對順序。
- 將四份 Markdown 的既有內容轉為 lessonArticle sections，清除「用table」「ul/li做」「你幫我設計顯示方式」等編排指示文字。
- 讓 lessonArticle table 支援 row、column、cell 三種 highlight metadata，至少能表達文字紅色與 td 背景色。
- 讓進制範例以長講義形式放在 topic 下方，保留可收闔閱讀體驗。
- 以單元測試保護內容顯示、來源追蹤、table highlight rendering、route filtering 與 stale audit 清單。

**Non-Goals:**

- 不搬移、不重命名、不重新整理 Markdown 原檔。
- 不新增後端、IPC、storage、外部依賴或新 route。
- 不匯入浮點數轉換或數碼、文字碼與檢查碼 topic。
- 不新增 code block renderer；計算過程用現有 paragraph、orderedList、table 呈現。
- 不把 table highlight 做成任意 CSS 注入；只允許受控 token。

## Decisions

### Add controlled table style metadata to lessonArticle tables

Table block 應保持 headers 與 rows 的既有結構，新增可選 style metadata，例如 rowStyles、columnStyles、cellStyles。style value 使用受控 token，而不是任意 CSS 字串。建議最小 token 包含 `emphasisText` 與 `emphasisBackground`，apply 可將 `emphasisText` 映射為紅色文字，將 `emphasisBackground` 映射為可讀的淡色背景。

替代方案：直接在 cell 字串內放 HTML 或 class name。淘汰原因是內容資料會混入 presentation 細節，也會增加 XSS 與樣式失控風險。

### Keep content in professionalTopics factories rather than parsing Markdown at runtime

四個 topic 應比照既有 Pipeline、Bus、Cache 等正式內容，在 `professionalTopics.ts` 中建立 sourceFiles、terms、lesson sections 與 factory branch。Hazard 屬於 Pipeline 直接延伸題，排序應插在 Pipeline 後、匯流排前；USB 速度、進制轉換、補數轉換則維持原先從 Cache 後接續生成的相對順序。這保持 PWA 離線可用，也避免 runtime Markdown parser。

替代方案：啟動時讀取 Markdown 並轉換。淘汰原因是目前 app 是純前端靜態資料，加入 runtime parser 會增加 bundle 與資料來源不確定性。

### Preserve learner-facing Markdown content while normalizing obvious input errors

內容匯入以 Markdown 既有教材為主，但編排指示不得顯示在 app。已確認的筆誤 `(1011110010.151)2` 必須改成 `(1011110010.101)2`。Hazard 的 RAW/WAR/WAW 表格需修成 3 欄，名詞解釋需統一成英文(中文)：解釋格式。

替代方案：完全逐字搬入 Markdown。淘汰原因是會把編排指示與錯誤表格帶進 app，降低新手閱讀品質。

### Treat long conversion examples as collapsible lesson content

進制轉換的八題範例全部放入 app，並用長講義呈現完整計算過程。因 topic card 可收闔，長內容不會阻塞其他 topic 掃讀。

替代方案：只放簡短答案。淘汰原因是使用者明確要求長講義，且進制題最需要可追蹤計算過程。

## Implementation Contract

**Behavior:**

- /computer-principles topic list SHALL include the four filled topics, with `cp-hazard` placed immediately after `cp-pipeline` and immediately before `cp-bus`.
- `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion` SHALL remain after `cp-cache` in their existing relative order.
- Hazard topic title SHALL render as `管線危障(Hazard)`.
- USB topic SHALL show one USB speed table, and the most-tested speed rows SHALL render with red text through table style metadata inside that same table.
- USB topic SHALL explain Gen 1x1、Gen 2x1、Gen 2x2、Gen 3x2 notation before the 備註 section, using learner-facing wording that identifies per-lane speed and lane count.
- Base conversion topic SHALL include eight worked examples, including `(450.153)10` converted to binary and hexadecimal with fractional output taken to 8 digits, and `(1011110010.101)2` converted to hexadecimal.
- Complement conversion topic SHALL include sign-magnitude, 1's complement, 2's complement, and a notes section for 9's complement and 10's complement.
- Raw instruction phrases from Markdown, including `用table`, `ul/li做`, `紅色文字顏色`, and `你幫我設計顯示方式`, SHALL NOT appear in rendered app data.

**Interface / data shape:**

- `LessonArticleContentBlock` table variant SHALL continue to accept `headers: readonly string[]` and `rows: readonly (readonly string[])[]`.
- The table variant SHALL additionally accept optional highlight metadata for row, column, and cell targeting. The metadata SHALL support text color and background color tokens without accepting arbitrary CSS.
- Cell-level metadata SHALL override row-level and column-level metadata for the same visual property. Column-level metadata SHALL override row-level metadata when both target the same cell.
- Existing table blocks without highlight metadata SHALL render exactly as before.

**Failure modes:**

- Empty or missing highlight metadata SHALL be ignored silently.
- Unknown highlight tokens SHALL NOT apply inline style. The renderer SHALL either ignore them or fall back to the default table style without throwing.
- Existing table wrapping and newline rendering SHALL remain usable on mobile; cells containing newline characters continue using the existing pre-line behavior.

**Acceptance criteria:**

- Unit tests verify that the four topic ids have non-empty lessonArticle sections, correct sourceFiles, and learner-facing key strings.
- Unit tests verify that table highlight metadata renders deterministic CSS classes or styles for row, column, and cell targets, and that an unstyled table still renders normally.
- Route helper tests verify that /computer-principles now includes the four new titles, places `cp-pipeline`, `cp-hazard`, and `cp-bus` consecutively in that order, keeps the other three new topics after Cache in their existing relative order, and shows no placeholder fallback.
- Workflow and stale audit tests include the four topic ids as filled Computer Principles content.
- TypeScript typecheck and targeted Vitest suites pass.

**Scope boundaries:**

- In scope: subject topic type definitions, subject topic page table renderer, shared CSS used by subject topic tables, professional topic data, and tests tied to this data path.
- Out of scope: Markdown file rewrites, new routes, new storage, new dependencies, backend work, and unrelated lessonArticle block types.

## Risks / Trade-offs

- [Risk] Table highlight metadata can become too generic and invite arbitrary styling. → Mitigation: use a small token set and renderer-owned classes.
- [Risk] Long conversion examples can make the topic visually dense on mobile. → Mitigation: keep the topic card collapsible and place examples after compact formula/summary sections.
- [Risk] Content data in `professionalTopics.ts` grows large. → Mitigation: keep the change scoped to four topics and avoid introducing runtime parser complexity.
- [Risk] USB4 wording can imply every USB4 port is 40 Gbps. → Mitigation: write USB4 examples with exact generation names where speed differs.

## Migration Plan

No persisted user data migration is required. Existing localStorage progress uses topic ids; this change fills existing topic ids rather than replacing them. Rollback is to revert the table metadata type/rendering change and the four topic factory branches, after which route filtering will again hide empty skeleton topics.

## Open Questions

None. Q1-Q8 in `_private/propose.md` are resolved.
