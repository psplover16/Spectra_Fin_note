# computer-principles-v2-route Specification

## Purpose

TBD - created by archiving change 'computer-principles-v2-route'. Update Purpose after archive.

## Requirements

### Requirement: Computer principles v2 route uses catalog-backed topics

The app SHALL expose an independent Computer Principles v2 route at `/computer-principles-v2`. The route SHALL render a professional subject topic page titled `計概(v2)`, SHALL use the `computerPrinciplesV2` subject key, and SHALL use a progress namespace separate from `computerPrinciples`.

#### Scenario: Open the v2 route directly

- **WHEN** the user opens `/computer-principles-v2`
- **THEN** the app renders a subject topic page titled `計概(v2)`
- **AND** the page uses the `computerPrinciplesV2` subject key for topic progress
- **AND** the page test id is `subject-view-computer-principles-v2`

#### Scenario: Route-visible topic list excludes the catalog file

- **WHEN** the `computerPrinciplesV2` route topics are resolved
- **THEN** the route-visible list contains exactly 13 topics from Markdown files `01` through `13`
- **AND** the route-visible list does not contain a topic for `_private/MD/計算機概論/00_目錄.md`
- **AND** every returned topic has visible learner-facing lessonArticle content


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
### Requirement: Computer principles v2 titles follow the catalog manifest

The app SHALL use `_private/MD/計算機概論/00_目錄.md` as the title and order manifest for Computer Principles v2 topics. Topic titles SHALL come from the catalog `篇名` column and MUST NOT include filename sequence prefixes or H1 chapter prefixes.

#### Scenario: Topic titles and order match the catalog

- **WHEN** the `computerPrinciplesV2` topic list is loaded
- **THEN** the topic titles appear in the same order as catalog rows `01` through `13`
- **AND** the topic titles match the catalog `篇名` values exactly

##### Example: catalog title mapping

| Position | Source file | Expected title |
| ----- | ----- | ----- |
| 1 | `_private/MD/計算機概論/01_架構與計算理論.md` | `架構與計算理論` |
| 2 | `_private/MD/計算機概論/02_機器指令與指令週期.md` | `機器指令與指令週期` |
| 3 | `_private/MD/計算機概論/03_Pipeline與Hazard.md` | `Pipeline 與 Hazard` |
| 4 | `_private/MD/計算機概論/04_效能與RISC-CISC.md` | `效能與 RISC／CISC` |
| 5 | `_private/MD/計算機概論/05_匯流排與USB.md` | `匯流排與 USB` |
| 6 | `_private/MD/計算機概論/06_記憶體-階層與分類.md` | `記憶體（一）階層與分類` |
| 7 | `_private/MD/計算機概論/07_記憶體-暫存器與Cache.md` | `記憶體（二）暫存器與 Cache` |
| 8 | `_private/MD/計算機概論/08_進制轉換.md` | `進制轉換` |
| 9 | `_private/MD/計算機概論/09_補數轉換.md` | `補數轉換` |
| 10 | `_private/MD/計算機概論/10_浮點數轉換.md` | `浮點數轉換` |
| 11 | `_private/MD/計算機概論/11_數碼與文字碼.md` | `數碼與文字碼` |
| 12 | `_private/MD/計算機概論/12_檢查碼-Parity與CRC.md` | `檢查碼（一）Parity 與 CRC` |
| 13 | `_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md` | `檢查碼（二）漢明碼與漢明距` |

#### Scenario: Sequence prefixes are not displayed as topic titles

- **WHEN** the v2 route renders topic cards
- **THEN** no topic title starts with `00_`, `01_`, `02_`, `基本計概 01：`, or `基本計概 02：`
- **AND** the first visible topic title is `架構與計算理論`


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

<!-- @trace
source: add-cpv2-floating-special-values-practice
updated: 2026-06-21
code:
  - _private/discuss.txt
  - _TMP/reviews/cpv2-floating-point-special-values-practice-review.md
  - src/modules/subjectTopics/components/SubjectTopicPage.vue
  - _private/MD/0621/IEEE754_浮點數特殊值_速記.md
  - src/styles/main.css
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
tests:
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
-->