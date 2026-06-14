import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

function readWorkflow(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf8');
}

describe('CD workflow', () => {
  it('builds staging on dev and production on main with the expected GitHub Pages base paths', () => {
    const workflow = readWorkflow('.github/workflows/cd.yml');

    expect(workflow).toContain('branches:');
    expect(workflow).toContain('dev');
    expect(workflow).toContain('main');
    expect(workflow).toContain('VITE_APP_BASE_PATH=/Spectra_Fin_note/staging/');
    expect(workflow).toContain('VITE_APP_START_URL=/Spectra_Fin_note/staging/');
    expect(workflow).toContain('VITE_APP_BASE_PATH=/Spectra_Fin_note/');
    expect(workflow).toContain('VITE_APP_START_URL=/Spectra_Fin_note/');
    expect(workflow).toContain('npm run build');
  });

  it('publishes source-built output to gh-pages through the idempotent publish script', () => {
    const workflow = readWorkflow('.github/workflows/cd.yml');

    expect(workflow).toContain('permissions:');
    expect(workflow).toContain('contents: write');
    expect(workflow).toContain('gh-pages');
    expect(workflow).toContain('PUBLISH_TARGET=staging');
    expect(workflow).toContain('PUBLISH_TARGET=production');
    expect(workflow).toContain('node scripts/publishPages.mjs');
    expect(workflow).not.toContain('git add dist');
  });
});
