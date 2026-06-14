# 常見 Port Number

## 目錄

1. Port 是什麼
2. TCP/UDP 基礎
3. 常見 Port 表
4. 記憶方式
5. 國考常見考法
6. 易混淆整理
7. 國考必背整理
8. 容易考的判斷題
9. 考前速記小抄

## Port 是什麼

連接埠（Port）是電腦網路中用來區分「同一台主機上不同服務」的號碼。新手可以先把網際網路位址（Internet Protocol Address, IP Address）想成一棟大樓的地址，而連接埠（Port）就是大樓裡不同辦公室的門牌號碼。

例如，一台伺服器可能同時提供網頁、檔案傳輸、遠端登入與郵件服務。使用者連到同一個網際網路位址（Internet Protocol Address, IP Address）時，系統還需要知道要找哪一種服務，這時就靠連接埠（Port）判斷。

連接埠（Port）的核心想法是：

1. 網際網路位址（Internet Protocol Address, IP Address）用來找到哪一台主機。
2. 連接埠（Port）用來找到主機上的哪一個服務。
3. 通訊協定（Protocol）用來決定資料傳輸的規則。

具體例子是，瀏覽器輸入一般網站時，常見會使用超文字傳輸協定（HyperText Transfer Protocol, HTTP）的 80 號連接埠（Port）；若是加密網站，常見會使用超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）的 443 號連接埠（Port）。

國考常見考法通常不會問得太抽象，而是直接問「某服務預設使用哪個 Port」或「某 Port 對應哪個服務」。因此，常見服務的號碼要背熟。

## TCP/UDP 基礎

傳輸控制協定（Transmission Control Protocol, TCP）是一種連線導向、可靠傳輸的協定。所謂連線導向，是指傳資料前會先建立連線；所謂可靠，是指它會處理確認、重傳、排序等問題，適合需要完整資料的服務。

使用者資料包協定（User Datagram Protocol, UDP）是一種非連線導向、較輕量的傳輸協定。它不會像傳輸控制協定（Transmission Control Protocol, TCP）那樣保證每一筆資料都可靠送達，但速度快、負擔小，常用在即時性或查詢型服務。

兩者可以這樣理解：

| 比較項目 | 傳輸控制協定（Transmission Control Protocol, TCP） | 使用者資料包協定（User Datagram Protocol, UDP） |
|---|---|---|
| 連線方式 | 連線導向 | 非連線導向 |
| 可靠性 | 高，會確認與重傳 | 較低，不保證送達 |
| 傳輸負擔 | 較大 | 較小 |
| 常見用途 | 網頁、檔案傳輸、遠端登入、郵件 | 名稱查詢、時間同步、動態位址分配、網管訊息 |
| 國考印象 | 需要穩定完整資料 | 速度快、簡單查詢、即時性 |

國考考連接埠（Port）時，常會把服務名稱、號碼、傳輸層協定混在一起考。例如「網域名稱系統（Domain Name System, DNS）只使用使用者資料包協定（User Datagram Protocol, UDP）」就是容易出錯的敘述，因為網域名稱系統（Domain Name System, DNS）常見使用 53 號連接埠（Port），而且可使用使用者資料包協定（User Datagram Protocol, UDP）與傳輸控制協定（Transmission Control Protocol, TCP）。

## 常見 Port 表

下表是國考中最常出現的常見服務連接埠（Port）。其中「必背重點」是考前應優先記住的內容。

