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
  await expect(page.getByTestId('subject-topic-list-database')).toContainText('資料庫 1：基礎概念 + ANSI/SPARC 架構');

  await page.goto('/algorithms');
  await expect(page.getByTestId('subject-view-algorithms')).toContainText('演算法');
  await expect(page.getByTestId('subject-topic-list-algorithms')).toContainText('二元搜尋法(Binary Search)');
});

test('loads common subject routes directly without visible header navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('route-tab-common-subject')).toHaveCount(0);
  await expect(page.getByTestId('route-tabs')).not.toContainText('英文');
  await expect(page.getByTestId('route-tabs')).not.toContainText('國文');

  await page.goto('/english');
  await expect(page.getByTestId('subject-view-english')).toContainText('英文');

  await page.goto('/chinese');
  await expect(page.getByTestId('subject-view-chinese')).toContainText('國文');
});

test('primary navigation reaches database, algorithms, and system design', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('route-tab-database').click();
  await expect(page).toHaveURL(/\/database$/);
  await expect(page.getByTestId('subject-view-database')).toBeVisible();

  await page.getByTestId('route-tab-algorithms').click();
  await expect(page).toHaveURL(/\/algorithms$/);
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();

  await page.getByTestId('route-tab-system-design').click();
  await expect(page).toHaveURL(/\/system-design$/);
  await expect(page.getByTestId('subject-view-system-design')).toBeVisible();
  await expect(page.getByTestId('subject-topic-list-systemDesign')).toContainText('系統分析與設計 1：SDLC + SSDLC');
});
