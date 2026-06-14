import { expect, test } from '@playwright/test';

const progressStorageKey = 'spectra:subject-topic-progress:v1';

test('topic completion persists locally after reload', async ({ page }) => {
  await page.goto('/networking');

  await page.getByTestId('topic-complete-osi-model').check();
  await expect(page.getByTestId('subject-topic-finished-networking')).toContainText('OSI 七層模型');

  const storedProgress = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) ?? '{}'), progressStorageKey);
  expect(storedProgress.version).toBe(1);
  expect(storedProgress.subjects.networking.completedTopicIds).toEqual(['osi-model']);
  expect(storedProgress.subjects.networking.bookmarkedTopicId).toBeNull();

  await page.reload();

  await expect(page.getByTestId('subject-topic-finished-networking')).toContainText('OSI 七層模型');
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
  await page.goto('/networking');

  await expect(page.getByTestId('subject-view-networking')).toBeVisible();
  await expect(page.getByTestId('subject-topic-unfinished-networking')).toContainText('OSI 七層模型');
  await expect(page.getByTestId('subject-topic-finished-networking')).not.toContainText('OSI 七層模型');

  const storedValue = await page.evaluate((key) => localStorage.getItem(key), progressStorageKey);
  expect(storedValue).toBe('{malformed-json');
  expect(consoleErrors).toEqual([]);
});
