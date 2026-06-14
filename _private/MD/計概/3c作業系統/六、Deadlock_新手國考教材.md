# Deadlock 新手國考教材

## 目錄

1. 名詞解釋
2. 核心想法
3. 具體範例
4. 國考常見考法
5. 必要比較表或易混淆整理
6. 國考答題句
7. 容易考的判斷題
8. 考前速記小抄

## 名詞解釋

### Deadlock（死結）

Deadlock 是指一組 process 彼此卡住，大家都在等待別人手上的資源，結果誰也不能繼續執行。白話來說，就是「你等我、我等你」，而且沒有外力介入時，這個等待會永遠持續下去。

在作業系統中，process 常常需要使用資源，例如印表機、檔案、記憶體區塊、磁碟機或鎖。如果資源分配順序不小心，就可能讓多個 process 形成互相等待。

### Process（行程、程序）

Process 是正在執行中的程式。程式放在硬碟上只是靜態檔案；一旦被作業系統載入並開始執行，就成為 process。

### Resource（資源）

Resource 是 process 執行時需要使用的東西。它可能是硬體資源，例如印表機；也可能是軟體資源，例如檔案鎖、資料庫鎖或記憶體中的資料結構。

### Mutual Exclusion（互斥）

Mutual Exclusion 的意思是某些資源一次只能給一個 process 使用，不能同時共享。例如同一台印表機通常不能讓兩個 process 同時列印同一份工作，否則輸出會混亂。

### Hold and Wait（持有並等待）

Hold and Wait 是指 process 已經持有某些資源，同時又繼續等待其他資源。這很危險，因為它手上的資源不釋放，其他 process 可能也因此被卡住。

### No Preemption（不可搶奪）

No Preemption 是指作業系統不能強制把某個 process 已經拿到的資源搶回來，只能等該 process 自願釋放。例如某些鎖或正在使用中的裝置，不能隨便中途被拿走。

### Circular Wait（循環等待）

Circular Wait 是指多個 process 排成一個等待圈。P1 等 P2 的資源，P2 等 P3 的資源，最後 P3 又等 P1 的資源，整個圈就卡死。

### Safe State（安全狀態）

Safe State 是指系統目前的資源配置仍然有辦法安排出一個順序，讓所有 process 都能依序完成。進入安全狀態不代表一定沒有等待，而是代表「還有解」。

### Unsafe State（不安全狀態）

Unsafe State 是指系統目前找不到保證所有 process 都能完成的安全順序。不安全狀態不一定立刻發生 deadlock，但如果後續資源請求不利，就可能走向 deadlock。

### Resource Allocation Graph（資源配置圖）

Resource Allocation Graph，常簡稱 RAG，是用圖形表示 process 與 resource 之間關係的方法。它可以幫助判斷系統是否可能發生 deadlock。

### Banker's Algorithm（銀行家演算法）

Banker's Algorithm 是一種 deadlock avoidance 方法。它會在分配資源前先試算，如果分配後系統仍有 safe sequence，才允許分配；如果會進入 unsafe state，就暫時拒絕。

### Safe Sequence（安全序列）

Safe Sequence 是一個 process 完成順序。只要照這個順序分配與回收資源，每個 process 都能完成，系統就處於 safe state。

## 核心想法

Deadlock 的核心不是「等待」本身，而是「永遠等不到」。一般等待很常見，例如 process 等待 I/O 完成；但 deadlock 的問題在於等待關係形成僵局，沒有任何 process 能先完成並釋放資源。

考試最常要求先背出定義：一組 process 互相等待對方持有的資源，導致永遠無法繼續。這句話中有三個重點：第一，是一組 process，不是單一 process 自己慢；第二，是互相等待資源；第三，是沒有外力時無法繼續。

Deadlock 發生必須同時滿足四個必要條件：

1. Mutual Exclusion：至少有某些資源不能同時共享。
2. Hold and Wait：process 持有資源時，又要求其他資源。
3. No Preemption：資源不能被系統強制搶回。
4. Circular Wait：process 之間形成循環等待。

這四個條件是「必要條件」，意思是 deadlock 如果已經發生，四個條件一定都存在；但只看到其中一兩個條件，不代表 deadlock 一定發生。國考很常在這裡設陷阱，把「必要」誤寫成「充分」。

