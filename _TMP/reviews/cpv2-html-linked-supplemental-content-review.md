# CPv2 HTML-linked supplemental content review

change: link-cpv2-supplemental-cards-to-html
target: computerPrinciplesV2 supplemental HTML-linked cards
scope: 6 個 HTML standalone lessons under `public/computer-principles-v2/`

## Source Mapping

| card | source Markdown | output HTML | review |
|---|---|---|---|
| CPU 排班演算法 | `_private/計概補充/CPU排班演算法_國考完整講義.md` | `CPU排班演算法_國考完整講義.html` | pass |
| 死結 | `_private/計概補充/死結_考試精簡版.md` | `死結_考試精簡版.html` | pass |
| 分頁與分段記憶體管理 | `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` | `分頁與分段記憶體管理_題目帶動教學完整版.html` | pass |
| 物件導向特性 | `_private/計概補充/物件導向特性_國考完整講義.md` | `物件導向特性_國考完整講義.html` | pass |
| 複雜度與線性結構 | `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` | `基礎資料結構(上)_複雜度與線性結構.html` | pass |
| 樹與雜湊表 | `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` | `基礎資料結構(下)_樹與雜湊表.html` | pass |

## Review Notes

- HTML inventory: pass, exactly 6 個 HTML and no extra 阿姆達爾 HTML.
- Markdown structure: pass, headings, paragraphs, blockquotes, ordered lists, unordered lists, tables, and code fences are preserved as HTML structures.
- Reading chrome: pass, each page has a left return button, `zh-Hant`, UTF-8, and no right-side recite toggle.
- Runtime boundary: pass, app data uses `htmlPage` links for the six cards and does not add a runtime Markdown renderer.
- Source traceability: pass, each linked topic keeps the approved Markdown source in `sourceFiles` and the public filename in `htmlPage.sourceFilename`.
- lecture-only: pass, these pages are教材講義，不新增 quiz-only fields such as `questionText`, `correctAnswer`, `backendSyncId`, or `remoteQuestionId`.
- Exam-scope boundary: pass, content is generated from the supplied Markdown only; this change does not擴寫近 8 年考古題或新增外部題庫。
