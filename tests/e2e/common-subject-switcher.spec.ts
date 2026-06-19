import { expect, test } from '@playwright/test';

test('common subject routes stay direct-only at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await expect(page.getByTestId('route-tab-common-subject')).toHaveCount(0);
  await expect(page.getByTestId('common-subject-menu')).toHaveCount(0);
  await expect(page.getByTestId('route-tabs')).not.toContainText('英文');
  await expect(page.getByTestId('route-tabs')).not.toContainText('國文');

  await page.goto('/english');
  await expect(page).toHaveURL(/\/english$/);
  await expect(page.getByTestId('subject-view-english')).toBeVisible();
  await expect(page.getByTestId('route-tab-common-subject')).toHaveCount(0);

  await page.goto('/chinese');
  await expect(page).toHaveURL(/\/chinese$/);
  await expect(page.getByTestId('subject-view-chinese')).toBeVisible();
  await expect(page.getByTestId('route-tab-common-subject')).toHaveCount(0);

  const hasPageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasPageOverflow).toBe(false);
});
