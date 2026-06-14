# Memory Management（記憶體管理）新手國考教材

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

### Memory Management（記憶體管理）

記憶體管理是作業系統負責「安排程式放進主記憶體哪裡、如何使用、如何回收」的工作。電腦同時執行多個程式時，主記憶體空間有限，作業系統必須決定誰可以使用哪些位置，並避免不同程式互相踩到彼此的資料。

### Main Memory（主記憶體）

主記憶體通常指 RAM，是 CPU 可以直接存取、用來放正在執行程式與資料的地方。硬碟容量雖然大，但速度慢；程式真正要跑起來，通常必須被載入主記憶體。

### Process（行程）

行程是正在執行中的程式。考題談到「某 process 需要 200 KB 記憶體」時，就是問作業系統要把這個正在跑的程式安排到哪個可用空間。

### Address（位址）

位址可以想成記憶體中的門牌號碼。CPU 執行程式時，需要依照位址找到指令或資料。

### Physical Address（實體位址）

實體位址是真正 RAM 上的位置，也就是硬體實際存取的位址。

### Virtual Address（虛擬位址）

虛擬位址是程式自己看到的位址。程式以為自己有一段連續、乾淨的記憶體可以使用，但實際上作業系統會把虛擬位址轉換成實體位址。這樣可以讓程式彼此隔離，也讓記憶體使用更有彈性。

### Allocation（配置）

配置是把一段可用記憶體分給某個行程使用。國考常問的 First Fit、Next Fit、Best Fit、Worst Fit，就是不同的配置策略。

### Hole（空洞）

空洞是目前沒有被使用、可以分配出去的連續記憶體空間。例如記憶體中有 100 KB、500 KB、200 KB 三塊空位，這些空位就可以稱為 holes。

### Contiguous Allocation（連續配置）

連續配置是指一個行程必須被放在一整段連續的記憶體中。如果行程需要 300 KB，就必須找到一個至少 300 KB 的連續空洞。這種方式容易出現 external fragmentation。

### Fragmentation（碎片）

碎片是記憶體被切得不漂亮，導致有些空間不好使用。碎片分成 external fragmentation 與 internal fragmentation，這兩個是國考必背。

### Paging（分頁）

分頁是把程式切成固定大小的 page，並把主記憶體切成同樣大小的 frame。page 可以放進任何可用 frame，不要求整個程式在實體記憶體中連續。分頁可解決 external fragmentation，但可能產生 internal fragmentation。

### Segmentation（分段）

分段是依照程式的邏輯單位來切，例如 code segment、data segment、stack segment。每段大小可以不同，比較符合程式結構，但因為每段仍需要一塊連續空間，所以可能產生 external fragmentation。

### Page Table（頁表）

頁表是記錄「某個 virtual page 對應到哪個 physical frame」的表格。CPU 產生虛擬位址後，系統會查頁表，才能知道實際要去 RAM 的哪個 frame。

### TLB（Translation Lookaside Buffer）

TLB 是放在 CPU 附近的小型高速快取，用來快取常用的 page table entries。白話說，TLB 像是頁表的快速查詢捷徑：如果 TLB 找得到對應關係，就不必每次都慢慢查主記憶體中的 page table。

### TLB Hit 與 TLB Miss

TLB hit 是指要找的 page 對應資料剛好在 TLB 裡，可以快速完成位址轉換。TLB miss 是指 TLB 裡沒有，需要再去查 page table。國考常考 TLB hit 可減少查 page table 的時間。

## 核心想法

記憶體管理的核心問題是：主記憶體有限，但程式很多，而且每個程式都希望自己能安全、快速、方便地使用記憶體。作業系統因此要同時照顧三件事：空間要有效利用、程式之間要隔離保護、位址轉換要夠快。

在早期或簡化模型中，常用連續配置來思考：一個行程要放進某個連續空洞。這時最容易考配置策略，例如 First Fit 是從頭找第一個夠大的洞，Best Fit 是找最小但足夠的洞。這類題目的重點不是背英文，而是會照規則一步一步模擬。

碎片問題是記憶體管理最常見的陷阱。external fragmentation 的重點是「總量夠，但不連續」；internal fragmentation 的重點是「已分配區塊裡面有用不到的空間」。只要能抓住「外部是不連續、內部是分配後浪費在裡面」，大部分題目都能判斷。

