import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import type {
  LessonArticleContentBlock,
  SubjectKey,
  SubjectTopic,
  SubjectTopicBlock
} from '@/modules/subjectTopics/types/subjectTopic';

function hasVisibleText(text: string): boolean {
  return text.trim().length > 0;
}

function hasLessonArticleContent(block: LessonArticleContentBlock): boolean {
  if (block.kind === 'paragraph') {
    return hasVisibleText(block.text);
  }

  if (block.kind === 'bulletList' || block.kind === 'orderedList') {
    return block.items.some(hasVisibleText);
  }

  return block.headers.some(hasVisibleText) || block.rows.some((row) => row.some(hasVisibleText));
}

function hasTopicBlockContent(block: SubjectTopicBlock): boolean {
  if (block.kind === 'paragraph') {
    return hasVisibleText(block.text);
  }

  if (
    block.kind === 'examOutline' ||
    block.kind === 'memoryPoints' ||
    block.kind === 'understanding' ||
    block.kind === 'examFocus' ||
    block.kind === 'pitfall'
  ) {
    return block.items.some(hasVisibleText);
  }

  if (block.kind === 'workedExample') {
    return hasVisibleText(block.problem) || block.steps.some(hasVisibleText) || hasVisibleText(block.result ?? '');
  }

  if (block.kind === 'complexityTable') {
    return block.rows.length > 0;
  }

  if (block.kind === 'termList') {
    return block.terms.length > 0;
  }

  if (block.kind === 'sourceNote') {
    return hasVisibleText(block.sourceSummary) || block.sourceFiles.some(hasVisibleText);
  }

  if (block.kind === 'lessonArticle') {
    return block.lead.some(hasVisibleText) || block.sections.some((section) => section.blocks.some(hasLessonArticleContent));
  }

  if (block.kind === 'teachingCode') {
    return hasVisibleText(block.title) || hasVisibleText(block.description) || hasVisibleText(block.code);
  }

  return false;
}

export function hasSubjectTopicContent(topic: SubjectTopic): boolean {
  return topic.blocks.some(hasTopicBlockContent);
}

export function getSubjectTopics(subjectKey: SubjectKey): readonly SubjectTopic[] {
  const professionalTopics = professionalTopicsBySubject[subjectKey];

  return professionalTopics.filter(hasSubjectTopicContent);
}
