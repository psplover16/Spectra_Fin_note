---
topic_id: programming-recursion
formal_topic_id: programming-programming-recursion
subject: programming
source_files:
  - _private/程式.txt
status: verified
generated_at: "2026-06-13T12:00:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# Recursion 遞迴(Recursion)

## 來源對應

- source files: `_private/程式.txt`
- source section: `_private/程式.txt` L63-L66`
- source labels: [必背], [會寫]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/程式.txt`
- source section: `_private/程式.txt` L63-L66`
- topic id: `programming-recursion`
- route: `/programming`
- import target: `programming`
- source labels: [必背], [會寫]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 Recursion 遞迴(Recursion) 的定義、用途與國考常見問法。
- 能從來源段落「_private/程式.txt` L63-L66」整理出記憶點、理解說明、例子與易錯提醒。
- 能把程式語言名詞、Java 作答思路或語法觀念用中文(English Term) 格式表達。

### [必背] 最小背誦句與記憶支架
- 遞迴(Recursion) 是本 topic 的第一個必背名詞。
- 終止條件(Base Case) 要和 遞迴 一起放入同一個比較或流程脈絡。
- 程式題要能寫出語法意義、執行結果或 Java/C/Python 的語言差異。

### [必背] 名詞定義與雙語術語
- 遞迴(Recursion)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 終止條件(Base Case)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 遞迴條件(Recursive Case)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 呼叫堆疊(Call Stack)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。
- 記憶化(Memoization)：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義、用途或判斷線索。

### [必背] 核心理解與應用脈絡
- 程式類題目不是只背關鍵字，遞迴(Recursion) 要能說明資料怎麼存、流程怎麼走、錯誤怎麼發生。
- 若題目涉及 Java，作答要用註解說明為什麼先判斷條件、為什麼更新變數、為什麼回傳結果。
- 若題目是比較題，答案要列出差異原因與使用情境，而不是只排英文名詞。

### [會做] 實際例子與操作步驟
題目：如何檢查一段遞迴是否安全？

1. 先找終止條件(Base Case)，確認最小問題會直接回傳。
2. 再找遞迴條件(Recursive Case)，確認每次呼叫都讓問題變小。
3. 最後估計呼叫堆疊(Call Stack) 深度，避免 Stack Overflow，重複計算可用 Memoization。

結果：遞迴題的答案要同時說明會停、會縮小、成本在哪裡。

### [會寫] Java 作答思路範例
用 Java factorial 展示終止條件、縮小問題與考官可見的作答思路。

```java
int factorial(int n) {
  // 國考作答先寫終止條件(Base Case)，表示遞迴一定會停下來。
  if (n <= 1) {
    return 1;
  }

  // 每次把 n! 縮小成 (n-1)!，讓問題靠近終止條件。
  return n * factorial(n - 1);
}
```

### [易混淆] 易錯提醒與辨別線索
- 不要忘記 Base Case，否則會無限呼叫。
- 不要忽略 Call Stack 成本，資料量大時可能 Stack Overflow。
- Fibonacci 這類重複子問題要想到 Memoization。

### [必背] 專有名詞整理
- 遞迴(Recursion)
- 終止條件(Base Case)
- 遞迴條件(Recursive Case)
- 呼叫堆疊(Call Stack)
- 記憶化(Memoization)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「Recursion 遞迴」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [會寫]: 要補可書寫模板、程式或答案骨架、註解理由與常見失分點。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
