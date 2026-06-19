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

  it('documents system design route ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredText of [
      '/system-design',
      'src/modules/systemDesign/views/SystemDesignView.vue',
      'systemDesign',
      '系統設計',
      'route preload registry'
    ]) {
      expect(documentText).toContain(requiredText);
    }
  });

  it('documents computer principles v2 route ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredText of [
      '/computer-principles-v2',
      'computerPrinciplesV2',
      'src/modules/computerPrinciplesV2/views/ComputerPrinciplesV2View.vue',
      '計概(v2)',
      'computerPrinciplesV2Topics',
      'computer-principles-v2-route'
    ]) {
      expect(documentText).toContain(requiredText);
    }
  });

  it('documents networking v2 route ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredText of [
      '/networking-v2',
      'networkingV2',
      'src/modules/networkingV2/views/NetworkingV2View.vue',
      '網路概論(v2)',
      'networkingV2Topics',
      'networking-v2-route'
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
