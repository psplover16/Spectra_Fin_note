import type { PrimaryRoutePath } from '@/app/routePreload';

export type ComputerFoundationSubjectValue =
  | 'computerPrinciples'
  | 'computerPrinciplesV2'
  | 'networking'
  | 'digitalLogic'
  | 'operatingSystems';
export type ComputerFoundationSubjectPath = Extract<
  PrimaryRoutePath,
  '/computer-principles' | '/computer-principles-v2' | '/networking' | '/digital-logic' | '/operating-systems'
>;

export interface ComputerFoundationSubjectOption {
  value: ComputerFoundationSubjectValue;
  label: string;
  path: ComputerFoundationSubjectPath;
  testId: string;
}

export const computerFoundationSubjectOptions = [
  {
    value: 'computerPrinciples',
    label: '計概',
    path: '/computer-principles',
    testId: 'computer-foundation-subject-option-computer-principles'
  },
  {
    value: 'computerPrinciplesV2',
    label: '計概(v2)',
    path: '/computer-principles-v2',
    testId: 'computer-foundation-subject-option-computer-principles-v2'
  },
  { value: 'networking', label: '網概', path: '/networking', testId: 'computer-foundation-subject-option-networking' },
  { value: 'digitalLogic', label: '數位邏輯', path: '/digital-logic', testId: 'computer-foundation-subject-option-digital-logic' },
  {
    value: 'operatingSystems',
    label: '作業系統',
    path: '/operating-systems',
    testId: 'computer-foundation-subject-option-operating-systems'
  }
] as const satisfies readonly ComputerFoundationSubjectOption[];

export const defaultComputerFoundationSubjectOption = computerFoundationSubjectOptions[0];

export function findComputerFoundationSubjectOptionByPath(path: string): ComputerFoundationSubjectOption | undefined {
  return computerFoundationSubjectOptions.find((option) => option.path === path);
}
