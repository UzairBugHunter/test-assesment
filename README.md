# Playwright E2E Framework 🚀

An end-to-end automation framework built with **Playwright + TypeScript**, featuring:

- ✅ Clean Page Object Model (POM)
- ✅ Environment-based test config
- ✅ CI/CD with GitHub Actions
- ✅ HTML report hosted on GitHub Pages
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

Or access it live here after a push:  
🔗 **[View Latest Report](https://uzairbughunter.github.io/test-assesment/)**

---

## 🚀 CI/CD with GitHub Actions

Every push to `main`:
- ✅ Automatically runs tests
- ✅ Uploads HTML report + videos
- ✅ Deploys the Playwright HTML report to GitHub Pages

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
- 📊 HTML reporting (local & deployed)
- 💥 CI/CD pipeline included
- 🌐 Easy-to-share test result link

---

## 🤝 Contributing

Feel free to fork this repo or raise an issue if you'd like to collaborate or improve this test framework!

---