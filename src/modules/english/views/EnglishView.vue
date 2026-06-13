<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'english';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="英文" :subject-key="subjectKey" test-id="subject-view-english" :topics="topics" />
</template>
