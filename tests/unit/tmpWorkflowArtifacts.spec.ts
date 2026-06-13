import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

const countMatches = (text: string, pattern: RegExp) => Array.from(text.matchAll(pattern)).length;

const readLatestPendingTopicList = () => {
  const fileName = readdirSync('_TMP')
    .filter((entry) => /^待生成主題清單_\d{8}-\d{6}\.md$/.test(entry))
    .sort()
    .at(-1);

  expect(fileName).toBeDefined();

  return {
    fileName: fileName ?? '',
    text: readText(`_TMP/${fileName}`)
  };
};

describe('_TMP workflow artifacts', () => {
  it('documents governance, source boundaries, statuses, and scope', () => {
    const readme = readText('_TMP/README.md');

    for (const expectedText of [
      '任務數量不設上限',
      '不得合併不同科目',
      '不得合併不同 topic',
      '不得合併生成與驗證工作',
      '_private/計算機概論.txt',
      '_private/網概.txt',
      '_private/資料庫.txt',
      '_private/資訊管理.txt',
      '_private/程式.txt',
      '_private/系統分析與設計.txt',
      '_private/資料結構與演算法.txt',
      '_private/國考常見演算法_Java遞迴非遞迴_時間複雜度.md',
      '_private/筆記.md',
      '_private/_private_notes/筆記.txt',
      '_private/_private_notes/**/done/**',
      '_private/_private_fileAssets/**/done/**',
      '_private/程式語言_all.pdf',
      'pending-draft',
      'drafted',
      'verified',
      'blocked',
      'imported',
      '<timestamp>-<subject>-<topic>.md',
      '不包含題庫測驗',
      '不包含 PDF 第一批匯入',
      '不包含外部 API'
    ]) {
      expect(readme).toContain(expectedText);
    }
  });

  it('defines draft, verifier, import, and pending-topic-list templates', () => {
    const draftTemplate = readText('_TMP/templates/draft-frontmatter.md');
    const verifierTemplate = readText('_TMP/templates/verifier-checklist.md');
    const importTemplate = readText('_TMP/templates/import-record.md');
    const pendingTopicListTemplate = readText('_TMP/templates/待生成主題清單_template.md');

    for (const field of ['topic_id', 'subject', 'source_files', 'status', 'generated_at', 'verified_by']) {
      expect(draftTemplate).toContain(field);
    }

    for (const allowedStatus of ['draft', 'verified', 'blocked']) {
      expect(draftTemplate).toContain(allowedStatus);
    }

    for (const checklistItem of [
      '來源對應',
      '考試大綱',
      '記憶重點',
      '理解重點',
      '事實正確性',
      'Java 語意',
      '複雜度',
      '穩定性',
      '中英專有名詞',
      '新手可讀性'
    ]) {
      expect(verifierTemplate).toContain(checklistItem);
    }

    for (const importField of ['sourceFiles', 'sourceSummary', 'verifiedBy', 'verifiedAt', 'verifierSummary']) {
      expect(importTemplate).toContain(importField);
    }

    for (const importGateText of ['draft 不得替換 placeholder', 'blocked 不得替換 placeholder', 'verified 才能匯入']) {
      expect(importTemplate).toContain(importGateText);
    }

    for (const pendingColumn of [
      'route',
      'subject',
      'manifest id',
      'topic id',
      'title',
      'source file',
      'source section',
      'status',
      'draft path',
      'generator task',
      'verifier task',
      'import task',
      'notes'
    ]) {
      expect(pendingTopicListTemplate).toContain(pendingColumn);
    }
  });

  it('defines subagent prompt contracts and main-agent import checklist', () => {
    const generatorPrompt = readText('_TMP/prompts/content-generator.md');
    const verifierPrompt = readText('_TMP/prompts/content-verifier.md');
    const integrationPrompt = readText('_TMP/prompts/integration-checker.md');
    const importChecklist = readText('_TMP/templates/main-agent-import-checklist.md');

    for (const expectedText of ['單一 topic', '_TMP/<timestamp>-<subject>-<topic>.md', '完成後關閉', '不得直接改正式 app data']) {
      expect(generatorPrompt).toContain(expectedText);
    }

    for (const expectedText of ['單一 `_TMP` 草稿', '可直接修正同檔', 'blocked', 'verified', 'verifier result']) {
      expect(verifierPrompt).toContain(expectedText);
    }

    for (const expectedText of ['多 topic', '重複', '矛盾', '風格不一致', '不直接寫正式 app data']) {
      expect(integrationPrompt).toContain(expectedText);
    }

    for (const expectedText of ['來源', '術語', '風格', '路由歸屬', 'Java code', 'verifier status']) {
      expect(importChecklist).toContain(expectedText);
    }
  });

  it('tracks every source manifest topic in the pending topic list', () => {
    const { fileName, text } = readLatestPendingTopicList();
    const expectedManifestTopicCount =
      countMatches(readText('_TMP/manifests/computer-principles-manifest.md'), /^\| cp-.*pending-draft/mg) +
      countMatches(readText('_TMP/manifests/networking-manifest.md'), /^## [a-z0-9][a-z0-9-]*$/mg) +
      countMatches(readText('_TMP/manifests/database-manifest.md'), /^\| `database-.*`pending-draft`/mg) +
      countMatches(readText('_TMP/manifests/information-management-manifest.md'), /^\| im-.*`pending-draft`/mg) +
      countMatches(readText('_TMP/manifests/programming-manifest.md'), /^\| \d+ \| `programming-(?!system-analysis).*`pending-draft`/mg) +
      countMatches(readText('_TMP/manifests/programming-system-analysis-manifest.md'), /^\| \d+ \| `programming-system-analysis-.*`pending-draft`/mg) +
      countMatches(readText('_TMP/manifests/algorithms-manifest.md'), /^\| `alg-\d+` \| `[^`]+` \| .*pending-draft/mg);
    const topicRows = text.split('\n').filter((line) => line.startsWith('| /'));
    const allowedStatuses = new Set(['pending-draft', 'drafted', 'verified', 'blocked', 'imported']);

    expect(fileName).toBe('待生成主題清單_20260613-040441.md');
    expect(expectedManifestTopicCount).toBe(111);
    expect(topicRows).toHaveLength(expectedManifestTopicCount);
    expect(text).toContain('source manifest topic rows: 111');
    expect(text).toContain('不含個人筆記');
    expect(text).toContain('第一批不含 `_private/程式語言_all.pdf`');

    for (const row of topicRows) {
      const cells = row.split('|').slice(1, -1).map((cell) => cell.trim());

      expect(cells).toHaveLength(13);
      expect(cells[7]).toSatisfy((status: string) => allowedStatuses.has(status));
      expect(cells[8]).toMatch(/^`_TMP\/.*\.md`$/);
      expect(cells[9]).not.toBe('');
      expect(cells[10]).not.toBe('');
      expect(cells[11]).not.toBe('');
    }

    expect(text).toContain('| /computer-principles | computerPrinciples | computer-principles | cp-von-neumann-architecture');
    expect(text).toContain('imported | `_TMP/20260613-054000-computer-principles-cp-von-neumann-architecture.md`');
    expect(text).toContain('imported | `_TMP/20260613-041000-networking-ports.md`');
    expect(text).toContain('imported | `_TMP/20260613-041010-database-database-normalization.md`');
    expect(text).toContain('imported | `_TMP/20260613-041020-information-management-im-02-digital-transformation.md`');
    expect(text).toContain('imported | `_TMP/20260613-041030-programming-recursion.md`');
    expect(text).toContain('imported | `_TMP/20260613-041040-programming-system-analysis-sdlc.md`');
    expect(text).toContain('| /algorithms | algorithms | alg-007 | tree-and-binary-tree | 樹(Tree)與二元樹(Binary Tree)');
  });
});
