## ADDED Requirements

### Requirement: Lesson article sections can be collapsed when configured

LessonArticle sections SHALL support optional controlled collapse metadata. A section configured as collapsible with default-expanded false SHALL render its heading as an interactive control, hide its section body by default, and reveal the body when the user activates that control. Sections without collapse metadata SHALL render expanded exactly as they did before this change.

#### Scenario: Collapsible lesson section starts closed

- **WHEN** a lessonArticle section has collapse metadata with collapsible true and defaultExpanded false
- **THEN** the section heading is visible as an interactive control
- **AND** the section body content is not visible by default
- **AND** surrounding non-collapsible lessonArticle sections remain visible
- **AND** the collapsible section has a dedicated class for top separation from the preceding section

#### Scenario: Collapsible lesson section opens and closes

- **WHEN** the user activates a closed collapsible lessonArticle section heading
- **THEN** the section body content becomes visible
- **WHEN** the user activates the same heading again
- **THEN** the section body content becomes hidden again

#### Scenario: Non-collapsible lesson sections preserve existing rendering

- **WHEN** a lessonArticle section does not include collapse metadata
- **THEN** the section heading and all section body blocks render without requiring an extra click
- **AND** existing paragraph, orderedList, and table rendering remains unchanged
