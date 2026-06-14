import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SubjectTopicCard from '@/modules/subjectTopics/components/SubjectTopicCard.vue';
import type { SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const topic: SubjectTopic = {
  id: 'number-systems',
  subjectKey: 'computerPrinciples',
  title: '數字系統與進位',
  summary: '預留二進位、十進位與十六進位的整理位置。',
  blocks: [{ kind: 'paragraph', text: '詳細內容' }]
};

function mountCard(props: Partial<InstanceType<typeof SubjectTopicCard>['$props']> = {}) {
  return mount(SubjectTopicCard, {
    props: {
      topic,
      completed: false,
      bookmarked: false,
      showBookmark: true,
      defaultExpanded: false,
      ...props
    },
    slots: {
      default: '<p data-testid="slot-detail">詳細內容</p>'
    }
  });
}

describe('SubjectTopicCard', () => {
  it('renders bookmark, completion, and title controls around a collapsed detail slot', () => {
    const wrapper = mountCard();

    expect(wrapper.get('[data-testid="subject-topic-card-number-systems"]').text()).toContain('數字系統與進位');
    expect(wrapper.get('[data-testid="topic-bookmark-number-systems"]').attributes('aria-pressed')).toBe('false');
    expect(wrapper.get('[data-testid="topic-complete-number-systems"]').attributes('type')).toBe('checkbox');
    expect(wrapper.get('[data-testid="topic-title-number-systems"]').text()).toContain('數字系統與進位');
    expect(wrapper.find('[data-testid="topic-detail-number-systems"]').exists()).toBe(false);
  });

  it('does not render topic summary as a section subtitle in the header', () => {
    const wrapper = mountCard();

    expect(wrapper.get('[data-testid="topic-title-number-systems"]').text()).toBe('數字系統與進位');
    expect(wrapper.get('[data-testid="topic-title-number-systems"]').text()).not.toContain(
      '預留二進位、十進位與十六進位的整理位置。'
    );
  });

  it('toggles detail content when the title control is activated', async () => {
    const wrapper = mountCard();
    const titleControl = wrapper.get('[data-testid="topic-title-number-systems"]');

    await titleControl.trigger('click');
    expect(wrapper.get('[data-testid="topic-detail-number-systems"]').text()).toContain('詳細內容');

    await titleControl.trigger('click');
    expect(wrapper.find('[data-testid="topic-detail-number-systems"]').exists()).toBe(false);
  });

  it('emits bookmark and completion updates and collapses after completion', async () => {
    const wrapper = mountCard({ defaultExpanded: true });

    await wrapper.get('[data-testid="topic-bookmark-number-systems"]').trigger('click');
    expect(wrapper.emitted('update:bookmarked')).toEqual([[true]]);

    await wrapper.get<HTMLInputElement>('[data-testid="topic-complete-number-systems"]').setValue(true);
    expect(wrapper.emitted('update:completed')).toEqual([[true]]);
    expect(wrapper.find('[data-testid="topic-detail-number-systems"]').exists()).toBe(false);
  });
});
