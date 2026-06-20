# Computer Principles v2 Floating Point Content Review

change: refresh-cpv2-floating-point-content
source: _private/MD/計算機概論v2/10_浮點數轉換.md
target: cpv2-floating-point-conversion
route: /computer-principles-v2
subjectKey: computerPrinciplesV2
scope: lecture-only

## Manual Source Coverage

- 傳統表示法: pass
  - 已覆蓋「傳統（一般）浮點表示法」、尾數、指數、超額碼 excess、與 IEEE 754 的穩定差異。
- IEEE 754 公式: pass
  - 已覆蓋 `(-1)^S × 1.F × 2^(E − bias)`、Sign、Exponent、Fraction、單精度與雙精度欄位。
- 正規化流程: pass
  - 已覆蓋二進位轉換、正規化為 `1.xxxxx × 2^n`、計算 `E = n + bias`、填入 Fraction 的流程。
- 反推流程: pass
  - 已覆蓋 `1 10000001 10000000000000000000000` 反推為 `−6` 的拆欄位與計算步驟。
- 0.1 精度說明: pass
  - 已覆蓋 `0.1(10) = 0.0001100110011…(2)` 與有限 bits 只能近似表示的說明。
- 易錯陷阱: pass
  - 已覆蓋實際指數與 bias、隱含位元、小於 1 的指數、小數轉二進位、負浮點數 sign bit 等錯誤點。
- 6 題練習: pass
  - 已覆蓋練習 1 到練習 6，包含負數、反推、負指數與 IEEE 754 vs 傳統表示法對照。

## Scope Decision

- lecture-only
- 4 個選項：不適用
- 1 個正解：不適用
- 選項辨析：不適用

## Notes

- 本次不新增題庫、選擇題、正解欄位或選項辨析。
- `cpv2-floating-point-conversion` 保留既有 topic id、title、subjectKey、difficulty 與 topicType。
- 其他 12 個 `computerPrinciplesV2` topics 不在本次審查範圍內，僅需確認未被內容替換流程改動。
