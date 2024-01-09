const { test, expect } = require('@playwright/test');

test('Check investigation page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/investigation'); 

  const investPhoto = await page.$('.introPhoto');
  expect(investPhoto).not.toBeNull();

  const articleContent = await page.$('.invest');
  expect(articleContent).not.toBeNull();

});
