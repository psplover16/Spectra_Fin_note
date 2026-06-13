# Networking Subagent Tasks

- Source file allowed for every task: `_private/網概.txt`
- Output filename contract: `_TMP/<timestamp>-networking-<topic>.md`
- Task set per topic: one generator task, one verifier task, one import task
- Shared status source: `_TMP/manifests/networking-manifest.md`

## prep-direction

- sourceFiles: `_private/網概.txt`
- examOutline: OSI 7 層、協定與設備歸屬、資訊安全、國營事業資安事件、防範方法、雲端與資安政策。
- memoryPoints: OSI 7 層必熟；資安近年幾乎每年必考；資安事件需連到防範方法。
- understandingNotes: 將層級、設備、協定、安全事件、政策趨勢建立成可交叉比對的準備架構。

### generator task

- taskId: `generator:networking:prep-direction`
- output: `_TMP/<timestamp>-networking-prep-direction.md`
- instruction: 依 sourceFiles 產出「準備方向」草稿，包含考點範圍、必背清單、理解提示與可用於後續正式筆記的 block。

### verifier task

- taskId: `verifier:networking:prep-direction`
- input: `_TMP/<timestamp>-networking-prep-direction.md`
- instruction: 對照 sourceFiles 檢查是否漏掉 OSI、資安、國營事業資安事件、防範方法、雲端與政策提醒，並標出不應出現的外部補充。

### import task

- taskId: `import:networking:prep-direction`
- input: `_TMP/<timestamp>-networking-prep-direction.md`
- instruction: 驗證通過後，將草稿轉為正式匯入格式；保留 sourceFiles、examOutline、memoryPoints、understandingNotes 欄位供追溯。

## overview

- sourceFiles: `_private/網概.txt`
- examOutline: LAN/MAN/WAN；Client-Server vs P2P；HTTP vs HTTPS；Stateless；Session vs Cookie；Bus/Ring/Star/Mesh。
- memoryPoints: LAN/MAN/WAN 範圍；HTTP 80、HTTPS 443；Stateless 不保存請求間狀態；Cookie 在 client、Session 多在 server、Token 常見於 API；Star 與 Mesh 的風險和成本差異。
- understandingNotes: 以範圍、集中度、安全性、狀態保存、可靠度、成本與管理難度比較各概念。

### generator task

- taskId: `generator:networking:overview`
- output: `_TMP/<timestamp>-networking-overview.md`
- instruction: 依 sourceFiles 產出「網路概論」草稿，優先使用比較表與短定義，覆蓋範圍、架構、Web 基礎、狀態管理、拓樸。

### verifier task

- taskId: `verifier:networking:overview`
- input: `_TMP/<timestamp>-networking-overview.md`
- instruction: 檢查所有比較項是否完整，尤其 LAN/MAN/WAN、Client-Server/P2P、HTTP/HTTPS、Stateless、Session/Cookie/Token、四種拓樸。

### import task

- taskId: `import:networking:overview`
- input: `_TMP/<timestamp>-networking-overview.md`
- instruction: 將驗證後內容整理為可匯入 topic block，保留所有比較軸與 sourceFiles 追溯資訊。

## devices-osi

- sourceFiles: `_private/網概.txt`
- examOutline: Repeater、Hub、Bridge、L2 Switch、L3 Switch、Router、Gateway、Firewall 的 OSI 層級、功能、優缺點、適合場景；LAN vs VLAN。
- memoryPoints: Repeater/Hub 是實體層；Bridge/L2 Switch 是資料鏈結層；L3 Switch/Router 是網路層；Gateway 可做協定或格式轉換；VLAN 可隔離廣播域。
- understandingNotes: 以轉送依據、碰撞域、廣播域、路由能力、協定轉換能力判斷設備差異。

### generator task

- taskId: `generator:networking:devices-osi`
- output: `_TMP/<timestamp>-networking-devices-osi.md`
- instruction: 產出設備與 OSI 層草稿，至少包含 layer map、設備比較表、LAN/VLAN 比較與考題易混淆提醒。

### verifier task

- taskId: `verifier:networking:devices-osi`
- input: `_TMP/<timestamp>-networking-devices-osi.md`
- instruction: 對照 sourceFiles 確認所有設備、層級、功能、優缺點、場景與 LAN/VLAN 差異皆被保留。

