<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'informationManagement';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="資訊管理" :subject-key="subjectKey" test-id="subject-view-information-management" :topics="topics" />
</template>
