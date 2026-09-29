import { test, expect } from '@playwright/test';
import { BankingApi } from '../api/BankingApi';
import { accountData } from '../test-data/accountData';

test.describe('Banking Application - API', () => {

  test('should retrieve customer accounts as JSON', async ({ request }) => {
    const bankingApi = new BankingApi(request);

    const response = await bankingApi.getAccounts(
      accountData.validCustomer.customerId
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBeTruthy();
    expect(responseBody.length).toBeGreaterThan(0);

    const firstAccount = responseBody[0];

    expect(firstAccount).toHaveProperty('id');
    expect(firstAccount).toHaveProperty('customerId');
    expect(firstAccount).toHaveProperty('type');
    expect(firstAccount).toHaveProperty('balance');

    expect(firstAccount.customerId).toBe(
      accountData.validCustomer.customerId
    );

    expect(['CHECKING', 'SAVINGS']).toContain(firstAccount.type);
    expect(typeof firstAccount.balance).toBe('number');
  });

  test('should return 400 for invalid customer ID', async ({ request }) => {
    const bankingApi = new BankingApi(request);

    const response = await bankingApi.getAccounts(
      accountData.invalidCustomer.customerId
    );

    expect(response.status()).toBe(400);

    const responseBody = await response.text();

    expect(responseBody).toContain(
      `Could not find customer #${accountData.invalidCustomer.customerId}`
    );
  });

});