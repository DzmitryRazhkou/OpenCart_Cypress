class RegisterPage {
  registerAccountLink = "#content h1";
  getFirstName = "#input-firstname";
  getLastName = "#input-lastname";
  getEmail = "#input-email";
  getPhone = "#input-telephone";
  getPassword = "#input-password";
  getConfirmPassword = "#input-confirm";
  agreeCheckBox = "input[name='agree']";
  submit = "input[type='submit']";
  getSuccessMessage = "#content h1";
  dangerAlert = "div[class='text-danger']";
  successAlert = "div[class='alert alert-success alert-dismissible']";
  warning = "div[class='alert alert-danger alert-dismissible']";
  forgottenPassword = "div[class='list-group'] a:nth-of-type(3)";
  forgottenPasswordLink = "#content h1";
  emailAddressForgotten = "#input-email";
  continueBtn = "input[type='submit']";

  // Validate Title Page:
  titlePageTest(titlePage) {
    cy.title().should("equal", titlePage);
    cy.log(" =====> " + titlePage + " <===== ");
    return this;
  }

  validatePageLinkText(linkText) {
    cy.get(this.registerAccountLink).then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        cy.get(this.contactUsLink).should("have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  doRegister(first, last, email, phone, password) {
    cy.get(this.getFirstName).type(first);
    cy.get(this.getLastName).type(last);
    cy.get(this.getEmail).type(email);
    cy.get(this.getPhone).type(phone);
    cy.get(this.getPassword).type(password);
    cy.get(this.getConfirmPassword).type(password);
    cy.get(this.agreeCheckBox).check();
    cy.get(this.submit).click();
  }

  doRegisterDismatchPsw(first, last, email, phone, password, passwordConfirm) {
    cy.get(this.getFirstName).type(first);
    cy.get(this.getLastName).type(last);
    cy.get(this.getEmail).type(email);
    cy.get(this.getPhone).type(phone);
    cy.get(this.getPassword).type(password);
    cy.get(this.getConfirmPassword).type(passwordConfirm);
    cy.get(this.agreeCheckBox).check();
    cy.get(this.submit).click();
  }

  doRegisterWithoutAgreementPolicy(first, last, email, phone, password) {
    cy.get(this.getFirstName).type(first);
    cy.get(this.getLastName).type(last);
    cy.get(this.getEmail).type(email);
    cy.get(this.getPhone).type(phone);
    cy.get(this.getPassword).type(password);
    cy.get(this.getConfirmPassword).type(password);
    cy.get(this.submit).click();
  }

  validateSuccessMessage(successMessageTxt) {
    cy.get(this.getSuccessMessage).then((txt) => {
      const successTxt = txt.text();
      if (successMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        cy.get(this.getSuccessMessage).should("have.text", successMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validateWarningMessage(warningMessageTxt) {
    cy.get(this.warning).then((txt) => {
      const warningTxt = txt.text();
      if (warningMessageTxt === warningTxt) {
        cy.log(" =====> " + warningTxt + " <===== ");
      } else {
        cy.get(this.warning).should("not.have.text", warningMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }
  validateSuccessAlertMessage(successMessageTxt) {
    cy.get(this.successAlert).then((txt) => {
      const successTxt = txt.text();
      if (successMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        cy.get(this.successAlert).should("have.text", successMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validateAlertMessage(successMessageTxt) {
    cy.get(this.dangerAlert).then((txt) => {
      const successTxt = txt.text();
      if (successMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        cy.get(this.dangerAlert).should("have.text", successMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }
  clickOnTheForgottenPsw() {
    cy.get(this.forgottenPassword).click();
  }
  sendEmailForPassword(email) {
    cy.get(this.emailAddressForgotten).type(email);
    cy.get(this.continueBtn).click();
  }
}
export default RegisterPage;
