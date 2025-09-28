const { expect } = require('@playwright/test')

class LandingPage {
  constructor(page) {
    this.page = page;
    this.performance = page.getByRole('link', { name: 'Performance' });
    this.perfAssert = page.getByRole('heading', { name: 'Performance' });

    this.finance = page.getByRole('link', { name: 'Finance' });
    this.finAssert = page.getByRole('heading', { name: 'Finance' });

    this.hr = page.getByRole('link', { name: 'HR' });
    this.hrAssert = page.getByRole('heading', { name: 'HR' });

    this.inventory = page.getByRole('link', { name: 'Inventory' });
    this.inventoryAssert = page.getByRole('heading', { name: 'Inventory' });


    this.themeBuilder = page.getByRole('link', { name: 'Theme Builder' });
    this.docs = page.getByRole('link', { name: 'Docs' });
    this.api = page.getByRole('link', { name: 'API' });
    this.community = page.getByRole('link', { name: 'Community' });
    this.pricing = page.getByRole('link', { name: 'Pricing' });

    this.searchBox = page.locator('._headerSearchBox_1bvo1_1');
    this.searchDocs = page.getByPlaceholder("Search documentation...");   

  }

  async searchBoxInput (){    
    await this.searchBox.click();
    await this.searchDocs.type("Key Features", { delay: 300 });
    await this.searchDocs.press("Enter")
  }

  async navigatePeformance() {
    await this.performance.click();
    await expect(this.perfAssert).toBeVisible();
  }

  async navigateFinance() {
    await this.finance.click();
    await expect(this.finAssert).toBeVisible();
  }

  async navigateHR() {
    await this.hr.click();
    await expect(this.hrAssert).toBeVisible();
    await expect(this.page).toHaveURL(/example|hr/i);
  }

  async navigateInventory() {
    await this.inventory.click();
    await expect(this.inventoryAssert).toBeVisible();
    await expect(this.page).toHaveURL(/example|inventory/i);
  }

  async navigateThemeBuilder() {
    await this.themeBuilder.click();
    await expect(this.page).toHaveURL(/theme-builder/i);
  }

  async navigateCommunity() {
    await this.community.click();
    await expect(this.page).toHaveURL(/community/i);
  }



}

module.exports = { LandingPage };
