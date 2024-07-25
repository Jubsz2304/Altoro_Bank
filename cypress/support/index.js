import './commands';

import '@shelex/cypress-allure-plugin'

Cypress.on('uncaught:exception', (err, runnable) => {
  cy.log(err);
  cy.allure().attachment('Screenshot', () => cy.screenshot());
  return false;
});





