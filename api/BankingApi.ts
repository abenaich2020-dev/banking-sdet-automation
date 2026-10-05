import { APIRequestContext, APIResponse } from "@playwright/test";

export class BankingApi {
  readonly request: APIRequestContext;
  readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;

    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error("API_BASE_URL environment variable is not configured");
    }

    this.baseUrl = apiBaseUrl;
  }
  private async checkForRateLimit(response: APIResponse): Promise<void> {
    if (response.status() === 429) {
      throw new Error(
        "ParaBank API returned HTTP 429 Too Many Requests. The public test environment is rate limiting requests.",
      );
    }
  }

  async getAccounts(customerId: number) {
    const response = await this.request.get(
      `${this.baseUrl}/customers/${customerId}/accounts`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    await this.checkForRateLimit(response);

    return response;
  }

  async getAccount(accountId: string) {
    const response = await this.request.get(
      `${this.baseUrl}/accounts/${accountId}`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    await this.checkForRateLimit(response);

    return response;
  }
}
