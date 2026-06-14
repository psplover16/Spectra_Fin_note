# OSI 7 層與 TCP/IP 5 層

## 目錄

1. OSI 是什麼
2. TCP/IP 是什麼
3. OSI 7 層與 TCP/IP 5 層對照表
4. 各層重點整理
5. 國考常見考法
6. 易混淆整理
7. 國考必背整理
8. 容易考的判斷題
9. 考前速記小抄

## OSI 是什麼

開放式系統互連模型（Open Systems Interconnection Model, OSI Model）是一個用來解釋網路通訊流程的分層模型。它把一台電腦送資料到另一台電腦的過程，拆成 7 個層次，由上到下分別是應用層、表現層、會議層、傳輸層、網路層、資料連結層、實體層。

分層的核心想法是「各層各自負責一部分工作」。上層比較接近使用者與應用程式，下層比較接近硬體、線路與訊號。考試常用 OSI 模型來問：「某個協定、設備、資料單位或功能屬於第幾層？」

舉例來說，使用瀏覽器開網頁時，應用層會用超文字傳輸協定（HyperText Transfer Protocol, HTTP）處理網頁請求；傳輸層可能用傳輸控制協定（Transmission Control Protocol, TCP）建立可靠傳輸；網路層用網際網路協定（Internet Protocol, IP）決定目的位址；資料最後在實體層轉成位元訊號送出去。

國考最常考的不是背完整理論，而是判斷「功能對應層級」。例如：路由選擇是網路層、埠號是傳輸層、媒體存取控制位址（Media Access Control Address, MAC Address）是資料連結層、位元傳輸是實體層。

## TCP/IP 是什麼

TCP/IP 模型（TCP/IP Model）是網際網路實際運作時常用的分層模型。它常見可分為 5 層：應用層、傳輸層、網際網路層、資料連結層、實體層。

TCP/IP 模型的核心想法和 OSI 類似，都是把通訊工作分層。不過 TCP/IP 模型更貼近實際網路協定的使用方式。國考常考的重點是：TCP/IP 模型通常把 OSI 的應用層、表現層、會議層合併成 TCP/IP 的應用層。

具體來說，在 OSI 模型中，加密、壓縮、資料格式轉換會放在表現層；會談建立、維持與結束會放在會議層。但在 TCP/IP 模型中，這些功能通常都歸在應用層一起理解。

## OSI 7 層與 TCP/IP 5 層對照表

協定資料單元（Protocol Data Unit, PDU）是指每一層處理資料時所使用的資料單位名稱。考試常把 PDU、功能、協定、設備混在一起考，所以要一起背。

| OSI 層級 | OSI 層名 | TCP/IP 5 層 | 常見 PDU | 核心功能 | 常見協定或技術 | 常見設備 | 國考常見判斷 |
|---:|---|---|---|---|---|---|---|
| 第 7 層 | 應用層（Application Layer） | 應用層（Application Layer） | 資料（Data） | 提供使用者可直接使用的網路服務 | HTTP、網域名稱系統（Domain Name System, DNS）、簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP） | 閘道器（Gateway） | 看到網頁、郵件、名稱解析，多半想到應用層 |
| 第 6 層 | 表現層（Presentation Layer） | 應用層 | 資料（Data） | 資料格式轉換、加密、壓縮 | 安全通訊端層（Secure Sockets Layer, SSL）、傳輸層安全性（Transport Layer Security, TLS）、JPEG、ASCII | 閘道器 | 看到加密、壓縮、編碼、格式轉換，想到表現層 |
| 第 5 層 | 會議層（Session Layer） | 應用層 | 資料（Data） | 建立、維持、同步、結束會談 | 遠端程序呼叫（Remote Procedure Call, RPC） | 閘道器 | 看到會談、連線管理、同步點，想到會議層 |
| 第 4 層 | 傳輸層（Transport Layer） | 傳輸層（Transport Layer） | 區段（Segment）或資料報（Datagram） | 端對端傳輸、可靠性、流量控制、埠號 | TCP、使用者資料報協定（User Datagram Protocol, UDP） | 第四層交換器、防火牆 | 看到 TCP、UDP、port、可靠傳輸，想到傳輸層 |
| 第 3 層 | 網路層（Network Layer） | 網際網路層（Internet Layer） | 封包（Packet） | 邏輯定址、路由選擇、跨網路傳送 | IP、網際網路控制訊息協定（Internet Control Message Protocol, ICMP） | 路由器（Router） | 看到 IP、routing、router，想到網路層 |
| 第 2 層 | 資料連結層（Data Link Layer） | 資料連結層（Data Link Layer） | 訊框（Frame） | MAC 位址、錯誤偵測、同一網段傳送 | 乙太網路（Ethernet）、位址解析協定（Address Resolution Protocol, ARP）、點對點協定（Point-to-Point Protocol, PPP） | 交換器（Switch）、網橋（Bridge） | 看到 MAC、frame、switch、error detection，想到資料連結層 |
| 第 1 層 | 實體層（Physical Layer） | 實體層（Physical Layer） | 位元（Bit） | 傳輸媒介、電氣訊號、光訊號、接頭規格 | 電纜、光纖、無線電訊號 | 集線器（Hub）、中繼器（Repeater） | 看到 bit、訊號、線材、接頭，想到實體層 |

