import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import TeachingCodeBlock from '@/shared/components/TeachingCodeBlock.vue';

describe('TeachingCodeBlock', () => {
  it('renders a Java snippet with title, description, language, and monospace code region', () => {
    const wrapper = mount(TeachingCodeBlock, {
      props: {
        title: '校驗位公式示範',
        description: '示範如何把公式拆成可讀的布林判斷。',
        language: 'java',
        code: 'boolean enough = (1 << parityBits) >= dataBits + parityBits + 1;'
      }
    });

    expect(wrapper.get('[data-testid="teaching-code-title"]').text()).toBe('校驗位公式示範');
    expect(wrapper.get('[data-testid="teaching-code-description"]').text()).toBe('示範如何把公式拆成可讀的布林判斷。');
    expect(wrapper.get('[data-testid="teaching-code-language"]').text()).toBe('Java');
    expect(wrapper.get('[data-testid="teaching-code-region"]').classes()).toContain('teaching-code-region');
    expect(wrapper.get('[data-testid="teaching-code-code"]').text()).toContain('boolean enough');
  });

  it('renders a safe Traditional Chinese empty state without console errors', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const wrapper = mount(TeachingCodeBlock, {
      props: {
        language: 'java',
        code: ''
      }
    });

    expect(wrapper.get('[data-testid="teaching-code-empty"]').text()).toContain('尚未提供程式碼範例');
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('falls back to plain text for unsupported languages while preserving code text', () => {
    const wrapper = mount(TeachingCodeBlock, {
      props: {
        language: 'pseudo',
        code: 'repeat until stable'
      }
    });

    expect(wrapper.get('[data-testid="teaching-code-language"]').text()).toBe('plain text');
    expect(wrapper.get('[data-testid="teaching-code-code"]').text()).toContain('repeat until stable');
  });

  it('keeps Hamming code learning comments near clear Java variables', () => {
    const wrapper = mount(TeachingCodeBlock, {
      props: {
        language: 'java',
        code: `int dataBits = 4;
int parityBits = 1;

// dataBits 是資料位元數，parityBits 是目前嘗試的校驗位元數。
while ((1 << parityBits) < dataBits + parityBits + 1) {
  parityBits++;
}`
      }
    });

    const codeText = wrapper.get('[data-testid="teaching-code-code"]').text();
    expect(codeText).toContain('int dataBits = 4;');
    expect(codeText).toContain('int parityBits = 1;');
    expect(codeText).toContain('dataBits 是資料位元數');
    expect(codeText).toContain('while ((1 << parityBits)');
  });
});
