# Discuss：computer-principles-v2 補充資料拆卡規劃

## 已讀取內容

- 已讀取 `_private/discuss.txt`。
- 已讀取 `_private/計概補充/CPU排班演算法_考試速記版.md`。
- 已檢查目前沒有進行中的 Spectra change：`spectra list --json` 回傳空清單。
- `openspec/LANGUAGE.md` 目前沒有可讀內容，因此本次沒有額外詞彙漂移判斷。
- 已 scout 相關 source：
  - `src/app/router.ts`
  - `src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue`
  - `src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts`
  - `src/modules/subjectTopics/data/subjectTopics.ts`
  - `src/modules/subjectTopics/types/subjectTopic.ts`
  - `src/modules/subjectTopics/components/SubjectTopicPage.vue`
- 已參考相關測試與規格：
  - `tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts`
  - `openspec/specs/computer-principles-v2-route/spec.md`
  - `openspec/specs/professional-topic-content/spec.md`
- 未讀取或修改受限的 `_private/_private_notes/筆記.txt`、`_private/_private_notes/done/**`、`_private/_private_fileAssets/done/**`。

## 討論模式

Found `router.ts`, `ComputerPrinciplesV2View.vue`, `computerPrinciplesV2Topics.ts`, `subjectTopics.ts`, and `SubjectTopicPage.vue`，所以這次是 **Assumptions mode**。

原因：`/computer-principles-v2` route、`computerPrinciplesV2` subject key、`SubjectTopicCard`/`SubjectTopicPage` 架構與目前的 `補充資料` topic 都已存在；這次主要是調整既有 route 的 topic data 與 spec，不需要先設計新 route 或新 UI 架構。

## 建議結論

**Decision draft**：建立一個 Spectra change，例如 `split-cpv2-supplemental-data-cards`，把目前單一 `cpv2-supplemental-data` / `補充資料` card 拆成 6 張 route-visible topic card，放在 `加強練習` 後、`架構與計算理論` 前，並移除舊的 `cpv2-supplemental-data` card。

**Rationale**：現有 `補充資料` 的 `lessonArticle.sections` 已經剛好是 6 個 section，和需求「拆成 6 個 card」吻合。真正要先處理的是規格衝突：現行 spec 明確要求 route-visible topics exactly 15、第二張 topic 是 `cpv2-supplemental-data` titled `補充資料`。依你在 `_private/discuss.txt` 寫的「以 spec 為主」，實作前必須先用新的 Spectra change 更新 spec，讓新需求正式取代舊規格。

**Capture to**：
- `openspec/changes/split-cpv2-supplemental-data-cards/proposal.md`
- `openspec/changes/split-cpv2-supplemental-data-cards/tasks.md`
- `openspec/changes/split-cpv2-supplemental-data-cards/specs/computer-principles-v2-route/spec.md`
- `openspec/changes/split-cpv2-supplemental-data-cards/specs/professional-topic-content/spec.md`

## My Assumptions

