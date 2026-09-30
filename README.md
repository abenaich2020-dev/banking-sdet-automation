# Banking SDET Automation

Playwright and TypeScript test automation framework for testing a banking web application. The project includes UI automation, API testing, database validation, reusable fixtures, test data, Page Object Model design, and CI/CD test execution with GitHub Actions.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* API Testing
* Database Validation
* Page Object Model (POM)
* Playwright Test Fixtures
* Git / GitHub
* GitHub Actions
* HTML Test Reporting

## Project Structure

```text
banking-sdet-automation/

├── api/
│   └── BankingApi.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── pages/
│   ├── AccountsPage.ts
│   ├── LoginPage.ts
│   └── OpenAccountPage.ts
│
├── test-data/
│   ├── accountData.ts
│   └── loginData.ts
│
├── tests/
│   ├── account-integration.spec.ts
│   ├── api.spec.ts
│   ├── database.spec.ts
│   ├── example.spec.ts
│   ├── login.spec.ts
│   └── open-account.spec.ts
│
├── utils/
│   └── database.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

## Testing Coverage

The framework is organized to support multiple layers of testing.

### UI Automation

* Login testing
* Account functionality
* Account opening workflows
* Page Object Model implementation
* Cross-browser testing with Chromium, Firefox, and WebKit

### API Testing

* Banking API validation
* API test automation using Playwright
* Environment-based API configuration

### Database Testing

* Database connectivity and validation
* Application and database integration testing

### Test Infrastructure

* Reusable Playwright fixtures
* Centralized test data
* Utility classes
* Playwright configuration
* TypeScript configuration

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests using Playwright UI Mode:

```bash
npx playwright test --ui
```

## Test Reports

View the Playwright HTML report:

```bash
npx playwright show-report
```

The project uses the Playwright HTML reporter to generate a detailed test report.

## CI/CD with GitHub Actions

The project includes a GitHub Actions workflow that automatically runs the Playwright test suite when changes are pushed to the `main` branch or when a pull request is created.

The CI workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs project dependencies
4. Installs Playwright browsers
5. Runs the Playwright test suite
6. Generates the Playwright HTML report
7. Uploads the report as a GitHub Actions artifact

The generated `playwright-report` artifact can be downloaded from the GitHub Actions workflow run.

## Framework Design

The framework uses the Page Object Model to separate page interactions from test scenarios.

Shared fixtures, test data, API functionality, and database utilities are organized into separate directories to keep the automation framework structured and maintainable.

The framework separates test scenarios from reusable application interactions and supporting utilities.

## Purpose

This project demonstrates practical SDET automation experience with:

* UI test automation
* API testing
* Database validation
* TypeScript development
* Playwright framework design
* Page Object Model
* Test fixtures
* Test data management
* Integration testing
* Cross-browser testing
* CI/CD automation
* Automated test reporting

## Author

Adam Benaich
