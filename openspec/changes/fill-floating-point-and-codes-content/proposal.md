## Why

`/computer-principles` 目前已有 `cp-floating-point-conversion` 與 `cp-codes-and-check-codes` skeleton，但尚未把使用者整理好的十六章與十七章教材放入正式 route。現在需要把兩份 Markdown 轉成新手國考用的 app 內容，並同步處理已確認的內容校正與收闔需求。

## What Changes

- 將「浮點數轉換」與「數碼、文字碼與檢查碼」整理成正式 lessonArticle content，保留來源追蹤與國考取向。
- 讓 `/computer-principles` 顯示 `浮點數轉換(Floating-Point Conversion)` 與 `數碼、文字碼與檢查碼(Codes and Check Codes)`，順序接在 `cp-complement-conversion` 後。
- 新增 lessonArticle section-level 收闔能力，讓十七章 `考前總複習(Exam Quick Review)` 預設關閉、點選後展開。
- 匯入時清除 raw 編排指令，並依已確認結論修正 Hamming Code `P3` 為 `P4`、補足十進位小數連乘的白話步驟。
- 依使用者回饋調整十七章：`數碼、文字碼與檢查碼` 必須以原 Markdown 的內容、排版與章節編排為主，只做新手化整理、表格/清單清理與錯誤修正，不重新濃縮成另一份大綱。

## Non-Goals

- 不整理或覆寫原 Markdown 檔。
- 不新增後端、storage、route、外部依賴或 Markdown runtime parser。
- 不補 subnormal、Infinity、NaN 等超出本次國考教材範圍的 IEEE 754 內容。
- 不把所有內部 section 標題強制改為雙語；只在常考英文術語需要時保留英文。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `professional-topic-content`: 新增兩個 Computer Principles topic 的正式 lessonArticle content、terms、sourceFiles 與內容校正契約。
- `subject-topic-page`: lessonArticle section 可透過受控 metadata 設定為預設關閉並由使用者展開。
- `professional-subject-routing`: `/computer-principles` route 應包含兩個新填入的 topic，且維持既有 skeleton 順序。

## Impact

- Affected specs: professional-topic-content, subject-topic-page, professional-subject-routing
- Affected code:
  - New: none
  - Modified: src/modules/subjectTopics/types/subjectTopic.ts, src/modules/subjectTopics/components/SubjectTopicPage.vue, src/modules/subjectTopics/data/professionalTopics.ts, tests/unit/SubjectTopicPage.spec.ts, tests/unit/professionalTopics.spec.ts, tests/unit/subjectTopics.spec.ts, tests/unit/computerPrinciplesRouteWorkflow.spec.ts, tests/unit/staleProfessionalContentAudit.spec.ts, _private/TMP/computer-principles/manual-review.md
  - Removed: none
