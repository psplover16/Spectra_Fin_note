---
topic_id: cp-turing-machine-and-test
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 圖靈機與圖靈測試(Turing Machine and Turing Test)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / 圖靈機與圖靈測試
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] 圖靈機
- 定義：一種抽象計算模型，用來描述「可計算」的問題。若問題可由圖靈機在有限步驟內完成，通常稱為可計算。
- 三個主要單元：
  1. 無限長紙帶：儲存輸入、輸出與中間結果。
  2. 讀寫頭：讀取目前格子的符號，並可寫入符號、向左或向右移動。
  3. 有限控制器：依目前狀態與讀到的符號決定下一步動作。
- 常見考法：問「圖靈機是否為實體機器」時，答案是抽象模型，不是一般實體電腦。


### [必背] 圖靈測試
- 定義：用來判斷機器是否展現類似人類智慧的測試。若審問者無法可靠分辨回答者是人或機器，則機器可被視為通過測試。
- 易混淆：圖靈機是計算模型；圖靈測試是人工智慧判斷方式。

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
