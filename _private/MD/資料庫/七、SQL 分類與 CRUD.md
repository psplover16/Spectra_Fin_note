# SQL 分類與 CRUD

## 目錄

1. SQL 是什麼
2. SQL 的主要分類
3. CRUD 是什麼
4. 查詢語法必練觀念
5. JOIN 與子查詢
6. 彙總函數與限制條件
7. 國考常見考法
8. 易混淆比較表
9. 國考必背整理
10. 容易考的判斷題
11. 考前速記小抄

## SQL 是什麼

結構化查詢語言（Structured Query Language, SQL）是關聯式資料庫（Relational Database）中，用來建立資料表、查詢資料、修改資料、控制權限與管理交易的標準語言。

新手可以先把 SQL 想成「跟資料庫溝通的指令」。資料庫裡有很多資料表（Table），每張資料表像 Excel 工作表一樣，有欄位（Column）與資料列（Row）。SQL 的任務，就是讓我們能夠用明確的語法告訴資料庫：「我要建表」、「我要查資料」、「我要新增一筆資料」、「我要修改或刪除資料」。

在國家考試中，SQL 很常被考成兩種形式：第一種是問分類與指令對應，第二種是給你一段 SQL 語法，要求判斷它在做什麼、屬於哪一類，或執行結果會長什麼樣子。

## SQL 的主要分類

SQL 常見可分成資料定義語言、資料操作語言、資料控制語言、交易控制語言，以及部分教材會獨立列出的資料查詢語言。這些分類是國考必背基本題。

### 1. 資料定義語言（Data Definition Language, DDL）

資料定義語言（Data Definition Language, DDL）是用來定義或修改資料庫結構的 SQL 類別。所謂「結構」，指的是資料表、欄位、索引、檢視表等資料庫物件。

核心想法是：DDL 管的是「資料庫長什麼樣子」，不是某一筆資料的內容。

常見指令如下：

1. 建立（CREATE）：建立資料庫物件，例如建立資料表。
2. 修改（ALTER）：修改既有資料庫物件，例如新增欄位。
3. 刪除（DROP）：刪除整個資料庫物件，例如刪除資料表。
4. 截斷（TRUNCATE）：快速清空資料表中的資料，但保留資料表結構。

範例：

```sql
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
```

這段 SQL 是建立一張 Student 資料表，因此屬於 DDL。

國考常考陷阱是把 `DROP`、`DELETE`、`TRUNCATE` 混在一起。`DROP` 是刪掉整張表的結構，`DELETE` 是刪除資料列，`TRUNCATE` 是清空資料但保留表的結構。

### 2. 資料操作語言（Data Manipulation Language, DML）

資料操作語言（Data Manipulation Language, DML）是用來新增、查詢、修改、刪除資料表中資料的 SQL 類別。

核心想法是：DML 管的是「資料內容本身」。

常見指令如下：

1. 查詢（SELECT）：讀取資料。
2. 新增（INSERT）：新增資料。
3. 更新（UPDATE）：修改資料。
4. 刪除（DELETE）：刪除資料。

範例：

```sql
UPDATE Student
SET name = '王小明'
WHERE student_id = 1;
```

這段 SQL 是修改 Student 資料表中某位學生的姓名，因此屬於 DML。

有些教材會把查詢（SELECT）從 DML 中獨立出來，稱為資料查詢語言（Data Query Language, DQL）。考試遇到這種差異時，要看題目採用哪一套分類；若題目問「CRUD 對應哪些 SQL 指令」，通常 Read 會對應 `SELECT`。

### 3. 資料控制語言（Data Control Language, DCL）

資料控制語言（Data Control Language, DCL）是用來管理資料庫權限的 SQL 類別。

核心想法是：DCL 管的是「誰可以做什麼」。

常見指令如下：

1. 授權（GRANT）：給使用者權限。
2. 撤權（REVOKE）：收回使用者權限。

範例：

```sql
GRANT SELECT ON Student TO user_a;
```

