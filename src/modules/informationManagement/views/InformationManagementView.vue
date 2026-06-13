<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'informationManagement';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage title="資訊管理" :subject-key="subjectKey" test-id="subject-view-information-management" :topics="topics" />
</template>
