## ADDED Requirements

### Requirement: Networking v2 route uses filename-backed topics

The app SHALL expose an independent Networking v2 route at `/networking-v2`. The route SHALL render a professional subject topic page titled `網路概論(v2)`, SHALL use the `networkingV2` subject key, and SHALL use a progress namespace separate from `networking`.

#### Scenario: Open the v2 route directly

- **WHEN** the user opens `/networking-v2`
- **THEN** the app renders a subject topic page titled `網路概論(v2)`
- **AND** the page uses the `networkingV2` subject key for topic progress
- **AND** the page test id is `subject-view-networking-v2`

#### Scenario: Route-visible topic list follows source filename order

- **WHEN** the `networkingV2` route topics are resolved
- **THEN** the route-visible list contains exactly 12 topics from `_private/MD/網路概論v2/`
- **AND** every returned topic has visible learner-facing `lessonArticle` content
- **AND** the topic ids and titles appear in the filename chapter order shown below

##### Example: source order and cleaned display titles

| Source file | Expected topic id | Expected title |
| ----- | ----- | ----- |
| `_private/MD/網路概論v2/網路概論_1_OSI七層與TCPIP.md` | `networking-v2-osi-tcpip` | `OSI 七層 + TCP/IP ★` |
| `_private/MD/網路概論v2/網路概論_2_基礎概念.md` | `networking-v2-basics` | `基礎概念` |
| `_private/MD/網路概論v2/網路概論_2下_資安_加密與TLS.md` | `networking-v2-security-crypto-tls` | `資安：加密、雜湊、數位簽章、憑證與 TLS` |
| `_private/MD/網路概論v2/網路概論_3上_網路設備對應層級.md` | `networking-v2-devices-osi` | `網路設備對應層級（看得懂版）` |
| `_private/MD/網路概論v2/網路概論_3下_無線與上網接取設備.md` | `networking-v2-wireless-access-devices` | `無線與上網接取設備` |
| `_private/MD/網路概論v2/網路概論_4上_IP與子網路計算.md` | `networking-v2-ip-subnetting` | `IP 基礎 + 子網路計算 ★` |
| `_private/MD/網路概論v2/網路概論_5_傳輸層.md` | `networking-v2-transport-layer` | `傳輸層` |
| `_private/MD/網路概論v2/網路概論_6_應用層與Port對照.md` | `networking-v2-application-ports` | `應用層協定 + Port Number 對照表 ★` |
| `_private/MD/網路概論v2/網路概論_7上_實體層.md` | `networking-v2-physical-layer` | `實體層 + 標準速度表 ★` |
| `_private/MD/網路概論v2/網路概論_7下_資料鏈結層.md` | `networking-v2-data-link-layer` | `資料鏈結層` |
| `_private/MD/網路概論v2/網路概論_8上_資安觀念與加密.md` | `networking-v2-security-crypto` | `資安觀念與加密 ★` |
| `_private/MD/網路概論v2/網路概論_8下_防禦設備與攻擊.md` | `networking-v2-defense-attacks` | `防禦設備與攻擊類型 ★` |

### Requirement: Networking v2 route keeps source-authored structure

The Networking v2 route SHALL convert each source Markdown file into the existing `lessonArticle` content shape without rendering raw Markdown at runtime. The conversion SHALL preserve source-authored heading order, paragraphs, lists, tables, examples, comparison notes, and learning guidance in learner-facing content.

#### Scenario: Lesson articles preserve Markdown section structure

- **WHEN** a Networking v2 topic is loaded
- **THEN** the topic contains exactly one `lessonArticle` block
- **AND** the lessonArticle has non-empty sections derived from the source Markdown headings
- **AND** section headings and content follow the source Markdown order
- **AND** the topic does not expose raw Markdown-only display instructions as learner-facing text

#### Scenario: Networking v2 content remains lecture-only

- **WHEN** Networking v2 topics are loaded
- **THEN** the topics do not require multiple-choice question fields
- **AND** the topics do not require answer uniqueness metadata
- **AND** the topics do not require option distinguishability metadata
