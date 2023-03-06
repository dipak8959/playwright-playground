import { test, expect } from '@playwright/test';

test('has text fast in title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fast/);
});

test('github link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await expect(page.getByRole('link',{ name: '48k+ stargazers on GitHub' })).toBeTruthy();

});