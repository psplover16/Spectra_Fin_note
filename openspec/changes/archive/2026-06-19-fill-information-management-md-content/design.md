## Context

`/information-management` route 已存在，且和 `networking` 一樣透過 `SubjectTopicPage` 讀取 `professionalTopicsBySubject`。目前資訊管理正式資料主要是舊 skeleton，使用者已整理完成的 7 個 Markdown 位於 `_private/MD/資訊管理/`，需要轉成既有 `lessonArticle` typed blocks，讓 route 顯示可學習內容。

## Goals / Non-Goals

**Goals:**

- 將 7 個資訊管理 Markdown 依檔名前綴自然順序轉成正式 `ProfessionalSubjectTopic`。
- 每個新 topic 使用 Markdown H1 作為 title，`sourceFiles` 僅包含對應 exact Markdown 路徑。
- 新 topics 排在既有 `informationManagement` skeleton topics 前方；舊 skeleton 保留在 formal data 後方。
- 對個資法、GDPR、第二方數據例子等已知風險做最小幅度修正，並在 review note 記錄修正原因。
- 更新測試，驗證 route-visible topics 與 formal data suffix 行為。

**Non-Goals:**

- 不新增 route、UI component、storage、IPC flow、raw Markdown renderer 或外部依賴。
- 不拆分 `資訊管理_1_數位轉型與ESG.md`。
- 不補內容到舊 `_private/資訊管理.txt` skeleton topics。
- 不新增考古題題庫、測驗流程或共同科目內容。

## Decisions

### 沿用 lessonArticle typed blocks

資訊管理內容 SHALL 轉成現有 `lessonArticle` blocks，而不是引入 raw Markdown renderer。這讓 `SubjectTopicPage`、離線快取與既有專業科目顯示邏輯保持一致，也避免新增渲染管線。

替代方案：直接渲染 Markdown。淘汰原因：會新增資料格式與 renderer 行為，且與 networking/database/programming 既有 typed content contract 不一致。

### 使用 im-md topic id 前綴

新 topics 使用 `im-md-` 前綴，避免與既有 `im-00-*` 到 `im-06-*` skeleton id 碰撞。建議 id 順序如下：

1. `im-md-digital-transformation-esg`
2. `im-md-traditional-development-models`
3. `im-md-agile-development`
4. `im-md-information-ethics`
5. `im-md-data-classification-privacy-paradox`
6. `im-md-personal-data-protection-act`
7. `im-md-gdpr`

替代方案：沿用既有 `im-02-*` 等 skeleton id。淘汰原因：會覆蓋舊 skeleton 的來源語意，也不利於保留舊資料作為 suffix。

### 只記錄 exact Markdown sourceFiles

新 imported topics 的 `sourceFiles` SHALL 只包含 `_private/MD/資訊管理/<檔名>.md`。舊 `_private/資訊管理.txt` skeleton topics 保留在後方，但不混入新 imported topics 的 source traceability。

替代方案：同時列 Markdown 與 `_private/資訊管理.txt`。淘汰原因：本次 authoritative source 是使用者指定的 Markdown；混列舊 txt 會模糊來源責任。

### 最小修正與 review note

轉換時保留原 Markdown 的章節、表格、清單與學習語氣；只修正已知會誤導學習者的內容。必修正項包含：第二方數據例子改為合作夥伴分享的會員/客戶行為資料；個資法與 GDPR 內容在 apply 當天重新查核時效；「內容經網路查證」類 meta 句不進 learner-facing article，但保留具體 caveat。

替代方案：全面重寫成標準化教材。淘汰原因：使用者明確要求最小幅度修正並保留既有編排。

## Implementation Contract

Behavior:

- 使用者進入 `/information-management` 時，前 7 個可見 topic 為 7 個 Markdown-backed topics，順序與檔名前綴一致。
- 每個 topic 展開後有一個 `lessonArticle` block，且 sections 非空，可呈現原 Markdown 的 H2/H3、段落、blockquote、清單與表格內容。
- 既有 skeleton topics 保留於 `professionalTopicsBySubject.informationManagement` 的 7 個 imported topics 後方；若 skeleton 仍為空內容，`getSubjectTopics('informationManagement')` 可將它們排除在 route-visible list 之外。

Interface / data shape:

- `professionalTopicsBySubject.informationManagement` SHALL be composed as imported Markdown topics followed by `getProfessionalTopicSkeletons('informationManagement')`.
- Imported topics SHALL be `ProfessionalSubjectTopic` values with one `lessonArticle` block.
- `sourceFiles` for each imported topic SHALL contain exactly one Markdown path under `_private/MD/資訊管理/`.
- `sourceSummary` and the lessonArticle `sourceSection` SHALL match the Markdown H1.
- No new route key, `SubjectKey`, storage field, router entry, IPC command, dependency, or UI component is introduced.

Failure modes:

- Missing source file during apply is a blocking failure; do not silently skip a topic.
- If legal/current-affairs verification contradicts the Markdown wording, apply the smallest text correction and record it in `_private/TMP/information-management-md-content-review.md`.
- If a Markdown structure cannot map one-to-one to the existing blocks, preserve relative reading order and record the normalization in the review note.

Acceptance criteria:

- `tests/unit/informationManagementRouteWorkflow.spec.ts` verifies the 7 imported topics, exact source paths, non-empty lessonArticle sections, and old skeleton suffix behavior.
- Targeted professional topic tests pass for `professionalTopicsBySubject.informationManagement` and `getSubjectTopics('informationManagement')`.
- `npm run typecheck`, targeted Vitest commands, and `spectra validate --strict` complete successfully, or unrelated pre-existing failures are documented in apply summary.

Scope boundaries:

- In scope: `src/modules/subjectTopics/data/professionalTopics.ts`, `tests/unit/informationManagementRouteWorkflow.spec.ts`, and `_private/TMP/information-management-md-content-review.md`.
- Out of scope: routing, app shell navigation, storage schemas, markdown renderer components, unrelated professional subjects, and private restricted folders.

## Risks / Trade-offs

- [Risk] Large static content increases `professionalTopics.ts` size. → Mitigation: keep content in existing typed-data pattern and avoid new dependencies; verify typecheck/build behavior.
- [Risk] Legal text can become stale. → Mitigation: re-check official sources during apply and record dated corrections in the review note.
- [Risk] Imported topics overlap with old skeleton topics. → Mitigation: imported topics appear first and old skeletons remain as suffix without new content in this change.
- [Risk] Tests currently protect old empty skeleton behavior. → Mitigation: update tests to protect the new MD-backed behavior and formal suffix contract.

## Migration Plan

No runtime migration is required. This is static topic data. Rollback is reverting the imported topics, the test update, and the review note within this change.

## Open Questions

None. The user confirmed all discussion recommendations.
