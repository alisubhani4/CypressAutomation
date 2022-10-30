/** This class will have all functions related to login page */
class HomePage {
  /** This function will navigate us to the login page */
  verifyHomePageTitle() {
    const pageTitle = cy.title();
    pageTitle.should("eq", "Trends Clothing Store");
  }
  clickProductsButton() {
    const productsButton = cy.contains("li", "Products");
    productsButton.click();
  }
}
export default HomePage;
