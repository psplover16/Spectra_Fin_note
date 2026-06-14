## ADDED Requirements

### Requirement: Professional topics carry source traceability

Each professional topic SHALL record the source files and a source summary that connects the displayed learning content to the approved source material.

#### Scenario: Topic shows source traceability data

- **WHEN** a professional topic is loaded from formal app data
- **THEN** the topic data includes sourceFiles with at least one approved _private txt or md source path
- **THEN** the topic data includes sourceSummary describing the source section or source basis

### Requirement: Professional topics separate exam outline, memory, and understanding content

Each professional topic SHALL preserve exam outline, memory points, and understanding guidance as traceability metadata or source-outline input when the approved source provides those layers. Rebuilt professional route content SHALL NOT use examOutline, memoryPoints, understanding, termList, workedExample, or pitfall blocks as the fixed displayed content container after the all-section source-outline rebuild.

#### Scenario: Topic exposes learning layers

- **WHEN** a professional topic is prepared from approved source material
- **THEN** the topic preserves exam outline, memory point, and understanding guidance data when those layers exist in the source
- **THEN** the topic prompt can use those layers as source-outline input for the content writer subagent
- **THEN** the rebuilt formal displayed content uses the expanded teaching article rather than the old fixed section blocks

### Requirement: Professional topics use beginner-friendly teaching structure

Professional subject content SHALL explain prerequisite terminology before using it as assumed knowledge and SHALL provide concrete examples for non-trivial concepts.

#### Scenario: Topic introduces a technical term

- **WHEN** a professional topic first introduces a technical term
- **THEN** the topic explains the term in beginner-friendly Traditional Chinese before relying on it in later explanation

#### Scenario: Topic explains a formula or procedure

- **WHEN** a professional topic contains a formula or procedure
- **THEN** the topic includes a concrete worked example using real values

### Requirement: Technical terms include Chinese and English names

Technical terms in professional topic titles, tables, key point lists, and first occurrence text SHALL use the format Chinese(English Term).

#### Scenario: Binary tree term appears for the first time

- **WHEN** a topic first presents the binary tree concept
- **THEN** the text includes 二元樹(Binary Tree)

#### Scenario: Repeated term in same section

- **WHEN** the same technical term appears again in the same section after the first bilingual occurrence
- **THEN** the content can use the Chinese term alone without losing the original bilingual mapping

### Requirement: Placeholder replacement requires verified content

A subject placeholder topic SHALL be replaced only by formal topic data created from a verified _TMP draft.

#### Scenario: Draft is not verified

- **WHEN** a _TMP draft has status draft or blocked
- **THEN** the draft content is not imported into formal app data
- **THEN** the existing placeholder remains available for that subject if no verified replacement exists

#### Scenario: Draft is verified

- **WHEN** a _TMP draft has status verified and includes verifier results
- **THEN** the main integration step can convert it into formal app topic data
- **THEN** the formal topic preserves source files and source summary

### Requirement: Section subtitles are not reintroduced

Professional topic rendering SHALL NOT require a fixed section subtitle field on each topic card or section.

#### Scenario: Topic card renders professional content

- **WHEN** a professional topic card is rendered
- **THEN** the card displays the topic title and content blocks without requiring a per-section subtitle field

### Requirement: Computer principles first-batch coverage matches manifest

The Computer Principles first-batch formal topic list SHALL include one formal app topic for every topic row in _TMP/manifests/computer-principles-manifest.md.

#### Scenario: Computer principles topic count is checked

- **WHEN** the Computer Principles formal topic list is loaded
- **THEN** its topic count equals the number of topic rows in _TMP/manifests/computer-principles-manifest.md
- **THEN** each formal topic preserves sourceFiles, sourceSummary, and verifier metadata

### Requirement: Imported drafts are substantive AI-generated teaching drafts

Every imported professional topic SHALL have a matching _private/TMP/<route> Markdown draft that is a substantive AI-generated teaching draft rather than a manifest row, task checklist, reading log, import summary, or short summary.

#### Scenario: Imported professional draft is checked

