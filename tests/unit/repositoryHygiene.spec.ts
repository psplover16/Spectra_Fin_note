import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('repository hygiene', () => {
  it('ignores generated dependencies, build output, and test artifacts', () => {
    const gitignore = readFileSync('.gitignore', 'utf8');

    for (const ignoredPath of [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      'test-results/',
      'playwright-report/'
    ]) {
      expect(gitignore).toContain(ignoredPath);
    }
  });
});
