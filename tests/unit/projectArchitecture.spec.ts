import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('project architecture document', () => {
  it('documents app, shared, module, test, PWA, and CI/CD ownership', () => {
    const documentText = readFileSync('PROJECT_ARCHITECTURE.md', 'utf8');

    for (const requiredSection of ['src/app/', 'src/shared/', 'src/modules/', 'tests/', 'PWA', 'CI/CD']) {
      expect(documentText).toContain(requiredSection);
    }
  });
});
