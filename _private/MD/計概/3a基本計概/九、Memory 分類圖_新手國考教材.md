## Memory 分類圖

```text
Memory 記憶體
├─ 依角色分類
│  ├─ Register 暫存器：CPU 內部，最快、最小
│  ├─ Cache 快取：CPU 和 RAM 之間，高速暫存
│  ├─ Main Memory 主記憶體：程式執行時的工作區，通常是 RAM
│  └─ Secondary Storage 輔助記憶體：長期保存資料，例如 SSD / HDD / USB
└─ 依斷電後資料是否保留分類
   ├─ Volatile 揮發性：斷電後資料通常消失
   └─ Non-volatile 非揮發性：斷電後資料通常保留
```



## RAM vs ROM

| 項目 | RAM | ROM |        以table表示
|---|---|---|
| 全名 | Random Access Memory | Read Only Memory |
| 中文 | 隨機存取記憶體 | 唯讀記憶體 |
| 主要用途 | 存放執行中的程式與資料 | 存放韌體、開機程式 |
| 斷電後 | 通常消失 | 通常保留 |
| 讀寫特性 | 可快速讀寫 | 以讀取為主，部分類型可改寫 |
| 常見例子 | DRAM、SRAM | PROM、EPROM、EEPROM、Flash ROM |


- RAM：執行中、可快讀寫、斷電多消失。
- ROM：放韌體、放開機程式、斷電多保留。
- ROM 不代表永遠完全不能改；現代很多 ROM 類型可以用特定方式改寫，例如 EEPROM、Flash。

---

## SRAM vs DRAM    

| 項目 | SRAM | DRAM |     table表示
|---|---|---|
| 全名 | Static RAM | Dynamic RAM |
| 中文 | 靜態隨機存取記憶體 | 動態隨機存取記憶體 |
| 儲存方式 | flip-flop | 電容 |
| 是否需要 refresh | 不需要 | 需要 |
| 速度 | 較快 | 較慢 |
| 成本 | 較高 | 較低 |
| 容量 | 較小 | 較大 |
| 常見用途 | Cache | Main Memory / RAM |


flip-flop = 正反器 = 可以記住 1 個 bit 的小電路。

---

## ROM 類型

| 類型 | 重點 | 擦除或改寫方式 | 國考關鍵字 |
|---|---|---|---|
| PROM | 通常只能燒錄一次 | 一次性燒錄 | Program once |
| EPROM | 可擦除後再燒錄 | 紫外線擦除，通常整片擦除 | 紫外線 |
| EEPROM | 可擦除與改寫 | 電氣擦除，可局部改寫 | 電氣、局部改寫 |
| Flash | EEPROM 的延伸 | 電氣擦除，常以 block 為單位 | SSD、USB、記憶卡 |


