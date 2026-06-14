# Networking Reading Log

- Source file: `_private/網概.txt`
- Read scope: full file, 360 lines
- Document title: 網路通訊
- Heading rule: manifest topics use the source's Chinese-numbered headings. Bracketed labels such as `[必背]`, `[比較]`, `[會畫]`, `[會算]`, `[易混淆]`, and `[補充]` are captured inside each heading as outline or block structure.
- Top-level heading count: 11

## H01 一、準備方向

- 考試大綱：OSI 7 層的各層功能、協定歸屬、實體設備歸屬；資訊安全與國營事業相關資安事件、防範方法、雲端與資安政策。
- 記憶重點：OSI 7 層一定要熟；資安近年幾乎每年必考；資安事件要連到防範方法。
- 理解重點：準備時要把「層級、設備、協定、安全事件、防護策略、政策趨勢」串成可交叉比對的題庫，而不是只背單點名詞。

## H02 二、網路概論

- 考試大綱：LAN/MAN/WAN；Client-Server vs P2P；HTTP vs HTTPS；Stateless；Session vs Cookie；網路拓樸 Bus/Ring/Star/Mesh。
- 記憶重點：LAN 範圍小、MAN 城市、WAN 跨城市或跨國；HTTP port 80、HTTPS port 443；Stateless 需靠 cookie、session、token 保存狀態；Star 中心故障影響大、Mesh 可靠但成本高。
- 理解重點：本章偏基本分類與比較題，要能從範圍、管理模式、安全性、狀態保存、可靠度與成本推導適用場景。

## H03 三、網路設備與 OSI 層

- 考試大綱：Repeater、Hub、Bridge、L2 Switch、L3 Switch、Router、Gateway、Firewall 的 OSI 層級與功能；設備優缺點與適合場景；LAN vs VLAN。
- 記憶重點：Repeater/Hub 在實體層；Bridge/L2 Switch 在資料鏈結層；L3 Switch/Router 在網路層；Gateway 可做高層協定或格式轉換；VLAN 可隔離廣播域。
- 理解重點：比較設備時要抓「依什麼位址轉送、切不切碰撞域、切不切廣播域、是否具路由或協定轉換功能」。

## H04 四、常見 Port Number

- 考試大綱：常見服務與 TCP/UDP port 對應。
- 記憶重點：FTP 20/21 TCP、SSH 22 TCP、Telnet 23 TCP、SMTP 25 TCP、DNS 53 UDP/TCP、DHCP 67/68 UDP、HTTP 80 TCP、POP3 110 TCP、NTP 123 UDP、IMAP 143 TCP、SNMP 161/162 UDP、HTTPS 443 TCP、SMB 445 TCP、RDP 3389 TCP/UDP。
- 理解重點：除了背 port，也要留意使用 TCP、UDP 或兩者皆可，因為考題常把服務名稱、port number、傳輸層協定混在一起問。

## H05 五、OSI 7 層與 TCP/IP 5 層

- 考試大綱：OSI 7 層名稱、PDU、功能、代表協定或設備；TCP/IP 5 層；OSI 與 TCP/IP 對照。
- 記憶重點：Physical/bit、Data Link/frame、Network/packet、Transport/segment 或 datagram；TCP/IP 常把 OSI 的 Application、Presentation、Session 合併到 Application。
- 理解重點：題目若問模型對照，重點是「功能與資料單位」而非只背層名；也要能把 HTTP、DNS、SMTP、TCP、UDP、IP、Switch、Router 放回正確層級。

## H06 六、實體層

- 考試大綱：傳輸媒介；Bluetooth；IoT；雲端運算；公有雲、私有雲、社群雲、混合雲；Big Data；Wi-Fi；RFID/NFC；行動網路 1G 到 5G；乙太網路。
- 記憶重點：Bluetooth 使用 2.4 GHz ISM、短距、低功耗、跳頻展頻；雲端五特性與 IaaS/PaaS/SaaS、四種部署模式；Big Data 5V；Wi-Fi 802.11 b/a/g/n/ac/ax/be 與 Wi-Fi 4/5/6/6E/7；RFID 三元件；5G 的 eMBB、URLLC、mMTC；乙太網路 IEEE 802.3 與 CSMA/CD。
- 理解重點：本章雖名為實體層，但涵蓋多種基礎網路與新興技術；整理時要用距離、頻段、速度、功耗、干擾、成本、應用場景作為比較軸。