| 服務 | 英文全名 | Port | TCP/UDP | 核心用途 | 必背重點 |
|---|---|---:|---|---|---|
| 檔案傳輸協定（File Transfer Protocol, FTP） | File Transfer Protocol | 20/21 | TCP | 傳送檔案 | 20 常與資料傳輸有關，21 常與控制連線有關 |
| 安全殼層（Secure Shell, SSH） | Secure Shell | 22 | TCP | 加密遠端登入 | 比 Telnet 安全 |
| 遠端登入協定（Telnet） | Telnet | 23 | TCP | 明文遠端登入 | 不加密，安全性差 |
| 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP） | Simple Mail Transfer Protocol | 25 | TCP | 寄送郵件 | 重點是「送信」 |
| 網域名稱系統（Domain Name System, DNS） | Domain Name System | 53 | UDP/TCP | 網域名稱與 IP 位址查詢 | 一般查詢常用 UDP，特定情況可用 TCP |
| 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP） | Dynamic Host Configuration Protocol | 67/68 | UDP | 自動分配 IP 位址 | 伺服器 67，用戶端 68 |
| 超文字傳輸協定（HyperText Transfer Protocol, HTTP） | HyperText Transfer Protocol | 80 | TCP | 一般網頁 | 未加密網頁 |
| 郵局協定第三版（Post Office Protocol version 3, POP3） | Post Office Protocol version 3 | 110 | TCP | 收取郵件 | 重點是「收信」 |
| 網路時間協定（Network Time Protocol, NTP） | Network Time Protocol | 123 | UDP | 時間同步 | 記 123 像數數校時 |
| 網際網路訊息存取協定（Internet Message Access Protocol, IMAP） | Internet Message Access Protocol | 143 | TCP | 伺服器端郵件存取 | 也是收信，但更偏向保留在伺服器管理 |
| 簡單網路管理協定（Simple Network Management Protocol, SNMP） | Simple Network Management Protocol | 161/162 | UDP | 網路設備管理與告警 | 161 查詢管理，162 Trap 告警 |
| 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS） | HyperText Transfer Protocol Secure | 443 | TCP | 加密網頁 | 安全版 HTTP |
| 伺服器訊息區塊（Server Message Block, SMB） | Server Message Block | 445 | TCP | 檔案與印表機共享 | Windows 網路共享常見 |
| 遠端桌面協定（Remote Desktop Protocol, RDP） | Remote Desktop Protocol | 3389 | TCP/UDP | 遠端桌面操作 | Windows 遠端桌面常考 |

## 記憶方式

記連接埠（Port）時，不要只把數字硬塞進腦袋，可以把它們分成幾組。

第一組是遠端登入：

| 服務 | Port | 記憶法 |
|---|---:|---|
| 安全殼層（Secure Shell, SSH） | 22 | 兩個 2，像兩層保護，記成安全遠端登入 |
| 遠端登入協定（Telnet） | 23 | 接在 22 後面，但沒有加密，安全性較差 |

第二組是網頁服務：

| 服務 | Port | 記憶法 |
|---|---:|---|
| 超文字傳輸協定（HyperText Transfer Protocol, HTTP） | 80 | 一般網頁最常見 |
| 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS） | 443 | 多了安全性與加密，數字也和 80 明顯不同 |

第三組是郵件服務：

| 服務 | Port | 記憶法 |
|---|---:|---|
| 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP） | 25 | 送信 |
| 郵局協定第三版（Post Office Protocol version 3, POP3） | 110 | 收信 |
| 網際網路訊息存取協定（Internet Message Access Protocol, IMAP） | 143 | 收信與伺服器端管理 |

第四組是查詢、設定與管理：

| 服務 | Port | 記憶法 |
|---|---:|---|
| 網域名稱系統（Domain Name System, DNS） | 53 | 查名字對應 IP |
| 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP） | 67/68 | 幫主機自動拿 IP |
| 網路時間協定（Network Time Protocol, NTP） | 123 | 123 像校正時間的節奏 |
| 簡單網路管理協定（Simple Network Management Protocol, SNMP） | 161/162 | 管設備與收告警 |

## 國考常見考法

### 考法一：服務對應 Port

題目常問：「超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）預設使用哪一個連接埠（Port）？」答案是 443。

這種題型最直接，考生只要把常見表背熟即可。若選項出現 80、110、443、3389，要立刻想到：

1. 80 是超文字傳輸協定（HyperText Transfer Protocol, HTTP）。
2. 110 是郵局協定第三版（Post Office Protocol version 3, POP3）。
3. 443 是超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）。
4. 3389 是遠端桌面協定（Remote Desktop Protocol, RDP）。

### 考法二：Port 對應服務

題目也可能反過來問：「23 號連接埠（Port）通常是哪個服務？」答案是遠端登入協定（Telnet）。

這種反向題容易把安全殼層（Secure Shell, SSH）22 與遠端登入協定（Telnet）23 混在一起。記法是：22 比 23 更安全，因為安全殼層（Secure Shell, SSH）會加密，遠端登入協定（Telnet）則是明文。

### 考法三：TCP/UDP 配對

有些題目會問「哪個服務使用使用者資料包協定（User Datagram Protocol, UDP）？」或「哪個服務同時可能使用傳輸控制協定（Transmission Control Protocol, TCP）與使用者資料包協定（User Datagram Protocol, UDP）？」

必背組合如下：

