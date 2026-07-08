# algorithms-data-structure-content Specification

## Purpose

本規格定義 Algorithms 科目資料結構主題的內容契約：將 9 個資料結構 Markdown 主題（複雜度、陣列與鏈結串列、堆疊佇列、樹、圖、排序總覽、雜湊等）以 `lessonArticle` 匯入、保留章節順序與可追溯來源，並排在範例演算法主題之前。

## Requirements

### Requirement: Algorithms route imports data-structure Markdown topics

The app SHALL expose one visible Algorithms topic for each Markdown file under `_private/MD/資料結構與演算法/`. The imported topics MUST appear before every pre-existing Algorithms topic, and their order MUST follow the natural source filename order.

#### Scenario: Imported topics appear first in source filename order

- **WHEN** the Algorithms subject topic list is loaded
- **THEN** the first nine visible topics are the imported data-structure Markdown topics
- **THEN** those nine topics appear in the natural filename order from `_1_` through `_8_`, with `_6上_` before `_6下_`

##### Example: expected imported source order

| Position | Source file | Topic title basis |
| ----- | ----- | ----- |
| 1 | `_private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md` | Big-O 複雜度 |
| 2 | `_private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md` | 陣列與鏈結串列 |
| 3 | `_private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md` | 堆疊與佇列 |
| 4 | `_private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md` | 樹基本與走訪 |
| 5 | `_private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md` | 高等樹 |
| 6 | `_private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md` | 圖基礎與走訪 |
| 7 | `_private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md` | 圖演算法 |
| 8 | `_private/MD/資料結構與演算法/資料結構與演算法_7_排序.md` | 排序 |
| 9 | `_private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md` | 雜湊 |


