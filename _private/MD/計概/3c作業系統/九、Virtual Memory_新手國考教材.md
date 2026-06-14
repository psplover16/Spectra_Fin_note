# Virtual Memory 新手國考教材

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

### Virtual Memory（虛擬記憶體）

Virtual Memory 是作業系統提供的一種記憶體管理技術。白話來說，程式會以為自己擁有一大段連續且很大的記憶體空間，但實際上只有一部分資料真的放在主記憶體中，其他暫時不用的部分可以放在磁碟。

它的重點不是「真的把主記憶體變大」，而是讓程式的位址空間可以大於實體記憶體，並透過作業系統在磁碟與主記憶體之間搬移頁面，製造出好像記憶體很大的效果。

### Main Memory（主記憶體）

Main Memory 通常指 RAM，是 CPU 可以直接透過記憶體存取指令使用的地方。它速度快，但容量比磁碟小，而且價格較高。

### Disk（磁碟、輔助儲存體）

Disk 是容量較大但速度較慢的儲存裝置。Virtual Memory 會把暫時沒有放在主記憶體的頁面存放在磁碟中，需要時再載入。

### Address Space（位址空間）

Address Space 是程式看見的可用位址範圍。程式使用的是虛擬位址，不一定直接等於實體記憶體中的位置。

### Page（頁）

Page 是虛擬記憶體切割後的固定大小區塊。可以把一個程式的虛擬位址空間想成一本書，Page 就像書中的一頁。

### Frame（頁框）

Frame 是主記憶體切割後的固定大小區塊。Page 是虛擬位址空間中的區塊，Frame 是實體記憶體中的位置。Page 要被執行或存取時，必須載入某個 Frame。

### Page Table（頁表）

Page Table 是記錄「虛擬頁面對應到哪個實體頁框」的表。CPU 產生虛擬位址後，硬體與作業系統會查 Page Table，找出真正的實體記憶體位置。

Page Table 通常也會記錄一些控制資訊，例如這個頁面目前是否在主記憶體中、是否被修改過、是否最近被使用過。

### Valid Bit / Invalid Bit（有效位元 / 無效位元）

Valid Bit 用來表示某個頁面目前是否能合法地被存取，或是否已經在主記憶體中。國考題目常用它判斷是否會產生 Page Fault。

若某頁面不在主記憶體中，存取時就需要由作業系統介入，把頁面從磁碟載入。

### Demand Paging（需求分頁）

Demand Paging 是「需要用到頁面時才載入」的策略。程式一開始不必把所有頁面都放進主記憶體，只有當程式真的存取某個頁面，而該頁面還不在主記憶體中時，才把它從磁碟載入。

它的好處是節省主記憶體、讓更多程式可以同時執行；缺點是第一次存取未載入頁面時會發生 Page Fault，速度會明顯變慢。

### Page Fault（缺頁中斷、頁面錯失）

Page Fault 是指程式存取的頁面不在主記憶體中，因此 CPU 不能直接完成存取，必須交給作業系統把該頁面從磁碟載入主記憶體。

Page Fault 不一定代表程式錯誤。若存取的是合法頁面，只是頁面暫時在磁碟中，作業系統可以載入後繼續執行；若存取的是非法位址，才會造成真正的存取錯誤。

### Page Fault Ratio（缺頁率）

Page Fault Ratio 通常用 `p` 表示，意思是在所有記憶體存取中，有多少比例會發生 Page Fault。

例如 `p = 0.001` 表示每 1000 次記憶體存取大約有 1 次 Page Fault。雖然看起來很小，但因為磁碟 I/O 非常慢，所以對整體效能影響很大。

### EAT（Effective Memory Access Time，有效記憶體存取時間）

EAT 是平均一次記憶體存取真正花掉的時間。它會把一般記憶體存取時間與 Page Fault 處理時間依比例加權。

沒有 TLB 的基本公式是：

```text
EAT = (1 - p) * memory access time + p * page fault service time
```

其中 `p` 是 Page Fault Ratio。因為 page fault service time 通常比 memory access time 大非常多，所以 `p` 只要稍微增加，EAT 就會大幅上升。

