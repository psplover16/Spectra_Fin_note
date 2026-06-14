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
  [AlgorithmsView, 'subject-view-algorithms', 'subject-topic-list-algorithms', ['二元搜尋法(Binary Search)']]
] as const;

const emptySubjectRouteCases = [
  [NetworkingView, 'subject-view-networking', '網路概論', ['準備方向']],
  [InformationManagementView, 'subject-view-information-management', '資訊管理', ['資訊管理總覽']],
  [ProgrammingView, 'subject-view-programming', '程式設計', ['程式(Programming Overview)']],
  [DatabaseView, 'subject-view-database', '資料庫', ['資料庫總章']],
  [EnglishView, 'subject-view-english', '英文', ['閱讀策略']],
  [ChineseView, 'subject-view-chinese', '國文', ['文章結構']]
] as const;

describe('subject route views', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each(subjectRouteCases)('renders filled route topics for %s', (ViewComponent, viewTestId, topicListTestId, topicTitles) => {
    const wrapper = mount(ViewComponent);

    expect(wrapper.find(`[data-testid="${viewTestId}"]`).exists()).toBe(true);
    expect(wrapper.find(`[data-testid="${topicListTestId}"]`).exists()).toBe(true);
    for (const topicTitle of topicTitles) {
      expect(wrapper.text()).toContain(topicTitle);
    }
  });

  it.each(emptySubjectRouteCases)('renders an empty state instead of unfilled skeleton topics for %s', (ViewComponent, viewTestId, routeTitle, removedTopicTitles) => {
    const wrapper = mount(ViewComponent);

    expect(wrapper.find(`[data-testid="${viewTestId}"]`).exists()).toBe(true);
    expect(wrapper.get('[data-testid="subject-topic-empty-state"]').text()).toContain(`${routeTitle}尚未建立主題內容`);
    for (const topicTitle of removedTopicTitles) {
      expect(wrapper.text()).not.toContain(topicTitle);
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
    const algorithmsWrapper = mount(AlgorithmsView);

    expect(algorithmsWrapper.text()).toContain('二元搜尋法(Binary Search)');
    expect(algorithmsWrapper.text()).not.toContain('正式內容會保留複雜度');
  });
});
