const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.net/admin/login.php",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber());
    },
  },
});
