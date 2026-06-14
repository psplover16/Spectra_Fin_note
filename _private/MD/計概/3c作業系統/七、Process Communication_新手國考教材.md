# Process Communication

## 目錄

1. 名詞解釋
2. 核心想法
3. 具體範例
4. 國考常見考法
5. 必要比較表與易混淆整理
6. 國考答題句
7. 容易考的判斷題
8. 考前速記小抄

## 名詞解釋

### Process Communication

Process Communication 通常稱為「行程間通訊」或 IPC，完整名稱是 Inter-Process Communication。

白話來說，作業系統中的每個 process 都像是一個正在做事的工作單位。不同 process 預設彼此隔離，不能隨便讀寫對方的記憶體。可是實際系統常常需要多個 process 合作，例如瀏覽器、資料庫、伺服器、列印服務都可能需要交換資料。因此 IPC 就是作業系統提供的一組方法，讓 process 可以安全、有秩序地交換資料或協調工作。

### Shared Memory

Shared Memory 是「共享記憶體」。意思是作業系統安排一塊記憶體區域，讓兩個或多個 process 都能存取。

白話來說，它像是在兩個房間中間放一張共用白板，兩邊的人都能直接在上面寫資料、讀資料。因為資料不用一直經過作業系統核心轉交，所以速度通常很快。不過也因為大家都能碰同一份資料，如果沒有控制好先後順序，就可能發生資料被同時修改、結果錯亂的問題。因此 Shared Memory 常常必須搭配 Mutex、Semaphore 或 Monitor 等同步工具。

### Message Passing

Message Passing 是「訊息傳遞」。process 不直接共用同一塊記憶體，而是透過 send 與 receive 這類操作傳送訊息。

白話來說，它像是兩個人不共用白板，而是互相寄紙條。A process 把訊息交給作業系統，作業系統再把訊息交給 B process。這種方式通常比較容易保護，因為資料交換經過明確的傳送與接收介面；缺點是可能有較多系統呼叫與資料複製成本，速度通常不如 Shared Memory。

### Pipe

Pipe 是「管線」。它是一種讓同一台機器上的 process 以資料流方式通訊的 IPC 方法。

白話來說，Pipe 像一條水管，一端寫入資料，另一端讀出資料。資料通常依照寫入順序流動，很適合把一個 process 的輸出接到另一個 process 的輸入。例如命令列中的 `A | B`，常見意思就是把 A 的輸出透過 pipe 交給 B 處理。

### Socket

Socket 是「通訊端」。它可以讓 process 在同一台電腦內通訊，也可以讓不同電腦上的 process 透過網路通訊。

白話來說，Socket 像是程式的網路插座。伺服器程式開一個 socket 等待連線，客戶端程式也開一個 socket 連過去，雙方就能傳資料。國考常把 Socket 視為跨機器通訊的重要方式，但要記得它不只限於跨機器，也可以用在本機 process 間。

### RPC

RPC 是 Remote Procedure Call，中文常稱為「遠端程序呼叫」。

白話來說，RPC 的重點是讓程式呼叫遠端機器上的功能時，看起來像是在呼叫本地端函式。例如程式寫 `getUserData()`，實際上可能是透過網路請遠端伺服器執行，再把結果傳回來。RPC 會把網路傳輸、參數封裝、結果回傳等細節包起來，讓開發者用比較像一般函式呼叫的方式使用遠端服務。

### Synchronization

Synchronization 是「同步」。它不是單純傳資料，而是控制多個 process 或 thread 使用共享資源的先後順序。

白話來說，當多人同時使用同一份資料時，需要有人維持秩序，避免大家同時改同一格資料。同步工具就是用來避免 race condition、deadlock 或資料不一致等問題。

### Race Condition

Race Condition 是「競爭情況」。當多個 process 或 thread 同時存取同一份共享資料，而且最後結果取決於誰先執行、誰後執行，就可能發生 race condition。

例如兩個 process 同時把同一個帳戶餘額加 100，如果沒有同步控制，可能其中一個更新結果被覆蓋，最後只加到 100，而不是正確的 200。

### Critical Section

Critical Section 是「臨界區」。它指的是程式中會存取共享資源、必須避免多人同時進入的一段程式碼。

白話來說，臨界區像是一間只能一個人進去操作的資料房。只要有人正在裡面改資料，其他人就要等，否則資料可能被改壞。

### Mutex

Mutex 是 Mutual Exclusion 的縮寫，中文常稱為「互斥鎖」。

白話來說，Mutex 像是一把只有一支的鑰匙。要進入臨界區前必須先拿到鑰匙，離開臨界區後再把鑰匙還回去。因為同一時間只有一個 process 或 thread 能拿到鎖，所以可以保護共享資料不被同時修改。

### Semaphore

