## ADDED Requirements

### Requirement: Computer Principles v2 subject route

The app SHALL expose Computer Principles v2 as a professional subject route with stable path `/computer-principles-v2`. The route SHALL render the shared professional subject topic page with its own subject key and progress namespace.

#### Scenario: Navigate to Computer Principles v2 route

- **WHEN** the user opens `/computer-principles-v2`
- **THEN** the app renders a professional subject topic page titled `計概(v2)`
- **AND** the page uses the `computerPrinciplesV2` subject key for topic progress
- **AND** the page test id is `subject-view-computer-principles-v2`

#### Scenario: Unknown route still redirects to Computer Principles v1

- **WHEN** the user opens an unknown route path
- **THEN** the application redirects to `/computer-principles`
- **AND** the redirect does not choose `/computer-principles-v2`

### Requirement: Computer Principles v2 route has independent topic ownership

Computer Principles v2 topics SHALL belong to `computerPrinciplesV2` and MUST NOT be mixed into `computerPrinciples`, `networking`, `digitalLogic`, or `operatingSystems`.

#### Scenario: V2 topics are owned by the v2 subject key

- **WHEN** professional subject topic collections are loaded
- **THEN** the 13 Computer Principles v2 topic ids appear in `professionalTopicsBySubject.computerPrinciplesV2`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.computerPrinciples`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.networking`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.digitalLogic`
- **AND** those topic ids do not appear in `professionalTopicsBySubject.operatingSystems`
