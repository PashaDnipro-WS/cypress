const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.admlucid.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
