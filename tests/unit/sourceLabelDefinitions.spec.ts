import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

const sourceLabelDefinitionsPath = '_private/TMP/source-label-definitions.md';
const sourceLabelScanReportPath = '_private/TMP/source-label-scan-report.md';
const sourceLabelRouteCoveragePath = '_private/TMP/source-label-route-coverage.md';

const validSourceLabels = [
  '[必背]',
  '[比較]',
  '[會算]',
  '[會畫]',
  '[補充]',
  '[易混淆]',
  '[考點]',
  '[建議]',
  '[原文提醒]',
  '[補充建議]',
  '[會做]',
  '[會寫]',
  '[必練]',
  '[會寫虛擬碼]',
  '[原文考點]'
];

describe('source label definitions for route-scoped production', () => {
  it('defines every discovered valid source label before route drafting', () => {
    expect(existsSync(sourceLabelDefinitionsPath)).toBe(true);

    const definitions = readText(sourceLabelDefinitionsPath);

    for (const label of validSourceLabels) {
      expect(definitions, `${label} should have a heading`).toContain(`## ${label}`);
      expect(definitions, `${label} should define meaning`).toContain(`label: ${label}`);
      expect(definitions, `${label} should include expansion rules`).toContain('教材展開規則');
      expect(definitions, `${label} should include required draft sections`).toContain('Draft 必備段落');
      expect(definitions, `${label} should include verifier assertions`).toContain('Verifier 檢查點');
    }

    expect(definitions).toContain('## [原文保留]');
    expect(definitions).toContain('classification: auxiliary label');
  });

  it('records scan classifications and excludes code-like bracket tokens', () => {
    expect(existsSync(sourceLabelScanReportPath)).toBe(true);

    const report = readText(sourceLabelScanReportPath);

    for (const sourceFile of [
      '_private/計算機概論.txt',
      '_private/網概.txt',
      '_private/資料庫.txt',
      '_private/資訊管理.txt',
      '_private/程式.txt',
      '_private/系統分析與設計.txt',
      '_private/資料結構與演算法.txt',
      '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md'
    ]) {
      expect(report).toContain(sourceFile);
    }

    for (const nonLabelToken of ['[i]', '[mid]', '[1, 2, 3, 4, 5]', '[ ]']) {
      expect(report).toContain(`| ${nonLabelToken} |`);
      expect(report).toContain('non-label syntax/code token');
    }

    expect(report).toContain('Unknown source-like label count: 0');
    expect(report).toContain('Valid source labels: 15');
    expect(report).toContain('Auxiliary labels: 1');
  });

  it('maps every professional route to the labels discovered from its own sources', () => {
    expect(existsSync(sourceLabelRouteCoveragePath)).toBe(true);

    const routeCoverage = readText(sourceLabelRouteCoveragePath);

    for (const route of [
      '/computer-principles',
      '/networking',
      '/database',
      '/information-management',
      '/programming',
      '/algorithms'
    ]) {
      expect(routeCoverage).toContain(`| ${route} |`);
    }

    expect(routeCoverage).toContain('| /database |');
    expect(routeCoverage).toContain('[必練]');
    expect(routeCoverage).toContain('[會寫]');
    expect(routeCoverage).toContain('| /algorithms |');
    expect(routeCoverage).toContain('[會寫虛擬碼]');
    expect(routeCoverage).toContain('non-label syntax/code token');
  });
});

describe('route-scoped production tracking templates', () => {
  const routeTrackingFiles = [
    '_private/TMP/computer-principles/待生成主題清單_20260613-105500.md',
    '_private/TMP/networking/待生成主題清單_20260613-105500.md',
    '_private/TMP/database/待生成主題清單_20260613-105500.md',
    '_private/TMP/information-management/待生成主題清單_20260613-105500.md',
    '_private/TMP/programming/待生成主題清單_20260613-105500.md',
    '_private/TMP/algorithms/待生成主題清單_20260613-105500.md'
  ];

  const requiredColumns = [
    'source file',
    'source section',
    'topic id',
    'source labels',
    'prompt path',
    'draft path',
    'verified path',
    'import target',
    'status',
    'verifier result',
    'manual review result'
  ];

  it('creates a route tracking sample for every professional route', () => {
    for (const trackingFile of routeTrackingFiles) {
      expect(existsSync(trackingFile), `${trackingFile} should exist`).toBe(true);

      const content = readText(trackingFile);

      expect(content).toContain('tracking_type: route-scoped-topic-production');
      expect(content).toContain('source_label_definitions: ../source-label-definitions.md');
      expect(content).toContain('allowed_statuses: pending-prompt, prompted, drafted, verified, blocked, import-ready, imported');

      for (const column of requiredColumns) {
        expect(content, `${trackingFile} should include ${column}`).toContain(column);
      }
    }
  });
});