### TLB（Translation Lookaside Buffer，轉譯快取）

TLB 是用來加速位址轉換的小型高速快取。它記錄最近用過的虛擬頁面到實體頁框的對應關係。

如果 TLB 命中，就不用慢慢查 Page Table；如果 TLB 未命中，仍可能只是轉譯資料不在 TLB 中，不代表一定發生 Page Fault。

### Locality（區域性）

Locality 是程式執行時常出現的特性：最近用過的資料或指令，很可能很快又會再用到；相鄰位置的資料，也常一起被使用。

Virtual Memory 能有效運作，就是因為程式通常有 locality。若程式存取頁面非常分散，Page Fault 會變多。

### Working Set（工作集合）

Working Set 是一個 process 在最近一段時間內常用的頁面集合。白話來說，就是這個程式目前真正需要放在主記憶體中的那一批頁面。

如果分配給 process 的 frame 數量小於 working set 大小，程式會一直缺頁、一直換頁，容易造成 thrashing。

### Page Replacement（頁面置換）

Page Replacement 是當主記憶體沒有空的 frame 時，作業系統必須選一個頁面換出去，才能把新的頁面載入。

不同置換演算法會選不同的犧牲頁面，Page Fault 次數也會不同。國考常考 FIFO、OPT、LRU、LFU、Clock / Second Chance。

### Reference Bit（參考位元）

Reference Bit 用來記錄某頁面最近是否被使用過。Clock / Second Chance 演算法會利用它判斷頁面是否該再給一次機會。

### Dirty Bit（修改位元）

Dirty Bit 用來記錄某頁面載入主記憶體後是否被修改過。若要換出的頁面是 dirty，就必須先寫回磁碟；若沒有被修改，可以直接丟棄，因為磁碟中已有原本內容。

### Thrashing（系統顛簸、抖動）

Thrashing 是指系統花大量時間處理 Page Fault 與頁面交換，真正執行程式的時間很少。

它通常發生在同時執行的程式太多，導致每個 process 分到的 frame 不足，Page Fault 不斷增加，CPU utilization 反而下降。

## 核心想法

Virtual Memory 的核心是「讓程式看到虛擬位址，讓作業系統與硬體負責對應到實體記憶體」。程式不需要知道自己的頁面到底放在 RAM 還是磁碟；它只要照常使用位址。若頁面在主記憶體中，就直接存取；若不在，就發生 Page Fault，由作業系統處理。

Demand Paging 讓系統不必一開始就把整個程式載入主記憶體。這很重要，因為很多程式雖然很大，但一次執行時真正會用到的頁面可能只有一小部分。例如一個文字處理軟體可能有列印、拼字檢查、匯出檔案等功能，但使用者一開始打字時不一定會用到全部功能。

Page Fault 的成本很高，因為它通常牽涉到磁碟 I/O、選擇要換出的頁面、可能寫回 dirty page、載入新頁面、更新 Page Table，最後再重新執行造成缺頁的指令。因此 Virtual Memory 的效率不只看「有沒有支援」，更要看 Page Fault Ratio 是否夠低。

Page Replacement 的任務，是在主記憶體空間不足時選出一個比較適合被換出去的頁面。好的演算法會盡量保留近期或未來可能會再用到的頁面，降低 Page Fault 次數。

Thrashing 則是 Virtual Memory 管理失控時的典型現象。當 process 太多、每個 process 的 frame 太少時，程式會不斷發生 Page Fault；CPU 等待磁碟 I/O，CPU utilization 下降；系統若誤以為 CPU 太閒而再增加 process，反而會讓情況更嚴重。

## 具體範例

### 範例一：用書桌理解 Virtual Memory

可以把磁碟想成書櫃，主記憶體想成書桌，程式需要的頁面像書本中的頁。

書櫃容量很大，但拿取比較慢；書桌空間小，但使用很快。你不會把整個書櫃搬到桌上，而是把目前需要看的幾頁放在桌上。當需要新的頁面時，如果桌上沒有，就去書櫃拿；如果桌上滿了，就必須把某些頁面收回去。

