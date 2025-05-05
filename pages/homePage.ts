import { Page, Locator } from "@playwright/test";

export class HomePage {
  private menCategory: Locator;
  private tshirtUnderMen: Locator;

  constructor(private page: Page) {
    // 'Men' category main accordion link
    this.menCategory = page.locator('a[href="#Men"]');

    // 'Tshirts' link under 'Men' category
    this.tshirtUnderMen = page.locator('a[href="/category_products/3"]');
  }

  async selectMenCategory(): Promise<void> {
    await this.menCategory.waitFor({ state: "visible" });
    await this.menCategory.click();
  }

  async selectTshirtsUnderMen(): Promise<void> {
    await this.tshirtUnderMen.waitFor({ state: "visible" });
    await this.tshirtUnderMen.click();
  }
}
