## ADDED Requirements

### Requirement: Tree deletion lessons present the deletion SOP as an embedded SVG flowchart

`紅黑樹_刪除.html` and `AVL樹_刪除.html` SHALL present their deletion SOP as an inline, self-contained SVG flowchart embedded directly in the HTML document, using no external resources (no external fonts, scripts, or images). The flowchart SHALL render only in the page's light reading chrome and SHALL NOT introduce a dark-mode variant.

`紅黑樹_刪除.html` SHALL embed the flowchart together with its three legend blocks — term glossary (名詞對照), color meaning (顏色的意思), and the four-line mnemonic (四句口訣) — sourced from the shared 紅黑樹 deletion flowchart asset.

`AVL樹_刪除.html` SHALL embed an AVL deletion flowchart in the same visual language that covers: BST-rule removal simplification, per-node height recomputation, balance-factor evaluation, the `|BF| ≤ 1` balanced exit, the four rotation types selected by the taller child's balance factor, the upward loop back to the parent, and termination at the root.

Content outside the deletion SOP section SHALL be retained.

#### Scenario: Deletion SOP renders as an inline self-contained SVG flowchart

- **WHEN** `紅黑樹_刪除.html` or `AVL樹_刪除.html` is rendered
- **THEN** the deletion SOP is presented as an inline `<svg>` flowchart element embedded in the document
- **AND** the flowchart and its styles reference no external hosts
- **AND** no dark-mode media query governs the flowchart

#### Scenario: Red-black deletion flowchart carries its three legends

- **WHEN** `紅黑樹_刪除.html` is rendered
- **THEN** the flowchart is accompanied by three legend blocks: term glossary, color meaning, and the four-line mnemonic

#### Scenario: AVL deletion flowchart covers the balance-repair loop

- **WHEN** `AVL樹_刪除.html` is rendered
- **THEN** the flowchart shows removal simplification, height and balance-factor computation, the `|BF| ≤ 1` balanced exit, four rotation branches, the upward loop, and termination at the root

##### Example: four rotation branches keyed by the taller child's balance factor

| Node BF | Taller child BF | Rotation |
| ----- | ----- | ----- |
| +2 | +1 or 0 | right rotation (LL, single) |
| +2 | −1 | LR double rotation (left-rotate left child, then right-rotate node) |
| −2 | −1 or 0 | left rotation (RR, single) |
| −2 | +1 | RL double rotation (right-rotate right child, then left-rotate node) |

#### Scenario: Surrounding lesson content is retained

- **WHEN** either deletion lesson is rendered
- **THEN** sections outside the deletion SOP remain present
- **AND** `紅黑樹_刪除.html` still contains 三個必記上界, 驗算, the 附錄 appendix, and all 16 practice questions
- **AND** `AVL樹_刪除.html` still contains 旋轉怎麼畫, (選配)提早停手, the worked examples, and the practice questions

## MODIFIED Requirements

### Requirement: Computer principles v2 HTML lessons preserve Markdown layout

Each CPv2 supplemental HTML lesson SHALL preserve the learner-facing structure of its source Markdown, including heading order, paragraphs, blockquotes, tables, code blocks, ordered lists, and unordered lists. Ordered Markdown lists SHALL render as ordered HTML lists, and unordered Markdown lists SHALL render as unordered HTML lists. This preservation requirement SHALL NOT apply to a content area for which another requirement in this capability explicitly authorizes an alternative presentation — specifically the deletion SOP section of `紅黑樹_刪除.html` and `AVL樹_刪除.html`, which is governed by the embedded SVG flowchart requirement.

#### Scenario: Markdown list and table structure is preserved

- **WHEN** a CPv2 supplemental Markdown file contains headings, tables, ordered lists, unordered lists, blockquotes, or code fences
- **THEN** the generated HTML preserves those structures using semantic HTML elements
- **AND** the generator does not convert every list to an ordered list
- **AND** the generator does not flatten source tables into paragraphs
- **AND** where an explicit flowchart requirement governs a content area, that requirement takes precedence over Markdown-layout preservation for that area

### Requirement: AVL and red-black tree lessons preserve ASCII diagrams

The four HTML lessons generated from `_private/20260708/` Markdown SHALL render the source Markdown structure as semantic HTML, and SHALL preserve every ASCII-art tree diagram inside a preformatted code block so its alignment is not broken. This requirement SHALL NOT apply within the deletion SOP section of `紅黑樹_刪除.html` and `AVL樹_刪除.html` that is replaced by an SVG flowchart; specifically, the source "double-black mirror" (雙黑左右鏡像) ASCII illustration in `紅黑樹_刪除.html` is intentionally removed as part of that replacement. Every ASCII-art diagram outside the deletion SOP section SHALL still be preserved inside a preformatted code block.

#### Scenario: ASCII diagrams render inside preformatted blocks

- **WHEN** an AVL or 紅黑樹 CPv2 lesson generated from `_private/20260708/` is rendered
- **THEN** each ASCII-art tree diagram from the source Markdown that lies outside the deletion SOP section appears inside a `<pre>` preformatted code block
- **AND** the source Markdown tables render as HTML tables
- **AND** the source Markdown blockquotes render as HTML blockquotes
- **AND** the deletion SOP section governed by the flowchart requirement is exempt from ASCII-diagram preservation