### import task

- taskId: `import:networking:devices-osi`
- input: `_TMP/<timestamp>-networking-devices-osi.md`
- instruction: 將驗證後設備表轉為正式 block，確保 layer map 可被後續題庫或筆記引用。

## ports

- sourceFiles: `_private/網概.txt`
- examOutline: FTP、SSH、Telnet、SMTP、DNS、DHCP、HTTP、POP3、NTP、IMAP、SNMP、HTTPS、SMB、RDP 的 port 與 TCP/UDP。
- memoryPoints: FTP 20/21 TCP；SSH 22 TCP；Telnet 23 TCP；SMTP 25 TCP；DNS 53 UDP/TCP；DHCP 67/68 UDP；HTTP 80 TCP；POP3 110 TCP；NTP 123 UDP；IMAP 143 TCP；SNMP 161/162 UDP；HTTPS 443 TCP；SMB 445 TCP；RDP 3389 TCP/UDP。
- understandingNotes: port 題常混合服務名稱、number 與傳輸層協定，要標出只用 TCP、只用 UDP、或 TCP/UDP 皆可的服務。

### generator task

- taskId: `generator:networking:ports`
- output: `_TMP/<timestamp>-networking-ports.md`
- instruction: 產出 port number 草稿，以表格呈現服務、port、transport protocol、記憶提示。

### verifier task

- taskId: `verifier:networking:ports`
- input: `_TMP/<timestamp>-networking-ports.md`
- instruction: 逐項比對 sourceFiles 的 port number 與 TCP/UDP 標示，不可新增來源未列的 port。

### import task

- taskId: `import:networking:ports`
- input: `_TMP/<timestamp>-networking-ports.md`
- instruction: 將驗證後表格轉為可匯入的 port reference block，保留 sourceFiles 與記憶重點。

## osi-tcpip-models

- sourceFiles: `_private/網概.txt`
- examOutline: OSI 7 層、TCP/IP 5 層、PDU、功能、模型對照與易混淆點。
- memoryPoints: Physical/bit、Data Link/frame、Network/packet、Transport/segment 或 datagram；TCP/IP Application 合併 OSI 的 Application、Presentation、Session。
- understandingNotes: 將每層功能、PDU、代表協定或設備對齊，避免只背層名。

### generator task

- taskId: `generator:networking:osi-tcpip-models`
- output: `_TMP/<timestamp>-networking-osi-tcpip-models.md`
- instruction: 產出 OSI/TCP-IP 模型草稿，包含層級表、PDU、代表功能與 OSI/TCP-IP 對照。

### verifier task

- taskId: `verifier:networking:osi-tcpip-models`
- input: `_TMP/<timestamp>-networking-osi-tcpip-models.md`
- instruction: 檢查七層與五層名稱、順序、PDU、功能、合併關係是否符合 sourceFiles。

### import task

- taskId: `import:networking:osi-tcpip-models`
- input: `_TMP/<timestamp>-networking-osi-tcpip-models.md`
- instruction: 將驗證後模型表轉為正式 block，確保可與設備、協定、port 題互相引用。

## physical-layer

- sourceFiles: `_private/網概.txt`
- examOutline: 傳輸媒介、Bluetooth、IoT、雲端運算、雲端部署模式、Big Data、Wi-Fi、RFID/NFC、行動網路 1G 到 5G、乙太網路。
- memoryPoints: Bluetooth 2.4 GHz ISM、短距、低功耗、跳頻展頻；IoT 三層架構；雲端五特性、IaaS/PaaS/SaaS、Public/Private/Community/Hybrid Cloud；Big Data 5V；Wi-Fi 802.11 系列與 Wi-Fi 4/5/6/6E/7；RFID Tag/Reader/Backend；5G eMBB/URLLC/mMTC；Ethernet IEEE 802.3、CSMA/CD。
- understandingNotes: 以距離、頻段、速度、功耗、抗干擾、成本與應用場景整理各實體層與相關技術。

### generator task

- taskId: `generator:networking:physical-layer`
- output: `_TMP/<timestamp>-networking-physical-layer.md`
- instruction: 產出實體層草稿，分成傳輸媒介、無線/行動/乙太網、IoT/雲端/Big Data 三大區塊，必要處使用比較表。

