## ADDED Requirements

### Requirement: Computer foundation menu exposes Computer Principles v2

The app shell SHALL expose `計概(v2)` inside the computer foundation route menu. Selecting the option SHALL navigate to `/computer-principles-v2` without changing the root redirect behavior.

#### Scenario: Computer foundation menu lists v2 option

- **WHEN** the user opens the computer foundation menu from the app header
- **THEN** the menu contains `計概`
- **AND** the menu contains `網概`
- **AND** the menu contains `數位邏輯`
- **AND** the menu contains `作業系統`
- **AND** the menu contains `計概(v2)`

#### Scenario: Header option navigates to v2 route

- **WHEN** the user selects `計概(v2)` from the computer foundation menu
- **THEN** the app navigates to `/computer-principles-v2`
- **AND** the main route region displays the `計概(v2)` subject page

#### Scenario: Root route remains unchanged

- **WHEN** the user opens `/`
- **THEN** the app redirects to `/computer-principles`
- **AND** the app does not redirect to `/computer-principles-v2`
