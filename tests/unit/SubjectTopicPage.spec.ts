import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
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
