# USB 速度

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

**USB** 是一種常見的電腦連接介面，全名是 Universal Serial Bus，常用來連接鍵盤、滑鼠、隨身碟、外接硬碟、手機、印表機等設備。國考在問 USB 時，通常重點不是外型，而是版本、速度與名稱對應。

**理論速度** 是規格書上標示的最高傳輸速率，代表在非常理想的情況下可能達到的上限。考試題目若沒有特別說「實際速度」，通常要用理論速度作答。

**實際速度** 是日常使用時真正感受到的傳輸速度。它通常低於理論速度，因為會受到線材品質、裝置能力、控制器、協定開銷、檔案大小與系統狀態影響。

**Mbps** 是 megabits per second，意思是每秒傳輸多少百萬個位元。注意這裡的 b 是 bit，不是 Byte。網路速度與 USB 早期速度常用 Mbps 表示。

**Gbps** 是 gigabits per second，意思是每秒傳輸多少十億個位元。USB 3.0 之後常見速度多用 Gbps 表示。

**Low Speed、Full Speed、High Speed、SuperSpeed** 是 USB 規格常搭配的名稱，不是日常形容詞。考試看到這些名稱時，要把它們當成固定名詞背起來，例如 High Speed 指 USB 2.0 的 480 Mbps，而不是泛指「很快」。

**Gen** 是 generation 的縮寫，意思是「第幾代」或「某一代規格」。USB 3.x 的命名曾多次改版，因此同一種速度可能有多個名稱，例如 USB 3.0 後來也可被稱為 USB 3.1 Gen 1 或 USB 3.2 Gen 1x1。

**x1、x2** 可先理解成資料通道數量。像 USB 3.2 Gen 2x2 中的 x2 代表使用兩條通道，所以速度可到 20 Gbps；如果是 Gen 2x1，則常見速度是 10 Gbps。

## 核心想法

USB 速度的考點可以先掌握一句話：**版本越新通常速度越快，但考試最常考的是「版本、常見名稱、理論速度」的對應，而不是只問新舊順序。**

最基本的速度階梯是從 1.5 Mbps、12 Mbps、480 Mbps，進入 5 Gbps、10 Gbps、20 Gbps、40 Gbps，到新規格的 80 Gbps。新手容易卡住的地方，是 USB 的名稱改版很多，尤其 USB 3.0、USB 3.1、USB 3.2 之間常被重新命名。準備考試時，不要只背「USB 3 比 USB 2 快」，而要能看到題目名稱就立刻對到速度。

另一個核心觀念是：**考題若問規格速度，答理論速度；若問實際使用，則要補充會受硬體與環境限制。**例如 USB 3.0 的理論速度是 5 Gbps，但如果使用品質較差的線材、舊控制器，或連接的裝置本身寫入速度很慢，就不一定能達到 5 Gbps。

## 具體範例

假設題目問：「USB 2.0 的 High Speed 理論傳輸速率為何？」這時不要被 High Speed 的英文迷惑，以為答案是 5 Gbps。High Speed 是 USB 2.0 的固定名稱，理論速度是 **480 Mbps**。

假設題目問：「USB 3.0 的理論速度為何？」國考常見作答抓 **5 Gbps**。雖然後來 USB 命名改成 USB 3.1 Gen 1 或 USB 3.2 Gen 1x1，但速度仍是 5 Gbps。

假設題目問：「USB 3.1 Gen 2 的理論速度為何？」重點在 Gen 2，常見對應是 **10 Gbps**。如果題目改成 USB 3.2 Gen 2x1，也一樣是 10 Gbps。

假設題目問：「USB 3.2 Gen 2x2 的理論速度為何？」看到 x2 要想到兩條通道，速度是 **20 Gbps**。它和 USB4 Gen 2x2 一樣都可對到 20 Gbps，但名稱所屬的規格世代不同。

