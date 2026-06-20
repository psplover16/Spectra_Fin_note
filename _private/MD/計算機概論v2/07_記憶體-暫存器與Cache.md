# 基本計概 07：記憶體（二）暫存器與 Cache

> 記憶體。

## 11. Register（暫存器）

### 名詞解釋
- **暫存器（Register）**：CPU 內部非常小、非常快的儲存空間。用來暫時保存 CPU 正在處理、即將使用，或需要立即判斷的資訊。
- **Program Counter（PC，程式計數器）**：存放「下一個要執行指令的記憶體位址」。取出指令後 PC 通常更新到下一個指令位置；遇跳躍或中斷可能被改成新目標位址。
- **Instruction Register（IR，指令暫存器）**：存放「目前正在解碼或執行的指令」。CPU 取出指令後放入 IR，控制單元才能分析這指令要做什麼。
- **Base Register（基底暫存器）**：存放「程式可用記憶體區段起始位址」。支援記憶體保護與重定位。白話：「這個程式的合法活動範圍，從這個地址開始。」
- **Limit Register（界限暫存器）**：存放「程式可用區段大小或界限」。常與 Base Register 搭配，檢查存取是否超出允許範圍。白話：「這個程式最多只能用到這麼大的範圍。」
- **Flag Register / Status Register（旗標／狀態暫存器）**：記錄 CPU 運算結果狀態，例如結果是否為零、是否進位、是否溢位、正負號，以及是否允許中斷。
- **MAR（Memory Address Register，記憶體位址暫存器）**：存放「要存取的記憶體位址」。
- **MDR / MBR（Memory Data / Buffer Register，記憶體資料／緩衝暫存器）**：存放「從記憶體讀出，或準備寫入記憶體的資料」。（**MAR 管地址，MDR/MBR 管資料**，常一起出現。）

### 常見考法
1. **暫存器名稱與功能配對**：PC → 下一個要執行指令的位址；IR → 目前正在解碼或執行的指令；MAR → 記憶體位址；MDR/MBR → 記憶體資料。
2. **取指令流程**：PC 給下一個指令位址、MAR 放要存取的位址、MDR/MBR 放讀回資料、IR 放目前指令。
3. **記憶體保護**：出現 base、limit、relocation、protection、越界檢查 → 想到 Base Register（管起始位址）與 Limit Register（管大小／界限）。
4. **旗標意義**：Zero、Carry、Overflow、Sign、Interrupt Enable → 選 Flag Register / Status Register。

---

## 12. Cache（快取記憶體）

### Cache 類別
- **L1**：最靠近 CPU，最快、容量最小。
- **L2**：速度與容量居中。
- **L3**：通常多核心共享，容量較大但較慢。

### Hit Ratio 相關
- **Hit（命中）**：要找的資料剛好在 Cache 裡，可直接讀取，速度快。
- **Miss（未命中）**：資料不在 cache，需到下一層記憶體取。
- **Hit Ratio（命中率）** ＝ Hit 次數 / 總存取次數。
- **Miss Rate（未命中率）** ＝ 1 − Hit Ratio。
- **Hit Time（命中時間）**：資料在 Cache 中命中時，取得資料所需時間（很短，但不是零）。
- **Miss Penalty（未命中懲罰）**：發生 Miss 後，必須到下一層記憶體取資料所多花的時間。

### AMAT
**AMAT（Average Memory Access Time，平均記憶體存取時間）**：估算一次記憶體存取平均要花多久。

```text
AMAT = Hit Time + Miss Rate × Miss Penalty
```

**例**：Hit Time = 2 ns，Miss Rate = 8%，Miss Penalty = 50 ns，求 AMAT。
```text
AMAT = 2 + 0.08 × 50
     = 2 + 4
     = 6 ns
```

### 寫入策略
- **Write Through（寫透式）**：寫入 Cache 時，同步把資料寫回主記憶體。優：一致性較好；缺：每次寫入都要同步更新主記憶體，較慢。
- **Write Back（寫回式）**：先寫在 Cache，等該區塊被替換出去時，才寫回主記憶體。優：減少對主記憶體的寫入次數，效能較好；缺：控制較複雜，需額外機制記錄資料是否已被修改。

### 常見搭配
- **Write Allocate（寫入配置）**：發生 write miss 時，先把目標區塊載入 Cache，再寫入。適合後續可能還會繼續使用同一區塊。
- **No Write Allocate（非寫入配置）**：發生 write miss 時，不載入區塊，直接寫到下一層記憶體。適合不希望一次寫入就占用 Cache 空間。

---

## 加強練習　【練流程】
**練習 1**：Hit Ratio 95%、Hit Time 1 ns、Miss Penalty 100 ns，AMAT？
> 解：1 + 0.05 × 100 = **6 ns**

**練習 2**：AMAT 2 ns、Hit Time 1 ns、Miss Penalty 50 ns，Miss Rate？
> 解：2 = 1 + MR×50 → MR = **2%**
