## 1. 變更治理與來源邊界

- [ ] 1.1 建立本 change 的任務拆分原則，明確記錄 `tasks.md` 任務數量不設上限且不得合併不同科目、不同 topic、生成與驗證工作；以 `spectra analyze ingest-professional-subject-content --json` 無 Critical/Warning 驗證。
- [ ] 1.2 建立 `_private` 來源白名單，列出本次允許讀取的 `計算機概論.txt`、`網概.txt`、`資料庫.txt`、`資訊管理.txt`、`程式.txt`、`系統分析與設計.txt`、`資料結構與演算法.txt`、`國考常見演算法_Java遞迴非遞迴_時間複雜度.md`；以來源清單 review 驗證未包含個人筆記或受限資料夾。
- [ ] 1.3 建立禁止讀取清單，明確排除 `_private/筆記.md`、`_private/_private_notes/筆記.txt`、`_private/_private_notes/**/done/**`、`_private/_private_fileAssets/**/done/**` 與第一批排除的 `_private/程式語言_all.pdf`；以來源清單 review 驗證每個 forbidden path 都被標記為 excluded。
- [ ] 1.4 建立 manifest 狀態字典，讓每個來源 topic 只能是 `pending-draft`、`drafted`、`verified`、`blocked`、`imported`；以 manifest schema review 驗證沒有其他狀態字串。
- [ ] 1.5 建立 `_TMP` 檔名規則，讓每個草稿使用 `<timestamp>-<subject>-<topic>.md` 且 topic slug 可追蹤回 manifest；以兩個範例檔名的人工檢查驗證格式。
- [ ] 1.6 建立 verifier checklist 共用模板，包含來源對應、考試大綱、記憶重點、理解重點、事實正確性、Java 語意、複雜度、穩定性、中英專有名詞、新手可讀性；以模板檔 review 驗證每個檢查項存在。
- [ ] 1.7 建立完成紀錄格式，要求每個 topic 匯入正式 app data 時保留 sourceFiles、sourceSummary、verifiedBy、verifiedAt 或 verifierSummary；以資料 fixture review 驗證欄位可填入。
- [ ] 1.8 執行 Scope boundaries 檢查，確認本 change 僅包含專業科目講義內容、路由、資料模型、`_TMP` 與驗證流程，不包含題庫測驗、PDF 第一批匯入或外部 API；以 design/tasks 對照 review 驗證。
- [ ] 1.9 建立 `待生成主題清單_yyyyMMdd-HHmmss.md` 的治理規則，要求它只能放在 `_TMP`、只追蹤本 change 的待生成 topic、不得混入個人筆記或受限來源；以清單模板 review 驗證欄位與邊界。

## 2. 路由、導覽與進度狀態

- [ ] 2.1 實作 Progress state supports new subjects，讓 subject topic progress state 包含 `database` 與 `algorithms`，且舊 localStorage 讀取時會補齊新 key 並保留既有完成與書籤資料；以 `subjectTopicProgressStorage` unit test 驗證舊 state normalize 結果。
- [ ] 2.2 實作 `SubjectKey` 擴充，讓 `database` 與 `algorithms` 進入 `subjectKeys` 並讓 `SubjectTopicsBySubject` 必須包含兩者；以 `npm run typecheck` 驗證沒有 Record key 缺漏。
- [ ] 2.3 實作 Database and algorithms subject routes，落實設計決策「新增資料庫與演算法 route 並延伸既有科目架構」，讓 `/database` 顯示資料庫頁、`/algorithms` 顯示演算法頁；以 Vue Router route smoke test 驗證兩個 path 可渲染對應標題。
- [ ] 2.4 建立 `src/modules/database/views/DatabaseView.vue` 的資料庫頁契約，讓頁面使用 `SubjectTopicPage` 與 `database` subject key；以 route smoke test 驗證標題為「資料庫」且 topics 可讀取。
- [ ] 2.5 建立 `src/modules/algorithms/views/AlgorithmsView.vue` 的演算法頁契約，讓頁面使用 `SubjectTopicPage` 與 `algorithms` subject key；以 route smoke test 驗證標題為「演算法」且 topics 可讀取。
- [ ] 2.6 實作 Navigation reaches new professional subjects，讓主導覽可進入 `/database` 與 `/algorithms`，且兩個項目不是藏在資管或程式底下；以 Playwright navigation smoke test 驗證點擊後 path 正確。
- [ ] 2.7 實作 Route preloading includes new professional subjects，讓 preload registry 可載入 `/database` 與 `/algorithms` route component；以 `routePreload` unit test 驗證兩個 path 會呼叫對應 loader。
- [ ] 2.8 驗證主導覽小螢幕排列，確認新增資料庫與演算法後 375px viewport 無文字重疊與頁面級水平 overflow；以 Playwright 截圖或手動截圖紀錄驗證。
- [ ] 2.9 驗證新 route 的離線可用性，確認 PWA app shell 已快取時 `/database` 與 `/algorithms` reload 後可顯示頁面骨架；以 Playwright offline flow 或手動離線 reload 驗證。
- [ ] 2.10 驗證 Runtime behavior，確認 `/database` 與 `/algorithms` 都支援展開主題、勾選完成、設定書籤與切換已完成區；以 route interaction smoke test 驗證。
- [ ] 2.11 驗證舊進度相容，使用缺少 `database` 與 `algorithms` 的 localStorage fixture 啟動 app，確認既有科目進度不被清除；以 unit test 或瀏覽器 fixture 驗證。
- [ ] 2.12 更新 `PROJECT_ARCHITECTURE.md` 的 route ownership，讓文件描述 database/algorithms view、route preload 與 subject key 所屬；以文件 review 驗證路由與檔案命名一致。

