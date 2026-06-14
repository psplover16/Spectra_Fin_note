## ADDED Requirements

### Requirement: Algorithm import records approved Markdown source

Imported first-batch algorithm topics SHALL record the approved Markdown source path used for the import. The source path MUST be `_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` for Bubble Sort, Quick Sort, Fibonacci sequence, greatest common divisor, binary search, Selection Sort, and Insertion Sort.

#### Scenario: Imported algorithm topics expose the approved source file

- **WHEN** the Algorithms subject formal topic list is loaded
- **THEN** topics `bubble-sort`, `quick-sort`, `fibonacci-sequence`, `greatest-common-divisor`, `binary-search`, `selection-sort`, and `insertion-sort` each include `_private/MD/演算法/國考常見演算法_Java遞迴非遞迴_時間複雜度.md` in `sourceFiles`
- **AND** each listed topic includes a source summary that identifies the corresponding algorithm section from the approved Markdown source
