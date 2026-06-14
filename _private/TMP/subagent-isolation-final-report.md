# Subagent Isolation Final Report

generated_at: 2026-06-13T13:00:00+08:00  
change: ingest-professional-subject-content  
scope: route-scoped content production artifacts for group 17 source-outline lessonArticle rebuild

## Isolation Rule

- route source inventory, topic prompt, content writer draft, verifier output, route integration auditor output, and import readiness report must stay under `_private/TMP/<route>/`.
- subagents do not modify `src/modules/subjectTopics/data/professionalTopics.ts`.
- formal app data writer: main integration only
- subagent output outside route TMP: 0

## Route Artifact Matrix

| route | source inventory | topic prompts | content writer drafts | verifier outputs | route integration auditor | import readiness | result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| /computer-principles | `_private/TMP/computer-principles/source-inventory.md` | `_private/TMP/computer-principles/*.prompt.md` | `_private/TMP/computer-principles/*.draft.md` | `_private/TMP/computer-principles/*.verified.md` | `_private/TMP/computer-principles/manual-review.md` | `_private/TMP/computer-principles/import-readiness.md` | pass |
| /networking | `_private/TMP/networking/source-inventory.md` | `_private/TMP/networking/*.prompt.md` | `_private/TMP/networking/*.draft.md` | `_private/TMP/networking/*.verified.md` | `_private/TMP/networking/port-protocol-fact-review.md` | `_private/TMP/networking/import-readiness.md` | pass |
| /database | `_private/TMP/database/source-inventory.md` | `_private/TMP/database/*.prompt.md` | `_private/TMP/database/*.draft.md` | `_private/TMP/database/*.verified.md` | `_private/TMP/database/database-concept-review.md` | `_private/TMP/database/import-readiness.md` | pass |
| /information-management | `_private/TMP/information-management/source-inventory.md` | `_private/TMP/information-management/*.prompt.md` | `_private/TMP/information-management/*.draft.md` | `_private/TMP/information-management/*.verified.md` | `_private/TMP/information-management/management-term-flow-review.md` | `_private/TMP/information-management/import-readiness.md` | pass |
| /programming | `_private/TMP/programming/source-inventory.md` | `_private/TMP/programming/*.prompt.md` | `_private/TMP/programming/*.draft.md` | `_private/TMP/programming/*.verified.md` | `_private/TMP/programming/programming-java-system-analysis-review.md` | `_private/TMP/programming/import-readiness.md` | pass |
| /algorithms | `_private/TMP/algorithms/source-inventory.md` | `_private/TMP/algorithms/*.prompt.md` | `_private/TMP/algorithms/*.draft.md` | `_private/TMP/algorithms/*.verified.md` | `_private/TMP/algorithms/algorithm-java-complexity-review.md` | `_private/TMP/algorithms/import-readiness.md` | pass |

## Main Integration Boundary

| file | writer | reason |
| --- | --- | --- |
| `src/modules/subjectTopics/data/professionalTopics.ts` | main integration | Imports only topics whose route import-readiness report is ready and whose `.verified.md` exists. |
| `tests/unit/*RouteWorkflow.spec.ts` | main integration | Verifies route artifacts and formal data alignment. |
| `_TMP/reviews/*-content-review.md` | main integration summary | Cross-route review output, not a subagent source of formal data. |

## Verification Notes

- Each route folder contains at least one `.prompt.md`, `.draft.md`, and `.verified.md` artifact.
- Each route folder contains `source-inventory.md` and `import-readiness.md`.
- Each route folder contains a manual or route-specific review artifact.
- Formal app data was updated only after import-readiness status was `ready` and verified files were present.

final result: pass

## Group 17 Isolation Addendum

- route source inventory, prompt generation, writer draft, verifier output, route auditor, and import readiness stay under `_private/TMP/<route>/`.
- subagents are allowed to create or update prompt/draft/verified/review artifacts only inside the route TMP folder.
- main integration alone writes `src/modules/subjectTopics/data/professionalTopics.ts`, tests, and project architecture after verified route readiness.
- final result: pass

