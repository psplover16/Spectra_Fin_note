## 名詞解釋        用UL/LI表示

暫存器（Register）是 CPU 內部非常小、非常快的儲存空間。它不像主記憶體那樣用來放大量資料，而是用來暫時保存 CPU 正在處理、即將使用，或需要立即判斷的資訊。

Program Counter（PC，程式計數器）是存放「下一個要執行指令的記憶體位址」的暫存器。當 CPU 取出一個指令後，PC 通常會更新到下一個指令的位置；若遇到跳躍指令或中斷，PC 可能會被改成新的目標位址。

Instruction Register（IR，指令暫存器）是存放「目前正在解碼或執行的指令」的暫存器。CPU 從記憶體取出指令後，會把該指令放入 IR，接著控制單元才能分析這個指令要做什麼功能。

Base Register（基底暫存器）是存放「程式可用記憶體區段起始位址」的暫存器。作業系統可以利用它來決定某個程式的記憶體區段從哪裡開始，並且支援記憶體保護與重定位。白話來說，Base Register 像是告訴 CPU：「這個程式的合法活動範圍，從這個地址開始。」

Limit Register（界限暫存器）是存放「程式可用區段大小或界限」的暫存器。它通常與 Base Register 搭配使用，用來檢查程式存取的記憶體位置是否超出允許範圍。白話來說，Limit Register 像是告訴 CPU：「這個程式最多只能用到這麼大的範圍。」

Flag Register 或 Status Register（旗標暫存器或狀態暫存器）是記錄 CPU 運算結果狀態的暫存器。它不一定存放一般資料，而是保存一些判斷用的狀態，例如結果是否為零、是否產生進位、是否溢位、結果正負號，以及是否允許中斷。

MAR（Memory Address Register，記憶體位址暫存器）是存放「要存取的記憶體位址」的暫存器。當 CPU 要從記憶體讀取資料或把資料寫入記憶體時，必須先知道目標地址，這個地址就會放在 MAR。

MDR 或 MBR（Memory Data Register / Memory Buffer Register，記憶體資料暫存器或記憶體緩衝暫存器）是存放「從記憶體讀出，或準備寫入記憶體的資料」的暫存器。MAR 管地址，MDR/MBR 管資料，兩者常一起出現在 CPU 與記憶體交換資料的題目中。



## 常見考法  用UL/LI表示

1.「暫存器名稱與功能配對」。看到 Program Counter，要立刻想到下一個要執行指令的位址；看到 Instruction Register，要想到目前正在解碼或執行的指令；看到 MAR，要想到記憶體位址；看到 MDR 或 MBR，要想到記憶體資料。

2.「取指令流程」。題目可能問 CPU 取指令時，哪個暫存器提供指令位址，哪個暫存器保存取回的指令，或哪個暫存器保存目前指令。此時可用「PC 給下一個指令位址、MAR 放要存取的位址、MDR/MBR 放讀回資料、IR 放目前指令」來解。

3.「記憶體保護」。只要題目出現 base、limit、relocation、protection、越界檢查，就要想到 Base Register 與 Limit Register。Base Register 管起始位址，Limit Register 管大小或界限，兩者合起來限制程式能存取的記憶體範圍。

4. 「旗標意義」。Zero、Carry、Overflow、Sign、Interrupt Enable 都屬於狀態或控制相關資訊。題目若問哪個暫存器會記錄運算結果是否為零、是否進位、是否溢位，就選 Flag Register 或 Status Register。




