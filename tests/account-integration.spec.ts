import { test, expect } from '../fixtures/testFixtures';
import { BankingApi } from '../api/BankingApi';
import { loginData } from '../test-data/loginData';
import { accountData } from '../test-data/accountData';

test.describe('Banking Application - UI and API Integration', () => {

  test('should verify customer accounts through UI and API', async ({
    request,
    loginPage,
    accountsPage,
  }) => {

    // Step 1: Login through the UI
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    // Step 2: Verify Accounts Overview page
    await accountsPage.verifyAccountsOverviewIsDisplayed();

    // Step 3: Get customer accounts through the API
    const bankingApi = new BankingApi(request);

    const response = await bankingApi.getAccounts(
      accountData.validCustomer.customerId
    );

    expect(response.status()).toBe(200);

    const accounts = await response.json();

    // Step 4: Verify API returned account data
    expect(Array.isArray(accounts)).toBeTruthy();
    expect(accounts.length).toBeGreaterThan(0);

    // Step 5: Verify the customer ID from the API
    expect(accounts[0].customerId).toBe(
      accountData.validCustomer.customerId
    );
  });

});