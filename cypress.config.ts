import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    screenshotOnRunFailure: false,
    baseUrl: 'https://digital-store-jmv.vercel.app',
  },
})
