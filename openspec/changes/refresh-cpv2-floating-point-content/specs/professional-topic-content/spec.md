## ADDED Requirements

### Requirement: Refreshed professional topic content replaces deprecated source content

When a professional topic is refreshed from a newly approved Markdown source, the formal app data SHALL update the topic source traceability and learner-facing lessonArticle content to match the newly approved source. The refreshed topic SHALL keep stable route ownership, topic id, title, difficulty, and topic type unless the proposal explicitly changes them. Deprecated source content SHALL NOT remain in learner-facing blocks for the refreshed topic.

#### Scenario: Refresh a single professional lessonArticle topic

- **WHEN** a topic refresh targets one existing professional topic
- **THEN** the refreshed topic keeps the same subject key, topic id, title, difficulty, and topic type unless the change proposal explicitly lists a change to those fields
- **THEN** `sourceFiles`, `sourceSummary`, `lessonArticle.sourceFiles`, and `lessonArticle.sourceSection` identify the newly approved source
- **THEN** the lessonArticle lead and sections are derived from the newly approved source structure
- **THEN** deprecated source content is not rendered as learner-facing lessonArticle blocks for that topic
- **THEN** other topics in the same subject remain unchanged unless they are listed in the change proposal

##### Example: cpv2 floating point source replacement

| Field or behavior | Expected value after refresh |
| ----- | ----- |
| Subject key | `computerPrinciplesV2` |
| Topic id | `cpv2-floating-point-conversion` |
| Topic title | `浮點數轉換` |
| New source file | `_private/MD/計算機概論v2/10_浮點數轉換.md` |
| Unchanged neighboring topics | The other 12 Computer Principles v2 topics keep their existing ids, titles, order, and source files |