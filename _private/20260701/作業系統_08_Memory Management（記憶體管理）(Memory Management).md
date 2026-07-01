# Memory Management（記憶體管理）(Memory Management)

> 科目：計算機概論 · 作業系統｜這章談 OS 怎麼把有限的記憶體分給眾多 process：四種找空洞的策略、兩種碎裂、分頁 vs 分段，以及加速位址轉換的 TLB。配置法很愛出「這個需求會配到哪個洞」的計算題。
>
> 學習方式：四種 Fit 的規則屬【硬背】＋【動手挑洞】；碎裂與分頁/分段的差異屬【理解】。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「空洞依序為 100K、500K、200K、300K、600K。需求 **212K** 時，**First / Best / Worst Fit** 各會選哪個洞？」
> 2. 「**外部碎裂** 與 **內部碎裂** 差在哪？分頁會產生哪一種？」
> 3. 「分頁下為了不必每次都查記憶體裡的 page table，加了什麼硬體來加速？」

---

## 🤔 先想想

- 四種 Fit 只差「**挑哪個夠大的洞**」：從頭第一個？最小剛好的？還是最大的？
- 碎裂分兩種：**空間夠但散（外部）** vs **給太多、內部用不滿（內部）**。
- page table 放在記憶體，每次查表就多一次記憶體存取——所以要用 **TLB** 這個小快取抄捷徑。

---

## 📖 觀念拆解

### 一、四種配置法：First / Next / Best / Worst Fit

當一個 process 要一塊記憶體時，OS 要從眾多「空洞」中挑一個夠大的：

| 配置法 | 挑哪個洞 |
|---|---|
| First Fit 最先適配 | 從頭找，第一個夠大的洞 |
| Next Fit 循環適配 | 同 First，但從上次停的位置接著找 |
| Best Fit 最佳適配 | 夠大之中最小的洞，要找遍全部 |
| Worst Fit 最差適配 | 最大的洞，想讓剩下的洞還夠大可用 |

**範例（務必會算）：** 空洞依位址順序為 **100K、500K、200K、300K、600K**。

- 需求 **212K** 時，夠大的是 **500、300、600**；**First/Next 選 500K**（從頭第一個夠大的），**Best 選 300K**（夠大中最小），**Worst 選 600K**（最大）。
- 若需求改成 **426K**，夠大的洞是 **500、600**；**First Fit 與 Best Fit 都選 500K**，**Worst Fit 選 600K**。

📌 白話：First 求快（碰到就用）；Best 想省（挑最貼身的），但常留下超小碎洞；Worst 反其道而行，挑最大的，希望剩下的洞還夠大能用。

### 二、Fragmentation（碎裂）

| | External 外部碎裂 | Internal 內部碎裂 |
|---|---|---|
| 問題 | 空洞總量夠但散落、不連續，湊不出一塊連續空間 | 配給的空間比實際需要大，多出來用不到 |
| 發生在 | 連續配置 | 固定大小分配，例如分頁頁框 |
| 例子 | 三個 100K 散洞，來一個 250K 連續需求就配不了 | 頁 4KB，process 需 9KB，配 3 頁後浪費 3KB |
| 解法 | Compaction 合併空洞，或用 paging 免連續 | 把頁/塊切小一點，但會增加管理成本 |

📌 **一句話分辨：External 是「空間夠但散」；Internal 是「給太多、內部用不滿」。** 補充：**Best Fit 容易留下超小碎洞（易外部碎裂）**，**Worst Fit 剩的洞較大**。

內部碎裂算例：頁大小 4KB，process 需 **9KB**，要配 3 頁（3×4=12KB），**浪費 12−9＝3KB**。

### 三、Paging vs Segmentation

| | Paging 分頁 | Segmentation 分段 |
|---|---|---|
| 怎麼切 | 固定大小的 page/frame | 大小不一，依程式邏輯切成 code、data、stack 等 |
| 對應表 | Page Table（頁號 → 頁框號） | Segment Table（base + limit） |
| 邏輯位址 | (頁號, 頁內偏移) | (段號, 段內偏移) |
| 碎裂 | 無外部碎裂，但有內部碎裂 | 有外部碎裂，但無內部碎裂 |
| 優點 | 不需連續、好管理 | 符合邏輯，方便以段為單位共享與保護 |

📌 **一句話分辨：Paging 固定大小、不管意義；Segmentation 大小不一、依邏輯切。** 碎裂剛好相反：**分頁只有內部碎裂、分段只有外部碎裂**。

📌 **位址拆解（常考計算）：** 邏輯位址共 m 位元、頁大小 2ⁿ 位元組，則**低 n 位＝頁內偏移（offset）**、**高 m−n 位＝頁號**；頁表共 2^(m−n) 個項目。

