import { expect, test } from '@playwright/test';

test('header, topic cards, and code blocks stay inside a 375px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/programming');

  await page.getByTestId('topic-title-check-bit-formula').click();
  const codeRegion = page.getByTestId('teaching-code-region').first();
  await expect(codeRegion).toBeVisible();
  await expect(page.getByTestId('teaching-code-code').first()).toContainText('boolean enough');

  const layout = await page.evaluate(() => {
    const routeControls = Array.from(document.querySelectorAll<HTMLElement>('[data-testid^="route-tab-"]'));
    const hasOverlappingHeaderControls = routeControls.some((control, index) => {
      const rect = control.getBoundingClientRect();

      return routeControls.slice(index + 1).some((otherControl) => {
        const otherRect = otherControl.getBoundingClientRect();
        const horizontallyOverlaps = rect.left < otherRect.right && rect.right > otherRect.left;
        const verticallyOverlaps = rect.top < otherRect.bottom && rect.bottom > otherRect.top;

        return horizontallyOverlaps && verticallyOverlaps;
      });
    });
    const region = document.querySelector<HTMLElement>('[data-testid="teaching-code-region"]');

    return {
      hasPageOverflow: document.documentElement.scrollWidth > window.innerWidth,
      hasOverlappingHeaderControls,
      codeRegionClientWidth: region?.clientWidth ?? 0,
      codeRegionScrollWidth: region?.scrollWidth ?? 0,
      codeRegionOverflowX: region ? window.getComputedStyle(region).overflowX : ''
    };
  });

  expect(layout.hasPageOverflow).toBe(false);
  expect(layout.hasOverlappingHeaderControls).toBe(false);
  expect(layout.codeRegionScrollWidth).toBeGreaterThan(layout.codeRegionClientWidth);
  expect(layout.codeRegionOverflowX).toBe('auto');
});

test('algorithm Java examples stay scrollable inside a 375px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/algorithms');

  await page.getByTestId('topic-title-binary-search').click();
  const codeRegion = page.getByTestId('teaching-code-region').first();
  await expect(codeRegion).toBeVisible();
  await expect(page.getByTestId('teaching-code-code').first()).toContainText('binarySearch');

  const layout = await page.evaluate(() => {
    const region = document.querySelector<HTMLElement>('[data-testid="teaching-code-region"]');

    return {
      hasPageOverflow: document.documentElement.scrollWidth > window.innerWidth,
      codeRegionClientWidth: region?.clientWidth ?? 0,
      codeRegionScrollWidth: region?.scrollWidth ?? 0,
      codeRegionOverflowX: region ? window.getComputedStyle(region).overflowX : ''
    };
  });

  expect(layout.hasPageOverflow).toBe(false);
  expect(layout.codeRegionScrollWidth).toBeGreaterThan(layout.codeRegionClientWidth);
  expect(layout.codeRegionOverflowX).toBe('auto');
});
