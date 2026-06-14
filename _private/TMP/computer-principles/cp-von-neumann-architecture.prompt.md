---
topic_id: cp-von-neumann-architecture
formal_topic_id: cp-von-neumann-architecture
route: /computer-principles
subject: computerPrinciples
source_file: _private/計算機概論.txt
source_section: 3a. 基本計概 / 馮紐曼架構
source_labels: [必背], [比較]
source_label_definitions: ../source-label-definitions.md
content_shape: lessonArticle
generated_at: "2026-06-13T11:00:00+08:00"
---

# 馮紐曼架構 Prompt

## Writer Scope

- 只處理 topic id: cp-von-neumann-architecture
- 只讀來源：_private/計算機概論.txt
- 來源段落：3a. 基本計概 / 馮紐曼架構
- 不得讀取個人筆記、_private/_private_notes/筆記.txt，或受限 done 資料夾。
- 不得直接修改 formal app data；副代理只輸出 _private/TMP/<route>/ 內的 prompt、draft、verified。

## Source Outline Input

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / 馮紐曼架構`
- topic id: `cp-von-neumann-architecture`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、雙語術語、核心觀念、應用情境、作答方式、易錯點與必要圖表或公式。


以下內容是本 topic 的來源大綱，也是內容生成副代理的 prompt input。它不是可直接匯入正式 app 的教材成品；副代理必須以新手國考讀者為對象，將每個名詞補定義、補中英文、補核心概念、補應用方式、補考場辨認與易錯點。

```markdown
[必背] 兩大特色
- 程式內儲概念：程式與資料都存於記憶體。
- 指令循序執行：CPU 依序取指令、解碼、執行，除非遇到跳躍或中斷。

[必背] 五大單元
- 輸入單元、輸出單元、記憶單元、算術邏輯單元（ALU）、控制單元（CU）。

[比較] 馮紐曼架構 vs 哈佛架構
- 馮紐曼架構：程式與資料共用記憶體與匯流排，設計簡單，但容易受限於記憶體傳輸。
- 哈佛架構：程式記憶體與資料記憶體分離，可同時取指令與取資料，常見於嵌入式系統或快取設計。

[必背] 馮紐曼瓶頸
- 定義：CPU 與記憶體之間資料傳輸速度不足，造成 CPU 等待資料。
- 解法：快取（Cache）、預取、增加匯流排寬度、提高記憶體頻寬、管線化、平行處理、改良記憶體階層。
```

## Source Labels

- [必背]: 定義、核心句與考試最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。

## Content Writer Instruction

- 把上方 source outline 當成寫作輸入，不得把來源條列原封不動當成教材本文。
- 讀者是假設零基礎、正在準備國家考試的新手；任何專有名詞第一次出現都要用中文(English Term) 並給定義。
- 教材本文必須依來源標記展開，補齊核心、原因、如何應用、考試作答句、易錯提醒，以及必要的公式、比較、圖形或程式碼說明。
- 每個 [必背] 段落都必須包含定義、為什麼重要、國考怎麼寫、易錯點與最小背誦句。
- 每個 [比較] 段落都必須包含比較表、差異原因、判斷重點與常見錯誤。
- draft/verified 必須使用 lessonArticle 形狀：來源對應、來源大綱輸入、教材本文、學習標記說明、Verifier 結果。
- old fixed template removed：不得使用已廢棄的固定容器標題作為 top-level displayed blocks。
- 禁止只複製來源 bullet；來源 bullet 只能當大綱，不能當成品。

## Required Lesson Article Structure

- 來源對應：保留 source file、source section、source labels。
- 來源大綱輸入：保留 source outline input，並明確說明它不是成品。
- 教材本文：依 source outline input 與 source labels 展成完整自然教材段落，段落標題保留來源標記，但內容必須是擴寫後的教學文件。
- 學習標記說明：說明本 topic 用到的標記如何讀、如何作答。
- Verifier 結果：保留 source mapping、lessonArticle shape、final_status。
- 禁止：不得產出已廢棄的固定模板標題作為內容容器。

## Topic Intent

以 馮紐曼架構 為核心，教會新手理解來源段落的定義、雙語術語、核心原理、應用情境、考場辨認法與易錯差異。
