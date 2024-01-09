const { test, expect } = require('@playwright/test');

test('Check discoveries page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/discoveries'); 

  const discoveriesPhoto = await page.$('.introPhoto');
  expect(discoveriesPhoto).not.toBeNull();

  const articleContent = await page.$('.artHistory');
  expect(articleContent).not.toBeNull();

});