Paging 與 segmentation 是兩種重要管理方式。Paging 用固定大小切割，方便管理，也避免 external fragmentation；segmentation 用程式邏輯切割，對程式結構較自然，但每段大小不同，所以仍可能遇到外部碎片。考試常要求比較兩者的切割單位、大小是否固定、是否有 external/internal fragmentation。

TLB 的核心想法是加速位址轉換。沒有 TLB 時，CPU 可能要先查 page table，再去取真正資料；有 TLB 且 hit 時，可以直接得到 page 到 frame 的對應，少一次查頁表的成本。

## 具體範例

### 範例一：配置策略怎麼算

假設目前記憶體空洞依照位址由低到高排列如下：

| 空洞編號 | 大小 |
|---|---:|
| A | 100 KB |
| B | 500 KB |
| C | 200 KB |
| D | 300 KB |
| E | 600 KB |

現在有一個行程需要 212 KB。

First Fit 會從前面開始找，A 只有 100 KB 不夠，B 有 500 KB 夠，所以放進 B，剩下 288 KB。First Fit 的重點是「第一個夠大就用」，不管後面是否有更剛好的空間。

Best Fit 會找所有足夠大的空洞中最小的那個。能放 212 KB 的有 B 500 KB、D 300 KB、E 600 KB，其中 D 300 KB 最小但仍足夠，所以放進 D，剩下 88 KB。Best Fit 看似省空間，但常留下很多很小的碎片。

Worst Fit 會找最大的空洞。這裡最大的是 E 600 KB，所以放進 E，剩下 388 KB。Worst Fit 的想法是保留較大的剩餘空間，讓之後比較有機會再放其他行程。

Next Fit 會從「上次搜尋停下的位置」繼續找。因此 Next Fit 題目一定要看上次指標在哪裡。如果上次停在 C，這次就從 C 之後開始找；C 200 KB 不夠，D 300 KB 夠，所以放 D。如果題目沒有交代上次位置，就不能自己亂假設。

### 範例二：external fragmentation

假設記憶體中有三個空洞：100 KB、200 KB、300 KB。總空間是 600 KB。現在有一個行程需要 500 KB。

雖然 100 + 200 + 300 = 600 KB，總空間看起來足夠，但沒有任何一個連續空洞達到 500 KB，所以行程放不進去。這就是 external fragmentation：空間在外部散成多塊，總量夠但不連續。

### 範例三：internal fragmentation

假設系統用固定大小 4 KB 的 page/frame。一個行程最後一頁只需要 1 KB，但因為 frame 固定是 4 KB，仍然要分配一整個 4 KB frame。這個 frame 裡剩下的 3 KB 無法給別的行程使用，就是 internal fragmentation。

internal fragmentation 的重點是：浪費發生在「已經分配出去的區塊內部」。它不是因為空洞散在外面，而是因為分配單位固定或分配區塊比實際需求大。

### 範例四：Paging 位址轉換

假設 page size 是 1 KB，某虛擬位址可以拆成 page number 與 offset。page number 用來查 page table，offset 是頁內位移，也就是在該 page 裡的第幾個位置。

如果虛擬位址中的 page number 是 5，offset 是 100，而 page table 顯示 page 5 對應到 frame 12，那實體位址就是「frame 12 的起點 + 100」。所以 paging 的位址轉換重點是：page number 會變成 frame number，但 offset 不變。

### 範例五：TLB 為什麼變快

沒有 TLB 時，CPU 產生虛擬位址後，通常要先查 page table 找到 frame，再去主記憶體取資料。這可能造成額外的記憶體存取。

有 TLB 時，CPU 會先查 TLB。如果 TLB hit，就直接拿到 frame number，接著去主記憶體取資料。因為 TLB 很快，所以常用 page 的轉換可以被加速。若 TLB miss，才需要查 page table，並可能把結果放入 TLB，供下次使用。

## 國考常見考法

### 考法一：給空洞大小，問配置策略結果

這類題目會給一串 holes，再給一個或多個行程需求，要求判斷 First Fit、Next Fit、Best Fit、Worst Fit 各會放在哪裡。作答時要依序更新空洞大小，因為前一個行程放入後，後面的空洞狀態會改變。

解題順序建議是：先把空洞依記憶體順序列出，再看策略規則，放入後立刻寫出剩餘空間。若是 Next Fit，要特別標出上次搜尋停在哪裡。

### 考法二：判斷 external 或 internal fragmentation

題目若說「總可用空間足夠，但找不到一塊連續空間」，答案通常是 external fragmentation。題目若說「分配了一整塊，但其中有一部分用不到」，答案通常是 internal fragmentation。

