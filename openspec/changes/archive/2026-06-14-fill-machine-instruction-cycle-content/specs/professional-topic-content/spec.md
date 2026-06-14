## ADDED Requirements

### Requirement: Computer principles machine instruction cycle topic uses a source-traced teaching article

The Computer Principles topic with id `cp-machine-instruction-cycle` SHALL contain exactly one `lessonArticle` block built from the approved machine instruction cycle teaching Markdown. The article SHALL preserve source traceability to `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md`. The article SHALL explain machine instructions as executable CPU commands and instruction cycles as the stages used to execute those commands. The article SHALL NOT display bracketed study labels such as `[必背]`, `[補充]`, `[理解]`, or `[比較]`.

#### Scenario: Machine instruction cycle topic renders as one lesson article

- **WHEN** the formal Computer Principles topic data is loaded
- **THEN** topic `cp-machine-instruction-cycle` has title `機器指令與指令週期(Machine Instruction and Instruction Cycle)`
- **THEN** its `blocks` list contains exactly one `lessonArticle` block
- **THEN** the lesson article source files include `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/三、機器指令與指令週期_新手國考教材.md`
- **THEN** the lesson article source section is `3a. 基本計概 / 機器指令與指令週期`

#### Scenario: Machine instruction cycle article preserves the learning structure

- **WHEN** the `cp-machine-instruction-cycle` lesson article sections are read
- **THEN** the section headings include `考前小抄`, `機器指令範例`, `指令週期怎麼理解`, `指令週期關鍵字`, `易混淆比較`, and `國考怎麼判斷`
- **THEN** the quick review, instruction-cycle stages, and exam judgment cues are represented with `orderedList` content blocks
- **THEN** instruction examples, cycle keyword explanations, and confusing comparisons are represented with `table` content blocks
- **THEN** every ordered list uses the existing ordered-list data shape and contains no icon-specific data property

#### Scenario: Machine instruction cycle article covers the required exam concepts

- **WHEN** the serialized `cp-machine-instruction-cycle` topic is inspected
- **THEN** it contains explanations for `Opcode`, `Operand`, `位址欄位`, `Effective Address`, `PC`, `IR`, `Fetch`, `Decode`, `Operand Fetch`, `Execute`, and `Write Back`
- **THEN** it contains glossary explanations for `I/O`, `ALU`, and `Branch`
- **THEN** it compares `Fetch` with `Operand Fetch`, `PC` with `IR`, and `Decode` with `Execute`
