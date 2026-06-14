---
topic_id: cp-common-units
formal_topic_id: cp-common-units
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
  - _private/discuss.txt
status: draft
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: pending-verifier
content_shape: lessonArticle
---

# 電腦常用單位

## 來源對應

- source files: `_private/計算機概論.txt`, `_private/discuss.txt`
- source section: `3a. 基本計概 / 電腦常用單位`
- source labels: [必背], [會算], [易混淆]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/計算機概論.txt`
- supplemental source file: `_private/discuss.txt`
- source section: `3a. 基本計概 / 電腦常用單位`
- topic id: `cp-common-units`
- route: `/computer-principles`
- import target: `computerPrinciples`
- source labels: [必背], [會算], [易混淆]
- source outline is writer input, not final teaching content.
- 寫作者必須把常用資料單位整理成表格，並補足 b/B、bits、Mbps、MB/s 的國考常見換算。

## 教材本文

### [必背] 單位速查表

| 單位 | 符號 | 中文 | 等於 | 白話理解 |
| --- | --- | --- | --- | --- |
| bit | b | 位元 | 只能是 0 或 1 | 電腦最小資料單位 |
| bits | b | 多個位元 | n bits = n 個 bit | bits 是 bit 的英文複數，題目說 32 bits，就是 32 個位元 |
| byte | B | 位元組 | 1 byte = 8 bits | 常用來表示容量 |
| nibble | - | 半位元組 | 4 bits | 比較少考，知道是半個 byte 即可 |
| word | - | 字組 | 依 CPU 架構而定 | 可能是 16、32、64 bits，不固定 |
| KB | KB | 千位元組 | 國考常用 1 KB = 2^10 bytes = 1024 bytes | 小容量 |
| MB | MB | 百萬位元組 | 國考常用 1 MB = 2^20 bytes | 約 1024 KB |
| GB | GB | 十億位元組 | 國考常用 1 GB = 2^30 bytes | 約 1024 MB |
| TB | TB | 兆位元組 | 國考常用 1 TB = 2^40 bytes | 約 1024 GB |

這張表是讀計概題目前的單位底稿。bit 是位元，是 0 或 1；byte 是位元組，常用來表示檔案或記憶體容量。bits 不是另一個單位符號，只是 bit 的英文複數，所以符號仍然是 b。看到 32 bits，意思就是 32 個 bit。

### [會算] b 與 B 的換算

- b = bit。
- B = byte。
- 1 B = 8 b。
- 32 bits = 32 b = 4 B = 4 bytes。
- 1 KB = 1024 bytes。
- 1 MB = 1024 KB。
- 1 GB = 1024 MB。

國考常見寫法會把 KB、MB、GB、TB 當成二進位容量單位處理，也就是 1 KB = 2^10 bytes = 1024 bytes。換算時先確認題目問的是 bit 還是 byte，再決定要不要除以 8。若題目問 32 bits 是幾 bytes，步驟是 32 ÷ 8 = 4，因此答案是 4 bytes。

### [易混淆] Mbps 與 MB/s

網路速度常看到 Mbps，它通常是 megabits per second，也就是每秒多少百萬位元。Mbps 的 b 是 bit，不是 byte。MB/s 的 B 是 byte，表示每秒多少百萬位元組。

- Mbps 的 b 是 bit。
- MB/s 的 B 是 byte。
- 1 MB/s = 8 Mbps。

考題常把 Mbps 和 MB/s 放在一起考。解題時先看大小寫：小寫 b 走 bit，大寫 B 走 byte。因為 1 byte = 8 bits，所以從 MB/s 換成 Mbps 要乘以 8；從 Mbps 換成 MB/s 要除以 8。

## 學習標記說明

- [必背]: 單位名稱、符號與基本定義要先背起來。
- [會算]: b/B、bits/bytes、KB/MB/GB/TB 與 Mbps/MB/s 都需要能手算。
- [易混淆]: 題目出現大小寫不同的 b/B 時，先停下來判斷單位，不要直接套容量直覺。

## Verifier 結果

- source mapping: pending
- source outline retained as writer input: pending
- lessonArticle shape: pending
- old fixed template removed: verified
- bits plural and symbol b distinction: pending
- Mbps and MB/s conversion: pending
- final_status: draft
