import { Page, Locator, expect } from "@playwright/test";

export class LogoutPage {
  private logoutButton: Locator;
  private loginPageHeading: Locator;

  constructor(private page: Page) {
    // Logout link in the navigation
    this.logoutButton = page.locator("a", { hasText: "Logout" });

    // Heading on the login page after logout
    this.loginPageHeading = page.locator("h2", {
      hasText: "Login to your account",
    });
  }

  async logout(): Promise<void> {
    await this.logoutButton.waitFor({ state: "visible" });
    await this.logoutButton.scrollIntoViewIfNeeded();
    await this.logoutButton.click();
  }

  async assertLoggedOut(): Promise<void> {
    await expect(this.loginPageHeading).toBeVisible();
  }
}
