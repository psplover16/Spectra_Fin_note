---
topic_id: cp-common-units
formal_topic_id: cp-common-units
route: /computer-principles
subject: computerPrinciples
source_file: _private/計算機概論.txt
additional_source_file: _private/discuss.txt
source_section: 3a. 基本計概 / 電腦常用單位
source_labels: [必背], [會算], [易混淆]
source_label_definitions: ../source-label-definitions.md
content_shape: lessonArticle
generated_at: "2026-06-13T11:00:00+08:00"
---

# 電腦常用單位 Prompt

## Writer Scope

- 只處理 topic id: cp-common-units
- 只讀來源：_private/計算機概論.txt 與 _private/discuss.txt
- 來源段落：3a. 基本計概 / 電腦常用單位
- 不得讀取個人筆記、_private/_private_notes/筆記.txt，或受限 done 資料夾。
- 不得直接修改 formal app data；副代理只輸出 _private/TMP/<route>/ 內的 prompt、draft、verified。

## Source Outline Input

- source file: `_private/計算機概論.txt`
- supplemental source file: `_private/discuss.txt`
- source section: `3a. 基本計概 / 電腦常用單位`
- topic id: `cp-common-units`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把 bit、bits、byte、nibble、word、KB、MB、GB、TB 整理成新手可讀的教材，並明確說明 b/B 與 Mbps/MB/s 的差異。

## Source Labels

- [必背]: 定義、核心句與考試最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。
- [易混淆]: 必須列出常見錯誤與辨認方法，特別是小寫 b 與大寫 B。

## Content Writer Instruction

- 把上方 source outline 當成寫作輸入，不得把來源條列原封不動當成教材本文。
- 讀者是假設零基礎、正在準備國家考試的新手；任何專有名詞第一次出現都要用中文(English Term) 並給定義。
- 教材本文必須依來源標記展開，補齊核心、原因、如何應用、考試作答句、易錯提醒，以及必要的公式、比較、圖形或程式碼說明。
- 必須保留一張表格，欄位為：單位、符號、中文、等於、白話理解。
- 必須說明 bits 是 bit 的英文複數，符號仍使用 b。
- 必須包含：32 bits = 32 b = 4 B = 4 bytes。
- 必須包含：Mbps 的 b 是 bit、MB/s 的 B 是 byte、1 MB/s = 8 Mbps。
- draft/verified 必須使用 lessonArticle 形狀：來源對應、來源大綱輸入、教材本文、學習標記說明、Verifier 結果。
- old fixed template removed：不得使用已廢棄的固定容器標題作為 top-level displayed blocks。
- 禁止只複製來源 bullet；來源 bullet 只能當大綱，不能當成品。

## Required Lesson Article Structure

- 來源對應：保留 source file、supplemental source file、source section、source labels。
- 來源大綱輸入：保留 source outline input，並明確說明它不是成品。
- 教材本文：依 source outline input 與 source labels 展成完整自然教材段落，段落標題保留來源標記，但內容必須是擴寫後的教學文件。
- 學習標記說明：說明本 topic 用到的標記如何讀、如何作答。
- Verifier 結果：保留 source mapping、lessonArticle shape、final_status。
- 禁止：不得產出已廢棄的固定模板標題作為內容容器。

## Topic Intent

以 電腦常用單位 為核心，教會新手先掌握 bit、byte、容量單位與網速單位差異，避免在計概與網概題目中把 b/B 或 Mbps/MB/s 混淆。
