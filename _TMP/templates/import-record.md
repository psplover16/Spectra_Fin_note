# 正式匯入紀錄模板

每個 topic 匯入正式 app data 時，至少保留下列欄位：

```ts
{
  sourceFiles: [],
  sourceSummary: '',
  verifiedBy: '',
  verifiedAt: '',
  verifierSummary: ''
}
```

匯入前主代理需確認：

- 來源已對應允許清單。
- `_TMP` 草稿 status 是 `verified`。
- `draft` 不得替換 placeholder。
- `blocked` 不得替換 placeholder。
- `verified` 才能匯入。
- draft 不得替換 placeholder。
- blocked 不得替換 placeholder。
- verified 才能匯入。
- 術語採中文英文並列規則。
- 內容風格符合新手自學。
- route 與 subjectKey 歸屬正確。
- Java code 與複雜度資料已通過 verifier。
