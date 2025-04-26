import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private addToCartButton: Locator;
  private viewCartFromPopupButton: Locator;
  private proceedToCheckoutButton: Locator;

  constructor(private page: Page) {
    // Using the stable old XPath you were using
    this.addToCartButton = page.locator(
      "(//button[normalize-space()='Add to cart'])[1]"
    );

    this.viewCartFromPopupButton = page.locator("//div[@id='cartModal']//p[2]"); // View Cart button on popup

    this.proceedToCheckoutButton = page.locator(
      'a[class="btn btn-default check_out"]'
    );
  }

  async addProductToCart() {
    await this.page.waitForLoadState("networkidle");
    await this.addToCartButton.click({ force: true });
    await this.viewCartFromPopupButton.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.waitFor({ state: "visible" });
    await this.proceedToCheckoutButton.click({ force: true });
  }
}
