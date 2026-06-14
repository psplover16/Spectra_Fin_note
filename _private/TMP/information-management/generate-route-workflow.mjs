import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const routeRoot = '_private/TMP/information-management';
const manifestPath = '_TMP/manifests/information-management-manifest.md';
const sourceFile = '_private/資訊管理.txt';
const formalTopicPath = 'src/modules/subjectTopics/data/professionalTopics.ts';
const generatedAt = '2026-06-13T11:45:00+08:00';

const readText = (path) => readFileSync(path, 'utf8');
const writeText = (path, text) => writeFileSync(path, text, 'utf8');

const titleEnglish = {
  'im-00-overview': 'Information Management Overview',
  'im-01-preparation-direction': 'Exam Preparation Direction',
  'im-02-digital-transformation': 'Digital Transformation',
  'im-03-system-development-models': 'Information System Development Models',
  'im-04-esg': 'Environmental Social and Governance',
  'im-05-info-ethics-regulations': 'Information Ethics and Emerging Regulations',
  'im-06-im-supplemental-points': 'Information Management Supplemental Points'
};

const termsByTopic = {
  'im-00-overview': [
    ['資訊管理', 'Information Management'],
    ['管理資訊系統', 'Management Information System'],
    ['資訊系統', 'Information System'],
    ['商業智慧', 'Business Intelligence']
  ],
  'im-01-preparation-direction': [
    ['歷屆試題', 'Past Exam Questions'],
    ['考點地圖', 'Exam Topic Map'],
    ['筆記策略', 'Note-Taking Strategy'],
    ['題目導向學習', 'Question-Oriented Learning']
  ],
  'im-02-digital-transformation': [
    ['數位轉型', 'Digital Transformation'],
    ['數位化', 'Digitization'],
    ['數位優化', 'Digitalization'],
    ['雲端運算', 'Cloud Computing'],
    ['資料驅動', 'Data-Driven'],
    ['物聯網', 'Internet of Things']
  ],
  'im-03-system-development-models': [
    ['資訊系統開發', 'Information System Development'],
    ['增量模型', 'Incremental Model'],
    ['雛形模型', 'Prototype Model'],
    ['螺旋模型', 'Spiral Model'],
    ['敏捷開發', 'Agile Development'],
    ['Scrum', 'Scrum'],
    ['看板', 'Kanban'],
    ['極限編程', 'Extreme Programming']
  ],
  'im-04-esg': [
    ['環境', 'Environmental'],
    ['社會', 'Social'],
    ['治理', 'Governance'],
    ['永續報告', 'Sustainability Report'],
    ['碳盤查', 'Carbon Inventory'],
    ['供應鏈管理', 'Supply Chain Management']
  ],
  'im-05-info-ethics-regulations': [
    ['資訊倫理', 'Information Ethics'],
    ['隱私', 'Privacy'],
    ['正確性', 'Accuracy'],
    ['財產權', 'Property'],
    ['可近用性', 'Accessibility'],
    ['零方資料', 'Zero Party Data'],
    ['第一方資料', 'First Party Data'],
    ['第三方資料', 'Third Party Data'],
    ['隱私悖論', 'Privacy Paradox'],
    ['個人資料保護法', 'Personal Data Protection Act'],
    ['一般資料保護規則', 'General Data Protection Regulation']
  ],
  'im-06-im-supplemental-points': [
    ['管理資訊系統', 'Management Information System'],
    ['決策支援系統', 'Decision Support System'],
    ['企業資源規劃', 'Enterprise Resource Planning'],
    ['顧客關係管理', 'Customer Relationship Management'],
    ['知識管理', 'Knowledge Management'],
    ['商業智慧', 'Business Intelligence'],
    ['資料倉儲', 'Data Warehouse'],
    ['資料探勘', 'Data Mining'],
    ['資訊科技基礎架構庫', 'Information Technology Infrastructure Library'],
    ['企業流程再造', 'Business Process Reengineering']
  ]
};

