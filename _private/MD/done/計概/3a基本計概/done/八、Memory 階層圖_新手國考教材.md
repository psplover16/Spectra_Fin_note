# Memory 階層圖

越靠近 CPU，速度越快、容量越小、成本越高；越遠離 CPU，速度越慢、容量越大、成本越低。

---

## [必背] Memory 階層順序

層級	名稱	速度	容量	內容例             table表示
1	  Register 暫存器	                最快	最小	CPU 正在計算的數字
2	  Cache 快取記憶體	            很快	很小	最近常用的資料或指令
3	  Main Memory 主記憶體 / RAM      中等	較大	正在執行的程式和資料
4	  SSD / HDD 輔助儲存體	        慢      很大	作業系統、遊戲、影片、文件
5	  外部儲存 / 雲端 / 磁帶	        最慢     最大	 備份資料、歷史資料、雲端檔案


此處用 UL/LI表示
1. 暫存器 Register
2. L1 Cache → L2 Cache → L3 Cache
3.主記憶體 Main Memory / RAM
4.SSD / HDD
5.外部儲存 External Storage


---

## Locality（區域性）
Cache：把近期可能會再用到的資料放近一點，讓 CPU 下次拿得更快。
Cache 之所以有效，是因為程式常有「區域性」。
區域性意思是：程式常常會用剛用過的資料，或用附近的資料。

| 類型 | 中文 | 白話判斷 | 例子 |     table表示
|---|---|---|---|
| Temporal Locality | 時間區域性 | 同一個資料很快又用一次 | 迴圈一直用 `sum` |
| Spatial Locality | 空間區域性 | 用到某位置後，附近位置也會用 | 依序讀 `a[0]`, `a[1]`, `a[2]` |

