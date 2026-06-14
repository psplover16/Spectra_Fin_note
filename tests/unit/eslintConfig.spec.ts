import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('ESLint config', () => {
  it('keeps temporary production artifacts out of CI linting', () => {
    const config = readFileSync('eslint.config.js', 'utf8');

    expect(config).toContain("'_TMP/**'");
    expect(config).toContain("'_private/TMP/**'");
  });
});