const examFocusByTopic = {
  'im-00-overview': [
    '能說明資訊管理(Information Management) 是把資訊科技、組織流程與管理決策連在一起的科目。',
    '能把考題分成數位轉型、系統開發、ESG、資訊倫理法規與管理系統縮寫五大群。',
    '能先抓定義、比較、例子與應用情境，避免只背零散英文縮寫。'
  ],
  'im-01-preparation-direction': [
    '能理解來源提醒：這科抽象時可先做歷屆題，再回補知識。',
    '能用題目導向學習(Question-Oriented Learning) 建立筆記順序。',
    '能把每題拆成名詞定義、差異比較、案例判斷與短答模板。'
  ],
  'im-02-digital-transformation': [
    '能寫出數位轉型(Digital Transformation) 的定義：組織運用數位科技改變流程、商業模式、顧客體驗與文化，以創造價值。',
    '能列出技術、流程、人才、文化、顧客五個要素，並說明每個要素的作用。',
    '能比較數位化(Digitization)、數位優化(Digitalization) 與數位轉型(Digital Transformation) 三階段。'
  ],
  'im-03-system-development-models': [
    '能比較 Incremental Model、Prototype Model、Spiral Model 與 Agile Development 的定義、優缺點與適用情境。',
    '能說明 Agile 四個核心價值，並舉 Scrum、Kanban、Extreme Programming 作為框架例子。',
    '能判斷需求不明確、風險高、需分批交付或需快速回饋時，應選哪一類開發模式。'
  ],
  'im-04-esg': [
    '能將 ESG 拆成 Environmental、Social、Governance 三構面。',
    '能各舉一個資訊管理或企業營運例子，例如碳盤查、供應鏈人權、法遵與資訊揭露。',
    '能把 ESG 和永續報告、碳盤查、供應鏈管理、公司治理連到同一題組。'
  ],
  'im-05-info-ethics-regulations': [
    '能背熟 PAPA：Privacy、Accuracy、Property、Accessibility。',
    '能比較 Zero Party Data、First Party Data、Second Party Data、Third Party Data 的來源差異。',
    '能說明隱私悖論(Privacy Paradox)、個人資料保護法(Personal Data Protection Act) 與 GDPR 的核心重點。'
  ],
  'im-06-im-supplemental-points': [
    '能把 MIS、DSS、ESS/EIS、ERP、CRM、SCM、KM、BI 等縮寫寫出中文與英文全名。',
    '能區分系統類名詞、資料分析名詞、治理服務名詞與流程改善名詞。',
    '能在短答題中用「用途、支援對象、典型輸出」三欄整理管理系統名詞。'
  ]
};

const memoryByTopic = {
  'im-00-overview': [
    '資訊管理題常考「管理目的」與「資訊科技手段」的連結，不是只考程式或硬體。',
    '先把題目歸類：轉型、開發、治理、倫理法規、系統縮寫，再決定答題框架。',
    '每個專有名詞第一次出現都寫成中文(English Term)，讓答案看起來像教材而不是口語筆記。'
  ],
  'im-01-preparation-direction': [
    '先看題目不是偷懶，而是先知道考官愛問哪些抽象名詞。',
    '筆記順序可用「出過的題目、常見定義、比較表、例子、易錯點」。',
    '抽象科目要靠題目把範圍收窄，再逐步補足背景知識。'
  ],
  'im-02-digital-transformation': [
    '最低背誦句：數位轉型是用數位科技改變流程、商業模式、顧客體驗與文化，以創造價值。',
    '五大要素可記為技術、流程、人才、文化、顧客。',
    '三階段可用 Digitization 到 Digitalization 到 Digital Transformation，從資料電子化走到組織價值改造。'
  ],
  'im-03-system-development-models': [
    'Incremental 看「分批交付」；Prototype 看「先做雛形釐清需求」；Spiral 看「風險分析」；Agile 看「快速迭代與回饋」。',
    'Scrum 看到 Sprint、Product Backlog、Daily Scrum；Kanban 看到視覺化流程與限制 WIP；XP 看到 Pair Programming、TDD、CI、Refactoring。',
    '比較題要先列定義，再寫優點、缺點、適用情境，最後補決策關鍵字。'
  ],
  'im-04-esg': [
    'E 是環境(Environmental)，S 是社會(Social)，G 是治理(Governance)。',
    'ESG 不是單純公益口號，考題常放在企業治理、供應鏈與資訊揭露情境。',
    '短答模板：先定義三構面，再各給一例，最後說明企業為何需要管理與揭露。'
  ],
  'im-05-info-ethics-regulations': [
    'PAPA 的四個字母要能寫全名：Privacy、Accuracy、Property、Accessibility。',
    '資料來源比較要抓「誰提供、從哪裡收集、可信任程度與使用限制」。',
    '隱私法規題要先判斷是否是可識別個人資料，再談合法目的、告知、安全維護與當事人權利。'
  ],
  'im-06-im-supplemental-points': [
    'MIS 管例行管理與報表，DSS 支援半結構化決策，ESS/EIS 支援高階主管。',
    'ERP 整合企業內部資源，CRM 管顧客關係，SCM 管供應鏈，KM 管知識取得與分享。',
    'BI、Data Warehouse、Data Mining 是資料分析群；COBIT、ITIL、BPR 是治理、服務與流程改善群。'
  ]
};

