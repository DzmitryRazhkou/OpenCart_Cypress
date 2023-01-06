class ShoppingCartPage {
  shoppingCartLink = "#content h1";

  validatePageLinkText(linkText) {
    cy.get(this.shoppingCartLink).then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        cy.get(this.contactUsLink).should("have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  doRegister(first, last, email, password, phone) {
    cy.get(this.getFirstName).type(first);
    cy.get(this.getLastName).type(last);
    cy.get(this.getEmail).type(email);
    cy.get(this.getPhone).type(phone);
    cy.get(this.getPassword).type(password);
    cy.get(this.getConfirmPassword).type(password);
    cy.get(this.agreeCheckBox).check();
    cy.get(this.submit).click();
  }
}
export default ShoppingCartPage;
