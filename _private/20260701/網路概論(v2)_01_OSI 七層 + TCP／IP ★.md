# OSI 七層 + TCP/IP ★

> 科目：網路概論｜幾乎每年必考，是**全科的地圖**。先把這張地圖建起來，之後遇到任何零碎名詞（DNS、ARP、交換器…），你只要問一句「它在哪一層、做什麼」，它就會自動歸位——網路就不再是背不完的縮寫海。
>
> 學習方式：每一層的**職責**屬【理解】；哪些協定／設備／PDU 掛在哪一層屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。

---

## 🎯 開場題目

> 考題常這樣問：
>
> 1. 「**交換器（Switch）** 運作在 OSI 的第幾層？」
> 2. 「資料在 **網路層（Network）** 的傳輸單位（PDU）叫什麼？」
> 3. 「**IP** 協定屬於哪一層？**TCP** 又屬於哪一層？」

先別急著往下看答案，試著自己回答看看。

---

## 🤔 先想想

如果你完全背不出來，代表你還缺一張「地圖」。給你三個提示，幫你建立直覺：

- 網路通訊是**分層**的：從最靠近使用者的**第 7 層**，一路到最靠近硬體的**第 1 層**。
- 每一層只做**自己份內的事**，並把資料交給下一層——像公司裡的分工。
- 幾乎每個名詞都「**掛在某一層**」。記住它掛哪層，考題就迎刃而解。

帶著這三點，我們來拆解。

---

## 📖 觀念拆解

### 一、為什麼要先學 OSI？

OSI（**O**pen **S**ystems **I**nterconnection，開放系統互連）模型，把網路通訊分成 **7 層**。

用一個比喻：**寄一個國際包裹**。你（應用層）只想把禮物送到朋友手上，但中間其實經過「打包 → 貼地址 → 交給貨運 → 上飛機 → …」很多關卡，每個關卡只負責一件事。OSI 就是把這些關卡標準化、編號。

方向記牢：**由上（第 7 層，最靠近人）到下（第 1 層，最靠近硬體）**。

### 二、七層總表（核心，務必熟）

| 層 | 名稱 | 職責（做什麼）【理解】 | 傳輸單位 PDU | 常見協定 | 常見設備 |
|---|---|---|---|---|---|
| 7 | 應用層 Application | 直接面對使用者／應用程式，提供網路服務（網頁、郵件、檔案、名稱解析） | Data 資料 | HTTP、HTTPS、FTP、SMTP、POP3、IMAP、DNS、DHCP、SNMP、Telnet | 閘道器 Gateway |
| 6 | 表現層 Presentation | 資料格式轉換、加解密、壓縮（讓兩端看得懂彼此資料） | Data | SSL/TLS、JPEG、MPEG、ASCII | （無特定設備） |
| 5 | 會議層 Session | 建立／管理／結束兩端的連線會議、對話控制 | Data | NetBIOS、RPC | （無特定設備） |
| 4 | 傳輸層 Transport | 端到端傳輸、可靠性、流量控制、分段重組；用 port 區分應用 | Segment(TCP)／Datagram(UDP) | TCP、UDP | 閘道器、L4 交換器 |
| 3 | 網路層 Network | 邏輯定址（IP）、路由選路、封包轉送 | Packet 封包 | IP、ICMP、IGMP、IPSec、RIP/OSPF/BGP | 路由器 Router、L3 交換器 |
| 2 | 資料鏈結層 Data Link | 實體定址（MAC）、同網段訊框傳遞、錯誤偵測、流量控制 | Frame 訊框 | Ethernet、PPP、HDLC | 交換器 Switch(L2)、橋接器 Bridge、網卡 NIC |
| 1 | 實體層 Physical | 傳輸原始位元、定義電氣／機械規格（電壓、接頭、纜線、訊號） | Bit 位元 | （規格，如 RS-232、纜線標準） | 集線器 Hub、中繼器 Repeater、纜線 |

📌 **看懂表裡的白話：**
- 「**端到端**」＝從來源主機直送目的主機；「**流量控制**」＝送太快時讓接收端來得及（控速）；「**對話控制**（會議層）」＝管理一次連線從開始到結束（像通話的接通／掛斷）。
- 「**邏輯定址（IP，可變）**」對上「**實體定址（MAC，燒在網卡）**」——同一台電腦，IP 可以換、MAC 通常不變。
- 協定欄一次很多，**先不用全背**：細節在傳輸層、應用層會講，這裡只要知道「它掛哪層」。少數只在這裡出現的：SMTP／POP3／IMAP＝寄信／收信、SNMP＝網路管理監控、NetBIOS／RPC＝讓不同機器的程式互相呼叫、PPP／HDLC＝點對點／廣域網連線協定、RS-232＝早期序列埠規格。

### 三、PDU（傳輸單位）速記　【硬背】

**PDU（Protocol Data Unit）** ＝ 每一層對資料的「包裝單位」名稱。