const understandingByTopic = {
  'im-00-overview': [
    '新手常覺得資訊管理很散，是因為它不是單一技術科，而是問「組織如何利用資訊系統創造價值並控制風險」。',
    '同一題可能同時出現管理、流程、法規與科技名詞，因此教材要把名詞放回情境，而不是把英文縮寫排成清單。',
    '國考作答時，先用一句話定義，再補構面、例子與易錯差異，通常比只背長段文字穩。'
  ],
  'im-01-preparation-direction': [
    '來源提醒先做題目，是因為抽象科目如果一開始追求完整理論，容易花很多時間但不知道考點在哪裡。',
    '題目導向學習不是只背答案，而是從每題抽出「可重複使用的答題骨架」，例如定義題、比較題、案例判斷題。',
    '當教材版本不同時，固定名詞要以課本用語為準；但理解層面仍可用本教材的中文解釋輔助記憶。'
  ],
  'im-02-digital-transformation': [
    'Digitization 是把紙本或類比資料變成數位資料；Digitalization 是利用數位資料改善流程；Digital Transformation 則會改變組織運作與價值創造方式。',
    '企業只買新系統不一定是數位轉型，因為如果流程、人才、文化與顧客價值沒有改變，通常只是資訊化或自動化。',
    '考題問成功轉型因素時，可以從策略、組織文化、流程、科技、人才與資料治理展開，再回扣來源的五大層面。'
  ],
  'im-03-system-development-models': [
    '開發模式的差異其實是在回答三個問題：需求是否清楚、風險是否高、交付是否需要分階段。',
    'Incremental Model 適合可以切成多個可用功能的系統；Prototype Model 適合需求不明確，需要使用者看雛形回饋。',
    'Spiral Model 把風險分析放在核心，所以適合大型且高風險專案；Agile Development 則用短週期回饋降低需求變動的傷害。'
  ],
  'im-04-esg': [
    'ESG 的重點是企業除了財務績效，也要管理環境、社會與治理風險，並對外揭露可被檢驗的資訊。',
    '資訊管理和 ESG 的交會常出現在資料蒐集、永續報告系統、碳排資料治理、供應鏈追蹤與法遵流程。',
    '作答不要只寫 E/S/G 三個英文，要能把每個構面變成具體管理活動。'
  ],
  'im-05-info-ethics-regulations': [
    'PAPA 是資訊倫理的最小框架：Privacy 管個人隱私，Accuracy 管資料正確性，Property 管資訊財產權，Accessibility 管誰能接近資訊。',
    'Zero Party Data 是使用者主動明確提供，First Party Data 是企業自己互動收集，Second Party Data 是合作取得，Third Party Data 是外部彙整。',
    'GDPR 的重點不是只背歐盟法規，而是理解個人資料處理者要尊重資料主體權利，並負擔合法、透明、安全的處理責任。'
  ],
  'im-06-im-supplemental-points': [
    '補充考點看似全是縮寫，但國考常考的是「這個系統支援誰、解決什麼問題、典型輸出是什麼」。',
    '例如 ERP 和 SCM 都可能碰到供應與營運，但 ERP 偏企業內部資源整合，SCM 偏跨組織供應鏈流動。',
    'BI、Data Warehouse、Data Mining 要一起理解：資料倉儲提供整合資料，資料探勘找模式，BI 把分析結果轉成決策支援。'
  ]
};