這段 SQL 表示授予 user_a 查詢 Student 資料表的權限，因此屬於 DCL。

國考常考方向是給一個 `GRANT` 或 `REVOKE` 指令，問它屬於 DDL、DML、DCL 或 TCL 哪一類。

### 4. 交易控制語言（Transaction Control Language, TCL）

交易控制語言（Transaction Control Language, TCL）是用來控制交易（Transaction）的 SQL 類別。交易是指一組必須一起成功或一起失敗的資料庫操作。

核心想法是：TCL 管的是「一批操作要不要正式生效」。

常見指令如下：

1. 提交（COMMIT）：確認交易，讓變更正式生效。
2. 復原（ROLLBACK）：取消交易，回到先前狀態。
3. 儲存點（SAVEPOINT）：在交易中設定可回復的中間點。

範例：

```sql
UPDATE Account
SET balance = balance - 1000
WHERE account_id = 'A';

UPDATE Account
SET balance = balance + 1000
WHERE account_id = 'B';

COMMIT;
```

這個例子像是轉帳。扣款與入帳應該一起成功，因此最後用 `COMMIT` 讓整個交易生效。

國考常把 TCL 和 DML 放在一起考。`UPDATE` 是 DML，但 `COMMIT` 和 `ROLLBACK` 是 TCL。

### 5. 資料查詢語言（Data Query Language, DQL）

資料查詢語言（Data Query Language, DQL）是部分教材把 `SELECT` 獨立出來形成的分類。

核心想法是：DQL 專門負責「查資料」。

範例：

```sql
SELECT name
FROM Student
WHERE student_id = 1;
```

這段 SQL 是查詢資料。若題目分類包含 DQL，通常會把它歸為 DQL；若題目只分 DDL、DML、DCL、TCL，則常把 `SELECT` 放在 DML。

## CRUD 是什麼

新增查詢修改刪除（Create Read Update Delete, CRUD）是資料系統中最基本的四種資料操作。它不是只屬於 SQL 的概念，而是幾乎所有資訊系統都會用到的資料維護基本功能。

CRUD 的核心想法是：一個資料系統通常至少要能新增資料、讀取資料、修改資料、刪除資料。

CRUD 與 SQL 指令對應如下：

| CRUD 動作 | 英文 | SQL 指令 | 白話說明 |
|---|---|---|---|
| 新增 | Create | `INSERT` | 新增一筆或多筆資料 |
| 讀取 | Read | `SELECT` | 查詢資料 |
| 修改 | Update | `UPDATE` | 修改既有資料 |
| 刪除 | Delete | `DELETE` | 刪除既有資料 |

範例：

```sql
INSERT INTO Student (student_id, name)
VALUES (1, '王小明');
```

這是 CRUD 中的 Create，因為它用 `INSERT` 新增一筆學生資料。

```sql
SELECT student_id, name
FROM Student;
```

這是 CRUD 中的 Read，因為它用 `SELECT` 查詢學生資料。

```sql
UPDATE Student
SET name = '王大明'
WHERE student_id = 1;
```

這是 CRUD 中的 Update，因為它用 `UPDATE` 修改學生姓名。

```sql
DELETE FROM Student
WHERE student_id = 1;
```

這是 CRUD 中的 Delete，因為它用 `DELETE` 刪除學生資料。

國考考 CRUD 時，通常不會只問英文全名，也會問「Read 對應哪個 SQL 指令」。請記住：Read 不是 `READ` 指令，而是 `SELECT`。

## 查詢語法必練觀念

查詢（SELECT）是 SQL 中最常被實作題與閱讀題考到的部分。除了知道 `SELECT` 是查資料，也要熟悉 `WHERE`、`ORDER BY`、`GROUP BY`、`HAVING` 的用途。

### WHERE

條件篩選（WHERE）是用來篩選符合條件的資料列。

核心想法是：先決定「哪些列要被留下來」。

範例：

