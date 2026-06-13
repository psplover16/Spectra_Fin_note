# Information Management Subagent Tasks

- sourceFiles: `_private/資訊管理.txt`
- filenameContract: `_TMP/<timestamp>-information-management-<topic>.md`
- manifest: `_TMP/manifests/information-management-manifest.md`
- readingLog: `_TMP/source-logs/information-management-reading-log.md`
- note: 每個 manifest topic 均包含 generator、verifier、import task。所有任務只可使用列出的 sourceFiles 與本批次盤點成果。

## im-00-overview

- outputContract: `_TMP/<timestamp>-information-management-im-00-overview.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - 準備方向
  - 數位轉型
  - 資訊系統開發流程與模式
  - ESG
  - 資訊系統倫理與新興法規
  - 資訊管理補充考點
- memoryPoints:
  - 本來源以考試導向整理資訊管理常考主題。
  - 需掌握定義題、比較題、法規題與系統類型題。
  - 答題時先辨識題型，再選擇定義、要素、比較或範例作答。
- understandingNotes:
  - 資訊管理題目通常抽象，需把概念落到組織流程、技術、治理、資料與法規情境。
  - 各段落可拆成可背誦短答案與可展開說明的理解型答案。
- generator task:
  - 產生「資訊管理總覽」草稿，包含範圍定位、考點地圖、題型分類與讀法提醒。
  - 草稿須明確標出來源 section 為「文件標題與全文範圍」。
- verifier task:
  - 核對草稿是否只使用 `_private/資訊管理.txt` 與本盤點檔資料。
  - 檢查六個主要段落是否完整列入總覽，且未新增來源外考點。
- import task:
  - 在草稿通過查核後，依匯入流程使用 outputContract 檔案作為輸入。
  - 匯入前確認 topic id、title、source section 與 manifest 一致。

## im-01-preparation-direction

- outputContract: `_TMP/<timestamp>-information-management-im-01-preparation-direction.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - 資訊管理讀法與筆記建立順序。
  - 歷屆題目優先，從已出現考點逐步補知識。
- memoryPoints:
  - 這科讀起來抽象，若影片或教材不好吸收，可先看題目。
  - 歷屆有出的先做筆記，再逐步補相關知識。
- understandingNotes:
  - 準備策略不是從完整理論開始，而是用題目反推考點。
  - 筆記應先覆蓋高頻題，再逐步補足相關概念，降低抽象科目的吸收成本。
- generator task:
  - 產生「準備方向」草稿，保留原文提醒的讀法策略。
  - 建議 block structure 為原文提醒、讀題優先策略、筆記建立順序、應考操作。
- verifier task:
  - 檢查草稿是否忠實呈現「先看題目」與「歷屆先做筆記」兩個重點。
  - 確認未加入來源外的讀書方法或私人經驗。
- import task:
  - 在草稿通過查核後，依 outputContract 匯入後續草稿流程。
  - 匯入時保留 topic id `im-01-preparation-direction` 與 status `pending-draft` 對應。

## im-02-digital-transformation

- outputContract: `_TMP/<timestamp>-information-management-im-02-digital-transformation.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - 數位轉型定義。
  - 數位轉型五大要素。
  - 企業提高轉型成功機會需兼顧的層面。
  - 企業逐步轉型三階段。
- memoryPoints:
  - 定義：組織運用數位科技改變流程、商業模式、顧客體驗與組織文化，以創造價值。
  - 要素：技術、流程、人才、文化、顧客。
  - 五大層面可整理為策略、組織文化、流程、科技、人才/資料治理；若教材有固定版本，以教材五項為準。
  - 三階段常見為數位化、數位優化、數位轉型；也可能用資訊化、流程數位化、商業模式轉型描述。
- understandingNotes:
  - 數位轉型不是單純導入科技，而是科技牽動流程、商業模式、顧客體驗與文化的組織變革。
  - 五大要素可用來檢查轉型是否只偏重工具而忽略人才、文化與顧客價值。
  - 三階段題目需留意教材用語，答題時避免把不同版本混用。
- generator task:
  - 產生「數位轉型」草稿，包含定義、五大要素、成功轉型層面、三階段與答題注意。
  - 需要清楚區分來源中的必背內容與原文考點提醒。
- verifier task:
  - 檢查定義是否完整包含數位科技、流程、商業模式、顧客體驗、組織文化與創造價值。
  - 檢查三階段是否保留兩種來源描述，且提醒依教材用語作答。
- import task:
  - 使用 outputContract 作為後續匯入輸入。
  - 匯入前確認草稿 block structure 與 manifest 的預估結構相符。

## im-03-system-development-models

- outputContract: `_TMP/<timestamp>-information-management-im-03-system-development-models.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - Incremental Model、Prototype Model、Spiral Model 比較。
  - Agile 定義、核心價值、優缺點。
  - Scrum、Kanban、XP 常見 Agile 框架比較。
