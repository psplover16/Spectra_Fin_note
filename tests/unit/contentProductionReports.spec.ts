import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

describe('content production review reports', () => {
  it('records formal import summary and retained placeholder counts', () => {
    const summary = readText('_TMP/reviews/import-summary.md');

    for (const expectedText of [
      '/computer-principles',
      '/networking',
      '/database',
      '/information-management',
      '/programming',
      '/algorithms',
      'blocked topics',
      'verifiedBy',
      'verifierSummary'
    ]) {
      expect(summary).toContain(expectedText);
    }
  });

  it('records computer-principles as full manifest import instead of one-topic sample import', () => {
    const summary = readText('_TMP/reviews/import-summary.md');
    const computerPrinciplesLine = summary
      .split(/\r?\n/)
      .find((line) => line.startsWith('| /computer-principles |'));

    expect(computerPrinciplesLine).toBeDefined();
    expect(computerPrinciplesLine).toContain('| 32 | 0 | 0 |');
    expect(computerPrinciplesLine).not.toContain('| 1 | 31 |');
  });

  it('records term, code-comment, and production-chain audits as passing', () => {
    const termAudit = readText('_TMP/reports/term-audit-20260613-041900.md');
    const codeCommentAudit = readText('_TMP/reports/code-comment-audit-20260613-041900.md');
    const chainReview = readText('_TMP/reports/content-production-chain-review-20260613-041900.md');

    expect(termAudit).toContain('二元樹(Binary Tree)');
    expect(termAudit).toContain('pass');

    expect(codeCommentAudit).toContain('作答思路');
    expect(codeCommentAudit).toContain('binary-search');
    expect(codeCommentAudit).toContain('pass');

    expect(chainReview).toContain('_TMP/20260613-041419-algorithms-binary-search.md');
    expect(chainReview).toContain('orphan topic: none');
    expect(chainReview).toContain('duplicate formal topic id: none');
    expect(chainReview).toContain('pass');
  });
});