這個「需要才拿」就是 Demand Paging；「要用的頁面不在桌上」就是 Page Fault；「桌上滿了要選一頁收回去」就是 Page Replacement。

### 範例二：Page Fault 的處理流程

當程式存取某個頁面，但該頁面不在主記憶體中，通常會經過以下流程：

1. CPU 產生虛擬位址，硬體查 Page Table。
2. 發現該頁面不在主記憶體中，產生 Page Fault。
3. 作業系統接手，先檢查這是不是合法存取。
4. 若存取非法，程式可能被終止。
5. 若存取合法，作業系統尋找空的 frame。
6. 若沒有空 frame，就用 Page Replacement 演算法選一個 victim page。
7. 若 victim page 的 Dirty Bit 為 1，必須先寫回磁碟。
8. 從磁碟把需要的 page 載入 frame。
9. 更新 Page Table 與相關控制資訊。
10. 重新執行原本造成 Page Fault 的指令。

考試要注意：Page Fault 是一種 trap / interrupt 類型的事件，會讓作業系統介入處理。

### 範例三：EAT 基本計算

假設：

- memory access time = `100 ns`
- page fault service time = `10 ms`
- page fault ratio `p = 0.001`

先把單位統一：

```text
10 ms = 10,000,000 ns
```

代入公式：

```text
EAT = (1 - p) * memory access time + p * page fault service time
EAT = (1 - 0.001) * 100 + 0.001 * 10,000,000
EAT = 0.999 * 100 + 10,000
EAT = 99.9 + 10,000
EAT = 10,099.9 ns
```

雖然缺頁率只有 `0.1%`，但平均存取時間從 `100 ns` 變成約 `10,099.9 ns`，慢了非常多。這就是國考常強調 Page Fault Ratio 對效能影響很大的原因。

### 範例四：有 TLB 時的 EAT 思路

若題目給：

- TLB access time = `10 ns`
- memory access time = `100 ns`
- TLB hit ratio = `0.9`
- 暫時不考慮 Page Fault

TLB hit 時：

```text
10 ns + 100 ns = 110 ns
```

TLB miss 時，通常要先查 Page Table，再存取真正資料。若題目假設 Page Table 在 memory 中，則：

```text
10 ns + 100 ns + 100 ns = 210 ns
```

所以：

```text
EAT = 0.9 * 110 + 0.1 * 210
EAT = 99 + 21
EAT = 120 ns
```

如果題目同時給 Page Fault Ratio，就要再把 Page Fault 的情況加權進來。常見寫法是先算「沒有 page fault 時的一般平均存取時間」，再與 page fault service time 加權：

```text
EAT = (1 - p) * 一般平均存取時間 + p * page fault service time
```

但要特別注意題目定義。有些題目會把 page fault service time 寫成已包含記憶體存取與更新成本，有些題目則要求另外加上。國考計算題最重要的是先看清楚單位與題目對時間項目的定義。

### 範例五：Page Replacement 的直覺差異

假設目前主記憶體有 3 個 frame，內容是：

```text
[1, 2, 3]
```

接著參考字串曾經出現：

```text
1, 2, 3, 1
```

現在要存取 page `4`，但 frame 已滿，所以要換出一個頁面。

FIFO 只看誰最早進來。因為 `1` 最早被載入，所以 FIFO 可能換出 `1`，即使 `1` 剛剛才被使用過。

LRU 會看誰最久沒被使用。剛剛才使用過的是 `1`，比較久沒用的是 `2`，所以 LRU 會傾向換出 `2`。

OPT 會看未來誰最晚才會再用到。它理論上 Page Fault 次數最少，但因為實際執行時無法預知未來，所以主要作為比較基準。

## 國考常見考法

### 考法一：問 Virtual Memory 的定義

常見題型會問 Virtual Memory 的主要目的或特性。答題重點是：讓程式使用比實體記憶體更大的虛擬位址空間，並透過磁碟與主記憶體之間的頁面交換來達成。

不要回答成「讓 RAM 實際變大」。Virtual Memory 是抽象與管理機制，不是硬體容量真的增加。

### 考法二：問 Demand Paging 與 Page Fault

