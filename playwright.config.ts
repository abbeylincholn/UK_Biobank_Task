
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 150_000,
 //workers: 1,
  expect: { timeout: 8_000 },
  reporter: [['line'], ['github'], ['html'], ['allure-playwright']],
  projects: [    
    //{ name: 'firefox', use: { browserName: 'firefox',  headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
    { name: 'safari',  use: { browserName: 'webkit',   headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
   { name: 'chrome',  use: { browserName: 'chromium',   headless: true, trace: 'on', screenshot: 'only-on-failure', video: 'retain-on-failure' } },
  ],
});