## 3. 內容資料模型與渲染契約

- [ ] 3.1 實作設計決策「使用結構化 topic blocks 而非大型 Markdown 直塞」，擴充 `SubjectTopicBlock` union 支援 `examOutline`、`memoryPoints`、`understanding`、`examFocus`、`workedExample`、`complexityTable`、`termList`、`sourceNote` 與既有 `paragraph`/`teachingCode`；以 `npm run typecheck` 驗證型別完整。
- [ ] 3.2 實作 Professional topics carry source traceability，讓正式 topic data 必須保留 `sourceFiles` 與 `sourceSummary`；以一筆 fixture topic 的 type-level test 或資料檢查驗證。
- [ ] 3.3 實作 Professional topics separate exam outline, memory, and understanding content，讓 `SubjectTopicPage` 可呈現考試大綱、記憶重點與理解說明三種內容區塊；以 component test 或手動頁面檢查驗證。
- [ ] 3.4 實作 Professional topics use beginner-friendly teaching structure，讓正式內容 block 支援國考重點、國考速記、名詞解釋、核心想法、如何使用與具體例子；以至少一筆演算法 fixture 顯示完整結構作為內容審查驗證。
- [ ] 3.5 實作 Technical terms include Chinese and English names 與設計決策「專有名詞採中文英文並列規則」，讓 `termList` 與首次出現文字可保存 `中文(English Term)` 格式；以 `二元樹(Binary Tree)`、`二元搜尋法(Binary Search)`、`快速排序法(Quick Sort)` fixture 驗證。
- [ ] 3.6 實作 Section subtitles are not reintroduced，確認 `SubjectTopicCard` 與 `SubjectTopicPage` 不需要 per-section subtitle 欄位即可渲染專業內容；以 typecheck 與畫面檢查驗證 topic card 只依 title 與 blocks 呈現。
- [ ] 3.7 落實設計決策「內容資料為靜態 bundle，進度仍由 localStorage 管理」，建立 `professionalTopics` data module，內容隨 PWA bundle 讀取，進度只保留在 localStorage；以離線頁面驗證與 progress unit test 驗證。
- [ ] 3.8 驗證 Data and file contract，確保 topic data shape 包含 `subjectKey`、`sourceFiles`、`sourceSummary`、`examOutline`、`memoryPoints`、`understandingNotes`、`terms`、`blocks`；以 `npm run typecheck` 驗證。
- [ ] 3.9 建立 complexity table row 型別，讓演算法列可描述 `algorithmNameZh`、`algorithmNameEn`、`bestTime`、`averageTime`、`worstTime`、`stability`、`notes`；以 fixture complexity table 驗證欄位完整。
- [ ] 3.10 建立 sourceNote 渲染契約，讓正式 topic 可顯示或保留來源檔與來源摘要，但不暴露受限路徑內容；以 component test 或資料審查驗證。
- [ ] 3.11 驗證 Java 範例渲染，確認 `TeachingCodeBlock` 或等效元件能處理演算法 Java code、繁體中文註解與長行捲動；以 375px 截圖驗證。
- [ ] 3.12 更新 `PROJECT_ARCHITECTURE.md` 的 content model 區段，描述 topic data shape、block union 與 source traceability；以文件 review 驗證與 design 的 Data and file contract 一致。

