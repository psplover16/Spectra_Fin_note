## ADDED Requirements

### Requirement: Computer Principles v2 topics preserve source traceability

Formal professional topic data SHALL include a `computerPrinciplesV2` collection containing exactly 13 source-backed topics imported from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`. Each topic SHALL record its Markdown source file and the catalog title used for display.

#### Scenario: V2 topic data has exact source files

- **WHEN** `professionalTopicsBySubject.computerPrinciplesV2` is loaded
- **THEN** it contains exactly 13 topics
- **AND** each topic has `sourceBatch` set to `computer-principles-v2-route`
- **AND** each topic `sourceFiles` includes exactly one content Markdown file from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`
- **AND** no topic uses `_private/MD/計算機概論/00_目錄.md` as its content source file

##### Example: required source files

| Position | Required source file |
| ----- | ----- |
| 1 | `_private/MD/計算機概論/01_架構與計算理論.md` |
| 2 | `_private/MD/計算機概論/02_機器指令與指令週期.md` |
| 3 | `_private/MD/計算機概論/03_Pipeline與Hazard.md` |
| 4 | `_private/MD/計算機概論/04_效能與RISC-CISC.md` |
| 5 | `_private/MD/計算機概論/05_匯流排與USB.md` |
| 6 | `_private/MD/計算機概論/06_記憶體-階層與分類.md` |
| 7 | `_private/MD/計算機概論/07_記憶體-暫存器與Cache.md` |
| 8 | `_private/MD/計算機概論/08_進制轉換.md` |
| 9 | `_private/MD/計算機概論/09_補數轉換.md` |
| 10 | `_private/MD/計算機概論/10_浮點數轉換.md` |
| 11 | `_private/MD/計算機概論/11_數碼與文字碼.md` |
| 12 | `_private/MD/計算機概論/12_檢查碼-Parity與CRC.md` |
| 13 | `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md` |

#### Scenario: Source summary links display title and source chapter

- **WHEN** a Computer Principles v2 topic is loaded
- **THEN** the topic `title` matches the catalog `篇名` value
- **AND** the topic `sourceSummary` identifies the catalog title or source chapter used for that topic
- **AND** the lessonArticle `sourceSection` equals the topic `sourceSummary`

### Requirement: Computer Principles v2 topics keep source-authored teaching structure

Computer Principles v2 topics SHALL preserve the source-authored teaching structure while converting it into supported formal content blocks. The conversion MUST NOT replace source-authored explanations with generated summaries.

#### Scenario: LessonArticle content is non-empty and source-shaped

- **WHEN** each Computer Principles v2 topic is loaded
- **THEN** it contains one `lessonArticle` block
- **AND** the lessonArticle has at least one non-empty section
- **AND** section headings and content follow the source Markdown topic structure
- **AND** calculation-heavy topics preserve worked examples and practice explanations from the source Markdown

#### Scenario: Catalog-only content is not learner-facing

- **WHEN** the formal `computerPrinciplesV2` topics are serialized
- **THEN** no topic id, title, or lessonArticle section represents `_private/MD/計算機概論/00_目錄.md` as learner-facing content
- **AND** the catalog file is used only to verify order and title mapping

#### Scenario: Question-bank constraints are not introduced

- **WHEN** Computer Principles v2 topics are loaded
- **THEN** the topics do not require multiple-choice question fields
- **AND** the topics do not require answer uniqueness metadata
- **AND** the topics do not require option distinguishability metadata
