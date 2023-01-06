import MyAccountPage from "../po/MyAccountPage";
import LoginPage from "../po/LoginPage";
import YourStorePage from "../po/YourStorePage";
import { faker } from "@faker-js/faker";

Cypress.session.clearAllSavedSessions();
describe("My Account Page Features", () => {
  let openCartData;
  let yourStorePage;
  let loginPage;
  let myAccountPage;
  let receivedFullName;
  let updatedFullName;
  let deletedFullName;

  beforeEach(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      openCartData = data;
      return openCartData;
    });
  });
  afterEach(() => {
    cy.goBack();
    cy.clearCookies();
  });

  it("My Account Page Title Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const myAccountTitlePage = openCartData.myAccountTitlePage;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.titlePageTest(myAccountTitlePage);
  });

  it("My Account Edit Your Account Information Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const firstName = openCartData.firstName;
    const lastName = openCartData.lastName;
    const email = openCartData.email;
    const psw = openCartData.password;
    const phone = openCartData.phone;
    const successAlertMessageAlreadyUpdated =
      openCartData.successAlertMessageAlreadyUpdated;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.editYourAccountInformation();
    myAccountPage.editPersonalDetails(firstName, lastName, email, phone);
    myAccountPage.clickContinue();
    myAccountPage.validateSuccessMessage(successAlertMessageAlreadyUpdated);
  });

  it("My Account Edit Your Account Information Back Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const firstName = openCartData.firstName;
    const lastName = openCartData.lastName;
    const email = openCartData.email;
    const psw = openCartData.password;
    const phone = openCartData.phone;
    const myAccountTitlePage = openCartData.myAccountTitlePage;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.editYourAccountInformation();
    myAccountPage.editPersonalDetails(firstName, lastName, email, phone);
    myAccountPage.clickBack();
    myAccountPage.titlePageTest(myAccountTitlePage);
  });

  it("My Account Change Your Password Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const successPasswordUpdated = openCartData.successPasswordUpdated;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.changeYourPassword();
    myAccountPage.changePassword(psw);
    myAccountPage.clickContinue();
    myAccountPage.validateSuccessMessage(successPasswordUpdated);
  });

  it("My Account Change Your Password Back Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const myAccountTitlePage = openCartData.myAccountTitlePage;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.changeYourPassword();
    myAccountPage.changePassword(psw);
    myAccountPage.clickBack();
    myAccountPage.titlePageTest(myAccountTitlePage);
  });

  it("My Account Modify Your Address Book Entries New Address Back Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const company = faker.company.name();
    const address1stLine = faker.address.streetAddress();
    const address2ndLine = faker.address.secondaryAddress();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();
    const country = openCartData.country;
    const value = openCartData.value;
    const state = faker.address.state();
    const addressBookEntries = openCartData.addressBookEntries;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.modifyYourAddressBookEntries();
    myAccountPage.clickNewAddress();
    myAccountPage.doNewAddress(
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
    );
    myAccountPage.clickBack();
    myAccountPage.validatePageLinkText(addressBookEntries);
  });

  it("My Account Modify Your Address Book Entries New Address Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const company = faker.company.name();
    const address1stLine = faker.address.streetAddress();
    const address2ndLine = faker.address.secondaryAddress();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();
    const country = openCartData.country;
    const value = openCartData.value;
    const state = faker.address.state();
    const successAddressHasBeenSuccessfullyAdded =
      openCartData.successAddressHasBeenSuccessfullyAdded;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.modifyYourAddressBookEntries();
    myAccountPage.clickNewAddress();
    receivedFullName = myAccountPage.doNewAddress(
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
    );
    cy.log(receivedFullName);
    myAccountPage.validateSuccessMessage(
      successAddressHasBeenSuccessfullyAdded
    );
  });

  it("My Account Modify Your Address Book Entries Edit Address Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const company = faker.company.name();
    const address1stLine = faker.address.streetAddress();
    const address2ndLine = faker.address.secondaryAddress();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();
    const country = openCartData.country;
    const value = openCartData.value;
    const state = faker.address.state();
    const successAddressHasBeenSuccessfullyUpdated =
      openCartData.successAddressHasBeenSuccessfullyUpdated;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.modifyYourAddressBookEntries();
    updatedFullName = myAccountPage.editNewAddress(
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
    );
    cy.log(updatedFullName);
    myAccountPage.validateSuccessMessage(
      successAddressHasBeenSuccessfullyUpdated
    );
  });

  it("My Account Modify Your Address Book Entries You Can Not Delete Default Address Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const warningCanNotDeleteDefaultAddress =
      openCartData.warningCanNotDeleteDefaultAddress;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.modifyYourAddressBookEntries();
    deletedFullName =
      myAccountPage.deleteNewAddressCanNotDelete(updatedFullName);
    cy.log(deletedFullName);
    myAccountPage.validateWarningAlertMessage(
      warningCanNotDeleteDefaultAddress
    );
  });

  it.skip("My Account Modify Your Address Book Entries Delete Address Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    myAccountPage = new MyAccountPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const successAddressHasBeenSuccessfullyDeleted =
      openCartData.successAddressHasBeenSuccessfullyDeleted;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    myAccountPage.modifyYourAddressBookEntries();
    deletedFullName = myAccountPage.deleteNewAddress(updatedFullName);
    cy.log(deletedFullName);
    myAccountPage.validateSuccessMessage(
      successAddressHasBeenSuccessfullyDeleted
    );
  });
});
