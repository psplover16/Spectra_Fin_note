# 資料庫 4：SQL 分類 + CRUD 基礎語法 ★

> 科目：資料庫｜★ 你朋友最強調「語法要熟」，從頭教。
> 學習方式：分類屬【硬背】；**CRUD 語法屬【練流程】，務必跟著敲、再去刷題**。
> 基本 CRUD 在標準 SQL／MySQL／T-SQL **大同小異**；差異主要在「函數」（朋友提醒過），先把核心打穩。

---

## 一、SQL 三大指令分類　【硬背】

| 類別 | 全名 | 管什麼 | 主要指令 |
|---|---|---|---|
| **DDL** | Data **Definition** Language | **定義結構**（表的架構） | `CREATE`、`ALTER`、`DROP`、`TRUNCATE` |
| **DML** | Data **Manipulation** Language | **操作資料**（表的內容） | `INSERT`、`UPDATE`、`DELETE`、`SELECT` |
| **DCL** | Data **Control** Language | **控制權限** | `GRANT`（授權）、`REVOKE`（收回） |

> 補充：`SELECT` 有時獨立叫 **DQL（查詢）**；`COMMIT`／`ROLLBACK` 屬 **TCL（交易控制）**，下一篇 ACID 會講。

**易混（常考）**：
- **DELETE**（DML）：刪「資料列」，可加 WHERE、可 **rollback 復原**。
- **TRUNCATE**（DDL）：**清空整表資料**、保留結構，**快、通常不可 rollback**。
- **DROP**（DDL）：**整張表（含結構）刪掉**。

---

## 二、先建一張表（DDL：CREATE）　【練流程】

```sql
CREATE TABLE Students (
    id    INT          PRIMARY KEY,   -- 主鍵
    name  VARCHAR(50),                -- 字串（最多 50 字）
    age   INT,                        -- 整數
    dept  VARCHAR(50)
);
```
- 常見型別：`INT`（整數）、`VARCHAR(n)`（變動長度字串）、`DATE`（日期）、`DECIMAL`（小數）。

---

## 三、CRUD 語法（核心！）★　【練流程】

**CRUD ＝ 增查改刪**，對應四個 SQL 指令：

| CRUD | SQL | 作用 |
|---|---|---|
| **Create 增** | `INSERT` | 新增資料列 |
| **Read 查** | `SELECT` | 查詢資料 |
| **Update 改** | `UPDATE` | 修改資料 |
| **Delete 刪** | `DELETE` | 刪除資料列 |

### C — INSERT（新增）
```sql
INSERT INTO Students (id, name, age, dept)
VALUES (1, '張三', 20, '資工');
```

### R — SELECT（查詢，最常用）
```sql
SELECT * FROM Students;                    -- 查所有欄位
SELECT name, age FROM Students;            -- 只查指定欄位
SELECT * FROM Students WHERE age >= 20;    -- 加條件（WHERE）
SELECT * FROM Students WHERE dept = '資工';
```
- `*` 代表「所有欄位」；`WHERE` 加篩選條件。

### U — UPDATE（修改）
```sql
UPDATE Students
SET age = 21
WHERE id = 1;        -- ⚠ 一定要加 WHERE！
```

### D — DELETE（刪除）
```sql
DELETE FROM Students
WHERE id = 1;        -- ⚠ 一定要加 WHERE！
```

### ⚠⚠ 最重要的安全提醒
**UPDATE 和 DELETE 沒加 `WHERE`，會動到「整張表的每一列」！**
```sql
DELETE FROM Students;       -- 全部刪光！
UPDATE Students SET age = 0; -- 全部都被改成 0！
```
> 寫題目／實務時，先想清楚 WHERE 條件再執行。

---

## 四、重點整理（背這張）

- 三分類：**DDL 定義結構（CREATE／ALTER／DROP／TRUNCATE）、DML 操作資料（INSERT／UPDATE／DELETE／SELECT）、DCL 控權限（GRANT／REVOKE）**。
- DELETE（可 rollback、逐列）vs TRUNCATE（清空快、保留結構）vs DROP（連表刪掉）。
- **CRUD**：`INSERT` 增、`SELECT` 查、`UPDATE` 改、`DELETE` 刪。
- 基本語法：`SELECT 欄位 FROM 表 WHERE 條件`、`INSERT INTO 表(...) VALUES(...)`、`UPDATE 表 SET 欄=值 WHERE ...`、`DELETE FROM 表 WHERE ...`。
- **UPDATE／DELETE 必加 WHERE**，否則整表遭殃。
