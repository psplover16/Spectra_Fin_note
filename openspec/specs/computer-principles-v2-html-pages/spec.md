# computer-principles-v2-html-pages Specification

## Purpose

本規格定義計概 v2 補充教材以匯入 standalone HTML 講義頁呈現的契約：保留來源 Markdown 排版、採 database-v2 閱讀外框、提供返回控制且不含默寫切換，並打包供離線使用。

## Requirements

### Requirement: Computer principles v2 publishes supplemental HTML lessons

The system SHALL publish exactly one standalone HTML lesson under `public/computer-principles-v2/` for each approved Markdown file in `_private/計概補充/`. Each HTML filename SHALL match its source Markdown filename with the `.md` extension replaced by `.html`. The source Markdown files SHALL remain in place and SHALL NOT be deleted by this capability.

#### Scenario: Supplemental HTML inventory matches approved Markdown sources

- **WHEN** the CPv2 supplemental HTML inventory is inspected
- **THEN** it contains exactly 6 HTML files
- **AND** each HTML file is a standalone `zh-Hant` UTF-8 document
- **AND** each HTML filename matches one approved Markdown source filename with the extension changed to `.html`
- **AND** no extra HTML file is published for `阿姆達爾定律`

##### Example: required HTML inventory

| Source Markdown | HTML filename |
| ----- | ----- |
| `_private/計概補充/CPU排班演算法_國考完整講義.md` | `CPU排班演算法_國考完整講義.html` |
| `_private/計概補充/死結_考試精簡版.md` | `死結_考試精簡版.html` |
| `_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md` | `分頁與分段記憶體管理_題目帶動教學完整版.html` |
| `_private/計概補充/物件導向特性_國考完整講義.md` | `物件導向特性_國考完整講義.html` |
| `_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md` | `基礎資料結構(上)_複雜度與線性結構.html` |
| `_private/計概補充/基礎資料結構(下)_樹與雜湊表.md` | `基礎資料結構(下)_樹與雜湊表.html` |


<!-- @trace
source: link-cpv2-supplemental-cards-to-html
updated: 2026-07-08
code:
  - _private/discuss.txt
-->

---
### Requirement: Computer principles v2 HTML lessons preserve Markdown layout

Each CPv2 supplemental HTML lesson SHALL preserve the learner-facing structure of its source Markdown, including heading order, paragraphs, blockquotes, tables, code blocks, ordered lists, and unordered lists. Ordered Markdown lists SHALL render as ordered HTML lists, and unordered Markdown lists SHALL render as unordered HTML lists.

#### Scenario: Markdown list and table structure is preserved

- **WHEN** a CPv2 supplemental Markdown file contains headings, tables, ordered lists, unordered lists, blockquotes, or code fences
- **THEN** the generated HTML preserves those structures using semantic HTML elements
- **AND** the generator does not convert every list to an ordered list
- **AND** the generator does not flatten source tables into paragraphs


<!-- @trace
source: link-cpv2-supplemental-cards-to-html
updated: 2026-07-08
code:
  - _private/discuss.txt
-->

---
### Requirement: Computer principles v2 HTML lessons use database v2 reading chrome

Each CPv2 supplemental HTML lesson SHALL use the same paper-style reading chrome as the Database v2 HTML lessons, including the shared color palette, readable article width, sticky toolbar, and left return control. CPv2 supplemental HTML lessons SHALL NOT render the Database v2 right-side recite-mode toggle.

#### Scenario: Static page toolbar returns to CPv2 route

- **WHEN** the user opens a CPv2 supplemental HTML lesson from `/computer-principles-v2`
- **THEN** the page toolbar displays a left return button
- **AND** activating the return button navigates to the previous browser history entry when one exists
- **AND** activating the return button navigates to the base-path-aware `/computer-principles-v2` route when no previous history entry is available
- **AND** the toolbar does not display a right-side recite-mode toggle


<!-- @trace
source: link-cpv2-supplemental-cards-to-html
updated: 2026-07-08
code:
  - _private/discuss.txt
-->

---
### Requirement: Computer principles v2 HTML lessons are packaged for offline use

The CPv2 supplemental HTML lessons SHALL be static public assets packaged with the PWA build. The route and linked HTML pages SHALL remain available after an online warmup when the production PWA shell is used offline.

#### Scenario: Warmed CPv2 HTML lesson opens offline

- **WHEN** the production PWA shell warms `/computer-principles-v2` and one linked CPv2 supplemental HTML lesson while online
- **AND** the browser is switched offline
- **THEN** the app shell still loads the CPv2 route
- **AND** the warmed CPv2 supplemental HTML lesson remains accessible as a static asset

<!-- @trace
source: link-cpv2-supplemental-cards-to-html
updated: 2026-07-08
code:
  - _private/discuss.txt
-->