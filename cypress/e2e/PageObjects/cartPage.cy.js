/** This class will have all functions related to login page */
class CartPage {
  clickPayNowButton() {
    const productsButton = cy.get("button[class='StripeCheckout']");
    productsButton.click();
  }
  fillEmail(value) {
    const field = cy.getWithinIframe("#email", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillName(value) {
    const field = cy.getWithinIframe("#shipping-name", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillAddress(value) {
    const field = cy.getWithinIframe("#shipping-street", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillZipCode(value) {
    const field = cy.getWithinIframe("#shipping-zip", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillShippingCity(value) {
    const field = cy.getWithinIframe("#shipping-zip", { timeout: 10000 });
    field.type(value);
    return this;
  }
  clickPaymentInfo() {
    const paymentInfoButton = cy.getWithinIframe(".iconContinue");
    paymentInfoButton.click();
  }
  fillCardNumber(value) {
    const field = cy.getWithinIframe("#card_number", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillExpiryDate(value) {
    const field = cy.getWithinIframe("#cc-exp", { timeout: 10000 });
    field.type(value);
    return this;
  }
  fillCVC(value) {
    const field = cy.getWithinIframe("#cc-csc", { timeout: 10000 });
    field.type(value);
    return this;
  }
  clickCardDetails() {
    const paymentInfoButton = cy.getWithinIframe(".iconTick");
    paymentInfoButton.click();
  }
  verifySuccessMessage() {
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Payment is successful! Your order has been placed.");
    });
  }
  clickLogoutButton() {
    const productsButton = cy.get(".login");
    productsButton.click();
  }
}

export default CartPage;
