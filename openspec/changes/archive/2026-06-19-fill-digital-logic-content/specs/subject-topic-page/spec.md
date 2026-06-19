## ADDED Requirements

### Requirement: Lesson article tables reveal configured columns

The subject topic page SHALL support lessonArticle table blocks with configured revealable columns. A revealable column's header SHALL remain visible, its body cell values SHALL be hidden by default, and activating the header control SHALL toggle the visibility of that column's body cell values independently from other revealable columns. Tables without revealable columns MUST render with the existing static table behavior.

#### Scenario: Configured reveal columns start hidden

- **WHEN** a lessonArticle table is configured with revealable columns for `AND`, `OR`, `NAND`, `NOR`, `XOR`, and `XNOR`
- **THEN** the table renders its `A` and `B` input values visibly
- **AND** the body cell values under `AND`, `OR`, `NAND`, `NOR`, `XOR`, and `XNOR` are not visible
- **AND** each revealable column header is rendered as an activatable control with an accessible expanded state

##### Example: hidden two-input truth table

| Header | Initial body cell visibility |
| ----- | ----- |
| `A` | visible |
| `B` | visible |
| `AND` | hidden |
| `OR` | hidden |
| `NAND` | hidden |
| `NOR` | hidden |
| `XOR` | hidden |
| `XNOR` | hidden |

#### Scenario: Header activation reveals only one column

- **WHEN** the user activates the `AND` header in a revealable truth table
- **THEN** the body cell values under `AND` become visible
- **AND** the body cell values under `OR`, `NAND`, `NOR`, `XOR`, and `XNOR` remain hidden

#### Scenario: Header activation toggles an already revealed column

- **WHEN** the user activates a revealable column header whose body cell values are visible
- **THEN** that column's body cell values become hidden again
- **AND** the visibility state of other revealable columns is unchanged

#### Scenario: Static tables remain unchanged

- **WHEN** a lessonArticle table has no revealable column configuration
- **THEN** all table headers and body cell values render with the existing static table behavior
- **AND** no table header is converted into a reveal toggle control

#### Scenario: Invalid reveal configuration is ignored safely

- **WHEN** a lessonArticle table includes a revealable column index that is outside the table's header range
- **THEN** the out-of-range configuration is ignored
- **AND** the table still renders without throwing an error