Semaphore 是「號誌」或「信號量」。它是一種用整數計數的同步工具。

白話來說，Semaphore 像是停車場剩餘車位數。如果計數值大於 0，就代表還有人可以進入；如果變成 0，後面的人就要等待。Semaphore 可用來做互斥，也可用來控制多個資源的可用數量。

常見操作有 wait 與 signal。wait 通常表示要使用資源，會讓計數值減少；signal 通常表示釋放資源，會讓計數值增加。

### Monitor

Monitor 是「監視器」或「管程」。它把共享資料與操作共享資料的方法包在一起，並在內部提供同步控制。

白話來說，Monitor 像是一個有管理員的資料櫃。使用者不能直接亂翻資料，只能透過規定好的方法操作；同時 Monitor 會控制同一時間誰能進入，讓同步管理比較集中、比較不容易寫錯。

### Producer-Consumer

Producer-Consumer 是「生產者與消費者問題」。

白話來說，Producer 負責產生資料放進緩衝區，Consumer 負責從緩衝區取出資料使用。這個問題常用來考同步，因為緩衝區滿了時 Producer 不能再放，緩衝區空了時 Consumer 不能再拿，而且放與拿都要避免同時修改緩衝區造成錯誤。

### Readers-Writers

Readers-Writers 是「讀者與寫者問題」。

白話來說，多個 reader 同時讀同一份資料通常沒有問題，因為讀取不會改資料；但 writer 會修改資料，所以 writer 寫入時，其他 reader 或 writer 通常都不能同時操作。這題常考讀寫鎖與同步策略。

### Dining Philosophers

Dining Philosophers 是「哲學家用餐問題」。

白話來說，幾位哲學家坐在桌邊，每個人需要左右兩支筷子才能吃飯。如果每個人都先拿起左邊筷子，再等待右邊筷子，就可能大家都卡住，形成 deadlock。這題常用來考資源分配、deadlock 與同步設計。

### Deadlock

Deadlock 是「死結」。意思是多個 process 彼此等待對方手上的資源，導致大家都無法繼續執行。

白話來說，A 拿著資源 1 等資源 2，B 拿著資源 2 等資源 1，兩邊都不放手，就會一直卡住。Dining Philosophers 是國考常用來說明 deadlock 的經典例子。

## 核心想法

Process Communication 的核心不是只背工具名稱，而是理解兩件事：第一，process 之間如何交換資料；第二，當它們共享資料或資源時，如何避免互相干擾。

作業系統通常把 process 隔離起來，這樣一個 process 出錯時比較不會直接破壞另一個 process。隔離帶來安全性與穩定性，但也讓合作變得需要特別機制。因此 IPC 就是「在隔離的前提下，讓 process 可以合作」。

IPC 方法大致可以分成兩種思路。第一種是共用一塊地方，例如 Shared Memory，大家直接讀寫同一份資料。這種方式速度快，但同步控制很重要。第二種是透過傳送訊息，例如 Message Passing、Pipe、Socket、RPC。這種方式資料交換比較明確，保護性通常比較好，但可能需要更多傳輸與系統管理成本。

考試時常見陷阱是把「通訊」和「同步」混在一起。通訊重點是資料怎麼傳，像 Shared Memory、Message Passing、Pipe、Socket、RPC。同步重點是先後順序怎麼控制，像 Mutex、Semaphore、Monitor。兩者常一起使用，但概念不同。

## 具體範例

### 範例一：Shared Memory 搭配 Mutex

假設有兩個 process 要共同更新一個統計數字 `count`。如果 process A 和 process B 同時讀到 `count = 10`，兩者都各自加 1 後寫回，最後可能仍然是 11，而不是 12。

如果使用 Shared Memory，`count` 可以放在共享記憶體中，兩個 process 都能快速存取。但為了避免同時修改，進入修改 `count` 的程式區段前必須先取得 Mutex。A 拿到鎖時，B 就要等；A 修改完並釋放鎖後，B 才能進入。這樣速度仍然快，也能避免 race condition。

### 範例二：Message Passing 的 send 與 receive

假設有一個訂票系統，前端 process 收到訂票要求後，不直接修改座位資料，而是把訂票訊息送給後端 process。後端 process 使用 receive 收到訊息後，再統一處理座位狀態。

這種方式的優點是資料流向清楚，前端不需要直接碰後端的內部資料。缺點是訊息傳遞可能需要複製資料或經過作業系統排程，效率可能不如直接共享記憶體。

### 範例三：Pipe 串接兩個本機程式

在命令列中，常見形式像是：

```text
programA | programB
```

這表示 `programA` 的輸出資料會透過 pipe 傳給 `programB` 當作輸入。Pipe 的特色是資料像水流一樣一段一段往前送，很適合單機上的 process 串接處理。

