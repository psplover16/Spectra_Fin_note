## Context

目前 app 已有 Vue PWA 骨架、科目 route、共用 SubjectTopicPage、SubjectTopicCard、TeachingCodeBlock 與 localStorage 進度儲存，但專業科目仍主要是 placeholder。_private/propose.md 已收斂出新需求：新增資料庫與演算法路由，完整閱讀指定 txt/md 來源，分批匯入六個專業科目的正式自學內容，並用 _TMP 草稿、副代理生成、verifier 驗證與主代理整合來降低國考內容錯誤率。

本變更不引入伺服器、外部 API 或新套件。正式內容以靜態前端資料隨 PWA bundle 提供離線閱讀；使用者進度仍使用既有 localStorage 儲存。大量來源檔只在內容產製階段讀取，正式 app 不讀取 _private。

## Goals / Non-Goals

**Goals:**

- 新增資料庫與演算法為獨立專業科目 route，並讓導覽、route preload、SubjectKey 與進度儲存同步認得新科目。
- 建立足以呈現國考自學內容的 topic data shape，涵蓋來源註記、考試大綱、記憶重點、理解說明、考點、例題、複雜度、Java 範例與中英專有名詞。
- 建立 _TMP 內容草稿與 verifier 流程，要求每個 topic 先由內容生成副代理產稿，再由內容驗證副代理校對，最後才由主代理整合進正式資料。
- 分批匯入全部專業科目，任務數量不設上限，以可驗收、可回溯、可校對為優先。
- 保留現有共同科目路由與互動，不把英文、國文改成專業科目深度。

**Non-Goals:**

- 第一批不納入 _private/程式語言_all.pdf。
- 不讀取 _private/筆記.md、_private/_private_notes/筆記.txt，且不讀取受限 done 資料夾。
- 不建立題庫、測驗流程、選項辨析或答題統計；本變更只做學習講義與程式範例內容。
- 不新增遠端同步、登入、analytics 或外部 API。
- 不讓副代理直接寫入正式 app data；正式寫入由主代理收口。

## Decisions

### 新增資料庫與演算法 route 並延伸既有科目架構

資料庫與演算法作為獨立專業科目加入 app route，而不是塞入資管或程式。這可讓內容歸屬、閱讀進度與後續匯入批次保持清楚。實作時需延伸 SubjectKey、route preload registry、主導覽、科目 view 與 progress storage 預設 state。

替代方案：把資料庫併入資管、演算法併入程式。淘汰原因是單一路由內容過大，且資料結構與演算法來源已被使用者後續決策全部歸入演算法。

### 使用結構化 topic blocks 而非大型 Markdown 直塞

正式內容需從 placeholder data 走向結構化 topic data。建議資料單位保留 SubjectTopic 外層，並擴充 block union，支援 examOutline、memoryPoints、understanding、examFocus、workedExample、complexityTable、teachingCode、pitfall、sourceNote、termList 等語意 block。若短期保留 paragraph，也不得把複雜度表與 verifier 註記混成不可解析文字。

講義資料模型至少包含：id、subjectKey、title、summary、sourceBatch、sourceFiles、examOutline、memoryPoints、understandingNotes、difficulty、topicType、relatedTerms、blocks。題庫欄位如題幹、四個選項、正解、選項辨析解析不在本變更建立，因為本次不是測驗功能。

替代方案：直接把 _TMP Markdown 轉成單一 paragraph。淘汰原因是後續 UI、驗證、來源追蹤與演算法複雜度表都會難以維護。

### 內容資料為靜態 bundle，進度仍由 localStorage 管理

正式講義內容以 TypeScript data module 隨 PWA 打包，確保離線可讀。Pinia 不新增 store；目前沒有跨頁即時共享狀態需求。localStorage 繼續只負責每個 SubjectKey 的完成狀態與閱讀書籤。

state shape 維持語意為 subjects: Record<SubjectKey, SubjectProgress>。每個 SubjectProgress 至少包含 completedTopicIds: string[] 與 bookmarkedTopicId: string | null。新增 database、algorithms 後，empty progress state 必須包含兩者，讀到舊 localStorage 時要 normalize 補齊缺少的 subject key，不清除既有進度。

替代方案：把所有內容與進度放進 IndexedDB。淘汰原因是第一批內容可由靜態 bundle 解決，IndexedDB 會增加 migration 與清理成本；本變更不需要大量使用者產生資料。

### _TMP 草稿是內容產製邊界，不是正式資料來源

