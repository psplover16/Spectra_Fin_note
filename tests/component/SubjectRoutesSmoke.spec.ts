import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ChineseView from '@/modules/chinese/views/ChineseView.vue';
import AlgorithmsView from '@/modules/algorithms/views/AlgorithmsView.vue';
import ComputerPrinciplesView from '@/modules/computerPrinciples/views/ComputerPrinciplesView.vue';
import DatabaseView from '@/modules/database/views/DatabaseView.vue';
import EnglishView from '@/modules/english/views/EnglishView.vue';
import InformationManagementView from '@/modules/informationManagement/views/InformationManagementView.vue';
import NetworkingView from '@/modules/networking/views/NetworkingView.vue';
import ProgrammingView from '@/modules/programming/views/ProgrammingView.vue';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';

const subjectRouteCases = [
  [
    ComputerPrinciplesView,
    'subject-view-computer-principles',
    'subject-topic-list-computerPrinciples',
    ['電腦常用單位', '馮紐曼架構']
  ],
  [NetworkingView, 'subject-view-networking', 'subject-topic-list-networking', ['準備方向']],
  [
    InformationManagementView,
    'subject-view-information-management',
    'subject-topic-list-informationManagement',
    ['資訊管理總覽']
  ],
  [ProgrammingView, 'subject-view-programming', 'subject-topic-list-programming', ['程式(Programming Overview)']],
  [DatabaseView, 'subject-view-database', 'subject-topic-list-database', ['資料庫總章']],
  [AlgorithmsView, 'subject-view-algorithms', 'subject-topic-list-algorithms', ['資料結構與演算法準備方向']],
  [EnglishView, 'subject-view-english', 'subject-topic-list-english', ['閱讀策略']],
  [ChineseView, 'subject-view-chinese', 'subject-topic-list-chinese', ['文章結構']]
] as const;

describe('subject route views', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each(subjectRouteCases)('renders placeholder topics for %s', (ViewComponent, viewTestId, topicListTestId, topicTitles) => {
    const wrapper = mount(ViewComponent);

    expect(wrapper.find(`[data-testid="${viewTestId}"]`).exists()).toBe(true);
    expect(wrapper.find(`[data-testid="${topicListTestId}"]`).exists()).toBe(true);
    for (const topicTitle of topicTitles) {
      expect(wrapper.text()).toContain(topicTitle);
    }
  });

  it('renders a Traditional Chinese empty state without console errors', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '測試科目',
        subjectKey: 'english',
        testId: 'subject-view-empty',
        topics: []
      }
    });

    expect(wrapper.get('[data-testid="subject-topic-empty-state"]').text()).toContain('測試科目尚未建立主題內容');
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('loads bundled professional topics without appending stale placeholders for rebuilt routes', () => {
    const databaseWrapper = mount(DatabaseView);
    const algorithmsWrapper = mount(AlgorithmsView);

    expect(databaseWrapper.text()).toContain('資料庫基礎(Database Foundations)');
    expect(databaseWrapper.text()).not.toContain('這裡先建立資料庫專業科目的主題入口');
    expect(algorithmsWrapper.text()).toContain('二元搜尋法(Binary Search)');
    expect(algorithmsWrapper.text()).not.toContain('正式內容會保留複雜度');
  });
});
