import { subjectKeys, type SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';

export const subjectTopicProgressStorageKey = 'spectra:subject-topic-progress:v1';

export interface SubjectProgress {
  completedTopicIds: string[];
  bookmarkedTopicId: string | null;
  updatedAt: string;
}

export interface SubjectTopicProgressState {
  version: 1;
  subjects: Record<SubjectKey, SubjectProgress>;
}

export type SubjectTopicProgressStorage = Pick<Storage, 'getItem' | 'setItem'>;

function createEmptySubjectProgress(updatedAt = ''): SubjectProgress {
  return {
    completedTopicIds: [],
    bookmarkedTopicId: null,
    updatedAt
  };
}

export function createEmptySubjectTopicProgressState(): SubjectTopicProgressState {
  const subjects = Object.fromEntries(
    subjectKeys.map((subjectKey) => [subjectKey, createEmptySubjectProgress()])
  ) as Record<SubjectKey, SubjectProgress>;

  return {
    version: 1,
    subjects
  };
}

function resolveStorage(storage?: SubjectTopicProgressStorage): SubjectTopicProgressStorage | undefined {
  if (storage) {
    return storage;
  }

  if (typeof window === 'undefined') {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function normalizeSubjectProgress(value: unknown): SubjectProgress {
  if (!isRecord(value)) {
    return createEmptySubjectProgress();
  }

  return {
    completedTopicIds: Array.isArray(value.completedTopicIds)
      ? value.completedTopicIds.filter((topicId): topicId is string => typeof topicId === 'string')
      : [],
    bookmarkedTopicId: typeof value.bookmarkedTopicId === 'string' ? value.bookmarkedTopicId : null,
    updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : ''
  };
}

function normalizeProgressState(value: unknown): SubjectTopicProgressState | undefined {
  if (!isRecord(value) || value.version !== 1 || !isRecord(value.subjects)) {
    return undefined;
  }

  const state = createEmptySubjectTopicProgressState();

  for (const subjectKey of subjectKeys) {
    state.subjects[subjectKey] = normalizeSubjectProgress(value.subjects[subjectKey]);
  }

  return state;
}

export function readSubjectTopicProgress(storage?: SubjectTopicProgressStorage): SubjectTopicProgressState {
  const selectedStorage = resolveStorage(storage);

  if (!selectedStorage) {
    return createEmptySubjectTopicProgressState();
  }

  try {
    const rawValue = selectedStorage.getItem(subjectTopicProgressStorageKey);

    if (!rawValue) {
      return createEmptySubjectTopicProgressState();
    }

    return normalizeProgressState(JSON.parse(rawValue)) ?? createEmptySubjectTopicProgressState();
  } catch {
    return createEmptySubjectTopicProgressState();
  }
}

export function writeSubjectTopicProgress(
  state: SubjectTopicProgressState,
  storage?: SubjectTopicProgressStorage
): boolean {
  const selectedStorage = resolveStorage(storage);

  if (!selectedStorage) {
    return false;
  }

  try {
    selectedStorage.setItem(subjectTopicProgressStorageKey, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function saveCompletedTopicIds(
  subjectKey: SubjectKey,
  completedTopicIds: readonly string[],
  storage?: SubjectTopicProgressStorage,
  updatedAt = new Date().toISOString()
): SubjectTopicProgressState {
  const state = readSubjectTopicProgress(storage);
  const currentSubjectProgress = state.subjects[subjectKey];

  state.subjects[subjectKey] = {
    ...currentSubjectProgress,
    completedTopicIds: Array.from(new Set(completedTopicIds)),
    updatedAt
  };

  writeSubjectTopicProgress(state, storage);
  return state;
}

export function saveBookmarkedTopicId(
  subjectKey: SubjectKey,
  bookmarkedTopicId: string | null,
  storage?: SubjectTopicProgressStorage,
  updatedAt = new Date().toISOString()
): SubjectTopicProgressState {
  const state = readSubjectTopicProgress(storage);
  const currentSubjectProgress = state.subjects[subjectKey];

  state.subjects[subjectKey] = {
    ...currentSubjectProgress,
    bookmarkedTopicId,
    updatedAt
  };

  writeSubjectTopicProgress(state, storage);
  return state;
}
