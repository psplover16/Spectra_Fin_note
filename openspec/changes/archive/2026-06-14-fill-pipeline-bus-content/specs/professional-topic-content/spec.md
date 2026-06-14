## ADDED Requirements

### Requirement: Computer principles pipeline topic carries filled lesson content

The professional computer-principles topic with id `cp-pipeline` SHALL render as a filled `lessonArticle` instead of an empty skeleton. Its `sourceFiles` SHALL include `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/四、Pipeline（管線化）_新手國考教材.md`. Its lesson article SHALL preserve the approved Markdown source's concise learning scope: definition, common formulas, pipeline limits, basic Hazard/Stall explanation, common Hazard types, and ideal maximum speedup.

#### Scenario: Pipeline topic is no longer an empty lesson article

- **WHEN** the formal professional topics for `computerPrinciples` are loaded
- **THEN** the topic `cp-pipeline` contains one `lessonArticle` block
- **AND** that lesson article has at least one lead line
- **AND** that lesson article has non-empty sections for definition, common formulas, pipeline limits, common Hazard types, and maximum speedup
- **AND** the topic source files include the Pipeline Markdown source path

#### Scenario: Pipeline Hazard content remains scoped to basics

- **WHEN** the `cp-pipeline` lesson article is rendered
- **THEN** it includes basic definitions for Hazard and Stall
- **AND** it includes Structural Hazard, Data Hazard, and Control Hazard in a concise table or equivalent section
- **AND** it does not expand into detailed Hazard resolution teaching reserved for `cp-hazard`

### Requirement: Computer principles bus topic carries filled lesson content

The professional computer-principles topic with id `cp-bus` SHALL render as a filled `lessonArticle` instead of an empty skeleton. Its `sourceFiles` SHALL include `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/五、匯流排（Bus）_新手國考教材.md`. Its lesson article SHALL preserve the approved Markdown source's concise learning scope: bus types, basic calculations, transfer directions, addressability pitfalls, read/write flow, and register/cache/RAM scope notes.

#### Scenario: Bus topic is no longer an empty lesson article

- **WHEN** the formal professional topics for `computerPrinciples` are loaded
- **THEN** the topic `cp-bus` contains one `lessonArticle` block
- **AND** that lesson article has at least one lead line
- **AND** that lesson article has non-empty sections for bus types, basic calculations, transfer directions, addressability pitfalls, read/write flow, and memory scope notes
- **AND** the topic source files include the Bus Markdown source path

#### Scenario: Bus read and write flow follows the approved Markdown order

- **WHEN** the `cp-bus` lesson article presents the read/write flow
- **THEN** the read flow states that the CPU sends an address, the CPU sends a read control signal, and memory places data on the data bus for the CPU to receive
- **AND** the write flow presents address bus, data bus, then control bus in the same order as the Bus Markdown source
