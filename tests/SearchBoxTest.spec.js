// const { test } = require('@playwright/test');
// const { POManager } = require('../pageobject/POManager');
// test('Run through all links', async ({ page }) => {
//   const poManager = new POManager(page);
//   const performance = poManager.getPerformancePage();
//   await performance.goto();
//   const landing = poManager.getLandingPage();
//   await landing.searchBoxInput();

// });

const { test } = require('@playwright/test');
const { POManager } = require('../pageobject/POManager');

test('Search box can search the docs', async ({ page }) => {
  const poManager = new POManager(page);
  const performance = poManager.getPerformancePage();
  await performance.goto();

  const landing = poManager.getLandingPage();
  await landing.searchBoxInput();
});
