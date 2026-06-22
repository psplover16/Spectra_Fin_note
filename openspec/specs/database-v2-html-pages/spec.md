# database-v2-html-pages Specification

## Purpose

TBD - created by archiving change 'add-database-v2-html-pages'. Update Purpose after archive.

## Requirements

### Requirement: Database v2 lists imported HTML lessons

The Database v2 list page SHALL contain exactly one entry for each HTML file copied from `_private/資料庫`. Entries SHALL be ordered by source filename in ascending order. Each displayed title SHALL strip the leading `國考資料庫_<sequence>_` filename segment and the `.html` extension while preserving the remaining title text. Each entry SHALL link to the copied static HTML asset under the app base URL at `database-v2/<original filename>`.

#### Scenario: Database v2 renders the imported lesson inventory

- **WHEN** the user opens `/database-v2`
- **THEN** the page displays 13 lesson entries
- **AND** the lesson entries appear in the same order as the source HTML filenames
- **AND** the displayed lesson titles do not include `國考資料庫_01_`, `國考資料庫_05B_`, `國考資料庫_05C_`, or any other source sequence prefix

##### Example: imported lesson order

| Source filename | Displayed title |
| ----- | ----- |
| `國考資料庫_01_ANSI-SPARC三層架構.html` | `ANSI-SPARC三層架構` |
| `國考資料庫_02_資料庫優缺點與種類.html` | `資料庫優缺點與種類` |
| `國考資料庫_03_Key鍵.html` | `Key鍵` |
| `國考資料庫_04_ERD實體關係圖.html` | `ERD實體關係圖` |
| `國考資料庫_05_正規化.html` | `正規化` |
| `國考資料庫_05B_函數相依與阿姆斯壯公理.html` | `函數相依與阿姆斯壯公理` |
| `國考資料庫_05C_正規化逐步練習.html` | `正規化逐步練習` |
| `國考資料庫_06_SQL三大指令分類.html` | `SQL三大指令分類` |
| `國考資料庫_07_資料定義與資料庫物件.html` | `資料定義與資料庫物件` |
| `國考資料庫_08_SQL_CRUD語法.html` | `SQL_CRUD語法` |
| `國考資料庫_09_SQL查詢功能.html` | `SQL查詢功能` |
| `國考資料庫_10_ACID交易特性.html` | `ACID交易特性` |
| `國考資料庫_11_NoSQL.html` | `NoSQL` |


<!-- @trace
source: add-database-v2-html-pages
updated: 2026-06-22
code:
  - public/database-v2/國考資料庫_06_SQL三大指令分類.html
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/原文.txt
  - _private/計概補充/計算機概論_重點講義_01.md
  - _private/資料庫/國考資料庫_08_NoSQL.html
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - public/database-v2/國考資料庫_02_資料庫優缺點與種類.html
  - public/database-v2/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_07_ACID交易特性.html
  - src/modules/databaseSubjects/components/DatabaseSubjectSwitcher.vue
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - public/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html
  - public/database-v2/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_10_SQL查詢功能.html
  - public/database-v2/國考資料庫_03_Key鍵.html
  - public/database-v2/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - src/modules/databaseV2/data/databaseV2Pages.ts
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
  - _private/整理.txt
  - src/app/router.ts
  - public/database-v2/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - public/database-v2/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - public/database-v2/國考資料庫_05_正規化.html
  - public/database-v2/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/discuss.txt
  - src/app/routePreload.ts
  - public/database-v2/國考資料庫_07_資料定義與資料庫物件.html
  - src/shared/components/RouteTabs.vue
  - PROJECT_ARCHITECTURE.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - src/modules/databaseV2/views/DatabaseV2View.vue
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - public/database-v2/國考資料庫_11_NoSQL.html
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_09_SQL_CRUD語法.html
tests:
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/databaseV2Pages.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/e2e/professional-routes-interaction.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/professionalTopics.spec.ts
-->

---
### Requirement: Database v2 list rows preserve topic controls

Each Database v2 list entry SHALL use the same row structure as a professional topic header: a bookmark control on the left, an activatable title control in the center, and a completion control on the right. Bookmark and completion interactions SHALL persist only under the `databaseV2` progress namespace. Activating the center title control SHALL navigate to the corresponding copied HTML page and MUST NOT expand inline detail content on the list page.

#### Scenario: List row controls update database v2 progress

- **WHEN** the user toggles the bookmark control for `SQL查詢功能`
- **THEN** the app records `SQL查詢功能` as the bookmarked Database v2 lesson
- **AND** existing `database` route bookmark state remains unchanged
- **WHEN** the user toggles the completion control for `SQL查詢功能`
- **THEN** the app records the corresponding Database v2 lesson id as completed under `databaseV2`
- **AND** existing `database` route completed topic ids remain unchanged

#### Scenario: Activating the title opens the copied HTML lesson

- **WHEN** the user activates the title control for `SQL查詢功能`
- **THEN** the browser opens the copied static page for `國考資料庫_09_SQL查詢功能.html`
- **AND** the Database v2 list page does not expand an inline detail panel for that lesson


