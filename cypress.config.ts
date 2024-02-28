import { defineConfig } from "cypress";

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    //baseUrl: "https://play1.automationcamp.ir",
    setupNodeEvents(on, config) {
      //reporter =cypress-mochawesome-reporter;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      //reading excel document from fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env: {
      stage: 'https://stage.pasv.us',
      prod: 'https://coding.pasv.us/course',
      tekst: 'Hello World!',
      demoQA: 'https://demoqa.com',
      base: 'https://uitestingplayground.com',
      test: 'https://play1.automationcamp.ir/expected_conditions.html',
      email: "poletkhv2013@gmail.com",
      password: "Alisa992",
      herokuapp: "https://the-internet.herokuapp.com",
      
    },
    viewportWidth: 1200,
    viewportHeight: 1400,
  },
  retries: {
    runMode: 3,
    openMode: 2,
  },
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 16_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'LecturePASV',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
