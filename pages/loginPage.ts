import { Page, expect, Locator } from "@playwright/test";
import { urls } from "../data/testData";

export class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loggedInAsText: Locator;

  constructor(private page: Page) {
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInAsText = page.locator("a", { hasText: "Logged in as" });
  }

  async gotoLoginPage() {
    await this.page.goto(`${urls.baseUrl}/login`);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccessful() {
    await expect(this.loggedInAsText).toBeVisible();
  }
}
