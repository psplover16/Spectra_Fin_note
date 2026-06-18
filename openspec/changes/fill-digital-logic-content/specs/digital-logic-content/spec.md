## ADDED Requirements

### Requirement: Computer Principles includes 3b digital logic lessons

The system SHALL display the five approved 3b digital logic topics on the `/computer-principles` route using the existing `computerPrinciples` professional topic data.

#### Scenario: Digital logic topics are route-visible

- **WHEN** the `computerPrinciples` professional topics are loaded
- **THEN** the route-visible topic list includes `cp-digital-logic-basics`, `cp-sop-pos`, `cp-karnaugh-map`, `cp-universal-gates`, and `cp-combinational-sequential-circuits`
- **AND** each listed topic contains a non-empty `summary`, non-empty `terms`, and a `lessonArticle` block with non-empty `sections`

#### Scenario: Digital logic topics keep the existing order

- **WHEN** the `/computer-principles` topic list is rendered
- **THEN** `cp-digital-logic-basics` appears after `cp-codes-and-check-codes`
- **AND** `cp-sop-pos`, `cp-karnaugh-map`, `cp-universal-gates`, and `cp-combinational-sequential-circuits` appear in that order before `cp-os-basics`

##### Example: expected topic sequence

| Position after `cp-codes-and-check-codes` | Topic id |
| ----- | ----- |
| 1 | `cp-digital-logic-basics` |
| 2 | `cp-sop-pos` |
| 3 | `cp-karnaugh-map` |
| 4 | `cp-universal-gates` |
| 5 | `cp-combinational-sequential-circuits` |

### Requirement: Digital logic lessons preserve approved source scope

Each digital logic topic SHALL retain source traceability to `_private/計算機概論.txt` and its matching Markdown file under `_private/MD/計概/3b數位邏輯/`. The rendered lesson content MUST NOT display authoring instructions from the Markdown source.

#### Scenario: Source files identify the Markdown basis

- **WHEN** a digital logic topic is loaded
- **THEN** its `sourceFiles` includes `_private/計算機概論.txt`
- **AND** its `sourceFiles` includes the matching Markdown path for that topic

#### Scenario: Authoring instructions are not visible as lesson content

- **WHEN** the digital logic topics are serialized for rendering
- **THEN** the serialized content does not contain `用table做`
- **AND** the serialized content does not contain `內部值都是空的`
- **AND** the serialized content does not contain `點選標題，才會讓值跑出來`

### Requirement: Digital logic lessons follow confirmed content decisions

The digital logic lesson data SHALL follow the confirmed discussion decisions for titles, scope, corrections, and exam-focused additions.

#### Scenario: Topic titles use bilingual route labels

- **WHEN** the five digital logic topics are loaded
- **THEN** their titles are `基本邏輯(Digital Logic Basics)`, `SOP 與 POS(SOP and POS)`, `卡諾圖化簡(Karnaugh Map Simplification)`, `萬用閘(Universal Gates)`, and `組合與循序電路(Combinational and Sequential Circuits)`

#### Scenario: Fifth topic stays limited to the provided short note

- **WHEN** `cp-combinational-sequential-circuits` is loaded
- **THEN** its lesson content explains the distinction between combinational circuits and sequential circuits
- **AND** its lesson content does not introduce half-adder formulas, full-adder formulas, encoder formulas, decoder formulas, multiplexer selector formulas, or demultiplexer selector formulas

#### Scenario: Confirmed corrections are reflected in rendered content

- **WHEN** the digital logic lesson content is serialized for rendering
- **THEN** XOR wording uses `B'` or `NOT B` instead of `-B`
- **AND** De Morgan terminology is rendered as `德摩根定律`
- **AND** Karnaugh map column descriptions use `欄` instead of treating `BC=00` and `BC=01` as rows
- **AND** the SOP/POS lesson states that a question asking for a standard SOP or standard POS MUST use the requested standard form
- **AND** the NOR implementation table includes XOR with a common 5-NOR implementation count