### 考法三：比較 paging 與 segmentation

常見問法包括：哪一個固定大小、哪一個依邏輯單位切割、哪一個可避免外部碎片、哪一個可能有內部碎片。Paging 的關鍵字是 page/frame、固定大小、page table、external fragmentation 可避免；segmentation 的關鍵字是 logical unit、大小可變、segment table、可能 external fragmentation。

### 考法四：TLB hit 對效率的影響

常見問法是 TLB 的用途、TLB hit 的效果，或計算 effective access time。要記得 TLB 快取的是 page table entries，不是整個程式，也不是一般檔案資料。TLB hit 可以減少查 page table 的時間，但最後真正的資料仍然要從 cache 或 memory 讀取，依題目模型而定。

### 考法五：位址拆解與 offset

如果題目給 page size，可能要求把位址拆成 page number 與 offset。page size 若是 2 的次方，offset 位元數就是 log2(page size)。例如 page size = 4 KB = 2^12 bytes，offset 需要 12 bits，其餘高位元才是 page number。

## 必要比較表與易混淆整理

### 配置策略比較表

| 策略 | 白話規則 | 優點 | 缺點 | 國考提醒 |
|---|---|---|---|---|
| First Fit | 從頭找，第一個夠大的空洞就放 | 簡單、通常速度快 | 前段容易被切得零碎 | 重點是「第一個夠大」 |
| Next Fit | 從上次停下的位置繼續找 | 不必每次都從頭掃 | 可能錯過前面較合適空洞 | 一定要看上次指標 |
| Best Fit | 找最小但足夠的空洞 | 表面上最省剩餘空間 | 容易留下很多很小碎片 | 「最小」不是「剛好」 |
| Worst Fit | 找最大的空洞 | 剩下空間仍較大 | 大空洞可能快速被消耗 | 看全部空洞中的最大者 |

### External Fragmentation vs Internal Fragmentation

| 項目 | External Fragmentation | Internal Fragmentation |
|---|---|---|
| 白話定義 | 空的地方散在外面，不連續 | 分配出去的區塊裡面有空間浪費 |
| 常見原因 | 連續配置、可變大小分割 | 固定大小分配、區塊比需求大 |
| 典型句子 | 總空間足夠，但沒有足夠大的連續區塊 | 已分配區塊中有未使用空間 |
| Paging 關係 | Paging 可避免外部碎片 | Paging 可能有內部碎片 |
| Segmentation 關係 | Segmentation 可能有外部碎片 | 通常不是主要問題 |

記憶口訣：external 看「外面空洞是否連續」，internal 看「裡面是否浪費」。

### Paging vs Segmentation

| 項目 | Paging | Segmentation |
|---|---|---|
| 切割方式 | 固定大小 page/frame | 依邏輯單位分段 |
| 大小 | 每頁大小固定 | 每段大小可不同 |
| 程式觀點 | 較偏系統管理 | 較符合程式邏輯 |
| 對應表 | Page table | Segment table |
| 位址組成 | page number + offset | segment number + offset |
| External fragmentation | 可避免 | 可能發生 |
| Internal fragmentation | 可能發生，常在最後一頁 | 較不是典型重點 |
| 國考關鍵字 | page、frame、fixed size、TLB | code/data/stack segment、logical unit |

### TLB Hit vs TLB Miss

| 項目 | TLB Hit | TLB Miss |
|---|---|---|
| 意義 | TLB 找得到 page table entry | TLB 找不到 page table entry |
| 後續動作 | 可快速得到 frame number | 要去查 page table |
| 效率 | 較快 | 較慢 |
| 國考重點 | 減少查 page table 的時間 | 不是錯誤，只是快取未命中 |

### TLB 有效存取時間常見公式

若題目假設 TLB 查詢時間為 `t`，主記憶體存取時間為 `m`，TLB hit ratio 為 `h`，且 page table 存在主記憶體中，常見模型如下：

`Effective Access Time = h(t + m) + (1 - h)(t + 2m)`

這個公式的意思是：TLB hit 時，查 TLB 後直接存取真正資料，所以是 `t + m`；TLB miss 時，查 TLB 失敗後要先存取 page table，再存取真正資料，所以是 `t + 2m`。不同題目若給不同假設，要依題目敘述調整。

## 國考答題句

