# Banking SDET Automation

Playwright and TypeScript test automation framework for testing a banking web application. The project includes UI automation, API testing, database validation, reusable fixtures, test data, and Page Object Model design.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- API Testing
- Database Validation
- Page Object Model (POM)
- Playwright Test Fixtures
- Git / GitHub

## Project Structure

```text
banking-sdet-automation/
│
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
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
Testing Coverage

The framework is organized to support multiple layers of testing.

UI Automation
Login testing
Account functionality
Account opening workflows
Page Object Model implementation
API Testing
Banking API validation
API test automation using Playwright
Database Testing
Database connectivity and validation
Integration testing between application and database
Test Infrastructure
Reusable Playwright fixtures
Centralized test data
Utility classes
Playwright configuration
TypeScript configuration
Installation

Install project dependencies:

npm install

Install Playwright browsers:

npx playwright install
Running Tests

Run the complete test suite:

npx playwright test

Run tests with the browser visible:

npx playwright test --headed

Run a specific test file:

npx playwright test tests/login.spec.ts

Run tests using Playwright UI mode:

npx playwright test --ui
Test Reports

View the Playwright HTML report:

npx playwright show-report
Framework Design

The framework uses the Page Object Model to separate page interactions from test scenarios. Shared fixtures, test data, API functionality, and database utilities are organized into separate directories to keep the automation framework maintainable and scalable.

Purpose

This project demonstrates practical SDET automation skills including:

UI test automation
API testing
Database validation
TypeScript development
Playwright framework design
Page Object Model
Test fixtures
Test data management
Integration testing
Automated test execution
Author

Adam Benaich