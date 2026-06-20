<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { computerPrinciplesV2RouteSections } from '@/modules/subjectTopics/data/computerPrinciplesV2Topics';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';

const subjectKey = 'computerPrinciplesV2';
const topics = getSubjectTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage
    title="計概(v2)"
    :subject-key="subjectKey"
    test-id="subject-view-computer-principles-v2"
    :topics="topics"
    :route-sections="computerPrinciplesV2RouteSections"
  />
</template>
