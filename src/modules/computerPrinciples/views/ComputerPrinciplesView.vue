<script setup lang="ts">
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';

const subjectKey = 'computerPrinciples';
const topics = getPlaceholderTopics(subjectKey);
</script>

<template>
  <SubjectTopicPage
    title="計算機原理"
    :subject-key="subjectKey"
    test-id="subject-view-computer-principles"
    :topics="topics"
  />
</template>
