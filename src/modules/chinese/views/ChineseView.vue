<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'chinese';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="國文" :subject-key="subjectKey" test-id="subject-view-chinese" :topics="topics" />
</template>
