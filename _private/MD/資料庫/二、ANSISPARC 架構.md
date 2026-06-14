# ANSI/SPARC 架構

## 目錄

1. ANSI/SPARC 架構是什麼
2. 三層架構總覽
3. 外部層、概念層、內部層
4. 為什麼需要 ANSI/SPARC 架構
5. 資料獨立性
6. 國考常見考法
7. 易混淆比較表
8. 國考必背整理
9. 容易考的判斷題
10. 考前速記小抄

## ANSI/SPARC 架構是什麼

ANSI/SPARC 架構（ANSI/SPARC Architecture）是資料庫系統中用來描述「資料如何被不同層次的人或系統看見」的三層架構。它把資料庫分成外部層（External Level）、概念層（Conceptual Level）與內部層（Internal Level）。

白話來說，同一份資料在不同角色眼中會有不同樣子。使用者只想看到自己需要的資料，資料庫管理者要理解整體資料邏輯，而系統底層則要處理資料實際如何存放。ANSI/SPARC 架構（ANSI/SPARC Architecture）的核心想法，就是把這些不同層次分開，讓資料庫比較容易管理，也比較不容易因為某一層改變就牽連全部系統。

舉例來說，業務人員打開系統時，可能只看到客戶姓名、訂單編號與訂單金額；但資料庫實際上還有產品、庫存、付款、出貨等資料表；至於資料真正存在硬碟的哪個區塊、用了什麼索引，業務人員完全不需要知道。這就是三層架構想解決的問題。

## 三層架構總覽

ANSI/SPARC 架構（ANSI/SPARC Architecture）最常考的圖，就是由上到下三層：

1. 外部層（External Level）
2. 概念層（Conceptual Level）
3. 內部層（Internal Level）

可以用下面的方式記：

```text
使用者 / 應用程式
        ↓
外部層 External Level：不同使用者看到的視圖
        ↓
概念層 Conceptual Level：整個資料庫的邏輯結構
        ↓
內部層 Internal Level：資料實際儲存與存取方式
        ↓
實體儲存媒體
```

國考若要你畫圖，通常不需要畫得很花俏，但一定要呈現「上層接近使用者，下層接近實體儲存」這個方向。

## 外部層、概念層、內部層

### 外部層

外部層（External Level）是使用者或應用程式看到的資料視圖（View）。視圖（View）是依照特定使用者需求所呈現的資料內容，不一定等於資料庫的完整資料。

外部層（External Level）的核心想法是「只給使用者看他需要看的資料」。不同使用者可以有不同的視圖（View），因此同一個資料庫可以同時支援不同部門或不同應用程式。

例如，業務人員可能只需要看到客戶訂單資料；會計人員可能只需要看到付款與發票資料；客服人員可能只需要看到客戶基本資料與服務紀錄。這些都可以是不同的外部視圖（External View）。

國考常問外部層（External Level）的特色，答案通常要抓住三件事：接近使用者、可有多個視圖、可隱藏不必要或不應公開的資料。

### 概念層

概念層（Conceptual Level）是整個資料庫的邏輯結構。邏輯結構（Logical Structure）指的是資料庫中有哪些實體、實體之間有什麼關係，以及有哪些限制條件。

概念層（Conceptual Level）的核心想法是「統一描述整個資料庫應該長什麼樣子」。它不關心資料實際存在哪裡，也不關心某個使用者只想看哪幾個欄位，而是關心整個組織的資料邏輯。

例如，在一個銷售系統中，概念層（Conceptual Level）會描述客戶（Customer）、訂單（Order）、產品（Product）等實體（Entity），也會描述客戶可以下訂單、訂單包含產品等關係（Relationship），以及訂單金額不可為負數等限制條件（Constraint）。

國考常把概念層（Conceptual Level）和外部層（External Level）混在一起考。記住：外部層是「某些人看到的部分資料」，概念層是「整個資料庫的完整邏輯設計」。

### 內部層

