<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'programming';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="程式設計" :subject-key="subjectKey" test-id="subject-view-programming" :topics="topics" />
</template>
