## ADDED Requirements

### Requirement: Information Management imports Markdown-backed lesson articles

The system SHALL provide finalized `lessonArticle` topics for every Markdown file under `_private/MD/資訊管理/`. The imported Information Management topics SHALL appear in the same natural filename order as the source Markdown files and SHALL appear before existing Information Management skeleton topics in formal topic data.

#### Scenario: Imported topics appear in source order

- **WHEN** `professionalTopicsBySubject.informationManagement` is loaded
- **THEN** the first seven topics have ids and titles in this order:

##### Example: ordered imported topics

| Position | Topic id | Title | Source file |
| ----- | ----- | ----- | ----- |
| 1 | `im-md-digital-transformation-esg` | `資訊管理 1：數位轉型 + ESG` | `_private/MD/資訊管理/資訊管理_1_數位轉型與ESG.md` |
| 2 | `im-md-traditional-development-models` | `資訊管理 2a：傳統開發模式（漸增／雛形／螺旋）` | `_private/MD/資訊管理/資訊管理_2a_傳統開發模式.md` |
| 3 | `im-md-agile-development` | `資訊管理 2b：敏捷開發 Agile` | `_private/MD/資訊管理/資訊管理_2b_敏捷開發.md` |
| 4 | `im-md-information-ethics` | `資訊管理 3a：資訊倫理（PAPA 四大議題）` | `_private/MD/資訊管理/資訊管理_3a_資訊倫理.md` |
| 5 | `im-md-data-classification-privacy-paradox` | `資訊管理 3b：數據分類 + 隱私悖論` | `_private/MD/資訊管理/資訊管理_3b_數據分類與隱私悖論.md` |
| 6 | `im-md-personal-data-protection-act` | `資訊管理 4a：個人資料保護法（個資法）` | `_private/MD/資訊管理/資訊管理_4a_個人資料保護法.md` |
| 7 | `im-md-gdpr` | `資訊管理 4b：GDPR（歐盟一般資料保護規則）` | `_private/MD/資訊管理/資訊管理_4b_GDPR.md` |

#### Scenario: Existing skeleton topics remain after imported topics

- **WHEN** `professionalTopicsBySubject.informationManagement` is loaded
- **THEN** every existing Information Management skeleton topic remains after the seven imported Markdown topics
- **AND** the existing skeleton topics preserve their previous relative order
- **AND** no imported Markdown topic reuses an existing skeleton topic id.

### Requirement: Imported Information Management topics preserve source traceability and article shape

Each imported Information Management topic SHALL record exact Markdown source traceability and SHALL expose one learner-facing `lessonArticle` block with non-empty sections.

#### Scenario: Each imported topic has exact source traceability

- **WHEN** an imported Information Management topic is loaded
- **THEN** `sourceFiles` contains exactly one path
- **AND** that path is the matching Markdown source under `_private/MD/資訊管理/`
- **AND** `sourceSummary` equals the Markdown H1
- **AND** the `lessonArticle.sourceFiles` value equals the topic `sourceFiles`
- **AND** the `lessonArticle.sourceSection` equals the topic `sourceSummary`.

#### Scenario: Each imported topic has learner-facing lesson content

- **WHEN** an imported Information Management topic is loaded
- **THEN** the topic has exactly one block
- **AND** the block kind is `lessonArticle`
- **AND** the block has at least one section
- **AND** at least one section contains visible paragraph, list, table, or subsection content
- **AND** the topic does not use `sourceNote`, `examOutline`, `memoryPoints`, `understanding`, `termList`, `workedExample`, or `pitfall` blocks as separate learner-facing blocks.

### Requirement: Imported Information Management content keeps source structure with minimal corrections

The system SHALL preserve the relative reading order of each Markdown source while converting headings, paragraphs, blockquotes, bullet lists, ordered lists, and tables into existing `lessonArticle` content blocks. The system MUST apply only the smallest corrections needed for factual accuracy, legal/current-affairs freshness, and renderer compatibility.

#### Scenario: Agile topic preserves section order

- **WHEN** the `im-md-agile-development` lesson article is loaded
- **THEN** its learner-facing sections preserve this source order: `定義`, `核心價值（敏捷宣言四大價值）`, `優缺點`, `三個常見框架`, `重點整理（背這張）`.

#### Scenario: Source-only verification meta text is not learner-facing

- **WHEN** any imported Information Management lesson article is serialized from formal topic data
- **THEN** the serialized learner-facing text does not contain `內容經網路查證`
- **AND** the serialized learner-facing text does not contain `內容經查證`
- **AND** concrete caveats from the source, including the differing wording of Digital Transformation success factors, remain represented when they affect learning.

#### Scenario: Known factual corrections are applied conservatively

- **WHEN** the `im-md-data-classification-privacy-paradox` topic is loaded
- **THEN** the Second-Party Data example uses a conservative partner-sharing description such as `合作夥伴分享的會員/客戶行為資料`
- **AND** the topic does not present generic Facebook or Instagram advertising behavior data as direct Second-Party Data ownership.

#### Scenario: Legal and GDPR wording is current at apply time

- **WHEN** the `im-md-personal-data-protection-act` and `im-md-gdpr` topics are loaded
- **THEN** the Personal Data Protection Act topic describes the Personal Data Protection Commission status according to official sources checked during apply
- **AND** the topic distinguishes enacted provisions, pending effective dates, and preparatory-office status without describing pending powers as fully active
- **AND** the GDPR topic uses wording compatible with GDPR territorial scope for data subjects in the European Union
- **AND** the GDPR fine summary includes the higher-of threshold of 20 million euros or 4 percent of worldwide annual turnover.

### Requirement: Information Management import review is recorded

The system SHALL record the content verification decisions for this import in a review note so that future apply or archive work can understand which source text was normalized and why.

#### Scenario: Review note records corrections and verification sources

- **WHEN** the import is completed
- **THEN** `_private/TMP/information-management-md-content-review.md` exists
- **AND** it lists all seven imported Markdown files
- **AND** it records the Personal Data Protection Act and GDPR verification date
- **AND** it records the Second-Party Data example correction
- **AND** it records that source-only verification meta text was excluded from learner-facing article text.
