## MODIFIED Requirements

### Requirement: Computer principles v2 publishes supplemental HTML lessons

The system SHALL publish standalone HTML lessons under `public/computer-principles-v2/` from three source classes: (a) exactly one HTML lesson for each approved Markdown file in `_private/計概補充/`, (b) exactly four HTML lessons split from the existing `基礎資料結構(下)_樹與雜湊表.html` lesson (基礎樹, 運算式表示法, 雜湊表, 樹與雜湊表_考題練習), and (c) exactly one HTML lesson for each approved Markdown file in `_private/20260708/` (AVL樹, AVL樹_刪除, 紅黑樹, 紅黑樹_刪除). Each HTML filename derived from a Markdown source SHALL match its source Markdown filename with the `.md` extension replaced by `.html`. Each split HTML filename SHALL use its learner-facing topic name. The source Markdown files and the original `基礎資料結構(下)_樹與雜湊表.html` SHALL remain in place and SHALL NOT be deleted by this capability.

#### Scenario: Supplemental HTML inventory matches its source classes

- **WHEN** the CPv2 supplemental HTML inventory is inspected
- **THEN** it contains exactly 14 HTML files
- **AND** each HTML file is a standalone `zh-Hant` UTF-8 document
- **AND** each Markdown-derived HTML filename matches one approved Markdown source filename with the extension changed to `.html`
- **AND** the original `基礎資料結構(下)_樹與雜湊表.html` remains published and is not deleted
- **AND** no extra HTML file is published for `阿姆達爾定律`

##### Example: required new HTML inventory

| Source class | Source | HTML filename |
| ----- | ----- | ----- |
| split | `基礎資料結構(下)_樹與雜湊表.html` 六、樹 | `基礎樹.html` |
| split | `基礎資料結構(下)_樹與雜湊表.html` 七、運算式 | `運算式表示法.html` |
| split | `基礎資料結構(下)_樹與雜湊表.html` 八、雜湊表 | `雜湊表.html` |
| split | `基礎資料結構(下)_樹與雜湊表.html` 九～十一、考題 | `樹與雜湊表_考題練習.html` |
| markdown | `_private/20260708/AVL樹_考前速記卡.md` | `AVL樹.html` |
| markdown | `_private/20260708/AVL樹_刪除專練.md` | `AVL樹_刪除.html` |
| markdown | `_private/20260708/紅黑樹_考前速記卡.md` | `紅黑樹.html` |
| markdown | `_private/20260708/紅黑樹_刪除專練.md` | `紅黑樹_刪除.html` |

## ADDED Requirements

### Requirement: Split trees and hash-table lessons exclude balanced-tree content

The four HTML lessons split from `基礎資料結構(下)_樹與雜湊表.html` SHALL preserve the learner-facing section structure of their source chapters and SHALL NOT include the source lesson's balanced-tree (AVL / 紅黑樹) chapter. The 基礎樹 lesson SHALL cover the tree chapter through Heap and Heap Sort and SHALL retain the tree-chapter summary block. The 運算式表示法 lesson SHALL cover the expression-notation chapter. The 雜湊表 lesson SHALL cover the hash-table chapter. The 樹與雜湊表_考題練習 lesson SHALL cover only the complexity summary, high-frequency review, and multiple-choice practice chapters with their answer explanations.

#### Scenario: Balanced-tree content is absent from split lessons

- **WHEN** the four split CPv2 lessons are inspected
- **THEN** none of `基礎樹.html`, `運算式表示法.html`, `雜湊表.html`, or `樹與雜湊表_考題練習.html` contains the AVL or 紅黑樹 balanced-tree chapter
- **AND** `基礎樹.html` contains the tree terminology, binary tree, traversal, BST, Heap, and Heap Sort sections
- **AND** `基礎樹.html` retains the tree-chapter summary block
- **AND** `樹與雜湊表_考題練習.html` contains only the complexity summary, high-frequency review, and multiple-choice practice sections

### Requirement: AVL and red-black tree lessons preserve ASCII diagrams

The four HTML lessons generated from `_private/20260708/` Markdown SHALL render the source Markdown structure as semantic HTML, and SHALL preserve every ASCII-art tree diagram inside a preformatted code block so its alignment is not broken.

#### Scenario: ASCII diagrams render inside preformatted blocks

- **WHEN** an AVL or 紅黑樹 CPv2 lesson generated from `_private/20260708/` is rendered
- **THEN** each ASCII-art tree diagram from the source Markdown appears inside a `<pre>` preformatted code block
- **AND** the source Markdown tables render as HTML tables
- **AND** the source Markdown blockquotes render as HTML blockquotes