處理 deadlock 的大方向有四種：

Deadlock Prevention 是預防。它的想法是直接破壞四個必要條件之一，讓 deadlock 從根本上不可能成立。

Deadlock Avoidance 是避免。它不是完全禁止危險條件，而是在每次分配資源前先判斷，若分配後會進入 unsafe state，就不分配。Banker's Algorithm 就是典型代表。

Deadlock Detection and Recovery 是偵測與復原。它允許 deadlock 可能發生，之後再透過偵測機制找出 deadlock，並用終止 process 或搶回資源等方式恢復。

Ignore 是忽略。某些一般系統可能認為 deadlock 發生機率低，處理成本又高，因此選擇不主動處理。這種策略常被稱為 Ostrich Algorithm。

## 具體範例

### 例子一：兩個人各拿一支筷子

假設桌上有兩支筷子，A 拿到左邊筷子，B 拿到右邊筷子。A 要等右邊筷子才能吃飯，B 要等左邊筷子才能吃飯。兩人都不願意放下手上的筷子，就會一直等下去。

對應到作業系統：

- A 和 B 就像兩個 process。
- 筷子就是 resource。
- 每支筷子一次只能被一個人使用，符合 Mutual Exclusion。
- 每個人已經拿著一支筷子，又等待另一支，符合 Hold and Wait。
- 不能強制從對方手上搶筷子，符合 No Preemption。
- A 等 B，B 等 A，符合 Circular Wait。

因為四個必要條件都成立，所以這個情況可能形成 deadlock。

### 例子二：印表機與掃描器

假設 P1 已經取得印表機，接著需要掃描器才能繼續；P2 已經取得掃描器，接著需要印表機才能繼續。

P1 等 P2 釋放掃描器，P2 等 P1 釋放印表機。若兩者都不釋放目前持有的資源，就會形成 deadlock。

這個例子常用來理解 Hold and Wait 與 Circular Wait 的差異。Hold and Wait 只強調「拿著一個，又等另一個」；Circular Wait 則強調「等待關係形成一個圈」。

### 例子三：Resource Allocation Graph

Resource Allocation Graph 通常包含兩種節點：

- Process 節點：通常用圓形表示，例如 P1、P2。
- Resource 節點：通常用方形表示，例如 R1、R2。

圖上的箭頭有兩種：

- Request Edge：由 process 指向 resource，表示 process 正在請求該資源。例如 P1 -> R1 表示 P1 想要 R1。
- Assignment Edge：由 resource 指向 process，表示 resource 已分配給該 process。例如 R1 -> P1 表示 R1 目前被 P1 持有。

若每一種 resource 都只有一個 instance，RAG 中出現 cycle 時，就代表 deadlock 發生。若某些 resource 有多個 instance，出現 cycle 只代表可能 deadlock，不能直接判定一定 deadlock。

例如：

```text
R1 -> P1
P1 -> R2
R2 -> P2
P2 -> R1
```

這表示 R1 已分配給 P1，P1 等 R2；R2 已分配給 P2，P2 等 R1。等待關係形成一個圈，因此在每種資源都只有一個 instance 時，這就是 deadlock。

### 例子四：Banker's Algorithm 基本判斷

Banker's Algorithm 會用四個常見欄位：

- Available：目前系統手上還可分配的資源數量。
- Max：每個 process 最多可能需要多少資源。
- Allocation：每個 process 目前已經拿到多少資源。
- Need：每個 process 還需要多少資源才能完成。

其中 Need 的公式很重要：

```text
Need = Max - Allocation
```

判斷 safe sequence 的基本步驟是：

1. 先看 Available 目前有多少資源。
2. 找一個 Need 小於或等於 Available 的 process。
3. 假設該 process 可以完成，完成後會釋放它的 Allocation。
4. 把釋放的 Allocation 加回 Available。
5. 重複以上步驟，若所有 process 都能完成，就有 safe sequence。
6. 若中途找不到任何 Need 小於或等於 Available 的 process，表示目前找不到 safe sequence。

簡單例子如下：

| Process | Max | Allocation | Need |
| --- | ---: | ---: | ---: |
| P1 | 7 | 5 | 2 |
| P2 | 3 | 2 | 1 |
| P3 | 4 | 1 | 3 |

假設 Available = 1。

