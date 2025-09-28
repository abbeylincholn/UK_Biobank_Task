# UK Biobank – Automation Test Analyst Task

This repository contains automated end-to-end tests for the [AG Grid Example Application](https://www.ag-grid.com/example/) using [Playwright](https://playwright.dev/).  
The project demonstrates an approach to testing by focusing on **navigation flows** and **core grid behaviours** such as sorting, filtering, and row selection, implemented with a **Page Object Model (POM)** structure.

---

## 📦 Project Structure

```
UK_Biobank_Task/
├── .github/workflows/     # GitHub Actions CI workflow
├── pageobject/            # Page Object classes
│   ├── LandingPage.js
│   ├── PerformancePage.js
│   └── POManager.js
├── tests/                 # Test specifications
│   ├── navigation.spec.js
│   ├── performance.spec.js
│   └── search.spec.js
├── utils/                 # Test data
│   └── TestData.json
├── playwright.config.js   # Playwright configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/abbeylincholn/UK_Biobank_Task.git
cd UK_Biobank_Task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install --with-deps
```

### 4. Run tests
- Run all tests:
```bash
npx playwright test
```

- Run in a specific browser:
```bash
npx playwright test --project=chromium
```

- Run a specific file:
```bash
npx playwright test tests/performance.spec.js
```

### 5. View reports
- HTML report:
```bash
npx playwright show-report
```

- Allure report (requires [Allure CLI](https://allurereport.org/docs/playwright/)):
```bash
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
```

---

## 🤖 Continuous Integration

This project is integrated with **GitHub Actions** to run tests automatically on every push and pull request.

- Runs on `ubuntu-latest`
- Installs dependencies and Playwright browsers
- Executes all test projects (Chromium, Firefox, WebKit)
- Uploads Playwright HTML report as an artifact

---

## 🧩 Approach

The testing approach was to:
1. Begin with **navigation tests** to confirm key sections (Performance, Finance, HR, Inventory, etc.) load correctly.  
2. Add **grid interaction tests** to cover sorting, text filters, number filters, and boolean field filters.  
3. Apply the **Page Object Model** pattern to separate locators and actions from test logic, improving readability and maintainability.  
4. Ensure compatibility across **Chromium, Firefox, and WebKit** both locally and in CI.  

This provides a structured framework and demonstrates coverage of the most critical user interactions in AG Grid.

---



