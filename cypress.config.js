const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '33o5p9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://test.simplyanalytics.net/login.html?institution",
    modifyObstructiveCode: true,
    experimentalSourceRewriting: true,
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false
  },
});
