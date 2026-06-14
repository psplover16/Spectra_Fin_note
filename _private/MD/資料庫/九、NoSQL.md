# NoSQL

## 目錄

1. [NoSQL 是什麼](#nosql-是什麼)
2. [NoSQL 的核心想法](#nosql-的核心想法)
3. [NoSQL 的主要分類](#nosql-的主要分類)
4. [CAP 定理](#cap-定理)
5. [BASE 特性](#base-特性)
6. [國考常見考法](#國考常見考法)
7. [比較表與易混淆整理](#比較表與易混淆整理)
8. [國考必背整理](#國考必背整理)
9. [容易考的判斷題](#容易考的判斷題)
10. [考前速記小抄](#考前速記小抄)

## NoSQL 是什麼

非關聯式資料庫（NoSQL Database）是一類不以傳統關聯式資料表作為唯一資料模型的資料庫系統。這裡的 NoSQL 常被解釋為 Not Only SQL，意思不是「完全不用 SQL」，而是「不只使用 SQL 或不只使用關聯式模型」。

傳統關聯式資料庫（Relational Database）通常把資料放在表格（Table）中，用列（Row）與欄（Column）表示資料，並透過 SQL 查詢。非關聯式資料庫（NoSQL Database）則更重視彈性、擴充性與分散式處理能力，資料可能用鍵值、文件、欄族或圖形等方式儲存。

用白話說，關聯式資料庫像是格式嚴謹的 Excel 表格；非關聯式資料庫則像是不同用途的資料收納方式。有些像字典，有些像 JSON 文件，有些像大型分散式表格，有些則專門記錄人與人、物與物之間的關係。

## NoSQL 的核心想法

非關聯式資料庫（NoSQL Database）的核心想法，是在面對大量資料、高流量服務、分散式系統或資料格式經常變動時，提供比傳統關聯式資料庫更彈性的選擇。

它常見的設計方向包括：

1. 彈性資料結構：不一定要求每筆資料都有完全相同欄位。
2. 水平擴充（Horizontal Scaling）：可以透過增加多台機器分散負載。
3. 高可用性（High Availability）：系統即使部分節點故障，仍盡量維持服務。
4. 分散式儲存（Distributed Storage）：資料可分散在多個節點上。
5. 特定場景最佳化：不同 NoSQL 類型適合不同資料型態與查詢需求。

具體例子是購物網站的商品資料。某些商品有尺寸、顏色，某些商品有保固、容量、處理器規格。如果硬要全部塞進固定表格，欄位可能會很複雜；若使用文件資料庫（Document Database），每個商品可以用一份文件記錄自己的屬性，彈性會比較高。

國考常考的重點，不是要求你深入寫程式操作 NoSQL，而是要分辨：NoSQL 不是單一產品，而是一類資料庫；NoSQL 不等於完全沒有 SQL；不同類型的 NoSQL 有不同適用情境。

## NoSQL 的主要分類

### 1. 鍵值資料庫（Key-Value Database）

鍵值資料庫（Key-Value Database）是用「鍵（Key）對應值（Value）」的方式儲存資料。鍵（Key）就像查字典時使用的字，值（Value）就是查到的內容。

核心想法很簡單：只要知道鍵，就能快速找到對應的值。因為資料模型單純，所以通常讀寫速度很快。

常見例子是 Redis。假設系統要記錄使用者登入狀態，可以用 `user:1001` 當作鍵，把使用者的暫存資訊當作值。下次要查這位使用者是否登入，只要用鍵直接查即可。

國考考法常會問：「哪一種 NoSQL 適合高速存取、快取或簡單查找？」答案通常會指向鍵值資料庫（Key-Value Database）。

### 2. 文件資料庫（Document Database）

文件資料庫（Document Database）是用文件（Document）作為資料儲存單位，常見格式接近 JSON。JSON（JavaScript Object Notation）是一種常用的資料交換格式，適合表示有層次的資料。

核心想法是：一筆資料可以是一份結構化文件，文件內可以包含不同欄位、巢狀資料或陣列。這讓它很適合儲存欄位不固定、結構有彈性的資料。

常見例子是 MongoDB。假設要儲存文章資料，一篇文章可以包含標題、作者、標籤、留言清單與發文時間。這些資訊可以放在同一份文件中，查詢時也比較直覺。

國考考法常會問：「哪一種 NoSQL 適合 JSON 類資料或半結構化資料？」答案通常是文件資料庫（Document Database）。

### 3. 欄族資料庫（Column-Family Database）

欄族資料庫（Column-Family Database）也常稱為寬欄資料庫（Wide-Column Database），它不是傳統關聯式資料庫那種固定欄位表格，而是把資料依照欄族（Column Family）組織，適合大量、分散式、可擴充的資料儲存。

核心想法是：資料可以分散在多台機器上，並針對大量寫入與大規模查詢進行最佳化。它通常用在資料量很大、系統需要跨多節點運作的場景。

常見例子是 Cassandra。假設一個全球服務每天產生大量使用者活動紀錄，資料量非常龐大，而且需要分散到多台伺服器保存，就可能使用欄族資料庫（Column-Family Database）。

國考考法常會問：「哪一種 NoSQL 適合大量分散式資料？」答案通常是欄族資料庫（Column-Family Database），常見代表是 Cassandra。

### 4. 圖形資料庫（Graph Database）

圖形資料庫（Graph Database）是用節點（Node）與邊（Edge）表示資料與資料之間的關係。節點（Node）代表實體，例如人、公司、商品；邊（Edge）代表關係，例如朋友、購買、任職。

核心想法是：當問題重點不是單筆資料，而是「資料之間怎麼連起來」時，圖形資料庫（Graph Database）會很適合。

常見例子是 Neo4j。假設社群平台要查「某人的朋友的朋友」或推薦可能認識的人，重點就是關係網路，使用圖形資料庫（Graph Database）會比單純表格更直覺。

國考考法常會問：「哪一種 NoSQL 適合社群網路、推薦系統、關係分析？」答案通常是圖形資料庫（Graph Database）。

## CAP 定理

CAP 定理（CAP Theorem）是分散式系統常見考點，常與非關聯式資料庫（NoSQL Database）一起出現。它指出在分散式系統中，以下三項特性在發生網路分割時，通常無法三者同時完全滿足：

1. 一致性（Consistency）：所有節點看到的資料是一致的。
2. 可用性（Availability）：每個請求都能得到回應，即使回應不一定是最新資料。
3. 分割容忍性（Partition Tolerance）：當網路中斷或節點之間無法互相通訊時，系統仍能繼續運作。

白話來說，假設資料分散在不同機房。如果兩個機房之間的網路斷線，系統就必須做取捨：要不要繼續服務使用者？如果繼續服務，資料可能暫時不一致；如果堅持資料一致，可能就要拒絕部分請求。

國考常考 CAP 的英文全名與中文意義，也常考「分散式系統需要在一致性與可用性之間取捨」這個觀念。

## BASE 特性

BASE 特性（BASE Properties）是許多非關聯式資料庫（NoSQL Database）在分散式環境中常見的設計取向。它通常用來和傳統交易的 ACID 特性（ACID Properties）做對比。

BASE 包含：

1. 基本可用（Basically Available）：系統盡量保持可用，即使部分功能或資料暫時不是最完整狀態。
2. 軟狀態（Soft State）：系統狀態可能會暫時變動，不一定每一刻都完全一致。
3. 最終一致性（Eventual Consistency）：只要沒有新的更新，經過一段時間後，各節點資料最終會趨於一致。

具體例子是社群網站的按讚數。你按讚後，某些使用者看到的數字可能立刻更新，某些使用者可能晚幾秒才看到，但最後大家看到的結果會一致。這就是最終一致性（Eventual Consistency）的直覺例子。

國考很喜歡考 BASE 的三個英文展開，以及它代表的不是強一致，而是偏向可用性、彈性與最終一致。

## 國考常見考法

1. 考 NoSQL 的意義  
   常見陷阱是把 NoSQL 解釋成「不用 SQL」。正確觀念是 Not Only SQL，表示不只使用傳統 SQL 或關聯式模型。

2. 考 NoSQL 分類與代表產品  
   題目常把 Redis、MongoDB、Cassandra、Neo4j 混在一起，要求配對其資料模型。

3. 考適用情境  
   例如快取、高速查找通常對應鍵值資料庫（Key-Value Database）；JSON 類資料通常對應文件資料庫（Document Database）；大量分散式資料通常對應欄族資料庫（Column-Family Database）；關係網路通常對應圖形資料庫（Graph Database）。

4. 考 CAP 定理  
   需要背出一致性（Consistency）、可用性（Availability）、分割容忍性（Partition Tolerance），並理解分散式系統常需要取捨。

5. 考 BASE 特性  
   需要背出基本可用（Basically Available）、軟狀態（Soft State）、最終一致性（Eventual Consistency）。

## 比較表與易混淆整理

| 類型 | 英文 | 儲存概念 | 常見產品 | 適合情境 | 國考關鍵字 |
|---|---|---|---|---|---|
| 鍵值資料庫 | Key-Value Database | Key 對應 Value | Redis | 快取、高速查找、Session | 速度快、簡單查找 |
| 文件資料庫 | Document Database | 類 JSON 文件 | MongoDB | 半結構化資料、欄位彈性 | JSON、文件 |
| 欄族資料庫 | Column-Family Database | 欄族、寬欄、分散式資料 | Cassandra | 大量資料、分散式儲存 | 大規模、分散式 |
| 圖形資料庫 | Graph Database | 節點與邊 | Neo4j | 社群網路、推薦、關係分析 | 關係網路 |

| 易混淆觀念 | 正確理解 |
|---|---|
| NoSQL 是不用 SQL | NoSQL 通常解釋為 Not Only SQL，不是不准使用 SQL |
| NoSQL 只有一種資料庫 | NoSQL 是一大類資料庫，包含鍵值、文件、欄族、圖形等類型 |
| 文件資料庫等於文字檔資料庫 | 文件資料庫的文件通常是結構化或半結構化資料，例如 JSON 類資料 |
| 圖形資料庫是用來畫圖 | 圖形資料庫重點是資料關係，不是美術繪圖 |
| 最終一致性代表永遠不一致 | 最終一致性是指經過一段時間後，各節點資料會趨於一致 |

## 國考必背整理

1. 非關聯式資料庫（NoSQL Database）：不以傳統關聯式表格作為唯一資料模型的資料庫類型。
2. NoSQL：常解釋為 Not Only SQL，不是 No SQL。
3. 鍵值資料庫（Key-Value Database）：以 Key-Value 儲存，代表產品 Redis，特色是速度快。
4. 文件資料庫（Document Database）：以類 JSON 文件儲存，代表產品 MongoDB，適合半結構化資料。
5. 欄族資料庫（Column-Family Database）：適合大量分散式資料，代表產品 Cassandra。
6. 圖形資料庫（Graph Database）：以節點與邊描述關係，代表產品 Neo4j，適合關係網路。
7. CAP 定理（CAP Theorem）：一致性（Consistency）、可用性（Availability）、分割容忍性（Partition Tolerance）。
8. BASE 特性（BASE Properties）：基本可用（Basically Available）、軟狀態（Soft State）、最終一致性（Eventual Consistency）。

## 容易考的判斷題

1. NoSQL 代表完全不能使用 SQL。  
   錯。NoSQL 常解釋為 Not Only SQL。

2. Redis 常被歸類為鍵值資料庫（Key-Value Database）。  
   對。Redis 常用於快取與高速資料存取。

3. MongoDB 適合儲存 JSON 類資料。  
   對。MongoDB 是常見文件資料庫（Document Database）。

4. Cassandra 常用於大量分散式資料場景。  
   對。Cassandra 是欄族資料庫（Column-Family Database）的常見代表。

5. Neo4j 適合處理關係網路。  
   對。Neo4j 是圖形資料庫（Graph Database）的常見代表。

6. CAP 定理包含機密性、可用性、完整性。  
   錯。那是資安常見概念 CIA；CAP 是一致性、可用性、分割容忍性。

7. BASE 的 E 是 Eventual consistency。  
   對。意思是最終一致性（Eventual Consistency）。

8. 最終一致性表示資料永遠不會一致。  
   錯。它表示資料可能暫時不一致，但最後會趨於一致。

## 考前速記小抄

NoSQL 要先記住一句話：不是 No SQL，而是 Not Only SQL。

四大類型可以這樣背：

1. Redis：鍵值資料庫（Key-Value Database），重點是快。
2. MongoDB：文件資料庫（Document Database），重點是 JSON 類資料。
3. Cassandra：欄族資料庫（Column-Family Database），重點是大量分散式資料。
4. Neo4j：圖形資料庫（Graph Database），重點是關係網路。

CAP 定理（CAP Theorem）背三個字母：

1. C：一致性（Consistency）
2. A：可用性（Availability）
3. P：分割容忍性（Partition Tolerance）

BASE 特性（BASE Properties）背三個片語：

1. BA：基本可用（Basically Available）
2. S：軟狀態（Soft State）
3. E：最終一致性（Eventual Consistency）

考場看到「速度快、快取」就想鍵值資料庫（Key-Value Database）；看到「JSON」就想文件資料庫（Document Database）；看到「大量分散式」就想欄族資料庫（Column-Family Database）；看到「社群、推薦、關係」就想圖形資料庫（Graph Database）。
