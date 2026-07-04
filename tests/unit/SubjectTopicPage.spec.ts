import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import SubjectTopicPage from '@/modules/subjectTopics/components/SubjectTopicPage.vue';
import type { SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

const newlineTopic: SubjectTopic = {
  id: 'newline-fixture',
  subjectKey: 'computerPrinciples',
  title: '換行測試',
  summary: '確認 learner-facing text 可以呈現換行。',
  blocks: [
    {
      kind: 'paragraph',
      text: '主題第一行\n主題第二行'
    },
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '換行測試',
      lead: ['lead 第一行\nlead 第二行'],
      sections: [
        {
          heading: '換行 section',
          blocks: [
            {
              kind: 'paragraph',
              text: '段落第一行\n段落第二行'
            },
            {
              kind: 'bulletList',
              items: ['bullet 第一行\nbullet 第二行']
            },
            {
              kind: 'orderedList',
              items: ['ordered 第一行\nordered 第二行']
            },
            {
              kind: 'subsection',
              heading: '內部小節',
              blocks: [
                {
                  kind: 'paragraph',
                  text: '小節段落第一行\n小節段落第二行'
                },
                {
                  kind: 'orderedList',
                  items: ['規則：\n1. 最高位不變。\n2. 其餘位元 XOR。']
                }
              ]
            },
            {
              kind: 'indentedGroup',
              blocks: [
                {
                  kind: 'paragraph',
                  text: '縮排群組第一行\n縮排群組第二行'
                },
                {
                  kind: 'indentedGroup',
                  blocks: [
                    {
                      kind: 'paragraph',
                      text: '第二層縮排第一行\n第二層縮排第二行'
                    }
                  ]
                },
                {
                  kind: 'table',
                  headers: ['縮排欄位'],
                  rows: [['縮排表格第一行\n縮排表格第二行']]
                }
              ]
            },
            {
              kind: 'table',
              headers: ['欄位'],
              rows: [['儲存格第一行\n儲存格第二行']]
            }
          ]
        }
      ]
    }
  ]
};

const highlightedTableTopic: SubjectTopic = {
  id: 'highlight-table-fixture',
  subjectKey: 'computerPrinciples',
  title: '表格重點測試',
  summary: '確認 lessonArticle table 可以用受控 metadata 標示重點。',
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '表格重點測試',
      lead: [],
      sections: [
        {
          heading: 'USB 重點',
          blocks: [
            {
              kind: 'table',
              headers: ['版本', '速度'],
              rows: [
                ['USB 2.0', '480 Mbps'],
                ['USB 3.0', '5 Gbps'],
                ['USB4 v2.0', '80 Gbps']
              ],
              rowStyles: {
                0: { text: 'emphasisText' },
                1: { text: 'emphasisText' }
              },
              columnStyles: {
                1: { text: 'defaultText' }
              },
              cellStyles: {
                '2:1': { background: 'emphasisBackground' }
              }
            },
            {
              kind: 'table',
              headers: ['公式', '說明'],
              rows: [['2^n', 'n bits 可產生的位址數'], ['換行', '第一行\n第二行']]
            },
            {
              kind: 'table',
              headers: ['未知 token'],
              rows: [['dangerRainbow']],
              rowStyles: {
                0: { text: 'dangerRainbow' as never }
              },
              cellStyles: {
                '0:0': { background: 'neonBackground' as never }
              }
            }
          ]
        }
      ]
    }
  ]
};

const revealableTruthTableTopic: SubjectTopic = {
  id: 'revealable-truth-table-fixture',
  subjectKey: 'computerPrinciples',
  title: '真值表揭露測試',
  summary: '確認 lessonArticle table 可以只揭露設定欄位。',
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '真值表揭露測試',
      lead: [],
      sections: [
        {
          heading: '兩輸入真值表(Two-Input Truth Table)',
          blocks: [
            {
              kind: 'table',
              headers: ['A', 'B', 'AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR'],
              revealableColumnIndexes: [2, 3, 4, 5, 6, 7],
              rows: [
                ['0', '0', '0', '0', '1', '1', '0', '1'],
                ['0', '1', '0', '1', '1', '0', '1', '0'],
                ['1', '0', '0', '1', '1', '0', '1', '0'],
                ['1', '1', '1', '1', '0', '0', '0', '1']
              ]
            },
            {
              kind: 'table',
              headers: ['靜態欄位'],
              rows: [['靜態內容']]
            }
          ]
        }
      ]
    }
  ]
};

