import type { ProfessionalSubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

// Static lessonArticle data generated from _private/MD/網路概論v2 source Markdown.
export const networkingV2Topics = [
  {
    "id": "networking-v2-osi-tcpip",
    "subjectKey": "networkingV2",
    "title": "OSI 七層 + TCP/IP ★",
    "summary": "學習方式：每層的職責屬【理解】；哪些協定/設備/PDU 屬哪層屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_1_OSI七層與TCPIP.md"
    ],
    "sourceSummary": "網路概論(v2) / OSI 七層 + TCP/IP",
    "examOutline": [
      "OSI 七層 + TCP/IP",
      "一、為什麼先學 OSI（用途）　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論｜幾乎每年必考、是全科的地圖",
      "學習方式：每層的職責屬【理解】；哪些協定/設備/PDU 屬哪層屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。"
    ],
    "understandingNotes": [
      "學習方式：每層的職責屬【理解】；哪些協定/設備/PDU 屬哪層屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。"
    ],
    "difficulty": "advanced",
    "topicType": "concept",
    "terms": [
      {
        "zh": "OSI 七層",
        "en": "Open Systems Interconnection Model"
      },
      {
        "zh": "TCP/IP",
        "en": "Transmission Control Protocol/Internet Protocol"
      },
      {
        "zh": "PDU",
        "en": "Protocol Data Unit"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_1_OSI七層與TCPIP.md"
        ],
        "sourceSection": "網路概論(v2) / OSI 七層 + TCP/IP",
        "lead": [
          "科目：網路概論｜幾乎每年必考、是全科的地圖",
          "學習方式：每層的職責屬【理解】；哪些協定/設備/PDU 屬哪層屬【硬背】（但有「層的邏輯」撐著，比死背輕鬆）。",
          "（OSI 是穩定標準，已查內部一致；易記錯的 port／標準／速度留到網路 6、7 再上網查證。）"
        ],
        "sections": [
          {
            "heading": "一、為什麼先學 OSI（用途）　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "OSI（Open Systems Interconnection，開放系統互連）模型 把網路通訊分成 7 層。網路裡幾乎每個協定、每個設備、每個概念，都「掛在某一層」。先把七層的地圖建起來，之後遇到任何零碎名詞（DNS、ARP、交換器…），你只要問「它在哪一層、做什麼」就自動歸位——不會變成背不完的縮寫海。"
              },
              {
                "kind": "paragraph",
                "text": "OSI 由上（第 7 層，最靠近使用者）到下（第 1 層，最靠近硬體）。"
              }
            ]
          },
          {
            "heading": "二、七層總表（核心，務必熟）",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "層",
                  "名稱",
                  "職責（做什麼）【理解】",
                  "傳輸單位 PDU",
                  "常見協定",
                  "常見設備"
                ],
                "rows": [
                  [
                    "7",
                    "應用層 Application",
                    "直接面對使用者／應用程式，提供網路服務（網頁、郵件、檔案、名稱解析）",
                    "Data 資料",
                    "HTTP、HTTPS、FTP、SMTP、POP3、IMAP、DNS、DHCP、SNMP、Telnet",
                    "閘道器 Gateway"
                  ],
                  [
                    "6",
                    "表現層 Presentation",
                    "資料格式轉換、加解密、壓縮（讓兩端看得懂彼此資料）",
                    "Data",
                    "SSL/TLS、JPEG、MPEG、ASCII",
                    "（無特定設備）"
                  ],
                  [
                    "5",
                    "會議層 Session",
                    "建立／管理／結束兩端的連線會議、對話控制",
                    "Data",
                    "NetBIOS、RPC",
                    "（無特定設備）"
                  ],
                  [
                    "4",
                    "傳輸層 Transport",
                    "端到端傳輸、可靠性、流量控制、分段重組；用 port 區分應用",
                    "Segment(TCP)／Datagram(UDP)",
                    "TCP、UDP",
                    "閘道器、L4 交換器"
                  ],
                  [
                    "3",
                    "網路層 Network",
                    "邏輯定址（IP）、路由選路、封包轉送",
                    "Packet 封包",
                    "IP、ICMP、IGMP、IPSec、RIP/OSPF/BGP",
                    "路由器 Router、L3 交換器"
                  ],
                  [
                    "2",
                    "資料鏈結層 Data Link",
                    "實體定址（MAC）、同網段訊框傳遞、錯誤偵測、流量控制",
                    "Frame 訊框",
                    "Ethernet、PPP、HDLC",
                    "交換器 Switch(L2)、橋接器 Bridge、網卡 NIC"
                  ],
                  [
                    "1",
                    "實體層 Physical",
                    "傳輸原始位元、定義電氣／機械規格（電壓、接頭、纜線、訊號）",
                    "Bit 位元",
                    "（規格，如 RS-232、纜線標準）",
                    "集線器 Hub、中繼器 Repeater、纜線"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "📌 看懂表裡的詞（白話）：\n- 職責欄：「端到端」＝從來源主機直送目的主機；「流量控制」＝送太快時讓接收端來得及（控速）；「對話控制（會議層）」＝管理一次連線從開始到結束（像通話的接通／掛斷）；「邏輯定址（IP，可變）」對上「實體定址（MAC，燒在網卡）」（見 #4）。\n- 協定欄一下很多，先不用全背：細節在 #5 傳輸層、#6 應用層 會講，這裡只要知道「它掛哪層」。少數只出現在這裡的：SMTP／POP3／IMAP ＝ 寄信／收信、SNMP ＝ 網路管理監控、NetBIOS／RPC ＝ 讓不同機器的程式互相呼叫、PPP／HDLC ＝ 點對點／廣域網連線協定、RS-232 ＝ 早期序列埠規格。"
              }
            ]
          },
          {
            "heading": "三、PDU（傳輸單位）速記　【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "PDU（Protocol Data Unit）＝ 每一層對資料的「包裝單位」名稱。"
              },
              {
                "kind": "paragraph",
                "text": "為什麼同一份資料、每層名字不同？ 因為資料往下送時，每一層都會把上一層的東西「包起來」、再貼上自己這層的標頭（header）——像寄包裹一層層加外箱、貼標籤。這個動作叫 封裝（Encapsulation）；送到對方再一層層拆開叫 解封裝。所以同一份資料在不同層，就有不同的 PDU 名稱："
              },
              {
                "kind": "paragraph",
                "text": "由下到上：位元（Bit）→ 訊框（Frame）→ 封包（Packet）→ 區段（Segment）→ 資料（Data）"
              },
              {
                "kind": "table",
                "headers": [
                  "層",
                  "L1",
                  "L2",
                  "L3",
                  "L4",
                  "L5–7"
                ],
                "rows": [
                  [
                    "單位",
                    "Bit 位元",
                    "Frame 訊框",
                    "Packet 封包",
                    "Segment（TCP）/ Datagram（UDP）",
                    "Data 資料"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "這題超常考：給你一個層，問傳輸單位是什麼。"
              }
            ]
          },
          {
            "heading": "四、七層記憶口訣",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "由第 1 層往上（Physical → Application）："
              },
              {
                "kind": "paragraph",
                "text": "Please Do Not Throw Sausage Pizza Away\n（Physical, Data link, Network, Transport, Session, Presentation, Application）"
              }
            ]
          },
          {
            "heading": "五、TCP/IP 模型 vs OSI　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "實務上用的是 TCP/IP 模型。常見「5 層」版本，跟 OSI 幾乎 1:1，只是把 OSI 上面三層合併："
              },
              {
                "kind": "table",
                "headers": [
                  "TCP/IP（5 層）",
                  "對應 OSI"
                ],
                "rows": [
                  [
                    "應用層 Application",
                    "OSI 第 5、6、7 層（會議＋表現＋應用合併）"
                  ],
                  [
                    "傳輸層 Transport",
                    "OSI 第 4 層"
                  ],
                  [
                    "網路層 Network／Internet",
                    "OSI 第 3 層"
                  ],
                  [
                    "資料鏈結層 Data Link",
                    "OSI 第 2 層"
                  ],
                  [
                    "實體層 Physical",
                    "OSI 第 1 層"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "也有「4 層」版本：再把「實體層＋資料鏈結層」合併成 網路存取層（Network Access）。"
              }
            ]
          },
          {
            "heading": "六、重點與易混淆　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "設備落在哪層（超常考）：Hub／Repeater ＝ L1；Switch(L2)／Bridge ＝ L2；Router／L3 Switch ＝ L3；Gateway ＝ 可到 L7（協定轉換）。",
                  "三個動作配三層：交換（switching，看 MAC）在 L2、路由（routing，看 IP）在 L3、可靠傳輸（TCP）在 L4。",
                  "誠實標注一個爭議：ARP／RARP（處理 IP ↔ MAC）的層級有爭議，常見放在 L2（資料鏈結） 或 L3（網路），看教材／題目定義；但 ICMP、IGMP 明確屬 L3。考前對一下你的考古題慣例。",
                  "資料單位三連：bit → frame → packet → segment，是必拿的送分題。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-basics",
    "subjectKey": "networkingV2",
    "title": "基礎概念",
    "summary": "本篇大多屬 【理解】：都是有邏輯的對比，懂差異就記得（只有 HTTP/HTTPS 的 port 80/443 屬【硬背】）。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_2_基礎概念.md"
    ],
    "sourceSummary": "網路概論(v2) / 基礎概念",
    "examOutline": [
      "基礎概念",
      "一、LAN vs MAN vs WAN（依範圍大小分）　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論",
      "本篇大多屬 【理解】：都是有邏輯的對比，懂差異就記得（只有 HTTP/HTTPS 的 port 80/443 屬【硬背】）。"
    ],
    "understandingNotes": [
      "本篇大多屬 【理解】：都是有邏輯的對比，懂差異就記得（只有 HTTP/HTTPS 的 port 80/443 屬【硬背】）。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "區域網路",
        "en": "Local Area Network, LAN"
      },
      {
        "zh": "都會網路",
        "en": "Metropolitan Area Network, MAN"
      },
      {
        "zh": "廣域網路",
        "en": "Wide Area Network, WAN"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_2_基礎概念.md"
        ],
        "sourceSection": "網路概論(v2) / 基礎概念",
        "lead": [
          "科目：網路概論",
          "本篇大多屬 【理解】：都是有邏輯的對比，懂差異就記得（只有 HTTP/HTTPS 的 port 80/443 屬【硬背】）。"
        ],
        "sections": [
          {
            "heading": "一、LAN vs MAN vs WAN（依範圍大小分）　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "LAN 區域網路",
                  "MAN 都會網路",
                  "WAN 廣域網路"
                ],
                "rows": [
                  [
                    "範圍",
                    "小（一棟樓、校園、辦公室）",
                    "中（一個城市）",
                    "大（跨城市、跨國）"
                  ],
                  [
                    "速度",
                    "最快、延遲低",
                    "中",
                    "相對慢、延遲高"
                  ],
                  [
                    "擁有／管理",
                    "自己擁有",
                    "城市／機構",
                    "多租用電信業者線路"
                  ],
                  [
                    "例子",
                    "家裡/公司網路",
                    "城市有線電視網",
                    "網際網路、企業跨國連線"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶：範圍 LAN < MAN < WAN；範圍越大、速度通常越慢、越要租線。"
              }
            ]
          },
          {
            "heading": "二、Client-Server vs P2P　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "主從式 Client-Server",
                  "點對點 P2P"
                ],
                "rows": [
                  [
                    "架構",
                    "有專門伺服器提供服務，用戶端請求",
                    "每個節點既是 client 又是 server，彼此直接分享"
                  ],
                  [
                    "優點",
                    "集中管理、安全、易維護",
                    "無單點故障、成本低、越多人資源越多"
                  ],
                  [
                    "缺點",
                    "伺服器單點故障、成本高、負載大",
                    "難管理、安全性差、資源品質不一"
                  ],
                  [
                    "例子",
                    "網站、郵件伺服器",
                    "BitTorrent、區塊鏈"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "📌 單點故障（Single Point of Failure）＝ 關鍵的那一台一壞，整個服務就停（主從式的伺服器就是這種風險；P2P 沒有，因為大家都一樣）。節點＝網路上的一個裝置／連接點。"
              }
            ]
          },
          {
            "heading": "三、網路拓樸 Topology（Bus / Ring / Star / Mesh）　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "拓樸（Topology）＝ 網路裡的裝置「怎麼連、排成什麼形狀」（佈線／連接方式）。下面四種是最常見的形狀。"
              },
              {
                "kind": "table",
                "headers": [
                  "拓樸",
                  "運作方式",
                  "優點",
                  "缺點"
                ],
                "rows": [
                  [
                    "Bus 匯流排",
                    "全部接在一條主幹線上",
                    "簡單、省纜線、便宜",
                    "主幹斷則全網癱；會碰撞；難除錯"
                  ],
                  [
                    "Ring 環狀",
                    "串成一個環，資料沿環傳（常用 token）",
                    "無碰撞、效能穩定",
                    "一處斷可能整環中斷；加裝置要斷環"
                  ],
                  [
                    "Star 星狀",
                    "全部連到中央節點（hub／switch）",
                    "好管理、單機故障不影響別人、易擴充除錯",
                    "中央節點單點故障；耗纜線"
                  ],
                  [
                    "Mesh 網狀",
                    "裝置間多重互連（全連接時兩兩直連）",
                    "可靠性最高、多路徑容錯、無單點故障",
                    "纜線／成本最高、複雜"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "💡 token（環狀拓樸用）：一個沿著環一直傳的「發言權令牌」，只有拿到 token 的裝置才能送資料 → 所以環狀不會互撞。"
              },
              {
                "kind": "paragraph",
                "text": "重點：Star 是現代最常見（家裡/公司接 switch）；Mesh 最可靠但最貴；Bus 的主幹一斷就全倒。"
              }
            ]
          },
          {
            "heading": "四、HTTP vs HTTPS　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "HTTP",
                  "HTTPS"
                ],
                "rows": [
                  [
                    "全名",
                    "HyperText Transfer Protocol",
                    "HTTP Secure"
                  ],
                  [
                    "加密",
                    "明文（沒加密，易被竊聽）",
                    "加密（HTTP ＋ SSL/TLS）"
                  ],
                  [
                    "安全性",
                    "低",
                    "高（加密 ＋ 身分驗證）"
                  ],
                  [
                    "Port",
                    "80",
                    "443"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：HTTPS ＝ HTTP ＋ SSL/TLS 加密。（port 80／443 屬【硬背】，先記這兩個最常用的。）"
              }
            ]
          },
          {
            "heading": "五、Stateless（無狀態）　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "定義：伺服器不記得前一次請求，每個請求都獨立、互不相干。HTTP 本身就是 stateless。",
                  "優點：簡單、伺服器不用存狀態、容易擴展（任何伺服器都能處理任何請求）、可靠。",
                  "缺點：記不住使用者（每次都像第一次見面），所以要靠 Cookie／Session 這類額外機制來記住登入、購物車等狀態。"
                ]
              }
            ]
          },
          {
            "heading": "六、Session vs Cookie　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "兩者都是用來「幫 stateless 的 HTTP 記住狀態」，差別在資料存在哪邊："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "Cookie",
                  "Session"
                ],
                "rows": [
                  [
                    "資料存在",
                    "客戶端（瀏覽器）",
                    "伺服器端"
                  ],
                  [
                    "怎麼運作",
                    "伺服器發給瀏覽器，之後每次請求自動帶上",
                    "伺服器給一個 session ID（常透過 cookie 傳），真正資料在伺服器"
                  ],
                  [
                    "安全性",
                    "較低（在客戶端，可被竄改／竊取）",
                    "較高（資料不在客戶端）"
                  ],
                  [
                    "成本",
                    "不佔伺服器資源",
                    "佔伺服器資源（伺服器要存）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶鉤子：Cookie 存「客戶端」、Session 存「伺服器端」；常見做法是「用 Cookie 帶 session ID」。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-security-crypto-tls",
    "subjectKey": "networkingV2",
    "title": "資安：加密、雜湊、數位簽章、憑證與 TLS",
    "summary": "跨兩科：TLS 協定面 → 網路概論；加密／雜湊／簽章／憑證／CIA → 資訊管理（資安）。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_2下_資安_加密與TLS.md"
    ],
    "sourceSummary": "網路概論(v2) / 資安：加密、雜湊、數位簽章、憑證與 TLS",
    "examOutline": [
      "資安：加密、雜湊、數位簽章、憑證與 TLS",
      "一、資訊安全三要素 CIA　【硬背】"
    ],
    "memoryPoints": [
      "跨兩科：TLS 協定面 → 網路概論；加密／雜湊／簽章／憑證／CIA → 資訊管理（資安）。",
      "學習方式：概念屬【理解】；對照表與關鍵字屬【硬背】。TLS 版本現況經查證。"
    ],
    "understandingNotes": [
      "跨兩科：TLS 協定面 → 網路概論；加密／雜湊／簽章／憑證／CIA → 資訊管理（資安）。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "機密性",
        "en": "Confidentiality"
      },
      {
        "zh": "數位簽章",
        "en": "Digital Signature"
      },
      {
        "zh": "傳輸層安全性",
        "en": "Transport Layer Security, TLS"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_2下_資安_加密與TLS.md"
        ],
        "sourceSection": "網路概論(v2) / 資安：加密、雜湊、數位簽章、憑證與 TLS",
        "lead": [
          "跨兩科：TLS 協定面 → 網路概論；加密／雜湊／簽章／憑證／CIA → 資訊管理（資安）。",
          "學習方式：概念屬【理解】；對照表與關鍵字屬【硬背】。TLS 版本現況經查證。"
        ],
        "sections": [
          {
            "heading": "一、資訊安全三要素 CIA　【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "資安到底在保護什麼："
              },
              {
                "kind": "bulletList",
                "items": [
                  "機密性 Confidentiality：別人看不到 → 靠加密。",
                  "完整性 Integrity：資料沒被竄改 → 靠雜湊／數位簽章。",
                  "可用性 Availability：需要時用得到 → 防 DoS、備援。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "常見延伸：不可否認性 Non-repudiation（你不能否認做過）→ 靠數位簽章。"
              }
            ]
          },
          {
            "heading": "二、對稱式 vs 非對稱式加密　【硬背】★",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "對稱式加密",
                  "非對稱式加密"
                ],
                "rows": [
                  [
                    "金鑰",
                    "加解密同一把（祕密金鑰）",
                    "一對：公鑰 + 私鑰"
                  ],
                  [
                    "速度",
                    "快",
                    "慢"
                  ],
                  [
                    "主要難題",
                    "金鑰怎麼安全交給對方（金鑰分配）",
                    "慢，不適合大量資料"
                  ],
                  [
                    "代表演算法",
                    "AES、DES、3DES",
                    "RSA、ECC、Diffie-Hellman"
                  ],
                  [
                    "用途",
                    "大量資料加密",
                    "交換金鑰、數位簽章"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "最重要的觀念（背）："
              },
              {
                "kind": "bulletList",
                "items": [
                  "公鑰加密 → 私鑰解密 ＝ 保密（只有持私鑰的人看得到）。",
                  "私鑰加密 → 公鑰解密 ＝ 簽章／驗身分（證明是私鑰持有者發的）。"
                ]
              }
            ]
          },
          {
            "heading": "三、雜湊 Hash　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "名詞：把任意長度資料 → 轉成固定長度的「指紋／摘要」。",
                  "特性：① 單向（算不回原文）② 雪崩效應（改一點點、整個變）③ 難碰撞（兩筆資料很難算出同一值）。",
                  "用途：驗完整性、存密碼（存雜湊不存明碼）。",
                  "代表：SHA-256（常用）；MD5、SHA-1 已不安全，別用。"
                ]
              }
            ]
          },
          {
            "heading": "四、數位簽章 Digital Signature　【理解】★",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "流程："
              },
              {
                "kind": "orderedList",
                "items": [
                  "發送方把「資料的雜湊值」用「自己的私鑰」加密 → 這就是簽章。",
                  "收方用「發送方的公鑰」解開簽章，再比對自己重算的雜湊。",
                  "一致 → 同時保證：身分（不可否認）＋ 完整性。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "⚠ 易錯：數位簽章不負責把內容加密保密，它保證的是來源 + 沒被竄改。"
              }
            ]
          },
          {
            "heading": "五、憑證 Certificate 與 CA／PKI　【理解】★",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "問題：你拿到一把公鑰，怎麼確定它真的是那個網站的、不是駭客冒充的？",
                  "解法：數位憑證＝「公鑰 + 持有者身分資訊」，由 CA（憑證授權中心） 用 CA 的私鑰簽章背書。",
                  "PKI（公鑰基礎建設）：CA、憑證、註冊機構等整套「信任體系」。",
                  "例：瀏覽器內建一份信任的 CA 清單；網站的憑證若由可信 CA 簽 → 顯示鎖頭、https。"
                ]
              }
            ]
          },
          {
            "heading": "六、SSL／TLS（把上面全用上）　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "TLS（Transport Layer Security）：網路傳輸的加密協定，SSL 的後繼者（SSL 已全面淘汰）。",
                  "HTTPS ＝ HTTP ＋ TLS，跑在 port 443。",
                  "位置：在應用層與傳輸層之間（OSI 常歸到表現層附近）。",
                  "版本現況（查證後）：實際在用的是 TLS 1.2 與 1.3；TLS 1.3（2018）為最新；SSL 全部、TLS 1.0／1.1 已淘汰（2021 年由 RFC 8996 正式廢止，主流瀏覽器都已封鎖；舊版漏洞如 POODLE、BEAST）。",
                  "一次連線怎麼運作（交握 Handshake 概念）："
                ]
              },
              {
                "kind": "orderedList",
                "items": [
                  "用非對稱加密 + 憑證／CA：驗證網站身分，並安全地協商出一把對稱金鑰。",
                  "之後資料改用對稱加密傳送（快）。",
                  "完整性靠雜湊／MAC。"
                ]
              },
              {
                "kind": "bulletList",
                "items": [
                  "一句話：非對稱談鑰匙 + 憑證驗身分，對稱傳資料，雜湊驗完整。"
                ]
              }
            ]
          },
          {
            "heading": "七、易混淆／常見陷阱　【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "陷阱",
                  "正確"
                ],
                "rows": [
                  [
                    "對稱加密「比較不安全」",
                    "不是安全高低，而是對稱快、非對稱解決金鑰分配"
                  ],
                  [
                    "數位簽章會把內容加密",
                    "錯，簽章保證來源＋完整，不負責保密"
                  ],
                  [
                    "雜湊可以解回原文",
                    "錯，雜湊是單向的"
                  ],
                  [
                    "公鑰要保密",
                    "錯，公鑰公開；要保密的是私鑰"
                  ],
                  [
                    "HTTPS 只用非對稱加密",
                    "錯，握手用非對稱換鑰匙、傳資料用對稱"
                  ],
                  [
                    "SSL 還在用",
                    "錯，SSL 已淘汰，現在是 TLS"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "八、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "CIA：機密（加密）、完整（雜湊／簽章）、可用；＋ 不可否認（簽章）。",
                  "對稱（AES／DES，快，金鑰分配難）vs 非對稱（RSA／ECC，慢，換金鑰＋簽章）。",
                  "公鑰加密＝保密；私鑰加密＝簽章。",
                  "雜湊：單向、固定長度、驗完整；SHA-256 好、MD5／SHA-1 淘汰。",
                  "數位簽章 ＝ 用私鑰加密「雜湊值」→ 驗身分＋完整（不可否認）。",
                  "憑證 ＝ 公鑰＋身分，CA 背書；PKI 是整套信任體系。",
                  "TLS：HTTPS／443；非對稱換鑰匙＋對稱傳資料＋憑證驗身分；TLS 1.2／1.3 在用，1.3 最新。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-devices-osi",
    "subjectKey": "networkingV2",
    "title": "網路設備對應層級（看得懂版）",
    "summary": "學習方式：理解為主【理解】；最後的總表與「背這張」屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_3上_網路設備對應層級.md"
    ],
    "sourceSummary": "網路概論(v2) / 網路設備對應層級（看得懂版）",
    "examOutline": [
      "網路設備對應層級（看得懂版）",
      "一、一句話心法：越往上層，設備越「聰明」"
    ],
    "memoryPoints": [
      "科目：網路概論。這篇用「OSI 分層」把設備串起來——理解「每一層的設備看得懂什麼」，就不用死背哪個設備在哪一層。",
      "學習方式：理解為主【理解】；最後的總表與「背這張」屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：理解為主【理解】；最後的總表與「背這張」屬【硬背】。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "集線器",
        "en": "Hub"
      },
      {
        "zh": "交換器",
        "en": "Switch"
      },
      {
        "zh": "路由器",
        "en": "Router"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_3上_網路設備對應層級.md"
        ],
        "sourceSection": "網路概論(v2) / 網路設備對應層級（看得懂版）",
        "lead": [
          "科目：網路概論。這篇用「OSI 分層」把設備串起來——理解「每一層的設備看得懂什麼」，就不用死背哪個設備在哪一層。",
          "學習方式：理解為主【理解】；最後的總表與「背這張」屬【硬背】。"
        ],
        "sections": [
          {
            "heading": "一、一句話心法：越往上層，設備越「聰明」",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "設備之間的差別，就在「看得懂多少」："
              },
              {
                "kind": "paragraph",
                "text": "text\nOSI 層            設備                       看得懂 → 做什麼\n┌────────────────────────────────────────────────────────────┐\n│ L7 應用層  │ Gateway 閘道器             │ 整個協定 → 翻譯           │\n│ L3 網路層  │ Router／L3 Switch         │ IP／封包 → 跨網路找路       │\n│ L2 連結層  │ Switch／Bridge／NIC       │ MAC／訊框 → 挑該送的埠       │\n│ L1 實體層  │ Hub／Repeater／NIC        │ 只看訊號 → 無腦複製         │\n└────────────────────────────────────────────────────────────┘\n↑ 越往上，設備越「聰明」"
              },
              {
                "kind": "paragraph",
                "text": "推理法（不用硬背）：看 bit → L1；看 MAC → L2；看 IP → L3；轉協定 → Gateway（可到 L7）。記住這條軸線，下面所有設備自動歸位。"
              }
            ]
          },
          {
            "heading": "二、帶你走一遍（從下層到上層）",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "網路卡 NIC（L1/L2） — 裝置的「網路嘴巴」。每張卡有獨一無二的 MAC 位址，是裝置能連網的基本配備。",
                  "中繼器 Repeater（L1） — 訊號傳遠會衰減，把訊號放大／再生、延長距離。不懂位址，單純還原訊號。",
                  "集線器 Hub（L1） — 「多埠的中繼器」。資料無腦複製給所有埠，大家共享頻寬、容易碰撞。已被 Switch 取代。",
                  "橋接器 Bridge（L2） — 連接兩網段，看 MAC 決定要不要轉過去，藉此切開碰撞域、過濾流量。",
                  "交換器 Switch（L2） — 「多埠的橋接器」，現代區網主角。內部有 MAC 位址表，資料只送到目的埠（不像 Hub 全送）。每個埠都是獨立碰撞域、可全雙工。",
                  "L3 交換器 L3 Switch（L3） — 「Switch ＋ Router 合體」：用 IP 在 VLAN／子網路之間轉送，而且是硬體做路由、速度快。企業內跨 VLAN時常用。",
                  "路由器 Router（L3） — 用 IP 連接不同網路、選最佳路徑轉送封包。會切開廣播域；連 LAN 到 Internet、可做 NAT。家裡對外那台就是它。",
                  "閘道器 Gateway（L4–L7，可跨全層） — 不同協定／系統之間的「翻譯官」（異質網路互通）。最上層、最複雜。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "⚠ 名詞陷阱：口語的「預設閘道（default gateway）」其實多半指路由器；設備分類的「Gateway」是指協定轉換器。看語境判斷。\n💡 L3 Switch vs Router：兩個都 L3、都看 IP。差別在 L3 Switch 偏「企業內部跨 VLAN、硬體路由、快、埠多」；Router 偏「連到外部不同網路、功能多（NAT／防火牆）、埠少」。"
              }
            ]
          },
          {
            "heading": "三、網路設備總表　【硬背】★",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "設備",
                  "OSI 層",
                  "看得懂",
                  "功能（做什麼）",
                  "切碰撞域",
                  "切廣播域"
                ],
                "rows": [
                  [
                    "網路卡 NIC",
                    "L1／L2",
                    "MAC",
                    "讓裝置連網、提供 MAC",
                    "—",
                    "—"
                  ],
                  [
                    "中繼器 Repeater",
                    "L1 實體",
                    "訊號",
                    "放大／再生訊號、延長距離",
                    "✗",
                    "✗"
                  ],
                  [
                    "集線器 Hub",
                    "L1 實體",
                    "訊號",
                    "多埠中繼器，送所有埠",
                    "✗（全部同一個）",
                    "✗"
                  ],
                  [
                    "橋接器 Bridge",
                    "L2 連結",
                    "MAC",
                    "連網段、依 MAC 過濾",
                    "✓（每段一個）",
                    "✗"
                  ],
                  [
                    "交換器 Switch",
                    "L2 連結",
                    "MAC",
                    "依 MAC 表精準轉送",
                    "✓（每埠一個）",
                    "✗（VLAN 才切）"
                  ],
                  [
                    "L3 交換器",
                    "L3 網路",
                    "IP",
                    "Switch＋Router，跨 VLAN 硬體路由",
                    "✓",
                    "✓"
                  ],
                  [
                    "路由器 Router",
                    "L3 網路",
                    "IP",
                    "跨網路繞送、找路徑、NAT",
                    "✓",
                    "✓"
                  ],
                  [
                    "閘道器 Gateway",
                    "L4–L7",
                    "協定",
                    "不同協定／系統轉換",
                    "✓",
                    "✓"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "「七大設備」怎麼算？——核心是 Repeater／Hub／Bridge／Switch／Router／Gateway，再加一個（NIC 或 L3 Switch），依教材而定。上表全列出，記得住就好。"
              }
            ]
          },
          {
            "heading": "四、碰撞域 vs 廣播域（超常考）　【硬背】★",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "先把定義抓清楚："
              },
              {
                "kind": "bulletList",
                "items": [
                  "碰撞域 Collision Domain：共享同一介質、同時送會「相撞」的範圍（撞到要重送）。",
                  "廣播域 Broadcast Domain：一個廣播訊框能傳到的範圍。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "誰切誰："
              },
              {
                "kind": "table",
                "headers": [
                  "設備",
                  "切碰撞域？",
                  "切廣播域？"
                ],
                "rows": [
                  [
                    "中繼器／集線器 Hub",
                    "✗",
                    "✗"
                  ],
                  [
                    "橋接器／交換器 Switch",
                    "✓（每埠一個）",
                    "✗（VLAN 例外）"
                  ],
                  [
                    "路由器 Router／L3 Switch",
                    "✓",
                    "✓"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "用比喻記："
              },
              {
                "kind": "bulletList",
                "items": [
                  "碰撞域 ＝ 一間會議室共用一支麥克風，兩人同時講就撞 → Switch 給每個埠一支獨立麥克風，不撞了。",
                  "廣播域 ＝ 你喊「大家集合！」傳得到的範圍 → Router 像一道隔音牆，喊聲過不去。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：Switch 切碰撞域、不切廣播域；Router 兩個都切。\n口訣：Hub 都不切、Switch 切碰撞、Router 全切。"
              }
            ]
          },
          {
            "heading": "五、LAN vs VLAN　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "LAN",
                  "VLAN（虛擬 LAN）"
                ],
                "rows": [
                  [
                    "怎麼分",
                    "實體連在一起 ＝ 一個廣播域",
                    "用軟體把交換器的埠邏輯切成多個獨立廣播域"
                  ],
                  [
                    "佈線",
                    "換網段要實體重新佈線",
                    "不用重新佈線，軟體設定即可"
                  ],
                  [
                    "隔離／安全",
                    "同網段廣播互通",
                    "不同 VLAN 預設不能互通（要靠 L3 路由），隔離廣播、較安全"
                  ],
                  [
                    "分組依據",
                    "依實體位置",
                    "依邏輯（如部門），不受實體位置限制"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶鉤子：VLAN ＝ 用軟體把一台實體交換器「邏輯切成多個獨立 LAN／廣播域」。 好處：免重新佈線、隔離廣播、較安全、依部門彈性分組。\n呼應上一節：VLAN 就是「在 Switch 上額外切廣播域」的方法。"
              }
            ]
          },
          {
            "heading": "六、易混淆／常考",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Hub vs Switch（超常考）：Hub 送所有埠（L1、共享頻寬、會碰撞）；Switch 只送目的埠（L2、每埠獨立碰撞域）。",
                  "Switch vs Router：Switch 用 MAC（L2、同網路內）；Router 用 IP（L3、跨網路）。",
                  "Bridge vs Switch：本質相同（都 L2、看 MAC）；Switch ＝ 多埠、硬體加速的 Bridge。",
                  "L3 Switch vs Router：都 L3；L3 Switch 偏內部跨 VLAN、快、埠多；Router 偏對外、功能多、埠少。",
                  "「切碰撞域」≠「切廣播域」：Switch 只做前者，別搞混。",
                  "Gateway：設備分類指「協定轉換器」；「預設閘道」口語多指 Router。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "📎 無線設備（AP、Modem、無線路由器、CSMA/CA）見：網路概論 3下｜無線與上網接取設備。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-wireless-access-devices",
    "subjectKey": "networkingV2",
    "title": "無線與上網接取設備",
    "summary": "學習方式：理解為主【理解】；最後對照表【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_3下_無線與上網接取設備.md"
    ],
    "sourceSummary": "網路概論(v2) / 無線與上網接取設備",
    "examOutline": [
      "無線與上網接取設備",
      "一、先定位：這組在補什麼"
    ],
    "memoryPoints": [
      "科目：網路概論。本篇是 #3 網路設備對應層級 的無線篇，延續同一套 OSI 分層心法，補上「對外上網」與「無線」這組。",
      "學習方式：理解為主【理解】；最後對照表【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：理解為主【理解】；最後對照表【硬背】。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "無線基地台",
        "en": "Access Point, AP"
      },
      {
        "zh": "數據機",
        "en": "Modem"
      },
      {
        "zh": "閘道器",
        "en": "Gateway"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_3下_無線與上網接取設備.md"
        ],
        "sourceSection": "網路概論(v2) / 無線與上網接取設備",
        "lead": [
          "科目：網路概論。本篇是 #3 網路設備對應層級 的無線篇，延續同一套 OSI 分層心法，補上「對外上網」與「無線」這組。",
          "學習方式：理解為主【理解】；最後對照表【硬背】。"
        ],
        "sections": [
          {
            "heading": "一、先定位：這組在補什麼",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "上一篇的七個設備，多半在處理「區網內部」怎麼連、怎麼送。",
                  "這一篇補兩件事："
                ]
              },
              {
                "kind": "orderedList",
                "items": [
                  "怎麼對外接到 ISP 上網 → 數據機 Modem。",
                  "怎麼用無線連 → 無線網卡 NIC、無線基地台 AP、無線路由器。"
                ]
              }
            ]
          },
          {
            "heading": "二、帶你走一遍",
            "blocks": [
              {
                "kind": "subsection",
                "heading": "數據機 Modem（調變解調器，L1）",
                "blocks": [
                  {
                    "kind": "bulletList",
                    "items": [
                      "名詞：Modem ＝ Modulator ＋ Demodulator（調變器 ＋ 解調器）。",
                      "做什麼：在「數位訊號 ↔ 線路上的訊號」之間轉換，讓數位資料能走電話線／纜線／光纖到 ISP。",
                      "調變 Modulation：數位 → 線路訊號（送出去）。",
                      "解調 Demodulation：線路訊號 → 數位（收回來）。",
                      "白話：你家對外上網的入口兼翻譯，把家裡的數位資料變成能在外線傳的形式。",
                      "例：DSL Modem、Cable Modem、光纖的 ONU（俗稱「小烏龜」）。"
                    ]
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "無線網卡 Wireless NIC（L1/L2）",
                "blocks": [
                  {
                    "kind": "bulletList",
                    "items": [
                      "上一篇有線 NIC 的無線版：裝置端負責收發無線電波、提供 MAC 位址。",
                      "筆電／手機內建的 Wi-Fi 模組就是它。"
                    ]
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "無線基地台 AP（Access Point，L2）",
                "blocks": [
                  {
                    "kind": "bulletList",
                    "items": [
                      "做什麼：把有線網路「延伸成無線」，讓無線裝置（手機／筆電）能接入網路。",
                      "白話：你連的 Wi-Fi 訊號就是 AP 發出的——它是「無線接入點」。",
                      "它本身只負責無線接入（L2），不做 routing。",
                      "常見於公司／學校：一條網路線接到天花板的 AP，發 Wi-Fi 給附近裝置。（AP 跑 Wi-Fi，即 IEEE 802.11 系列）"
                    ]
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "無線路由器 Wireless Router（家用「一台抵多台」）",
                "blocks": [
                  {
                    "kind": "bulletList",
                    "items": [
                      "家裡那台發 Wi-Fi 的，其實整合了多種功能：",
                      "Router（L3）：對外連線、跨網路繞送、NAT、發 IP（DHCP）。",
                      "AP（L2）：發 Wi-Fi。",
                      "Switch（L2）：背後那幾個有線埠。",
                      "有些還內建 Modem（modem ＋ router 二合一，稱 home gateway）。",
                      "所以家用「無線路由器」≈ Router ＋ AP ＋ Switch（＋ 有時含 Modem） 的合體。"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "heading": "三、最容易混淆的三組（重點）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "AP vs 無線路由器"
              },
              {
                "kind": "bulletList",
                "items": [
                  "AP：只做無線接入（L2），不繞送、不發 IP。",
                  "無線路由器：AP ＋ Router（L3，會 routing、NAT、發 IP） ＋ 內建 Switch。",
                  "公司多用「純 AP」（routing 交給專門設備）；家庭用「無線路由器」一台搞定。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "Modem vs Router"
              },
              {
                "kind": "bulletList",
                "items": [
                  "Modem：負責對外接到 ISP、做訊號轉換（家裡 ↔ 外線）。",
                  "Router：負責對內分配、跨網路繞送（你家的網路 ↔ 網際網路之間找路）。",
                  "家用設備常是兩者二合一（home gateway／含 modem 的無線路由器）。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "AP vs Hub／Switch（接續上一篇）"
              },
              {
                "kind": "bulletList",
                "items": [
                  "Hub／Switch 是有線接入；AP 是無線接入。",
                  "同一個 AP 下的無線裝置會競爭頻道：有線用 CSMA/CD（碰撞偵測），無線改用 CSMA/CA（碰撞避免）。"
                ]
              }
            ]
          },
          {
            "heading": "四、對照總表　【硬背】★",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "設備",
                  "OSI 層",
                  "角色",
                  "一句話"
                ],
                "rows": [
                  [
                    "數據機 Modem",
                    "L1",
                    "對外上網入口",
                    "數位 ↔ 線路訊號轉換（調變／解調）"
                  ],
                  [
                    "無線網卡 NIC",
                    "L1／L2",
                    "裝置端無線嘴巴",
                    "收發無線電波、提供 MAC"
                  ],
                  [
                    "無線基地台 AP",
                    "L2",
                    "無線接入點",
                    "把有線延伸成無線，不做 routing"
                  ],
                  [
                    "無線路由器",
                    "L2＋L3",
                    "家用合體機",
                    "Router ＋ AP ＋ Switch（可能含 Modem）"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "五、考點一句話",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Modem 調變／解調、對外接 ISP；Router 對內繞送；家用常二合一。",
                  "AP 只做無線接入（L2）；無線路由器才有 routing（L3）。",
                  "無線競爭頻道用 CSMA/CA（有線 CSMA/CD 的無線版）。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-ip-subnetting",
    "subjectKey": "networkingV2",
    "title": "IP 基礎 + 子網路計算 ★",
    "summary": "學習方式：IP 基礎屬【理解】＋【硬背】；子網路計算屬 ★【練流程】，務必動手算。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_4上_IP與子網路計算.md"
    ],
    "sourceSummary": "網路概論(v2) / IP 基礎 + 子網路計算",
    "examOutline": [
      "IP 基礎 + 子網路計算",
      "一、IP 基礎　【理解】＋【硬背】"
    ],
    "memoryPoints": [
      "科目：網路概論｜★ 必考：子網路切割是網路科唯一的大計算題",
      "學習方式：IP 基礎屬【理解】＋【硬背】；子網路計算屬 ★【練流程】，務必動手算。"
    ],
    "understandingNotes": [
      "學習方式：IP 基礎屬【理解】＋【硬背】；子網路計算屬 ★【練流程】，務必動手算。"
    ],
    "difficulty": "advanced",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "網際網路協定",
        "en": "Internet Protocol, IP"
      },
      {
        "zh": "子網路遮罩",
        "en": "Subnet Mask"
      },
      {
        "zh": "可變長度子網路遮罩",
        "en": "Variable Length Subnet Mask, VLSM"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_4上_IP與子網路計算.md"
        ],
        "sourceSection": "網路概論(v2) / IP 基礎 + 子網路計算",
        "lead": [
          "科目：網路概論｜★ 必考：子網路切割是網路科唯一的大計算題",
          "學習方式：IP 基礎屬【理解】＋【硬背】；子網路計算屬 ★【練流程】，務必動手算。",
          "（所有子網路數字皆已重算驗證；IP 類別／私有範圍為穩定標準。）"
        ],
        "sections": [
          {
            "heading": "一、IP 基礎　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "subsection",
                "heading": "先用一個比喻，把這些名詞一次搞懂",
                "blocks": [
                  {
                    "kind": "paragraph",
                    "text": "很多人卡在「子網路、遮罩、CIDR… 到底在幹嘛」。先用「社區門牌」把它們串起來，後面計算就有畫面："
                  },
                  {
                    "kind": "paragraph",
                    "text": "🏘 把整個網路想成一個社區，每台裝置是一戶。\nIP 位址 ＝ 完整門牌，分兩段：「哪個社區」（網路部分）＋「社區裡第幾戶」（主機部分）。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "子網路（Subnet）＝ 把大社區用圍牆隔成幾個小社區。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "為什麼要切？① 一個社區住太多戶，廣播（公告）會吵死大家——切小後公告只在自己小社區內傳；② 隔離、安全（不同部門分開）；③ 好管理、IP 分配剛好不浪費。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "遮罩（Subnet Mask）＝ 壓在門牌上的一把尺，標出「前面多少是社區、後面多少是戶號」。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "它跟 IP 一樣 32 位，是 1 的位＝網路部分、是 0 的位＝主機部分。光看 192.168.1.10 你不知道分界在哪，配上遮罩才知道。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "預設遮罩（Default Mask）＝ 每種規模社區「出廠預設的圍牆位置」。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "早期用「類別」分：A → /8、B → /16、C → /24。大社區（A）圍牆靠前（網路部分短、戶數超多）、小社區（C）圍牆靠後（戶數少）。子網路就是「在預設圍牆之外，再往戶號那邊多借幾位，隔出更小的社區」。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "網路位址 ＝ 社區的「招牌／名字」（主機位元全 0），代表整個社區本身，不分給任何一戶。"
                    ]
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "廣播位址（Broadcast）＝ 社區的「廣播喇叭」（主機位元全 1），對它喊話整個社區都聽到（ARP 找人、DHCP 找伺服器都靠它）。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "因為「招牌」與「喇叭」是公用的、不能拿來當某一戶的門牌，所以可用主機要 −2——這就是公式 2ʰ − 2 的由來。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "CIDR（無類別位址）＝ 不再只有「大/中/小」三種固定社區，而是「圍牆想設哪就設哪」。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "寫法 /n ＝ 前 n 位是社區（網路），例：/24 就是 255.255.255.0。\n為什麼要它？舊的分類太死、超浪費 IP（要 300 台，C 類 254 不夠、卻要塞給你 B 類 6 萬多）；CIDR 要多少給多少，省 IP、路由表也更精簡。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "把這張「社區圖」記住，下面的遮罩、網路／廣播位址、切子網路，全都是在這個比喻裡操作。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "IPv4 位址：32 bits，分成 4 段（octet，每段 8 bits、0–255），點分十進位（用小數點隔開的十進位數字，如 192.168.1.10）。位址分「網路部分」＋「主機部分」。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "類別（Classful） — 看第一段："
                  },
                  {
                    "kind": "table",
                    "headers": [
                      "類別",
                      "第一段範圍",
                      "預設遮罩",
                      "網路:主機 位元",
                      "用途"
                    ],
                    "rows": [
                      [
                        "A",
                        "1–126",
                        "/8（255.0.0.0）",
                        "8 : 24",
                        "大型網路"
                      ],
                      [
                        "B",
                        "128–191",
                        "/16（255.255.0.0）",
                        "16 : 16",
                        "中型"
                      ],
                      [
                        "C",
                        "192–223",
                        "/24（255.255.255.0）",
                        "24 : 8",
                        "小型"
                      ],
                      [
                        "D",
                        "224–239",
                        "—",
                        "—",
                        "多播 Multicast"
                      ],
                      [
                        "E",
                        "240–255",
                        "—",
                        "—",
                        "保留／實驗"
                      ]
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "🔎 表上兩個小地方：D 類「多播 Multicast」＝ 一次把封包送給「一群」訂閱者（如直播串流，相對於「一對一」）；A 類第一段只到 126，是因為 127.x 整段保留給 loopback。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "📌 看懂表裡的記法：\n- /8、/16、/24 這種「斜線數字」＝ 遮罩前面有幾個 1 ＝ 網路部分占幾位。/8 就是前 8 位是 1 → 255.0.0.0；/24 前 24 位是 1 → 255.255.255.0。\n- 「網路 : 主機 位元」如 8 : 24 ＝ 32 位門牌裡，網路占 8 位、主機占 24 位（兩者相加一定是 32）。網路位元越少 → 每個網路能塞的主機越多（A 類 24 位主機 ≈ 1600 萬台）。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "💡 127.0.0.1（loopback／回送）＝ 指向「自己這台電腦」的特殊地址：連它就是連自己，封包繞一圈就回來、不會送上網路，用來測試本機程式（別名 localhost）。整段 127.x.x.x 都保留給它。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "私有 IP ＝ 內部網路專用的位址：不能直接在網際網路上跑（要透過 NAT 轉換才能出門），所以不同公司的內網可以重複使用同一段。三段保留範圍（出自 RFC 1918；RFC ＝ 網路標準文件）："
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "A：10.0.0.0 – 10.255.255.255（10/8）",
                      "B：172.16.0.0 – 172.31.255.255（172.16/12）",
                      "C：192.168.0.0 – 192.168.255.255（192.168/16）"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "特殊位址："
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "網路位址＝主機位元全 0（代表整個網路）",
                      "廣播位址＝主機位元全 1（廣播給整個網路）",
                      "127.0.0.1 ＝ loopback（指自己，見上）",
                      "0.0.0.0 ＝「未指定／任何位址」（例如開機還沒拿到 IP、或表示「所有介面／預設路由」時用）",
                      "169.254.x.x ＝ APIPA（當 DHCP〔自動分配 IP 的服務〕拿不到 IP 時，系統自己暫時給的位址）"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "MAC vs IP："
                  },
                  {
                    "kind": "table",
                    "headers": [
                      "",
                      "MAC 位址",
                      "IP 位址"
                    ],
                    "rows": [
                      [
                        "長度",
                        "48 bits",
                        "32 bits（IPv4）"
                      ],
                      [
                        "性質",
                        "實體位址（燒在網卡、不變）",
                        "邏輯位址（可變）"
                      ],
                      [
                        "層",
                        "L2",
                        "L3"
                      ],
                      [
                        "用途",
                        "同網段內傳遞",
                        "跨網路路由"
                      ]
                    ]
                  }
                ]
              }
            ]
          },
          {
            "heading": "二、子網路計算　★【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "用途：把一個大網路切成多個小子網路（省 IP、隔離、好管理）。考試給你 IP／遮罩，要你算網路位址、廣播位址、可用主機數、主機範圍、能切幾個子網路。"
              },
              {
                "kind": "paragraph",
                "text": "核心公式："
              },
              {
                "kind": "bulletList",
                "items": [
                  "主機位元數 h ＝ 32 − n（n ＝ CIDR 的 /n）",
                  "一個子網路總位址數（block size）＝ 2ʰ",
                  "可用主機數 ＝ 2ʰ − 2（扣掉網路位址＋廣播位址）",
                  "子網路數 ＝ 2^(借的位元數)（從原網路位元再多借幾位）"
                ]
              },
              {
                "kind": "paragraph",
                "text": "快速法（magic number）： 在「遮罩有變化的那個 octet」，block ＝ 256 − 該 octet 遮罩值；網路位址是 block 的倍數；廣播位址 ＝ 下一個網路位址 − 1。"
              },
              {
                "kind": "paragraph",
                "text": "📌 block（區塊）＝ 一個子網路涵蓋多少個「連續 IP」（這塊多大） ＝ 2^(主機位元數)。例：/24 主機 8 位 → block ＝ 256（.0 ～ .255）；/26 主機 6 位 → block ＝ 64。網路位址都是 block 的倍數、下一個網路 ＝ 這個 ＋ block。（block 是總數，可用主機 ＝ block − 2。）"
              },
              {
                "kind": "paragraph",
                "text": "常用遮罩對照："
              },
              {
                "kind": "table",
                "headers": [
                  "CIDR",
                  "遮罩",
                  "block",
                  "可用主機"
                ],
                "rows": [
                  [
                    "/24",
                    "255.255.255.0",
                    "256",
                    "254"
                  ],
                  [
                    "/25",
                    "255.255.255.128",
                    "128",
                    "126"
                  ],
                  [
                    "/26",
                    "255.255.255.192",
                    "64",
                    "62"
                  ],
                  [
                    "/27",
                    "255.255.255.224",
                    "32",
                    "30"
                  ],
                  [
                    "/28",
                    "255.255.255.240",
                    "16",
                    "14"
                  ],
                  [
                    "/29",
                    "255.255.255.248",
                    "8",
                    "6"
                  ],
                  [
                    "/30",
                    "255.255.255.252",
                    "4",
                    "2"
                  ]
                ]
              },
              {
                "kind": "subsection",
                "heading": "先搞懂原理：二進位（做題前先過這關）　【理解】",
                "blocks": [
                  {
                    "kind": "paragraph",
                    "text": "上面的公式和捷徑，全部來自「遮罩的二進位」。把這三件事打通，計算就不卡："
                  },
                  {
                    "kind": "paragraph",
                    "text": "① /n 就是「遮罩前面有 n 個 1」——1 是網路部分、0 是主機部分。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "例 /26：前 26 個 1、後 6 個 0："
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "text\n11111111 . 11111111 . 11111111 . 11000000\n255    .   255    .   255    .   192      → /26 = 255.255.255.192\n→ 這就是 CIDR ↔ 遮罩 的由來，用「數 1」的、不用背。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "② 網路位址 ＝ IP「AND」遮罩（遮罩是 1 的位保留、是 0 的位歸 0）。\n③ 廣播位址 ＝ 網路位址，但把主機那幾位「全填 1」。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "完整例子：192.168.10.200 / 26 的網路位址、廣播位址？"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "/26 只切到第 4 段（前 2 位網路、後 6 位主機）；第 4 段 200 ＝ 11001000。",
                      "網路位址（和遮罩做 AND）："
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "text\n11001000   ← 200\n& 11000000   ← 192（遮罩第 4 段）\n──────────\n11000000   ＝ 192      → 網路位址 = 192.168.10.192"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "廣播位址（主機 6 位全填 1）：11 000000 → 11 111111 ＝ 255 → 廣播 = 192.168.10.255",
                      "可用主機：192.168.10.193 ～ .254（2⁶ − 2 ＝ 62 台）"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "④ 捷徑「256 − 遮罩值」為什麼準？ 那個 octet 有 6 個主機位 → 一塊大小 ＝ 2⁶ ＝ 64 ＝ 256 − 192。所以網路位址都是 64 的倍數（0、64、128、192），廣播 ＝ 下一塊 − 1。捷徑只是這套二進位的快速版而已。"
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "題目一：每個子網路要容納 ≥ 50 台主機，怎麼切？",
                "blocks": [
                  {
                    "kind": "paragraph",
                    "text": "把 192.168.10.0/24 切成「每個子網路至少 50 台主機」。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "步驟 1：要 ≥50 台 → 找 h 使 2ʰ − 2 ≥ 50。2⁵−2＝30（不夠）、2⁶−2＝62 ≥ 50（夠） → h ＝ 6。",
                      "步驟 2：n ＝ 32 − 6 ＝ /26，遮罩 255.255.255.192。",
                      "步驟 3：從 /24 借了 26−24 ＝ 2 位 → 子網路數 ＝ 2² ＝ 4 個；block ＝ 2⁶ ＝ 64。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "👀 二進位看「為什麼剛好 4 塊、每塊 64」：/24 → /26 就是把第 4 段「借最前面 2 位當子網路編號」。2 位有 4 種組合 → 4 個子網路；剩下 6 位是主機（全 0＝網路位址、全 1＝廣播）：\ntext\n00 000000 = 0     → 子網1（.0   ～ .63）\n01 000000 = 64    → 子網2（.64  ～ .127）\n10 000000 = 128   → 子網3（.128 ～ .191）\n11 000000 = 192   → 子網4（.192 ～ .255）"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "步驟 4：四個子網路（每 64 一塊）："
                    ]
                  },
                  {
                    "kind": "table",
                    "headers": [
                      "子網路",
                      "網路位址",
                      "廣播位址",
                      "可用主機"
                    ],
                    "rows": [
                      [
                        "1",
                        "192.168.10.0",
                        "192.168.10.63",
                        ".1 ～ .62"
                      ],
                      [
                        "2",
                        "192.168.10.64",
                        "192.168.10.127",
                        ".65 ～ .126"
                      ],
                      [
                        "3",
                        "192.168.10.128",
                        "192.168.10.191",
                        ".129 ～ .190"
                      ],
                      [
                        "4",
                        "192.168.10.192",
                        "192.168.10.255",
                        ".193 ～ .254"
                      ]
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "每個子網路 62 台可用（≥50 ✓）。"
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "題目二：給 IP/CIDR，求網路位址與廣播位址",
                "blocks": [
                  {
                    "kind": "paragraph",
                    "text": "172.16.20.10 / 20 的網路位址、廣播位址、主機範圍？"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "步驟 1：/20 → 遮罩 255.255.240.0（第 3 段是 240）。",
                      "步驟 2：快速法看第 3 段：block ＝ 256 − 240 ＝ 16。第 3 段網路位址是 16 的倍數：0、16、32…",
                      "步驟 3：第 3 段是 20 → 落在 16 那塊（16 ≤ 20 < 32）。",
                      "所以 網路位址 ＝ 172.16.16.0、廣播位址 ＝ 172.16.31.255（下一塊 .32.0 的前一個）。",
                      "主機範圍 ＝ 172.16.16.1 ～ 172.16.31.254（可用 2¹² − 2 ＝ 4094 台）。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "👀 二進位看：/20 ＝ 20 個 1 → 第 3 段是 11110000（240），代表第 3 段「前 4 位網路、後 4 位主機」，再加第 4 段整段主機 ＝ 共 12 個主機位。"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "第 3 段 20 ＝ 00010100，和遮罩 AND："
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "text\n00010100   ← 20\n& 11110000   ← 240（遮罩第3段）\n──────────\n00010000   ＝ 16    → 網路第 3 段 = 16 → 172.16.16.0"
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "廣播 ＝ 主機 12 位全填 1：第 3 段 00011111＝31、第 4 段 11111111＝255 → 172.16.31.255。這就是為什麼範圍橫跨 .16.0 ～ .31.255。"
                    ]
                  }
                ]
              },
              {
                "kind": "subsection",
                "heading": "題目三：VLSM（變動長度子網路遮罩）",
                "blocks": [
                  {
                    "kind": "paragraph",
                    "text": "VLSM ＝ 用「不同大小」的遮罩切子網路，依每個子網路實際需求給剛好的大小，比「全部切一樣大」更省 IP。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "做法：需求大的先切、用大區塊；需求小的後切、用小區塊。"
                  },
                  {
                    "kind": "paragraph",
                    "text": "例：一個 192.168.1.0/24 要分給 A（100 台）、B（50 台）、C（25 台）："
                  },
                  {
                    "kind": "table",
                    "headers": [
                      "子網路",
                      "需求",
                      "遮罩",
                      "範圍",
                      "可用"
                    ],
                    "rows": [
                      [
                        "A",
                        "100",
                        "/25",
                        ".0 – .127",
                        "126"
                      ],
                      [
                        "B",
                        "50",
                        "/26",
                        ".128 – .191",
                        "62"
                      ],
                      [
                        "C",
                        "25",
                        "/27",
                        ".192 – .223",
                        "30"
                      ]
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "（剩 .224 – .255 還可再分。）"
                  },
                  {
                    "kind": "paragraph",
                    "text": "怎麼決定每個遮罩（每個都先用主機位算）："
                  },
                  {
                    "kind": "bulletList",
                    "items": [
                      "A 要 100 → 2⁷ − 2 = 126 ≥ 100 → 7 主機位 → /25（一塊 128）。",
                      "B 要 50 → 2⁶ − 2 = 62 ≥ 50 → 6 主機位 → /26（一塊 64）。",
                      "C 要 25 → 2⁵ − 2 = 30 ≥ 25 → 5 主機位 → /27（一塊 32）。"
                    ]
                  },
                  {
                    "kind": "paragraph",
                    "text": "為什麼「大的先切」：從 .0 依序往後排，大塊先佔，空間才不會被切碎、塞不下大的：\ntext\n.0 ───────────── .127 │ .128 ──── .191 │ .192 ─ .223 │ .224 ─ .255\nA  /25 (128)     │   B /26 (64)   │  C /27 (32) │  剩餘可再分"
                  }
                ]
              }
            ]
          },
          {
            "heading": "三、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "原理：遮罩前 n 個 1 ＝網路、其餘＝主機；網路位址 ＝ IP AND 遮罩、廣播 ＝ 主機位全填 1。",
                  "h ＝ 32 − n；block ＝ 2ʰ；可用主機 ＝ 2ʰ − 2；子網路數 ＝ 2^借的位元。",
                  "快速法：變化 octet 的 block ＝ 256 − 遮罩值；網路位址是 block 倍數；廣播 ＝ 下個網路 − 1。",
                  "網路位址 ＝ 主機位元全 0；廣播 ＝ 主機位元全 1。",
                  "私有 IP：10/8、172.16/12、192.168/16；127.0.0.1 ＝ loopback。",
                  "VLSM：大的先切，依需求給剛好大小，最省 IP。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-transport-layer",
    "subjectKey": "networkingV2",
    "title": "傳輸層",
    "summary": "學習方式：大多屬【理解】（懂邏輯就記得）；握手順序、header 大小屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_5_傳輸層.md"
    ],
    "sourceSummary": "網路概論(v2) / 傳輸層",
    "examOutline": [
      "傳輸層",
      "一、Circuit Switching vs Packet Switching　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論",
      "學習方式：大多屬【理解】（懂邏輯就記得）；握手順序、header 大小屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：大多屬【理解】（懂邏輯就記得）；握手順序、header 大小屬【硬背】。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "傳輸控制協定",
        "en": "Transmission Control Protocol, TCP"
      },
      {
        "zh": "使用者資料包協定",
        "en": "User Datagram Protocol, UDP"
      },
      {
        "zh": "三方交握",
        "en": "Three-Way Handshake"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_5_傳輸層.md"
        ],
        "sourceSection": "網路概論(v2) / 傳輸層",
        "lead": [
          "科目：網路概論",
          "學習方式：大多屬【理解】（懂邏輯就記得）；握手順序、header 大小屬【硬背】。",
          "（皆為穩定的協定標準，已查內部一致。）"
        ],
        "sections": [
          {
            "heading": "一、Circuit Switching vs Packet Switching　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "電路交換 Circuit Switching",
                  "封包交換 Packet Switching"
                ],
                "rows": [
                  [
                    "方式",
                    "先建立一條專屬實體路徑，全程獨佔（像打電話）",
                    "資料切成封包各自獨立傳，可走不同路徑、目的地重組"
                  ],
                  [
                    "優點",
                    "連線穩定、保證頻寬（每秒能傳多少資料）、延遲固定",
                    "線路共享、效率高、可繞路容錯"
                  ],
                  [
                    "缺點",
                    "獨佔線路（沒傳也佔著）、浪費、建立慢",
                    "延遲不固定（可能塞車／亂序）、需重組"
                  ],
                  [
                    "例子",
                    "傳統電話網路 PSTN",
                    "網際網路（IP）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：電路交換＝獨佔專線（穩但浪費）；封包交換＝共享分封（省但延遲不定）。"
              }
            ]
          },
          {
            "heading": "二、TCP + 三方交握 + 四方交握　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "TCP（傳輸控制協定）特性：連線導向（先建立連線）、可靠（確認 ACK、遺失重傳）、有序（按序到達）、有流量控制與壅塞控制。適合要求正確的應用（網頁、email、檔案）。"
              },
              {
                "kind": "paragraph",
                "text": "三方交握（建立連線） — SYN → SYN-ACK → ACK："
              },
              {
                "kind": "orderedList",
                "items": [
                  "Client → Server：SYN（我想連線）",
                  "Server → Client：SYN ＋ ACK（好，我也要連，並確認你）",
                  "Client → Server：ACK（確認）→ 連線建立"
                ]
              },
              {
                "kind": "paragraph",
                "text": "四方交握（結束連線） — FIN → ACK → FIN → ACK："
              },
              {
                "kind": "orderedList",
                "items": [
                  "Client → Server：FIN（我要關了）",
                  "Server → Client：ACK（收到）",
                  "Server → Client：FIN（我這邊也關了）",
                  "Client → Server：ACK（收到）→ 連線結束"
                ]
              },
              {
                "kind": "paragraph",
                "text": "為什麼結束要四次？因為 TCP 是全雙工（雙向可同時收發），兩個方向要各自關閉（你關你的、我關我的），所以比建立多一步。"
              }
            ]
          },
          {
            "heading": "三、SYN Flood Attack　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "手法：攻擊者狂送大量 SYN（常偽造來源 IP），但不回最後的 ACK，讓伺服器留下一堆半開連線（half-open），佔滿連線資源 → 正常使用者連不進來（DoS 阻斷服務攻擊）。",
                  "防範：SYN cookies、限制半開連線數、防火牆過濾。"
                ]
              }
            ]
          },
          {
            "heading": "四、流量控制 vs 壅塞控制（超常考辨別）　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "兩個都是 TCP 在「控制送多快」，但保護對象不同："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "流量控制 Flow Control",
                  "壅塞控制 Congestion Control"
                ],
                "rows": [
                  [
                    "保護誰",
                    "接收方（別淹沒對方緩衝區）",
                    "整個網路（別塞爆路由器）"
                  ],
                  [
                    "看誰的狀況",
                    "接收方的接收能力",
                    "網路的壅塞程度"
                  ],
                  [
                    "機制",
                    "滑動視窗（接收方告知還能收多少 rwnd）",
                    "慢啟動、壅塞避免、快速重傳／恢復（cwnd）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "💡 表裡的機制白話：\n- 緩衝區＝接收端暫存資料的空間；滑動視窗（rwnd ＝ 接收視窗）＝接收方一直告訴發送方「我還能收多少」，發送方就不會送爆它。\n- 壅塞控制用 cwnd（壅塞視窗） 搭配 慢啟動（一開始慢慢送、沒塞就逐步加速）、壅塞避免、快速重傳／恢復——都是「偵測到網路快塞了就降速」的調節法。"
              },
              {
                "kind": "paragraph",
                "text": "記憶鉤子：流量控制保護「接收方」、壅塞控制保護「網路」。"
              }
            ]
          },
          {
            "heading": "五、UDP + TCP vs UDP　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "UDP（使用者資料包協定）：非連線（不先建立）、不可靠（不確認、不重傳）、快、開銷小（額外負擔少）。適合即時、可容忍少量遺失的應用（串流、遊戲、DNS、VoIP ＝ 網路電話）。"
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "TCP",
                  "UDP"
                ],
                "rows": [
                  [
                    "連線",
                    "連線導向（先三方交握）",
                    "非連線"
                  ],
                  [
                    "可靠性",
                    "可靠（確認、重傳、有序）",
                    "不可靠"
                  ],
                  [
                    "速度",
                    "較慢（開銷大）",
                    "快（開銷小）"
                  ],
                  [
                    "Header",
                    "較大（最小 20 bytes）",
                    "較小（8 bytes）"
                  ],
                  [
                    "流量／壅塞控制",
                    "有",
                    "無"
                  ],
                  [
                    "適用",
                    "網頁、email、檔案（要正確）",
                    "串流、遊戲、DNS、VoIP（要即時）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶鉤子：TCP ＝ 可靠但慢（先握手）；UDP ＝ 快但不保證（直接送）。"
              }
            ]
          },
          {
            "heading": "六、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "交換：電路交換獨佔專線、封包交換共享分封。",
                  "TCP：連線導向、可靠、有序；建立＝三方交握（SYN／SYN-ACK／ACK）、結束＝四方交握（FIN／ACK／FIN／ACK）。",
                  "SYN Flood ＝ 灌半開連線的 DoS；防範 SYN cookies。",
                  "流量控制保護接收方、壅塞控制保護網路。",
                  "TCP 可靠慢（header 20B）、UDP 快不保證（header 8B）。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-application-ports",
    "subjectKey": "networkingV2",
    "title": "應用層協定 + Port Number 對照表 ★",
    "summary": "學習方式：Port 號 + 屬 TCP/UDP 純【硬背】；協定的「做什麼」屬【理解】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_6_應用層與Port對照.md"
    ],
    "sourceSummary": "網路概論(v2) / 應用層協定 + Port Number 對照表",
    "examOutline": [
      "應用層協定 + Port Number 對照表",
      "一、Port Number 對照表（★ 必背）　【硬背】"
    ],
    "memoryPoints": [
      "科目：網路概論｜【硬背】重災區",
      "學習方式：Port 號 + 屬 TCP/UDP 純【硬背】；協定的「做什麼」屬【理解】。"
    ],
    "understandingNotes": [
      "學習方式：Port 號 + 屬 TCP/UDP 純【硬背】；協定的「做什麼」屬【理解】。"
    ],
    "difficulty": "advanced",
    "topicType": "concept",
    "terms": [
      {
        "zh": "連接埠號碼",
        "en": "Port Number"
      },
      {
        "zh": "超文字傳輸協定",
        "en": "HyperText Transfer Protocol, HTTP"
      },
      {
        "zh": "網域名稱系統",
        "en": "Domain Name System, DNS"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_6_應用層與Port對照.md"
        ],
        "sourceSection": "網路概論(v2) / 應用層協定 + Port Number 對照表",
        "lead": [
          "科目：網路概論｜【硬背】重災區",
          "學習方式：Port 號 + 屬 TCP/UDP 純【硬背】；協定的「做什麼」屬【理解】。",
          "（本篇所有 port number 皆已上網查證 IANA／標準來源，非憑記憶。）"
        ],
        "sections": [
          {
            "heading": "一、Port Number 對照表（★ 必背）　【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "🏠 Port（埠）是什麼？ 一台機器只有一個 IP，卻同時跑很多服務（網頁、收信、SSH…）。Port ＝ 一個編號（0–65535），用來分辨「這包資料要給哪個服務」——像大樓只有一個地址（IP）、裡面很多房間，port 就是房間號。"
              },
              {
                "kind": "paragraph",
                "text": "Port 範圍：0–1023 周知埠（well-known）、1024–49151 註冊埠、49152–65535 動態／臨時埠（client 連線時用）。"
              },
              {
                "kind": "table",
                "headers": [
                  "協定",
                  "Port",
                  "TCP/UDP",
                  "功能"
                ],
                "rows": [
                  [
                    "FTP",
                    "20（資料）、21（控制）",
                    "TCP",
                    "檔案傳輸"
                  ],
                  [
                    "SSH",
                    "22",
                    "TCP",
                    "安全遠端登入"
                  ],
                  [
                    "Telnet",
                    "23",
                    "TCP",
                    "遠端登入（明文，不安全）"
                  ],
                  [
                    "SMTP",
                    "25",
                    "TCP",
                    "寄信（送出、伺服器間轉送）"
                  ],
                  [
                    "DNS",
                    "53",
                    "TCP ＋ UDP",
                    "域名解析（查詢用 UDP、區域傳送用 TCP）"
                  ],
                  [
                    "DHCP",
                    "67（伺服器）、68（客戶端）",
                    "UDP",
                    "自動分配 IP"
                  ],
                  [
                    "TFTP",
                    "69",
                    "UDP",
                    "簡易檔案傳輸"
                  ],
                  [
                    "HTTP",
                    "80",
                    "TCP",
                    "網頁"
                  ],
                  [
                    "POP3",
                    "110",
                    "TCP",
                    "收信（下載到本機，常從伺服器刪）"
                  ],
                  [
                    "IMAP",
                    "143",
                    "TCP",
                    "收信（保留在伺服器、多裝置同步）"
                  ],
                  [
                    "SNMP",
                    "161（查詢）、162（trap）",
                    "UDP",
                    "網路管理"
                  ],
                  [
                    "HTTPS",
                    "443",
                    "TCP",
                    "加密網頁（HTTP ＋ TLS）"
                  ],
                  [
                    "RTSP",
                    "554",
                    "TCP/UDP",
                    "串流控制（播放／暫停）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "RTP／RTCP：傳即時媒體用，沒有固定周知埠——RTP 走動態 UDP 偶數埠、RTCP 走相鄰的奇數埠（RTP 埠＋1）。\n背誦小幫手（由小到大）：20/21 → 22 → 23 → 25 → 53 → 67/68 → 69 → 80 → 110 → 143 → 161 → 443 → 554。"
              },
              {
                "kind": "paragraph",
                "text": "🔎 兩個小詞：trap（SNMP 162）＝設備主動送出的異常通知；區域傳送（DNS 用 TCP）＝DNS 伺服器之間整批同步資料。"
              }
            ]
          },
          {
            "heading": "二、常見應用層協定（做什麼）　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "DNS（53）：把域名（www.example.com）轉成 IP 位址。",
                  "DHCP（67/68）：自動分配 IP、遮罩、預設閘道、DNS 給客戶端。流程：DORA（Discover 探索 → Offer 提供 → Request 請求 → ACK 確認）。",
                  "FTP（20/21）：檔案傳輸，用兩條通道——21 控制、20 資料。",
                  "Email 三劍客：",
                  "SMTP（25）＝寄信（送出、伺服器間轉送）",
                  "POP3（110）＝收信，下載到本機後常從伺服器刪（適合單一裝置）",
                  "IMAP（143）＝收信，郵件留在伺服器、多裝置同步（適合多裝置）",
                  "口訣：SMTP 寄、POP3／IMAP 收；POP3 下載刪、IMAP 留伺服器。",
                  "SNMP（161/162）：監控、管理網路設備（路由器、交換器等）。"
                ]
              }
            ]
          },
          {
            "heading": "三、GET vs POST（HTTP 方法，常考）　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "GET",
                  "POST"
                ],
                "rows": [
                  [
                    "用途",
                    "取得資料",
                    "提交資料（表單、改資料）"
                  ],
                  [
                    "參數放哪",
                    "放在 URL（看得到）",
                    "放在 body（看不到）"
                  ],
                  [
                    "長度限制",
                    "有（URL 長度限制）",
                    "無"
                  ],
                  [
                    "可否被快取／加書籤",
                    "可",
                    "不適合"
                  ],
                  [
                    "安全性",
                    "較低（參數露在網址）",
                    "較高（但仍需 HTTPS 才真的加密）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：GET 拿資料（參數在網址）、POST 送資料（參數在 body）。"
              }
            ]
          },
          {
            "heading": "四、URL（統一資源定位符）　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "網址格式：協定://主機名稱:埠/路徑?查詢\n例：https://www.example.com:443/page?id=1\n（協定 https、主機 www.example.com、埠 443、路徑 /page、查詢 id=1）"
              }
            ]
          },
          {
            "heading": "五、SDN / CDN / 即時串流　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "SDN（軟體定義網路）：把網路的控制平面（決定怎麼走）和資料平面（實際轉送）分離，用軟體集中控制器統一管理，讓網路可程式化、好調整。",
                  "CDN（內容傳遞網路）：把內容快取到全球各地的邊緣伺服器，讓使用者就近取得 → 加速、減輕原伺服器負載。",
                  "即時串流三兄弟：",
                  "RTSP（554）＝控制：下播放／暫停／停止指令（像遙控器）。",
                  "RTP（動態 UDP）＝傳輸：實際送即時的影音資料。",
                  "RTCP ＝品質回報：監控 RTP 的傳輸品質（延遲、遺失）。"
                ]
              }
            ]
          },
          {
            "heading": "六、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "必背 port：FTP 20/21、SSH 22、Telnet 23、SMTP 25、DNS 53、DHCP 67/68、TFTP 69、HTTP 80、POP3 110、IMAP 143、SNMP 161/162、HTTPS 443、RTSP 554。",
                  "DNS 同時用 TCP ＋ UDP；SNMP、DHCP、TFTP 用 UDP；其餘多為 TCP。",
                  "Email：SMTP 寄、POP3／IMAP 收；POP3 下載刪、IMAP 留伺服器。",
                  "GET 拿（參數在網址）、POST 送（參數在 body）。",
                  "DHCP 流程：DORA。SDN ＝ 控制／資料平面分離；CDN ＝ 就近快取加速。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-physical-layer",
    "subjectKey": "networkingV2",
    "title": "實體層 + 標準速度表 ★",
    "summary": "學習方式：媒介特性、IoT／雲端／Big Data 概念屬【理解】；各種速度／IEEE 標準屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_7上_實體層.md"
    ],
    "sourceSummary": "網路概論(v2) / 實體層 + 標準速度表",
    "examOutline": [
      "實體層 + 標準速度表",
      "一、傳輸媒介　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論｜【硬背】重災區（數字超多）",
      "學習方式：媒介特性、IoT／雲端／Big Data 概念屬【理解】；各種速度／IEEE 標準屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：媒介特性、IoT／雲端／Big Data 概念屬【理解】；各種速度／IEEE 標準屬【硬背】。"
    ],
    "difficulty": "advanced",
    "topicType": "concept",
    "terms": [
      {
        "zh": "實體層",
        "en": "Physical Layer"
      },
      {
        "zh": "電機電子工程師學會",
        "en": "Institute of Electrical and Electronics Engineers, IEEE"
      },
      {
        "zh": "乙太網路",
        "en": "Ethernet"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_7上_實體層.md"
        ],
        "sourceSection": "網路概論(v2) / 實體層 + 標準速度表",
        "lead": [
          "科目：網路概論｜【硬背】重災區（數字超多）",
          "學習方式：媒介特性、IoT／雲端／Big Data 概念屬【理解】；各種速度／IEEE 標準屬【硬背】。",
          "（所有速度／標準皆已上網查證多個來源，非憑記憶。）"
        ],
        "sections": [
          {
            "heading": "一、傳輸媒介　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "有線："
              },
              {
                "kind": "table",
                "headers": [
                  "媒介",
                  "原理",
                  "優點",
                  "缺點"
                ],
                "rows": [
                  [
                    "雙絞線 Twisted Pair",
                    "兩銅線絞繞減干擾（UTP 無遮蔽／STP 有遮蔽）",
                    "便宜、易裝",
                    "距離短、易受干擾"
                  ],
                  [
                    "同軸電纜 Coaxial",
                    "中心銅線＋遮蔽層",
                    "抗干擾較好、頻寬較大",
                    "粗硬"
                  ],
                  [
                    "光纖 Fiber",
                    "用光傳輸",
                    "最快、最遠、頻寬最大、不受電磁干擾、安全",
                    "貴、施工難、易折"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "無線："
              },
              {
                "kind": "table",
                "headers": [
                  "媒介",
                  "特性"
                ],
                "rows": [
                  [
                    "紅外線 Infrared",
                    "短距離、需視線、不能穿牆（遙控器）"
                  ],
                  [
                    "雷射 Laser",
                    "高頻寬、需視線、受天氣影響"
                  ],
                  [
                    "無線電波 Radio",
                    "可穿透、全向、距離遠（WiFi、廣播）"
                  ],
                  [
                    "微波 Microwave",
                    "高頻、需視線（點對點）、受天氣影響（衛星、長距）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "💡 「需視線」＝ 收發兩端中間不能有遮擋（像手電筒，被牆擋住就斷）；「全向」＝ 訊號往四面八方送，不用對準。"
              }
            ]
          },
          {
            "heading": "二、WiFi（802.11）標準速度表　【硬背】★",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "標準",
                  "別名",
                  "頻段",
                  "最高速度"
                ],
                "rows": [
                  [
                    "802.11b",
                    "—",
                    "2.4 GHz",
                    "11 Mbps"
                  ],
                  [
                    "802.11a",
                    "—",
                    "5 GHz",
                    "54 Mbps"
                  ],
                  [
                    "802.11g",
                    "—",
                    "2.4 GHz",
                    "54 Mbps"
                  ],
                  [
                    "802.11n",
                    "Wi-Fi 4",
                    "2.4／5 GHz",
                    "600 Mbps（開始用 MIMO）"
                  ],
                  [
                    "802.11ac",
                    "Wi-Fi 5",
                    "5 GHz",
                    "約 6.9 Gbps（MU-MIMO）"
                  ],
                  [
                    "802.11ax",
                    "Wi-Fi 6／6E",
                    "2.4／5（／6）GHz",
                    "約 9.6 Gbps（OFDMA）"
                  ],
                  [
                    "802.11be",
                    "Wi-Fi 7",
                    "2.4／5／6 GHz",
                    "約 46 Gbps"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "MIMO：用多根天線同時收發多個資料流，提升速度與可靠度（802.11n 起採用）。\nMU-MIMO ＝ 多使用者版的 MIMO（同時服務多台裝置）；OFDMA ＝ 把頻道切成很多小格、多台裝置同時各用一格（Wi-Fi 6 用，省得排隊）。"
              }
            ]
          },
          {
            "heading": "三、藍牙 Bluetooth 世代速度　【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "版本",
                  "最高速度",
                  "重點"
                ],
                "rows": [
                  [
                    "1.x",
                    "約 1 Mbps",
                    "範圍約 10m"
                  ],
                  [
                    "2.0 ＋ EDR",
                    "約 3 Mbps",
                    "EDR 增速"
                  ],
                  [
                    "3.0 ＋ HS",
                    "約 24 Mbps",
                    "借 WiFi（802.11）來傳"
                  ],
                  [
                    "4.0",
                    "約 1 Mbps",
                    "引入 BLE 低功耗"
                  ],
                  [
                    "5.0",
                    "約 2 Mbps（BLE）",
                    "範圍約 4 倍、廣播強化"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "四、USB 速度　【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "版本",
                  "最高速度"
                ],
                "rows": [
                  [
                    "USB 1.0／1.1",
                    "12 Mbps"
                  ],
                  [
                    "USB 2.0",
                    "480 Mbps"
                  ],
                  [
                    "USB 3.0（＝3.1 Gen1）",
                    "5 Gbps"
                  ],
                  [
                    "USB 3.1（Gen2）",
                    "10 Gbps"
                  ],
                  [
                    "USB 3.2（Gen2x2）",
                    "20 Gbps"
                  ],
                  [
                    "USB4",
                    "40 Gbps"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "五、行動網路 1G～5G　【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "世代",
                  "技術",
                  "速度",
                  "特色"
                ],
                "rows": [
                  [
                    "1G",
                    "類比（AMPS）",
                    "約 2.4 Kbps",
                    "類比語音"
                  ],
                  [
                    "2G",
                    "數位（GSM）",
                    "約 64 Kbps",
                    "數位語音 ＋ SMS"
                  ],
                  [
                    "3G",
                    "UMTS／CDMA2000",
                    "144 Kbps–2 Mbps",
                    "行動上網"
                  ],
                  [
                    "4G",
                    "LTE",
                    "100 Mbps–1 Gbps",
                    "高速、全 IP、影音串流"
                  ],
                  [
                    "5G",
                    "NR",
                    "1–20 Gbps",
                    "超高速、低延遲、海量 IoT"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "乙太網路 Ethernet：10BASE-T 10 Mbps → 快速乙太網路 100 Mbps → Gigabit 1 Gbps → 10 Gigabit 10 Gbps。"
              }
            ]
          },
          {
            "heading": "六、IoT / 雲端 / Big Data　【理解】（概念）＋【硬背】（分類名）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "物聯網 IoT 三層："
              },
              {
                "kind": "bulletList",
                "items": [
                  "感知層（Perception）：感測器／RFID 蒐集資料（眼耳）",
                  "網路層（Network）：傳輸資料（神經）",
                  "應用層（Application）：處理與應用（大腦）"
                ]
              },
              {
                "kind": "paragraph",
                "text": "雲端 — 服務模式（管得越來越少）："
              },
              {
                "kind": "table",
                "headers": [
                  "模式",
                  "租什麼",
                  "例子"
                ],
                "rows": [
                  [
                    "IaaS 基礎設施即服務",
                    "硬體／虛擬機",
                    "AWS EC2"
                  ],
                  [
                    "PaaS 平台即服務",
                    "開發平台（OS、DB、執行環境）",
                    "Google App Engine"
                  ],
                  [
                    "SaaS 軟體即服務",
                    "現成軟體",
                    "Gmail、Google Docs"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "口訣：IaaS → PaaS → SaaS，從底到頂、你要管的越來越少。"
              },
              {
                "kind": "paragraph",
                "text": "雲端 — 部署模式：公有雲（大眾共用、便宜彈性）、私有雲（自建專用、安全可控但貴）、社群雲（特定群體共享）、混合雲（公＋私混用）。"
              },
              {
                "kind": "paragraph",
                "text": "Big Data 5V：Volume（量大）、Velocity（快）、Variety（多樣）、Veracity（真實性）、Value（價值）。"
              }
            ]
          },
          {
            "heading": "七、RFID / NFC　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "RFID（無線射頻辨識）：用無線電波，讀取器讀標籤（tag）的資料，免接觸／免視線。組成：標籤 ＋ 讀取器 ＋ 天線。分被動式（無電池、靠讀取器供電）／主動式（有電池）。應用：門禁、物流、悠遊卡。",
                  "NFC（近場通訊）：RFID 的一種，超短距離（約 4cm）、13.56 MHz、可雙向。應用：手機感應支付。",
                  "NFC vs RFID：NFC 距離更短、可雙向、多用於手機；RFID 距離較長、多為單向。"
                ]
              }
            ]
          },
          {
            "heading": "八、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "光纖最快最遠最安全；紅外線/雷射/微波需視線、無線電波可穿透。",
                  "WiFi：b 11M、a/g 54M、n 600M、ac ~6.9G、ax ~9.6G。",
                  "藍牙：1.x 1M、2.0 3M、3.0 24M、5.0 2M；USB：1.1 12M、2.0 480M、3.0 5G、3.1 10G、3.2 20G、USB4 40G。",
                  "行動網路：1G 類比、2G 數位+SMS、3G 上網、4G LTE、5G 超高速低延遲。",
                  "雲端：IaaS→PaaS→SaaS；Big Data：5V；IoT：感知/網路/應用三層。",
                  "RFID 有被動/主動；NFC 超短距(4cm)、雙向、手機支付。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-data-link-layer",
    "subjectKey": "networkingV2",
    "title": "資料鏈結層",
    "summary": "學習方式：大多屬【理解】（懂邏輯就記得）；543 Rule 的數字屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_7下_資料鏈結層.md"
    ],
    "sourceSummary": "網路概論(v2) / 資料鏈結層",
    "examOutline": [
      "資料鏈結層",
      "一、訊框化 Framing　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論",
      "學習方式：大多屬【理解】（懂邏輯就記得）；543 Rule 的數字屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：大多屬【理解】（懂邏輯就記得）；543 Rule 的數字屬【硬背】。"
    ],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "資料鏈結層",
        "en": "Data Link Layer"
      },
      {
        "zh": "媒體存取控制位址",
        "en": "Media Access Control Address, MAC Address"
      },
      {
        "zh": "載波感測多重存取/碰撞偵測",
        "en": "Carrier Sense Multiple Access with Collision Detection, CSMA/CD"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_7下_資料鏈結層.md"
        ],
        "sourceSection": "網路概論(v2) / 資料鏈結層",
        "lead": [
          "科目：網路概論",
          "學習方式：大多屬【理解】（懂邏輯就記得）；543 Rule 的數字屬【硬背】。",
          "（皆為穩定標準，已查內部一致。）"
        ],
        "sections": [
          {
            "heading": "一、訊框化 Framing　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "資料鏈結層把上層來的位元流包成一個個訊框（frame）：前面加 header（來源／目的 MAC）、後面加 trailer（尾端，放錯誤偵測碼 FCS；FCS ＝ 訊框檢查碼，常用你在基本計概學過的 CRC 計算）。"
              },
              {
                "kind": "bulletList",
                "items": [
                  "目的：讓接收端知道訊框從哪開始、哪結束（定界），並能偵測錯誤。"
                ]
              }
            ]
          },
          {
            "heading": "二、單工 / 半雙工 / 全雙工　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "模式",
                  "方向",
                  "例子"
                ],
                "rows": [
                  [
                    "單工 Simplex",
                    "只能單向",
                    "廣播、鍵盤 → 電腦"
                  ],
                  [
                    "半雙工 Half-duplex",
                    "雙向但不能同時（輪流）",
                    "對講機"
                  ],
                  [
                    "全雙工 Full-duplex",
                    "雙向可同時",
                    "電話、現代乙太網路（switch）"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "三、多重存取：競爭 vs 無競爭 + CSMA　【理解】★",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "多個裝置共用一條媒介，要決定「誰能傳」："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "競爭式 Contention",
                  "無競爭式 Contention-free"
                ],
                "rows": [
                  [
                    "怎麼傳",
                    "大家搶著傳，可能碰撞",
                    "有秩序輪流，不碰撞"
                  ],
                  [
                    "例子",
                    "CSMA/CD、CSMA/CA、ALOHA",
                    "Token Passing（權杖）、Polling、TDMA"
                  ],
                  [
                    "優缺",
                    "低負載效率高；高負載碰撞多",
                    "無碰撞、高負載穩；低負載有等待開銷"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "CSMA 家族（傳前先「聽」媒介有沒有人用）："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "全名",
                  "用在",
                  "做法"
                ],
                "rows": [
                  [
                    "CSMA",
                    "載波偵聽多重存取",
                    "—",
                    "先聽、沒人用才傳（但仍可能同時傳 → 碰撞）"
                  ],
                  [
                    "CSMA/CD",
                    "＋碰撞偵測",
                    "有線乙太網路",
                    "邊傳邊測，撞到就停、等隨機時間重傳"
                  ],
                  [
                    "CSMA/CA",
                    "＋碰撞避免",
                    "無線 WiFi（802.11）",
                    "傳前先等、用 RTS／CTS 預約，事先避免碰撞"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "超常考：CD 用於「有線」（偵測得到碰撞）、CA 用於「無線」（難偵測 → 改成避免）。"
              },
              {
                "kind": "paragraph",
                "text": "🔎 這些名詞：ALOHA ＝ 最早的「想傳就傳、撞了再重傳」隨機法；Polling 輪詢 ＝ 主控端逐一問各裝置「要不要傳」；TDMA 分時 ＝ 每台分配固定時段、輪流使用；RTS／CTS ＝ 無線裡「先舉手請求（RTS）、獲准（CTS）再傳」的預約機制。"
              }
            ]
          },
          {
            "heading": "四、543 Rule（5-4-3 規則）　【硬背】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "早期乙太網路（10 Mbps）一個碰撞域的限制：最多 5 個網段、4 個中繼器（hub），其中只有 3 個網段可接裝置（另 2 個只作連接用）。"
              },
              {
                "kind": "bulletList",
                "items": [
                  "目的：限制訊號延遲，確保 CSMA/CD 的碰撞偵測還能正常運作。",
                  "記法：5 段、4 中繼器、3 段有裝置。"
                ]
              }
            ]
          },
          {
            "heading": "五、ARQ（自動重傳請求）　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "ARQ：錯誤控制機制——接收端收到錯的或沒收到，就要發送端重傳（靠 ACK 確認／NAK 否定 ＋ timeout）。三種："
              },
              {
                "kind": "table",
                "headers": [
                  "方式",
                  "做法"
                ],
                "rows": [
                  [
                    "Stop-and-Wait 停止等待",
                    "傳一個、等一個 ACK 再傳下一個（簡單、慢）"
                  ],
                  [
                    "Go-Back-N 回溯 N",
                    "錯了 → 從出錯那個之後全部重傳"
                  ],
                  [
                    "Selective Repeat 選擇性重傳",
                    "只重傳錯的那個（效率高、較複雜）"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "六、HDLC vs PPP　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "兩個都是點對點的 L2（WAN）協定："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "HDLC",
                  "PPP"
                ],
                "rows": [
                  [
                    "全名",
                    "High-level Data Link Control",
                    "Point-to-Point Protocol"
                  ],
                  [
                    "特性",
                    "位元導向、同步",
                    "點對點直連（撥接、DSL）"
                  ],
                  [
                    "功能",
                    "較簡單",
                    "多：支援多協定、身分驗證（PAP／CHAP，驗證登入帳密的協定）、錯誤偵測"
                  ],
                  [
                    "標準",
                    "偏 Cisco 私有",
                    "標準開放（跨廠商）"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "七、L2 vs L3 Switch　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "L2 交換器",
                  "L3 交換器"
                ],
                "rows": [
                  [
                    "依據",
                    "MAC 位址",
                    "IP 位址"
                  ],
                  [
                    "能做",
                    "同網段／VLAN 內轉送訊框",
                    "switch ＋ router：跨 VLAN／子網路路由（硬體路由，快）"
                  ],
                  [
                    "層",
                    "L2",
                    "L3"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "八、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "訊框化 ＝ 包成 frame（MAC header ＋ 錯誤碼 trailer）、定界 ＋ 偵錯。",
                  "單工單向、半雙工輪流、全雙工同時雙向。",
                  "多重存取：競爭（搶，會撞）vs 無競爭（輪流，不撞）。",
                  "CSMA/CD 有線（偵測）、CSMA/CA 無線（避免） ← 必考。",
                  "543 Rule：5 段、4 中繼器、3 段有裝置。",
                  "ARQ 三種：停等、Go-Back-N、選擇性重傳。",
                  "HDLC 簡單偏私有；PPP 功能多（驗證）、標準開放。",
                  "L2 看 MAC、L3 看 IP 可跨網段路由。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-security-crypto",
    "subjectKey": "networkingV2",
    "title": "資安觀念與加密 ★",
    "summary": "學習方式：大多屬【理解】（懂原理就記得）；加密演算法名稱屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_8上_資安觀念與加密.md"
    ],
    "sourceSummary": "網路概論(v2) / 資安觀念與加密",
    "examOutline": [
      "資安觀念與加密",
      "一、資安五大要素　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論｜★ 每年必考、今年特別重，要多花時間",
      "學習方式：大多屬【理解】（懂原理就記得）；加密演算法名稱屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：大多屬【理解】（懂原理就記得）；加密演算法名稱屬【硬背】。"
    ],
    "difficulty": "advanced",
    "topicType": "concept",
    "terms": [
      {
        "zh": "對稱式加密",
        "en": "Symmetric Encryption"
      },
      {
        "zh": "非對稱式加密",
        "en": "Asymmetric Encryption"
      },
      {
        "zh": "雜湊",
        "en": "Hashing"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_8上_資安觀念與加密.md"
        ],
        "sourceSection": "網路概論(v2) / 資安觀念與加密",
        "lead": [
          "科目：網路概論｜★ 每年必考、今年特別重，要多花時間",
          "學習方式：大多屬【理解】（懂原理就記得）；加密演算法名稱屬【硬背】。",
          "（皆為穩定的資安標準，已查內部一致。）"
        ],
        "sections": [
          {
            "heading": "一、資安五大要素　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "核心三個合稱 CIA，再加兩個："
              },
              {
                "kind": "table",
                "headers": [
                  "要素",
                  "意思",
                  "靠什麼達成"
                ],
                "rows": [
                  [
                    "機密性 Confidentiality",
                    "資料只有授權者能看",
                    "加密、存取控制"
                  ],
                  [
                    "完整性 Integrity",
                    "資料沒被竄改、保持正確",
                    "雜湊、數位簽章"
                  ],
                  [
                    "可用性 Availability",
                    "授權者需要時能正常使用",
                    "備援、備份（威脅：DoS／DDoS ＝ 灌爆流量讓服務癱瘓，DDoS 是分散式多來源版）"
                  ],
                  [
                    "不可否認性 Non-repudiation",
                    "做過的事不能事後抵賴",
                    "數位簽章"
                  ],
                  [
                    "認證性 Authentication",
                    "確認身分是真的",
                    "密碼、憑證、生物辨識"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶：CIA（機密、完整、可用）是三大核心；再加不可否認、認證。"
              }
            ]
          },
          {
            "heading": "二、對稱 vs 非對稱加密　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "對稱式 Symmetric",
                  "非對稱式 Asymmetric（公開金鑰）"
                ],
                "rows": [
                  [
                    "金鑰",
                    "同一把金鑰加解密",
                    "一對：公鑰（公開）＋私鑰（自留）"
                  ],
                  [
                    "速度",
                    "快（適合大量資料）",
                    "慢"
                  ],
                  [
                    "痛點／優勢",
                    "金鑰分配難、金鑰數量多",
                    "解決金鑰分配、能做數位簽章"
                  ],
                  [
                    "例子",
                    "DES、3DES、AES",
                    "RSA、ECC、Diffie-Hellman"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "非對稱的兩種用法（重要）："
              },
              {
                "kind": "bulletList",
                "items": [
                  "要保密（機密性）：用「接收者的公鑰」加密 → 只有接收者私鑰能解。",
                  "要簽章（認證／不可否認）：用「發送者的私鑰」簽 → 大家用發送者公鑰驗。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "實務常混合：用非對稱傳對稱金鑰，再用對稱加密資料（兼顧安全與速度）。"
              }
            ]
          },
          {
            "heading": "三、雜湊 Hash　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "雜湊函數：把任意長度資料 → 固定長度的摘要（digest）。特性：單向不可逆、固定長度、改一點點就完全不同（雪崩效應）、抗碰撞（很難找到兩筆不同資料算出同一個雜湊值；這個「碰撞」跟網路傳輸的碰撞無關）。",
                  "用途：驗證完整性（比對雜湊值看資料有沒有被改）、密碼儲存。",
                  "例：MD5、SHA-1（這兩個已不安全）、SHA-256／SHA-2、SHA-3。"
                ]
              }
            ]
          },
          {
            "heading": "四、數位簽章 Digital Signature　【理解】★",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "目的：一次達成完整性 ＋ 認證 ＋ 不可否認（注意：不負責保密）。"
              },
              {
                "kind": "paragraph",
                "text": "流程："
              },
              {
                "kind": "orderedList",
                "items": [
                  "發送者把訊息做雜湊得到摘要。",
                  "用「發送者的私鑰」加密摘要 → 這就是數位簽章。",
                  "連同原訊息一起送出。",
                  "接收者用「發送者的公鑰」解簽章得到摘要 A；自己也對收到的訊息做雜湊得到摘要 B。",
                  "A ＝ B → 沒被竄改（完整性）、確實是發送者發的（認證、不可否認）。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "為什麼用私鑰簽？因為只有發送者有私鑰，別人無法偽造 → 達成不可否認。\n若還要保密，要另外用接收者的公鑰加密訊息。"
              }
            ]
          },
          {
            "heading": "五、PKI / CA / 數位憑證　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "PKI（公開金鑰基礎建設）：一套管理數位憑證與公私鑰的架構，用來確認「某把公鑰真的屬於某人」（防止公鑰被冒充）。",
                  "CA（憑證管理中心）：受信任的第三方，負責簽發數位憑證（把某人的身分和其公鑰綁定、由 CA 簽章背書）。",
                  "數位憑證：像「網路上的身分證」，內含持有者資訊 ＋ 公鑰 ＋ CA 的簽章。",
                  "用途：HTTPS 的 SSL／TLS 憑證就靠 PKI。"
                ]
              }
            ]
          },
          {
            "heading": "六、電子商務安全　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "電子商務的安全需求，其實就是把資安要素套到交易上："
              },
              {
                "kind": "table",
                "headers": [
                  "需求",
                  "在交易裡的意思"
                ],
                "rows": [
                  [
                    "機密性",
                    "交易／信用卡資料不被竊"
                  ],
                  [
                    "完整性",
                    "交易內容不被竄改"
                  ],
                  [
                    "不可否認性",
                    "買賣雙方不能否認交易"
                  ],
                  [
                    "可驗證性（認證）",
                    "確認交易雙方身分"
                  ],
                  [
                    "存取控制",
                    "只有授權者能存取資源"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "七、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "五要素：機密、完整、可用（CIA）＋ 不可否認、認證。",
                  "對稱：同把金鑰、快、分配難（AES）；非對稱：公私鑰、慢、能簽章（RSA）。",
                  "加密保密用「收件者公鑰」、數位簽章用「發送者私鑰」。",
                  "雜湊 ＝ 固定長度摘要、單向、驗完整性。",
                  "數位簽章 ＝ 完整性 ＋ 認證 ＋ 不可否認（不保密）；用發送者私鑰簽、公鑰驗。",
                  "PKI：CA 簽發數位憑證，綁定身分與公鑰；HTTPS 靠它。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "networking-v2-defense-attacks",
    "subjectKey": "networkingV2",
    "title": "防禦設備與攻擊類型 ★",
    "summary": "學習方式：大多屬【理解】（懂功能就記得）；標準名稱（ISO 27001、NIST）屬【硬背】。",
    "sourceBatch": "networking-v2-route",
    "sourceFiles": [
      "_private/MD/網路概論v2/網路概論_8下_防禦設備與攻擊.md"
    ],
    "sourceSummary": "網路概論(v2) / 防禦設備與攻擊類型",
    "examOutline": [
      "防禦設備與攻擊類型",
      "一、防火牆 / 次世代防火牆 / WAF　【理解】"
    ],
    "memoryPoints": [
      "科目：網路概論｜★ 資安攻防今年特別重，要多花時間（並多看時事）",
      "學習方式：大多屬【理解】（懂功能就記得）；標準名稱（ISO 27001、NIST）屬【硬背】。"
    ],
    "understandingNotes": [
      "學習方式：大多屬【理解】（懂功能就記得）；標準名稱（ISO 27001、NIST）屬【硬背】。"
    ],
    "difficulty": "advanced",
    "topicType": "concept",
    "terms": [
      {
        "zh": "入侵偵測系統",
        "en": "Intrusion Detection System, IDS"
      },
      {
        "zh": "入侵防禦系統",
        "en": "Intrusion Prevention System, IPS"
      },
      {
        "zh": "分散式阻斷服務攻擊",
        "en": "Distributed Denial of Service, DDoS"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/網路概論v2/網路概論_8下_防禦設備與攻擊.md"
        ],
        "sourceSection": "網路概論(v2) / 防禦設備與攻擊類型",
        "lead": [
          "科目：網路概論｜★ 資安攻防今年特別重，要多花時間（並多看時事）",
          "學習方式：大多屬【理解】（懂功能就記得）；標準名稱（ISO 27001、NIST）屬【硬背】。",
          "（皆已查內部一致；NIST 框架功能已上網查證最新版。）"
        ],
        "sections": [
          {
            "heading": "一、防火牆 / 次世代防火牆 / WAF　【理解】",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "看哪層／看什麼",
                  "特點"
                ],
                "rows": [
                  [
                    "傳統防火牆 Firewall",
                    "L3／L4（IP、port、協定）",
                    "依規則過濾進出流量（封包過濾；狀態檢測 ＝ 記住連線狀態、只放行屬於正常連線的封包）"
                  ],
                  [
                    "次世代防火牆 NGFW",
                    "到 L7",
                    "傳統防火牆 ＋ 應用辨識 ＋ 內建 IPS ＋ 深度封包檢測（DPI）"
                  ],
                  [
                    "WAF（網頁應用防火牆）",
                    "L7、專護 web app",
                    "過濾 HTTP/HTTPS，擋 SQL injection、XSS 等網頁攻擊"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：防火牆看 IP/port、NGFW 加應用辨識與 IPS、WAF 專門保護網站。"
              }
            ]
          },
          {
            "heading": "二、IDS vs IPS　【理解】★",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "IDS 入侵偵測系統",
                  "IPS 入侵防禦系統"
                ],
                "rows": [
                  [
                    "做什麼",
                    "偵測可疑活動並告警",
                    "偵測 ＋ 主動阻擋"
                  ],
                  [
                    "主／被動",
                    "被動（旁路監看）",
                    "主動（串接在線上）"
                  ],
                  [
                    "比喻",
                    "監視器／警報器",
                    "警衛（會把人擋下來）"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "記憶鉤子：IDS 只「偵測＋告警」、IPS 還會「阻擋」。"
              }
            ]
          },
          {
            "heading": "三、Proxy Server / DMZ　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Proxy Server（代理伺服器）：介於使用者與目標伺服器之間的中間人，代為轉發請求。用途：隱藏內部 IP、快取加速、存取控制／過濾、記錄。",
                  "DMZ（非軍事區）：介於「內部網路」與「外部網際網路」之間的隔離緩衝區，放需要對外服務的伺服器（web、mail、DNS）。即使對外伺服器被攻破，也不會直接危及內部網路（多一層隔離）。"
                ]
              }
            ]
          },
          {
            "heading": "四、VPN / PPTP　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "VPN（虛擬私人網路）：在公開網路上建一條加密的虛擬通道（tunnel），讓遠端使用者安全地連回內部網路，如同在本地。用途：遠端辦公、加密保護、隱藏 IP。",
                  "PPTP：早期的 VPN 通道協定（微軟）。設定簡單、快，但加密弱、已不安全，現多改用 L2TP/IPSec、OpenVPN、IPSec。"
                ]
              }
            ]
          },
          {
            "heading": "五、常見網路攻擊　【理解】★（今年重點）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "惡意程式 Malware："
              },
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "特性"
                ],
                "rows": [
                  [
                    "病毒 Virus",
                    "附在正常程式／檔案上，需執行宿主才散播、感染其他檔案"
                  ],
                  [
                    "蠕蟲 Worm",
                    "能自我複製、不需宿主，透過網路自動散播（吃資源）"
                  ],
                  [
                    "木馬 Trojan",
                    "偽裝成正常軟體誘騙安裝，暗中開後門／竊資料；不自我複製"
                  ],
                  [
                    "勒索軟體 Ransomware",
                    "加密受害者檔案、勒索贖金"
                  ],
                  [
                    "間諜軟體 Spyware",
                    "偷偷蒐集使用者資訊"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "病毒 vs 蠕蟲 vs 木馬（常考）：病毒要宿主、蠕蟲自我複製、木馬偽裝誘騙。"
              },
              {
                "kind": "paragraph",
                "text": "攻擊手法："
              },
              {
                "kind": "table",
                "headers": [
                  "手法",
                  "做什麼"
                ],
                "rows": [
                  [
                    "XSS（跨站腳本）",
                    "把惡意 script 注入網頁，在其他使用者瀏覽器執行（竊 cookie／session）"
                  ],
                  [
                    "SQL Injection",
                    "在輸入欄塞惡意 SQL，操控資料庫（竊取／竄改資料）"
                  ],
                  [
                    "釣魚 Phishing",
                    "偽裝可信來源（假網站／假信）騙取帳密、個資"
                  ],
                  [
                    "DoS／DDoS",
                    "大量流量灌爆目標使其無法服務；DDoS 用大量殭屍主機（botnet ＝ 被攻擊者偷偷控制的一堆電腦）一起灌"
                  ],
                  [
                    "中間人 MITM",
                    "攔在通訊雙方中間竊聽／竄改（如 ARP spoofing）"
                  ],
                  [
                    "社交工程",
                    "利用人性弱點騙取資訊（釣魚是其一）"
                  ],
                  [
                    "零時差 Zero-day",
                    "利用尚未修補的未知漏洞"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "六、EDR / MDR　【理解】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "EDR（端點偵測與回應）：監控端點（電腦、伺服器、手機等設備）上的活動，偵測威脅並回應（隔離、調查）。是裝在端點的工具／技術。",
                  "MDR（託管式偵測與回應）：把偵測與回應外包給專業資安服務商（由他們 24/7 監控處理）。是一種服務，適合資安人力不足的組織。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "一句話：EDR 是「工具」（在端點）、MDR 是「服務」（委外給專家）。"
              }
            ]
          },
          {
            "heading": "七、資安標準：NIST / ISO 27001　【理解】＋【硬背】",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "NIST 資安框架（CSF）：美國 NIST 出的資安框架。原本 5 大核心功能：Identify（識別）、Protect（保護）、Detect（偵測）、Respond（回應）、Recover（復原）（IPDRR）；2.0 版（2024）新增 Govern（治理），變成 6 個。",
                  "ISO 27001：國際標準組織的資訊安全管理系統（ISMS）標準，提供建立、維運資安制度的框架，可申請驗證認證。",
                  "對照：NIST CSF 是框架（功能導向）；ISO 27001 是國際 ISMS 標準（可拿認證）。"
                ]
              }
            ]
          },
          {
            "heading": "八、重點整理（背這張）",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "防火牆看 IP/port、NGFW 加應用＋IPS、WAF 護網站（擋 SQLi／XSS）。",
                  "IDS 偵測告警（被動）、IPS 偵測＋阻擋（主動）。",
                  "DMZ ＝ 放對外伺服器的隔離區；Proxy ＝ 代理中間人；VPN ＝ 加密通道（PPTP 已不安全）。",
                  "惡意程式：病毒要宿主、蠕蟲自我複製、木馬偽裝、勒索加密勒贖。",
                  "攻擊：XSS 注入腳本、SQLi 操控資料庫、釣魚騙帳密、DDoS 灌爆、MITM 攔中間。",
                  "EDR 工具（端點）、MDR 服務（委外）。",
                  "NIST CSF：IPDRR 五功能（2.0 加 Govern 成六）；ISO 27001 ＝ ISMS 國際標準。"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
] as const satisfies readonly ProfessionalSubjectTopic[];
