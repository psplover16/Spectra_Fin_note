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
      '數碼、文字碼與檢查碼(Codes and Check Codes)',
      '基本邏輯(Digital Logic Basics)',
      'SOP 與 POS(SOP and POS)',
      '卡諾圖化簡(Karnaugh Map Simplification)',
      '萬用閘(Universal Gates)',
      '組合與循序電路(Combinational and Sequential Circuits)',
      '作業系統 1：OS 基礎概念(Operating System Basics)',
      '作業系統 2：I/O 中斷方式 與 硬體保護(I/O and Interrupts)',
      '作業系統 3-4：OS 的結構(Operating System Structure)',
      '作業系統 3-5（上）：Process 基礎(Process)',
      '作業系統 3-5（下）：CPU 排程演算法(CPU Scheduling)',
      '作業系統 3-6：Deadlock（死結）(Deadlock)',
      '作業系統 3-7：Process Communication(Process Communication)',
      '作業系統 3-8：Memory Management（記憶體管理）(Memory Management)',
      '作業系統 3-9：Virtual Memory（虛擬記憶體）(Virtual Memory)',
      '作業系統 3-10：Disk Management（磁碟管理）(Disk Management)'
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
    const digitalLogicStartIndex = computerPrinciplesIds.indexOf('cp-codes-and-check-codes') + 1;

    expect(computerPrinciplesIds.slice(digitalLogicStartIndex, digitalLogicStartIndex + 5)).toEqual([
      'cp-digital-logic-basics',
      'cp-sop-pos',
      'cp-karnaugh-map',
      'cp-universal-gates',
      'cp-combinational-sequential-circuits'
    ]);
    const operatingSystemStartIndex = digitalLogicStartIndex + 5;

    expect(computerPrinciplesIds.slice(operatingSystemStartIndex, operatingSystemStartIndex + 10)).toEqual([
      'cp-os-basics',
      'cp-io-and-interrupts',
      'cp-os-structure',
      'cp-process',
      'cp-cpu-scheduling',
      'cp-deadlock',
      'cp-process-communication',
      'cp-memory-management',
      'cp-virtual-memory',
      'cp-disk-management'
    ]);
    expect(computerPrinciplesIds).not.toContain('cp-hardware-protection');

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
