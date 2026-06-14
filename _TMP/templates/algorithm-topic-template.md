# 演算法 Topic 草稿模板

```yaml
---
topic_id: "<manifest-topic-id>"
subject: "algorithms"
route_owner: "/algorithms"
title: "<中文標題(English Term)>"
source_files:
  - "_private/資料結構與演算法.txt"
  - "_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md"
source_sections:
  - "<來源 heading 或演算法 section>"
status: "draft"
generated_at: "<YYYY-MM-DDTHH:mm:ss+08:00>"
verified_by: ""
---
```

## 國考重點

- 本題最常考的定義、流程、條件或比較表。
- 若是排序或搜尋，必須列出資料前提、輸入輸出與核心操作。

## 國考速記

- 以 3 到 5 行整理可背誦版本。
- 每行只放一個高頻考點，避免把理解說明塞進速記。

## 名詞解釋

| 中文 | English Term | 新手解釋 | 首次出現建議文字 |
|---|---|---|---|
|  |  |  | `中文(English Term)` |

## 核心想法

- 用白話說明演算法或資料結構在解決什麼問題。
- 說明每一步為什麼存在，而不只描述語法。
- 若有前提，例如 Binary Search 必須已排序，需在本段明確寫出。

## 手算步驟

### 範例輸入

```text
<放入小型、可手算的輸入>
```

### 逐步推導

| step | 狀態 | 為什麼這樣做 |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

### 結果

```text
<最終輸出或排序結果>
```

## Java 遞迴版

> 若該演算法不適合作為國考主流遞迴寫法，需明確標示「非主流補充」。Shell Sort 第一批不得把遞迴版當主範例。

```java
// 用繁體中文註解說明作答思路、終止條件與考官要看到的演算法概念。
```

### 遞迴版說明

- 終止條件:
- 每次遞迴縮小的問題:
- 呼叫堆疊或額外空間:

## Java 非遞迴版

```java
// 用繁體中文註解說明迴圈狀態、邊界條件與每一步的目的。
```

### 非遞迴版說明

- 迴圈不變量或狀態變數:
- 結束條件:
- 邊界條件:

## 複雜度與穩定性

| 演算法 | Best | Average | Worst | Space | Stability | 備註 |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |

- 若不是排序演算法，Stability 欄填 `N/A` 並說明原因。
- 排序法複雜度必須符合 `_TMP/templates/sorting-complexity-baseline.md`。

## 易錯提醒

- 列出常見錯誤、前提遺漏、邊界條件與國考陷阱。
- 至少一項要對應來源或 verifier checklist 的高風險點。

## 中英專有名詞

| 中文 | English Term | 本 topic 固定用詞 | 備註 |
|---|---|---|---|
|  |  |  |  |

## 來源註記

- sourceFiles:
  - `_private/資料結構與演算法.txt`
  - `_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md`
- sourceSummary:
  - `<用 1 到 3 句說明本 topic 對應來源段落與取用重點>`
- verifierSummary:
  - `<通過 verifier 後回填；draft 階段留空>`

## Verifier 結果

| 檢查項 | 結果 | 備註 |
|---|---|---|
| 來源對應 | pending |  |
| 事實正確性 | pending |  |
| Java 語意 | pending |  |
| 時間複雜度 | pending |  |
| 空間複雜度 | pending |  |
| 穩定性 | pending |  |
| 中英專有名詞 | pending |  |
| 新手可讀性 | pending |  |

final_status: `draft`
