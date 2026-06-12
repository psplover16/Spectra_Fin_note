## ADDED Requirements

### Requirement: Subject pages display topic sections

Each subject route SHALL display subject topics through a shared topic section pattern. Each topic section SHALL include a bookmark control, a completion checkbox, a title control, and expandable detail content. The topic header SHALL render the topic title as its only text label and MUST NOT render topic summary metadata as a per-section subtitle. The detail content SHALL remain subject-specific.

#### Scenario: Topic section expands and collapses

- **WHEN** the user activates a topic title
- **THEN** the topic detail content becomes visible
- **AND** activating the same title again hides the detail content

#### Scenario: Topic header does not show a subtitle

- **WHEN** a subject route renders topic `number-systems`
- **THEN** the topic header shows `數字系統與進位`
- **AND** the header does not show `預留二進位、十進位與十六進位的整理位置。`

#### Scenario: Empty subject topic list shows a safe state

- **WHEN** a subject route has no topics available
- **THEN** the route displays a Traditional Chinese empty state for that subject
- **AND** the route does not throw a console error
- **AND** the header remains usable

### Requirement: Completion state moves topics to the finished zone

Each subject page SHALL separate unfinished topics from completed topics. Checking a topic completion checkbox SHALL mark the topic completed, collapse its detail content, remove it from the unfinished zone, and show it in the finished zone.

#### Scenario: Completing a topic moves it to the finished zone

- **WHEN** the user checks the completion checkbox for topic `binary-tree-basics` on the computer principles page
- **THEN** topic `binary-tree-basics` is marked completed
- **AND** its detail content is collapsed
- **AND** it no longer appears in the unfinished zone
- **AND** it appears in the finished zone

#### Scenario: Unchecking a completed topic returns it to unfinished

- **WHEN** the user unchecks the completion checkbox for topic `binary-tree-basics` in the finished zone
- **THEN** topic `binary-tree-basics` is marked unfinished
- **AND** it appears in the unfinished zone

### Requirement: Bookmark records one reading position per subject

Each subject SHALL have at most one bookmarked topic. Setting a bookmark on a topic SHALL replace any existing bookmark for the same subject. Completing a bookmarked topic SHALL clear that subject bookmark. Completed topics SHALL NOT show the bookmark control in the finished zone.

#### Scenario: New bookmark replaces old bookmark in the same subject

- **WHEN** the user bookmarks topic `number-systems` on the computer principles page
- **AND** the user bookmarks topic `binary-tree-basics` on the same page
- **THEN** topic `binary-tree-basics` is the only bookmarked topic for computer principles
- **AND** topic `number-systems` is no longer bookmarked

#### Scenario: Completing bookmarked topic clears bookmark

- **WHEN** topic `binary-tree-basics` is bookmarked
- **AND** the user checks its completion checkbox
- **THEN** the computer principles bookmark becomes empty
- **AND** the completed topic appears without a bookmark control in the finished zone

### Requirement: Topic progress persists locally

The application SHALL persist subject topic progress in localStorage under the key `spectra:subject-topic-progress:v1`. The stored state SHALL contain `version: 1` and a `subjects` record keyed by subject key. Each subject progress record SHALL contain `completedTopicIds`, `bookmarkedTopicId`, and `updatedAt`.

#### Scenario: Progress survives reload

- **WHEN** the user completes topic `osi-model` on `/networking` and reloads the application
- **THEN** topic `osi-model` remains completed
- **AND** the networking finished zone contains topic `osi-model`

##### Example: stored progress shape

- **GIVEN** networking has one completed topic and one bookmark
- **WHEN** progress is written to localStorage
- **THEN** the stored JSON contains `version=1`, `subjects.networking.completedTopicIds=["osi-model"]`, and `subjects.networking.bookmarkedTopicId="tcp-ip-basics"`

### Requirement: Progress storage failure does not break subject routes

The application SHALL recover from missing, malformed, or unreadable localStorage progress by rendering an empty progress state. The application MUST NOT delete existing localStorage data during the failed read path.

#### Scenario: Malformed progress JSON is ignored for rendering

- **WHEN** `spectra:subject-topic-progress:v1` contains malformed JSON
- **THEN** each subject route renders with no completed topics and no bookmark
- **AND** the route displays its topics without crashing
- **AND** existing storage data is not deleted during the read attempt
