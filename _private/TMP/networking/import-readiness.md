# /networking Import Readiness

- route: /networking
- ready topics: 11
- prompt files: 11
- draft files: 11
- verified files: 11
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: networking
- final readiness: ready

## Group 17 Source-Outline LessonArticle Gate

- prompt shape: pass; every topic prompt declares `content_shape: lessonArticle`, `## Source Outline Input`, and `## Content Writer Instruction`.
- draft shape: pass; every draft contains `## 來源對應`, `## 來源大綱輸入`, `## 教材本文`, `## 學習標記說明`, and `## Verifier 結果`.
- verified shape: pass; every verified file contains `final_status: verified` and keeps source outline as writer input rather than final teaching content.
- displayed block import: pass; formal app data imports only a single top-level `lessonArticle` block for each professional topic.
- stale fixed-template display blocks: 0; old sourceNote/examOutline/memoryPoints/understanding/termList/workedExample/pitfall/complexityTable/teachingCode blocks are not used as professional topic top-level blocks.

