## ADDED Requirements

### Requirement: Refreshed floating point topic traces supplemental sources

The refreshed `cpv2-floating-point-conversion` professional topic SHALL trace every source used for the added practice and IEEE 754 special-value sections. The topic SHALL remain lecture-only content and MUST NOT introduce quiz-only fields such as question text, answer keys, backend sync identifiers, or remote question identifiers.

#### Scenario: Supplemental sources are recorded on the topic and lessonArticle

- **WHEN** the `cpv2-floating-point-conversion` professional topic is loaded from formal app data
- **THEN** the topic `sourceFiles` include `_private/MD/計算機概論v2/10_浮點數轉換.md`
- **AND** the topic `sourceFiles` include `_private/discuss.txt`
- **AND** the topic `sourceFiles` include `_private/MD/0621/IEEE754_浮點數特殊值_速記.md`
- **AND** the topic lessonArticle `sourceFiles` include the same three source paths
- **AND** the topic `sourceSummary` identifies the content as Computer Principles v2 floating-point conversion material

#### Scenario: Supplemental content remains lecture-only

- **WHEN** the refreshed floating-point topic is serialized for inspection
- **THEN** the serialized topic contains the phrases `IEEE 754`, `NaN`, and `非正規化數`
- **AND** the topic lessonArticle does not contain a section titled `加強練習`
- **AND** the serialized topic does not contain `questionText`
- **AND** the serialized topic does not contain `correctAnswer`
- **AND** the serialized topic does not contain `backendSyncId`
- **AND** the serialized topic does not contain `remoteQuestionId`

#### Scenario: Manual content review records the supplemental refresh

- **WHEN** the manual review artifact for this change is read
- **THEN** it records `_private/discuss.txt` as the practice-section source
- **AND** it records `_private/MD/0621/IEEE754_浮點數特殊值_速記.md` as the IEEE 754 special-value source
- **AND** it records the supplemental refresh as `lecture-only`
- **AND** it records that 4 options, 1 correct answer, and option rationales are not applicable