### verifier task

- taskId: `verifier:networking:physical-layer`
- input: `_TMP/<timestamp>-networking-physical-layer.md`
- instruction: 檢查 Bluetooth、Wi-Fi、雲端、RFID/NFC、行動網路、乙太網路等世代與標準是否完整且未超出 sourceFiles。

### import task

- taskId: `import:networking:physical-layer`
- input: `_TMP/<timestamp>-networking-physical-layer.md`
- instruction: 將驗證後內容轉為正式 block，保留標準表與比較表，避免壓縮掉世代資訊。

## data-link-layer

- sourceFiles: `_private/網概.txt`
- examOutline: 5-4-3 Rule、Framing、Error Detection、Flow Control、HDLC vs PPP、傳輸方向、多重存取、CSMA/CD/CA、ARQ、Bridge/Switch。
- memoryPoints: 5 個 segment、4 個 repeater、最多 3 個 populated segment；CRC 常見於 Error Detection；Simplex/Half-duplex/Full-duplex；CSMA 先聽再傳、CSMA/CD 偵測碰撞、CSMA/CA 避免碰撞；ARQ 三類。
- understandingNotes: 資料鏈結層處理 frame、鏈路存取、碰撞、錯誤偵測與局部交換，重點是同一鏈路或 LAN segment 內的行為。

### generator task

- taskId: `generator:networking:data-link-layer`
- output: `_TMP/<timestamp>-networking-data-link-layer.md`
- instruction: 產出資料鏈結層草稿，包含核心功能、媒體存取比較、ARQ、Bridge/Switch 與歷史觀念題。

### verifier task

- taskId: `verifier:networking:data-link-layer`
- input: `_TMP/<timestamp>-networking-data-link-layer.md`
- instruction: 對照 sourceFiles 確認 5-4-3、HDLC/PPP、duplex、多重存取、CSMA 系列、ARQ、Bridge/Switch 均完整。

### import task

- taskId: `import:networking:data-link-layer`
- input: `_TMP/<timestamp>-networking-data-link-layer.md`
- instruction: 將驗證後內容整理為正式 block，保留比較表與易混淆提醒。

## network-layer

- sourceFiles: `_private/網概.txt`
- examOutline: 靜態/動態路由、RIP/OSPF/BGP、IPv4/IPv6、公有/私有/特殊 IP、子網與 CIDR、IPv4/IPv6 header、NAT/ARP/RARP/ICMP/IGMP/IPSec、網路指令、Distance Vector/Link State、MAC vs IP、VLSM。
- memoryPoints: RIP distance vector、hop count 最大 15；OSPF link state、cost、收斂快；BGP path vector、Internet AS 間路由；私有 IP 三段；127/8 loopback、169.254/16 APIPA、255.255.255.255 limited broadcast、224/4 multicast；IPv6 無 broadcast、無 header checksum。
- understandingNotes: 網路層草稿要能支援計算題與概念題，尤其 IP 範圍、子網切割、路由協定比較、IPv4/IPv6 差異與診斷指令用途。

### generator task

- taskId: `generator:networking:network-layer`
- output: `_TMP/<timestamp>-networking-network-layer.md`
- instruction: 產出網路層草稿，分成 routing、IP addressing、subnetting、header comparison、support protocols/tools。

### verifier task

- taskId: `verifier:networking:network-layer`
- input: `_TMP/<timestamp>-networking-network-layer.md`
- instruction: 檢查 IP 範圍、特殊位址、路由協定、子網公式、header 欄位、協定與指令是否與 sourceFiles 一致。

### import task

- taskId: `import:networking:network-layer`
- input: `_TMP/<timestamp>-networking-network-layer.md`
- instruction: 將驗證後內容轉為正式 block，保留可算題提示與 IPv4/IPv6 比較表。

## transport-layer

- sourceFiles: `_private/網概.txt`
- examOutline: Circuit Switching vs Packet Switching、Packet、TCP、三方交握、四方交握、SYN Flood、Flow Control、Congestion Control、TCP vs UDP。
- memoryPoints: TCP connection-oriented、reliable、ordered；三方交握 SYN/SYN+ACK/ACK；四方交握 FIN/ACK/FIN/ACK；SYN Flood 防禦含 SYN cookies、rate limiting、防火牆、調整 backlog；UDP 無連線、開銷小。
- understandingNotes: 以可靠性、順序、延遲、開銷與應用需求區分 TCP/UDP，並把 flow control 與 congestion control 分開理解。

