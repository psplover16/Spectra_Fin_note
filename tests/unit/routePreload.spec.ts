import { describe, expect, it, vi } from 'vitest';
import { createRoutePreloadRegistry, primaryRoutePaths, routeComponentLoaders } from '@/app/routePreload';

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

  it('includes split computer-foundation and expanded professional route preload loaders', () => {
    expect(primaryRoutePaths).toContain('/computer-principles-v2');
    expect(primaryRoutePaths).toContain('/networking-v2');
    expect(primaryRoutePaths).toContain('/digital-logic');
    expect(primaryRoutePaths).toContain('/operating-systems');
    expect(primaryRoutePaths).toContain('/database');
    expect(primaryRoutePaths).toContain('/algorithms');
    expect(primaryRoutePaths).toContain('/system-design');
    expect(routeComponentLoaders['/computer-principles-v2']).toEqual(expect.any(Function));
    expect((routeComponentLoaders as Partial<Record<string, unknown>>)['/networking-v2']).toEqual(expect.any(Function));
    expect(routeComponentLoaders['/digital-logic']).toEqual(expect.any(Function));
    expect(routeComponentLoaders['/operating-systems']).toEqual(expect.any(Function));
    expect(routeComponentLoaders['/database']).toEqual(expect.any(Function));
    expect(routeComponentLoaders['/algorithms']).toEqual(expect.any(Function));
    expect(routeComponentLoaders['/system-design']).toEqual(expect.any(Function));
  });
});
