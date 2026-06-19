import { expect, test, type Page } from '@playwright/test';

async function openComputerFoundationMenu(page: Page) {
  const trigger = page.getByTestId('route-tab-computer-foundation');
  const menu = page.getByTestId('computer-foundation-subject-menu');

  await expect(trigger).toBeVisible();
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  await expect(menu).toBeVisible();

  return menu;
}

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

test('loads networking v2 route directly', async ({ page }) => {
  await page.goto('/networking-v2');

  await expect(page.getByTestId('subject-view-networking-v2')).toContainText('網路概論(v2)');
  await expect(page.getByTestId('subject-topic-list-networkingV2')).toContainText('OSI 七層 + TCP/IP');
  await expect(page.getByTestId('subject-topic-list-networkingV2')).toContainText('防禦設備與攻擊類型');
});

test('loads computer principles route directly', async ({ page }) => {
  await page.goto('/computer-principles');

  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('電腦常用單位');
  await expect(page.getByTestId('subject-view-computer-principles')).toContainText('馮紐曼架構');
  await expect(page.getByTestId('subject-view-computer-principles')).not.toContainText('基本邏輯(Digital Logic Basics)');
  await expect(page.getByTestId('subject-view-computer-principles')).not.toContainText('OS 基礎概念');
});

test('loads computer principles v2 route directly', async ({ page }) => {
  await page.goto('/computer-principles-v2');

  await expect(page.getByTestId('subject-view-computer-principles-v2')).toContainText('計概(v2)');
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).toContainText('架構與計算理論');
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).toContainText('檢查碼（二）漢明碼與漢明距');
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).not.toContainText('00_目錄');
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).not.toContainText('基本計概 01：');
});

test('loads split computer-foundation routes directly', async ({ page }) => {
  await page.goto('/digital-logic');
  await expect(page.getByTestId('subject-view-digital-logic')).toContainText('數位邏輯');
  await expect(page.getByTestId('subject-topic-list-digitalLogic')).toContainText('基本邏輯(Digital Logic Basics)');

  await page.goto('/operating-systems');
  await expect(page.getByTestId('subject-view-operating-systems')).toContainText('作業系統');
  await expect(page.getByTestId('subject-topic-list-operatingSystems')).toContainText('OS 基礎概念');
});

test('loads database and algorithms professional routes directly', async ({ page }) => {
  await page.goto('/database');
  await expect(page.getByTestId('subject-view-database')).toContainText('資料庫');
  await expect(page.getByTestId('subject-topic-list-database')).toContainText('基礎概念 + ANSI/SPARC 架構');

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
  await expect(page.getByTestId('subject-topic-list-systemDesign')).toContainText('SDLC + SSDLC');
});

test('computer-foundation navigation reaches split routes', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear());
  await page.goto('/');
  await expect(page.getByTestId('app-shell')).toBeVisible();
  await expect(page.getByTestId('route-tab-computer-foundation')).toBeEnabled();

  const menu = await openComputerFoundationMenu(page);
  await expect(menu).toContainText('計概');
  await expect(menu).toContainText('計概(v2)');
  await expect(menu).toContainText('網概');
  await expect(menu).toContainText('網路概論(v2)');
  await expect(menu).toContainText('數位邏輯');
  await expect(menu).toContainText('作業系統');
  const triggerBox = await page.getByTestId('route-tab-computer-foundation').boundingBox();
  const menuBox = await menu.boundingBox();

  expect(triggerBox).not.toBeNull();
  expect(menuBox).not.toBeNull();
  expect(menuBox?.x).toBeGreaterThanOrEqual((triggerBox?.x ?? 0) - 1);
  expect(menuBox?.x).toBeLessThanOrEqual((triggerBox?.x ?? 0) + 1);

  await page.getByTestId('computer-foundation-subject-option-digital-logic').click();
  await expect(page).toHaveURL(/\/digital-logic$/);
  await expect(page.getByTestId('subject-view-digital-logic')).toBeVisible();

  await openComputerFoundationMenu(page);
  await page.getByTestId('computer-foundation-subject-option-computer-principles-v2').click();
  await expect(page).toHaveURL(/\/computer-principles-v2$/);
  await expect(page.getByTestId('subject-view-computer-principles-v2')).toContainText('計概(v2)');

  await openComputerFoundationMenu(page);
  await page.getByTestId('computer-foundation-subject-option-networking-v2').click();
  await expect(page).toHaveURL(/\/networking-v2$/);
  await expect(page.getByTestId('subject-view-networking-v2')).toContainText('網路概論(v2)');

  await openComputerFoundationMenu(page);
  await page.getByTestId('computer-foundation-subject-option-operating-systems').click();
  await expect(page).toHaveURL(/\/operating-systems$/);
  await expect(page.getByTestId('subject-view-operating-systems')).toBeVisible();
});
