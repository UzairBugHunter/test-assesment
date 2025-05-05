import { Page, Locator } from "@playwright/test";

export class CartPage {
  private addToCartButton: Locator;
  private viewCartFromPopupButton: Locator;
  private proceedToCheckoutButton: Locator;

  constructor(private page: Page) {
    // Button to add the first product to cart
    this.addToCartButton = page.locator(
      "(//button[normalize-space()='Add to cart'])[1]"
    );

    // 'View Cart' button inside the cart modal popup
    this.viewCartFromPopupButton = page.locator("//div[@id='cartModal']//p[2]");

    // 'Proceed to Checkout' button on the cart page
    this.proceedToCheckoutButton = page.locator(
      'a[class="btn btn-default check_out"]'
    );
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.waitFor({ state: "visible" });
    await this.addToCartButton.click({ force: true });

    await this.viewCartFromPopupButton.waitFor({ state: "visible" });
    await this.viewCartFromPopupButton.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.waitFor({ state: "visible" });
    await this.proceedToCheckoutButton.click({ force: true });
  }
}
