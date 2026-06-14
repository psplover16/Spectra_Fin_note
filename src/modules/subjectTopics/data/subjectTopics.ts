import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { getPlaceholderTopics } from '@/modules/subjectTopics/data/placeholderTopics';
import type { SubjectKey, SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

export function getSubjectTopics(subjectKey: SubjectKey): readonly SubjectTopic[] {
  const professionalTopics = professionalTopicsBySubject[subjectKey];
  const placeholderTopics = getPlaceholderTopics(subjectKey);

  if (professionalTopics.length === 0) {
    return placeholderTopics;
  }

  return professionalTopics;
}
