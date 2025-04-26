import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI and local */
  retries: 1, // ✅ Retry once everywhere (not only CI)
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. */
  reporter: "html", // ✅ Keep HTML report

  /* Shared settings for all the projects below. */
  use: {
    actionTimeout: 10_000, // ✅ 10 seconds max for any action (click, fill, etc.)
    navigationTimeout: 30_000, // ✅ 30 seconds for navigation
    baseURL: "https://www.automationexercise.com", // (optional if you want later)

    trace: "on-first-retry", // ✅ Keep trace on first retry
    screenshot: "only-on-failure", // ✅ Capture screenshot if test fails
    video: "retain-on-failure", // ✅ Keep video if test fails
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
