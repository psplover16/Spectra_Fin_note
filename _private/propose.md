# Discuss：Information Management Markdown 匯入規劃

## 已讀取內容

- 已讀取 `_private/discuss.txt`。
- 已讀取 `_private/MD/資訊管理/` 內 7 個 Markdown：
  1. `資訊管理_1_數位轉型與ESG.md`
  2. `資訊管理_2a_傳統開發模式.md`
  3. `資訊管理_2b_敏捷開發.md`
  4. `資訊管理_3a_資訊倫理.md`
  5. `資訊管理_3b_數據分類與隱私悖論.md`
  6. `資訊管理_4a_個人資料保護法.md`
  7. `資訊管理_4b_GDPR.md`
- 已 scout 相關 source：
  - `src/modules/informationManagement/views/InformationManagementView.vue`
  - `src/modules/networking/views/NetworkingView.vue`
  - `src/modules/subjectTopics/data/professionalTopics.ts`
  - `src/modules/subjectTopics/data/subjectTopics.ts`
  - `src/app/router.ts`
- 已參考測試/規格脈絡：
  - `tests/unit/informationManagementRouteWorkflow.spec.ts`
  - `tests/unit/networkingRouteWorkflow.spec.ts`
  - `openspec/specs/professional-topic-content/spec.md`
  - `openspec/specs/manual-section-content-fill/spec.md`
- 已線上查核法規時效風險（2026-06-19）：
  - 個人資料保護委員會籌備處首頁：https://www.pdpc.gov.tw/
  - 個資會籌備處新聞稿「行政院院會通過組織法草案及個資法部分條文修正草案」：https://www.pdpc.gov.tw/News_Content/20/907/
  - 個資法 114 年 11 月 11 日修正公布對照表：https://ws.pdpc.gov.tw/FS01/FilePath/3/relfile/30/1015/01f372c7-19cd-4946-8930-5d18629b30df.pdf
  - GDPR Article 83 罰則摘要：https://gdpr-info.eu/issues/fines-penalties/

## 討論模式

Found `InformationManagementView.vue`, `NetworkingView.vue`, `professionalTopics.ts`, `subjectTopics.ts`, and `router.ts`，所以這次是 **Assumptions mode**。

原因：`information-management` route 已存在，且與 `networking` route 共用 `SubjectTopicPage`；本次主要是把 7 個 Markdown 轉成既有 `lessonArticle` data contract，不需要先發明新 UI 或新 route 架構。

## 建議結論

**Decision draft**：建立一個 Spectra change，例如 `fill-information-management-md-content`，把 `_private/MD/資訊管理/` 的 7 個 Markdown 依檔名自然順序匯入 `information-management` route，標題採用各 Markdown 的 H1，並把目前既有 `informationManagement` skeleton topics 排在新增 topics 後方。

**Rationale**：這與 `networking` 的 route 顯示方式一致，能沿用 `SubjectTopicPage`、`lessonArticle`、`getSubjectTopics()` 與既有 source traceability。真正需要決策的是資料排序、sourceFiles 記法、舊 skeleton 是否保留，以及法規內容在 apply 當天如何做最小幅度查核與修正。

**Capture to**：
- `openspec/changes/fill-information-management-md-content/proposal.md`
- `openspec/changes/fill-information-management-md-content/tasks.md`
- `openspec/changes/fill-information-management-md-content/specs/professional-topic-content/spec.md`

## My Assumptions

1. **新增 7 個 Markdown-backed topics，排序在既有 `informationManagement` topics 前面**
   - Approach：新增 `informationManagementMarkdownTopics`，順序使用檔名自然順序；`professionalTopicsBySubject.informationManagement` 改成 `[..., ...getProfessionalTopicSkeletons('informationManagement')]` 這類結構，讓舊 skeleton 保留為 suffix。
   - Evidence：`_private/discuss.txt` 明確寫「內部全部 MD 檔都要引入」、「按照順序」、「目前既有的 section，要在這一次新增的下方」；`professionalTopics.ts` 目前已有 `getProfessionalTopicSkeletons('informationManagement')`。
   - If wrong：若你其實要取代既有 skeleton，而不是保留在後方，資料長度、測試與使用者可見排序都會不同。

