## MODIFIED Requirements

### Requirement: Computer Principles v2 topics preserve source traceability

Formal professional topic data SHALL include a `computerPrinciplesV2` collection containing exactly 20 route-visible topics. The collection SHALL include the approved non-catalog topic `cpv2-supplemental-practice` followed by six split supplemental topics before the catalog-backed segment, and SHALL preserve the 13 catalog-backed topic ids and titles imported from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`. Each topic SHALL record the source file or source files used for display.

#### Scenario: V2 topic data has exact source files

- **WHEN** `professionalTopicsBySubject.computerPrinciplesV2` is loaded
- **THEN** it contains exactly 20 topics
- **AND** each topic has `sourceBatch` set to `computer-principles-v2-route`
- **AND** the first topic `sourceFiles` include `_private/discuss.txt`
- **AND** the second, fourth, fifth, sixth, and seventh topics `sourceFiles` include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the third topic `sourceFiles` include `_private/計概補充/CPU排班演算法_考試速記版.md`
- **AND** the catalog-backed topic segment preserves the approved source files from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`, including refreshed source ownership for the floating-point topic
- **AND** no topic uses `_private/MD/計算機概論/00_目錄.md` as its content source file
- **AND** no topic has id `cpv2-supplemental-data`

##### Example: leading source files

| Position | Topic id | Required source file |
| ----- | ----- | ----- |
| 1 | `cpv2-supplemental-practice` | `_private/discuss.txt` |
| 2 | `cpv2-supplemental-amdahl-law` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 3 | `cpv2-supplemental-cpu-scheduling` | `_private/計概補充/CPU排班演算法_考試速記版.md` |
| 4 | `cpv2-supplemental-deadlock` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 5 | `cpv2-supplemental-paging-segmentation` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 6 | `cpv2-supplemental-oop-characteristics` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 7 | `cpv2-supplemental-basic-data-structures` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 8 | `cpv2-architecture-computation-theory` | `_private/MD/計算機概論/01_架構與計算理論.md` |

#### Scenario: Source summary links display title and source chapter

- **WHEN** a Computer Principles v2 topic is loaded
- **THEN** each catalog-backed topic `title` matches the catalog `篇名` value
- **AND** the split supplemental topic titles are `阿姆達爾定律`, `CPU 排班演算法`, `死結`, `分頁與分段記憶體管理`, `物件導向特性`, and `基礎資料結構`
- **AND** no topic title is `補充資料`
- **AND** each topic `sourceSummary` identifies the display title or source chapter used for that topic
- **AND** the lessonArticle `sourceSection` equals the topic `sourceSummary`

## ADDED Requirements

### Requirement: Computer Principles v2 split supplemental topics trace sources

Each split supplemental `computerPrinciplesV2` professional topic SHALL trace the approved source used to populate its learner-facing content. Split supplemental topics SHALL remain lecture-only content and MUST NOT introduce quiz-only fields such as question text, answer keys, backend sync identifiers, or remote question identifiers.

#### Scenario: Split supplemental source files are recorded on each topic

- **WHEN** the split supplemental topics are loaded from formal app data
- **THEN** `cpv2-supplemental-amdahl-law` traces `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** `cpv2-supplemental-cpu-scheduling` traces `_private/計概補充/CPU排班演算法_考試速記版.md`
- **AND** `cpv2-supplemental-deadlock` traces `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** `cpv2-supplemental-paging-segmentation` traces `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** `cpv2-supplemental-oop-characteristics` traces `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** `cpv2-supplemental-basic-data-structures` traces `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** every split supplemental topic has matching top-level `sourceFiles` and lessonArticle `sourceFiles`

#### Scenario: Split supplemental content remains lecture-only

- **WHEN** the split supplemental topics are serialized for inspection
- **THEN** the serialized topics contain the phrases `Amdahl's Law`, `CPU Scheduling`, `Deadlock`, `Paging`, `Segmentation`, `OOP Characteristics`, and `Basic Data Structures`
- **AND** the serialized topics do not contain `questionText`, `correctAnswer`, `backendSyncId`, or `remoteQuestionId`
- **AND** the serialized topics do not contain `Machine Instruction Cycle`, `Five Functional Units`, `CPU Components`, `Memory Hierarchy`, or `PC（程式計數器）`

#### Scenario: CPU scheduling source preserves exam review markers

- **WHEN** `cpv2-supplemental-cpu-scheduling` is serialized for inspection
- **THEN** the serialized topic contains `FCFS`, `SJF`, `SRTF`, `Priority`, `RR`, `MLQ`, and `MLFQ`
- **AND** the serialized topic contains `Round Robin 中,時間量子設定非常大時,行為趨近於?`
- **AND** the serialized topic contains `答案與解析`
- **AND** the serialized topic contains the answer marker `20 | **B**`

## REMOVED Requirements

### Requirement: Computer Principles v2 supplemental data topic traces source

**Reason**: The single `cpv2-supplemental-data` topic is replaced by six route-visible split supplemental topics so each exam-review area can be completed, bookmarked, and expanded independently.

**Migration**: Use `cpv2-supplemental-amdahl-law`, `cpv2-supplemental-cpu-scheduling`, `cpv2-supplemental-deadlock`, `cpv2-supplemental-paging-segmentation`, `cpv2-supplemental-oop-characteristics`, and `cpv2-supplemental-basic-data-structures` as the source-traceable supplemental topics. Existing local progress or bookmark state for `cpv2-supplemental-data` is not migrated.

#### Scenario: Legacy supplemental data topic is absent

- **WHEN** `professionalTopicsBySubject.computerPrinciplesV2` is loaded
- **THEN** no topic has id `cpv2-supplemental-data`
- **AND** no topic has title `補充資料`
- **AND** the six split supplemental topic ids are present instead
