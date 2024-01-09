const { test, expect } = require('@playwright/test');

test('Check facts page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/facts'); 

 
  const factsPhoto = await page.$('.introPhoto');
  expect(factsPhoto).not.toBeNull();

  const articleContent = await page.$('.artHistory');
  expect(articleContent).not.toBeNull();

});
