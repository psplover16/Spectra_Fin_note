## ADDED Requirements

### Requirement: First-batch algorithm topics include learning articles

The Algorithms subject first-batch topics for Bubble Sort, Quick Sort, Fibonacci sequence, greatest common divisor, binary search, Selection Sort, and Insertion Sort SHALL include formal learning content in the route data. Each imported topic SHALL include a `lessonArticle` block with an introductory concept section and an ordered core-rules section.

#### Scenario: First-batch algorithm learning content is loaded

- **WHEN** the Algorithms subject formal topic list is loaded
- **THEN** topics `bubble-sort`, `quick-sort`, `fibonacci-sequence`, `greatest-common-divisor`, `binary-search`, `selection-sort`, and `insertion-sort` each include a non-empty `lessonArticle`
- **AND** each listed `lessonArticle` includes a section that explains the algorithm concept
- **AND** each listed `lessonArticle` includes an ordered list that states the algorithm core rules

##### Example: required imported topic ids

| Topic id | Expected content state |
| ----- | --------------- |
| `bubble-sort` | non-empty lesson article |
| `quick-sort` | non-empty lesson article |
| `fibonacci-sequence` | non-empty lesson article |
| `greatest-common-divisor` | non-empty lesson article |
| `binary-search` | non-empty lesson article |
| `selection-sort` | non-empty lesson article |
| `insertion-sort` | non-empty lesson article |

### Requirement: First-batch algorithm topics include Java teaching code

Each imported first-batch algorithm topic SHALL display complete Java code through `teachingCode` blocks for every recursive or iterative implementation present in the approved Markdown source. The route data MUST NOT invent a recursive or iterative version that is absent from the approved source.

#### Scenario: Algorithm Java code is displayed through teaching blocks

- **WHEN** an imported first-batch algorithm topic includes recursive or iterative Java code in the approved source
- **THEN** the topic includes a `teachingCode` block for each available Java version
- **AND** each `teachingCode` block uses language `java`
- **AND** each `teachingCode` block preserves the full code body with comments and indentation

### Requirement: First-batch algorithm topics present worst-case complexity only

Each imported first-batch algorithm topic SHALL present time complexity using worst-case complexity as the teaching target. Imported first-batch algorithm topics MUST NOT present best-case or average-case complexity in the formal route content for this change.

#### Scenario: Worst-case complexity table is displayed

- **WHEN** an imported first-batch algorithm topic is expanded
- **THEN** the visible lesson content includes a table or equivalent article section naming the worst-case time complexity
- **AND** the same topic does not display best-case complexity
- **AND** the same topic does not display average-case complexity

##### Example: complexity presentation columns

| Column | Expected state |
| ----- | --------------- |
| Version | present |
| Worst-case time complexity | present |
| Derivation focus | present |
| Best-case time complexity | absent |
| Average-case time complexity | absent |

### Requirement: Imported first-batch algorithm topics appear first

The Algorithms subject formal topic list SHALL place the imported first-batch algorithm topics before the remaining Algorithms subject topics. The imported first-batch topic order SHALL be Bubble Sort, Quick Sort, Fibonacci sequence, greatest common divisor, binary search, Selection Sort, and Insertion Sort.

#### Scenario: Imported algorithm topics are listed at the top

- **WHEN** the Algorithms subject formal topic list is loaded
- **THEN** the first seven topic ids are `bubble-sort`, `quick-sort`, `fibonacci-sequence`, `greatest-common-divisor`, `binary-search`, `selection-sort`, and `insertion-sort`
- **AND** the remaining Algorithms subject topics keep their existing relative order after those seven imported topics

##### Example: first seven algorithm route topic ids

| Position | Topic id |
| ----- | --------------- |
| 1 | `bubble-sort` |
| 2 | `quick-sort` |
| 3 | `fibonacci-sequence` |
| 4 | `greatest-common-divisor` |
| 5 | `binary-search` |
| 6 | `selection-sort` |
| 7 | `insertion-sort` |
