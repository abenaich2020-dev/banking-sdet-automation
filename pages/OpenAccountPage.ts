import type { Page } from '@playwright/test';

export class OpenAccountPage {
  constructor(public page: Page) {}

  async openNewAccount(): Promise<void> {
    await this.page.getByRole('link', {
      name: 'Open New Account',
    }).click();

    // Wait until the funding-account dropdown contains at least one account
    await this.page.locator('#fromAccountId option').first().waitFor({
      state: 'attached',
    });
  }

  async selectAccountType(accountType: string): Promise<void> {
    await this.page.locator('#type').selectOption({
      label: accountType,
    });
  }

  async selectFromAccount(accountId: string): Promise<void> {
    await this.page.locator('#fromAccountId').selectOption(accountId);
  }

  async selectFirstAvailableFundingAccount(): Promise<void> {
    await this.page.locator('#fromAccountId').selectOption({
      index: 0,
    });
  }

  async submit(): Promise<void> {
    await this.page.getByRole('button', {
      name: 'Open New Account',
    }).click();
  }
}