2. **標題直接採用各 Markdown H1**
   - Approach：topic title 使用：
     1. `資訊管理 1：數位轉型 + ESG`
     2. `資訊管理 2a：傳統開發模式（漸增／雛形／螺旋）`
     3. `資訊管理 2b：敏捷開發 Agile`
     4. `資訊管理 3a：資訊倫理（PAPA 四大議題）`
     5. `資訊管理 3b：數據分類 + 隱私悖論`
     6. `資訊管理 4a：個人資料保護法（個資法）`
     7. `資訊管理 4b：GDPR（歐盟一般資料保護規則）`
   - Evidence：`_private/discuss.txt` 寫「標題採用各 md 的主題」；7 個 MD 的 H1 已讀取。
   - If wrong：若 title 要改成較短的 route card 名稱，會需要另外定義 display title 與 sourceSection 的對應。

3. **內容轉換沿用 networking 的 `lessonArticle` 風格，不新增 UI 架構**
   - Approach：把 Markdown 的 paragraph、blockquote、list、table、heading 轉成既有 `LessonArticleSection` / `LessonArticleContentBlock`；保留原章節順序與表格結構，只做 renderer 必要正規化。
   - Evidence：`NetworkingView.vue` 與 `InformationManagementView.vue` 都只把 `subjectKey` 傳給 `SubjectTopicPage`；`professionalTopics.ts` 已有 networking markdown-backed topics 與 `createImportedMarkdownTopic` helper。
   - If wrong：若你想保留原始 Markdown 渲染而不是轉成 typed blocks，就會變成新的內容渲染介面，scope 會大很多。

4. **每個 topic 的 `sourceFiles` 只記 exact Markdown 路徑**
   - Approach：新 topics 的 `sourceFiles` 使用 `_private/MD/資訊管理/<檔名>.md`；舊 `_private/資訊管理.txt` skeleton topics 留在後方，不混進新 imported topics 的 sourceFiles。
   - Evidence：`createImportedMarkdownTopic` 目前就是單一 exact `sourceFile`；你這次指定來源是 `_private/MD/資訊管理/`。
   - If wrong：若你希望每個新 topic 同時保留 `_private/資訊管理.txt`，測試要改成 `arrayContaining` 兩種來源，且需要說明兩個來源誰是 authoritative source。

5. **Markdown 內的編排與內容原則上保留，只做錯誤辨別與最小幅度修正**
   - Approach：保留「科目」、「學習方式」、「重點整理」、「警告/注意」等原本語氣；只修明顯錯字、法規時效、概念誤導、renderer 不支援的格式。
   - Evidence：`_private/discuss.txt` 寫「每個內容我已經做過編排、整理」、「盡量以 md 檔內的編排」、「每個 MD 僅做錯誤辨別，與最小幅度的修正」、「別隨意新增、刪除、修改資料」。
   - If wrong：若你希望轉成更標準化的考前教材格式，proposal/spec 要改成「重整教材」而不是「來源保真匯入」。

6. **既有 information-management workflow 測試需要更新，不能沿用舊 skeleton expectation**
   - Approach：更新 `tests/unit/informationManagementRouteWorkflow.spec.ts`，讓它驗證 7 個新 MD topics 的順序、sourceFiles、lessonArticle sections 非空；舊 skeleton topics 若保留在 formal data 後方，測試要明確區分 `professionalTopicsBySubject` 與 route-visible `getSubjectTopics()`。
   - Evidence：目前該測試期待 `professionalTopicsBySubject.informationManagement` 長度等於舊 manifest 7 筆，且每筆 `lessonArticle` 是空 `lead: [], sections: []`；這會與新需求衝突。
   - If wrong：apply 後測試可能不是因功能錯，而是舊測試仍在保護「空 skeleton」行為。

## Interface Depth Check

本次需求 **未觸發新的介面深度檢查**。

- 沒有新增 route：`/information-management` 已存在。
- 沒有新增 IPC command 或跨層 Rust/Tauri/Svelte flow。
- 沒有新增 storage abstraction。
- 沒有新增 top-level module；只是替既有 route 補正式 topic data。

結論：不要新增 pass-through adapter；沿用 `InformationManagementView.vue -> SubjectTopicPage -> professionalTopicsBySubject.informationManagement` 即可。

## 建議需求草案

### Requirement: Information Management route imports Markdown-backed lesson articles

The system SHALL import all Markdown files under `_private/MD/資訊管理/` into the `information-management` route as finalized `lessonArticle` topics.

#### Scenario: Markdown topics appear before existing topics