### 四、TLB（Translation Lookaside Buffer）

**TLB 是 Translation Lookaside Buffer（轉譯後備緩衝區），不是 Transaction。** 分頁下若每次都先查記憶體裡的 page table 再拿資料，等於**兩次記憶體存取**，會變慢。

1. **TLB 是 CPU 內的超快小快取**，存最近用過的「頁號 → 頁框號」。
2. **TLB hit**：直接拿到頁框號，省掉查記憶體 page table。
3. **TLB miss**：TLB 沒有，才去記憶體查 page table，並把對應放進 TLB。
4. **作用**：利用 **locality（區域性）**，減少查表的記憶體存取，加速位址轉換。

📌 **含 TLB 的有效存取時間（EAT，常考）：** EAT ＝ 命中率×(TLB＋記憶體) ＋ 失誤率×(TLB＋2×記憶體)；**TLB miss 要兩次記憶體存取**（先查 page table 再取資料）。

比喻：page table 像放在書庫的完整目錄，每次都跑書庫很慢；TLB 像你抄在便條紙上的常用頁碼，先看便條（hit）就免跑書庫。

---

## ✅ 回到題目：解答

1. **需求 212K？** → 夠大的洞是 500、300、600。**First/Next → 500K**、**Best → 300K**、**Worst → 600K**。
2. **外部 vs 內部碎裂？** → **外部**：空間總量夠但散落、湊不出連續塊（發生在連續配置）；**內部**：配給的空間比需要大、多出用不到（發生在固定大小分配）。**分頁產生內部碎裂**。
3. **加速分頁位址轉換？** → **TLB（轉譯後備緩衝區）**，CPU 內的小快取，hit 就免查記憶體 page table。

---

## 📌 重點整理

- 四 Fit：**First 從頭第一個夠大、Next 接續找、Best 夠大中最小、Worst 最大**。
- 範例 212K → First/Next=500K、Best=300K、Worst=600K；426K → First/Best=500K、Worst=600K。
- 碎裂：**External（空間夠但散，連續配置）**、**Internal（給太多用不滿，固定大小）**；Best 易外部碎洞。
- **Paging：固定大小、只有內部碎裂**；**Segmentation：依邏輯切、只有外部碎裂**。
- **TLB** 是 page table 的快取，hit 免查記憶體、加速位址轉換。

---

## ⚠️ 常見陷阱

- **212K 的 Best Fit 是 300K 不是 500K**：Best 要挑「夠大之中**最小**」，別直覺選第一個。
- **碎裂對應別搞反**：**分頁→內部碎裂**、**分段→外部碎裂**（連續配置也會外部碎裂）。
- **TLB 不是 Transaction**：是 **Translation** Lookaside Buffer，作用是加速位址轉換。
- **Compaction 解外部碎裂**：把散洞合併成連續空間；內部碎裂則靠調整頁/塊大小。
- **Best Fit 未必最省**：它常留下大量**超小碎洞**，反而加劇外部碎裂。

---

## 📝 練習題（含解答）

**Q1.** 空洞依序 100K、500K、200K、300K、600K，需求 426K。First Fit、Best Fit、Worst Fit 各選哪個？
<details><summary>看解答</summary>

夠大的洞是 500、600。**First Fit 與 Best Fit 都選 500K**（第一個夠大的也剛好是最小夠大的）；**Worst Fit 選 600K**。
</details>

**Q2.** 頁大小 4KB，某 process 需 9KB，會產生多少內部碎裂？
<details><summary>看解答</summary>

需配 3 頁（3×4KB=12KB），**內部碎裂 = 12 − 9 = 3KB**。
</details>

**Q3.** 分頁與分段各會產生哪一種碎裂？
<details><summary>看解答</summary>

**分頁（Paging）：只有內部碎裂**（頁框固定大小）；**分段（Segmentation）：只有外部碎裂**（段大小不一）。
</details>

**Q4.** 為什麼要有 TLB？TLB hit 和 miss 差在哪？
<details><summary>看解答</summary>

避免每次分頁都去記憶體查 page table（多一次記憶體存取）。**TLB hit** 直接拿到頁框號、免查記憶體；**TLB miss** 才去記憶體查 page table，並把結果放進 TLB。
</details>

**Q5.** 外部碎裂可用什麼方法解決？它通常發生在哪種配置方式？
<details><summary>看解答</summary>

用 **Compaction（緊縮）合併空洞**，或改用 **paging（免連續）**。外部碎裂通常發生在**連續配置**。
</details>
