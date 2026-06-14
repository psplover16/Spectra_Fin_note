## ADDED Requirements

### Requirement: Database and algorithms subject routes

The app SHALL expose Database and Algorithms as professional subject routes with stable paths /database and /algorithms.

#### Scenario: Navigate to database route

- **WHEN** the user opens /database
- **THEN** the app renders a professional subject topic page titled 資料庫
- **THEN** the page uses the database subject key for topic progress

#### Scenario: Navigate to algorithms route

- **WHEN** the user opens /algorithms
- **THEN** the app renders a professional subject topic page titled 演算法
- **THEN** the page uses the algorithms subject key for topic progress

### Requirement: Navigation reaches new professional subjects

The app SHALL provide primary navigation access to Database and Algorithms without hiding them under Information Management or Programming.

#### Scenario: User selects database navigation

- **WHEN** the user activates the Database navigation item
- **THEN** the app navigates to /database

#### Scenario: User selects algorithms navigation

- **WHEN** the user activates the Algorithms navigation item
- **THEN** the app navigates to /algorithms

### Requirement: Route preloading includes new professional subjects

The route preload registry SHALL include /database and /algorithms so hover, focus, touch, or idle preloading can load the matching route components.

#### Scenario: Preload algorithms route

- **WHEN** route preloading is requested for /algorithms
- **THEN** the Algorithms route component loader is invoked

#### Scenario: Preload database route

- **WHEN** route preloading is requested for /database
- **THEN** the Database route component loader is invoked

### Requirement: Progress state supports new subjects

The subject topic progress state SHALL include database and algorithms keys and SHALL preserve existing progress when normalizing older localStorage values.

#### Scenario: Normalize old progress state

- **WHEN** stored progress contains computerPrinciples, networking, informationManagement, programming, english, and chinese keys but omits database and algorithms
- **THEN** normalized progress includes empty database and algorithms progress entries
- **THEN** existing subject completion and bookmark data remains unchanged

##### Example: Old state gains new keys

| Existing key | Existing value | Expected after normalization |
| ----- | ----- | ----- |
| programming.completedTopicIds | ["java-loop-basics"] | ["java-loop-basics"] |
| programming.bookmarkedTopicId | "java-loop-basics" | "java-loop-basics" |
| database.completedTopicIds | missing | [] |
| database.bookmarkedTopicId | missing | null |
| algorithms.completedTopicIds | missing | [] |
| algorithms.bookmarkedTopicId | missing | null |
