## 1. 前置規則與樣板確認

- [x] 1.1 [P] 凍結各路由 card 產出清單與順序（交付：一份 7 路由的 card 標題×序號對照，順序取自 getSubjectTopics(subjectKey) 與 database-v2 的 databaseV2Pages）。此為 "Complete per-card coverage across the seven target routes" 的基礎。驗證：清單數量與 tests/unit/subjectTopics.spec.ts 之預期一致，7 路由分別為 12/10/13/7/7/17/5、合計 71。
- [x] 1.2 [P] 定義檔名淨化規則（交付：route meta.title ＋兩位補零序號＋淨化後 card 標題＋.md；Windows 非法字元 / \ : * ? " < > | 皆替換，ASCII / 換為全形 ／）。對應 "Output location and filename convention"。驗證：對標題 "OSI 七層 + TCP/IP ★" 產出檔名為「網路概論(v2)_01_OSI 七層 + TCP／IP ★.md」。
- [x] 1.3 產出 networking-v2 首檔（序號 01，_private/20260701/）作為風格樣板並交使用者複核。對應 "Problem-driven study-note structure"。驗證：檔案含 H1（card 標題）＋七段（開場題目/先想想/觀念拆解/回到題目：解答/重點整理/常見陷阱/練習題）且練習題答案置於可收合 details 區塊，並取得使用者風格確認。

## 2. 逐路由產出講義（依畫面由上而下順序）

- [x] 2.1 [P] networking-v2（網路概論(v2)）其餘 11 張（序號 02–12）：以各 card 的 lessonArticle 內容改寫為題目帶動、新手向講義並寫入 _private/20260701/。驗證：本路由 01–12 齊全、序號對應畫面順序、每檔通過結構檢查與專業內容審查（定義正確、解題邏輯完整、觀念不誤導）。
- [x] 2.2 [P] operating-systems（作業系統）10 張（序號 01–10）：以各 card lessonArticle 內容改寫為題目帶動講義並寫入 _private/20260701/。驗證：10 檔齊全、序號對應、結構檢查與專業內容審查通過。
- [x] 2.3 [P] information-management（資管）7 張（序號 01–07）：以各 card lessonArticle 內容改寫為題目帶動講義並寫入 _private/20260701/。驗證：7 檔齊全、序號對應、結構檢查與專業內容審查通過。
- [x] 2.4 [P] programming（程式）7 張（序號 01–07）：以各 card lessonArticle 內容改寫為題目帶動講義（程式範例以 Java 為主）並寫入 _private/20260701/。驗證：7 檔齊全、序號對應、結構檢查與專業內容審查通過。
- [x] 2.5 [P] algorithms（演算法）17 張（序號 01–17）：以各 card lessonArticle 內容改寫為題目帶動講義並寫入 _private/20260701/。驗證：17 檔齊全、序號對應、結構檢查與專業內容審查通過。
- [x] 2.6 [P] system-design（系統設計）5 張（序號 01–05）：以各 card lessonArticle 內容改寫為題目帶動講義並寫入 _private/20260701/。驗證：5 檔齊全、序號對應、結構檢查與專業內容審查通過。
- [x] 2.7 [P] database-v2（資料庫2）13 張（序號 01–13）：讀取 public/database-v2/ 下對應的 HTML 頁面內容改寫為題目帶動講義（"Content rewritten from existing card content" 之 database-v2 特例）並寫入 _private/20260701/。驗證：13 檔齊全、序號對應 databaseV2Pages 順序、結構檢查與專業內容審查通過。

## 3. 全域驗收與品質檢查

- [x] 3.1 [P] 覆蓋數量總驗（"Complete per-card coverage across the seven target routes"）：確認 7 路由檔數為 12/10/13/7/7/17/5、合計 71，且每路由序號連續無缺漏、無多餘檔案。驗證：逐路由計數與序號比對。
- [x] 3.2 [P] 語言與編碼檢查（"Language and encoding"）：確認全部 71 檔為 UTF-8 無 BOM、內容為繁體中文、無亂碼或問號替代字元（U+FFFD）。驗證：以掃描指令檢測 BOM 位元組與 U+FFFD 皆為 0。
- [x] 3.3 [P] 範圍邊界檢查（"No changes to application code, specs, or tests"）：確認 git 工作區於 openspec/ 之外僅新增 _private/20260701/ 下的 md，未修改 app 程式、路由、card 資料、openspec/specs/ 既有規格或測試，且全程未讀寫受限路徑（_private/_private_notes/筆記.txt 與 done 目錄）。驗證：git status 檢視＋受限路徑未存取確認。