## 4. _TMP 草稿與副代理工作流

- [ ] 4.1 建立 `_TMP` 目錄與 README，落實設計決策「_TMP 草稿是內容產製邊界，不是正式資料來源」，描述草稿只供產製與驗證，不作 runtime 資料來源；以 README review 驗證語意清楚。
- [ ] 4.2 建立 `_TMP` frontmatter 模板，包含 `topic_id`、`subject`、`source_files`、`status`、`generated_at`、`verified_by`，且 status 只能是 `draft`、`verified`、`blocked`；以模板 review 驗證必填欄位存在。
- [ ] 4.3 建立內容生成副代理 prompt 契約，要求單一副代理只讀單一 topic 所需來源、輸出一份 `_TMP` 草稿、完成後關閉；以 prompt review 驗證包含單一 topic 生命週期。
- [ ] 4.4 建立內容驗證副代理 prompt 契約，要求單一 verifier 只驗證一份 `_TMP` 草稿，可直接修正同檔並留下 verifier 結果；以 prompt review 驗證包含 blocked/verified 判定。
- [ ] 4.5 建立整合檢查副代理 prompt 契約，要求只檢查多 topic 重複、矛盾與風格不一致，不直接寫正式 app data；以 prompt review 驗證整合副代理權限邊界。
- [ ] 4.6 實作 Content production contract 的任務展開規則，要求 manifest 完成後為每個 discovered topic 新增一個 draft task、一個 verifier task、一個 import task；以 tasks.md review 驗證規則存在。
- [ ] 4.7 實作 Placeholder replacement requires verified content，讓 formal import 只接受 `status: verified` 的 `_TMP` 草稿，`draft` 與 `blocked` 不得替換 placeholder；以一筆 draft、一筆 blocked、一筆 verified fixture 驗證。
- [ ] 4.8 建立 verifier 結果格式，讓每份草稿包含 source mapping、issue list、fix summary、final status 與 verifier identity；以 `_TMP` 模板 review 驗證欄位存在。
- [ ] 4.9 建立主代理匯入檢查表，要求主代理在正式寫入前確認來源、術語、風格、路由歸屬、Java code 與 verifier status；以 checklist review 驗證每項可勾選。
- [ ] 4.10 驗證設計決策「副代理採單一 topic 生命週期並由主代理收口」，確認 README/prompt/checklist 都明確禁止副代理直接改正式 app data；以文件 review 驗證。
- [ ] 4.11 建立 `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 模板，欄位包含 route、subject、manifest id、topic id、title、source file、source section、status、draft path、generator task、verifier task、import task、notes；以模板 review 驗證可追蹤每個 topic 的產製生命週期。
- [ ] 4.12 在全部 source manifest 建立後產生 `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md`，彙整計概、網概、資料庫、資管、程式、系統分析與演算法的每個 manifest topic；以 row count 驗證清單 topic 數等於所有 manifest topic 總數。
- [ ] 4.13 讓每個內容生成、副代理驗證與正式匯入 task 都回填 `待生成主題清單_yyyyMMdd-HHmmss.md` 的 status、draft path 與備註；以三筆抽樣 topic 驗證狀態可從 pending-draft 追到 imported 或 blocked。

## 5. 計概來源與內容任務

- [ ] [P] 5.1 完整閱讀 `_private/計算機概論.txt`，產生計概 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 5.2 建立計概 topic manifest，讓每個來源 heading 對應 topic id、title、source section、status 與預估 block 結構；以 manifest review 驗證沒有未分配 heading。
- [ ] 5.3 為計概每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-computer-principles-<topic>.md` 並包含 sourceFiles、examOutline、memoryPoints、understandingNotes；以 tasks.md review 驗證 task 數量等於計概 topic 數。
- [ ] 5.4 為計概每個 manifest topic 建立內容驗證副代理 task，要求 verifier 檢查定義正確、前置觀念、新手說明與中英專有名詞；以 tasks.md review 驗證 verifier task 數量等於計概 topic 數。
- [ ] 5.5 為計概每個 verified 草稿建立正式匯入 task，要求匯入後 `/computer-principles` 逐步替換 placeholder 且保留 sourceSummary；以頁面 review 驗證至少一筆 topic 完整顯示。
- [ ] 5.6 執行計概內容審查，確認內容符合「新手自學、手把手、通俗說明」且程式或公式例子有驗算步驟；以 content review log 驗證。

