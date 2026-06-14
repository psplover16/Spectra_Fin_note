## ADDED Requirements

### Requirement: Lesson article tables support controlled highlight metadata

Subject topic lessonArticle table blocks SHALL support controlled highlight metadata for rows, columns, and individual cells. Highlight metadata SHALL allow text emphasis and background emphasis through renderer-owned tokens, and SHALL NOT require arbitrary CSS strings in topic content.

#### Scenario: Styled table metadata renders visible emphasis

- **WHEN** a lessonArticle table provides row, column, or cell highlight metadata
- **THEN** the subject topic page renders the targeted table cells with the configured emphasis token
- **AND** a text emphasis token renders visibly different text color
- **AND** a background emphasis token renders visibly different cell background

##### Example: USB priority rows

| Table target | Metadata intent | Expected rendering |
| ----- | ----- | ----- |
| Row for `USB 2.0 = 480 Mbps` | text emphasis | The row text uses the emphasis text style |
| Row for `USB 3.0 = 5 Gbps` | text emphasis | The row text uses the emphasis text style |
| Cell containing `80 Gbps` | background emphasis | The cell background uses the emphasis background style |

#### Scenario: Unstyled tables keep existing rendering

- **WHEN** a lessonArticle table has headers and rows but no highlight metadata
- **THEN** the table renders with the existing default table classes
- **AND** no emphasis class is added to its cells
- **AND** newline characters inside table cell text continue to render as line breaks

##### Example: Plain formula table

| Input table | Expected rendering |
| ----- | ----- |
| Headers `公式`, `說明`; row `2^n`, `n bits 可產生的位址數` | Default lesson table classes only |
| Cell text `第一行\n第二行` | Both lines remain visible in the same cell |

#### Scenario: Cell metadata takes precedence over row and column metadata

- **WHEN** row metadata, column metadata, and cell metadata target the same table cell
- **THEN** cell metadata takes precedence for the same visual property
- **AND** column metadata takes precedence over row metadata for the same visual property when cell metadata is absent

##### Example: Overlapping highlight targets

| Target | Metadata | Expected result |
| ----- | ----- | ----- |
| Row 2 | `text: emphasisText` | Row 2 cells use emphasis text by default |
| Column 1 | `text: defaultText` | Row 2 column 1 uses the column text token |
| Cell row 2 column 1 | `text: emphasisText`, `background: emphasisBackground` | The cell uses its own text and background tokens |

#### Scenario: Unknown highlight tokens are ignored safely

- **WHEN** a lessonArticle table contains an unknown highlight token
- **THEN** the subject topic page renders the table without throwing
- **AND** the affected cell falls back to default table styling for that unknown token

##### Example: Unsupported token fallback

| Metadata input | Expected result |
| ----- | ----- |
| Row 1 text token `dangerRainbow` | No inline style or unknown class is applied |
| Cell row 1 column 2 background token `neonBackground` | The cell keeps the default table background |
