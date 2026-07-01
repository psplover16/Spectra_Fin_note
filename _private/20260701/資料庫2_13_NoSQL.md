# NoSQL（含 CAP／BASE）

> 科目：資料庫｜NoSQL 是關聯式資料庫之外的一大家族，搭配 **CAP 定理**與 **BASE** 是近年熱門考點。它回答的是「當資料量爆炸、結構多變時，傳統關聯式做不到的，怎麼辦」。
>
> 學習方式：**NoSQL 四型與代表系統**、**CAP 三選二**、**BASE 三組成**屬【硬背】；**為何 P 通常必選**、**ACID vs BASE 是光譜**屬【理解】。

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「**NoSQL** 全名是什麼？它分成哪**四種類型**，各舉一個代表系統？」
> 2. 「**CAP 定理**的三者是什麼？為什麼實務上 **P 通常必選**，取捨落在誰跟誰之間？」
> 3. 「**BASE** 三個組成是什麼？它與關聯式的 **ACID** 有何不同取向？」

先自己想想再往下看。

## 🤔 先想想

- 關聯式資料庫（RDBMS）強在「結構嚴謹、交易可靠」，但遇到**海量、非結構化、要快速加機器擴充**的場景就吃力——NoSQL 就是為此而生。
- 分散式系統一定會遇到**網路分區（節點間斷線）**，所以「三選二」的取捨，其實是「已經被迫選了 P，剩下在 C 與 A 之間挑」。
- **ACID 重強一致、BASE 重高可用**，不是誰對誰錯，而是**依場景取捨**的光譜兩端。

帶著這三點，我們來拆解。

## 📖 觀念拆解

### 一、定義與興起背景

**NoSQL（Not Only SQL，非關聯式資料庫）** 泛指有別於傳統關聯式資料庫的資料庫。隨著 Web 2.0 與大數據時代，資料量龐大、結構多變，關聯式資料庫在**水平擴展**與**非結構化資料**處理上受限，NoSQL 因而興起。

特色：**彈性綱要（schema-less）、易水平擴展、高可用**。

> 💡 「彈性綱要（schema-less）」＝不必先把欄位、型別全部定死；不同筆資料可以有不同欄位，適合結構常變的內容。

### 二、NoSQL 四種類型

| 類型 | 儲存方式 | 代表系統 | 適用情境 |
|---|---|---|---|
| **鍵值型** Key-Value | 鍵—值對 | Redis、DynamoDB | 快取、session |
| **文件型** Document | 文件（JSON／BSON） | MongoDB、CouchDB | 內容管理、彈性綱要 |
| **欄位型** Column-family | 欄位族 | Cassandra、HBase | 大數據、時序資料 |
| **圖形型** Graph | 節點與邊（關係） | Neo4j | 社群網路、推薦系統 |

> 💡 記法：**鍵值**像字典（一個 key 拿一個 value）；**文件**像一份 JSON 檔；**欄位族**適合超大量、按欄存取；**圖形**專門處理「關係」（誰認識誰、誰推薦誰）。

### 三、CAP 定理

**CAP 定理**指出，分散式系統**無法同時滿足**下列三者，最多取其二：

- **一致性 Consistency**：所有節點同一時間看到相同資料。
- **可用性 Availability**：每個請求都能得到回應。
- **分區容錯 Partition tolerance**：網路分區（節點間斷線）時系統仍可運作。

由於分散式系統的網路分區難以避免，**P 通常為必選**，實際取捨落在 **C 與 A** 之間：

- **CP（重一致性）**：如 MongoDB、HBase。
- **AP（重可用性）**：如 Cassandra、DynamoDB。
- **CA（不容忍分區）**：僅單機／傳統 RDBMS 適用。

> 💡 **為何不能全拿？** 當分區（斷線）發生時：要嘛**拒絕部分請求**以保持一致（犧牲 A），要嘛**繼續服務但可能回傳舊資料**（犧牲 C），無法兩全。

> 💡 **CAP 的 C ≠ ACID 的 C（易混）**：CAP 的一致性指「**各節點看到相同資料**」（分散式同步）；ACID 的一致性指「**符合完整性限制的合法狀態**」。同一個字、兩種意思，別混。

### 四、BASE 與 ACID 的對比

NoSQL 多採 **BASE**，與關聯式的 **ACID** 相對：

- **Basically Available（基本可用）**：系統保證可用性。
- **Soft state（軟狀態）**：狀態允許隨時間變化（即使沒有新輸入）。
- **Eventually consistent（最終一致）**：在無新更新下，系統**最終**會達到一致。

對比：**ACID 重強一致**（RDBMS）；**BASE 重高可用＋最終一致**（NoSQL）。

> 💡 **ACID vs BASE 是光譜**：一端是銀行等級的**強一致（ACID）**，一端是社群動態這種可接受短暫不一致、以換取**高可用（BASE）**。依場景取捨，不是非黑即白。

### 五、NoSQL vs 關聯式（RDBMS）

