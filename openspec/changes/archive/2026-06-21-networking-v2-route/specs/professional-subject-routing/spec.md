## ADDED Requirements

### Requirement: Networking v2 subject route

The app SHALL expose Networking v2 as a professional subject route with the stable path `/networking-v2`. The route SHALL render the shared professional subject topic page with its own subject key and progress namespace.

#### Scenario: Navigate to Networking v2 route

- **WHEN** the user opens `/networking-v2`
- **THEN** the app renders a professional subject topic page titled `網路概論(v2)`
- **AND** the page uses the `networkingV2` subject key for topic progress
- **AND** the page test id is `subject-view-networking-v2`

#### Scenario: Networking v2 participates in primary preload registry

- **WHEN** primary route component preloading is requested
- **THEN** `/networking-v2` is included in the primary route path registry
- **AND** the preload registry resolves the Networking v2 route component without error

#### Scenario: Unknown route still redirects to Computer Principles v1

- **WHEN** the user opens an unknown route path
- **THEN** the application redirects to `/computer-principles`
- **AND** the redirect does not choose `/networking-v2`

### Requirement: Networking v2 route has independent topic ownership

Networking v2 topics SHALL belong to `networkingV2` and MUST NOT be mixed into `networking`, `computerPrinciples`, `computerPrinciplesV2`, `digitalLogic`, or `operatingSystems`.

#### Scenario: V2 topics are owned by the v2 subject key

- **WHEN** professional subject topic collections are loaded
- **THEN** the 12 Networking v2 topic ids appear in `professionalTopicsBySubject.networkingV2`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.networking`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.computerPrinciples`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.computerPrinciplesV2`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.digitalLogic`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.operatingSystems`

#### Scenario: Progress state includes Networking v2 without migrating Networking v1

- **WHEN** subject topic progress state is created or normalized
- **THEN** the state contains a `networkingV2` entry with `completedTopicIds` set to an empty array when no v2 progress exists
- **AND** the `networkingV2` entry has `bookmarkedTopicId` set to null when no v2 bookmark exists
- **AND** existing `networking` progress ids remain under `networking`
