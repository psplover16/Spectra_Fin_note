# Database Manifest

來源檔案：`_private/資料庫.txt`

Route owner：`/database`

Status policy：本檔 topic 初始狀態皆為 `pending-draft`。

| Topic id | Title | Source section | Status | Route owner | 預估 block structure |
| --- | --- | --- | --- | --- | --- |
| `database-overview` | 資料庫總章 | `_private/資料庫.txt` lines 1-137 | `pending-draft` | `/database` | chapter overview, exam priority map, topic navigation, source guard |
| `database-prep-direction` | 準備方向 | `_private/資料庫.txt` lines 3-8 | `pending-draft` | `/database` | prep checklist, SQL dialect warning, practice workflow, self-check prompts |
| `database-ansi-sparc` | ANSI/SPARC 架構 | `_private/資料庫.txt` lines 10-30 | `pending-draft` | `/database` | three-level diagram, comparison table, data independence cards, exam recall block |
| `database-foundations` | 資料庫基礎 | `_private/資料庫.txt` lines 32-43 | `pending-draft` | `/database` | pros-cons comparison, database model taxonomy, model examples, quick quiz |
| `database-keys` | Key | `_private/資料庫.txt` lines 45-53 | `pending-draft` | `/database` | key hierarchy, definition cards, contrast examples, relation integrity notes |
| `database-erd` | ERD | `_private/資料庫.txt` lines 55-66 | `pending-draft` | `/database` | ERD vocabulary, cardinality matrix, conversion rules, weak entity note |
| `database-normalization` | 正規化 | `_private/資料庫.txt` lines 68-79 | `pending-draft` | `/database` | normal form ladder, dependency comparison, anomaly examples, tradeoff summary |
| `database-sql-crud` | SQL 分類與 CRUD | `_private/資料庫.txt` lines 81-101 | `pending-draft` | `/database` | SQL category table, CRUD mapping, practice syntax list, constraints block |
| `database-acid-transactions` | ACID 與交易 | `_private/資料庫.txt` lines 103-114 | `pending-draft` | `/database` | ACID cards, transaction guarantee map, isolation problem comparison, recall check |
| `database-nosql` | NoSQL | `_private/資料庫.txt` lines 116-128 | `pending-draft` | `/database` | NoSQL type comparison, example database map, CAP/BASE memory block, misconception warning |
| `database-supplemental-topics` | 資料庫補充考點 | `_private/資料庫.txt` lines 130-137 | `pending-draft` | `/database` | feature glossary, cost-benefit notes, SQL injection defense block, final drill |

## Topic Notes

### `database-overview`

- Title: 資料庫總章
- Source section: `_private/資料庫.txt` lines 1-137
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Chapter overview：列出本章 10 個子主題。
  - Exam priority map：標示必背、比較、會畫、會寫、必練。
  - Topic navigation：導向各子 topic。
  - Source guard：註明第一批只使用 `_private/資料庫.txt`。

### `database-prep-direction`

- Title: 準備方向
- Source section: `_private/資料庫.txt` lines 3-8
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Prep checklist：SQL、歷屆、練習題。
  - SQL dialect warning：標準 SQL、MySQL、T-SQL、PostgreSQL 差異。
  - Practice workflow：練題時先確認 DBMS。
  - Self-check prompts：能否辨識 dialect 與可用函數。

### `database-ansi-sparc`

- Title: ANSI/SPARC 架構
- Source section: `_private/資料庫.txt` lines 10-30
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Three-level diagram：External、Conceptual、Internal。
  - Comparison table：對象、內容、特色、例子。
  - Data independence cards：Logical 與 Physical data independence。
  - Exam recall block：為何使用三層架構。

### `database-foundations`

- Title: 資料庫基礎
- Source section: `_private/資料庫.txt` lines 32-43
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Pros-cons comparison：資料共享、一致性、成本、集中化風險。
  - Database model taxonomy：階層式、網路式、關聯式、物件導向式、NoSQL。
  - Model examples：各模型資料結構與適用直覺。
  - Quick quiz：優缺點與種類配對。

### `database-keys`

- Title: Key
- Source section: `_private/資料庫.txt` lines 45-53
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Key hierarchy：Super Key、Candidate Key、Primary Key、Alternate Key。
  - Definition cards：Foreign Key、Composite Key。
  - Contrast examples：最小性、被選用與未被選用。
  - Relation integrity notes：外鍵參照與多欄識別。

### `database-erd`

- Title: ERD
- Source section: `_private/資料庫.txt` lines 55-66
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - ERD vocabulary：Entity、Attribute、Relationship、Cardinality、Weak Entity。
  - Cardinality matrix：1:1、1:N、M:N。
  - Conversion rules：M:N 轉關聯表、多值屬性拆新表。
  - Weak entity note：依賴識別與外鍵設計。

### `database-normalization`

- Title: 正規化
- Source section: `_private/資料庫.txt` lines 68-79
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Normal form ladder：1NF、2NF、3NF、BCNF、4NF。
  - Dependency comparison：完全相依、傳遞相依、決定因子、多值相依。
  - Anomaly examples：更新、插入、刪除異常。
  - Tradeoff summary：降低重複與 join 成本。

### `database-sql-crud`

- Title: SQL 分類與 CRUD
- Source section: `_private/資料庫.txt` lines 81-101
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - SQL category table：DDL、DML、DCL、TCL、DQL。
  - CRUD mapping：INSERT、SELECT、UPDATE、DELETE。
  - Practice syntax list：WHERE、ORDER BY、GROUP BY、HAVING、JOIN、Subquery、EXISTS、IN。
  - Constraints block：PRIMARY KEY、FOREIGN KEY、UNIQUE、NOT NULL、CHECK、DEFAULT。

### `database-acid-transactions`

- Title: ACID 與交易
- Source section: `_private/資料庫.txt` lines 103-114
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - ACID cards：Atomicity、Consistency、Isolation、Durability。
  - Transaction guarantee map：交易全做或全不做、一致、隔離、永久保存。
  - Isolation problem comparison：Dirty Read、Non-repeatable Read、Phantom Read。
  - Recall check：名詞與現象配對。

### `database-nosql`

- Title: NoSQL
- Source section: `_private/資料庫.txt` lines 116-128
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - NoSQL type comparison：Key-Value、Document、Column-Family、Graph。
  - Example database map：Redis、MongoDB、Cassandra、Neo4j。
  - CAP/BASE memory block：CAP 與 BASE 展開。
  - Misconception warning：NoSQL 是 Not Only SQL。

### `database-supplemental-topics`

- Title: 資料庫補充考點
- Source section: `_private/資料庫.txt` lines 130-137
- Status: `pending-draft`
- Route owner: `/database`
- 預估 block structure:
  - Feature glossary：Index、View、Stored Procedure、Trigger。
  - Cost-benefit notes：Index 查詢加速與寫入維護成本。
  - SQL injection defense block：prepared statement、parameterized query、權限最小化、輸入驗證。
  - Final drill：補充考點快速配對。
