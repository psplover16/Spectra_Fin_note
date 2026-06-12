import { expect, test } from '@playwright/test';

const progressStorageKey = 'spectra:subject-topic-progress:v1';

test('bookmark is single per subject and is cleared when completed', async ({ page }) => {
  await page.goto('/computer-principles');

  const numberSystemsBookmark = page.getByTestId('topic-bookmark-number-systems');
  const binaryTreeBookmark = page.getByTestId('topic-bookmark-binary-tree-basics');

  await numberSystemsBookmark.click();
  await expect(numberSystemsBookmark).toHaveAttribute('aria-pressed', 'true');

  await binaryTreeBookmark.click();
  await expect(binaryTreeBookmark).toHaveAttribute('aria-pressed', 'true');
  await expect(numberSystemsBookmark).toHaveAttribute('aria-pressed', 'false');

  let storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBe('binary-tree-basics');

  await page.getByTestId('topic-complete-binary-tree-basics').check();

  await expect(page.getByTestId('subject-topic-finished-computerPrinciples')).toContainText('二元樹基礎');
  await expect(binaryTreeBookmark).toHaveCount(0);
  storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBeNull();
});
