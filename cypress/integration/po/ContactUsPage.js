class ContactUsPage {
  contactUsLink = "#content h1";
  yourName = "#input-name";
  email = "#input-email";
  enquiry = "#input-enquiry";
  submit = "input[type='submit']";
  getSuccessMessage = "#content p";
  dangerAlert = "div[class='text-danger']";

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

  validateAlertMessage(successMessageTxt) {
    cy.get(this.dangerAlert).then((txt) => {
      const successTxt = txt.text();
      if (successMessageTxt === successTxt) {
        cy.log(" =====> " + successTxt + " <===== ");
      } else {
        cy.get(this.getSuccessMessage).should("have.text", successMessageTxt);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  validatePageLinkText(linkText) {
    cy.get(this.contactUsLink).then((txt) => {
      const pageLinkTxt = txt.text();
      if (linkText === pageLinkTxt) {
        cy.log(" =====> " + pageLinkTxt + " <===== ");
      } else {
        cy.get(this.contactUsLink).should("have.text", linkText);
        cy.log("Provide The Right Locator For The Page Link");
      }
    });
  }

  createString(lengthOfString) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomString = "";
    let leng = lengthOfString;
    for (let i = 0; i < leng; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);
      randomString += characters[randomNumber];
    }
    return randomString;
  }

  // Validate Title Page:
  titlePageTest(titlePage) {
    cy.title().should("equal", titlePage);
    cy.log(" =====> " + titlePage + " <===== ");
    return this;
  }

  doContactUs(yourName, email, enquiry) {
    cy.get(this.yourName).type(yourName);
    cy.get(this.email).type(email);
    cy.get(this.enquiry).type(enquiry);
    cy.get(this.submit).click();
  }
}
export default ContactUsPage;
