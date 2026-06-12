import { describe, expect, it, vi } from 'vitest';
import { createRoutePreloadRegistry } from '@/app/routePreload';

describe('route preload registry', () => {
  it('reuses pending and completed preload work for the same path', async () => {
    const loader = vi.fn(async () => ({ default: {} }));
    const registry = createRoutePreloadRegistry({
      '/programming': loader
    });

    const first = registry.preload('/programming');
    const second = registry.preload('/programming');

    expect(first).toBe(second);
    await first;

    await registry.preload('/programming');

    expect(loader).toHaveBeenCalledTimes(1);
    expect(registry.isLoaded('/programming')).toBe(true);
    expect(registry.isLoading('/programming')).toBe(false);
  });

  it('ignores unknown paths without failing', async () => {
    const registry = createRoutePreloadRegistry({});

    await expect(registry.preload('/unknown')).resolves.toBeUndefined();
    expect(registry.isLoaded('/unknown')).toBe(false);
  });
});