## 6. 網概來源與內容任務

- [ ] [P] 6.1 完整閱讀 `_private/網概.txt`，產生網概 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 6.2 建立網概 topic manifest，讓每個來源 heading 對應 topic id、title、source section、status 與預估 block 結構；以 manifest review 驗證沒有未分配 heading。
- [ ] 6.3 為網概每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-networking-<topic>.md` 並包含 sourceFiles、examOutline、memoryPoints、understandingNotes；以 tasks.md review 驗證 task 數量等於網概 topic 數。
- [ ] 6.4 為網概每個 manifest topic 建立內容驗證副代理 task，要求 verifier 檢查名詞定義、網路層級概念、易混觀念與中英專有名詞；以 tasks.md review 驗證 verifier task 數量等於網概 topic 數。
- [ ] 6.5 為網概每個 verified 草稿建立正式匯入 task，要求匯入後 `/networking` 逐步替換 placeholder 且保留 sourceSummary；以頁面 review 驗證至少一筆 topic 完整顯示。
- [ ] 6.6 執行網概內容審查，確認每個常見協定、層級或設備名詞首次出現有中英對照與新手說明；以 content review log 驗證。

## 7. 資料庫來源與內容任務

- [ ] [P] 7.1 完整閱讀 `_private/資料庫.txt`，產生資料庫 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 7.2 建立資料庫 topic manifest，讓每個來源 heading 對應 topic id、title、source section、status 與預估 block 結構，並確認第一批不使用 `_private/資料結構與演算法.txt`；以 manifest review 驗證來源邊界。
- [ ] 7.3 為資料庫每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-database-<topic>.md` 並包含 sourceFiles、examOutline、memoryPoints、understandingNotes；以 tasks.md review 驗證 task 數量等於資料庫 topic 數。
- [ ] 7.4 為資料庫每個 manifest topic 建立內容驗證副代理 task，要求 verifier 檢查資料庫名詞、正規化、SQL 或設計概念正確性與中英專有名詞；以 tasks.md review 驗證 verifier task 數量等於資料庫 topic 數。
- [ ] 7.5 為資料庫每個 verified 草稿建立正式匯入 task，要求匯入後 `/database` 逐步替換 placeholder 且保留 sourceSummary；以頁面 review 驗證至少一筆 topic 完整顯示。
- [ ] 7.6 執行資料庫內容審查，確認每個主題能區分考試大綱、記憶重點與理解說明；以 content review log 驗證。

## 8. 資管來源與內容任務

