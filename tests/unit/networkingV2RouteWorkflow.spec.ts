import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { placeholderTopicsBySubject } from '@/modules/subjectTopics/data/placeholderTopics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import { subjectKeys, type ProfessionalSubjectTopic, type SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';

const subjectKey = 'networkingV2' as SubjectKey;
const sourceBatch = 'networking-v2-route';
const contentReviewPath = '_TMP/reviews/networking-v2-content-review.md';

const topicCases = [
  {
    id: 'networking-v2-osi-tcpip',
    title: 'OSI 七層 + TCP/IP ★',
    source: '_private/MD/網路概論v2/網路概論_1_OSI七層與TCPIP.md',
    keyword: '每層的職責'
  },
  {
    id: 'networking-v2-basics',
    title: '基礎概念',
    source: '_private/MD/網路概論v2/網路概論_2_基礎概念.md',
    keyword: 'LAN vs MAN vs WAN'
  },
  {
    id: 'networking-v2-security-crypto-tls',
    title: '資安：加密、雜湊、數位簽章、憑證與 TLS',
    source: '_private/MD/網路概論v2/網路概論_2下_資安_加密與TLS.md',
    keyword: '資訊安全三要素 CIA'
  },
  {
    id: 'networking-v2-devices-osi',
    title: '網路設備對應層級（看得懂版）',
    source: '_private/MD/網路概論v2/網路概論_3上_網路設備對應層級.md',
    keyword: '越往上層，設備越「聰明」'
  },
  {
    id: 'networking-v2-wireless-access-devices',
    title: '無線與上網接取設備',
    source: '_private/MD/網路概論v2/網路概論_3下_無線與上網接取設備.md',
    keyword: '對外上網'
  },
  {
    id: 'networking-v2-ip-subnetting',
    title: 'IP 基礎 + 子網路計算 ★',
    source: '_private/MD/網路概論v2/網路概論_4上_IP與子網路計算.md',
    keyword: '子網路切割是網路科唯一的大計算題'
  },
  {
    id: 'networking-v2-transport-layer',
    title: '傳輸層',
    source: '_private/MD/網路概論v2/網路概論_5_傳輸層.md',
    keyword: '握手順序'
  },
  {
    id: 'networking-v2-application-ports',
    title: '應用層協定 + Port Number 對照表 ★',
    source: '_private/MD/網路概論v2/網路概論_6_應用層與Port對照.md',
    keyword: 'Port 號 + 屬 TCP/UDP'
  },
  {
    id: 'networking-v2-physical-layer',
    title: '實體層 + 標準速度表 ★',
    source: '_private/MD/網路概論v2/網路概論_7上_實體層.md',
    keyword: 'IEEE 標準'
  },
  {
    id: 'networking-v2-data-link-layer',
    title: '資料鏈結層',
    source: '_private/MD/網路概論v2/網路概論_7下_資料鏈結層.md',
    keyword: '543 Rule'
  },
  {
    id: 'networking-v2-security-crypto',
    title: '資安觀念與加密 ★',
    source: '_private/MD/網路概論v2/網路概論_8上_資安觀念與加密.md',
    keyword: '加密演算法名稱'
  },
  {
    id: 'networking-v2-defense-attacks',
    title: '防禦設備與攻擊類型 ★',
    source: '_private/MD/網路概論v2/網路概論_8下_防禦設備與攻擊.md',
    keyword: 'ISO 27001'
  }
] as const;

const v2Topics = () =>
  ((professionalTopicsBySubject as Partial<Record<string, readonly ProfessionalSubjectTopic[]>>).networkingV2 ?? []);

