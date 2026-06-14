import { describe, expect, it } from 'vitest';
import { getSubjectTopics, hasSubjectTopicContent } from '@/modules/subjectTopics/data/subjectTopics';
import type { SubjectTopic } from '@/modules/subjectTopics/types/subjectTopic';

describe('subject topic route data helpers', () => {
  it('treats an empty lessonArticle skeleton as no route-visible content', () => {
    const topic: SubjectTopic = {
      id: 'empty-topic-fixture',
      subjectKey: 'computerPrinciples',
      title: '空殼 section',
      summary: '',
      blocks: [
        {
          kind: 'lessonArticle',
          sourceFiles: ['_private/計算機概論.txt'],
          sourceSection: '測試來源',
          lead: [],
          sections: []
        }
      ]
    };

    expect(hasSubjectTopicContent(topic)).toBe(false);
  });

  it('keeps only route topics with actual learner-facing content', () => {
    const computerPrinciplesTopics = getSubjectTopics('computerPrinciples');
    const computerPrinciplesTitles = computerPrinciplesTopics.map((topic) => topic.title);
    const computerPrinciplesIds = computerPrinciplesTopics.map((topic) => topic.id);
    const algorithmTitles = getSubjectTopics('algorithms').map((topic) => topic.title);

    expect(computerPrinciplesTitles).toEqual([
      '電腦常用單位',
      '馮紐曼架構(Von Neumann Architecture)',
      '圖靈機與圖靈測試(Turing Machine and Turing Test)',
      '機器指令與指令週期(Machine Instruction and Instruction Cycle)',
      'Pipeline（管線化）(Pipelining)',
      '管線危障(Hazard)',
      '匯流排（Bus）',
      '效能名詞與公式(Performance Terms and Formulas)',
      'RISC 與 CISC(RISC and CISC)',
      'Memory 階層圖(Memory Hierarchy)',
      'Memory 分類圖(Memory Classification)',
      'Register（暫存器）(Register)',
      'Cache(Cache Memory)',
      'USB 速度(USB Speed)',
      '進制轉換(Base Conversion)',
      '補數轉換(Complement Representation)',
      '浮點數轉換(Floating-Point Conversion)',
      '數碼、文字碼與檢查碼(Codes and Check Codes)'
    ]);
    expect(computerPrinciplesIds.slice(computerPrinciplesIds.indexOf('cp-pipeline'), computerPrinciplesIds.indexOf('cp-bus') + 1)).toEqual([
      'cp-pipeline',
      'cp-hazard',
      'cp-bus'
    ]);
    expect(computerPrinciplesIds.slice(computerPrinciplesIds.indexOf('cp-cache'), computerPrinciplesIds.indexOf('cp-complement-conversion') + 1)).toEqual([
      'cp-cache',
      'cp-usb-speed',
      'cp-base-conversion',
      'cp-complement-conversion'
    ]);
    expect(
      computerPrinciplesIds.slice(
        computerPrinciplesIds.indexOf('cp-complement-conversion'),
        computerPrinciplesIds.indexOf('cp-codes-and-check-codes') + 1
      )
    ).toEqual(['cp-complement-conversion', 'cp-floating-point-conversion', 'cp-codes-and-check-codes']);

    expect(algorithmTitles).toEqual([
      '氣泡排序法(Bubble Sort)',
      '快速排序法(Quick Sort)',
      'Fibonacci 序列(Fibonacci Sequence)',
      '最大公因數(Greatest Common Divisor)',
      '二元搜尋法(Binary Search)',
      '選擇排序法(Selection Sort)',
      '插入排序法(Insertion Sort)'
    ]);
  });

  it('does not fall back to placeholder topics when a route has no filled content', () => {
    expect(getSubjectTopics('networking')).toEqual([]);
    expect(getSubjectTopics('informationManagement')).toEqual([]);
    expect(getSubjectTopics('programming')).toEqual([]);
    expect(getSubjectTopics('database')).toEqual([]);
    expect(getSubjectTopics('english')).toEqual([]);
    expect(getSubjectTopics('chinese')).toEqual([]);
  });
});
