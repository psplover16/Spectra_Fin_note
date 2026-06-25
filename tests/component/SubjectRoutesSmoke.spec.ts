import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ChineseView from '@/modules/chinese/views/ChineseView.vue';
import AlgorithmsView from '@/modules/algorithms/views/AlgorithmsView.vue';
import ComputerPrinciplesView from '@/modules/computerPrinciples/views/ComputerPrinciplesView.vue';
import ComputerPrinciplesV2View from '@/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue';
import DatabaseView from '@/modules/database/views/DatabaseView.vue';
import DatabaseV2View from '@/modules/databaseV2/views/DatabaseV2View.vue';
import DigitalLogicView from '@/modules/digitalLogic/views/DigitalLogicView.vue';
import EnglishView from '@/modules/english/views/EnglishView.vue';
import InformationManagementView from '@/modules/informationManagement/views/InformationManagementView.vue';
import NetworkingView from '@/modules/networking/views/NetworkingView.vue';
import NetworkingV2View from '@/modules/networkingV2/views/NetworkingV2View.vue';
import OperatingSystemsView from '@/modules/operatingSystems/views/OperatingSystemsView.vue';
import ProgrammingView from '@/modules/programming/views/ProgrammingView.vue';
import SystemDesignView from '@/modules/systemDesign/views/SystemDesignView.vue';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { subjectTopicProgressStorageKey } from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';

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
    ['阿姆達爾定律', 'CPU 排班演算法', '架構與計算理論', '檢查碼（二）漢明碼與漢明距']
  ],
  [AlgorithmsView, 'subject-view-algorithms', 'subject-topic-list-algorithms', ['二元搜尋法(Binary Search)']],
  [NetworkingView, 'subject-view-networking', 'subject-topic-list-networking', ['OSI 七層 + TCP/IP ★']],
  [
    NetworkingV2View,
    'subject-view-networking-v2',
    'subject-topic-list-networkingV2',
    ['OSI 七層 + TCP/IP ★', '防禦設備與攻擊類型 ★']
  ],
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
  [DatabaseV2View, 'subject-view-database-v2', 'subject-topic-list-databaseV2', ['ANSI-SPARC三層架構']],
  [SystemDesignView, 'subject-view-system-design', 'subject-topic-list-systemDesign', ['SDLC + SSDLC']]
] as const;

const emptySubjectRouteCases = [
  [EnglishView, 'subject-view-english', '英文', ['閱讀策略']],
  [ChineseView, 'subject-view-chinese', '國文', ['文章結構']]
] as const;

