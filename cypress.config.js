const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  failOnStatusCode: false,

  env: {
    url: "https://naveenautomationlabs.com/opencart/",
  },

  retries: {
    runMode: 2,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/tests/*.js",
  },
});
