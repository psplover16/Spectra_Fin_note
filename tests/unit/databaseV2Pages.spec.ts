import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { createDatabaseV2PageHref, databaseV2Pages } from '@/modules/databaseV2/data/databaseV2Pages';

const expectedLessons = [
  ['國考資料庫_01_ANSI-SPARC三層架構.html', 'ANSI-SPARC三層架構'],
  ['國考資料庫_02_資料庫優缺點與種類.html', '資料庫優缺點與種類'],
  ['國考資料庫_03_Key鍵.html', 'Key鍵'],
  ['國考資料庫_04_ERD實體關係圖.html', 'ERD實體關係圖'],
  ['國考資料庫_05_正規化.html', '正規化'],
  ['國考資料庫_05B_函數相依與阿姆斯壯公理.html', '函數相依與阿姆斯壯公理'],
  ['國考資料庫_05C_正規化逐步練習.html', '正規化逐步練習'],
  ['國考資料庫_06_SQL三大指令分類.html', 'SQL三大指令分類'],
  ['國考資料庫_07_資料定義與資料庫物件.html', '資料定義與資料庫物件'],
  ['國考資料庫_08_SQL_CRUD語法.html', 'SQL_CRUD語法'],
  ['國考資料庫_09_SQL查詢功能.html', 'SQL查詢功能'],
  ['國考資料庫_10_ACID交易特性.html', 'ACID交易特性'],
  ['國考資料庫_11_NoSQL.html', 'NoSQL']
] as const;
const databaseV2HtmlDirectory = resolve(process.cwd(), 'public/database-v2');

describe('databaseV2Pages', () => {
  it('maps every imported HTML filename to a stripped display title in source order', () => {
    expect(databaseV2Pages).toHaveLength(13);
    expect(databaseV2Pages.map((page) => [page.sourceFilename, page.title])).toEqual(expectedLessons);
  });

  it('uses stable ids and static asset hrefs for every imported lesson', () => {
    for (const page of databaseV2Pages) {
      expect(page.id).toMatch(/^database-v2-[a-z0-9-]+$/);
      expect(page.title).not.toMatch(/^國考資料庫_[^_]+_/);
      expect(page.sourceFilename.endsWith('.html')).toBe(true);
      expect(page.href).toBe(`/database-v2/${page.sourceFilename}`);
    }
  });

  it('builds static asset hrefs from the configured app base path', () => {
    expect(createDatabaseV2PageHref('國考資料庫_01_ANSI-SPARC三層架構.html', '/Spectra_Fin_note/')).toBe(
      '/Spectra_Fin_note/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html'
    );
    expect(createDatabaseV2PageHref('國考資料庫_01_ANSI-SPARC三層架構.html', '/Spectra_Fin_note')).toBe(
      '/Spectra_Fin_note/database-v2/國考資料庫_01_ANSI-SPARC三層架構.html'
    );
    expect(createDatabaseV2PageHref('國考資料庫_01_ANSI-SPARC三層架構.html', './')).toBe(
      './database-v2/國考資料庫_01_ANSI-SPARC三層架構.html'
    );
  });

  it('keeps copied HTML return fallbacks base-path aware', () => {
    const htmlFiles = readdirSync(databaseV2HtmlDirectory).filter((filename) => filename.endsWith('.html'));

    expect(htmlFiles).toHaveLength(13);

    for (const htmlFile of htmlFiles) {
      const html = readFileSync(resolve(databaseV2HtmlDirectory, htmlFile), 'utf8');

      expect(html).toContain('backToDatabaseV2');
      expect(html).toContain('resolveDatabaseV2IndexPath');
      expect(html).toContain("var marker='/database-v2/';");
      expect(html).not.toContain("window.location.href='/database-v2'");
    }
  });
});
