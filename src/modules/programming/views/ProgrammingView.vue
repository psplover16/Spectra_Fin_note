<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'programming';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="程式設計" :subject-key="subjectKey" test-id="subject-view-programming" :topics="topics" />
</template>