假設有人買了 USB 3.0 隨身碟，卻發現傳檔速度沒有 5 Gbps。這不代表規格表一定錯，而是因為 5 Gbps 是理論上限，實際速度還會受到隨身碟晶片、快閃記憶體寫入速度、線材、電腦連接埠與作業系統處理開銷影響。

## 國考常見考法

第一種考法是直接問速度。例如「USB 2.0 的理論傳輸速率為何？」答案是 480 Mbps；「USB 3.0 的理論傳輸速率為何？」答案是 5 Gbps。這類題目通常是記憶題，關鍵在於不要把 Mbps 和 Gbps 看錯。

第二種考法是問名稱對應。例如題目給 Full Speed，要知道它不是 USB 2.0，而是 USB 1.0 / 1.1 的 12 Mbps；題目給 High Speed，才是 USB 2.0 的 480 Mbps；題目給 SuperSpeed，通常是 USB 3.0 的 5 Gbps。

第三種考法是命名改版混淆。USB 3.0、USB 3.1 Gen 1、USB 3.2 Gen 1x1 常可視為同一速度等級，都是 5 Gbps。USB 3.1 Gen 2、USB 3.2 Gen 2x1 則是 10 Gbps。

第四種考法是問實際速度是否一定等於理論速度。這類題目常見答案是「不一定」。因為理論速度是規格上限，實際速度會被線材、控制器、協定開銷與裝置本身效能限制。

第五種考法是比較題。題目可能問哪一個最快、哪一個最慢，或要求由慢到快排序。遇到排序題，先把單位統一概念化：Gbps 遠大於 Mbps；USB 2.0 的 480 Mbps 小於 USB 3.0 的 5 Gbps。

## 必要比較表與易混淆整理

### 常見版本與理論速度

| 版本 | 常見名稱 | 理論速度 |
| --- | --- | --- |
| USB 1.0 / 1.1 Low Speed | Low Speed | 1.5 Mbps |
| USB 1.0 / 1.1 Full Speed | Full Speed | 12 Mbps |
| USB 2.0 | High Speed | 480 Mbps |
| USB 3.0 / USB 3.1 Gen 1 / USB 3.2 Gen 1x1 | SuperSpeed | 5 Gbps |
| USB 3.1 Gen 2 / USB 3.2 Gen 2x1 | SuperSpeed+ | 10 Gbps |
| USB 3.2 Gen 2x2 | SuperSpeed USB 20Gbps | 20 Gbps |
| USB4 Gen 2x2 | USB4 20Gbps | 20 Gbps |
| USB4 Gen 3x2 | USB4 40Gbps | 40 Gbps |
| USB4 Version 2.0 / USB 80Gbps | USB4 80Gbps | 80 Gbps |

### 易混淆整理

| 容易混淆處 | 正確理解 |
| --- | --- |
| Full Speed 聽起來像很快 | Full Speed 是 USB 1.0 / 1.1 的 12 Mbps，不是 USB 2.0 或 USB 3.0 |
| High Speed 聽起來像最高速 | High Speed 是 USB 2.0 的 480 Mbps，只是當時相對較快 |
| USB 3.0、USB 3.1 Gen 1、USB 3.2 Gen 1x1 | 常見考法都抓 5 Gbps |
| USB 3.1 Gen 2、USB 3.2 Gen 2x1 | 常見考法都抓 10 Gbps |
| USB 3.2 Gen 2x2 與 USB4 Gen 2x2 | 兩者都可到 20 Gbps，但規格名稱不同 |
| USB4 常見速度 | 傳統常見考法常抓 40 Gbps，但新規格 USB4 Version 2.0 已到 80 Gbps |
| 理論速度與實際速度 | 理論速度是規格上限，實際速度通常較低 |

### 由慢到快速記

