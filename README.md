# Playwright E2E Framework 🚀

An end-to-end automation framework built with **Playwright + TypeScript**, featuring:

- ✅ Clean Page Object Model (POM)
- ✅ Environment-based test config
- ✅ Database testing with PostgreSQL
- ✅ CI/CD with GitHub Actions
- ✅ Screenshots and video on test failure
- ✅ Retry mechanism for flaky tests
- ✅ Easy-to-run scripts for different browsers

---

## 🔗 Repository

**GitHub Repo:** [test-assesment](https://github.com/UzairBugHunter/test-assesment)

---

## 📦 Getting Started Locally

### 1. Clone the Repo

```bash
git clone git@github.com:UzairBugHunter/test-assesment.git
cd test-assesment
```

### 2. Install Dependencies

```bash
npm install
npx playwright install --with-deps
```

---

## 🧪 Running UI Tests (Web Application Testing)

These tests validate:
- User login functionality
- Product selection and checkout
- Successful order placement
- End-to-end user flow

The tests use a Page Object Model (POM) structure for clean organization.

### Chrome

```bash
npm run test:chrome:headed     # Run in Chrome (headed mode)
npm run test:chrome:headless   # Run in Chrome (headless)
```

### Firefox

```bash
npm run test:firefox:headed
npm run test:firefox:headless
```

### Safari (WebKit)

```bash
npm run test:webkit:headed
npm run test:webkit:headless
```

### All Browsers

```bash
npm run test:all:headed
npm run test:all:headless
```

---

## 🛢️ Running Database (DB) Tests (CRUD Operations)

These tests validate:
- User creation, reading, updating, and deletion in PostgreSQL
- Dynamic user data generation to avoid duplication
- Full cleanup before each test for clean state

The CRUD operations are handled through a `db` module using `pg` library.

### How to run Database Tests:

```bash
npm run test:db
```

✅ Database tests will run only in Chromium and skip other browsers automatically.

> **Note:** Make sure your local PostgreSQL server is running, and your database connection string is correctly set in the `testData.ts` file.

---

## 📊 View Test Reports

After any test execution, you can view the Playwright HTML report locally:

```bash
npm run report:show
```

The report will open automatically in your default browser.

---

## 🚀 CI/CD with GitHub Actions

Every push to `main`:

- ✅ Runs UI tests separately on Chromium, Firefox, Webkit
- ✅ Runs DB tests separately on Chromium
- ✅ Uploads HTML reports and videos as downloadable artifacts

**Workflow file:** `.github/workflows/playwright.yml`

---

## 📁 Folder Structure

```
.github/workflows       # CI/CD config
data/                   # Test data (UI creds, DB config)
pages/                  # Page Object Model files
src/db/                 # DB connection and CRUD operations
tests/                  # Test specs (UI tests and DB tests)
playwright.config.ts    # Global Playwright configuration
package.json            # NPM scripts and project setup
```

---

## ✅ Features

- 🔄 Retries on test failures
- 🖥️ Runs tests across Chromium, Firefox, WebKit
- 🛢️ Full PostgreSQL database CRUD testing
- 📸 Screenshots on failure
- 🎥 Video recording on failure
- 📊 Local HTML reporting
- 💥 CI/CD pipeline setup for clean automation

---

## 📝 Important Note

In case any UI test fails during execution,  
please try running it locally a couple of times using the Chrome commands shared in the `package.json` file,  
as the website under test (**automationexercise.com**) can sometimes behave flaky or slow.

Example to retry locally:

```bash
npm run test:chrome:headed
```

✅ This usually resolves any temporary flakiness related to network delays or slow page loads.

---

## 🤝 Contributing

Feel free to fork this repo or raise an issue if you'd like to collaborate or improve this test framework!

---

## 📜 License

MIT
