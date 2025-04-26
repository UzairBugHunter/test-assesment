import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  private firstNameField: Locator;
  private phoneField: Locator;
  private productInCart: Locator;
  private placeOrderButton: Locator;

  constructor(private page: Page) {
    this.firstNameField = page
      .locator("#address_delivery")
      .getByText("Uzair Abbas");
    this.phoneField = page.locator("#address_invoice").getByText("+");
    this.productInCart = page.getByRole("heading", { name: "Men Tshirt" });
    this.placeOrderButton = page.getByRole("link", { name: "Place Order" });
  }

  async validateCheckoutDetails() {
    await expect(this.firstNameField).toBeVisible();
    await expect(this.phoneField).toBeVisible();
    await expect(this.productInCart).toBeVisible();
  }

  async clickPlaceOrder() {
    await this.placeOrderButton.scrollIntoViewIfNeeded();
    await this.placeOrderButton.click();
  }
}
