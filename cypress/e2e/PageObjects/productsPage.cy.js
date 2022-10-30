/** This class will have all functions related to products page */
class ProductsPage {
  /** This function will navigate us to the products page */
  visitProductsPage = () => {
    cy.visit("https://competent-engelbart-3915c0.netlify.app/products", { timeout: 50000 });
  };

  /** This function will navigate us to the login page */
  verifyProductsPageTitle() {
    const pageTitle = cy.title();
    pageTitle.should("eq", "Trends Clothing Store");
  }

  openLoginPage = () => {
    const loginButton = cy.get('button[class="login"]');
    loginButton.click();
  };
  addProductToCart() {
    const addToCartButton = cy.get(
      "#root > div.cocktails-center > article:nth-child(1) > div.cocktail-footer > div.btn-container > a"
    );
    addToCartButton.click();
  }
  addSecondProductToCart() {
    const addToCartButton = cy.get(
      "#root > div.cocktails-center > article:nth-child(2) > div.cocktail-footer > div.btn-container > a"
    );
    addToCartButton.click();
  }
  openCart() {
    const cartButton = cy.get("a[href='/cart']");
    cartButton.click();
  }
}
export default ProductsPage;
