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
    // Payment input fields
    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.cvcInput = page.locator('input[name="cvc"]');
    this.expiryMonthInput = page.locator('input[name="expiry_month"]');
    this.expiryYearInput = page.locator('input[name="expiry_year"]');

    // Button to confirm payment
    this.payAndConfirmButton = page.locator("button#submit");

    // Success message after placing the order
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
  ): Promise<void> {
    await this.nameOnCardInput.waitFor({ state: "visible" });
    await this.nameOnCardInput.fill(cardName);

    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(month);
    await this.expiryYearInput.fill(year);
  }

  async payAndConfirmOrder(): Promise<void> {
    await this.payAndConfirmButton.waitFor({ state: "visible" });
    await this.payAndConfirmButton.click();
  }

  async assertOrderPlacedSuccessfully(): Promise<void> {
    await expect(this.orderSuccessMessage).toBeVisible();
  }
}
