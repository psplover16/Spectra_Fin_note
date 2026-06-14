import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { resolvePublishTarget, shouldCommitFromPorcelain, syncBuildOutput } from '../../scripts/publishPages.mjs';

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

  it('keeps the root GitHub Pages SPA fallback when publishing staging output', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'spectra-pages-'));

    try {
      const distDir = join(tempDir, 'dist');
      const pagesDir = join(tempDir, 'pages');
      mkdirSync(distDir, { recursive: true });
      mkdirSync(pagesDir, { recursive: true });
      writeFileSync(join(distDir, 'index.html'), '<main>app</main>');
      writeFileSync(join(distDir, '404.html'), '<script>fallback</script>');

      syncBuildOutput({ distDir, pagesDir, destinationSubdir: 'staging' });

      expect(readFileSync(join(pagesDir, 'staging', 'index.html'), 'utf8')).toBe('<main>app</main>');
      expect(readFileSync(join(pagesDir, '404.html'), 'utf8')).toBe('<script>fallback</script>');
      expect(readFileSync(join(pagesDir, 'index.html'), 'utf8')).toContain('url=staging/');
      expect(existsSync(join(pagesDir, '.nojekyll'))).toBe(true);
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('preserves an existing production root index when refreshing staging output', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'spectra-pages-'));

    try {
      const distDir = join(tempDir, 'dist');
      const pagesDir = join(tempDir, 'pages');
      mkdirSync(distDir, { recursive: true });
      mkdirSync(pagesDir, { recursive: true });
      writeFileSync(join(distDir, 'index.html'), '<main>staging</main>');
      writeFileSync(join(pagesDir, 'index.html'), '<main>production</main>');

      syncBuildOutput({ distDir, pagesDir, destinationSubdir: 'staging' });

      expect(readFileSync(join(pagesDir, 'index.html'), 'utf8')).toBe('<main>production</main>');
      expect(readFileSync(join(pagesDir, 'staging', 'index.html'), 'utf8')).toBe('<main>staging</main>');
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });
});
