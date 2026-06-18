<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'systemDesign';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="系統設計" :subject-key="subjectKey" test-id="subject-view-system-design" :topics="topics" />
</template>