1. **把目前 `補充資料` 的 6 個 section 各自提升成一張正式 topic card**
   - Approach：以現有 section 作為拆分邊界，產生 6 張新 card：`阿姆達爾定律`、`CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`基礎資料結構`。
   - Evidence：`computerPrinciplesV2Topics.ts` 目前的 `supplementalDataSections` 和 `computerPrinciplesV2RouteWorkflow.spec.ts` 都列出這 6 個 section。
   - If wrong：若你想要的 6 張 card 不是這 6 個 section，就需要重新指定拆分邊界與 card title。

2. **新 cards 取代舊 `補充資料` 的位置**
   - Approach：topic order 變成 `加強練習` → 6 張補充卡 → 13 個 catalog topics；舊 `補充資料` card 不再出現。
   - Evidence：`_private/discuss.txt` 寫「添加的新card，放在補充資料 card 前方」且「最後，再把 補充資料card刪除」。
   - If wrong：如果新 cards 要放在 `加強練習` 前或 catalog 後，會改變 route-visible 順序、測試與既有學習動線。

3. **CPU 排班 card 使用新 MD 作為主要來源，且保留 MD 排版到既有 lessonArticle block**
   - Approach：`CPU 排班演算法` card 的 `sourceFiles` 改用 `_private/計概補充/CPU排班演算法_考試速記版.md`；表格轉成 `table` block，20 題選擇題轉成 `orderedList`，答案解析表轉成 `table`，不新增 runtime Markdown renderer。
   - Evidence：`_private/discuss.txt` 指定 CPU 排班要用該 MD，並說「連排版也使用MD的排版」；現有 spec `Computer principles v2 uses lessonArticle content` 要求使用 `lessonArticle`，不得 runtime fetch/parse Markdown。
   - If wrong：若你要真的以 raw Markdown 原樣渲染，就會新增內容渲染介面，scope 比拆卡大很多，也會違反目前 spec。

4. **刪除 `cpv2-supplemental-data` 需要先更新既有 specs**
   - Approach：新 change 需要明確把 route-visible topic 數量從 15 改成 20，並移除「第二張 topic 必須是 `cpv2-supplemental-data` titled `補充資料`」的舊契約。
   - Evidence：`openspec/specs/computer-principles-v2-route/spec.md` lines 20-29、248-264，以及 `professional-topic-content/spec.md` 都鎖定 `補充資料` 的存在、順序與來源。
   - If wrong：若不更新 spec 就直接實作，會出現「專案內容與過去 spec 衝突」，依你的規則應以 spec 為主，實作不應通過。

5. **新 card 仍沿用既有 `SubjectTopicCard` / `SubjectTopicPage` 架構**
   - Approach：只改 `professionalTopicsBySubject.computerPrinciplesV2` 的 topic data、相關 spec 與測試；不新增 route、不新增 component、不改 progress storage shape。
   - Evidence：`ComputerPrinciplesV2View.vue` 只呼叫 `getSubjectTopics('computerPrinciplesV2')` 並傳給 `SubjectTopicPage`；`SubjectTopicPage.vue` 已支援 paragraph、bulletList、orderedList、table、subsection、indentedGroup。
   - If wrong：若要新增專屬卡片 UI 或專屬補充資料區塊，會需要額外設計 component、測試與樣式，不再是單純內容拆分。

## Interface Depth Check

本次需求 **未觸發新的介面深度檢查**。

- 沒有新增 route：`/computer-principles-v2` 已存在。
- 沒有新增 IPC command 或跨層 Rust/Tauri/Svelte flow。
- 沒有新增 storage abstraction。
- 沒有新增 top-level module；只是把既有 topic data 從一張 card 拆成多張 card。

結論：不要新增 pass-through adapter；沿用 `ComputerPrinciplesV2View -> getSubjectTopics -> SubjectTopicPage -> SubjectTopicCard` 即可。

## 建議 card 清單

| Route position | Suggested id | Suggested title | Source basis |
| ----- | ----- | ----- | ----- |
| 1 | `cpv2-supplemental-practice` | `加強練習` | 既有保留 |
| 2 | `cpv2-supplemental-amdahl-law` | `阿姆達爾定律` | 目前 `補充資料` section 1 |
| 3 | `cpv2-supplemental-cpu-scheduling` | `CPU 排班演算法` | `_private/計概補充/CPU排班演算法_考試速記版.md` |
| 4 | `cpv2-supplemental-deadlock` | `死結` | 目前 `補充資料` section 3 |
| 5 | `cpv2-supplemental-paging-segmentation` | `分頁與分段記憶體管理` | 目前 `補充資料` section 4 |
| 6 | `cpv2-supplemental-oop-characteristics` | `物件導向特性` | 目前 `補充資料` section 5 |
| 7 | `cpv2-supplemental-basic-data-structures` | `基礎資料結構` | 目前 `補充資料` section 6 |
| 8 | `cpv2-architecture-computation-theory` | `架構與計算理論` | Catalog row `01` |

拆分後總數：`1 加強練習 + 6 補充卡 + 13 catalog topics = 20 route-visible topics`。

## 建議需求草案

### Requirement: Computer Principles v2 splits supplemental data into six route-visible topic cards

The `computerPrinciplesV2` route SHALL replace the single `cpv2-supplemental-data` topic card with six discrete route-visible topic cards. The six cards SHALL render before the catalog-backed topic segment and SHALL preserve the existing 13 catalog-backed topics in their original relative order.

#### Scenario: Supplemental split replaces the old supplemental data card

- **WHEN** `getSubjectTopics('computerPrinciplesV2')` resolves route-visible topics
- **THEN** the route-visible list contains exactly 20 topics
- **AND** the first topic is `cpv2-supplemental-practice` titled `加強練習`
- **AND** topics 2 through 7 are:
  1. `阿姆達爾定律`
  2. `CPU 排班演算法`
  3. `死結`
  4. `分頁與分段記憶體管理`
  5. `物件導向特性`
  6. `基礎資料結構`
- **AND** topic 8 is `cpv2-architecture-computation-theory` titled `架構與計算理論`
- **AND** no route-visible topic has id `cpv2-supplemental-data`
- **AND** no route-visible topic is titled `補充資料`

##### Example: leading route-visible order

| Position | Expected title |
| ----- | ----- |
| 1 | `加強練習` |
| 2 | `阿姆達爾定律` |
| 3 | `CPU 排班演算法` |
| 4 | `死結` |
| 5 | `分頁與分段記憶體管理` |
| 6 | `物件導向特性` |
| 7 | `基礎資料結構` |
| 8 | `架構與計算理論` |

### Requirement: Supplemental cards preserve source-authored ordered structure

Each split supplemental card SHALL render through existing `lessonArticle` content blocks. Each card SHALL use an ordered sequence for its core learning flow. The CPU scheduling card SHALL use `_private/計概補充/CPU排班演算法_考試速記版.md` as its source and SHALL preserve the source Markdown table, terminology section, high-frequency exam points, 20 questions, and answer explanation table through supported `lessonArticle` blocks.

#### Scenario: CPU scheduling card uses the new exam review source

- **WHEN** the `CPU 排班演算法` topic is loaded
- **THEN** its topic `sourceFiles` include `_private/計概補充/CPU排班演算法_考試速記版.md`
- **AND** its lessonArticle includes a comparison table for FCFS, SJF, SRTF, Priority, RR, MLQ, and MLFQ
- **AND** its lessonArticle includes ordered content for the 20 practice questions
- **AND** its lessonArticle includes the answer and explanation table
- **AND** it does not require fetching or parsing Markdown at runtime

### Requirement: Supplemental split preserves existing route architecture

The split SHALL reuse the existing `SubjectTopicCard` architecture and `SubjectTopicPage` lessonArticle renderer. The change SHALL NOT add a separate route, runtime Markdown renderer, progress storage format, or new top-level UI module.

## 發現的問題與風險

1. **現行 spec 與需求直接衝突**
   - 現行 spec 要求 route-visible topics exactly 15，第二張是 `cpv2-supplemental-data` / `補充資料`。
   - 你的新需求會變成 exactly 20 topics，且刪除 `補充資料`。
   - 依「以 spec 為主」，不能直接 apply；需要先用新的 Spectra change 更新 spec。

2. **相關測試也鎖定舊行為**
   - `tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts` 目前期待 `topicCases` 有 15 筆，且第二筆是 `cpv2-supplemental-data`。
   - `tests/unit/subjectTopics.spec.ts`、`tests/unit/professionalTopics.spec.ts`、`tests/component/SubjectRoutesSmoke.spec.ts` 也可能需要跟著更新 topic 數量、順序與可見文字。

3. **舊來源 `_private/計概補充/計算機概論_重點講義_01.md` 目前不存在**
   - `git status` 顯示該檔案被刪除，`Get-Item` 也確認目前找不到。
   - 但現行 spec、sourceFiles 與舊 `補充資料` topic 都引用這個來源。
   - 如果另外五張新卡仍要追溯到這份講義，需要先恢復或重新提供來源檔；否則 source traceability 會不完整。

4. **新 CPU MD 是 untracked source**
   - `_private/計概補充/CPU排班演算法_考試速記版.md` 存在且可讀，但目前是未追蹤檔。
   - apply/commit 時若要把它當正式來源，必須把它納入 change 相關檔案。

5. **「每個 card 的內容要用有序序列」與「CPU MD 排版很完美」需要精確解讀**
   - CPU MD 內有表格、bullet list、20 題 numbered questions、答案解析表。
   - 若所有內容都強制改成 orderedList，會破壞表格排版。
   - 建議解讀：每張 card 的主要學習流程使用 orderedList；表格仍用 table；CPU MD 的表格與答案表保留為 table，20 題保留為 orderedList。

6. **移除舊 topic id 會影響既有進度與書籤**
   - 舊 `cpv2-supplemental-data` 的完成狀態或 bookmark 若已存在於使用者 localStorage，刪除 topic id 後該狀態不會自動轉移到 6 張新卡。
   - 若需要保留進度，需要額外 migration；我不建議本次加 migration，除非你很在意舊進度。

7. **card title 是否保留中文序號需要決定**
   - 現有 section heading 是 `一、阿姆達爾定律（Amdahl's Law）` 這種格式。
   - 建議 card title 不放 `一、` 到 `六、`，避免 route card title 被來源排序字污染；lessonArticle 內的 section heading 可保留完整來源標題或用較短標題。

