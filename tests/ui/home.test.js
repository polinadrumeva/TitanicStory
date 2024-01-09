const { test, expect } = require('@playwright/test');

test('Check home page content', async ({ page }) => {
  await page.goto('https://titanicstory.onrender.com/'); 


  const mainImage = await page.$('.mainPage');
  expect(mainImage).not.toBeNull();

 
  const articleContent = await page.$('.homePage');
  expect(articleContent).not.toBeNull();

  
  const expectedText =
    "Never be afraid to do what you can't do. Remember that Noah's Ark was made by amateurs. Professionals built the Titanic.";

  const articleText = await page.textContent('.homePage');
  expect(articleText.trim()).toBe(expectedText);
});
