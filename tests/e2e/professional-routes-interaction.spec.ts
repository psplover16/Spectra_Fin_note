import { expect, test } from '@playwright/test';

const progressStorageKey = 'spectra:subject-topic-progress:v1';

test('database and algorithms routes show imported topics and support topic interactions', async ({ page }) => {
  await page.goto('/database');
  await expect(page.getByTestId('subject-view-database')).toBeVisible();
  await expect(page.getByTestId('subject-topic-empty-state')).toHaveCount(0);
  await expect(page.getByTestId('subject-topic-list-database')).toContainText('基礎概念 + ANSI/SPARC 架構');

  await page.goto('/algorithms');
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();

  const unfinishedZone = page.getByTestId('subject-topic-unfinished-algorithms');
  const finishedZone = page.getByTestId('subject-topic-finished-algorithms');
  const bookmarkButton = page.getByTestId('topic-bookmark-binary-search');

  await expect(unfinishedZone).toContainText('二元搜尋法');
  await expect(finishedZone).not.toContainText('二元搜尋法');

  await page.getByTestId('topic-title-binary-search').click();
  await expect(page.getByTestId('topic-detail-binary-search')).toBeVisible();

  await bookmarkButton.click();
  await expect(bookmarkButton).toHaveAttribute('aria-pressed', 'true');

  await page.getByTestId('topic-complete-binary-search').check();
  await expect(unfinishedZone).not.toContainText('二元搜尋法');
  await expect(finishedZone).toContainText('二元搜尋法');
});

test('database v2 copied ANSI-SPARC page preserves lesson layout controls and returns', async ({ page }) => {
  await page.goto('/database-v2');
  await page.getByTestId('topic-title-database-v2-ansi-sparc').click();

  await expect(page).toHaveURL(/\/database-v2\/.*ANSI-SPARC.*\.html$/);
  await expect(page.locator('h1')).toHaveText('ANSI/SPARC 三層架構');
  await expect(page.locator('table')).toBeVisible();
  await expect(page.locator('svg.arch')).toBeVisible();
  await expect(page.locator('.note').first()).toBeVisible();
  await expect(page.locator('.diagram')).toBeVisible();

  const styleText = await page.locator('style').first().textContent();
  expect(styleText).toContain('--paper:#FBFAF7');
  expect(styleText).toContain('--font-head:');

  const reciteToggle = page.locator('#rt');
  await expect(reciteToggle).toHaveAttribute('aria-pressed', 'false');
  await reciteToggle.click();
  await expect(reciteToggle).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('body')).toHaveClass(/recite/);

  await page.locator('.head').first().click();
  await expect(page.locator('.block').first()).toHaveClass(/revealed/);

  await page.locator('#backToDatabaseV2').click();
  await expect(page).toHaveURL(/\/database-v2$/);
  await expect(page.getByTestId('subject-view-database-v2')).toBeVisible();
});

test('database v2 rows link to copied HTML pages and keep independent progress', async ({ page }) => {
  await page.goto('/database-v2');

  const sqlQueryTitle = page.getByTestId('topic-title-database-v2-sql-query');
  const sqlQueryBookmark = page.getByTestId('topic-bookmark-database-v2-sql-query');
  const sqlQueryComplete = page.getByTestId('topic-complete-database-v2-sql-query');

  await expect(page.getByTestId('subject-view-database-v2')).toBeVisible();
  await expect(page.getByTestId('topic-detail-database-v2-sql-query')).toHaveCount(0);
  await expect(sqlQueryTitle).toHaveAttribute('href', '/database-v2/國考資料庫_09_SQL查詢功能.html');

  await sqlQueryBookmark.click();
  await expect(sqlQueryBookmark).toHaveAttribute('aria-pressed', 'true');

  let storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.databaseV2.bookmarkedTopicId).toBe('database-v2-sql-query');

  await sqlQueryComplete.check();
  await expect(sqlQueryBookmark).toHaveAttribute('aria-pressed', 'false');

  storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.databaseV2.bookmarkedTopicId).toBeNull();
  expect(storedProgress.subjects.databaseV2.completedTopicIds).toEqual(['database-v2-sql-query']);
  expect(storedProgress.subjects.database.bookmarkedTopicId).toBeNull();
  expect(storedProgress.subjects.database.completedTopicIds).toEqual([]);

  await sqlQueryTitle.click();
  await expect(page).toHaveURL(/\/database-v2\/.*SQL.*\.html$/);
  await expect(page.locator('h1')).toContainText('SQL 查詢功能');
  await expect(page.locator('#backToDatabaseV2')).toHaveText('返回');

  await page.locator('#backToDatabaseV2').click();
  await expect(page).toHaveURL(/\/database-v2$/);
  await expect(page.getByTestId('subject-view-database-v2')).toBeVisible();
});
