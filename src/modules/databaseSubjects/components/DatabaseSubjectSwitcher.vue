<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { preloadRouteComponent } from '@/app/routePreload';
import RouteSubMenu from '@/shared/components/RouteSubMenu.vue';
import {
  databaseSubjectOptions,
  defaultDatabaseSubjectOption,
  findDatabaseSubjectOptionByPath
} from '@/modules/databaseSubjects/config/databaseSubjectOptions';

interface RouteSubMenuSelection {
  path: string;
}

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const currentDatabaseSubject = computed(() => findDatabaseSubjectOptionByPath(route.path) ?? defaultDatabaseSubjectOption);
const isDatabaseSubjectRoute = computed(() => findDatabaseSubjectOptionByPath(route.path) !== undefined);
const triggerClass = computed(() =>
  isDatabaseSubjectRoute.value ? 'border-clay bg-clay text-white' : 'border-clay/20 bg-white/75 text-ink hover:bg-sand/70'
);

watch(
  () => route.path,
  () => {
    closeMenu();
  }
);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function prepareRoute(path: string) {
  void preloadRouteComponent(path);
}

function selectDatabaseSubject(option: RouteSubMenuSelection) {
  const selectedOption = findDatabaseSubjectOptionByPath(option.path);

  closeMenu();

  if (!selectedOption) {
    return;
  }

  void router.push(selectedOption.path);
}
</script>

<template>
  <div class="common-subject-switcher">
    <button
      type="button"
      data-testid="route-tab-database"
      class="route-tab-link"
      :class="triggerClass"
      aria-haspopup="menu"
      :aria-expanded="isMenuOpen"
      aria-controls="database-subject-menu"
      @click="toggleMenu"
      @keydown.escape.prevent.stop="closeMenu"
      @pointerenter="prepareRoute(currentDatabaseSubject.path)"
      @focus="prepareRoute(currentDatabaseSubject.path)"
      @touchstart.passive="prepareRoute(currentDatabaseSubject.path)"
    >
      {{ currentDatabaseSubject.label }}
    </button>

    <RouteSubMenu
      v-if="isMenuOpen"
      :options="databaseSubjectOptions"
      :active-path="route.path"
      overlay-test-id="database-subject-overlay"
      menu-id="database-subject-menu"
      menu-test-id="database-subject-menu"
      aria-label="資料庫類"
      menu-align="start"
      @close="closeMenu"
      @select="selectDatabaseSubject"
      @prepare="prepareRoute"
    />
  </div>
</template>