- memoryPoints:
  - Incremental Model：分成多個增量逐步交付，每次交付可用功能；早期看到成果、風險分散；架構需先規劃、整合管理重要；適用需求可分階段交付。
  - Prototype Model：先做雛形讓使用者確認需求；可釐清需求、提高使用者參與；使用者可能誤認雛形為完成品，品質差會造成維護困難；適用需求不明確或重視介面回饋。
  - Spiral Model：以風險分析為核心，反覆規劃、風險評估、工程、評估；適合大型高風險專案；管理複雜、成本較高。
  - Agile：快速迭代、持續回饋、擁抱變更；核心價值是個人與互動、可用軟體、客戶合作、回應變更。
  - Scrum：Sprint、Product Backlog、Sprint Backlog、Daily Scrum、Review、Retrospective。
  - Kanban：視覺化流程、限制 WIP、持續改善。
  - XP：Pair Programming、TDD、Continuous Integration、Refactoring。
- understandingNotes:
  - 開發模式比較題可用「定義、核心概念、優點、缺點、適用情境」作答。
  - Incremental 偏重逐步交付，Prototype 偏重需求確認，Spiral 偏重風險管理。
  - Agile 題目常考價值宣言與框架差異，應避免把 Scrum、Kanban、XP 混為同一種做法。
- generator task:
  - 產生「資訊系統開發流程與模式」草稿，優先用比較表整理 Incremental、Prototype、Spiral。
  - 另設 Agile 區塊，包含定義、四個核心價值、優缺點與 Scrum/Kanban/XP 比較。
- verifier task:
  - 檢查三種開發模式皆含定義、優點、缺點與適用情境。
  - 檢查 Agile 四個核心價值與三個框架重點是否完整且未互相混淆。
- import task:
  - 使用 outputContract 作為後續匯入輸入。
  - 匯入前確認比較表與 Agile 框架段落均可被後續筆記系統拆塊。

## im-04-esg

- outputContract: `_TMP/<timestamp>-information-management-im-04-esg.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - ESG 三構面定義與例子。
  - ESG 與永續報告、碳盤查、供應鏈管理、公司治理的連結。
- memoryPoints:
  - E：Environmental，環境，例如減碳、能源、廢棄物。
  - S：Social，社會，例如員工、供應鏈、人權、社區。
  - G：Governance，治理，例如董事會、風險、法遵、資訊揭露。
  - ESG 常與永續報告、碳盤查、供應鏈管理、公司治理一起考。
- understandingNotes:
  - ESG 可視為企業永續績效的三面向，分別對應環境責任、社會責任與治理責任。
  - 答題時可先寫 E/S/G 全名與中文，再各給一至兩個管理實例。
- generator task:
  - 產生「ESG」草稿，包含 E/S/G 全名、中文、例子與常見連動考點。
  - 可加入短答模板，但不得加入來源外的政策細節。
- verifier task:
  - 檢查 E/S/G 三構面例子是否完整保留。
  - 確認永續報告、碳盤查、供應鏈管理、公司治理均列為常見連動考點。
- import task:
  - 使用 outputContract 作為後續匯入輸入。
  - 匯入前確認 ESG 定義與例子可獨立成短答卡片。

## im-05-info-ethics-regulations

- outputContract: `_TMP/<timestamp>-information-management-im-05-info-ethics-regulations.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - 資訊倫理 PAPA。
  - Zero/First/Second/Third Party Data 資料來源比較。
  - 隱私悖論定義、成因與範例。
  - 個人資料保護法重點與常考名詞。
  - GDPR 適用資訊、適用對象與常見權利。
