import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://play1.automationcamp.ir",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
       stage:'https://stage.pasv.us/course',
       prod:'https://coding.pasv.us/course',
       tekst:'Hello World!',
       demoQA:'https://demoqa.com/',
       base:'https://uitestingplayground.com',
       test:'https://play1.automationcamp.ir/expected_conditions.html'
    }
  },
  defaultCommandTimeout: 16_000,
});
