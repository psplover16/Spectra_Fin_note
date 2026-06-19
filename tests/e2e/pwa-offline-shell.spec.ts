import { expect, test } from '@playwright/test';

const isProductionPreview = Boolean(process.env.CI) || process.env.PLAYWRIGHT_USE_PREVIEW === '1';

test.skip(!isProductionPreview, 'PWA offline shell requires a production preview server with service worker output.');

test('production PWA shell loads professional routes offline after an online warmup', async ({ context, page, request }) => {
  await page.goto('/database');
  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-database')).toBeVisible();

  const manifestResponse = await request.get('/manifest.webmanifest');
  expect(manifestResponse.ok()).toBe(true);
  const manifest = await manifestResponse.json();
  expect(manifest.name).toBe('國營資訊考試講義 PWA');
  expect(manifest.short_name).toBe('國營資訊');
  expect(manifest.display).toBe('standalone');
  expect(manifest.start_url).toBe('/');
  expect(manifest.icons).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        src: expect.stringMatching(/(^|\/)icons\/icon-192\.png$/),
        sizes: '192x192',
        type: 'image/png'
      }),
      expect.objectContaining({
        src: expect.stringMatching(/(^|\/)icons\/icon-512\.png$/),
        sizes: '512x512',
        type: 'image/png'
      }),
      expect.objectContaining({
        src: expect.stringMatching(/(^|\/)icons\/icon-maskable-512\.png$/),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      })
    ])
  );

  for (const icon of manifest.icons) {
    const iconPath = new URL(icon.src, page.url()).pathname;
    const iconResponse = await request.get(iconPath);
    expect(iconResponse.ok()).toBe(true);
    expect(iconResponse.headers()['content-type']).toContain('image/png');
  }

  await page.waitForFunction(async () => {
    if (!('serviceWorker' in navigator)) {
      return false;
    }

    const registration = await navigator.serviceWorker.ready;
    return Boolean(registration.active);
  });

  await page.goto('/algorithms');
  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();

  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-algorithms')).toBeVisible();

  await page.goto('/computer-principles-v2');
  await expect(page.getByTestId('subject-view-computer-principles-v2')).toBeVisible();
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).toContainText('架構與計算理論');
  await expect(page.getByTestId('subject-topic-list-computerPrinciplesV2')).toContainText('檢查碼（二）漢明碼與漢明距');

  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });

  await expect(page.getByTestId('route-tabs')).toBeVisible();
  await expect(page.getByTestId('subject-view-computer-principles-v2')).toBeVisible();
  await expect(page.getByTestId('topic-title-cpv2-architecture-computation-theory')).toBeVisible();
  await expect(page.getByTestId('topic-title-cpv2-hamming-code-distance')).toBeVisible();

  await context.setOffline(false);
});
