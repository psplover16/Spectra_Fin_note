---
topic_id: cp-memory-classification
formal_topic_id: cp-memory-classification
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Memory 分類圖(Memory Classification)

## 來源對應

- source files: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Memory 分類圖`
- source labels: [必背], [比較], [會畫]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- source section: `3a. 基本計概 / Memory 分類圖`
- topic id: `cp-memory-classification`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [比較], [會畫]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

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

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Memory 分類圖」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會畫]: 要補畫圖順序、節點或箭頭意義、文字版圖形與常見漏畫處。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
