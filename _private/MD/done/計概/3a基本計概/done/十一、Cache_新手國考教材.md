# 十一、Cache（快取記憶體）

Cache類別
- L1：最靠近 CPU，最快、容量最小。
- L2：速度與容量居中。
- L3：通常多核心共享，容量較大但較慢。


Hit Ratio
- Hit（命中）：CPU 要找的資料剛好在 Cache 裡。命中時可以直接從 Cache 讀取，速度快。
- Miss（未命中）：資料不在 cache 中，需到下一層記憶體取。
- Hit Ratio（命中率） = Hit 次數 / 總存取次數。
- Miss Rate（未命中率）=  1 - Hit Ratio。
- Hit Time（命中時間） 是資料在 Cache 中命中時，從 Cache 取得資料所需的時間。它通常很短，但不是零。
- Miss Penalty（未命中懲罰） 是發生 Miss 後，必須到下一層記憶體取資料所多花的時間。這個時間會讓平均存取時間變長。

AMAT:
AMAT（Average Memory Access Time，平均記憶體存取時間） 是用來估算一次記憶體存取平均要花多久的指標。
AMAT = Hit Time + Miss Rate * Miss Penalty


ex.
計算 AMAT

某系統的 Hit Time 是 2 ns，Miss Rate 是 8%，Miss Penalty 是 50 ns。求 AMAT。
先把 8% 換成 0.08，再代入公式：

```text
AMAT = Hit Time + Miss Rate * Miss Penalty
AMAT = 2 + 0.08 * 50
AMAT = 2 + 4
AMAT = 6 ns
```






寫入策略
**Write Through（寫透式）** 是寫入 Cache 時，同步把資料寫回主記憶體。它的好處是 Cache 與主記憶體資料一致性較好；缺點是每次寫入都要同步更新主記憶體，所以寫入速度較慢。
**Write Back（寫回式）** 是先把資料寫在 Cache 中，等該 Cache 區塊將來被替換出去時，才寫回主記憶體。它的好處是減少對主記憶體的寫入次數，效能較好；缺點是控制較複雜，且需要額外機制記錄資料是否已被修改。


常見搭配
**Write Allocate（寫入配置）** 是發生 write miss 時，先把目標區塊載入 Cache，再對 Cache 進行寫入。它適合後續可能還會繼續使用同一區塊的情況。
**No Write Allocate（非寫入配置）** 是發生 write miss 時，不把區塊載入 Cache，而是直接寫到下一層記憶體。它適合不希望一次寫入就占用 Cache 空間的情況。