<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'algorithms';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="演算法" :subject-key="subjectKey" test-id="subject-view-algorithms" :topics="topics" />
</template>
