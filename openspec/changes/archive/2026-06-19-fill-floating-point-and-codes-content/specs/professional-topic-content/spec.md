## ADDED Requirements

### Requirement: Computer Principles floating-point and code topics contain finalized lesson articles

The professional topic data SHALL provide finalized lessonArticle content for the Computer Principles topics `cp-floating-point-conversion` and `cp-codes-and-check-codes`. Each topic SHALL include source traceability to `_private/計算機概論.txt` and its matching Markdown source file.

#### Scenario: Floating-point conversion topic is filled

- **WHEN** professional topic data is loaded for `computerPrinciples`
- **THEN** the topic with id `cp-floating-point-conversion` contains one non-empty lessonArticle block
- **AND** the topic title is `浮點數轉換(Floating-Point Conversion)`
- **AND** the lessonArticle sourceFiles include `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/十六、浮點數轉換_新手國考教材.md`
- **AND** the content includes `IEEE 754`, `bias`, `0x41240000`, `0.0001100110011`, and a decimal-fraction multiplication explanation that removes the integer part before the next multiplication

#### Scenario: Codes and check codes topic is filled

- **WHEN** professional topic data is loaded for `computerPrinciples`
- **THEN** the topic with id `cp-codes-and-check-codes` contains one non-empty lessonArticle block
- **AND** the topic title is `數碼、文字碼與檢查碼(Codes and Check Codes)`
- **AND** the lessonArticle sourceFiles include `_private/計算機概論.txt` and `_private/MD/計概/3a基本計概/十七、數碼、文字碼與檢查碼_新手國考教材.md`
- **AND** the content includes `BCD`, `Gray Code`, `Unicode`, `UTF-8`, `CRC`, `Hamming Code`, `Hamming Distance`, and `Syndrome`
- **AND** the content follows the source Markdown structure rather than a compressed outline, including the quick memorization sentence, common code table, BCD `259` example, Binary `1011` to Gray `1110` and Gray `1110` to Binary `1011` as subsection-level learning steps inside the `Gray Code` section, CRC `一、定義與用途` / `二、傳送與接收流程` / `三、算法` subsection-level content with modulo-2 algorithm steps, Hamming `2^r ≥ m + r + 1`, a source-style Hamming(7,4) position layout, Hamming 1/2/3 as aligned ordered steps with 3-1 through 3-4, Hamming(7,4), the table, and the data-placement note grouped in one shallow inner indentation block under the third step, P1/P2/P4 check-bit details nested one indentation level under 3-3, Syndrome `S4 S2 S1` inside `Hamming Code（漢明碼）`, Hamming Distance formulas, and exam quick review content split into `常見陷阱`, `國考答題句`, and `考前速記` subsections

#### Scenario: Imported content is cleaned and corrected

- **WHEN** the two filled topics are serialized for rendering
- **THEN** the serialized content does not include raw display instructions `用table`, `用table做`, `用UL/LI表示`, or `此處用 UL/LI表示`
- **AND** Hamming Code check-bit content uses `P1`, `P2`, and `P4` for Hamming(7,4)
- **AND** the serialized content does not include `P3` as the position-name for the check bit at position 4
- **AND** the BCD explanation identifies `0000` through `1001` as the valid range for one 8421 BCD digit
