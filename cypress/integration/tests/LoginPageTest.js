import LoginPage from "../po/LoginPage";
import YourStorePage from "../po/YourStorePage";
import { faker } from "@faker-js/faker";

Cypress.session.clearAllSavedSessions();
describe("Login Page Features", () => {
  let openCartData;
  let yourStorePage;
  let loginPage;

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

  it("Your Login Page Title Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    const loginTitlePage = openCartData.loginTitlePage;

    yourStorePage.proceedToLoginPage();
    loginPage.titlePageTest(loginTitlePage);
  });

  it("Login Valid Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const myAccountLink = openCartData.myAccountLink;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validatePageLinkText(myAccountLink);
  });

  it("Login Not Existing Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = faker.internet.email();
    const psw = faker.internet.password();
    const warningNoMatchForEmailAddressAndOrPassword =
      openCartData.warningNoMatchForEmailAddressAndOrPassword;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validateWarningMessage(
      warningNoMatchForEmailAddressAndOrPassword
    );
  });

  it("Login Wrong Email Valid Password Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = faker.internet.email().replace("@", "");
    const psw = openCartData.password;
    const warningNoMatchForEmailAddressAndOrPassword =
      openCartData.warningNoMatchForEmailAddressAndOrPassword;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validateWarningMessage(
      warningNoMatchForEmailAddressAndOrPassword
    );
  });

  it("Login Valid Email Wrong Password Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = openCartData.email;
    const psw = faker.internet.password();
    const accountExceedAllowedAttempts =
      openCartData.accountExceedAllowedAttempts;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validateWarningMessage(accountExceedAllowedAttempts);
  });

  it("Login Between One To Four Valid Password Credentials", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const numberBetweenOneToFour = faker.datatype.number({ min: 1, max: 4 });
    const psw = openCartData.password;
    const accountExceedAllowedAttempts =
      openCartData.accountExceedAllowedAttempts;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(numberBetweenOneToFour, psw);
    loginPage.validateWarningMessage(accountExceedAllowedAttempts);
  });

  it("Login Valid Email Just Numbers Password Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = openCartData.email;
    const justPswNumbers = faker.datatype.number({ min: 1, max: 10000000000 });
    const warningNoMatchForEmailAddressAndOrPassword =
      openCartData.warningNoMatchForEmailAddressAndOrPassword;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, justPswNumbers);
    loginPage.validateWarningMessage(
      warningNoMatchForEmailAddressAndOrPassword
    );
  });

  it("Login Between One To Four Email Just Numbers Password Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const numberBetweenOneToFour = faker.datatype.number({ min: 1, max: 4 });
    const justPswNumbers = faker.datatype.number({ min: 1, max: 10000000000 });
    const accountExceedAllowedAttempts =
      openCartData.accountExceedAllowedAttempts;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(numberBetweenOneToFour, justPswNumbers);
    loginPage.validateWarningMessage(accountExceedAllowedAttempts);
  });

  it("Login Invalid Credentials Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = faker.internet.email().replace("@", "");
    const psw = faker.internet.password();
    const warningNoMatchForEmailAddressAndOrPassword =
      openCartData.warningNoMatchForEmailAddressAndOrPassword;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validateWarningMessage(
      warningNoMatchForEmailAddressAndOrPassword
    );
  });

  it("Log Out Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const logOutLink = openCartData.logOutLink;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.doLogOut();
    loginPage.validateLogOutLinkText(logOutLink);
  });
});
