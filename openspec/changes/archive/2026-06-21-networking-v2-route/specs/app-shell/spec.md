## ADDED Requirements

### Requirement: Computer foundation menu exposes Networking v2

The app shell SHALL expose `網路概論(v2)` inside the computer foundation route menu. Selecting the option SHALL navigate to `/networking-v2` without changing the root redirect behavior or adding a new top-level header tab.

#### Scenario: Computer foundation menu lists Networking v2

- **WHEN** the user opens the computer foundation subject menu
- **THEN** the menu contains `網路概論(v2)`
- **AND** the menu keeps the existing `計概`, `計概(v2)`, `網概`, `數位邏輯`, and `作業系統` options
- **AND** the AppShell header does not render `網路概論(v2)` as a separate top-level route tab

#### Scenario: Header navigates to Networking v2

- **WHEN** the user selects `網路概論(v2)` from the computer foundation subject menu
- **THEN** the app navigates to `/networking-v2`
- **AND** the main route region displays the `網路概論(v2)` subject page

#### Scenario: Root route remains Computer Principles v1

- **WHEN** the user opens the root route `/`
- **THEN** the application navigates to `/computer-principles`
- **AND** the app does not redirect to `/networking-v2`