<!-- @trace
source: fill-algorithms-data-structure-content
updated: 2026-06-19
code:
  - _private/MD/網概/網路概論_2_基礎概念.md
  - _private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/資訊管理/四、ESG.md
  - _private/MD/程式/四、Python 特殊資料型別.md
  - src/app/routePreload.ts
  - _private/MD/done/資料庫/資料庫_3_正規化.md
  - src/modules/operatingSystems/views/OperatingSystemsView.vue
  - _private/MD/資料庫/十、資料庫補充考點.md
  - _private/MD/done/網概/網路概論_4上_IP與子網路計算.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/02_機器指令與指令週期.md
  - src/modules/systemDesign/views/SystemDesignView.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/系統分析與設計/二、系統分析與設計概論.md
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/MD/done/程式設計/程式設計_5_物件導向OOP.md
  - _private/MD/done/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/done/演算法/BubbleSort.java
  - _private/MD/done/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資訊管理/三、資訊系統開發流程與模式.md
  - src/modules/digitalLogic/views/DigitalLogicView.vue
  - _private/MD/系統分析與設計/一、準備方向.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/資料庫/五、ERD.md
  - _private/TMP/information-management-md-content-review.md
  - PROJECT_ARCHITECTURE.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/done/資料庫/資料庫_1_基礎概念與架構.md
  - _private/MD/系統分析與設計/五、UML.md
  - _private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/系統分析與設計/六、專案管理.md
  - _private/MD/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/ques/原文.txt
  - _private/MD/計算機概論/09_補數轉換.md
  - _private/MD/計算機概論/01_架構與計算理論.md
  - _private/MD/done/資料庫/資料庫_6_交易ACID與NoSQL.md
  - _private/MD/資訊管理/資訊管理_3a_資訊倫理.md
  - _private/MD/done/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md
  - _private/MD/資訊管理/六、資訊管理補充考點.md
  - _private/MD/計算機概論/03_Pipeline與Hazard.md
  - _private/MD/計算機概論/00_目錄.md
  - src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts
  - _private/MD/done/系統分析與設計/系統分析與設計_3_OO關係與UML.md
  - _private/MD/done/程式設計/程式設計_4_指標.md
  - _private/MD/程式/一、準備方向.md
  - src/shared/components/RouteTabs.vue
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/MD/程式/五、C C++ Java 補充重點.md
  - _private/MD/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/done/網概/網路概論_2_基礎概念.md
  - _private/MD/done/網概/網路概論_7上_實體層.md
  - src/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue
  - _private/MD/done/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md
  - _private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - _private/MD/done/程式設計/程式設計_2_函式與參數傳遞.md
  - _private/MD/done/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md
  - _private/MD/資訊管理/資訊管理_2a_傳統開發模式.md
  - _private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md
  - _private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/done/程式設計/程式設計_3_陣列字串與例外處理.md
  - _private/MD/資料庫/四、Key.md
  - _private/MD/網概/網路概論_5_傳輸層.md
  - _private/MD/資料庫/二、ANSISPARC 架構.md
  - src/shared/components/RouteSubMenu.vue
  - _private/MD/done/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/資訊管理/資訊管理_2b_敏捷開發.md
  - _private/MD/資訊管理/一、準備方向.md
  - _private/discuss.txt
  - _private/MD/done/網概/網路概論_8上_資安觀念與加密.md
  - src/app/router.ts
  - _private/MD/網概/網路概論_4上_IP與子網路計算.md
  - src/modules/commonSubjects/components/CommonSubjectSwitcher.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/資料庫/八、ACID 與交易.md
  - _private/MD/done/資料庫/資料庫_2_鍵與ERD.md
  - src/styles/main.css
  - _private/MD/計算機概論/08_進制轉換.md
  - _private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md
  - _private/MD/程式/三、中階.md
  - _private/MD/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/done/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/12_檢查碼-Parity與CRC.md
  - _private/propose.md
  - _private/MD/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/程式/二、基礎.md
  - _private/MD/done/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/網概/網路概論_7上_實體層.md
  - _private/MD/演算法/GeneralBucketSort.java
  - _private/MD/資訊管理/二、數位轉型.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/計算機概論/05_匯流排與USB.md
  - _private/MD/done/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/MD/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/資訊管理/資訊管理_4b_GDPR.md
  - _private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/done/演算法/GeneralBucketSort.java
  - _private/MD/done/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/計算機概論_基本計概_彙整版.md
  - _private/MD/資料庫/一、準備方向.md
  - _private/MD/計算機概論/06_記憶體-階層與分類.md
  - _private/MD/done/資料庫/資料庫_4_SQL分類與CRUD.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/計算機概論/04_效能與RISC-CISC.md
  - _private/MD/done/程式設計/程式設計_1_語言執行方式與程式基礎.md
  - _private/MD/資訊管理/五、資訊系統倫理與新興法規.md
  - _private/MD/計算機概論/10_浮點數轉換.md
  - _private/MD/done/程式設計/程式設計_6_遞迴.md
  - _private/MD/資料庫/九、NoSQL.md
  - _private/MD/done/資料庫/資料庫_5_SQL查詢進階.md
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/MD/系統分析與設計/三、結構化分析與設計.md
  - _private/MD/done/系統分析與設計/系統分析與設計_4_測試.md
  - _private/MD/計算機概論/11_數碼與文字碼.md
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/MD/done/網概/網路概論_5_傳輸層.md
  - _private/MD/計算機概論/07_記憶體-暫存器與Cache.md
  - _private/MD/done/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/資料庫/三、資料庫基礎.md
  - _private/MD/系統分析與設計/四、物件導向.md
  - _private/MD/done/程式設計/程式設計_7_各語言特性.md
  - _private/MD/網概/網路概論_8上_資安觀念與加密.md
  - _private/MD/資訊管理/資訊管理_4a_個人資料保護法.md
  - _private/MD/演算法/BubbleSort.java
  - _private/MD/資料庫/七、SQL 分類與 CRUD.md
  - _private/MD/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts
  - _private/MD/資料庫/六、正規化.md
tests:
  - tests/unit/computerPrinciplesRouteWorkflow.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/programmingRouteWorkflow.spec.ts
  - tests/unit/databaseRouteWorkflow.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/staleProfessionalContentAudit.spec.ts
  - tests/unit/networkingRouteWorkflow.spec.ts
  - tests/component/ComputerFoundationSubjectSwitcher.spec.ts
  - tests/unit/splitComputerPrinciplesRoutes.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/algorithmsRouteWorkflow.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/unit/informationManagementRouteWorkflow.spec.ts
  - tests/unit/projectArchitecture.spec.ts
-->

---
### Requirement: Imported topics preserve source structure and traceability

