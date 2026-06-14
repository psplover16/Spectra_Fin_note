## ADDED Requirements

### Requirement: Computer principles Markdown-backed topics contain arranged lesson articles

The Computer Principles formal topic data SHALL replace the empty lessonArticle skeletons for `cp-performance-formulas`, `cp-risc-cisc`, `cp-memory-hierarchy`, `cp-memory-classification`, `cp-registers`, and `cp-cache` with non-empty lessonArticle sections arranged from their approved Markdown sources. The arranged content SHALL preserve the existing Markdown teaching content, order, and headings as the primary source of truth. Formatting notes such as `table表示`, `用UL/LI表示`, and equivalent layout instructions SHALL NOT appear as learner-facing text and SHALL be converted into supported lessonArticle block types. Markdown-backed Computer Principles section blocks SHALL use paragraph, orderedList, and table blocks according to the source arrangement. Single-item teaching content SHALL use a paragraph block with `text` as the first-choice kind unless the approved source explicitly requires list semantics. Teaching blocks whose `items` array contains more than one item SHALL use `orderedList` as the first-choice kind unless the approved source explicitly requires unordered semantics. Source tables SHALL remain represented as table blocks. Learner-facing topic text values SHALL preserve actual newline characters (`\n`) in data and SHALL render those newlines as line breaks in the subject topic page. The lessonArticle `lead` field and section `sourceLabel` field SHALL remain allowed by the shared data shape, but Markdown-backed Computer Principles topics SHALL NOT be required to populate either field. Empty `sourceLabel` values SHALL be represented by omitting the field or leaving it `undefined`, not by learner-facing empty-label content.

#### Scenario: Six Markdown-backed topics are formal content

- **WHEN** the Computer Principles formal topic list is loaded
- **THEN** each of the six Markdown-backed topic ids exists in the list
- **THEN** each topic contains exactly one lessonArticle block
- **THEN** each lessonArticle has at least one section
- **THEN** each lessonArticle can have an empty lead array without failing content completeness checks
- **THEN** each lessonArticle section can omit sourceLabel without failing content completeness checks
- **THEN** each topic sourceFiles includes `_private/計算機概論.txt` and the topic's corresponding Markdown source path

##### Example: Topic to Markdown source mapping

| Topic id | Markdown source |
| --- | --- |
| cp-performance-formulas | _private/MD/計概/3a基本計概/六、效能名詞與公式_新手國考教材.md |
| cp-risc-cisc | _private/MD/計概/3a基本計概/七、RISC 與 CISC_新手國考教材.md |
| cp-memory-hierarchy | _private/MD/計概/3a基本計概/八、Memory 階層圖_新手國考教材.md |
| cp-memory-classification | _private/MD/計概/3a基本計概/九、Memory 分類圖_新手國考教材.md |
| cp-registers | _private/MD/計概/3a基本計概/十、Register（暫存器）_新手國考教材.md |
| cp-cache | _private/MD/計概/3a基本計概/十一、Cache_新手國考教材.md |

#### Scenario: Markdown formatting notes are not visible

- **WHEN** any of the six Markdown-backed lessonArticle blocks is serialized for display or test inspection
- **THEN** the serialized learner-facing content does not contain `table表示`
- **THEN** the serialized learner-facing content does not contain `用UL/LI表示`
- **THEN** the serialized learner-facing content does not contain section-level `sourceLabel` values for the six topics
- **THEN** table content from the Markdown arrangement is represented by supported table blocks
- **THEN** single-item teaching content uses supported paragraph blocks with `text` by default
- **THEN** multi-item teaching blocks use `orderedList` unless the approved source explicitly requires unordered semantics

#### Scenario: Newline characters are preserved in learner-facing text

- **WHEN** a Markdown-backed topic paragraph `text` value or orderedList item contains an actual newline character
- **THEN** the stored topic data retains the newline character
- **THEN** serialized learner-facing content does not replace it with visible `\n` characters
- **THEN** the subject topic page renders the newline as a line break in the corresponding paragraph or list item

#### Scenario: Cache lower memory wording is clarified

- **WHEN** the `cp-cache` lessonArticle is loaded
- **THEN** the content explains that the next lower memory level means the layer behind the current cache and farther from the CPU
- **THEN** the content states that when a question simplifies the hierarchy to one cache level, the next lower memory level is usually Main Memory or RAM
