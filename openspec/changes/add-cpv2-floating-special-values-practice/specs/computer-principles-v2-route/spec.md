## ADDED Requirements

### Requirement: Floating point topic exposes practice and IEEE 754 special-value sections

The `computerPrinciplesV2` route SHALL keep `cpv2-floating-point-conversion` as the tenth route-visible topic and SHALL render a route-level practice section titled `加強練習` before the topic list. The practice section SHALL use the same outer card container treatment as route-visible topic cards while remaining a non-topic section. The refreshed floating-point lessonArticle SHALL include an independent section titled `IEEE 754 浮點數特殊值・速記版` immediately after the root `16. 浮點數轉換` section. The route SHALL NOT add, remove, or reorder any Computer Principles v2 topic while adding these sections.

#### Scenario: Practice section is first on the route

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 13 topics
- **AND** the tenth topic is `cpv2-floating-point-conversion`
- **AND** the route renders a section titled `加強練習` before the topic list
- **AND** that section uses the same outer card container treatment as the route topic card for `架構與計算理論`
- **AND** that section contains the 12 numbered prompts from `_private/discuss.txt`
- **AND** that section preserves the cache subpoints for `Valid bit`, `Dirty bit`, `Tag`, and the stored data
- **AND** that section preserves the `資管題目:` notes from `_private/discuss.txt`

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
