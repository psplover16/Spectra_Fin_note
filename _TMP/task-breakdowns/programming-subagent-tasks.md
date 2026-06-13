# Programming Subagent Tasks

- 範圍：`programming` 與 `system-analysis` 來源盤點後的草稿生產、驗證、匯入任務。
- route：全部歸入 `/programming`。
- programming 草稿檔名契約：`_TMP/<timestamp>-programming-<topic>.md`
- system-analysis 草稿檔名契約：`_TMP/<timestamp>-programming-system-analysis-<topic>.md`
- `<timestamp>` 建議格式：`yyyyMMdd-HHmmss`
- `<topic>` 使用下列表格的 `topic slug`，不得含空白或路徑分隔符。

## Programming Topics

| # | topic slug | topic id | draft file | generator task | verifier task | import task |
|---:|---|---|---|---|---|---|
| 1 | `root` | `programming-root` | `_TMP/<timestamp>-programming-root.md` | 產生程式領域總覽草稿，建立子題索引。 | 核對來源 L1-L2 與 manifest topic id。 | 核准後匯入 `/programming` 的程式領域入口。 |
| 2 | `preparation-direction` | `programming-preparation-direction` | `_TMP/<timestamp>-programming-preparation-direction.md` | 產生準備方向草稿，整理常考語言與語法範圍。 | 核對來源 L3-L12，確認未遺漏語言特性。 | 核准後匯入 `/programming` 的準備方向節點。 |
| 3 | `original-reminders` | `programming-original-reminders` | `_TMP/<timestamp>-programming-original-reminders.md` | 產生原文提醒草稿，保留考點提示語氣。 | 核對來源 L5-L12，確認提醒與例子一致。 | 核准後併入程式準備方向或獨立提醒節點。 |
| 4 | `basics` | `programming-basics` | `_TMP/<timestamp>-programming-basics.md` | 產生基礎總覽草稿，連結翻譯器、基本構件、參數與 static。 | 核對來源 L13-L38 與子題完整性。 | 核准後匯入 `/programming` 的基礎索引。 |
| 5 | `translator-comparison` | `programming-translator-comparison` | `_TMP/<timestamp>-programming-translator-comparison.md` | 產生 Assembler、Compiler、Interpreter 比較草稿。 | 核對來源 L15-L18，確認比較定義正確。 | 核准後匯入 `/programming` 的比較題節點。 |
| 6 | `basic-constructs` | `programming-basic-constructs` | `_TMP/<timestamp>-programming-basic-constructs.md` | 產生基本構件草稿，說明變數、函式、陣列、迴圈、條件、例外。 | 核對來源 L20-L26，確認名詞不缺項。 | 核准後匯入 `/programming` 的基本構件節點。 |
| 7 | `parameter-passing` | `programming-parameter-passing` | `_TMP/<timestamp>-programming-parameter-passing.md` | 產生參數傳遞比較草稿。 | 核對來源 L28-L32，確認四種傳遞方式皆在。 | 核准後匯入 `/programming` 的參數傳遞節點。 |
| 8 | `static` | `programming-static` | `_TMP/<timestamp>-programming-static.md` | 產生 static 觀念草稿，分 C/C++ 與 Java。 | 核對來源 L34-L37，確認生命週期、linkage、class 所屬性。 | 核准後匯入 `/programming` 的 static 節點。 |
| 9 | `intermediate` | `programming-intermediate` | `_TMP/<timestamp>-programming-intermediate.md` | 產生中階總覽草稿，串接指標、字串、OOP、遞迴。 | 核對來源 L39-L66 與子題完整性。 | 核准後匯入 `/programming` 的中階索引。 |
| 10 | `pointers` | `programming-pointers` | `_TMP/<timestamp>-programming-pointers.md` | 產生指標草稿，整理位址、取址、解參考與風險。 | 核對來源 L41-L45，確認 null、dangling、memory leak 皆在。 | 核准後匯入 `/programming` 的指標節點。 |
| 11 | `string-functions` | `programming-string-functions` | `_TMP/<timestamp>-programming-string-functions.md` | 產生字串函式草稿，依 C、C++、Java、Python 分組。 | 核對來源 L47-L51，確認函式名稱完整。 | 核准後匯入 `/programming` 的字串函式節點。 |
| 12 | `oop-three-pillars` | `programming-oop-three-pillars` | `_TMP/<timestamp>-programming-oop-three-pillars.md` | 產生 OOP 三大特性草稿。 | 核對來源 L53-L56，確認封裝、繼承、多型定義。 | 核准後匯入 `/programming` 的 OOP 基礎節點。 |
| 13 | `oop-extensions` | `programming-oop-extensions` | `_TMP/<timestamp>-programming-oop-extensions.md` | 產生 OOP 延伸草稿，涵蓋多載、覆寫、抽象類別與介面。 | 核對來源 L58-L61，確認比較關係清楚。 | 核准後匯入 `/programming` 的 OOP 延伸節點。 |
| 14 | `recursion` | `programming-recursion` | `_TMP/<timestamp>-programming-recursion.md` | 產生遞迴草稿，說明 base case、recursive case 與常見題型。 | 核對來源 L63-L66，確認 stack overflow 與 memoization 提醒。 | 核准後匯入 `/programming` 的遞迴節點。 |
| 15 | `python-special-types` | `programming-python-special-types` | `_TMP/<timestamp>-programming-python-special-types.md` | 產生 Python 特殊資料型別總覽草稿。 | 核對來源 L68-L74，確認四種 collection 子題存在。 | 核准後匯入 `/programming` 的 Python 類型索引。 |
| 16 | `python-collection-comparison` | `programming-python-collection-comparison` | `_TMP/<timestamp>-programming-python-collection-comparison.md` | 產生 List、Tuple、Dictionary、Set 比較草稿。 | 核對來源 L70-L74，確認有序、可變、重複、key-value 特性。 | 核准後匯入 `/programming` 的 Python collection 節點。 |
| 17 | `c-cpp-java-supplement` | `programming-c-cpp-java-supplement` | `_TMP/<timestamp>-programming-c-cpp-java-supplement.md` | 產生 C / C++ / Java 補充總覽草稿。 | 核對來源 L76-L81，確認語言別架構完整。 | 核准後匯入 `/programming` 的語言補充索引。 |
| 18 | `c-cpp-java-key-points` | `programming-c-cpp-java-key-points` | `_TMP/<timestamp>-programming-c-cpp-java-key-points.md` | 產生 C、C++、Java 考點草稿。 | 核對來源 L78-L81，確認 C、C++、Java 重點不缺項。 | 核准後匯入 `/programming` 的語言考點節點。 |

