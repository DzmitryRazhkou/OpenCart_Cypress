import LoginPage from "../po/LoginPage";
import YourStorePage from "../po/YourStorePage";
import { faker } from "@faker-js/faker";

Cypress.session.clearAllSavedSessions();
describe("Your Store Page Features", () => {
  let openCartData;
  let yourStorePage;
  let loginPage;

  before(() => {
    cy.fixture("example").then((data) => {
      openCartData = data;
      return openCartData;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.launch();
  });

  afterEach(() => {
    // cy.goBack();
  });

  it("Log Web Browser Information Test", () => {
    cy.log(" =====> The Browser Name is " + Cypress.browser.name + " <===== ");
    cy.log(
      " =====> The Browser Name is " + Cypress.browser.family + " <===== "
    );
    cy.log(
      " =====> Web Browser Without a Graphical User Interface ---> " +
        Cypress.browser.isHeaded +
        " <===== "
    );
    cy.log(
      " =====> The Browser Path is ---> " + Cypress.browser.path + " <===== "
    );
    cy.log(
      " =====> The Browser Version is ---> " +
        Cypress.browser.version +
        " <===== "
    );
    cy.log(" =====> " + Cypress.arch + " <===== ");
  });

  it("Your Login Page Title Test - Slow Type", { keystrokeDelay: 300 }, () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();

    const email = openCartData.email;
    const psw = openCartData.password;
    const myAccountLink = openCartData.myAccountLink;

    yourStorePage.proceedToLoginPage();
    loginPage.doLogin(email, psw);
    loginPage.validatePageLinkText(myAccountLink);
  });
});
