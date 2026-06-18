# 網路概論 1：OSI 七層 + TCP/IP ★

> 科目：網路概論｜幾乎每年必考、是全科的地圖
> 學習方式：每層的**職責**屬【理解】；**哪些協定/設備/PDU 屬哪層**屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。
> （OSI 是穩定標準，已查內部一致；易記錯的 port／標準／速度留到網路 6、7 再上網查證。）

---

## 一、為什麼先學 OSI（用途）　【理解】

網路裡幾乎每個協定、每個設備、每個概念，都「掛在某一層」。先把七層的地圖建起來，之後遇到任何零碎名詞（DNS、ARP、交換器…），你只要問「**它在哪一層、做什麼**」就自動歸位——不會變成背不完的縮寫海。

OSI 由上（第 7 層，最靠近使用者）到下（第 1 層，最靠近硬體）。

---

## 二、七層總表（核心，務必熟）

| 層 | 名稱 | 職責（做什麼）【理解】 | 傳輸單位 PDU | 常見協定 | 常見設備 |
|---|---|---|---|---|---|
| **7** | 應用層 Application | 直接面對使用者／應用程式，提供網路服務（網頁、郵件、檔案、名稱解析） | Data 資料 | HTTP、HTTPS、FTP、SMTP、POP3、IMAP、DNS、DHCP、SNMP、Telnet | 閘道器 Gateway |
| **6** | 表現層 Presentation | 資料格式轉換、加解密、壓縮（讓兩端看得懂彼此資料） | Data | SSL/TLS、JPEG、MPEG、ASCII | （無特定設備） |
| **5** | 會議層 Session | 建立／管理／結束兩端的連線會議、對話控制 | Data | NetBIOS、RPC | （無特定設備） |
| **4** | 傳輸層 Transport | 端到端傳輸、可靠性、流量控制、分段重組；用 **port** 區分應用 | **Segment**(TCP)／**Datagram**(UDP) | TCP、UDP | 閘道器、L4 交換器 |
| **3** | 網路層 Network | 邏輯定址（**IP**）、路由選路、封包轉送 | **Packet 封包** | IP、ICMP、IGMP、IPSec、RIP/OSPF/BGP | **路由器 Router**、L3 交換器 |
| **2** | 資料鏈結層 Data Link | 實體定址（**MAC**）、同網段訊框傳遞、錯誤偵測、流量控制 | **Frame 訊框** | Ethernet、PPP、HDLC | **交換器 Switch(L2)**、橋接器 Bridge、網卡 NIC |
| **1** | 實體層 Physical | 傳輸原始位元、定義電氣／機械規格（電壓、接頭、纜線、訊號） | **Bit 位元** | （規格，如 RS-232、纜線標準） | **集線器 Hub**、中繼器 Repeater、纜線 |

---

## 三、PDU（傳輸單位）速記　【硬背】

由下到上：**位元（Bit）→ 訊框（Frame）→ 封包（Packet）→ 區段（Segment）→ 資料（Data）**

| 層 | L1 | L2 | L3 | L4 | L5–7 |
|---|---|---|---|---|---|
| 單位 | Bit 位元 | Frame 訊框 | Packet 封包 | Segment（TCP）/ Datagram（UDP） | Data 資料 |

> 這題超常考：給你一個層，問傳輸單位是什麼。

---

## 四、七層記憶口訣

由第 1 層往上（Physical → Application）：

> **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way
> （Physical, Data link, Network, Transport, Session, Presentation, Application）

---

## 五、TCP/IP 模型 vs OSI　【理解】

實務上用的是 TCP/IP 模型。常見「5 層」版本，跟 OSI 幾乎 1:1，只是把 OSI 上面三層合併：

| TCP/IP（5 層） | 對應 OSI |
|---|---|
| 應用層 Application | OSI 第 **5、6、7** 層（會議＋表現＋應用合併） |
| 傳輸層 Transport | OSI 第 4 層 |
| 網路層 Network／Internet | OSI 第 3 層 |
| 資料鏈結層 Data Link | OSI 第 2 層 |
| 實體層 Physical | OSI 第 1 層 |

> 也有「4 層」版本：再把「實體層＋資料鏈結層」合併成 **網路存取層（Network Access）**。

---

## 六、重點與易混淆　【理解】＋【硬背】

- **設備落在哪層（超常考）**：Hub／Repeater ＝ **L1**；Switch(L2)／Bridge ＝ **L2**；Router／L3 Switch ＝ **L3**；Gateway ＝ 可到 **L7**（協定轉換）。
- **三個動作配三層**：**交換（switching，看 MAC）在 L2、路由（routing，看 IP）在 L3、可靠傳輸（TCP）在 L4**。
- **誠實標注一個爭議**：**ARP／RARP**（處理 IP ↔ MAC）的層級有爭議，常見放在 **L2（資料鏈結）** 或 **L3（網路）**，**看教材／題目定義**；但 **ICMP、IGMP 明確屬 L3**。考前對一下你的考古題慣例。
- **資料單位三連**：bit → frame → packet → segment，是必拿的送分題。
