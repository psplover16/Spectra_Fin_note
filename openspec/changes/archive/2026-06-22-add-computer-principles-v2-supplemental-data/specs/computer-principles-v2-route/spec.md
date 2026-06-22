## MODIFIED Requirements

### Requirement: Computer principles v2 route uses catalog-backed topics

The app SHALL expose an independent Computer Principles v2 route at `/computer-principles-v2`. The route SHALL render a professional subject topic page titled `計概(v2)`, SHALL use the `computerPrinciplesV2` subject key, and SHALL use a progress namespace separate from `computerPrinciples`. The route-visible topic list SHALL contain approved non-catalog topics before the catalog-backed segment while preserving the catalog-backed segment from Markdown files `01` through `13`.

#### Scenario: Open the v2 route directly

- **WHEN** the user opens `/computer-principles-v2`
- **THEN** the app renders a subject topic page titled `計概(v2)`
- **AND** the page uses the `computerPrinciplesV2` subject key for topic progress
- **AND** the page test id is `subject-view-computer-principles-v2`

#### Scenario: Route-visible topic list includes supplemental topics and the catalog segment

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 15 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** the second topic is `cpv2-supplemental-data` titled `補充資料`
- **AND** the third topic is `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** the remaining catalog-backed topics preserve the relative order of Markdown files `01` through `13`
- **AND** the route-visible list does not contain a topic for the catalog manifest file
- **AND** every returned topic has visible learner-facing lessonArticle content

### Requirement: Computer principles v2 titles follow the catalog manifest

The app SHALL use the catalog manifest as the title and order source for the catalog-backed Computer Principles v2 topic segment. Catalog-backed topic titles SHALL come from the catalog title column and MUST NOT include filename sequence prefixes or H1 chapter prefixes. Approved non-catalog topics SHALL keep their explicit learner-facing titles.

#### Scenario: Catalog-backed topic titles and order match the catalog segment

- **WHEN** the `computerPrinciplesV2` topic list is loaded
- **THEN** the first two route-visible topics are the approved non-catalog topics `加強練習` and `補充資料`
- **AND** the catalog-backed topic segment starts at the third route-visible topic
- **AND** the catalog-backed topic titles appear in the same relative order as catalog rows `01` through `13`
- **AND** the catalog-backed topic titles match the catalog title values exactly

##### Example: leading route-visible order

| Position | Expected title | Source basis |
| ----- | ----- | ----- |
| 1 | `加強練習` | `_private/discuss.txt` |
| 2 | `補充資料` | `_private/計概補充/計算機概論_重點講義_01.md` |
| 3 | `架構與計算理論` | Catalog row `01` |

#### Scenario: Sequence prefixes are not displayed as topic titles

- **WHEN** the v2 route renders topic cards
- **THEN** no topic title starts with `00_`, `01_`, `02_`, `基本計概 01`, or `基本計概 02`
- **AND** the first catalog-backed visible topic title is `架構與計算理論`

### Requirement: Floating point topic exposes practice and IEEE 754 special-value sections

The `computerPrinciplesV2` route SHALL render a route-visible topic card titled `加強練習` as the first item in the unfinished topic list and a route-visible topic card titled `補充資料` as the second item. Both cards SHALL use the same `SubjectTopicCard` architecture as the route topic card titled `架構與計算理論`. The route SHALL keep the existing 13 catalog topics in their original relative order after the supplemental cards, and `cpv2-floating-point-conversion` SHALL remain between `cpv2-complement-conversion` and `cpv2-codes-and-character-sets`. The refreshed floating-point lessonArticle SHALL include an independent IEEE 754 special-value section immediately after the root floating-point section. The route SHALL NOT create a separate route-visible topic for the IEEE 754 special-values source file.

#### Scenario: Practice and supplemental topic cards precede the catalog list

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 15 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** the second topic is `cpv2-supplemental-data` titled `補充資料`
- **AND** the third topic remains `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** both supplemental cards are rendered inside the unfinished topic list through the same topic card architecture as `架構與計算理論`
- **AND** the practice topic contains the 12 numbered prompts from `_private/discuss.txt`
- **AND** the practice topic preserves the cache subpoints for `Valid bit`, `Dirty bit`, `Tag`, and the stored data
- **AND** the supplemental data topic source files include `_private/計概補充/計算機概論_重點講義_01.md`
- **AND** the supplemental data lessonArticle includes sections for instruction cycle, Amdahl's Law, five functional units, CPU components, memory hierarchy, CPU scheduling, deadlock, paging and segmentation, object-oriented characteristics, and basic data structures

#### Scenario: IEEE 754 special values are available directly below the root floating point section

- **WHEN** the `cpv2-floating-point-conversion` lessonArticle is rendered
- **THEN** it contains an independent IEEE 754 special-value section immediately after the root floating-point section
- **AND** the section explains the exponent-all-zero and exponent-all-one decision rule
- **AND** the section distinguishes signed zero, subnormal numbers, normal numbers, signed infinity, and `NaN`
- **AND** the section states that normal numbers use hidden bit `1` and subnormal numbers use hidden bit `0`
- **AND** the section includes single-precision and double-precision field widths and bias values

#### Scenario: Existing route ownership remains unchanged

- **WHEN** the refreshed floating-point topic is inspected
- **THEN** its `subjectKey` remains `computerPrinciplesV2`
- **AND** its `sourceBatch` remains `computer-principles-v2-route`
- **AND** its title remains `浮點數轉換`
- **AND** no route-visible topic is created for the IEEE 754 special-values source file
