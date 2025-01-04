import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    requestTimeout: 10000,
    pageLoadTimeout: 10000,
  },
})
