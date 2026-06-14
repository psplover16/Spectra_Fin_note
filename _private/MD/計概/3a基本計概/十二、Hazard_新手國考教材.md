# Hazard

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

**Hazard**：在管線化處理器中，造成下一個指令不能按照原本預定時脈繼續執行的情況。白話來說，就是本來每個時脈都應該順順地推進一個步驟，但因為資源、資料或分支方向還沒準備好，處理器被迫等一下、改路線或清掉已經抓進來的指令。

**Pipeline（管線化）**：把一個指令的執行流程切成多個階段，讓多個指令像工廠生產線一樣重疊進行。例如一個指令正在執行時，下一個指令可以同時被解碼，再下一個指令可以同時被讀取。管線化的目的，是提高整體指令吞吐量。

**Instruction（指令）**：CPU 要執行的基本命令，例如加法、載入記憶體、寫回暫存器、跳躍到某個位址等。

**Clock cycle（時脈週期）**：CPU 運作的基本節拍。管線化設計通常希望每個時脈都能讓每個階段往前推進，Hazard 則會破壞這種理想節奏。

**Stall（停等、暫停）**：讓管線暫時停住，等待缺少的資源或資料準備好。它可以避免錯誤結果，但會降低效能。

**Bubble（泡泡）**：因為 stall 而插入管線中的空白週期。它不做真正有用的工作，只是讓前後指令錯開，避免衝突。

**Flush（清除管線）**：把管線中已經抓進來但不該執行的指令清掉。常見於分支判斷錯誤時，因為 CPU 先猜了一條路，後來發現猜錯，就必須把錯路上的指令丟掉。

**PC（Program Counter，程式計數器）**：記錄下一個要抓取指令位址的暫存器。遇到分支或跳躍時，下一個 PC 可能不是原本順序的下一個位址，因此容易產生 Control Hazard。

**Cache（快取）**：速度較快、容量較小的記憶體，用來暫存常用資料或指令。若 instruction cache 和 data cache 分開，可以降低指令讀取與資料存取同時搶同一記憶體的機率。

**Register（暫存器）**：CPU 內部速度非常快的小型儲存空間，常用來放運算資料與結果。Data Hazard 常常和暫存器的讀寫順序有關。

**Forwarding（資料前推、旁路傳送）**：把前一個指令剛算出的結果，直接送給後面的指令使用，不必等到結果正式寫回暫存器。它常用來解決 RAW 型 Data Hazard。

**Compiler scheduling（編譯器排程）**：由編譯器調整指令順序，在不改變程式結果的前提下，把可能造成等待的指令錯開，減少 pipeline stall。

**Register renaming（暫存器重新命名）**：把程式中看似使用同一個暫存器的地方，改分配到不同的實體暫存器，以消除某些假相依。它主要用來處理 WAR、WAW 這類和名稱重複有關的資料衝突。

**Branch prediction（分支預測）**：CPU 在分支結果還沒確定前，先猜下一個要執行的方向。猜對可以提高效率，猜錯就要 flush 錯誤路徑上的指令。

**Delayed branch（延遲分支）**：把分支後面某些一定會執行或適合執行的指令安排到延遲槽中，讓分支決定前的空檔不要浪費。

**Speculative execution（推測執行）**：CPU 根據預測先執行可能需要的指令，等結果確定後再決定保留或丟棄。它可以提高效能，但若預測錯誤，就必須清除錯誤執行的部分。

## 核心想法

Hazard 的核心觀念是：**管線化希望指令能重疊執行，但重疊執行會帶來衝突或不確定性**。

在沒有管線化時，一個指令完整做完後才做下一個指令，雖然慢，但比較不容易發生前後指令互相卡住的問題。管線化則讓多個指令同時處在不同階段，例如第一個指令在執行運算、第二個指令在解碼、第三個指令在抓取。這樣可以提高效率，但也代表這些指令會同時使用硬體、同時讀寫資料，甚至同時受到分支方向影響。

所以 Hazard 不是單純的錯誤，而是管線化處理器中常見的阻礙。考試通常會問：發生原因是什麼、屬於哪一類、會造成什麼影響、以及常見解法有哪些。

三大類 Hazard 可以用一句話記：

**Structural Hazard 是「硬體不夠用」；Data Hazard 是「資料還沒準備好或讀寫順序衝突」；Control Hazard 是「下一步要去哪裡還不確定」。**

## 具體範例

### Structural Hazard：硬體資源衝突

Structural Hazard 指的是硬體資源同一時間被多個管線階段需要，導致其中一方必須等待。

例如某個處理器只有一個共用記憶體，同一個時脈中：

- 一個指令需要從記憶體讀取資料。
- 另一個指令需要從記憶體抓取下一個指令。

