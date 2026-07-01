# SQL CRUD 語法（Create · Read · Update · Delete）

> 科目：資料庫 SQL｜CRUD 是操作資料的四個基本動作，選擇題與程式題都常考。把 `INSERT／SELECT／UPDATE／DELETE` 寫熟，並牢記「UPDATE／DELETE 一定要加 WHERE」。
>
> 學習方式：四個動作的對應（SQL／HTTP）屬【理解】；語法骨架、`DECIMAL(p,s)` 讀法、取捨函式、各系統方言差異屬【硬背】。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「CRUD 四個操作分別對應哪些 SQL 指令？又對應 REST API 的哪些 HTTP 方法？」
> 2. 「執行 `UPDATE` 或 `DELETE` 時**忘了寫 WHERE**，會發生什麼事？」
> 3. 「儲存金額應該用 `DECIMAL` 還是 `FLOAT`？為什麼？」

先別急著往下看答案，試著自己回答看看。

---

## 🤔 先想想

給你三個直覺：

- 建好表之後（見「資料定義與資料庫物件」），資料的一生就是四個動作：**放進去、查出來、改、刪** = CRUD。
- `UPDATE`／`DELETE` 的 **WHERE 就是「範圍開關」**——沒寫等於「對全表動手」。
- 金額、成績這種「不能有誤差」的數字，要用**精確**型別，而不是**近似**的浮點數。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、CRUD 概說

**CRUD** 是資料持久化的四個基本操作，對應 SQL 指令與 REST API 的 HTTP 方法：

| 操作 | CRUD | SQL | HTTP（REST） |
|---|---|---|---|
| 新增 | **C**reate | INSERT | POST |
| 查詢 | **R**ead | SELECT | GET |
| 修改 | **U**pdate | UPDATE | PUT／PATCH |
| 刪除 | **D**elete | DELETE | DELETE |

💡 **PUT vs PATCH（常考細分）**：`PUT` 是「**整筆替換**」（送出完整資源、未給的欄位視同清空，具**冪等性**）；`PATCH` 是「**部分更新**」（只送要改的欄位）。嚴格對應：整筆更新用 PUT、局部更新用 PATCH。

### 二、Create：INSERT（新增）

語法：`INSERT INTO 表 (欄位…) VALUES (值…);`

```sql
INSERT INTO students (id, name, gpa)
VALUES ('S01', '王小明', 3.85);
```

說明：欄位與值需**一一對應**；若所有欄位都給值，可省略前面的欄位清單。

### 三、Read：SELECT（查詢）

語法：`SELECT 欄位 FROM 表 WHERE 條件 ORDER BY 欄位;`

```sql
SELECT name, gpa
FROM students
WHERE gpa >= 3.5
ORDER BY gpa DESC;
```

常用子句：**WHERE** 篩選、**ORDER BY** 排序（ASC／DESC）、**GROUP BY** 分組、**HAVING** 分組後篩選；`SELECT *` 表示所有欄位。

### 四、Update：UPDATE（修改）

語法：`UPDATE 表 SET 欄位 = 值 WHERE 條件;`

```sql
UPDATE students
SET gpa = 3.90
WHERE id = 'S01';
```

⚠️ **警告**：若**省略 WHERE**，會修改「**整張表所有列**」！這是最常見的事故。

### 五、Delete：DELETE（刪除）

語法：`DELETE FROM 表 WHERE 條件;`

```sql
DELETE FROM students
WHERE id = 'S01';
```

⚠️ **警告**：若**省略 WHERE**，會刪除「**整張表所有列**」（但保留表結構；對比 `DROP` 連結構一起刪）。

### 六、小數（數值）的處理

**（一）小數的資料型別**

- **`DECIMAL(p, s)`／`NUMERIC(p, s)`**：**精確**小數。p = 總位數（precision）、s = 小數位數（scale）。例 `DECIMAL(5,2)` 可存 −999.99 ～ 999.99。**★金額、成績用這個。**
- **`FLOAT`／`REAL`／`DOUBLE`**：**近似**浮點數，有捨入誤差，**不適合**精確金額。

```sql
CREATE TABLE products (
  id    INT,
  price DECIMAL(8, 2)   -- 6 位整數 ＋ 2 位小數，最大 999999.99
);
```

**（二）為什麼金額要用 DECIMAL**

FLOAT 是二進位浮點數，像 `0.1 + 0.2` 可能不剛好等於 `0.3`，會有微小誤差；**DECIMAL 精確儲存**，不會有此問題。

**（三）取捨／四捨五入函式**

- `ROUND(x, n)`：四捨五入到 n 位小數。`ROUND(3.14159, 2)` → 3.14。
- `TRUNCATE(x, n)`／`TRUNC`：**無條件捨去**到 n 位。`TRUNCATE(3.149, 2)` → 3.14。
- `CEILING(x)`：無條件進位到整數；`FLOOR(x)`：無條件捨去到整數。

```sql
SELECT ROUND(price * 1.05, 2) AS price_tax
FROM products;
```

💡 **`DECIMAL(p,s)` 怎麼讀**：`DECIMAL(8,2)` = 「總共 8 位數字、其中 2 位在小數點後」→ 最大 999999.99。要精確就用 DECIMAL，別用 FLOAT。

