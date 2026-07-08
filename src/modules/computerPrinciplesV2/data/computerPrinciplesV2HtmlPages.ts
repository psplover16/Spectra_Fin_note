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
    'cpv2-supplemental-basic-tree',
    '基礎樹',
    '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    '基礎樹.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-expression-notation',
    '運算式表示法',
    '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    '運算式表示法.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-avl-tree',
    'AVL樹',
    '_private/20260708/AVL樹_考前速記卡.md',
    'AVL樹.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-avl-tree-deletion',
    'AVL樹_刪除',
    '_private/20260708/AVL樹_刪除專練.md',
    'AVL樹_刪除.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-red-black-tree',
    '紅黑樹',
    '_private/20260708/紅黑樹_考前速記卡.md',
    '紅黑樹.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-red-black-tree-deletion',
    '紅黑樹_刪除',
    '_private/20260708/紅黑樹_刪除專練.md',
    '紅黑樹_刪除.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-hash-table',
    '雜湊表',
    '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    '雜湊表.html'
  ),
  createComputerPrinciplesV2HtmlPage(
    'cpv2-supplemental-trees-hash-practice',
    '樹與雜湊表_考題練習',
    '_private/計概補充/基礎資料結構(下)_樹與雜湊表.md',
    '樹與雜湊表_考題練習.html'
  )
] as const satisfies readonly ComputerPrinciplesV2HtmlPage[];