如果兩者都必須使用同一個記憶體通道，就會發生資源衝突。這就像只有一個櫃台，但兩個人同時要辦事，只能其中一個先等。

常見解法包括增加硬體資源、將 instruction cache 和 data cache 分開，或透過排程讓會搶同一資源的指令不要同時發生。

### Data Hazard：資料相依造成衝突

Data Hazard 指的是指令之間存在資料相依，後面的指令需要前面指令的結果，但結果還沒準備好。

例如：

```text
I1: R1 = R2 + R3
I2: R4 = R1 + R5
```

第二個指令 `I2` 需要使用 `R1`，但 `R1` 是第一個指令 `I1` 才剛要產生的結果。如果 `I2` 太早讀取 `R1`，它可能讀到舊值，導致運算錯誤。這就是 Data Hazard 中最常考的 RAW。

常見解法是 forwarding，讓 `I1` 算出的結果不必等到正式寫回暫存器，就直接送給 `I2` 使用。如果 forwarding 還是不夠，就需要 stall，讓 `I2` 等到資料可用。

### Control Hazard：分支或跳躍造成方向不確定

Control Hazard 指的是遇到分支或跳躍指令時，CPU 尚未確定下一個 PC 應該去哪裡。

例如：

```text
if (R1 == 0) jump LABEL
```

在條件判斷結果還沒出來前，CPU 不知道下一個要抓取的是順序中的下一條指令，還是 `LABEL` 位置的指令。若 CPU 先猜「不跳」，後來發現其實應該跳，就必須把已經抓進來的錯誤指令 flush 掉。

常見解法包括 branch prediction、delayed branch、flush 和 speculative execution。這些方法的共同目的，是降低分支造成的等待時間或錯誤成本。

## 國考常見考法

國考最常考的是定義題、分類題、配對題與解法題。

第一種是直接問 Hazard 的定義。答案要抓住「pipeline」、「下一個指令」、「無法在預定時脈進行」這幾個關鍵字。若只寫「造成錯誤」會太模糊，因為 Hazard 不一定立刻造成錯誤，也可能是被 stall 或 forwarding 正確處理掉。

第二種是給一個情境，問是哪一種 Hazard。看到「同一時間使用同一記憶體或功能單元」，通常是 Structural Hazard。看到「後一指令需要前一指令結果」，通常是 Data Hazard，尤其是 RAW。看到「分支、跳躍、下一個 PC 不確定」，通常是 Control Hazard。

第三種是問解法配對。例如 forwarding 主要對 Data Hazard 有幫助；branch prediction 主要對 Control Hazard 有幫助；增加硬體資源或分離 instruction/data cache 則常用來解 Structural Hazard。

第四種是考 RAW、WAR、WAW 的差異。基礎考試最常問 RAW，因為它最直覺，也最常出現在一般管線化處理器中。WAR 和 WAW 通常和指令亂序執行、暫存器重新命名等進階議題一起出現。

## 必要比較表與易混淆整理

### 三種 Hazard 比較表

| 類型 | 白話重點 | 典型原因 | 常見例子 | 常見解法 |
|---|---|---|---|---|
| Structural Hazard | 硬體資源不夠用 | 多個指令同時需要同一硬體 | 同時需要同一記憶體或功能單元 | 增加硬體資源、分離 instruction/data cache、排程調整 |
| Data Hazard | 資料順序卡住 | 指令間有資料相依 | 後一指令需要前一指令尚未產生的結果 | Forwarding、stall、compiler scheduling、register renaming |
| Control Hazard | 下一個 PC 不確定 | 分支或跳躍尚未決定 | 條件分支結果還沒出來 | Branch prediction、delayed branch、flush、speculative execution |

### Data Hazard 中的 RAW、WAR、WAW

| 類型 | 全名 | 白話意思 | 是否常考 |
|---|---|---|---|
| RAW | Read After Write | 後面指令要讀前面指令寫出的新資料，但新資料還沒寫好 | 最常考 |
| WAR | Write After Read | 後面指令太早寫入，可能破壞前面指令原本要讀的舊資料 | 較進階 |
| WAW | Write After Write | 兩個指令都要寫同一位置，若寫入順序錯誤，最後結果會錯 | 較進階 |

RAW 又稱 true dependency，因為後面的指令真的需要前面指令產生的值。WAR 和 WAW 常被稱為 name dependency，因為它們常常是因為使用同一個暫存器名稱而造成的順序問題，不一定代表真正的資料流需求。Register renaming 可以用不同實體暫存器承接資料，因此能降低 WAR 和 WAW 的影響。

### Forwarding 與 Stall 的差異

