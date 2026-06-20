## ADDED Requirements

### Requirement: Floating point topic exposes practice and IEEE 754 special-value sections

The `computerPrinciplesV2` route SHALL render a route-visible topic card titled `加強練習` as the first item in the unfinished topic list. The practice card SHALL use the same `SubjectTopicCard` architecture as the route topic card titled `架構與計算理論`. The route SHALL keep the existing 13 catalog topics in their original relative order after the practice card, and `cpv2-floating-point-conversion` SHALL remain between `cpv2-complement-conversion` and `cpv2-codes-and-character-sets`. The refreshed floating-point lessonArticle SHALL include an independent section titled `IEEE 754 浮點數特殊值・速記版` immediately after the root `16. 浮點數轉換` section. The route SHALL NOT create a separate route-visible topic for the IEEE 754 special-values source file.

#### Scenario: Practice topic card is first in the unfinished list

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 14 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** the second topic remains `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** the practice card is rendered inside the unfinished topic list through the same topic card architecture as `架構與計算理論`
- **AND** the practice topic contains the 12 numbered prompts from `_private/discuss.txt`
- **AND** the practice topic preserves the cache subpoints for `Valid bit`, `Dirty bit`, `Tag`, and the stored data
- **AND** the practice topic preserves the `資管題目:` notes from `_private/discuss.txt`

#### Scenario: IEEE 754 special values are available directly below the root floating point section

- **WHEN** the `cpv2-floating-point-conversion` lessonArticle is rendered
- **THEN** it contains an independent section titled `IEEE 754 浮點數特殊值・速記版` immediately after the `16. 浮點數轉換` section
- **AND** the section explains the exponent-all-zero and exponent-all-one decision rule
- **AND** the section distinguishes `±0`, subnormal numbers, normal numbers, `±∞`, and `NaN`
- **AND** the section states that normal numbers use hidden bit `1` and subnormal numbers use hidden bit `0`
- **AND** the section includes single-precision and double-precision field widths and bias values

#### Scenario: Existing route ownership remains unchanged

- **WHEN** the refreshed floating-point topic is inspected
- **THEN** its `subjectKey` remains `computerPrinciplesV2`
- **AND** its `sourceBatch` remains `computer-principles-v2-route`
- **AND** its title remains `浮點數轉換`
- **AND** no route-visible topic is created for `_private/MD/0621/IEEE754_浮點數特殊值_速記.md`
