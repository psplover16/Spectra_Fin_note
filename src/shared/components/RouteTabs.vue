<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { preloadRouteComponent } from '@/app/routePreload';
import CommonSubjectSwitcher from '@/modules/commonSubjects/components/CommonSubjectSwitcher.vue';

interface RouteTab {
  to: string;
  label: string;
  testId: string;
}

const route = useRoute();

const primaryTabs = [
  { to: '/computer-principles', label: '計概', testId: 'route-tab-computer-principles' },
  { to: '/networking', label: '網概', testId: 'route-tab-networking' },
  { to: '/information-management', label: '資管', testId: 'route-tab-information-management' },
  { to: '/programming', label: '程式', testId: 'route-tab-programming' }
] as const satisfies readonly RouteTab[];

function prepareRoute(to: string) {
  void preloadRouteComponent(to);
}

function routeTabClass(to: string): string {
  return route.path === to ? 'border-clay bg-clay text-white' : 'border-clay/20 bg-white/75 text-ink hover:bg-sand/70';
}
</script>

<template>
  <nav data-testid="route-tabs" class="route-tabs" aria-label="主要科目">
    <RouterLink
      v-for="tab in primaryTabs"
      :key="tab.to"
      :to="tab.to"
      :data-testid="tab.testId"
      class="route-tab-link"
      :class="routeTabClass(tab.to)"
      @pointerenter="prepareRoute(tab.to)"
      @focus="prepareRoute(tab.to)"
      @touchstart.passive="prepareRoute(tab.to)"
    >
      {{ tab.label }}
    </RouterLink>
    <CommonSubjectSwitcher />
  </nav>
</template>