| 順序 | 速度 | 常見對應 |
| --- | --- | --- |
| 1 | 1.5 Mbps | USB Low Speed |
| 2 | 12 Mbps | USB Full Speed |
| 3 | 480 Mbps | USB 2.0 High Speed |
| 4 | 5 Gbps | USB 3.0 SuperSpeed |
| 5 | 10 Gbps | USB 3.1 Gen 2 SuperSpeed+ |
| 6 | 20 Gbps | USB 3.2 Gen 2x2、USB4 Gen 2x2 |
| 7 | 40 Gbps | USB4 Gen 3x2 |
| 8 | 80 Gbps | USB4 Version 2.0 |

## 國考答題句

USB 2.0 又稱 High Speed，理論傳輸速率為 480 Mbps。

USB 3.0 又稱 SuperSpeed，理論傳輸速率為 5 Gbps；在新版命名中也常對應 USB 3.1 Gen 1 或 USB 3.2 Gen 1x1。

USB 3.1 Gen 2 與 USB 3.2 Gen 2x1 的理論傳輸速率通常為 10 Gbps。

USB 3.2 Gen 2x2 的理論傳輸速率為 20 Gbps，其中 x2 可理解為使用兩條通道。

USB4 常見規格可到 40 Gbps，而 USB4 Version 2.0 / USB 80Gbps 可到 80 Gbps。

USB 的實際傳輸速度不一定等於理論速度，因為會受到線材、控制器、協定開銷與裝置效能限制。

## 容易考的判斷題

1. USB 2.0 的理論速度是 480 Mbps。  
   **正確。**USB 2.0 的常見名稱是 High Speed，國考常考 480 Mbps。

2. Full Speed 是 USB 2.0 的常見名稱。  
   **錯誤。**Full Speed 是 USB 1.0 / 1.1 的 12 Mbps；USB 2.0 才是 High Speed。

3. USB 3.0 的理論速度通常為 5 Gbps。  
   **正確。**USB 3.0 常見名稱是 SuperSpeed，也常與 USB 3.1 Gen 1、USB 3.2 Gen 1x1 對應。

4. USB 3.1 Gen 2 的理論速度通常為 10 Gbps。  
   **正確。**Gen 2 是常見 10 Gbps 的考點。

5. USB 3.2 Gen 2x2 的理論速度是 20 Gbps。  
   **正確。**x2 表示通道數增加，因此可達 20 Gbps。

6. USB4 的所有版本都只能到 40 Gbps。  
   **錯誤。**USB4 Gen 3x2 可到 40 Gbps，但 USB4 Version 2.0 / USB 80Gbps 已可到 80 Gbps。

7. 只要買 USB 3.0 裝置，實際傳輸速度一定等於 5 Gbps。  
   **錯誤。**5 Gbps 是理論速度，實際速度會受線材、控制器、協定開銷與裝置效能影響。

8. USB 3.0、USB 3.1 Gen 1、USB 3.2 Gen 1x1 在常見考法中都可對應 5 Gbps。  
   **正確。**這是 USB 命名改版造成的常見混淆點。

## 考前速記小抄

USB 速度先背主線：**1.5 Mbps、12 Mbps、480 Mbps、5 Gbps、10 Gbps、20 Gbps、40 Gbps、80 Gbps**。

名稱對應要特別記：**Low Speed = 1.5 Mbps，Full Speed = 12 Mbps，High Speed = 480 Mbps，SuperSpeed = 5 Gbps，SuperSpeed+ = 10 Gbps**。

USB 3.x 命名最容易混淆：**USB 3.0 = USB 3.1 Gen 1 = USB 3.2 Gen 1x1 = 5 Gbps**；**USB 3.1 Gen 2 = USB 3.2 Gen 2x1 = 10 Gbps**。

看到 **Gen 2x2** 要想到 **20 Gbps**；看到 **USB4 Gen 3x2** 要想到 **40 Gbps**；看到 **USB4 Version 2.0 或 USB 80Gbps** 要想到 **80 Gbps**。

考題問「理論速度」就答表格速度；考題問「實際使用」就補一句：**實際速度會受線材、控制器、協定開銷與裝置效能影響，通常低於理論值。**
