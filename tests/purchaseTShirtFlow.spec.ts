import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { credentials, cardTestData } from "../data/testData";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { PaymentPage } from "../pages/paymentPage";
import { LogoutPage } from "../pages/logoutpage";

test("User can complete a purchase flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const logoutPage = new LogoutPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login(credentials.email, credentials.password);
  await loginPage.assertLoginSuccessful(); //assertion to check logged in successfully

  await homePage.selectMenCategory();
  await homePage.selectTshirtsUnderMen();

  await productsPage.viewFirstProduct();

  await cartPage.addProductToCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.validateCheckoutDetails(); //assertion to check user details
  await checkoutPage.clickPlaceOrder();

  await paymentPage.fillCardDetails(
    cardTestData.cardName,
    cardTestData.cardNumber,
    cardTestData.cvc,
    cardTestData.month,
    cardTestData.year
  );
  await paymentPage.payAndConfirmOrder(); //assert order is placed
  await paymentPage.assertOrderPlacedSuccessfully(); //assertion to check order created successfully

  await logoutPage.logout();
  await logoutPage.assertLoggedOut(); //assertion to check user is logged out
});
