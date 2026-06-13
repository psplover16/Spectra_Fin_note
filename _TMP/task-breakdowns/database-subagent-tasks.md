# Database Subagent Tasks

來源限制：第一批只使用 `_private/資料庫.txt`，不得使用 `_private/資料結構與演算法.txt` 或其他未授權來源。

檔名契約：`_TMP/<timestamp>-database-<topic>.md`

Route owner：`/database`

## `database-overview`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-overview.md`
- sourceFiles: `_private/資料庫.txt` lines 1-137
- examOutline: 資料庫總章，涵蓋準備方向、ANSI/SPARC、資料庫基礎、Key、ERD、正規化、SQL、ACID、NoSQL、補充考點。
- memoryPoints: SQL、Key、正規化、ACID、NoSQL/CAP/BASE、ANSI/SPARC 三層架構。
- understandingNotes: 用總章整理本批資料庫 topic 的考法分類，不新增來源外知識。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-overview.md`
- sourceFiles: `_private/資料庫.txt` lines 1-137
- examOutline: 確認所有子 topic 都可追溯到資料庫來源。
- memoryPoints: 檢查是否涵蓋必背、比較、會畫、會寫、必練。
- understandingNotes: 檢查是否誤把總章當成新知識來源，或引入未授權資料。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-overview.md`
- sourceFiles: `_private/資料庫.txt` lines 1-137
- examOutline: 匯入 `/database` 總章入口。
- memoryPoints: 保留重點導覽與各 topic 狀態。
- understandingNotes: 匯入時維持 route owner `/database`，不得改動測試或主流程檔案。

## `database-prep-direction`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-prep-direction.md`
- sourceFiles: `_private/資料庫.txt` lines 3-8
- examOutline: 熟 SQL 語法，多寫歷屆與 SQL 練習題，注意 SQL dialect 與 DBMS 函數差異。
- memoryPoints: 標準 SQL、MySQL、T-SQL、PostgreSQL；練題前確認使用哪種 SQL。
- understandingNotes: 把「會寫 SQL」與「知道語法適用環境」分開說明。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-prep-direction.md`
- sourceFiles: `_private/資料庫.txt` lines 3-8
- examOutline: 檢查是否只描述準備方向，未擴寫到其他資料庫章節。
- memoryPoints: 確認四種 SQL dialect 都有列出。
- understandingNotes: 確認有指出不同 DBMS 可用函數不同。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-prep-direction.md`
- sourceFiles: `_private/資料庫.txt` lines 3-8
- examOutline: 匯入 `/database` 的準備方向 topic。
- memoryPoints: 保留 dialect 警示與練題提醒。
- understandingNotes: 匯入時維持 `pending-draft` 可追溯狀態。

## `database-ansi-sparc`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-ansi-sparc.md`
- sourceFiles: `_private/資料庫.txt` lines 10-30
- examOutline: 會畫三層架構；比較各層對象、內容、特色、例子；必背使用原因與資料獨立性。
- memoryPoints: External view、Conceptual logical schema、Internal storage/index；Logical 與 Physical Data Independence。
- understandingNotes: 說明三層抽象如何降低使用者、邏輯結構與實體儲存的耦合。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-ansi-sparc.md`
- sourceFiles: `_private/資料庫.txt` lines 10-30
- examOutline: 檢查三層架構圖、比較表、資料獨立性是否完整。
- memoryPoints: 確認 External、Conceptual、Internal 定義與例子未混淆。
- understandingNotes: 確認 Logical/Physical Data Independence 的影響層級正確。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-ansi-sparc.md`
- sourceFiles: `_private/資料庫.txt` lines 10-30
- examOutline: 匯入 `/database` 的 ANSI/SPARC topic。
- memoryPoints: 保留三層比較與必背卡片。
- understandingNotes: 匯入時不可新增來源外架構細節。

## `database-foundations`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-foundations.md`
- sourceFiles: `_private/資料庫.txt` lines 32-43
- examOutline: 比較資料庫優缺點與資料庫種類。
- memoryPoints: 優點包含資料共享、降低重複、一致性、權限控管、備份復原、交易管理；缺點包含複雜、成本高、DBA 需求、集中化風險。
- understandingNotes: 用資料模型差異理解階層式、網路式、關聯式、物件導向式、NoSQL。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-foundations.md`
- sourceFiles: `_private/資料庫.txt` lines 32-43
- examOutline: 檢查優缺點與種類兩個比較面是否都存在。
- memoryPoints: 確認五種資料庫種類與優缺點清單未漏項。
- understandingNotes: 確認未引入來源外產品或歷史細節。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-foundations.md`
- sourceFiles: `_private/資料庫.txt` lines 32-43
- examOutline: 匯入 `/database` 的資料庫基礎 topic。
- memoryPoints: 保留優缺點與種類比較。
- understandingNotes: 匯入時維持與後續 Key、ERD、NoSQL topic 的連結關係。

