import ProductsPage from "../PageObjects/productsPage.cy";
import LoginPage from "../PageObjects/loginPage.cy";
import HomePage from "../PageObjects/homePage.cy";
import CartPage from "../PageObjects/cartPage.cy";

/** This is a test suite in which we can have multiple test case based on our requirement */
describe("Test Suite", { includeShadowDom: true }, () => {
  /** Code for requested  */
  it("Buy Products", () => {
    /** Initialising p */
    const products = new ProductsPage();
    const login = new LoginPage();
    const homePage = new HomePage();
    const cart = new CartPage();

    products.visitProductsPage();
    products.openLoginPage();
    login.verifyLoginPageTitle();
    login.fillEmail("zahraimadgill22@gmail.com");
    login.fillPassword("Zahraimad-123");
    login.clickLoginButton();
    homePage.verifyHomePageTitle();
    homePage.clickProductsButton();
    products.verifyProductsPageTitle();
    products.addProductToCart();
    products.addSecondProductToCart();
    cy.scrollTo("top");
    products.openCart();
    cart.clickPayNowButton();
    cy.wait(10000);
    cart.fillEmail("zahraimadgill22@gmail.com");
  });
});
