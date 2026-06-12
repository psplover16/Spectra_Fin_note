import { expect, test } from '@playwright/test';

test('renders the app shell', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('app-shell')).toBeVisible();
  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('計算機原理');
});

test('loads a primary route directly', async ({ page }) => {
  await page.goto('/networking');

  await expect(page.getByTestId('subject-view-networking')).toContainText('網路概論');
});
