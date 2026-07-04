import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  computerPrinciplesV2HtmlPages,
  createComputerPrinciplesV2PageHref
} from '@/modules/computerPrinciplesV2/data/computerPrinciplesV2HtmlPages';

const expectedLessons = [
  {
    title: 'CPU 排班演算法',
    source: '_private/計概補充/CPU排班演算法_國考完整講義.md',
    htmlFilename: 'CPU排班演算法_國考完整講義.html',
    markers: ['CPU Scheduling', 'Round Robin', 'MLFQ', '<table', '<ol']
  },
  {
    title: '死結',
    source: '_private/計概補充/死結_考試精簡版.md',
    htmlFilename: '死結_考試精簡版.html',
    markers: ['Deadlock', '四個必要條件', '<ol']
  },
  {
    title: '分頁與分段記憶體管理',
    source: '_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md',
    htmlFilename: '分頁與分段記憶體管理_題目帶動教學完整版.html',
    markers: ['Paging', 'Segmentation', '<table']
  },
  {
    title: '物件導向特性',
    source: '_private/計概補充/物件導向特性_國考完整講義.md',
    htmlFilename: '物件導向特性_國考完整講義.html',
    markers: ['OOP Characteristics', 'Encapsulation', '<ul']
  },
  {
    title: '複雜度與線性結構',
    source: '_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md',
    htmlFilename: '基礎資料結構(上)_複雜度與線性結構.html',
    markers: ['Complexity', 'Linear Structures', '<code']
  },
  {
    title: '樹與雜湊表',
    source: '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    htmlFilename: '基礎資料結構(下)_樹與雜湊表.html',
    markers: ['Tree', 'Hash Table', '<table']
  }
] as const;
const computerPrinciplesV2HtmlDirectory = resolve(process.cwd(), 'public/computer-principles-v2');

describe('computerPrinciplesV2HtmlPages', () => {
  it('maps every approved supplemental Markdown source to one HTML page', () => {
    expect(computerPrinciplesV2HtmlPages).toHaveLength(expectedLessons.length);
    expect(
      computerPrinciplesV2HtmlPages.map((page) => ({
        title: page.title,
        source: page.source,
        sourceFilename: page.sourceFilename
      }))
    ).toEqual(
      expectedLessons.map((lesson) => ({
        title: lesson.title,
        source: lesson.source,
        sourceFilename: lesson.htmlFilename
      }))
    );
  });

  it('builds static asset hrefs from the configured app base path', () => {
    expect(createComputerPrinciplesV2PageHref('CPU排班演算法_國考完整講義.html', '/Spectra_Fin_note/')).toBe(
      '/Spectra_Fin_note/computer-principles-v2/CPU排班演算法_國考完整講義.html'
    );
    expect(createComputerPrinciplesV2PageHref('CPU排班演算法_國考完整講義.html', '/Spectra_Fin_note')).toBe(
      '/Spectra_Fin_note/computer-principles-v2/CPU排班演算法_國考完整講義.html'
    );
    expect(createComputerPrinciplesV2PageHref('CPU排班演算法_國考完整講義.html', './')).toBe(
      './computer-principles-v2/CPU排班演算法_國考完整講義.html'
    );
  });

  it('publishes exactly the six approved standalone HTML lessons with CPv2 reading chrome', () => {
    const htmlFiles = readdirSync(computerPrinciplesV2HtmlDirectory).filter((filename) => filename.endsWith('.html'));

    expect(htmlFiles.sort()).toEqual(expectedLessons.map((lesson) => lesson.htmlFilename).sort());
    expect(htmlFiles).not.toContain('阿姆達爾定律.html');

    for (const lesson of expectedLessons) {
      const html = readFileSync(resolve(computerPrinciplesV2HtmlDirectory, lesson.htmlFilename), 'utf8');

      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html lang="zh-Hant">');
      expect(html).toContain('<meta charset="UTF-8">');
      expect(html).toContain('backToComputerPrinciplesV2');
      expect(html).toContain('resolveComputerPrinciplesV2IndexPath');
      expect(html).toContain("var marker='/computer-principles-v2/';");
      expect(html).not.toContain('recite');
      for (const marker of lesson.markers) {
        expect(html, `${lesson.htmlFilename} should preserve ${marker}`).toContain(marker);
      }
    }
  });
});
