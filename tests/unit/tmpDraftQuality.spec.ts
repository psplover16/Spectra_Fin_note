import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const readText = (path: string) => readFileSync(path, 'utf8');

interface ManifestTopic {
  id: string;
  title: string;
}

const readComputerPrinciplesManifestRows = (): ManifestTopic[] =>
  readText('_TMP/manifests/computer-principles-manifest.md')
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| cp-'))
    .map((line) => {
      const [id, title] = line
        .split('|')
        .slice(1, 3)
        .map((cell) => cell.trim());

      return { id: id ?? '', title: title ?? '' };
    });

const findComputerPrinciplesDraftPath = (topicId: string): string | undefined =>
  readdirSync('_TMP')
    .filter((fileName) => fileName.endsWith('.md'))
    .find((fileName) => fileName.includes('computer-principles') && fileName.includes(topicId))
    ?.replace(/^/, '_TMP/');

const stripBackticks = (value: string) => value.trim().replace(/^`|`$/g, '');

const routeTrackingFiles = [
  '_private/TMP/computer-principles/待生成主題清單_20260613-110000.md',
  '_private/TMP/networking/待生成主題清單_20260613-111500.md',
  '_private/TMP/database/待生成主題清單_20260613-113000.md',
  '_private/TMP/information-management/待生成主題清單_20260613-114500.md',
  '_private/TMP/programming/待生成主題清單_20260613-120000.md',
  '_private/TMP/algorithms/待生成主題清單_20260613-123000.md'
];

const readTrackingArtifactRows = (trackingFile: string) =>
  readText(trackingFile)
    .split(/\r?\n/)
    .filter((line) => line.startsWith('| `_private/') && !line.includes('| --- |'))
    .map((line) => {
      const cells = line.split('|').map((cell) => cell.trim());

      return {
        topicId: stripBackticks(cells[3] ?? ''),
        draftPath: stripBackticks(cells[7] ?? ''),
        verifiedPath: stripBackticks(cells[8] ?? '')
      };
    });

describe('computer-principles draft quality', () => {
  it('has substantive source-outline teaching drafts for every imported professional route topic', () => {
    let checkedRows = 0;

    for (const trackingFile of routeTrackingFiles) {
      const rows = readTrackingArtifactRows(trackingFile);

      expect(rows.length, `${trackingFile} should have route rows`).toBeGreaterThan(0);

      for (const row of rows) {
        expect(existsSync(row.draftPath), `${row.topicId} draft should exist`).toBe(true);
        expect(existsSync(row.verifiedPath), `${row.topicId} verified should exist`).toBe(true);

        const draft = readText(row.draftPath);
        const verified = readText(row.verifiedPath);

        expect(draft).toContain(`topic_id: ${row.topicId}`);
        expect(draft).toContain('status: draft');
        expect(draft).toContain('content_shape: lessonArticle');
        expect(draft).toContain('## 來源對應');
        expect(draft).toContain('## 來源大綱輸入');
        expect(draft).toContain('## 教材本文');
        expect(draft).toContain('## 學習標記說明');
        expect(draft).toContain('## Verifier 結果');
        expect(draft).toContain('old fixed template removed');
        expect(draft.length, `${row.topicId} draft should be more than a short summary`).toBeGreaterThan(900);
        expect(draft).not.toContain('## 國考重點');
        expect(draft).not.toContain('## 名詞解釋');

        expect(verified).toContain(`topic_id: ${row.topicId}`);
        expect(verified).toContain('status: verified');
        expect(verified).toContain('content_shape: lessonArticle');
        expect(verified).toContain('## 來源大綱輸入');
        expect(verified).toContain('## 教材本文');
        expect(verified).toContain('final_status: verified');

        checkedRows += 1;
      }
    }

    expect(checkedRows).toBeGreaterThan(100);
  });

  it('has a substantive verified AI draft for every imported computer-principles topic', () => {
    const manifestRows = readComputerPrinciplesManifestRows();
    const requiredSections = [
      'content_shape: lessonArticle',
      '## 來源對應',
      '## 教材本文',
      '## 學習標記說明',
      '## Verifier 結果'
    ];

    expect(manifestRows.length).toBeGreaterThan(20);

    for (const manifestRow of manifestRows) {
      const draftPath = findComputerPrinciplesDraftPath(manifestRow.id);

      expect(draftPath, `${manifestRow.id} should have a _TMP AI draft`).toBeDefined();
      expect(existsSync(draftPath ?? ''), `${manifestRow.id} draft file should exist`).toBe(true);

      const draft = readText(draftPath ?? join('_TMP', 'missing.md'));

      expect(draft).toContain(`topic_id: ${manifestRow.id}`);
      expect(draft).toContain('subject: computerPrinciples');
      expect(draft).toContain('status: verified');
      expect(draft).toContain('_private/計算機概論.txt');
      expect(draft.length, `${manifestRow.id} draft should be more than a short summary`).toBeGreaterThan(900);

      for (const section of requiredSections) {
        expect(draft, `${manifestRow.id} should include ${section}`).toContain(section);
      }

      expect(draft, `${manifestRow.id} should state stale fixed-template removal`).toContain('old fixed template removed');
      expect(draft, `${manifestRow.id} should include source-label driven lesson sections`).toMatch(
        /### \[(必背|比較|會算|會畫|補充|建議|易混淆|考點|原文提醒)\]/
      );
      expect(draft, `${manifestRow.id} should include verifier final status`).toContain('final_status: verified');
      expect(draft, `${manifestRow.id} should not be only a manifest row`).not.toContain('| pending-draft |');
      expect(draft, `${manifestRow.id} should not keep the old fixed template`).not.toContain('## 國考重點');
      expect(draft, `${manifestRow.id} should not keep the old fixed template`).not.toContain('## 名詞解釋');
    }
  });

  it('keeps a non-generic Von Neumann Architecture draft and mirrors it to _private/TMP', () => {
    const draftPath = findComputerPrinciplesDraftPath('cp-von-neumann-architecture');

    expect(draftPath).toBeDefined();

    const draft = readText(draftPath ?? '');
    const privateTmpDraftPath =
      '_private/TMP/computer-principles/20260613-054000-computer-principles-cp-von-neumann-architecture.md';

    expect(existsSync('_private/TMP')).toBe(true);
    expect(existsSync('_private/TMP/README.md')).toBe(true);
    expect(existsSync(privateTmpDraftPath)).toBe(true);
    expect(statSync(privateTmpDraftPath).size).toBeGreaterThan(1500);
    expect(readText(privateTmpDraftPath)).toContain('## 教材本文');
    expect(readText(privateTmpDraftPath)).toContain('old fixed template removed');

    for (const genericText of ['先理解中文意思', '不是孤立名詞', '最低通過線', '常考問法']) {
      expect(draft).not.toContain(genericText);
    }

    for (const explanatoryText of [
      '[必背]',
      '[比較]',
      '來源大綱不是成品',
      '國考怎麼寫',
      '程式內儲概念',
      '指令循序執行',
      '五大單元',
      '馮紐曼架構 vs 哈佛架構',
      '馮紐曼瓶頸',
      '比較項目',
      '判斷重點',
      '最小背誦句',
      '快取'
    ]) {
      expect(draft).toContain(explanatoryText);
    }
  });
});