```sql
SELECT *
FROM Student
WHERE department = '資訊管理';
```

這會查出系所為資訊管理的學生。

國考常問：`WHERE` 是在分組前使用，還是在分組後使用？答案是分組前。它篩選的是原始資料列。

### ORDER BY

排序（ORDER BY）是用來指定查詢結果的排列順序。

核心想法是：資料查出來之後，要依照某個欄位由小到大或由大到小排列。

範例：

```sql
SELECT name, score
FROM Student
ORDER BY score DESC;
```

這會依分數由高到低排序。`DESC` 表示遞減排序，`ASC` 表示遞增排序，也是預設排序。

### GROUP BY

分組（GROUP BY）是用來把資料依某個欄位分成不同群組，通常會搭配彙總函數（Aggregate Functions）。

核心想法是：先把資料分堆，再對每一堆做統計。

範例：

```sql
SELECT department, COUNT(*) AS student_count
FROM Student
GROUP BY department;
```

這會計算每個系所各有多少學生。

### HAVING

分組後條件篩選（HAVING）是用來篩選分組後的結果。

核心想法是：`WHERE` 篩選原始資料列，`HAVING` 篩選分組統計後的結果。

範例：

```sql
SELECT department, COUNT(*) AS student_count
FROM Student
GROUP BY department
HAVING COUNT(*) >= 10;
```

這會查出學生人數至少 10 人的系所。

國考最愛考 `WHERE` 與 `HAVING` 的差別。看到彙總結果的條件，例如 `COUNT(*) >= 10`，通常要用 `HAVING`。

## JOIN 與子查詢

連接（JOIN）是用來把兩張或多張資料表依共同欄位合併查詢的語法。子查詢（Subquery）則是在一個 SQL 查詢裡面再放另一個查詢。

### INNER JOIN

內部連接（INNER JOIN）只會保留兩張表都符合連接條件的資料。

範例：

```sql
SELECT Student.name, Department.department_name
FROM Student
INNER JOIN Department
ON Student.department_id = Department.department_id;
```

這會查出有對應系所資料的學生與系所名稱。

### LEFT JOIN

左外部連接（LEFT JOIN）會保留左表全部資料，右表若沒有符合資料，則右表欄位會出現空值（NULL）。

範例：

```sql
SELECT Student.name, Department.department_name
FROM Student
LEFT JOIN Department
ON Student.department_id = Department.department_id;
```

即使某學生沒有對應系所資料，只要他在左邊的 Student 表中，仍會被查出。

### RIGHT JOIN

右外部連接（RIGHT JOIN）會保留右表全部資料，左表若沒有符合資料，則左表欄位會出現空值（NULL）。

國考常要求比較 `LEFT JOIN` 與 `RIGHT JOIN`。判斷重點就是「保留哪一邊的全部資料」。

### FULL OUTER JOIN

完全外部連接（FULL OUTER JOIN）會保留左右兩張表的所有資料。若某邊沒有配對成功，另一邊欄位會以空值（NULL）呈現。

核心想法是：不管左表獨有、右表獨有、兩邊都有，都會出現在結果中。

### Subquery、EXISTS 與 IN

子查詢（Subquery）是在查詢中再放入另一個查詢，常用來先找出一批條件，再讓外層查詢使用。

集合包含判斷（IN）是用來判斷某個值是否存在於一組結果中。

存在判斷（EXISTS）是用來判斷子查詢是否至少回傳一筆資料。

範例：

```sql
SELECT name
FROM Student
WHERE department_id IN (
    SELECT department_id
    FROM Department
    WHERE college = '管理學院'
);
```

這會查出屬於管理學院各系所的學生。

國考通常不會要求背誦所有最佳化細節，但要知道 `IN` 重點在「值是否在集合中」，`EXISTS` 重點在「子查詢有沒有資料存在」。

## 彙總函數與限制條件

彙總函數（Aggregate Functions）是用來對多筆資料進行統計計算的函數。限制條件（Constraints）是用來規範資料表中資料必須符合的規則。

