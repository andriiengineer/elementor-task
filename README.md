# Elementor Contact Form — Playwright Tests

**Tech stack:** Playwright, TypeScript, Allure Report, GitHub Actions, GitHub Pages

**Live Allure Report:** [elementor-report.aqapro.com](https://elementor-report.aqapro.com)

Automated tests for the Elementor contact form.

---

## Running Tests via GitHub Actions

You don't need anything installed locally — just a browser and access to this repository.

1. Go to the **Actions** tab at the top of the repository page.
2. In the left sidebar, click **Playwright Tests**.
3. Click the **Run workflow** button, pick a branch (usually `main`), and hit the green **Run workflow** button.
4. Wait for the run to finish. You can watch the progress in real time.
5. Once it's done, you'll see a basic test summary right on the run page in GitHub — how many tests passed, failed, or broke.

### Allure Report

A full Allure report with history of the last 10 runs is automatically published to GitHub Pages on a custom domain:

**https://elementor-report.aqapro.com**

The report is also available as a downloadable artifact (`allure-report`) on every workflow run.

---

## Running Tests Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version) with npm
- [Allure CLI](https://allurereport.org/docs/install/) — only needed if you want to generate reports locally

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Create a `.env` file in the project root and specify the target site URL:

```
BASE_URL=https://wtfqsbkm.elementor.cloud/
```

This is done as an example of how to use environment variables and secrets — the same approach works both locally and in GitHub Actions.

3. Install project dependencies:

```bash
npm install
```

4. Install Playwright with browsers:

```bash
npx playwright install
```

### Running

These are shortcut commands defined in `package.json`:

```bash
# Run tests
npm test

# Run tests with the browser visible
npm run test:headed
```

You can also use any standard Playwright CLI commands directly. A few useful examples:

```bash
# Run a specific test file
npx playwright test tests/contactForm.spec.ts

# Run tests in a specific browser
npx playwright test --project=chromium

# Run tests with debug mode (step through each action)
npx playwright test --debug

# Show the HTML report built into Playwright
npx playwright show-report
```

### Generating Allure Report Locally

```bash
# Generate the report from test results
npm run allure:generate

# Open the report in your browser
npm run allure:open
```