內部層（Internal Level）是資料庫實際儲存資料的方式。它關心的是檔案組織（File Organization）、索引（Index）、存取路徑（Access Path）與實體儲存（Physical Storage）。

內部層（Internal Level）的核心想法是「資料實際怎麼放、怎麼找比較有效率」。這一層最接近硬體與儲存媒體，通常是資料庫管理系統（DBMS, Database Management System）與系統管理者比較會接觸的層次。

例如，資料表可能使用堆積檔（Heap File）儲存，也可能建立 B+ 樹索引（B+ Tree Index）加速查詢，或使用雜湊檔（Hash File）提升特定查找效率。這些都是內部層（Internal Level）會處理的內容。

國考看到「實體儲存」「索引」「檔案組織」「存取路徑」這類關鍵字，通常就是在考內部層（Internal Level）。

## 為什麼需要 ANSI/SPARC 架構

ANSI/SPARC 架構（ANSI/SPARC Architecture）最重要的價值，是提供資料抽象化（Data Abstraction）與支援資料獨立性（Data Independence）。

資料抽象化（Data Abstraction）是指隱藏不必要的細節，只讓使用者看到與自己相關的內容。對一般使用者來說，不需要知道資料如何切成頁面、如何放在磁碟、用了哪種索引；他只需要能正確查詢與更新資料。

這種分層設計可以降低耦合（Coupling）。耦合（Coupling）是指系統元件之間互相依賴的程度。若使用者程式直接依賴資料實際儲存方式，底層只要一改，應用程式就可能壞掉。ANSI/SPARC 架構（ANSI/SPARC Architecture）透過分層，讓各層之間的影響降低。

## 資料獨立性

資料獨立性（Data Independence）是指資料庫某一層發生變更時，不會影響上一層的程式或使用方式。這是 ANSI/SPARC 架構（ANSI/SPARC Architecture）最常考、也最容易混淆的重點。

資料獨立性（Data Independence）主要分成兩種：邏輯資料獨立性（Logical Data Independence）與實體資料獨立性（Physical Data Independence）。

### 邏輯資料獨立性

邏輯資料獨立性（Logical Data Independence）是指概念層（Conceptual Level）改變時，不影響外部層（External Level）或應用程式。

例如，資料庫新增一個「會員等級」欄位，或把某些資料表重新整理成更合理的結構。如果原本業務人員使用的訂單視圖（View）仍然可以正常查詢，應用程式也不用修改，這就是邏輯資料獨立性（Logical Data Independence）。

國考看到「概念層改變，但不影響使用者視圖或應用程式」，通常就是邏輯資料獨立性（Logical Data Independence）。

### 實體資料獨立性

實體資料獨立性（Physical Data Independence）是指內部層（Internal Level）改變時，不影響概念層（Conceptual Level）。

例如，資料庫管理者新增索引（Index）、更換檔案組織（File Organization）、調整資料實體儲存位置，這些改變是為了提升效能或管理方便。只要資料庫的邏輯結構仍然一樣，使用者與概念設計不需要跟著改，這就是實體資料獨立性（Physical Data Independence）。

國考看到「索引、檔案、儲存方式改變，但不影響資料表邏輯設計」，通常就是實體資料獨立性（Physical Data Independence）。

## 國考常見考法

1. 要求畫出 ANSI/SPARC 架構（ANSI/SPARC Architecture）的三層架構。
2. 問外部層（External Level）、概念層（Conceptual Level）、內部層（Internal Level）各自的意義。
3. 給一個情境，判斷屬於哪一層。
4. 比較邏輯資料獨立性（Logical Data Independence）與實體資料獨立性（Physical Data Independence）。
5. 問 ANSI/SPARC 架構（ANSI/SPARC Architecture）為何可以提升資料抽象化（Data Abstraction）與降低耦合（Coupling）。

