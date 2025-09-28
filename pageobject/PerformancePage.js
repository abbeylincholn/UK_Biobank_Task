
// const { expect } = require('@playwright/test');

// class PerformancePage {
//   constructor(page) {
//     this.page = page;
//     this.root = page.locator('.ag-root-wrapper').first();
//     this.scrollableRows = this.root.locator('.ag-center-cols-viewport');    
//     this.PerformancePage = this.root.locator('.ag-row .ag-cell').first();
//     this.perm = page.locator("//h1 [text()='Performance']");
//     this.cookies = page.locator('button:has-text("Accept All Cookies")');
//     this.themeMode = page.getByRole('button', { name: 'Dark mode selector' }).first();

//     this.headerName = this.root
//       .locator('.ag-header-row:not(.ag-header-row-filter)')
//       .locator('.ag-header-cell[col-id="name"]')
//       .first();
//     this.menuItem = this.headerName.locator("[data-ref='eMenu']");
//     this.sortAscending = page.getByRole('menuitem', { name: 'Sort Ascending' });

//     this.langFilterBtn = this.root.locator(".ag-header-cell[col-id='language'] .ag-floating-filter-button");
//     this.countryFilterBtn = this.root.locator(".ag-header-cell[col-id='country'] .ag-floating-filter-button");
//     this.boughtFilterBtn = this.root.locator(".ag-header-cell[col-id='game.bought'] .ag-floating-filter-button");
//     this.totalWinningsFilterBtn = this.root.locator('.ag-header-cell[col-id="totalWinnings"] .ag-floating-filter-button');

//     this.FilterPanel = page.locator('.ag-filter-wrapper .ag-set-filter').first();
//     this.SelectAll = this.FilterPanel.getByRole('checkbox', { name: /Select All/i });
//     this.SearchInput = this.FilterPanel.getByPlaceholder(/search/i).first();
//     this.Option = (name) =>
//       this.FilterPanel
//         .locator('.ag-set-filter-item')
//         .filter({ hasText: name })
//         .getByRole('checkbox');


//     this.sideColumn = this.root.locator('.ag-side-button-label').nth(0);


//     this.totalWinningsFilterBtn = this.root.locator('.ag-header-cell[col-id="totalWinnings"] .ag-floating-filter-button');
//     this.totalWinningsFirstCell = this.root.locator('.ag-center-cols-container [col-id="totalWinnings"]').first(); // to scroll horizontally

//     this.FilterMenu = this.page.locator('.ag-menu.ag-filter-menu').first();

//     this.numOpCombobox = this.FilterMenu.getByRole('combobox', { name: /Filtering operator/i });
//     this.numOpList = page.locator('.ag-select-list').first();
//     this.numOpOption = (label) => this.numOpList.getByRole('option', { name: new RegExp(`^${label}$`, 'i') });


//     this.numInputs = this.FilterMenu.locator('.ag-filter-body input');


//   }

//   async goto() {
//     await this.page.goto('https://www.ag-grid.com/example/?theme=alpine');
//     if (await this.cookies.isVisible()) await this.cookies.click();
//     await this.root.waitFor();
//     await this.themeMode.click();
//   }

//   async waitReady() {
//     await this.root.waitFor();
//     await expect(this.root.locator('.ag-row .ag-cell').first()).toBeVisible();
//   }

//   async sortByName() {
//     await this.menuItem.click();
//     await this.sortAscending.click();
//     await expect(this.headerName).toBeVisible();
//   }

//   async filterByLanguage(languages = []) {
//     await this.langFilterBtn.click();
//     await this.FilterPanel.waitFor();
//     if (await this.SelectAll.isChecked()) {
//       await this.SelectAll.uncheck();
//     }
//     for (const lang of languages) {
//       await this.SearchInput.fill('');
//       await this.SearchInput.fill(lang);
//       await this.Option(lang).first().waitFor();
//       await this.Option(lang).first().check();
//     }
//     await this.page.keyboard.press('Escape');
//   }