| 解法 | 白話意思 | 優點 | 限制 |
|---|---|---|---|
| Forwarding | 直接把剛算出的結果送給下一個需要的指令 | 可以減少等待，提高效能 | 不是所有情況都能完全避免 stall |
| Stall | 讓管線暫停等待 | 簡單可靠，可以避免錯誤 | 會插入空白週期，降低效能 |

Forwarding 像是結果一算出來就先借給下一個指令用；stall 則是叫下一個指令先等等。考試若問「哪個方法可減少 RAW hazard 的停等」，通常優先想到 forwarding。

### Control Hazard 與 Data Hazard 的易混淆點

Data Hazard 的問題在於「值還沒準備好」。Control Hazard 的問題在於「下一條指令位置還不知道」。所以看到暫存器結果、資料讀寫、前後指令相依時，往 Data Hazard 想；看到 branch、jump、PC、分支預測時，往 Control Hazard 想。

## 國考答題句

1. Hazard 是指在 pipeline 中，使下一個指令無法於預定時脈繼續執行的情況。

2. Structural Hazard 是因硬體資源衝突而造成，例如同一時間多個管線階段需要同一記憶體或功能單元。

3. Data Hazard 是因指令間資料相依而造成，例如後一指令需要前一指令尚未產生或尚未寫回的結果。

4. RAW 是最常見的 Data Hazard，表示後一指令要讀取前一指令寫入的新資料，但該資料尚未準備好。

5. Control Hazard 是因分支或跳躍造成下一個 PC 不確定，使管線可能抓取錯誤路徑上的指令。

6. Structural Hazard 可透過增加硬體資源、分離 instruction cache 與 data cache，或調整指令排程來改善。

7. Data Hazard 可透過 forwarding、stall、compiler scheduling 或 register renaming 改善。

8. Control Hazard 可透過 branch prediction、delayed branch、flush 或 speculative execution 改善。

## 容易考的判斷題

1. **Pipeline 中，只要下一個指令無法在預定時脈進行，就可稱為 Hazard。**  
   正確。這正是 Hazard 的核心定義。

2. **Structural Hazard 是由資料相依造成。**  
   錯誤。資料相依是 Data Hazard；Structural Hazard 是硬體資源衝突。

3. **同一時間兩個管線階段都需要使用同一個記憶體，可能造成 Structural Hazard。**  
   正確。因為這是典型的硬體資源衝突。

4. **RAW 表示後一指令要讀取前一指令寫出的結果。**  
   正確。RAW 是 Read After Write，也是基礎考試最常見的 Data Hazard。

5. **Forwarding 的目的之一，是降低 Data Hazard 造成的等待。**  
   正確。Forwarding 可以把尚未正式寫回的結果直接送給需要的後續指令。

6. **Control Hazard 通常與分支或跳躍指令有關。**  
   正確。因為分支或跳躍會讓下一個 PC 在短時間內不確定。

7. **Branch prediction 主要用來解決 Structural Hazard。**  
   錯誤。Branch prediction 主要用來降低 Control Hazard 的影響。

8. **Flush 是把錯誤路徑上的指令清除，常見於分支預測錯誤後。**  
   正確。預測錯誤時，管線中已經抓到的錯誤指令不能繼續執行。

9. **Stall 可以避免錯誤，但會降低管線效能。**  
   正確。Stall 會讓管線等待，等於插入沒有實際工作的空白週期。

10. **Register renaming 可用來減少 WAR、WAW 這類名稱相依造成的問題。**  
    正確。它透過不同實體暫存器降低同名暫存器造成的衝突。

## 考前速記小抄

Hazard 定義要背成：**Pipeline 中造成下一個指令無法在預定時脈進行的情況。**

三種 Hazard 速記：

- **Structural：硬體衝突。** 看到同一記憶體、同一功能單元、資源不足，就選它。
- **Data：資料相依。** 看到前一指令結果、後一指令要用、暫存器讀寫，就選它。
- **Control：分支不確定。** 看到 branch、jump、PC 不確定、預測錯誤，就選它。

解法配對速記：

- Structural Hazard：增加硬體資源、分離 instruction/data cache、排程調整。
- Data Hazard：forwarding、stall、compiler scheduling、register renaming。
- Control Hazard：branch prediction、delayed branch、flush、speculative execution。

Data Hazard 小抄：

- RAW：後面讀、前面寫；後面要用前面產生的新值，最常考。
- WAR：後面寫、前面讀；後面太早寫會干擾前面讀舊值。
- WAW：後面寫、前面也寫；寫入順序錯會讓最後結果錯。

考場判斷口訣：

**搶硬體是 Structural，等資料是 Data，猜分支是 Control。**