- **WHEN** `getSubjectTopics('informationManagement')` resolves route-visible topics
- **THEN** the first seven visible topics appear in this order:
  1. `資訊管理 1：數位轉型 + ESG`
  2. `資訊管理 2a：傳統開發模式（漸增／雛形／螺旋）`
  3. `資訊管理 2b：敏捷開發 Agile`
  4. `資訊管理 3a：資訊倫理（PAPA 四大議題）`
  5. `資訊管理 3b：數據分類 + 隱私悖論`
  6. `資訊管理 4a：個人資料保護法（個資法）`
  7. `資訊管理 4b：GDPR（歐盟一般資料保護規則）`
- **AND** existing `informationManagement` topics remain after the imported Markdown topics in formal data.

#### Scenario: Each imported topic preserves source traceability

- **WHEN** an imported information-management topic is loaded
- **THEN** it has exactly one Markdown source path under `_private/MD/資訊管理/`
- **AND** its `sourceSummary` matches the Markdown H1
- **AND** it has one learner-facing `lessonArticle` block with non-empty sections.

#### Scenario: Markdown structure is preserved with minimal corrections

- **WHEN** Markdown headings, lists, tables, and blockquotes are converted
- **THEN** the learner-facing article preserves the source order as much as the existing renderer supports
- **AND** obvious factual/legal staleness is corrected with the smallest text change needed
- **AND** source-only meta text that is not learner-facing is either omitted or moved into review notes.

##### Example: source order

For `資訊管理_2b_敏捷開發.md`, the formal topic should keep this order:
`定義 -> 核心價值 -> 優缺點 -> 三個常見框架 -> 重點整理`。

## 發現的問題與風險

1. **現有 `ImportedMarkdownTopicConfig` 尚未支援 `informationManagement`**
   - 目前 `subjectKey` union 是 `'database' | 'programming' | 'systemDesign'`。
   - apply 時若沿用 `createImportedMarkdownTopic`，需要把 `informationManagement` 加進 union，或建立更通用的 imported Markdown helper。

2. **既有 `informationManagement` skeleton 與新 MD 內容會重疊**
   - 舊 topics 包含 `im-02-digital-transformation`、`im-03-system-development-models`、`im-04-esg`、`im-05-info-ethics-regulations` 等，與新 7 個 MD 有概念重疊。
   - 依你的需求我建議保留舊 skeleton 在後方，但不要補內容；route-visible 內容以新 MD topics 為主。
   - 若未來舊 skeleton 被補內容，route 可能出現重複主題，屆時再整理或移除。

3. **`informationManagementRouteWorkflow.spec.ts` 目前保護的是舊空 skeleton 行為**
   - 現在測試期待 formal topics 等於舊 manifest 7 筆，且 `lessonArticle` sections 是空。
   - 新需求應改成驗證 MD-backed formal topics 非空、sourceFiles 是 exact MD、排序在前，舊 skeleton 在後。

4. **個資法內容有時效風險，apply 當天要再查一次**
   - `資訊管理_4a_個人資料保護法.md` 寫「2025 年再修正、賦予個資會執法權限、組織法待完成、籌備處階段、施行日期待定」。
   - 2026-06-19 查核結果：官方網站仍是「個人資料保護委員會籌備處」；114 年 11 月 11 日修正公布的個資法部分條文施行日期仍需依行政院指定。
   - apply 時應避免把尚待施行或過渡期的職權描述成「已全面上路」。

5. **GDPR 的「歐盟居民」用語可更精準**
   - MD 同時寫「歐盟居民」與「歐盟境內的人」。
   - GDPR Article 3 的精準描述較接近「位於歐盟境內的資料主體」；考試教材常寫歐盟居民，但若要最小修正，可把定義句改為「歐盟境內自然人／資料主體」。

6. **第二方數據例子可能需要措辭保守**
   - `資訊管理_3b_數據分類與隱私悖論.md` 把 `FB／IG 行為數據` 放在第二方數據例子。
   - 若只是廣告平台提供的受眾投放/分析，不一定等同企業直接取得「別人的第一方數據」；建議改成「合作夥伴分享的會員/客戶行為資料」之類較穩定表述。

7. **「內容經網路查證」這類 meta 句是否要出現在 learner-facing article 需決定**
   - `資訊管理_1_數位轉型與ESG.md`、`資訊管理_3b_數據分類與隱私悖論.md`、`資訊管理_4a_個人資料保護法.md`、`資訊管理_4b_GDPR.md` 有「內容經查證」類 meta。
   - 我建議保留內容 caveat（例如「不同來源版本略有不同」），但不要把「內容經網路查證」本身放進 learner-facing lead；查核狀態可放在 manual review 或 proposal summary。

