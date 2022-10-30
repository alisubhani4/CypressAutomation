/** This class will have all functions related to login page */
class LoginPage {
  /** This function will navigate us to the login page */
  verifyLoginPageTitle() {
    const pageTitle = cy.title();
    pageTitle.should("eq", "Log in | My App");
  }
  /** This function will enter email */
  fillEmail(value) {
    const field = cy.get("#username");
    field.clear();
    field.type(value);
    return this;
  }

  /** This function will enter password */
  fillPassword(value) {
    const field = cy.get("#password");
    field.type(value);
    return this;
  }

  clickLoginButton() {
    const button = cy.get('button[name="action"]');
    button.click();
  }
}
export default LoginPage;