### 範例四：Socket 讓不同主機通訊

瀏覽器連到網站時，瀏覽器 process 和遠端伺服器 process 可以透過 socket 通訊。瀏覽器送出 HTTP request，伺服器收到後處理，再回傳 response。

Socket 的重點是它能跨越機器與網路，所以比 pipe 更常用在網路服務。不過 socket 也可以在同一台機器上用於本機 process 間通訊。

### 範例五：RPC 把遠端呼叫包成像本地呼叫

假設一個程式需要查詢遠端會員資料。如果直接用 socket，程式設計者可能要處理連線、封包、序列化、錯誤重試等細節。使用 RPC 時，程式可能看起來只是呼叫：

```text
getMemberProfile(memberId)
```

實際上 RPC 系統會把 `memberId` 包成訊息送到遠端服務，遠端執行後再把結果回傳。國考若問 RPC 的精神，可以答：「讓遠端程序呼叫看起來像本地程序呼叫」。

## 國考常見考法

### 考法一：問 IPC 的目的

常見問法是：「為什麼需要 IPC？」或「IPC 的功能為何？」

答題時要抓住關鍵：process 彼此隔離，但仍需要交換資料與協調工作。因此 IPC 提供受控方式讓 process 溝通，並可搭配同步機制維持資料一致性。

### 考法二：比較 Shared Memory 與 Message Passing

這是最常見的基本題。Shared Memory 通常速度較快，因為資料可直接放在共享區域中存取；但缺點是同步控制較麻煩。Message Passing 透過 send 與 receive 傳資料，保護與模組化通常較容易；但可能有系統呼叫、訊息複製或傳輸成本。

國考若要求「哪個快」，通常選 Shared Memory；若要求「哪個較容易保護或適合分散式系統」，通常偏向 Message Passing 或 Socket。

### 考法三：辨認 Pipe、Socket、RPC 的使用情境

Pipe 常見於同一台機器上的 process 資料流，尤其是命令列程式串接。Socket 常見於本機或跨機器 process 通訊，特別是網路服務。RPC 則是把遠端功能包裝成像本地函式呼叫，重點在「呼叫形式」與「封裝網路細節」。

### 考法四：同步工具差異

Mutex 強調互斥，同一時間通常只允許一個執行單位進入臨界區。Semaphore 是計數型工具，可表示多個資源數量，也可以用二元 semaphore 達到類似 mutex 的效果。Monitor 則是較高階的封裝，把共享資料和同步操作集中管理。

### 考法五：經典同步問題

Producer-Consumer 常考緩衝區空與滿，以及 producer、consumer 的同步。Readers-Writers 常考多讀可並行、寫入需互斥。Dining Philosophers 常考死結發生原因與避免策略。

## 必要比較表與易混淆整理

### IPC 方法比較

| 方法 | 白話理解 | 常見用途 | 優點 | 注意事項 |
|---|---|---|---|---|
| Shared Memory | 多個 process 共用同一塊記憶體 | 大量資料交換、高效率本機通訊 | 速度快 | 必須搭配同步，否則容易 race condition |
| Message Passing | 用 send/receive 傳訊息 | process 間明確交換資料 | 較容易保護與模組化 | 可能有系統呼叫或資料複製成本 |
| Pipe | 像水管一樣傳資料流 | 單機 process 串接 | 簡單、適合串流資料 | 通常偏向本機通訊 |
| Socket | 程式的通訊端 | 本機或跨機器網路通訊 | 可跨網路、用途廣 | 需處理連線與通訊協定 |
| RPC | 遠端呼叫看起來像本地呼叫 | 分散式系統、微服務 | 隱藏通訊細節，使用方便 | 遠端失敗、延遲與網路錯誤仍然存在 |

### 同步工具比較

| 工具 | 白話理解 | 主要功能 | 常見考點 |
|---|---|---|---|
| Mutex | 一把鑰匙 | 保證同一時間只有一人進入臨界區 | 互斥、保護共享資料 |
| Semaphore | 計數器 | 控制可用資源數量或執行順序 | wait/signal、計數型同步 |
| Monitor | 有管理員的資料櫃 | 封裝共享資料與同步方法 | 較高階同步抽象 |

### Shared Memory 和 Message Passing 易混淆

| 比較點 | Shared Memory | Message Passing |
|---|---|---|
| 資料放哪裡 | 放在共享記憶體區 | 透過訊息在 process 間傳遞 |
| 速度 | 通常較快 | 通常較慢一些 |
| 保護性 | 需要小心同步與權限 | 透過介面傳送，較容易控制 |
| 常見風險 | race condition | 訊息遺失、阻塞、傳輸成本 |
| 國考關鍵字 | 快、共享區、需同步 | send/receive、保護、分散式 |

