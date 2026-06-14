import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('project architecture document', () => {
  it('documents app, shared, module, test, PWA, and CI/CD ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredSection of ['src/app/', 'src/shared/', 'src/modules/', 'tests/', 'PWA', 'CI/CD']) {
      expect(documentText).toContain(requiredSection);
    }
  });

  it('documents database and algorithms route ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredText of [
      '/database',
      '/algorithms',
      'src/modules/database/views/DatabaseView.vue',
      'src/modules/algorithms/views/AlgorithmsView.vue',
      'route preload registry',
      'database',
      'algorithms'
    ]) {
      expect(documentText).toContain(requiredText);
    }
  });

  it('documents professional topic content model ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredText of [
      'professionalTopics.ts',
      'subjectTopics.ts',
      'sourceFiles',
      'sourceSummary',
      'examOutline',
      'memoryPoints',
      'understandingNotes',
      'termList',
      'complexityTable',
      'sourceNote'
    ]) {
      expect(documentText).toContain(requiredText);
    }
  });
});
