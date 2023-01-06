import RegisterPage from "../po/RegisterPage";
import YourStorePage from "../po/YourStorePage";
import { faker } from "@faker-js/faker";

Cypress.session.clearAllSavedSessions();
describe("Register Page Features", () => {
  let openCartData;
  let yourStorePage;
  let registerPage;

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

  it("Validate Register Title Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();
    const registerTitlePage = openCartData.registerTitlePage;

    yourStorePage.proceedToRegisterPage();
    registerPage.titlePageTest(registerTitlePage);
  });

  it("Do Register New Customer Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password();
    const successMessage = openCartData.success;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateSuccessMessage(successMessage);
  });

  it("Do Register Existing Customer Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = openCartData.firstName;
    const lastName = openCartData.lastName;
    const email = openCartData.email;
    const phone = openCartData.phone;
    const psw = openCartData.password;
    const warningAlert = openCartData.warning;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateWarningMessage(warningAlert);
  });

  it("Do Register New Customer With Minimum Phone Number Value Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number("##");
    const psw = faker.internet.password();
    const telephoneAlertMessage = openCartData.telephoneAlert;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateAlertMessage(telephoneAlertMessage);
  });

  it("Do Register New Customer With Maximum Phone Number Value Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number("##################################");
    const psw = faker.internet.password();
    const telephoneAlertMessage = openCartData.telephoneAlert;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateAlertMessage(telephoneAlertMessage);
  });

  it("Do Register New Customer With Minimum Password Value Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password(3);
    const passwordAlertMessage = openCartData.passwordAlert;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateAlertMessage(passwordAlertMessage);
  });

  it("Do Register New Customer With Maximum Password Value Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password(41);
    const passwordAlertMessage = openCartData.passwordAlert;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegister(firstName, lastName, email, phone, psw);
    registerPage.validateAlertMessage(passwordAlertMessage);
  });

  it("Do Register New Customer With Dismatched Password Value Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password();
    const pswConfirm = faker.internet.password();
    const passwordDismatchedAlertMessage = openCartData.passwordDismatchedAlert;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegisterDismatchPsw(
      firstName,
      lastName,
      email,
      phone,
      psw,
      pswConfirm
    );
    registerPage.validateAlertMessage(passwordDismatchedAlertMessage);
  });

  it("Do Register New Customer With Minimum Password Value/Dismatched Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password(2);
    const pswConfirm = faker.internet.password(3);
    const passwordMinimumValueDismatchedAlertMessage =
      openCartData.passwordMinimumValueDismatchedAlertMessage;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegisterDismatchPsw(
      firstName,
      lastName,
      email,
      phone,
      psw,
      pswConfirm
    );
    registerPage.validateAlertMessage(
      passwordMinimumValueDismatchedAlertMessage
    );
  });

  it("Do Register New Customer Without Agreement Policy Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const psw = faker.internet.password();
    const agreementPolicyMessage = openCartData.agreementPolicy;

    yourStorePage.proceedToRegisterPage();
    registerPage.doRegisterWithoutAgreementPolicy(
      firstName,
      lastName,
      email,
      phone,
      psw
    );
    registerPage.validateWarningMessage(agreementPolicyMessage);
  });

  it("Forgot Password Validate Page Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();
    const forgotPasswordLink = openCartData.forgotPasswordLink;

    yourStorePage.proceedToRegisterPage();
    registerPage.clickOnTheForgottenPsw();
    registerPage.validatePageLinkText(forgotPasswordLink);
  });

  it("Send Email Forgot Password Existing Customer Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();
    const emailForSend = openCartData.email;
    const emailConfirmationLink = openCartData.emailConfirmationLink;

    yourStorePage.proceedToRegisterPage();
    registerPage.clickOnTheForgottenPsw();
    registerPage.sendEmailForPassword(emailForSend);
    registerPage.validateSuccessAlertMessage(emailConfirmationLink);
  });

  it("Send Email Forgot Password New Customer Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();
    const emailForSend = faker.internet.email();
    const emailAddressWasNotFound = openCartData.emailAddressWasNotFound;

    yourStorePage.proceedToRegisterPage();
    registerPage.clickOnTheForgottenPsw();
    registerPage.sendEmailForPassword(emailForSend);
    registerPage.validateWarningMessage(emailAddressWasNotFound);
  });
});
