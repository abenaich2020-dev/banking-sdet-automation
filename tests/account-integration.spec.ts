import { test, expect } from "../fixtures/testFixtures";
import { BankingApi } from "../api/BankingApi";
import { loginData } from "../test-data/loginData";

test.describe("Banking Application - UI and API Integration", () => {
  test("should verify customer accounts through UI and API", async ({
    request,
    loginPage,
    accountsPage,
  }) => {
    // Step 1: Login through the UI
    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );

    // Step 2: Verify Accounts Overview page
    await accountsPage.verifyAccountsOverviewIsDisplayed();

    const uiAccountNumber = await accountsPage.getFirstAccountNumber();

    // Step 3: Get the account details through the API
    const bankingApi = new BankingApi(request);

    const accountResponse = await bankingApi.getAccount(uiAccountNumber);

    expect(accountResponse.status()).toBe(200);

    const account = await accountResponse.json();

    expect(account.id.toString()).toBe(uiAccountNumber);
    expect(account.customerId).toBeTruthy();

    // Step 4: Get all accounts for the same customer
    const accountsResponse = await bankingApi.getAccounts(account.customerId);

    expect(accountsResponse.status()).toBe(200);

    const accounts = await accountsResponse.json();

    expect(Array.isArray(accounts)).toBeTruthy();
    expect(accounts.length).toBeGreaterThan(0);

    // Step 5: Verify the UI account exists in that customer's API response
    const accountExistsInApi = accounts.some(
      (apiAccount: { id: number }) =>
        apiAccount.id.toString() === uiAccountNumber,
    );

    expect(accountExistsInApi).toBeTruthy();
  });
});