1. 網域名稱系統（Domain Name System, DNS）：53，UDP/TCP。
2. 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP）：67/68，UDP。
3. 網路時間協定（Network Time Protocol, NTP）：123，UDP。
4. 簡單網路管理協定（Simple Network Management Protocol, SNMP）：161/162，UDP。
5. 遠端桌面協定（Remote Desktop Protocol, RDP）：3389，TCP/UDP。

### 考法四：服務用途判斷

國考不一定只考號碼，也可能用功能描述來考。例如「自動分配 IP 位址的服務」要想到動態主機設定協定（Dynamic Host Configuration Protocol, DHCP），Port 是 67/68，使用使用者資料包協定（User Datagram Protocol, UDP）。

再例如「將網域名稱轉成 IP 位址」要想到網域名稱系統（Domain Name System, DNS），Port 是 53，可使用使用者資料包協定（User Datagram Protocol, UDP）與傳輸控制協定（Transmission Control Protocol, TCP）。

## 易混淆整理

| 易混淆組合 | 正確整理 | 考試提醒 |
|---|---|---|
| 超文字傳輸協定（HyperText Transfer Protocol, HTTP） vs 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS） | HTTP 是 80 TCP；HTTPS 是 443 TCP | 看到安全、加密、憑證，優先想到 HTTPS 443 |
| 安全殼層（Secure Shell, SSH） vs 遠端登入協定（Telnet） | SSH 是 22 TCP；Telnet 是 23 TCP | SSH 加密，Telnet 明文 |
| 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP） vs 郵局協定第三版（Post Office Protocol version 3, POP3） vs 網際網路訊息存取協定（Internet Message Access Protocol, IMAP） | SMTP 25 送信；POP3 110 收信；IMAP 143 收信與伺服器端管理 | 郵件題先判斷是送信還是收信 |
| 網域名稱系統（Domain Name System, DNS） vs 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP） | DNS 53 查名稱；DHCP 67/68 分配 IP | DNS 是查詢名稱，DHCP 是發 IP 設定 |
| 檔案傳輸協定（File Transfer Protocol, FTP） vs 伺服器訊息區塊（Server Message Block, SMB） | FTP 20/21 傳檔；SMB 445 檔案與印表機共享 | FTP 偏檔案傳輸服務，SMB 常見於 Windows 分享 |
| 簡單網路管理協定（Simple Network Management Protocol, SNMP）161/162 | 161 常用於管理查詢，162 常用於 Trap 告警 | 兩個號碼要一起記 |

## 國考必背整理

以下清單是考前必背版本，建議能做到看到服務立刻反射出號碼。

1. 檔案傳輸協定（File Transfer Protocol, FTP）：20/21，傳輸控制協定（Transmission Control Protocol, TCP）。
2. 安全殼層（Secure Shell, SSH）：22，傳輸控制協定（Transmission Control Protocol, TCP）。
3. 遠端登入協定（Telnet）：23，傳輸控制協定（Transmission Control Protocol, TCP）。
4. 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP）：25，傳輸控制協定（Transmission Control Protocol, TCP）。
5. 網域名稱系統（Domain Name System, DNS）：53，使用者資料包協定（User Datagram Protocol, UDP）/傳輸控制協定（Transmission Control Protocol, TCP）。
6. 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP）：67/68，使用者資料包協定（User Datagram Protocol, UDP）。
7. 超文字傳輸協定（HyperText Transfer Protocol, HTTP）：80，傳輸控制協定（Transmission Control Protocol, TCP）。
8. 郵局協定第三版（Post Office Protocol version 3, POP3）：110，傳輸控制協定（Transmission Control Protocol, TCP）。
9. 網路時間協定（Network Time Protocol, NTP）：123，使用者資料包協定（User Datagram Protocol, UDP）。
10. 網際網路訊息存取協定（Internet Message Access Protocol, IMAP）：143，傳輸控制協定（Transmission Control Protocol, TCP）。
11. 簡單網路管理協定（Simple Network Management Protocol, SNMP）：161/162，使用者資料包協定（User Datagram Protocol, UDP）。
12. 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）：443，傳輸控制協定（Transmission Control Protocol, TCP）。
13. 伺服器訊息區塊（Server Message Block, SMB）：445，傳輸控制協定（Transmission Control Protocol, TCP）。
14. 遠端桌面協定（Remote Desktop Protocol, RDP）：3389，傳輸控制協定（Transmission Control Protocol, TCP）/使用者資料包協定（User Datagram Protocol, UDP）。

