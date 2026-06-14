import { expect, test } from '@playwright/test';

const progressStorageKey = 'spectra:subject-topic-progress:v1';

test('topic completion persists locally after reload', async ({ page }) => {
  await page.goto('/computer-principles');

  await page.getByTestId('topic-complete-cp-common-units').check();
  await expect(page.getByTestId('subject-topic-finished-computerPrinciples')).toContainText('電腦常用單位');

  const storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.version).toBe(1);
  expect(storedProgress.subjects.computerPrinciples.completedTopicIds).toEqual(['cp-common-units']);
  expect(storedProgress.subjects.computerPrinciples.bookmarkedTopicId).toBeNull();

  await page.reload();

  await expect(page.getByTestId('subject-topic-finished-computerPrinciples')).toContainText('電腦常用單位');
});

test('malformed progress storage renders routes and preserves the original value', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.addInitScript(
    ({ key }) => {
      localStorage.setItem(key, '{malformed-json');
    },
    { key: progressStorageKey }
  );
  await page.goto('/computer-principles');

  await expect(page.getByTestId('subject-view-computer-principles')).toBeVisible();
  await expect(page.getByTestId('subject-topic-unfinished-computerPrinciples')).toContainText('電腦常用單位');
  await expect(page.getByTestId('subject-topic-finished-computerPrinciples')).not.toContainText('電腦常用單位');

  const storedValue = await page.evaluate((key) => localStorage.getItem(key), progressStorageKey);
  expect(storedValue).toBe('{malformed-json');
  expect(consoleErrors).toEqual([]);
});
