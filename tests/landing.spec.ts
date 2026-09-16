import { expect, test } from '@playwright/test';

test('desktop: assets, filters, gallery navigation, focus and contact links', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Pertencer.');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('.project-card')).toHaveCount(8);
  await page.getByRole('button', { name: 'Estúdios', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(3);
  await page.getByRole('button', { name: 'Residencial', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'Corporativo', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'Comercial', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  const project = page.getByRole('button', { name: 'Ver projeto Casa Zahy Herdades' });
  await project.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('.gallery-image img')).toHaveAttribute(
    'src',
    '/images/projetos/casa-zahy-herdades.webp',
  );
  await expect(page.getByRole('button', { name: 'Imagem anterior' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Próxima imagem' })).toBeDisabled();
  await page.screenshot({ path: 'tmp/qa/gallery-desktop.png' });
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(project).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  for (const id of ['inicio', 'pra-quem-e', 'sobre', 'projetos', 'atuacao', 'contato'])
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  for (const link of await page.locator('a[href*="wa.me"]').all()) {
    expect(await link.getAttribute('href')).toMatch(/wa.me\/5585(997173960|998069699)\?text=/);
    expect(decodeURIComponent((await link.getAttribute('href'))!)).toContain('Duna Arquitetura');
  }
  await expect(page.locator('a[href="mailto:contato.dunaarq@gmail.com"]')).toHaveCount(1);
  await page.locator('#contato').scrollIntoViewIfNeeded();
  await page.evaluate(() =>
    Promise.all([...document.images].map((img) => img.decode().catch(() => {}))),
  );
  expect(
    await page
      .locator('img')
      .evaluateAll((images) =>
        images
          .filter(
            (img) => !(img as HTMLImageElement).complete || !(img as HTMLImageElement).naturalWidth,
          )
          .map((img) => img.getAttribute('src')),
      ),
  ).toEqual([]);
  expect(await page.evaluate(() => document.fonts.check('16px ABeeZee'))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: 'tmp/qa/desktop.png', fullPage: true });
  expect(errors).toEqual([]);
});

test('mobile: menu, dismissal, touch gallery and responsive layout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused();
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Projetos', exact: true }).click();
  await expect(page.getByRole('navigation')).not.toBeVisible();
  const project = page.getByRole('button', { name: 'Ver projeto Cozinha Atlântica' });
  await project.click();
  await expect(page.locator('.gallery-image img')).toHaveAttribute(
    'src',
    '/images/projetos/cozinha-atlantica.webp',
  );
  await page.screenshot({ path: 'tmp/qa/gallery-mobile.png' });
  await page.getByRole('button', { name: 'Fechar galeria' }).click();
  await expect(project).toBeFocused();
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 844 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#contato').scrollIntoViewIfNeeded();
  await page.evaluate(() =>
    Promise.all([...document.images].map((img) => img.decode().catch(() => {}))),
  );
  await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: 'tmp/qa/mobile.png', fullPage: true });
});

test('prerendered content remains visible without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4203/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.project-card')).toHaveCount(8);
  await expect(page.locator('#contato')).toContainText('contato.dunaarq@gmail.com');
  await context.close();
});
