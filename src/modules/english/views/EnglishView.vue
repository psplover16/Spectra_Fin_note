<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'english';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="英文" :subject-key="subjectKey" test-id="subject-view-english" :topics="topics" />
</template>
