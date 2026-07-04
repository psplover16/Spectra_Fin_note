## MODIFIED Requirements

### Requirement: Computer principles v2 route uses catalog-backed topics

The app SHALL expose an independent Computer Principles v2 route at `/computer-principles-v2`. The route SHALL render a professional subject topic page titled `計概(v2)`, SHALL use the `computerPrinciplesV2` subject key, and SHALL use a progress namespace separate from `computerPrinciples`. The route-visible topic list SHALL contain approved non-catalog topics before the catalog-backed segment while preserving the catalog-backed segment from Markdown files `01` through `13`. The approved non-catalog segment SHALL contain `加強練習`, `阿姆達爾定律`, and six HTML-linked supplemental topic cards. The route-visible list SHALL NOT contain the legacy `cpv2-supplemental-data` topic card and SHALL NOT contain the removed `cpv2-supplemental-basic-data-structures` topic card.

#### Scenario: Open the v2 route directly

- **WHEN** the user opens `/computer-principles-v2`
- **THEN** the app renders a subject topic page titled `計概(v2)`
- **AND** the page uses the `computerPrinciplesV2` subject key for topic progress
- **AND** the page test id is `subject-view-computer-principles-v2`

#### Scenario: Route-visible topic list includes HTML-linked supplemental topics and the catalog segment

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 21 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** the second topic is `cpv2-supplemental-amdahl-law` titled `阿姆達爾定律`
- **AND** the third topic is `cpv2-supplemental-cpu-scheduling` titled `CPU 排班演算法`
- **AND** the fourth topic is `cpv2-supplemental-deadlock` titled `死結`
- **AND** the fifth topic is `cpv2-supplemental-paging-segmentation` titled `分頁與分段記憶體管理`
- **AND** the sixth topic is `cpv2-supplemental-oop-characteristics` titled `物件導向特性`
- **AND** the seventh topic is `cpv2-supplemental-complexity-linear-structures` titled `複雜度與線性結構`
- **AND** the eighth topic is `cpv2-supplemental-trees-hash-tables` titled `樹與雜湊表`
- **AND** the ninth topic is `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** the remaining catalog-backed topics preserve the relative order of Markdown files `01` through `13`
- **AND** the route-visible list does not contain a topic for the catalog manifest file
- **AND** the route-visible list does not contain `cpv2-supplemental-data`, `cpv2-supplemental-basic-data-structures`, `補充資料`, or `基礎資料結構`
- **AND** every returned topic has visible learner-facing content through either inline topic blocks or an `htmlPage` link

##### Example: leading route-visible order

| Position | Topic id | Expected title | Content mode |
| ----- | ----- | ----- | ----- |
| 1 | `cpv2-supplemental-practice` | `加強練習` | inline lessonArticle |
| 2 | `cpv2-supplemental-amdahl-law` | `阿姆達爾定律` | inline lessonArticle |
| 3 | `cpv2-supplemental-cpu-scheduling` | `CPU 排班演算法` | linked HTML |
| 4 | `cpv2-supplemental-deadlock` | `死結` | linked HTML |
| 5 | `cpv2-supplemental-paging-segmentation` | `分頁與分段記憶體管理` | linked HTML |
| 6 | `cpv2-supplemental-oop-characteristics` | `物件導向特性` | linked HTML |
| 7 | `cpv2-supplemental-complexity-linear-structures` | `複雜度與線性結構` | linked HTML |
| 8 | `cpv2-supplemental-trees-hash-tables` | `樹與雜湊表` | linked HTML |
| 9 | `cpv2-architecture-computation-theory` | `架構與計算理論` | inline lessonArticle |

### Requirement: Computer principles v2 uses lessonArticle content

Computer Principles v2 inline topic content SHALL be represented through existing `lessonArticle` blocks. The app MUST NOT add a runtime raw Markdown renderer for this route. HTML-linked supplemental cards SHALL preserve source-authored Markdown structure through standalone static HTML pages referenced by `htmlPage` data. Inline supplemental and catalog-backed cards SHALL continue to use supported `lessonArticle` block types.

#### Scenario: Inline topic Markdown structure is converted to supported blocks

- **WHEN** a Computer Principles v2 inline topic is loaded from formal app data
- **THEN** the topic contains one `lessonArticle` block
- **AND** the lessonArticle contains non-empty sections converted from the source Markdown headings and content
- **AND** paragraphs, lists, tables, worked calculation steps, and practice explanations from the source Markdown are preserved as supported lessonArticle content blocks

#### Scenario: HTML-linked topic renders through static page link

- **WHEN** a Computer Principles v2 topic has `htmlPage.href`
- **THEN** the topic remains route-visible even when it has no non-empty `lessonArticle` block
- **AND** activating the title control opens the static HTML page referenced by `htmlPage.href`
- **AND** activating the title control does not expand an inline detail panel for that topic

#### Scenario: Raw Markdown renderer is not required

- **WHEN** the v2 route renders a topic
- **THEN** inline topics render through `SubjectTopicPage` and existing lessonArticle block rendering
- **AND** HTML-linked topics render through committed static HTML files
- **AND** the route does not require fetching or parsing Markdown files at runtime

#### Scenario: CPU scheduling source structure is preserved in linked HTML

- **WHEN** the `cpv2-supplemental-cpu-scheduling` topic is inspected
- **THEN** the topic traces `_private/計概補充/CPU排班演算法_國考完整講義.md`
- **AND** the topic `htmlPage.sourceFilename` is `CPU排班演算法_國考完整講義.html`
- **AND** the linked static HTML preserves the CPU scheduling Markdown structure as learner-facing content
- **AND** the topic remains lecture-only and does not expose quiz-only fields or an interactive answer-submission flow

### Requirement: Floating point conversion topic uses refreshed v2 source

The Computer Principles v2 route SHALL keep the existing `cpv2-floating-point-conversion` topic in the tenth catalog position and SHALL render its learner-facing content from `_private/MD/計算機概論v2/10_浮點數轉換.md`. The topic SHALL keep the title `浮點數轉換`, the `computerPrinciplesV2` subject key, and the existing `/computer-principles-v2` route ownership. The topic SHALL NOT expose the deprecated floating point conversion lesson content as learner-facing content after the refresh.

#### Scenario: Load refreshed floating point conversion topic

- **WHEN** the `computerPrinciplesV2` topic list is loaded
- **THEN** the eighteenth route-visible topic has id `cpv2-floating-point-conversion`
- **AND** the topic is the tenth catalog-backed topic after the approved non-catalog segment
- **AND** the topic title is `浮點數轉換`
- **AND** the topic source files include `_private/MD/計算機概論v2/10_浮點數轉換.md`
- **AND** the topic lesson article contains refreshed sections for traditional floating point representation, IEEE 754 fields, conversion workflow, reverse conversion, decimal precision, common mistakes, exam answer sentences, and practice exercises
- **AND** the topic lesson article does not retain deprecated learner-facing wording from the previous floating point conversion source

##### Example: refreshed source coverage

| Required content marker | Expected refreshed topic behavior |
| ----- | ----- |
| `傳統（一般）浮點表示法` | Rendered in a lessonArticle section |
| `IEEE 754 欄位` | Rendered in a lessonArticle section with single and double precision fields |
| `0.1(10) = 0.0001100110011…(2)` | Rendered in the decimal precision explanation |
| `練習 6（兩種表示法對照）` | Rendered in the practice exercise section |

### Requirement: Floating point topic exposes practice and IEEE 754 special-value sections

The `computerPrinciplesV2` route SHALL render a route-visible topic card titled `加強練習` as the first item in the unfinished topic list, the inline `阿姆達爾定律` supplemental card as the second item, and six HTML-linked supplemental topic cards as the next six items. All approved non-catalog cards SHALL use the same `SubjectTopicCard` architecture as the route topic card titled `架構與計算理論`. The route SHALL keep the existing 13 catalog topics in their original relative order after the approved non-catalog cards, and `cpv2-floating-point-conversion` SHALL remain between `cpv2-complement-conversion` and `cpv2-codes-and-character-sets`. The refreshed floating-point lessonArticle SHALL include an independent IEEE 754 special-value section immediately after the root floating-point section. The route SHALL NOT create a separate route-visible topic for the IEEE 754 special-values source file.

#### Scenario: Practice and supplemental topic cards precede the catalog list

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 21 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** the next seven topics are `cpv2-supplemental-amdahl-law`, `cpv2-supplemental-cpu-scheduling`, `cpv2-supplemental-deadlock`, `cpv2-supplemental-paging-segmentation`, `cpv2-supplemental-oop-characteristics`, `cpv2-supplemental-complexity-linear-structures`, and `cpv2-supplemental-trees-hash-tables`
- **AND** the ninth topic remains `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** all approved non-catalog cards are rendered inside the unfinished topic list through the same topic card architecture as `架構與計算理論`
- **AND** the practice topic contains the 12 numbered prompts from `_private/discuss.txt`
- **AND** the practice topic preserves the cache subpoints for `Valid bit`, `Dirty bit`, `Tag`, and the stored data
- **AND** no route-visible topic has id `cpv2-supplemental-data` or title `補充資料`
- **AND** no route-visible topic has id `cpv2-supplemental-basic-data-structures` or title `基礎資料結構`
- **AND** the supplemental topics include content for Amdahl's Law, CPU scheduling, deadlock, paging and segmentation, object-oriented characteristics, complexity and linear data structures, and trees and hash tables
- **AND** the supplemental topics do not include sections for five functional units, CPU components, or memory hierarchy

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
