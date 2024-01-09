const { test, expect } = require('@playwright/test');

test('Check history page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/history'); 

  const historyPhoto = await page.$('.historyPhoto');
  expect(historyPhoto).not.toBeNull();

  const articleContent = await page.$('.artHistory');
  expect(articleContent).not.toBeNull();

});
