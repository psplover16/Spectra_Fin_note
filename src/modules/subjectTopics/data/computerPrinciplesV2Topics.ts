import type {
  LessonArticleContentBlock,
  LessonArticleSection,
  ProfessionalSubjectTopic,
  ProfessionalTopicType,
  TechnicalTerm
} from '@/modules/subjectTopics/types/subjectTopic';

// Static lessonArticle data generated from _private/MD/計算機概論 source Markdown.
const supplementalPracticeSections: readonly LessonArticleSection[] = [
  {
    heading: '加強練習',
    blocks: [
      {
        kind: 'orderedList',
        items: [
          '指令組成:50% 需 1 週期、30% 需 2 週期、20% 需 4 週期,平均 CPI 為?',
          'USB 速度',
          'Write Through VS Write Back',
          'Write Back 為判斷區塊是否被修改過,通常搭配哪個位元?  同位元?',
          'EBCDIC 8位元 IBM字元編碼',
          '浮點數 IAAAC計算',
          'CRC，生成多項式 > 生成多項式位元數-1，在資料後方補0，做摸2除法，於數就是 CRC。元資料+CRC = 發送資料',
          '漢明碼，',
          '漢明距，是兩個碼字不同 bit 的數量',
          '1byte = 8bits',
          'Write Back 為判斷區塊是否被修改過,通常搭配哪個位元 (107)',
          'Gen A × B   總速率 = 每條 lane 速率 × lane 數'
        ]
      },
      {
        kind: 'paragraph',
        text: '一個 cache資料，有包含：\na.Valid bit: 裡面現在是不是「有效資料」，0代表垃圾，1位元\nb.Dirty bit: 預設為0，1代表 資料改過 改過，1位元\nc.Tag 表示 這條 line 現在放的是哪一個記憶體區塊，多位元\nd.然後真正的資料'
      },
      {
        kind: 'paragraph',
        text: '資管題目:\n1. AI、資安的影響\n2.'
      }
    ]
  }
];