8. **另外五張 card 的內容來源目前只能從 app data 回推**
   - 因為舊 MD source 缺失，目前只能從 `computerPrinciplesV2Topics.ts` 的既有 `supplementalDataSections` 拆出另外五張卡。
   - 從 app data 回推可實作，但 traceability 較弱；更好的做法是恢復舊 MD 或提供五張新 MD。

## 建議實作任務草案

1. 建立 Spectra change：`split-cpv2-supplemental-data-cards`。
2. 更新 `computer-principles-v2-route` spec：topic 總數 15 → 20，舊 `補充資料` requirement 改為 6 張補充卡。
3. 更新 `professional-topic-content` spec：formal data 改為 20 個 `computerPrinciplesV2` topics，並記錄 6 張新卡的 exact sourceFiles。
4. 決定另外五張卡的來源：恢復舊 `_private/計概補充/計算機概論_重點講義_01.md`，或提供新來源檔，或接受從目前 app data 拆分。
5. 在 `computerPrinciplesV2Topics.ts` 中用 6 個 topic 取代 `cpv2-supplemental-data`。
6. 將 CPU 排班 MD 轉成 `lessonArticle` blocks，保留 table、orderedList、answer table。
7. 更新 route/topic/source tests：`computerPrinciplesV2RouteWorkflow.spec.ts`、`subjectTopics.spec.ts`、`professionalTopics.spec.ts`、`SubjectRoutesSmoke.spec.ts`。
8. 視影響更新 PWA/offline smoke expectation，確認不需要 runtime markdown fetch。
9. 執行 targeted tests、typecheck、`spectra validate split-cpv2-supplemental-data-cards`。

