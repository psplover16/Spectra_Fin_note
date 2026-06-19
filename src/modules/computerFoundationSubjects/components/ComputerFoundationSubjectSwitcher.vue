<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { preloadRouteComponent } from '@/app/routePreload';
import RouteSubMenu from '@/shared/components/RouteSubMenu.vue';
import {
  computerFoundationSubjectOptions,
  defaultComputerFoundationSubjectOption,
  findComputerFoundationSubjectOptionByPath
} from '@/modules/computerFoundationSubjects/config/computerFoundationSubjectOptions';

interface RouteSubMenuSelection {
  path: string;
}

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);

const currentComputerFoundationSubject = computed(
  () => findComputerFoundationSubjectOptionByPath(route.path) ?? defaultComputerFoundationSubjectOption
);
const isComputerFoundationSubjectRoute = computed(() => findComputerFoundationSubjectOptionByPath(route.path) !== undefined);
const triggerClass = computed(() =>
  isComputerFoundationSubjectRoute.value ? 'border-clay bg-clay text-white' : 'border-clay/20 bg-white/75 text-ink hover:bg-sand/70'
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

function selectComputerFoundationSubject(option: RouteSubMenuSelection) {
  const selectedOption = findComputerFoundationSubjectOptionByPath(option.path);

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
      data-testid="route-tab-computer-foundation"
      class="route-tab-link"
      :class="triggerClass"
      aria-haspopup="menu"
      :aria-expanded="isMenuOpen"
      aria-controls="computer-foundation-subject-menu"
      @click="toggleMenu"
      @keydown.escape.prevent.stop="closeMenu"
      @pointerenter="prepareRoute(currentComputerFoundationSubject.path)"
      @focus="prepareRoute(currentComputerFoundationSubject.path)"
      @touchstart.passive="prepareRoute(currentComputerFoundationSubject.path)"
    >
      {{ currentComputerFoundationSubject.label }}
    </button>

    <RouteSubMenu
      v-if="isMenuOpen"
      :options="computerFoundationSubjectOptions"
      :active-path="route.path"
      overlay-test-id="computer-foundation-subject-overlay"
      menu-id="computer-foundation-subject-menu"
      menu-test-id="computer-foundation-subject-menu"
      aria-label="計概類"
      menu-align="start"
      @close="closeMenu"
      @select="selectComputerFoundationSubject"
      @prepare="prepareRoute"
    />
  </div>
</template>
