import { test, expect } from "../fixtures/testFixtures";
import AxeBuilder from "@axe-core/playwright";
import { loginData } from "../test-data/loginData";

test.describe("Banking Application - Accessibility", () => {
  test("should scan the login page for WCAG accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toBeDefined();
  });

  test("should scan the Accounts Overview page for WCAG accessibility violations", async ({
    page,
    loginPage,
    accountsPage,
  }) => {
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await accountsPage.verifyAccountsOverviewIsDisplayed();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toBeDefined();
  });

  test("should scan the Open New Account page for WCAG accessibility violations", async ({
    page,
    loginPage,
    accountsPage,
    openAccountPage,
  }) => {
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    await accountsPage.verifyAccountsOverviewIsDisplayed();

    await openAccountPage.openNewAccount();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toBeDefined();
  });
});
