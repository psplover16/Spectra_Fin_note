<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'database';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="資料庫" :subject-key="subjectKey" test-id="subject-view-database" :topics="topics" />
</template>
