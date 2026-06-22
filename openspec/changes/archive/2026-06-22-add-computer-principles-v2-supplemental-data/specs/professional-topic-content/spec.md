## MODIFIED Requirements

### Requirement: Computer Principles v2 topics preserve source traceability

Formal professional topic data SHALL include a `computerPrinciplesV2` collection containing exactly 15 route-visible topics. The collection SHALL include the approved non-catalog topics `cpv2-supplemental-practice` and `cpv2-supplemental-data` before the catalog-backed segment, and SHALL preserve the 13 catalog-backed topic ids and titles imported from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`. Each topic SHALL record the source file or source files used for display.

#### Scenario: V2 topic data has exact source files

- **WHEN** `professionalTopicsBySubject.computerPrinciplesV2` is loaded
- **THEN** it contains exactly 15 topics
- **AND** each topic has `sourceBatch` set to `computer-principles-v2-route`
- **AND** the first topic `sourceFiles` include `_private/discuss.txt`
- **AND** the second topic `sourceFiles` include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the catalog-backed topic segment preserves the approved source files from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`, including refreshed source ownership for the floating-point topic
- **AND** no topic uses `_private/MD/計算機概論/00_目錄.md` as its content source file

##### Example: leading source files

| Position | Topic id | Required source file |
| ----- | ----- | ----- |
| 1 | `cpv2-supplemental-practice` | `_private/discuss.txt` |
| 2 | `cpv2-supplemental-data` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 3 | `cpv2-architecture-computation-theory` | `_private/MD/計算機概論/01_架構與計算理論.md` |

#### Scenario: Source summary links display title and source chapter

- **WHEN** a Computer Principles v2 topic is loaded
- **THEN** each catalog-backed topic `title` matches the catalog `篇名` value
- **AND** the supplemental data topic `title` is `補充資料`
- **AND** each topic `sourceSummary` identifies the display title or source chapter used for that topic
- **AND** the lessonArticle `sourceSection` equals the topic `sourceSummary`

## ADDED Requirements

### Requirement: Computer Principles v2 supplemental data topic traces source

The `cpv2-supplemental-data` professional topic SHALL trace `_private/計概補充/計算機概論_重點講義_01.md` as its source. The topic SHALL remain lecture-only content and MUST NOT introduce quiz-only fields such as question text, answer keys, backend sync identifiers, or remote question identifiers.

#### Scenario: Supplemental data source is recorded on the supplemental data topic

- **WHEN** the `cpv2-supplemental-data` professional topic is loaded from formal app data
- **THEN** the topic `sourceFiles` include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the topic lessonArticle `sourceFiles` include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the topic `sourceSummary` identifies the content as Computer Principles v2 supplemental data material

#### Scenario: Supplemental data content remains lecture-only

- **WHEN** the supplemental data topic is serialized for inspection
- **THEN** the serialized topic contains the phrases `Machine Instruction Cycle`, `Amdahl's Law`, `Memory Hierarchy`, `CPU Scheduling`, `Deadlock`, and `Basic Data Structures`
- **AND** the serialized topic does not contain `questionText`
- **AND** the serialized topic does not contain `correctAnswer`
- **AND** the serialized topic does not contain `backendSyncId`
- **AND** the serialized topic does not contain `remoteQuestionId`
