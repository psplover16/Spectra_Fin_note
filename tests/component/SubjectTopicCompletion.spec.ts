import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

function mountComputerPrinciplesPage() {
  return mount(SubjectTopicPage, {
    props: {
      title: '計算機原理',
      subjectKey: 'computerPrinciples',
      testId: 'subject-view-computer-principles',
      topics: getPlaceholderTopics('computerPrinciples')
    }
  });
}

describe('SubjectTopicPage completion flow', () => {
  it('moves completed topics to the finished zone and back to unfinished when unchecked', async () => {
    const wrapper = mountComputerPrinciplesPage();

    expect(wrapper.get('[data-testid="subject-topic-unfinished-computerPrinciples"]').text()).toContain('二元樹基礎');
    expect(wrapper.get('[data-testid="subject-topic-finished-computerPrinciples"]').text()).not.toContain('二元樹基礎');

    await wrapper.get('[data-testid="topic-title-binary-tree-basics"]').trigger('click');
    expect(wrapper.find('[data-testid="topic-detail-binary-tree-basics"]').exists()).toBe(true);

    await wrapper.get<HTMLInputElement>('[data-testid="topic-complete-binary-tree-basics"]').setValue(true);

    expect(wrapper.get('[data-testid="subject-topic-unfinished-computerPrinciples"]').text()).not.toContain('二元樹基礎');
    expect(wrapper.get('[data-testid="subject-topic-finished-computerPrinciples"]').text()).toContain('二元樹基礎');
    expect(wrapper.find('[data-testid="topic-detail-binary-tree-basics"]').exists()).toBe(false);
    expect(wrapper.get<HTMLInputElement>('[data-testid="topic-complete-binary-tree-basics"]').element.checked).toBe(true);

    await wrapper.get<HTMLInputElement>('[data-testid="topic-complete-binary-tree-basics"]').setValue(false);

    expect(wrapper.get('[data-testid="subject-topic-unfinished-computerPrinciples"]').text()).toContain('二元樹基礎');
    expect(wrapper.get('[data-testid="subject-topic-finished-computerPrinciples"]').text()).not.toContain('二元樹基礎');
  });
});
