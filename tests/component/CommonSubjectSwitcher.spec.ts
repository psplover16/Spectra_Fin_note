import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router';
import CommonSubjectSwitcher from '@/modules/commonSubjects/components/CommonSubjectSwitcher.vue';

function createTestRouter(initialPath = '/computer-principles') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/computer-principles', component: { template: '<section>計算機原理</section>' } },
      { path: '/english', component: { template: '<section>英文</section>' } },
      { path: '/chinese', component: { template: '<section>國文</section>' } }
    ]
  });

  return router.push(initialPath).then(async () => {
    await router.isReady();
    return router;
  });
}

async function mountSwitcher(initialPath?: string) {
  const router = await createTestRouter(initialPath);
  const wrapper = mount(CommonSubjectSwitcher, {
    global: {
      plugins: [router]
    }
  });

  return { wrapper, router };
}

describe('CommonSubjectSwitcher', () => {
  it('defaults to English and opens an English/Chinese menu', async () => {
    const { wrapper } = await mountSwitcher();

    const control = wrapper.get('[data-testid="route-tab-common-subject"]');
    expect(control.text()).toContain('英文');

    await control.trigger('click');

    const menu = wrapper.get('[data-testid="common-subject-menu"]');
    expect(menu.text()).toContain('英文');
    expect(menu.text()).toContain('國文');
  });

  it('navigates to Chinese and updates the visible label', async () => {
    const { wrapper, router } = await mountSwitcher();

    await wrapper.get('[data-testid="route-tab-common-subject"]').trigger('click');
    await wrapper.get('[data-testid="common-subject-option-chinese"]').trigger('click');
    await flushPromises();
    await router.isReady();

    expect(router.currentRoute.value.path).toBe('/chinese');
    expect(wrapper.get('[data-testid="route-tab-common-subject"]').text()).toContain('國文');
    expect(wrapper.find('[data-testid="common-subject-menu"]').exists()).toBe(false);
  });

  it('closes the menu with Escape and with the overlay', async () => {
    const { wrapper } = await mountSwitcher();
    const control = wrapper.get('[data-testid="route-tab-common-subject"]');

    await control.trigger('click');
    await control.trigger('keydown', { key: 'Escape' });
    expect(wrapper.find('[data-testid="common-subject-menu"]').exists()).toBe(false);

    await control.trigger('click');
    await wrapper.get('[data-testid="common-subject-overlay"]').trigger('click');
    expect(wrapper.find('[data-testid="common-subject-menu"]').exists()).toBe(false);
  });
});
