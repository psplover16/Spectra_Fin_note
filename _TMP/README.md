# _TMP 內容產製工作流

`_TMP` 是本 change 的內容產製與驗證邊界，不是正式 runtime data。正式 app 只能從 verifier 通過的草稿匯入靜態 topic data；刪除 `_TMP` 不應影響已匯入內容運作，但會降低追溯能力。

## 任務拆分原則

- `tasks.md` 任務數量不設上限。
- 不得合併不同科目。
- 不得合併不同 topic。
- 不得合併生成與驗證工作。
- 每個 manifest topic 至少對應一個內容生成 task、一個 verifier task、一個正式匯入 task。
- 內容生成副代理只處理單一 topic，完成 `_TMP` 草稿後結束。
- 內容驗證副代理只驗證同一份 `_TMP` 草稿，可修正同檔並留下 verifier 結果。
- 主代理負責拆 task、保護來源邊界、統一術語、最後寫入正式 app data。

## 允許讀取來源

本 change 只允許讀取下列來源檔：

- `_private/計算機概論.txt`
- `_private/網概.txt`
- `_private/資料庫.txt`
- `_private/資訊管理.txt`
- `_private/程式.txt`
- `_private/系統分析與設計.txt`
- `_private/資料結構與演算法.txt`
- `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`

## 禁止讀取來源

本 change 不得讀取或引用下列來源：

- `_private/筆記.md`
- `_private/_private_notes/筆記.txt`
- `_private/_private_notes/**/done/**`
- `_private/_private_fileAssets/**/done/**`
- `_private/程式語言_all.pdf`

## manifest 狀態字典

source manifest 與待生成主題清單只能使用下列狀態：

- `pending-draft`: 已盤點來源，尚未產生草稿。
- `drafted`: 內容生成副代理已產出草稿，尚未完成 verifier。
- `verified`: verifier 已通過，可由主代理匯入正式 app data。
- `blocked`: verifier 或主代理發現來源不足、事實疑點、程式碼或術語問題，暫停匯入。
- `imported`: verified 草稿已由主代理匯入正式 app data。

`_TMP` 草稿 frontmatter 的 `status` 只允許 `draft`、`verified`、`blocked`。

## 草稿檔名規則

每個 topic 草稿使用 `<timestamp>-<subject>-<topic>.md`，其中：

- `<timestamp>` 使用 `yyyyMMdd-HHmmss`。
- `<subject>` 使用 route 或 subject slug，例如 `computer-principles`、`networking`、`database`、`information-management`、`programming`、`algorithms`。
- `<topic>` 使用可追蹤回 manifest 的 topic slug。

範例：

- `20260613-093000-computer-principles-number-system.md`
- `20260613-093500-algorithms-binary-search.md`

## 待生成主題清單

每批來源 manifest 完成後，主代理需建立 `_TMP/待生成主題清單_yyyyMMdd-HHmmss.md`。這份清單只能放在 `_TMP`，只追蹤本 change 的待生成 topic，不得混入個人筆記或受限來源。

清單每列至少包含 route、subject、manifest id、topic id、title、source file、source section、status、draft path、generator task、verifier task、import task、notes。每個 row 應能從 `pending-draft` 追到 `imported` 或 `blocked`。

## 完成紀錄格式

每個 topic 匯入正式 app data 時，需在正式資料或匯入紀錄保留：

- `sourceFiles`
- `sourceSummary`
- `verifiedBy`
- `verifiedAt`
- `verifierSummary`

## scope boundaries

In scope:

- 專業科目講義內容
- 資料庫與演算法 route
- 專業 topic data model
- `_TMP` 草稿、副代理與 verifier 流程
- 演算法第一批必收範例
- localStorage progress normalize

Out of scope:

- 不包含題庫測驗
- 不包含 PDF 第一批匯入
- 不包含外部 API
- 不包含個人筆記
- 不包含遠端同步、登入或 analytics

