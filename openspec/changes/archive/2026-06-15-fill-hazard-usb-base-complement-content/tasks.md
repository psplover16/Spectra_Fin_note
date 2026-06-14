## 1. Table highlight rendering contract

- [x] 1.1 Implement `Add controlled table style metadata to lessonArticle tables` by extending `LessonArticleContentBlock` so lessonArticle tables support row, column, and cell text/background emphasis without arbitrary CSS strings; verify with `npm run typecheck` and a focused type fixture or compile-time usage in tests.
- [x] 1.2 Implement `Lesson article tables support controlled highlight metadata` in `SubjectTopicPage.vue` and `src/styles/main.css` so row, column, and cell metadata render deterministic emphasis classes while unstyled tables keep existing behavior; verify with `tests/unit/SubjectTopicPage.spec.ts` assertions for styled rows, styled cells, precedence, and unknown token fallback.

## 2. Computer Principles topic content

- [x] 2.1 Implement `Keep content in professionalTopics factories rather than parsing Markdown at runtime` by adding source files, terms, lesson sections, and factory branches for `cp-hazard`, `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion`; verify `professionalTopics.spec.ts` finds each topic as one non-empty lessonArticle with matching sourceFiles.
- [x] 2.2 Implement `Computer Principles basic topics include finalized lesson articles` for `cp-hazard`, including title `管線危障(Hazard)`, definition content, three-Hazard table, normalized term list, and RAW/WAR/WAW table; verify serialized content contains expected Hazard terms and the RAW/WAR/WAW table has three columns.
- [x] 2.3 Implement `Computer Principles basic topics include finalized lesson articles` for `cp-usb-speed`, including one USB speed table whose most-tested rows use table highlight metadata, Mbps versus MB/s notes, and Type-C caveat; verify content tests assert the key speed rows and highlight metadata are present in the same table.
- [x] 2.4 Implement `Treat long conversion examples as collapsible lesson content` and `Computer Principles basic topics include finalized lesson articles` for `cp-base-conversion`, including the conversion method table and all eight long worked examples; verify examples include fractional outputs limited to 8 digits for `(450.153)10` and use `(1011110010.101)2` instead of the invalid binary input.
- [x] 2.5 Implement `Computer Principles basic topics include finalized lesson articles` for `cp-complement-conversion`, including sign-magnitude, 1's complement, 2's complement, and a notes section for 9's complement and 10's complement; verify decimal complement formulas render as plain text such as `r^n - N`.
- [x] 2.6 Implement `Markdown display instructions are normalized into app content` across the four topics so raw directives are not learner-facing; verify `professionalTopics.spec.ts` asserts the serialized four-topic content excludes `用table`, `ul/li做`, `紅色文字顏色`, and `你幫我設計顯示方式`.

## 3. Route lists and regression tests

- [x] [P] 3.1 Update route filtering expectations so `/computer-principles` includes `管線危障(Hazard)`, `USB 速度(USB Speed)`, `進制轉換(Base Conversion)`, and `補數轉換(Complement Representation)`, with topic ids ordered `cp-pipeline`, `cp-hazard`, `cp-bus` while `cp-usb-speed`, `cp-base-conversion`, and `cp-complement-conversion` remain after `cp-cache` in their existing relative order; verify `tests/unit/subjectTopics.spec.ts` passes and no placeholder fallback appears.
- [x] [P] 3.2 Update workflow and stale audit coverage so the four topic ids are treated as filled Computer Principles content with matching Markdown sourceFiles; verify `tests/unit/computerPrinciplesRouteWorkflow.spec.ts` and `tests/unit/staleProfessionalContentAudit.spec.ts` pass.
- [x] [P] 3.3 Add content review assertions for `Preserve learner-facing Markdown content while normalizing obvious input errors`, including USB4 wording, Hazard term formatting, corrected base-conversion input, and complement notes separation; verify with `tests/unit/professionalTopics.spec.ts`.

## 4. Final verification

- [x] 4.1 Run `npm run typecheck` and targeted Vitest suites covering subject topic rendering, professional topic data, route filtering, workflow, and stale audit; completion requires all commands to pass without new console errors.
- [x] 4.2 Perform a mobile-width manual review of `/computer-principles` with the four new topic cards expanded one at a time; verify Hazard appears between Pipeline and Bus, table newlines remain readable, highlighted USB rows are visible, long examples remain inside collapsible content, and offline reload still renders static topic data.
