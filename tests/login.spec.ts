import { test, expect } from '../fixtures/testFixtures';
import { loginData } from '../test-data/loginData';

test.describe('Banking Application - Login', () => {

  test('should successfully login with valid credentials', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(
      loginPage.page.getByRole('heading', { name: 'Accounts Overview' })
    ).toBeVisible();
  });

  test('should prevent login with empty credentials', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
      loginData.emptyCredentials.username,
      loginData.emptyCredentials.password
    );

    await expect(loginPage.page).toHaveURL(/login\.htm/);
  });

});