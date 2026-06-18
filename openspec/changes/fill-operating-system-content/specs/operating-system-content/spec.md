## ADDED Requirements

### Requirement: Operating-system Markdown sources are imported as lesson topics

The system SHALL import the approved 3c operating-system Markdown source set into `computerPrinciples` lesson topics. Each imported topic MUST record `_private/計算機概論.txt` and its matching Markdown file in `sourceFiles`.

#### Scenario: All approved OS Markdown sources are represented

- **WHEN** formal Computer Principles topic data is loaded
- **THEN** the imported operating-system topic set contains exactly the approved Markdown-backed topics listed in the example

##### Example: approved source mapping

| Topic id | Markdown source |
| -------- | --------------- |
| `cp-os-basics` | `_private/MD/計概/3c作業系統/3-1. OS 基礎概念.md` |
| `cp-io-and-interrupts` | `_private/MD/計概/3c作業系統/3-2. IO 中斷方式 與 硬體保護.md` |
| `cp-os-structure` | `_private/MD/計概/3c作業系統/3-4_OS結構.md` |
| `cp-process` | `_private/MD/計概/3c作業系統/作業系統_3-5上_Process基礎.md` |
| `cp-cpu-scheduling` | `_private/MD/計概/3c作業系統/作業系統_3-5下_CPU排程演算法.md` |
| `cp-deadlock` | `_private/MD/計概/3c作業系統/作業系統_3-6_Deadlock.md` |
| `cp-process-communication` | `_private/MD/計概/3c作業系統/作業系統_3-7_ProcessCommunication_跳過分析.md` |
| `cp-memory-management` | `_private/MD/計概/3c作業系統/作業系統_3-8_記憶體管理.md` |
| `cp-virtual-memory` | `_private/MD/計概/3c作業系統/作業系統_3-9_虛擬記憶體.md` |
| `cp-disk-management` | `_private/MD/計概/3c作業系統/作業系統_3-10_磁碟管理.md` |

### Requirement: OS topics are route-visible in chapter order

The system SHALL expose the imported operating-system topics on `/computer-principles` after the 3b digital-logic topics. The visible order MUST follow the numeric chapter order from the Markdown file names, including `3-10` after `3-9` rather than lexical sorting.

#### Scenario: Computer Principles route includes OS topics in source chapter order

- **WHEN** route-visible Computer Principles topics are requested
- **THEN** the OS topic ids appear in this order: `cp-os-basics`, `cp-io-and-interrupts`, `cp-os-structure`, `cp-process`, `cp-cpu-scheduling`, `cp-deadlock`, `cp-process-communication`, `cp-memory-management`, `cp-virtual-memory`, `cp-disk-management`

### Requirement: OS topic data is learner-facing and traceable

Each imported operating-system topic SHALL have non-empty `summary`, non-empty `terms`, and exactly one primary `lessonArticle` block. The `lessonArticle` SHALL have non-empty `sections`, and every section SHALL contain at least one learner-facing content block.

#### Scenario: Imported OS topic has formal lesson article content

- **WHEN** an imported operating-system topic is loaded from formal app data
- **THEN** it contains source traceability, non-empty summary, non-empty terms, and non-empty lesson article sections

##### Example: visible topic titles

| Topic id | Expected title |
| -------- | -------------- |
| `cp-os-basics` | `作業系統 1：OS 基礎概念(Operating System Basics)` |
| `cp-io-and-interrupts` | `作業系統 2：I/O 中斷方式 與 硬體保護(I/O and Interrupts)` |
| `cp-os-structure` | `作業系統 3-4：OS 的結構(Operating System Structure)` |
| `cp-process` | `作業系統 3-5（上）：Process 基礎(Process)` |
| `cp-cpu-scheduling` | `作業系統 3-5（下）：CPU 排程演算法(CPU Scheduling)` |
| `cp-deadlock` | `作業系統 3-6：Deadlock（死結）(Deadlock)` |
| `cp-process-communication` | `作業系統 3-7：Process Communication(Process Communication)` |
| `cp-memory-management` | `作業系統 3-8：Memory Management（記憶體管理）(Memory Management)` |
| `cp-virtual-memory` | `作業系統 3-9：Virtual Memory（虛擬記憶體）(Virtual Memory)` |
| `cp-disk-management` | `作業系統 3-10：Disk Management（磁碟管理）(Disk Management)` |

### Requirement: Existing Markdown arrangement is preserved conservatively

The imported lesson content SHALL preserve the source Markdown's main teaching arrangement, including headings, tables, ordered steps, calculation walkthroughs, and explicit skip-analysis wording. The implementation MUST NOT replace the source meaning with newly invented explanations, formulas, examples, or answers.

#### Scenario: Representative source content remains visible

- **WHEN** the imported OS topics are serialized for rendering
- **THEN** the serialized content contains representative source phrases and calculation artifacts from every high-risk chapter

##### Example: representative content checks

| Topic id | Required representative content |
| -------- | ------------------------------- |
| `cp-os-basics` | `OS 分類比較表` |
| `cp-io-and-interrupts` | `Polling` and `DMA` |
| `cp-os-structure` | `Command` and `System Call` |
| `cp-process` | `Process State` |
| `cp-cpu-scheduling` | `甘特圖` and `平均等待` |
| `cp-deadlock` | `銀行家演算法` |
| `cp-process-communication` | `這章我跳過` |
| `cp-memory-management` | `TLB` and `Fragmentation` |
| `cp-virtual-memory` | `EMAT` and `Page Replacement` |
| `cp-disk-management` | `Disk Scheduling` and `RAID` |

### Requirement: Adjacent OS skeletons remain controlled

The system SHALL keep `cp-hardware-protection` out of the route-visible topic list unless it receives its own dedicated learner-facing content. The combined I/O and hardware-protection Markdown source SHALL be represented by `cp-io-and-interrupts`.

#### Scenario: Empty hardware-protection skeleton remains hidden

- **WHEN** route-visible Computer Principles topics are requested after importing the approved OS Markdown source set
- **THEN** `cp-hardware-protection` is not included as a visible topic
- **AND** `cp-io-and-interrupts` includes the source file `_private/MD/計概/3c作業系統/3-2. IO 中斷方式 與 硬體保護.md`
