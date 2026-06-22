import type { SubjectKey, SubjectTopic, SubjectTopicsBySubject } from '@/modules/subjectTopics/types/subjectTopic';

export const placeholderTopicsBySubject = {
  computerPrinciples: [
    {
      id: 'number-systems',
      subjectKey: 'computerPrinciples',
      title: '數字系統與進位',
      summary: '預留二進位、十進位與十六進位的整理位置。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡先建立主題骨架，後續可放入進位轉換、補數與位元運算的正式講義。'
        }
      ]
    },
    {
      id: 'binary-tree-basics',
      subjectKey: 'computerPrinciples',
      title: '二元樹基礎',
      summary: '預留樹狀結構、走訪順序與節點關係的學習區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這個占位主題用來驗證主題卡、完成狀態與閱讀位置互動。'
        }
      ]
    },
    {
      id: 'hamming-code-inequality',
      subjectKey: 'computerPrinciples',
      title: '漢明碼校驗位',
      summary: '預留資料位元與校驗位元公式的 Java 教學範例。',
      blocks: [
        {
          kind: 'teachingCode',
          language: 'java',
          title: '漢明碼校驗位示範',
          description: '用簡短變數呈現資料位元與校驗位元的關係。',
          code: `int dataBits = 4;
int parityBits = 1;

// dataBits 是資料位元數，parityBits 是目前嘗試的校驗位元數。
while ((1 << parityBits) < dataBits + parityBits + 1) {
  parityBits++;
}`
        }
      ]
    }
  ],
  computerPrinciplesV2: [],
  networking: [
    {
      id: 'osi-model',
      subjectKey: 'networking',
      title: 'OSI 七層模型',
      summary: '預留各層職責、常見協定與設備對照。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡先放置網路分層的學習入口，正式內容會在後續 change 補齊。'
        }
      ]
    },
    {
      id: 'tcp-ip-basics',
      subjectKey: 'networking',
      title: 'TCP/IP 基礎',
      summary: '預留 TCP、UDP、IP 與常見 port 的整理區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這個主題提供日後連接通訊協定、封包流程與應用層服務的骨架。'
        }
      ]
    }
  ],
  networkingV2: [],
  digitalLogic: [],
  operatingSystems: [],
  informationManagement: [
    {
      id: 'database-normalization',
      subjectKey: 'informationManagement',
      title: '資料庫正規化',
      summary: '預留 1NF、2NF、3NF 與資料相依性的整理區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '先建立可展開的資料庫主題，後續再補正式範例與圖表。'
        }
      ]
    },
    {
      id: 'systems-development-life-cycle',
      subjectKey: 'informationManagement',
      title: '系統發展生命週期',
      summary: '預留需求、設計、實作、測試與維護階段的學習區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡只保留章節入口，不建立專案管理題庫或案例資料模型。'
        }
      ]
    }
  ],
  programming: [
    {
      id: 'java-control-flow',
      subjectKey: 'programming',
      title: 'Java 流程控制',
      summary: '預留條件判斷、迴圈與早期 return 的範例位置。',
      blocks: [
        {
          kind: 'paragraph',
          text: '先保留程式教學的主題位置，之後可加入較完整的語法與除錯說明。'
        }
      ]
    },
    {
      id: 'check-bit-formula',
      subjectKey: 'programming',
      title: '校驗位公式',
      summary: '預留校驗位條件判斷的 Java 範例。',
      blocks: [
        {
          kind: 'teachingCode',
          language: 'java',
          title: '校驗位公式示範',
          description: '示範如何把公式拆成可讀的布林判斷。',
          code: `int dataBits = 8;
int parityBits = 4;

// 檢查校驗位數量是否能覆蓋資料位元、校驗位元與整體檢查位置。
boolean enough = (1 << parityBits) >= dataBits + parityBits + 1;`
        }
      ]
    }
  ],
  database: [
    {
      id: 'database-foundations',
      subjectKey: 'database',
      title: '資料庫基本概念',
      summary: '預留資料庫系統、資料模型與資料庫管理系統的整理區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡先建立資料庫專業科目的主題入口，正式內容會依 verified 草稿逐批匯入。'
        }
      ]
    },
    {
      id: 'relational-model-basics',
      subjectKey: 'database',
      title: '關聯式資料模型',
      summary: '預留資料表、鍵值、關聯與完整性限制的學習區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這個占位主題用來承接後續資料庫來源的正式講義與考點整理。'
        }
      ]
    }
  ],
  databaseV2: [],
  algorithms: [
    {
      id: 'sorting-overview',
      subjectKey: 'algorithms',
      title: '排序法總覽',
      summary: '預留氣泡、選擇、插入、合併、快速、堆積與希爾排序的比較表。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡先建立演算法專業科目的入口，正式內容會保留複雜度、穩定性與 Java 範例。'
        }
      ]
    },
    {
      id: 'binary-search-placeholder',
      subjectKey: 'algorithms',
      title: '二元搜尋法',
      summary: '預留已排序資料、遞迴與非遞迴版本的學習區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這個占位主題提醒後續正式內容必須標示二元搜尋法只能用於已排序資料。'
        }
      ]
    }
  ],
  systemDesign: [],
  english: [
    {
      id: 'reading-strategy',
      subjectKey: 'english',
      title: '閱讀策略',
      summary: '預留文章主旨、轉折詞與段落功能的練習入口。',
      blocks: [
        {
          kind: 'paragraph',
          text: '共同科目先維持輕量骨架，後續再補閱讀題型與單字整理。'
        }
      ]
    },
    {
      id: 'basic-vocabulary',
      subjectKey: 'english',
      title: '常見字彙',
      summary: '預留高頻字、片語與同義替換的整理區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這個占位主題只提供後續內容掛載點，不建立完整字卡系統。'
        }
      ]
    }
  ],
  chinese: [
    {
      id: 'article-structure',
      subjectKey: 'chinese',
      title: '文章結構',
      summary: '預留起承轉合、段落功能與論述脈絡的整理區。',
      blocks: [
        {
          kind: 'paragraph',
          text: '共同科目保持簡潔，先建立可展開的閱讀主題骨架。'
        }
      ]
    },
    {
      id: 'classical-chinese-signals',
      subjectKey: 'chinese',
      title: '文言提示詞',
      summary: '預留常見虛字、語氣與句式辨識的學習入口。',
      blocks: [
        {
          kind: 'paragraph',
          text: '這裡只放占位段落，避免在骨架階段建立正式國文講義資料模型。'
        }
      ]
    }
  ]
} as const satisfies SubjectTopicsBySubject;

export function getPlaceholderTopics(subjectKey: SubjectKey): readonly SubjectTopic[] {
  return placeholderTopicsBySubject[subjectKey];
}