### Mutex 和 Semaphore 易混淆

Mutex 主要是互斥鎖，重點是「誰拿到鎖，誰進入臨界區」。Semaphore 是計數型同步工具，重點是「目前還有幾個資源可用」。

如果只有一個資源，Semaphore 的計數值可以設為 1，效果看起來像 Mutex，因此國考容易混淆。但概念上 Mutex 更強調所有權與互斥，Semaphore 更強調計數與資源數量。

### 三個經典問題整理

| 經典問題 | 問題核心 | 容易考的關鍵 |
|---|---|---|
| Producer-Consumer | 生產資料與消費資料共用緩衝區 | 空不能取、滿不能放、存取緩衝區需互斥 |
| Readers-Writers | 多人讀與有人寫同一份資料 | 多讀可並行，寫入需互斥 |
| Dining Philosophers | 多個 process 競爭有限資源 | 可能發生 deadlock，需要避免循環等待 |

## 國考答題句

1. IPC 是作業系統提供給不同 process 交換資料與協調工作的機制。
2. Shared Memory 透過共享記憶體區交換資料，速度快，但必須搭配同步機制避免 race condition。
3. Message Passing 透過 send 與 receive 傳遞訊息，較容易保護，但可能有系統呼叫與資料傳輸成本。
4. Pipe 適合單機 process 間的資料流通訊，常用於把一個程式的輸出接到另一個程式的輸入。
5. Socket 可用於本機或跨機器的 process 通訊，是網路程式常見的通訊方式。
6. RPC 讓遠端程序呼叫看起來像本地程序呼叫，封裝了遠端通訊細節。
7. Mutex 用來達成互斥，保護臨界區同一時間只被一個執行單位使用。
8. Semaphore 是計數型同步工具，可用來控制多個資源的使用數量或協調執行順序。
9. Monitor 將共享資料與同步操作封裝在一起，是較高階的同步機制。
10. Producer-Consumer、Readers-Writers、Dining Philosophers 是常見同步與死結考題。

## 容易考的判斷題

1. Shared Memory 一定比 Message Passing 安全。
   答：錯。Shared Memory 速度通常較快，但如果缺乏同步與權限控制，容易造成資料競爭。

2. Message Passing 通常使用 send 與 receive 進行通訊。
   答：對。這是 Message Passing 的典型操作方式。

3. Pipe 主要用於 process 間資料流通訊。
   答：對。Pipe 像資料管線，一端寫入，另一端讀出。

4. Socket 只能用於不同電腦之間的通訊。
   答：錯。Socket 可以用於跨機器通訊，也可以用於同一台機器上的 process 通訊。

5. RPC 的特色是讓遠端程序呼叫看起來像本地程序呼叫。
   答：對。這是 RPC 最重要的概念。

6. Mutex 可用來保護 critical section。
   答：對。Mutex 讓同一時間通常只有一個執行單位進入臨界區。

7. Semaphore 一定只能讓一個 process 進入臨界區。
   答：錯。Semaphore 是計數型工具，若計數值大於 1，可以允許多個執行單位使用多個資源。

8. Monitor 是把共享資料與同步操作封裝起來的機制。
   答：對。Monitor 的重點是封裝與較高階的同步管理。

9. Readers-Writers 問題中，多個 reader 同時讀取通常不會破壞資料。
   答：對。讀取不修改資料，因此多個 reader 通常可以並行；但 writer 寫入時需要互斥。

10. Dining Philosophers 問題常用來討論 deadlock。
    答：對。如果每位哲學家都持有一部分資源並等待另一部分，就可能形成死結。

## 考前速記小抄

IPC 先記一句話：process 預設隔離，IPC 負責讓它們受控地溝通。

Shared Memory：快，但要同步。看到「最快」「共享區」「大量資料」常想到它；看到「race condition」也要想到它需要 Mutex、Semaphore 或 Monitor 保護。

Message Passing：send/receive。看到「訊息」「保護」「分散式」「不直接共享記憶體」常想到它。

Pipe：單機資料流。看到命令列串接、前一個程式輸出變下一個程式輸入，通常想到 pipe。

Socket：通訊端。看到網路、client-server、跨機器 process 通訊，通常想到 socket。記得 socket 也能本機使用。

RPC：遠端像本地。看到「遠端程序呼叫」「像呼叫本地函式」「封裝網路細節」，就是 RPC。

Mutex：一把鑰匙，重點是互斥。

Semaphore：一個計數器，重點是資源數量與 wait/signal。

Monitor：資料加方法加同步，重點是封裝。

Producer-Consumer：滿了不能放，空了不能拿，改緩衝區要互斥。

Readers-Writers：讀讀可並行，寫入要互斥。

Dining Philosophers：拿資源等待資源，容易考 deadlock。