Demand Paging 的關鍵句是「需要時才載入」。Page Fault 的關鍵句是「要存取的頁面不在主記憶體」。

考題常故意把 Page Fault 說成程式錯誤，這不一定正確。合法頁面只是目前不在記憶體中，也會造成 Page Fault，但作業系統可以載入後繼續執行。

### 考法三：問影響 Page Fault Ratio 的因素

常見因素包括：

- 分配給 process 的 frame 數量。
- Page Replacement Algorithm 的選擇。
- 程式的 locality 好不好。
- Working Set 大小。
- Page Size 大小。

一般而言，frame 越足夠，Page Fault 越少；locality 越好，Page Fault 越少；working set 若放得下，系統較穩定。但要記得 FIFO 可能出現 Belady's anomaly，因此不是所有演算法都保證 frame 增加時 Page Fault 一定減少。

### 考法四：考 EAT 計算

EAT 題目一定要先做三件事：

1. 確認 `p` 是多少。
2. 確認各時間單位是否一致。
3. 確認 page fault service time 是否已包含其他存取時間。

沒有 TLB 時，最基本公式是：

```text
EAT = (1 - p) * memory access time + p * page fault service time
```

有 TLB 時，通常先依 TLB hit ratio 算出一般存取的平均時間，再把 Page Fault 加權進去。若題目有特殊說明，依題目條件調整。

### 考法五：考 Page Replacement 演算法

國考常要你依參考字串與 frame 數量，算出 FIFO、OPT、LRU 等演算法各自的 Page Fault 次數。

計算時要逐格追蹤 frame 狀態。遇到頁面已在 frame 中就是 hit，不增加 Page Fault；遇到頁面不在 frame 中就是 fault。若 frame 還沒滿，直接放入；若 frame 已滿，就依演算法選 victim page。

### 考法六：考 Belady's Anomaly

Belady's Anomaly 是指在某些 Page Replacement 演算法中，增加 frame 數量反而造成 Page Fault 次數增加的異常現象。

最常考的是 FIFO 可能發生 Belady's Anomaly。OPT 與 LRU 屬於 stack algorithm，不會發生 Belady's Anomaly。

### 考法七：考 Thrashing 的原因與解法

Thrashing 的典型因果鏈是：

```text
multiprogramming 過高
→ 每個 process 分到的 frame 不足
→ Page Fault 增加
→ 系統忙著換頁，CPU utilization 下降
→ 系統可能誤以為 process 不夠
→ 又加入更多 process
→ frame 更不足
→ thrashing 更嚴重
```

常見解法包括降低 multiprogramming、增加實體記憶體、使用 working set model、使用 page fault frequency control。

## 必要比較表與易混淆整理

### Page 與 Frame

| 名詞 | 白話意思 | 屬於哪裡 | 重點 |
|---|---|---|---|
| Page | 虛擬記憶體切成的固定大小區塊 | 虛擬位址空間 | 程式以 page 為單位被管理 |
| Frame | 主記憶體切成的固定大小區塊 | 實體記憶體 | page 要載入 frame 才能被 CPU 快速存取 |

容易混淆的地方是：Page 是程式看見的虛擬區塊，Frame 是 RAM 中真正存放資料的位置。兩者大小通常相同，才能方便對應。

### Demand Paging 與一般載入

| 項目 | Demand Paging | 一開始全部載入 |
|---|---|---|
| 載入時機 | 用到才載入 | 程式開始前盡量載入 |
| 主記憶體使用 | 較省 | 較浪費 |
| 啟動速度 | 通常較快 | 可能較慢 |
| 風險 | 執行中可能發生 Page Fault | 一開始需要較多記憶體 |

Demand Paging 適合搭配 locality。若程式一段時間內只集中使用少數頁面，就不需要把所有頁面都放進主記憶體。

### Page Fault 與 TLB Miss

