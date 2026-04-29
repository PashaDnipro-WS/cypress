# Telnyx Website Testing Project

Automation testing project for the **Telnyx website** using Cypress.

---

## Project Structure

```text
.github/workflows/     # GitHub Actions pipeline
cypress/e2e/           # Cypress test files
cypress/fixtures/      # Test data
cypress/support/       # Custom commands & setup
cypress.config.js      # Local Cypress configuration
cypress.ci.config.js   # CI configuration
docs/                  # Test documentation
README.md              # Project description
```

---

## CI/CD Pipeline

The GitHub Actions pipeline performs:

1. Install dependencies
2. Run Cypress tests
3. Send results to Cypress Cloud
4. Generate Allure Report
5. Deploy report to GitHub Pages

---

## Reports

### Cypress Cloud

Provides:

- Run history
- Test execution status
- Duration tracking
- Test analytics

### Allure Report

Provides:

- Detailed HTML report
- Test hierarchy
- Execution timeline
- Report history

---

## Test Documentation

Manual test cases are stored in:

```text
docs/
```