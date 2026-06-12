import { describe, expect, it } from 'vitest';
import { resolvePublishTarget, shouldCommitFromPorcelain } from '../../scripts/publishPages.mjs';

describe('publishPages helpers', () => {
  it('maps staging and production targets to the expected gh-pages destinations', () => {
    expect(resolvePublishTarget('staging')).toEqual({
      name: 'staging',
      destinationSubdir: 'staging',
      commitMessage: 'Deploy staging site'
    });
    expect(resolvePublishTarget('production')).toEqual({
      name: 'production',
      destinationSubdir: '.',
      commitMessage: 'Deploy production site'
    });
  });

  it('rejects unknown publish targets instead of silently publishing to the wrong path', () => {
    expect(() => resolvePublishTarget('preview')).toThrow('Unsupported PUBLISH_TARGET');
  });

  it('skips commits when git porcelain output has no publish diff', () => {
    expect(shouldCommitFromPorcelain('')).toBe(false);
    expect(shouldCommitFromPorcelain('\n')).toBe(false);
    expect(shouldCommitFromPorcelain('A  index.html\n')).toBe(true);
  });
});