| 項目 | Page Fault | TLB Miss |
|---|---|---|
| 發生原因 | 頁面不在主記憶體中 | 位址轉譯資訊不在 TLB 中 |
| 是否一定要讀磁碟 | 通常需要 | 不一定 |
| 是否一定很慢 | 很慢，因為可能有磁碟 I/O | 比 TLB hit 慢，但通常比 Page Fault 快很多 |
| 作業系統是否介入 | 通常會 | 視架構而定，可能由硬體或 OS 處理 |

重點句：TLB miss 不等於 Page Fault。TLB miss 可能只是快取沒有對應資料，但頁面仍然在主記憶體中。

### Page Replacement 演算法比較

| 演算法 | 選誰換出 | 優點 | 缺點 | 國考關鍵 |
|---|---|---|---|---|
| FIFO | 最早進入記憶體的頁面 | 簡單 | 可能換掉常用頁面 | 可能有 Belady's anomaly |
| OPT | 未來最晚才會再用到的頁面 | Page Fault 次數理論最少 | 實務上無法預知未來 | 常作比較基準 |
| LRU | 最久沒有被使用的頁面 | 符合 locality | 精準實作成本高 | 不會有 Belady's anomaly |
| LFU | 使用次數最少的頁面 | 反映長期使用頻率 | 舊資料可能因累積次數高而不易被換掉 | 要注意 tie-break |
| Clock / Second Chance | 依 FIFO 順序檢查，但 reference bit 為 1 先給第二次機會 | 比 LRU 便宜，效果常較 FIFO 好 | 只是近似，不是精準 LRU | 使用 reference bit |

### FIFO、LRU、OPT 的易混淆點

FIFO 看「進來的時間」，不管最近有沒有被用過。LRU 看「最近使用時間」，不管誰先進來。OPT 看「未來使用時間」，所以理論最佳但實務不可行。

如果題目要求計算 Page Fault 次數，最容易錯的是把 FIFO 誤算成 LRU。只要記得 FIFO 的隊伍順序不會因為 hit 而改變；LRU 則會因為 hit 而更新最近使用狀態。

### 影響 Page Fault Ratio 的因素整理

| 因素 | 如何影響 |
|---|---|
| Frame 數量 | frame 越不足，越容易缺頁；但 FIFO 有 Belady's anomaly 例外 |
| Page Replacement Algorithm | 演算法越能保留將來會用到的頁面，Page Fault 越少 |
| Locality | locality 好，程式集中使用少數頁面，Page Fault 較少 |
| Working Set 大小 | working set 若大於可用 frame，容易頻繁缺頁 |
| Page Size | 太小可能頁數多、管理成本高；太大可能載入用不到的資料並增加內部碎裂 |

Page Size 的影響常不是單向絕對答案。頁面變大可能減少 page table entries，也可能因為一次載入更多相鄰資料而降低某些缺頁；但也可能載入不需要的資料，浪費記憶體並增加 internal fragmentation。

### Thrashing 與一般 Page Fault 過多

| 項目 | 一般 Page Fault | Thrashing |
|---|---|---|
| 程度 | 偶爾發生，可接受 | 大量發生，系統效能嚴重下降 |
| 系統時間花在哪 | 大多仍在執行程式 | 大多在換頁與處理缺頁 |
| CPU utilization | 不一定明顯下降 | 通常下降 |
| 典型原因 | 某頁面尚未載入 | process 太多或 frame 分配不足 |
| 解法 | 改善 locality、置換策略或增加 frame | 降低 multiprogramming、working set model、page fault frequency control |

Thrashing 不是單純「有 Page Fault」，而是 Page Fault 多到系統主要時間都被換頁吃掉。

## 國考答題句

Virtual Memory 是一種記憶體管理技術，讓 process 可使用大於實體記憶體的虛擬位址空間，並由作業系統透過主記憶體與磁碟間的頁面交換來支援。

Demand Paging 是頁面在真正被參考時才載入主記憶體的策略，可節省記憶體，但可能造成 Page Fault。

Page Fault 是指 process 參考的 page 不在主記憶體中，因此需由作業系統將該 page 從磁碟載入 memory。

EAT 的基本公式為 `EAT = (1 - p) * memory access time + p * page fault service time`，其中 `p` 為 page fault ratio。

FIFO 依頁面進入記憶體的先後順序置換，實作簡單，但可能發生 Belady's anomaly。

