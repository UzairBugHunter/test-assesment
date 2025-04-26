import { Page, Locator, expect } from "@playwright/test";

export class LogoutPage {
  private logoutButton: Locator;
  private loginPageHeading: Locator;

  constructor(private page: Page) {
    this.logoutButton = page.locator("a", { hasText: "Logout" });
    this.loginPageHeading = page.locator("h2", {
      hasText: "Login to your account",
    }); // After logout, login heading visible
  }

  async logout() {
    await this.logoutButton.scrollIntoViewIfNeeded();
    await this.logoutButton.click();
  }

  async assertLoggedOut() {
    await expect(this.loginPageHeading).toBeVisible(); // Asserting we are back on login page
  }
}
