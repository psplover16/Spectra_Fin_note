## ADDED Requirements

### Requirement: Networking v2 topics preserve exact source traceability

Formal professional topic data SHALL include a `networkingV2` collection containing exactly 12 source-backed topics imported from `_private/MD/網路概論v2/`. Each topic SHALL record its Markdown source file and the cleaned source subject used for display.

#### Scenario: V2 topic data has exact source files

- **WHEN** formal professional topic data is loaded for `networkingV2`
- **THEN** it contains exactly 12 topics
- **AND** each topic has `sourceBatch` set to `networking-v2-route`
- **AND** each topic `sourceFiles` includes exactly one content Markdown file from `_private/MD/網路概論v2/`
- **AND** no topic uses `_private/TMP/` draft paths or legacy `.txt` paths as source traceability
- **AND** each topic's `lessonArticle.sourceFiles` value equals the topic `sourceFiles` value

##### Example: required source files

| Position | Source file |
| ----- | ----- |
| 1 | `_private/MD/網路概論v2/網路概論_1_OSI七層與TCPIP.md` |
| 2 | `_private/MD/網路概論v2/網路概論_2_基礎概念.md` |
| 3 | `_private/MD/網路概論v2/網路概論_2下_資安_加密與TLS.md` |
| 4 | `_private/MD/網路概論v2/網路概論_3上_網路設備對應層級.md` |
| 5 | `_private/MD/網路概論v2/網路概論_3下_無線與上網接取設備.md` |
| 6 | `_private/MD/網路概論v2/網路概論_4上_IP與子網路計算.md` |
| 7 | `_private/MD/網路概論v2/網路概論_5_傳輸層.md` |
| 8 | `_private/MD/網路概論v2/網路概論_6_應用層與Port對照.md` |
| 9 | `_private/MD/網路概論v2/網路概論_7上_實體層.md` |
| 10 | `_private/MD/網路概論v2/網路概論_7下_資料鏈結層.md` |
| 11 | `_private/MD/網路概論v2/網路概論_8上_資安觀念與加密.md` |
| 12 | `_private/MD/網路概論v2/網路概論_8下_防禦設備與攻擊.md` |

#### Scenario: V2 topic metadata remains complete

- **WHEN** a Networking v2 topic is loaded
- **THEN** the topic has `subjectKey` set to `networkingV2`
- **AND** the topic has non-empty `title`, `summary`, `sourceSummary`, `examOutline`, `memoryPoints`, `understandingNotes`, `difficulty`, `topicType`, `terms`, and `blocks`
- **AND** the lessonArticle `sourceSection` equals the topic `sourceSummary`

### Requirement: Networking v2 topics keep source-authored teaching structure

Networking v2 topics SHALL preserve the source-authored teaching structure while converting it into supported formal content blocks. The conversion MUST NOT replace source-authored explanations with generated summaries or omit source tables and examples.

#### Scenario: Every v2 topic has learner-facing lessonArticle content

- **WHEN** each Networking v2 topic is loaded
- **THEN** the topic contains exactly one `lessonArticle` block
- **AND** the lessonArticle contains at least one non-empty section
- **AND** section headings and content follow the source Markdown topic structure
- **AND** tables in the source remain represented as table blocks when the existing schema can represent them

#### Scenario: Source-authored guidance remains visible

- **WHEN** the source Markdown contains learning guidance, warnings, comparison notes, worked examples, or review summaries
- **THEN** the corresponding formal topic keeps that content in the `lessonArticle.lead` or a relevant lesson section
- **AND** the content remains visible on the subject topic page

#### Scenario: Networking v2 topics remain lecture-only data

- **WHEN** formal `networkingV2` topics are inspected
- **THEN** the topics do not introduce quiz question fields
- **AND** the topics do not introduce four-option answer fields
- **AND** the topics do not introduce correct-answer fields
- **AND** the topics do not introduce option analysis fields
