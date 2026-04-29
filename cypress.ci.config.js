const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "pi6oqh",

  video: true,
  screenshotOnRunFailure: true,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    baseUrl: "https://telnyx.com",

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});