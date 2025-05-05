import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  private firstNameField: Locator;
  private phoneField: Locator;
  private productInCart: Locator;
  private placeOrderButton: Locator;

  constructor(private page: Page) {
    // Validating user name in delivery address block
    this.firstNameField = page
      .locator("#address_delivery")
      .getByText("Uzair Abbas");

    // Validating phone number in invoice address block
    this.phoneField = page.locator("#address_invoice").getByText("+");

    // Validating selected product is in the checkout
    this.productInCart = page.getByRole("heading", { name: "Men Tshirt" });

    // 'Place Order' button at the bottom
    this.placeOrderButton = page.getByRole("link", { name: "Place Order" });
  }

  async validateCheckoutDetails(): Promise<void> {
    await expect(this.firstNameField).toBeVisible();
    await expect(this.phoneField).toBeVisible();
    await expect(this.productInCart).toBeVisible();
  }

  async clickPlaceOrder(): Promise<void> {
    await this.placeOrderButton.scrollIntoViewIfNeeded();
    await this.placeOrderButton.click();
  }
}
