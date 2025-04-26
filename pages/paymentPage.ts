import { Page, Locator, expect } from "@playwright/test";

export class PaymentPage {
  private nameOnCardInput: Locator;
  private cardNumberInput: Locator;
  private cvcInput: Locator;
  private expiryMonthInput: Locator;
  private expiryYearInput: Locator;
  private payAndConfirmButton: Locator;
  private orderSuccessMessage: Locator;

  constructor(private page: Page) {
    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.cvcInput = page.locator('input[name="cvc"]');
    this.expiryMonthInput = page.locator('input[name="expiry_month"]');
    this.expiryYearInput = page.locator('input[name="expiry_year"]');
    this.payAndConfirmButton = page.locator("button#submit"); // Pay and Confirm button
    this.orderSuccessMessage = page.locator(
      'p:has-text("Congratulations! Your order has been confirmed!")'
    );
  }

  async fillCardDetails(
    cardName: string,
    cardNumber: string,
    cvc: string,
    month: string,
    year: string
  ) {
    await this.nameOnCardInput.fill(cardName);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(month);
    await this.expiryYearInput.fill(year);
  }

  async payAndConfirmOrder() {
    await this.payAndConfirmButton.click();
  }

  async assertOrderPlacedSuccessfully() {
    await expect(this.orderSuccessMessage).toBeVisible();
  }
}
