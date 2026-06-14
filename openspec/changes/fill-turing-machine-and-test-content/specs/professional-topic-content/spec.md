## ADDED Requirements

### Requirement: Computer principles Turing lesson content

The professional topic with id `cp-turing-machine-and-test` SHALL expose curated lessonArticle content for the computerPrinciples subject. The lessonArticle SHALL use the reviewed Markdown source `_private/MD/二、圖靈機與圖靈測試.md` as source traceability, SHALL include a lead that introduces the topic, SHALL include sections for Turing machine, computability, Turing test, and a comparison between Turing machine and Turing test, and MUST keep all content inside typed SubjectTopicBlock data shapes.

#### Scenario: Topic data contains curated Turing sections

- **WHEN** the professional topics for subject key `computerPrinciples` are loaded
- **THEN** the topic with id `cp-turing-machine-and-test` includes one `lessonArticle` block
- **THEN** the lessonArticle sourceFiles include `_private/MD/二、圖靈機與圖靈測試.md`
- **THEN** the lessonArticle lead contains at least one non-empty line
- **THEN** the lessonArticle sections include non-empty entries for Turing machine, computability, Turing test, and comparison content

##### Example: expected section coverage

| Content area | Required representation |
| ----- | ----- |
| Turing machine definition and core model | paragraph plus marker-styled orderedList content |
| Turing machine components | orderedList or bulletList with tape, read/write head, and finite control |
| Turing machine operation | orderedList describing read, rule lookup, write, move, and state transition |
| Computability | list content describing problem, explicit procedure, and finite steps |
| Turing test | paragraph content describing text conversation and indistinguishability |
| Turing machine versus Turing test | table comparing core question, focus, nature, and common use |

#### Scenario: Turing sections omit source labels

- **WHEN** the professional topics for subject key `computerPrinciples` are loaded
- **THEN** every section inside the `cp-turing-machine-and-test` lessonArticle omits `sourceLabel`
- **THEN** the serialized `cp-turing-machine-and-test` topic does not include `[必背]`, `[理解]`, or `[比較]`

#### Scenario: Core model questions use marker-styled ordered list presentation

- **WHEN** the `cp-turing-machine-and-test` lessonArticle is loaded
- **THEN** the section headed `圖靈機是什麼` includes an `orderedList` for the core model questions
- **THEN** that orderedList includes items for how data is stored, how data is read, how rules change data each step, and when computation ends
- **THEN** that orderedList declares a `markerStyle` value of `decimal` so the rendered list displays `1.`, `2.`, `3.`, and `4.` markers

#### Scenario: Turing content remains compatible with existing renderer

- **WHEN** the `cp-turing-machine-and-test` lessonArticle is rendered by SubjectTopicPage
- **THEN** every section block uses one of the supported content block kinds: `paragraph`, `bulletList`, `orderedList`, or `table`
- **THEN** `orderedList` blocks render as native `ol` and `li` elements with a visible ordered marker style
- **THEN** supported ordered marker styles include decimal, upper Roman, and upper alpha markers
- **THEN** no SVG icon, route, storage adapter, or dependency is required for the content to appear
