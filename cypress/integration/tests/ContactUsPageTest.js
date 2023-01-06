import ContactUsPage from "../po/ContactUsPage";
import YourStorePage from "../po/YourStorePage";
import { faker } from "@faker-js/faker";

Cypress.session.clearAllSavedSessions();
describe("Your Store Page Features", () => {
  let openCartData;
  let yourStorePage;
  let contactUsPage;

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

  it("Contact Us Page Title Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();
    const contactUsTitlePage = openCartData.contactUsPageTitlePage;
    yourStorePage.clickOnPhoneIcon();
    contactUsPage.titlePageTest(contactUsTitlePage);
  });

  it("Contact Us With Valid Data Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();

    const yourName = faker.name.fullName();
    const email = faker.internet.email();
    const enquiry = faker.address.streetAddress();
    const successMessage = openCartData.successMessage;

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateSuccessMessage(successMessage);
  });

  it("Contact Us With Invalid Your Name Minimum Value Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();
    const alertMessage = openCartData.alertMessageYourName;
    const lengthOfString = openCartData.lengthYourNameMinimumValue;

    const yourName = contactUsPage.createString(lengthOfString);
    const email = faker.internet.email();
    const enquiry = faker.address.streetAddress();

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateAlertMessage(alertMessage);
  });

  it("Contact Us With Invalid Your Name Maximum Value Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();
    const alertMessage = openCartData.alertMessageYourName;
    const lengthOfString = openCartData.lengthYourNameMaximumValue;

    const yourName = contactUsPage.createString(lengthOfString);
    const email = faker.internet.email();
    const enquiry = faker.address.streetAddress();

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateAlertMessage(alertMessage);
  });

  it("Contact Us With Invalid Email Address Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();

    const yourName = faker.name.fullName();
    const email = faker.internet.email().replace("@", "");
    const enquiry = faker.address.streetAddress();
    const alertMessage = openCartData.alertMessage;

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateAlertMessage(alertMessage);
  });

  it("Contact Us With Invalid Enquiry Minimum Value Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();
    const alertMessage = openCartData.alertMessageEnquiry;
    const lengthOfString = openCartData.lengthEnquiryMinimumValue;

    const yourName = faker.name.fullName();
    const email = faker.internet.email();
    const enquiry = contactUsPage.createString(lengthOfString);

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateAlertMessage(alertMessage);
  });

  it("Contact Us With Invalid Enquiry Maximum Value Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();

    const yourName = faker.name.fullName();
    const email = faker.internet.email();
    const lengthOfString = openCartData.lengthEnquiryMaximumValue;
    const enquiry = contactUsPage.createString(lengthOfString);
    const alertMessage = openCartData.alertMessageEnquiry;

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.doContactUs(yourName, email, enquiry);
    contactUsPage.validateAlertMessage(alertMessage);
  });
});