## H07 七、資料鏈結層

- 考試大綱：5-4-3 Rule；Framing、Error Detection、Flow Control；HDLC vs PPP；Simplex/Half-duplex/Full-duplex；多重存取；CSMA/CD/CA；ARQ；Bridge/Switch。
- 記憶重點：5-4-3 是傳統乙太網中繼器規則；CRC 常用於錯誤偵測；PPP 常見於點對點與 PPPoE；CSMA/CD 屬傳統乙太網，CSMA/CA 常見於 Wi-Fi；ARQ 有 Stop-and-Wait、Go-Back-N、Selective Repeat。
- 理解重點：資料鏈結層重點在 frame、同一鏈路上的媒體存取與錯誤處理；要能分辨「避免碰撞、偵測碰撞、重傳控制」各自解決的問題。

## H08 八、網路層

- 考試大綱：靜態路由 vs 動態路由；RIP/OSPF/BGP；IPv4/IPv6；公有/私有/特殊 IP；子網路、CIDR、遮罩；IPv4 vs IPv6 header；NAT、ARP、RARP、ICMP、IGMP、IPSec；常用網路指令；Distance Vector vs Link State；MAC vs IP；VLSM。
- 記憶重點：RIP hop count 最大 15；OSPF link state/cost/收斂快；BGP path vector/AS 間路由；IPv4 32 bits、IPv6 128 bits；私有 IP 為 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16；ping 用 ICMP echo；ARP 是 IPv4 到 MAC。
- 理解重點：網路層是跨網路路由與定址核心；要能從 IP 範圍、遮罩、路由協定、診斷指令推導封包如何抵達目的地，以及 IPv6 為何在 header 與 broadcast 上不同。

## H09 九、傳輸層

- 考試大綱：Circuit Switching vs Packet Switching；Packet；TCP 特性；TCP 三方交握與四方交握；SYN Flood；TCP Flow Control；TCP Congestion Control；TCP vs UDP。
- 記憶重點：TCP 是 connection-oriented、reliable、ordered，具 flow control 與 congestion control；三方交握為 SYN、SYN+ACK、ACK；四方交握為 FIN、ACK、FIN、ACK；UDP 無連線、開銷小，適合 DNS、VoIP、串流與遊戲。
- 理解重點：傳輸層重點是端到端通訊品質；比較 TCP/UDP 時要用可靠性、順序、延遲、開銷與應用需求判斷。

## H10 十、應用層

- 考試大綱：DNS、DHCP、FTP、URL、GET vs POST、SNMP、SDN、RTP、RTCP、RTSP、HTTP、HTTPS、Gateway、CDN、SMTP、IMAP、POP3。
- 記憶重點：DNS 做網域名稱解析；DHCP 自動分配 IP/mask/gateway/DNS；GET 取得資源且應具冪等性，POST 提交資料且不要求冪等；CDN 靠近使用者快取內容；SMTP 寄信，IMAP/POP3 收信。
- 理解重點：應用層題目常測「服務用途」與「協定差異」；GET/POST、IMAP/POP3、RTP/RTCP/RTSP、HTTP/HTTPS 要能用資料流向、控制功能與安全性區分。

## H11 十一、資訊安全

- 考試大綱：安全目標；Firewall/NGFW/WAF/IDS/IPS；對稱式加密、非對稱式加密、Hash；電子商務安全需求；數位簽章、Proxy、VPN、PPTP、DMZ、EDR、MDR、PKI、NIST、ISO 27001；常見網攻；Zero Trust、MFA、Least Privilege、Defense in Depth、Backup 3-2-1。
- 記憶重點：CIA 加上不可否認性與認證性；WAF 防護 HTTP/HTTPS 應用攻擊；IDS 偵測告警、IPS 主動阻擋；Hash 是單向摘要不是加密；數位簽章用私鑰簽、公鑰驗；ISO/IEC 27001:2022 是現行主軸。
- 理解重點：資安章節必須把攻擊、防禦設備、密碼學、安全目標與治理框架連在一起；回答時要能說明「威脅是什麼、保護哪個安全目標、用哪類控制措施」。
