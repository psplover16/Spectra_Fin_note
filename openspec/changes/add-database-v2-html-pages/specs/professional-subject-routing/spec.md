## ADDED Requirements

### Requirement: Database v2 subject route

The app SHALL expose Database v2 as a professional subject route with stable path `/database-v2`. The route SHALL render a database v2 list page titled `資料庫2`, SHALL use `databaseV2` as its bookmark and completion progress namespace, SHALL participate in the primary route preload registry, and MUST NOT change the existing `/database` route behavior.

#### Scenario: Navigate to database v2 route

- **WHEN** the user opens `/database-v2`
- **THEN** the app renders the database v2 list page titled `資料庫2`
- **AND** the page uses the `databaseV2` subject key for bookmark and completion progress
- **AND** the page test id is `subject-view-database-v2`

#### Scenario: Database v2 participates in primary preload registry

- **WHEN** primary route component preloading is requested
- **THEN** `/database-v2` is included in the primary route path registry
- **AND** the preload registry resolves the Database v2 route component without error

#### Scenario: Existing database route remains unchanged

- **WHEN** the user opens `/database`
- **THEN** the app renders the existing database subject page titled `資料庫`
- **AND** the page uses the existing `database` subject key for topic progress
- **AND** the app does not redirect `/database` to `/database-v2`
