
// const { defineConfig, devices } = require('@playwright/test');

// module.exports = defineConfig({
//   testDir: './tests',
//   retries: 1,
//   //timeout: 40_000,
//  // workers: 1,
//   expect: { timeout: 10_000 },
//   reporter: [['line'], ['github'], ['html'], ['allure-playwright']],
//   projects: [    
//     { name: 'firefox', use: { browserName: 'firefox',  headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
//    // { name: 'safari',  use: { browserName: 'webkit',   headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
//    // { name: 'chrome',  use: { browserName: 'chromium',   headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
//   ],
// });


const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 90_000, // CI headroom (global test timeout)
  expect: { timeout: 10_000 },
  use: {
    actionTimeout: 15_000,       // cap any single action
    navigationTimeout: 30_000,   // cap navigations
    headless: true,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['line'], ['github'], ['html'], ['allure-playwright']],
  projects: [
    { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
    // { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
