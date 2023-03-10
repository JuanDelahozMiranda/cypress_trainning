import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    responseTimeout: 20000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      return config;
    },
  }
})