## `database-keys`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-keys.md`
- sourceFiles: `_private/資料庫.txt` lines 45-53
- examOutline: 必背 Super Key、Candidate Key、Primary Key、Alternate Key、Foreign Key、Composite Key。
- memoryPoints: Candidate Key 是最小 super key；Primary 與 Alternate 都來自 candidate key；Foreign Key 參照其他 table primary key。
- understandingNotes: 用唯一識別、最小性、被選用與參照關係區分各種 key。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-keys.md`
- sourceFiles: `_private/資料庫.txt` lines 45-53
- examOutline: 檢查六種 key 是否各有定義。
- memoryPoints: 確認 Candidate Key 與 Super Key 差異、Primary 與 Alternate 差異清楚。
- understandingNotes: 確認 Composite Key 未被誤寫為 foreign key。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-keys.md`
- sourceFiles: `_private/資料庫.txt` lines 45-53
- examOutline: 匯入 `/database` 的 Key topic。
- memoryPoints: 保留 key 定義卡與對照。
- understandingNotes: 匯入時維持可供 ERD 與 SQL constraints topic 參照的基礎說明。

## `database-erd`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-erd.md`
- sourceFiles: `_private/資料庫.txt` lines 55-66
- examOutline: 必背 ERD 基本元素；會做 M:N 關係與多值屬性轉換。
- memoryPoints: Entity、Attribute、Relationship、Cardinality、Weak Entity；M:N 轉關聯表；多值屬性拆新表。
- understandingNotes: 用 Cardinality 決定 schema 轉換，Weak Entity 需依賴其他 entity 識別。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-erd.md`
- sourceFiles: `_private/資料庫.txt` lines 55-66
- examOutline: 檢查基本元素與會做規則都涵蓋。
- memoryPoints: 確認 1:1、1:N、M:N 與 Weak Entity 未漏列。
- understandingNotes: 確認 M:N 與多值屬性的轉換規則正確。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-erd.md`
- sourceFiles: `_private/資料庫.txt` lines 55-66
- examOutline: 匯入 `/database` 的 ERD topic。
- memoryPoints: 保留 ERD 名詞與轉換規則。
- understandingNotes: 匯入時可銜接 Key 與正規化，但不可擴寫來源外範例。

## `database-normalization`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-normalization.md`
- sourceFiles: `_private/資料庫.txt` lines 68-79
- examOutline: 比較 1NF、2NF、3NF、BCNF、4NF；必背正規化優缺點。
- memoryPoints: 1NF 欄位不可再分；2NF 完全相依；3NF 不傳遞相依；BCNF 決定因子都是 candidate key；4NF 處理多值相依。
- understandingNotes: 正規化降低重複與異常，但增加 table 與 join 成本。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-normalization.md`
- sourceFiles: `_private/資料庫.txt` lines 68-79
- examOutline: 檢查五個 normal form 與優缺點是否完整。
- memoryPoints: 確認 2NF、3NF、BCNF、4NF 的相依概念未混淆。
- understandingNotes: 確認有呈現正規化利弊取捨。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-normalization.md`
- sourceFiles: `_private/資料庫.txt` lines 68-79
- examOutline: 匯入 `/database` 的正規化 topic。
- memoryPoints: 保留 normal form ladder 與異常清單。
- understandingNotes: 匯入時維持與 ERD、Key topic 的概念連結。

## `database-sql-crud`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-sql-crud.md`
- sourceFiles: `_private/資料庫.txt` lines 81-101
- examOutline: 必背 DDL、DML、DCL、TCL、DQL；會寫 CRUD；必練查詢、join、subquery、aggregate functions、constraints。
- memoryPoints: CRUD 對應 INSERT、SELECT、UPDATE、DELETE；JOIN 包含 INNER、LEFT、RIGHT、FULL OUTER；constraints 包含 PRIMARY KEY、FOREIGN KEY、UNIQUE、NOT NULL、CHECK、DEFAULT。
- understandingNotes: SQL 分類對應定義、操作、控制、交易與查詢；CRUD 是基本資料操作。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-sql-crud.md`
- sourceFiles: `_private/資料庫.txt` lines 81-101
- examOutline: 檢查分類、CRUD、必練清單三部分是否都完成。
- memoryPoints: 確認 SQL 指令與分類對應正確，JOIN 與 constraints 未漏項。
- understandingNotes: 確認沒有依特定 DBMS 擴寫來源外語法。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-sql-crud.md`
- sourceFiles: `_private/資料庫.txt` lines 81-101
- examOutline: 匯入 `/database` 的 SQL 分類與 CRUD topic。
- memoryPoints: 保留分類表、CRUD 對應與必練清單。
- understandingNotes: 匯入時可標成練習優先 topic，但不修改測試或主流程檔案。

