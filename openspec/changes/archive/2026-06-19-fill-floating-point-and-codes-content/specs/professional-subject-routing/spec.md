## ADDED Requirements

### Requirement: Computer Principles route includes filled floating-point and code topics

The professional subject routing helper SHALL expose `cp-floating-point-conversion` and `cp-codes-and-check-codes` on the `/computer-principles` route once those topics contain learner-facing content. The route order SHALL keep the existing Computer Principles skeleton order after `cp-complement-conversion`.

#### Scenario: Filled topics appear after complement conversion

- **WHEN** the Computer Principles subject topics are requested
- **THEN** the visible topic id sequence includes `cp-complement-conversion`, `cp-floating-point-conversion`, and `cp-codes-and-check-codes` consecutively in that order
- **AND** the visible topic titles include `浮點數轉換(Floating-Point Conversion)` and `數碼、文字碼與檢查碼(Codes and Check Codes)`

#### Scenario: Empty skeleton filtering still applies

- **WHEN** other professional topic skeletons still contain no learner-facing lessonArticle content
- **THEN** those empty skeleton topics remain hidden from the route topic list
- **AND** the route does not fall back to placeholder topics
