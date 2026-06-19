## MODIFIED Requirements

### Requirement: App shell exposes primary subject routes

The application SHALL provide primary routes for computer principles, networking, digital logic, operating systems, information management, programming, database, algorithms, system design, English, and Chinese. The route paths SHALL be `/computer-principles`, `/networking`, `/digital-logic`, `/operating-systems`, `/information-management`, `/programming`, `/database`, `/algorithms`, `/system-design`, `/english`, and `/chinese`. The header SHALL show a computer-foundation subject control labeled with the active grouped subject or `計概類`, and this control SHALL expose `計概`, `網概`, `數位邏輯`, and `作業系統` as menu options. The header SHALL also show the professional subject controls `資管`, `程式`, `資料庫`, `演算法`, and `系統設計`. The AppShell header SHALL NOT render the common subject switcher unless a separate change explicitly enables it.

#### Scenario: Root route opens the first professional subject

- **WHEN** the user opens the root route `/`
- **THEN** the application navigates to `/computer-principles`
- **AND** the header marks the computer-foundation subject control as active
- **AND** the computer-foundation subject control displays `計概`

#### Scenario: Header navigates to computer-foundation grouped subjects

- **WHEN** the user opens the computer-foundation subject menu
- **THEN** the menu lists `計概`, `網概`, `數位邏輯`, and `作業系統`
- **WHEN** the user activates `數位邏輯`
- **THEN** the application navigates to `/digital-logic`
- **AND** the main route region displays the digital logic subject page

#### Scenario: Header navigates to non-group professional subjects

- **WHEN** the user activates `資料庫`
- **THEN** the application navigates to `/database`
- **AND** the main route region displays the database subject page

#### Scenario: AppShell keeps common subjects hidden

- **WHEN** the AppShell header renders
- **THEN** the header does not render a `英文` route tab
- **AND** the header does not render a `國文` route tab
- **AND** the header does not render the common subject switcher control

##### Example: primary route mapping

| Header control | Menu label | Route path | Subject |
| ----- | ----- | ----- | ----- |
| `計概類` group | `計概` | `/computer-principles` | Computer principles |
| `計概類` group | `網概` | `/networking` | Networking |
| `計概類` group | `數位邏輯` | `/digital-logic` | Digital logic |
| `計概類` group | `作業系統` | `/operating-systems` | Operating systems |
| `資管` | n/a | `/information-management` | Information management |
| `程式` | n/a | `/programming` | Programming |
| `資料庫` | n/a | `/database` | Database |
| `演算法` | n/a | `/algorithms` | Algorithms |
| `系統設計` | n/a | `/system-design` | System design |
