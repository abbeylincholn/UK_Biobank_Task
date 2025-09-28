

// const { test } = require('@playwright/test');
// const { POManager } = require('../pageobject/POManager');
// test('Run through all links', async ({ page }) => {
//   const poManager = new POManager(page);
//   const performance = poManager.getPerformancePage();
//   await performance.goto();
//   const landing = poManager.getLandingPage();

//   await landing.navigatePeformance();
//   await landing.navigateFinance();
//   await landing.navigateHR();
//   await landing.navigateInventory();
//   await landing.navigateThemeBuilder();
//   await landing.navigateCommunity();
// });


const { test } = require('@playwright/test');
const { POManager } = require('../pageobject/POManager');

test('Run through all links', async ({ page }) => {
  const poManager = new POManager(page);
  const performance = poManager.getPerformancePage();
  await performance.goto();

  const landing = poManager.getLandingPage();
  await landing.navigatePeformance();
  await landing.navigateFinance();
  await landing.navigateHR();
  await landing.navigateInventory();
  await landing.navigateThemeBuilder();
  await landing.navigateCommunity();
});
