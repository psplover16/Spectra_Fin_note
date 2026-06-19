import { describe, expect, it } from 'vitest';
import { getSubjectTopics } from '@/modules/subjectTopics/data/subjectTopics';
import { professionalTopicsBySubject } from '@/modules/subjectTopics/data/professionalTopics';

const digitalLogicTopicIds = [
  'cp-digital-logic-basics',
  'cp-sop-pos',
  'cp-karnaugh-map',
  'cp-universal-gates',
  'cp-combinational-sequential-circuits'
] as const;

const operatingSystemTopicIds = [
  'cp-os-basics',
  'cp-io-and-interrupts',
  'cp-hardware-protection',
  'cp-os-structure',
  'cp-process',
  'cp-cpu-scheduling',
  'cp-deadlock',
  'cp-process-communication',
  'cp-memory-management',
  'cp-virtual-memory',
  'cp-disk-management'
] as const;

const routeVisibleOperatingSystemTopicIds = operatingSystemTopicIds.filter((topicId) => topicId !== 'cp-hardware-protection');
const movedComputerPrinciplesTopicIds = [...digitalLogicTopicIds, ...operatingSystemTopicIds] as const;

const getTopicIds = (topics: readonly { id: string }[]) => topics.map((topic) => topic.id);

describe('split computer principles routes', () => {
  it('moves digital logic topics into the digitalLogic subject only', () => {
    const digitalLogicTopics = professionalTopicsBySubject.digitalLogic;
    const computerPrinciplesTopicIds = getTopicIds(professionalTopicsBySubject.computerPrinciples);

    expect(getTopicIds(digitalLogicTopics)).toEqual(digitalLogicTopicIds);

    for (const topic of digitalLogicTopics) {
      expect(topic.subjectKey).toBe('digitalLogic');
      expect(topic.sourceFiles.length).toBeGreaterThan(0);
      expect(topic.sourceSummary).toEqual(expect.any(String));
      expect(topic.blocks.length).toBeGreaterThan(0);
    }

    for (const topicId of digitalLogicTopicIds) {
      expect(computerPrinciplesTopicIds).not.toContain(topicId);
    }
  });

  it('moves operating system topics into the operatingSystems subject only', () => {
    const operatingSystemTopics = professionalTopicsBySubject.operatingSystems;
    const computerPrinciplesTopicIds = getTopicIds(professionalTopicsBySubject.computerPrinciples);

    expect(getTopicIds(operatingSystemTopics)).toEqual(operatingSystemTopicIds);

    for (const topic of operatingSystemTopics) {
      expect(topic.subjectKey).toBe('operatingSystems');
      expect(topic.sourceFiles.length).toBeGreaterThan(0);
      expect(topic.sourceSummary).toEqual(expect.any(String));
      expect(topic.blocks.length).toBeGreaterThan(0);
    }

    for (const topicId of operatingSystemTopicIds) {
      expect(computerPrinciplesTopicIds).not.toContain(topicId);
    }
  });

  it('keeps the computer-principles route focused on basic computer-principles topics', () => {
    const computerPrinciplesRouteTopicIds = getTopicIds(getSubjectTopics('computerPrinciples'));

    expect(computerPrinciplesRouteTopicIds).toContain('cp-common-units');
    expect(computerPrinciplesRouteTopicIds).toContain('cp-von-neumann-architecture');
    expect(computerPrinciplesRouteTopicIds).toContain('cp-codes-and-check-codes');

    for (const topicId of movedComputerPrinciplesTopicIds) {
      expect(computerPrinciplesRouteTopicIds).not.toContain(topicId);
    }
  });

  it('exposes learner-facing content on the split routes', () => {
    expect(getTopicIds(getSubjectTopics('digitalLogic'))).toEqual(digitalLogicTopicIds);
    expect(getTopicIds(getSubjectTopics('operatingSystems'))).toEqual(routeVisibleOperatingSystemTopicIds);
  });
});
