// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add("launch", () => {
  cy.viewport("macbook-16");
  cy.log(" =====> User navigates on the Your Store Page <===== ");
  cy.visit(Cypress.env("url"));
});

Cypress.Commands.add("goBack", () => {
  cy.get(".breadcrumb > :nth-child(1)").click();
  cy.log(" =====> User goes back on the Your Store Page <===== ");
  cy.title().should("equal", "Your Store");
});

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
