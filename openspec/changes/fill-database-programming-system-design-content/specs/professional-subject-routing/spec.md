## ADDED Requirements

### Requirement: System Design subject route

The app SHALL expose System Design as a professional subject route with the stable path `/system-design`. The route SHALL render the professional subject topic page with the title `系統設計`, and the route SHALL use the `systemDesign` subject key for topic progress.

#### Scenario: Navigate to system design route

- **WHEN** the user opens `/system-design`
- **THEN** the app renders a professional subject topic page titled `系統設計`
- **AND** the page uses the `systemDesign` subject key for topic progress

#### Scenario: System design route participates in primary preload registry

- **WHEN** primary route component preloading is requested
- **THEN** `/system-design` is included in the primary route path registry
- **AND** the preload registry resolves the system design route component without error

### Requirement: Imported Markdown topics appear first in source order

The Database, Programming, and System Design professional subject routes SHALL expose the imported Markdown-backed topics before any existing skeleton or legacy professional topics for the same subject. The imported topics SHALL follow each source folder's natural filename order.

#### Scenario: Database route starts with six imported topics

- **WHEN** the Database route topic list is resolved
- **THEN** the first six visible topics use the Database Markdown sources in natural filename order
- **AND** any pre-existing Database skeleton topics remain after the imported topic batch

##### Example: Database source order

| Position | Required source file |
| ----- | ----- |
| 1 | `_private/MD/資料庫/資料庫_1_基礎概念與架構.md` |
| 2 | `_private/MD/資料庫/資料庫_2_鍵與ERD.md` |
| 3 | `_private/MD/資料庫/資料庫_3_正規化.md` |
| 4 | `_private/MD/資料庫/資料庫_4_SQL分類與CRUD.md` |
| 5 | `_private/MD/資料庫/資料庫_5_SQL查詢進階.md` |
| 6 | `_private/MD/資料庫/資料庫_6_交易ACID與NoSQL.md` |

#### Scenario: Programming route starts with seven imported topics

- **WHEN** the Programming route topic list is resolved
- **THEN** the first seven visible topics use the Programming Markdown sources in natural filename order
- **AND** any pre-existing Programming skeleton topics remain after the imported topic batch

##### Example: Programming source order

| Position | Required source file |
| ----- | ----- |
| 1 | `_private/MD/程式設計/程式設計_1_語言執行方式與程式基礎.md` |
| 2 | `_private/MD/程式設計/程式設計_2_函式與參數傳遞.md` |
| 3 | `_private/MD/程式設計/程式設計_3_陣列字串與例外處理.md` |
| 4 | `_private/MD/程式設計/程式設計_4_指標.md` |
| 5 | `_private/MD/程式設計/程式設計_5_物件導向OOP.md` |
| 6 | `_private/MD/程式設計/程式設計_6_遞迴.md` |
| 7 | `_private/MD/程式設計/程式設計_7_各語言特性.md` |

#### Scenario: System design route exposes five imported topics

- **WHEN** the System Design route topic list is resolved
- **THEN** the visible topics use the System Design Markdown sources in natural filename order
- **AND** the route exposes five visible imported topics

##### Example: System design source order

| Position | Required source file |
| ----- | ----- |
| 1 | `_private/MD/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md` |
| 2 | `_private/MD/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md` |
| 3 | `_private/MD/系統分析與設計/系統分析與設計_3_OO關係與UML.md` |
| 4 | `_private/MD/系統分析與設計/系統分析與設計_4_測試.md` |
| 5 | `_private/MD/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md` |

### Requirement: Programming route excludes system design imported topics

The Programming route SHALL NOT expose imported System Design Markdown topics as visible Programming topics. The System Design route SHALL own the imported topics from `_private/MD/系統分析與設計/`.

#### Scenario: Programming route does not display system design sources

- **WHEN** the Programming route topic list is resolved
- **THEN** no visible Programming topic has a source file under `_private/MD/系統分析與設計/`
- **AND** the System Design route contains the imported topics from `_private/MD/系統分析與設計/`