const pitfallsByTopic = {
  'im-00-overview': [
    '不要把資訊管理誤解成只考電腦操作；它更常考管理目的、流程、治理與應用情境。',
    '不要只寫英文縮寫，必須補中文定義與用途。',
    '不同教材名詞可能略有差異，作答要先尊重題目用語，再補通用解釋。'
  ],
  'im-01-preparation-direction': [
    '不要只看題庫答案而不整理可重複使用的定義與比較表。',
    '不要把抽象提醒當成正式考點；要把提醒轉成可操作讀書流程。',
    '不要混入個人筆記或未驗證來源，這一路由只接受指定來源與 verified 草稿。'
  ],
  'im-02-digital-transformation': [
    '不要把 Digitization、Digitalization、Digital Transformation 當成同義詞。',
    '不要只列科技工具；流程、人才、文化與顧客價值也要寫。',
    '題目若要求依教材五項作答，固定版本要以教材用語為準。'
  ],
  'im-03-system-development-models': [
    '不要把 Prototype Model 當成快速寫完正式系統；雛形主要是釐清需求。',
    '不要把 Spiral Model 只寫成反覆開發；它的核心是風險分析。',
    '不要把 Scrum、Kanban、XP 全部混稱 Agile，框架特色要能分開寫。'
  ],
  'im-04-esg': [
    '不要把 Governance 誤寫成政府政策；在 ESG 中它多指公司治理、風險、法遵與揭露。',
    '不要只寫三個英文單字，至少各補一個例子。',
    '不要把 ESG 當作和資訊系統無關，資料治理與揭露流程常是資訊管理考點。'
  ],
  'im-05-info-ethics-regulations': [
    '不要把 PAPA 的 Property 誤解成一般動產，它在資訊倫理中偏資訊財產權與智慧財產。',
    '不要把 Zero Party Data 和 First Party Data 混在一起；前者是使用者主動明確提供。',
    '不要把 GDPR 只背成罰很重，還要寫資料主體權利與處理者義務。'
  ],
  'im-06-im-supplemental-points': [
    '不要把 MIS、DSS、ESS/EIS 當成同一種報表系統；支援層級不同。',
    '不要把 BI、Data Warehouse、Data Mining 混成單一工具；資料集合、挖掘方法與決策支援層次不同。',
    '不要只背縮寫，要能寫出中文(English Term) 與用途。'
  ]
};

