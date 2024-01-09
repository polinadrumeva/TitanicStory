const { test, expect } = require('@playwright/test');

test('Check introduction page', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/intro');
  const heading = await page.$('h3');
  const text = await heading.textContent();
  expect(text).toBe('Introduction');
});
