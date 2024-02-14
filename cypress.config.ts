import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    
    baseUrl: "https://play1.automationcamp.ir",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
       stage:'https://stage.pasv.us',
       prod:'https://coding.pasv.us/course',
       tekst:'Hello World!',
       demoQA:'https://demoqa.com',
       base:'https://uitestingplayground.com',
       test:'https://play1.automationcamp.ir/expected_conditions.html',
      email: "poletkhv2013@gmail.com",
      password: "Alisa992",
      herokuapp:"https://the-internet.herokuapp.com"
    },
    viewportWidth: 1200,
    viewportHeight: 1400,
  },
  retries: {
    runMode: 2,
    openMode: 2,
  },
  defaultCommandTimeout: 16_000,
});