每個 topic 先產生 _TMP/<timestamp>-<subject>-<topic>.md。草稿必須包含 topic id、subject、source files、status、generated_at、verifier 結果、來源摘要、教學內容、國考考點、Java 程式碼、複雜度、易錯提醒與檢查清單。verifier 通過前不得匯入正式 app data。

每次完成來源 manifest 盤點後，主代理需在 _TMP 建立 `待生成主題清單_yyyyMMdd-HHmmss.md`，作為全部待生成 topic 的總控追蹤表。這份清單需彙整 route、subject、topic id、標題、來源檔、來源段落、目前狀態、草稿路徑、生成 task、驗證 task、匯入 task 與備註，讓大量副代理工作可被回溯與續接。

主代理只從 verifier 通過的 _TMP 草稿建立正式資料，且需保留 sourceFiles 與 source summary。正式 app 不依賴 _TMP runtime 讀取；刪除 _TMP 不影響已匯入內容運作，但會降低後續追溯能力。

替代方案：副代理直接產生 TypeScript data。淘汰原因是校對與修正會混入正式程式檔，錯誤比較難隔離。

### 每個路由單獨執行完整教材產製流程

後續內容品質重做必須以 route 為單位收口，而不是把全部專業來源混在同一條大型產線中。每個路由都需各自完成同一套生命週期：來源 txt/md → 掃描 topic + 方括號標記 → 建立單一 topic prompt → 內容生成副代理輸出 `_private/TMP/<route>/<topic-id>.draft.md` → verifier 副代理輸出 `_private/TMP/<route>/<topic-id>.verified.md` → 主流程匯入該 route 的正式 app data → 測試與人工抽查。

適用路由包含 `/computer-principles`、`/networking`、`/database`、`/information-management`、`/programming`、`/algorithms`。`/programming` 可同時擁有 `_private/程式.txt` 與 `_private/系統分析與設計.txt` 兩個來源，但仍由 `/programming` route 的追蹤表統一管理；`/algorithms` 可同時擁有資料結構與常見演算法來源，但不得把資料庫內容混入演算法 route。

每個 route 必須有自己的追蹤表，例如 `_private/TMP/computer-principles/待生成主題清單_<timestamp>.md`。追蹤表至少記錄 source file、source section、topic id、title、source labels、prompt path、draft path、verified path、import target、status、人工抽查結果與備註。全域標記定義放在 `_private/TMP/source-label-definitions.md` 或 route 可見的等效檔案；各 route 可新增 route-specific label rule，但不得覆蓋全域定義。

標記定義是內容生成契約的一部分，不是視覺裝飾。已知標記包含 `[必背]`、`[比較]`、`[會算]`、`[會畫]`、`[補充]`、`[易混淆]`、`[考點]`、`[建議]`、`[原文提醒]`、`[補充建議]`。其中 `[必背]` 必須展開為定義、重要性、最小背誦句、國考作答模板與易錯提醒；`[比較]` 必須有比較表或條列比較、差異原因、考試問法與判斷關鍵字；`[會算]` 必須有公式、變數定義與完整代入例題；`[會畫]` 必須有繪圖順序、節點定義、箭頭或資料流意義與簡易圖。

替代方案：先讓一個總生成器全量產出所有 route 的正式資料，再由測試補關鍵字。淘汰原因是測試只能檢查最低結構，無法保證教材可讀性；route-scoped draft 與 verifier 才能讓使用者逐路由人工抽查品質。

### 副代理採單一 topic 生命週期並由主代理收口

每個內容生成副代理只處理單一 topic，讀取該 topic 所需來源，輸出一份 _TMP 草稿後結束。每個內容驗證副代理只驗證同一 topic 的草稿，可直接修正同一份 _TMP 並留下 verifier 結果，完成後結束。必要時再開整合檢查副代理，比對多個 topic 是否重複、矛盾或風格不一致。

主代理負責拆 task、保護存取限制、統一術語、最後寫入正式 app data 與驗收。副代理不得讀取未授權個人筆記或受限資料夾，不得直接改正式 app data。

替代方案：讓一個長生命週期副代理連續處理整個科目。淘汰原因是內容量大、上下文容易污染，且不同 topic 的 verifier 結果不易追蹤。

### 副代理優先承擔 route 內產製與審查