### 常見彙總函數

| 函數 | 英文意義 | 用途 |
|---|---|---|
| `COUNT` | Count | 計算筆數 |
| `SUM` | Sum | 計算總和 |
| `AVG` | Average | 計算平均 |
| `MAX` | Maximum | 找最大值 |
| `MIN` | Minimum | 找最小值 |

範例：

```sql
SELECT AVG(score) AS avg_score
FROM Student;
```

這會計算學生分數平均值。

國考常考彙總函數與 `GROUP BY` 的搭配。例如「計算每個部門平均薪資」就會用 `GROUP BY department` 搭配 `AVG(salary)`。

### 常見限制條件

主鍵（Primary Key, PRIMARY KEY）是用來唯一識別資料表中每一筆資料的欄位或欄位組合。主鍵不能重複，也不能是空值。

外鍵（Foreign Key, FOREIGN KEY）是用來建立兩張資料表之間關聯的欄位，通常會參照另一張表的主鍵。

唯一限制（Unique Constraint, UNIQUE）要求欄位值不能重複，但是否允許空值要看資料庫系統規定。

非空限制（Not Null Constraint, NOT NULL）要求欄位一定要有值，不能是空值。

檢查限制（Check Constraint, CHECK）要求欄位值必須符合指定條件。

預設值（Default Value, DEFAULT）是在新增資料時，如果沒有提供該欄位值，就自動填入預設值。

範例：

```sql
CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credit INT CHECK (credit > 0),
    status VARCHAR(20) DEFAULT '開課中'
);
```

這段 SQL 同時使用主鍵、非空限制、檢查限制與預設值。

國考常問哪一種限制可以防止重複、哪一種限制可以維持資料表關聯。防止重複常想到 `PRIMARY KEY` 或 `UNIQUE`；維持表與表之間關聯常想到 `FOREIGN KEY`。

## 國考常見考法

1. 給 SQL 指令，判斷屬於哪一類：例如 `CREATE` 是 DDL，`GRANT` 是 DCL，`COMMIT` 是 TCL。
2. 問 CRUD 對應指令：Create 對應 `INSERT`，Read 對應 `SELECT`，Update 對應 `UPDATE`，Delete 對應 `DELETE`。
3. 比較 `WHERE` 與 `HAVING`：`WHERE` 篩選分組前資料列，`HAVING` 篩選分組後統計結果。
4. 比較不同 JOIN：`INNER JOIN` 只保留配對成功資料，`LEFT JOIN` 保留左表全部資料。
5. 判斷限制條件功能：`PRIMARY KEY` 唯一識別資料列，`FOREIGN KEY` 建立資料表關聯。
6. 看懂彙總查詢：例如 `COUNT` 算筆數，`AVG` 算平均，搭配 `GROUP BY` 做分組統計。

## 易混淆比較表

| 易混淆項目 | 重點差異 | 國考判斷口訣 |
|---|---|---|
| DDL 與 DML | DDL 改結構，DML 改資料內容 | 建表改表刪表是 DDL；增查改刪資料是 DML |
| DCL 與 TCL | DCL 管權限，TCL 管交易 | 看到 `GRANT`、`REVOKE` 想權限；看到 `COMMIT`、`ROLLBACK` 想交易 |
| `DELETE` 與 `DROP` | `DELETE` 刪資料列，`DROP` 刪資料表物件 | 刪資料是 DML；刪結構是 DDL |
| `TRUNCATE` 與 `DELETE` | `TRUNCATE` 快速清空表資料，`DELETE` 可搭配條件刪特定列 | 清空整張表常見 `TRUNCATE` |
| `WHERE` 與 `HAVING` | `WHERE` 分組前篩選，`HAVING` 分組後篩選 | 有彙總條件常用 `HAVING` |
| `PRIMARY KEY` 與 `UNIQUE` | 主鍵唯一且不可空；唯一限制防重複 | 每張表通常用主鍵識別每列 |
| `IN` 與 `EXISTS` | `IN` 看值是否在集合中；`EXISTS` 看子查詢是否有資料 | 一個重值，一個重存在 |

