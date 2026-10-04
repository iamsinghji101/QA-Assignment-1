# QA Assignment 1 – Playwright Automation Framework

## Overview

This project contains an automated UI test suite developed using **Playwright with TypeScript** for testing the Practice Test Automation login application.

The framework follows the **Page Object Model (POM)** design pattern and separates:

* Page locators and actions
* Test cases
* Test data
* Environment-specific credentials

The test suite covers both **positive and negative login scenarios**, including successful login, logout, invalid credentials, and empty fields.

---

## Application Under Test

**Practice Test Automation – Login Page**

`https://practicetestautomation.com/practice-test-login/`

### Valid Credentials

```text
Username: student
Password: Password123
```

Credentials are maintained through environment variables and are not hardcoded in the test cases.

---

## Tech Stack

* **Language:** TypeScript
* **Automation Tool:** Playwright
* **Test Runner:** Playwright Test
* **Design Pattern:** Page Object Model (POM)
* **Package Manager:** npm
* **Version Control:** Git / GitHub
* **CI/CD:** GitHub Actions

---

## Project Structure

```text
QA-Assignment-1/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   └── LoginPage.ts
│
├── tests/
│   └── login.spec.ts
│
├── test-data/
│   └── login-data.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

### Folder Description

| Folder/File            | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `pages/`               | Contains Page Object classes and UI locators/actions |
| `tests/`               | Contains Playwright test cases                       |
| `test-data/`           | Contains valid and invalid test data                 |
| `.github/workflows/`   | GitHub Actions CI configuration                      |
| `playwright.config.ts` | Playwright configuration                             |
| `.env`                 | Environment-specific credentials                     |
| `.gitignore`           | Files/folders excluded from Git                      |
| `README.md`            | Project documentation                                |

---

## Framework Design

The framework uses the **Page Object Model (POM)** approach.

### LoginPage

`pages/LoginPage.ts` contains:

* Username locator
* Password locator
* Submit button locator
* Login success message locator
* Logout button locator
* Error message locator
* Login action

This keeps the test cases clean and makes the locators reusable and maintainable.

### Test Data

`test-data/login-data.ts` contains:

* Valid credentials
* Invalid credentials

This keeps test data separate from test implementation.

---

## Test Scenarios

The test suite contains **11 test cases**.

### Positive Test Cases

| ID     | Test Scenario                                  |
| ------ | ---------------------------------------------- |
| TC_001 | Verify login page opens successfully           |
| TC_002 | Verify successful login with valid credentials |
| TC_003 | Verify username field accepts valid username   |
| TC_004 | Verify password field accepts valid password   |
| TC_005 | Verify Submit button is enabled                |
| TC_006 | Verify user can logout successfully            |

### Negative Test Cases

| ID     | Test Scenario                                         |
| ------ | ----------------------------------------------------- |
| TC_007 | Verify login fails with invalid username              |
| TC_008 | Verify login fails with invalid password              |
| TC_009 | Verify login fails with invalid username and password |
| TC_010 | Verify login fails with empty username                |
| TC_011 | Verify login fails with empty password                |

---

## Prerequisites

Install the following before running the project:

* Node.js
* npm
* Git

Verify installation:

```bash
node --version
npm --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/iamsinghji101/QA-Assignment-1.git
```

Navigate to the project:

```bash
cd QA-Assignment-1
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

If the browser download times out, retry with a longer timeout.

### Windows PowerShell

```powershell
$env:PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT="120000"
npx playwright install
```

---

## Environment Configuration

Create a `.env` file in the project root.

Example:

```text
USERNAME=student
PASSWORD=Password123
```

The `.env` file should **not be committed to GitHub**.

Add `.env` to `.gitignore`:

```text
node_modules/
.env
playwright-report/
test-results/
blob-report/
```

For sharing the project, an `.env.example` file can be provided instead:

```text
USERNAME=student
PASSWORD=Password123
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

or:

```bash
npm test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

or:

```bash
npm run test:headed
```

### Run only login tests

```bash
npx playwright test tests/login.spec.ts
```

or:

```bash
npm run test:login
```

### Run a specific test using test name

```bash
npx playwright test -g "Successful Login"
```

### Run a specific test file in headed mode

```bash
npx playwright test tests/login.spec.ts --headed
```

---

## Test Report

Playwright generates an HTML report after test execution.

Open the report using:

```bash
npx playwright show-report
```

or:

```bash
npm run report
```

The report provides:

* Test execution status
* Passed/failed tests
* Execution duration
* Error details
* Screenshots/traces when configured

---

## Playwright Configuration

The main Playwright configuration is maintained in:

```text
playwright.config.ts
```

The configuration controls items such as:

* Test directory
* Base URL
* Browser configuration
* Timeout
* Retries
* Workers
* Reporter
* Trace
* Screenshots
* Video recording