## 容易考的判斷題

1. 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）預設使用 443 號連接埠（Port）。
   - 正確。HTTPS 是安全加密版網頁服務，常見 Port 是 443。

2. 遠端登入協定（Telnet）預設使用 22 號連接埠（Port）。
   - 錯誤。22 是安全殼層（Secure Shell, SSH），Telnet 是 23。

3. 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP）主要用於寄送郵件。
   - 正確。SMTP 是送信，Port 是 25。

4. 郵局協定第三版（Post Office Protocol version 3, POP3）預設使用 25 號連接埠（Port）。
   - 錯誤。POP3 是 110；25 是 SMTP。

5. 網域名稱系統（Domain Name System, DNS）常見使用 53 號連接埠（Port）。
   - 正確。DNS 是 53，且可使用 UDP/TCP。

6. 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP）常見使用 67/68，且使用使用者資料包協定（User Datagram Protocol, UDP）。
   - 正確。DHCP 用來自動分配 IP 位址設定。

7. 網路時間協定（Network Time Protocol, NTP）常見使用 123，且使用使用者資料包協定（User Datagram Protocol, UDP）。
   - 正確。NTP 用於時間同步。

8. 簡單網路管理協定（Simple Network Management Protocol, SNMP）的常見 Port 是 161/162。
   - 正確。161 常見於管理查詢，162 常見於告警通知。

9. 伺服器訊息區塊（Server Message Block, SMB）常見使用 445。
   - 正確。SMB 常見於檔案與印表機共享。

10. 遠端桌面協定（Remote Desktop Protocol, RDP）常見使用 3389。
    - 正確。RDP 是 Windows 遠端桌面常見考點。

## 考前速記小抄

先背最常出現的一排：

| Port | 服務 |
|---:|---|
| 20/21 | 檔案傳輸協定（File Transfer Protocol, FTP） |
| 22 | 安全殼層（Secure Shell, SSH） |
| 23 | 遠端登入協定（Telnet） |
| 25 | 簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP） |
| 53 | 網域名稱系統（Domain Name System, DNS） |
| 67/68 | 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP） |
| 80 | 超文字傳輸協定（HyperText Transfer Protocol, HTTP） |
| 110 | 郵局協定第三版（Post Office Protocol version 3, POP3） |
| 123 | 網路時間協定（Network Time Protocol, NTP） |
| 143 | 網際網路訊息存取協定（Internet Message Access Protocol, IMAP） |
| 161/162 | 簡單網路管理協定（Simple Network Management Protocol, SNMP） |
| 443 | 超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS） |
| 445 | 伺服器訊息區塊（Server Message Block, SMB） |
| 3389 | 遠端桌面協定（Remote Desktop Protocol, RDP） |

再背三句判斷口訣：

1. 網頁：超文字傳輸協定（HyperText Transfer Protocol, HTTP）80，超文字傳輸安全協定（HyperText Transfer Protocol Secure, HTTPS）443。
2. 遠端：安全殼層（Secure Shell, SSH）22，遠端登入協定（Telnet）23，遠端桌面協定（Remote Desktop Protocol, RDP）3389。
3. 郵件：簡單郵件傳輸協定（Simple Mail Transfer Protocol, SMTP）25 送信，郵局協定第三版（Post Office Protocol version 3, POP3）110 收信，網際網路訊息存取協定（Internet Message Access Protocol, IMAP）143 收信與管理。

最後記住最容易考錯的協定組合：

| 服務 | 協定 |
|---|---|
| 網域名稱系統（Domain Name System, DNS）53 | 使用者資料包協定（User Datagram Protocol, UDP）/傳輸控制協定（Transmission Control Protocol, TCP） |
| 動態主機設定協定（Dynamic Host Configuration Protocol, DHCP）67/68 | 使用者資料包協定（User Datagram Protocol, UDP） |
| 網路時間協定（Network Time Protocol, NTP）123 | 使用者資料包協定（User Datagram Protocol, UDP） |
| 簡單網路管理協定（Simple Network Management Protocol, SNMP）161/162 | 使用者資料包協定（User Datagram Protocol, UDP） |
| 遠端桌面協定（Remote Desktop Protocol, RDP）3389 | 傳輸控制協定（Transmission Control Protocol, TCP）/使用者資料包協定（User Datagram Protocol, UDP） |