8. **自然排序要明確，不要用純字典序誤排**
   - 目前檔名含 `2a`、`2b`、`3a`、`3b`、`4a`、`4b`。
   - Windows `Sort-Object Name` 這次會排對，但 proposal/tasks 應明確要求依檔名前綴自然順序，不依任意 glob 結果。

## 建議實作任務草案

1. 建立 Spectra change：`fill-information-management-md-content`。
2. 在 proposal/spec/tasks 記錄 7 個 exact Markdown source paths 與 H1 順序。
3. 在 `professionalTopics.ts` 新增 `informationManagementMarkdownTopics`。
4. 讓 imported Markdown helper 支援 `informationManagement`。
5. 依 7 個 MD 轉成 `lessonArticle` sections，保留表格、清單、重點整理順序。
6. 對上述法規/內容疑點做最小修正，並在 review note 記錄修正原因。
7. 更新 `informationManagementRouteWorkflow.spec.ts` 與必要的 topic/order/source tests。
8. 執行 targeted tests、typecheck、`spectra validate --strict`。
9. apply summary 記錄完整測試結果；若完整 suite 因既有無關問題失敗，列出但不偷修。

## 最終結論

**Decision**：全部採用上述建議，後續以 `fill-information-management-md-content` 建立正式 Spectra change，將 `_private/MD/資訊管理/` 的 7 個 Markdown 依自然順序匯入 `information-management` route。

**Rationale**：需求已足夠明確；沿用 networking 的 `lessonArticle` 與既有 route 架構，可保持實作範圍集中，並讓 source traceability、排序、測試與法規查核都能被明確驗證。

**Capture to**：`openspec/changes/fill-information-management-md-content/`，包含 `proposal.md`、`tasks.md` 與 `specs/professional-topic-content/spec.md`。

## 待你回答

請直接在下面填答；若你同意建議，可寫「依你建議」。

1. 新 change 名稱是否採用 `fill-information-management-md-content`？
   - 建議：採用。
   - 你的回答：依你建議，採用 `fill-information-management-md-content`。

2. 新 topics 的 `sourceFiles` 是否只放 exact Markdown 路徑？
   - 建議：是，只放 `_private/MD/資訊管理/<檔名>.md`；舊 `_private/資訊管理.txt` skeleton 保留在後方。
   - 你的回答：依你建議，只放 exact Markdown 路徑。

3. 既有 information-management skeleton topics 是否保留在 formal data 後方，但本次不補內容？
   - 建議：是，符合「目前既有的 section 在新增下方」且避免重複改寫。
   - 你的回答：依你建議，保留在 formal data 後方，本次不補內容。

4. `資訊管理_1_數位轉型與ESG.md` 是否作為一個 topic，不拆成「數位轉型」與「ESG」兩個 topic？
   - 建議：不拆，因為檔案 H1 是單一主題，且你要求標題採用各 MD 主題。
   - 你的回答：依你建議，不拆，作為一個 topic。

5. Markdown 開頭的「科目／學習方式」是否保留在 `lead`？
   - 建議：保留，因為它是學習導向內容。
   - 你的回答：依你建議，保留在 `lead`。

6. 「內容經網路查證」這類 meta 句是否不要放進 learner-facing article？
   - 建議：不要放；保留具體 caveat，例如「不同來源版本略有不同」。
   - 你的回答：依你建議，不放進 learner-facing article，只保留具體 caveat。

7. 個資法/GDPR 內容是否允許 apply 時做最小幅度法規時效修正？
   - 建議：允許，但只修明顯過時或法律用語不精準處，不重寫整篇。
   - 你的回答：依你建議，允許最小幅度法規時效與用語修正。

8. `資訊管理_3b_數據分類與隱私悖論.md` 的第二方數據例子是否改成更保守的「合作夥伴分享的會員/客戶行為資料」？
   - 建議：改，避免 FB/IG 例子在資料取得關係上造成誤解。
   - 你的回答：依你建議，改成更保守的表述。

9. 測試應以 `getSubjectTopics('informationManagement')` 驗證 route-visible 新 topics，還是以 `professionalTopicsBySubject.informationManagement` 驗證新 topics + 舊 suffix？
   - 建議：兩者都驗證；前者確認使用者看到的內容，後者確認舊 skeleton 排在後方。
   - 你的回答：依你建議，兩者都驗證。
