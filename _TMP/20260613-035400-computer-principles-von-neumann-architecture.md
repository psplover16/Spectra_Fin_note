---
topic_id: cp-von-neumann-architecture
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: 2026-06-13T03:54:00+08:00
verified_by: content-verifier
---

# 馮紐曼架構(Von Neumann Architecture)

## source mapping

- source files: `_private/計算機概論.txt`
- source sections: `3a. 基本計概 / 一、馮紐曼架構`
- source summary: 來源整理馮紐曼架構的程式內儲、指令循序執行、五大單元、與哈佛架構比較，以及馮紐曼瓶頸與常見改善方式。

## exam outline

- 說明馮紐曼架構(Von Neumann Architecture) 的程式內儲概念。
- 辨認輸入、輸出、記憶、算術邏輯單元(ALU)、控制單元(CU) 五大單元。
- 比較馮紐曼架構與哈佛架構(Harvard Architecture) 的記憶體與匯流排配置。
- 說明馮紐曼瓶頸(Von Neumann Bottleneck) 與 cache、預取、匯流排寬度等改善方向。

## memory points

- 程式與資料都放在同一套記憶體，是程式內儲(Stored-Program) 的核心。
- CPU 通常依序取指令、解碼、執行，除非遇到跳躍或中斷。
- 馮紐曼瓶頸的關鍵不是 CPU 不會算，而是 CPU 與記憶體間資料傳輸跟不上。

## understanding notes

把 CPU 想成解題者，記憶體像資料櫃。馮紐曼架構讓「題目資料」和「解題步驟」都放在同一個資料櫃，所以設計簡單，但當解題者很快、資料櫃拿取較慢時，就會卡在等待資料，這就是馮紐曼瓶頸。

## technical terms

- 馮紐曼架構(Von Neumann Architecture)
- 哈佛架構(Harvard Architecture)
- 程式內儲(Stored-Program)
- 算術邏輯單元(Arithmetic Logic Unit)
- 控制單元(Control Unit)
- 馮紐曼瓶頸(Von Neumann Bottleneck)

## verifier result

- source mapping: verified
- issue list: none
- fix summary: 補上中英術語與初學者比喻，並確認內容未超出 `_private/計算機概論.txt` 的馮紐曼架構段落。
- final status: verified
- verifier identity: content-verifier
