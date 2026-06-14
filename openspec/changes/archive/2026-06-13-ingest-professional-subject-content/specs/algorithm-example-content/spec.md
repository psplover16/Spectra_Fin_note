## ADDED Requirements

### Requirement: Algorithm content includes required first-batch examples

Algorithm content SHALL include first-batch learning topics for Bubble Sort, Quick Sort, Fibonacci sequence, greatest common divisor, binary search, Selection Sort, and Insertion Sort.

#### Scenario: First-batch algorithm inventory is checked

- **WHEN** the Algorithms subject formal topic list is loaded
- **THEN** it includes topics for Bubble Sort, Quick Sort, Fibonacci sequence, greatest common divisor, binary search, Selection Sort, and Insertion Sort

### Requirement: Existing common algorithms source is inventoried

The algorithms source file _private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md SHALL be inventoried before formal algorithm topics are finalized.

#### Scenario: Common algorithm source contributes inventory

- **WHEN** algorithm topic manifest creation runs
- **THEN** every algorithm listed in _private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md is recorded as included, deferred, or blocked with a reason

### Requirement: Sorting complexity table follows the approved baseline

Sorting topics SHALL use the approved first-version complexity and stability baseline for Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, and Shell Sort.

#### Scenario: Sorting baseline is rendered

- **WHEN** sorting learning content is rendered
- **THEN** the complexity table contains best time, average time, worst time, stability, and notes for each required sorting algorithm

##### Example: Approved sorting baseline

| Algorithm | Best | Average | Worst | Stability | Notes |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | Stable | Early stop allows O(n) best case |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | Usually unstable | Low swap count |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | Stable | Good for small or nearly sorted data |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | Stable | Requires extra space |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | Unstable | Poor pivot choice degenerates |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | Unstable | In-place sorting with heap |
| Shell Sort | gap-dependent | gap-dependent | up to O(n^2) | Unstable | Improved insertion sort |

### Requirement: Sorting topics provide recursive and iterative Java versions with Shell Sort exception

Sorting topics SHALL provide both recursive and iterative Java versions for Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort. Shell Sort SHALL provide the standard iterative Java version and SHALL NOT present a recursive version as a primary exam pattern.

#### Scenario: Bubble Sort code variants are rendered

- **WHEN** the Bubble Sort topic is rendered
- **THEN** it includes an iterative Java example
- **THEN** it includes a recursive teaching Java example marked as non-mainstream for exam writing

#### Scenario: Shell Sort code variants are rendered

- **WHEN** the Shell Sort topic is rendered
- **THEN** it includes the standard iterative Java example
- **THEN** it does not present recursive Shell Sort as the primary exam writing pattern

### Requirement: Common algorithms provide appropriate Java variants

Fibonacci sequence, greatest common divisor, and binary search topics SHALL provide Java examples that match their accepted recursive and iterative teaching forms.

#### Scenario: Fibonacci topic is rendered

- **WHEN** the Fibonacci sequence topic is rendered
- **THEN** it includes recursive and iterative Java examples
- **THEN** it warns that naive recursion repeats work

#### Scenario: Greatest common divisor topic is rendered

- **WHEN** the greatest common divisor topic is rendered
- **THEN** it includes Euclidean algorithm Java examples in recursive and iterative forms

#### Scenario: Binary search topic is rendered

- **WHEN** the binary search topic is rendered
- **THEN** it includes recursive and iterative Java examples
- **THEN** it states that input data MUST be sorted before binary search is valid

### Requirement: Java examples explain examiner-visible reasoning

Algorithm Java examples SHALL include Traditional Chinese comments that explain the reasoning, intent, and exam-answer logic rather than only restating syntax.

#### Scenario: Java example is checked for reasoning comments

- **WHEN** an algorithm Java example is displayed
- **THEN** its comments explain why the step exists in the algorithm
- **THEN** its comments identify the exam concept being demonstrated

### Requirement: Algorithm verifier blocks unsafe content

Algorithm topics SHALL NOT enter formal app data unless verifier results confirm source mapping, Java semantic correctness, time complexity, space complexity, stability, bilingual terminology, and beginner readability.

#### Scenario: Algorithm draft has unresolved verifier issue

- **WHEN** an algorithm _TMP draft has an unresolved verifier issue about complexity, code correctness, source mapping, or terminology
- **THEN** the draft status is blocked
- **THEN** the draft is not imported into formal app data

#### Scenario: Algorithm draft passes verifier

- **WHEN** an algorithm _TMP draft has status verified
- **THEN** the formal topic preserves verifier result metadata or a verifier summary
- **THEN** the formal topic can be imported into the Algorithms subject data
