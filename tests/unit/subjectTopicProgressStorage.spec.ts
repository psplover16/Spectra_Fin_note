import { describe, expect, it, vi } from 'vitest';
import {
  createEmptySubjectTopicProgressState,
  readSubjectTopicProgress,
  saveCompletedTopicIds,
  subjectTopicProgressStorageKey,
  writeSubjectTopicProgress
} from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';

function createMemoryStorage(initialValues: Record<string, string> = {}) {
  const values = new Map(Object.entries(initialValues));

  return {
    getItem: vi.fn((key: string) => values.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      values.set(key, value);
    }),
    removeItem: vi.fn((key: string) => {
      values.delete(key);
    })
  };
}

describe('subjectTopicProgressStorage', () => {
  it('writes the agreed versioned progress shape', () => {
    const storage = createMemoryStorage();
    const state = createEmptySubjectTopicProgressState();
    state.subjects.networking = {
      completedTopicIds: ['osi-model'],
      bookmarkedTopicId: 'tcp-ip-basics',
      updatedAt: '2026-06-13T00:00:00.000Z'
    };

    expect(writeSubjectTopicProgress(state, storage)).toBe(true);

    const stored = JSON.parse(storage.getItem(subjectTopicProgressStorageKey) ?? '{}');
    expect(stored.version).toBe(1);
    expect(stored.subjects.networking.completedTopicIds).toEqual(['osi-model']);
    expect(stored.subjects.networking.bookmarkedTopicId).toBe('tcp-ip-basics');
    expect(stored.subjects.networking.updatedAt).toBe('2026-06-13T00:00:00.000Z');
  });

  it('saves completed topic ids while preserving the subject bookmark', () => {
    const storage = createMemoryStorage();
    const initialState = createEmptySubjectTopicProgressState();
    initialState.subjects.networking.bookmarkedTopicId = 'tcp-ip-basics';
    expect(writeSubjectTopicProgress(initialState, storage)).toBe(true);

    const nextState = saveCompletedTopicIds('networking', ['osi-model'], storage, '2026-06-13T01:00:00.000Z');

    expect(nextState.subjects.networking.completedTopicIds).toEqual(['osi-model']);
    expect(nextState.subjects.networking.bookmarkedTopicId).toBe('tcp-ip-basics');
    expect(nextState.subjects.networking.updatedAt).toBe('2026-06-13T01:00:00.000Z');
  });

  it('returns empty progress for malformed JSON without deleting the original value', () => {
    const storage = createMemoryStorage({
      [subjectTopicProgressStorageKey]: '{malformed-json'
    });

    const state = readSubjectTopicProgress(storage);

    expect(state).toEqual(createEmptySubjectTopicProgressState());
    expect(storage.getItem(subjectTopicProgressStorageKey)).toBe('{malformed-json');
    expect(storage.removeItem).not.toHaveBeenCalled();
  });
});
