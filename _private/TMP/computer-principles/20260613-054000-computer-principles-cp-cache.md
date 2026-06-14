---
topic_id: cp-cache
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Cache(Cache Memory)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / Cache
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [必背] L1 / L2 / L3
- L1：最靠近 CPU，最快、容量最小。
- L2：速度與容量居中。
- L3：通常多核心共享，容量較大但較慢。


### [必背] Hit Ratio
- Hit：資料在 cache 中找到。
- Miss：資料不在 cache 中，需到下一層記憶體取。
- Hit Ratio = Hit 次數 / 總存取次數。
- Miss Rate = 1 - Hit Ratio。


### [會算] AMAT
- Average Memory Access Time = Hit Time + Miss Rate * Miss Penalty。


### [比較] Write Through vs Write Back
- Write Through：寫 cache 時同步寫回主記憶體，資料一致性好，但寫入較慢。
- Write Back：先寫 cache，等區塊被替換時才寫回主記憶體，效能較好，但控制較複雜。


### [補充] 常見搭配
- Write Allocate：write miss 時把區塊載入 cache 再寫。
- No Write Allocate：write miss 時直接寫到下一層，不載入 cache。

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
