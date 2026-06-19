## MODIFIED Requirements

### Requirement: App shell exposes primary subject routes

The application SHALL provide primary direct routes for computer principles, networking, information management, programming, database, algorithms, system design, English, and Chinese. The route paths SHALL be `/computer-principles`, `/networking`, `/information-management`, `/programming`, `/database`, `/algorithms`, `/system-design`, `/english`, and `/chinese`. The header SHALL show visible primary subject controls with the Chinese labels `計概`, `網概`, `資管`, `程式`, `資料庫`, `演算法`, and `系統設計`. The header SHALL NOT show visible English or Chinese common-subject navigation controls, while `/english` and `/chinese` SHALL remain routable by direct URL.

#### Scenario: Root route opens the first professional subject

- **WHEN** the user opens the root route `/`
- **THEN** the application navigates to `/computer-principles`
- **AND** the header marks `計概` as the active subject control

#### Scenario: Header navigates to professional subjects

- **WHEN** the user activates `網概`
- **THEN** the application navigates to `/networking`
- **AND** the main route region displays the networking subject page

##### Example: visible primary route mapping

| Header label | Route path | Subject |
| ----- | ----- | ----- |
| `計概` | `/computer-principles` | Computer principles |
| `網概` | `/networking` | Networking |
| `資管` | `/information-management` | Information management |
| `程式` | `/programming` | Programming |
| `資料庫` | `/database` | Database |
| `演算法` | `/algorithms` | Algorithms |
| `系統設計` | `/system-design` | System design |

#### Scenario: Header navigates to system design

- **WHEN** the user activates `系統設計`
- **THEN** the application navigates to `/system-design`
- **AND** the main route region displays the system design subject page

#### Scenario: Common subject routes remain direct-only from the header

- **WHEN** the app shell header renders
- **THEN** the header does not show a visible `英文` navigation control
- **AND** the header does not show a visible `國文` navigation control
- **AND** the header does not show a common-subject switcher control
- **AND** direct navigation to `/english` loads the English subject route
- **AND** direct navigation to `/chinese` loads the Chinese subject route

##### Example: direct-only common routes

| Direct route path | Route title | Header visibility |
| ----- | ----- | ----- |
| `/english` | `英文` | Hidden from visible header navigation |
| `/chinese` | `國文` | Hidden from visible header navigation |
