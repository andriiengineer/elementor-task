import { test, expect } from '../fixtures/fixture';
import { serverErrors } from '../data/server-errors';
import { expectedMessages } from '../data/expected-messages';
import { faker } from '@faker-js/faker';

test.describe('Contact Form', () => {

  let name: string;
  let email: string;
  let message: string;

  test.beforeEach(async () => {
    name = faker.person.fullName();
    email = faker.internet.email();
    message = faker.lorem.sentence();
  });

  test('should submit form successfully', async ({ contactFormPage, page }) => {
    await contactFormPage.fillForm(name, email, message);

    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes('admin-ajax.php') && resp.request().method() === 'POST'
    );

    await contactFormPage.submit();

    const response = await responsePromise;
    expect(response.status()).toBe(200);
    await expect(contactFormPage.formMessage).toHaveText(expectedMessages.formSubmitSuccess);
  });

  test('should display error on server failure', async ({ contactFormPage, page }, testInfo) => {
    await page.route('**/admin-ajax.php', (route) =>
      route.fulfill(serverErrors.internalServerError)
    );

    await contactFormPage.fillForm(name, email, message);
    await contactFormPage.submit();
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('Server Error 500 - page state', {
      body: screenshot,
      contentType: 'image/png',
    });
    await expect(contactFormPage.formMessage).toHaveText(expectedMessages.formSubmitError);
  });
});