- [ ] [P] 8.1 完整閱讀 `_private/資訊管理.txt`，產生資管 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 8.2 建立資管 topic manifest，讓每個來源 heading 對應 topic id、title、source section、status 與預估 block 結構；以 manifest review 驗證沒有未分配 heading。
- [ ] 8.3 為資管每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-information-management-<topic>.md` 並包含 sourceFiles、examOutline、memoryPoints、understandingNotes；以 tasks.md review 驗證 task 數量等於資管 topic 數。
- [ ] 8.4 為資管每個 manifest topic 建立內容驗證副代理 task，要求 verifier 檢查管理名詞、資訊系統觀念、流程類概念與中英專有名詞；以 tasks.md review 驗證 verifier task 數量等於資管 topic 數。
- [ ] 8.5 為資管每個 verified 草稿建立正式匯入 task，要求匯入後 `/information-management` 逐步替換 placeholder 且保留 sourceSummary；以頁面 review 驗證至少一筆 topic 完整顯示。
- [ ] 8.6 執行資管內容審查，確認內容不和程式或系統分析 topic 混淆且保留國考重點；以 content review log 驗證。

## 9. 程式與系統分析來源內容任務

- [ ] [P] 9.1 完整閱讀 `_private/程式.txt`，產生程式 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 9.2 完整閱讀 `_private/系統分析與設計.txt`，產生系統分析 source reading log，記錄每個 heading、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 9.3 建立程式 topic manifest，讓 `_private/程式.txt` 每個來源 heading 對應 topic id、title、source section、status 與預估 block 結構；以 manifest review 驗證沒有未分配 heading。
- [ ] [P] 9.4 建立系統分析與設計 topic manifest，讓每個 topic title 明確標示「系統分析與設計」領域並歸入程式路由；以 manifest review 驗證領域標籤存在。
- [ ] 9.5 為程式每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-programming-<topic>.md` 並包含 sourceFiles、examOutline、memoryPoints、understandingNotes；以 tasks.md review 驗證 task 數量等於程式 topic 數。
- [ ] 9.6 為系統分析與設計每個 manifest topic 建立內容生成副代理 task，要求輸出 `_TMP/<timestamp>-programming-system-analysis-<topic>.md` 並標明系統分析與設計領域；以 tasks.md review 驗證 task 數量等於系統分析 topic 數。
- [ ] 9.7 為程式與系統分析每個 manifest topic 建立內容驗證副代理 task，要求 verifier 檢查程式概念、Java 範例註解、系統分析名詞與中英專有名詞；以 tasks.md review 驗證 verifier task 數量等於兩份 manifest topic 總數。
- [ ] 9.8 為程式與系統分析每個 verified 草稿建立正式匯入 task，要求匯入後 `/programming` 逐步替換 placeholder 且保留 sourceSummary；以頁面 review 驗證至少一筆程式 topic 與一筆系統分析 topic 完整顯示。
- [ ] 9.9 執行程式內容審查，確認 Java 範例註解說明作答思路、想法與考官可見用意；以 content review log 驗證每個 code block 至少一段思路註解。

## 10. 演算法來源盤點與整體模板

- [ ] [P] 10.1 完整閱讀 `_private/資料結構與演算法.txt`，產生演算法 source reading log，記錄每個 heading、排序項目、資料結構項目、考試大綱、記憶重點與理解重點；以 reading log review 驗證每個 heading 均已盤點。
- [ ] [P] 10.2 完整閱讀 `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`，產生常見演算法 source reading log，記錄每個演算法、程式碼版本、複雜度與來源狀態；以 reading log review 驗證每個演算法均已盤點。
- [ ] 10.3 實作 Existing common algorithms source is inventoried，建立演算法 inventory，將來源內每個演算法標記為 included、deferred 或 blocked 並填原因；以 manifest review 驗證沒有空白狀態。
- [ ] 10.4 建立演算法總 manifest，確認 `_private/資料結構與演算法.txt` 全部歸入演算法 route，不重複匯入資料庫；以 manifest review 驗證 route owner 全部為 algorithms。
- [ ] 10.5 建立設計決策「演算法內容使用固定模板與基準表」的 topic 模板，包含國考重點、國考速記、名詞解釋、核心想法、手算步驟、Java 遞迴版、Java 非遞迴版、複雜度與穩定性、易錯提醒、中英專有名詞、來源註記；以模板 review 驗證每個 section 存在。
- [ ] 10.6 建立 Sorting complexity table follows the approved baseline 的基準資料，包含 Bubble、Selection、Insertion、Merge、Quick、Heap、Shell 的最佳、平均、最差、穩定性與備註；以資料審查確認完全符合 `_private/propose.md` 基準表。
- [ ] 10.7 建立 Algorithm verifier blocks unsafe content 的演算法 verifier 檢查表，要求複雜度、穩定性、Java 語意、來源對應、專有名詞與新手可讀性全部通過才可 verified；以 checklist review 驗證。
- [ ] 10.8 建立演算法整合檢查副代理 task，要求比對所有演算法 topic 的術語、複雜度、程式碼風格與重複內容；以 integration review report 驗證。

## 11. 排序法逐題生成與驗證任務

