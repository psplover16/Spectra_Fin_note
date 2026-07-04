export interface ComputerPrinciplesV2HtmlPage {
  id: string;
  title: string;
  source: string;
  sourceFilename: string;
  href: string;
}

export function createComputerPrinciplesV2PageHref(sourceFilename: string, baseUrl = import.meta.env.BASE_URL): string {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBaseUrl}computer-principles-v2/${sourceFilename}`;
}

function createComputerPrinciplesV2HtmlPage(
  id: string,
  title: string,
  source: string,
  sourceFilename: string
): ComputerPrinciplesV2HtmlPage {
  return {
    id,
    title,
    source,
    sourceFilename,
    href: createComputerPrinciplesV2PageHref(sourceFilename)
  };
}

export const computerPrinciplesV2HtmlPages = [
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-cpu-scheduling',
    'CPU 排班演算法',
    '_private/計概補充/CPU排班演算法_國考完整講義.md',
    'CPU排班演算法_國考完整講義.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-deadlock',
    '死結',
    '_private/計概補充/死結_考試精簡版.md',
    '死結_考試精簡版.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-paging-segmentation',
    '分頁與分段記憶體管理',
    '_private/計概補充/分頁與分段記憶體管理_題目帶動教學完整版.md',
    '分頁與分段記憶體管理_題目帶動教學完整版.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-oop-characteristics',
    '物件導向特性',
    '_private/計概補充/物件導向特性_國考完整講義.md',
    '物件導向特性_國考完整講義.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-complexity-linear-structures',
    '複雜度與線性結構',
    '_private/計概補充/基礎資料結構(上)_複雜度與線性結構.md',
    '基礎資料結構(上)_複雜度與線性結構.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-trees-hash-tables',
    '樹與雜湊表',
    '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    '基礎資料結構(下)_樹與雜湊表.html'
  )
] as const satisfies readonly ComputerPrinciplesV2HtmlPage[];
