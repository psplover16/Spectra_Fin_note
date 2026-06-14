---
topic_id: "programming-recursion"
subject: "programming"
source_files:
  - "_private/程式.txt"
status: "verified"
generated_at: "2026-06-13T04:10:30+08:00"
verified_by: "content-verifier"
---

# 遞迴(Recursion)

## 來源摘要

來源「Recursion」整理 base case、recursive case、stack overflow 與 memoization 提醒。

## Java 範例

```java
int factorial(int n) {
  // 國考作答先寫終止條件，讓考官知道遞迴會停在 n=0 或 n=1。
  if (n <= 1) {
    return 1;
  }

  // 每次把問題從 n! 縮小成 (n-1)!，這就是遞迴式的作答思路。
  return n * factorial(n - 1);
}
```

## Verifier 結果

| 檢查項 | 結果 | 備註 |
|---|---|---|
| 來源對應 | pass | 對應 `_private/程式.txt` Recursion |
| Java 語意 | pass | 終止條件與縮小問題正確 |
| Java 註解 | pass | 註解說明作答思路與考官可見概念 |
| 新手可讀性 | pass | 先解釋終止條件再使用遞迴式 |

final_status: `verified`
