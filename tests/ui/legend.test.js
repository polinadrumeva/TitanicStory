const { test, expect } = require('@playwright/test');

test('Check legends page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/legends'); 

  const legendsPhoto = await page.$('.legendsPhoto');
  expect(legendsPhoto).not.toBeNull();

  const articleContent = await page.$('.invest');
  expect(articleContent).not.toBeNull();

  
});
