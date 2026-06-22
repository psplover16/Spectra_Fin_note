# computer-principles-v2-route Specification

## Purpose

TBD - created by archiving change 'computer-principles-v2-route'. Update Purpose after archive.

## Requirements

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


<!-- @trace
source: add-computer-principles-v2-supplemental-data
updated: 2026-06-22
code:
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/計概補充/計算機概論_重點講義_01.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - PROJECT_ARCHITECTURE.md
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - _private/discuss.txt
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
tests:
  - tests/component/AppShellSmoke.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/subjectTopics.spec.ts
-->

---
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


<!-- @trace
source: add-computer-principles-v2-supplemental-data
updated: 2026-06-22
code:
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/計概補充/計算機概論_重點講義_01.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - PROJECT_ARCHITECTURE.md
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - _private/discuss.txt
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
tests:
  - tests/component/AppShellSmoke.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/subjectTopics.spec.ts
-->

---
### Requirement: Computer principles v2 uses lessonArticle content

Computer Principles v2 content SHALL be represented through existing `lessonArticle` blocks. The app MUST NOT add a runtime raw Markdown renderer for this route.

#### Scenario: Markdown structure is converted to supported blocks

- **WHEN** a Computer Principles v2 topic is loaded from formal app data
- **THEN** the topic contains one `lessonArticle` block
- **AND** the lessonArticle contains non-empty sections converted from the source Markdown headings and content
- **AND** paragraphs, lists, tables, worked calculation steps, and practice explanations from the source Markdown are preserved as supported lessonArticle content blocks

#### Scenario: Raw Markdown renderer is not required

- **WHEN** the v2 route renders a topic
- **THEN** the topic renders through `SubjectTopicPage` and existing lessonArticle block rendering
- **AND** the route does not require fetching or parsing Markdown files at runtime

<!-- @trace
source: computer-principles-v2-route
updated: 2026-06-19
code:
  - _private/MD/計算機概論/01_架構與計算理論.md
  - src/app/router.ts
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - src/shared/components/RouteTabs.vue
  - _private/MD/計算機概論/00_目錄.md
  - src/modules/subjectTopics/types/subjectTopic.ts
  - src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts
  - _private/MD/計算機概論/12_檢查碼-Parity與CRC.md
  - _private/MD/計算機概論_基本計概_彙整版.md
  - _private/MD/計算機概論/03_Pipeline與Hazard.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - src/styles/main.css
  - _private/MD/計算機概論/06_記憶體-階層與分類.md
  - _private/MD/計算機概論/08_進制轉換.md
  - _private/MD/計算機概論/04_效能與RISC-CISC.md
  - src/modules/commonSubjects/components/CommonSubjectSwitcher.vue
  - src/modules/digitalLogic/views/DigitalLogicView.vue
  - _private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md
  - src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/MD/計算機概論/07_記憶體-暫存器與Cache.md
  - _private/discuss.txt
  - src/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/shared/components/RouteSubMenu.vue
  - PROJECT_ARCHITECTURE.md
  - src/modules/operatingSystems/views/OperatingSystemsView.vue
  - _private/MD/計算機概論/09_補數轉換.md
  - _private/MD/計算機概論/02_機器指令與指令週期.md
  - _private/MD/計算機概論/05_匯流排與USB.md
  - src/app/routePreload.ts
  - _private/MD/計算機概論/10_浮點數轉換.md
  - _private/MD/計算機概論/11_數碼與文字碼.md
tests:
  - tests/unit/staleProfessionalContentAudit.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/networkingRouteWorkflow.spec.ts
  - tests/component/ComputerFoundationSubjectSwitcher.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/computerPrinciplesRouteWorkflow.spec.ts
  - tests/unit/informationManagementRouteWorkflow.spec.ts
  - tests/unit/splitComputerPrinciplesRoutes.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/algorithmsRouteWorkflow.spec.ts
  - tests/unit/projectArchitecture.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
-->

---
### Requirement: Floating point conversion topic uses refreshed v2 source

The Computer Principles v2 route SHALL keep the existing `cpv2-floating-point-conversion` topic in the tenth catalog position and SHALL render its learner-facing content from `_private/MD/計算機概論v2/10_浮點數轉換.md`. The topic SHALL keep the title `浮點數轉換`, the `computerPrinciplesV2` subject key, and the existing `/computer-principles-v2` route ownership. The topic SHALL NOT expose the deprecated floating point conversion lesson content as learner-facing content after the refresh.

#### Scenario: Load refreshed floating point conversion topic

- **WHEN** the `computerPrinciplesV2` topic list is loaded
- **THEN** the tenth route-visible topic has id `cpv2-floating-point-conversion`
- **THEN** the topic title is `浮點數轉換`
- **THEN** the topic source files include `_private/MD/計算機概論v2/10_浮點數轉換.md`
- **THEN** the topic lesson article contains refreshed sections for traditional floating point representation, IEEE 754 fields, conversion workflow, reverse conversion, decimal precision, common mistakes, exam answer sentences, and practice exercises
- **THEN** the topic lesson article does not retain deprecated learner-facing wording from the previous floating point conversion source

##### Example: refreshed source coverage

| Required content marker | Expected refreshed topic behavior |
| ----- | ----- |
| `傳統（一般）浮點表示法` | Rendered in a lessonArticle section |
| `IEEE 754 欄位` | Rendered in a lessonArticle section with single and double precision fields |
| `0.1(10) = 0.0001100110011…(2)` | Rendered in the decimal precision explanation |
| `練習 6（兩種表示法對照）` | Rendered in the practice exercise section |

<!-- @trace
source: refresh-cpv2-floating-point-content
updated: 2026-06-21
code:
  - _TMP/reviews/cpv2-floating-point-special-values-practice-review.md
  - _private/discuss.txt
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - src/modules/subjectTopics/components/SubjectTopicPage.vue
  - src/styles/main.css
  - _private/MD/0621/IEEE754_浮點數特殊值_速記.md
tests:
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/professionalTopics.spec.ts
-->

---
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

<!-- @trace
source: add-computer-principles-v2-supplemental-data
updated: 2026-06-22
code:
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/計概補充/計算機概論_重點講義_01.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - PROJECT_ARCHITECTURE.md
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - _private/discuss.txt
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
tests:
  - tests/component/AppShellSmoke.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/subjectTopics.spec.ts
-->