Each imported Algorithms topic SHALL render through the existing `lessonArticle` block contract. The topic title SHALL use the Markdown topic title, the topic sourceFiles SHALL include its exact Markdown source path, and the lessonArticle sections SHALL preserve the source Markdown section order. The import MUST only apply objectively necessary corrections, formatting normalization required by the existing renderer, or source-traceability metadata.

#### Scenario: Imported topic carries its source path and lesson article content

- **WHEN** an imported Algorithms topic is loaded from formal app data
- **THEN** its sourceFiles includes the exact Markdown file used to create it
- **THEN** its first block is a `lessonArticle`
- **THEN** the `lessonArticle` contains non-empty sections derived from that Markdown file in source order
- **THEN** the topic does not introduce generated placeholder prose that is absent from the source material


<!-- @trace
source: fill-algorithms-data-structure-content
updated: 2026-06-19
code:
  - _private/MD/網概/網路概論_2_基礎概念.md
  - _private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/資訊管理/四、ESG.md
  - _private/MD/程式/四、Python 特殊資料型別.md
  - src/app/routePreload.ts
  - _private/MD/done/資料庫/資料庫_3_正規化.md
  - src/modules/operatingSystems/views/OperatingSystemsView.vue
  - _private/MD/資料庫/十、資料庫補充考點.md
  - _private/MD/done/網概/網路概論_4上_IP與子網路計算.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/02_機器指令與指令週期.md
  - src/modules/systemDesign/views/SystemDesignView.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/系統分析與設計/二、系統分析與設計概論.md
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/MD/done/程式設計/程式設計_5_物件導向OOP.md
  - _private/MD/done/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/done/演算法/BubbleSort.java
  - _private/MD/done/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資訊管理/三、資訊系統開發流程與模式.md
  - src/modules/digitalLogic/views/DigitalLogicView.vue
  - _private/MD/系統分析與設計/一、準備方向.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/資料庫/五、ERD.md
  - _private/TMP/information-management-md-content-review.md
  - PROJECT_ARCHITECTURE.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/done/資料庫/資料庫_1_基礎概念與架構.md
  - _private/MD/系統分析與設計/五、UML.md
  - _private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/系統分析與設計/六、專案管理.md
  - _private/MD/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/ques/原文.txt
  - _private/MD/計算機概論/09_補數轉換.md
  - _private/MD/計算機概論/01_架構與計算理論.md
  - _private/MD/done/資料庫/資料庫_6_交易ACID與NoSQL.md
  - _private/MD/資訊管理/資訊管理_3a_資訊倫理.md
  - _private/MD/done/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md
  - _private/MD/資訊管理/六、資訊管理補充考點.md
  - _private/MD/計算機概論/03_Pipeline與Hazard.md
  - _private/MD/計算機概論/00_目錄.md
  - src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts
  - _private/MD/done/系統分析與設計/系統分析與設計_3_OO關係與UML.md
  - _private/MD/done/程式設計/程式設計_4_指標.md
  - _private/MD/程式/一、準備方向.md
  - src/shared/components/RouteTabs.vue
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/MD/程式/五、C C++ Java 補充重點.md
  - _private/MD/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/done/網概/網路概論_2_基礎概念.md
  - _private/MD/done/網概/網路概論_7上_實體層.md
  - src/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue
  - _private/MD/done/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md
  - _private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - _private/MD/done/程式設計/程式設計_2_函式與參數傳遞.md
  - _private/MD/done/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md
  - _private/MD/資訊管理/資訊管理_2a_傳統開發模式.md
  - _private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md
  - _private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/done/程式設計/程式設計_3_陣列字串與例外處理.md
  - _private/MD/資料庫/四、Key.md
  - _private/MD/網概/網路概論_5_傳輸層.md
  - _private/MD/資料庫/二、ANSISPARC 架構.md
  - src/shared/components/RouteSubMenu.vue
  - _private/MD/done/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/資訊管理/資訊管理_2b_敏捷開發.md
  - _private/MD/資訊管理/一、準備方向.md
  - _private/discuss.txt
  - _private/MD/done/網概/網路概論_8上_資安觀念與加密.md
  - src/app/router.ts
  - _private/MD/網概/網路概論_4上_IP與子網路計算.md
  - src/modules/commonSubjects/components/CommonSubjectSwitcher.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/資料庫/八、ACID 與交易.md
  - _private/MD/done/資料庫/資料庫_2_鍵與ERD.md
  - src/styles/main.css
  - _private/MD/計算機概論/08_進制轉換.md
  - _private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md
  - _private/MD/程式/三、中階.md
  - _private/MD/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/done/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/12_檢查碼-Parity與CRC.md
  - _private/propose.md
  - _private/MD/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/程式/二、基礎.md
  - _private/MD/done/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/網概/網路概論_7上_實體層.md
  - _private/MD/演算法/GeneralBucketSort.java
  - _private/MD/資訊管理/二、數位轉型.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/計算機概論/05_匯流排與USB.md
  - _private/MD/done/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/MD/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/資訊管理/資訊管理_4b_GDPR.md
  - _private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/done/演算法/GeneralBucketSort.java
  - _private/MD/done/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/計算機概論_基本計概_彙整版.md
  - _private/MD/資料庫/一、準備方向.md
  - _private/MD/計算機概論/06_記憶體-階層與分類.md
  - _private/MD/done/資料庫/資料庫_4_SQL分類與CRUD.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/計算機概論/04_效能與RISC-CISC.md
  - _private/MD/done/程式設計/程式設計_1_語言執行方式與程式基礎.md
  - _private/MD/資訊管理/五、資訊系統倫理與新興法規.md
  - _private/MD/計算機概論/10_浮點數轉換.md
  - _private/MD/done/程式設計/程式設計_6_遞迴.md
  - _private/MD/資料庫/九、NoSQL.md
  - _private/MD/done/資料庫/資料庫_5_SQL查詢進階.md
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/MD/系統分析與設計/三、結構化分析與設計.md
  - _private/MD/done/系統分析與設計/系統分析與設計_4_測試.md
  - _private/MD/計算機概論/11_數碼與文字碼.md
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/MD/done/網概/網路概論_5_傳輸層.md
  - _private/MD/計算機概論/07_記憶體-暫存器與Cache.md
  - _private/MD/done/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/資料庫/三、資料庫基礎.md
  - _private/MD/系統分析與設計/四、物件導向.md
  - _private/MD/done/程式設計/程式設計_7_各語言特性.md
  - _private/MD/網概/網路概論_8上_資安觀念與加密.md
  - _private/MD/資訊管理/資訊管理_4a_個人資料保護法.md
  - _private/MD/演算法/BubbleSort.java
  - _private/MD/資料庫/七、SQL 分類與 CRUD.md
  - _private/MD/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts
  - _private/MD/資料庫/六、正規化.md