為避免主流程被大量來源、草稿與審查細節污染，後續全路由重做時，route 內的可切分工作都優先交給有明確邊界的副代理。主流程只保留治理與收口責任：確認可讀來源、套用 forbidden path 規則、定義 route 邊界、派工、讀取副代理 final report、把通過 import readiness 的 verified 內容轉成正式 app data、執行測試與回報。

副代理角色分成六類：

- Route source inventory 副代理：以單一路由為範圍，讀取該 route 允許來源，輸出 source inventory、topic manifest、source labels、primary/supporting source 對應與來源衝突註記。
- Topic prompt 副代理：以 route 或小批次 topic 為範圍，依標記定義與 topic manifest 建立 `<topic-id>.prompt.md`，讓後續 writer 不需重新推導 prompt。
- Content writer 副代理：以單一 topic 為範圍，根據 prompt 與來源輸出 `<topic-id>.draft.md`，內容必須是可教新手與可應考的教材草稿。
- Verifier 副代理：以單一 topic 為範圍，驗證 draft 的來源對應、事實、標記展開、術語中英對照、公式/圖/範例與新手可讀性，輸出 `<topic-id>.verified.md` 或 blocked report。
- Route integration auditor 副代理：以單一路由為範圍，檢查多個 topic 之間的重複、矛盾、術語不一致、標記漏展開、source conflict 與風格漂移。
- Import readiness 副代理：以單一路由為範圍，檢查追蹤表、prompt、draft、verified、verifier result、manual review result 與 import target 是否一致，輸出可以匯入、暫停匯入或部分匯入的 readiness report。

所有副代理只允許寫入 `_private/TMP/<route>/` 底下的 prompt、draft、verified、audit report、readiness report 與追蹤表回填。副代理不得修改 `src/`、`tests/`、`PROJECT_ARCHITECTURE.md` 或正式 app data；正式資料更新只能由主流程在 import readiness 通過後進行。

替代方案：主流程直接讀取所有來源並撰寫全部 topic 草稿，再一次匯入正式資料。淘汰原因是主流程上下文會被大量 topic 細節污染，人工抽查難以定位責任，且任何單一 topic 的品質問題容易擴散成整個 route 的匯入風險。

### 全路由重做時舊教材內容作廢重建

第 16 組「全路由教材產製流程重做」不是在既有 professionalTopics 內容上補丁，而是把目前專業科目的正式教材內容視為 obsolete。每個 route 進入重做時，主流程需先把該 route 現有正式 topic 內容排除在 import candidate 之外；最終 route topic list 只能由本輪 route tracking、`.verified.md`、verifier result、manual review result 與 import readiness report 重建。

「刪除原本內容」的範圍是教材資料本身：topic blocks、舊 sourceSummary、舊 verifierSummary、舊 import summary 與過去低品質生成留下的正式內容。它不代表刪除 route、頁面殼、SubjectTopicPage、TeachingCodeBlock、SubjectKey、progress storage schema、共同科目內容或使用者 localStorage 進度。舊進度資料若指向已作廢 topic id，normalize 或渲染層需讓它自然失效，不得讓作廢 topic 重新出現在頁面上。

未完成本輪 verified/import readiness 的 topic 不得沿用舊正式內容。若某 topic 在重做中 blocked，route 追蹤表需保留 blocked 原因；正式 app data 應顯示空狀態、placeholder pending 狀態或已驗證的其他 topic，但不得顯示該 topic 的舊教材正文。若使用 placeholder，placeholder 必須明確是待生成狀態，不可混入舊內容段落、舊程式碼或舊來源摘要。

替代方案：保留舊 professionalTopics 作為 fallback，未生成的新 topic 才逐步覆蓋。淘汰原因是使用者已判定現有內容品質不可靠；沿用舊內容會讓頁面看起來完成，實際上繼續混入過薄、未經本輪副代理與 verifier 驗證的教材。

### 演算法內容使用固定模板與基準表

演算法 topic 必須使用更嚴格模板：國考重點、國考速記、名詞解釋、核心想法、手算步驟、Java 遞迴版、Java 非遞迴版、複雜度與穩定性、易錯提醒、專有名詞中英對照、來源註記。Shell Sort 第一批只收非遞迴標準版；遞迴改寫若未來加入，只能作為補充且需標示非國考主流。

排序複雜度與穩定性以 _private/propose.md 由 discuss.txt 摘錄的基準表為第一版驗證標準。二元搜尋法必須明確標示資料需先排序，範例資料也必須是已排序陣列。

替代方案：每個演算法自由撰寫。淘汰原因是複雜度、穩定性、遞迴與非遞迴版容易漏項或互相矛盾。

