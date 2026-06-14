## ADDED Requirements

### Requirement: App shell exposes primary subject routes

The application SHALL provide primary routes for computer principles, networking, information management, programming, English, and Chinese. The route paths SHALL be `/computer-principles`, `/networking`, `/information-management`, `/programming`, `/english`, and `/chinese`. The header SHALL show the Chinese labels `計概`, `網概`, `資管`, `程式`, and the current common subject label.

#### Scenario: Root route opens the first professional subject

- **WHEN** the user opens the root route `/`
- **THEN** the application navigates to `/computer-principles`
- **AND** the header marks `計概` as the active subject control

#### Scenario: Header navigates to professional subjects

- **WHEN** the user activates `網概`
- **THEN** the application navigates to `/networking`
- **AND** the main route region displays the networking subject page

##### Example: primary route mapping

| Header label | Route path | Subject |
| ----- | ----- | ----- |
| `計概` | `/computer-principles` | Computer principles |
| `網概` | `/networking` | Networking |
| `資管` | `/information-management` | Information management |
| `程式` | `/programming` | Programming |

### Requirement: Common subject control switches between English and Chinese

The application SHALL provide a common subject control in the header. The control SHALL default to English, SHALL show a menu containing English and Chinese, and SHALL update its visible label to match the selected common subject.

#### Scenario: Default common subject is English

- **WHEN** the user opens the application for the first time
- **THEN** the common subject control shows `英文`
- **AND** activating the control opens a menu containing `英文` and `國文`

#### Scenario: Selecting Chinese updates route and label

- **WHEN** the user opens the common subject menu and selects `國文`
- **THEN** the application navigates to `/chinese`
- **AND** the common subject control shows `國文`

### Requirement: Route components are prepared and retained during the app session

The application SHALL lazy-load primary route components, SHALL start route preparation on header pointer, focus, and touch interactions, and SHALL retain visited primary route component instances during the same app session.

#### Scenario: Route tab interaction prepares the route

- **WHEN** the user hovers, focuses, or touches the `程式` route control
- **THEN** the application starts preparing the `/programming` route component before final navigation activation
- **AND** repeated preparation requests for `/programming` reuse the same pending or completed work

#### Scenario: Returning to a visited route keeps state

- **WHEN** the user visits `/programming`, expands a topic, navigates to `/english`, and returns to `/programming`
- **THEN** the programming route instance remains available in the same app session
- **AND** the expanded topic state remains visible unless the topic was completed

### Requirement: App shell is usable at 375px width

The application SHALL render the header and route region at 375px viewport width without horizontal page overflow, incoherent overlap, or clipped common subject menu controls.

#### Scenario: Header fits on a small phone

- **WHEN** the viewport width is 375px and the header renders all subject controls
- **THEN** route controls wrap or compress cleanly inside the viewport
- **AND** no header text overlaps another control
- **AND** the common subject menu remains tappable

### Requirement: PWA offline shell loads without network

The application SHALL include PWA install metadata and a service worker configuration that allows the app shell and built route assets to load after they have been cached. The application MUST NOT depend on external APIs for the first app shell render.

#### Scenario: App shell opens while offline after caching

- **WHEN** the user has previously opened the built application online and then opens it again while offline
- **THEN** the app shell renders the header and route region
- **AND** cached route assets load without a network request
- **AND** the user sees no blank screen caused by missing network access