- memoryPoints:
  - PAPA：Privacy 隱私、Accuracy 正確性、Property 財產權、Accessibility 可近用性。
  - Zero Party Data 是使用者主動、明確提供；First Party Data 是企業從自身互動蒐集；Second Party Data 是其他組織的一方資料經合作分享；Third Party Data 是第三方資料商或外部來源彙整。
  - 隱私悖論：使用者口頭重視隱私，但實際行為可能為便利、優惠或社交需求而提供個資。
  - 隱私悖論成因包含資訊不對稱、風險低估、便利性、同儕壓力、平台依賴；範例包含明知 App 蒐集定位仍授權使用，或為折扣提供個人資料。
  - 個人資料保護法重點是特定目的與合法基礎、告知義務、安全維護、當事人權利；常考個資、敏感個資、蒐集處理利用、目的外利用、當事人權利。
  - GDPR 保護可識別自然人的個人資料，適用處理歐盟境內個人資料者，包含部分境外組織；常見權利包含知情、存取、更正、刪除、限制處理、資料可攜、反對。
- understandingNotes:
  - 倫理題可從 PAPA 四構面檢查個案中的隱私、資料正確性、財產權與可近用性問題。
  - 資料來源比較的核心差異在資料由誰提供、誰蒐集、透過何種合作或外部來源取得。
  - 法規題需區分台灣個資法與 GDPR 的適用語境，並把權利與處理義務連起來。
- generator task:
  - 產生「資訊系統倫理與新興法規」草稿，包含 PAPA、資料來源比較、隱私悖論、個資法與 GDPR。
  - 建議使用表格比較資料來源，並用案例判斷區塊整理隱私悖論。
- verifier task:
  - 檢查 PAPA 四項、資料來源四類、隱私悖論成因與範例、個資法常考名詞、GDPR 權利是否完整。
  - 確認草稿沒有加入來源外法條號、罰則或未提供的法律細節。
- import task:
  - 使用 outputContract 作為後續匯入輸入。
  - 匯入前確認法規相關內容保留為考試筆記語氣，不被改寫成法律意見。

## im-06-im-supplemental-points

- outputContract: `_TMP/<timestamp>-information-management-im-06-im-supplemental-points.md`
- sourceFiles:
  - `_private/資訊管理.txt`
- examOutline:
  - 常見資訊系統與管理縮寫。
  - 資料、治理、服務管理與流程再造相關名詞。
- memoryPoints:
  - MIS：管理資訊系統，支援例行管理與報表。
  - DSS：決策支援系統，支援半結構化決策。
  - ESS/EIS：高階主管資訊系統。
  - ERP：企業資源規劃，整合財務、採購、生產、人資等。
  - CRM：顧客關係管理。
  - SCM：供應鏈管理。
  - KM：知識管理，重視知識取得、儲存、分享與應用。
  - BI：商業智慧，透過資料倉儲、報表、儀表板、資料探勘支援決策。
  - Data Warehouse：主題導向、整合、時間變異、非揮發資料集合。
  - Data Mining：從大量資料中找模式。
  - COBIT：IT 治理框架。
  - ITIL：IT 服務管理最佳實務。
  - BPR：Business Process Reengineering，企業流程再造。
- understandingNotes:
  - 補充考點多屬名詞辨識題，需能把英文縮寫、中文名稱與功能定位配對。
  - 系統類名詞可依管理層級與用途分類：例行管理、決策支援、高階主管、企業整合、顧客、供應鏈、知識、商業智慧。
  - 治理與服務管理名詞可分開記：COBIT 偏 IT 治理，ITIL 偏 IT 服務管理，BPR 偏流程再造。
- generator task:
  - 產生「資訊管理補充考點」草稿，整理所有縮寫、中文名稱、功能定位與分類記憶。
  - 可使用表格分成系統類、資料分析類、治理服務類、流程類。
- verifier task:
  - 檢查 13 個來源名詞是否全部保留：MIS、DSS、ESS/EIS、ERP、CRM、SCM、KM、BI、Data Warehouse、Data Mining、COBIT、ITIL、BPR。
  - 確認每個名詞的中文名稱或功能定位未偏離來源。
- import task:
  - 使用 outputContract 作為後續匯入輸入。
  - 匯入前確認表格或條列可拆成個別記憶卡與比較卡。
