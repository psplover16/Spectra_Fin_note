<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'networkingV2';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="網路概論(v2)" :subject-key="subjectKey" test-id="subject-view-networking-v2" :topics="topics" />
</template>
