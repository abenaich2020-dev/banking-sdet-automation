import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsPage } from '../pages/AccountsPage';
import { OpenAccountPage } from '../pages/OpenAccountPage';

type TestFixtures = {
  loginPage: LoginPage;
  accountsPage: AccountsPage;
  openAccountPage: OpenAccountPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  openAccountPage: async ({ page }, use) => {
    await use(new OpenAccountPage(page));
  },
});

export { expect };