- **WHEN** a professional topic has status imported in the route tracking list or appears in formal app data
- **THEN** its matching _private/TMP/<route> draft includes frontmatter with status verified
- **THEN** its matching draft declares an article-style teaching content shape
- **THEN** its matching draft includes source mapping, source-outline input, teaching article body, source-label learning notes, and verifier results
- **THEN** its matching draft does not keep the old fixed-template section set as the content container

### Requirement: Computer principles rebuilt topics use lessonArticle content

The rebuilt Computer Principles route SHALL import each current topic as a lessonArticle block. Existing fixed-template formal blocks for examOutline, memoryPoints, understanding, termList, workedExample, and pitfall SHALL be removed from the route's displayed blocks during this pilot rebuild. Compatibility metadata SHALL remain allowed on the topic object for type and source-traceability contracts, but it SHALL NOT be used as the displayed Computer Principles content container.

#### Scenario: Computer Principles formal blocks are checked

- **WHEN** a rebuilt Computer Principles topic is loaded from formal app data
- **THEN** its blocks list contains exactly one lessonArticle block
- **THEN** its blocks list does not contain examOutline, memoryPoints, understanding, termList, workedExample, or pitfall blocks
- **THEN** the lessonArticle block preserves sourceFiles, sourceSection, lead text, source-label headings, and article sections

##### Example: Rebuilt Computer Principles block shape

| Topic id | Expected block kinds | Removed stale block kinds |
| --- | --- | --- |
| cp-von-neumann-architecture | lessonArticle | examOutline, memoryPoints, understanding, termList, workedExample, pitfall |
| cp-cache | lessonArticle | examOutline, memoryPoints, understanding, termList, workedExample, pitfall |

### Requirement: All rebuilt professional topics use source-outline teaching articles

All rebuilt professional routes SHALL convert every approved source topic or section into a topic-specific source-outline prompt, a content-writer subagent draft, a verifier-approved teaching article, and a formal displayed article block. The final formal app data SHALL remove old fixed-template displayed blocks and stale section body content for every rebuilt professional route, including /computer-principles, /networking, /database, /information-management, /programming, and /algorithms.

#### Scenario: Every source section gets its own source-outline prompt

- **WHEN** an approved source txt or md file is scanned for a professional route
- **THEN** every discovered source topic or section has a route tracking row
- **THEN** every route tracking row has exactly one prompt path for that topic or section
- **THEN** the prompt contains the source outline or source-section summary as writer input
- **THEN** the prompt states that the source outline is not the final teaching content

##### Example: Route source sections become topic prompts

| Route | Source section | Expected prompt contract |
| --- | --- | --- |
| /computer-principles | 馮紐曼架構 | one prompt with the [必背] and [比較] source outline |
| /networking | OSI or TCP/IP layer topic | one prompt with source labels and layer terminology |
| /database | normalization topic | one prompt with source labels, definitions, and worked example requirement |
| /information-management | management or system topic | one prompt with source labels and exam application notes |
| /programming | Java or system-analysis topic | one prompt with code or diagram requirements when present |
| /algorithms | binary tree or sorting topic | one prompt with algorithm, data-structure, complexity, or diagram requirements |

#### Scenario: Rebuilt route removes old fixed displayed blocks

- **WHEN** a professional route is rebuilt from verified teaching articles
- **THEN** the route's final formal topics use displayed article blocks generated from current verified files
- **THEN** the route's final formal topics do not keep old examOutline, memoryPoints, understanding, termList, workedExample, pitfall, old sourceSummary, old verifierSummary, or old import summary content as displayed fallback
- **THEN** compatibility metadata can remain only for type, source traceability, or audit contracts

##### Example: Old blocks are not fallback content

| Route | Old displayed content exists | Current verified article exists | Expected final displayed content |
| --- | --- | --- | --- |
| /networking | yes | yes | current verified teaching article only |
| /database | yes | no | no old displayed content; route keeps pending or blocked tracking state |
| /programming | yes | blocked | no old displayed content; blocker remains in route tracking list |

#### Scenario: Content writer subagent expands source outline into teaching material

