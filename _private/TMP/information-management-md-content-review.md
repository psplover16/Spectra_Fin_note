# 資訊管理 Markdown 匯入內容審查

查核日期：2026-06-19

## 匯入來源

- `_private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md`
- `_private/MD/資訊管理/資訊管理_2a_傳統開發模式.md`
- `_private/MD/資訊管理/資訊管理_2b_敏捷開發.md`
- `_private/MD/資訊管理/資訊管理_3a_資訊倫理.md`
- `_private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md`
- `_private/MD/資訊管理/資訊管理_4a_個人資料保護法.md`
- `_private/MD/資訊管理/資訊管理_4b_GDPR.md`

## 官方查核來源

- 個人資料保護委員會籌備處，個人資料保護法條文：https://www.pdpc.gov.tw/News_Html/100/
- 個人資料保護委員會籌備處，修法新聞稿：https://www.pdpc.gov.tw/News_Content/20/1010/
- 個人資料保護委員會籌備處，網站首頁與機關狀態：https://www.pdpc.gov.tw/
- 個人資料保護委員會籌備處，施政與籌備資訊：https://www.pdpc.gov.tw/News_Content/20/907/
- GDPR Article 83 administrative fines：https://gdpr-info.eu/art-83-gdpr/
- GDPR Article 3 territorial scope：https://gdpr-text.com/read/article-3/

## 審查決策

- 來源中的「內容經網路查證」與「內容經查證」屬於來源維護 meta 句，不放入 learner-facing `lessonArticle` 文字。
- 會影響考點理解的具體 caveat 要保留，例如數位轉型成功要素不同來源版本略有不同。
- `Second-Party Data` 例子採保守寫法：「合作夥伴分享的會員/客戶行為資料」。不使用 `FB／IG 行為數據`，避免讓學習者誤以為一般平台廣告行為資料必然由本公司直接擁有或直接取得。
- 個資法內容需區分已修正公布、待施行日期與籌備處狀態。官方資料顯示 114 年 11 月 11 日修正公布的部分條文尚待行政院定施行日期；截至 2026-06-19，官方網站仍以個人資料保護委員會籌備處名義運作。
- GDPR 適用範圍使用「歐盟境內自然人／資料主體」描述 Article 3 的 data subjects in the Union，不限縮為只有歐盟居民或公民。
- GDPR 罰則保留高額門檻：2,000 萬歐元或全球年營業額 4%，取較高者。

## 轉換紀錄

- 七個 Markdown 來源已重新讀取，匯入時依檔名前綴自然順序轉為 `lessonArticle` typed blocks。
- H2/H3、段落、blockquote、清單與表格轉為既有 typed content blocks；若 blockquote 沒有獨立型別，保留在相鄰段落或清單的閱讀順序中。
- 本 review note 僅作為 apply/archival 追溯依據，不作為 learner-facing article 內容。
