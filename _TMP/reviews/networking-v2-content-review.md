# Networking v2 content review

- change: `networking-v2-route`
- source folder: `_private/MD/網路概論v2/`
- imported shape: `ProfessionalSubjectTopic` + one `lessonArticle` block per Markdown file
- review scope: source traceability, section order, source-authored definitions, protocol/calculation logic, tables/examples, and lecture-only boundary

## Topic review

- networking-v2-osi-tcpip: pass
  - title: OSI 七層 + TCP/IP ★
  - checked: OSI/TCP-IP mapping, 每層的職責 guidance, PDU/protocol/device table, source path retained.
- networking-v2-basics: pass
  - title: 基礎概念
  - checked: LAN vs MAN vs WAN comparison, HTTP/HTTPS port note, table conversion, source path retained.
- networking-v2-security-crypto-tls: pass
  - title: 資安：加密、雜湊、數位簽章、憑證與 TLS
  - checked: CIA, encryption/hash/signature/certificate/TLS sections, comparison tables, source path retained.
- networking-v2-devices-osi: pass
  - title: 網路設備對應層級（看得懂版）
  - checked: OSI layer device mapping, collision/broadcast domain notes, table conversion, source path retained.
- networking-v2-wireless-access-devices: pass
  - title: 無線與上網接取設備
  - checked: wireless/access device positioning, AP/modem/gateway concepts, table conversion, source path retained.
- networking-v2-ip-subnetting: pass
  - title: IP 基礎 + 子網路計算 ★
  - checked: IP basics, subnetting procedure, VLSM calculation flow, examples/tables retained, source path retained.
- networking-v2-transport-layer: pass
  - title: 傳輸層
  - checked: TCP/UDP contrast, handshake/order notes, header-size content, source path retained.
- networking-v2-application-ports: pass
  - title: 應用層協定 + Port Number 對照表 ★
  - checked: application protocol explanations, Port 號 + TCP/UDP mapping, IANA note, tables retained, source path retained.
- networking-v2-physical-layer: pass
  - title: 實體層 + 標準速度表 ★
  - checked: physical media, IEEE standard/速度 tables, IoT/cloud/Big Data notes, source path retained.
- networking-v2-data-link-layer: pass
  - title: 資料鏈結層
  - checked: MAC/data-link concepts, CSMA/CD, 543 Rule, source path retained.
- networking-v2-security-crypto: pass
  - title: 資安觀念與加密 ★
  - checked: security concepts, cryptography algorithm sections, digital signature notes, source path retained.
- networking-v2-defense-attacks: pass
  - title: 防禦設備與攻擊類型 ★
  - checked: IDS/IPS/firewall concepts, attack categories, ISO 27001/NIST notes, source path retained.

## Scope decision

- content type: lecture-only
- 干擾選項區分：不適用
- 4 個選項：不適用
- 1 個正解：不適用
- 選項辨析：不適用

## Result

All 12 Networking v2 Markdown files were imported as source-backed lesson articles. The review found no missing source path, empty lesson section, quiz-field requirement, or intentional v1 `/networking` ownership overlap.
