## MODIFIED Requirements

### Requirement: Computer Principles v2 topics preserve source traceability

Formal professional topic data SHALL include a `computerPrinciplesV2` collection containing exactly 21 route-visible topics. The collection SHALL include the approved non-catalog topic `cpv2-supplemental-practice`, the inline supplemental topic `cpv2-supplemental-amdahl-law`, six HTML-linked supplemental topics, and the 13 catalog-backed topic ids and titles imported from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`. Each topic SHALL record the source file or source files used for display. HTML-linked supplemental topics SHALL also record the linked HTML filename through `htmlPage.sourceFilename`.

#### Scenario: V2 topic data has exact source files

- **WHEN** `professionalTopicsBySubject.computerPrinciplesV2` is loaded
- **THEN** it contains exactly 21 topics
- **AND** each topic has `sourceBatch` set to `computer-principles-v2-route`
- **AND** the first topic `sourceFiles` include `_private/discuss.txt`
- **AND** the second topic `sourceFiles` include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the third topic `sourceFiles` include `_private/計概補充/CPU排班演算法_國考完整講義.md`
- **AND** the fourth topic `sourceFiles` include `_private/計概補充/死結_考試精簡版.md`
- **AND** the fifth topic `sourceFiles` include `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md`
- **AND** the sixth topic `sourceFiles` include `_private/計概補充/物件導向特性_國考完整講義.md`
- **AND** the seventh topic `sourceFiles` include `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md`
- **AND** the eighth topic `sourceFiles` include `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md`
- **AND** the catalog-backed topic segment preserves the approved source files from `_private/MD/計算機概論/01_架構與計算理論.md` through `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md`, including refreshed source ownership for the floating-point topic
- **AND** no topic uses `_private/MD/計算機概論/00_目錄.md` as its content source file
- **AND** no topic has id `cpv2-supplemental-data`
- **AND** no topic has id `cpv2-supplemental-basic-data-structures`

##### Example: leading source files

| Position | Topic id | Required source file | HTML filename |
| ----- | ----- | ----- | ----- |
| 1 | `cpv2-supplemental-practice` | `_private/discuss.txt` | none |
| 2 | `cpv2-supplemental-amdahl-law` | `_private/計概補充/計算機概論_重點講義_01.md` | none |
| 3 | `cpv2-supplemental-cpu-scheduling` | `_private/計概補充/CPU排班演算法_國考完整講義.md` | `CPU排班演算法_國考完整講義.html` |
| 4 | `cpv2-supplemental-deadlock` | `_private/計概補充/死結_考試精簡版.md` | `死結_考試精簡版.html` |
| 5 | `cpv2-supplemental-paging-segmentation` | `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` | `分頁與分段記憶體管理_題目帶動教學完整版.html` |
| 6 | `cpv2-supplemental-oop-characteristics` | `_private/計概補充/物件導向特性_國考完整講義.md` | `物件導向特性_國考完整講義.html` |
| 7 | `cpv2-supplemental-complexity-linear-structures` | `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` | `基礎資料結構(上)_複雜度與線性結構.html` |
| 8 | `cpv2-supplemental-trees-hash-tables` | `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` | `基礎資料結構(下)_樹與雜湊表.html` |
| 9 | `cpv2-architecture-computation-theory` | `_private/MD/計算機概論/01_架構與計算理論.md` | none |

#### Scenario: Source summary links display title and source basis

- **WHEN** a Computer Principles v2 topic is loaded
- **THEN** each catalog-backed topic `title` matches the catalog `篇名` value
- **AND** the approved supplemental topic titles are `阿姆達爾定律`, `CPU 排班演算法`, `死結`, `分頁與分段記憶體管理`, `物件導向特性`, `複雜度與線性結構`, and `樹與雜湊表`
- **AND** no topic title is `補充資料`
- **AND** no topic title is `基礎資料結構`
- **AND** each topic `sourceSummary` identifies the display title or source chapter used for that topic
- **AND** inline lessonArticle topics keep lessonArticle `sourceSection` equal to the topic `sourceSummary`
- **AND** HTML-linked supplemental topics keep `htmlPage.sourceFilename` equal to their linked public HTML filename

### Requirement: Computer Principles v2 split supplemental topics trace sources

Each supplemental `computerPrinciplesV2` professional topic SHALL trace the approved source used to populate its learner-facing content. Inline supplemental topics SHALL use `lessonArticle` source traceability. HTML-linked supplemental topics SHALL use top-level `sourceFiles` for the approved Markdown source and `htmlPage` for the generated public HTML lesson. Supplemental topics SHALL remain lecture-only content and MUST NOT introduce quiz-only fields such as question text, answer keys, backend sync identifiers, or remote question identifiers.

#### Scenario: Supplemental source files are recorded on each topic

- **WHEN** the supplemental topics are loaded from formal app data
- **THEN** `cpv2-supplemental-amdahl-law` traces `_private/計概補充/計算機概論_重點講義_01.md` and has no `htmlPage`
- **AND** `cpv2-supplemental-cpu-scheduling` traces `_private/計概補充/CPU排班演算法_國考完整講義.md` and links `CPU排班演算法_國考完整講義.html`
- **AND** `cpv2-supplemental-deadlock` traces `_private/計概補充/死結_考試精簡版.md` and links `死結_考試精簡版.html`
- **AND** `cpv2-supplemental-paging-segmentation` traces `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` and links `分頁與分段記憶體管理_題目帶動教學完整版.html`
- **AND** `cpv2-supplemental-oop-characteristics` traces `_private/計概補充/物件導向特性_國考完整講義.md` and links `物件導向特性_國考完整講義.html`
- **AND** `cpv2-supplemental-complexity-linear-structures` traces `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` and links `基礎資料結構(上)_複雜度與線性結構.html`
- **AND** `cpv2-supplemental-trees-hash-tables` traces `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` and links `基礎資料結構(下)_樹與雜湊表.html`
- **AND** no supplemental topic has id `cpv2-supplemental-basic-data-structures`

#### Scenario: Supplemental content remains lecture-only

- **WHEN** the supplemental topics and linked HTML pages are serialized for inspection
- **THEN** the serialized data contains the phrases `Amdahl's Law`, `CPU Scheduling`, `Deadlock`, `Paging`, `Segmentation`, `OOP Characteristics`, `Complexity`, `Linear Structures`, `Tree`, and `Hash Table`
- **AND** the serialized data does not contain `questionText`, `correctAnswer`, `backendSyncId`, or `remoteQuestionId`
- **AND** the serialized data does not contain `Machine Instruction Cycle`, `Five Functional Units`, `CPU Components`, `Memory Hierarchy`, or `PC（程式計數器）`

#### Scenario: CPU scheduling source uses complete national exam lecture

- **WHEN** `cpv2-supplemental-cpu-scheduling` and its linked HTML page are inspected
- **THEN** the source traceability includes `_private/計概補充/CPU排班演算法_國考完整講義.md`
- **AND** the linked HTML filename is `CPU排班演算法_國考完整講義.html`
- **AND** the old source `_private/計概補充/CPU排班演算法_考試速記版.md` is not used as the approved source for this topic
