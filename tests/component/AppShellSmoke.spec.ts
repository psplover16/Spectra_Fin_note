import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AppShell from '@/app/AppShell.vue';
import router from '@/app/router';

describe('AppShell smoke', () => {
  it('renders the app shell and main route region', async () => {
    await router.push('/computer-principles');
    await router.isReady();

    const wrapper = mount(AppShell, {
      global: {
        plugins: [router]
      }
    });

    expect(wrapper.get('[data-testid="app-shell"]').attributes('data-testid')).toBe('app-shell');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('計概');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('網概');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('資管');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('程式');
    expect(wrapper.get('[data-testid="route-tabs"]').text()).toContain('英文');
    expect(wrapper.get('[data-testid="app-main"]').text()).toContain('計算機原理');
  });
});
