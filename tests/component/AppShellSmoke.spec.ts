import { flushPromises, mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router';
import AppShell from '@/app/AppShell.vue';
import { routeComponentLoaders } from '@/app/routePreload';

function createTestRouter(initialPath = '/computer-principles') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', redirect: '/computer-principles' },
      { path: '/computer-principles', component: routeComponentLoaders['/computer-principles'] },
      { path: '/computer-principles-v2', component: routeComponentLoaders['/computer-principles-v2'] },
      { path: '/networking', component: routeComponentLoaders['/networking'] },
      { path: '/networking-v2', component: { template: '<section>網路概論(v2)</section>' } },
      { path: '/digital-logic', component: routeComponentLoaders['/digital-logic'] },
      { path: '/operating-systems', component: routeComponentLoaders['/operating-systems'] },
      { path: '/information-management', component: routeComponentLoaders['/information-management'] },
      { path: '/programming', component: routeComponentLoaders['/programming'] },
      { path: '/database', component: routeComponentLoaders['/database'] },
      { path: '/database-v2', component: { template: '<section data-testid="subject-view-database-v2">資料庫2</section>' } },
      { path: '/algorithms', component: routeComponentLoaders['/algorithms'] },
      { path: '/system-design', component: routeComponentLoaders['/system-design'] },
      { path: '/english', component: routeComponentLoaders['/english'] },
      { path: '/chinese', component: routeComponentLoaders['/chinese'] },
      { path: '/:pathMatch(.*)*', redirect: '/computer-principles' }
    ]
  });

  return router.push(initialPath).then(async () => {
    await router.isReady();
    return router;
  });
}

describe('AppShell smoke', () => {
  it('renders the app shell and main route region', async () => {
    const router = await createTestRouter();

    const wrapper = mount(AppShell, {
      global: {
        plugins: [router]
      }
    });

    expect(wrapper.get('[data-testid="app-shell"]').attributes('data-testid')).toBe('app-shell');
    const computerFoundationControl = wrapper.get('[data-testid="route-tab-computer-foundation"]');
    expect(computerFoundationControl.text()).toContain('計概');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('資管');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('程式');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('資料庫');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('演算法');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('系統設計');
    expect(wrapper.find('[data-testid="route-tab-common-subject"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="route-tabs"]').text()).not.toContain('英文');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).not.toContain('國文');
    expect(wrapper.get('[data-testid="app-main"]').text()).toContain('計算機原理');
  });

  it('opens a computer-foundation menu for split computer principles routes', async () => {
    const router = await createTestRouter();

    const wrapper = mount(AppShell, {
      global: {
        plugins: [router]
      }
    });
    await flushPromises();

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');

    const menu = wrapper.get('[data-testid="computer-foundation-subject-menu"]');
    expect(menu.text()).toContain('計概');
    expect(menu.text()).toContain('計概(v2)');
    expect(menu.text()).toContain('網概');
    expect(menu.text()).toContain('網路概論(v2)');
    expect(menu.text()).toContain('數位邏輯');
    expect(menu.text()).toContain('作業系統');

    await wrapper.get('[data-testid="computer-foundation-subject-option-digital-logic"]').trigger('click');
    await flushPromises();

    await vi.waitFor(() => {
      expect(router.currentRoute.value.path).toBe('/digital-logic');
    });

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');
    await wrapper.get('[data-testid="computer-foundation-subject-option-computer-principles-v2"]').trigger('click');
    await flushPromises();

    await vi.waitFor(() => {
      expect(router.currentRoute.value.path).toBe('/computer-principles-v2');
    });
    expect(wrapper.get('[data-testid="app-main"]').text()).toContain('計概(v2)');

    await wrapper.get('[data-testid="route-tab-computer-foundation"]').trigger('click');
    await wrapper.get('[data-testid="computer-foundation-subject-option-networking-v2"]').trigger('click');
    await flushPromises();

    await vi.waitFor(() => {
      expect(router.currentRoute.value.path).toBe('/networking-v2');
    });
    expect(wrapper.find('[data-testid="route-tab-networking-v2"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="app-main"]').text()).toContain('網路概論(v2)');
  });

  it('opens a database menu that defaults to database and preserves database v2 navigation', async () => {
    const router = await createTestRouter();

    const wrapper = mount(AppShell, {
      global: {
        plugins: [router]
      }
    });
    await flushPromises();

    const databaseTrigger = wrapper.get('[data-testid="route-tab-database"]');
    expect(databaseTrigger.text()).toContain('資料庫');
    expect(databaseTrigger.text()).not.toContain('資料庫2');

    await databaseTrigger.trigger('click');

    const menu = wrapper.get('[data-testid="database-subject-menu"]');
    expect(menu.text()).toContain('資料庫');
    expect(menu.text()).toContain('資料庫2');

    await wrapper.get('[data-testid="database-subject-option-database"]').trigger('click');
    await flushPromises();

    await vi.waitFor(() => {
      expect(router.currentRoute.value.path).toBe('/database');
    });
    expect(wrapper.get('[data-testid="route-tab-database"]').text()).toContain('資料庫');

    await wrapper.get('[data-testid="route-tab-database"]').trigger('click');
    await wrapper.get('[data-testid="database-subject-option-database-v2"]').trigger('click');
    await flushPromises();

    await vi.waitFor(() => {
      expect(router.currentRoute.value.path).toBe('/database-v2');
    });
    expect(wrapper.get('[data-testid="route-tab-database"]').text()).toContain('資料庫2');
    expect(wrapper.get('[data-testid="app-main"]').text()).toContain('資料庫2');
  });
});