describe('subject route views', () => {
  beforeEach(() => {
    localStorage.clear();
  });

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

  it('renders split Computer Principles v2 supplemental cards after practice and before catalog topics', async () => {
    const wrapper = mount(ComputerPrinciplesV2View);
    const unfinishedSection = wrapper.get('[data-testid="subject-topic-unfinished-computerPrinciplesV2"]');
    const practiceCard = wrapper.get('[data-testid="subject-topic-card-cpv2-supplemental-practice"]');
    const splitSupplementalCardIds = [
      'cpv2-supplemental-amdahl-law',
      'cpv2-supplemental-cpu-scheduling',
      'cpv2-supplemental-deadlock',
      'cpv2-supplemental-paging-segmentation',
      'cpv2-supplemental-oop-characteristics',
      'cpv2-supplemental-basic-data-structures'
    ];
    const splitSupplementalCards = splitSupplementalCardIds.map((topicId) =>
      wrapper.get(`[data-testid="subject-topic-card-${topicId}"]`)
    );
    const firstSplitSupplementalCard = splitSupplementalCards[0];
    const lastSplitSupplementalCard = splitSupplementalCards.at(-1);
    const architectureCard = wrapper.get('[data-testid="subject-topic-card-cpv2-architecture-computation-theory"]');

    if (!firstSplitSupplementalCard || !lastSplitSupplementalCard) {
      throw new Error('Computer Principles v2 split supplemental cards should exist');
    }

    expect(wrapper.find('[data-testid="subject-route-sections-computerPrinciplesV2"]').exists()).toBe(false);
    expect(unfinishedSection.element.contains(practiceCard.element)).toBe(true);
    for (const splitSupplementalCard of splitSupplementalCards) {
      expect(unfinishedSection.element.contains(splitSupplementalCard.element)).toBe(true);
      expect(splitSupplementalCard.classes()).toContain('subject-topic-card');
    }
    expect(practiceCard.classes()).toContain('subject-topic-card');
    expect(practiceCard.text()).toContain('加強練習');
    expect(splitSupplementalCards.map((card) => card.text())).toEqual([
      expect.stringContaining('阿姆達爾定律'),
      expect.stringContaining('CPU 排班演算法'),
      expect.stringContaining('死結'),
      expect.stringContaining('分頁與分段記憶體管理'),
      expect.stringContaining('物件導向特性'),
      expect.stringContaining('基礎資料結構')
    ]);
    expect(wrapper.find('[data-testid="subject-topic-card-cpv2-supplemental-data"]').exists()).toBe(false);
    expect(practiceCard.element.compareDocumentPosition(firstSplitSupplementalCard.element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    for (let index = 0; index < splitSupplementalCards.length - 1; index += 1) {
      const currentCard = splitSupplementalCards[index];
      const nextCard = splitSupplementalCards[index + 1];

      if (!currentCard || !nextCard) {
        throw new Error('Computer Principles v2 split supplemental card order should be complete');
      }

      expect(currentCard.element.compareDocumentPosition(nextCard.element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
    expect(
      lastSplitSupplementalCard.element.compareDocumentPosition(architectureCard.element) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(practiceCard.element.compareDocumentPosition(architectureCard.element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(wrapper.find('[data-testid="topic-detail-cpv2-supplemental-practice"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="topic-detail-cpv2-supplemental-data"]').exists()).toBe(false);

    await wrapper.get('[data-testid="topic-title-cpv2-supplemental-practice"]').trigger('click');

    const practiceDetail = wrapper.get('[data-testid="topic-detail-cpv2-supplemental-practice"]');
    expect(practiceDetail.text()).toContain('指令組成:50% 需 1 週期');
    expect(practiceDetail.text()).toContain('Valid bit');
    expect(practiceDetail.text()).toContain('資管題目:');
    expect(wrapper.find('[data-testid="topic-detail-cpv2-floating-point-conversion"]').exists()).toBe(false);

    await wrapper.get('[data-testid="topic-title-cpv2-supplemental-amdahl-law"]').trigger('click');

    const amdahlDetail = wrapper.get('[data-testid="topic-detail-cpv2-supplemental-amdahl-law"]');
    expect(amdahlDetail.text()).toContain("Amdahl's Law");
    expect(amdahlDetail.text()).toContain('整體加速比');

    await wrapper.get('[data-testid="topic-title-cpv2-supplemental-cpu-scheduling"]').trigger('click');

    const cpuSchedulingDetail = wrapper.get('[data-testid="topic-detail-cpv2-supplemental-cpu-scheduling"]');
    expect(cpuSchedulingDetail.text()).toContain('Round Robin 中,時間量子設定非常大時,行為趨近於?');
    expect(cpuSchedulingDetail.text()).toContain('MLFQ');
    expect(cpuSchedulingDetail.text()).toContain('答案與解析');
    expect(cpuSchedulingDetail.text()).not.toContain('Machine Instruction Cycle');
    expect(cpuSchedulingDetail.text()).not.toContain('Five Functional Units');
    expect(cpuSchedulingDetail.text()).not.toContain('CPU Components');
    expect(cpuSchedulingDetail.text()).not.toContain('Memory Hierarchy');
    expect(wrapper.find('[data-testid="topic-detail-cpv2-supplemental-data"]').exists()).toBe(false);
  });

  it('renders database v2 rows as static HTML links with independent progress controls', async () => {
    const wrapper = mount(DatabaseV2View);

    expect(wrapper.find('[data-testid="topic-detail-database-v2-sql-query"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="topic-title-database-v2-sql-query"]').attributes('href')).toBe(
      '/database-v2/國考資料庫_09_SQL查詢功能.html'
    );

    await wrapper.get('[data-testid="topic-bookmark-database-v2-sql-query"]').trigger('click');
    let storedProgress = JSON.parse(localStorage.getItem(subjectTopicProgressStorageKey) ?? '{}');
    expect(storedProgress.subjects.databaseV2.bookmarkedTopicId).toBe('database-v2-sql-query');

    await wrapper.get<HTMLInputElement>('[data-testid="topic-complete-database-v2-sql-query"]').setValue(true);

    storedProgress = JSON.parse(localStorage.getItem(subjectTopicProgressStorageKey) ?? '{}');
    expect(storedProgress.subjects.databaseV2.bookmarkedTopicId).toBeNull();
    expect(storedProgress.subjects.databaseV2.completedTopicIds).toEqual(['database-v2-sql-query']);
    expect(storedProgress.subjects.database.bookmarkedTopicId).toBeNull();
    expect(storedProgress.subjects.database.completedTopicIds).toEqual([]);
  });
});
