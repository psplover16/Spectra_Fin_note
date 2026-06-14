---
topic_id: cp-memory-classification
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T12:20:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Memory 分類圖(Memory Classification)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: 3a. 基本計概 / Memory 分類圖
- content shape: 教材式文章 lessonArticle
- rebuild note: 已移除舊的固定六段模板，不再使用「考試大綱 / 記憶重點 / 理解說明 / 專有名詞 / 具體例子 / 易錯提醒」作為計概內容容器。

## 教材本文

### [會畫] 基本分類
- 記憶體可分為主記憶體、輔助記憶體、快取、暫存器。
- 也可分為揮發性與非揮發性。
- RAM 多為揮發性；ROM、Flash、SSD 多為非揮發性。


### [比較] ROM vs RAM

項目 | ROM | RAM
--- | --- | ---
用途 | 儲存韌體、開機程式 | 執行中程式與資料 |
斷電後資料 | 通常保留 | 通常消失 |
讀寫特性 | 以讀取為主，部分可改寫 | 可快速讀寫 |
例子 | PROM、EPROM、EEPROM、Flash ROM | DRAM、SRAM |


### [比較] DRAM vs SRAM

項目 | DRAM | SRAM
--- | --- | ---
組成 | 電容為主，需 refresh | Flip-flop，不需 refresh |
速度 | 較慢 | 較快 |
成本 | 較低 | 較高 |
密度 | 較高 | 較低 |
用途 | 主記憶體 | Cache |


### [比較] PROM / EPROM / EEPROM / Flash
- PROM：一次性燒錄。
- EPROM：可用紫外線擦除，整片擦除。
- EEPROM：可電氣擦除與改寫，可局部改寫。
- Flash：EEPROM 的延伸，以 block 為單位擦除，常見於 SSD、USB 隨身碟、記憶卡。

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
