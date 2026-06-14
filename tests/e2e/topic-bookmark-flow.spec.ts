import { expect, test } from '@playwright/test';

const progressStorageKey = 'spectra:subject-topic-progress:v1';

test('bookmark is single per subject and is cleared when completed', async ({ page }) => {
  await page.goto('/computer-principles');

  const vonNeumannBookmark = page.getByTestId('topic-bookmark-cp-von-neumann-architecture');
  const baseConversionBookmark = page.getByTestId('topic-bookmark-cp-base-conversion');

  await vonNeumannBookmark.click();
  await expect(vonNeumannBookmark).toHaveAttribute('aria-pressed', 'true');

  await baseConversionBookmark.click();
  await expect(baseConversionBookmark).toHaveAttribute('aria-pressed', 'true');
  await expect(vonNeumannBookmark).toHaveAttribute('aria-pressed', 'false');

  let storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBe('cp-base-conversion');

  await page.getByTestId('topic-complete-cp-base-conversion').check();

  await expect(page.getByTestId('subject-topic-finished-computerPrinciples')).toContainText('進制轉換');
  await expect(baseConversionBookmark).toHaveCount(0);
  storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBeNull();
});
