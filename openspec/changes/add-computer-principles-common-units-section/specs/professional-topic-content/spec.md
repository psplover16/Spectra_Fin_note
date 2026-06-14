## ADDED Requirements

### Requirement: Computer principles includes common units as the first professional topic

The professional topic content SHALL include a computer principles topic with id `cp-common-units` and title `電腦常用單位`. This topic SHALL appear before `cp-von-neumann-architecture` in the `computerPrinciples` formal topic order. The topic SHALL use the existing `lessonArticle` content shape and SHALL NOT require a new route, subject key, Vue component, or content block kind.

#### Scenario: Common units topic is first in computer principles

- **WHEN** the computer principles formal topics are loaded
- **THEN** the first topic id is `cp-common-units`
- **THEN** the first topic title is `電腦常用單位`
- **THEN** `cp-von-neumann-architecture` remains present after `cp-common-units`

#### Scenario: Common units topic uses existing lesson article rendering

- **WHEN** the `cp-common-units` topic detail is rendered
- **THEN** the topic uses one `lessonArticle` block
- **THEN** the lesson article includes a table with headers `單位`, `符號`, `中文`, `等於`, and `白話理解`
- **THEN** the topic renders through the existing subject topic page table renderer

### Requirement: Common units content explains bit, byte, capacity, and speed notation

The `cp-common-units` topic SHALL explain bit, bits, byte, nibble, word, KB, MB, GB, and TB. The content MUST state that `bits` is the English plural of `bit` and that the symbol remains `b`. The content MUST distinguish lowercase `b` from uppercase `B` and MUST include `32 bits = 32 b = 4 B = 4 bytes`. The content MUST explain that `Mbps` uses bits and `MB/s` uses bytes, including `1 MB/s = 8 Mbps`.

#### Scenario: Unit table contains required rows

- **WHEN** a learner opens the `電腦常用單位` topic
- **THEN** the table includes rows for `bit`, `bits`, `byte`, `nibble`, `word`, `KB`, `MB`, `GB`, and `TB`
- **THEN** the `bits` row uses symbol `b`
- **THEN** the `byte` row states `1 byte = 8 bits`
- **THEN** the `KB`, `MB`, `GB`, and `TB` rows state the national-exam binary convention for 2^10, 2^20, 2^30, and 2^40 byte-based units

##### Example: required conversion values

| Input | Expected Output | Notes |
| ----- | --------------- | ----- |
| `32 bits` | `32 b = 4 B = 4 bytes` | lowercase `b` means bit |
| `1 MB/s` | `8 Mbps` | uppercase `B` means byte |
| `1 KB` | `1024 bytes` | national-exam binary convention |

### Requirement: Computer principles workflow tracks the common units topic

The computer principles content workflow SHALL track `cp-common-units` as a formal imported topic. The manifest, route-scoped draft workflow, import-readiness report, and automated tests SHALL treat computer principles as having 33 formal topics after this change.

#### Scenario: Workflow expects thirty-three computer principles topics

- **WHEN** the computer principles manifest and route workflow checks run
- **THEN** `cp-common-units` is present as a computer principles topic
- **THEN** the expected computer principles formal topic count is 33
- **THEN** the generator, verifier, and import task counts include `cp-common-units`

#### Scenario: Source traceability includes both topic basis files

- **WHEN** the `cp-common-units` formal topic is inspected
- **THEN** `sourceFiles` includes `_private/計算機概論.txt`
- **THEN** `sourceFiles` includes `_private/discuss.txt`
- **THEN** the topic source summary identifies the common-units basis rather than an unrelated existing section
