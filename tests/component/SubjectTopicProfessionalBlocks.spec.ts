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
});
