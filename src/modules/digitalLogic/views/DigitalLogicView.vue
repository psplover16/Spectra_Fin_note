<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'digitalLogic';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="數位邏輯" :subject-key="subjectKey" test-id="subject-view-digital-logic" :topics="topics" />
</template>
