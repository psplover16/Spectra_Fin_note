# Stale Professional Content Audit

generated_at: 2026-06-13T13:15:00+08:00  
change: ingest-professional-subject-content  
scope: group 17 source-outline lessonArticle rebuild

## Formal Topic Counts

| route | formal subject key | expected current topics | current formal topics | result |
| --- | --- | ---: | ---: | --- |
| /computer-principles | computerPrinciples | 33 | 33 | pass |
| /networking | networking | 11 | 11 | pass |
| /database | database | 11 | 11 | pass |
| /information-management | informationManagement | 7 | 7 | pass |
| /programming | programming | 39 | 39 | pass |
| /algorithms | algorithms | 21 | 21 | pass |

## Removed Stale Topics

| topic id | status | reason |
| --- | --- | --- |
| sorting-baseline | removed | Replaced by current manifest topic `sorting-algorithms-baseline` with route tracking row, `.verified.md`, verifier result, and import readiness ready. |
| binary-search-placeholder | removed | Placeholder topic is not part of current formal algorithms data. |
| sorting-overview | removed | Placeholder or pre-rebuild topic is not part of current formal algorithms data. |

## Current Route Evidence

| route | tracking row | verified file | verifier result | manual review state | import readiness |
| --- | --- | --- | --- | --- | --- |
| /computer-principles | pass | pass | pass | pass | ready |
| /networking | pass | pass | pass | pass | ready |
| /database | pass | pass | pass | pass | ready |
| /information-management | pass | pass | pass | pass | ready |
| /programming | pass | pass | pass | pass | ready |
| /algorithms | pass | pass | pass | pass | ready |

## LocalStorage Stale Bookmark Fixture

| fixture | stale value | expected rendering | result |
| --- | --- | --- | --- |
| algorithms completedTopicIds | `sorting-baseline` | not rendered because it is absent from current formal topic list | pass |
| algorithms bookmarkedTopicId | `sorting-baseline` | not rendered/bookmarked because no current topic has that id | pass |

stale topics remaining in formal data: 0  
final result: pass

## Current Computer Principles Additions

| topic id | status | evidence |
| --- | --- | --- |
| cp-common-units | current | Added as the first computerPrinciples formal topic with route tracking row, `.verified.md`, verifier result, and import readiness ready. |

## Group 17 Stale Display Block Audit

| check | result | notes |
| --- | --- | --- |
| formal professional blocks | pass | Every professional topic has exactly one top-level lessonArticle block. |
| old displayed block kinds | pass | sourceNote, examOutline, memoryPoints, understanding, termList, workedExample, pitfall, complexityTable, and teachingCode are not used as professional top-level blocks. |
| source-outline article markers | pass | Formal serialized topics contain 來源大綱、教材本文, and 學習標記. |
