<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { preloadRouteComponent } from '@/app/routePreload';
import RouteSubMenu from '@/shared/components/RouteSubMenu.vue';
import {
  commonSubjectOptions,
  defaultCommonSubjectOption,
  findCommonSubjectOptionByPath
} from '@/modules/commonSubjects/config/commonSubjectOptions';

interface RouteSubMenuSelection {
  path: string;
}

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const currentCommonSubject = computed(
  () => findCommonSubjectOptionByPath(route.path) ?? defaultCommonSubjectOption
);
const isCommonSubjectRoute = computed(() => findCommonSubjectOptionByPath(route.path) !== undefined);
const triggerClass = computed(() =>
  isCommonSubjectRoute.value ? 'border-clay bg-clay text-white' : 'border-clay/20 bg-white/75 text-ink hover:bg-sand/70'
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

function selectCommonSubject(option: RouteSubMenuSelection) {
  const selectedOption = findCommonSubjectOptionByPath(option.path);

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
      data-testid="route-tab-common-subject"
      class="route-tab-link"
      :class="triggerClass"
      aria-haspopup="menu"
      :aria-expanded="isMenuOpen"
      aria-controls="common-subject-menu"
      @click="toggleMenu"
      @keydown.escape.prevent.stop="closeMenu"
      @pointerenter="prepareRoute(currentCommonSubject.path)"
      @focus="prepareRoute(currentCommonSubject.path)"
      @touchstart.passive="prepareRoute(currentCommonSubject.path)"
    >
      {{ currentCommonSubject.label }}
    </button>

    <RouteSubMenu
      v-if="isMenuOpen"
      :options="commonSubjectOptions"
      :active-path="route.path"
      overlay-test-id="common-subject-overlay"
      menu-id="common-subject-menu"
      menu-test-id="common-subject-menu"
      aria-label="共同科目"
      @close="closeMenu"
      @select="selectCommonSubject"
      @prepare="prepareRoute"
    />
  </div>
</template>
