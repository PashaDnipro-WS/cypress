const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'pi6oqh',
  //allowCypressEnv: true,

  e2e: {
    baseUrl: "https://telnyx.com",

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    },
  },
});
