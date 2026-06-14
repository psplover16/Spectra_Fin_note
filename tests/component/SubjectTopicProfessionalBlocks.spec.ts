import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import type { ProfessionalSubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const professionalTopic: ProfessionalSubjectTopic = {
  id: 'binary-search',
  subjectKey: 'algorithms',
  title: '二元搜尋法(Binary Search)',
  summary: '在已排序資料中用中間值快速縮小搜尋範圍。',
  sourceBatch: 'fixture',
  sourceFiles: ['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'],
  sourceSummary: '來源整理二元搜尋法的遞迴與非遞迴版本，並強調資料必須先排序。',
  examOutline: ['判斷二元搜尋法(Binary Search) 的前提與時間複雜度。'],
  memoryPoints: ['資料必須先排序，否則左右半邊的排除邏輯不成立。'],
  understandingNotes: ['每次比較中間值後，只保留可能包含目標值的一半資料。'],
  difficulty: 'intro',
  topicType: 'algorithm',
  terms: [{ zh: '二元搜尋法', en: 'Binary Search' }],
  blocks: [
    {
      kind: 'sourceNote',
      sourceFiles: ['_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'],
      sourceSummary: '二元搜尋法需使用已排序陣列。'
    },
    {
      kind: 'examOutline',
      items: ['考資料是否已排序，以及每次砍半的搜尋流程。']
    },
    {
      kind: 'memoryPoints',
      items: ['先排序，再搜尋。']
    },
    {
      kind: 'understanding',
      items: ['中間值太小就往右半邊找；太大就往左半邊找。']
    },
    {
      kind: 'termList',
      terms: [{ zh: '二元搜尋法', en: 'Binary Search' }]
    },
    {
      kind: 'workedExample',
      problem: '在 [1, 3, 5, 7, 9] 中找 7。',
      steps: ['mid 指向 5，7 比 5 大，所以找右半邊。', '下一次 mid 指向 7，找到目標。'],
      result: '搜尋成功。'
    },
    {
      kind: 'complexityTable',
      rows: [
        {
          algorithmNameZh: '二元搜尋法',
          algorithmNameEn: 'Binary Search',
          bestTime: 'O(1)',
          averageTime: 'O(log n)',
          worstTime: 'O(log n)',
          stability: 'Not applicable',
          notes: '資料必須先排序。'
        }
      ]
    },
    {
      kind: 'teachingCode',
      language: 'java',
      title: '二元搜尋法非遞迴版',
      description: '用左右邊界保留可能答案區間。',
      code: 'int mid = left + (right - left) / 2;'
    }
  ]
};

describe('SubjectTopicPage professional blocks', () => {
  it('renders professional content blocks without section subtitle fields', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '演算法',
        subjectKey: 'algorithms',
        testId: 'subject-view-algorithms',
        topics: [professionalTopic]
      }
    });

    await wrapper.get('[data-testid="topic-title-binary-search"]').trigger('click');

    expect(wrapper.get('[data-testid="topic-block-binary-search-sourceNote-0"]').text()).toContain('二元搜尋法需使用已排序陣列');
    expect(wrapper.get('[data-testid="topic-block-binary-search-examOutline-1"]').text()).toContain('考資料是否已排序');
    expect(wrapper.get('[data-testid="topic-block-binary-search-memoryPoints-2"]').text()).toContain('先排序，再搜尋');
    expect(wrapper.get('[data-testid="topic-block-binary-search-understanding-3"]').text()).toContain('中間值太小');
    expect(wrapper.get('[data-testid="topic-block-binary-search-termList-4"]').text()).toContain('二元搜尋法(Binary Search)');
    expect(wrapper.get('[data-testid="topic-block-binary-search-workedExample-5"]').text()).toContain('在 [1, 3, 5, 7, 9] 中找 7');
    expect(wrapper.get('[data-testid="topic-block-binary-search-complexityTable-6"]').text()).toContain('O(log n)');
    expect(wrapper.find('[data-testid*="subtitle"]').exists()).toBe(false);
  });

  it('renders lesson article blocks as natural teaching sections', async () => {
    const lessonTopic: ProfessionalSubjectTopic = {
      id: 'cp-von-neumann-architecture',
      subjectKey: 'computerPrinciples',
      title: '馮紐曼架構(Von Neumann Architecture)',
      summary: '教材式文章',
      sourceBatch: 'fixture',
      sourceFiles: ['_private/計算機概論.txt', '_private/MD/馮紐曼架構.md'],
      sourceSummary: '來源段落依原始標記呈現。',
      examOutline: ['兩大特色'],
      memoryPoints: ['[必背]'],
      understandingNotes: ['教材式主題'],
      difficulty: 'core',
      topicType: 'concept',
      terms: [{ zh: '馮紐曼架構', en: 'Von Neumann Architecture' }],
      blocks: [
        {
          kind: 'lessonArticle',
          sourceFiles: ['_private/計算機概論.txt', '_private/MD/馮紐曼架構.md'],
          sourceSection: '3a. 基本計概 / 馮紐曼架構',
          lead: ['馮紐曼架構(Von Neumann Architecture) 是教材式主題。'],
          sections: [
            {
              heading: '兩大特色',
              sourceLabel: '[必背]',
              blocks: [
                {
                  kind: 'bulletList',
                  items: ['程式內儲概念：程式與資料都存於記憶體。']
                }
              ]
            },
            {
              heading: '圖靈機是什麼',
              blocks: [
                {
                  kind: 'orderedList',
                  markerStyle: 'decimal',
                  items: ['資料如何被儲存。', '資料如何被讀取。', '每一步如何根據規則改變資料。', '什麼情況下計算會結束。']
                }
              ]
            },
            {
              heading: '層級示範',
              blocks: [
                {
                  kind: 'orderedList',
                  markerStyle: 'upperRoman',
                  items: ['第一層概念。', '第二層概念。']
                },
                {
                  kind: 'orderedList',
                  markerStyle: 'upperAlpha',
                  items: ['第一個選項。', '第二個選項。']
                }
              ]
            },
            {
              heading: '一般流程',
              blocks: [
                {
                  kind: 'orderedList',
                  items: ['先讀取資料。', '再輸出結果。']
                }
              ]
            },
            {
              heading: '馮紐曼架構 vs 哈佛架構',
              sourceLabel: '[比較]',
              blocks: [
                {
                  kind: 'table',
                  headers: ['項目', '馮紐曼架構', '哈佛架構'],
                  rows: [['記憶體', '程式與資料共用', '程式與資料分離']]
                }
              ]
            }
          ]
        }
      ]
    };
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機概論',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [lessonTopic]
      }
    });

    await wrapper.get('[data-testid="topic-title-cp-von-neumann-architecture"]').trigger('click');

    const lessonBlock = wrapper.get('[data-testid="topic-block-cp-von-neumann-architecture-lessonArticle-0"]');

    expect(lessonBlock.text()).toContain('[必背]');
    expect(lessonBlock.text()).toContain('程式內儲概念');
    expect(lessonBlock.text()).toContain('資料如何被儲存');
    expect(lessonBlock.text()).toContain('馮紐曼架構 vs 哈佛架構');
    expect(lessonBlock.text()).toContain('程式與資料分離');
    expect(lessonBlock.findAll('ol')).toHaveLength(4);
    expect(lessonBlock.findAll('.subject-topic-ordered-list-decimal')).toHaveLength(2);
    expect(lessonBlock.findAll('.subject-topic-ordered-list-upper-roman')).toHaveLength(1);
    expect(lessonBlock.findAll('.subject-topic-ordered-list-upper-alpha')).toHaveLength(1);
    expect(lessonBlock.find('[data-testid="lesson-ordered-list-icon"]').exists()).toBe(false);
    expect(lessonBlock.text()).not.toContain('考試大綱');
    expect(lessonBlock.text()).not.toContain('記憶重點');
    expect(lessonBlock.text()).not.toContain('_private/計算機概論.txt');
    expect(lessonBlock.text()).not.toContain('_private/MD/馮紐曼架構.md');
    expect(lessonBlock.text()).not.toContain('3a. 基本計概 / 馮紐曼架構');
  });
});
