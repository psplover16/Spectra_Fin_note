import { expect, test } from '@playwright/test';

test('renders the app shell', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('app-shell')).toBeVisible();
  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('計算機原理');
  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('馮紐曼架構(Von Neumann Architecture)');
});

test('loads a primary route directly', async ({ page }) => {
  await page.goto('/networking');

  await expect(page.getByTestId('subject-view-networking')).toContainText('網路概論');
});

test('loads computer principles route directly', async ({ page }) => {
  await page.goto('/computer-principles');

  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('電腦常用單位');
  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('馮紐曼架構');
});

test('loads database and algorithms professional routes directly', async ({ page }) => {
  await page.goto('/database');
  await expect(page.getByTestId('subject-view-database')).toContainText('資料庫');
  await expect(page.getByTestId('subject-topic-list-database')).toContainText('資料庫基礎(Database Foundations)');

  await page.goto('/algorithms');
  await expect(page.getByTestId('subject-view-algorithms')).toContainText('演算法');
  await expect(page.getByTestId('subject-topic-list-algorithms')).toContainText('二元搜尋法(Binary Search)');
});

test('primary navigation reaches database and algorithms', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('route-tab-database').click();
  await expect(page).toHaveURL(/\/database$/);
  await expect(page.getByTestId('subject-view-database')).toBeVisible();

  await page.getByTestId('route-tab-algorithms').click();
  await expect(page).toHaveURL(/\/algorithms$/);
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();
});