## 各層重點整理

### 第 1 層：實體層（Physical Layer）

實體層（Physical Layer）負責最底層的位元傳輸。位元（Bit）是電腦資料的最小單位，只有 0 與 1。實體層不理解資料內容，也不負責 IP 位址或 MAC 位址，它只管訊號如何在傳輸媒介上送出去。

核心想法是「把 0 與 1 變成可以在媒介上傳送的訊號」。傳輸媒介（Transmission Medium）是指資料傳送所使用的通道，例如雙絞線、同軸電纜、光纖或無線電波。電氣訊號、光訊號、接頭規格、線材規格都屬於實體層範圍。

具體範例是集線器（Hub）收到訊號後，把訊號轉送到其他連接埠；中繼器（Repeater）則用來放大或再生訊號，讓訊號可以傳得更遠。這些設備不會依照 IP 或 MAC 做聰明判斷。

國考考法通常是問「bit 屬於哪一層？」或「Hub、Repeater 屬於哪一層？」答案都是實體層。只要題目出現傳輸媒介、電壓、接腳、訊號、位元流，優先想到實體層。

### 第 2 層：資料連結層（Data Link Layer）

資料連結層（Data Link Layer）負責同一個區域網路或同一段鏈路中的資料傳送。訊框（Frame）是資料連結層的 PDU。媒體存取控制位址（Media Access Control Address, MAC Address）是網路介面卡上的硬體位址，常用來在區域網路中識別裝置。

核心想法是「把位元整理成可在同一條鏈路上傳送的訊框」。資料連結層也常處理錯誤偵測（Error Detection），例如檢查資料在傳送過程中是否可能出錯，但它通常不保證像 TCP 那樣的端對端可靠傳輸。

具體範例是交換器（Switch）依照 MAC 位址決定訊框要送到哪個連接埠。乙太網路（Ethernet）也是資料連結層常見技術。位址解析協定（Address Resolution Protocol, ARP）用來查詢 IP 位址對應的 MAC 位址，常被歸在資料連結層附近考。

國考考法常出現「Frame、MAC、Switch、Bridge、Error Detection」這組關鍵字。看到 MAC 位址不要選網路層；看到 IP 位址才是網路層。

### 第 3 層：網路層（Network Layer）

網路層（Network Layer）負責不同網路之間的傳送。封包（Packet）是網路層的 PDU。網際網路協定（Internet Protocol, IP）提供邏輯位址，讓資料可以從來源網路送到目的網路。

核心想法是「決定封包要走哪條路」。路由選擇（Routing）是指根據目的 IP 位址與路由表，選擇封包下一站要送往哪裡。路由器（Router）是典型的網路層設備。

具體範例是你從家裡連到外部網站時，封包通常會經過多台路由器，每台路由器看目的 IP 位址，決定下一步要轉送到哪個方向。ICMP 常用於錯誤回報與診斷，例如 ping 指令常與 ICMP 有關。

國考考法常問「IP、Router、Routing、Packet」屬於哪一層。這些都要連到網路層。常見陷阱是把 Router 和 Switch 混在一起；Router 看 IP，Switch 看 MAC。

### 第 4 層：傳輸層（Transport Layer）

傳輸層（Transport Layer）負責主機上的程式與程式之間的端對端傳輸。區段（Segment）常指 TCP 的 PDU；資料報（Datagram）常指 UDP 的 PDU。埠號（Port Number）用來識別同一台主機上的不同應用程式，例如 HTTP 常用 TCP 80，HTTPS 常用 TCP 443。

