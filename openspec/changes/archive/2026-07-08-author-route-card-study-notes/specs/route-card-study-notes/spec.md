## ADDED Requirements

### Requirement: Complete per-card coverage across the seven target routes

The system SHALL produce exactly one study-note Markdown file for every card that renders on each of the seven target routes: networking-v2, operating-systems, database-v2, information-management, programming, algorithms, and system-design. For six routes the authoritative card set and ordering SHALL be the output of getSubjectTopics(subjectKey), which filters out empty skeletons. For database-v2 the authoritative card set SHALL be databaseV2Pages. No rendered card SHALL be skipped and no extra file SHALL be produced.

#### Scenario: Every rendered card yields exactly one file

- **WHEN** study notes are generated for a target route
- **THEN** the number of Markdown files for that route equals the number of cards returned by that route's card source, and the files follow the same top-to-bottom order as the cards

##### Example: expected file count per route

| Route (meta.title) | Card source | Expected files |
| --- | --- | --- |
| networking-v2 (網路概論(v2)) | networkingV2Topics | 12 |
| operating-systems (作業系統) | getSubjectTopics operatingSystems | 10 |
| database-v2 (資料庫2) | databaseV2Pages | 13 |
| information-management (資管) | getSubjectTopics informationManagement | 7 |
| programming (程式) | getSubjectTopics programming | 7 |
| algorithms (演算法) | getSubjectTopics algorithms | 17 |
| system-design (系統設計) | getSubjectTopics systemDesign | 5 |

Total expected files: 71.

### Requirement: Output location and filename convention

All generated files SHALL be written under the _private/20260701/ directory. Each filename SHALL follow the pattern route-meta-title, underscore, two-digit sequence, underscore, card-title, then the .md extension. The sequence SHALL be the card's 1-based on-screen position, zero-padded to two digits. Characters that are illegal in Windows filenames (slash, backslash, colon, asterisk, question mark, double quote, less-than, greater-than, pipe) SHALL be replaced; the ASCII slash SHALL be replaced with the full-width slash ／.

#### Scenario: Filename derived from route title, order, and card title

- **WHEN** a file is generated for a card
- **THEN** the filename encodes the route meta.title, the zero-padded order, and the sanitized card title, with all Windows-illegal characters replaced

##### Example: filename sanitization

| Route meta.title | Seq | Card title | Resulting filename |
| --- | --- | --- | --- |
| 網路概論(v2) | 1 | OSI 七層 + TCP/IP ★ | 網路概論(v2)_01_OSI 七層 + TCP／IP ★.md |
| 資料庫2 | 1 | ANSI-SPARC三層架構 | 資料庫2_01_ANSI-SPARC三層架構.md |

### Requirement: Problem-driven study-note structure

Each study note SHALL use the confirmed problem-first skeleton, with sections appearing in this order: a top-level H1 heading equal to the card title, then 開場題目, 先想想, 觀念拆解 (including analogies and/or tables), 回到題目：解答, 重點整理, 常見陷阱, and 練習題. The 練習題 section SHALL present each answer inside a collapsible details block so answers stay hidden until expanded.

#### Scenario: Note contains all required sections in order

- **WHEN** any generated study note is opened
- **THEN** it starts with an H1 equal to the card title, contains all seven required section headings in the specified order, and every practice question exposes its answer inside a collapsible details block

### Requirement: Content rewritten from existing card content

Study-note teaching content SHALL be rewritten from each card's existing content and SHALL NOT be invented independently of it. For the six non-database-v2 routes the source SHALL be the card's structured lessonArticle content. For database-v2 the source SHALL be the linked HTML page under public/database-v2/ that corresponds to the card. The rewrite SHALL preserve the source's factual claims while reshaping them into the problem-driven, beginner-oriented format.

#### Scenario: database-v2 draws from its HTML source

- **WHEN** a study note is generated for a database-v2 card
- **THEN** its teaching content is derived from that card's corresponding public/database-v2 HTML file rather than from an empty inline card body

#### Scenario: other routes draw from inline card content

- **WHEN** a study note is generated for a card on any non-database-v2 target route
- **THEN** its teaching content is derived from that card's lessonArticle blocks

### Requirement: Language and encoding

Every generated file SHALL be written in Traditional Chinese and saved as UTF-8 without a byte-order mark. Visible text SHALL NOT contain mojibake, question-mark replacement characters, or BOM contamination.

#### Scenario: File is valid UTF-8 Traditional Chinese without BOM

- **WHEN** a generated file is inspected
- **THEN** its bytes decode as UTF-8, it carries no BOM, and its prose is Traditional Chinese with no garbled characters

### Requirement: No changes to application code, specs, or tests

Generation SHALL only create files under the _private/20260701/ directory. It SHALL NOT modify application source, routes, card data, existing specs under openspec/specs/, tests, or build configuration. It SHALL NOT read or write restricted paths: the _private/_private_notes/筆記.txt file, and any folder named done located under _private/_private_notes or under _private/_private_fileAssets, including all of their nested contents.

#### Scenario: Only study-note files are added outside the change workspace

- **WHEN** the change is implemented
- **THEN** the only added or modified working-tree files outside openspec/ are Markdown files under _private/20260701/, and no restricted file or folder is read or written
