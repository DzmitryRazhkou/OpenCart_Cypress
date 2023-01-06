import ContactUsPage from "../po/ContactUsPage";
import YourStorePage from "../po/YourStorePage";
import RegisterPage from "../po/RegisterPage";
import LoginPage from "../po/LoginPage";
import ShoppingCartPage from "../po/ShoppingCartPage";

describe("Your Store Page Features", () => {
  let openCartData;
  let yourStorePage;
  let contactUsPage;
  let registerPage;
  let loginPage;
  let shoppingCartPage;

  beforeEach(() => {
    cy.launch();
    cy.fixture("example").then((data) => {
      openCartData = data;
      return openCartData;
    });
  });
  afterEach(() => {});

  it("Your Store Page Title Page Test", () => {
    yourStorePage = new YourStorePage();
    const yourStorePageTitlePage = openCartData.yourStorePageTitlePage;
    yourStorePage.titlePageTest(yourStorePageTitlePage);
  });

  it("Your Store Page Logo Test", () => {
    yourStorePage = new YourStorePage();
    yourStorePage.logoShouldBeVisible();
  });

  it("Your Store Page Currency Select Test", () => {
    yourStorePage = new YourStorePage();
    const currency = openCartData.currency;
    const currencySign = openCartData.currencySign;
    yourStorePage.selectCurrency(currency, currencySign);
  });

  it("Your Store Page Currency Select Test", () => {
    yourStorePage = new YourStorePage();
    const currency = openCartData.currency;
    const currencySign = openCartData.currencySign;
    yourStorePage.selectCurrency(currency, currencySign);
  });

  it("Click On The Contact Us Icon Test", () => {
    yourStorePage = new YourStorePage();
    contactUsPage = new ContactUsPage();
    const txtLink = openCartData.contactUsLink;

    yourStorePage.clickOnPhoneIcon();
    contactUsPage.validatePageLinkText(txtLink);
    cy.goBack();
  });

  it("Click On The Register Page Test", () => {
    yourStorePage = new YourStorePage();
    registerPage = new RegisterPage();
    const txtLink = openCartData.registerAccountLink;

    yourStorePage.proceedToRegisterPage();
    registerPage.validatePageLinkText(txtLink);
    cy.goBack();
  });

  it("Click On The Login Page Test", () => {
    yourStorePage = new YourStorePage();
    loginPage = new LoginPage();
    const txtLink = openCartData.loginLink;

    yourStorePage.proceedToLoginPage();
    loginPage.validatePageLinkText(txtLink);
    cy.goBack();
  });

  it("Click On The Shopping Cart Test", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const txtLink = openCartData.shoppingCartLink;

    yourStorePage.clickOnTheShoppingCart();
    shoppingCartPage.validatePageLinkText(txtLink);
    cy.goBack();
  });

  it("Click On The CheckOut Test", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const txtLink = openCartData.shoppingCartLink;

    yourStorePage.clickOnTheCheckOutPage();
    shoppingCartPage.validatePageLinkText(txtLink);
    cy.goBack();
  });

  it("Validate Navigation Bars", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const typeOfProduct = openCartData.typeOfProduct;
    yourStorePage.getNavigationBars(typeOfProduct);
  });

  it("Featured Test", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const typeOfProduct = openCartData.productName;
    yourStorePage.getProductList(typeOfProduct);
  });

  it("Advertise Quantity Test", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const qty = openCartData.qty;
    yourStorePage.adsQuantity(qty);
  });

  it("Advertise Test", () => {
    yourStorePage = new YourStorePage();
    shoppingCartPage = new ShoppingCartPage();
    const brandName = openCartData.brandName;
    yourStorePage.getAds(brandName);
  });
});
