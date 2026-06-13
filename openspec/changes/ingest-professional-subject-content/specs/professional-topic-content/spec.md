## ADDED Requirements

### Requirement: Professional topics carry source traceability

Each professional topic SHALL record the source files and a source summary that connects the displayed learning content to the approved source material.

#### Scenario: Topic shows source traceability data

- **WHEN** a professional topic is loaded from formal app data
- **THEN** the topic data includes sourceFiles with at least one approved _private txt or md source path
- **THEN** the topic data includes sourceSummary describing the source section or source basis

### Requirement: Professional topics separate exam outline, memory, and understanding content

Each professional topic SHALL separate exam outline, memory points, and understanding guidance so beginner learners can distinguish what to memorize from what to understand.

#### Scenario: Topic exposes learning layers

- **WHEN** a professional topic is rendered
- **THEN** the topic contains exam outline content
- **THEN** the topic contains memory point content
- **THEN** the topic contains understanding guidance content

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

Every imported Computer Principles topic SHALL have a matching _TMP Markdown draft that is a substantive AI-generated teaching draft rather than a manifest row, task checklist, reading log, or short summary.

#### Scenario: Imported Computer Principles draft is checked

- **WHEN** a Computer Principles topic has status imported in the tracking list or appears in formal app data
- **THEN** its matching _TMP draft includes frontmatter with status verified
- **THEN** its matching _TMP draft includes sections for exam focus, memory notes, term explanation, core idea, concrete example or procedure, pitfalls, bilingual terminology, and verifier results

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
