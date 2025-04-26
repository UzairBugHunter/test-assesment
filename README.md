# Playwright E2E Framework 🚀

An end-to-end automation framework built with **Playwright + TypeScript**, featuring:

- ✅ Clean Page Object Model (POM)
- ✅ Environment-based test config
- ✅ CI/CD with GitHub Actions
- ✅ Screenshots and video on test failure
- ✅ Retry mechanism for flaky tests
- ✅ Easy-to-run scripts for different browsers

---

## 🔗 Repository

**GitHub Repo:** [test-assesment](https://github.com/UzairBugHunter/test-assesment)

---

## 📦 Getting Started

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

## 🧪 Running Tests

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

## 📊 View Report

```bash
npm run report:show
```

The Playwright HTML report will open locally in your browser after test execution.

---

## 🚀 CI/CD with GitHub Actions

Every push to `main`:

- ✅ Automatically runs tests
- ✅ Uploads HTML report and videos as downloadable artifacts

**Workflow file:** `.github/workflows/playwright.yml`

---

## 📁 Folder Structure

```
.github/workflows       # CI/CD config
data/                   # Test data
pages/                  # POM files
tests/                  # Test specs
playwright.config.ts    # Global config (timeouts, retries, reporters)
```

---

## ✅ Features

- 🔄 Retries on failure
- 🖥️ Runs tests in Chromium, Firefox, WebKit
- 📸 Screenshots on failure
- 🎥 Video recording on failure
- 📊 Local HTML reporting after test execution
- 💥 CI/CD pipeline included

---

## 📝 Important Note

In case any test fails during execution,  
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
