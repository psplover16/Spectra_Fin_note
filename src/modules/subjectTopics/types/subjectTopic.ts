export const subjectKeys = [
  'computerPrinciples',
  'networking',
  'informationManagement',
  'programming',
  'database',
  'algorithms',
  'english',
  'chinese'
] as const;

export type SubjectKey = (typeof subjectKeys)[number];

export interface TechnicalTerm {
  zh: string;
  en: string;
}

export interface AlgorithmComplexityRow {
  algorithmNameZh: string;
  algorithmNameEn: string;
  bestTime: string;
  averageTime: string;
  worstTime: string;
  stability: string;
  notes: string;
}

export type LessonArticleOrderedListMarkerStyle = 'decimal' | 'upperRoman' | 'upperAlpha';
export type LessonArticleTableTextStyleToken = 'defaultText' | 'emphasisText';
export type LessonArticleTableBackgroundStyleToken = 'emphasisBackground';
export type LessonArticleTableCellCoordinate = `${number}:${number}`;

export interface LessonArticleTableCellStyle {
  text?: LessonArticleTableTextStyleToken;
  background?: LessonArticleTableBackgroundStyleToken;
}

export type LessonArticleContentBlock =
  | {
      kind: 'paragraph';
      text: string;
    }
  | {
      kind: 'bulletList';
      items: readonly string[];
    }
  | {
      kind: 'orderedList';
      items: readonly string[];
      markerStyle?: LessonArticleOrderedListMarkerStyle;
    }
  | {
      kind: 'table';
      headers: readonly string[];
      rows: readonly (readonly string[])[];
      rowStyles?: Readonly<Record<number, LessonArticleTableCellStyle>>;
      columnStyles?: Readonly<Record<number, LessonArticleTableCellStyle>>;
      cellStyles?: Readonly<Record<LessonArticleTableCellCoordinate, LessonArticleTableCellStyle>>;
    }
  | {
      kind: 'subsection';
      heading: string;
      blocks: readonly LessonArticleContentBlock[];
    }
  | {
      kind: 'indentedGroup';
      blocks: readonly LessonArticleContentBlock[];
    };

export interface LessonArticleSection {
  heading: string;
  sourceLabel?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  blocks: readonly LessonArticleContentBlock[];
}

export type SubjectTopicListBlockKind = 'examOutline' | 'memoryPoints' | 'understanding' | 'examFocus' | 'pitfall';

export type SubjectTopicBlock =
  | {
      kind: 'paragraph';
      text: string;
    }
  | {
      kind: SubjectTopicListBlockKind;
      items: readonly string[];
    }
  | {
      kind: 'workedExample';
      problem: string;
      steps: readonly string[];
      result?: string;
    }
  | {
      kind: 'complexityTable';
      rows: readonly AlgorithmComplexityRow[];
    }
  | {
      kind: 'termList';
      terms: readonly TechnicalTerm[];
    }
  | {
      kind: 'sourceNote';
      sourceFiles: readonly string[];
      sourceSummary: string;
    }
  | {
      kind: 'lessonArticle';
      sourceFiles: readonly string[];
      sourceSection: string;
      lead: readonly string[];
      sections: readonly LessonArticleSection[];
    }
  | {
      kind: 'teachingCode';
      language: 'java';
      title: string;
      description: string;
      code: string;
    };

export interface SubjectTopic {
  id: string;
  subjectKey: SubjectKey;
  title: string;
  summary: string;
  blocks: readonly SubjectTopicBlock[];
}

export type ProfessionalTopicDifficulty = 'intro' | 'core' | 'advanced';
export type ProfessionalTopicType = 'concept' | 'procedure' | 'algorithm' | 'dataStructure';

export interface ProfessionalSubjectTopic extends SubjectTopic {
  sourceBatch: string;
  sourceFiles: readonly string[];
  sourceSummary: string;
  examOutline: readonly string[];
  memoryPoints: readonly string[];
  understandingNotes: readonly string[];
  difficulty: ProfessionalTopicDifficulty;
  topicType: ProfessionalTopicType;
  terms: readonly TechnicalTerm[];
  verifiedBy?: string;
  verifiedAt?: string;
  verifierSummary?: string;
}

export type SubjectTopicsBySubject = {
  readonly [Key in SubjectKey]: readonly SubjectTopic[];
};

export type ProfessionalTopicsBySubject = {
  readonly [Key in SubjectKey]: readonly ProfessionalSubjectTopic[];
};
