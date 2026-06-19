import { expect, test } from '@playwright/test';

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