## `database-acid-transactions`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-acid-transactions.md`
- sourceFiles: `_private/資料庫.txt` lines 103-114
- examOutline: 必背 ACID；補充 Dirty Read、Non-repeatable Read、Phantom Read。
- memoryPoints: Atomicity 全做或全不做；Consistency 維持一致；Isolation 並行隔離；Durability 提交後永久保存。
- understandingNotes: 隔離性問題要用可觀察現象區分，不只背名詞。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-acid-transactions.md`
- sourceFiles: `_private/資料庫.txt` lines 103-114
- examOutline: 檢查 ACID 四項與三種隔離問題都存在。
- memoryPoints: 確認 Atomicity、Consistency、Isolation、Durability 中文說明正確。
- understandingNotes: 確認 Dirty Read、Non-repeatable Read、Phantom Read 的現象沒有互換。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-acid-transactions.md`
- sourceFiles: `_private/資料庫.txt` lines 103-114
- examOutline: 匯入 `/database` 的 ACID 與交易 topic。
- memoryPoints: 保留交易特性卡與隔離問題比較。
- understandingNotes: 匯入時維持與 SQL TCL 的概念連結。

## `database-nosql`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-nosql.md`
- sourceFiles: `_private/資料庫.txt` lines 116-128
- examOutline: 比較 NoSQL 類型；辨析 NoSQL；連結 CAP theorem 與 BASE 特性。
- memoryPoints: Key-Value/Redis、Document/MongoDB、Column-Family/Cassandra、Graph/Neo4j；NoSQL 是 Not Only SQL；CAP 與 BASE 展開。
- understandingNotes: NoSQL 類型依資料模型與適用情境區分，CAP/BASE 說明分散式資料庫取捨。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-nosql.md`
- sourceFiles: `_private/資料庫.txt` lines 116-128
- examOutline: 檢查四種 NoSQL 類型、NoSQL 意義、CAP、BASE 是否完整。
- memoryPoints: 確認產品例子與類型對應正確。
- understandingNotes: 確認沒有把 NoSQL 誤寫為完全不用 SQL。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-nosql.md`
- sourceFiles: `_private/資料庫.txt` lines 116-128
- examOutline: 匯入 `/database` 的 NoSQL topic。
- memoryPoints: 保留類型比較、例子、CAP/BASE 記憶區塊。
- understandingNotes: 匯入時不要擴寫來源外分散式系統細節。

## `database-supplemental-topics`

### Generator task

- outputFile: `_TMP/<timestamp>-database-database-supplemental-topics.md`
- sourceFiles: `_private/資料庫.txt` lines 130-137
- examOutline: 補充 Index、View、Stored Procedure、Trigger、SQL Injection。
- memoryPoints: Index 加速查詢但增加寫入與維護成本；View 是虛擬表；Stored Procedure 是資料庫端預先定義程序；Trigger 於資料變更時自動觸發。
- understandingNotes: SQL Injection 防範包含 prepared statement、parameterized query、權限最小化、輸入驗證。

### Verifier task

- inputFile: `_TMP/<timestamp>-database-database-supplemental-topics.md`
- sourceFiles: `_private/資料庫.txt` lines 130-137
- examOutline: 檢查五個補充考點是否完整。
- memoryPoints: 確認 Index 代價、View 用途、Stored Procedure、Trigger、SQL Injection 防範方式未漏。
- understandingNotes: 確認安全防護重點沒有被簡化成只做輸入驗證。

### Import task

- inputFile: `_TMP/<timestamp>-database-database-supplemental-topics.md`
- sourceFiles: `_private/資料庫.txt` lines 130-137
- examOutline: 匯入 `/database` 的資料庫補充考點 topic。
- memoryPoints: 保留補充考點速查與 SQL Injection 防護。
- understandingNotes: 匯入時維持第一批來源限制，且不修改測試或主流程檔案。
