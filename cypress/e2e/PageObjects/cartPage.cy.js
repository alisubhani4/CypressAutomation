import "cypress-iframe";

/** This class will have all functions related to login page */
class CartPage {
  clickPayNowButton() {
    const productsButton = cy.get("button[class='StripeCheckout']");
    productsButton.click();
  }
  fillEmail(value) {
    // cy.frameLoaded("stripe_checkout_app", { timeout: 10000 });
    // cy.get(".checkoutView", { timeout: 10000 }).within(() => {
    const field = cy.get("#email", { timeout: 10000 });
    field.clear();
    field.type(value);
    return this;
    // });
  }
}

export default CartPage;
