import { Page, Locator } from "@playwright/test";

export class HomePage {
  private menCategory: Locator;
  private tshirtUnderMen: Locator;

  constructor(private page: Page) {
    this.menCategory = page.locator('a[href="#Men"]');
    this.tshirtUnderMen = page.locator('a[href="/category_products/3"]');
  }

  async selectMenCategory() {
    await this.menCategory.click();
  }

  async selectTshirtsUnderMen() {
    await this.tshirtUnderMen.click();
  }
}
