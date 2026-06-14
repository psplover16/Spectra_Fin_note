import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');
const stripBackticks = (value: string) => value.trim().replace(/^`|`$/g, '');
const labelsFrom = (value: string) => value.match(/\[[^\]]+\]/g) ?? [];

const trackingFiles = [
  '_private/TMP/computer-principles/待生成主題清單_20260613-110000.md',
  '_private/TMP/networking/待生成主題清單_20260613-111500.md',
  '_private/TMP/database/待生成主題清單_20260613-113000.md',
  '_private/TMP/information-management/待生成主題清單_20260613-114500.md',
  '_private/TMP/programming/待生成主題清單_20260613-120000.md',
  '_private/TMP/algorithms/待生成主題清單_20260613-123000.md'
];

const reportPath = '_private/TMP/source-label-expansion-validation.md';

describe('source label expansion across route workflows', () => {
  it('keeps every route topic label defined and expanded through prompt, draft, and verifier artifacts', () => {
    const definitions = readText('_private/TMP/source-label-definitions.md');
    const report = readText(reportPath);
    let checkedRows = 0;

    for (const trackingFile of trackingFiles) {
      const tracking = readText(trackingFile);
      const rows = tracking
        .split(/\r?\n/)
        .filter((line) => line.startsWith('| `_private/') && !line.includes('| --- |'));

      expect(rows.length, `${trackingFile} should have route tracking rows`).toBeGreaterThan(0);

      for (const row of rows) {
        const cells = row.split('|').map((cell) => cell.trim());
        const topicId = stripBackticks(cells[3] ?? '');
        const sourceLabelsCell = cells[5] ?? '';
        const promptPath = stripBackticks(cells[6] ?? '');
        const draftPath = stripBackticks(cells[7] ?? '');
        const verifiedPath = stripBackticks(cells[8] ?? '');
        const labels = labelsFrom(sourceLabelsCell);

        expect(labels.length, `${topicId} should record at least one source label`).toBeGreaterThan(0);
        expect(existsSync(promptPath), `${topicId} prompt exists`).toBe(true);
        expect(existsSync(draftPath), `${topicId} draft exists`).toBe(true);
        expect(existsSync(verifiedPath), `${topicId} verified exists`).toBe(true);

        const prompt = readText(promptPath);
        const draft = readText(draftPath);
        const verified = readText(verifiedPath);

        expect(prompt).toContain('source_label_definitions: ../source-label-definitions.md');

        expect(prompt).toContain('content_shape: lessonArticle');
        expect(prompt).toContain('## Source Outline Input');
        expect(prompt).toContain('## Content Writer Instruction');
        expect(prompt).toContain('source outline is writer input, not final teaching content');

        expect(draft).toContain('content_shape: lessonArticle');
        expect(draft).toContain('## 來源對應');
        expect(draft).toContain('## 來源大綱輸入');
        expect(draft).toContain('## 教材本文');
        expect(draft).toContain('## 學習標記說明');
        expect(draft).toContain('old fixed template removed');
        expect(draft).not.toContain('## 國考重點');
        expect(draft).not.toContain('## 國考速記');
        expect(draft).not.toContain('## 名詞解釋');
        expect(draft).not.toContain('## 核心想法');
        expect(draft).not.toContain('## 易錯提醒');

        expect(verified).toContain('final_status: verified');
        expect(verified).toContain('content_shape: lessonArticle');
        expect(verified).toContain('## 來源大綱輸入');
        expect(verified).toContain('## 教材本文');
        expect(verified).toContain('old fixed template removed');

        for (const label of labels) {
          expect(definitions, `${label} should be globally defined`).toContain(`label: ${label}`);
          expect(report, `${label} should have expansion validation`).toContain(`${label} | pass`);
        }

        checkedRows += 1;
      }
    }

    expect(checkedRows).toBeGreaterThan(100);
    expect(report).toContain('unknown valid source labels: 0');
    expect(report).toContain('final result: pass');

    for (const requiredExpansion of [
      '[必背] | pass | definition, importance, minimum memorization sentence, exam answer template, pitfall',
      '[比較] | pass | comparison table or structured comparison',
      '[會算] | pass | formula, variable definitions, substitution example',
      '[會畫] | pass | drawing order, node definitions, text diagram',
      '[會做] | pass | operation steps, worked demonstration, checkpoints',
      '[會寫] | pass | writable template, example, common mistakes',
      '[必練] | pass | required practice type, demonstration, self-check',
      '[會寫虛擬碼] | pass | input/output, pseudocode, step explanation',
      '[原文考點] | pass | source intent, exam focus, answer keywords',
      '[原文提醒] | pass | source reminder intent, minimum requirement, follow-up scope',
      '[原文保留] | pass | source preservation intent and usage limits'
    ]) {
      expect(report).toContain(requiredExpansion);
    }
  });
});
