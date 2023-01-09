const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dddqcq",
  chromeWebSecurity: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  failOnStatusCode: false,

  env: {
    url: "https://naveenautomationlabs.com/opencart/",
  },

  retries: {
    runMode: 2,
    openMode: 1,
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  reporterEnabled: "spec, mocha-junit-reporter",
  mochaJunitReporterReporterOptions: {
    mochaFile: "cypress/results/junit/results-[hash].xml",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/tests/*.js",
  },
});
