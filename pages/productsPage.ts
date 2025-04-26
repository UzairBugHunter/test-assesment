import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  private poloBrand: Locator;
  private firstProductViewButton: Locator;

  constructor(private page: Page) {
    this.poloBrand = page.locator('a[href="/brand_products/Polo"]');
    this.firstProductViewButton = page.locator(
      "(//a[contains(text(),'View Product')])[1]"
    );
  }

  async viewFirstProduct() {
    await this.firstProductViewButton.click();
  }
}
