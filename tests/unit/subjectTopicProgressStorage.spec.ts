import { describe, expect, it, vi } from 'vitest';
import {
  createEmptySubjectTopicProgressState,
  readSubjectTopicProgress,
  saveBookmarkedTopicId,
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

  it('normalizes old progress state by adding empty split route entries', () => {
    const storage = createMemoryStorage({
      [subjectTopicProgressStorageKey]: JSON.stringify({
        version: 1,
        subjects: {
          computerPrinciples: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          networking: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          informationManagement: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          programming: {
            completedTopicIds: ['java-loop-basics'],
            bookmarkedTopicId: 'java-loop-basics',
            updatedAt: '2026-06-13T02:00:00.000Z'
          },
          english: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          chinese: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' }
        }
      })
    });

    const state = readSubjectTopicProgress(storage);

    expect(state.subjects.programming.completedTopicIds).toEqual(['java-loop-basics']);
    expect(state.subjects.programming.bookmarkedTopicId).toBe('java-loop-basics');
    expect(state.subjects.database.completedTopicIds).toEqual([]);
    expect(state.subjects.database.bookmarkedTopicId).toBeNull();
    expect(state.subjects.databaseV2.completedTopicIds).toEqual([]);
    expect(state.subjects.databaseV2.bookmarkedTopicId).toBeNull();
    expect(state.subjects.algorithms.completedTopicIds).toEqual([]);
    expect(state.subjects.algorithms.bookmarkedTopicId).toBeNull();
    expect(state.subjects.digitalLogic.completedTopicIds).toEqual([]);
    expect(state.subjects.digitalLogic.bookmarkedTopicId).toBeNull();
    expect(state.subjects.operatingSystems.completedTopicIds).toEqual([]);
    expect(state.subjects.operatingSystems.bookmarkedTopicId).toBeNull();
    expect(state.subjects.computerPrinciplesV2.completedTopicIds).toEqual([]);
    expect(state.subjects.computerPrinciplesV2.bookmarkedTopicId).toBeNull();
    expect(state.subjects.networkingV2.completedTopicIds).toEqual([]);
    expect(state.subjects.networkingV2.bookmarkedTopicId).toBeNull();
  });

  it('moves legacy computer-principles completed topics into split subject entries', () => {
    const storage = createMemoryStorage({
      [subjectTopicProgressStorageKey]: JSON.stringify({
        version: 1,
        subjects: {
          computerPrinciples: {
            completedTopicIds: ['cp-common-units', 'cp-digital-logic-basics', 'cp-os-basics'],
            bookmarkedTopicId: null,
            updatedAt: '2026-06-13T03:00:00.000Z'
          },
          networking: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          informationManagement: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          programming: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          english: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          chinese: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' }
        }
      })
    });

    const state = readSubjectTopicProgress(storage);

    expect(state.subjects.computerPrinciples.completedTopicIds).toEqual(['cp-common-units']);
    expect(state.subjects.digitalLogic.completedTopicIds).toEqual(['cp-digital-logic-basics']);
    expect(state.subjects.operatingSystems.completedTopicIds).toEqual(['cp-os-basics']);
  });

  it('moves a legacy computer-principles bookmark into the matching split subject entry', () => {
    const storage = createMemoryStorage({
      [subjectTopicProgressStorageKey]: JSON.stringify({
        version: 1,
        subjects: {
          computerPrinciples: {
            completedTopicIds: [],
            bookmarkedTopicId: 'cp-karnaugh-map',
            updatedAt: '2026-06-13T04:00:00.000Z'
          },
          networking: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          informationManagement: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          programming: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          english: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' },
          chinese: { completedTopicIds: [], bookmarkedTopicId: null, updatedAt: '' }
        }
      })
    });

    const state = readSubjectTopicProgress(storage);

    expect(state.subjects.computerPrinciples.bookmarkedTopicId).toBeNull();
    expect(state.subjects.digitalLogic.bookmarkedTopicId).toBe('cp-karnaugh-map');
    expect(state.subjects.operatingSystems.bookmarkedTopicId).toBeNull();
  });

  it('saves split subject progress without changing the storage version', () => {
    const storage = createMemoryStorage();

    saveCompletedTopicIds('digitalLogic', ['cp-digital-logic-basics'], storage, '2026-06-13T05:00:00.000Z');
    const nextState = saveBookmarkedTopicId('operatingSystems', 'cp-os-basics', storage, '2026-06-13T06:00:00.000Z');

    expect(nextState.version).toBe(1);
    expect(nextState.subjects.digitalLogic.completedTopicIds).toEqual(['cp-digital-logic-basics']);
    expect(nextState.subjects.operatingSystems.bookmarkedTopicId).toBe('cp-os-basics');
  });

  it('saves computer principles v2 progress without migrating v1 topic ids', () => {
    const storage = createMemoryStorage();
    const initialState = createEmptySubjectTopicProgressState();
    initialState.subjects.computerPrinciples.completedTopicIds = ['cp-common-units'];
    initialState.subjects.computerPrinciples.bookmarkedTopicId = 'cp-common-units';
    expect(writeSubjectTopicProgress(initialState, storage)).toBe(true);

    const nextState = saveCompletedTopicIds(
      'computerPrinciplesV2',
      ['cpv2-architecture-computation-theory'],
      storage,
      '2026-06-19T00:00:00.000Z'
    );

    expect(nextState.version).toBe(1);
    expect(nextState.subjects.computerPrinciples.completedTopicIds).toEqual(['cp-common-units']);
    expect(nextState.subjects.computerPrinciples.bookmarkedTopicId).toBe('cp-common-units');
    expect(nextState.subjects.computerPrinciplesV2.completedTopicIds).toEqual(['cpv2-architecture-computation-theory']);
    expect(nextState.subjects.computerPrinciplesV2.bookmarkedTopicId).toBeNull();
  });

  it('saves networking v2 progress without migrating networking v1 topic ids', () => {
    const storage = createMemoryStorage();
    const initialState = createEmptySubjectTopicProgressState();
    initialState.subjects.networking.completedTopicIds = ['networking-osi-tcpip'];
    initialState.subjects.networking.bookmarkedTopicId = 'networking-osi-tcpip';
    expect(writeSubjectTopicProgress(initialState, storage)).toBe(true);

    const nextState = saveCompletedTopicIds('networkingV2', ['networking-v2-osi-tcpip'], storage, '2026-06-20T00:00:00.000Z');

    expect(nextState.version).toBe(1);
    expect(nextState.subjects.networking.completedTopicIds).toEqual(['networking-osi-tcpip']);
    expect(nextState.subjects.networking.bookmarkedTopicId).toBe('networking-osi-tcpip');
    expect(nextState.subjects.networkingV2.completedTopicIds).toEqual(['networking-v2-osi-tcpip']);
    expect(nextState.subjects.networkingV2.bookmarkedTopicId).toBeNull();
  });

  it('normalizes database v2 progress without migrating database v1 topic ids', () => {
    const storage = createMemoryStorage();
    const initialState = createEmptySubjectTopicProgressState();
    initialState.subjects.database.completedTopicIds = ['database-normalization'];
    initialState.subjects.database.bookmarkedTopicId = 'database-normalization';
    expect(writeSubjectTopicProgress(initialState, storage)).toBe(true);

    const nextState = saveCompletedTopicIds('databaseV2', ['database-v2-sql-query'], storage, '2026-06-22T00:00:00.000Z');

    expect(nextState.version).toBe(1);
    expect(nextState.subjects.database.completedTopicIds).toEqual(['database-normalization']);
    expect(nextState.subjects.database.bookmarkedTopicId).toBe('database-normalization');
    expect(nextState.subjects.databaseV2.completedTopicIds).toEqual(['database-v2-sql-query']);
    expect(nextState.subjects.databaseV2.bookmarkedTopicId).toBeNull();
  });
});
