## 1. 內容映射

- [x] [P] 1.1 將 approved Markdown 對齊 `Computer principles machine instruction cycle topic uses a source-traced teaching article` 合約，確認必備內容包含考前小抄、機器指令範例、指令週期階段、指令週期關鍵字、易混淆比較與國考判斷流程；以內容審查確認沒有 `[必背]`、`[補充]`、`[理解]`、`[比較]` 等括號標籤進入正式文章。
- [x] [P] 1.2 確認既有 `lessonArticle` data shape 能承載本主題，包含 `paragraph`、`orderedList`、`table`、`sourceFiles`、`sourceSection`、`lead` 與 `sections`；以檢視 `SubjectTopicPage` 現有 orderedList/table rendering 與既有測試模式確認不需要新增 renderer 或 marker type。

## 2. 正式主題內容

- [x] 2.1 在 `src/modules/subjectTopics/data/professionalTopics.ts` 補上 `cp-machine-instruction-cycle` 的正式 topic factory/data，使正式資料呈現 title、summary、sourceFiles、sourceSection、terms 與 exactly one `lessonArticle` block；以序列化 topic 檢查確認來源包含 `_private/計算機概論.txt` 與 `_private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md`。
- [x] 2.2 將文章 sections 編排成 `考前小抄`、`機器指令範例`、`指令週期怎麼理解`、`指令週期關鍵字`、`易混淆比較`、`國考怎麼判斷`，並讓考前小抄、指令週期階段、國考判斷流程使用 `orderedList`，指令範例、關鍵字解釋、易混淆比較使用 `table`；以單元測試斷言 block kind 與 section heading 確認結構符合 spec。
- [x] 2.3 確認文章涵蓋 `Opcode`、`Operand`、`位址欄位`、`Effective Address`、`PC`、`IR`、`Fetch`、`Decode`、`Operand Fetch`、`Execute`、`Write Back`、`I/O`、`ALU`、`Branch`，且比較 `Fetch` vs `Operand Fetch`、`PC` vs `IR`、`Decode` vs `Execute`；以內容審查與序列化字串測試共同驗證定義正確且適合新手閱讀。

## 3. 驗證

- [x] 3.1 在 `tests/unit/professionalTopics.spec.ts` 加入 `cp-machine-instruction-cycle` coverage，驗證 title、source traceability、section headings、orderedList/table block kinds、必要術語、無 bracketed study labels、無 icon-specific data property；執行 `./node_modules/.bin/vitest.cmd run tests/unit/professionalTopics.spec.ts` 確認通過。
- [x] 3.2 執行 `./node_modules/.bin/vitest.cmd run tests/unit/professionalTopics.spec.ts tests/component/SubjectTopicProfessionalBlocks.spec.ts` 與 `./node_modules/.bin/vue-tsc.cmd --noEmit`，確認正式資料與既有 lessonArticle renderer 沒有型別或渲染回歸。
- [x] 3.3 以本機 dev server 開啟 `/computer-principles`，載入後切換瀏覽器 network offline，展開 `機器指令與指令週期`，確認內容由 bundled formal data 顯示 ordered list 與 table 且 console 無錯誤；在 apply summary 記錄手動驗證結果。
- [x] 3.4 執行 `spectra validate fill-machine-instruction-cycle-content`，確認 Spectra artifact 與實作狀態可進入完成流程。
