import { defineConfig } from "cypress";
import plugin from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // the following commented code gives an error with require statement
      // require('cypress-mochawesome-reporter/plugin')(on)
      plugin(on);
    },
  },
});
