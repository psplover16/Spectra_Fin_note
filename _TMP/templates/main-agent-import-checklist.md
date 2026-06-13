# 主代理正式匯入檢查表

主代理在把 `_TMP` 草稿寫入正式 app data 前，需逐項確認：

- 來源：`source_files` 全部在允許清單內，且 source summary 能對回來源段落。
- 術語：標題、表格、重點清單與首次出現的專有名詞採中文英文並列格式。
- 風格：內容符合新手自學，不把記憶重點、理解說明與考點混成不可解析段落。
- 路由歸屬：topic 的 route 與 subjectKey 正確，不把資料庫誤匯入演算法或資管。
- Java code：程式碼語意、註解與考官可見作答思路已通過 verifier。
- verifier status：只接受 `verified`，拒絕 `draft` 與 `blocked`。

匯入後需更新正式匯入差異清單，記錄已匯入、保留 placeholder 與 blocked 的 topic 數量。
