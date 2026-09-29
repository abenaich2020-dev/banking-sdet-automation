import { APIRequestContext } from '@playwright/test';

export class BankingApi {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_BASE_URL!;
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