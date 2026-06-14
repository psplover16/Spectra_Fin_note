import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

const routes = [
  'computer-principles',
  'networking',
  'database',
  'information-management',
  'programming',
  'algorithms'
] as const;

describe('subagent route production isolation reports', () => {
  it('keeps route production artifacts under route-scoped TMP folders', () => {
    const finalReport = readText('_private/TMP/subagent-isolation-final-report.md');

    for (const route of routes) {
      const routeRoot = `_private/TMP/${route}`;
      const files = readdirSync(routeRoot);
      const markdownFiles = files.filter((file) => file.endsWith('.md'));

      expect(existsSync(`${routeRoot}/source-inventory.md`), `${route} source inventory`).toBe(true);
      expect(files.some((file) => file.endsWith('.prompt.md')), `${route} topic prompts`).toBe(true);
      expect(files.some((file) => file.endsWith('.draft.md')), `${route} content writer drafts`).toBe(true);
      expect(files.some((file) => file.endsWith('.verified.md')), `${route} verifier outputs`).toBe(true);
      expect(existsSync(`${routeRoot}/import-readiness.md`), `${route} import readiness`).toBe(true);
      expect(
        markdownFiles.some((file) => file.includes('review') || file.includes('audit') || file === 'manual-review.md'),
        `${route} route integration auditor output`
      ).toBe(true);

      expect(finalReport).toContain(`/${route}`);
      expect(finalReport).toContain(`${routeRoot}/source-inventory.md`);
      expect(finalReport).toContain(`${routeRoot}/import-readiness.md`);
    }

    expect(finalReport).toContain('subagent output outside route TMP: 0');
    expect(finalReport).toContain('formal app data writer: main integration only');
    expect(finalReport).toContain('final result: pass');
  });
});
