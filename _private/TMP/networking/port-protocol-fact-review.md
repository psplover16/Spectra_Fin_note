# Networking Port / Protocol Fact Review

| fact | result | note |
| --- | --- | --- |
| HTTP 80/TCP | pass | Common web default port. |
| HTTPS 443/TCP | pass | HTTP over TLS. |
| DNS 53/UDP 與 53/TCP | pass | UDP for common query, TCP for zone transfer or large response. |
| DHCP 67/68 UDP | pass | Server/client DHCP ports. |
| SNMP 161/162 UDP | pass | Query and trap ports. |
| RDP 3389 TCP/UDP | pass | Remote Desktop can appear with TCP/UDP. |
