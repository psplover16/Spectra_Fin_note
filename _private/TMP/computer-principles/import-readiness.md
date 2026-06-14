# /computer-principles Import Readiness

- route: /computer-principles
- ready topics: 33
- prompt files: 33
- draft files: 33
- verified files: 33
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: computerPrinciples
- formal app data alignment: pass
- final readiness: ready

All topics have route tracking rows, prompt files, draft files, verified files, verifier result, and import target. Formal app data already contains the same 33 topic ids with sourceFiles and verifier metadata, including `cp-common-units`.

## Group 17 Source-Outline LessonArticle Gate

- prompt shape: pass; every topic prompt declares `content_shape: lessonArticle`, `## Source Outline Input`, and `## Content Writer Instruction`.
- draft shape: pass; every draft contains `## 來源對應`, `## 來源大綱輸入`, `## 教材本文`, `## 學習標記說明`, and `## Verifier 結果`.
- verified shape: pass; every verified file contains `final_status: verified` and keeps source outline as writer input rather than final teaching content.
- displayed block import: pass; formal app data imports only a single top-level `lessonArticle` block for each professional topic.
- stale fixed-template display blocks: 0; old sourceNote/examOutline/memoryPoints/understanding/termList/workedExample/pitfall/complexityTable/teachingCode blocks are not used as professional topic top-level blocks.
