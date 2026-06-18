## ADDED Requirements

### Requirement: Algorithms route imports data-structure Markdown topics

The app SHALL expose one visible Algorithms topic for each Markdown file under `_private/MD/資料結構與演算法/`. The imported topics MUST appear before every pre-existing Algorithms topic, and their order MUST follow the natural source filename order.

#### Scenario: Imported topics appear first in source filename order

- **WHEN** the Algorithms subject topic list is loaded
- **THEN** the first nine visible topics are the imported data-structure Markdown topics
- **THEN** those nine topics appear in the natural filename order from `_1_` through `_8_`, with `_6上_` before `_6下_`

##### Example: expected imported source order

| Position | Source file | Topic title basis |
| ----- | ----- | ----- |
| 1 | `_private/MD/資料結構與演算法/資料結構與演算法_1_Big-O複雜度.md` | Big-O 複雜度 |
| 2 | `_private/MD/資料結構與演算法/資料結構與演算法_2_陣列與鏈結串列.md` | 陣列與鏈結串列 |
| 3 | `_private/MD/資料結構與演算法/資料結構與演算法_3_堆疊與佇列.md` | 堆疊與佇列 |
| 4 | `_private/MD/資料結構與演算法/資料結構與演算法_4_樹基本與走訪.md` | 樹基本與走訪 |
| 5 | `_private/MD/資料結構與演算法/資料結構與演算法_5_高等樹.md` | 高等樹 |
| 6 | `_private/MD/資料結構與演算法/資料結構與演算法_6上_圖基礎與走訪.md` | 圖基礎與走訪 |
| 7 | `_private/MD/資料結構與演算法/資料結構與演算法_6下_圖演算法.md` | 圖演算法 |
| 8 | `_private/MD/資料結構與演算法/資料結構與演算法_7_排序.md` | 排序 |
| 9 | `_private/MD/資料結構與演算法/資料結構與演算法_8_雜湊.md` | 雜湊 |

### Requirement: Imported topics preserve source structure and traceability

Each imported Algorithms topic SHALL render through the existing `lessonArticle` block contract. The topic title SHALL use the Markdown topic title, the topic sourceFiles SHALL include its exact Markdown source path, and the lessonArticle sections SHALL preserve the source Markdown section order. The import MUST only apply objectively necessary corrections, formatting normalization required by the existing renderer, or source-traceability metadata.

#### Scenario: Imported topic carries its source path and lesson article content

- **WHEN** an imported Algorithms topic is loaded from formal app data
- **THEN** its sourceFiles includes the exact Markdown file used to create it
- **THEN** its first block is a `lessonArticle`
- **THEN** the `lessonArticle` contains non-empty sections derived from that Markdown file in source order
- **THEN** the topic does not introduce generated placeholder prose that is absent from the source material

### Requirement: Existing Algorithms topics remain after imported Markdown topics

The app SHALL keep every pre-existing Algorithms topic available after the nine imported Markdown topics. The relative order among those pre-existing topics MUST remain unchanged unless a separate change explicitly modifies that order.

#### Scenario: Existing Algorithms topics are retained after the imported group

- **WHEN** the Algorithms subject topic list is loaded
- **THEN** all non-imported Algorithms topics remain visible after the first nine imported topics
- **THEN** the first non-imported topic appears immediately after the ninth imported topic
- **THEN** the non-imported topic group keeps its pre-change relative order
