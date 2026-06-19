<script setup lang="ts">
interface RouteSubMenuOption {
  value: string;
  label: string;
  path: string;
  testId: string;
}

defineProps<{
  options: readonly RouteSubMenuOption[];
  activePath: string;
  overlayTestId?: string;
  menuId?: string;
  menuTestId?: string;
  ariaLabel?: string;
  menuAlign?: 'start' | 'end';
}>();

const emit = defineEmits<{
  close: [];
  select: [option: RouteSubMenuOption];
  prepare: [path: string];
}>();

function closeMenu() {
  emit('close');
}

function selectOption(option: RouteSubMenuOption) {
  emit('select', option);
}

function prepareRoute(path: string) {
  emit('prepare', path);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  closeMenu();
}
</script>

<template>
  <div
    :data-testid="overlayTestId ?? 'common-subject-overlay'"
    class="route-sub-menu-overlay"
    aria-hidden="true"
    @click="closeMenu"
  />
  <div
    :id="menuId ?? 'common-subject-menu'"
    :data-testid="menuTestId ?? 'common-subject-menu'"
    class="route-sub-menu"
    :class="menuAlign === 'start' ? 'route-sub-menu-start' : 'route-sub-menu-end'"
    role="menu"
    :aria-label="ariaLabel ?? '共同科目'"
    @keydown="handleKeydown"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :data-testid="option.testId"
      class="route-sub-menu-item"
      role="menuitemradio"
      :aria-checked="activePath === option.path"
      @click="selectOption(option)"
      @pointerenter="prepareRoute(option.path)"
      @focus="prepareRoute(option.path)"
      @touchstart.passive="prepareRoute(option.path)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
