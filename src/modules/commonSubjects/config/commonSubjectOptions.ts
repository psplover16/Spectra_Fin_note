import type { PrimaryRoutePath } from '@/app/routePreload';

export type CommonSubjectValue = 'english' | 'chinese';
export type CommonSubjectPath = Extract<PrimaryRoutePath, '/english' | '/chinese'>;

export interface CommonSubjectOption {
  value: CommonSubjectValue;
  label: string;
  path: CommonSubjectPath;
  testId: string;
}

export const commonSubjectOptions = [
  { value: 'english', label: '英文', path: '/english', testId: 'common-subject-option-english' },
  { value: 'chinese', label: '國文', path: '/chinese', testId: 'common-subject-option-chinese' }
] as const satisfies readonly CommonSubjectOption[];

export const defaultCommonSubjectOption = commonSubjectOptions[0];

export function findCommonSubjectOptionByPath(path: string): CommonSubjectOption | undefined {
  return commonSubjectOptions.find((option) => option.path === path);
}