//   async filterByCountry(countries = []) {
//     await this.countryFilterBtn.click();
//     await this.FilterPanel.waitFor();
//     if (await this.SelectAll.isChecked()) {
//       await this.SelectAll.uncheck();
//     }
//     for (const country of countries) {
//       await this.SearchInput.fill('');
//       await this.SearchInput.fill(country);
//       await this.Option(country).first().waitFor();
//       await this.Option(country).first().check();
//     }
//     await this.page.keyboard.press('Escape');
//   }
 

//   async filterByBought(checked = true) {
//     await this.boughtFilterBtn.click();
//     await this.FilterPanel.waitFor();
//     if (await this.SelectAll.isChecked()) {
//       await this.SelectAll.uncheck();
//     }
//     const value = checked ? 'true' : 'false';
//     await this.SearchInput.fill('');
//     await this.SearchInput.fill(value);
//     await this.Option(value).first().waitFor();
//     await this.Option(value).first().check();
//     await this.page.keyboard.press('Escape');
//     await this.sideColumn.click();
//   }

//   async setNumberOperator(label) {
//     await this.numOpCombobox.click();
//     await this.numOpOption(label).click();
//   }

//   async filterByTotalWinnings(min = 300000, max = 1000000) {
    
//     await this.totalWinningsFirstCell.scrollIntoViewIfNeeded();    
//     await this.totalWinningsFilterBtn.click();
//     await this.FilterMenu.waitFor();  
//     await this.setNumberOperator('Between');
//     await this.numInputs.nth(0).click();
//     await this.numInputs.nth(0).fill(String(min));
//     await this.numInputs.nth(1).click();
//     await this.numInputs.nth(1).fill(String(max));
//     await this.page.keyboard.press('Escape');
//   }


// }

// module.exports = { PerformancePage };

const { expect } = require('@playwright/test');

class PerformancePage {
  constructor(page) {
    this.page = page;

    this.root = page.locator('.ag-root-wrapper').first();
    this.scrollableRows = this.root.locator('.ag-center-cols-viewport');
    this.PerformancePage = this.root.locator('.ag-row .ag-cell').first();

    // Page bits
    this.perm = page.locator("//h1 [text()='Performance']");
    this.cookies = page.locator('button:has-text("Accept All Cookies")');
    this.themeMode = page.getByRole('button', { name: 'Dark mode selector' }).first();

    // Header / menu
    this.headerName = this.root
      .locator('.ag-header-row:not(.ag-header-row-filter)')
      .locator('.ag-header-cell[col-id="name"]')
      .first();
    this.menuItem = this.headerName.locator("[data-ref='eMenu']");
    this.sortAscending = page.getByRole('menuitem', { name: 'Sort Ascending' });

    // Filter buttons
    this.langFilterBtn = this.root.locator(".ag-header-cell[col-id='language'] .ag-floating-filter-button");
    this.countryFilterBtn = this.root.locator(".ag-header-cell[col-id='country'] .ag-floating-filter-button");
    this.boughtFilterBtn = this.root.locator(".ag-header-cell[col-id='game.bought'] .ag-floating-filter-button");
    this.totalWinningsFilterBtn = this.root.locator('.ag-header-cell[col-id="totalWinnings"] .ag-floating-filter-button');

    // Filter panel and parts
    this.FilterPanel = page.locator('.ag-filter-wrapper .ag-set-filter').first();
    this.SelectAll = this.FilterPanel.getByRole('checkbox', { name: /Select All/i });
    this.SearchInput = this.FilterPanel.getByPlaceholder(/search/i).first();
    this.Option = (name) =>
      this.FilterPanel
        .locator('.ag-set-filter-item')
        .filter({ hasText: name })
        .getByRole('checkbox');

    this.sideColumn = this.root.locator('.ag-side-button-label').nth(0);

    // Numeric filter menu
    this.FilterMenu = this.page.locator('.ag-menu.ag-filter-menu').first();
    this.numOpCombobox = this.FilterMenu.getByRole('combobox', { name: /Filtering operator/i });
    this.numOpList = page.locator('.ag-select-list').first();
    this.numOpOption = (label) => this.numOpList.getByRole('option', { name: new RegExp(`^${label}$`, 'i') });
    this.numInputs = this.FilterMenu.locator('.ag-filter-body input');

    // Column cell (for horizontal scroll)
    this.totalWinningsFirstCell = this.root.locator('.ag-center-cols-container [col-id="totalWinnings"]').first();
  }