- **WHEN** a content writer subagent receives a topic prompt
- **THEN** the subagent writes a beginner national-exam teaching article with definitions, Chinese and English terminology, core concept, application guidance, exam answer wording, pitfalls, and memorization summary
- **THEN** the subagent writes to _private/TMP/<route>/<topic-id>.draft.md
- **THEN** the subagent does not edit formal app data

#### Scenario: Verifier approves only expanded teaching articles

- **WHEN** a verifier subagent checks a topic draft
- **THEN** the verifier confirms source traceability, source-label expansion, terminology, factual correctness, examples or diagrams when required, beginner readability, and removal of old fixed-template displayed blocks
- **THEN** the verifier writes _private/TMP/<route>/<topic-id>.verified.md for pass or a blocked report for failure
- **THEN** the main integration flow imports only topics with a verified file and ready import-readiness result

### Requirement: Von Neumann architecture receives deep teaching treatment

The Von Neumann Architecture topic SHALL provide deeper-than-summary teaching coverage because it is a core Computer Principles topic.

#### Scenario: Von Neumann teaching depth is checked

- **WHEN** the Von Neumann Architecture topic is loaded from formal app data
- **THEN** it explains Stored-Program Concept, CPU, Control Unit, Arithmetic Logic Unit, Memory, Input/Output, Instruction Cycle, Von Neumann Bottleneck, and Harvard Architecture with Chinese and English names
- **THEN** it includes a concrete beginner-friendly example, an architecture comparison, and common exam pitfalls

### Requirement: Route-scoped content production workflow

Each professional route SHALL run an independent content production workflow from approved source material to formal app data. A route workflow SHALL include source scanning, topic and source-label extraction, one prompt per topic, a draft Markdown teaching file, a verifier-approved Markdown teaching file, main-agent import into that route's formal topic data, automated checks, and manual sampling review.

#### Scenario: Route workflow creates independent traceability

- **WHEN** a professional route begins content production
- **THEN** the route has a route-specific tracking list under _private/TMP/<route> or an equivalent route-specific location
- **THEN** each tracking row links one topic to its approved source section, source labels, prompt, draft path, verified path, import target, status, verifier result, and manual review result

##### Example: Computer principles route tracking

- **GIVEN** the route is /computer-principles and the topic is cp-von-neumann-architecture
- **WHEN** the route workflow records the topic
- **THEN** the tracking row includes _private/計算機概論.txt, labels [必背] and [比較], a draft path ending in .draft.md, a verified path ending in .verified.md, and an import target in the computerPrinciples formal topic list

#### Scenario: Source labels drive teaching draft structure

- **WHEN** a topic source contains source labels such as [必背], [比較], [會算], or [會畫]
- **THEN** the topic prompt includes the definition of each label before draft generation
- **THEN** the generated draft expands each label according to its definition rather than copying the source bullets verbatim

##### Example: Label expansion rules

| Source label | Required draft content |
| --- | --- |
| [必背] | definition, importance, minimum memorization sentence, exam answer template, pitfall |
| [比較] | comparison table or structured comparison, difference rationale, exam question pattern, decision keywords |
| [會算] | formula, variable definitions, concrete substitution example, unit or boundary trap |
| [會畫] | drawing order, node definitions, arrow or data-flow meaning, ASCII or text diagram |

#### Scenario: Topic prompt preserves source outline as writer input

- **WHEN** a topic prompt is created for a source-labeled topic
- **THEN** the prompt includes the topic's source outline or source-section summary as the writer input
- **THEN** the prompt states that the source outline is not the final teaching content
- **THEN** the prompt instructs the content writer subagent to expand the outline for a beginner national-exam reader with definitions, bilingual terminology, core concept, application, exam writing guidance, pitfalls, and memorization summary
- **THEN** the verified draft and formal app data contain the expanded teaching article rather than only the copied source bullets

##### Example: Von Neumann source outline is expanded

