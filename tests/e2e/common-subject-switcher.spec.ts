import { expect, test } from '@playwright/test';

test('common subject control switches between English and Chinese at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  const control = page.getByTestId('route-tab-common-subject');
  await expect(control).toContainText('英文');

  await control.click();
  await expect(page.getByTestId('common-subject-menu')).toBeVisible();
  await expect(page.getByTestId('common-subject-option-english')).toBeVisible();
  await expect(page.getByTestId('common-subject-option-chinese')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(page.getByTestId('common-subject-menu')).toBeHidden();

  await control.click();
  await page.getByTestId('common-subject-option-chinese').click();
  await expect(page).toHaveURL(/\/chinese$/);
  await expect(control).toContainText('國文');
  await expect(page.getByTestId('subject-view-chinese')).toBeVisible();

  await control.click();
  await page.getByTestId('common-subject-overlay').click({ position: { x: 20, y: 200 } });
  await expect(page.getByTestId('common-subject-menu')).toBeHidden();

  const hasPageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasPageOverflow).toBe(false);
});
