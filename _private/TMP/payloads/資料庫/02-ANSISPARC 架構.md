二、ANSI/SPARC 架構

[會畫] 三層架構
- External Level（外部層）：使用者或應用看到的 view。
- Conceptual Level（概念層）：整體資料庫邏輯結構。
- Internal Level（內部層）：實體儲存方式與索引。

[比較] 各層的對象、內容、特色與例子

層級 | 對象 | 內容 | 特色 | 例子
--- | --- | --- | --- | ---
External Level | 使用者、應用程式 | 使用者需要看到的資料視圖 | 可有多個 view，隱藏不必要資料 | 業務人員只看客戶訂單 view
Conceptual Level | DBA、系統分析人員 | 整體邏輯 schema、entity、relationship、constraints | 全資料庫的統一邏輯描述 | 客戶、訂單、產品及其關係
Internal Level | DBMS、系統管理者 | 實體儲存、檔案組織、索引、存取路徑 | 關心資料實際如何存放 | B+ tree index、heap file、hash file

[必背] 為何使用
- 提供資料抽象化。
- 降低使用者與實體儲存的耦合。
- 支援資料獨立性：
  - Logical Data Independence：概念層改變不影響外部層。
  - Physical Data Independence：內部儲存改變不影響概念層。