答題時要注意，國考不只考背誦，也常用情境包裝。例如題目說「新增索引後，應用程式不必修改」，答案不是邏輯資料獨立性，而是實體資料獨立性，因為索引屬於內部層。

## 易混淆比較表

| 層級 | 主要對象 | 主要內容 | 特色 | 例子 |
| --- | --- | --- | --- | --- |
| 外部層（External Level） | 使用者、應用程式 | 使用者需要看到的資料視圖（View） | 可有多個視圖，隱藏不必要資料 | 業務人員只看客戶訂單視圖 |
| 概念層（Conceptual Level） | 資料庫管理者、系統分析人員 | 整體邏輯綱要（Schema）、實體、關係、限制條件 | 全資料庫的統一邏輯描述 | 客戶、訂單、產品及其關係 |
| 內部層（Internal Level） | 資料庫管理系統、系統管理者 | 實體儲存、檔案組織、索引、存取路徑 | 關心資料實際如何存放 | B+ 樹索引、堆積檔、雜湊檔 |

| 比較項目 | 邏輯資料獨立性（Logical Data Independence） | 實體資料獨立性（Physical Data Independence） |
| --- | --- | --- |
| 改變的層次 | 概念層（Conceptual Level） | 內部層（Internal Level） |
| 不受影響的層次 | 外部層（External Level） | 概念層（Conceptual Level） |
| 常見例子 | 新增欄位、調整資料表邏輯結構 | 新增索引、改變檔案組織、調整儲存位置 |
| 判斷關鍵 | 邏輯結構改變 | 實體儲存方式改變 |

## 國考必背整理

- ANSI/SPARC 架構（ANSI/SPARC Architecture）分成外部層（External Level）、概念層（Conceptual Level）、內部層（Internal Level）。
- 外部層（External Level）是使用者或應用程式看到的視圖（View）。
- 概念層（Conceptual Level）是整個資料庫的邏輯結構。
- 內部層（Internal Level）是資料實際儲存與存取方式。
- 資料抽象化（Data Abstraction）可以隱藏不必要的底層細節。
- 資料獨立性（Data Independence）可以降低某一層變動對其他層的影響。
- 邏輯資料獨立性（Logical Data Independence）是概念層改變不影響外部層。
- 實體資料獨立性（Physical Data Independence）是內部層改變不影響概念層。

## 容易考的判斷題

1. 「外部層（External Level）描述資料實際存在磁碟的位置。」  
   錯。資料實際儲存位置屬於內部層（Internal Level）。

2. 「概念層（Conceptual Level）描述整個資料庫的邏輯結構。」  
   對。概念層負責統一描述全資料庫的邏輯設計。

3. 「同一個資料庫只能有一個外部視圖（External View）。」  
   錯。外部層（External Level）可以有多個視圖，對應不同使用者需求。

4. 「新增索引後，概念層不受影響，這是實體資料獨立性（Physical Data Independence）。」  
   對。索引屬於內部層，內部層改變不影響概念層，就是實體資料獨立性。

5. 「修改整體資料庫邏輯結構但不影響使用者視圖，稱為邏輯資料獨立性（Logical Data Independence）。」  
   對。概念層改變不影響外部層，就是邏輯資料獨立性。

## 考前速記小抄

三層架構由上到下記成：

```text
外部層：使用者看到什麼
概念層：資料庫邏輯長什麼樣
內部層：資料實際怎麼存
```

資料獨立性用一句話記：

```text
概念改，不影響外部：邏輯資料獨立性
內部改，不影響概念：實體資料獨立性
```

遇到題目時先抓關鍵字：

- 視圖、使用者、應用程式：外部層（External Level）
- 實體、關係、限制條件、整體邏輯：概念層（Conceptual Level）
- 索引、檔案組織、存取路徑、實體儲存：內部層（Internal Level）
- 新增索引或改儲存方式：實體資料獨立性（Physical Data Independence）
- 改資料庫邏輯結構但不影響視圖：邏輯資料獨立性（Logical Data Independence）
