## ADDED Requirements

### Requirement: Targeted manual section fill

The system SHALL fill only the existing `computerPrinciples` professional topic with id `cp-von-neumann-architecture` from user-provided section content. The system MUST NOT create or modify unrelated professional topics, routes, data model fields, or UI fields as part of this capability.

#### Scenario: Target topic receives lesson content

- **WHEN** professional topic data is loaded for `computerPrinciples`
- **THEN** the topic with id `cp-von-neumann-architecture` contains a non-empty `summary`, non-empty `terms`, a `lessonArticle` block with non-empty `lead`, and a non-empty `sections` array
- **THEN** professional topics with any other id remain outside the scope of this change

### Requirement: Source provenance is preserved

The system SHALL preserve the original topic source `_private/計算機概論.txt` and SHALL add `_private/MD/馮紐曼架構.md` as the manual整理 source for the Von Neumann topic. The same source list SHALL be represented on the professional topic metadata and on the `lessonArticle` block.

#### Scenario: Topic exposes both sources

- **WHEN** the `cp-von-neumann-architecture` topic data is inspected
- **THEN** its `sourceFiles` include `_private/計算機概論.txt` and `_private/MD/馮紐曼架構.md`
- **THEN** its `lessonArticle.sourceFiles` include `_private/計算機概論.txt` and `_private/MD/馮紐曼架構.md`

### Requirement: Lesson article source metadata is hidden from reader content

The system SHALL preserve `lessonArticle.sourceFiles` and `lessonArticle.sourceSection` as internal provenance data. The system MUST NOT render those source file paths or source section names as visible reader content inside lesson article UI.

#### Scenario: Reader sees lesson content without internal source paths

- **WHEN** the `cp-von-neumann-architecture` lesson article is rendered
- **THEN** visible lesson article text does not contain `_private/計算機概論.txt`
- **THEN** visible lesson article text does not contain `_private/MD/馮紐曼架構.md`
- **THEN** visible lesson article text does not contain `3a. 基本計概 / 馮紐曼架構`
- **THEN** visible lesson article text still contains section `sourceLabel` values and lesson content

### Requirement: Section markers use sourceLabel

The system SHALL represent learning markers such as `[必背]`, `[比較]`, `[理解]`, and `[考點]` using `LessonArticleSection.sourceLabel`. The system SHALL keep `LessonArticleSection.heading` free of bracketed marker prefixes and MUST NOT introduce a `subTitle` field.

#### Scenario: Marker and heading are separated

- **WHEN** the lesson article sections for `cp-von-neumann-architecture` are inspected
- **THEN** sections that carry learning markers store the marker in `sourceLabel`
- **THEN** section headings contain the readable title without a leading bracketed marker prefix
- **THEN** no section contains a `subTitle` property

### Requirement: User-provided content remains the content boundary

The system SHALL convert the user-provided Von Neumann section content into readable lesson article blocks without freely adding unsupported teaching claims. If a definition, example, or explanation is not supported by the provided content or by existing confirmed project context, the system MUST NOT invent it as final topic content.

#### Scenario: Unsupported material is not inserted

- **WHEN** a requested explanation is missing from the user-provided source content
- **THEN** the final `lessonArticle.sections` do not contain an invented explanation for that missing material
- **THEN** the implementation notes or task completion notes record the missing content as a pending user-supplied item before the change is marked complete

### Requirement: Beginner terminology is present

The system SHALL include Chinese and English terminology for the Von Neumann topic so a beginner can identify the key exam terms. The terminology SHALL include definitions or lesson text for Von Neumann Architecture, Stored-Program Concept, Bus, CPU, Memory Unit, Arithmetic Logic Unit, Control Unit, Harvard Architecture, Von Neumann Bottleneck, Cache, Prefetching, Bus Width, Memory Bandwidth, Pipelining, Parallel Processing, and Memory Hierarchy when those concepts appear in the final sections.

#### Scenario: Key terms have bilingual representation

- **WHEN** the `cp-von-neumann-architecture` topic is rendered or inspected
- **THEN** key terms that appear in the final lesson content use a Chinese and English pairing in `中文(English Term)` form or in the topic `terms` list
- **THEN** each key term appearing in the final lesson content has a beginner-readable definition or explanation in the lesson article

### Requirement: Definition enumerations use ordered list blocks

The system SHALL represent definition-style enumerations in the Von Neumann lesson as `orderedList` blocks when the items are a named set that benefits from numbered scanning. The `五大單元` section and the `改善方法` section MUST use `orderedList` blocks for their term-definition lists.

#### Scenario: Five units and improvement methods render as ordered lists

- **WHEN** the `cp-von-neumann-architecture` lesson article sections are inspected
- **THEN** the `五大單元` section contains an `orderedList` block for the five unit definitions
- **THEN** the `改善方法` section contains an `orderedList` block for the bottleneck improvement method definitions