先找 Need 小於或等於 1 的 process，P2 的 Need 是 1，所以 P2 可以先完成。P2 完成後釋放 Allocation 2，因此 Available 變成 3。

接著 P1 的 Need 是 2，可以完成。P1 完成後釋放 Allocation 5，Available 變成 8。

最後 P3 的 Need 是 3，也可以完成。因此安全序列可以是：

```text
P2 -> P1 -> P3
```

有 safe sequence，代表系統處於 safe state。

## 國考常見考法

國考常先考 deadlock 定義，要求判斷哪個敘述最符合死結。看到「一組 process 互相等待對方持有的資源，導致永遠無法繼續」就是標準方向。

第二種常考四個必要條件。題目可能問「下列何者不是 deadlock 的必要條件」，或要求從英文名詞選中文意思。Mutual Exclusion、Hold and Wait、No Preemption、Circular Wait 四個要能直接背出來。

第三種常考 prevention、avoidance、detection and recovery、ignore 的差異。Prevention 是破壞必要條件；Avoidance 是分配前先判斷安全性；Detection and Recovery 是允許發生後再處理；Ignore 是選擇不主動處理。

第四種常考 RAG。題目可能給圖，要求判斷是否 deadlock。解題時要先看每種 resource 有幾個 instance。若每種 resource 只有一個 instance，cycle 就代表 deadlock；若有多個 instance，cycle 只能代表可能 deadlock。

第五種常考 Banker's Algorithm。題目會給 Available、Max、Allocation，要求算 Need，並判斷是否存在 safe sequence。計算時不要憑感覺，要照「Need <= Available，完成後釋放 Allocation」一步一步做。

## 必要比較表或易混淆整理

### 四個必要條件整理表

| 條件 | 白話意思 | 破壞後的效果 |
| --- | --- | --- |
| Mutual Exclusion | 資源一次只能給一個 process 用 | 若資源可共享，較不會因獨占而卡住 |
| Hold and Wait | 已持有資源，又等待其他資源 | 要求 process 不能邊拿邊等，可降低僵局 |
| No Preemption | 資源不能被強制搶回 | 若可搶回資源，可打破等待 |
| Circular Wait | 等待關係形成一個圈 | 若規定資源請求順序，可避免形成循環 |

### Deadlock 處理方式比較表

| 方法 | 中文理解 | 主要做法 | 常見關鍵字 |
| --- | --- | --- | --- |
| Prevention | 預防 | 破壞四個必要條件之一 | break condition |
| Avoidance | 避免 | 分配前判斷是否仍安全 | safe state、Banker's Algorithm |
| Detection and Recovery | 偵測與復原 | 允許發生，之後偵測並恢復 | terminate、preempt、rollback |
| Ignore | 忽略 | 不主動處理低機率 deadlock | Ostrich Algorithm |

### Prevention 與 Avoidance 的差異

Prevention 比較像「制度上禁止危險情況出現」。例如規定 process 一次申請全部資源，避免 Hold and Wait。

Avoidance 比較像「每次分配前先評估風險」。它不一定禁止 process 持有資源後再申請其他資源，但會檢查這次分配是否讓系統進入 unsafe state。

所以看到「破壞四個必要條件」要想到 prevention；看到「safe state、unsafe state、Banker's Algorithm」要想到 avoidance。

### Safe State 與 Deadlock 的關係

| 狀態 | 意義 | 是否一定 deadlock |
| --- | --- | --- |
| Safe State | 找得到 safe sequence | 一定不是 deadlock |
| Unsafe State | 找不到保證完成的 safe sequence | 不一定已 deadlock |
| Deadlock | process 已互相等待且無法繼續 | 一定是不安全情況 |

Unsafe State 是國考陷阱。它不是 deadlock 的同義詞，而是「可能導致 deadlock 的危險狀態」。

### RAG 判斷重點

| 情況 | cycle 的意義 |
| --- | --- |
| 每種 resource 只有一個 instance | 有 cycle 就是 deadlock |
| 某些 resource 有多個 instance | 有 cycle 不一定 deadlock，只能說可能發生 |
| 沒有 cycle | 不會有 deadlock |

### Banker's Algorithm 欄位整理

