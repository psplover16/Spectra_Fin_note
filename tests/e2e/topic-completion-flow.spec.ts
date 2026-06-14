import { expect, test } from '@playwright/test';

test('completion checkbox moves a topic to the finished zone and back', async ({ page }) => {
  await page.goto('/computer-principles');

  const unfinishedZone = page.getByTestId('subject-topic-unfinished-computerPrinciples');
  const finishedZone = page.getByTestId('subject-topic-finished-computerPrinciples');

  await expect(unfinishedZone).toContainText('馮紐曼架構');
  await expect(finishedZone).not.toContainText('馮紐曼架構');

  await page.getByTestId('topic-title-cp-von-neumann-architecture').click();
  await expect(page.getByTestId('topic-detail-cp-von-neumann-architecture')).toBeVisible();

  await page.getByTestId('topic-complete-cp-von-neumann-architecture').check();

  await expect(unfinishedZone).not.toContainText('馮紐曼架構');
  await expect(finishedZone).toContainText('馮紐曼架構');
  await expect(page.getByTestId('topic-detail-cp-von-neumann-architecture')).toBeHidden();

  await page.getByTestId('topic-complete-cp-von-neumann-architecture').uncheck();

  await expect(unfinishedZone).toContainText('馮紐曼架構');
  await expect(finishedZone).not.toContainText('馮紐曼架構');
});
