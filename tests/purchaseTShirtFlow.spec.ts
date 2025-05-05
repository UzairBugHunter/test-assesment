import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { PaymentPage } from "../pages/paymentPage";
import { LogoutPage } from "../pages/logoutpage";
import { credentials, cardTestData } from "../data/testData";

test.describe("@ui", () => {
  test("User can complete a full purchase flow", async ({
    page,
  }): Promise<void> => {
    // Page Object Instantiations
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const logoutPage = new LogoutPage(page);

    // 🔐 Login
    await loginPage.gotoLoginPage();
    await loginPage.login(credentials.email, credentials.password);
    await loginPage.assertLoginSuccessful();

    // 🛍️ Navigate to product
    await homePage.selectMenCategory();
    await homePage.selectTshirtsUnderMen();
    await productsPage.viewFirstProduct();

    // ➕ Add to cart and checkout
    await cartPage.addProductToCart();
    await cartPage.proceedToCheckout();

    // ✅ Validate checkout details and place order
    await checkoutPage.validateCheckoutDetails();
    await checkoutPage.clickPlaceOrder();

    // 💳 Fill payment info and confirm
    await paymentPage.fillCardDetails(
      cardTestData.cardName,
      cardTestData.cardNumber,
      cardTestData.cvc,
      cardTestData.month,
      cardTestData.year
    );
    await paymentPage.payAndConfirmOrder();
    await paymentPage.assertOrderPlacedSuccessfully();

    // 🚪 Logout and validate
    await logoutPage.logout();
    await logoutPage.assertLoggedOut();
  });
});
