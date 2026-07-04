## Why

`/computer-principles-v2` 的補充教材已整理成 6 份完整 Markdown，使用者希望保留原 Markdown 內容與排版，轉為可離線開啟的 standalone HTML，並讓指定補充 card 像 `database-v2` 一樣點擊標題開啟講義。現在要同步修正既有 CPv2 規格，避免仍要求 20 張卡、舊 `基礎資料結構` 卡與全 inline lessonArticle 行為。

## What Changes

- 新增 `public/computer-principles-v2/` 靜態 HTML 講義，共 6 份，來源為 `_private/計概補充/` 內核准 Markdown，檔名與來源同名但副檔名改為 `.html`。
- HTML 採 `database-v2` 講義紙張風格與左上返回行為，不保留右上默寫模式，並保留 Markdown 原始清單型態與排版。
- CPv2 的 `CPU 排班演算法`、`死結`、`分頁與分段記憶體管理`、`物件導向特性`、`複雜度與線性結構`、`樹與雜湊表` card 點擊標題後開啟對應 HTML。
- 移除 `基礎資料結構` card，新增 `複雜度與線性結構`、`樹與雜湊表` 兩張 card；CPv2 route-visible topic 總數改為 21 張。
- `阿姆達爾定律` 維持目前 inline `lessonArticle`。

## Non-Goals

- 不新增 runtime Markdown renderer，不在瀏覽器端解析 Markdown。
- 不改 `/database-v2` 既有行為，不重建 app routing 或 subject switcher。
- 不改 CPv2 catalog-backed 13 張卡的相對順序，不做 progress storage migration。
- 不擴寫近 8 年考古題內容；本次只轉換使用者核准的計概補充 Markdown。
- 不刪除原始 Markdown。

## Capabilities

### New Capabilities

- `computer-principles-v2-html-pages`: 定義 CPv2 補充 Markdown 轉出的 standalone HTML 講義、返回行為、排版保留與離線靜態資產契約。

### Modified Capabilities

- `computer-principles-v2-route`: route-visible topic 數量、補充卡順序、HTML-linked card 行為、舊 `基礎資料結構` card 移除。
- `professional-topic-content`: CPv2 補充 topic 的來源追溯改為新 Markdown/HTML 對應，並允許 HTML-linked cards 不以 inline lessonArticle 作為唯一 learner-facing 內容。

## Impact

- Affected specs: computer-principles-v2-html-pages, computer-principles-v2-route, professional-topic-content
- Affected code:
  - New: public/computer-principles-v2/, src/modules/computerPrinciplesV2/data/computerPrinciplesV2Pages.ts
  - Modified: src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/components/SubjectTopicCard.vue, src/modules/subjectTopics/components/SubjectTopicPage.vue, src/modules/subjectTopics/data/computerPrinciplesV2Topics.ts, tests/unit/computerPrinciplesV2RouteWorkflow.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/professionalTopics.spec.ts, tests/component/SubjectRoutesSmoke.spec.ts
  - Removed: none
