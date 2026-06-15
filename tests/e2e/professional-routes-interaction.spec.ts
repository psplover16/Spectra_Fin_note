import { expect, test } from '@playwright/test';

test('database and algorithms routes support topic interactions', async ({ page }) => {
  await page.goto('/database');
  await expect(page.getByTestId('subject-view-database')).toBeVisible();
  await expect(page.getByTestId('subject-topic-empty-state')).toContainText('資料庫尚未建立主題內容');

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

test('computer principles CRC example preserves visual indentation', async ({ page }) => {
  await page.goto('/computer-principles');
  await expect(page.getByTestId('subject-view-computer-principles')).toBeVisible();

  if ((await page.getByTestId('topic-detail-cp-codes-and-check-codes').count()) === 0) {
    await page.getByTestId('topic-title-cp-codes-and-check-codes').click();
  }

  const crcSection = page
    .getByTestId('topic-detail-cp-codes-and-check-codes')
    .locator('.subject-topic-lesson-section')
    .filter({ hasText: '四、範例' });
  const crcExample = crcSection.locator('.subject-topic-code-text').filter({ hasText: '1001000' });

  await expect(crcExample).toHaveCSS('white-space', 'pre');
  await expect
    .poll(() =>
      crcExample.evaluate((element) => {
        if (!(element instanceof HTMLElement)) {
          throw new Error('CRC example should render as an HTML code block');
        }

        return element.innerText;
      })
    )
    .toBe(
      '1001000\n1011\n-------\n0010000\n  1011\n-------\n0000110\n    110  這是CRC'
    );
});