OPT 會置換未來最晚才會再被使用的 page，Page Fault 次數理論上最少，但實務上無法預知未來，因此常作為比較基準。

LRU 會置換最久未被使用的 page，符合 locality，但精準實作成本較高。

Clock / Second Chance 是 FIFO 的改良，利用 reference bit 判斷頁面是否最近被使用過，若使用過則給第二次機會。

Thrashing 是系統大量時間花在 Page Fault 與頁面交換，導致真正執行 process 的時間很少，常由 multiprogramming 過高與 frame 不足造成。

改善 Thrashing 的方法包括降低 multiprogramming、增加實體記憶體、使用 working set model，以及 page fault frequency control。

## 容易考的判斷題

1. Virtual Memory 會讓實體 RAM 容量真的變大。
   答：錯。Virtual Memory 是位址空間與記憶體管理技術，不會改變硬體 RAM 容量。

2. Demand Paging 是需要某頁面時才將該頁面載入主記憶體。
   答：對。這是 Demand Paging 的核心定義。

3. Page Fault 一定代表程式發生非法存取。
   答：錯。合法頁面不在主記憶體中也會造成 Page Fault，載入後可繼續執行。

4. TLB Miss 一定會造成 Page Fault。
   答：錯。TLB Miss 只是 TLB 沒有轉譯資訊，頁面仍可能在主記憶體中。

5. Page Fault Ratio 很小時，就一定不會影響效能。
   答：錯。Page Fault service time 通常非常大，所以很小的缺頁率也可能大幅增加 EAT。

6. FIFO Page Replacement 可能發生 Belady's Anomaly。
   答：對。FIFO 是國考最常考的 Belady's Anomaly 例子。

7. OPT Page Replacement 在實務上通常可以直接實作。
   答：錯。OPT 需要知道未來頁面參考情形，實務上不可知。

8. LRU 會置換最久沒有被使用的頁面。
   答：對。LRU 的名稱就是 Least Recently Used。

9. LRU 與 OPT 都不會發生 Belady's Anomaly。
   答：對。兩者屬於 stack algorithm，frame 增加不會造成缺頁數反而增加。

10. Thrashing 發生時，CPU 通常因等待換頁 I/O 而 utilization 下降。
    答：對。系統時間大量耗在 Page Fault 與換頁，真正執行程式的時間變少。

11. 增加 multiprogramming 一定能改善 CPU utilization。
    答：錯。若已經造成 frame 不足，增加 multiprogramming 可能導致 thrashing，使 CPU utilization 更差。

12. Working Set Model 可用來控制 process 所需 frame 數量，降低 thrashing 機率。
    答：對。若能讓 process 的 working set 留在主記憶體中，Page Fault 會較少。

## 考前速記小抄

Virtual Memory：程式看到大位址空間，實際靠 RAM 與 disk 換 page。

Demand Paging：需要才載入；省記憶體，但可能 Page Fault。

Page Fault：要用的 page 不在 memory；OS 載入 page 後可繼續。

Page Fault 不等於程式錯誤；TLB Miss 不等於 Page Fault。

EAT 必背：

```text
EAT = (1 - p) * memory access time + p * page fault service time
```

有 TLB：先算 TLB hit / miss 的平均存取時間，再依題目把 Page Fault 加權。

Page Fault Ratio 受 frame 數量、置換演算法、locality、working set、page size 影響。

FIFO：先進先出，可能 Belady's anomaly。

OPT：換掉未來最晚用到的頁面，理論最佳，實務不可知。

LRU：換掉最久沒用的頁面，符合 locality，成本高。

LFU：換掉使用次數最少的頁面，要注意次數老化與平手規則。

Clock / Second Chance：FIFO 改良，用 reference bit 給最近用過的頁面第二次機會。

Thrashing 因果鏈：

```text
multiprogramming 過高
→ frame 不足
→ page fault 增加
→ CPU utilization 下降
→ 系統可能再加 process
→ thrashing 更嚴重
```

Thrashing 解法：降低 multiprogramming、增加 RAM、working set model、page fault frequency control。