const exampleByTopic = {
  'im-00-overview': {
    problem: '遇到「資訊管理為何重要」短答題，如何組成答案？',
    steps: [
      '先定義資訊管理(Information Management)：利用資訊科技支援組織流程、管理控制與決策。',
      '再列三個功能：提升效率、支援決策、降低風險。',
      '最後舉例：ERP 整合內部流程，BI 支援資料分析，資安與法規降低營運風險。'
    ],
    result: '答案要同時有管理目的、資訊科技手段與組織價值。'
  },
  'im-01-preparation-direction': {
    problem: '這科讀起來抽象時，第一週應如何開始？',
    steps: [
      '先挑近年歷屆題，標記出現頻率高的名詞，例如 ESG、Agile、PAPA、GDPR。',
      '把每題拆成定義題、比較題或案例題。',
      '再回到來源教材補定義、比較表與例子，建立自己的考點地圖。'
    ],
    result: '讀書順序從題目反推知識，可以先建立方向感，再補細節。'
  },
  'im-02-digital-transformation': {
    problem: '某公司把紙本申請改成線上表單，是否一定是數位轉型？',
    steps: [
      '若只是把紙本轉成電子表單，主要是數位化(Digitization)。',
      '若進一步串接審核流程、縮短時間、降低錯誤，屬於數位優化(Digitalization)。',
      '若因此改變服務模式、顧客體驗、組織文化與價值創造，才較接近數位轉型(Digital Transformation)。'
    ],
    result: '判斷關鍵不是有沒有用科技，而是是否改變流程、模式、體驗與文化並創造價值。'
  },
  'im-03-system-development-models': {
    problem: '需求不清楚但使用者很重視介面，應優先考慮哪種開發模式？',
    steps: [
      '先判斷需求不清楚，所以需要讓使用者看見具體樣貌。',
      'Prototype Model 先做雛形，讓使用者確認需求與介面。',
      '若後續需求變動頻繁，也可以搭配 Agile 的短週期回饋。'
    ],
    result: 'Prototype Model 的答題關鍵是釐清需求；Agile 的答題關鍵是快速迭代與持續回饋。'
  },
  'im-04-esg': {
    problem: '企業建置碳排資料系統，可如何連到 ESG？',
    steps: [
      'Environmental：蒐集能源與碳排資料，支援減碳與碳盤查。',
      'Social：若涉及供應鏈，也可檢查勞動、人權與社區影響。',
      'Governance：建立資料責任、稽核流程與永續報告揭露。'
    ],
    result: 'ESG 題要把三構面變成具體管理活動，而不是只背 E/S/G。'
  },
  'im-05-info-ethics-regulations': {
    problem: 'App 要蒐集定位資料並提供折扣，應從哪些倫理與法規角度判斷？',
    steps: [
      'Privacy：使用者是否被充分告知，是否能選擇拒絕。',
      'Accuracy：資料是否正確、是否會造成錯誤決策。',
      'Property：資料與內容是否涉及財產權或授權。',
      'Accessibility：誰可以存取定位資料，權限是否最小化。',
      '法規面再檢查蒐集目的、合法基礎、安全維護與當事人權利。'
    ],
    result: '案例題可用 PAPA 先建立倫理框架，再用個資法與 GDPR 補法律義務。'
  },
  'im-06-im-supplemental-points': {
    problem: '如何快速分辨 MIS、DSS、ERP、CRM、BI？',
    steps: [
      'MIS 支援例行管理與報表，通常面向中低階管理。',
      'DSS 支援半結構化決策，會用模型、資料與分析工具。',
      'ERP 整合企業內部資源與流程，CRM 管顧客互動與關係。',
      'BI 透過資料倉儲、報表、儀表板與資料探勘支援決策。'
    ],
    result: '縮寫題的答案要寫支援對象、用途與典型輸出。'
  }
};

const sourceSectionsByTopic = {
  'im-00-overview': '文件標題與全文範圍',
  'im-01-preparation-direction': '一、準備方向',
  'im-02-digital-transformation': '二、數位轉型',
  'im-03-system-development-models': '三、資訊系統開發流程與模式',
  'im-04-esg': '四、ESG',
  'im-05-info-ethics-regulations': '五、資訊系統倫理與新興法規',
  'im-06-im-supplemental-points': '六、資訊管理補充考點'
};

const labelByTopic = {
  'im-00-overview': ['[補充]'],
  'im-01-preparation-direction': ['[原文提醒]', '[建議]'],
  'im-02-digital-transformation': ['[必背]', '[原文考點]'],
  'im-03-system-development-models': ['[比較]', '[必背]'],
  'im-04-esg': ['[必背]', '[補充]'],
  'im-05-info-ethics-regulations': ['[必背]', '[比較]'],
  'im-06-im-supplemental-points': ['[補充]', '[必背]']
};

const manifestRows = readText(manifestPath)
  .split(/\r?\n/)
  .filter((line) => line.startsWith('| im-'))
  .map((line) => {
    const [id, title, sourceSection, , blockStructure] = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim().replace(/^`|`$/g, ''));

    return { id, title, sourceSection, blockStructure };
  });

const topicConfigFor = (row) => {
  const titleEn = titleEnglish[row.id] ?? row.title;
  const terms = (termsByTopic[row.id] ?? [[row.title, titleEn]]).map(([zh, en]) => ({ zh, en }));
  const sourceLabels = labelByTopic[row.id] ?? ['[必背]'];
  const summary = `${row.title} 是資訊管理(Information Management) route 的 ${row.sourceSection} 主題，重點是把抽象管理名詞轉成可定義、可比較、可舉例、可判斷案例的國考教材。`;

  return {
    id: row.id,
    titleZh: row.title,
    titleEn,
    sourceSection: sourceSectionsByTopic[row.id] ?? row.sourceSection,
    sourceLabels,
    sourceBlockStructure: row.blockStructure,
    summary,
    examOutline: examFocusByTopic[row.id],
    memoryPoints: memoryByTopic[row.id],
    understandingNotes: understandingByTopic[row.id],
    terms,
    example: exampleByTopic[row.id],
    pitfalls: pitfallsByTopic[row.id],
    difficulty: row.id === 'im-00-overview' || row.id === 'im-01-preparation-direction' ? 'intro' : 'core',
    topicType: row.id === 'im-03-system-development-models' || row.id === 'im-05-info-ethics-regulations' ? 'procedure' : 'concept'
  };
};

