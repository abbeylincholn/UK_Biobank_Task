const {test, expect} = require('@playwright/test')
const {POManager} = require('../pageobject/POManager')
const data = require('../utils/TestData.json');


test('AG performance Filter', async ({ page }) => {

    const poManager = new POManager(page);

    const performance = poManager.getPerformancePage();
    await performance.goto();   
    await performance.sortByName(); 
    await performance.filterByLanguage(data.languages);
    await performance.filterByCountry(data.countries);
    await performance.filterByBought(true);  
    await performance.filterByTotalWinnings(300000, 1000000);         
    
    //await page.pause()

    
});