## 國考必背整理

SQL 分類必背如下：

1. 資料定義語言（Data Definition Language, DDL）：`CREATE`、`ALTER`、`DROP`、`TRUNCATE`。
2. 資料操作語言（Data Manipulation Language, DML）：`SELECT`、`INSERT`、`UPDATE`、`DELETE`。
3. 資料控制語言（Data Control Language, DCL）：`GRANT`、`REVOKE`。
4. 交易控制語言（Transaction Control Language, TCL）：`COMMIT`、`ROLLBACK`、`SAVEPOINT`。
5. 資料查詢語言（Data Query Language, DQL）：部分教材將 `SELECT` 獨立歸類為 DQL。

CRUD 對應必背如下：

1. 新增（Create）：`INSERT`。
2. 讀取（Read）：`SELECT`。
3. 修改（Update）：`UPDATE`。
4. 刪除（Delete）：`DELETE`。

查詢語法必背如下：

1. `WHERE`：篩選資料列。
2. `ORDER BY`：排序。
3. `GROUP BY`：分組。
4. `HAVING`：篩選分組後結果。
5. `INNER JOIN`：只保留兩表符合條件的資料。
6. `LEFT JOIN`：保留左表全部資料。
7. `RIGHT JOIN`：保留右表全部資料。
8. `FULL OUTER JOIN`：保留左右兩表全部資料。

## 容易考的判斷題

1. `CREATE TABLE` 屬於資料定義語言（DDL）。  
   答：對。因為它建立資料表結構。

2. `INSERT` 是 CRUD 中的 Read。  
   答：錯。`INSERT` 是 Create，Read 對應 `SELECT`。

3. `GRANT` 與 `REVOKE` 是用來管理權限。  
   答：對。它們屬於資料控制語言（DCL）。

4. `COMMIT` 是用來確認交易正式生效。  
   答：對。它屬於交易控制語言（TCL）。

5. `WHERE` 可以用來篩選 `GROUP BY` 之後的彙總結果。  
   答：錯。分組後彙總結果通常用 `HAVING` 篩選。

6. `LEFT JOIN` 會保留左表所有資料。  
   答：對。右表沒有配對時，右表欄位會出現空值。

7. 主鍵（PRIMARY KEY）可以重複。  
   答：錯。主鍵必須唯一，且不能是空值。

8. 外鍵（FOREIGN KEY）主要用來表示資料表之間的關聯。  
   答：對。外鍵通常參照另一張表的主鍵。

## 考前速記小抄

DDL 是定義結構：`CREATE`、`ALTER`、`DROP`、`TRUNCATE`。

DML 是操作資料：`SELECT`、`INSERT`、`UPDATE`、`DELETE`。

DCL 是控制權限：`GRANT`、`REVOKE`。

TCL 是控制交易：`COMMIT`、`ROLLBACK`、`SAVEPOINT`。

DQL 是查詢資料：有些教材把 `SELECT` 獨立稱為 DQL。

CRUD 記法：Create 用 `INSERT`，Read 用 `SELECT`，Update 用 `UPDATE`，Delete 用 `DELETE`。

查詢順序觀念：先用 `WHERE` 篩資料列，再用 `GROUP BY` 分組，再用 `HAVING` 篩分組結果，最後可用 `ORDER BY` 排序。

JOIN 記法：`INNER JOIN` 要兩邊都有，`LEFT JOIN` 保留左邊，`RIGHT JOIN` 保留右邊，`FULL OUTER JOIN` 兩邊都保留。

限制條件記法：`PRIMARY KEY` 識別每一列，`FOREIGN KEY` 連接兩張表，`UNIQUE` 防重複，`NOT NULL` 防空值，`CHECK` 檢查條件，`DEFAULT` 給預設值。
