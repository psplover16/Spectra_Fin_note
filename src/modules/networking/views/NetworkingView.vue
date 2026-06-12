<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'networking';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="網路概論" :subject-key="subjectKey" test-id="subject-view-networking" :topics="topics" />
</template>