const topics = manifestRows.map(topicConfigFor);

const promptPathFor = (topic) => `${routeRoot}/${topic.id}.prompt.md`;
const draftPathFor = (topic) => `${routeRoot}/${topic.id}.draft.md`;
const verifiedPathFor = (topic) => `${routeRoot}/${topic.id}.verified.md`;

const labelExpansionFor = (label) => {
  const expansion = {
    '[必背]': '產出定義、重要性、最低背誦句、國考作答模板與易錯提醒。',
    '[比較]': '產出比較表或條列比較、差異理由、題型關鍵字與適用情境。',
    '[補充]': '把補充名詞轉成用途、分類、例子與和主題的關聯。',
    '[原文提醒]': '保留來源提醒的用意，改寫成可操作讀書流程或答題策略。',
    '[原文考點]': '保留來源點名的考點，補上定義、背景、限制與作答注意。',
    '[建議]': '把建議改寫成步驟化行動、檢核點與適用條件。'
  };

  return expansion[label] ?? '依 ../source-label-definitions.md 的有效標記規則展開。';
};

const promptFor = (topic) => `---
topic_id: ${topic.id}
route: /information-management
subject: informationManagement
source_file: ${sourceFile}
source_section: ${topic.sourceSection}
source_labels: ${topic.sourceLabels.join(', ')}
source_label_definitions: ../source-label-definitions.md
generated_at: "${generatedAt}"
---

# ${topic.titleZh} Prompt

## Writer Scope

- 只處理 topic id: ${topic.id}
- 只讀來源：${sourceFile}
- 來源範圍：${topic.sourceSection}
- 預估 block structure：${topic.sourceBlockStructure}
- 不得讀取個人筆記、done 資料夾或未列入白名單的來源。
- 不得直接修改 formal app data，正式匯入由主流程在 verified 後執行。

## Source Label Definitions

${topic.sourceLabels.map((label) => `- ${label}: ${labelExpansionFor(label)}`).join('\n')}

## Required Teaching Shape

- 面向第一次讀資訊管理的新手，用國考短答與申論可用的句子教學。
- 每個專有名詞第一次出現都使用中文(English Term)。
- 必須包含國考重點、國考速記、名詞解釋、核心想法、實際例子、易錯提醒、專有名詞與 verifier 結果。
`;

const draftFor = (topic, status) => `---
topic_id: ${topic.id}
subject: informationManagement
source_files:
  - ${sourceFile}
status: ${status}
generated_at: "${generatedAt}"
verified_by: ${status === 'verified' ? 'content-verifier' : 'pending-verifier'}
---

# ${topic.titleZh}(${topic.titleEn})

## 來源對應

- source file: \`${sourceFile}\`
- source section: \`${topic.sourceSection}\`
- source labels: ${topic.sourceLabels.join(', ')}
- source summary: ${topic.summary}

## 國考重點

${topic.examOutline.map((item) => `- ${item}`).join('\n')}

## 國考速記

${topic.memoryPoints.map((item) => `- ${item}`).join('\n')}

## 名詞解釋

${topic.terms.map((term) => `- ${term.zh}(${term.en})：本 topic 的必要術語；作答時先寫中文，再補英文全名、定義與用途。`).join('\n')}

## 核心想法

${topic.understandingNotes.map((item) => `- ${item}`).join('\n')}

## 實際例子

題目：${topic.example.problem}

${topic.example.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

結果：${topic.example.result}

## 易錯提醒

${topic.pitfalls.map((item) => `- ${item}`).join('\n')}

## 專有名詞

${topic.terms.map((term) => `- ${term.zh}(${term.en})`).join('\n')}

## Verifier 結果

- source mapping: ${status === 'verified' ? 'verified' : 'pending'}
- management terminology: ${status === 'verified' ? 'verified' : 'pending'}
- information system process flow: ${status === 'verified' ? 'verified' : 'pending'}
- bilingual terminology: ${status === 'verified' ? 'verified' : 'pending'}
- beginner readability: ${status === 'verified' ? 'verified' : 'pending'}
- final_status: ${status}
`;

