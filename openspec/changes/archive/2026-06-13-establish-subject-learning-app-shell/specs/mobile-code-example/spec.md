## ADDED Requirements

### Requirement: Teaching code block presents Java examples consistently

Professional subject pages SHALL render Java teaching snippets through a dedicated teaching code block component. The component SHALL display the language, the code snippet, and optional Traditional Chinese title and description without requiring page-specific code styling.

#### Scenario: Java snippet renders with title and description

- **WHEN** a programming topic renders a Java snippet with title `校驗位公式示範`
- **THEN** the teaching code block displays the title
- **AND** it identifies the language as Java
- **AND** it displays the snippet in a monospaced code region

### Requirement: Code examples remain readable at 375px width

Teaching code blocks SHALL fit inside a 375px viewport without causing horizontal page overflow. Long code lines SHALL scroll inside the code region rather than expanding the page width.

#### Scenario: Long Java line stays inside the code region

- **WHEN** the viewport width is 375px and a Java snippet contains a line longer than the code block width
- **THEN** the page width remains equal to the viewport width
- **AND** horizontal scrolling is limited to the code region
- **AND** surrounding topic text remains readable without horizontal scrolling

### Requirement: Java examples use learning-oriented comments

Java snippets authored for professional subject teaching SHALL use clear variable names and Traditional Chinese comments that explain the learning step. Long explanatory comments SHALL be placed on their own line before the related code when inline comments would push the important code far off-screen.

#### Scenario: Hamming code example uses clear comments

- **WHEN** a computer principles topic renders a Java example for the Hamming code inequality
- **THEN** the snippet includes variables named `dataBits` and `parityBits`
- **AND** the snippet includes a Traditional Chinese comment explaining what the variables represent
- **AND** the formula check remains visible near the comment in the code region

##### Example: compact commented snippet

- **GIVEN** a Java snippet contains `int dataBits = 4;` and `int parityBits = 1;`
- **WHEN** the snippet is displayed at 375px width
- **THEN** the variable declarations and the comment explaining data bits and parity bits are readable without page-level horizontal scrolling

### Requirement: Teaching code block has safe empty and unsupported-language states

The teaching code block SHALL render a safe empty state when the code string is empty. If a language value is not recognized, the component SHALL still render the code text and SHALL label the language as plain text.

#### Scenario: Empty code string renders without crashing

- **WHEN** a teaching code block receives an empty code string
- **THEN** it displays a Traditional Chinese empty code message
- **AND** it does not throw a console error

#### Scenario: Unsupported language falls back to plain text

- **WHEN** a teaching code block receives language `pseudo`
- **THEN** it displays the code text
- **AND** it labels the language as plain text
