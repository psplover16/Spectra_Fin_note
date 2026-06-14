# Networking Manifest

- Source file: `_private/網概.txt`
- Status value for all topics: `pending-draft`
- Topic count: 11
- Topic id rule: short kebab-case id used in `_TMP/<timestamp>-networking-<topic>.md`

## prep-direction

- title: 準備方向
- source section: 一、準備方向
- status: `pending-draft`
- 預估 block structure:
  - `exam-scope`: OSI 7 層、協定與設備歸屬、資訊安全、雲端與政策趨勢。
  - `must-memorize`: OSI 各層功能、資安必考方向、國營事業資安事件與防範方法。
  - `understanding-notes`: 用「層級歸屬」與「資安事件到防護策略」建立跨題型連結。

## overview

- title: 網路概論
- source section: 二、網路概論
- status: `pending-draft`
- 預估 block structure:
  - `network-scope-comparison`: LAN、MAN、WAN。
  - `architecture-comparison`: Client-Server、P2P。
  - `web-basics`: HTTP、HTTPS、Stateless。
  - `state-management`: Cookie、Session、Token。
  - `topology-comparison`: Bus、Ring、Star、Mesh。

## devices-osi

- title: 網路設備與 OSI 層
- source section: 三、網路設備與 OSI 層
- status: `pending-draft`
- 預估 block structure:
  - `device-layer-map`: Repeater、Hub、Bridge、L2 Switch、L3 Switch、Router、Gateway、Firewall。
  - `device-comparison-table`: 功能、優點、缺點、適合場景。
  - `lan-vlan-comparison`: LAN、VLAN 與廣播域隔離。

## ports

- title: 常見 Port Number
- source section: 四、常見 Port Number
- status: `pending-draft`
- 預估 block structure:
  - `port-table`: 服務、port、TCP/UDP。
  - `dual-protocol-notes`: DNS、RDP 等 TCP/UDP 注意點。
  - `exam-drill`: 依服務名、port number、transport protocol 互相回想。

## osi-tcpip-models

- title: OSI 7 層與 TCP/IP 5 層
- source section: 五、OSI 7 層與 TCP/IP 5 層
- status: `pending-draft`
- 預估 block structure:
  - `osi-layers`: 7 層名稱、PDU、功能、代表設備或協定。
  - `tcpip-layers`: Application、Transport、Internet、Data Link、Physical。
  - `model-mapping`: TCP/IP Application 合併 OSI 上三層。

## physical-layer

- title: 實體層
- source section: 六、實體層
- status: `pending-draft`
- 預估 block structure:
  - `media-comparison`: 雙絞線、同軸電纜、光纖、紅外線、雷射、無線電波、微波。
  - `wireless-and-edge`: Bluetooth、Wi-Fi、RFID/NFC、行動網路 1G 到 5G、乙太網路。
  - `cloud-and-data`: IoT、雲端運算、公有/私有/社群/混合雲、Big Data。
  - `standard-tables`: Bluetooth 世代、Wi-Fi 標準、行動網路世代。

## data-link-layer

- title: 資料鏈結層
- source section: 七、資料鏈結層
- status: `pending-draft`
- 預估 block structure:
  - `legacy-ethernet-rule`: 5-4-3 Rule。
  - `core-functions`: Framing、Error Detection、Flow Control。
  - `protocol-and-direction`: HDLC/PPP、Simplex/Half-duplex/Full-duplex。
  - `media-access`: Token Passing、輪詢、ALOHA、CSMA、CSMA/CD、CSMA/CA。
  - `reliability-and-switching`: ARQ、Bridge/Switch。

## network-layer

- title: 網路層
- source section: 八、網路層
- status: `pending-draft`
- 預估 block structure:
  - `routing`: 靜態/動態路由、RIP、OSPF、BGP、Distance Vector、Link State。
  - `ip-addressing`: IPv4/IPv6、公有/私有/特殊 IP、MAC vs IP、VLSM。
  - `subnetting`: CIDR、network address、broadcast address、host range、subnet 數。
  - `header-comparison`: IPv4 header、IPv6 fixed header、extension headers、fragmentation。
  - `support-protocols-and-tools`: NAT、ARP、RARP、ICMP、IGMP、IPSec、ping、traceroute/tracert、netstat、ipconfig/ifconfig/ip、nslookup/dig。

## transport-layer

- title: 傳輸層
- source section: 九、傳輸層
- status: `pending-draft`
- 預估 block structure:
  - `switching-models`: Circuit Switching、Packet Switching。
  - `packet-basics`: header、payload、控制資訊。
  - `tcp-core`: 可靠傳輸、順序、flow control、congestion control。
  - `handshakes-and-attacks`: 三方交握、四方交握、SYN Flood 與防禦。
  - `tcp-udp-comparison`: 可靠性、連線、速度、適用服務。

## application-layer

- title: 應用層
- source section: 十、應用層
- status: `pending-draft`
- 預估 block structure:
  - `core-services`: DNS、DHCP、FTP、URL、SNMP、SDN。
  - `web-and-methods`: GET vs POST、HTTP、HTTPS。
  - `streaming-and-delivery`: RTP、RTCP、RTSP、CDN。
  - `mail-and-gateway`: SMTP、IMAP、POP3、Gateway。

## security

- title: 資訊安全
- source section: 十一、資訊安全
- status: `pending-draft`
- 預估 block structure:
  - `security-goals`: Confidentiality、Integrity、Availability、Non-repudiation、Authentication/Authenticity。
  - `defense-devices`: Firewall、NGFW、WAF、IDS、IPS。
  - `crypto-and-trust`: 對稱式加密、非對稱式加密、Hash、數位簽章、PKI。
  - `enterprise-controls`: Proxy、VPN、PPTP、DMZ、EDR、MDR、NIST、ISO 27001。
  - `attacks-and-modern-principles`: 病毒、Worm、Trojan、Ransomware、Phishing、XSS、SQL Injection、CSRF、DoS/DDoS、MITM、ARP/DNS Spoofing、Zero Trust、MFA、Least Privilege、Defense in Depth、Backup 3-2-1。
