class LoginPage {
  locatorsLoginPage = {
    emailField: () => cy.get("#input-email"),
    passwordField: () => cy.get("#input-password"),
    submitBtn: () => cy.get("input[type='submit']"),
    loginPageLink: () => cy.get("#content > :nth-child(1)"),
    dangerAlert: () => cy.get("div[class='text-danger']"),
    warningAlert: () =>
      cy.get("div[class='alert alert-danger alert-dismissible']"),
    myAccount: () => cy.get("a[title='My Account']"),
    logOutBtn: () =>
      cy.get("ul[class='dropdown-menu dropdown-menu-right'] li:last-of-type"),
    logOutLink: () => cy.get("#content h1"),
  };

  titlePageTest(titlePage) {
    cy.title().should("equal", titlePage);
    cy.log(" =====> " + titlePage + " <===== ");
    return this;
  }

  validatePageLinkText(linkText) {
    this.locatorsLoginPage.loginPageLink().then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        this.locatorsLoginPage
          .loginPageLink()
          .should("not.have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validateWarningMessage(warningMessageTxt) {
    this.locatorsLoginPage.warningAlert().then((txt) => {
      const warningTxt = txt.text();
      if (warningMessageTxt === warningTxt) {
        cy.log(" =====> " + warningTxt + " <===== ");
      } else {
        this.locatorsLoginPage
          .warningAlert()
          .should("not.have.text", warningMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  doLogin(email, password) {
    this.locatorsLoginPage.emailField().type(email);
    this.locatorsLoginPage.passwordField().type(password);
    this.locatorsLoginPage.submitBtn().click();
  }
  doLogOut() {
    this.locatorsLoginPage.myAccount().click();
    this.locatorsLoginPage.logOutBtn().click();
  }
  validateLogOutLinkText(linkText) {
    this.locatorsLoginPage.logOutLink().then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        this.locatorsLoginPage.logOutLink().should("not.have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }
}
export default LoginPage;
