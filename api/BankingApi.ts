import { APIRequestContext } from '@playwright/test';

export class BankingApi {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;

    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error(
        'API_BASE_URL environment variable is not configured'
      );
    }

    this.baseUrl = apiBaseUrl;
  }

  async getAccounts(customerId: number) {
    return await this.request.get(
      `${this.baseUrl}/customers/${customerId}/accounts`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }
}