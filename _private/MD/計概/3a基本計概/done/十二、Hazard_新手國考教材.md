# 十二、Hazard（管線危障）

定義
- Hazard（危障 / 冒險）是 Pipeline 中，讓指令不能照 預定時脈 繼續前進的情況。Hazard 本身不是一定算錯，而是「如果不處理，可能會錯或必須等待」。
- Stall（停滯 / 暫停）：CPU 讓某些管線階段先等一下，不讓指令繼續前進。
- Bubble（泡泡 / 空泡）：因為 stall 插入的空白週期。它不做有用工作，只是用來把指令錯開。
Hazard 是原因；Stall 是處理方式之一；Bubble 是 stall 造成的空白時間。


---

## 三種 Hazard       用table做，為了要在小手機完整顯示、許多地方都有加 \n

| 類型 | 白話意思 | 看到什麼關鍵字 | 常見處理 |
| --- | --- | --- | --- |
| Structural Hazard | 搶硬體 | 同一記憶體、\n同一功能單元、\n資源不足 | 增加硬體、\n分離 instruction/data cache、\n排程調整 |
| Data Hazard | 等資料 | 前一指令結果、\n暫存器讀寫、\n資料相依 | Forwarding、stall、\ncompiler scheduling、\nregister renaming |
| Control Hazard | 不知道下一步去哪 | branch、\njump、PC、\n分支預測 | Branch prediction、\nflush、\ndelayed branch |

## 名詞解釋，此處用   ul/li做，採用  英文名稱(中文名稱)：解釋  這種模式
- Instruction Cache（指令快取） = 放程式指令的快取
- Data Cache（資料快取） = 放資料的快取
- Forwarding（資料前推 / 旁路傳送）：結果剛算出來，不等 WB 寫回，就先直接給下一個指令用。不一定能解決所有情況
- Stall（停滯 / 停等）：如果 forwarding 還來不及，就讓後面的指令先等。會浪費週期，效能下降
- Compiler scheduling（編譯器排程）：編譯器調整指令順序，讓相依指令錯開。
- Register renaming（暫存器重新命名）：用不同實體暫存器避免假相依。
- branch	分支指令	根據條件決定要不要跳到別的地方
- jump	跳躍指令	直接跳到指定位置繼續執行
- PC	Program Counter，程式計數器	記錄「下一條要抓的指令位址」
- branch prediction	分支預測	CPU 先猜 branch 會不會跳
- Flush	清除管線、沖刷、清空	  把錯誤路徑的指令清掉
- Delayed branch	延遲分支	  把分支後面的空檔拿來安排可執行的指令
- Speculative execution	 推測執行	 CPU 先推測執行，猜對就保留，猜錯就丟掉

---

## RAW、WAR、WAW

Data Hazard 常見有三種：

| 類型 | 全名 | 白話意思 |
| --- | --- | --- | --- |
| RAW | Read After Write | 後面要讀，前面還沒寫好 |
| WAR | Write After Read | 後面太早寫，害前面讀不到舊值 |
| WAW | Write After Write | 兩個都要寫，寫入順序錯會出事 |
