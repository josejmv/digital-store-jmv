import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    viewportWidth: 1440,
    setupNodeEvents() {},
    screenshotOnRunFailure: false,
    baseUrl: 'https://digital-store-jmv.vercel.app',
  },
})
