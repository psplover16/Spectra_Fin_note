## ADDED Requirements

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
