## ADDED Requirements

### Requirement: Digital logic and operating systems subject routes

The app SHALL expose Digital Logic and Operating Systems as professional subject routes with stable paths `/digital-logic` and `/operating-systems`. Each route SHALL render the shared professional subject topic page with its own subject key and progress namespace.

#### Scenario: Navigate to digital logic route

- **WHEN** the user opens `/digital-logic`
- **THEN** the app renders a professional subject topic page titled `數位邏輯`
- **AND** the page uses the `digitalLogic` subject key for topic progress
- **AND** the page test id is `subject-view-digital-logic`

#### Scenario: Navigate to operating systems route

- **WHEN** the user opens `/operating-systems`
- **THEN** the app renders a professional subject topic page titled `作業系統`
- **AND** the page uses the `operatingSystems` subject key for topic progress
- **AND** the page test id is `subject-view-operating-systems`
- **AND** the route shows learner-facing operating-system topics without rendering the empty `cp-hardware-protection` skeleton as an independent section

#### Scenario: Unknown route still redirects to computer principles

- **WHEN** the user opens an unknown route path
- **THEN** the application redirects to `/computer-principles`
- **AND** the redirect does not choose `/digital-logic` or `/operating-systems`

### Requirement: Split subject keys preserve progress ownership

The subject topic progress state SHALL include `digitalLogic` and `operatingSystems` entries. Legacy `computerPrinciples` progress for moved topic ids MUST be normalized into the matching new subject entry without changing the storage key or storage version.

#### Scenario: Legacy completed topic ids are normalized to new subjects

- **WHEN** progress storage contains `cp-digital-logic-basics` and `cp-os-basics` in `computerPrinciples.completedTopicIds`
- **THEN** the normalized state includes `cp-digital-logic-basics` in `digitalLogic.completedTopicIds`
- **AND** the normalized state includes `cp-os-basics` in `operatingSystems.completedTopicIds`
- **AND** the normalized state does not keep those ids in `computerPrinciples.completedTopicIds`

#### Scenario: Legacy bookmarked topic id is normalized to the new subject

- **WHEN** progress storage contains `computerPrinciples.bookmarkedTopicId` set to `cp-karnaugh-map`
- **THEN** the normalized state includes `digitalLogic.bookmarkedTopicId` set to `cp-karnaugh-map`
- **AND** the normalized state includes `computerPrinciples.bookmarkedTopicId` set to null
