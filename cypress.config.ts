import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      }
    },
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      config.defaultCommandTimeout = 10000;
      config.responseTimeout = 20000;
      config.pageLoadTimeout = 60000;
      return config;
    },
  }
})