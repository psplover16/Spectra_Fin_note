## 1. 來源與測試保護

- [x] [P] 1.1 核對六份 Markdown 與六個 topic id 的一對一對應，確認實作只沿用 md 既有內容、順序與標題，並以人工內容審查確認來源檔沒有被修改且 `table表示`、`用UL/LI表示` 只作為編排指示。
- [x] 1.2 先更新 `tests/unit/professionalTopics.spec.ts`，讓 `cp-performance-formulas`、`cp-risc-cisc`、`cp-memory-hierarchy`、`cp-memory-classification`、`cp-registers`、`cp-cache` 被視為已填入內容；驗證目標是測試能檢查 sourceFiles、非空 lead/sections、關鍵內容與編排註記不可顯示。
- [x] 1.3 更新 `tests/unit/computerPrinciplesRouteWorkflow.spec.ts` 與 `tests/unit/staleProfessionalContentAudit.spec.ts` 的 filled topic / source file 清單，讓 route workflow 與 stale audit 將六個 topic 視為正式 lessonArticle；驗證目標是這兩個測試檔能覆蓋 `sourceFilesByFilledTopicId` 與 `filledComputerPrinciplesTopicIds`。

## 2. Formal topic data

- [x] 2.1 實作 Computer principles Markdown-backed topics contain arranged lesson articles 的資料接線：在 `src/modules/subjectTopics/data/professionalTopics.ts` 為六個 topic 加入對應 Markdown sourceFiles、terms、summary 與專用 lessonArticle factory branch；驗證目標是六個 topic 不再回到空 skeleton。
- [x] 2.2 將 `六、效能名詞與公式_新手國考教材.md` 與 `七、RISC 與 CISC_新手國考教材.md` 的既有內容編排成 `cp-performance-formulas`、`cp-risc-cisc` 的 lead 與 sections；驗證目標是對應單元測試可找到公式、ISA、RISC/CISC 重點且不出現 raw 編排註記。
- [x] 2.3 將 `八、Memory 階層圖_新手國考教材.md` 與 `九、Memory 分類圖_新手國考教材.md` 的既有內容編排成 `cp-memory-hierarchy`、`cp-memory-classification` 的 lead 與 sections；驗證目標是對應單元測試可找到 5 層階層、L1/L2/L3、RAM/ROM、SRAM/DRAM、ROM 類型等內容。
- [x] 2.4 將 `十、Register（暫存器）_新手國考教材.md` 與 `十一、Cache_新手國考教材.md` 的既有內容編排成 `cp-registers`、`cp-cache` 的 lead 與 sections，並在 Cache 內容加入已確認的「下一層記憶體」短句；驗證目標是測試可找到 PC/IR、常見暫存器、Hit/Miss/AMAT、Write Allocate/No Write Allocate 與 Main Memory/RAM 說明。

## 3. 內容審查與驗證

- [x] 3.1 進行專業科目內容審查，確認六個 topic 的定義正確、公式與解釋未被改寫、md 既有順序與標題沒有被重切；驗證目標是人工比對六份 md 與 formal data 後沒有發現教材核心觀念漂移。
- [x] 3.2 執行 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts`，驗證六個 Markdown-backed topic 的 sourceFiles、非空 lessonArticle、編排註記清理與 route workflow 對齊。
- [x] 3.3 執行 `npm run typecheck`，驗證新增 lessonArticle data 與測試更新符合 TypeScript 型別契約。
- [x] 3.4 執行 `spectra validate fill-computer-principles-md-topics`，驗證 proposal、spec 與 tasks 在 apply 前仍符合 Spectra artifact 規則。

## 4. Lead/sourceLabel 空值、orderedList 與 text 換行慣例

- [x] 4.1 更新 `tests/unit/professionalTopics.spec.ts`、`tests/unit/computerPrinciplesRouteWorkflow.spec.ts`、`tests/unit/staleProfessionalContentAudit.spec.ts`，讓 Markdown-backed Computer Principles topic 的完成條件改為 sourceFiles、非空 sections、lead 可為空、section `sourceLabel` 可省略，並檢查一般教學 section blocks 預設使用 `orderedList`、表格內容才保留 `table`，以及至少一個 learner-facing `text` 或 orderedList item 保留實際 `\n` 換行；驗證目標是測試能保護 sections 內容仍存在、不依賴 `lessonArticle.lead` 非空、不依賴 section `sourceLabel` 非空、不再把 `paragraph` 或 `bulletList` 當一般教學段落的預設，且資料沒有把換行轉成可見的 `\\n` 字樣。
- [x] 4.2 對齊 `src/modules/subjectTopics/data/professionalTopics.ts` 的 Markdown-backed topic data，讓六個 topic 的教材正文放在 sections，`lessonArticle.lead` 依新慣例保持空陣列，section `sourceLabel` 依新慣例省略或保持 `undefined`，非表格 section blocks 預設改為 `orderedList`，需要斷行的文字直接在字串中保留實際 `\n`；驗證目標是相關單元測試能看到六個 topic 的 sections 與關鍵字，但不依賴 lead 或 sourceLabel，且 Markdown 編排後的一般教學內容以 orderedList 呈現並保留換行。
- [x] 4.3 更新 `src/modules/subjectTopics/components/SubjectTopicPage.vue` 與 `src/styles/main.css` 的 subject topic text rendering，讓 paragraph、lessonArticle lead、orderedList item、bulletList item 與 table cell 內的文字遇到實際 `\n` 時以換行顯示；驗證目標是新增或更新 `tests/unit/SubjectTopicPage.spec.ts`，用包含 `第一行\n第二行` 的 topic fixture 確認 renderer 保留文字內容並套用可呈現換行的樣式。
- [x] 4.4 重新執行 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts tests/unit/SubjectTopicPage.spec.ts`、`npm run typecheck`、`spectra validate fill-computer-principles-md-topics`，驗證 lead/sourceLabel 空值慣例、orderedList blocks 預設慣例、`text` 換行渲染、型別契約與 Spectra artifacts 全部通過。

## 5. 單項 paragraph 與多項 orderedList 慣例

- [x] 5.1 更新 `tests/unit/professionalTopics.spec.ts` 的 Computer principles Markdown-backed topics contain arranged lesson articles 檢查，讓單一項目的教學內容優先接受並要求 `paragraph` + `text`，多個項目的教學內容優先要求 `orderedList`，同時保留 table、lead 空陣列、sourceLabel 省略與 `\n` 換行保護；驗證目標是 `npx vitest run tests/unit/professionalTopics.spec.ts` 能反映新的 block kind 慣例。
- [x] 5.2 依 5.1 的測試結果最小幅度對齊 `src/modules/subjectTopics/data/professionalTopics.ts`，保留使用者已調整的教材文字、順序與段落編排，只修正不符合「單項 paragraph、多項 orderedList」慣例的 block kind；驗證目標是 `npx vitest run tests/unit/professionalTopics.spec.ts tests/unit/computerPrinciplesRouteWorkflow.spec.ts tests/unit/staleProfessionalContentAudit.spec.ts tests/unit/SubjectTopicPage.spec.ts`、`npm run typecheck`、`spectra validate fill-computer-principles-md-topics` 全部通過。
