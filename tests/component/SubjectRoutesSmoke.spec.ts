import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ChineseView from '@/modules/chinese/views/ChineseView.vue';
import ComputerPrinciplesView from '@/modules/computerPrinciples/views/ComputerPrinciplesView.vue';
import EnglishView from '@/modules/english/views/EnglishView.vue';
import InformationManagementView from '@/modules/informationManagement/views/InformationManagementView.vue';
import NetworkingView from '@/modules/networking/views/NetworkingView.vue';
import ProgrammingView from '@/modules/programming/views/ProgrammingView.vue';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';

const subjectRouteCases = [
  [ComputerPrinciplesView, 'subject-view-computer-principles', 'subject-topic-list-computerPrinciples', '數字系統與進位'],
  [NetworkingView, 'subject-view-networking', 'subject-topic-list-networking', 'OSI 七層模型'],
  [InformationManagementView, 'subject-view-information-management', 'subject-topic-list-informationManagement', '資料庫正規化'],
  [ProgrammingView, 'subject-view-programming', 'subject-topic-list-programming', 'Java 流程控制'],
  [EnglishView, 'subject-view-english', 'subject-topic-list-english', '閱讀策略'],
  [ChineseView, 'subject-view-chinese', 'subject-topic-list-chinese', '文章結構']
] as const;

describe('subject route views', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each(subjectRouteCases)('renders placeholder topics for %s', (ViewComponent, viewTestId, topicListTestId, topicTitle) => {
    const wrapper = mount(ViewComponent);

    expect(wrapper.find(`[data-testid="${viewTestId}"]`).exists()).toBe(true);
    expect(wrapper.find(`[data-testid="${topicListTestId}"]`).exists()).toBe(true);
    expect(wrapper.text()).toContain(topicTitle);
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
});
