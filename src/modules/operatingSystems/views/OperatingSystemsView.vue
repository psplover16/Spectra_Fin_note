<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'operatingSystems';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage
    title="作業系統"
    :subject-key="subjectKey"
    test-id="subject-view-operating-systems"
    :topics="topics"
  />
</template>
