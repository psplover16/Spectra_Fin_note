---
topic_id: cp-common-units
formal_topic_id: cp-common-units
subject: computerPrinciples
source_files:
  - _private/計算機概論.txt
  - _private/discuss.txt
status: verified
generated_at: "2026-06-13T11:00:00+08:00"
verified_by: content-verifier
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

### [會算] b 與 B 的換算

b = bit，B = byte，1 B = 8 b。32 bits = 32 b = 4 B = 4 bytes。國考常見寫法會把 KB、MB、GB、TB 當成二進位容量單位處理：1 KB = 1024 bytes，1 MB = 1024 KB，1 GB = 1024 MB。

### [易混淆] Mbps 與 MB/s

Mbps 的 b 是 bit，MB/s 的 B 是 byte。因為 1 byte = 8 bits，所以 1 MB/s = 8 Mbps。解題時先看大小寫，再決定乘以 8 或除以 8。

## 學習標記說明

- [必背]: 單位名稱、符號與基本定義要先背起來。
- [會算]: b/B、bits/bytes、KB/MB/GB/TB 與 Mbps/MB/s 都需要能手算。
- [易混淆]: 題目出現大小寫不同的 b/B 時，先停下來判斷單位。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bits plural and symbol b distinction: verified
- Mbps and MB/s conversion: verified
- final_status: verified