## System Analysis Topics

| # | topic slug | topic id | draft file | generator task | verifier task | import task |
|---:|---|---|---|---|---|---|
| 1 | `root` | `programming-system-analysis-root` | `_TMP/<timestamp>-programming-system-analysis-root.md` | 產生「系統分析與設計」領域總覽草稿，建立子題索引。 | 核對來源 L1-L2、route `/programming` 與領域標示。 | 核准後匯入 `/programming` 的系統分析與設計入口。 |
| 2 | `preparation-direction` | `programming-system-analysis-preparation-direction` | `_TMP/<timestamp>-programming-system-analysis-preparation-direction.md` | 產生準備方向草稿，說明抽象科目的讀法。 | 核對來源 L3-L8，確認歷屆題與名詞比較提醒。 | 核准後匯入 `/programming` 的系統分析準備方向節點。 |
| 3 | `original-reminders` | `programming-system-analysis-original-reminders` | `_TMP/<timestamp>-programming-system-analysis-original-reminders.md` | 產生原文提醒草稿，保留學習策略重點。 | 核對來源 L5-L8，確認提醒未擴寫成未來源化內容。 | 核准後併入準備方向或獨立提醒節點。 |
| 4 | `overview` | `programming-system-analysis-overview` | `_TMP/<timestamp>-programming-system-analysis-overview.md` | 產生概論草稿，串接 SDLC 與 SSDLC。 | 核對來源 L9-L22 與子題完整性。 | 核准後匯入 `/programming` 的系統分析概論索引。 |
| 5 | `sdlc` | `programming-system-analysis-sdlc` | `_TMP/<timestamp>-programming-system-analysis-sdlc.md` | 產生 SDLC 草稿，依階段順序整理。 | 核對來源 L11-L18，確認七個階段完整。 | 核准後匯入 `/programming` 的 SDLC 節點。 |
| 6 | `ssdlc` | `programming-system-analysis-ssdlc` | `_TMP/<timestamp>-programming-system-analysis-ssdlc.md` | 產生 SSDLC 草稿，說明安全活動與生命週期對應。 | 核對來源 L20-L22，確認安全需求、威脅建模、掃描、滲測、修補。 | 核准後匯入 `/programming` 的 SSDLC 節點。 |
| 7 | `structured-analysis-design` | `programming-system-analysis-structured-analysis-design` | `_TMP/<timestamp>-programming-system-analysis-structured-analysis-design.md` | 產生結構化分析與設計總覽草稿。 | 核對來源 L24-L49，確認內聚、耦合、工具子題完整。 | 核准後匯入 `/programming` 的結構化分析索引。 |
| 8 | `cohesion` | `programming-system-analysis-cohesion` | `_TMP/<timestamp>-programming-system-analysis-cohesion.md` | 產生 Cohesion 內聚力草稿，依由佳到差排序。 | 核對來源 L26-L35，確認七種內聚力順序。 | 核准後匯入 `/programming` 的內聚力節點。 |
| 9 | `coupling` | `programming-system-analysis-coupling` | `_TMP/<timestamp>-programming-system-analysis-coupling.md` | 產生 Coupling 耦合力草稿，依由低到高排序。 | 核對來源 L37-L44，確認五種耦合力順序。 | 核准後匯入 `/programming` 的耦合力節點。 |
| 10 | `structured-tools` | `programming-system-analysis-structured-tools` | `_TMP/<timestamp>-programming-system-analysis-structured-tools.md` | 產生 DFD、Data Dictionary、Structure Chart 草稿。 | 核對來源 L46-L49，確認三個工具定義。 | 核准後匯入 `/programming` 的結構化工具節點。 |
| 11 | `oop` | `programming-system-analysis-oop` | `_TMP/<timestamp>-programming-system-analysis-oop.md` | 產生物件導向總覽草稿。 | 核對來源 L51-L61，確認關係比較與補充概念完整。 | 核准後匯入 `/programming` 的系統分析物件導向索引。 |
| 12 | `oop-relationships` | `programming-system-analysis-oop-relationships` | `_TMP/<timestamp>-programming-system-analysis-oop-relationships.md` | 產生物件導向關係比較草稿。 | 核對來源 L53-L57，確認 Dependency、Association、Aggregation、Composition。 | 核准後匯入 `/programming` 的物件關係比較節點。 |
| 13 | `generalization-realization` | `programming-system-analysis-generalization-realization` | `_TMP/<timestamp>-programming-system-analysis-generalization-realization.md` | 產生 Generalization 與 Realization 草稿。 | 核對來源 L59-L61，確認繼承與介面實作對應。 | 核准後匯入 `/programming` 的 UML 關係補充節點。 |
| 14 | `uml` | `programming-system-analysis-uml` | `_TMP/<timestamp>-programming-system-analysis-uml.md` | 產生 UML 總覽草稿。 | 核對來源 L63-L74，確認必背圖與補充圖完整。 | 核准後匯入 `/programming` 的 UML 索引。 |
| 15 | `uml-core-diagrams` | `programming-system-analysis-uml-core-diagrams` | `_TMP/<timestamp>-programming-system-analysis-uml-core-diagrams.md` | 產生 UML 必背圖草稿。 | 核對來源 L65-L69，確認四種圖與用途。 | 核准後匯入 `/programming` 的 UML 必背圖節點。 |
| 16 | `uml-extra-diagrams` | `programming-system-analysis-uml-extra-diagrams` | `_TMP/<timestamp>-programming-system-analysis-uml-extra-diagrams.md` | 產生 UML 補充圖草稿。 | 核對來源 L71-L74，確認三種圖與用途。 | 核准後匯入 `/programming` 的 UML 補充圖節點。 |
| 17 | `project-management` | `programming-system-analysis-project-management` | `_TMP/<timestamp>-programming-system-analysis-project-management.md` | 產生專案管理總覽草稿。 | 核對來源 L76-L107，確認測試、導入、PDCA、工具子題完整。 | 核准後匯入 `/programming` 的專案管理索引。 |
| 18 | `testing-types` | `programming-system-analysis-testing-types` | `_TMP/<timestamp>-programming-system-analysis-testing-types.md` | 產生測試種類草稿，整理目的與類型。 | 核對來源 L78-L90，確認所有測試名稱完整。 | 核准後匯入 `/programming` 的測試種類節點。 |
| 19 | `conversion-methods` | `programming-system-analysis-conversion-methods` | `_TMP/<timestamp>-programming-system-analysis-conversion-methods.md` | 產生系統導入方式比較草稿。 | 核對來源 L92-L96，確認四種導入方式與風險成本描述。 | 核准後匯入 `/programming` 的導入方式節點。 |
| 20 | `pdca` | `programming-system-analysis-pdca` | `_TMP/<timestamp>-programming-system-analysis-pdca.md` | 產生 PDCA 草稿，依循環步驟整理。 | 核對來源 L98-L102，確認 Plan、Do、Check、Act。 | 核准後匯入 `/programming` 的 PDCA 節點。 |
| 21 | `project-tools-risk` | `programming-system-analysis-project-tools-risk` | `_TMP/<timestamp>-programming-system-analysis-project-tools-risk.md` | 產生專案工具與風險管理草稿。 | 核對來源 L104-L107，確認甘特圖、PERT/CPM、風險管理流程。 | 核准後匯入 `/programming` 的專案工具與風險節點。 |
