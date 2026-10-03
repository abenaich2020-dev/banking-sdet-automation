import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Banking Application - Accessibility', () => {
  test('should scan the login page for WCAG accessibility violations', async ({
    page,
  }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toBeDefined();
  });
});