import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ChineseView from '@/modules/chinese/views/ChineseView.vue';
import AlgorithmsView from '@/modules/algorithms/views/AlgorithmsView.vue';
import ComputerPrinciplesView from '@/modules/computerPrinciples/views/ComputerPrinciplesView.vue';
import ComputerPrinciplesV2View from '@/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue';
import DatabaseView from '@/modules/database/views/DatabaseView.vue';
import DigitalLogicView from '@/modules/digitalLogic/views/DigitalLogicView.vue';
import EnglishView from '@/modules/english/views/EnglishView.vue';
import InformationManagementView from '@/modules/informationManagement/views/InformationManagementView.vue';
import NetworkingView from '@/modules/networking/views/NetworkingView.vue';
import OperatingSystemsView from '@/modules/operatingSystems/views/OperatingSystemsView.vue';
import ProgrammingView from '@/modules/programming/views/ProgrammingView.vue';
import SystemDesignView from '@/modules/systemDesign/views/SystemDesignView.vue';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';

const subjectRouteCases = [
  [
    ComputerPrinciplesView,
    'subject-view-computer-principles',
    'subject-topic-list-computerPrinciples',
    ['電腦常用單位', '馮紐曼架構']
  ],
  [
    ComputerPrinciplesV2View,
    'subject-view-computer-principles-v2',
    'subject-topic-list-computerPrinciplesV2',
    ['架構與計算理論', '檢查碼（二）漢明碼與漢明距']
  ],
  [AlgorithmsView, 'subject-view-algorithms', 'subject-topic-list-algorithms', ['二元搜尋法(Binary Search)']],
  [NetworkingView, 'subject-view-networking', 'subject-topic-list-networking', ['OSI 七層 + TCP/IP ★']],
  [DigitalLogicView, 'subject-view-digital-logic', 'subject-topic-list-digitalLogic', ['基本邏輯(Digital Logic Basics)']],
  [OperatingSystemsView, 'subject-view-operating-systems', 'subject-topic-list-operatingSystems', ['OS 基礎概念']],
  [
    InformationManagementView,
    'subject-view-information-management',
    'subject-topic-list-informationManagement',
    ['數位轉型 + ESG']
  ],
  [ProgrammingView, 'subject-view-programming', 'subject-topic-list-programming', ['語言執行方式 + 程式基礎']],
  [DatabaseView, 'subject-view-database', 'subject-topic-list-database', ['基礎概念 + ANSI/SPARC 架構']],
  [SystemDesignView, 'subject-view-system-design', 'subject-topic-list-systemDesign', ['SDLC + SSDLC']]
] as const;

const emptySubjectRouteCases = [
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
