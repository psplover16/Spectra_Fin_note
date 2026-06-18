## ADDED Requirements

### Requirement: Imported Markdown topics carry exact source traceability

Each imported Database, Programming, and System Design professional topic SHALL record exact Markdown source traceability. For each imported topic, the top-level `sourceFiles` field and every `lessonArticle.sourceFiles` field SHALL contain the matching Markdown source path for that topic. These imported topics SHALL NOT use `_private/TMP/` draft paths or legacy `.txt` source paths as their source traceability.

#### Scenario: Imported topic sources are exact Markdown files

- **WHEN** formal professional topic data is loaded
- **THEN** every imported Database topic contains exactly one source path under `_private/MD/資料庫/`
- **AND** every imported Programming topic contains exactly one source path under `_private/MD/程式設計/`
- **AND** every imported System Design topic contains exactly one source path under `_private/MD/系統分析與設計/`
- **AND** no imported topic contains a `_private/TMP/` source path
- **AND** no imported topic contains a legacy `.txt` source path

##### Example: imported source inventory

| Subject key | Required source file |
| ----- | ----- |
| `database` | `_private/MD/資料庫/資料庫_1_基礎概念與架構.md` |
| `database` | `_private/MD/資料庫/資料庫_2_鍵與ERD.md` |
| `database` | `_private/MD/資料庫/資料庫_3_正規化.md` |
| `database` | `_private/MD/資料庫/資料庫_4_SQL分類與CRUD.md` |
| `database` | `_private/MD/資料庫/資料庫_5_SQL查詢進階.md` |
| `database` | `_private/MD/資料庫/資料庫_6_交易ACID與NoSQL.md` |
| `programming` | `_private/MD/程式設計/程式設計_1_語言執行方式與程式基礎.md` |
| `programming` | `_private/MD/程式設計/程式設計_2_函式與參數傳遞.md` |
| `programming` | `_private/MD/程式設計/程式設計_3_陣列字串與例外處理.md` |
| `programming` | `_private/MD/程式設計/程式設計_4_指標.md` |
| `programming` | `_private/MD/程式設計/程式設計_5_物件導向OOP.md` |
| `programming` | `_private/MD/程式設計/程式設計_6_遞迴.md` |
| `programming` | `_private/MD/程式設計/程式設計_7_各語言特性.md` |
| `systemDesign` | `_private/MD/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md` |
| `systemDesign` | `_private/MD/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md` |
| `systemDesign` | `_private/MD/系統分析與設計/系統分析與設計_3_OO關係與UML.md` |
| `systemDesign` | `_private/MD/系統分析與設計/系統分析與設計_4_測試.md` |
| `systemDesign` | `_private/MD/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md` |

#### Scenario: Source batch identifies the import change

- **WHEN** an imported Database, Programming, or System Design topic is inspected
- **THEN** its `sourceBatch` identifies the `fill-database-programming-system-design-content` import batch
- **AND** its `sourceSummary` describes the Markdown section or topic basis used for that topic

### Requirement: Imported Markdown topics use lessonArticle display shape

Each imported Database, Programming, and System Design topic SHALL expose learner-facing content through the existing `lessonArticle` block shape. The imported content SHALL preserve source learning guidance such as reminders, understanding notes, and learning-method notes when present. The imported content SHALL normalize Markdown headings, lists, tables, and code examples into supported lessonArticle blocks.

#### Scenario: Imported topics have visible lessonArticle content

- **WHEN** formal professional topic data is loaded
- **THEN** every imported Database topic contains at least one `lessonArticle` block
- **AND** every imported Programming topic contains at least one `lessonArticle` block
- **AND** every imported System Design topic contains at least one `lessonArticle` block
- **AND** every imported `lessonArticle` has at least one section with visible learner-facing content

#### Scenario: Learner-facing guidance is preserved

- **WHEN** an imported Markdown source contains a reminder, understanding note, or learning-method note for the learner
- **THEN** the corresponding formal topic keeps that guidance in the `lessonArticle.lead` or a relevant lesson section
- **AND** the guidance remains visible on the subject topic page

#### Scenario: Renderer instructions are not learner-facing text

- **WHEN** imported topics are serialized from formal professional data
- **THEN** the serialized learner-facing content does not contain raw renderer instructions such as `用table`, `ul/li做`, `紅色文字顏色`, or `你幫我設計顯示方式`
- **AND** any equivalent display intent is represented through supported lessonArticle table, list, or paragraph blocks

### Requirement: Imported Markdown topics keep professional topic metadata complete

Each imported Database, Programming, and System Design topic SHALL remain a complete `ProfessionalSubjectTopic`. Each imported topic SHALL include `subjectKey`, `title`, `summary`, `examOutline`, `memoryPoints`, `understandingNotes`, `difficulty`, `topicType`, `terms`, `sourceBatch`, `sourceFiles`, `sourceSummary`, and `blocks`.

#### Scenario: Imported metadata supports route rendering and progress

- **WHEN** the subject topic page receives imported professional topic data
- **THEN** each imported Database topic has `subjectKey` set to `database`
- **AND** each imported Programming topic has `subjectKey` set to `programming`
- **AND** each imported System Design topic has `subjectKey` set to `systemDesign`
- **AND** each imported topic has non-empty `title`, `summary`, `examOutline`, `memoryPoints`, and `understandingNotes`

#### Scenario: No quiz data is introduced by the import

- **WHEN** imported professional topic data is inspected
- **THEN** the imported topics do not introduce quiz question fields
- **AND** the import does not introduce answer option fields
- **AND** the import does not introduce backend synchronization fields

##### Example: topic data remains lecture-only

| Imported topic field group | Expected presence |
| ----- | ----- |
| `lessonArticle` content blocks | Present |
| `sourceFiles` and `sourceSummary` | Present |
| `questionText`, `options`, `correctAnswer`, `optionExplanations` | Absent |
| `backendSyncId`, `remoteQuestionId` | Absent |
