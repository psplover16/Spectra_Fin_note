import { expect, test } from '@playwright/test';

test('completion checkbox moves a topic to the finished zone and back', async ({ page }) => {
  await page.goto('/computer-principles');

  const unfinishedZone = page.getByTestId('subject-topic-unfinished-computerPrinciples');
  const finishedZone = page.getByTestId('subject-topic-finished-computerPrinciples');

  await expect(unfinishedZone).toContainText('二元樹基礎');
  await expect(finishedZone).not.toContainText('二元樹基礎');

  await page.getByTestId('topic-title-binary-tree-basics').click();
  await expect(page.getByTestId('topic-detail-binary-tree-basics')).toBeVisible();

  await page.getByTestId('topic-complete-binary-tree-basics').check();

  await expect(unfinishedZone).not.toContainText('二元樹基礎');
  await expect(finishedZone).toContainText('二元樹基礎');
  await expect(page.getByTestId('topic-detail-binary-tree-basics')).toBeHidden();

  await page.getByTestId('topic-complete-binary-tree-basics').uncheck();

  await expect(unfinishedZone).toContainText('二元樹基礎');
  await expect(finishedZone).not.toContainText('二元樹基礎');
});
