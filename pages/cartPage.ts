import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private addToCartButton: Locator;
  private viewCartFromPopupButton: Locator;
  private proceedToCheckoutButton: Locator;

  constructor(private page: Page) {
    this.addToCartButton = page.locator(
      "(//button[normalize-space()='Add to cart'])[1]"
    ); // Add to Cart button on product page
    this.viewCartFromPopupButton = page.locator("//div[@id='cartModal']//p[2]"); // View Cart button on popup
    this.proceedToCheckoutButton = page.locator(
      'a[class="btn btn-default check_out"]'
    );
  }

  async addProductToCart() {
    await Promise.all([
      this.page.waitForLoadState("networkidle"), //  Wait for no network calls (popup to fully load)
      this.addToCartButton.click(), //  Click Add to Cart
    ]);

    // Wait for popup and View Cart button to be visible
    await this.viewCartFromPopupButton.waitFor({ state: "visible" }); //  assertion for state visibility
    await this.viewCartFromPopupButton.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}
