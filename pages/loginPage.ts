import { Page, expect, Locator } from "@playwright/test";
import { urls } from "../data/testData";

export class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loggedInAsText: Locator;

  constructor(private page: Page) {
    // Input fields and login button
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');

    // "Logged in as" text element for validation
    this.loggedInAsText = page.locator("a", { hasText: "Logged in as" });
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto(`${urls.baseUrl}/login`);
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.waitFor({ state: "visible" });
    await this.emailInput.fill(email);

    await this.passwordInput.waitFor({ state: "visible" });
    await this.passwordInput.fill(password);

    await this.loginButton.click();
    await this.page.waitForURL(/\/login|\/|\/account/, { timeout: 5000 });
  }

  async assertLoginSuccessful(): Promise<void> {
    await expect(this.loggedInAsText).toBeVisible();
  }
}
