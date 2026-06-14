<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    language: string;
    code: string;
    title?: string;
    description?: string;
  }>(),
  {
    title: '',
    description: ''
  }
);

const hasCode = computed(() => props.code.trim().length > 0);
const languageLabel = computed(() => (props.language.trim().toLowerCase() === 'java' ? 'Java' : 'plain text'));
</script>

<template>
  <section data-testid="teaching-code-block" class="teaching-code-block">
    <header class="teaching-code-header">
      <div class="teaching-code-heading">
        <p v-if="props.title" data-testid="teaching-code-title" class="teaching-code-title">{{ props.title }}</p>
        <p v-if="props.description" data-testid="teaching-code-description" class="teaching-code-description">
          {{ props.description }}
        </p>
      </div>
      <span data-testid="teaching-code-language" class="teaching-code-language">{{ languageLabel }}</span>
    </header>

    <p v-if="!hasCode" data-testid="teaching-code-empty" class="teaching-code-empty">尚未提供程式碼範例。</p>
    <pre v-else data-testid="teaching-code-region" class="teaching-code-region"><code
      data-testid="teaching-code-code"
      class="teaching-code-code"
    >{{ props.code }}</code></pre>
  </section>
</template>