<!-- @trace
source: add-database-v2-html-pages
updated: 2026-06-22
code:
  - public/database-v2/國考資料庫_06_SQL三大指令分類.html
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/原文.txt
  - _private/計概補充/計算機概論_重點講義_01.md
  - _private/資料庫/國考資料庫_08_NoSQL.html
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - public/database-v2/國考資料庫_02_資料庫優缺點與種類.html
  - public/database-v2/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_07_ACID交易特性.html
  - src/modules/databaseSubjects/components/DatabaseSubjectSwitcher.vue
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - public/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html
  - public/database-v2/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_10_SQL查詢功能.html
  - public/database-v2/國考資料庫_03_Key鍵.html
  - public/database-v2/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - src/modules/databaseV2/data/databaseV2Pages.ts
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
  - _private/整理.txt
  - src/app/router.ts
  - public/database-v2/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - public/database-v2/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - public/database-v2/國考資料庫_05_正規化.html
  - public/database-v2/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/discuss.txt
  - src/app/routePreload.ts
  - public/database-v2/國考資料庫_07_資料定義與資料庫物件.html
  - src/shared/components/RouteTabs.vue
  - PROJECT_ARCHITECTURE.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - src/modules/databaseV2/views/DatabaseV2View.vue
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - public/database-v2/國考資料庫_11_NoSQL.html
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_09_SQL_CRUD語法.html
tests:
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/databaseV2Pages.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/e2e/professional-routes-interaction.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/professionalTopics.spec.ts
-->

---
### Requirement: Copied HTML pages preserve layout with a return control

Each copied Database v2 HTML page SHALL remain a standalone `zh-Hant` HTML document with its original embedded styles and learner-facing body content preserved. The toolbar's left title label SHALL be replaced with a return button. Activating the return button SHALL navigate to the previous browser history entry; if no previous entry is available, it SHALL navigate to `/database-v2`.

#### Scenario: HTML page keeps original lesson layout and returns to the list

- **WHEN** the user opens the copied static page for `國考資料庫_01_ANSI-SPARC三層架構.html` from `/database-v2`
- **THEN** the page retains its original typography, colors, tables, diagrams, and recitation toggle behavior
- **AND** the toolbar left side contains a return button instead of the original title label
- **WHEN** the user activates the return button
- **THEN** the browser returns to `/database-v2`

<!-- @trace
source: add-database-v2-html-pages
updated: 2026-06-22
code:
  - public/database-v2/國考資料庫_06_SQL三大指令分類.html
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/原文.txt
  - _private/計概補充/計算機概論_重點講義_01.md
  - _private/資料庫/國考資料庫_08_NoSQL.html
  - _private/資料庫/國考資料庫_03_Key鍵.html
  - _private/資料庫/國考資料庫_10_ACID交易特性.html
  - public/database-v2/國考資料庫_02_資料庫優缺點與種類.html
  - public/database-v2/國考資料庫_10_ACID交易特性.html
  - _private/資料庫/國考資料庫_01_ANSI-SPARC三層架構.html
  - _private/資料庫/國考資料庫_07_ACID交易特性.html
  - src/modules/databaseSubjects/components/DatabaseSubjectSwitcher.vue
  - _private/資料庫/國考資料庫_04_ERD實體關係圖.html
  - public/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html
  - public/database-v2/國考資料庫_09_SQL查詢功能.html
  - _private/資料庫/國考資料庫_10_SQL查詢功能.html
  - public/database-v2/國考資料庫_03_Key鍵.html
  - public/database-v2/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - src/modules/databaseV2/data/databaseV2Pages.ts
  - _private/計概補充/計算機概論_重點講義_02_資料表示.md
  - _private/整理.txt
  - src/app/router.ts
  - public/database-v2/國考資料庫_08_SQL_CRUD語法.html
  - _private/資料庫/國考資料庫_09_SQL查詢功能.html
  - _private/計概補充/計算機概論_重點講義_03_數位邏輯.md
  - public/database-v2/國考資料庫_04_ERD實體關係圖.html
  - _private/資料庫/國考資料庫_06_SQL三大指令分類.html
  - src/modules/databaseSubjects/config/databaseSubjectOptions.ts
  - _private/資料庫/國考資料庫_07_資料定義與資料庫物件.html
  - _private/資料庫/國考資料庫_05B_函數相依與阿姆斯壯公理.html
  - public/database-v2/國考資料庫_05_正規化.html
  - public/database-v2/國考資料庫_05C_正規化逐步練習.html
  - _private/資料庫/國考資料庫_05_正規化.html
  - _private/discuss.txt
  - src/app/routePreload.ts
  - public/database-v2/國考資料庫_07_資料定義與資料庫物件.html
  - src/shared/components/RouteTabs.vue
  - PROJECT_ARCHITECTURE.md
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - src/modules/databaseV2/views/DatabaseV2View.vue
  - _private/資料庫/國考資料庫_05C_正規化逐步練習.html
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/資料庫/國考資料庫_02_資料庫優缺點與種類.html
  - _private/資料庫/國考資料庫_08_SQL_CRUD語法.html
  - public/database-v2/國考資料庫_11_NoSQL.html
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/資料庫/國考資料庫_11_NoSQL.html
  - _private/資料庫/國考資料庫_09_SQL_CRUD語法.html
tests:
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/databaseV2Pages.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/e2e/professional-routes-interaction.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/professionalTopics.spec.ts
-->