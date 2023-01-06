class YourStorePage {
  // Locators:
  logo = "img[title='naveenopencart']";
  currencyBtn = "button[class='btn btn-link dropdown-toggle']";
  currencyList = "ul[class='dropdown-menu'] li";
  currencySign = "strong";
  phoneIcon = "i[class='fa fa-phone']";
  myAccount = "a[title='My Account']";
  registerBtn =
    "ul[class='dropdown-menu dropdown-menu-right'] li:first-of-type";
  registerAccountLink = "#content h1";
  loginBtn = "ul[class='dropdown-menu dropdown-menu-right'] li:last-of-type";
  loginLink = "ul[class='breadcrumb'] li:last-of-type a";
  shoppingCartBtn = "ul[class='list-inline'] li:nth-of-type(4)";
  checkOutBtn = "ul[class='list-inline'] li:nth-of-type(5)";
  navigationBars = "ul[class='nav navbar-nav'] li";
  productList =
    "div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12'] div[class='caption'] h4 a";
  ads = "div[class='carousel swiper-viewport'] div div img";
  searchField = "input[name='search']";
  searchBtn = "span[class='input-group-btn']";

  // Validate Title Page:
  titlePageTest(titlePage) {
    cy.title().should("equal", titlePage);
    cy.log(" =====> " + titlePage + " <===== ");
    return this;
  }

  // Logo Should be Visible:
  logoShouldBeVisible() {
    cy.get(this.logo).should("be.visible");
  }

  // Select Currency:
  selectCurrency(currency, currencySign) {
    cy.get(this.currencyBtn).click();
    cy.get(this.currencyList).each((ele, index) => {
      const currencyListText = ele.text();
      cy.log(" =====> " + currencyListText + " <===== ");
      if (currencyListText.includes(currency)) {
        cy.get(this.currencyList).eq(index).click();
        cy.get(this.currencySign, { timeout: 500 }).should(
          "have.text",
          currencySign
        );
      }
    });
  }

  // Contact Us:
  clickOnPhoneIcon() {
    cy.get(this.phoneIcon).click();
  }

  // Proceed To Register Page:
  proceedToRegisterPage() {
    cy.get(this.myAccount).click();
    cy.get(this.registerBtn).click();
  }

  // Proceed To Register Page:
  proceedToLoginPage() {
    cy.get(this.myAccount).click();
    cy.get(this.loginBtn).click();
  }

  // Click On The Shopping Cart:
  clickOnTheShoppingCart() {
    cy.get(this.shoppingCartBtn).click();
  }

  // Click On The CheckOut Page:
  clickOnTheCheckOutPage() {
    cy.get(this.checkOutBtn).click();
    return this;
  }

  // Click On The CheckOut Page:
  getNavigationBars(type) {
    cy.get(this.navigationBars).each((el, ind) => {
      const barsTxt = el.text();
      if (barsTxt.includes(type)) {
        cy.get(this.navigationBars)
          .eq(ind)
          .then((txt) => {
            let typeProductTxt = txt.text();
            cy.log(" =====> " + typeProductTxt + " <===== ");
          });
      }
    });
  }

  // Get Product List:
  getProductList(productName) {
    cy.get(this.productList).each((ele, index) => {
      const productListTxt = ele.text();
      cy.log(productListTxt);
      if (productListTxt.includes(productName)) {
        cy.get(this.productList)
          .eq(index)
          .then((el) => {
            let txt = el.text();
            cy.log(" =====> " + txt + "<===== ");
          });
      }
    });
  }

  // Get Advertises Quantity/;
  adsQuantity(qty) {
    cy.scrollTo("bottom");
    cy.get(this.ads).should("have.length", qty);
    cy.get(this.ads).then(($el) => {
      let qty = $el.length;
      cy.log(
        " =====> The Quantity of Advertise is " + qty + " Companies. <===== "
      );
    });
  }

  // Get Brand Names:
  getAds(brand) {
    cy.get(this.ads).each(($el) => {
      if ($el.attr("alt").includes(brand)) {
        cy.log(" =====> " + brand + " <===== ");
      }
    });
  }

  // Perform Search Product
  doSearch(productName) {
    cy.get(this.searchField).type(productName);
    cy.get(this.searchBtn).click();
  }
}

export default YourStorePage;
