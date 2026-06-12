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

### 副代理採單一 topic 生命週期並由主代理收口

每個內容生成副代理只處理單一 topic，讀取該 topic 所需來源，輸出一份 _TMP 草稿後結束。每個內容驗證副代理只驗證同一 topic 的草稿，可直接修正同一份 _TMP 並留下 verifier 結果，完成後結束。必要時再開整合檢查副代理，比對多個 topic 是否重複、矛盾或風格不一致。

主代理負責拆 task、保護存取限制、統一術語、最後寫入正式 app data 與驗收。副代理不得讀取未授權個人筆記或受限資料夾，不得直接改正式 app data。

替代方案：讓一個長生命週期副代理連續處理整個科目。淘汰原因是內容量大、上下文容易污染，且不同 topic 的 verifier 結果不易追蹤。

### 演算法內容使用固定模板與基準表

演算法 topic 必須使用更嚴格模板：國考重點、國考速記、名詞解釋、核心想法、手算步驟、Java 遞迴版、Java 非遞迴版、複雜度與穩定性、易錯提醒、專有名詞中英對照、來源註記。Shell Sort 第一批只收非遞迴標準版；遞迴改寫若未來加入，只能作為補充且需標示非國考主流。

排序複雜度與穩定性以 _private/propose.md 由 discuss.txt 摘錄的基準表為第一版驗證標準。二元搜尋法必須明確標示資料需先排序，範例資料也必須是已排序陣列。

替代方案：每個演算法自由撰寫。淘汰原因是複雜度、穩定性、遞迴與非遞迴版容易漏項或互相矛盾。

### 專有名詞採中文英文並列規則

標題、表格欄位、重點清單與首次出現的專有名詞使用中文(English Term) 格式，例如 二元樹(Binary Tree)。同一段後續重複出現可使用中文簡稱，避免閱讀負擔。中文翻譯有多種說法時，主代理需固定用詞並保留英文標準名。

替代方案：只在詞彙表集中列英文。淘汰原因是初學者閱讀正文時仍會失去對照，不利於考試與英文術語辨識。

## Implementation Contract

### Runtime behavior

- 使用者可從主導覽進入資料庫與演算法頁面，route path 分別為 /database 與 /algorithms。
- 新路由使用既有 SubjectTopicPage 互動：未完成區、已完成區、展開收合、完成 checkbox、閱讀書籤與 localStorage 持久化。
- 舊 localStorage progress 不含 database 或 algorithms 時，讀取流程必須補上空進度，不丟失既有科目的完成與書籤狀態。
- 專業內容 topic 顯示時不得出現先前被移除的 section subtitle 固定欄位。
- 正式內容中，每個 topic 至少保留來源檔、來源摘要、考試大綱、記憶重點或理解說明。演算法 topic 還必須呈現複雜度與穩定性資料。
- Java 範例仍由 TeachingCodeBlock 或等效元件呈現，375px 寬度下文字不可互相重疊，長行可在 code block 內水平捲動。

### Data and file contract

- 新增 SubjectKey 值 database 與 algorithms，所有 SubjectTopicsBySubject 型別與 progress default state 必須包含這兩個 key。
- 正式 topic data 需能描述 sourceFiles: string[]、sourceSummary: string、examOutline: string[]、memoryPoints: string[]、understandingNotes: string[]、terms: { zh: string; en: string }[]、blocks: SubjectTopicBlock[]。
- Algorithm complexity table row shape 需能描述 algorithmNameZh、algorithmNameEn、bestTime、averageTime、worstTime、stability、notes。
- _TMP 草稿採 Markdown frontmatter。必填欄位為 topic_id、subject、source_files、status、generated_at、verified_by。
- _TMP 草稿 status 只有 draft、verified、blocked 三種。只有 verified 可被主代理匯入正式 app data。
- `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md` 是內容產製追蹤清單，不是 runtime data。每列至少包含 route、subject、manifest id、topic id、title、source file、source section、status、draft path、generator task、verifier task、import task、notes。

### Content production contract

- 每個指定 txt/md 來源檔都必須先完整閱讀。沒有完成來源閱讀的 topic 不得產生 verified 草稿。
- 建立副代理任務前，主代理需先以全部 source manifest 產出 `待生成主題清單_yyyyMMdd-HHmmss.md`，並讓每個 row 對應一個待生成 topic。
- 每個內容生成副代理只處理單一 topic，輸出一份 _TMP 草稿後結束。
- 每個內容驗證副代理只驗證單一 topic，可修正同一份 _TMP 草稿，並必須留下 verifier 結果。
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
- 演算法排序複雜度資料與 _private/propose.md 基準表一致。
- 375px Playwright 或手動截圖驗證新 route 無水平頁面 overflow、文字不重疊。
- PROJECT_ARCHITECTURE.md 說明新增 route、內容資料與 _TMP 工作流程。

## Risks / Trade-offs

- [Risk] 內容量過大導致單一 change 難以完成 → [Mitigation] tasks.md 不限制任務數，按科目與 topic 拆分，先完成資料模型與演算法模板，再分批匯入。
- [Risk] AI 生成內容出現國考知識錯誤 → [Mitigation] 每個 topic 都需要 _TMP 草稿、verifier 檢查與主代理收口；疑點保留 blocked，不猜測入庫。
- [Risk] 新 block union 過度複雜 → [Mitigation] 只加入本次內容確定需要的 block kind，並保留 paragraph 作為一般說明用途。
- [Risk] 靜態 bundle 內容變大 → [Mitigation] 每批匯入後執行 build，若 chunk 超過 500 KB 警戒線，再切分 lazy-loaded subject data。
- [Risk] 副代理輸出風格不一致 → [Mitigation] 主代理在正式匯入前統一 template、術語、中英格式、source note 與 Java 註解風格。

## Migration Plan

1. 先新增 route 與 SubjectKey，讓 app 能載入空白或 placeholder 的資料庫、演算法頁面。
2. 擴充 progress storage normalize，確保舊 localStorage 使用者不會遺失既有進度。
3. 建立內容資料模型與演算法模板，再匯入第一批 verified 演算法 topic。
4. 逐科逐 topic 以 verified 草稿替換 placeholder；未完成科目保留 placeholder。
5. 若 build chunk 超過 500 KB，改為 subject data lazy import，並保留 route preload 行為。

Rollback 策略：保留 placeholderTopics 作為 fallback；若某批正式內容未通過驗證，回退該 subject 的 topics export 到 placeholder 或上一批 verified data，不修改 progress storage key schema。

## Open Questions

無。_private/propose.md 已決定 change id、路由策略、來源範圍、PDF 排除、副代理流程、任務數量無上限與演算法必收範例。
