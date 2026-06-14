import { expect, test } from '@playwright/test';

test('database and algorithms routes support topic interactions', async ({ page }) => {
  await page.goto('/database');
  await expect(page.getByTestId('subject-view-database')).toBeVisible();
  await expect(page.getByTestId('subject-topic-unfinished-database')).toContainText('資料庫基本概念');

  await page.goto('/algorithms');
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();

  const unfinishedZone = page.getByTestId('subject-topic-unfinished-algorithms');
  const finishedZone = page.getByTestId('subject-topic-finished-algorithms');
  const bookmarkButton = page.getByTestId('topic-bookmark-sorting-overview');

  await expect(unfinishedZone).toContainText('排序法總覽');
  await expect(finishedZone).not.toContainText('排序法總覽');

  await page.getByTestId('topic-title-sorting-overview').click();
  await expect(page.getByTestId('topic-detail-sorting-overview')).toBeVisible();

  await bookmarkButton.click();
  await expect(bookmarkButton).toHaveAttribute('aria-pressed', 'true');

  await page.getByTestId('topic-complete-sorting-overview').check();
  await expect(unfinishedZone).not.toContainText('排序法總覽');
  await expect(finishedZone).toContainText('排序法總覽');
});