- [ ] [P] 11.1 建立氣泡排序法(Bubble Sort) 內容生成副代理 task，輸出含 early stop、非遞迴標準版、遞迴教學版、O(n)/O(n^2)/O(n^2)、穩定性與 Java 思路註解的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.2 建立氣泡排序法(Bubble Sort) verifier task，檢查 early stop 最佳 O(n)、穩定性、遞迴版教學定位與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.3 建立選擇排序法(Selection Sort) 內容生成副代理 task，輸出含非遞迴標準版、遞迴教學版、O(n^2)/O(n^2)/O(n^2)、通常不穩定與交換次數少說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.4 建立選擇排序法(Selection Sort) verifier task，檢查穩定性描述、交換次數少、遞迴教學定位與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.5 建立插入排序法(Insertion Sort) 內容生成副代理 task，輸出含非遞迴標準版、遞迴練習版、O(n)/O(n^2)/O(n^2)、穩定性與近乎排序資料說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.6 建立插入排序法(Insertion Sort) verifier task，檢查小資料或近乎排序適用情境、穩定性、遞迴版用途與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.7 建立合併排序法(Merge Sort) 內容生成副代理 task，輸出含遞迴主版本、bottom-up 非遞迴版、O(n log n) 三種情境、穩定性與額外空間說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.8 建立合併排序法(Merge Sort) verifier task，檢查分治流程、額外空間、穩定性、遞迴與非遞迴版本正確性；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.9 建立快速排序法(Quick Sort) 內容生成副代理 task，輸出含遞迴主版本、stack 非遞迴版、pivot 退化說明、O(n log n)/O(n log n)/O(n^2) 與不穩定說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.10 建立快速排序法(Quick Sort) verifier task，檢查 pivot 選擇、partition 邏輯、最差 O(n^2)、不穩定性與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.11 建立堆積排序法(Heap Sort) 內容生成副代理 task，輸出含非遞迴標準版、recursive heapify 版本、O(n log n) 三種情境、不穩定、原地排序與 heap 說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.12 建立堆積排序法(Heap Sort) verifier task，檢查 heapify 遞迴點、原地排序、不穩定性與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 11.13 建立希爾排序法(Shell Sort) 內容生成副代理 task，輸出含標準非遞迴版、gap 影響、最差可到 O(n^2)、不穩定與「遞迴改寫非國考主流」說明的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 11.14 建立希爾排序法(Shell Sort) verifier task，檢查未把遞迴版當主範例、gap 複雜度描述、不穩定性與 Java 註解；以 verifier result 為 verified 或 blocked 驗證。
- [ ] 11.15 實作 Sorting topics provide recursive and iterative Java versions with Shell Sort exception，確認六個排序有遞迴與非遞迴 Java 版本，Shell Sort 只有非遞迴主版本；以演算法 content review 表格驗證。
- [ ] 11.16 將 verified 排序法草稿匯入正式 Algorithms data，保留複雜度表、sourceSummary 與 verifier summary；以 `/algorithms` 頁面 review 與 `npm run typecheck` 驗證。

## 12. 常見演算法逐題生成與驗證任務

- [ ] [P] 12.1 建立 Fibonacci 序列(Fibonacci Sequence) 內容生成副代理 task，輸出含遞迴版、迭代版、重複計算提醒、時間複雜度與 Java 思路註解的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 12.2 建立 Fibonacci 序列(Fibonacci Sequence) verifier task，檢查遞迴重複計算提醒、迭代版正確性、複雜度與新手說明；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 12.3 建立最大公因數(Greatest Common Divisor) 內容生成副代理 task，輸出含輾轉相除法、遞迴版、迭代版、時間複雜度與 Java 思路註解的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 12.4 建立最大公因數(Greatest Common Divisor) verifier task，檢查輾轉相除法邏輯、終止條件、遞迴與迭代版本一致性；以 verifier result 為 verified 或 blocked 驗證。
- [ ] [P] 12.5 建立二元搜尋法(Binary Search) 內容生成副代理 task，輸出含資料必須先排序、已排序陣列範例、遞迴版、迭代版、時間複雜度與 Java 思路註解的 `_TMP` 草稿；以 verifier checklist 驗證草稿欄位完整。
- [ ] [P] 12.6 建立二元搜尋法(Binary Search) verifier task，檢查資料先排序前提、邊界條件、mid 計算、遞迴與迭代版本正確性；以 verifier result 為 verified 或 blocked 驗證。
- [ ] 12.7 實作 Common algorithms provide appropriate Java variants，確認 Fibonacci、最大公因數、二元搜尋法都提供符合教學定位的 Java 遞迴與非遞迴範例；以演算法 content review 表格驗證。
- [ ] 12.8 實作 Algorithm content includes required first-batch examples，確認 Algorithms 正式 topic list 包含氣泡排序法、快速排序法、Fibonacci 序列、最大公因數、二元搜尋法、選擇排序法、插入排序法；以 topic inventory test 或人工清單驗證。
- [ ] 12.9 將 verified 常見演算法草稿匯入正式 Algorithms data，保留 sourceSummary、Java code blocks、complexity 與 verifier summary；以 `/algorithms` 頁面 review 與 `npm run typecheck` 驗證。

