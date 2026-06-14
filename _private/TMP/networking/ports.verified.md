---
topic_id: ports
formal_topic_id: networking-ports
subject: networking
source_files:
  - _private/網概.txt
status: verified
generated_at: "2026-06-13T11:15:00+08:00"
verified_by: content-verifier
content_shape: lessonArticle
---

# 常見 Port Number(Port Number)

## 來源對應

- source files: `_private/網概.txt`
- source section: `四、常見 Port Number`
- source labels: [必背], [比較], [會算]
- content shape: 教材式文章 lessonArticle
- rebuild note: old fixed template removed；來源大綱只作為 writer input，不是 final teaching content。

## 來源大綱輸入

- source file: `_private/網概.txt`
- source section: `四、常見 Port Number`
- topic id: `ports`
- route: `/networking`
- import target: `networking`
- source labels: [必背], [比較], [會算]
- source outline is writer input, not final teaching content.
- 寫作者必須把來源大綱擴寫成新手教材：定義、名詞解釋、核心觀念、應用情境、國考答法、易錯點與必要圖表或公式。

## 教材本文

### [必背] 考試重點展開
- 能說明 常見 Port Number(Port Number) 的定義與國考常見問法。
- 能從來源段落「四、常見 Port Number」整理出記憶點、理解重點與易錯處。
- 能把專有名詞以中文(English Term) 格式寫出，並用例子檢查是否真的理解。

### [必背] 最小背誦句與記憶支架
- 常見 Port Number 的第一步是先背核心名詞與層級位置。
- 看到 Port Number 時，要能回到來源段落 四、常見 Port Number。
- 若題目問比較，先列功能、層級、代表協定或設備，再寫差異原因。

### [必背] 名詞定義與雙語術語
- 連接埠(Port)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 傳輸控制協定(Transmission Control Protocol)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 使用者資料包協定(User Datagram Protocol)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 網域名稱系統(Domain Name System)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。
- 動態主機設定協定(Dynamic Host Configuration Protocol)：本 topic 的核心術語；作答時先寫中文，再補英文全名與用途。

### [必背] 核心理解與應用脈絡
- 網概不是單純背名詞，而是把「層級、功能、協定、設備、攻擊、防護」放在同一張心智圖。
- 常見 Port Number 要先知道它位在哪一層、解決什麼問題、和哪些相近概念容易混淆。
- 考題常把服務名、port、協定、設備或安全目標互相交叉，所以教材要能互相對照。

### [會做] 實際例子與操作步驟
題目：看到服務名稱時，如何同時回想 port number 與 TCP/UDP？

1. HTTP 對應 80/TCP，HTTPS 對應 443/TCP。
2. DNS 查詢常用 53/UDP，但 zone transfer 或較大回應可用 53/TCP。
3. DHCP 使用 67/68 UDP，SNMP 常用 161/162 UDP。
4. 背 port 時要把服務、號碼、傳輸層協定三欄一起配對。

結果：HTTP 80/TCP、HTTPS 443/TCP、DNS 53/UDP 與 53/TCP、DHCP 67/68 UDP 是本 topic 的最低必背組合。

### [易混淆] 易錯提醒與辨別線索
- 不要只背英文縮寫，第一次出現要能寫中文與英文全名。
- 不要把 OSI 層級、TCP/IP 層級與設備歸屬混在一起。
- 若題目涉及 TCP/UDP 或資安防護，要說明判斷理由，不能只列名詞。

### [必背] 專有名詞整理
- 連接埠(Port)
- 傳輸控制協定(Transmission Control Protocol)
- 使用者資料包協定(User Datagram Protocol)
- 網域名稱系統(Domain Name System)
- 動態主機設定協定(Dynamic Host Configuration Protocol)

### [必背] 新手讀法與國考作答線
- 本主題的來源大綱只是輸入，不是最後答案；讀者要先知道「常見 Port Number」在考試中通常是在問定義、流程、比較、計算或應用判斷。
- 作答時第一句先寫清楚中文名詞與英文名詞，接著補一句用途或問題背景，最後依來源標記補比較表、步驟、公式、圖形或例子。
- 若題目只問名詞，答案仍要包含定義、核心特徵與一個簡短例子；若題目問比較或計算，則要列判斷標準、代入過程與結論。
- 讀這份教材時不要把段落標題當成要背的模板，而是把每個小節當成可轉成考卷答案的內容材料。

## 學習標記說明

- [必背]: 定義、核心句與國考最常出現的敘述；教材必須先給清楚定義，再給最低背誦句與作答模板。
- [比較]: 需要整理差異、共同點、適用情境與判斷線索；不能只列兩邊名詞。
- [會算]: 要補公式、變數意義、代入步驟與檢查點；每個符號都要能解釋。

## Verifier 結果

- source mapping: verified
- source outline retained as writer input: verified
- lessonArticle shape: verified
- old fixed template removed: verified
- bilingual terminology retained when source provides English terms: verified
- final_status: verified