const invalidRevealableColumnTopic: SubjectTopic = {
  id: 'invalid-revealable-column-fixture',
  subjectKey: 'computerPrinciples',
  title: '無效欄位揭露測試',
  summary: '確認 invalid reveal index 被忽略。',
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '無效欄位揭露測試',
      lead: [],
      sections: [
        {
          heading: '無效設定',
          blocks: [
            {
              kind: 'table',
              headers: ['欄位'],
              revealableColumnIndexes: [-1, 99],
              rows: [['會保持可見']]
            }
          ]
        }
      ]
    }
  ]
};

const collapsibleLessonSectionTopic = {
  id: 'collapsible-lesson-section-fixture',
  subjectKey: 'computerPrinciples',
  title: '收闔 section 測試',
  summary: '確認 lessonArticle section 可以獨立收闔。',
  blocks: [
    {
      kind: 'lessonArticle',
      sourceFiles: ['_private/計算機概論.txt'],
      sourceSection: '收闔 section 測試',
      lead: [],
      sections: [
        {
          heading: '一般 section',
          blocks: [
            {
              kind: 'paragraph',
              text: '一般內容應維持顯示'
            }
          ]
        },
        {
          heading: '考前總複習(Exam Quick Review)',
          collapsible: true,
          defaultExpanded: false,
          blocks: [
            {
              kind: 'orderedList',
              items: ['常見陷阱內容', '國考答題句內容', '考前速記內容']
            }
          ]
        }
      ]
    }
  ]
} as SubjectTopic;