### 專有名詞採中文英文並列規則

標題、表格欄位、重點清單與首次出現的專有名詞使用中文(English Term) 格式，例如 二元樹(Binary Tree)。同一段後續重複出現可使用中文簡稱，避免閱讀負擔。中文翻譯有多種說法時，主代理需固定用詞並保留英文標準名。

替代方案：只在詞彙表集中列英文。淘汰原因是初學者閱讀正文時仍會失去對照，不利於考試與英文術語辨識。

### 計概品質補救採全量 manifest 匯入與草稿品質門檻

使用者回饋指出計概正式內容數量與馮紐曼架構深度不符合專業科目期待，且 `_TMP` 目前偏向 manifest、任務表與審查表，沒有足夠的 AI 生成講義草稿。補救策略是把計概第一批從「抽樣匯入」提升為「manifest 全量匯入」：`_TMP/manifests/computer-principles-manifest.md` 的每個 topic 都必須有實質 AI 教學草稿、verifier 結果、正式 app topic 與追蹤清單回填。

實質 AI 教學草稿不能只有來源摘要、任務狀態或檢查清單。每份已匯入草稿至少需包含：frontmatter、來源對應、國考重點、國考速記、名詞解釋、核心想法、實際例子或操作步驟、易錯提醒、中英專有名詞、verifier 結果。若 topic 是公式或程序，草稿必須有具體數字演算；若 topic 是架構或分類，草稿必須有比較表或結構化步驟。

馮紐曼架構(Von Neumann Architecture) 是計概核心 topic，正式內容需比一般 topic 更深，至少說清楚程式內儲(Stored-Program Concept)、CPU(Central Processing Unit) 五大單元、控制單元(Control Unit)、算術邏輯單元(Arithmetic Logic Unit)、記憶體(Memory)、輸入/輸出(Input/Output)、指令週期(Instruction Cycle)、馮紐曼瓶頸(Von Neumann Bottleneck)、哈佛架構(Harvard Architecture) 比較與易錯辨認。

替代方案：保留抽樣匯入並在追蹤清單標示 pending。淘汰原因是使用者已明確要求本次任務內容不能讓計概路由看起來明顯過少；pending 只能代表後續工作，不足以完成本次驗收。

## Implementation Contract

### Runtime behavior

- 使用者可從主導覽進入資料庫與演算法頁面，route path 分別為 /database 與 /algorithms。
- 新路由使用既有 SubjectTopicPage 互動：未完成區、已完成區、展開收合、完成 checkbox、閱讀書籤與 localStorage 持久化。
- 舊 localStorage progress 不含 database 或 algorithms 時，讀取流程必須補上空進度，不丟失既有科目的完成與書籤狀態。
- 專業內容 topic 顯示時不得出現先前被移除的 section subtitle 固定欄位。
- 正式內容中，每個 topic 至少保留來源檔、來源摘要、考試大綱、記憶重點或理解說明。演算法 topic 還必須呈現複雜度與穩定性資料。
- `/computer-principles` 第一批正式內容的 topic 數量必須等於 `_TMP/manifests/computer-principles-manifest.md` 的 topic row 數量，不能只匯入一筆馮紐曼架構後宣告完成。
- 馮紐曼架構 topic 必須呈現深度教學內容：程式內儲、五大單元、指令週期、瓶頸、Harvard 比較、實際例子、易錯提醒與中英術語。
- 第 16 組全路由重做完成後，六個專業 route 的正式 topic list 不得保留任何沒有本輪 route tracking row、`.verified.md`、verifier result 與 import readiness ready 狀態的舊教材 topic。
- 作廢舊 topic 不得因使用者 localStorage 仍有 completedTopicIds 或 bookmarkedTopicId 而重新顯示；進度 normalize 與頁面渲染需只承認目前正式 topic list 內的 topic id。
- Java 範例仍由 TeachingCodeBlock 或等效元件呈現，375px 寬度下文字不可互相重疊，長行可在 code block 內水平捲動。

### Data and file contract

