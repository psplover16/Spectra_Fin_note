<script setup lang="ts">
import { ref } from 'vue';
import BookmarkRegularIcon from '~icons/fa6-regular/bookmark';
import BookmarkSolidIcon from '~icons/fa6-solid/bookmark';
import { databaseV2Pages } from '@/modules/databaseV2/data/databaseV2Pages';
import {
  readSubjectTopicProgress,
  saveBookmarkedTopicId,
  saveCompletedTopicIds
} from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';
import type { DatabaseV2Page } from '@/modules/databaseV2/data/databaseV2Pages';

const subjectKey = 'databaseV2';
const initialProgress = readSubjectTopicProgress().subjects[subjectKey];
const completedPageIds = ref<ReadonlySet<string>>(new Set(initialProgress.completedTopicIds));
const bookmarkedPageId = ref<string | null>(initialProgress.bookmarkedTopicId);

function isPageCompleted(page: DatabaseV2Page): boolean {
  return completedPageIds.value.has(page.id);
}

function isPageBookmarked(page: DatabaseV2Page): boolean {
  return bookmarkedPageId.value === page.id;
}

function togglePageBookmark(page: DatabaseV2Page): void {
  bookmarkedPageId.value = isPageBookmarked(page) ? null : page.id;
  saveBookmarkedTopicId(subjectKey, bookmarkedPageId.value);
}

function updatePageCompleted(page: DatabaseV2Page, event: Event): void {
  const target = event.target;

  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const nextCompletedPageIds = new Set(completedPageIds.value);

  if (target.checked) {
    nextCompletedPageIds.add(page.id);
  } else {
    nextCompletedPageIds.delete(page.id);
  }

  completedPageIds.value = nextCompletedPageIds;
  saveCompletedTopicIds(subjectKey, Array.from(nextCompletedPageIds));

  if (target.checked && bookmarkedPageId.value === page.id) {
    bookmarkedPageId.value = null;
    saveBookmarkedTopicId(subjectKey, null);
  }
}
</script>

<template>
  <section data-testid="subject-view-database-v2" class="subject-page">
    <header class="subject-page-header">
      <h1>資料庫2</h1>
    </header>

    <div data-testid="subject-topic-list-databaseV2" class="subject-topic-list">
      <article
        v-for="page in databaseV2Pages"
        :key="page.id"
        :data-testid="`subject-topic-card-${page.id}`"
        class="subject-topic-card"
        :class="{ 'is-completed': isPageCompleted(page) }"
      >
        <header class="subject-topic-header">
          <button
            type="button"
            :data-testid="`topic-bookmark-${page.id}`"
            class="topic-icon-button topic-bookmark-button"
            :aria-label="isPageBookmarked(page) ? `取消 ${page.title} 書籤` : `加入 ${page.title} 書籤`"
            :aria-pressed="isPageBookmarked(page)"
            @click="togglePageBookmark(page)"
          >
            <BookmarkSolidIcon v-if="isPageBookmarked(page)" aria-hidden="true" />
            <BookmarkRegularIcon v-else aria-hidden="true" />
          </button>

          <a
            :id="`topic-title-${page.id}`"
            :data-testid="`topic-title-${page.id}`"
            class="subject-topic-title-control"
            :href="page.href"
          >
            <span class="subject-topic-title">{{ page.title }}</span>
          </a>

          <label class="topic-completion-control" :aria-label="`標記 ${page.title} 已學完`">
            <input
              type="checkbox"
              :data-testid="`topic-complete-${page.id}`"
              :checked="isPageCompleted(page)"
              @change="updatePageCompleted(page, $event)"
            />
          </label>
        </header>
      </article>
    </div>
  </section>
</template>