describe('networking v2 route workflow', () => {
  it('registers the subject key and placeholder namespace without renderable placeholders', () => {
    expect(subjectKeys).toContain('networkingV2');
    expect(Object.keys(placeholderTopicsBySubject)).toContain('networkingV2');
    expect((placeholderTopicsBySubject as Partial<Record<string, readonly unknown[]>>).networkingV2).toEqual([]);
  });

  it('keeps v2 topics owned by the independent subject key', () => {
    const v2TopicIds = v2Topics().map((topic) => topic.id);
    const otherSubjectTopicIds = [
      ...professionalTopicsBySubject.networking,
      ...professionalTopicsBySubject.computerPrinciples,
      ...professionalTopicsBySubject.computerPrinciplesV2,
      ...professionalTopicsBySubject.digitalLogic,
      ...professionalTopicsBySubject.operatingSystems
    ].map((topic) => topic.id);

    expect(v2TopicIds).toEqual(topicCases.map((topicCase) => topicCase.id));
    for (const topicId of v2TopicIds) {
      expect(otherSubjectTopicIds).not.toContain(topicId);
    }
  });

  it('uses source filename order with cleaned learner-facing titles', () => {
    const topics = getSubjectTopics(subjectKey);

    expect(topics.map((topic) => topic.id)).toEqual(topicCases.map((topicCase) => topicCase.id));
    expect(topics.map((topic) => topic.title)).toEqual(topicCases.map((topicCase) => topicCase.title));
    expect(topics.every((topic) => !topic.title.includes('網路概論_') && !/^\\d/.test(topic.title))).toBe(true);
  });

  it('preserves exact source traceability and source-authored lessonArticle content', () => {
    expect(v2Topics()).toHaveLength(topicCases.length);

    for (const topicCase of topicCases) {
      const topic = v2Topics().find((candidate) => candidate.id === topicCase.id);

      expect(topic, `${topicCase.id} should exist`).toBeDefined();
      if (!topic) {
        continue;
      }

      expect(topic.subjectKey).toBe('networkingV2');
      expect(topic.title).toBe(topicCase.title);
      expect(topic.sourceBatch).toBe(sourceBatch);
      expect(topic.sourceFiles).toEqual([topicCase.source]);
      expect(topic.sourceSummary).toContain(topicCase.title.replace(' ★', ''));
      expect(topic.summary, `${topicCase.id} should have a summary`).not.toBe('');
      expect(topic.examOutline.length, `${topicCase.id} should expose exam outline`).toBeGreaterThan(0);
      expect(topic.memoryPoints.length, `${topicCase.id} should expose memory points`).toBeGreaterThan(0);
      expect(topic.understandingNotes.length, `${topicCase.id} should expose understanding notes`).toBeGreaterThan(0);
      expect(topic.terms.length, `${topicCase.id} should expose source terms`).toBeGreaterThan(0);
      expect(topic.blocks).toHaveLength(1);

      const lessonArticle = topic.blocks[0];
      expect(lessonArticle?.kind).toBe('lessonArticle');
      if (lessonArticle?.kind !== 'lessonArticle') {
        throw new Error(`${topicCase.id} should render through lessonArticle`);
      }

      expect(lessonArticle.sourceFiles).toEqual([topicCase.source]);
      expect(lessonArticle.sourceSection).toBe(topic.sourceSummary);
      expect(lessonArticle.sections.length, `${topicCase.id} should have sections`).toBeGreaterThan(0);
      expect(lessonArticle.sections.every((section) => section.blocks.length > 0), `${topicCase.id} should not have empty sections`).toBe(
        true
      );

      const serializedTopic = JSON.stringify(topic);
      expect(serializedTopic, `${topicCase.id} should contain ${topicCase.keyword}`).toContain(topicCase.keyword);
      expect(serializedTopic).not.toContain('questionText');
      expect(serializedTopic).not.toContain('correctAnswer');
      expect(serializedTopic).not.toContain('choiceAnalysis');
      expect(serializedTopic).not.toContain('options');
    }
  });

  it('records the manual content review and lecture-only scope decision', () => {
    const review = readFileSync(contentReviewPath, 'utf8');

    for (const topicCase of topicCases) {
      expect(review).toContain(topicCase.title);
      expect(review).toContain(`${topicCase.id}: pass`);
    }

    expect(review).toContain('lecture-only');
    expect(review).toContain('4 個選項：不適用');
    expect(review).toContain('1 個正解：不適用');
    expect(review).toContain('選項辨析：不適用');
  });
});