- 新增 SubjectKey 值 database 與 algorithms，所有 SubjectTopicsBySubject 型別與 progress default state 必須包含這兩個 key。
- 正式 topic data 需能描述 sourceFiles: string[]、sourceSummary: string、examOutline: string[]、memoryPoints: string[]、understandingNotes: string[]、terms: { zh: string; en: string }[]、blocks: SubjectTopicBlock[]。
- Algorithm complexity table row shape 需能描述 algorithmNameZh、algorithmNameEn、bestTime、averageTime、worstTime、stability、notes。
- _TMP 草稿採 Markdown frontmatter。必填欄位為 topic_id、subject、source_files、status、generated_at、verified_by。
- _TMP 草稿 status 只有 draft、verified、blocked 三種。只有 verified 可被主代理匯入正式 app data。
- 已匯入正式 app data 的 topic 必須能追溯到 `_TMP` 內實質 AI 生成草稿；manifest、source reading log、任務表、審查表或匯入摘要不得被當作草稿替代品。
- 實質 AI 生成草稿必須同時包含 `## 國考重點`、`## 國考速記`、`## 名詞解釋`、`## 核心想法`、`## 實際例子` 或 `## 操作步驟`、`## 易錯提醒`、`## 專有名詞`、`## Verifier 結果`，且內容需足以支撐正式 app topic。
- `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 是內容產製追蹤清單，不是 runtime data。每列至少包含 route、subject、manifest id、topic id、title、source file、source section、status、draft path、generator task、verifier task、import task、notes。

### Content production contract

- 每個指定 txt/md 來源檔都必須先完整閱讀。沒有完成來源閱讀的 topic 不得產生 verified 草稿。
- 建立副代理任務前，主代理需先以全部 source manifest 產出 `待生成主題清單_yyyyMMdd-HHmmss.md`，並讓每個 row 對應一個待生成 topic。
- 每個內容生成副代理只處理單一 topic，輸出一份 _TMP 草稿後結束。
- 每個內容驗證副代理只驗證單一 topic，可修正同一份 _TMP 草稿，並必須留下 verifier 結果。
- 每個專業路由必須單獨執行來源掃描、topic 標記解析、單一 topic prompt、draft、verified、正式匯入、測試與人工抽查流程；任一路由未完成 verifier 前，不得以其他路由的草稿或模板內容替代。
- `_private/TMP/<route>/` 是 route-scoped human-review draft 工作區。每個 route 的 `.draft.md` 與 `.verified.md` 必須可從 route 追蹤表追溯到來源段落與標記定義。
- route 內 source inventory、topic prompt、content writer、verifier、route integration auditor 與 import readiness check 應優先由副代理完成，主流程負責派工、收口、正式匯入與驗收。
- 副代理只能寫入 `_private/TMP/<route>/` 的 prompt、draft、verified、audit、readiness 與 tracking artifact，不得直接修改 formal app data。
- 主流程只能在 import readiness report 確認 topic 具有 verified file、verifier result、來源追蹤與人工抽查狀態後，將該 topic 匯入 formal app data。
- 第 16 組全路由重做時，formal app data import 必須先以 route 為單位排除既有專業教材 topic，再只匯入本輪 import readiness 通過的 topic；舊 professionalTopics 不得作為 fallback、merge source 或內容補洞來源。
- 來源標記必須先被定義再用於副代理 prompt。遇到未知標記時，該 route 的 topic 必須停在 draft 或 blocked，不得直接 verified。
- verifier 檢查至少涵蓋來源對應、事實正確性、時間複雜度、空間複雜度、穩定性、Java 程式碼語意、考官可讀註解、新手可讀性與中英專有名詞。
- 主代理負責把 verified 草稿轉成正式 app data，並在整合時統一術語、風格、來源註記與 route 所屬。

### Scope boundaries

In scope: 新增資料庫與演算法路由、專業內容資料模型、指定 txt/md 來源內容匯入、_TMP 草稿流程、副代理契約、演算法第一批必收範例、現有進度儲存相容。

Out of scope: 題庫測驗、遠端同步、PDF 第一批匯入、個人筆記、外部考古題全文蒐集、共同科目深度改造。

### Acceptance criteria

- typecheck 通過，且 SubjectKey 新增後沒有 Record key 缺漏錯誤。
- route smoke test 可進入 /database 與 /algorithms，且頁面使用 SubjectTopicPage 呈現 topic。
- progress storage unit test 覆蓋舊 localStorage 缺少新 subject key 時會 normalize 補齊。
- 至少一個演算法 topic 經 _TMP draft 到 verified 到正式 app data 的流程完成，並保留來源註記與 verifier 結果。
- `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 的 topic row 數量需等於全部 source manifest topic 數量，且每列可追蹤 draft、verifier 與 import 狀態。
- `_TMP` 內每個已匯入的計概 topic 都有實質 AI 生成草稿，不得只有 manifest、任務拆解或摘要；draft quality test 必須驗證必要章節存在。
- `/computer-principles` 正式 topic 數量等於計概 manifest topic row 數量，且每筆 topic 都保留 sourceFiles、sourceSummary、verifiedBy、verifiedAt 或 verifierSummary。
- 馮紐曼架構 topic 的正式資料與 `_TMP` 草稿都通過深度檢查，包含程式內儲、五大單元、指令週期、瓶頸、Harvard 比較、例子、易錯點與中英術語。
- 每個專業 route 都有獨立的 `_private/TMP/<route>/待生成主題清單_<timestamp>.md` 或等效追蹤表，且每個 imported topic 都可追到 `.draft.md`、`.verified.md`、verifier 結果與人工抽查紀錄。
- 全路由重做後，六個專業 route 的正式 topic data 沒有 stale topic：每個 topic 都有本輪 route tracking row、`.verified.md` 與 import readiness ready 紀錄；blocked 或缺少 verified 的舊 topic 不得留在頁面或 formal app data。
- 每個 topic 的來源標記都依標記定義展開；含 `[會算]` 的 topic 必須有公式與代入例題，含 `[會畫]` 的 topic 必須有圖或文字圖，含 `[比較]` 的 topic 必須有比較表或條列比較。
- 演算法排序複雜度資料與 _private/propose.md 基準表一致。
- 375px Playwright 或手動截圖驗證新 route 無水平頁面 overflow、文字不重疊。
- PROJECT_ARCHITECTURE.md 說明新增 route、內容資料與 _TMP 工作流程。

