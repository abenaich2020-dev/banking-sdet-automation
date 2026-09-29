import { test, expect } from '../fixtures/testFixtures';
import { loginData } from '../test-data/loginData';

test.describe('Banking Application - Account Opening', () => {

  test('should open a new savings account', async ({
    loginPage,
    accountsPage,
    openAccountPage,
  }) => {

    // Step 1: Login
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    // Step 2: Verify Accounts Overview
    await accountsPage.verifyAccountsOverviewIsDisplayed();

    // Step 3: Navigate to Open New Account
    await openAccountPage.openNewAccount();

    // Step 4: Select Savings account
    await openAccountPage.selectAccountType('SAVINGS');

    // Step 5: Select the first available funding account
    await openAccountPage.selectFirstAvailableFundingAccount();

    // Step 6: Submit the request
    await openAccountPage.submit();

    // Step 7: Verify the account was opened
    await expect(
      openAccountPage.page.getByText('Account Opened!')
    ).toBeVisible();
  });

});