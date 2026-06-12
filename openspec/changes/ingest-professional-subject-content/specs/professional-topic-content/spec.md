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
