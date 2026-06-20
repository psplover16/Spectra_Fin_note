## ADDED Requirements

### Requirement: Floating point conversion topic uses refreshed v2 source

The Computer Principles v2 route SHALL keep the existing `cpv2-floating-point-conversion` topic in the tenth catalog position and SHALL render its learner-facing content from `_private/MD/計算機概論v2/10_浮點數轉換.md`. The topic SHALL keep the title `浮點數轉換`, the `computerPrinciplesV2` subject key, and the existing `/computer-principles-v2` route ownership. The topic SHALL NOT expose the deprecated floating point conversion lesson content as learner-facing content after the refresh.

#### Scenario: Load refreshed floating point conversion topic

- **WHEN** the `computerPrinciplesV2` topic list is loaded
- **THEN** the tenth route-visible topic has id `cpv2-floating-point-conversion`
- **THEN** the topic title is `浮點數轉換`
- **THEN** the topic source files include `_private/MD/計算機概論v2/10_浮點數轉換.md`
- **THEN** the topic lesson article contains refreshed sections for traditional floating point representation, IEEE 754 fields, conversion workflow, reverse conversion, decimal precision, common mistakes, exam answer sentences, and practice exercises
- **THEN** the topic lesson article does not retain deprecated learner-facing wording from the previous floating point conversion source

##### Example: refreshed source coverage

| Required content marker | Expected refreshed topic behavior |
| ----- | ----- |
| `傳統（一般）浮點表示法` | Rendered in a lessonArticle section |
| `IEEE 754 欄位` | Rendered in a lessonArticle section with single and double precision fields |
| `0.1(10) = 0.0001100110011…(2)` | Rendered in the decimal precision explanation |
| `練習 6（兩種表示法對照）` | Rendered in the practice exercise section |