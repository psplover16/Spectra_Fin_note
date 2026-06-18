## Context

`/computer-principles` 已有 3b 數位邏輯的五個 skeleton topic，但 sections 為空，因此 route 不會顯示這些教材。使用者已在 `_private/propose.md` 確認五份 Markdown 對應五個既有 topic，並要求基本邏輯真值表能點選輸出欄標題後揭露該欄答案。

目前 `lessonArticle` 已支援 paragraph、orderedList、table、subsection 與 section-level collapsible。table 支援 cell style metadata，但沒有欄位揭露互動。

## Goals / Non-Goals

**Goals:**

- 將 3b 五份 Markdown 匯入既有 computerPrinciples topic，並保留 source traceability。
- 新增 lessonArticle table 的欄位揭露 metadata，供兩輸入真值表自測使用。
- 清除 Markdown 製作指令，並套用已確認的術語與符號修正。
- 用 Vitest 驗證內容、topic route 可見性、table reveal 互動與靜態 table 相容性。

**Non-Goals:**

- 不修改原始 Markdown 檔。
- 不新增新 route、後端、storage、Pinia store 或外部依賴。
- 不將第五章擴寫到半加器、全加器、編碼器、解碼器、MUX 或 DEMUX 公式。
- 不為卡諾圖畫出真正圈選圖形；以表格與步驟文字表達圈選。

## Decisions

### Extend lessonArticle table metadata for revealable columns

在 `LessonArticleContentBlock` 的 table variant 新增選用 metadata，例如 `revealableColumnIndexes?: readonly number[]`。數值使用零基底欄位索引；未設定時維持既有靜態 table 行為。基本邏輯真值表只將輸出欄 `AND`、`OR`、`NAND`、`NOR`、`XOR`、`XNOR` 設為 revealable，`A` 與 `B` 保持可見。

替代方案：把真值表拆成六個 collapsible sections。淘汰原因是使用者指定點選欄位標題，且拆 section 會讓真值表失去橫向比較價值。

### Keep reveal state local to SubjectTopicPage

揭露狀態只存在於 `SubjectTopicPage.vue` 的 local reactive state，不寫入 localStorage，也不影響 topic 完成或 bookmark 進度。建議 state shape 為 `Record<string, readonly number[]>`，key 可由 topic id、section heading 與 table block index 組成，value 是已揭露欄位索引。

替代方案：把揭露狀態寫進 subject progress storage。淘汰原因是這是單次自測互動，不是長期學習進度；持久化會增加清理與版本相容負擔。

### Fill digital logic topics through existing markdown-backed topic path

在 `professionalTopics.ts` 依既有 3a markdown-backed pattern 增加 3b sourceFiles、terms、summary、lesson sections，讓 `createMarkdownBackedComputerPrinciplesTopic` 或同等既有資料建構路徑產生完整 topic。每個 topic 的 route title 採中文加英文括號，內部 section 不強制全部雙語。

替代方案：新增獨立 digital logic module 或專用 renderer。淘汰原因是五份內容可用既有 lessonArticle block 表達；只有 truth table 需要 table metadata 擴充。

### Use conservative content correction while preserving source scope

app 顯示內容可修正已確認的明顯問題：`-B` 改成 `B'` 或 `NOT B`、`迪摩根` 統一成 `德摩根`、卡諾圖欄位敘述修正為「欄」、SOP/POS 補上標準形式不可自行換形式、NOR 表格補 XOR 常見 5 個 NOR。除上述確認項之外，不主動擴寫教材。

替代方案：完全照 Markdown 原文呈現。淘汰原因是部分原文含製作指令或會誤導新手的符號，直接顯示會降低考前複習品質。

## Implementation Contract

**Behavior**

- `/computer-principles` route 顯示五個 3b topic，順序為基本邏輯、SOP/POS、卡諾圖化簡、萬用閘、組合與循序電路，位於 `cp-codes-and-check-codes` 之後與 `cp-os-basics` 之前。
- 每個 3b topic 有非空 summary、terms、lessonArticle sections，且 sourceFiles 同時包含 `_private/計算機概論.txt` 與對應 Markdown。
- 基本邏輯的兩輸入真值表初始顯示 `A`、`B` 欄與輸出欄標題，但隱藏輸出欄 body values；點選某一輸出欄標題只揭露該欄，再點一次隱藏該欄。
- 未設定 reveal metadata 的 table 保持現有靜態呈現，不出現表頭按鈕。
- 無效 reveal column index 被忽略，不造成渲染錯誤。

**Interface / data shape**

- Table content block 新增選用 `revealableColumnIndexes?: readonly number[]`。
- Reveal state 不進入 `SubjectTopicProgress`，也不改變 localStorage schema。
- `SubjectTopicPage.vue` 以 table block 的 reveal metadata 決定表頭是否成為 toggle control，並以 local state 決定 body cell value 是否顯示。

**Failure modes**

- 若 table 沒有 headers 或 reveal index 超出範圍，renderer 忽略該 reveal 設定並繼續顯示其他有效內容。
- 若 section 或 table key 重複，只影響同一頁同一 session 的 reveal 狀態；不得造成 component crash 或 subject progress 汙染。

**Acceptance criteria**

- `tests/unit/professionalTopics.spec.ts` 驗證五個 3b topic sourceFiles、summary、terms、sections、標題、關鍵字與 raw instruction 清理。
- `tests/unit/subjectTopics.spec.ts` 驗證空 skeleton 變成 route-visible topic，且既有過濾規則不被破壞。
- `tests/unit/SubjectTopicPage.spec.ts` 驗證 reveal table 初始隱藏、點選單欄揭露、再次點選隱藏、靜態 table 不變與 invalid index 不崩潰。
- TypeScript typecheck 通過。

**Scope boundaries**

- In scope：subject topic 型別、SubjectTopicPage table renderer、computerPrinciples 3b topic data、相關 unit tests。
- Out of scope：原 Markdown 修改、PWA storage migration、Playwright E2E、新路由、新資料庫、卡諾圖圖形圈選 renderer。

## Risks / Trade-offs

- [Risk] Table metadata 擴充可能影響所有 lessonArticle tables → Mitigation：metadata 必須是 opt-in，未設定時測試需證明靜態 table 行為不變。
- [Risk] reveal state key 若不穩定，重新渲染時狀態可能錯位 → Mitigation：key 至少包含 topic id、section heading 與 table block index。
- [Risk] 3b 內容包含中文符號與特殊撇號，容易在測試或顯示上不一致 → Mitigation：同一 topic 內統一符號，並用關鍵字測試鎖定已確認修正。
- [Risk] 第五章內容短，學習體驗可能與其他 topic 不均衡 → Mitigation：依使用者決議只照短文匯入，後續補充另開 change。

## Migration Plan

不需要資料 migration。這次只擴充前端型別、renderer 與靜態教材資料；既有使用者的 topic progress localStorage schema 不變。Rollback 時移除 3b topic content 與 table reveal metadata 支援即可回到原靜態表格能力。
