---
topic_id: cp-von-neumann-architecture
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 馮紐曼架構(Von Neumann Architecture)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 馮紐曼架構
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 兩大特色
- 程式內儲概念：程式與資料都存於記憶體。
- 指令循序執行：CPU 依序取指令、解碼、執行，除非遇到跳躍或中斷。


### [必背] 五大單元
- 輸入單元、輸出單元、記憶單元、算術邏輯單元（ALU）、控制單元（CU）。


### [比較] 馮紐曼架構 vs 哈佛架構
- 馮紐曼架構：程式與資料共用記憶體與匯流排，設計簡單，但容易受限於記憶體傳輸。
- 哈佛架構：程式記憶體與資料記憶體分離，可同時取指令與取資料，常見於嵌入式系統或快取設計。


### [必背] 馮紐曼瓶頸
- 定義：CPU 與記憶體之間資料傳輸速度不足，造成 CPU 等待資料。
- 解法：快取（Cache）、預取、增加匯流排寬度、提高記憶體頻寬、管線化、平行處理、改良記憶體階層。

## 學習標記說明

- [必背]：定義、核心句與國考最常出現的敘述，讀者要能直接說明。
- [比較]：把容易混淆的概念放在同一視野中比較，作答時要寫出差異理由。
- [會算]：公式與代入步驟要能照題目數字重算，不能只背結論。
- [會畫]：圖或流程要能照順序畫出，並能解釋每個節點或箭頭代表什麼。

## Verifier 結果

- source mapping: verified
- old fixed template removed: verified
- lessonArticle shape: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
