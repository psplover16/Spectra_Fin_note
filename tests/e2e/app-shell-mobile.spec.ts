import { expect, test } from '@playwright/test';

test('header and route region fit at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await expect(page.getByTestId('route-tab-computer-principles')).toBeVisible();
  await expect(page.getByTestId('route-tab-networking')).toBeVisible();
  await expect(page.getByTestId('route-tab-information-management')).toBeVisible();
  await expect(page.getByTestId('route-tab-programming')).toBeVisible();
  await expect(page.getByTestId('route-tab-common-subject')).toBeVisible();
  await expect(page.getByTestId('subject-view-computer-principles')).toBeVisible();

  const hasPageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasPageOverflow).toBe(false);
});