## 最終結論

**Decision**：建議先 formalize 成 `split-cpv2-supplemental-data-cards` Spectra change，再實作。需求本身方向明確，但目前與既有 spec 衝突；依你的規則，新的 spec delta 必須先明確取代舊的 `補充資料` card 契約。

**Rationale**：拆成 6 張 card 可以沿用既有 route/topic 架構，實作範圍集中；但若不先更新 spec，刪除 `cpv2-supplemental-data` 會直接違反現有 15 topics 與第二張補充資料卡的規格。

**Capture to**：`openspec/changes/split-cpv2-supplemental-data-cards/`。

## 待你回答

請直接在下面填答；若你同意建議，可寫「依你建議」。

1. 是否採用 change 名稱 `split-cpv2-supplemental-data-cards`？
   - 建議：採用。
   - 你的回答：依你意見

2. 是否同意先更新 spec，讓新規格正式取代舊的 `cpv2-supplemental-data` / `補充資料` 契約？
   - 建議：同意；否則依「以 spec 為主」不能刪除舊 card。
   - 你的回答：依你意見

3. 拆分後 route-visible topic 總數是否應為 20？
   - 建議：是，`加強練習` 1 張 + 補充資料拆出的 6 張 + catalog 13 張。
   - 你的回答：是

4. 六張新 card title 是否採用 `阿姆達爾定律`、`CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`基礎資料結構`？
   - 建議：採用短 title，不在 card title 放 `一、` 到 `六、`。
   - 你的回答：依你意見

5. 新 card ids 是否採用本文的 suggested ids？
   - 建議：採用 `cpv2-supplemental-*` 前綴，維持與現有 supplemental topic id 風格一致。
   - 你的回答：依你意見

6. CPU 排班 card 的排版是否採用「表格保留為 table、20 題保留為 orderedList、答案解析保留為 table」？
   - 建議：採用，最符合「有序序列」與「MD 排版很完美」兩個要求。
   - 你的回答：依你意見

7. 另外五張 card 的來源檔要怎麼處理？
   - 建議：恢復或提供 `_private/計概補充/計算機概論_重點講義_01.md`，讓 source traceability 完整。
   - 你的回答：依你意見

8. 是否接受刪除 `cpv2-supplemental-data` 後，舊補充資料 card 的完成狀態/bookmark 不做 migration？
   - 建議：接受，不額外做 localStorage migration，避免擴大 scope。
   - 你的回答：依你意見

9. 是否同意本次不新增 route、不新增 UI component、不新增 runtime Markdown renderer，只調整 formal topic data、spec 與測試？
   - 建議：同意。
   - 你的回答：依你意見
