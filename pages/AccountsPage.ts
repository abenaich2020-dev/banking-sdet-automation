import { Page, Locator } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;
  readonly accountsOverviewHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsOverviewHeading = page.getByRole('heading', {
      name: 'Accounts Overview',
    });
  }

  async verifyAccountsOverviewIsDisplayed(): Promise<void> {
    await this.accountsOverviewHeading.waitFor();
  }

  async getFirstAccountNumber(): Promise<string> {
    const accountLink = this.page.locator('#accountTable a').first();

    await accountLink.waitFor();

    const accountNumber = await accountLink.textContent();

    if (!accountNumber) {
      throw new Error('No account number found on Accounts Overview');
    }

    return accountNumber.trim();
  }
}
