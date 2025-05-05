import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  private poloBrand: Locator;
  private firstProductViewButton: Locator;

  constructor(private page: Page) {
    // Polo brand link (currently unused in flow)
    this.poloBrand = page.locator('a[href="/brand_products/Polo"]');

    // First 'View Product' button in product grid
    this.firstProductViewButton = page.locator(
      "(//a[contains(text(),'View Product')])[1]"
    );
  }

  async viewFirstProduct(): Promise<void> {
    await this.firstProductViewButton.waitFor({ state: "visible" });
    await this.firstProductViewButton.click();
  }
}
