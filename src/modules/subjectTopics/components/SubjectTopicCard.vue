<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import BookmarkRegularIcon from '~icons/fa6-regular/bookmark';
import BookmarkSolidIcon from '~icons/fa6-solid/bookmark';
import type { SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const props = withDefaults(
  defineProps<{
    topic: SubjectTopic;
    completed: boolean;
    bookmarked: boolean;
    showBookmark: boolean;
    defaultExpanded?: boolean;
  }>(),
  {
    defaultExpanded: false
  }
);

const emit = defineEmits<{
  'update:completed': [completed: boolean];
  'update:bookmarked': [bookmarked: boolean];
}>();

const htmlPageHref = computed(() => props.topic.htmlPage?.href.trim() ?? '');
const hasHtmlPage = computed(() => htmlPageHref.value.length > 0);
const isExpanded = ref(!hasHtmlPage.value && props.defaultExpanded);
const detailId = computed(() => `topic-detail-${props.topic.id}`);
const titleId = computed(() => `topic-title-${props.topic.id}`);

watch(
  () => props.defaultExpanded,
  (defaultExpanded) => {
    isExpanded.value = !hasHtmlPage.value && defaultExpanded;
  }
);

function toggleExpanded() {
  if (hasHtmlPage.value) {
    return;
  }

  isExpanded.value = !isExpanded.value;
}

function toggleBookmark() {
  emit('update:bookmarked', !props.bookmarked);
}

function updateCompleted(event: Event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  if (target.checked) {
    isExpanded.value = false;
  }

  emit('update:completed', target.checked);
}
</script>

<template>
  <article
    :data-testid="`subject-topic-card-${props.topic.id}`"
    class="subject-topic-card"
    :class="{ 'is-completed': props.completed }"
  >
    <header class="subject-topic-header">
      <button
        v-if="props.showBookmark"
        type="button"
        :data-testid="`topic-bookmark-${props.topic.id}`"
        class="topic-icon-button topic-bookmark-button"
        :aria-label="props.bookmarked ? `取消 ${props.topic.title} 書籤` : `標記 ${props.topic.title} 為閱讀位置`"
        :aria-pressed="props.bookmarked"
        @click="toggleBookmark"
      >
        <BookmarkSolidIcon v-if="props.bookmarked" aria-hidden="true" />
        <BookmarkRegularIcon v-else aria-hidden="true" />
      </button>
      <span v-else class="topic-bookmark-spacer" aria-hidden="true"></span>

      <button
        v-if="!hasHtmlPage"
        :id="titleId"
        type="button"
        :data-testid="`topic-title-${props.topic.id}`"
        class="subject-topic-title-control"
        :aria-expanded="isExpanded"
        :aria-controls="detailId"
        @click="toggleExpanded"
      >
        <span class="subject-topic-title">{{ props.topic.title }}</span>
      </button>
      <a
        v-else
        :id="titleId"
        :data-testid="`topic-title-${props.topic.id}`"
        class="subject-topic-title-control"
        :href="htmlPageHref"
      >
        <span class="subject-topic-title">{{ props.topic.title }}</span>
      </a>

      <label class="topic-completion-control" :aria-label="`標記 ${props.topic.title} 已學完`">
        <input
          type="checkbox"
          :data-testid="`topic-complete-${props.topic.id}`"
          :checked="props.completed"
          @change="updateCompleted"
        />
      </label>
    </header>

    <div v-if="isExpanded && !hasHtmlPage" :id="detailId" :data-testid="detailId" class="subject-topic-detail" :aria-labelledby="titleId">
      <slot :topic="props.topic" />
    </div>
  </article>
</template>
