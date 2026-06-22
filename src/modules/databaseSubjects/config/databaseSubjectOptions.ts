import type { PrimaryRoutePath } from '@/app/routePreload';

export type DatabaseSubjectValue = 'database' | 'databaseV2';
export type DatabaseSubjectPath = Extract<PrimaryRoutePath, '/database' | '/database-v2'>;

export interface DatabaseSubjectOption {
  value: DatabaseSubjectValue;
  label: string;
  path: DatabaseSubjectPath;
  testId: string;
}

export const databaseSubjectOptions = [
  { value: 'database', label: '資料庫', path: '/database', testId: 'database-subject-option-database' },
  { value: 'databaseV2', label: '資料庫2', path: '/database-v2', testId: 'database-subject-option-database-v2' }
] as const satisfies readonly DatabaseSubjectOption[];

export const defaultDatabaseSubjectOption = databaseSubjectOptions[0];

export function findDatabaseSubjectOptionByPath(path: string): DatabaseSubjectOption | undefined {
  return databaseSubjectOptions.find((option) => option.path === path);
}
