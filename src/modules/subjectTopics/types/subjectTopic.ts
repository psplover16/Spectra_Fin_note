export const subjectKeys = [
  'computerPrinciples',
  'networking',
  'informationManagement',
  'programming',
  'english',
  'chinese'
] as const;

export type SubjectKey = (typeof subjectKeys)[number];

export type SubjectTopicBlock =
  | {
      kind: 'paragraph';
      text: string;
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

export type SubjectTopicsBySubject = {
  readonly [Key in SubjectKey]: readonly SubjectTopic[];
};