describe('SubjectTopicPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('opens only the route last topic by default when the development preview flag is enabled', () => {
    const firstTopic: SubjectTopic = {
      id: 'first-topic',
      subjectKey: 'computerPrinciples',
      title: '第一個 section',
      summary: '第一個 section 不應自動打開。',
      blocks: [{ kind: 'paragraph', text: '第一段內容' }]
    };
    const lastTopic: SubjectTopic = {
      id: 'last-topic',
      subjectKey: 'computerPrinciples',
      title: '最後一個 section',
      summary: '最後一個 section 在開發階段自動打開。',
      blocks: [{ kind: 'paragraph', text: '最後一段內容' }]
    };

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [firstTopic, lastTopic],
        openLastTopicByDefault: true
      }
    });

    expect(wrapper.find('[data-testid="topic-detail-first-topic"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="topic-title-first-topic"]').attributes('aria-expanded')).toBe('false');
    expect(wrapper.get('[data-testid="topic-detail-last-topic"]').text()).toContain('最後一段內容');
    expect(wrapper.get('[data-testid="topic-title-last-topic"]').attributes('aria-expanded')).toBe('true');
  });

  it('keeps every route topic collapsed when the development preview flag is disabled', () => {
    const topics: readonly SubjectTopic[] = [
      {
        id: 'first-topic',
        subjectKey: 'computerPrinciples',
        title: '第一個 section',
        summary: '正式階段維持收合。',
        blocks: [{ kind: 'paragraph', text: '第一段內容' }]
      },
      {
        id: 'last-topic',
        subjectKey: 'computerPrinciples',
        title: '最後一個 section',
        summary: '正式階段也維持收合。',
        blocks: [{ kind: 'paragraph', text: '最後一段內容' }]
      }
    ];

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics,
        openLastTopicByDefault: false
      }
    });

    expect(wrapper.find('[data-testid="topic-detail-first-topic"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="topic-detail-last-topic"]').exists()).toBe(false);
    expect(wrapper.get('[data-testid="topic-title-first-topic"]').attributes('aria-expanded')).toBe('false');
    expect(wrapper.get('[data-testid="topic-title-last-topic"]').attributes('aria-expanded')).toBe('false');
  });

  it('renders htmlPage topics as title links without opening inline detail', async () => {
    const inlineTopic: SubjectTopic = {
      id: 'inline-topic',
      subjectKey: 'computerPrinciplesV2',
      title: '阿姆達爾定律',
      summary: 'Inline lesson article topic.',
      blocks: [{ kind: 'paragraph', text: '整體加速比' }]
    };
    const htmlTopic: SubjectTopic = {
      id: 'html-topic',
      subjectKey: 'computerPrinciplesV2',
      title: 'CPU 排班演算法',
      summary: 'Static HTML topic.',
      htmlPage: {
        sourceFilename: 'CPU排班演算法_國考完整講義.html',
        href: '/computer-principles-v2/CPU排班演算法_國考完整講義.html'
      },
      blocks: []
    };

    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計概(v2)',
        subjectKey: 'computerPrinciplesV2',
        testId: 'subject-view-computer-principles-v2',
        topics: [inlineTopic, htmlTopic],
        openLastTopicByDefault: true
      }
    });

    const htmlTitleControl = wrapper.get('[data-testid="topic-title-html-topic"]');

    expect(htmlTitleControl.element.tagName).toBe('A');
    expect(htmlTitleControl.attributes('href')).toBe('/computer-principles-v2/CPU排班演算法_國考完整講義.html');
    expect(htmlTitleControl.attributes('aria-expanded')).toBeUndefined();
    expect(htmlTitleControl.attributes('aria-controls')).toBeUndefined();
    expect(wrapper.find('[data-testid="topic-detail-html-topic"]').exists()).toBe(false);

    await wrapper.get('[data-testid="topic-title-inline-topic"]').trigger('click');

    expect(wrapper.get('[data-testid="topic-detail-inline-topic"]').text()).toContain('整體加速比');
    expect(wrapper.find('[data-testid="topic-detail-html-topic"]').exists()).toBe(false);
  });

  it('renders actual newline characters as line breaks in learner-facing text', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [newlineTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-newline-fixture"]').trigger('click');

    const detail = wrapper.find('[data-testid="topic-detail-newline-fixture"]');
    const newlineTextElements = [
      detail.find('[data-testid="topic-block-newline-fixture-paragraph-0"]').element,
      ...detail.findAll('article p').map((paragraph) => paragraph.element),
      ...detail.findAll('li').map((item) => item.element),
      ...detail.findAll('td').map((cell) => cell.element)
    ];

    expect(newlineTextElements.length).toBeGreaterThanOrEqual(6);
    for (const element of newlineTextElements) {
      expect(element.textContent).toContain('\n');
      expect(element).toHaveClass('subject-topic-text');
    }
    expect(detail.find('h4').text()).toBe('內部小節');
    expect(detail.text()).toContain('小節段落第一行\n小節段落第二行');
    expect(detail.text()).toContain('規則：\n1. 最高位不變。\n2. 其餘位元 XOR。');
    expect(detail.find('.subject-topic-lesson-indent-group').exists()).toBe(true);
    expect(detail.find('.subject-topic-lesson-indent-group').text()).toContain('縮排群組第一行\n縮排群組第二行');
    expect(detail.findAll('.subject-topic-lesson-indent-group')).toHaveLength(2);
    expect(detail.findAll('.subject-topic-lesson-indent-group')[1]?.text()).toContain('第二層縮排第一行\n第二層縮排第二行');
    expect(detail.find('.subject-topic-lesson-indent-group table').text()).toContain('縮排表格第一行\n縮排表格第二行');
  });

  it('renders controlled table highlight metadata without changing unstyled table behavior', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [highlightedTableTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-highlight-table-fixture"]').trigger('click');

    const tables = wrapper.findAll('table.subject-topic-table');
    const highlightedCells = tables[0]?.findAll('tbody td') ?? [];
    const plainCells = tables[1]?.findAll('tbody td') ?? [];
    const unknownTokenCell = tables[2]?.find('tbody td');

    expect(tables).toHaveLength(3);
    expect(highlightedCells[0]?.classes()).toContain('subject-topic-table-cell-emphasis-text');
    expect(highlightedCells[1]?.classes()).toContain('subject-topic-table-cell-default-text');
    expect(highlightedCells[2]?.classes()).toContain('subject-topic-table-cell-emphasis-text');
    expect(highlightedCells[3]?.classes()).toContain('subject-topic-table-cell-default-text');
    expect(highlightedCells[5]?.classes()).toContain('subject-topic-table-cell-emphasis-background');
    expect(plainCells.every((cell) => cell.classes().every((className) => !className.includes('emphasis')))).toBe(true);
    expect(plainCells[3]?.text()).toContain('第一行\n第二行');
    expect(tables[1]?.find('thead button.subject-topic-table-column-toggle').exists()).toBe(false);
    expect(unknownTokenCell?.classes().every((className) => !className.includes('dangerRainbow') && !className.includes('neonBackground'))).toBe(
      true
    );
  });

  it('reveals configured lessonArticle table columns from the header only', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [revealableTruthTableTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-revealable-truth-table-fixture"]').trigger('click');

    const tables = wrapper.findAll('table.subject-topic-table');
    const truthTable = tables[0];
    const staticTable = tables[1];
    const getColumnText = (columnIndex: number) =>
      truthTable?.findAll('tbody tr').map((row) => row.findAll('td')[columnIndex]?.text() ?? '') ?? [];

    expect(tables).toHaveLength(2);
    expect(truthTable?.findAll('thead button.subject-topic-table-column-toggle').map((button) => button.text())).toEqual([
      'AND',
      'OR',
      'NAND',
      'NOR',
      'XOR',
      'XNOR'
    ]);
    expect(getColumnText(0)).toEqual(['0', '0', '1', '1']);
    expect(getColumnText(1)).toEqual(['0', '1', '0', '1']);
    expect(getColumnText(2)).toEqual(['', '', '', '']);
    expect(getColumnText(3)).toEqual(['', '', '', '']);

    const andToggle = truthTable?.findAll('thead button.subject-topic-table-column-toggle').find((button) => button.text() === 'AND');

    expect(andToggle?.exists()).toBe(true);
    if (!andToggle) {
      throw new Error('AND column toggle should exist');
    }
    expect(andToggle.attributes('aria-expanded')).toBe('false');

    await andToggle.trigger('click');

    expect(andToggle.attributes('aria-expanded')).toBe('true');
    expect(getColumnText(2)).toEqual(['0', '0', '0', '1']);
    expect(getColumnText(3)).toEqual(['', '', '', '']);
    expect(getColumnText(6)).toEqual(['', '', '', '']);

    await andToggle.trigger('click');

    expect(andToggle.attributes('aria-expanded')).toBe('false');
    expect(getColumnText(2)).toEqual(['', '', '', '']);
    expect(staticTable?.find('thead button.subject-topic-table-column-toggle').exists()).toBe(false);
    expect(staticTable?.find('tbody').text()).toContain('靜態內容');
  });

  it('ignores invalid lessonArticle reveal column indexes', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [invalidRevealableColumnTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-invalid-revealable-column-fixture"]').trigger('click');

    const table = wrapper.find('table.subject-topic-table');

    expect(table.exists()).toBe(true);
    expect(table.find('thead button.subject-topic-table-column-toggle').exists()).toBe(false);
    expect(table.find('tbody').text()).toContain('會保持可見');
  });

  it('renders configured lessonArticle sections collapsed by default and toggles them independently', async () => {
    const wrapper = mount(SubjectTopicPage, {
      props: {
        title: '計算機原理',
        subjectKey: 'computerPrinciples',
        testId: 'subject-view-computer-principles',
        topics: [collapsibleLessonSectionTopic]
      }
    });

    await wrapper.find('[data-testid="topic-title-collapsible-lesson-section-fixture"]').trigger('click');

    const detail = wrapper.find('[data-testid="topic-detail-collapsible-lesson-section-fixture"]');

    expect(detail.text()).toContain('一般 section');
    expect(detail.text()).toContain('一般內容應維持顯示');
    expect(detail.text()).toContain('考前總複習(Exam Quick Review)');
    expect(detail.text()).not.toContain('常見陷阱內容');
    const lessonSections = detail.findAll('.subject-topic-lesson-section');

    expect(lessonSections).toHaveLength(2);
    expect(lessonSections[0]?.classes()).not.toContain('subject-topic-lesson-section-collapsible');
    expect(lessonSections[1]?.classes()).toContain('subject-topic-lesson-section-collapsible');

    const reviewToggle = detail.findAll('button.subject-topic-lesson-section-toggle').find((button) =>
      button.text().includes('考前總複習(Exam Quick Review)')
    );

    expect(reviewToggle?.exists()).toBe(true);

    await reviewToggle?.trigger('click');
    expect(detail.text()).toContain('常見陷阱內容');
    expect(detail.text()).toContain('國考答題句內容');
    expect(detail.text()).toContain('考前速記內容');

    await reviewToggle?.trigger('click');
    expect(detail.text()).not.toContain('常見陷阱內容');
    expect(detail.text()).toContain('一般內容應維持顯示');
  });
});
