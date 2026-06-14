import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

function readWorkflow(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf8');
}

describe('CI workflow', () => {
  it('runs all application quality gates on pull requests and non-gh-pages pushes', () => {
    const workflow = readWorkflow('.github/workflows/ci.yml');

    expect(workflow).toContain('pull_request:');
    expect(workflow).toContain('push:');
    expect(workflow).toContain('branches-ignore:');
    expect(workflow).toContain('gh-pages');
    expect(workflow).toContain('node-version: 22');
    expect(workflow).toContain('npm ci');
    expect(workflow).toContain('npm run lint');
    expect(workflow).toContain('npm run typecheck');
    expect(workflow).toContain('npm run test:unit');
    expect(workflow).toContain('npm run build');
    expect(workflow).toContain('npx playwright install --with-deps chromium');
    expect(workflow).toContain('npm run test:e2e');
  });

  it('uploads Playwright diagnostics on failed CI runs without committing generated output', () => {
    const workflow = readWorkflow('.github/workflows/ci.yml');

    expect(workflow).toContain('if: failure()');
    expect(workflow).toContain('actions/upload-artifact@v4');
    expect(workflow).toContain('playwright-report/');
    expect(workflow).toContain('test-results/');
    expect(workflow).not.toContain('git add dist');
    expect(workflow).not.toContain('git add playwright-report');
    expect(workflow).not.toContain('git add test-results');
  });
});
