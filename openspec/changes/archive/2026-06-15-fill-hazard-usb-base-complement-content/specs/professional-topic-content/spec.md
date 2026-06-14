## ADDED Requirements

### Requirement: Computer Principles basic topics include finalized lesson articles

The professional topic data SHALL provide finalized lessonArticle content for the Computer Principles topics `cp-hazard`, `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion`. Each topic SHALL include source traceability to `_private/計算機概論.txt` and its matching Markdown source file.

#### Scenario: Four topics are available as formal content

- **WHEN** the Computer Principles professional topic data is loaded
- **THEN** `cp-hazard`, `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion` each contain one lessonArticle block
- **AND** each lessonArticle has at least one section with learner-facing content
- **AND** each topic sourceFiles includes `_private/計算機概論.txt`
- **AND** each topic sourceFiles includes its matching Markdown source path

##### Example: topic source paths

| Topic id | Required Markdown source |
| ----- | ----- |
| `cp-hazard` | `_private/MD/計概/3a基本計概/十二、Hazard_新手國考教材.md` |
| `cp-usb-speed` | `_private/MD/計概/3a基本計概/十三、USB 速度_新手國考教材.md` |
| `cp-base-conversion` | `_private/MD/計概/3a基本計概/十四、進制轉換_新手國考教材.md` |
| `cp-complement-conversion` | `_private/MD/計概/3a基本計概/十五、補數轉換_新手國考教材.md` |

#### Scenario: Topic titles use Chinese English format

- **WHEN** the Computer Principles route renders these four topics
- **THEN** the Hazard topic title is `管線危障(Hazard)`
- **AND** the USB topic title is `USB 速度(USB Speed)`
- **AND** the base conversion topic title is `進制轉換(Base Conversion)`
- **AND** the complement conversion topic title is `補數轉換(Complement Representation)`

#### Scenario: Hazard appears between Pipeline and Bus

- **WHEN** the Computer Principles route topic order is resolved
- **THEN** `cp-hazard` appears immediately after `cp-pipeline`
- **AND** `cp-bus` appears immediately after `cp-hazard`
- **AND** `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion` remain after `cp-cache` in their existing relative order

##### Example: required neighboring topic ids

| Position relationship | Expected topic ids |
| ----- | ----- |
| Pipeline sequence | `cp-pipeline`, `cp-hazard`, `cp-bus` |
| Post-Cache imported sequence | `cp-cache` before `cp-usb-speed`, `cp-base-conversion`, `cp-complement-conversion` |

### Requirement: Markdown display instructions are normalized into app content

Markdown-only display instructions SHALL NOT appear as learner-facing text in formal professional topic data. The app content SHALL convert those instructions into supported lessonArticle paragraphs, lists, and tables.

#### Scenario: Raw display instructions are absent

- **WHEN** the four filled topics are serialized from formal professional data
- **THEN** the serialized content does not contain `用table`
- **AND** the serialized content does not contain `ul/li做`
- **AND** the serialized content does not contain `紅色文字顏色`
- **AND** the serialized content does not contain `你幫我設計顯示方式`

#### Scenario: Confirmed content corrections are applied

- **WHEN** the base conversion topic is loaded
- **THEN** the examples include `(450.153)10` conversions with fractional results limited to 8 digits
- **AND** the examples include converting `(1011110010.101)2` to hexadecimal
- **AND** the examples do not use `(1011110010.151)2` as a binary input

#### Scenario: Complement notes keep decimal complement concepts separate

- **WHEN** the complement conversion topic is loaded
- **THEN** the main representation table covers sign-magnitude, 1's complement, and 2's complement
- **AND** the notes section contains 9's complement and 10's complement as decimal complement concepts
- **AND** the decimal complement notes use plain text formulas such as `r^n - N` instead of math-renderer syntax
