# 資料庫 5：SQL 查詢進階 ★

> 科目：資料庫｜★ 刷題真正會用到的部分。
> 學習方式：全是【練流程】，跟著敲、再去刷歷屆與「面試 SQL 100 題」。

---

## 一、WHERE 常用運算子　【練流程】

| 類型 | 運算子 | 例 |
|---|---|---|
| 比較 | `=`、`<>`（不等）、`>`、`<`、`>=`、`<=` | `WHERE age >= 20` |
| 邏輯 | `AND`、`OR`、`NOT` | `WHERE age > 18 AND dept = '資工'` |
| 範圍 | `BETWEEN a AND b` | `WHERE age BETWEEN 18 AND 22` |
| 集合 | `IN (v1, v2…)` | `WHERE dept IN ('資工','電機')` |
| 模糊 | `LIKE`（`%` 任意多字、`_` 單一字） | `WHERE name LIKE '張%'`（姓張） |
| 空值 | `IS NULL` / `IS NOT NULL` | `WHERE dept IS NULL` |

> ⚠ 判斷空值要用 **`IS NULL`**，**不能寫 `= NULL`**（NULL 不能用 = 比較）。

---

## 二、排序 ORDER BY　【練流程】
```sql
SELECT * FROM Students ORDER BY age DESC;            -- 年齡由大到小
SELECT * FROM Students ORDER BY dept ASC, age DESC;  -- 先依系(升)、同系再依年齡(降)
```
- `ASC` 升序（預設）、`DESC` 降序。

---

## 三、聚合函數　【練流程】

| 函數 | 作用 |
|---|---|
| `COUNT()` | 計數（幾筆） |
| `SUM()` | 總和 |
| `AVG()` | 平均 |
| `MAX()` / `MIN()` | 最大 / 最小 |

```sql
SELECT COUNT(*) FROM Students;          -- 共幾人
SELECT AVG(age) FROM Students;          -- 平均年齡
```
> `COUNT(*)` 算所有列；`COUNT(欄位)` **不算該欄位為 NULL 的列**。

---

## 四、分組 GROUP BY + HAVING　【練流程】

- **GROUP BY**：把資料**依某欄位分組**，通常配聚合函數（對每組算）。
- **HAVING**：對**分組後**的結果做篩選。

```sql
-- 算「每個系」有幾人
SELECT dept, COUNT(*) AS 人數
FROM Students
GROUP BY dept;

-- 只看「人數 > 5」的系
SELECT dept, COUNT(*) AS 人數
FROM Students
GROUP BY dept
HAVING COUNT(*) > 5;
```

### ⚠ WHERE vs HAVING（超常考）
| | 篩選時機 | 能用聚合函數嗎 |
|---|---|---|
| **WHERE** | **分組前**篩選「列」 | ❌ 不行 |
| **HAVING** | **分組後**篩選「組」 | ✅ 可以 |

---

## 五、JOIN 表的連接（最重要）★　【練流程】

把**多張表**依關聯（通常**外鍵 ＝ 主鍵**）結合查詢。

**範例兩張表**：
```
Students                 Departments
id | name | dept_id      dept_id | dept_name
1  | 張三 | 10           10      | 資工
2  | 李四 | 20           20      | 電機
3  | 王五 | NULL         30      | 機械
```

```sql
SELECT s.name, d.dept_name
FROM Students s
JOIN Departments d ON s.dept_id = d.dept_id;
```

| JOIN 種類 | 結果 |
|---|---|
| **INNER JOIN** | 只取**兩表都有對應**的（交集） |
| **LEFT JOIN** | **左表全留**，右表沒對應補 NULL |
| **RIGHT JOIN** | **右表全留**，左表沒對應補 NULL |
| **FULL JOIN** | **兩表都留**，沒對應補 NULL |

**用上面資料對照**：
- **INNER**：張三-資工、李四-電機（王五沒系、機械沒人 → 都不出現）
- **LEFT**（保留所有學生）：張三-資工、李四-電機、**王五-NULL**
- **RIGHT**（保留所有系）：張三-資工、李四-電機、**NULL-機械**

> （另有 `CROSS JOIN` ＝ 笛卡爾積，每列配每列。）

---

## 六、補充：SQL 邏輯執行順序　【理解】

查詢實際的邏輯順序（不是你寫的順序）：
> **FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**

> 這解釋了為什麼 **WHERE 不能用 SELECT 取的別名**（WHERE 比 SELECT 早執行）。

---

## 七、重點整理（背這張）

- WHERE 運算子：`BETWEEN`、`IN`、`LIKE`（`%`／`_`）、**`IS NULL`（不能用 = NULL）**。
- `ORDER BY` 排序（ASC／DESC）；聚合 `COUNT／SUM／AVG／MAX／MIN`。
- **GROUP BY 分組、HAVING 篩選組**；**WHERE 分組前篩列（不能用聚合）、HAVING 分組後篩組（可用聚合）**。
- **JOIN**：INNER（交集）、LEFT（左全留）、RIGHT（右全留）、FULL（都留）。
- 執行順序：**FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY**。
