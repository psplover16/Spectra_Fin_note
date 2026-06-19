## ADDED Requirements

### Requirement: Computer principles topics are split into dedicated formal subjects

Formal professional topic data SHALL move digital logic and operating system topics out of `computerPrinciples` and into dedicated `digitalLogic` and `operatingSystems` subject collections. The moved topics SHALL keep their existing topic ids, route-scoped display titles, source traceability, lessonArticle content, difficulty, topic type, and terms. Topic display titles SHALL omit redundant subject/chapter prefixes when the route already supplies that context.

#### Scenario: Digital logic topics belong only to digitalLogic

- **WHEN** `professionalTopicsBySubject` is loaded
- **THEN** `professionalTopicsBySubject.digitalLogic` contains exactly the five moved digital logic topic ids in source order
- **AND** `professionalTopicsBySubject.computerPrinciples` does not contain any of those topic ids

##### Example: digital logic topic ownership

| Position | Topic id | Expected subject |
| ----- | ----- | ----- |
| 1 | `cp-digital-logic-basics` | `digitalLogic` |
| 2 | `cp-sop-pos` | `digitalLogic` |
| 3 | `cp-karnaugh-map` | `digitalLogic` |
| 4 | `cp-universal-gates` | `digitalLogic` |
| 5 | `cp-combinational-sequential-circuits` | `digitalLogic` |

#### Scenario: Operating system topics belong only to operatingSystems

- **WHEN** `professionalTopicsBySubject` is loaded
- **THEN** `professionalTopicsBySubject.operatingSystems` contains exactly the eleven moved operating system topic ids in source order
- **AND** `professionalTopicsBySubject.computerPrinciples` does not contain any of those topic ids

##### Example: operating system topic ownership

| Position | Topic id | Expected subject |
| ----- | ----- | ----- |
| 1 | `cp-os-basics` | `operatingSystems` |
| 2 | `cp-io-and-interrupts` | `operatingSystems` |
| 3 | `cp-hardware-protection` | `operatingSystems` |
| 4 | `cp-os-structure` | `operatingSystems` |
| 5 | `cp-process` | `operatingSystems` |
| 6 | `cp-cpu-scheduling` | `operatingSystems` |
| 7 | `cp-deadlock` | `operatingSystems` |
| 8 | `cp-process-communication` | `operatingSystems` |
| 9 | `cp-memory-management` | `operatingSystems` |
| 10 | `cp-virtual-memory` | `operatingSystems` |
| 11 | `cp-disk-management` | `operatingSystems` |

#### Scenario: Computer principles keeps only remaining computer-principles topics

- **WHEN** `getSubjectTopics('computerPrinciples')` is loaded
- **THEN** it includes remaining computer-principles topics such as `cp-common-units`, `cp-von-neumann-architecture`, and `cp-codes-and-check-codes`
- **AND** it does not include `cp-digital-logic-basics`
- **AND** it does not include `cp-os-basics`

#### Scenario: Empty hardware protection skeleton is not route-visible

- **WHEN** `professionalTopicsBySubject.operatingSystems` is loaded
- **THEN** it includes `cp-hardware-protection` as an `operatingSystems` formal topic
- **AND** that topic has no visible lessonArticle sections, no summary, and no terms
- **WHEN** `getSubjectTopics('operatingSystems')` is loaded
- **THEN** it does not include `cp-hardware-protection`

#### Scenario: Split routes retain learner-facing lessonArticle content

- **WHEN** `getSubjectTopics('digitalLogic')` and `getSubjectTopics('operatingSystems')` are loaded
- **THEN** every returned topic has at least one visible learner-facing content block
- **AND** moved topics keep their existing `sourceFiles` and `sourceSummary` values

### Requirement: Professional route topic titles are route-scoped

Professional route topic display titles SHALL omit redundant subject names and chapter numbers once the containing route already provides subject context. Source traceability fields SHALL preserve the underlying source location independently from the display title.

#### Scenario: Imported professional topic titles omit redundant prefixes

- **WHEN** formal professional topics are loaded for operating systems, networking, algorithms, information management, database, programming, and system design
- **THEN** learner-facing `title` values do not include route-level prefixes such as `作業系統 1：`, `網路概論 1：`, `資料結構與演算法 1：`, `資訊管理 1：`, `資料庫 1：`, `程式設計 1：`, or `系統分析與設計 1：`
- **AND** examples include `OS 基礎概念`, `OSI 七層 + TCP/IP ★`, `演算法定義 + Big-O 複雜度 ★`, `數位轉型 + ESG`, `基礎概念 + ANSI/SPARC 架構`, `語言執行方式 + 程式基礎`, and `SDLC + SSDLC`
- **AND** `sourceFiles`, `sourceSummary`, and lessonArticle `sourceSection` remain available for source traceability