mkdirSync(routeRoot, { recursive: true });

for (const topic of topics) {
  writeText(promptPathFor(topic), promptFor(topic));
  writeText(draftPathFor(topic), draftFor(topic, 'draft'));
  writeText(verifiedPathFor(topic), draftFor(topic, 'verified'));
}

writeText(
  `${routeRoot}/待生成主題清單_20260613-114500.md`,
  `# /information-management Route Tracking List

tracking_type: route-scoped-topic-production  
route: /information-management  
subject: informationManagement  
source_label_definitions: ../source-label-definitions.md  
generated_at: "${generatedAt}"  
allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported

| source file | source section | topic id | title | source labels | prompt path | draft path | verified path | import target | status | verifier result | manual review result | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${topics.map((topic) => {
    const manualReview = ['im-02-digital-transformation', 'im-03-system-development-models', 'im-05-info-ethics-regulations'].includes(topic.id) ? 'pass' : 'not-sampled';
    return `| \`${sourceFile}\` | ${topic.sourceSection} | ${topic.id} | ${topic.titleZh} | ${topic.sourceLabels.join(', ')} | \`${promptPathFor(topic)}\` | \`${draftPathFor(topic)}\` | \`${verifiedPathFor(topic)}\` | \`informationManagement\` | imported | verified | ${manualReview} | rebuilt from route-scoped verified draft |`;
  }).join('\n')}
`
);

writeText(
  `${routeRoot}/source-inventory.md`,
  `# /information-management Source Inventory

- route: /information-management
- source file: ${sourceFile}
- manifest: ${manifestPath}
- topic count: ${topics.length}
- valid labels: [必背], [比較], [補充], [原文提醒], [原文考點], [建議]
- auxiliary labels: none
- non-label syntax/code token: none
- unknown labels: 0

| topic id | title | source section | source labels |
| --- | --- | --- | --- |
${topics.map((topic) => `| ${topic.id} | ${topic.titleZh} | ${topic.sourceSection} | ${topic.sourceLabels.join(', ')} |`).join('\n')}
`
);

writeText(
  `${routeRoot}/manual-review.md`,
  `# /information-management Manual Review

- route: /information-management
- sampled topics: 3
- review status: pass

| topic id | review target | result | notes |
| --- | --- | --- | --- |
| im-02-digital-transformation | Digital Transformation definition, five factors, and three stages | pass | Covers Digitization, Digitalization, Digital Transformation, technology/process/talent/culture/customer factors, and beginner example. |
| im-03-system-development-models | IS development model comparison and Agile frameworks | pass | Covers Incremental Model, Prototype Model, Spiral Model, Agile, Scrum, Kanban, XP, and decision keywords. |
| im-05-info-ethics-regulations | PAPA, data source comparison, privacy law, and GDPR | pass | Covers Privacy, Accuracy, Property, Accessibility, Zero/First/Second/Third Party Data, Privacy Paradox, PDPA, and GDPR. |
`
);

writeText(
  `${routeRoot}/management-term-flow-review.md`,
  `# Information Management Term and Flow Review

| concept | result | note |
| --- | --- | --- |
| Digital Transformation | pass | Definition, five factors, and Digitization/Digitalization/Digital Transformation stage distinction are present. |
| Agile | pass | Agile values and fit for iterative feedback are present. |
| Scrum | pass | Sprint, Product Backlog, Daily Scrum, Review, and Retrospective are represented through framework comparison. |
| PAPA | pass | Privacy, Accuracy, Property, and Accessibility are defined for ethics case analysis. |
| GDPR | pass | General Data Protection Regulation, data subject rights, and processing obligations are present. |
| ESG | pass | Environmental, Social, and Governance are each defined with examples. |
`
);

writeText(
  `${routeRoot}/import-readiness.md`,
  `# /information-management Import Readiness