| Prompt input | Required verified teaching output |
| --- | --- |
| [必背] 兩大特色 | Stored-program Concept and Sequential Instruction Execution definitions, importance, exam wording, pitfalls, and minimum memorization sentence |
| [必背] 五大單元 | Input Unit, Output Unit, Memory Unit, Arithmetic Logic Unit, and Control Unit definitions with exam recognition points |
| [比較] 馮紐曼架構 vs 哈佛架構 | Comparison table, difference rationale, decision keywords, and common comparison mistakes |
| [必背] 馮紐曼瓶頸 | Von Neumann Bottleneck definition, cause, remedies, and exam answer wording |

#### Scenario: Verified draft is the only import source

- **WHEN** a topic draft remains draft or blocked
- **THEN** the main integration step MUST NOT import that topic into formal app data
- **THEN** the route keeps a placeholder, pending state, or blocked tracking state until a verified Markdown teaching file exists

##### Example: Draft and verified import gate

| Topic id | Draft status | Verified file exists | Expected import result |
| --- | --- | --- | --- |
| cp-von-neumann-architecture | verified | yes | imported into computerPrinciples formal topic data |
| cp-pipeline | draft | no | not imported; placeholder or pending state remains |
| cp-cache | blocked | no | not imported; blocker remains in route tracking list |

### Requirement: Source label discovery is exhaustive before route drafting

The route content production workflow SHALL discover and classify every bracketed source-label candidate from approved route source files before generating topic prompts. The workflow SHALL NOT treat examples in this change proposal as a closed list. Each discovered candidate SHALL be classified as valid source label, auxiliary label, non-label syntax, or unknown label. Unknown labels MUST block verification until the label is categorized and defined.

#### Scenario: Discovered valid labels are defined before prompts

- **WHEN** approved source files contain labels beyond the seed examples, including [會做], [會寫], [必練], [會寫虛擬碼], or [原文考點]
- **THEN** _private/TMP/source-label-definitions.md includes a definition, expansion rule, required draft structure, and verification assertion for each discovered valid label
- **THEN** topic prompts include the definitions for every valid label used by that topic before draft generation

##### Example: Discovered source-label seed set

| Candidate label | Required classification |
| --- | --- |
| [必背] | valid source label |
| [比較] | valid source label |
| [會算] | valid source label |
| [會畫] | valid source label |
| [補充] | valid source label |
| [易混淆] | valid source label |
| [考點] | valid source label |
| [建議] | valid source label |
| [原文提醒] | valid source label |
| [補充建議] | valid source label |
| [會做] | valid source label |
| [會寫] | valid source label |
| [必練] | valid source label |
| [會寫虛擬碼] | valid source label |
| [原文考點] | valid source label |
| [原文保留] | auxiliary label unless it appears in an approved route source |

#### Scenario: Code and task tokens are excluded from label definitions

- **WHEN** the bracket scan finds source text such as [i], [mid], [1, 2, 3], or [P]
- **THEN** those candidates are classified as non-label syntax or code/task tokens
- **THEN** those candidates are not required in source-label definitions and do not influence teaching draft structure

#### Scenario: Unknown candidate blocks verification

- **WHEN** a bracketed candidate appears source-like but cannot be classified as a valid source label, auxiliary label, or non-label syntax
- **THEN** the affected topic remains draft or blocked
- **THEN** the verifier does not produce a verified Markdown teaching file until the candidate is categorized and defined

##### Example: Unknown candidate gate

| Candidate | Initial classification | Expected verifier result |
| --- | --- | --- |
| [必整理] | unknown label | blocked until defined in source-label definitions |
| [會算] | valid source label | verification can continue after expansion checks |
| [mid] | non-label syntax/code token | ignored by teaching label rules |

### Requirement: Subagents isolate route production work from main integration

The route content production workflow SHALL delegate route source inventory, topic prompt generation, draft writing, draft verification, route-level audit, and import-readiness checks to bounded subagents. The main integration flow SHALL retain ownership of source access rules, route boundaries, dispatch, formal app data import, automated test execution, and final reporting.

#### Scenario: Subagent writes only route-scoped artifacts

- **WHEN** a route source inventory, topic prompt, content writer, verifier, route auditor, or import-readiness subagent runs
- **THEN** the subagent writes only prompt, draft, verified, audit, readiness, or tracking artifacts under _private/TMP/<route>
- **THEN** the subagent MUST NOT edit formal app data, source code, tests, or architecture documentation

