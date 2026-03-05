import { type Page, type Locator } from '@playwright/test';

export class ContactFormPage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly formMessage: Locator;

  constructor(private readonly page: Page) {
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.messageInput = page.getByRole('textbox', { name: 'Message' });
    this.submitButton = page.getByRole('button', { name: 'Send' });
    this.formMessage = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('elementor-36/');
  }

  async fillForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }
}
