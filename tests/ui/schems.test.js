const { test, expect } = require('@playwright/test');

test('Check Shematics page', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/schematics');
  const heading = await page.$('h3');
  const text = await heading.textContent();
  expect(text).toBe("Dimensions and schematics of the ship");
});
