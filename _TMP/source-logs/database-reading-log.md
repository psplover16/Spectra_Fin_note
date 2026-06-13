# Database Source Reading Log

來源檔案：`_private/資料庫.txt`

讀取範圍：完整讀取本檔，不使用 `_private/資料結構與演算法.txt` 或其他資料庫外部來源。

## Heading 01: 5. 資料庫

- Source section: `_private/資料庫.txt` lines 1-137
- Topic id: `database-overview`

### 考試大綱

- 本章涵蓋資料庫準備方向、ANSI/SPARC、資料庫基礎、Key、ERD、正規化、SQL、ACID、NoSQL 與補充考點。
- 核心考法混合記憶、比較、作圖、SQL 實作與概念辨析。

### 記憶重點

- SQL 語法與 CRUD 是高優先準備項。
- Key、正規化、ACID、NoSQL/CAP/BASE 都是必背或易混淆主題。
- ANSI/SPARC 三層架構要能畫圖並說明資料獨立性。

### 理解重點

- 本章不是單純背名詞，應把資料模型、資料操作、交易可靠性與系統設計取捨連在一起。
- 關聯式資料庫主軸是 schema、key、ERD、正規化與 SQL；NoSQL 主軸是資料模型與分散式系統取捨。

## Heading 02: 一、準備方向

- Source section: `_private/資料庫.txt` lines 3-8
- Topic id: `database-prep-direction`

### 考試大綱

- 熟練 SQL 語法。
- 多寫歷屆與練習題。
- 注意不同 SQL dialect 與 DBMS 函數差異。

### 記憶重點

- SQL dialect 包含標準 SQL、MySQL、T-SQL、PostgreSQL。
- 練題時要先辨識題目或環境使用哪一種 SQL。

### 理解重點

- SQL 基本語法雖共通，但函數、日期處理、字串處理與部分語法會因 DBMS 而異。
- 備考時應把「能寫出正確查詢」和「知道該 SQL 在哪個 DBMS 可用」分開檢查。

## Heading 03: 二、ANSI/SPARC 架構

- Source section: `_private/資料庫.txt` lines 10-30
- Topic id: `database-ansi-sparc`

### 考試大綱

- 會畫 External、Conceptual、Internal 三層架構。
- 比較各層對象、內容、特色與例子。
- 必背使用原因與資料獨立性。

### 記憶重點

- External Level：使用者或應用看到的 view。
- Conceptual Level：整體資料庫邏輯結構。
- Internal Level：實體儲存方式與索引。
- Logical Data Independence：概念層改變不影響外部層。
- Physical Data Independence：內部儲存改變不影響概念層。

### 理解重點

- 三層架構用抽象化隔離使用者視角、邏輯 schema 與實體儲存。
- External 可有多個 view，用來隱藏不必要資料；Conceptual 提供全資料庫一致邏輯描述；Internal 關注檔案組織、索引與存取路徑。
- 資料獨立性是降低耦合的具體效果。

## Heading 04: 三、資料庫基礎

- Source section: `_private/資料庫.txt` lines 32-43
- Topic id: `database-foundations`

### 考試大綱

- 比較資料庫優缺點。
- 比較常見資料庫種類。

### 記憶重點

- 優點：資料共享、降低重複、維持一致性、權限控管、備份復原、交易管理。
- 缺點：系統複雜、成本高、DBA 需求、集中化風險。
- 種類：階層式、網路式、關聯式、物件導向式、NoSQL。

### 理解重點

- 資料庫的價值來自集中管理與一致性，但代價是複雜度、成本與集中化風險。
- 不同資料庫模型反映不同資料關係：樹狀、圖狀、table、object、key-value/document/column-family/graph。

## Heading 05: 四、Key

- Source section: `_private/資料庫.txt` lines 45-53
- Topic id: `database-keys`

### 考試大綱

- 必背各種 key 的定義與差異。

### 記憶重點

- Super Key：可唯一識別 tuple 的屬性集合。
- Candidate Key：最小 super key。
- Primary Key：被選為主要識別的 candidate key。
- Alternate Key：未被選為 primary key 的 candidate key。
- Foreign Key：參照其他 table primary key 的欄位。
- Composite Key：由多個欄位組成的 key。

### 理解重點

- Super Key 到 Candidate Key 的差異在於是否最小化。
- Primary Key 與 Alternate Key 都來自 candidate key，只是是否被選作主要識別。
- Foreign Key 連接表與表，Composite Key 則處理單欄不足以識別的情境。

## Heading 06: 五、ERD

- Source section: `_private/資料庫.txt` lines 55-66
- Topic id: `database-erd`

### 考試大綱

- 必背 ERD 基本元素。
- 會做 M:N 關係與多值屬性的轉換。

### 記憶重點

- Entity：實體。
- Attribute：屬性。
- Relationship：關係。
- Cardinality：1:1、1:N、M:N。
- Weak Entity：依賴其他 entity 才能識別。
- M:N 關係通常需轉成關聯表。
- 多值屬性通常拆成新表。

### 理解重點

- ERD 是把現實概念轉成資料庫 schema 前的建模語言。
- Cardinality 決定轉表方式；M:N 不能直接放在兩張表中，通常要加入關聯表。
- Weak Entity 的識別依賴強 entity，設計時要注意外鍵與識別關係。