##### Example: Subagent artifact boundary

| Subagent role | Allowed output | Disallowed output |
| --- | --- | --- |
| Route source inventory | _private/TMP/computer-principles/source-inventory.md | src/modules/subjectTopics/data/professionalTopics.ts |
| Content writer | _private/TMP/computer-principles/cp-von-neumann-architecture.draft.md | src/modules/subjectTopics/data/professionalTopics.ts |
| Verifier | _private/TMP/computer-principles/cp-von-neumann-architecture.verified.md | tests/unit/professionalTopics.spec.ts |
| Import readiness | _private/TMP/computer-principles/import-readiness.md | PROJECT_ARCHITECTURE.md |

#### Scenario: Main integration imports only after readiness passes

- **WHEN** an import-readiness report confirms that a topic has a verified Markdown file, verifier result, source traceability, tracking status, import target, and manual review state
- **THEN** the main integration flow can import that topic into formal app data
- **WHEN** the import-readiness report records a missing verified file, blocked verifier result, source conflict, or inconsistent tracking state
- **THEN** the main integration flow MUST NOT import that topic until the issue is resolved

##### Example: Readiness import gate

| Topic id | Readiness result | Expected main integration action |
| --- | --- | --- |
| cp-von-neumann-architecture | ready | import into computerPrinciples formal topic data |
| cp-cache-memory | missing verified file | do not import; keep placeholder or pending state |
| cp-bus-architecture | source conflict | do not import; keep blocker in route tracking list |

### Requirement: Stale professional content is removed during route rebuild

During the full route rebuild workflow, existing professional route topic content SHALL be treated as stale data. The final formal app data for each rebuilt professional route SHALL contain only topics that have a current route tracking row, a current verified Markdown teaching file, verifier results, manual review state, and an import-readiness result of ready. The rebuild SHALL preserve route shells, rendering components, subject keys, progress storage schema, and non-professional subject content.

#### Scenario: Route rebuild excludes stale formal topics

- **WHEN** a professional route enters the full route rebuild workflow
- **THEN** existing formal topic content for that route is excluded from the import candidate set
- **THEN** the route's final formal topic list contains only topics imported from current verified Markdown teaching files with ready import-readiness results

##### Example: Stale formal topic exclusion

| Route | Existing formal topic before rebuild | Current verified file exists | Readiness result | Expected final topic state |
| --- | --- | --- | --- | --- |
| /computer-principles | cp-von-neumann-architecture | yes | ready | present with rebuilt content |
| /computer-principles | cp-old-placeholder-depth | no | missing verified file | absent from formal app data |
| /networking | net-stale-summary | yes | source conflict | absent from formal app data |

#### Scenario: Blocked rebuilt topic does not keep old content

- **WHEN** a topic has old formal content but its current rebuild verifier result is blocked
- **THEN** the old formal content MUST NOT remain in formal app data
- **THEN** the route tracking list records the blocked state and blocker reason

##### Example: Blocked topic removal

| Topic id | Old formal content exists | Current verifier result | Expected final topic state |
| --- | --- | --- | --- |
| db-normalization | yes | blocked | old content removed; blocker recorded |
| algo-binary-search | yes | verified | rebuilt content imported after readiness ready |

#### Scenario: App shell and progress schema remain intact

- **WHEN** stale professional topic content is removed during route rebuild
- **THEN** the route path, subject key, shared rendering components, and progress storage schema remain available
- **THEN** completedTopicIds or bookmarkedTopicId values that reference removed stale topic ids do not cause stale topics to render

##### Example: Removed topic progress is ignored by rendering

| Stored progress value | Current formal topic list contains id | Expected rendering result |
| --- | --- | --- |
| completedTopicIds includes cp-old-placeholder-depth | no | cp-old-placeholder-depth is not rendered |
| bookmarkedTopicId is net-stale-summary | no | bookmark is ignored or normalized to null |
| completedTopicIds includes cp-von-neumann-architecture | yes | rebuilt cp-von-neumann-architecture can render |