### generator task

- taskId: `generator:networking:transport-layer`
- output: `_TMP/<timestamp>-networking-transport-layer.md`
- instruction: 產出傳輸層草稿，包含 packet 基礎、TCP 特性、handshake 圖解文字、SYN Flood、防塞車與 TCP/UDP 比較。

### verifier task

- taskId: `verifier:networking:transport-layer`
- input: `_TMP/<timestamp>-networking-transport-layer.md`
- instruction: 對照 sourceFiles 檢查三方/四方交握順序、TCP 特性、SYN Flood 防禦、flow/congestion control 名稱與 TCP/UDP 適用情境。

### import task

- taskId: `import:networking:transport-layer`
- input: `_TMP/<timestamp>-networking-transport-layer.md`
- instruction: 將驗證後內容整理成正式 block，保留圖解步驟與比較表。

## application-layer

- sourceFiles: `_private/網概.txt`
- examOutline: DNS、DHCP、FTP、URL、GET vs POST、SNMP、SDN、RTP、RTCP、RTSP、HTTP、HTTPS、Gateway、CDN、SMTP、IMAP、POP3。
- memoryPoints: DNS 解析網域；DHCP 分配 IP/mask/gateway/DNS；GET 取得資源、參數常在 URL、應具冪等性；POST 提交資料、常在 body、不要求冪等；CDN 快取內容；SMTP 寄信、IMAP/POP3 收信。
- understandingNotes: 以服務用途、資料流向、控制功能、安全性與是否保留同步區分應用層協定。

### generator task

- taskId: `generator:networking:application-layer`
- output: `_TMP/<timestamp>-networking-application-layer.md`
- instruction: 產出應用層草稿，按核心服務、Web、串流/傳遞、郵件與 Gateway 分區整理。

### verifier task

- taskId: `verifier:networking:application-layer`
- input: `_TMP/<timestamp>-networking-application-layer.md`
- instruction: 檢查所有應用層協定與用途是否完整，GET/POST、IMAP/POP3、RTP/RTCP/RTSP、HTTP/HTTPS 差異不可漏。

### import task

- taskId: `import:networking:application-layer`
- input: `_TMP/<timestamp>-networking-application-layer.md`
- instruction: 將驗證後內容轉為正式 block，保留可比較的協定差異與用途短句。

## security

- sourceFiles: `_private/網概.txt`
- examOutline: 安全目標、防禦設備、加密、電子商務安全需求、數位簽章、Proxy、VPN、PPTP、DMZ、EDR、MDR、PKI、NIST、ISO 27001、常見網攻、Zero Trust、MFA、Least Privilege、Defense in Depth、Backup 3-2-1。
- memoryPoints: Confidentiality/Integrity/Availability/Non-repudiation/Authentication；Firewall/NGFW/WAF/IDS/IPS 差異；Hash 不是加密；數位簽章私鑰簽公鑰驗；PKI 包含 CA、憑證、CRL/OCSP；ISO/IEC 27001:2022；常見攻擊類型與現代防禦原則。
- understandingNotes: 以「攻擊類型、受影響安全目標、防禦設備或控制措施、治理框架」四欄建立資安筆記。

### generator task

- taskId: `generator:networking:security`
- output: `_TMP/<timestamp>-networking-security.md`
- instruction: 產出資訊安全草稿，包含安全目標、防禦設備、密碼學與信任、企業控制、攻擊與現代防禦原則。

### verifier task

- taskId: `verifier:networking:security`
- input: `_TMP/<timestamp>-networking-security.md`
- instruction: 對照 sourceFiles 檢查安全目標、設備差異、加密比較、電子商務需求、資安名詞、攻擊清單與近年觀念是否完整。

### import task

- taskId: `import:networking:security`
- input: `_TMP/<timestamp>-networking-security.md`
- instruction: 將驗證後內容轉為正式 block，保留 attack-defense mapping 與所有 sourceFiles 追溯欄位。