### 七、不同系統的方言差異

SQL 有標準（ANSI／ISO），核心 CRUD 幾乎共通；常見差異如下（同一件事、各家寫法不同）：

| 功能 | MySQL | SQL Server | Oracle |
|---|---|---|---|
| **自動編號** | AUTO_INCREMENT | IDENTITY | SEQUENCE／IDENTITY |
| **取前 N 筆** | LIMIT n | TOP n | FETCH FIRST n ROWS ONLY／ROWNUM |
| **字串連接** | CONCAT() | ＋ 或 CONCAT() | \|\| 或 CONCAT |
| **小數無條件捨去** | TRUNCATE(x,d) | ROUND(x,d,1) | TRUNC(x,d) |

標準 SQL：取前 N 筆用 `FETCH FIRST n ROWS ONLY`；字串連接用 `||`。

---

## ✅ 回到題目：解答

1. **CRUD 對應** → Create=`INSERT`（HTTP POST）、Read=`SELECT`（GET）、Update=`UPDATE`（PUT／PATCH）、Delete=`DELETE`（DELETE）。
2. **UPDATE／DELETE 忘了 WHERE** → 會對**整張表所有列**動手：`UPDATE` 改掉全部、`DELETE` 刪光全部（保留表結構）。這是高頻事故。
3. **金額用 DECIMAL 還是 FLOAT？** → 用 **`DECIMAL(p,s)`**（精確儲存）；`FLOAT` 是二進位近似浮點，會有像 `0.1+0.2≠0.3` 的誤差，不適合金額。

---

## 📌 重點整理

- **CRUD ↔ SQL**：Create=INSERT、Read=SELECT、Update=UPDATE、Delete=DELETE。
- **CRUD ↔ HTTP**：POST／GET／PUT（PATCH）／DELETE。
- `UPDATE`／`DELETE` 務必加 **WHERE**，否則影響全表。
- 精確小數用 **`DECIMAL(p,s)`**（p＝總位數、s＝小數位數）；金額勿用 FLOAT。
- 取捨函式：`ROUND`（四捨五入）、`TRUNC／TRUNCATE`（無條件捨去）、`CEILING`（進位）、`FLOOR`（捨去）。

---

## ⚠️ 常見陷阱

- **`UPDATE`／`DELETE` 省略 WHERE 會影響全表**——高頻陷阱，作答與實作都要提醒。
- **金額別用 FLOAT**：浮點數有捨入誤差，要用 `DECIMAL(p,s)`／`NUMERIC(p,s)`。
- `DELETE` 只刪資料、**保留表結構**；`DROP` 連結構一起刪，別混。
- **方言差異**：取前 N 筆 MySQL 用 `LIMIT`、SQL Server 用 `TOP`、Oracle 用 `ROWNUM`／`FETCH FIRST`；標準 SQL 用 `FETCH FIRST n ROWS ONLY`。
- `ROUND` 是四捨五入、`TRUNC` 是無條件捨去，兩者結果可能不同，別搞混。

---

## 📝 練習題（含解答）

**Q1.** 寫一段 SQL，把 `students` 表中學號 `S02` 的 `gpa` 改成 3.60。若不小心漏掉 WHERE 會怎樣？
<details><summary>看解答</summary>

```sql
UPDATE students
SET gpa = 3.60
WHERE id = 'S02';
```
若**漏掉 `WHERE id = 'S02'`**，會把**整張表所有學生**的 gpa 都改成 3.60。UPDATE／DELETE 一定要記得加 WHERE。
</details>

**Q2.** CRUD 的「Read」對應哪個 SQL 指令、哪個 HTTP 方法？
<details><summary>看解答</summary>

Read → SQL 的 `SELECT`、HTTP 的 `GET`。
</details>

**Q3.** `ROUND(3.149, 2)` 與 `TRUNCATE(3.149, 2)` 結果各是多少？差別在哪？
<details><summary>看解答</summary>

`ROUND(3.149, 2)` = **3.15**（四捨五入，第 3 位小數 9 進位）；`TRUNCATE(3.149, 2)` = **3.14**（無條件捨去，直接砍掉多餘位數）。ROUND 會進位、TRUNC 不會。
</details>

**Q4.** 為什麼像銀行帳戶餘額這種金額欄位不能用 FLOAT？
<details><summary>看解答</summary>

FLOAT 是二進位浮點數，無法精確表示某些十進位小數，例如 `0.1 + 0.2` 可能不剛好等於 `0.3`，會有微小誤差，累積起來會出錯。金額要用 **`DECIMAL(p,s)`／`NUMERIC(p,s)`** 精確儲存。
</details>

**Q5.** 要「取查詢結果的前 10 筆」，MySQL、SQL Server、Oracle、標準 SQL 各怎麼寫？
<details><summary>看解答</summary>

MySQL：`LIMIT 10`；SQL Server：`TOP 10`；Oracle：`FETCH FIRST 10 ROWS ONLY`（或用 `ROWNUM`）；標準 SQL：`FETCH FIRST 10 ROWS ONLY`。這是常見的方言差異題。
</details>
