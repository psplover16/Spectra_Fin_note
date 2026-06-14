# Source Label Expansion Validation

generated_at: 2026-06-13T12:45:00+08:00  
scope: route-scoped workflows under `_private/TMP/<route>/`  
source_label_definitions: `_private/TMP/source-label-definitions.md`

## Route Coverage

| route | tracking file | imported rows | prompt definition link | draft sections | result |
| --- | --- | ---: | --- | --- | --- |
| /computer-principles | `_private/TMP/computer-principles/待生成主題清單_20260613-110000.md` | 32 | pass | pass | pass |
| /networking | `_private/TMP/networking/待生成主題清單_20260613-111500.md` | 11 | pass | pass | pass |
| /database | `_private/TMP/database/待生成主題清單_20260613-113000.md` | 11 | pass | pass | pass |
| /information-management | `_private/TMP/information-management/待生成主題清單_20260613-114500.md` | 7 | pass | pass | pass |
| /programming | `_private/TMP/programming/待生成主題清單_20260613-120000.md` | 39 | pass | pass | pass |
| /algorithms | `_private/TMP/algorithms/待生成主題清單_20260613-123000.md` | 21 | pass | pass | pass |

total checked route rows: 121  
unknown valid source labels: 0  
non-label syntax/code tokens kept excluded: `[i]`, `[mid]`, `[1, 2, 3]`, `[P]`

## Label Expansion Result

| source label | result | required expansion validated |
| --- | --- | --- |
| [必背] | pass | definition, importance, minimum memorization sentence, exam answer template, pitfall |
| [比較] | pass | comparison table or structured comparison |
| [會算] | pass | formula, variable definitions, substitution example |
| [會畫] | pass | drawing order, node definitions, text diagram |
| [補充] | pass | supplemental context, usage timing, relation to core topic |
| [易混淆] | pass | wrong statement, correct recognition, exam keyword |
| [考點] | pass | exam focus, common question shape, answer keywords |
| [建議] | pass | executable study action, practice order, minimum passing line |
| [原文提醒] | pass | source reminder intent, minimum requirement, follow-up scope |
| [補充建議] | pass | supplemental suggestion, usage timing, scope boundary |
| [會做] | pass | operation steps, worked demonstration, checkpoints |
| [會寫] | pass | writable template, example, common mistakes |
| [必練] | pass | required practice type, demonstration, self-check |
| [會寫虛擬碼] | pass | input/output, pseudocode, step explanation |
| [原文考點] | pass | source intent, exam focus, answer keywords |
| [原文保留] | pass | source preservation intent and usage limits |

## Sampling Notes

| label | sampled topics | validation note |
| --- | --- | --- |
| [必背] | `cp-von-neumann-architecture`, `im-02-digital-transformation`, `algorithm-definition-and-properties` | Drafts contain definition-oriented national-exam points, memorization notes, terms, examples, pitfalls, and verifier results. |
| [比較] | `networking-osi-tcpip-models`, `database-normalization`, `programming-parameter-passing`, `sorting-algorithms-baseline` | Drafts use structured comparison language and route reviews cover decision keywords. |
| [會算] | `cp-base-conversion`, `array-addressing`, `time-complexity-big-o`, `stack-and-queue` | Drafts include formulas, substitution or complexity reasoning, and verifier status. |
| [會畫] | `networking-devices-osi`, `programming-system-analysis-uml-core-diagrams`, `graph-traversal-and-paths` | Drafts preserve drawing or diagram intent through diagram names, node roles, flow descriptions, or text-diagram guidance. |
| [會做] / [會寫] / [必練] / [會寫虛擬碼] | `linked-list-basics`, `programming-recursion`, `database-sql-crud`, `graph-traversal-and-paths` | Drafts include operation steps, writable templates or Java/pseudocode-style teaching, worked examples, and checkpoints. |
| [原文考點] / [原文提醒] / [原文保留] | `im-02-digital-transformation`, `programming-preparation-direction`, source-label auxiliary scan | Source intent is preserved in prompt scope and converted into teaching content instead of being copied verbatim. |

## Final Decision

All discovered valid source labels are defined in `_private/TMP/source-label-definitions.md`, referenced by route prompts, represented in route tracking rows, and checked through route draft/verified files.

final result: pass
