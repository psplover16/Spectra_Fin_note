import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';
import { getSubjectTopics, hasSubjectTopicContent } from '@/modules/subjectTopics/data/subjectTopics';
import {
  createEmptySubjectTopicProgressState,
  subjectTopicProgressStorageKey
} from '@/modules/subjectTopics/storage/subjectTopicProgressStorage';
import type { SubjectKey } from '@/modules/subjectTopics/types/subjectTopic';
import { readFileSync } from 'node:fs';

const readText = (path: string) => readFileSync(path, 'utf8');
const filledComputerPrinciplesTopicIds = new Set([
  'cp-common-units',
  'cp-von-neumann-architecture',
  'cp-pipeline',
  'cp-hazard',
  'cp-bus',
  'cp-performance-formulas',
  'cp-risc-cisc',
  'cp-memory-hierarchy',
  'cp-memory-classification',
  'cp-registers',
  'cp-cache',
  'cp-usb-speed',
  'cp-base-conversion',
  'cp-complement-conversion',
  'cp-floating-point-conversion',
  'cp-codes-and-check-codes'
]);

function installStorageWithStaleAlgorithmsProgress() {
  const state = createEmptySubjectTopicProgressState();
  state.subjects.algorithms = {
    completedTopicIds: ['sorting-baseline'],
    bookmarkedTopicId: 'sorting-baseline',
    updatedAt: '2026-06-13T13:10:00+08:00'
  };
  const values = new Map([[subjectTopicProgressStorageKey, JSON.stringify(state)]]);

  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => values.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      values.set(key, value);
    }),
    removeItem: vi.fn((key: string) => {
      values.delete(key);
    })
  });
}

describe('stale professional content audit', () => {
  it('keeps only current route-rebuild topics in formal professional data', () => {
    const report = readText('_private/TMP/stale-professional-content-audit.md');

    expect(professionalTopicsBySubject.computerPrinciples).toHaveLength(18);
    expect(professionalTopicsBySubject.networking).toHaveLength(11);
    expect(professionalTopicsBySubject.digitalLogic).toHaveLength(5);
    expect(professionalTopicsBySubject.operatingSystems).toHaveLength(11);
    expect(professionalTopicsBySubject.database).toHaveLength(17);
    expect(professionalTopicsBySubject.informationManagement).toHaveLength(14);
    expect(professionalTopicsBySubject.programming).toHaveLength(46);
    expect(professionalTopicsBySubject.algorithms).toHaveLength(31);
    expect(professionalTopicsBySubject.systemDesign).toHaveLength(5);

    const allTopicIds = Object.values(professionalTopicsBySubject)
      .flat()
      .map((topic) => topic.id);

    expect(allTopicIds).toContain('cp-common-units');
    expect(report).toContain('cp-common-units');
    expect(report).toContain('cp-floating-point-conversion');
    expect(report).toContain('cp-codes-and-check-codes');

    for (const staleTopicId of ['sorting-baseline', 'binary-search-placeholder', 'sorting-overview']) {
      expect(allTopicIds).not.toContain(staleTopicId);
      expect(report).toContain(`| ${staleTopicId} | removed |`);
    }

    for (const topic of professionalTopicsBySubject.computerPrinciples) {
      expect(topic.blocks, `${topic.id} should use a single rebuilt article block`).toHaveLength(1);
      expect(topic.blocks[0]?.kind, `${topic.id} should render as lessonArticle`).toBe('lessonArticle');
      expect(topic.blocks.some((block) => block.kind === 'sourceNote'), `${topic.id} should not keep sourceNote fallback`).toBe(
        false
      );
      expect(topic.blocks.some((block) => block.kind === 'examOutline'), `${topic.id} should not keep examOutline fallback`).toBe(
        false
      );
      expect(topic.blocks.some((block) => block.kind === 'memoryPoints'), `${topic.id} should not keep memoryPoints fallback`).toBe(
        false
      );
      expect(topic.blocks.some((block) => block.kind === 'understanding'), `${topic.id} should not keep understanding fallback`).toBe(
        false
      );
      expect(topic.verifiedBy).toBeUndefined();
      expect(topic.verifierSummary).toBeUndefined();
      expect(topic.blocks[0]).toEqual(expect.objectContaining({ kind: 'lessonArticle' }));
      if (topic.blocks[0]?.kind === 'lessonArticle') {
        if (filledComputerPrinciplesTopicIds.has(topic.id)) {
          expect(topic.blocks[0].lead).toEqual(expect.any(Array));
          expect(topic.blocks[0].sections.length).toBeGreaterThan(0);
          expect(topic.blocks[0].sections.every((section) => section.sourceLabel === undefined)).toBe(true);
        }
      }
    }

    expect(report).toContain('stale topics remaining in formal data: 0');
    expect(report).toContain('final result: pass');
  });

  it('does not mix placeholder topics into rebuilt professional route topic lists', () => {
    const professionalSubjectKeys: readonly SubjectKey[] = [
      'computerPrinciples',
      'networking',
      'digitalLogic',
      'operatingSystems',
      'database',
      'informationManagement',
      'programming',
      'algorithms',
      'systemDesign'
    ];

    for (const subjectKey of professionalSubjectKeys) {
      const renderedTopicIds = getSubjectTopics(subjectKey).map((topic) => topic.id);
      const visibleFormalTopicIds = professionalTopicsBySubject[subjectKey].filter(hasSubjectTopicContent).map((topic) => topic.id);

      expect(renderedTopicIds).toEqual(visibleFormalTopicIds);
    }
  });

  it('does not render stale localStorage bookmarks that are absent from the current formal topic list', () => {
    installStorageWithStaleAlgorithmsProgress();

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '演算法',
        subjectKey: 'algorithms',
        testId: 'subject-view-algorithms',
        topics: professionalTopicsBySubject.algorithms
      }
    });

    expect(wrapper.find('[data-testid="topic-title-sorting-baseline"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="topic-title-sorting-algorithms-baseline"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="topic-title-binary-search"]').exists()).toBe(true);

    vi.unstubAllGlobals();
  });
});
