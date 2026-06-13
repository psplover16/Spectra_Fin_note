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

describe('computer-principles draft quality', () => {
  it('has a substantive verified AI draft for every imported computer-principles topic', () => {
    const manifestRows = readComputerPrinciplesManifestRows();
    const requiredSections = [
      '## 國考重點',
      '## 國考速記',
      '## 名詞解釋',
      '## 核心想法',
      '## 易錯提醒',
      '## 專有名詞',
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

      expect(draft, `${manifestRow.id} should include an example or procedure section`).toMatch(/## (實際例子|操作步驟)/);
      expect(draft, `${manifestRow.id} should include verifier final status`).toContain('final_status: verified');
      expect(draft, `${manifestRow.id} should not be only a manifest row`).not.toContain('| pending-draft |');
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
    expect(readText(privateTmpDraftPath)).toContain('## 名詞解釋');

    for (const genericText of ['先理解中文意思', '不是孤立名詞', '最低通過線', '常考問法']) {
      expect(draft).not.toContain(genericText);
    }

    for (const explanatoryText of [
      '程式和資料都放在同一套記憶體',
      '控制單元(Control Unit) 負責取出指令、解碼並發出控制訊號',
      '算術邏輯單元(Arithmetic Logic Unit) 負責加減乘除、比較與邏輯判斷',
      '取指令(Fetch)',
      '解碼(Decode)',
      '取運算元(Operand Fetch)',
      '執行(Execute)',
      '寫回(Write Back)',
      'Harvard Architecture 將程式記憶體與資料記憶體分離'
    ]) {
      expect(draft).toContain(explanatoryText);
    }
  });
});