const supplementalDataSections: readonly LessonArticleSection[] = [
  {
    "heading": "一、阿姆達爾定律（Amdahl's Law）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：改善系統的某一部分，整體能加速多少，會被「沒被改善的那部分」卡住。"
      },
      {
        "kind": "paragraph",
        "text": "用直覺理解：一件工作分 A、B 兩段，A 段能加速、B 段不能。就算 A 段加速到「瞬間完成」（時間 = 0），整件事還是得花 B 段的時間。所以整體再快也快不過「只剩 B 段」。"
      },
      {
        "kind": "paragraph",
        "text": "公式怎麼來的（推導一次就不用硬背）：把原本的總時間當成 1。其中可改善的部分占 f、不可改善的占 (1 − f)。改善後，可改善那段時間縮成 f ÷ s，不可改善那段不變："
      },
      {
        "kind": "paragraph",
        "text": "改善後時間 = (1 − f) + f ÷ s\n整體加速比 = 原時間 ÷ 改善後時間 = 1 ÷ ( (1 − f) + f ÷ s )"
      },
      {
        "kind": "bulletList",
        "items": [
          "f：可改善部分占原本時間的比例（注意是「時間占比」，不是程式碼行數）。",
          "s：那部分加速幾倍。",
          "當 s → ∞（加速到極限），f ÷ s 趨近 0，整體加速比的上限 = 1 ÷ (1 − f)。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "範例 1（有限加速）：某程式有 60% 的時間花在某段運算，把這段加速成 4 倍，其餘不變。整體加速比是多少？"
      },
      {
        "kind": "bulletList",
        "items": [
          "已知 f = 0.6、s = 4，代入公式：",
          "整體加速比 = 1 ÷ ( (1 − 0.6) + 0.6 ÷ 4 )",
          "= 1 ÷ ( 0.4 + 0.15 )",
          "= 1 ÷ 0.55 ≈ 1.82 倍",
          "觀察：那段明明加速了 4 倍，整體卻只快約 1.82 倍——因為剩下 40% 完全沒動，把整體拖住了。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "範例 2（加速到極限 → 求上限）：同一個程式（可改善 60%），若把那段加速到無限大，整體最多能快幾倍？"
      },
      {
        "kind": "bulletList",
        "items": [
          "s → ∞ 時，f ÷ s → 0，公式只剩下分母的 (1 − f)：",
          "上限 = 1 ÷ (1 − 0.6) = 1 ÷ 0.4 = 2.5 倍",
          "意思：那段就算瞬間做完，整體頂多快 2.5 倍。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "範例 3（占比決定潛力）：若改善比例提高到 95%（只剩 5% 不可改善），上限變多少？"
      },
      {
        "kind": "bulletList",
        "items": [
          "上限 = 1 ÷ (1 − 0.95) = 1 ÷ 0.05 = 20 倍",
          "跟範例 2 對比：可改善比例從 60% → 95%，上限從 2.5 倍直接跳到 20 倍。這就是為什麼要先優化「占比最大」的部分。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "啟示：想大幅提升效能，要去改「占比最大」的部分；占比小的再怎麼優化，整體進步都有限。"
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- 看到「處理器無限多 / 無限加速」就是在問上限 = 1 ÷ (1 − f)。\n- 答案要用整體公式算，不能只看局部加速倍數。\n- f 是「時間占比」；占比越大的部分，優化的價值越高。"
      }
    ]
  },
  {
    "heading": "二、CPU 排班演算法（CPU Scheduling）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：多個程式搶同一顆 CPU，排班器負責決定「誰先用、用多久」。"
      },
      {
        "kind": "paragraph",
        "text": "CPU 一次只能跑一個程序，要公平又有效率地安排順序。先建立幾個名詞："
      },
      {
        "kind": "bulletList",
        "items": [
          "搶占式 Preemptive：程序執行到一半可被打斷、換別人先做；",
          "非搶占式 Non-preemptive：一旦開始就做到完才換人。",
          "周轉時間 Turnaround＝ 完成時間 − 到達時間（從進到系統到全部做完，總共經過多久）。",
          "等待時間 Waiting＝ 周轉時間 − 執行時間（總共多久是在「乾等」、沒被 CPU 服務）。",
          "回應時間 Response＝ 從到達到「第一次」開始被執行的時間（互動式系統最在意這個）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "四種常見演算法："
      },
      {
        "kind": "orderedList",
        "markerStyle": "decimal",
        "items": [
          "FCFS 先到先服務（非搶占）\n規則：照到達順序執行。\n缺點：護送效應（convoy effect），長工作排前面會讓後面短工作全部乾等，平均等待時間被拉長。",
          "SJF 最短工作優先（非搶占）\n規則：先執行時間最短的工作。\n優點：平均等待時間最短（理論最佳）。\n限制：必須先知道或估計執行時間；長工作可能一直被插隊而餓死（starvation）。\n搶占版：SRTF（最短剩餘時間優先），新工作若比目前工作剩餘時間更短就搶占。",
          "Priority 優先權排班\n規則：依優先權高低決定執行順序。\n缺點：低優先權工作可能餓死。\n解法：老化 aging，等待越久就逐步提高優先權。",
          "RR 輪轉（搶占式）\n規則：每個程序輪流使用一小段時間量子（time quantum），用完就換下一個，沒做完的排回隊伍尾端。\n特性：公平、回應快，適合分時系統。\n注意：quantum 太大會退化成 FCFS；太小會讓 context switch 成本太高。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "範例：三個程序在時間 0 同時到達，執行時間如下。比較 FCFS 與 SJF。"
      },
      {
        "kind": "table",
        "headers": [
          "程序",
          "執行時間"
        ],
        "rows": [
          [
            "P1",
            "5"
          ],
          [
            "P2",
            "3"
          ],
          [
            "P3",
            "8"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "（三者都在時間 0 到達，所以「周轉時間 = 完成時間」；又因為從 0 一路等到自己開始那段都在乾等，所以「等待時間 = 開始被執行的時刻」。）"
      },
      {
        "kind": "paragraph",
        "text": "FCFS：照到達順序 P1 → P2 → P3"
      },
      {
        "kind": "paragraph",
        "text": "| P1 (0–5) | P2 (5–8) | P3 (8–16) |"
      },
      {
        "kind": "bulletList",
        "items": [
          "P1：完成 5　→ 周轉 5、等待 0",
          "P2：完成 8　→ 周轉 8、等待 5",
          "P3：完成 16 → 周轉 16、等待 8",
          "平均等待 = (0 + 5 + 8) ÷ 3 ≈ 4.33"
        ]
      },
      {
        "kind": "paragraph",
        "text": "SJF：先做最短的 P2 → P1 → P3"
      },
      {
        "kind": "paragraph",
        "text": "| P2 (0–3) | P1 (3–8) | P3 (8–16) |"
      },
      {
        "kind": "bulletList",
        "items": [
          "P2：完成 3　→ 周轉 3、等待 0",
          "P1：完成 8　→ 周轉 8、等待 3",
          "P3：完成 16 → 周轉 16、等待 8",
          "平均等待 = (0 + 3 + 8) ÷ 3 ≈ 3.67"
        ]
      },
      {
        "kind": "paragraph",
        "text": "結論：SJF 的平均等待（3.67）比 FCFS（4.33）短。把短工作往前排，後面在等的人少等一點，平均等待就降下來了——這就是「SJF 平均等待最短」的由來。"
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- SJF 平均等待時間最短（但需預知執行時間、不實際）；搶占版是 SRTF。\n- RR 是搶占式、靠時間量子、最公平、回應快。\n- 餓死（starvation）的解法是 老化（aging）。\n- FCFS 的缺點是 護送效應。"
      }
    ]
  },
  {
    "heading": "三、死結（Deadlock）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：兩個以上的程序互相卡住對方手上的資源，誰都拿不到、誰都動不了。"
      },
      {
        "kind": "paragraph",
        "text": "生活類比：兩台車在單線橋上對向開到中間，誰都不肯退，於是兩台都過不去——卡死了。程式版：A 抓著資源 1、等資源 2；B 抓著資源 2、等資源 1 → 互相等到天荒地老。"
      },
      {
        "kind": "paragraph",
        "text": "四個必要條件（Coffman，必須「同時」成立）——用「共用印表機」舉例："
      },
      {
        "kind": "orderedList",
        "items": [
          "互斥 Mutual Exclusion：資源一次只能一人用（印表機不能兩人同時印）。",
          "持有並等待 Hold and Wait：抓著手上的、同時還想再要別的（拿著印表機，又在等掃描器）。",
          "不可搶占 No Preemption：別人正在用的資源不能硬搶過來（不能把人家印到一半的印表機拔走）。",
          "循環等待 Circular Wait：等待關係繞成一個環（A 等 B 的、B 等 A 的）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "四種處理策略："
      },
      {
        "kind": "bulletList",
        "items": [
          "預防 Prevention：從制度上讓上面四條件至少一個永遠不成立（例如規定「資源要嘛一次全拿、要嘛都不拿」來破壞「持有並等待」）。較死板，可能降低資源使用率。",
          "避免 Avoidance：條件還是可能成立，但每次配置資源前先用演算法判斷「給了會不會進入危險狀態」，安全才給 → 銀行家演算法（Banker's）。較有彈性。",
          "偵測與恢復 Detection & Recovery：先讓它可能發生，事後定期檢查、找出來再解除。",
          "忽略（鴕鳥策略）：當作沒看到（一般個人電腦常這樣處理，因為死結很少見）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "別搞混：死結 vs 飢餓——死結是「一群人互相卡死、全都動不了」；飢餓是「某個人一直被插隊、輪不到，但系統其他人還在正常進行」。"
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- 四條件同時成立才會死結；破壞任一個即可預防。\n- 銀行家演算法是「避免」，不是「預防」——超愛考的陷阱。\n- 預防＝事前讓條件不成立；避免＝事中動態判斷安不安全。\n- 四條件名稱要背熟。"
      }
    ]
  },
  {
    "heading": "四、分頁與分段記憶體管理（Paging & Segmentation）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：兩種把「程式以為的位址」對應到「記憶體真正位址」的方法；差別在切割方式與會產生哪種碎裂。"
      },
      {
        "kind": "paragraph",
        "text": "先懂邏輯位址 vs 實體位址：程式裡用的位址是「邏輯位址（程式以為自己住在哪）」，記憶體裡真正擺放的位置是「實體位址」。中間需要一張對應表來換算，分頁與分段就是兩種換算法。"
      },
      {
        "kind": "paragraph",
        "text": "先搞懂兩種「碎裂（空間浪費）」："
      },
      {
        "kind": "bulletList",
        "items": [
          "內部碎裂 Internal：分到的空間「沒用完」剩下的浪費（你只需要 3KB，系統卻給你一整頁 4KB，那 1KB 就浪費了）。",
          "外部碎裂 External：空間被切得零零落落，全部加起來夠、但沒有一塊連續夠大（像停車場總空位很多，卻沒有兩格相連能停大車）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "分頁 Paging"
      },
      {
        "kind": "bulletList",
        "items": [
          "把邏輯記憶體切成固定大小的「頁（page）」，實體記憶體切成同大小的「頁框（frame）」。",
          "用分頁表（page table）把每一頁對應到某個頁框 → 各頁可散落各處，不需要連續的實體空間。",
          "因為大小固定，程式最後一頁常填不滿 → 有內部碎裂；但因為塞得進任何空頁框，沒有外部碎裂。",
          "對程式設計師透明（程式不知道、也不用管自己被切成幾頁）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "分段 Segmentation"
      },
      {
        "kind": "bulletList",
        "items": [
          "依程式邏輯切成大小不一的「段（segment）」，例如程式碼段、資料段、堆疊段。",
          "用分段表對應，每段記「起點 base + 長度 limit」（limit 還能順便做界限保護，存取超過長度就擋下）。",
          "因為各段大小不一塞進記憶體，久了會留下零碎空洞 → 有外部碎裂；但段內通常用滿 → 無內部碎裂。",
          "符合使用者的邏輯觀點，方便共享與保護（例如多個程式共用同一個程式碼段）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "快速對照："
      },
      {
        "kind": "table",
        "headers": [
          "比較",
          "分頁 Paging",
          "分段 Segmentation"
        ],
        "rows": [
          [
            "切割大小",
            "固定",
            "不一"
          ],
          [
            "碎裂",
            "內部碎裂",
            "外部碎裂"
          ],
          [
            "觀點",
            "對使用者透明",
            "符合邏輯觀點"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "（補充：TLB 是一塊專門快取分頁表的小記憶體，讓位址轉換不必每次都去查整張表，加速查詢。）"
      },
      {
        "kind": "paragraph",
        "text": "範例 A（位址切割）：某系統的邏輯位址共 16 bits，分頁大小為 1 KB（= 2¹⁰ bytes）。問頁號與位移各佔幾 bits？總共有幾頁？"
      },
      {
        "kind": "bulletList",
        "items": [
          "位移（offset）：要能指到頁內的每一個 byte，頁大小 1KB = 2¹⁰，所以需要 10 bits。",
          "頁號（page number）：剩下的位元 = 16 − 10 = 6 bits。",
          "總頁數 = 2⁶ = 64 頁。",
          "口訣：頁大小決定位移的位元數，剩下的全給頁號（邏輯位址 = 頁號 + 位移）。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "範例 B（邏輯 → 實體換算）：承上，某筆資料的邏輯位址落在「頁號 2、位移 100」。查分頁表得知頁號 2 對應到頁框 5。求實體位址。"
      },
      {
        "kind": "bulletList",
        "items": [
          "實體位址 = 頁框號 × 頁大小 + 位移 = 5 × 1024 + 100 = 5220。",
          "重點：位移不變，只把「頁號」透過分頁表換成「頁框號」。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- 分頁 → 內部碎裂；分段 → 外部碎裂（最愛出反向陷阱，務必記牢）。\n- 分頁：固定大小、對使用者透明、不需連續空間。\n- 分段：大小不一、符合邏輯、易於共享與保護、base+limit 可做保護。\n- 換算時位移不變，只換頁號 → 頁框號。"
      }
    ]
  },
  {
    "heading": "五、物件導向特性（OOP Characteristics）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：把「資料」和「處理資料的動作」綁成一個物件；四大特性是它的核心精神。"
      },
      {
        "kind": "paragraph",
        "text": "先分清兩個基礎：類別（Class）= 設計藍圖；物件（Object）= 照藍圖造出來的實體。\n就像「餅乾模子」是類別，用模子壓出來的「每一片餅乾」是物件——一個模子可壓出很多片。"
      },
      {
        "kind": "paragraph",
        "text": "四大特性（各配一個生活例子）："
      },
      {
        "kind": "bulletList",
        "items": [
          "封裝 Encapsulation：把屬性（資料）和方法（動作）包成一包，隱藏內部細節，外界只能透過介面操作。",
          "例：用提款機只要按按鈕領錢，不需要知道裡面怎麼運作；內部資料被保護起來。→ 即「資訊隱藏」。",
          "繼承 Inheritance：子類別自動承接父類別的屬性與方法，再加上自己的。",
          "例：「狗」繼承「動物」，自動就會「呼吸、吃」，再加上自己的「汪汪叫」。→ 程式碼重用，不用重寫。",
          "多型 Polymorphism：同一個訊息（方法名），不同物件有不同反應。",
          "例：對「狗」和「貓」都呼叫「叫()」，狗回「汪汪」、貓回「喵喵」。兩種形式：",
          "覆寫 Override：子類別改寫父類別的同名方法（如 Dog 改寫 Animal 的 叫()）→ 執行時期（動態）才決定跑哪個。",
          "多載 Overload：同一類別內有多個同名方法，但參數不同（如 add(整數,整數) 與 add(小數,小數)）→ 編譯時期（靜態）就決定。",
          "抽象 Abstraction：只保留共同、重要的特徵，隱藏不必要的細節。",
          "例：開車只需會用方向盤、油門、剎車（介面），不必懂引擎怎麼運作。常用抽象類別、介面實現。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- 四大特性名稱要記熟：封裝、繼承、多型、抽象。\n- 封裝 = 資訊隱藏；繼承 = 重用。\n- 覆寫（不同類別、改寫、執行時）vs 多載（同類別、參數不同、編譯時）——最常考的辨析。\n- 類別是藍圖、物件是實體，別說反。"
      }
    ]
  },
  {
    "heading": "六、基礎資料結構（Basic Data Structures）",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "一句話核心：組織資料的不同方式；每種結構各有擅長與不擅長的操作。"
      },
      {
        "kind": "paragraph",
        "text": "先看懂時間複雜度 Big-O（描述「資料變多時，速度怎麼變」）："
      },
      {
        "kind": "bulletList",
        "items": [
          "O(1) 常數時間：不管資料 10 筆還是 100 萬筆都一樣快（像用書籤直接翻到某頁）。",
          "O(n) 線性時間：資料變兩倍、時間約變兩倍（像從第一頁一路翻到找到為止）。",
          "O(log n) 對數時間：每一步把範圍砍一半，資料變兩倍也只多花一步（像查字典對半翻），成長很慢、很快。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "五種基礎結構："
      },
      {
        "kind": "bulletList",
        "items": [
          "陣列 Array：連續記憶體、大小固定。",
          "靠索引「直接跳到」第 n 個 → 隨機存取 O(1)（快）。為什麼快：位址 = 起始位址 + 索引 × 每格大小，一個算式直接算出位置。",
          "但中間插入／刪除要把後面元素整批搬移 → O(n)（慢）。",
          "鏈結串列 Linked List：每個節點存「資料 + 指向下一個的指標」，非連續、可動態增減。",
          "插入／刪除（已知位置）只要改指標 → O(1)（快）。",
          "但要找第 n 個只能從頭沿著指標一個一個走 → O(n)（慢）。",
          "堆疊 Stack：後進先出 LIFO（像疊盤子，最後放上去的最先被拿走）。操作：push（放）／pop（拿）。",
          "應用：函式呼叫的返回、瀏覽器「上一頁」、運算式求值、中序轉後序、回溯。",
          "佇列 Queue：先進先出 FIFO（像排隊，先到的先服務）。操作：enqueue（入列）／dequeue（出列）。",
          "應用：工作排程、印表機列印佇列、緩衝區（buffer）。",
          "樹 Tree：階層式結構（一對多，有根、父子、葉節點）。",
          "二元搜尋樹（BST）：左子樹都比自己小、右子樹都比自己大，所以搜尋時每比一次就能砍掉一半 → 平均搜尋 O(log n)。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "兩組對照好記："
      },
      {
        "kind": "bulletList",
        "items": [
          "Array vs Linked List：陣列「存取快、增刪慢」；串列「增刪快、存取慢」。",
          "Stack vs Queue：堆疊 LIFO、佇列 FIFO。"
        ]
      },
      {
        "kind": "paragraph",
        "text": "⚠️ 國考考點\n- Array 隨機存取 O(1)；Linked List 走訪 O(n)。\n- Stack = LIFO（函式呼叫、上一頁、中序轉後序）；Queue = FIFO（排程、緩衝）。\n- BST 平均搜尋 O(log n)（因為左小右大、每次砍一半）。"
      }
    ]
  }
];

const supplementalDataSourceFile = '_private/計概補充/計算機概論_重點講義_01.md';
const supplementalCpuSchedulingSourceFile = '_private/計概補充/CPU排班演算法_考試速記版.md';

const supplementalCpuSchedulingQuestions = [
  '下列哪種排班可得到最小的平均等待時間?\n(A) FCFS　(B) SJF　(C) RR　(D) Priority',
  'Round Robin 中,時間量子設定非常大時,行為趨近於?\n(A) SJF　(B) SRTF　(C) FCFS　(D) MLFQ',
  '「護航效應 (Convoy Effect)」最容易發生在?\n(A) FCFS　(B) SJF　(C) RR　(D) Priority',
  '解決優先權排程的「飢餓 (Starvation)」,通常採用?\n(A) 上下文切換　(B) 老化 (Aging)　(C) 時間量子　(D) 分頁',
  '下列關於可搶占 (Preemptive) 的敘述,何者正確?\n(A) FCFS 是可搶占　(B) SJF 與 SRTF 完全相同　(C) RR 是可搶占　(D) 可搶占一定較好',
  '三程序同時到達,Burst 為 P1=6、P2=2、P3=4,採 SJF,平均等待時間?\n(A) 2　(B) 8/3　(C) 4　(D) 10/3',
  'SRTF 可視為下列何者的可搶占版本?\n(A) FCFS　(B) SJF　(C) RR　(D) Priority',
  '最適合「分時 / 互動系統」的排班是?\n(A) FCFS　(B) SJF　(C) SRTF　(D) RR',
  'Round Robin 的時間量子設得太小,最主要的問題是?\n(A) 產生飢餓　(B) 上下文切換過多　(C) 退化成 FCFS　(D) 無法計算',
  'SJF 可看成下列哪種排班的特例?\n(A) FCFS　(B) RR　(C) Priority　(D) MLQ',
  '下列哪種排班「不會」造成飢餓?\n(A) SJF　(B) SRTF　(C) Priority　(D) RR',
  '三程序同時到達,Burst 為 P1=3、P2=5、P3=2,採 FCFS(順序 P1→P2→P3),平均迴轉時間?\n(A) 5　(B) 6　(C) 7　(D) 8',
  '迴轉時間 (Turnaround Time) 的正確算式為?\n(A) 完成時間 − 到達時間\n(B) 迴轉時間 − 執行時間\n(C) 第一次上 CPU − 到達時間\n(D) 完成時間 − 執行時間',
  '等待時間 (Waiting Time) 的正確算式為?\n(A) 完成 − 到達　(B) 迴轉 − 執行時間　(C) 完成 − 執行時間　(D) 第一次上 CPU − 到達',
  '三程序同時到達,Burst 為 P1=4、P2=3、P3=1,採 RR(時間量子=2,佇列順序 P1、P2、P3),平均等待時間?\n(A) 3　(B) 4　(C) 5　(D) 12',
  '關於 MLQ 與 MLFQ 的差異,何者正確?\n(A) MLQ 程序可在佇列間移動\n(B) MLFQ 程序可在佇列間移動\n(C) 兩者皆不可搶占\n(D) MLFQ 一定比 MLQ 簡單',
  '在「非先佔式 (Non-preemptive)」排班下,只會在哪些時機做排班決策?\n(A) 執行中→等待中、程序結束\n(B) 等待中→就緒、執行中→就緒\n(C) 任何時刻皆可\n(D) 只有程序剛到達時',
  '我們討論的 FCFS、SJF、RR 等演算法,屬於作業系統中的哪一層排班?\n(A) 長程排班　(B) 中程排班　(C) 短程排班　(D) 磁碟排班',
  '下列哪個排班準則 (criteria) 是「數值越大越好」?\n(A) 等待時間　(B) 迴轉時間　(C) 回應時間　(D) CPU 使用率',
  '關於回應時間 (Response Time) 與等待時間 (Waiting Time),何者正確?\n(A) 兩者永遠相等\n(B) 程序一口氣做完(不被打斷)時,兩者相等\n(C) 回應時間一定大於等待時間\n(D) RR 不影響兩者關係'
] as const;

const supplementalCpuSchedulingAnswerRows = [
  ['1', 'B', 'SJF 平均等待時間理論最小。'],
  ['2', 'C', '量子大到每程序一次做完,即先到先做的 FCFS。'],
  ['3', 'A', '長程序卡前面拖住後面短程序,FCFS 典型問題。'],
  ['4', 'B', '等越久優先權越高,確保最終被排到。'],
  ['5', 'C', 'RR 靠時間量子強制輪替=可搶占;FCFS 不可搶占;SJF 不等於 SRTF。'],
  ['6', 'B', 'SJF 序 P2(0-2)→P3(2-6)→P1(6-12);等待 0、2、6,平均 8/3。'],
  ['7', 'B', 'SRTF=可搶占版 SJF,比剩餘時間。'],
  ['8', 'D', 'RR 回應快、公平,適合互動/分時。'],
  ['9', 'B', '量子太小會一直換程序,上下文切換成本過高。'],
  ['10', 'C', 'Burst 越短=優先權越高,即 Priority 的特例。'],
  ['11', 'D', 'RR 輪流服務;SJF/SRTF/Priority 都可能飢餓。'],
  ['12', 'C', 'FCFS:P1(0-3)→P2(3-8)→P3(8-10);迴轉 3、8、10,平均 7。'],
  ['13', 'A', '迴轉=完成−到達。'],
  ['14', 'B', '等待=迴轉−執行時間(Burst)。'],
  ['15', 'B', 'RR(q=2)完成 P1=7、P2=8、P3=5;等待 3、5、4,平均 4。'],
  ['16', 'B', 'MLFQ 可在層間移動(回饋);MLQ 固定不可換層。'],
  ['17', 'A', '非先佔只在「執行中→等待中」與「程序結束」做決策。'],
  ['18', 'C', 'CPU 排班=短程排班。'],
  ['19', 'D', 'CPU 使用率、產能越大越好;等待/迴轉/回應越小越好。'],
  ['20', 'B', '不被打斷時只乾等一次,第一次被服務=唯一一次,故兩者相等。']
] as const;

const supplementalCpuSchedulingSections: readonly LessonArticleSection[] = [
  {
    heading: 'CPU 排班演算法 — 考試速記版',
    blocks: [
      {
        kind: 'paragraph',
        text: '考前衝刺用。先掃比較表,再背名詞、高頻考點與 20 題選擇。'
      },
      {
        kind: 'table',
        headers: ['演算法', '搶占性', '挑選依據', '會飢餓?', '一句話記重點'],
        rows: [
          ['FCFS', '不可搶占', '到達順序', '否', '護航效應'],
          ['SJF', '不可搶占', '最短 Burst', '會', '平均等待最小(最佳)'],
          ['SRTF', '可搶占', '最短剩餘時間', '會', 'SJF 的搶占版'],
          ['Priority', '皆可', '優先權', '會', '老化 (Aging) 解飢餓'],
          ['RR', '可搶占', '時間量子輪流', '否', '量子設太大就變 FCFS'],
          ['MLQ', '可搶占', '分層、固定', '會', '程序不能換層'],
          ['MLFQ', '可搶占', '分層、可移動', '否', '可換層+內建老化']
        ]
      },
      {
        kind: 'paragraph',
        text: '各演算法完整英文名稱:'
      },
      {
        kind: 'bulletList',
        items: [
          'FCFS（先到先服務）— First-Come, First-Served',
          'SJF（最短工作優先）— Shortest Job First',
          'SRTF（最短剩餘時間優先）— Shortest Remaining Time First',
          'Priority（優先權排班）— Priority Scheduling',
          'RR（輪轉排班）— Round Robin',
          'MLQ（多層佇列）— Multilevel Queue',
          'MLFQ（多層回饋佇列）— Multilevel Feedback Queue'
        ]
      }
    ]
  },
  {
    heading: '三大時間名詞',
    blocks: [
      {
        kind: 'paragraph',
        text: '先備名詞:到達時間 (Arrival Time) = 程序進就緒佇列的時刻;執行時間 / CPU 分發時間 (Burst Time) = 程序需佔用 CPU 的長度。'
      },
      {
        kind: 'bulletList',
        items: [
          '等待時間 (Waiting Time):程序在就緒佇列裡乾等的總時間。公式:等待時間 = 迴轉時間 − 執行時間 (Burst)。',
          '迴轉時間 (Turnaround Time):從到達到完成的總時間。公式:迴轉時間 = 完成時間 − 到達時間。',
          '回應時間 (Response Time):從到達到第一次被 CPU 服務的時間。公式:回應時間 = 第一次上 CPU 的時間 − 到達時間。',
          '等待 vs 回應:回應只算到第一次被服務前;等待是全部乾等的加總。',
          '越大越好:CPU 使用率、產能 (Throughput)。越小越好:等待、迴轉、回應。'
        ]
      }
    ]
  },
  {
    heading: '高頻考點速記',
    blocks: [
      {
        kind: 'bulletList',
        items: [
          'SJF → 平均等待時間最小(理論最佳)。',
          'RR 時間量子設很大 → 退化成 FCFS。',
          'RR 時間量子設很小 → 上下文切換過多,效率差。',
          '護航效應 (Convoy Effect) → 出現在 FCFS。',
          '會飢餓:SJF、SRTF、Priority;不會飢餓:FCFS、RR。',
          '飢餓的解法 → 老化 (Aging)。',
          'SJF = Priority 的特例(Burst 越短=優先權越高)。',
          'SRTF = 可搶占版 SJF,比的是剩餘時間。',
          '互動 / 分時系統最適合 → RR。',
          'CPU 排班屬於短程排班 (Short-term),角色叫 CPU 排班器。',
          '非先佔只在兩種時機排班:執行中→等待中、程序結束。',
          'MLQ 不能換層;MLFQ 可換層且避免飢餓。',
          '計算題四步:畫甘特圖 → 讀完成時間 → 迴轉=完成−到達 → 等待=迴轉−Burst。'
        ]
      }
    ]
  },
  {
    heading: '小試身手',
    blocks: [
      {
        kind: 'orderedList',
        markerStyle: 'decimal',
        items: supplementalCpuSchedulingQuestions
      }
    ]
  },
  {
    heading: '答案與解析',
    blocks: [
      {
        kind: 'table',
        headers: ['題', '答', '解析'],
        rows: supplementalCpuSchedulingAnswerRows
      }
    ]
  }
];

type SplitSupplementalTopicConfig = {
  id: string;
  title: string;
  summary: string;
  sourceFile: string;
  sourceSummary: string;
  lead: readonly string[];
  sections: readonly LessonArticleSection[];
  topicType: ProfessionalTopicType;
  terms: readonly TechnicalTerm[];
};

const toOrderedSupplementalContentBlock = (block: LessonArticleContentBlock): LessonArticleContentBlock => {
  if (block.kind === 'bulletList') {
    return {
      kind: 'orderedList',
      markerStyle: 'decimal',
      items: block.items
    };
  }

  if (block.kind === 'indentedGroup') {
    return {
      ...block,
      blocks: block.blocks.map(toOrderedSupplementalContentBlock)
    };
  }

  if (block.kind === 'subsection') {
    return {
      ...block,
      blocks: block.blocks.map(toOrderedSupplementalContentBlock)
    };
  }

  return block;
};

const toOrderedSupplementalSections = (sections: readonly LessonArticleSection[]): readonly LessonArticleSection[] =>
  sections.map((section) => ({
    ...section,
    blocks: section.blocks.map(toOrderedSupplementalContentBlock)
  }));

const createSplitSupplementalTopic = ({
  id,
  title,
  summary,
  sourceFile,
  sourceSummary,
  lead,
  sections,
  topicType,
  terms
}: SplitSupplementalTopicConfig): ProfessionalSubjectTopic => ({
  id,
  subjectKey: 'computerPrinciplesV2',
  title,
  summary,
  sourceBatch: 'computer-principles-v2-route',
  sourceFiles: [sourceFile],
  sourceSummary,
  examOutline: [],
  memoryPoints: [],
  understandingNotes: [],
  difficulty: 'core',
  topicType,
  terms,
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: [sourceFile],
      sourceSection: sourceSummary,
      lead,
      sections: toOrderedSupplementalSections(sections)
    }
  ]
});

export const computerPrinciplesV2Topics: readonly ProfessionalSubjectTopic[] = [
  {
    "id": "cpv2-supplemental-practice",
    "subjectKey": "computerPrinciplesV2",
    "title": "加強練習",
    "summary": "整理跨章加強練習提示、Cache 欄位與資管延伸題目。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/discuss.txt"
    ],
    "sourceSummary": "計概(v2) / 加強練習",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "有效位元",
        "en": "Valid Bit"
      },
      {
        "zh": "髒位元",
        "en": "Dirty Bit"
      },
      {
        "zh": "標籤",
        "en": "Tag"
      },
      {
        "zh": "每指令週期數",
        "en": "Cycles Per Instruction"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/discuss.txt"
        ],
        "sourceSection": "計概(v2) / 加強練習",
        "lead": [
          "跨章加強練習提示與 Cache 欄位速記。"
        ],
        "sections": supplementalPracticeSections
      }
    ]
  },
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-amdahl-law',
    title: '阿姆達爾定律',
    summary: '整理阿姆達爾定律、整體加速比公式與上限判斷。',
    sourceFile: supplementalDataSourceFile,
    sourceSummary: '計概(v2) / 阿姆達爾定律',
    lead: ['計算機概論補充講義（一）：阿姆達爾定律。'],
    sections: supplementalDataSections.slice(0, 1),
    topicType: 'concept',
    terms: [
      {
        zh: '阿姆達爾定律',
        en: "Amdahl's Law"
      },
      {
        zh: '整體加速比',
        en: 'Overall Speedup'
      }
    ]
  }),
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-cpu-scheduling',
    title: 'CPU 排班演算法',
    summary: '整理 CPU 排班演算法比較、時間名詞、高頻考點與 20 題練習。',
    sourceFile: supplementalCpuSchedulingSourceFile,
    sourceSummary: '計概(v2) / CPU 排班演算法',
    lead: ['CPU 排班演算法考試速記版：比較表、名詞、高頻考點與 20 題選擇。'],
    sections: supplementalCpuSchedulingSections,
    topicType: 'algorithm',
    terms: [
      {
        zh: '先到先服務',
        en: 'First-Come, First-Served'
      },
      {
        zh: '最短工作優先',
        en: 'Shortest Job First'
      },
      {
        zh: '輪轉排班',
        en: 'Round Robin'
      },
      {
        zh: '多層回饋佇列',
        en: 'Multilevel Feedback Queue'
      }
    ]
  }),
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-deadlock',
    title: '死結',
    summary: '整理死結四個必要條件、處理策略與常見混淆。',
    sourceFile: supplementalDataSourceFile,
    sourceSummary: '計概(v2) / 死結',
    lead: ['計算機概論補充講義（一）：死結。'],
    sections: supplementalDataSections.slice(2, 3),
    topicType: 'concept',
    terms: [
      {
        zh: '死結',
        en: 'Deadlock'
      },
      {
        zh: '循環等待',
        en: 'Circular Wait'
      },
      {
        zh: '銀行家演算法',
        en: "Banker's Algorithm"
      }
    ]
  }),
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-paging-segmentation',
    title: '分頁與分段記憶體管理',
    summary: '整理 Paging、Segmentation、位址轉換與碎裂差異。',
    sourceFile: supplementalDataSourceFile,
    sourceSummary: '計概(v2) / 分頁與分段記憶體管理',
    lead: ['計算機概論補充講義（一）：分頁與分段記憶體管理。'],
    sections: supplementalDataSections.slice(3, 4),
    topicType: 'concept',
    terms: [
      {
        zh: '分頁',
        en: 'Paging'
      },
      {
        zh: '分段',
        en: 'Segmentation'
      },
      {
        zh: '內部碎裂',
        en: 'Internal Fragmentation'
      },
      {
        zh: '外部碎裂',
        en: 'External Fragmentation'
      }
    ]
  }),
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-oop-characteristics',
    title: '物件導向特性',
    summary: '整理物件導向四大特性、類別與物件、覆寫與多載辨析。',
    sourceFile: supplementalDataSourceFile,
    sourceSummary: '計概(v2) / 物件導向特性',
    lead: ['計算機概論補充講義（一）：物件導向特性。'],
    sections: supplementalDataSections.slice(4, 5),
    topicType: 'concept',
    terms: [
      {
        zh: '封裝',
        en: 'Encapsulation'
      },
      {
        zh: '繼承',
        en: 'Inheritance'
      },
      {
        zh: '多型',
        en: 'Polymorphism'
      },
      {
        zh: '抽象',
        en: 'Abstraction'
      }
    ]
  }),
  createSplitSupplementalTopic({
    id: 'cpv2-supplemental-basic-data-structures',
    title: '基礎資料結構',
    summary: '整理 Array、Linked List、Stack、Queue、Tree 與 Big-O 基礎。',
    sourceFile: supplementalDataSourceFile,
    sourceSummary: '計概(v2) / 基礎資料結構',
    lead: ['計算機概論補充講義（一）：基礎資料結構。'],
    sections: supplementalDataSections.slice(5, 6),
    topicType: 'dataStructure',
    terms: [
      {
        zh: '陣列',
        en: 'Array'
      },
      {
        zh: '鏈結串列',
        en: 'Linked List'
      },
      {
        zh: '堆疊',
        en: 'Stack'
      },
      {
        zh: '佇列',
        en: 'Queue'
      },
      {
        zh: '樹',
        en: 'Tree'
      }
    ]
  }),
  {
    "id": "cpv2-architecture-computation-theory",
    "subjectKey": "computerPrinciplesV2",
    "title": "架構與計算理論",
    "summary": "整理馮紐曼架構、圖靈機與圖靈測試。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/01_架構與計算理論.md"
    ],
    "sourceSummary": "基本計概(v2) / 架構與計算理論",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "馮紐曼架構",
        "en": "Von Neumann Architecture"
      },
      {
        "zh": "圖靈機",
        "en": "Turing Machine"
      },
      {
        "zh": "圖靈測試",
        "en": "Turing Test"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/01_架構與計算理論.md"
        ],
        "sourceSection": "基本計概(v2) / 架構與計算理論",
        "lead": [
          "馮紐曼架構、圖靈機與圖靈測試。"
        ],
        "sections": [
          {
            "heading": "1. 馮紐曼架構 / 定義",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "馮紐曼架構是一種電腦設計方式。核心：程式和資料都放在同一個記憶體中，通常也共用同一組匯流排，CPU 依照順序一個一個讀取指令並執行。"
              },
              {
                "kind": "bulletList",
                "items": [
                  "計算機系統基本組成：輸入單元、輸出單元、運算器（ALU）、控制器（CU）、記憶體。",
                  "匯流排：電腦內部傳輸資料的通道（可想成馬路）。CPU、記憶體、輸入輸出設備之間靠匯流排傳送資料。"
                ]
              }
            ]
          },
          {
            "heading": "1. 馮紐曼架構 / 特色",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "程式內儲概念（Stored-Program Concept）：程式與資料皆存放於記憶體中，CPU 可從記憶體依序讀取指令並執行。",
                  "循序執行：CPU 依「取指令 → 解碼 → 執行」的步驟循序處理記憶體中的指令；除非遇到跳躍指令或中斷事件，才會改變原本的執行順序。"
                ]
              }
            ]
          },
          {
            "heading": "1. 馮紐曼架構 / 與哈佛架構的差異",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "",
                  "馮紐曼架構",
                  "哈佛架構"
                ],
                "rows": [
                  [
                    "記憶體",
                    "程式與資料共用記憶體與匯流排",
                    "程式記憶體與資料記憶體分離"
                  ],
                  [
                    "取指令／取資料",
                    "可能互相競爭傳輸通道 → 瓶頸",
                    "可同時取指令與取資料"
                  ],
                  [
                    "設計",
                    "簡單",
                    "較複雜"
                  ],
                  [
                    "效能",
                    "較易受瓶頸限制",
                    "較佳"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "1. 馮紐曼架構 / 馮紐曼瓶頸（Von Neumann Bottleneck）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "定義：CPU 與記憶體之間的資料傳輸速度有限，當 CPU 需頻繁讀取指令與資料時，會因等待記憶體傳輸而降低整體效能。"
              },
              {
                "kind": "paragraph",
                "text": "改善方法（共同目標：減少 CPU 等待記憶體的時間、提高資料供應速度）："
              },
              {
                "kind": "orderedList",
                "items": [
                  "快取 Cache：速度快、容量小的記憶體，放在 CPU 附近或內部，存放最近常用或可能再用的資料。",
                  "預取（Prefetch）：預先猜測 CPU 接下來可能需要的指令／資料，先拿到較快的位置。",
                  "增加匯流排寬度：提高一次可傳送多少位元資料。",
                  "記憶體頻寬：提升單位時間內記憶體可傳輸的資料量。",
                  "管線化（Pipeline）：把一個工作切成多階段，讓不同指令重疊執行。",
                  "平行處理：同時處理多個工作。",
                  "記憶體階層：把不同速度、容量、成本的記憶體安排成層級（暫存器 → 快取 → 主記憶體 RAM → SSD／硬碟）。"
                ]
              }
            ]
          },
          {
            "heading": "2. 圖靈機與圖靈測試 / 一、圖靈機",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "圖靈機是什麼\n圖靈機是一種抽象的計算模型，不是實體電腦。用來描述「計算」最核心的過程，並研究哪些問題可以被明確的計算程序解決。它不討論硬體細節（CPU、記憶體、OS），只保留計算最基本的元素："
              },
              {
                "kind": "orderedList",
                "items": [
                  "資料如何被儲存。",
                  "資料如何被讀取。",
                  "每一步如何根據規則改變資料。",
                  "什麼情況下計算會結束。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "因此圖靈機是一種理論上的簡化模型，用來回答：電腦到底能不能解決某個問題？"
              },
              {
                "kind": "paragraph",
                "text": "圖靈機的主要組成（三部分）"
              },
              {
                "kind": "orderedList",
                "items": [
                  "無限長紙帶：儲存輸入、輸出與計算過程中的中間結果。",
                  "讀寫頭：讀取目前格子的符號，也可寫入符號，並向左或向右移動。",
                  "有限控制器：根據目前狀態與讀到的符號，決定下一步要做什麼。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "圖靈機如何運作（每一步）"
              },
              {
                "kind": "orderedList",
                "items": [
                  "讀取目前格子的符號。",
                  "根據目前狀態與讀到的符號查詢規則。",
                  "在目前格子寫入新符號，或保留原符號。",
                  "讀寫頭向左或向右移動。",
                  "進入下一個狀態。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "→ 不斷重複「讀取、判斷、寫入、移動、換狀態」，直到符合停止條件。"
              },
              {
                "kind": "paragraph",
                "text": "可計算是什麼\n指某問題可被一套明確的計算程序解決。以圖靈機角度：若存在一套規則，能讓圖靈機在有限步驟內完成計算並得到答案，這問題通常就可稱為可計算。重點："
              },
              {
                "kind": "orderedList",
                "items": [
                  "問題：具明確輸入與輸出的任務。",
                  "明確程序：可一步步執行的規則。",
                  "有限步驟：計算過程會在某個時間點結束，不會永遠執行。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "→ 可計算關心的不是「算得快不快」，而是理論上是否存在明確方法、能在有限步驟內算出答案。"
              }
            ]
          },
          {
            "heading": "2. 圖靈機與圖靈測試 / 二、圖靈測試",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "圖靈測試是用來判斷機器是否展現出類似人類智慧的測試。"
              },
              {
                "kind": "paragraph",
                "text": "基本想法：若一位審問者只透過文字對話與兩個對象互動（一個是人、一個是機器），而審問者無法可靠分辨哪一個是機器，就可認為該機器通過圖靈測試。"
              },
              {
                "kind": "paragraph",
                "text": "→ 它重視機器在對話中的外在表現，而非內部是否真的像人類思考。比較像檢驗「機器能不能表現得像人類」，而不是證明「機器是否真正具有意識」。"
              }
            ]
          },
          {
            "heading": "2. 圖靈機與圖靈測試 / 三、圖靈機 vs 圖靈測試",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "項目",
                  "圖靈機",
                  "圖靈測試"
                ],
                "rows": [
                  [
                    "核心問題",
                    "什麼問題可以被計算？",
                    "機器能否表現得像人類？"
                  ],
                  [
                    "關注重點",
                    "計算程序與可計算性",
                    "對話表現與智慧判斷"
                  ],
                  [
                    "性質",
                    "理論計算模型",
                    "人工智慧測試方法"
                  ],
                  [
                    "常見用途",
                    "研究演算法、計算能力與計算極限",
                    "討論機器智慧與人機互動"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "總結：圖靈機關心「計算是否可能」，圖靈測試關心「機器是否能展現類似人類的智慧表現」。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-machine-instruction-cycle",
    "subjectKey": "computerPrinciplesV2",
    "title": "機器指令與指令週期",
    "summary": "整理Opcode/Operand、Fetch-Decode-Execute、PC/IR。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/02_機器指令與指令週期.md"
    ],
    "sourceSummary": "基本計概(v2) / 機器指令與指令週期",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "機器指令",
        "en": "Machine Instruction"
      },
      {
        "zh": "操作碼",
        "en": "Opcode"
      },
      {
        "zh": "運算元",
        "en": "Operand"
      },
      {
        "zh": "程式計數器",
        "en": "Program Counter, PC"
      },
      {
        "zh": "指令暫存器",
        "en": "Instruction Register, IR"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/02_機器指令與指令週期.md"
        ],
        "sourceSection": "基本計概(v2) / 機器指令與指令週期",
        "lead": [
          "指令與 CPU 運作。"
        ],
        "sections": [
          {
            "heading": "3. 機器指令與指令週期",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "機器指令是「工作單」，指令週期是「處理工作單的步驟」。"
              }
            ]
          },
          {
            "heading": "3. 機器指令與指令週期 / 考前小抄",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "機器指令：CPU 直接看得懂的二進位命令。",
                  "Opcode：做什麼。",
                  "Operand：對誰做，或表示資料／位置資訊。",
                  "位址欄位：指令中用來指出資料位置的欄位。",
                  "Effective Address：真正要存取資料的位址。",
                  "PC：下一個指令位址。",
                  "IR：目前取出的指令。",
                  "Fetch：取指令。",
                  "Operand Fetch：取資料。",
                  "Execute：真的做動作。"
                ]
              }
            ]
          },
          {
            "heading": "3. 機器指令與指令週期 / 機器指令範例",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "ADD R1, R2"
              },
              {
                "kind": "table",
                "headers": [
                  "部分",
                  "意義"
                ],
                "rows": [
                  [
                    "ADD",
                    "Opcode，表示加法"
                  ],
                  [
                    "R1、R2",
                    "Operand，要被操作的暫存器"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "LOAD R1, 1000"
              },
              {
                "kind": "table",
                "headers": [
                  "部分",
                  "意義"
                ],
                "rows": [
                  [
                    "LOAD",
                    "Opcode，表示載入"
                  ],
                  [
                    "R1",
                    "Operand，目的暫存器"
                  ],
                  [
                    "1000",
                    "位址欄位／位址資訊，資料位置可能和 1000 有關"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "3. 機器指令與指令週期 / 指令週期流程",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "機器指令透過指令週期執行所希望的動作："
              },
              {
                "kind": "orderedList",
                "items": [
                  "Fetch 取指令：先把工作單拿來。",
                  "Decode 解碼：看懂工作單要做什麼。",
                  "Operand Fetch / Address Calculation 取運算元或算位址：準備要用的資料，或算出資料真正在哪。",
                  "Execute 執行：真的做加法、比較、跳躍、I/O 等動作。",
                  "Write Back / Store 寫回：把結果放回暫存器或記憶體。"
                ]
              },
              {
                "kind": "table",
                "headers": [
                  "階段",
                  "英文",
                  "核心問題",
                  "常考關鍵字"
                ],
                "rows": [
                  [
                    "1. 取指令",
                    "Fetch",
                    "取得接下來要執行的那條機器指令所在位置",
                    "PC、Memory、IR"
                  ],
                  [
                    "2. 解碼",
                    "Decode",
                    "這條指令要做什麼？",
                    "Opcode、Control Unit、Addressing Mode"
                  ],
                  [
                    "3. 取運算元／算位址",
                    "Operand Fetch / Address Calculation",
                    "資料在哪裡？要拿什麼資料？",
                    "Operand、Effective Address"
                  ],
                  [
                    "4. 執行",
                    "Execute",
                    "實際做什麼動作？",
                    "ALU、Branch、I/O"
                  ],
                  [
                    "5. 寫回",
                    "Write Back / Store",
                    "結果放去哪裡？",
                    "Register、Memory、Interrupt"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "關鍵字："
              },
              {
                "kind": "bulletList",
                "items": [
                  "I/O：Input／Output，輸入與輸出（讀檔、寫檔、鍵盤、螢幕）。",
                  "ALU：算術邏輯單元，負責計算與邏輯判斷（加減乘除、AND、OR、比較）。",
                  "Branch：分支，改變程式接下來執行哪一條指令（if 判斷、跳到另一位址）。"
                ]
              }
            ]
          },
          {
            "heading": "3. 機器指令與指令週期 / 易混淆比較",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "Fetch vs Operand Fetch"
              },
              {
                "kind": "table",
                "headers": [
                  "比較點",
                  "Fetch",
                  "Operand Fetch"
                ],
                "rows": [
                  [
                    "取什麼",
                    "指令本身",
                    "指令要用的資料"
                  ],
                  [
                    "依據",
                    "PC 指出的指令位址",
                    "Operand、位址欄位、定址模式"
                  ],
                  [
                    "常見錯誤",
                    "以為 Fetch 是取資料",
                    "以為 Operand Fetch 是取下一條指令"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "PC vs IR"
              },
              {
                "kind": "table",
                "headers": [
                  "項目",
                  "PC",
                  "IR"
                ],
                "rows": [
                  [
                    "中文",
                    "程式計數器",
                    "指令暫存器"
                  ],
                  [
                    "存放內容",
                    "下一個要取出的指令位址",
                    "目前已取出的指令"
                  ],
                  [
                    "白話",
                    "下一步去哪拿指令",
                    "剛拿到的指令先放這"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "Decode vs Execute"
              },
              {
                "kind": "table",
                "headers": [
                  "比較點",
                  "Decode",
                  "Execute"
                ],
                "rows": [
                  [
                    "重點",
                    "看懂指令",
                    "做出動作"
                  ],
                  [
                    "內容",
                    "判斷 Opcode、格式、定址模式",
                    "運算、比較、跳躍、I/O"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "3. 機器指令與指令週期 / 國考怎麼判斷",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "「CPU 可直接執行、二進位形式」→ 機器指令。",
                  "「指出要執行的操作」→ Opcode。",
                  "「被操作的資料、暫存器或位置」→ Operand。",
                  "「真正要存取的記憶體位置」→ Effective Address。",
                  "「下一個指令位址」→ PC。",
                  "「目前取出的指令」→ IR。",
                  "「取指令」→ Fetch。",
                  "「實際運算或跳躍」→ Execute。"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-pipeline-hazard",
    "subjectKey": "computerPrinciplesV2",
    "title": "Pipeline 與 Hazard",
    "summary": "整理管線化、加速比、三種 Hazard、RAW/WAR/WAW。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/03_Pipeline與Hazard.md"
    ],
    "sourceSummary": "基本計概(v2) / Pipeline 與 Hazard",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "管線化",
        "en": "Pipelining"
      },
      {
        "zh": "危障",
        "en": "Hazard"
      },
      {
        "zh": "停滯",
        "en": "Stall"
      },
      {
        "zh": "資料危障",
        "en": "Data Hazard"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/03_Pipeline與Hazard.md"
        ],
        "sourceSection": "基本計概(v2) / Pipeline 與 Hazard",
        "lead": [
          "指令與 CPU 運作。"
        ],
        "sections": [
          {
            "heading": "4. Pipeline（管線化） / 定義",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "將指令執行拆成多個階段，使不同指令可在不同階段同時進行，提高吞吐量。",
                  "同一個時間點，每一個管線階段只能處理一個指令。"
                ]
              }
            ]
          },
          {
            "heading": "4. Pipeline（管線化） / 常見 5 階段 Pipeline",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "縮寫",
                  "英文",
                  "中文",
                  "白話作用"
                ],
                "rows": [
                  [
                    "IF",
                    "Instruction Fetch",
                    "抓指令",
                    "把下一個要執行的指令抓進來"
                  ],
                  [
                    "ID",
                    "Instruction Decode",
                    "解碼／讀暫存器",
                    "看懂指令要做什麼，並讀出需要的暫存器資料"
                  ],
                  [
                    "EX",
                    "Execute",
                    "執行運算",
                    "做運算、比較，或計算記憶體位址"
                  ],
                  [
                    "MEM",
                    "Memory Access",
                    "存取記憶體",
                    "讀取或寫入資料記憶體"
                  ],
                  [
                    "WB",
                    "Write Back",
                    "寫回結果",
                    "把運算結果寫回暫存器"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "可理解成：把單一指令的指令週期拆成 5 格，讓不同指令同時卡在不同格子裡執行。"
              }
            ]
          },
          {
            "heading": "4. Pipeline（管線化） / 常見公式",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "假設有 n 個指令、k 個管線階段、每階段時間為 t："
              },
              {
                "kind": "bulletList",
                "items": [
                  "非管線時間 ≈ n * k * t",
                  "管線時間 ≈ (k + n - 1) * t",
                  "Speedup ≈ (n * k) / (k + n - 1)"
                ]
              },
              {
                "kind": "paragraph",
                "text": "若各階段時間不同，管線時脈通常由最慢階段決定（最慢那格還沒做完，整條管線就不能前進）。"
              }
            ]
          },
          {
            "heading": "4. Pipeline（管線化） / 手把手例題　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "題：5 階段 pipeline，執行 100 個指令，每階段 1 ns。求非管線時間、管線時間、加速比。"
              },
              {
                "kind": "paragraph",
                "text": "非管線：n × k × t       = 100 × 5 × 1     = 500 ns\n管線：  (k + n − 1) × t  = (5 + 100 − 1)×1 = 104 ns\n加速比：500 / 104 ≈ 4.81 倍（接近階段數 k = 5）"
              }
            ]
          },
          {
            "heading": "4. Pipeline（管線化） / 最大加速比（理想最多快幾倍）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "理想：Speedup = (n * k) / (k + n - 1)。當指令數 n 很大、階段數 k 相對固定時，k 個階段的最大加速比約接近 k。實際因 Hazard、Stall、階段時間不平均，通常小於理想值。"
              }
            ]
          },
          {
            "heading": "4. Pipeline（管線化） / 管線限制",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Pipeline 提高吞吐量（單位時間完成多少指令），不一定降低單一指令延遲（單一指令從開始到完成多久）。",
                  "Hazard 會造成 Stall，影響實際效能。",
                  "Hazard（危障）：管線遇到阻礙，不能照原本節奏前進。",
                  "Stall（停滯）：因為 Hazard 而插入的等待時間。"
                ]
              },
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "白話意思",
                  "例子"
                ],
                "rows": [
                  [
                    "Structural Hazard（結構危障）",
                    "搶硬體資源",
                    "兩個階段同時要用同一個記憶體"
                  ],
                  [
                    "Data Hazard（資料危障）",
                    "等前一個結果",
                    "I2 要用 I1 還沒算完的結果"
                  ],
                  [
                    "Control Hazard（控制危障）",
                    "等分支方向",
                    "branch 還不知道要不要跳"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "5. Hazard（管線危障） / 定義",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Hazard（危障／冒險）：Pipeline 中，讓指令不能照預定時脈繼續前進的情況。本身不一定算錯，而是「如果不處理，可能會錯或必須等待」。",
                  "Stall（停滯／暫停）：CPU 讓某些管線階段先等一下，不讓指令繼續前進。",
                  "Bubble（泡泡／空泡）：因 stall 插入的空白週期，不做有用工作，只是用來把指令錯開。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "Hazard 是原因；Stall 是處理方式之一；Bubble 是 stall 造成的空白時間。"
              }
            ]
          },
          {
            "heading": "5. Hazard（管線危障） / 三種 Hazard",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "白話意思",
                  "看到什麼關鍵字",
                  "常見處理"
                ],
                "rows": [
                  [
                    "Structural Hazard",
                    "搶硬體",
                    "同一記憶體、同一功能單元、資源不足",
                    "增加硬體、分離 instruction/data cache、排程調整"
                  ],
                  [
                    "Data Hazard",
                    "等資料",
                    "前一指令結果、暫存器讀寫、資料相依",
                    "Forwarding、stall、compiler scheduling、register renaming"
                  ],
                  [
                    "Control Hazard",
                    "不知道下一步去哪",
                    "branch、jump、PC、分支預測",
                    "Branch prediction、flush、delayed branch"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "5. Hazard（管線危障） / 名詞解釋",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Instruction Cache（指令快取）：放程式指令的快取。",
                  "Data Cache（資料快取）：放資料的快取。",
                  "Forwarding（資料前推／旁路傳送）：結果剛算出來，不等 WB 寫回，就先直接給下一個指令用（不一定能解決所有情況）。",
                  "Stall（停滯／停等）：forwarding 還來不及時，讓後面指令先等（會浪費週期，效能下降）。",
                  "Compiler scheduling（編譯器排程）：編譯器調整指令順序，讓相依指令錯開。",
                  "Register renaming（暫存器重新命名）：用不同實體暫存器避免假相依。",
                  "branch（分支指令）：根據條件決定要不要跳到別的地方。",
                  "jump（跳躍指令）：直接跳到指定位置繼續執行。",
                  "PC（Program Counter，程式計數器）：記錄「下一條要抓的指令位址」。",
                  "branch prediction（分支預測）：CPU 先猜 branch 會不會跳。",
                  "Flush（清除管線／沖刷）：把錯誤路徑的指令清掉。",
                  "Delayed branch（延遲分支）：把分支後面的空檔拿來安排可執行的指令。",
                  "Speculative execution（推測執行）：CPU 先推測執行，猜對就保留，猜錯就丟掉。"
                ]
              }
            ]
          },
          {
            "heading": "5. Hazard（管線危障） / Data Hazard 的三種：RAW、WAR、WAW",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "全名",
                  "白話意思"
                ],
                "rows": [
                  [
                    "RAW",
                    "Read After Write",
                    "後面要讀，前面還沒寫好"
                  ],
                  [
                    "WAR",
                    "Write After Read",
                    "後面太早寫，害前面讀不到舊值"
                  ],
                  [
                    "WAW",
                    "Write After Write",
                    "兩個都要寫，寫入順序錯會出事"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習：4 階段 pipeline、50 指令、每階段 2 ns。管線時間與加速比？"
              },
              {
                "kind": "paragraph",
                "text": "解：管線 = (4+50−1) × 2 = 106 ns；非管線 = 50×4×2 = 400 ns；加速比 = 400/106 ≈ 3.77 倍"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-performance-risc-cisc",
    "subjectKey": "computerPrinciplesV2",
    "title": "效能與 RISC／CISC",
    "summary": "整理CPI/MIPS 公式與計算、RISC vs CISC。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/04_效能與RISC-CISC.md"
    ],
    "sourceSummary": "基本計概(v2) / 效能與 RISC／CISC",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "每指令週期數",
        "en": "Cycles Per Instruction, CPI"
      },
      {
        "zh": "每秒百萬指令數",
        "en": "Million Instructions Per Second, MIPS"
      },
      {
        "zh": "精簡指令集電腦",
        "en": "Reduced Instruction Set Computer, RISC"
      },
      {
        "zh": "複雜指令集電腦",
        "en": "Complex Instruction Set Computer, CISC"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/04_效能與RISC-CISC.md"
        ],
        "sourceSection": "基本計概(v2) / 效能與 RISC／CISC",
        "lead": [
          "指令與 CPU 運作。"
        ],
        "sections": [
          {
            "heading": "7. 效能名詞與公式",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "一句話：CPU 執行時間 = 指令數 × 每個指令平均幾拍 × 每一拍多久"
              }
            ]
          },
          {
            "heading": "7. 效能名詞與公式 / 名詞",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "名詞",
                  "中文",
                  "白話意思"
                ],
                "rows": [
                  [
                    "Clock",
                    "時脈",
                    "CPU 的節拍訊號"
                  ],
                  [
                    "Clock Cycle Time",
                    "時脈週期時間",
                    "一拍要花多久"
                  ],
                  [
                    "Clock Rate",
                    "時脈頻率",
                    "一秒有幾拍"
                  ],
                  [
                    "Instruction Count",
                    "指令數",
                    "程式實際執行幾個機器指令"
                  ],
                  [
                    "CPI（Cycles Per Instruction）",
                    "每指令平均週期數",
                    "平均一個指令要幾拍"
                  ],
                  [
                    "CPU Time",
                    "CPU 執行時間",
                    "CPU 真正花多久執行程式"
                  ],
                  [
                    "MIPS（Million Instructions Per Second）",
                    "每秒百萬指令數",
                    "每秒執行幾百萬個指令"
                  ],
                  [
                    "Execution Time",
                    "執行時間（秒）",
                    "執行時間"
                  ],
                  [
                    "ISA（Instruction Set Architecture）",
                    "指令集架構",
                    "CPU 看得懂的機器指令規格"
                  ],
                  [
                    "內頻",
                    "CPU 核心頻率",
                    "CPU 核心本身跑多快"
                  ],
                  [
                    "外頻",
                    "對外／基準頻率",
                    "CPU 對外溝通或基準頻率"
                  ],
                  [
                    "倍頻",
                    "把外頻放大的倍數",
                    "把外頻放大的倍數"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "7. 效能名詞與公式 / 公式",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "CPU Time = Instruction Count × CPI × Clock Cycle Time",
                  "CPU Time = Instruction Count × CPI / Clock Rate",
                  "MIPS = Instruction Count / (Execution Time × 10^6)",
                  "MIPS = Clock Rate / (CPI × 10^6)",
                  "內頻 = 外頻 × 倍頻"
                ]
              }
            ]
          },
          {
            "heading": "7. 效能名詞與公式 / 手把手例題　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "題：程式有 5×10⁸ 個指令，CPI = 2，時脈 2 GHz。求 (1) CPU 執行時間 (2) MIPS。"
              },
              {
                "kind": "paragraph",
                "text": "(1) CPU Time = IC × CPI / Clock Rate\n            = (5×10⁸ × 2) / (2×10⁹)\n            = 10⁹ / (2×10⁹) = 0.5 秒\n\n(2) MIPS = Clock Rate / (CPI × 10⁶)\n        = (2×10⁹) / (2 × 10⁶) = 1000 MIPS\n   驗算：MIPS = IC / (執行時間 × 10⁶)\n            = 5×10⁸ / (0.5 × 10⁶) = 1000 ✓"
              }
            ]
          },
          {
            "heading": "7. 效能名詞與公式 / 易混淆",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Clock Rate 越高不一定越快，還要看 CPI、指令數、記憶體存取與架構。CPU Time 越小越快。",
                  "MIPS 不適合跨不同 ISA 直接比較，因為不同架構完成同一工作所需指令數不同。",
                  "CPI 越高不是越好；CPI 越高代表平均每個指令要更多週期。",
                  "Instruction Count 不是程式碼行數，而是實際執行的機器指令數。"
                ]
              }
            ]
          },
          {
            "heading": "8. RISC 與 CISC",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "ISA（指令集架構）：CPU 對程式設計者或編譯器公開的「指令規則」。"
              },
              {
                "kind": "table",
                "headers": [
                  "項目",
                  "RISC",
                  "CISC"
                ],
                "rows": [
                  [
                    "全名",
                    "Reduced Instruction Set Computer",
                    "Complex Instruction Set Computer"
                  ],
                  [
                    "指令數",
                    "少而精簡",
                    "多而複雜"
                  ],
                  [
                    "定址模式",
                    "較少",
                    "較多"
                  ],
                  [
                    "指令長度",
                    "多為固定長度",
                    "常為可變長度"
                  ],
                  [
                    "執行週期",
                    "多數指令接近固定、較短",
                    "指令可能需多個週期"
                  ],
                  [
                    "暫存器數量",
                    "通常較多",
                    "通常較少"
                  ],
                  [
                    "記憶體存取",
                    "Load/Store 架構較常見",
                    "指令可直接操作記憶體較常見"
                  ],
                  [
                    "編譯器需求",
                    "較需要強力 compiler 做最佳化",
                    "硬體指令較複雜，compiler 壓力相對不同"
                  ],
                  [
                    "翻譯出的指令數",
                    "同一高階語言動作可能較多",
                    "同一動作可能較少"
                  ],
                  [
                    "Pipeline",
                    "較適合",
                    "較不易，但現代 CISC 會轉成微指令改善"
                  ],
                  [
                    "代表架構",
                    "ARM、MIPS、RISC-V、SPARC",
                    "x86、VAX"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "名詞解釋"
              },
              {
                "kind": "orderedList",
                "items": [
                  "RISC：精簡指令集電腦。",
                  "CISC：複雜指令集電腦，單一指令可能完成較多工作。",
                  "定址模式：CPU 指令「找到資料位置」的方法。",
                  "指令長度：一個機器指令占用的位元／位元組數，會影響解碼難易度。",
                  "執行週期：CPU 執行一個指令大約需要多少時脈週期。",
                  "暫存器：CPU 內部速度非常快的小型儲存空間（像 CPU 手邊的工作桌，記憶體則像較遠的書櫃）。",
                  "Load/Store 架構：RISC 常見設計，要求「先把資料搬到暫存器，再做運算，最後存回記憶體」；CISC 則較常允許指令直接操作記憶體。",
                  "Pipeline（管線化）：像生產線，一個指令解碼時，另一個在取指令，第三個在執行，提高吞吐量。",
                  "微指令：CPU 內部更細小的操作步驟。現代 CISC 外觀是複雜指令，但內部可能先拆成多個較簡單的微指令再執行——因此不能用「RISC 一定快、CISC 一定慢」這種簡化判斷。"
                ]
              }
            ]
          },
          {
            "heading": "8. RISC 與 CISC / 考前速記",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "RISC＝「少、短、固、多暫存、Load/Store、好 pipeline」"
              },
              {
                "kind": "bulletList",
                "items": [
                  "少：指令數較少。短：多數指令較短、較接近固定週期。固：指令長度多為固定。多暫存：通常較多暫存器。Load/Store：運算多在暫存器中做。好 pipeline：指令規則，較適合 pipeline。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "CISC＝「多、雜、變、可碰記憶體、硬體較複雜」"
              },
              {
                "kind": "bulletList",
                "items": [
                  "多：指令數較多。雜：定址模式多、功能複雜。變：指令長度常為可變。可碰記憶體：某些指令可直接操作記憶體。硬體較複雜：但現代 CISC 可用微指令改善。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "一定要記得：RISC 不等於一定比較快，CISC 不等於一定比較慢。效能取決於 ISA、微架構、編譯器、快取與工作負載。"
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：2 GHz、CPI 1.5、程式 10⁹ 指令，CPU Time？"
              },
              {
                "kind": "paragraph",
                "text": "解：IC × CPI / Rate = 10⁹ × 1.5 / (2×10⁹) = 0.75 秒"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：某程式 MIPS = 500、指令數 2×10⁸，執行時間？"
              },
              {
                "kind": "paragraph",
                "text": "解：T = IC / (MIPS × 10⁶) = 2×10⁸ / (500×10⁶) = 0.4 秒"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-bus-usb",
    "subjectKey": "computerPrinciplesV2",
    "title": "匯流排與 USB",
    "summary": "整理位址/資料/控制匯流排、2ⁿ 定址、USB 速度。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/05_匯流排與USB.md"
    ],
    "sourceSummary": "基本計概(v2) / 匯流排與 USB",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "位址匯流排",
        "en": "Address Bus"
      },
      {
        "zh": "資料匯流排",
        "en": "Data Bus"
      },
      {
        "zh": "控制匯流排",
        "en": "Control Bus"
      },
      {
        "zh": "通用序列匯流排",
        "en": "Universal Serial Bus, USB"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/05_匯流排與USB.md"
        ],
        "sourceSection": "基本計概(v2) / 匯流排與 USB",
        "lead": [
          "資料傳輸與介面。"
        ],
        "sections": [
          {
            "heading": "6. 匯流排（Bus） / 三種匯流排",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "位址匯流排（Address Bus）：找位置。傳送記憶體或 I/O 位址。",
                  "資料匯流排（Data Bus）：送內容。傳送資料。",
                  "控制匯流排（Control Bus）：管動作。傳送讀寫、中斷、時脈、確認等控制訊號。"
                ]
              }
            ]
          },
          {
            "heading": "6. 匯流排（Bus） / 基本計算",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "n bits 位址匯流排可產生 2^n 個位址。",
                  "若每個位址代表 1 byte，則可定址空間為 2^n bytes。",
                  "n bits 資料匯流排一次可傳送 n bits 的資料。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "最大陷阱：可定址空間看「位址匯流排」，不是資料匯流排。"
              }
            ]
          },
          {
            "heading": "6. 匯流排（Bus） / 手把手例題　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "題：某 CPU 位址匯流排 20 bits、資料匯流排 8 bits。可定址空間多大？一次能傳多少資料？"
              },
              {
                "kind": "paragraph",
                "text": "可定址空間 = 2^20 = 1,048,576 個位址 = 1 MB（每位址 1 byte）\n一次可傳   = 8 bits = 1 byte"
              },
              {
                "kind": "paragraph",
                "text": "再練一題：位址匯流排 16 bits → 2^16 = 65,536 = 64 KB。"
              }
            ]
          },
          {
            "heading": "6. 匯流排（Bus） / 傳輸方向",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "位址匯流排：通常 CPU → 記憶體或 I/O，單向為主。",
                  "資料匯流排：雙向。",
                  "控制匯流排：依訊號而定，常見為雙向或多方向。"
                ]
              }
            ]
          },
          {
            "heading": "6. 匯流排（Bus） / 讀與寫",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "讀取（CPU 給位址 + 說要讀 → 記憶體回資料）"
              },
              {
                "kind": "orderedList",
                "items": [
                  "位址匯流排：CPU 送出位址。",
                  "控制匯流排：CPU 送出「讀取」訊號。",
                  "資料匯流排：記憶體把資料放上來，CPU 接收。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "寫入（CPU 給位址 + 給資料 + 說要寫 → 記憶體覆蓋成新資料）"
              },
              {
                "kind": "orderedList",
                "items": [
                  "位址匯流排：要寫到這個位置。",
                  "資料匯流排：要寫入的內容。",
                  "控制匯流排：送出寫入訊號。"
                ]
              }
            ]
          },
          {
            "heading": "6. 匯流排（Bus） / 補充",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "暫存器 register：在 CPU 內部，通常不當作外部匯流排連接的記憶體來考。",
                  "快取 cache：常在 CPU 和主記憶體之間，實作上可能有內部匯流排或專用通道，但基本計概題通常不把它當 Bus 題的「記憶體」主角。",
                  "RAM：國考講 CPU 透過位址匯流排讀寫記憶體時，通常就是指 RAM。"
                ]
              }
            ]
          },
          {
            "heading": "13. USB 速度 / USB 常見速度表（必背）",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "版本或名稱",
                  "常見名稱",
                  "理論速度"
                ],
                "rows": [
                  [
                    "USB 1.0 / 1.1",
                    "Low Speed",
                    "1.5 Mbps"
                  ],
                  [
                    "USB 1.0 / 1.1",
                    "Full Speed",
                    "12 Mbps"
                  ],
                  [
                    "USB 2.0",
                    "High Speed",
                    "480 Mbps ★"
                  ],
                  [
                    "USB 3.0 / 3.1 Gen 1 / 3.2 Gen 1x1",
                    "SuperSpeed",
                    "5 Gbps ★"
                  ],
                  [
                    "USB 3.1 Gen 2 / 3.2 Gen 2x1",
                    "SuperSpeed+",
                    "10 Gbps ★"
                  ],
                  [
                    "USB 3.2 Gen 2x2",
                    "SuperSpeed USB 20Gbps",
                    "20 Gbps ★"
                  ],
                  [
                    "USB4 Gen 2x2",
                    "USB4 20Gbps",
                    "20 Gbps"
                  ],
                  [
                    "USB4 Gen 3x2",
                    "USB4 40Gbps",
                    "40 Gbps ★"
                  ],
                  [
                    "USB4 Version 2.0 / USB 80Gbps",
                    "USB4 80Gbps",
                    "80 Gbps ★"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "優先背：USB 2.0 = 480 Mbps、USB 3.0 = 5 Gbps、USB 3.1 Gen 2 = 10 Gbps、USB 3.2 Gen 2x2 = 20 Gbps、USB4 常見 40 Gbps、USB4 Version 2.0 = 80 Gbps。"
              }
            ]
          },
          {
            "heading": "13. USB 速度 / Mbps 與 MB/s 不一樣",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "USB 規格常寫 Mbps / Gbps，小寫 b 是 bit（位元）。",
                  "1 Byte = 8 bits。",
                  "MB/s ≈ Mbps ÷ 8；GB/s ≈ Gbps ÷ 8。"
                ]
              }
            ]
          },
          {
            "heading": "13. USB 速度 / 備註",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "實際速度會受線材、控制器、協定開銷與裝置限制影響。",
                  "Type-C 是接頭形狀，不保證一定是高速 USB。"
                ]
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：要對 4 GB 記憶體（byte 定址），需幾條位址線？"
              },
              {
                "kind": "paragraph",
                "text": "解：4 GB = 2³² bytes → 32 條"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：24 條位址線可定址多少？"
              },
              {
                "kind": "paragraph",
                "text": "解：2²⁴ = 16 MB"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-memory-hierarchy-classification",
    "subjectKey": "computerPrinciplesV2",
    "title": "記憶體（一）階層與分類",
    "summary": "整理階層、Locality、RAM/ROM、SRAM/DRAM。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/06_記憶體-階層與分類.md"
    ],
    "sourceSummary": "基本計概(v2) / 記憶體（一）階層與分類",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "記憶體階層",
        "en": "Memory Hierarchy"
      },
      {
        "zh": "區域性",
        "en": "Locality"
      },
      {
        "zh": "隨機存取記憶體",
        "en": "Random Access Memory, RAM"
      },
      {
        "zh": "唯讀記憶體",
        "en": "Read Only Memory, ROM"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/06_記憶體-階層與分類.md"
        ],
        "sourceSection": "基本計概(v2) / 記憶體（一）階層與分類",
        "lead": [
          "記憶體。"
        ],
        "sections": [
          {
            "heading": "9. Memory 階層圖",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "越靠近 CPU，速度越快、容量越小、成本越高；越遠離 CPU，速度越慢、容量越大、成本越低。"
              }
            ]
          },
          {
            "heading": "9. Memory 階層圖 / 階層順序（必背）",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "層級",
                  "名稱",
                  "速度",
                  "容量",
                  "內容例"
                ],
                "rows": [
                  [
                    "1",
                    "Register 暫存器",
                    "最快",
                    "最小",
                    "CPU 正在計算的數字"
                  ],
                  [
                    "2",
                    "Cache 快取記憶體",
                    "很快",
                    "很小",
                    "最近常用的資料或指令"
                  ],
                  [
                    "3",
                    "Main Memory 主記憶體 / RAM",
                    "中等",
                    "較大",
                    "正在執行的程式和資料"
                  ],
                  [
                    "4",
                    "SSD / HDD 輔助儲存體",
                    "慢",
                    "很大",
                    "作業系統、遊戲、影片、文件"
                  ],
                  [
                    "5",
                    "外部儲存 / 雲端 / 磁帶",
                    "最慢",
                    "最大",
                    "備份資料、歷史資料、雲端檔案"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "由快到慢："
              },
              {
                "kind": "orderedList",
                "items": [
                  "暫存器 Register",
                  "L1 Cache → L2 Cache → L3 Cache",
                  "主記憶體 Main Memory / RAM",
                  "SSD / HDD",
                  "外部儲存 External Storage"
                ]
              }
            ]
          },
          {
            "heading": "9. Memory 階層圖 / Locality（區域性）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "Cache 把近期可能會再用到的資料放近一點，讓 CPU 下次拿得更快。Cache 之所以有效，是因為程式常有「區域性」——常用剛用過的資料，或用附近的資料。"
              },
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "中文",
                  "白話判斷",
                  "例子"
                ],
                "rows": [
                  [
                    "Temporal Locality",
                    "時間區域性",
                    "同一個資料很快又用一次",
                    "迴圈一直用 sum"
                  ],
                  [
                    "Spatial Locality",
                    "空間區域性",
                    "用到某位置後，附近位置也會用",
                    "依序讀 a[0], a[1], a[2]"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "10. Memory 分類圖",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "Memory 記憶體\n├─ 依角色分類\n│  ├─ Register 暫存器：CPU 內部，最快、最小\n│  ├─ Cache 快取：CPU 和 RAM 之間，高速暫存\n│  ├─ Main Memory 主記憶體：程式執行時的工作區，通常是 RAM\n│  └─ Secondary Storage 輔助記憶體：長期保存資料，例如 SSD / HDD / USB\n└─ 依斷電後資料是否保留分類\n   ├─ Volatile 揮發性：斷電後資料通常消失\n   └─ Non-volatile 非揮發性：斷電後資料通常保留"
              }
            ]
          },
          {
            "heading": "10. Memory 分類圖 / RAM vs ROM",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "項目",
                  "RAM",
                  "ROM"
                ],
                "rows": [
                  [
                    "全名",
                    "Random Access Memory",
                    "Read Only Memory"
                  ],
                  [
                    "中文",
                    "隨機存取記憶體",
                    "唯讀記憶體"
                  ],
                  [
                    "主要用途",
                    "存放執行中的程式與資料",
                    "存放韌體、開機程式"
                  ],
                  [
                    "斷電後",
                    "通常消失",
                    "通常保留"
                  ],
                  [
                    "讀寫特性",
                    "可快速讀寫",
                    "以讀取為主，部分類型可改寫"
                  ],
                  [
                    "常見例子",
                    "DRAM、SRAM",
                    "PROM、EPROM、EEPROM、Flash ROM"
                  ]
                ]
              },
              {
                "kind": "bulletList",
                "items": [
                  "RAM：執行中、可快讀寫、斷電多消失。",
                  "ROM：放韌體、放開機程式、斷電多保留。",
                  "ROM 不代表永遠不能改；現代很多 ROM 類型可用特定方式改寫，例如 EEPROM、Flash。"
                ]
              }
            ]
          },
          {
            "heading": "10. Memory 分類圖 / SRAM vs DRAM",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "項目",
                  "SRAM",
                  "DRAM"
                ],
                "rows": [
                  [
                    "全名",
                    "Static RAM",
                    "Dynamic RAM"
                  ],
                  [
                    "中文",
                    "靜態隨機存取記憶體",
                    "動態隨機存取記憶體"
                  ],
                  [
                    "儲存方式",
                    "flip-flop",
                    "電容"
                  ],
                  [
                    "是否需要 refresh",
                    "不需要",
                    "需要"
                  ],
                  [
                    "速度",
                    "較快",
                    "較慢"
                  ],
                  [
                    "成本",
                    "較高",
                    "較低"
                  ],
                  [
                    "容量",
                    "較小",
                    "較大"
                  ],
                  [
                    "常見用途",
                    "Cache",
                    "Main Memory / RAM"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "flip-flop ＝ 正反器 ＝ 可以記住 1 個 bit 的小電路。"
              }
            ]
          },
          {
            "heading": "10. Memory 分類圖 / ROM 類型",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "重點",
                  "擦除或改寫方式",
                  "國考關鍵字"
                ],
                "rows": [
                  [
                    "PROM",
                    "通常只能燒錄一次",
                    "一次性燒錄",
                    "Program once"
                  ],
                  [
                    "EPROM",
                    "可擦除後再燒錄",
                    "紫外線擦除，通常整片擦除",
                    "紫外線"
                  ],
                  [
                    "EEPROM",
                    "可擦除與改寫",
                    "電氣擦除，可局部改寫",
                    "電氣、局部改寫"
                  ],
                  [
                    "Flash",
                    "EEPROM 的延伸",
                    "電氣擦除，常以 block 為單位",
                    "SSD、USB、記憶卡"
                  ]
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-registers-cache",
    "subjectKey": "computerPrinciplesV2",
    "title": "記憶體（二）暫存器與 Cache",
    "summary": "整理各暫存器、Cache、AMAT。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/07_記憶體-暫存器與Cache.md"
    ],
    "sourceSummary": "基本計概(v2) / 記憶體（二）暫存器與 Cache",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "暫存器",
        "en": "Register"
      },
      {
        "zh": "累加器",
        "en": "Accumulator, AC"
      },
      {
        "zh": "快取記憶體",
        "en": "Cache Memory"
      },
      {
        "zh": "平均記憶體存取時間",
        "en": "Average Memory Access Time, AMAT"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/07_記憶體-暫存器與Cache.md"
        ],
        "sourceSection": "基本計概(v2) / 記憶體（二）暫存器與 Cache",
        "lead": [
          "記憶體。"
        ],
        "sections": [
          {
            "heading": "11. Register（暫存器） / 名詞解釋",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "暫存器（Register）：CPU 內部非常小、非常快的儲存空間。用來暫時保存 CPU 正在處理、即將使用，或需要立即判斷的資訊。",
                  "Program Counter（PC，程式計數器）：存放「下一個要執行指令的記憶體位址」。取出指令後 PC 通常更新到下一個指令位置；遇跳躍或中斷可能被改成新目標位址。",
                  "Instruction Register（IR，指令暫存器）：存放「目前正在解碼或執行的指令」。CPU 取出指令後放入 IR，控制單元才能分析這指令要做什麼。",
                  "Base Register（基底暫存器）：存放「程式可用記憶體區段起始位址」。支援記憶體保護與重定位。白話：「這個程式的合法活動範圍，從這個地址開始。」",
                  "Limit Register（界限暫存器）：存放「程式可用區段大小或界限」。常與 Base Register 搭配，檢查存取是否超出允許範圍。白話：「這個程式最多只能用到這麼大的範圍。」",
                  "Flag Register / Status Register（旗標／狀態暫存器）：記錄 CPU 運算結果狀態，例如結果是否為零、是否進位、是否溢位、正負號，以及是否允許中斷。",
                  "MAR（Memory Address Register，記憶體位址暫存器）：存放「要存取的記憶體位址」。",
                  "MDR / MBR（Memory Data / Buffer Register，記憶體資料／緩衝暫存器）：存放「從記憶體讀出，或準備寫入記憶體的資料」。（MAR 管地址，MDR/MBR 管資料，常一起出現。）",
                  "AC（Accumulator，累加器）：暫存 ALU 運算的中間結果或最後結果，也常作為下一次運算的輸入。白話：「ALU 算完先放這裡，下一步可直接接著算。」"
                ]
              }
            ]
          },
          {
            "heading": "11. Register（暫存器） / 常見考法",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "暫存器名稱與功能配對：PC → 下一個要執行指令的位址；IR → 目前正在解碼或執行的指令；MAR → 記憶體位址；MDR/MBR → 記憶體資料；AC → ALU 運算的中間或累積結果。",
                  "取指令流程：PC 給下一個指令位址、MAR 放要存取的位址、MDR/MBR 放讀回資料、IR 放目前指令。",
                  "記憶體保護：出現 base、limit、relocation、protection、越界檢查 → 想到 Base Register（管起始位址）與 Limit Register（管大小／界限）。",
                  "旗標意義：Zero、Carry、Overflow、Sign、Interrupt Enable → 選 Flag Register / Status Register。"
                ]
              }
            ]
          },
          {
            "heading": "12. Cache（快取記憶體） / Cache 類別",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "L1：最靠近 CPU，最快、容量最小。",
                  "L2：速度與容量居中。",
                  "L3：通常多核心共享，容量較大但較慢。"
                ]
              }
            ]
          },
          {
            "heading": "12. Cache（快取記憶體） / Hit Ratio 相關",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Hit（命中）：要找的資料剛好在 Cache 裡，可直接讀取，速度快。",
                  "Miss（未命中）：資料不在 cache，需到下一層記憶體取。",
                  "Hit Ratio（命中率） ＝ Hit 次數 / 總存取次數。",
                  "Miss Rate（未命中率） ＝ 1 − Hit Ratio。",
                  "Hit Time（命中時間）：資料在 Cache 中命中時，取得資料所需時間（很短，但不是零）。",
                  "Miss Penalty（未命中懲罰）：發生 Miss 後，必須到下一層記憶體取資料所多花的時間。"
                ]
              }
            ]
          },
          {
            "heading": "12. Cache（快取記憶體） / AMAT",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "AMAT（Average Memory Access Time，平均記憶體存取時間）：估算一次記憶體存取平均要花多久。"
              },
              {
                "kind": "paragraph",
                "text": "AMAT = Hit Time + Miss Rate × Miss Penalty"
              },
              {
                "kind": "paragraph",
                "text": "例：Hit Time = 2 ns，Miss Rate = 8%，Miss Penalty = 50 ns，求 AMAT。"
              },
              {
                "kind": "paragraph",
                "text": "AMAT = 2 + 0.08 × 50\n     = 2 + 4\n     = 6 ns"
              }
            ]
          },
          {
            "heading": "12. Cache（快取記憶體） / 寫入策略",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Write Through（寫透式）：寫入 Cache 時，同步把資料寫回主記憶體。優：一致性較好；缺：每次寫入都要同步更新主記憶體，較慢。",
                  "Write Back（寫回式）：先寫在 Cache，等該區塊被替換出去時，才寫回主記憶體。優：減少對主記憶體的寫入次數，效能較好；缺：控制較複雜，需額外機制記錄資料是否已被修改。"
                ]
              }
            ]
          },
          {
            "heading": "12. Cache（快取記憶體） / 常見搭配",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "Write Allocate（寫入配置）：發生 write miss 時，先把目標區塊載入 Cache，再寫入。適合後續可能還會繼續使用同一區塊。",
                  "No Write Allocate（非寫入配置）：發生 write miss 時，不載入區塊，直接寫到下一層記憶體。適合不希望一次寫入就占用 Cache 空間。"
                ]
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：Hit Ratio 95%、Hit Time 1 ns、Miss Penalty 100 ns，AMAT？"
              },
              {
                "kind": "paragraph",
                "text": "解：1 + 0.05 × 100 = 6 ns"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：AMAT 2 ns、Hit Time 1 ns、Miss Penalty 50 ns，Miss Rate？"
              },
              {
                "kind": "paragraph",
                "text": "解：2 = 1 + MR×50 → MR = 2%"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-base-conversion",
    "subjectKey": "computerPrinciplesV2",
    "title": "進制轉換",
    "summary": "整理二/八/十/十六進制互轉（8 題＋練習，本篇最長）。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/08_進制轉換.md"
    ],
    "sourceSummary": "基本計概(v2) / 進制轉換",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "進制轉換",
        "en": "Base Conversion"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/08_進制轉換.md"
        ],
        "sourceSection": "基本計概(v2) / 進制轉換",
        "lead": [
          "數值與編碼（計算題）。本篇最長，但都是同類轉換，熟方法後讀很快。"
        ],
        "sections": [
          {
            "heading": "14. 進制轉換",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "十進制逢 10 進 1、二進制逢 2 進 1、八進制逢 8 進 1、十六進制逢 16 進 1。"
              }
            ]
          },
          {
            "heading": "14. 進制轉換 / 十六進制字母",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "十六進制",
                  "十進制"
                ],
                "rows": [
                  [
                    "A",
                    "10"
                  ],
                  [
                    "B",
                    "11"
                  ],
                  [
                    "C",
                    "12"
                  ],
                  [
                    "D",
                    "13"
                  ],
                  [
                    "E",
                    "14"
                  ],
                  [
                    "F",
                    "15"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "14. 進制轉換 / 轉換方法總表",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "題型",
                  "方法",
                  "讀取方向"
                ],
                "rows": [
                  [
                    "十進制整數轉 n 進制",
                    "連除 n，直到商為 0，記餘數",
                    "餘數由下往上讀"
                  ],
                  [
                    "十進制小數轉 n 進制",
                    "連乘 n，直到小數變 0，取整數",
                    "整數部分由上往下讀"
                  ],
                  [
                    "n 進制轉十進制",
                    "位值展開",
                    "每位乘上基底次方後加總"
                  ],
                  [
                    "二進制轉八進制",
                    "每 3 bits 一組\n整數：從小數點往左分組\n小數：從小數點往右分組",
                    "不足補 0"
                  ],
                  [
                    "二進制轉十六進制",
                    "每 4 bits 一組\n整數：從小數點往左分組\n小數：從小數點往右分組",
                    "不足補 0"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "表示法：(1011)₂ 右下角的 ₂ 表示二進制。"
              }
            ]
          },
          {
            "heading": "14. 進制轉換 / 範例（含完整過程）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "1. (450.153)₁₀ → 二進制"
              },
              {
                "kind": "paragraph",
                "text": "整數 450（連除 2，餘數由下往上讀）："
              },
              {
                "kind": "paragraph",
                "text": "450 ÷2 = 225 … 0\n225 ÷2 = 112 … 1\n112 ÷2 =  56 … 0\n 56 ÷2 =  28 … 0\n 28 ÷2 =  14 … 0\n 14 ÷2 =   7 … 0\n  7 ÷2 =   3 … 1\n  3 ÷2 =   1 … 1\n  1 ÷2 =   0 … 1\n→ 由下往上：111000010\n驗算：256+128+64+2 = 450 ✓"
              },
              {
                "kind": "paragraph",
                "text": "小數 0.153（連乘 2，取整數，由上往下讀）："
              },
              {
                "kind": "paragraph",
                "text": "0.153 ×2 = 0.306 → 0\n0.306 ×2 = 0.612 → 0\n0.612 ×2 = 1.224 → 1（留 0.224）\n0.224 ×2 = 0.448 → 0\n0.448 ×2 = 0.896 → 0\n0.896 ×2 = 1.792 → 1（留 0.792）\n0.792 ×2 = 1.584 → 1（留 0.584）\n0.584 ×2 = 1.168 → 1（留 0.168）…（不會終止）\n→ 由上往下：0.00100111…"
              },
              {
                "kind": "paragraph",
                "text": "答案：(450.153)₁₀ ≈ (111000010.00100111…)₂（小數為循環、不終止，取近似）"
              },
              {
                "kind": "paragraph",
                "text": "2. (450.153)₁₀ → 十六進制"
              },
              {
                "kind": "paragraph",
                "text": "整數 450（連除 16）："
              },
              {
                "kind": "paragraph",
                "text": "450 ÷16 = 28 … 2\n 28 ÷16 =  1 … 12 (C)\n  1 ÷16 =  0 … 1\n→ 由下往上：1 C 2 = 1C2\n驗算：1×256 + 12×16 + 2 = 450 ✓"
              },
              {
                "kind": "paragraph",
                "text": "小數 0.153（連乘 16）："
              },
              {
                "kind": "paragraph",
                "text": "0.153 ×16 = 2.448 → 2（留 0.448）\n0.448 ×16 = 7.168 → 7（留 0.168）\n0.168 ×16 = 2.688 → 2（留 0.688）\n0.688 ×16 =11.008 → B（留 0.008）…（不會終止）\n→ 0.272B…"
              },
              {
                "kind": "paragraph",
                "text": "答案：(450.153)₁₀ ≈ (1C2.272B…)₁₆（小數取近似）"
              },
              {
                "kind": "paragraph",
                "text": "也可由第 1 題的二進位 111000010.00100111 直接 4 位一組驗證：整數 1 1100 0010 = 1C2、小數 0010 0111 = 27…，一致。"
              },
              {
                "kind": "paragraph",
                "text": "3. (11010101.1011)₂ → 八進制（每 3 bits 一組）"
              },
              {
                "kind": "paragraph",
                "text": "整數 11010101，從小數點往左每 3 bits："
              },
              {
                "kind": "paragraph",
                "text": "011 010 101  →  3 2 5\n（最左不足補 0：11 → 011）"
              },
              {
                "kind": "paragraph",
                "text": "小數 1011，從小數點往右每 3 bits："
              },
              {
                "kind": "paragraph",
                "text": "101 100  →  5 4\n（最右不足補 0：1 → 100）"
              },
              {
                "kind": "paragraph",
                "text": "答案：(11010101.1011)₂ = (325.54)₈"
              },
              {
                "kind": "paragraph",
                "text": "驗算：整數 213 = 325₈ ✓；小數 0.6875 = .54₈ ✓"
              },
              {
                "kind": "paragraph",
                "text": "4. (1011110010.101)₂ → 十六進制"
              },
              {
                "kind": "paragraph",
                "text": "原題小數寫成 .151，含非法數字 5（二進位只有 0、1），研判為 .101 之誤，已直接更正。"
              },
              {
                "kind": "paragraph",
                "text": "整數 1011110010，每 4 bits 一組（從小數點往左）："
              },
              {
                "kind": "paragraph",
                "text": "0010 1111 0010  →  2 F 2\n（最左不足補 0：10 → 0010）"
              },
              {
                "kind": "paragraph",
                "text": "小數 .101，每 4 bits 一組（從小數點往右，補 0）："
              },
              {
                "kind": "paragraph",
                "text": "1010  →  A\n（不足補 0：101 → 1010）"
              },
              {
                "kind": "paragraph",
                "text": "答案：(1011110010.101)₂ = (2F2.A)₁₆"
              },
              {
                "kind": "paragraph",
                "text": "驗算：整數 754 = 2F2 ✓；小數 .101₂ = 0.625 = .A₁₆（A/16 = 10/16 = 0.625）✓"
              },
              {
                "kind": "paragraph",
                "text": "5. (653.5)₈ → 二進制（每個八進位數字 → 3 bits）"
              },
              {
                "kind": "paragraph",
                "text": "6 = 110\n5 = 101\n3 = 011      → 整數 110101011\n.5 = 101     → 小數 .101"
              },
              {
                "kind": "paragraph",
                "text": "答案：(653.5)₈ = (110101011.101)₂"
              },
              {
                "kind": "paragraph",
                "text": "驗算：653₈ = 427 = 110101011₂ ✓；.5₈ = 0.625 = .101₂ ✓"
              },
              {
                "kind": "paragraph",
                "text": "6. (653.5)₈ → 十六進制（先轉二進位，再 4 bits 一組）"
              },
              {
                "kind": "paragraph",
                "text": "由第 5 題：110101011.101₂"
              },
              {
                "kind": "paragraph",
                "text": "整數：0001 1010 1011 → 1 A B = 1AB\n（從小數點往左每 4 bits，最左補 0）\n小數：1010 → A\n（從小數點往右每 4 bits，補 0：101 → 1010）"
              },
              {
                "kind": "paragraph",
                "text": "答案：(653.5)₈ = (1AB.A)₁₆"
              },
              {
                "kind": "paragraph",
                "text": "驗算：427 = 1AB₁₆ ✓；.5₈ = 0.625 = .A₁₆ ✓"
              },
              {
                "kind": "paragraph",
                "text": "7. (2F2.C)₁₆ → 二進制（每個十六進位數字 → 4 bits）"
              },
              {
                "kind": "paragraph",
                "text": "2 = 0010\nF = 1111\n2 = 0010     → 整數 (0010 1111 0010) = 1011110010\n.C = 1100    → 小數 .1100 = .11"
              },
              {
                "kind": "paragraph",
                "text": "答案：(2F2.C)₁₆ = (1011110010.11)₂"
              },
              {
                "kind": "paragraph",
                "text": "驗算：2F2₁₆ = 754 = 1011110010₂ ✓；.C₁₆ = 0.75 = .11₂ ✓"
              },
              {
                "kind": "paragraph",
                "text": "8. (2F2.C)₁₆ → 八進制（先轉二進位，再 3 bits 一組）"
              },
              {
                "kind": "paragraph",
                "text": "由第 7 題：1011110010.1100₂"
              },
              {
                "kind": "paragraph",
                "text": "整數：001 011 110 010 → 1 3 6 2 = 1362\n（從小數點往左每 3 bits，最左補 0）\n小數：110 → 6\n（從小數點往右每 3 bits，補 0：110 → 110）"
              },
              {
                "kind": "paragraph",
                "text": "答案：(2F2.C)₁₆ = (1362.6)₈"
              },
              {
                "kind": "paragraph",
                "text": "驗算：754 = 1362₈ ✓；.C₁₆ = 0.75 = .6₈ ✓"
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：(1101.011)₂ → 十進制"
              },
              {
                "kind": "paragraph",
                "text": "解：整數 1101 = 8+4+1 = 13；小數 .011 = 1/4 + 1/8 = 0.375 → 13.375"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：(172)₁₀ → 二進制、十六進制"
              },
              {
                "kind": "paragraph",
                "text": "解：172 = 10101100₂（128+32+8+4）；每 4 bits 一組 1010 1100 = AC₁₆"
              },
              {
                "kind": "paragraph",
                "text": "練習 3：(3A.8)₁₆ → 二進制、八進制"
              },
              {
                "kind": "paragraph",
                "text": "解：3=0011、A=1010、.8=1000 → 二進制 111010.1₂；每 3 bits 一組 111 010 . 100 = 72.4₈"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-complement-conversion",
    "subjectKey": "computerPrinciplesV2",
    "title": "補數轉換",
    "summary": "整理符號大小、1 補數、2 補數。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/09_補數轉換.md"
    ],
    "sourceSummary": "基本計概(v2) / 補數轉換",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "符號大小",
        "en": "Sign-Magnitude"
      },
      {
        "zh": "1 補數",
        "en": "One's Complement"
      },
      {
        "zh": "2 補數",
        "en": "Two's Complement"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/09_補數轉換.md"
        ],
        "sourceSection": "基本計概(v2) / 補數轉換",
        "lead": [
          "數值與編碼（計算題）。"
        ],
        "sections": [
          {
            "heading": "15. 補數轉換",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "補數是電腦用固定 bits 表示正負整數的方法。"
              }
            ]
          },
          {
            "heading": "15. 補數轉換 / 三種表示法",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "表示法",
                  "正數",
                  "負數怎麼做",
                  "是否有 +0 / −0",
                  "n bits 範圍"
                ],
                "rows": [
                  [
                    "符號大小（Sign-Magnitude）",
                    "最高位 0，其餘放大小",
                    "最高位 1，其餘放大小",
                    "有",
                    "−(2^(n−1)−1) 到 +(2^(n−1)−1)"
                  ],
                  [
                    "1 補數（1's complement）",
                    "和一般二進位相同",
                    "正數全部反相",
                    "有",
                    "−(2^(n−1)−1) 到 +(2^(n−1)−1)"
                  ],
                  [
                    "2 補數（2's complement）",
                    "和一般二進位相同",
                    "正數反相後加 1",
                    "無",
                    "−2^(n−1) 到 +(2^(n−1)−1)"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "15. 補數轉換 / 手把手例題　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "題 1：用 8 bits 表示 −13（三種表示法）。"
              },
              {
                "kind": "paragraph",
                "text": "|−13| = 13 = 00001101\n符號大小：最高位設 1     → 10001101\n1 補數：  00001101 全反  → 11110010\n2 補數：  1 補數 + 1      → 11110011"
              },
              {
                "kind": "paragraph",
                "text": "題 2（用 2 補數做減法）：算 7 − 5（8 bits）。"
              },
              {
                "kind": "paragraph",
                "text": "7 = 00000111\n−5 的 2 補數：5 = 00000101 → 反 11111010 → +1 = 11111011\n  00000111\n+ 11111011\n= 1 00000010 → 丟掉最左進位 → 00000010 = 2 ✓"
              }
            ]
          },
          {
            "heading": "15. 補數轉換 / 備註",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "現代電腦整數多使用 2 補數，因為加減法可直接用二進位加法處理。",
                  "2 補數若超出指定的 bits，最左邊超出的進位丟掉。",
                  "r 的補數（基數補數，如 10 補數）：N 的 r 補數為 r^n − N（n 為位數）。例：三位數中，345 的 10 補數 = 1000 − 345 = 655。",
                  "r−1 的補數（減一補數，如 9 補數）：N 的 r−1 補數為 (r^n − 1) − N。例：345 的 9 補數 = 999 − 345 = 654。"
                ]
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：8-bit 2 補數能表示的範圍？"
              },
              {
                "kind": "paragraph",
                "text": "解：−2⁷ ~ +2⁷−1 = −128 ~ +127"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：8-bit 2 補數的 11111111 代表多少？"
              },
              {
                "kind": "paragraph",
                "text": "解：反相 +1 → 00000001 = 1，最高位是 1（負）→ −1"
              },
              {
                "kind": "paragraph",
                "text": "練習 3：用 8-bit 2 補數算 (−6) + (−3)"
              },
              {
                "kind": "paragraph",
                "text": "解：−6 = 11111010、−3 = 11111101；相加 = 1 11110111 → 丟進位 → 11110111 = −9 ✓"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-floating-point-conversion",
    "subjectKey": "computerPrinciplesV2",
    "title": "浮點數轉換",
    "summary": "整理傳統浮點表示法、IEEE 754 單/雙精度、編碼與反推。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論v2/10_浮點數轉換.md",
      "_private/MD/0621/IEEE754_浮點數特殊值_速記.md"
    ],
    "sourceSummary": "基本計概(v2) / 浮點數轉換",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "浮點數",
        "en": "Floating Point"
      },
      {
        "zh": "IEEE 754",
        "en": "IEEE 754"
      },
      {
        "zh": "尾數",
        "en": "Mantissa"
      },
      {
        "zh": "偏移量",
        "en": "Bias"
      },
      {
        "zh": "超額碼",
        "en": "Excess"
      },
      {
        "zh": "隱藏位元",
        "en": "Hidden Bit"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論v2/10_浮點數轉換.md",
          "_private/MD/0621/IEEE754_浮點數特殊值_速記.md"
        ],
        "sourceSection": "基本計概(v2) / 浮點數轉換",
        "lead": [
          "數值與編碼（計算題）。",
          "這篇怎麼用：兩種表示法（傳統、IEEE 754）的轉換規則不要硬背——把下面的手把手例題親手算過幾遍，建立肌肉記憶，看到題目就會做。核心路徑只有一條：轉二進位 → 正規化 → 算指數 → 填欄位。"
        ],
        "sections": [
          {
            "heading": "16. 浮點數轉換",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "浮點數是電腦用來表示小數或很大、很小數字的方法。"
              }
            ]
          },
          {
            "heading": "IEEE 754 浮點數特殊值・速記版",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "判斷只看兩件事：① 指數欄位是不是全 0 / 全 1；② 尾數是不是 0。"
              },
              {
                "kind": "table",
                "headers": [
                  "指數欄位",
                  "尾數(mantissa)",
                  "代表",
                  "隱藏位元"
                ],
                "rows": [
                  [
                    "全 0",
                    "全 0",
                    "±0",
                    "—"
                  ],
                  [
                    "全 0",
                    "≠ 0",
                    "非正規化數(denormal/subnormal)",
                    "0"
                  ],
                  [
                    "介於兩者之間",
                    "任意",
                    "正規化數(一般的數)",
                    "1"
                  ],
                  [
                    "全 1",
                    "全 0",
                    "±∞ 無限大",
                    "—"
                  ],
                  [
                    "全 1",
                    "≠ 0",
                    "NaN(不是數)",
                    "—"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "「介於兩者之間」= 單精度 1~254、雙精度 1~2046。"
              },
              {
                "kind": "bulletList",
                "items": [
                  "指數全 0 → 最小那一端：尾數 0 → ±0；尾數 ≠ 0 → denormal。",
                  "指數全 1 → 壞掉/超出那一端：尾數 0 → ±∞；尾數 ≠ 0 → NaN。"
                ]
              },
              {
                "kind": "bulletList",
                "items": [
                  "±0：有符號位，所以有 +0 與 −0。兩者相等，但 1÷(+0)=+∞、1÷(−0)=−∞。",
                  "±∞：溢位或除以 0 時出現，例如 1.0 ÷ 0.0 = +∞。",
                  "NaN：無意義運算的結果，例如 0÷0、∞−∞、∞÷∞、√(−1)。NaN ≠ 任何值，連自己都不等於。",
                  "非正規化數：隱藏位元變 0，值 = 0.尾數 × 2^(−126)（單精度），用途是填補 0 與最小正規化數之間的縫隙。",
                  "正規化數：隱藏位元固定為 1，值 = 1.尾數 × 2^(指數−bias)。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "+0  :  0 00000000 00000000000000000000000\n−0  :  1 00000000 00000000000000000000000\n+∞  :  0 11111111 00000000000000000000000\n−∞  :  1 11111111 00000000000000000000000\nNaN :  x 11111111 (尾數任一位為 1)"
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "符號",
                  "指數",
                  "尾數",
                  "bias",
                  "「指數全 1」="
                ],
                "rows": [
                  [
                    "單精度 (32-bit)",
                    "1",
                    "8",
                    "23",
                    "127",
                    "255"
                  ],
                  [
                    "雙精度 (64-bit)",
                    "1",
                    "11",
                    "52",
                    "1023",
                    "2047"
                  ]
                ]
              },
              {
                "kind": "orderedList",
                "items": [
                  "∞ vs NaN：都「指數全 1」，差在尾數；尾數 0 是 ∞、尾數 ≠ 0 是 NaN。",
                  "±0 vs denormal：都「指數全 0」，差在尾數；尾數 0 是 ±0、尾數 ≠ 0 是 denormal。",
                  "NaN ≠ NaN，連自己都不相等。",
                  "隱藏位元：正規化 = 1、非正規化 = 0。"
                ]
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 傳統（一般）浮點表示法　【理解】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "最早的浮點數，就是把一個數拆成三塊存起來："
              },
              {
                "kind": "paragraph",
                "text": "± 尾數（mantissa）× 2^指數（exponent）"
              },
              {
                "kind": "paragraph",
                "text": "存成三個欄位：符號 S｜指數（用超額碼 excess）｜尾數。"
              },
              {
                "kind": "paragraph",
                "text": "和 IEEE 754 比，差在三點（這就是考點）："
              },
              {
                "kind": "table",
                "headers": [
                  "",
                  "傳統（一般）",
                  "IEEE 754"
                ],
                "rows": [
                  [
                    "最高位的 1",
                    "完整存進尾數（不隱藏）",
                    "隱藏，只存小數部分（多賺 1 位精度）"
                  ],
                  [
                    "指數編碼",
                    "超額碼 excess（數值看教材）",
                    "bias：單精度 127、雙精度 1023"
                  ],
                  [
                    "特殊值",
                    "通常沒有",
                    "有 0／非正規／∞／NaN 的保留編碼"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "同一個數、兩種存法（以 10.25 為例）："
              },
              {
                "kind": "bulletList",
                "items": [
                  "正規化（兩種一樣）：10.25 = 1010.01₂ = 1.01001 × 2³。",
                  "傳統：尾數完整存 1.01001（連最高位的 1 一起）；指數一樣用偏移碼，但偏移值依格式而定（8 位指數常見 excess-128 或 127，見下方說明）。",
                  "IEEE 754：尾數隱藏最高位 1、只存 01001，指數用 bias（3 + 127 = 130）。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "各家教材對「傳統表示法」的欄位寬度、正規化形式（1.xxx 或 0.1xxx）、超額值定義略有不同。上面抓的是通用觀念 + 三大差異；若教材有指定格式，需依指定格式重算例題。"
              },
              {
                "kind": "paragraph",
                "text": "偏移值（bias／excess）怎麼來、為什麼 IEEE 用 127？k 位指數欄的偏移值常見兩種：2^(k−1)（8 位 → 128）或 2^(k−1) − 1（8 位 → 127；11 位 → 1023）。IEEE 754 故意取「少 1」的版本（127／1023），是為了把「指數全 0」和「指數全 1」兩個編碼保留給特殊值（0／非正規數、∞／NaN）。所以偏移值不是傳統 vs IEEE 的鐵則差異（兩邊都可能用不同值）——真正穩定的差異是「隱藏位元」（表格第一列）。"
              },
              {
                "kind": "paragraph",
                "text": "下面主力練 IEEE 754（最常考、規則最明確）。"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / IEEE 754 欄位",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "總位元",
                  "Sign",
                  "Exponent",
                  "Fraction",
                  "bias"
                ],
                "rows": [
                  [
                    "單精度",
                    "32 bits",
                    "1 bit",
                    "8 bits",
                    "23 bits",
                    "127"
                  ],
                  [
                    "雙精度",
                    "64 bits",
                    "1 bit",
                    "11 bits",
                    "52 bits",
                    "1023"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "公式："
              },
              {
                "kind": "paragraph",
                "text": "(-1)^S × 1.F × 2^(E − bias)"
              },
              {
                "kind": "table",
                "headers": [
                  "欄位",
                  "中文",
                  "白話"
                ],
                "rows": [
                  [
                    "S",
                    "符號位",
                    "0 正、1 負"
                  ],
                  [
                    "E",
                    "指數欄位",
                    "存的是「實際指數 + bias」"
                  ],
                  [
                    "F",
                    "Fraction / 尾數欄位",
                    "只存小數點右邊，不存最前面的 1"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 完整流程（發送端：算出要傳什麼）",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "判斷正負數：正數 S = 0；負數 S = 1。",
                  "計算數值的二進位。",
                  "正規化成 1.xxxxx × 2^n。",
                  "算 E = n + bias。",
                  "把 (n + bias)₁₀ 轉成二進位（記為 Y）。",
                  "把 1.xxxxx 去掉最高位的 1（記為 Z）。",
                  "把 S、Y、Z 組合，注意 Fraction 的 bits 數。"
                ]
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 正規化",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "把二進位數寫成 1.xxxxx × 2^n："
              },
              {
                "kind": "paragraph",
                "text": "1101.101(2) = 1.101101(2) × 2^3   （小數點往左移 3 位 → 指數 +3）\n0.0101(2)   = 1.01(2)    × 2^-2   （小數點往右移 2 位 → 指數 −2）"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 十進位小數轉二進位",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "整數部分：除以 2，記餘數，最後倒著讀。",
                  "小數部分：乘以 2，取整數，最後順著讀。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "例：13.625(10)"
              },
              {
                "kind": "paragraph",
                "text": "13    = 1101\n0.625 = 0.101\n→ 13.625(10) = 1101.101(2) = 1.101101(2) × 2^3"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 範例：10.25(10) 轉 IEEE 754 單精度",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "符號：10.25 是正數 → S = 0。",
                  "轉二進位：10 = 1010、0.25 = 0.01 → 10.25 = 1010.01(2)。",
                  "正規化：1010.01 = 1.01001 × 2^3 → n = 3。",
                  "Exponent：E = n + bias = 3 + 127 = 130 = 10000010(2)。",
                  "Fraction：1.01001 取小數點右邊 01001，補滿 23 bits → 01001000000000000000000。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "答案："
              },
              {
                "kind": "paragraph",
                "text": "0 10000010 01001000000000000000000   →   0x41240000"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 範例：IEEE 754 反推",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "1 10000001 10000000000000000000000"
              },
              {
                "kind": "paragraph",
                "text": "拆欄位："
              },
              {
                "kind": "paragraph",
                "text": "S = 1\nE = 10000001(2) = 129\nF = 1000000000000000000000\nn = E − bias = 129 − 127 = 2\n1.F = 1.1(2) = 1.5(10)\n→ (-1)^1 × 1.5 × 2^2 = −1 × 1.5 × 4 = −6"
              },
              {
                "kind": "paragraph",
                "text": "答案：−6"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 為什麼 0.1 可能不精確？",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "0.1(10) = 0.0001100110011…(2)   （循環小數）"
              },
              {
                "kind": "paragraph",
                "text": "電腦欄位有限，不能存無限位，只能存近似值 → 不是所有十進位小數都能被二進位浮點數精確表示。"
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 易錯陷阱",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "容易錯的地方",
                  "正確觀念"
                ],
                "rows": [
                  [
                    "Exponent 直接存實際指數 n",
                    "錯，存的是 n + bias"
                  ],
                  [
                    "Fraction 把最前面的 1 也存進去",
                    "錯，正規化的最前面 1 是隱含位元"
                  ],
                  [
                    "小於 1 的數正規化後指數寫正數",
                    "通常錯，小數點往右移時指數是負數"
                  ],
                  [
                    "十進位小數轉二進位用除以 2",
                    "錯，小數部分用乘以 2"
                  ],
                  [
                    "負浮點數用二補數表示",
                    "錯，IEEE 754 用 Sign bit 表示正負"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 國考答題句",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "IEEE 754 正規化數的公式為 (-1)^S × 1.F × 2^(E − bias)。",
                  "單精度共 32 bits：Sign 1、Exponent 8、Fraction 23，bias = 127。",
                  "雙精度共 64 bits：Sign 1、Exponent 11、Fraction 52，bias = 1023。",
                  "Exponent 欄位存的是「實際指數 + bias」，不是直接存實際指數。",
                  "Fraction 只存正規化後小數點右側的位元，最前面的 1 為隱含位元。",
                  "十進位小數轉二進位小數時，使用乘以 2 取整數的方法。",
                  "有些十進位小數轉成二進位會循環，因此浮點數可能只能近似表示。",
                  "IEEE 754 與傳統浮點表示法最大差異：IEEE 754 隱藏正規化後最高位的 1（hidden bit）、只存小數部分；傳統則完整儲存尾數。"
                ]
              }
            ]
          },
          {
            "heading": "16. 浮點數轉換 / 考前速記",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "單精度：1 / 8 / 23，bias = 127\n雙精度：1 / 11 / 52，bias = 1023\n\n轉換流程：\n1. 看正負號，決定 S。\n2. 把絕對值轉成二進位。\n3. 正規化成 1.F × 2^n。\n4. 算 E = n + bias。\n5. Fraction 填 F，不填隱含的 1。\n6. 合併 S、Exponent、Fraction。\n\n反推流程：\n1. 拆 S、E、F。\n2. 算 n = E − bias。\n3. Fraction 前面補回隱含的 1。\n4. 套 (-1)^S × 1.F × 2^n。"
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：−0.75 → IEEE 754 單精度"
              },
              {
                "kind": "paragraph",
                "text": "解：S=1；0.75 = 0.11₂ = 1.1 × 2⁻¹ → n = −1，E = −1+127 = 126 = 01111110，F = 1000…\n→ 1 01111110 10000000000000000000000 = 0xBF400000"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：反推 0 10000000 10000000000000000000000（單精度）"
              },
              {
                "kind": "paragraph",
                "text": "解：E = 128 → n = 1；1.F = 1.1 = 1.5 → +1.5 × 2¹ = 3"
              },
              {
                "kind": "paragraph",
                "text": "練習 3：6.5 → IEEE 754 單精度"
              },
              {
                "kind": "paragraph",
                "text": "解：6.5 = 110.1₂ = 1.101 × 2² → n = 2，E = 2+127 = 129 = 10000001，F = 101…\n→ 0 10000001 10100000000000000000000 = 0x40D00000"
              },
              {
                "kind": "paragraph",
                "text": "練習 4：−0.0625 → IEEE 754 單精度（負指數）"
              },
              {
                "kind": "paragraph",
                "text": "解：0.0625 = 1/16 = 0.0001₂ = 1.0 × 2⁻⁴ → n = −4，E = −4+127 = 123 = 01111011，F = 全 0\n→ 1 01111011 00000000000000000000000 = 0xBD800000"
              },
              {
                "kind": "paragraph",
                "text": "練習 5：反推 0 01111101 00000000000000000000000（單精度）"
              },
              {
                "kind": "paragraph",
                "text": "解：E = 01111101₂ = 125 → n = 125−127 = −2；1.F = 1.0 → +1.0 × 2⁻² = 0.25"
              },
              {
                "kind": "paragraph",
                "text": "練習 6（兩種表示法對照）：把 −3.5 正規化，分別寫出 IEEE 754 與「傳統（不隱藏）」的尾數。"
              },
              {
                "kind": "paragraph",
                "text": "解：3.5 = 11.1₂ = 1.11 × 2¹，S = 1，n = 1。\nIEEE 754：隱藏最高位 → 尾數欄 11000…；E = 1+127 = 128 = 10000000 → 1 10000000 11000000000000000000000。\n傳統（不隱藏）：尾數完整存 1.11（即 111…，連開頭的 1 一起）。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-codes-and-character-sets",
    "subjectKey": "computerPrinciplesV2",
    "title": "數碼與文字碼",
    "summary": "整理BCD、Gray、ASCII/Unicode/UTF-8。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/11_數碼與文字碼.md"
    ],
    "sourceSummary": "基本計概(v2) / 數碼與文字碼",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "concept",
    "terms": [
      {
        "zh": "二進碼十進數",
        "en": "Binary-Coded Decimal, BCD"
      },
      {
        "zh": "格雷碼",
        "en": "Gray Code"
      },
      {
        "zh": "ASCII",
        "en": "ASCII"
      },
      {
        "zh": "Unicode",
        "en": "Unicode"
      },
      {
        "zh": "UTF-8",
        "en": "UTF-8"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/11_數碼與文字碼.md"
        ],
        "sourceSection": "基本計概(v2) / 數碼與文字碼",
        "lead": [
          "數值與編碼。BCD、Gray Code、ASCII／Unicode／UTF-8。"
        ],
        "sections": [
          {
            "heading": "定義",
            "blocks": [
              {
                "kind": "bulletList",
                "items": [
                  "數碼：用 bits 表示數字，例如 BCD、Gray Code。",
                  "文字碼：用編號表示文字，例如 ASCII、EBCDIC、Unicode、UTF-8。",
                  "檢查碼：額外加檢查資訊，用來偵測或更正錯誤，例如 Parity、CRC、Hamming Code。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "先背一句：數碼管數字，文字碼管文字，檢查碼管有沒有錯。"
              }
            ]
          },
          {
            "heading": "常見碼表（總覽）",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "類別",
                  "名稱",
                  "國考關鍵字"
                ],
                "rows": [
                  [
                    "數碼",
                    "BCD",
                    "一個十進位數字用 4 bits"
                  ],
                  [
                    "數碼",
                    "Gray Code",
                    "相鄰碼只差 1 bit"
                  ],
                  [
                    "文字碼",
                    "ASCII",
                    "標準 7 bits，128 種"
                  ],
                  [
                    "文字碼",
                    "EBCDIC",
                    "IBM、大型主機"
                  ],
                  [
                    "文字碼",
                    "Unicode",
                    "統一多語言文字的碼位"
                  ],
                  [
                    "文字碼",
                    "UTF-8",
                    "Unicode 的可變長度編碼，1 到 4 bytes"
                  ],
                  [
                    "檢查碼",
                    "Parity Check",
                    "奇同位、偶同位，偵測奇數個 bit 錯"
                  ],
                  [
                    "檢查碼",
                    "CRC",
                    "產生多項式、模 2 除法、餘數"
                  ],
                  [
                    "檢查碼",
                    "Hamming Code",
                    "檢查位、syndrome、更正 1 bit 錯"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "BCD",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "BCD（Binary-Coded Decimal）：用二進位編每一個十進位數字。",
                  "最常見是 8421 BCD：4 個 bit 權重 = 8、4、2、1。",
                  "BCD 有效範圍：0000 到 1001。",
                  "針對每一個十進位數字分別拆分、組合。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "例：(259)₁₀ 轉 8421 BCD"
              },
              {
                "kind": "paragraph",
                "text": "2 = 0010\n5 = 0101\n9 = 1001\n→ 259 的 8421 BCD = 0010 0101 1001"
              }
            ]
          },
          {
            "heading": "Gray Code",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "特色：相鄰兩個碼只差 1 個 bit。用途：位置偵測、旋轉編碼器、減少狀態切換時讀錯的機率。"
              },
              {
                "kind": "paragraph",
                "text": "Binary 轉 Gray\n規則：① 最高位不變；② 其餘 Gray 位元 = 左邊 binary XOR 目前 binary（XOR 表示相異才為 true）。"
              },
              {
                "kind": "paragraph",
                "text": "Binary：1 0 1 1\nGray：  1 (1⊕0) (0⊕1) (1⊕1) = 1 1 1 0\n→ Binary 1011 = Gray 1110"
              },
              {
                "kind": "paragraph",
                "text": "Gray 轉 Binary\n規則：① 最高位不變；② 其餘 Binary 位元 = 前一個已求出的 Binary XOR 目前 Gray。"
              },
              {
                "kind": "paragraph",
                "text": "Gray：  1 1 1 0\nBinary：1\n下一位：1⊕1 = 0\n下一位：0⊕1 = 1\n下一位：1⊕0 = 1\n→ Gray 1110 = Binary 1011"
              }
            ]
          },
          {
            "heading": "文字碼",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "名稱",
                  "重點",
                  "新手提醒"
                ],
                "rows": [
                  [
                    "ASCII",
                    "標準 7 bits，可表示 128 種編號",
                    "英文、數字、控制字元常見"
                  ],
                  [
                    "Extended ASCII",
                    "常見 8 bits，可有 256 種編號",
                    "128 到 255 不一定全球一致"
                  ],
                  [
                    "EBCDIC",
                    "8 bits，IBM 系統常見字元碼",
                    "看到 IBM／大型主機想到它"
                  ],
                  [
                    "Unicode",
                    "統一多語言字元的碼位系統",
                    "是字元集／碼位，不是單一儲存格式"
                  ],
                  [
                    "UTF-8",
                    "Unicode 的常見可變長度編碼",
                    "英文常 1 byte，其他文字可能 2 到 4 bytes"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "備註："
              },
              {
                "kind": "orderedList",
                "items": [
                  "Unicode 是「字元編號」。",
                  "UTF-8 是「把 Unicode 編號存成 bytes 的方式」。",
                  "UTF-8 相容 ASCII；ASCII 裡的 0~127，在 UTF-8 裡仍用 1 byte 表示，且編碼值相同。"
                ]
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1：(47)₁₀ → 8421 BCD"
              },
              {
                "kind": "paragraph",
                "text": "解：4 = 0100、7 = 0111 → 0100 0111"
              },
              {
                "kind": "paragraph",
                "text": "練習 2：Binary 1101 → Gray"
              },
              {
                "kind": "paragraph",
                "text": "解：1、1⊕1=0、1⊕0=1、0⊕1=1 → 1011"
              },
              {
                "kind": "paragraph",
                "text": "練習 3：Gray 1011 → Binary"
              },
              {
                "kind": "paragraph",
                "text": "解：1、1⊕0=1、1⊕1=0、0⊕1=1 → 1101"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-parity-crc",
    "subjectKey": "computerPrinciplesV2",
    "title": "檢查碼（一）Parity 與 CRC",
    "summary": "整理同位檢查、CRC 模 2 除法。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/12_檢查碼-Parity與CRC.md"
    ],
    "sourceSummary": "基本計概(v2) / 檢查碼（一）Parity 與 CRC",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "同位元檢查",
        "en": "Parity Check"
      },
      {
        "zh": "循環冗餘檢查",
        "en": "Cyclic Redundancy Check, CRC"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/12_檢查碼-Parity與CRC.md"
        ],
        "sourceSection": "基本計概(v2) / 檢查碼（一）Parity 與 CRC",
        "lead": [
          "數值與編碼（計算題）。"
        ],
        "sections": [
          {
            "heading": "Parity Check（同位元檢查）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "加一個檢查位元，讓 1 的總數符合規則；檢查位元位置由發送方與接收方協調好即可。"
              },
              {
                "kind": "table",
                "headers": [
                  "類型",
                  "規則"
                ],
                "rows": [
                  [
                    "偶同位（Even Parity）",
                    "加上檢查位後，1 的總數為偶數"
                  ],
                  [
                    "奇同位（Odd Parity）",
                    "加上檢查位後，1 的總數為奇數"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "奇同位、偶同位，也可譯成奇校驗、偶校驗。"
              }
            ]
          },
          {
            "heading": "CRC",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "CRC（Cyclic Redundancy Check，循環冗餘檢查） 常用在網路傳輸與儲存裝置，主要用來偵測錯誤，不是用來更正。",
                  "傳送資料前，先依資料算出一串「檢查位元」附加在資料後面一起傳送；接收端再重算一次，看結果是否正確。",
                  "算法：",
                  "看生成多項式長度（ex. 1011）。",
                  "CRC 位數 = 生成多項式長度 − 1。",
                  "原資料後面補相同數量的 0。",
                  "用生成多項式做模 2 除法（不進位、不借位，減法等於 XOR）。",
                  "最後餘數就是 CRC。",
                  "原資料 + CRC = 實際傳送資料。",
                  "接收端再除一次，餘數為 0 表示通過。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "手把手例題　【練流程】\n題：資料 1101011011，生成多項式 10011（5 bits → CRC 4 bits）。求 CRC 與傳送資料。"
              },
              {
                "kind": "paragraph",
                "text": "資料後補 4 個 0 → D = 11010110110000，除數 G = 10011\n（每次把 G 對齊「目前最左的 1」做 XOR）\n\n11010110110000\n10011\n──────────────\n01001110110000     11010 ⊕ 10011 = 01001\n 10011\n──────────────\n00000010110000     10011 ⊕ 10011 = 00000\n      10011\n──────────────\n00000000101000     10110 ⊕ 10011 = 00101\n        10011\n──────────────\n00000000001110     10100 ⊕ 10011 = 00111\n                   （剩 1110 不足 5 位 → 停）\n\n餘數 = CRC = 1110\n傳送資料 = 1101011011 + 1110 = 11010110111110\n接收端：11010110111110 ÷ 10011 → 餘數 0 → 無錯"
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習：資料 1010，生成多項式 1011（CRC 3 bits）。求 CRC 與傳送資料。"
              },
              {
                "kind": "paragraph",
                "text": "解：補 3 個 0 → 1010000，÷ 1011：\n```text\n1010000\n1011\n────\n0001000 1010 ⊕ 1011 = 0001\n1011\n────\n0000011 1000 ⊕ 1011 = 0011 → 餘 011\n```\nCRC = 011，傳送 = 1010 011 = 1010011（接收端再除餘 0）"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cpv2-hamming-code-distance",
    "subjectKey": "computerPrinciplesV2",
    "title": "檢查碼（二）漢明碼與漢明距",
    "summary": "整理Hamming 編碼/解碼、漢明距。",
    "sourceBatch": "computer-principles-v2-route",
    "sourceFiles": [
      "_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md"
    ],
    "sourceSummary": "基本計概(v2) / 檢查碼（二）漢明碼與漢明距",
    "examOutline": [],
    "memoryPoints": [],
    "understandingNotes": [],
    "difficulty": "core",
    "topicType": "procedure",
    "terms": [
      {
        "zh": "漢明碼",
        "en": "Hamming Code"
      },
      {
        "zh": "症候值",
        "en": "Syndrome"
      },
      {
        "zh": "漢明距",
        "en": "Hamming Distance"
      }
    ],
    "blocks": [
      {
        "kind": "lessonArticle",
        "sourceFiles": [
          "_private/MD/計算機概論/13_檢查碼-漢明碼與漢明距.md"
        ],
        "sourceSection": "基本計概(v2) / 檢查碼（二）漢明碼與漢明距",
        "lead": [
          "數值與編碼（計算題）。文末的「常見陷阱／國考答題句／考前速記」是整個數碼+檢查碼大區的總整理。"
        ],
        "sections": [
          {
            "heading": "Hamming Code（漢明碼）",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "用多個「校驗位（檢查位）」來定位錯誤。",
                  "校驗位 = 額外加的檢查位元；要先決定是奇校驗還是偶校驗。",
                  "編碼步驟（發送端）："
                ]
              },
              {
                "kind": "bulletList",
                "items": [
                  "3-1. 算需要幾個校驗位 r：2^r ≥ m + r + 1（m = 資料位數）。",
                  "3-2. 排位置（編號從左到右、從 1 開始）：第 1, 2, 4, 8…（2 的次方）位放校驗位 P1, P2, P4…；其餘位置依序填原始資料。",
                  "Hamming(7,4)：7 個總位元、4 個資料位元、3 個檢查位元。例：原始 1011"
                ]
              },
              {
                "kind": "paragraph",
                "text": "位置:      1   2   3   4   5   6   7\n       位置2進制: 001 010 011 100 101 110 111\n       內容:      P1  P2  1   P4  0   1   1\n       （資料 1-0-1-1 填進位置 3,5,6,7）"
              },
              {
                "kind": "bulletList",
                "items": [
                  "3-3. 算每個校驗位：",
                  "P1 檢查「位置編號二進位最右邊（個位）是 1」的位置 → 1/3/5/7。",
                  "P2 檢查「位置編號二進位最中間是 1」的位置 → 2/3/6/7。",
                  "P4 檢查「位置編號二進位最左邊是 1」的位置 → 4/5/6/7。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "【修正】原筆記此行寫「最右邊是 1」，與其後的範例位置 4/5/6/7 矛盾（4/5/6/7 對應的是最左邊那一位 = 1）。P4 應為最左邊，已更正。"
              },
              {
                "kind": "bulletList",
                "items": [
                  "3-4. 驗證：把漢明碼重新檢查 P1、P2、P4 負責的範圍是否符合校驗。當資料位元出錯時，可透過校驗位找出錯誤位置，把那一個 bit 反轉回來，即可恢復原資料。"
                ]
              },
              {
                "kind": "paragraph",
                "text": "Syndrome（症候值／校驗子）："
              },
              {
                "kind": "paragraph",
                "text": "收到漢明碼 → 重新檢查 P1、P2、P4 的範圍\n→ 檢查通過記 0，失敗記 1 → 得到 S1、S2、S4\n→ 組成 S4 S2 S1 → 轉成十進位，就是錯誤位置"
              }
            ]
          },
          {
            "heading": "手把手例題（Hamming(7,4)，偶校驗）　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "編碼：把資料 1011 編成漢明碼。"
              },
              {
                "kind": "paragraph",
                "text": "位置：  1   2   3   4   5   6   7\n內容：  P1  P2  1   P4  0   1   1     （資料 1,0,1,1 填入位置 3,5,6,7）\nP1(1,3,5,7)：1 ⊕ 0 ⊕ 1 = 0 → P1 = 0\nP2(2,3,6,7)：1 ⊕ 1 ⊕ 1 = 1 → P2 = 1\nP4(4,5,6,7)：0 ⊕ 1 ⊕ 1 = 0 → P4 = 0\n→ 漢明碼 = 0110011"
              },
              {
                "kind": "paragraph",
                "text": "解碼除錯：收到 0110111（第 5 位被改了）。"
              },
              {
                "kind": "paragraph",
                "text": "S1(1,3,5,7)：0 ⊕ 1 ⊕ 1 ⊕ 1 = 1\nS2(2,3,6,7)：1 ⊕ 1 ⊕ 1 ⊕ 1 = 0\nS4(4,5,6,7)：0 ⊕ 1 ⊕ 1 ⊕ 1 = 1\nSyndrome = S4 S2 S1 = 101 = 5 → 第 5 位錯\n把第 5 位反轉回來 → 0110011（還原成功）"
              }
            ]
          },
          {
            "heading": "漢明距（必背）",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "漢明距（Hamming Distance）：兩個碼字不同 bit 的數量（兩組資料中不一樣的位置有幾個）。"
              },
              {
                "kind": "table",
                "headers": [
                  "需求",
                  "最小漢明距"
                ],
                "rows": [
                  [
                    "偵測 d 個錯誤",
                    "Dmin ≥ d + 1"
                  ],
                  [
                    "更正 t 個錯誤",
                    "Dmin ≥ 2t + 1"
                  ],
                  [
                    "已知 Dmin，最多偵測",
                    "Dmin − 1"
                  ],
                  [
                    "已知 Dmin，最多更正",
                    "floor((Dmin − 1) / 2)"
                  ]
                ]
              },
              {
                "kind": "paragraph",
                "text": "手把手例題：碼字 10110 與 11100 的漢明距？"
              },
              {
                "kind": "paragraph",
                "text": "10110\n11100\n位置 2、4 不同 → 漢明距 = 2"
              },
              {
                "kind": "paragraph",
                "text": "應用：若某碼集 Dmin = 3 → 可偵測 3 − 1 = 2 個錯、更正 floor((3−1)/2) = 1 個錯。"
              }
            ]
          },
          {
            "heading": "常見陷阱",
            "blocks": [
              {
                "kind": "table",
                "headers": [
                  "容易錯的地方",
                  "正確觀念"
                ],
                "rows": [
                  [
                    "BCD 是把整個十進位數轉二進位",
                    "錯，BCD 是每個十進位數字分開編"
                  ],
                  [
                    "1010 是有效 BCD",
                    "錯，單一 BCD 只允許 0000 到 1001"
                  ],
                  [
                    "Binary 轉 Gray 和 Gray 轉 Binary 用同一規則",
                    "錯，兩個方向規則不同"
                  ],
                  [
                    "Unicode 和 UTF-8 是同一件事",
                    "錯，Unicode 是碼位，UTF-8 是編碼方式"
                  ],
                  [
                    "Parity 可以更正錯誤",
                    "通常錯，Parity 多半只能偵測"
                  ],
                  [
                    "CRC 是錯誤更正碼",
                    "國考通常視為錯誤偵測碼"
                  ],
                  [
                    "偵測 d 個錯誤需要 2d + 1",
                    "錯，那是更正常見公式的型態"
                  ]
                ]
              }
            ]
          },
          {
            "heading": "國考答題句",
            "blocks": [
              {
                "kind": "orderedList",
                "items": [
                  "BCD 是用 4 bits 表示一個十進位數字；8421 BCD 的權重為 8、4、2、1。",
                  "Gray Code 的特色是相鄰碼只差 1 bit，可減少狀態轉換時的讀取錯誤。",
                  "二進位轉 Gray 時最高位不變，其餘位元為相鄰二進位位元 XOR。",
                  "Gray 轉二進位時最高位不變，其餘位元為前一個二進位位元 XOR 目前 Gray 位元。",
                  "標準 ASCII 為 7 bits，可表示 128 種編號；延伸 ASCII 常為 8 bits。",
                  "EBCDIC 是 IBM 系統常見的字元編碼。",
                  "Unicode 用於統一表示多語言字元；UTF-8 是 Unicode 的常見可變長度編碼方式。",
                  "同位元檢查可偵測奇數個 bit 錯誤，但通常不能定位或更正錯誤。",
                  "CRC 透過產生多項式做模 2 除法取得餘數，常用於錯誤偵測。",
                  "漢明碼的檢查位通常放在 1、2、4、8 等 2 的冪次位置。",
                  "偵測 d 個錯誤需要最小漢明距至少 d + 1；更正 t 個錯誤需要最小漢明距至少 2t + 1。"
                ]
              }
            ]
          },
          {
            "heading": "考前速記",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "BCD：一個十進位數字用 4 bits。\nGray：相鄰只差 1 bit。\nASCII：標準 7 bits。\nEBCDIC：IBM、大型主機。\nUnicode：統一多語言碼位。\nUTF-8：Unicode 的可變長度編碼。\nParity：奇偶檢查，能偵測奇數個 bit 錯。\nCRC：模 2 除法，餘數當檢查碼。\nHamming：檢查位在 1、2、4、8。\n漢明距：偵測 d 要 d+1，更正 t 要 2t+1。"
              }
            ]
          },
          {
            "heading": "加強練習　【練流程】",
            "blocks": [
              {
                "kind": "paragraph",
                "text": "練習 1（編碼）：資料 1100"
              },
              {
                "kind": "paragraph",
                "text": "解：位置 3,5,6,7 = 1,1,0,0\nP1(1,3,5,7) = 1⊕1⊕0 = 0；P2(2,3,6,7) = 1⊕0⊕0 = 1；P4(4,5,6,7) = 1⊕0⊕0 = 1\n→ 漢明碼 = 0111100"
              },
              {
                "kind": "paragraph",
                "text": "練習 2（解碼）：收到 0010011，找錯誤位置"
              },
              {
                "kind": "paragraph",
                "text": "解：S1(1,3,5,7) = 0⊕1⊕0⊕1 = 0；S2(2,3,6,7) = 0⊕1⊕1⊕1 = 1；S4(4,5,6,7) = 0⊕0⊕1⊕1 = 0\nSyndrome = S4S2S1 = 010 = 第 2 位錯 → 反轉回 0110011"
              },
              {
                "kind": "paragraph",
                "text": "練習 3：碼集 {000, 011, 101, 110} 的 Dmin？能偵測／更正幾個錯？"
              },
              {
                "kind": "paragraph",
                "text": "解：兩兩距離都是 2 → Dmin = 2；可偵測 2−1 = 1 個、更正 floor((2−1)/2) = 0 個"
              },
              {
                "kind": "paragraph",
                "text": "練習 4：1011001 與 1110100 的漢明距？"
              },
              {
                "kind": "paragraph",
                "text": "解：位置 2、4、5、7 不同 → 4"
              }
            ]
          }
        ]
      }
    ]
  }
];