## 13. 各路由正式匯入與 placeholder 替換

- [ ] 13.1 將計概 verified 草稿分批匯入正式 app data，讓 `/computer-principles` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證已匯入 topic 顯示來源、考試大綱、記憶重點與理解說明。
- [ ] 13.2 將網概 verified 草稿分批匯入正式 app data，讓 `/networking` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證已匯入 topic 顯示來源、考試大綱、記憶重點與理解說明。
- [ ] 13.3 將資料庫 verified 草稿分批匯入正式 app data，讓 `/database` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證已匯入 topic 顯示來源、考試大綱、記憶重點與理解說明。
- [ ] 13.4 將資管 verified 草稿分批匯入正式 app data，讓 `/information-management` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證已匯入 topic 顯示來源、考試大綱、記憶重點與理解說明。
- [ ] 13.5 將程式 verified 草稿分批匯入正式 app data，讓 `/programming` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證已匯入 topic 顯示來源、考試大綱、記憶重點與理解說明。
- [ ] 13.6 將演算法 verified 草稿分批匯入正式 app data，讓 `/algorithms` 使用正式 topic 取代對應 placeholder；以頁面 review 驗證排序與常見演算法 topic 顯示完整。
- [ ] 13.7 驗證 Placeholder replacement requires verified content，確認未完成 verifier 的 subject 仍保留 placeholder，且 verified topic 不會造成頁面空白；以每個 route 人工檢查驗證。
- [ ] 13.8 建立正式匯入差異清單，記錄每個 route 已匯入、保留 placeholder、blocked 的 topic 數量；以 import summary review 驗證數量與 manifest 對上。

## 14. 測試、效能與文件驗收

- [ ] 14.1 驗證 Acceptance criteria：執行 `npm run typecheck`，確認 `SubjectKey`、`SubjectTopicsBySubject`、`professionalTopics` 與 progress state 沒有型別缺漏。
- [ ] 14.2 驗證 Runtime behavior：執行主要 route smoke test，確認 `/database` 與 `/algorithms` 能渲染、展開主題、勾選完成、設定書籤。
- [ ] 14.3 驗證 Data and file contract：執行 topic fixture unit test 或等效 type-level test，確認正式 topic data 保留來源註記、考試大綱、記憶重點、理解說明、中英專有名詞與 blocks。
- [ ] 14.4 驗證 Content production contract：人工抽查至少一個計概 topic、一個網概 topic、一個資料庫 topic、一個資管 topic、一個程式 topic、一個演算法 topic 的完整鏈路，從來源檔、`_TMP` draft、verifier 修正、verified 狀態到正式 app data 都可追蹤。
- [ ] 14.5 執行 `npm run build`，確認 PWA build 成功且單一 chunk 未超過 500 KB 警戒線；若超過，將 subject data 改成 lazy import 並再次驗證。
- [ ] 14.6 執行 Playwright 或手動手機寬度驗收，確認 `/database` 與 `/algorithms` 在 375px viewport 無文字重疊、無頁面級水平 overflow、離線 reload 可看到已快取 app shell。
- [ ] 14.7 執行專有名詞審查，確認標題、表格、重點清單與首次出現文字都使用 `中文(English Term)` 格式；以 term audit report 驗證。
- [ ] 14.8 執行 Java examples explain examiner-visible reasoning 程式碼註解審查，確認每個 Java 範例註解都有說明作答思路、想法與考官可見用意；以 code-comment audit report 驗證。
- [ ] 14.9 更新 `PROJECT_ARCHITECTURE.md`，記錄新 route、topic data shape、`_TMP` 草稿流程、副代理契約、localStorage progress normalize 行為與正式匯入流程；以文件 review 確認與 design 的 Implementation Contract 一致。
- [ ] 14.10 執行 `spectra analyze ingest-professional-subject-content --json` 與 `spectra validate ingest-professional-subject-content`，確認 artifacts 與實作前提仍一致；若發現 spec 與實作不一致，回寫對應 spec delta 後再驗證。
- [ ] 14.11 驗證 `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 與各 source manifest、草稿、verifier 結果、正式匯入差異清單一致；以追蹤表審查確認沒有 orphan topic、重複 topic 或未回填狀態。
