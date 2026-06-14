<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { preloadPrimaryRouteComponentsOnIdle } from '@/app/routePreload';
import RouteTabs from '@/shared/components/RouteTabs.vue';

onMounted(() => {
  preloadPrimaryRouteComponentsOnIdle();
});
</script>

<template>
  <div data-testid="app-shell" class="app-shell">
    <header data-testid="app-header" class="app-header">
      <RouteTabs />
    </header>

    <main data-testid="app-main" class="app-main">
      <RouterView v-slot="{ Component, route }">
        <KeepAlive>
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </RouterView>
    </main>
  </div>
</template>