- First Fit 是從記憶體空洞串列的開頭開始尋找，找到第一個大小足以容納行程的空洞即配置。
- Next Fit 與 First Fit 類似，但搜尋起點是上次配置後停留的位置，而不是每次都從頭開始。
- Best Fit 會選擇所有可容納行程的空洞中最小者，因此可能留下許多很小而難以再利用的碎片。
- Worst Fit 會選擇最大的空洞進行配置，使配置後的剩餘空間仍相對較大。
- External fragmentation 是指總可用記憶體足夠，但因為不連續而無法滿足需要連續空間的配置要求。
- Internal fragmentation 是指已配置給行程的記憶體區塊中，有一部分空間未被實際使用。
- Paging 將程式與實體記憶體切成固定大小的 page 與 frame，可避免 external fragmentation，但可能產生 internal fragmentation。
- Segmentation 依程式邏輯單位分段，較符合程式結構，但因段大小可變且每段需連續空間，可能產生 external fragmentation。
- TLB 是快取 page table entries 的高速硬體，可加速 virtual address 到 physical address 的轉換。
- TLB hit 時可直接取得頁框對應資訊，減少查詢 page table 所需的時間。

## 容易考的判斷題

1. First Fit 一定會選到最小的可用空洞。  
   答：錯。First Fit 只選第一個夠大的空洞，不保證最小。

2. Best Fit 可能造成許多很小的外部碎片。  
   答：對。Best Fit 常把空洞切到很小，剩下的小空間可能難以再利用。

3. Worst Fit 是選擇最大的可用空洞。  
   答：對。它希望配置後剩餘空間仍較大。

4. External fragmentation 是指已分配區塊內部有浪費空間。  
   答：錯。這是 internal fragmentation；external fragmentation 是空洞分散、不連續。

5. Internal fragmentation 常見於固定大小分配。  
   答：對。例如 paging 中最後一頁可能沒有用滿。

6. Paging 要求一個行程在實體記憶體中必須連續存放。  
   答：錯。Paging 的 page 可放到不同 frame，不要求整個行程連續。

7. Paging 可以避免 external fragmentation。  
   答：對。因為 frame 固定大小，任何空 frame 都可放入一個 page。

8. Segmentation 的 segment 大小一定固定。  
   答：錯。Segmentation 依邏輯單位切割，各 segment 大小通常不同。

9. TLB 用來快取 page table entries。  
   答：對。TLB 不是一般磁碟快取，而是位址轉換用的高速快取。

10. TLB miss 表示記憶體存取一定失敗。  
    答：錯。TLB miss 只表示 TLB 沒有該轉換資料，仍可再查 page table。

11. Page number 經由 page table 轉成 frame number，而 offset 通常保持不變。  
    答：對。Paging 位址轉換時，改變的是所在頁框，頁內位移不變。

12. Segmentation 比 paging 更符合程式的邏輯結構。  
    答：對。Segmentation 常依 code、data、stack 等邏輯單位分段。

## 考前速記小抄

### 配置策略

- First Fit：從頭找，第一個夠大就放。
- Next Fit：從上次位置繼續找，題目沒給上次位置時要小心。
- Best Fit：找最小但足夠，可能製造很多小碎片。
- Worst Fit：找最大空洞，讓剩下的空間仍較大。

### 碎片

- External fragmentation：總量夠，但不連續，所以放不下。
- Internal fragmentation：分配出去的區塊裡面有空間沒用到。
- 口訣：外部看連不連續，內部看區塊內有沒有浪費。

### Paging

- 固定大小：page 對 frame。
- 位址：page number + offset。
- 優點：避免 external fragmentation。
- 缺點：可能有 internal fragmentation。
- 轉換：page number 查 page table 得到 frame number，offset 不變。

### Segmentation

- 依邏輯單位分段：code、data、stack。
- 大小可變，較符合程式結構。
- 可能有 external fragmentation。
- 位址：segment number + offset。

### TLB

- 全名：Translation Lookaside Buffer。
- 功能：快取 page table entries。
- 目的：加速 virtual address 到 physical address 的轉換。
- TLB hit：少查 page table，速度較快。
- TLB miss：再去查 page table，不代表錯誤。

### 最後一眼記憶

看到「第一個夠大」選 First Fit；看到「從上次位置」選 Next Fit；看到「最小但夠」選 Best Fit；看到「最大空洞」選 Worst Fit。看到「總空間夠但不連續」選 external fragmentation；看到「分配後裡面浪費」選 internal fragmentation。看到「固定 page/frame」想到 paging；看到「程式邏輯段」想到 segmentation；看到「加速查 page table」想到 TLB。