為什麼同一份資料、每層名字不同？因為資料往下送時，每一層都會把上一層的東西「包起來」、再貼上自己這層的標頭（header）——像寄包裹一層層加外箱、貼標籤。這個動作叫 **封裝（Encapsulation）**；送到對方再一層層拆開叫 **解封裝（Decapsulation）**。

由下到上：**位元（Bit）→ 訊框（Frame）→ 封包（Packet）→ 區段（Segment）→ 資料（Data）**

| 層 | L1 | L2 | L3 | L4 | L5–7 |
|---|---|---|---|---|---|
| 單位 | Bit 位元 | Frame 訊框 | Packet 封包 | Segment（TCP）/ Datagram（UDP） | Data 資料 |

> 這題超常考：給你一個層，問傳輸單位是什麼；反過來也要會。

### 四、七層記憶口訣

由第 1 層往上（Physical → Application）：

> **Please Do Not Throw Sausage Pizza Away**
> （**P**hysical, **D**ata link, **N**etwork, **T**ransport, **S**ession, **P**resentation, **A**pplication）

### 五、TCP/IP 模型 vs OSI　【理解】

實務上真正在用的是 **TCP/IP 模型**。最常見的「**5 層**」版本，跟 OSI 幾乎 1:1，只是把 OSI 上面三層合併：

| TCP/IP（5 層） | 對應 OSI |
|---|---|
| 應用層 Application | OSI 第 5、6、7 層（會議＋表現＋應用合併） |
| 傳輸層 Transport | OSI 第 4 層 |
| 網路層 Network／Internet | OSI 第 3 層 |
| 資料鏈結層 Data Link | OSI 第 2 層 |
| 實體層 Physical | OSI 第 1 層 |

也有「**4 層**」版本：再把「實體層＋資料鏈結層」合併成 **網路存取層（Network Access）**。

---

## ✅ 回到題目：解答

1. **交換器（Switch）運作在第幾層？** → **第 2 層（資料鏈結層）**，因為它看 **MAC 位址** 做交換。（L3 交換器才到第 3 層。）
2. **網路層的 PDU 叫什麼？** → **Packet 封包**。
3. **IP 屬哪層？TCP 屬哪層？** → **IP 在第 3 層（網路層）**；**TCP 在第 4 層（傳輸層）**。

---

## 📌 重點整理

- OSI 共 **7 層**，由上到下：應用 7 → 表現 6 → 會議 5 → 傳輸 4 → 網路 3 → 資料鏈結 2 → 實體 1。
- **PDU 五連（由下到上）**：Bit → Frame → Packet → Segment → Data。
- **設備對應層（超常考）**：Hub／Repeater＝L1；Switch(L2)／Bridge＝L2；Router／L3 Switch＝L3；Gateway＝可到 L7。
- **三個動作配三層**：交換（看 MAC）在 L2、路由（看 IP）在 L3、可靠傳輸（TCP）在 L4。
- TCP/IP 模型是實務版：5 層與 OSI 幾乎 1:1（上三層合併為應用層）。

---

## ⚠️ 常見陷阱

- **IP vs MAC 別混**：IP＝邏輯定址（可變，L3）；MAC＝實體定址（燒在網卡，L2）。
- **Switch 的層級**：一般 Switch 是 L2；L3 Switch 才有路由能力。題目問哪個要看清楚。
- **ARP／RARP 有爭議**：處理 IP ↔ MAC 對應，常見放在 **L2（資料鏈結）** 或 **L3（網路）**，看教材／題目定義；但 **ICMP、IGMP 明確屬 L3**。考前務必對一下你手上考古題的慣例。
- **PDU 名稱別張冠李戴**：傳輸層才叫 Segment，網路層是 Packet，資料鏈結層是 Frame。

---

## 📝 練習題（含解答）

**Q1.** 由第 1 層到第 7 層，正確順序是？
<details><summary>看解答</summary>

實體 → 資料鏈結 → 網路 → 傳輸 → 會議 → 表現 → 應用（口訣：Please Do Not Throw Sausage Pizza Away）。
</details>

**Q2.** 路由器（Router）與集線器（Hub）分別在哪一層？
<details><summary>看解答</summary>

Router＝**L3（網路層）**，看 IP 選路；Hub＝**L1（實體層）**，只是把訊號廣播出去。
</details>

**Q3.** 傳輸層用什麼來區分不同的應用程式（例如網頁 vs 郵件）？
<details><summary>看解答</summary>

用 **Port（埠號）**。傳輸層以 port 區分應用，例如 HTTP 走 80、HTTPS 走 443。
</details>

**Q4.** 「封裝（Encapsulation）」是什麼意思？發生在資料往上送還是往下送？
<details><summary>看解答</summary>

封裝＝每一層把上層資料包起來、再加上自己的標頭。發生在資料**往下送**（傳送端）；接收端再一層層**解封裝**往上拆。
</details>

**Q5.** TCP/IP 的「5 層」模型，其「應用層」對應到 OSI 的哪幾層？
<details><summary>看解答</summary>

對應 OSI 的**第 5、6、7 層**（會議層＋表現層＋應用層合併）。
</details>
