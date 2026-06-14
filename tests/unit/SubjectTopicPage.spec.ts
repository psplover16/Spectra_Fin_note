import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import type { SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const newlineTopic: SubjectTopic = {
  id: 'newline-fixture',
  subjectKey: 'computerPrinciples',
  title: '換行測試',
  summary: '確認 learner-facing text 可以呈現換行。',
  blocks: [
    {
      kind: 'paragraph',
      text: '主題第一行\n主題第二行'
    },
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '換行測試',
      lead: ['lead 第一行\nlead 第二行'],
      sections: [
        {
          heading: '換行 section',
          blocks: [
            {
              kind: 'paragraph',
              text: '段落第一行\n段落第二行'
            },
            {
              kind: 'bulletList',
              items: ['bullet 第一行\nbullet 第二行']
            },
            {
              kind: 'orderedList',
              items: ['ordered 第一行\nordered 第二行']
            },
            {
              kind: 'table',
              headers: ['欄位'],
              rows: [['儲存格第一行\n儲存格第二行']]
            }
          ]
        }
      ]
    }
  ]
};

describe('SubjectTopicPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('opens only the route last topic by default when the development preview flag is enabled', () => {
    const firstTopic: SubjectTopic = {
      id: 'first-topic',
      subjectKey: 'computerPrinciples',
      title: '第一個 section',
      summary: '第一個 section 不應自動打開。',
      blocks: [{ kind: 'paragraph', text: '第一段內容' }]
    };
    const lastTopic: SubjectTopic = {
      id: 'last-topic',
      subjectKey: 'computerPrinciples',
      title: '最後一個 section',
      summary: '最後一個 section 在開發階段自動打開。',
      blocks: [{ kind: 'paragraph', text: '最後一段內容' }]
    };

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [firstTopic, lastTopic],
        openLastTopicByDefault: true
      }
    });

    expect(wrapper.find('[data-testid="topic-detail-first-topic"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="topic-title-first-topic"]').attributes('aria-expanded')).toBe('false');
    expect(wrapper.get('[data-testid="topic-detail-last-topic"]').text()).toContain('最後一段內容');
    expect(wrapper.get('[data-testid="topic-title-last-topic"]').attributes('aria-expanded')).toBe('true');
  });

  it('keeps every route topic collapsed when the development preview flag is disabled', () => {
    const topics: readonly SubjectTopic[] = [
      {
        id: 'first-topic',
        subjectKey: 'computerPrinciples',
        title: '第一個 section',
        summary: '正式階段維持收合。',
        blocks: [{ kind: 'paragraph', text: '第一段內容' }]
      },
      {
        id: 'last-topic',
        subjectKey: 'computerPrinciples',
        title: '最後一個 section',
        summary: '正式階段也維持收合。',
        blocks: [{ kind: 'paragraph', text: '最後一段內容' }]
      }
    ];

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics,
        openLastTopicByDefault: false
      }
    });

    expect(wrapper.find('[data-testid="topic-detail-first-topic"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="topic-detail-last-topic"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="topic-title-first-topic"]').attributes('aria-expanded')).toBe('false');
    expect(wrapper.get('[data-testid="topic-title-last-topic"]').attributes('aria-expanded')).toBe('false');
  });

  it('renders actual newline characters as line breaks in learner-facing text', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [newlineTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-newline-fixture"]').trigger('click');

    const detail = wrapper.find('[data-testid="topic-detail-newline-fixture"]');
    const newlineTextElements = [
      detail.find('[data-testid="topic-block-newline-fixture-paragraph-0"]').element,
      ...detail.findAll('article p').map((paragraph) => paragraph.element),
      ...detail.findAll('li').map((item) => item.element),
      ...detail.findAll('td').map((cell) => cell.element)
    ];

    expect(newlineTextElements.length).toBeGreaterThanOrEqual(6);
    for (const element of newlineTextElements) {
      expect(element.textContent).toContain('\n');
      expect(element).toHaveClass('subject-topic-text');
    }
  });
});