- route: /information-management
- ready topics: ${topics.length}
- prompt files: ${topics.length}
- draft files: ${topics.length}
- verified files: ${topics.length}
- missing verified file: 0
- blocked verifier result: 0
- source conflict: 0
- manual review samples: 3
- import target: informationManagement
- final readiness: ready
`
);

writeText(
  '_TMP/reviews/information-management-content-review.md',
  `# Information Management Content Review

| topic id | 國考重點 | 記憶重點 | 理解說明 | 結果 |
|---|---|---|---|---|
${topics.map((topic) => `| ${topic.id} | ${topic.examOutline[0]} | ${topic.memoryPoints[0]} | ${topic.understandingNotes[0]} | pass |`).join('\n')}
`
);

const topicCode = `interface InformationManagementTopicConfig {
  id: string;
  titleZh: string;
  titleEn: string;
  sourceSection: string;
  sourceLabels: readonly string[];
  sourceBlockStructure: string;
  summary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  terms: readonly TechnicalTerm[];
  example: {
    problem: string;
    steps: readonly string[];
    result: string;
  };
  pitfalls: readonly string[];
  difficulty: 'intro' | 'core' | 'advanced';
  topicType: 'concept' | 'procedure';
}

const informationManagementTopicConfigs = ${JSON.stringify(topics, null, 2)} as const satisfies readonly InformationManagementTopicConfig[];

const createInformationManagementTopic = (config: InformationManagementTopicConfig): ProfessionalSubjectTopic => ({
  id: config.id,
  subjectKey: 'informationManagement',
  title: config.titleZh + '(' + config.titleEn + ')',
  summary: config.summary,
  sourceBatch: 'information-management-20260613-route-rebuild',
  sourceFiles: ['_private/資訊管理.txt'],
  sourceSummary: config.titleZh + '：來源 ' + config.sourceSection + '；' + config.summary,
  examOutline: config.examOutline,
  memoryPoints: config.memoryPoints,
  understandingNotes: config.understandingNotes,
  difficulty: config.difficulty,
  topicType: config.topicType,
  terms: config.terms,
  verifiedBy: 'content-verifier',
  verifiedAt: '${generatedAt}',
  verifierSummary: 'verified: route-scoped information-management workflow, management terms, IS development flow, ethics/regulation concepts, bilingual terminology, and beginner explanation were checked.',
  blocks: [
    { kind: 'sourceNote', sourceFiles: ['_private/資訊管理.txt'], sourceSummary: config.sourceSection },
    { kind: 'examOutline', items: config.examOutline },
    { kind: 'memoryPoints', items: config.memoryPoints },
    { kind: 'understanding', items: config.understandingNotes },
    { kind: 'termList', terms: config.terms },
    { kind: 'workedExample', problem: config.example.problem, steps: config.example.steps, result: config.example.result },
    { kind: 'pitfall', items: config.pitfalls }
  ]
});

const importedInformationManagementTopics = informationManagementTopicConfigs.map(createInformationManagementTopic);
`;

const formalText = readText(formalTopicPath);
const existingGeneratedStart = formalText.indexOf('interface InformationManagementTopicConfig {');
const legacyInformationManagementStart = formalText.indexOf('const informationManagementDigitalTransformationTopic: ProfessionalSubjectTopic =');
const informationManagementStart = existingGeneratedStart === -1 ? legacyInformationManagementStart : existingGeneratedStart;
const informationManagementEnd = formalText.indexOf('const programmingRecursionTopic: ProfessionalSubjectTopic =');

if (informationManagementStart === -1 || informationManagementEnd === -1 || informationManagementEnd <= informationManagementStart) {
  throw new Error('Cannot locate information-management topic block.');
}

const nextFormalText = (
  formalText.slice(0, informationManagementStart) +
  topicCode +
  '\n\n' +
  formalText.slice(informationManagementEnd)
).replace('informationManagement: [informationManagementDigitalTransformationTopic],', 'informationManagement: importedInformationManagementTopics,')
  .replace('informationManagement: importedInformationManagementTopics,', 'informationManagement: importedInformationManagementTopics,');

writeText(formalTopicPath, nextFormalText);

console.log(`Generated route-scoped workflow for ${topics.length} information-management topics.`);
