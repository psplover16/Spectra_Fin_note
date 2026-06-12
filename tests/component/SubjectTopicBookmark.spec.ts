import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';
import { subjectTopicProgressStorageKey } from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';

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

describe('SubjectTopicPage bookmark flow', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('keeps one bookmark per subject and clears it when the bookmarked topic is completed', async () => {
    const wrapper = mountComputerPrinciplesPage();

    await wrapper.get('[data-testid="topic-bookmark-number-systems"]').trigger('click');
    expect(wrapper.get('[data-testid="topic-bookmark-number-systems"]').attributes('aria-pressed')).toBe('true');

    await wrapper.get('[data-testid="topic-bookmark-binary-tree-basics"]').trigger('click');
    expect(wrapper.get('[data-testid="topic-bookmark-binary-tree-basics"]').attributes('aria-pressed')).toBe('true');
    expect(wrapper.get('[data-testid="topic-bookmark-number-systems"]').attributes('aria-pressed')).toBe('false');

    let storedProgress = JSON.parse(localStorage.getItem(subjectTopicProgressStorageKey) ?? '{}');
    expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBe('binary-tree-basics');

    await wrapper.get<HTMLInputElement>('[data-testid="topic-complete-binary-tree-basics"]').setValue(true);

    expect(wrapper.get('[data-testid="subject-topic-finished-computerPrinciples"]').text()).toContain('二元樹基礎');
    expect(wrapper.find('[data-testid="topic-bookmark-binary-tree-basics"]').exists()).toBe(false);
    storedProgress = JSON.parse(localStorage.getItem(subjectTopicProgressStorageKey) ?? '{}');
    expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBeNull();
  });
});
