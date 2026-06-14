import type { Component } from 'vue';

export type PrimaryRoutePath =
  | '/computer-principles'
  | '/networking'
  | '/information-management'
  | '/programming'
  | '/database'
  | '/algorithms'
  | '/english'
  | '/chinese';

export type RouteComponentModule = { default: Component };
export type RouteComponentLoader = () => Promise<RouteComponentModule>;
export type RoutePreloadLoader = () => Promise<unknown>;

export const primaryRoutePaths = [
  '/computer-principles',
  '/networking',
  '/information-management',
  '/programming',
  '/database',
  '/algorithms',
  '/english',
  '/chinese'
] as const satisfies readonly PrimaryRoutePath[];

export const routeComponentLoaders: Record<PrimaryRoutePath, RouteComponentLoader> = {
  '/computer-principles': () => import('@/modules/computerPrinciples/views/ComputerPrinciplesView.vue'),
  '/networking': () => import('@/modules/networking/views/NetworkingView.vue'),
  '/information-management': () => import('@/modules/informationManagement/views/InformationManagementView.vue'),
  '/programming': () => import('@/modules/programming/views/ProgrammingView.vue'),
  '/database': () => import('@/modules/database/views/DatabaseView.vue'),
  '/algorithms': () => import('@/modules/algorithms/views/AlgorithmsView.vue'),
  '/english': () => import('@/modules/english/views/EnglishView.vue'),
  '/chinese': () => import('@/modules/chinese/views/ChineseView.vue')
};

export interface RoutePreloadRegistry {
  preload: (path: string) => Promise<void>;
  preloadMany: (paths: readonly string[]) => Promise<void>;
  isLoaded: (path: string) => boolean;
  isLoading: (path: string) => boolean;
}

export function createRoutePreloadRegistry(loaders: Record<string, RoutePreloadLoader>): RoutePreloadRegistry {
  const loadedRoutes = new Set<string>();
  const loadingRoutes = new Map<string, Promise<void>>();

  function preload(path: string): Promise<void> {
    if (loadedRoutes.has(path)) {
      return Promise.resolve();
    }

    const pendingPreload = loadingRoutes.get(path);
    if (pendingPreload) {
      return pendingPreload;
    }

    const loader = loaders[path];
    if (!loader) {
      return Promise.resolve();
    }

    const preloadPromise = loader()
      .then(() => {
        loadedRoutes.add(path);
      })
      .finally(() => {
        loadingRoutes.delete(path);
      });

    loadingRoutes.set(path, preloadPromise);
    return preloadPromise;
  }

  return {
    preload,
    preloadMany: async (paths) => {
      await Promise.all(paths.map((path) => preload(path)));
    },
    isLoaded: (path) => loadedRoutes.has(path),
    isLoading: (path) => loadingRoutes.has(path)
  };
}

const routePreloadRegistry = createRoutePreloadRegistry(routeComponentLoaders);
let idlePreloadScheduled = false;

export function preloadRouteComponent(path: string): Promise<void> {
  return routePreloadRegistry.preload(path);
}

export function preloadPrimaryRouteComponents(paths: readonly string[] = primaryRoutePaths): Promise<void> {
  return routePreloadRegistry.preloadMany(paths);
}

export function preloadPrimaryRouteComponentsOnIdle(): void {
  if (idlePreloadScheduled || typeof window === 'undefined') {
    return;
  }

  idlePreloadScheduled = true;
  const currentWindow = window as Window & typeof globalThis & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  };
  const pathsToPreload = primaryRoutePaths.filter((path) => path !== '/computer-principles');
  const preload = () => {
    void preloadPrimaryRouteComponents(pathsToPreload);
  };

  if (typeof currentWindow.requestIdleCallback === 'function') {
    currentWindow.requestIdleCallback(preload, { timeout: 2_000 });
    return;
  }

  currentWindow.setTimeout(preload, 500);
}
