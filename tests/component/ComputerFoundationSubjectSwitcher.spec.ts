import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router';
import ComputerFoundationSubjectSwitcher from '@/modules/computerFoundationSubjects/components/ComputerFoundationSubjectSwitcher.vue';

function createTestRouter(initialPath = '/computer-principles') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/computer-principles', component: { template: '<section>計算機原理</section>' } },
      { path: '/computer-principles-v2', component: { template: '<section>計概(v2)</section>' } },
      { path: '/networking', component: { template: '<section>網路概論</section>' } },
      { path: '/digital-logic', component: { template: '<section>數位邏輯</section>' } },
      { path: '/operating-systems', component: { template: '<section>作業系統</section>' } }
    ]
  });

  return router.push(initialPath).then(async () => {
    await router.isReady();
    return router;
  });
}

async function mountSwitcher(initialPath?: string) {
  const router = await createTestRouter(initialPath);
  const wrapper = mount(ComputerFoundationSubjectSwitcher, {
    global: {
      plugins: [router]
    }
  });

  return { wrapper, router };
}

describe('ComputerFoundationSubjectSwitcher', () => {
  it('opens the computer-foundation menu with all split route options', async () => {
    const { wrapper } = await mountSwitcher();

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');

    const menu = wrapper.get('[data-testid="computer-foundation-subject-menu"]');
    expect(menu.text()).toContain('計概');
    expect(menu.text()).toContain('計概(v2)');
    expect(menu.text()).toContain('網概');
    expect(menu.text()).toContain('數位邏輯');
    expect(menu.text()).toContain('作業系統');
  });

  it('navigates to digital logic and updates the visible label', async () => {
    const { wrapper, router } = await mountSwitcher();

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');
    await wrapper.get('[data-testid="computer-foundation-subject-option-digital-logic"]').trigger('click');
    await flushPromises();

    expect(router.currentRoute.value.path).toBe('/digital-logic');
    expect(wrapper.get('[data-testid="route-tab-computer-foundation"]').text()).toContain('數位邏輯');
    expect(wrapper.find('[data-testid="computer-foundation-subject-menu"]').exists()).toBe(false);
  });

  it('navigates to computer principles v2 and updates the visible label', async () => {
    const { wrapper, router } = await mountSwitcher();

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');
    await wrapper.get('[data-testid="computer-foundation-subject-option-computer-principles-v2"]').trigger('click');
    await flushPromises();

    expect(router.currentRoute.value.path).toBe('/computer-principles-v2');
    expect(wrapper.get('[data-testid="route-tab-computer-foundation"]').text()).toContain('計概(v2)');
    expect(wrapper.find('[data-testid="computer-foundation-subject-menu"]').exists()).toBe(false);
  });
});
