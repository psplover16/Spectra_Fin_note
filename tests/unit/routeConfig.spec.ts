import { describe, expect, it } from 'vitest';
import router from '@/app/router';
import { primaryRoutePaths, routeComponentLoaders } from '@/app/routePreload';

describe('route config', () => {
  it('defines root redirect and primary subject routes', () => {
    const routePaths = router.getRoutes().map((route) => route.path);

    expect(router.resolve('/').redirectedFrom).toBeUndefined();
    expect(routePaths).toEqual(
      expect.arrayContaining([
        '/',
        '/computer-principles',
        '/computer-principles-v2',
        '/networking',
        '/networking-v2',
        '/digital-logic',
        '/operating-systems',
        '/information-management',
        '/programming',
        '/database',
        '/database-v2',
        '/algorithms',
        '/system-design',
        '/english',
        '/chinese'
      ])
    );
  });

  it('exposes lazy loaders for every primary route path', () => {
    expect(primaryRoutePaths).toEqual([
      '/computer-principles',
      '/computer-principles-v2',
      '/networking',
      '/networking-v2',
      '/digital-logic',
      '/operating-systems',
      '/information-management',
      '/programming',
      '/database',
      '/database-v2',
      '/algorithms',
      '/system-design',
      '/english',
      '/chinese'
    ]);

    for (const path of primaryRoutePaths) {
      expect(routeComponentLoaders[path]).toEqual(expect.any(Function));
    }
  });
});
