import { expect, test } from '@playwright/test';

const isProductionPreview = Boolean(process.env.CI) || process.env.PLAYWRIGHT_USE_PREVIEW === '1';

test.skip(!isProductionPreview, 'PWA offline shell requires a production preview server with service worker output.');

test('production PWA shell loads offline after an online warmup', async ({ context, page, request }) => {
  await page.goto('/programming');
  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-programming')).toBeVisible();

  const manifestResponse = await request.get('/manifest.webmanifest');
  expect(manifestResponse.ok()).toBe(true);
  const manifest = await manifestResponse.json();
  expect(manifest.name).toBe('國營資訊考試講義 PWA');
  expect(manifest.short_name).toBe('國營資訊');
  expect(manifest.display).toBe('standalone');
  expect(manifest.start_url).toBe('/');

  await page.waitForFunction(async () => {
    if (!('serviceWorker' in navigator)) {
      return false;
    }

    const registration = await navigator.serviceWorker.ready;
    return Boolean(registration.active);
  });

  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-programming')).toBeVisible();

  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });

  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-programming')).toBeVisible();
  await expect(page.getByTestId('topic-title-check-bit-formula')).toBeVisible();

  await context.setOffline(false);
});