## Heading 07: 六、正規化

- Source section: `_private/資料庫.txt` lines 68-79
- Topic id: `database-normalization`

### 考試大綱

- 比較 1NF、2NF、3NF、BCNF、4NF。
- 必背正規化優缺點。

### 記憶重點

- 1NF：欄位不可再分，避免重複群組。
- 2NF：符合 1NF，且非 key 屬性完全相依於整個 candidate key。
- 3NF：符合 2NF，且非 key 屬性不傳遞相依於 key。
- BCNF：每個決定因子都是 candidate key。
- 4NF：處理多值相依。
- 優點：降低資料重複，避免更新、插入、刪除異常。
- 缺點：table 增多、join 成本提高、查詢可能較複雜。

### 理解重點

- 正規化的主線是逐步消除重複與異常，代價是 schema 拆分後查詢更需要 join。
- 2NF 針對部分相依，3NF 針對傳遞相依，BCNF 強化決定因子限制，4NF 處理多值相依。

## Heading 08: 七、SQL 分類與 CRUD

- Source section: `_private/資料庫.txt` lines 81-101
- Topic id: `database-sql-crud`

### 考試大綱

- 必背 SQL 分類。
- 會寫 CRUD。
- 必練查詢條件、排序、分組、join、subquery、aggregate functions 與 constraints。

### 記憶重點

- DDL：CREATE、ALTER、DROP、TRUNCATE。
- DML：SELECT、INSERT、UPDATE、DELETE。
- DCL：GRANT、REVOKE。
- TCL：COMMIT、ROLLBACK、SAVEPOINT。
- DQL：部分教材把 SELECT 獨立為 Data Query Language。
- CRUD：Create/INSERT、Read/SELECT、Update/UPDATE、Delete/DELETE。
- 必練：WHERE、ORDER BY、GROUP BY、HAVING、各式 JOIN、Subquery、EXISTS、IN、COUNT/SUM/AVG/MAX/MIN、PRIMARY KEY、FOREIGN KEY、UNIQUE、NOT NULL、CHECK、DEFAULT。

### 理解重點

- SQL 分類可用「定義資料結構、操作資料、控制權限、控制交易、查詢資料」來理解。
- CRUD 是資料操作的最小實作面；進階查詢能力來自條件、分組、join、子查詢與彙總函數。
- Constraints 是資料完整性的防線，和 key、schema 設計密切相關。

## Heading 09: 八、ACID 與交易

- Source section: `_private/資料庫.txt` lines 103-114
- Topic id: `database-acid-transactions`

### 考試大綱

- 必背 ACID 四特性。
- 補充隔離性問題。

### 記憶重點

- Atomicity：交易全做或全不做。
- Consistency：交易前後資料庫維持一致。
- Isolation：並行交易彼此隔離。
- Durability：提交後永久保存。
- Dirty Read：讀到未提交資料。
- Non-repeatable Read：同一筆資料重讀結果不同。
- Phantom Read：同一查詢條件重查出現新增或消失的列。

### 理解重點

- ACID 描述交易可靠性的四個面向：完整執行、一致狀態、並行隔離與提交持久。
- Dirty Read、Non-repeatable Read、Phantom Read 都是隔離不足的可觀察問題，但發生條件與現象不同。

## Heading 10: 九、NoSQL

- Source section: `_private/資料庫.txt` lines 116-128
- Topic id: `database-nosql`

### 考試大綱

- 比較 Key-Value、Document、Column-Family、Graph。
- 辨析 NoSQL 的意思。
- 連結 CAP theorem 與 BASE 特性。

### 記憶重點

- Key-Value：例如 Redis，速度快。
- Document：例如 MongoDB，適合 JSON 類資料。
- Column-Family：例如 Cassandra，適合大量分散式資料。
- Graph：例如 Neo4j，適合關係網路。
- NoSQL 是 Not Only SQL，不代表不用 SQL。
- CAP：Consistency、Availability、Partition Tolerance。
- BASE：Basically Available、Soft state、Eventual consistency。

### 理解重點

- NoSQL 類型要從資料存取模式理解：快取鍵值、文件結構、分散式寬欄、關係網路。
- CAP/BASE 常用來說明分散式資料庫在一致性、可用性與分割容忍之間的取捨。

## Heading 11: 十、資料庫補充考點

- Source section: `_private/資料庫.txt` lines 130-137
- Topic id: `database-supplemental-topics`

### 考試大綱

- 補充 Index、View、Stored Procedure、Trigger、SQL Injection。

### 記憶重點

- Index：提高查詢速度，但增加寫入與維護成本。
- View：虛擬表，可簡化查詢與控管權限。
- Stored Procedure：資料庫端預先定義程序。
- Trigger：資料變更時自動觸發。
- SQL Injection：將惡意 SQL 插入輸入欄位。
- 防範 SQL Injection：prepared statement、parameterized query、權限最小化、輸入驗證。

### 理解重點

- Index、View、Stored Procedure、Trigger 都是資料庫功能面補充，常考用途與代價。
- SQL Injection 是安全風險，防護重點是讓輸入資料不能被當成 SQL 指令執行，並限制資料庫權限影響範圍。