## Risks / Trade-offs

- [Risk] 內容量過大導致單一 change 難以完成 → [Mitigation] tasks.md 不限制任務數，按科目與 topic 拆分，先完成資料模型與演算法模板，再分批匯入。
- [Risk] AI 生成內容出現國考知識錯誤 → [Mitigation] 每個 topic 都需要 _TMP 草稿、verifier 檢查與主代理收口；疑點保留 blocked，不猜測入庫。
- [Risk] 新 block union 過度複雜 → [Mitigation] 只加入本次內容確定需要的 block kind，並保留 paragraph 作為一般說明用途。
- [Risk] 靜態 bundle 內容變大 → [Mitigation] 每批匯入後執行 build，若 chunk 超過 500 KB 警戒線，再切分 lazy-loaded subject data。
- [Risk] 副代理輸出風格不一致 → [Mitigation] 主代理在正式匯入前統一 template、術語、中英格式、source note 與 Java 註解風格。
- [Risk] 全路由混批生成造成品質不可抽查 → [Mitigation] 每個 route 單獨建立追蹤表、draft、verified、import 與人工抽查紀錄，主流程一次只收口一個 route。
- [Risk] 主流程承擔過多內容生成細節而失去整合判斷 → [Mitigation] route source inventory、topic prompt、content writing、verification、route audit 與 import readiness 都交由副代理產出可審查 artifact，主流程只依通過的 artifact 進行正式匯入。
- [Risk] 刪除舊教材內容造成 route 暫時題目變少 → [Mitigation] 保留 route shell、empty/placeholder pending 狀態與進度 schema，但驗收時只接受本輪 verified/import readiness 通過的教材；寧可顯示待生成，也不顯示不可信舊內容。

## Migration Plan

1. 先新增 route 與 SubjectKey，讓 app 能載入空白或 placeholder 的資料庫、演算法頁面。
2. 擴充 progress storage normalize，確保舊 localStorage 使用者不會遺失既有進度。
3. 建立內容資料模型與演算法模板，再匯入第一批 verified 演算法 topic。
4. 逐科逐 topic 以 verified 草稿重建正式 topic list；第 16 組全路由重做時，舊專業教材內容先作廢，未完成本輪 verified 的 topic 只保留 pending/blocked 追蹤，不沿用舊正文。
5. 若 build chunk 超過 500 KB，改為 subject data lazy import，並保留 route preload 行為。

Rollback 策略：保留 placeholderTopics 作為 route shell fallback；若某批正式內容未通過驗證，回退該 subject 的 topics export 到 placeholder/pending 狀態或本輪已 verified 的上一個匯入批次，不回退到第 16 組之前已判定 obsolete 的舊專業教材內容，且不修改 progress storage key schema。

## Open Questions

無。_private/propose.md 已決定 change id、路由策略、來源範圍、PDF 排除、副代理流程、任務數量無上限與演算法必收範例。
