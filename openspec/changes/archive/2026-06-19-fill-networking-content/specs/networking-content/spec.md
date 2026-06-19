## ADDED Requirements

### Requirement: Networking Markdown sources are imported as route topics

The app SHALL convert the curated networking Markdown sources into learner-facing `networking` professional topics. Each source Markdown file SHALL correspond to exactly one route-visible topic, and the route-visible order SHALL follow the chapter order encoded by the filenames.

#### Scenario: Networking topics appear in source chapter order

- **WHEN** the networking subject topics are loaded
- **THEN** the route-visible topic ids appear in this exact order: `networking-osi-tcpip`, `networking-basics`, `networking-devices-osi`, `networking-ip-subnetting`, `networking-routing-l3-protocols`, `networking-transport-layer`, `networking-application-ports`, `networking-physical-layer`, `networking-data-link-layer`, `networking-security-crypto`, `networking-defense-attacks`
- **THEN** no empty networking skeleton topic appears in the route-visible list

##### Example: chapter mapping

| Source file | Expected topic id |
| ----- | ----- |
| `_private/MD/網概/網路概論_1_OSI七層與TCPIP.md` | `networking-osi-tcpip` |
| `_private/MD/網概/網路概論_4上_IP與子網路計算.md` | `networking-ip-subnetting` |
| `_private/MD/網概/網路概論_4下_路由與L3協定.md` | `networking-routing-l3-protocols` |
| `_private/MD/網概/網路概論_8上_資安觀念與加密.md` | `networking-security-crypto` |
| `_private/MD/網概/網路概論_8下_防禦設備與攻擊.md` | `networking-defense-attacks` |

### Requirement: Networking topic data is source-traceable

Each imported networking topic SHALL record the approved source files and a source summary that connects the displayed learning content to the corresponding Markdown chapter.

#### Scenario: Imported networking topic carries source files

- **WHEN** an imported networking topic is loaded from professional topic data
- **THEN** its `sourceFiles` includes `_private/網概.txt`
- **THEN** its `sourceFiles` includes the corresponding `_private/MD/網概/*.md` source path
- **THEN** its `sourceSummary` names the networking chapter represented by the topic

### Requirement: Networking lesson articles preserve source structure

Each imported networking topic SHALL render as a `lessonArticle` using existing lesson content block kinds. The article SHALL preserve the source chapter title, section headings, tables, ordered lists, formulas, worked examples, quick-review summaries, and learning markers when those elements exist in the Markdown source.

#### Scenario: Imported networking topic has learner-facing lesson content

- **WHEN** an imported networking topic is loaded
- **THEN** it has a non-empty `summary`
- **THEN** it has non-empty `terms`
- **THEN** its first block is a `lessonArticle`
- **THEN** the `lessonArticle.sections` array is non-empty
- **THEN** every section contains at least one content block

#### Scenario: Representative source content is preserved

- **WHEN** all imported networking topics are serialized for inspection
- **THEN** the serialized topics contain representative source phrases from all 11 Markdown chapters: `OSI 七層`, `LAN vs MAN vs WAN`, `碰撞域`, `VLSM`, `RIP`, `三方交握`, `Port Number`, `WiFi`, `CSMA/CD`, `數位簽章`, and `IDS vs IPS`

### Requirement: Networking source corrections remain minimal

The implementation SHALL correct confirmed content errors discovered while reading the networking Markdown sources. The implementation MUST NOT add missing knowledge that is absent from the sources, and MUST NOT rewrite the source voice beyond the smallest correction needed to avoid incorrect learning content.

#### Scenario: Confirmed source error is corrected without expanding the lesson

- **WHEN** apply-stage source review identifies a confirmed networking fact error
- **THEN** the displayed topic corrects the erroneous fact
- **THEN** the implementation report records the corrected point
- **THEN** the displayed topic does not add unrelated facts outside the corresponding Markdown source

### Requirement: Existing networking page behavior remains unchanged

The imported networking content SHALL use the existing professional topic page behavior. The change MUST NOT require new route paths, new progress storage fields, new Markdown parsing at runtime, or new topic page rendering behavior.

#### Scenario: Networking import uses existing topic page contract

- **WHEN** `/networking` renders imported networking topics
- **THEN** each topic expands and collapses through the existing topic title control
- **THEN** existing bookmark and completion controls remain available
- **THEN** the app uses existing `lessonArticle` rendering for paragraphs, ordered lists, tables, subsections, and indented groups