  async goto() {
    // 1) Prevent OneTrust from loading (flakeless CI)
    await this.page.route(/(onetrust|cookielaw)\.org/i, (route) => route.abort());

    await this.page.goto('https://www.ag-grid.com/example/?theme=alpine');

    // 2) If markup is cached or still present, dismiss/neuter it quickly
    await this.cookies.click({ timeout: 2000 }).catch(() => {});
    await this.page
      .locator('#onetrust-consent-sdk')
      .evaluateAll(nodes => nodes.forEach(n => (n.style.pointerEvents = 'none')))
      .catch(() => {});

    await this.root.waitFor();
    await this.themeMode.click();
  }

  async waitReady() {
    await this.root.waitFor();
    await expect(this.root.locator('.ag-row .ag-cell').first()).toBeVisible();
  }

  async sortByName() {
    await this.menuItem.click();
    await this.sortAscending.click();
    await expect(this.headerName).toBeVisible();
  }

  // Robust checkbox setter (tries normal, falls back to force)
  async safeCheck(locator) {
    try {
      await locator.check({ timeout: 3000 });
    } catch {
      await locator.setChecked(true, { force: true });
    }
  }

  async filterByLanguage(languages = []) {
    await this.langFilterBtn.click();
    await this.FilterPanel.waitFor();
    if (await this.SelectAll.isChecked()) {
      await this.SelectAll.uncheck();
    }
    for (const lang of languages) {
      await this.SearchInput.fill('');
      await this.SearchInput.fill(lang);
      const box = this.Option(lang).first();
      await box.waitFor();
      await this.safeCheck(box);
    }
    await this.page.keyboard.press('Escape');
  }

  async filterByCountry(countries = []) {
    await this.countryFilterBtn.click();
    await this.FilterPanel.waitFor();
    if (await this.SelectAll.isChecked()) {
      await this.SelectAll.uncheck();
    }
    for (const country of countries) {
      await this.SearchInput.fill('');
      await this.SearchInput.fill(country);
      const box = this.Option(country).first();
      await box.waitFor();
      await this.safeCheck(box);
    }
    await this.page.keyboard.press('Escape');
  }

  async filterByBought(checked = true) {
    await this.boughtFilterBtn.click();
    await this.FilterPanel.waitFor();
    if (await this.SelectAll.isChecked()) {
      await this.SelectAll.uncheck();
    }
    const value = checked ? 'true' : 'false';
    await this.SearchInput.fill('');
    await this.SearchInput.fill(value);
    const box = this.Option(value).first();
    await box.waitFor();
    await this.safeCheck(box);
    await this.page.keyboard.press('Escape');
    await this.sideColumn.click();
  }

  async setNumberOperator(label) {
    await this.numOpCombobox.click();
    await this.numOpOption(label).click();
  }

  async filterByTotalWinnings(min = 300000, max = 1000000) {
    await this.totalWinningsFirstCell.scrollIntoViewIfNeeded();
    await this.totalWinningsFilterBtn.click();
    await this.FilterMenu.waitFor();
    await this.setNumberOperator('Between');
    await this.numInputs.nth(0).click();
    await this.numInputs.nth(0).fill(String(min));
    await this.numInputs.nth(1).click();
    await this.numInputs.nth(1).fill(String(max));
    await this.page.keyboard.press('Escape');
  }
}

module.exports = { PerformancePage };
