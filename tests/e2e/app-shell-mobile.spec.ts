import { expect, test } from '@playwright/test';

test('header and route region fit at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await expect(page.getByTestId('route-tab-computer-foundation')).toBeVisible();
  await expect(page.getByTestId('route-tab-information-management')).toBeVisible();
  await expect(page.getByTestId('route-tab-programming')).toBeVisible();
  await expect(page.getByTestId('route-tab-database')).toBeVisible();
  await expect(page.getByTestId('route-tab-algorithms')).toBeVisible();
  await expect(page.getByTestId('route-tab-system-design')).toBeVisible();
  await expect(page.getByTestId('route-tab-common-subject')).toHaveCount(0);
  await expect(page.getByTestId('subject-view-computer-principles')).toBeVisible();

  await page.getByTestId('route-tab-computer-foundation').click();
  await expect(page.getByTestId('computer-foundation-subject-menu')).toContainText('數位邏輯');
  await page.getByTestId('computer-foundation-subject-option-digital-logic').click();
  await expect(page).toHaveURL(/\/digital-logic$/);
  await expect(page.getByTestId('subject-view-digital-logic')).toBeVisible();

  await page.getByTestId('route-tab-computer-foundation').click();
  await expect(page.getByTestId('computer-foundation-subject-menu')).toContainText('計概(v2)');
  await page.getByTestId('computer-foundation-subject-option-computer-principles-v2').click();
  await expect(page).toHaveURL(/\/computer-principles-v2$/);
  await expect(page.getByTestId('subject-view-computer-principles-v2')).toContainText('架構與計算理論');
  await expect(page.getByTestId('subject-view-computer-principles-v2')).toContainText('檢查碼（二）漢明碼與漢明距');

  const hasPageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasPageOverflow).toBe(false);
});