tests:
  - tests/unit/computerPrinciplesRouteWorkflow.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/programmingRouteWorkflow.spec.ts
  - tests/unit/databaseRouteWorkflow.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/staleProfessionalContentAudit.spec.ts
  - tests/unit/networkingRouteWorkflow.spec.ts
  - tests/component/ComputerFoundationSubjectSwitcher.spec.ts
  - tests/unit/splitComputerPrinciplesRoutes.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/algorithmsRouteWorkflow.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/unit/informationManagementRouteWorkflow.spec.ts
  - tests/unit/projectArchitecture.spec.ts
-->

---
### Requirement: Existing Algorithms topics remain after imported Markdown topics

The app SHALL keep every pre-existing Algorithms topic available after the nine imported Markdown topics. The relative order among those pre-existing topics MUST remain unchanged unless a separate change explicitly modifies that order.

#### Scenario: Existing Algorithms topics are retained after the imported group

- **WHEN** the Algorithms subject topic list is loaded
- **THEN** all non-imported Algorithms topics remain visible after the first nine imported topics
- **THEN** the first non-imported topic appears immediately after the ninth imported topic
- **THEN** the non-imported topic group keeps its pre-change relative order

<!-- @trace
source: fill-algorithms-data-structure-content
updated: 2026-06-19
code:
  - _private/MD/網概/網路概論_2_基礎概念.md
  - _private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/資訊管理/四、ESG.md
  - _private/MD/程式/四、Python 特殊資料型別.md
  - src/app/routePreload.ts
  - _private/MD/done/資料庫/資料庫_3_正規化.md
  - src/modules/operatingSystems/views/OperatingSystemsView.vue
  - _private/MD/資料庫/十、資料庫補充考點.md
  - _private/MD/done/網概/網路概論_4上_IP與子網路計算.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/02_機器指令與指令週期.md
  - src/modules/systemDesign/views/SystemDesignView.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md
  - _private/MD/系統分析與設計/二、系統分析與設計概論.md
  - src/modules/subjectTopics/data/placeholderTopics.ts
  - _private/MD/done/程式設計/程式設計_5_物件導向OOP.md
  - _private/MD/done/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/done/演算法/BubbleSort.java
  - _private/MD/done/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資訊管理/三、資訊系統開發流程與模式.md
  - src/modules/digitalLogic/views/DigitalLogicView.vue
  - _private/MD/系統分析與設計/一、準備方向.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/資料庫/五、ERD.md
  - _private/TMP/information-management-md-content-review.md
  - PROJECT_ARCHITECTURE.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/done/資料庫/資料庫_1_基礎概念與架構.md
  - _private/MD/系統分析與設計/五、UML.md
  - _private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/系統分析與設計/六、專案管理.md
  - _private/MD/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/ques/原文.txt
  - _private/MD/計算機概論/09_補數轉換.md
  - _private/MD/計算機概論/01_架構與計算理論.md
  - _private/MD/done/資料庫/資料庫_6_交易ACID與NoSQL.md
  - _private/MD/資訊管理/資訊管理_3a_資訊倫理.md
  - _private/MD/done/系統分析與設計/系統分析與設計_2_內聚力與耦合力.md
  - _private/MD/資訊管理/六、資訊管理補充考點.md
  - _private/MD/計算機概論/03_Pipeline與Hazard.md
  - _private/MD/計算機概論/00_目錄.md
  - src/modules/subjectTopics/storage/subjectTopicProgressStorage.ts
  - _private/MD/done/系統分析與設計/系統分析與設計_3_OO關係與UML.md
  - _private/MD/done/程式設計/程式設計_4_指標.md
  - _private/MD/程式/一、準備方向.md
  - src/shared/components/RouteTabs.vue
  - src/modules/subjectTopics/data/professionalTopics.ts
  - _private/MD/程式/五、C C++ Java 補充重點.md
  - _private/MD/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/done/網概/網路概論_2_基礎概念.md
  - _private/MD/done/網概/網路概論_7上_實體層.md
  - src/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue
  - _private/MD/done/系統分析與設計/系統分析與設計_5_系統導入與PDCA.md
  - _private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - _private/MD/done/程式設計/程式設計_2_函式與參數傳遞.md
  - _private/MD/done/系統分析與設計/系統分析與設計_1_SDLC與SSDLC.md
  - _private/MD/資訊管理/資訊管理_2a_傳統開發模式.md
  - _private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md
  - _private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md
  - _private/MD/done/程式設計/程式設計_3_陣列字串與例外處理.md
  - _private/MD/資料庫/四、Key.md
  - _private/MD/網概/網路概論_5_傳輸層.md
  - _private/MD/資料庫/二、ANSISPARC 架構.md
  - src/shared/components/RouteSubMenu.vue
  - _private/MD/done/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/資訊管理/資訊管理_2b_敏捷開發.md
  - _private/MD/資訊管理/一、準備方向.md
  - _private/discuss.txt
  - _private/MD/done/網概/網路概論_8上_資安觀念與加密.md
  - src/app/router.ts
  - _private/MD/網概/網路概論_4上_IP與子網路計算.md
  - src/modules/commonSubjects/components/CommonSubjectSwitcher.vue
  - _private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/資料庫/八、ACID 與交易.md
  - _private/MD/done/資料庫/資料庫_2_鍵與ERD.md
  - src/styles/main.css
  - _private/MD/計算機概論/08_進制轉換.md
  - _private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md
  - _private/MD/程式/三、中階.md
  - _private/MD/網概/網路概論_8下_防禦設備與攻擊.md
  - _private/MD/done/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_7_排序.md
  - _private/MD/計算機概論/12_檢查碼-Parity與CRC.md
  - _private/propose.md
  - _private/MD/網概/網路概論_7下_資料鏈結層.md
  - _private/MD/程式/二、基礎.md
  - _private/MD/done/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/網概/網路概論_7上_實體層.md
  - _private/MD/演算法/GeneralBucketSort.java
  - _private/MD/資訊管理/二、數位轉型.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md
  - _private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md
  - _private/MD/計算機概論/05_匯流排與USB.md
  - _private/MD/done/網概/網路概論_1_OSI七層與TCPIP.md
  - _private/MD/網概/網路概論_3_網路設備對應層級.md
  - _private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md
  - _private/MD/資訊管理/資訊管理_4b_GDPR.md
  - _private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_8_雜湊.md
  - _private/MD/done/演算法/GeneralBucketSort.java
  - _private/MD/done/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md
  - _private/MD/計算機概論_基本計概_彙整版.md
  - _private/MD/資料庫/一、準備方向.md
  - _private/MD/計算機概論/06_記憶體-階層與分類.md
  - _private/MD/done/資料庫/資料庫_4_SQL分類與CRUD.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6下_圖演算法.md
  - _private/MD/計算機概論/04_效能與RISC-CISC.md
  - _private/MD/done/程式設計/程式設計_1_語言執行方式與程式基礎.md
  - _private/MD/資訊管理/五、資訊系統倫理與新興法規.md
  - _private/MD/計算機概論/10_浮點數轉換.md
  - _private/MD/done/程式設計/程式設計_6_遞迴.md
  - _private/MD/資料庫/九、NoSQL.md
  - _private/MD/done/資料庫/資料庫_5_SQL查詢進階.md
  - src/modules/subjectTopics/types/subjectTopic.ts
  - _private/MD/系統分析與設計/三、結構化分析與設計.md
  - _private/MD/done/系統分析與設計/系統分析與設計_4_測試.md
  - _private/MD/計算機概論/11_數碼與文字碼.md
  - src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue
  - src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts
  - _private/MD/done/網概/網路概論_5_傳輸層.md
  - _private/MD/計算機概論/07_記憶體-暫存器與Cache.md
  - _private/MD/done/網概/網路概論_4下_路由與L3協定.md
  - _private/MD/資料庫/三、資料庫基礎.md
  - _private/MD/系統分析與設計/四、物件導向.md
  - _private/MD/done/程式設計/程式設計_7_各語言特性.md
  - _private/MD/網概/網路概論_8上_資安觀念與加密.md
  - _private/MD/資訊管理/資訊管理_4a_個人資料保護法.md
  - _private/MD/演算法/BubbleSort.java
  - _private/MD/資料庫/七、SQL 分類與 CRUD.md
  - _private/MD/網概/網路概論_6_應用層與Port對照.md
  - _private/MD/done/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md
  - src/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions.ts
  - _private/MD/資料庫/六、正規化.md