核心想法是「把資料交給正確的應用程式，並視需要提供可靠傳輸」。TCP 是連線導向、可靠傳輸，具備確認、重傳、排序與流量控制等特性。UDP 是非連線導向、較輕量，通常不保證可靠性，但延遲較低、負擔較小。

具體範例是瀏覽器開啟網站時，通常會使用 TCP 與伺服器建立連線，確保資料完整送達。線上語音或即時影音有時使用 UDP，因為即時性比重傳每個遺失資料更重要。

國考考法常問「TCP、UDP、Port、Segment」屬於哪一層。看到可靠傳輸、流量控制、端對端、埠號，答案通常是傳輸層。

### 第 5 層：會議層（Session Layer）

會議層（Session Layer）負責會談的建立、維持、同步與結束。會談（Session）可以理解為兩端應用程式之間的一段通訊關係。

核心想法是「管理雙方對話的開始、進行與結束」。它關心的是通訊狀態與會談控制，而不是實體訊號、MAC 位址、IP 路由或埠號。

具體範例是某些遠端服務需要建立工作階段，並在通訊中維持狀態；若中途發生問題，可以透過同步點協助恢復。

國考考法通常很直覺：看到會談建立、會談維持、會談結束、同步控制，就選會議層。若題目使用 TCP/IP 模型，會議層常被合併到應用層，不會獨立列出。

### 第 6 層：表現層（Presentation Layer）

表現層（Presentation Layer）負責資料的表示方式。它處理資料格式轉換、加密、解密、壓縮與解壓縮。換句話說，表現層讓不同系統能用彼此理解的格式交換資料。

核心想法是「讓資料看得懂、傳得小、傳得安全」。例如文字編碼、圖片格式、資料壓縮、加密保護，都常被拿來對應表現層。

具體範例是傳送圖片時可能涉及 JPEG 格式；安全連線可能涉及 SSL 或 TLS 的加密機制；文字資料可能需要在不同編碼格式間轉換。

國考考法最愛問「加密、壓縮、資料格式轉換」屬於哪一層。答案是表現層。若題目採 TCP/IP 模型，這些通常會歸到應用層。

### 第 7 層：應用層（Application Layer）

應用層（Application Layer）提供使用者或應用程式可直接使用的網路服務。這裡的「應用」不是指某個 App 的畫面，而是指支援應用程式進行網路功能的協定。

核心想法是「提供網路服務」。例如網頁瀏覽、寄信收信、網域名稱查詢、檔案傳輸，都屬於應用層常見範圍。

具體範例是 HTTP 用於網頁傳輸，DNS 用於把網域名稱轉成 IP 位址，SMTP 用於電子郵件傳送。使用者在瀏覽器輸入網址時，表面上是在操作軟體，背後會牽涉應用層協定。

國考考法常問「HTTP、DNS、SMTP」屬於哪一層。答案是應用層。要注意 DNS 查出 IP 位址，但 DNS 本身仍是應用層協定，不是網路層協定。

## 國考常見考法

### 考法一：給關鍵字，問 OSI 第幾層

這類題目最常見。解題時可以抓關鍵字：

| 關鍵字 | 對應層級 |
|---|---|
| Bit、電氣訊號、傳輸媒介、Hub、Repeater | 實體層 |
| Frame、MAC、Switch、Bridge、Error Detection | 資料連結層 |
| Packet、IP、Routing、Router、ICMP | 網路層 |
| Segment、Datagram、TCP、UDP、Port | 傳輸層 |
| Session、會談建立、會談維持、會談結束 | 會議層 |
| 加密、壓縮、編碼、資料格式轉換 | 表現層 |
| HTTP、DNS、SMTP、使用者服務 | 應用層 |

### 考法二：考 OSI 與 TCP/IP 對照

TCP/IP 5 層最常考的對照是：

1. TCP/IP 應用層對應 OSI 的應用層、表現層、會議層。
2. TCP/IP 傳輸層對應 OSI 的傳輸層。
3. TCP/IP 網際網路層對應 OSI 的網路層。
4. TCP/IP 資料連結層對應 OSI 的資料連結層。
5. TCP/IP 實體層對應 OSI 的實體層。

