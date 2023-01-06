class MyAccountPage {
  locatorsAccountPage = {
    editYourAccountInformationSubMenu: () =>
      cy.contains("Edit your account information"),
    changeYourPasswordSubMenu: () => cy.contains("Change your password"),
    modifyYourAddressBookEntriesSubMenu: () =>
      cy.contains("Modify your address book entries"),
    firstNameEditYourAccountInformation: () => cy.get("#input-firstname"),
    lastNameEditYourAccountInformation: () => cy.get("#input-lastname"),
    emailEditYourAccountInformation: () => cy.get("#input-email"),
    phoneEditYourAccountInformation: () => cy.get("#input-telephone"),
    passwordChangePssword: () => cy.get("#input-password"),
    passwordConfirmChangePssword: () => cy.get("#input-confirm"),

    continueBtn: () => cy.get("input[type='submit']"),
    backBtn: () => cy.get("a[class='btn btn-default']"),
    newAddress: () => cy.get("a[class='btn btn-primary']"),
    editBtn: () => cy.get("td[class='text-right'] a:nth-child(1)"),
    deleteBtn: () => cy.get("td[class='text-right'] a:nth-child(2)"),

    firstName: () => cy.get("#input-firstname"),
    lastName: () => cy.get("#input-lastname"),
    company: () => cy.get("#input-company"),
    addressFirstLine: () => cy.get("#input-address-1"),
    addressSecondLine: () => cy.get("#input-address-2"),
    city: () => cy.get("#input-city"),
    postCode: () => cy.get("#input-postcode"),
    country: () => cy.get("#input-country"),
    state: () => cy.get("select[id='input-zone']"),
    radio: () => cy.get("input[type='radio']"),

    addressBookEntriesLink: () => cy.get("#content h2:first-of-type"),

    existingAddresses: () => cy.get("td[class='text-left']"),
    successAlertMessage: () =>
      cy.get("div[class='alert alert-success alert-dismissible']"),
    warningAlert: () => cy.get(".alert"),
  };

  validateSuccessMessage(successMessageTxt) {
    this.locatorsAccountPage.successAlertMessage().then((txt) => {
      const successTxt = txt.text();
      if (successMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        this.locatorsAccountPage
          .successAlertMessage()
          .should("not.have.text", successMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validateWarningAlertMessage(warningAlertMessageTxt) {
    this.locatorsAccountPage.warningAlert().then((txt) => {
      const successTxt = txt.text();
      if (warningAlertMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        this.locatorsAccountPage
          .warningAlert()
          .should("have.text", warningAlertMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validatePageLinkText(linkText) {
    this.locatorsAccountPage.addressBookEntriesLink().then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        this.locatorsAccountPage
          .addressBookEntriesLink()
          .should("have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  // Validate Title Page:
  titlePageTest(titlePage) {
    cy.title().should("equal", titlePage);
    cy.log(" =====> " + titlePage + " <===== ");
    return this;
  }

  editYourAccountInformation() {
    this.locatorsAccountPage.editYourAccountInformationSubMenu().click();
  }

  changeYourPassword() {
    this.locatorsAccountPage.changeYourPasswordSubMenu().click();
  }

  changePassword(psw) {
    this.locatorsAccountPage.passwordChangePssword().type(psw);
    this.locatorsAccountPage.passwordConfirmChangePssword().type(psw);
  }

  editPersonalDetails(firstName, lastName, email, phone) {
    this.locatorsAccountPage.firstNameEditYourAccountInformation().clear();
    this.locatorsAccountPage
      .firstNameEditYourAccountInformation()
      .type(firstName);

    this.locatorsAccountPage.lastNameEditYourAccountInformation().clear();
    this.locatorsAccountPage
      .lastNameEditYourAccountInformation()
      .type(lastName);

    this.locatorsAccountPage.emailEditYourAccountInformation().clear();
    this.locatorsAccountPage.emailEditYourAccountInformation().type(email);

    this.locatorsAccountPage.phoneEditYourAccountInformation().clear();
    this.locatorsAccountPage.phoneEditYourAccountInformation().type(phone);
  }

  modifyYourAddressBookEntries() {
    this.locatorsAccountPage.modifyYourAddressBookEntriesSubMenu().click();
  }

  clickContinue() {
    this.locatorsAccountPage.continueBtn().click();
  }

  clickBack() {
    this.locatorsAccountPage.backBtn().click();
  }

  clickNewAddress() {
    // cy.scrollTo("bottom");
    this.locatorsAccountPage.newAddress().click();
  }

  doNewAddress(
    firstName,
    lastName,
    company,
    address1stLine,
    address2ndLine,
    city,
    zipCode,
    country,
    value,
    state
  ) {
    this.locatorsAccountPage
      .firstName()
      .type(firstName)
      .should("have.value", firstName);
    this.locatorsAccountPage
      .lastName()
      .type(lastName)
      .should("have.value", lastName);
    this.locatorsAccountPage
      .company()
      .type(company)
      .should("have.value", company);
    this.locatorsAccountPage
      .addressFirstLine()
      .type(address1stLine)
      .should("have.value", address1stLine);
    this.locatorsAccountPage
      .addressSecondLine()
      .type(address2ndLine)
      .should("have.value", address2ndLine);
    this.locatorsAccountPage.city().type(city).should("have.value", city);
    this.locatorsAccountPage
      .postCode()
      .type(zipCode)
      .should("have.value", zipCode);
    this.locatorsAccountPage
      .country()
      .select(country)
      .should("have.value", value);
    this.locatorsAccountPage
      .state()
      .select(state)
      .should("have.class", "form-control");
    this.locatorsAccountPage.radio().check("1");
    this.clickContinue();
    return firstName + " " + lastName;
  }

  editNewAddress(
    receivedFullName,
    firstName,
    lastName,
    company,
    address1stLine,
    address2ndLine,
    city,
    zipCode,
    country,
    value,
    state
  ) {
    this.locatorsAccountPage.existingAddresses().each((el, index) => {
      let existingAddressTxt = el.text();
      if (existingAddressTxt.includes(receivedFullName)) {
        this.locatorsAccountPage.editBtn().eq(index).click();

        this.locatorsAccountPage.firstName().clear();
        this.locatorsAccountPage
          .firstName()
          .type(firstName)
          .should("have.value", firstName);

        this.locatorsAccountPage.lastName().clear();
        this.locatorsAccountPage
          .lastName()
          .type(lastName)
          .should("have.value", lastName);

        this.locatorsAccountPage.company().clear();
        this.locatorsAccountPage
          .company()
          .type(company)
          .should("have.value", company);

        this.locatorsAccountPage.addressFirstLine().clear();
        this.locatorsAccountPage
          .addressFirstLine()
          .type(address1stLine)
          .should("have.value", address1stLine);

        this.locatorsAccountPage.addressSecondLine().clear();
        this.locatorsAccountPage
          .addressSecondLine()
          .type(address2ndLine)
          .should("have.value", address2ndLine);

        this.locatorsAccountPage.city().clear();

        this.locatorsAccountPage.city().type(city).should("have.value", city);

        this.locatorsAccountPage.postCode().clear();
        this.locatorsAccountPage
          .postCode()
          .type(zipCode)
          .should("have.value", zipCode);

        this.locatorsAccountPage.country().select([]);
        this.locatorsAccountPage
          .country()
          .select(country)
          .should("have.value", value);

        this.locatorsAccountPage.state().invoke("val", "").trigger("change");
        this.locatorsAccountPage
          .state()
          .select(state)
          .should("have.class", "form-control");

        this.locatorsAccountPage.radio().check("1");
        this.clickContinue();
      }
    });
    return firstName + " " + lastName;
  }

  deleteNewAddressCanNotDelete(updatedFullName) {
    this.locatorsAccountPage.existingAddresses().each((el, index) => {
      let existingAddressTxt = el.text();
      if (existingAddressTxt.includes(updatedFullName)) {
        this.locatorsAccountPage.deleteBtn().eq(index).click();
      }
    });
    return updatedFullName;
  }

  deleteNewAddress(deletedFullName) {
    this.locatorsAccountPage.existingAddresses().each((el, index) => {
      let existingAddressTxt = el.text();
      if (existingAddressTxt != deletedFullName) {
        this.locatorsAccountPage
          .deleteBtn()
          .eq(-2)
          .should("not.contain", deletedFullName)
          .click();
      }
    });
    return deletedFullName;
  }
}
export default MyAccountPage;