tests:
  - tests/unit/computerPrinciplesRouteWorkflow.spec.ts
  - tests/e2e/app-shell.smoke.spec.ts
  - tests/unit/subjectTopics.spec.ts
  - tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts
  - tests/unit/programmingRouteWorkflow.spec.ts
  - tests/unit/databaseRouteWorkflow.spec.ts
  - tests/e2e/pwa-offline-shell.spec.ts
  - tests/e2e/app-shell-mobile.spec.ts
  - tests/component/SubjectRoutesSmoke.spec.ts
  - tests/unit/placeholderTopics.spec.ts
  - tests/unit/routePreload.spec.ts
  - tests/unit/routeConfig.spec.ts
  - tests/unit/subjectTopicProgressStorage.spec.ts
  - tests/unit/staleProfessionalContentAudit.spec.ts
  - tests/unit/networkingRouteWorkflow.spec.ts
  - tests/component/ComputerFoundationSubjectSwitcher.spec.ts
  - tests/unit/splitComputerPrinciplesRoutes.spec.ts
  - tests/component/AppShellSmoke.spec.ts
  - tests/unit/algorithmsRouteWorkflow.spec.ts
  - tests/unit/professionalTopics.spec.ts
  - tests/unit/informationManagementRouteWorkflow.spec.ts
  - tests/unit/projectArchitecture.spec.ts
-->