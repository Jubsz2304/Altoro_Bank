// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// cypress/support/commands.js

const fs = require('fs-extra');
const path = require('path');

Cypress.Commands.add('checkAndClearAllureResults', (maxFiles = 10) => {
  const allureResultsDir = path.join(__dirname, '..', '..', 'allure-results');

  cy.task('checkAndClearAllureResults', { allureResultsDir, maxFiles });
});

module.exports = (on, config) => {
  on('task', {
    checkAndClearAllureResults({ allureResultsDir, maxFiles }) {
      if (fs.existsSync(allureResultsDir)) {
        const files = fs.readdirSync(allureResultsDir);
        if (files.length >= maxFiles) {
          files.forEach(file => {
            fs.removeSync(path.join(allureResultsDir, file));
          });
        }
      } else {
        fs.mkdirSync(allureResultsDir);
      }
      return null;
    }
  });
};