| 欄位 | 白話意思 | 記憶方式 |
| --- | --- | --- |
| Available | 系統目前還能拿出來分配的資源 | 手上剩多少 |
| Max | process 最多總共會需要多少 | 最高需求 |
| Allocation | process 目前已經拿到多少 | 已分配 |
| Need | process 還差多少才能完成 | Need = Max - Allocation |

## 國考答題句

Deadlock 是一組 process 互相等待對方持有的資源，導致所有相關 process 永遠無法繼續執行。

Deadlock 發生的四個必要條件為 Mutual Exclusion、Hold and Wait、No Preemption、Circular Wait，四者必須同時成立。

Deadlock prevention 是透過破壞四個必要條件之一，使 deadlock 不可能發生。

Deadlock avoidance 是在資源分配前檢查系統是否仍處於 safe state，典型演算法為 Banker's Algorithm。

Deadlock detection and recovery 是允許 deadlock 發生，之後偵測並透過終止 process、搶回資源或回復狀態等方式處理。

Resource Allocation Graph 中，若每種資源只有一個 instance，圖中存在 cycle 即表示 deadlock。

Banker's Algorithm 中，Need = Max - Allocation；若能找到讓所有 process 完成的 safe sequence，則系統處於 safe state。

## 容易考的判斷題

1. Deadlock 只要有 process 等待資源就一定發生。

錯。等待資源不一定是 deadlock；deadlock 強調一組 process 互相等待，且沒有外力時永遠無法繼續。

2. Deadlock 發生時，四個必要條件一定都成立。

對。Mutual Exclusion、Hold and Wait、No Preemption、Circular Wait 是 deadlock 的四個必要條件。

3. 只要四個必要條件其中一個被破壞，就不會發生 deadlock。

對。Deadlock 必須四個條件同時成立，因此 prevention 會選擇破壞其中一個條件。

4. Unsafe State 等於 Deadlock。

錯。Unsafe State 只是找不到保證完成的 safe sequence，不代表目前一定已經 deadlock。

5. Banker's Algorithm 屬於 deadlock prevention。

錯。Banker's Algorithm 是 deadlock avoidance，因為它在分配資源前判斷是否會進入 unsafe state。

6. Resource Allocation Graph 中只要有 cycle，就一定有 deadlock。

不一定。若每種 resource 只有一個 instance，cycle 代表 deadlock；若 resource 有多個 instance，cycle 只代表可能 deadlock。

7. Deadlock detection and recovery 會完全避免 deadlock 發生。

錯。它是允許 deadlock 發生，再偵測並恢復，不是事前避免。

8. Ostrich Algorithm 是選擇忽略 deadlock 的策略。

對。某些系統可能因 deadlock 機率低或處理成本高，而選擇忽略。

9. Banker's Algorithm 判斷 safe sequence 時，process 完成後會釋放它原本持有的 Allocation。

對。完成後釋放 Allocation，Available 會增加，接著才可能讓其他 process 完成。

10. Circular Wait 指的是單一 process 等待自己的資源。

錯。Circular Wait 是多個 process 形成循環等待，例如 P1 等 P2、P2 等 P3、P3 又等 P1。

## 考前速記小抄

Deadlock 定義：一組 process 互相等待對方持有的資源，導致永遠無法繼續。

四個必要條件口訣：互持不循。

- 互：Mutual Exclusion，互斥。
- 持：Hold and Wait，持有並等待。
- 不：No Preemption，不可搶奪。
- 循：Circular Wait，循環等待。

處理方式口訣：預、避、偵復、忽。

- 預防 Prevention：破壞四條件之一。
- 避免 Avoidance：分配前檢查 safe state。
- 偵測與復原 Detection and Recovery：發生後再找出並處理。
- 忽略 Ignore：Ostrich Algorithm。

RAG 必背：

- Process -> Resource：請求資源。
- Resource -> Process：已分配資源。
- 單一 instance 有 cycle：deadlock。
- 多個 instance 有 cycle：可能 deadlock，不一定。
- 沒有 cycle：沒有 deadlock。

Banker's Algorithm 必背：

- Available：目前可用。
- Max：最多需求。
- Allocation：已分配。
- Need：還需要。
- Need = Max - Allocation。
- 找 safe sequence：Need <= Available 的 process 可以先完成，完成後釋放 Allocation。

最容易混淆的一句話：Safe State 一定不是 deadlock；Unsafe State 不一定已經 deadlock；Deadlock 一定是不安全的結果。