| 維度 | 關聯式 RDBMS | NoSQL |
|---|---|---|
| **資料模型** | 表格（固定綱要） | 鍵值／文件／欄位／圖（彈性綱要） |
| **擴展方式** | 垂直擴展 Scale-up | 水平擴展 Scale-out |
| **一致性** | 強一致（ACID） | 最終一致（BASE） |
| **查詢** | SQL | 各家 API |
| **適用** | 結構化、交易嚴謹 | 大量、非結構化、高擴展 |

> 💡 **Scale-up vs Scale-out**：垂直擴展＝把一台機器升級（加 CPU／記憶體）；水平擴展＝多加幾台機器一起分攤。NoSQL 擅長後者，所以能應付超大流量。

## ✅ 回到題目：解答

1. **NoSQL 全名與四型？** → **Not Only SQL**（非關聯式）。四型：**鍵值**（Redis／DynamoDB）、**文件**（MongoDB／CouchDB）、**欄位**（Cassandra／HBase）、**圖形**（Neo4j）。
2. **CAP 三者與取捨？** → **Consistency 一致性／Availability 可用性／Partition tolerance 分區容錯**，三選二。因網路分區難免，**P 通常必選**，取捨落在 **C 與 A**（CP 或 AP）。
3. **BASE 三組成與 vs ACID？** → **Basically Available／Soft state／Eventually consistent**。ACID 重**強一致**（RDBMS）、BASE 重**高可用＋最終一致**（NoSQL）。

## 📌 重點整理

- **NoSQL = Not Only SQL**；特色：彈性綱要、水平擴展、高可用。
- **四型＋代表系統**：鍵值（Redis／DynamoDB）、文件（MongoDB／CouchDB）、欄位（Cassandra／HBase）、圖形（Neo4j）。
- **CAP**：Consistency／Availability／Partition tolerance，三選二；**P 通常必選**，取捨在 C 與 A。
- **CP＝MongoDB／HBase、AP＝Cassandra／DynamoDB、CA＝傳統 RDBMS**。
- **BASE**：Basically Available／Soft state／Eventually consistent，與 ACID 相對。
- **擴展方式**：NoSQL **水平擴展（scale-out）**、RDBMS **垂直擴展（scale-up）**。

## ⚠️ 常見陷阱

- **NoSQL 不是「No SQL」**，而是 **Not Only SQL**（非只用 SQL）。
- **CAP 是三選二**，且**實務幾乎一定含 P**，所以真正在挑的是 CP 還是 AP。
- **CP／AP 代表系統別記反**：MongoDB／HBase 偏 CP；Cassandra／DynamoDB 偏 AP；CA 只有單機／傳統 RDBMS。
- **BASE 對應 NoSQL、ACID 對應 RDBMS**，且 BASE 是「最終一致」不是「立刻一致」。
- **擴展方式別記反**：NoSQL 是 scale-out（水平、多加機器）、RDBMS 是 scale-up（垂直、單機升級）。

## 📝 練習題（含解答）

**Q1.** NoSQL 全名是什麼？它分成哪四種類型，各舉一個代表系統與適用情境？
<details><summary>看解答</summary>

全名 **Not Only SQL**（非關聯式）。四型：鍵值型（Redis／DynamoDB，用於快取、session）、文件型（MongoDB／CouchDB，用於內容管理、彈性綱要）、欄位型（Cassandra／HBase，用於大數據、時序資料）、圖形型（Neo4j，用於社群網路、推薦系統）。
</details>

**Q2.** CAP 定理的三者是什麼？為什麼 P 通常必選？取捨落在誰與誰之間？
<details><summary>看解答</summary>

一致性 Consistency、可用性 Availability、分區容錯 Partition tolerance，三者最多取其二。因為分散式系統的網路分區（斷線）難以避免，所以 **P 通常必選**，實際取捨落在 **C 與 A**（即選 CP 或 AP）。
</details>

**Q3.** MongoDB、HBase、Cassandra、DynamoDB 各偏向 CP 還是 AP？
<details><summary>看解答</summary>

**CP（重一致性）**：MongoDB、HBase。**AP（重可用性）**：Cassandra、DynamoDB。（CA 則僅單機／傳統 RDBMS 適用。）
</details>

**Q4.** BASE 的三個組成是什麼？與 ACID 的取向有何不同？
<details><summary>看解答</summary>

BASE＝Basically Available（基本可用）、Soft state（軟狀態）、Eventually consistent（最終一致）。ACID 重**強一致**（RDBMS 適用交易嚴謹場景）；BASE 重**高可用＋最終一致**（NoSQL 適用高擴展、可接受短暫不一致的場景）。
</details>

**Q5.** RDBMS 與 NoSQL 的擴展方式各是什麼？兩者一致性模型有何不同？
<details><summary>看解答</summary>

RDBMS 採**垂直擴展 Scale-up**（單機升級）、強一致（ACID）；NoSQL 採**水平擴展 Scale-out**（多加機器分攤）、最終一致（BASE）。
</details>