題目若問「TCP/IP 模型少了 OSI 哪些獨立層？」常見答案是表現層與會議層不獨立，會併入應用層。

### 考法三：考 PDU 名稱

PDU 是國考必背題型，常見記法如下：

| 層級 | PDU |
|---|---|
| 應用層、表現層、會議層 | Data |
| 傳輸層 | Segment 或 Datagram |
| 網路層 | Packet |
| 資料連結層 | Frame |
| 實體層 | Bit |

如果題目特別問 TCP，常見 PDU 是 Segment；如果題目特別問 UDP，常見 PDU 是 Datagram。

## 易混淆整理

| 易混淆項目 | 正確觀念 |
|---|---|
| Switch 與 Router | Switch 多看 MAC，屬資料連結層；Router 看 IP，屬網路層 |
| MAC 與 IP | MAC 是資料連結層位址；IP 是網路層位址 |
| TCP 與 UDP | TCP 較可靠、連線導向；UDP 較輕量、非連線導向 |
| Segment 與 Packet | Segment 常在傳輸層；Packet 在網路層 |
| 加密屬哪一層 | OSI 常歸表現層；TCP/IP 常併入應用層 |
| DNS 查 IP，是否屬網路層 | DNS 是應用層協定，功能是名稱解析 |
| TCP/IP 應用層是否只等於 OSI 應用層 | 不是，還常包含 OSI 表現層與會議層 |

## 國考必背整理

1. OSI 7 層由下到上：實體層、資料連結層、網路層、傳輸層、會議層、表現層、應用層。
2. OSI 7 層由上到下：應用層、表現層、會議層、傳輸層、網路層、資料連結層、實體層。
3. TCP/IP 5 層由下到上：實體層、資料連結層、網際網路層、傳輸層、應用層。
4. 實體層重點：Bit、訊號、媒介、Hub、Repeater。
5. 資料連結層重點：Frame、MAC、Switch、Bridge、錯誤偵測。
6. 網路層重點：Packet、IP、Routing、Router。
7. 傳輸層重點：Segment、Datagram、TCP、UDP、Port。
8. 會議層重點：會談建立、維持、同步、結束。
9. 表現層重點：格式轉換、加密、壓縮。
10. 應用層重點：HTTP、DNS、SMTP 與使用者服務。

## 容易考的判斷題

1. 「路由器主要工作在 OSI 第 3 層。」正確。路由器依 IP 位址做路由選擇，屬於網路層。
2. 「交換器主要依照 IP 位址轉送資料。」錯誤。交換器通常依照 MAC 位址轉送訊框，屬於資料連結層。
3. 「TCP 與 UDP 都屬於傳輸層協定。」正確。TCP 與 UDP 都使用埠號來區分應用程式。
4. 「DNS 因為會查詢 IP 位址，所以屬於網路層。」錯誤。DNS 是應用層協定。
5. 「資料加密與壓縮在 OSI 模型中常歸於表現層。」正確。表現層負責資料表示、格式、加密與壓縮。
6. 「OSI 的會議層、表現層、應用層在 TCP/IP 模型中常合併為應用層。」正確。這是 OSI 與 TCP/IP 對照的高頻考點。
7. 「實體層的 PDU 是 Frame。」錯誤。實體層的 PDU 是 Bit；Frame 是資料連結層。
8. 「網路層負責路由選擇。」正確。Routing 是網路層典型功能。

## 考前速記小抄

### OSI 7 層速記

由下到上背：

1. 實體層：Bit、訊號、線材。
2. 資料連結層：Frame、MAC、Switch。
3. 網路層：Packet、IP、Router。
4. 傳輸層：Segment、TCP、UDP、Port。
5. 會議層：Session、建立與結束會談。
6. 表現層：加密、壓縮、格式。
7. 應用層：HTTP、DNS、SMTP。

### TCP/IP 5 層速記

由上到下背：

1. 應用層：合併 OSI 應用層、表現層、會議層。
2. 傳輸層：TCP、UDP、Port。
3. 網際網路層：IP、Routing。
4. 資料連結層：MAC、Frame。
5. 實體層：Bit、訊號。

### 一句話總整理

看「訊號」找實體層；看「MAC」找資料連結層；看「IP」找網路層；看「Port、TCP、UDP」找傳輸層；看「會談」找會議層；看「加密、壓縮、格式」找表現層；看「HTTP、DNS、SMTP」找應用層。
